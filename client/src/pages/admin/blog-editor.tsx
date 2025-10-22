import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useLocation, useRoute } from "wouter";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { canPublishContent, canManageCategories } from "@/lib/permissions";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { 
  Save, Eye, ArrowLeft, Loader2, FileText, 
  Calendar, User, Hash, Globe, Upload, Image as ImageIcon, AlertTriangle, X, Plus, Settings, Search, ChevronRight, ChevronLeft, Code2, Wand2, Table as TableIcon, HelpCircle, Blocks
} from "lucide-react";
import BlockEditor from '@/components/admin/block-editor';
import { OutputData } from '@editorjs/editorjs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getBlogUrl } from "@/lib/blog-utils";
import type { AdminUser, Media, ContentBlock } from "@shared/schema";
import MediaSelectionModal from "@/components/admin/media-selection-modal";
import ContentBlocks from "@/components/admin/content-blocks";
import ContentBlocksRenderer from "@/components/content-blocks-renderer";
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-tomorrow.css';
import { html as beautifyHtml } from 'js-beautify';

// Categories will be loaded dynamically from API

const blogSchema = z.object({
  title: z.string().optional().or(z.literal("")),
  slug: z.string().optional().or(z.literal("")),
  excerpt: z.string().optional().or(z.literal("")),
  content: z.string().optional().or(z.literal("")),
  contentBlocks: z.array(z.any()).optional(),
  categoryIds: z.array(z.number()).optional(),
  category: z.string().optional().or(z.literal("")), // Keep for backward compatibility
  metaDescription: z.string().optional().or(z.literal("")),
  focusKeyword: z.string().optional().or(z.literal("")),
  featuredImage: z.string().optional().or(z.literal("")),
  featuredImageAlt: z.string().optional().or(z.literal("")),
  featuredImageTitle: z.string().optional().or(z.literal("")),
  featuredImageOriginalName: z.string().optional().or(z.literal("")),
  publishedAt: z.string().optional().or(z.literal("")),
  isPublished: z.boolean().default(false),
  status: z.enum(["draft", "in_review", "published", "archived"]).default("draft"),
  authorId: z.number().optional(),
});

const publishSchema = blogSchema.extend({
  title: z.string().min(1, "Title is required for publishing"),
  slug: z.string().min(1, "Slug is required for publishing"),
  excerpt: z.string().min(1, "Excerpt is required for publishing"),
  content: z.string().min(1, "Content is required for publishing"),
});

type BlogForm = z.infer<typeof blogSchema>;

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  contentBlocks?: ContentBlock[];
  category: string;
  categoryIds?: number[];
  metaDescription?: string;
  focusKeyword?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  featuredImageTitle?: string;
  featuredImageOriginalName?: string;
  publishedAt?: string;
  isPublished: boolean;
  approvalStatus?: 'approved' | 'not_approved' | 'editable';
  approvedAt?: string;
  approverId?: number;
  authorId?: number;
  createdAt: string;
  updatedAt: string;
}

export default function BlogEditor() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/admin/blog-editor/:id?");
  const isEditing = Boolean(params?.id && params.id !== 'new');
  const blogId = params?.id && params.id !== 'new' ? parseInt(params.id) : undefined;

  // Check for existing editing sessions when opening a post
  const checkEditingConflicts = async (postId: number) => {
    try {
      const response = await fetch(`/api/admin/posts/${postId}/editing-sessions`, {
        headers: getAuthHeaders(),
      });
      
      if (response.ok) {
        const sessions = await response.json();
        const otherUsersSessions = sessions.filter((session: any) => session.userId !== adminUser?.id);
        
        if (otherUsersSessions.length > 0) {
          const conflictUser = otherUsersSessions[0].user;
          setConflictingUser(conflictUser);
          
          // If conflicting user is admin and current user is not admin, show permission request
          if (conflictUser.roles?.includes('admin') && !adminUser?.roles?.includes('admin')) {
            setShowConflictDialog(true);
            return false; // Block editing
          }
        }
      }
      return true; // Allow editing
    } catch (error) {
      console.error('Error checking editing conflicts:', error);
      return true; // Allow editing on error
    }
  };

  // Start editing session (with robust safeguards to prevent chaos)
  const startEditingSession = async (postId: number) => {
    try {
      const response = await fetch('/api/admin/editing-sessions', {
        method: 'POST',
        headers: {
          ...getAuthHeaders(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId }),
      });
      
      if (response.ok) {
        const session = await response.json();
        setCurrentSessionId(session.id);
        console.log('Session created successfully:', session.id);
        
        // Start heartbeat to maintain session
        startSessionHeartbeat(session.id);
      }
    } catch (error) {
      console.error('Error creating editing session:', error);
    }
  };

  // Heartbeat to keep session alive
  const startSessionHeartbeat = (sessionId: number) => {
    // Clear any existing heartbeat
    if (sessionHeartbeatRef.current) {
      clearInterval(sessionHeartbeatRef.current);
    }

    // Send heartbeat every 30 seconds
    sessionHeartbeatRef.current = setInterval(async () => {
      try {
        await fetch(`/api/admin/editing-sessions/${sessionId}/activity`, {
          method: 'PUT',
          headers: getAuthHeaders(),
        });
      } catch (error) {
        console.error('Heartbeat failed:', error);
      }
    }, 30000);
  };

  // End editing session
  const endEditingSession = async () => {
    if (currentSessionId) {
      try {
        await fetch(`/api/admin/editing-sessions/${currentSessionId}`, {
          method: 'DELETE',
          headers: getAuthHeaders(),
        });
        console.log('Session ended successfully');
      } catch (error) {
        console.error('Error ending session:', error);
      }
      
      // Clear heartbeat
      if (sessionHeartbeatRef.current) {
        clearInterval(sessionHeartbeatRef.current);
        sessionHeartbeatRef.current = null;
      }
      
      setCurrentSessionId(null);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      endEditingSession();
    };
  }, []);

  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null);
  const sessionHeartbeatRef = useRef<NodeJS.Timeout | null>(null);
  const [currentSessionId, setCurrentSessionId] = useState<number | null>(null);
  const htmlTextareaRef = useRef<HTMLTextAreaElement>(null);
  const htmlPreRef = useRef<HTMLPreElement>(null);
  const [showConflictDialog, setShowConflictDialog] = useState(false);
  const [conflictingUser, setConflictingUser] = useState<AdminUser | null>(null);
  const [conflictRequestPending, setConflictRequestPending] = useState(false);
  const [showEditRequestDialog, setShowEditRequestDialog] = useState(false);
  const [incomingEditRequest, setIncomingEditRequest] = useState<any>(null);
  const [editorMode, setEditorMode] = useState<'rich' | 'html' | 'preview' | 'blocks'>('rich');
  const [htmlContent, setHtmlContent] = useState('');
  const [editorMounted, setEditorMounted] = useState(false);
  const [editorJSData, setEditorJSData] = useState<OutputData | undefined>(undefined);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Link dialog state
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [linkNewTab, setLinkNewTab] = useState(false);
  const [linkNofollow, setLinkNofollow] = useState(false);

  // Table dialog state
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [tableRows, setTableRows] = useState('3');
  const [tableCols, setTableCols] = useState('3');
  const [tableHasHeader, setTableHasHeader] = useState(true);

  // FAQ dialog state
  const [showFaqDialog, setShowFaqDialog] = useState(false);
  const [faqItems, setFaqItems] = useState<Array<{ question: string; answer: string }>>([
    { question: '', answer: '' }
  ]);

  // HTML Block dialog state
  const [showHtmlBlockDialog, setShowHtmlBlockDialog] = useState(false);
  const [htmlBlockContent, setHtmlBlockContent] = useState({
    html: '',
    css: '',
    javascript: ''
  });

  const queryClient = useQueryClient();

  // Get auth headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  };

  // Load admin user info
  const { data: adminUser } = useQuery<AdminUser>({
    queryKey: ['/api/admin/me'],
    enabled: true,
  });

  // Load all admin users (for author selection)
  const { data: adminUsers = [] } = useQuery<AdminUser[]>({
    queryKey: ['/api/admin/users'],
    enabled: true,
  });

  // Load categories
  const { data: categories = [], isLoading: categoriesLoading, refetch: refetchCategories } = useQuery<any[]>({
    queryKey: ['/api/admin/categories'],
    enabled: true,
  });

  // Load blog post for editing
  const { data: blogPost, isLoading, error, refetch } = useQuery<BlogPost>({
    queryKey: [`/api/admin/blog-posts/${blogId}`],
    enabled: isEditing && blogId !== undefined && !isNaN(blogId),
  });

  // Load post categories
  const { data: postCategories = [] } = useQuery<any[]>({
    queryKey: [`/api/admin/blog-posts/${blogId}/categories`],
    enabled: isEditing && blogId !== undefined && !isNaN(blogId),
  });

  // Form setup
  const form = useForm<BlogForm>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      contentBlocks: [],
      categoryIds: [],
      category: "General",
      metaDescription: "",
      focusKeyword: "",
      featuredImage: "",
      featuredImageAlt: "",
      featuredImageTitle: "",
      featuredImageOriginalName: "",
      publishedAt: "",
      isPublished: false,
      status: "draft",
      authorId: adminUser?.id,
    },
  });

  const { register, handleSubmit, setValue, watch, control, formState: { errors }, getValues, reset } = form;

  const isPublished = watch("isPublished");

  // Mount editor after component mounts
  useEffect(() => {
    setEditorMounted(true);
  }, []);

  // Override Quill link button to use custom dialog
  useEffect(() => {
    if (editorRef.current) {
      const quill = editorRef.current.getEditor();
      if (quill) {
        const toolbar = quill.getModule('toolbar');
        if (toolbar) {
          toolbar.addHandler('link', () => {
            handleLinkClick();
          });
        }
      }
    }
  }, [editorMounted, editorRef.current]);

  // Update selected category IDs when post categories load
  useEffect(() => {
    if (postCategories.length > 0) {
      const categoryIds = postCategories.map(cat => cat.id);
      setSelectedCategoryIds(categoryIds);
      setValue('categoryIds', categoryIds);
    }
  }, [postCategories]);

  // Populate form when editing
  useEffect(() => {
    if (blogPost && isEditing) {
      reset({
        title: blogPost.title || "",
        slug: blogPost.slug || "",
        excerpt: blogPost.excerpt || "",
        content: blogPost.content || "",
        contentBlocks: blogPost.contentBlocks || [],
        categoryIds: blogPost.categoryIds || [],
        category: blogPost.category || "General",
        metaDescription: blogPost.metaDescription || "",
        focusKeyword: blogPost.focusKeyword || "",
        featuredImage: blogPost.featuredImage || "",
        featuredImageAlt: blogPost.featuredImageAlt || "",
        featuredImageTitle: blogPost.featuredImageTitle || "",
        featuredImageOriginalName: blogPost.featuredImageOriginalName || "",
        publishedAt: blogPost.publishedAt || "",
        isPublished: blogPost.isPublished,
        status: (blogPost as any).status || "draft",
        authorId: blogPost.authorId || adminUser?.id,
      });
      
      setHtmlContent(blogPost.content || '');
      
      // Initialize EditorJS data if contentBlocks exist
      if (blogPost.contentBlocks && Array.isArray(blogPost.contentBlocks) && blogPost.contentBlocks.length > 0) {
        setEditorJSData({
          time: Date.now(),
          blocks: blogPost.contentBlocks as any[],
          version: '2.28.0'
        });
        // Auto-switch to blocks mode if the post was created with EditorJS
        setEditorMode('blocks');
      }

      // Check for conflicts and start session
      checkEditingConflicts(blogPost.id).then(canEdit => {
        if (canEdit) {
          startEditingSession(blogPost.id);
        }
      });
    }
  }, [blogPost, isEditing, adminUser]);

  // Poll for edit requests
  useEffect(() => {
    if (!isEditing || !blogId) return;

    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch('/api/admin/edit-requests/for-me', {
          headers: getAuthHeaders(),
        });
        
        if (response.ok) {
          const requests = await response.json();
          const relevantRequest = requests.find((req: any) => req.postId === blogId && req.status === 'pending');
          
          if (relevantRequest) {
            setIncomingEditRequest(relevantRequest);
            setShowEditRequestDialog(true);
          }
        }
      } catch (error) {
        console.error('Error checking edit requests:', error);
      }
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(pollInterval);
  }, [isEditing, blogId]);

  // Handle conflict resolution
  const handleConflictResolution = async (action: 'edit' | 'quit') => {
    if (action === 'quit') {
      setShowConflictDialog(false);
      setLocation('/admin/posts');
      return;
    }

    if (action === 'edit') {
      if (conflictingUser?.roles?.includes('admin') && !adminUser?.roles?.includes('admin')) {
        // Current user allows admin to take over
        endEditingSession();
        setShowConflictDialog(false);
        setLocation('/admin/posts');
        toast({
          title: "Access Granted",
          description: "You've allowed the admin to take over editing.",
        });
      } else {
        // Send edit request
        setConflictRequestPending(true);
        try {
          const response = await fetch('/api/admin/edit-requests', {
            method: 'POST',
            headers: {
              ...getAuthHeaders(),
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              postId: blogId,
              requestedUserId: conflictingUser?.id,
            }),
          });

          if (response.ok) {
            toast({
              title: "Request Sent",
              description: "Edit request sent. Waiting for response...",
            });
            setShowConflictDialog(false);
            
            // Poll for response
            const checkResponse = setInterval(async () => {
              const statusResponse = await fetch(`/api/admin/editing-sessions/check/${currentSessionId}`, {
                headers: getAuthHeaders(),
              });
              
              if (statusResponse.ok) {
                clearInterval(checkResponse);
                startEditingSession(blogId!);
                toast({
                  title: "Access Granted",
                  description: "You can now edit the post.",
                  className: "bg-green-500 text-white",
                });
              }
            }, 2000);

            // Stop checking after 30 seconds
            setTimeout(() => clearInterval(checkResponse), 30000);
          }
        } catch (error) {
          toast({
            title: "Request Failed",
            description: "Failed to send edit request.",
            variant: "destructive",
          });
        } finally {
          setConflictRequestPending(false);
        }
      }
    }
  };

  // Handle incoming edit request
  const handleEditRequest = async (action: 'approve' | 'reject') => {
    if (!incomingEditRequest) return;

    try {
      const response = await fetch(`/api/admin/edit-requests/${incomingEditRequest.id}/${action}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
      });

      if (response.ok) {
        if (action === 'approve') {
          endEditingSession();
          setLocation('/admin/posts');
          toast({
            title: "Access Granted",
            description: "You've granted editing access to another user.",
          });
        } else {
          toast({
            title: "Request Rejected",
            description: "Edit request has been rejected.",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process edit request.",
        variant: "destructive",
      });
    } finally {
      setShowEditRequestDialog(false);
      setIncomingEditRequest(null);
    }
  };

  // Watch content for changes
  useEffect(() => {
    const subscription = watch((value) => {
      console.log('Form content changed:', value.content?.length || 0, 'characters');
      console.log('Raw blog post content:', value.content);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Create new blog post or update existing
  const saveMutation = useMutation({
    mutationFn: async (data: BlogForm) => {
      const url = isEditing ? `/api/admin/blog-posts/${blogId}` : '/api/admin/blog-posts';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await apiRequest(method, url, data);
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/blog-posts'] });
      if (isEditing) {
        queryClient.invalidateQueries({ queryKey: [`/api/admin/blog-posts/${blogId}`] });
      }
      
      toast({
        title: "Success!",
        description: isPublished ? "Blog post published successfully!" : "Blog post saved as draft!",
        className: "bg-green-500 text-white",
      });

      if (!isEditing && data.id) {
        setLocation(`/admin/blog-editor/${data.id}`);
      } else {
        refetch();
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to save blog post",
        variant: "destructive",
      });
    },
  });

  // Create category mutation
  const createCategoryMutation = useMutation({
    mutationFn: async (name: string) => {
      const response = await apiRequest('POST', '/api/admin/categories', { name });
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/categories'] });
      toast({
        title: "Category Created",
        description: `Category "${data.name}" has been created successfully.`,
        className: "bg-green-500 text-white",
      });
      setNewCategoryName("");
      refetchCategories();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create category",
        variant: "destructive",
      });
    },
  });

  // Approval status mutation
  const approvalMutation = useMutation({
    mutationFn: async (status: 'approved' | 'not_approved' | 'editable') => {
      const response = await apiRequest('PUT', `/api/admin/blog-posts/${blogId}/approval`, { approvalStatus: status });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/admin/blog-posts/${blogId}`] });
      refetch();
      toast({
        title: "Approval Status Updated",
        description: "The approval status has been updated successfully.",
        className: "bg-green-500 text-white",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update approval status",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: BlogForm) => {
    console.log('Form submitted with data:', data);
    setIsSaving(true);
    try {
      // If in Blocks mode, convert EditorJS data to HTML
      if (editorMode === 'blocks' && editorJSData) {
        // Import the HTML generator from block-editor
        const edjsHTML = (await import('editorjs-html')).default;
        const edjsParser = edjsHTML();
        
        // Custom parsers for our custom blocks
        const customParsers = {
          faq: (block: any) => {
            const items = block.data.items || [];
            let html = '<div class="faq-section" style="border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background: white; margin: 1.5rem 0;">\n';
            items.forEach((item: any, index: number) => {
              html += `  <div class="faq-item" style="border-bottom: 1px solid #e5e7eb;">\n`;
              html += `    <div class="faq-question" style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 1rem 1.5rem; background: white; cursor: pointer; font-weight: 500; color: #111827; font-size: 0.875rem; line-height: 1.5; text-align: left; transition: background-color 0.2s ease;">\n`;
              html += `      <span>${item.question}</span>\n`;
              html += `      <svg class="faq-chevron${index === 0 ? ' expanded' : ''}" viewBox="0 0 24 24" fill="none" style="width: 1rem; height: 1rem; color: #6b7280; transition: transform 0.2s ease; flex-shrink: 0; margin-left: 0.75rem; ${index === 0 ? 'transform: rotate(180deg);' : ''}">\n`;
              html += `        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/>\n`;
              html += `      </svg>\n`;
              html += `    </div>\n`;
              html += `    <div class="faq-answer" style="display: ${index === 0 ? 'block' : 'none'}; padding: ${index === 0 ? '0 1.5rem 1rem 1.5rem' : '0 1.5rem'}; background: white; color: #6b7280; font-size: 0.875rem; line-height: 1.5; border-top: 1px solid #f3f4f6; margin: 0; ${index === 0 ? 'max-height: 1000px; opacity: 1;' : 'max-height: 0px; opacity: 0;'} transition: all 0.3s ease; overflow: hidden;">\n`;
              html += `      <p style="margin: 0; padding-top: 0.5rem;">${item.answer}</p>\n`;
              html += `    </div>\n`;
              html += `  </div>\n`;
            });
            html += '</div>';
            return html;
          },
          nestedList: (block: any) => {
            const renderList = (items: any[], style: string): string => {
              const tag = style === 'ordered' ? 'ol' : 'ul';
              let html = `<${tag}>\n`;
              items.forEach(item => {
                html += `  <li>${item.content}`;
                if (item.items && item.items.length > 0) {
                  html += '\n' + renderList(item.items, item.style || style);
                }
                html += '</li>\n';
              });
              html += `</${tag}>\n`;
              return html;
            };
            
            return renderList(block.data.items, block.data.style);
          },
        };

        // Generate HTML
        const htmlArray = edjsParser.parse(editorJSData);
        
        // Process custom blocks
        let finalHtml = '';
        editorJSData.blocks.forEach((block, index) => {
          if (customParsers[block.type as keyof typeof customParsers]) {
            finalHtml += customParsers[block.type as keyof typeof customParsers](block) + '\n';
          } else if (htmlArray[index]) {
            finalHtml += htmlArray[index] + '\n';
          }
        });
        
        // Update the form data with the generated HTML
        data.content = finalHtml;
        
        // Store the raw EditorJS data as JSON in contentBlocks field (if exists)
        if ('contentBlocks' in data) {
          data.contentBlocks = editorJSData.blocks as any;
        }
      }
      
      await saveMutation.mutateAsync(data);
    } finally {
      setIsSaving(false);
    }
  };

  // Handle category selection/deselection
  const handleCategoryToggle = (categoryId: number, isSelected: boolean) => {
    let newSelectedIds: number[];
    if (isSelected) {
      newSelectedIds = [...selectedCategoryIds, categoryId];
    } else {
      newSelectedIds = selectedCategoryIds.filter(id => id !== categoryId);
    }
    setSelectedCategoryIds(newSelectedIds);
    setValue('categoryIds', newSelectedIds);
  };

  // Handle image upload
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImageUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/media/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      
      const media = await response.json();
      
      // If this is for featured image
      if (showImageUpload) {
        setValue('featuredImage', media.url);
        setValue('featuredImageAlt', media.altText || '');
        setValue('featuredImageTitle', media.title || '');
        setValue('featuredImageOriginalName', media.originalName || '');
        setShowImageUpload(false);
      } else {
        // Insert into content editor
        const quillEditor = editorRef.current?.getEditor();
        if (quillEditor) {
          const range = quillEditor.getSelection(true);
          quillEditor.insertEmbed(range.index, 'image', media.url);
          quillEditor.setSelection(range.index + 1);
        }
      }

      toast({
        title: "Image Uploaded",
        description: "Image has been uploaded successfully.",
        className: "bg-green-500 text-white",
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsImageUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // Handle media selection from library
  const handleMediaSelect = (media: Media) => {
    setValue('featuredImage', media.url);
    setValue('featuredImageAlt', media.altText || '');
    setValue('featuredImageTitle', media.title || '');
    setValue('featuredImageOriginalName', media.originalName || '');
    setShowMediaModal(false);
    
    toast({
      title: "Media Selected",
      description: "Featured image has been set.",
      className: "bg-green-500 text-white",
    });
  };

  // Handle category creation
  const handleCreateCategory = () => {
    if (newCategoryName.trim()) {
      createCategoryMutation.mutate(newCategoryName.trim());
    }
  };

  // Handle mode switch
  const handleModeSwitch = (mode: 'rich' | 'html' | 'preview' | 'blocks') => {
    if (mode === 'html' && editorMode === 'rich') {
      // Switching from rich to HTML
      const currentContent = watch('content') || '';
      setHtmlContent(currentContent);
    } else if (mode === 'rich' && editorMode === 'html') {
      // Switching from HTML to rich
      setValue('content', htmlContent);
    } else if (mode === 'preview') {
      // Switching to preview mode - sync content from current mode
      if (editorMode === 'html') {
        setValue('content', htmlContent);
      } else if (editorMode === 'rich') {
        const currentContent = watch('content') || '';
        setValue('content', currentContent);
      }
    } else if (mode === 'blocks') {
      // Switching to blocks mode - EditorJS will handle content separately
      // No need to sync content here
    }
    setEditorMode(mode);
  };

  // Handle HTML content change
  const handleHtmlChange = (value: string) => {
    setHtmlContent(value);
    setValue('content', value);
  };

  // Sync scroll between textarea and pre
  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (htmlPreRef.current && htmlTextareaRef.current) {
      htmlPreRef.current.scrollTop = htmlTextareaRef.current.scrollTop;
      htmlPreRef.current.scrollLeft = htmlTextareaRef.current.scrollLeft;
    }
  };

  // Custom link handler
  const handleLinkClick = useCallback(() => {
    const quill = editorRef.current?.getEditor();
    if (!quill) return;

    const range = quill.getSelection();
    if (!range) return;

    const text = quill.getText(range.index, range.length);
    const format = quill.getFormat(range);
    
    setLinkText(text || '');
    setLinkUrl(format.link || '');
    
    // Parse existing link attributes if editing
    if (format.link) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = `<a href="${format.link}">link</a>`;
      const anchor = tempDiv.querySelector('a');
      if (anchor) {
        setLinkNewTab(anchor.getAttribute('target') === '_blank');
        setLinkNofollow(anchor.getAttribute('rel')?.includes('nofollow') || false);
      }
    } else {
      setLinkNewTab(false);
      setLinkNofollow(false);
    }
    
    setShowLinkDialog(true);
  }, []);

  // Insert/update link with custom attributes
  const handleInsertLink = () => {
    const quill = editorRef.current?.getEditor();
    if (!quill || !linkUrl) return;

    const range = quill.getSelection(true);
    if (!range) return;

    // Build rel attribute
    let rel = 'noopener noreferrer';
    if (linkNofollow) {
      rel += ' nofollow';
    }

    // Create the link HTML with attributes
    const linkHtml = `<a href="${linkUrl}"${linkNewTab ? ' target="_blank"' : ''} rel="${rel}">${linkText || quill.getText(range.index, range.length) || linkUrl}</a>`;
    
    // Insert the link
    quill.deleteText(range.index, range.length);
    quill.clipboard.dangerouslyPasteHTML(range.index, linkHtml);
    quill.setSelection(range.index + (linkText || linkUrl).length);

    // Reset and close dialog
    setLinkUrl('');
    setLinkText('');
    setLinkNewTab(false);
    setLinkNofollow(false);
    setShowLinkDialog(false);
  };

  // Handle table insertion
  const handleTableClick = () => {
    setShowTableDialog(true);
  };

  const handleInsertTable = () => {
    const rows = parseInt(tableRows) || 3;
    const cols = parseInt(tableCols) || 3;

    // Create proper HTML table
    let tableHtml = '\n<table style="border-collapse: collapse; width: 100%; margin: 20px 0; border: 1px solid #dadada;">\n';
    
    for (let i = 0; i < rows; i++) {
      tableHtml += '  <tr>\n';
      for (let j = 0; j < cols; j++) {
        if (i === 0 && tableHasHeader) {
          tableHtml += '    <th style="border: 1px solid #dadada; padding: 12px; background-color: #f3f4f6; font-weight: 600; text-align: left;">Header</th>\n';
        } else {
          tableHtml += '    <td style="border: 1px solid #dadada; padding: 12px;">Cell</td>\n';
        }
      }
      tableHtml += '  </tr>\n';
    }
    tableHtml += '</table>\n<p><br></p>\n';

    // Stay in current mode, just append table to content
    if (editorMode === 'rich') {
      const quill = editorRef.current?.getEditor();
      if (quill) {
        const currentContent = quill.root.innerHTML || '';
        const newContent = currentContent + tableHtml;
        setValue('content', newContent);
        setHtmlContent(newContent);
        
        // Update quill with new content
        quill.clipboard.dangerouslyPasteHTML(newContent);
      }
    } else if (editorMode === 'html') {
      const textarea = htmlTextareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const currentContent = htmlContent;
        const newContent = currentContent.substring(0, start) + tableHtml + currentContent.substring(end);
        setHtmlContent(newContent);
        setValue('content', newContent);
        
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + tableHtml.length;
          textarea.focus();
        }, 0);
      }
    } else {
      // In preview mode, add to content
      const currentContent = watch('content') || '';
      const newContent = currentContent + tableHtml;
      setHtmlContent(newContent);
      setValue('content', newContent);
    }

    setShowTableDialog(false);
    setTableRows('3');
    setTableCols('3');
    setTableHasHeader(true);
    
    toast({
      title: "Table Inserted",
      description: "Table added! Switch to Preview mode to see it with borders, or HTML mode to edit it.",
      className: "bg-green-500 text-white",
    });
  };

  // Handle FAQ insertion
  const handleFaqClick = () => {
    setShowFaqDialog(true);
  };

  const handleInsertFaq = () => {
    let faqHtml = '\n<div class="faq-container" style="margin: 20px 0;">\n';
    
    faqItems.forEach((item, index) => {
      if (item.question.trim() || item.answer.trim()) {
        faqHtml += `  <details style="border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 12px; padding: 16px; background: white;">
    <summary style="cursor: pointer; font-weight: 600; font-size: 1.1em; color: #1D50C9; list-style: none; display: flex; align-items: center;">
      <span style="margin-right: 8px;">▶</span>
      ${item.question || `Question ${index + 1}`}
    </summary>
    <div style="margin-top: 12px; padding-left: 24px; color: #4b5563;">
      ${item.answer || 'Answer here...'}
    </div>
  </details>
`;
      }
    });
    
    faqHtml += '</div>\n<p><br></p>\n';

    // Always switch to HTML mode for FAQs since Quill doesn't support details/summary tags
    if (editorMode === 'rich') {
      const currentContent = watch('content') || '';
      setHtmlContent(currentContent + faqHtml);
      setValue('content', currentContent + faqHtml);
      setEditorMode('html');
      
      // Focus on the HTML textarea after mode switch
      setTimeout(() => {
        const textarea = htmlTextareaRef.current;
        if (textarea) {
          const position = (currentContent + faqHtml).length;
          textarea.selectionStart = textarea.selectionEnd = position;
          textarea.focus();
        }
      }, 100);
    } else {
      // Already in HTML mode, insert at cursor position
      const textarea = htmlTextareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const currentContent = htmlContent;
        const newContent = currentContent.substring(0, start) + faqHtml + currentContent.substring(end);
        setHtmlContent(newContent);
        setValue('content', newContent);
        
        // Set cursor position after the inserted FAQ
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + faqHtml.length;
          textarea.focus();
        }, 0);
      }
    }

    setShowFaqDialog(false);
    setFaqItems([{ question: '', answer: '' }]);
    
    toast({
      title: "FAQ Inserted",
      description: editorMode === 'rich' ? "Switched to HTML mode - FAQs work best here!" : "FAQ added to your content",
      className: "bg-green-500 text-white",
    });
  };

  const addFaqItem = () => {
    setFaqItems([...faqItems, { question: '', answer: '' }]);
  };

  const removeFaqItem = (index: number) => {
    setFaqItems(faqItems.filter((_, i) => i !== index));
  };

  const updateFaqItem = (index: number, field: 'question' | 'answer', value: string) => {
    const updated = [...faqItems];
    updated[index][field] = value;
    setFaqItems(updated);
  };

  // HTML Block handlers
  const handleHtmlBlockClick = () => {
    setShowHtmlBlockDialog(true);
  };

  const insertHtmlBlock = () => {
    const { html, css, javascript } = htmlBlockContent;
    
    // Build the HTML block with style and script tags
    let blockHtml = '<div class="custom-html-block">\n';
    
    if (css.trim()) {
      blockHtml += `  <style>\n${css}\n  </style>\n`;
    }
    
    if (html.trim()) {
      blockHtml += `${html}\n`;
    }
    
    if (javascript.trim()) {
      blockHtml += `  <script>\n${javascript}\n  </script>\n`;
    }
    
    blockHtml += '</div>\n\n';

    // IMPORTANT: HTML blocks must be inserted in HTML mode to prevent escaping
    // If in rich text mode, first convert to HTML, then insert
    let currentContent = '';
    
    if (editorMode === 'rich') {
      // Get the current rich text content and convert to HTML
      const quillContent = watch('content') || '';
      currentContent = quillContent;
      
      // Switch to HTML mode automatically
      setEditorMode('html');
      setHtmlContent(quillContent + blockHtml);
      setValue('content', quillContent + blockHtml);
      
      toast({
        title: "Switched to HTML Mode",
        description: "HTML blocks work best in HTML mode. Auto-switched for you!",
        className: "bg-blue-500 text-white",
      });
    } else {
      // Already in HTML mode
      currentContent = htmlContent || '';
      setHtmlContent(currentContent + blockHtml);
      setValue('content', currentContent + blockHtml);
    }
    
    // Reset and close
    setHtmlBlockContent({ html: '', css: '', javascript: '' });
    setShowHtmlBlockDialog(false);
    
    toast({
      title: "HTML Block Inserted",
      description: "Custom HTML block has been added to your content",
      className: "bg-green-500 text-white",
    });
  };

  // Format HTML code
  const formatHtmlCode = () => {
    console.log('Format button clicked!');
    console.log('Current HTML content:', htmlContent);
    
    if (!htmlContent || htmlContent.trim() === '') {
      toast({
        title: "No Content",
        description: "There's no HTML content to format.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const formatted = beautifyHtml(htmlContent, {
        indent_size: 2,
        indent_char: ' ',
        max_preserve_newlines: 2,
        preserve_newlines: true,
        wrap_line_length: 120,
        indent_inner_html: true,
        end_with_newline: false,
      });
      
      console.log('Formatted HTML:', formatted);
      setHtmlContent(formatted);
      setValue('content', formatted);
      toast({
        title: "Code Formatted",
        description: "HTML code has been formatted successfully.",
        className: "bg-green-500 text-white",
      });
    } catch (error) {
      console.error('Format error:', error);
      toast({
        title: "Format Error",
        description: `Failed to format HTML code: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    }
  };

  // Quill modules configuration
  const quillModules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  }), []);

  const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'align',
    'list', 'bullet', 'indent',
    'blockquote', 'code-block',
    'link', 'image'
  ];

  if (!match) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Alert className="max-w-md">
            <AlertDescription>
              Page not found
              <br />
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => setLocation("/admin/posts")}
              >
                Back to All Posts
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin text-[#1D50C9]" />
          <span className="text-gray-700">Loading blog post...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Alert className="max-w-md">
            <AlertDescription>
              Failed to load blog post: {error.message}
              <br />
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => setLocation("/admin/posts")}
              >
                Back to All Posts
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setLocation("/admin/posts")}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Posts</span>
              </Button>
              <div className="text-lg font-semibold">
                {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant={isPublished ? "default" : "secondary"}>
                {isPublished ? "Published" : "Draft"}
              </Badge>
              {isEditing && blogPost?.id && (
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                  onClick={async () => {
                    // Get the admin token
                    const token = localStorage.getItem('adminToken');
                    if (!token) {
                      toast({
                        title: "Authentication Required",
                        description: "Please log in again to preview",
                        variant: "destructive"
                      });
                      return;
                    }

                    // Create a preview URL with token in URL (temporary approach)
                    const previewUrl = `${getBlogUrl(blogPost.slug)}?preview=true&token=${encodeURIComponent(token)}`;
                    window.open(previewUrl, '_blank');
                  }}
                  data-testid="preview-blog"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </Button>
              )}
              <Button
                type="button"
                disabled={isSaving || isImageUploading}
                className="flex items-center space-x-2 bg-[#1D50C9] hover:bg-[#1642a8] text-white"
                onClick={async () => {
                  console.log('Save Draft button clicked');
                  const formValues = getValues();
                  console.log('Current form values:', formValues);
                  
                  // Set as draft
                  formValues.isPublished = false;
                  formValues.status = 'draft';
                  
                  // Submit directly without validation
                  setIsSaving(true);
                  try {
                    await saveMutation.mutateAsync(formValues);
                  } catch (error) {
                    console.error('Save draft error:', error);
                  } finally {
                    setIsSaving(false);
                  }
                }}
                data-testid="save-draft-blog"
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>{isSaving ? "Saving..." : "Save Draft"}</span>
              </Button>
              {canPublishContent(adminUser) && (
                <Button
                  type="submit"
                  form="blog-form"
                  disabled={isSaving || isImageUploading}
                  className="flex items-center space-x-2 ml-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                  onClick={(e) => {
                    console.log('Publish button clicked');
                    const formValues = getValues();
                    
                    // Validate required fields for publishing
                    if (!formValues.title || !formValues.slug || !formValues.excerpt || !formValues.content) {
                      e.preventDefault();
                      toast({
                        title: "Missing Required Fields",
                        description: "Title, slug, excerpt, and content are required for publishing.",
                        variant: "destructive",
                      });
                      return;
                    }
                    
                    setValue('isPublished', true);
                    setValue('status', 'published');
                  }}
                  data-testid="publish-blog"
                >
                  {isSaving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  <span>{isSaving ? "Publishing..." : "Publish"}</span>
                </Button>
              )}
              
              {/* Approval Status Dropdown */}
              {isEditing && blogPost && (
                <div className="ml-4 flex items-center space-x-2">
                  <Select
                    value={blogPost.approvalStatus || 'editable'}
                    onValueChange={(value: 'approved' | 'not_approved' | 'editable') => {
                      approvalMutation.mutate(value);
                    }}
                    disabled={approvalMutation.isPending}
                  >
                    <SelectTrigger 
                      className={`w-[180px] ${
                        blogPost.approvalStatus === 'approved' 
                          ? 'border-green-500 text-green-700' 
                          : blogPost.approvalStatus === 'not_approved'
                          ? 'border-red-500 text-red-700'
                          : 'border-blue-500 text-blue-700'
                      }`}
                      data-testid="select-approval-status"
                    >
                      <SelectValue>
                        <span className="flex items-center space-x-2">
                          <span>
                            {blogPost.approvalStatus === 'approved' 
                              ? '✓ Approved' 
                              : blogPost.approvalStatus === 'not_approved'
                              ? '✗ Not Approved'
                              : '✎ Editable'}
                          </span>
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approved" data-testid="option-approved" className="text-green-700">
                        <span className="flex items-center space-x-2">
                          <span>✓</span>
                          <span>Approved</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="not_approved" data-testid="option-not-approved" className="text-red-700">
                        <span className="flex items-center space-x-2">
                          <span>✗</span>
                          <span>Not Approved</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="editable" data-testid="option-editable" className="text-blue-700">
                        <span className="flex items-center space-x-2">
                          <span>✎</span>
                          <span>Editable</span>
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {approvalMutation.isPending && (
                    <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <form id="blog-form" onSubmit={handleSubmit(onSubmit)}>
          <div className={`grid grid-cols-1 ${isSidebarOpen ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-8 transition-all duration-300`}>
            
            {/* Main Content Area */}
            <div className={`space-y-6 ${isSidebarOpen ? 'lg:col-span-2' : ''}`}>
              
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-base font-semibold mb-3 block">Blog Title</Label>
                <Input
                  id="title"
                  {...register("title")}
                  placeholder="Enter an engaging title for your blog post..."
                  className="text-xl font-medium h-14 border-gray-300"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                )}
              </div>

              {/* Content Area with Rich Text and HTML Editor */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="border-b border-gray-200 p-4 flex items-center justify-between bg-gray-50">
                  <Label className="text-base font-semibold">Content</Label>
                  <div className="flex items-center space-x-2">
                    {/* Editor Mode Toggle */}
                    <div className="flex bg-gray-100 rounded-md p-1">
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleModeSwitch('blocks')}
                        className={`px-3 py-1 text-xs transition-all ${
                          editorMode === 'blocks' 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                            : 'bg-transparent text-gray-700 hover:bg-gray-200'
                        }`}
                        data-testid="button-blocks-mode"
                        title="WordPress-like Block Editor (Recommended)"
                      >
                        <Blocks className="w-3 h-3 mr-1 inline" />
                        Blocks
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleModeSwitch('rich')}
                        className={`px-3 py-1 text-xs transition-all ${
                          editorMode === 'rich' 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                            : 'bg-transparent text-gray-700 hover:bg-gray-200'
                        }`}
                        data-testid="button-rich-text-mode"
                      >
                        Rich Text
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleModeSwitch('html')}
                        className={`px-3 py-1 text-xs transition-all ${
                          editorMode === 'html' 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                            : 'bg-transparent text-gray-700 hover:bg-gray-200'
                        }`}
                        data-testid="button-html-mode"
                      >
                        HTML
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleModeSwitch('preview')}
                        className={`px-3 py-1 text-xs transition-all ${
                          editorMode === 'preview' 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                            : 'bg-transparent text-gray-700 hover:bg-gray-200'
                        }`}
                        data-testid="button-preview-mode"
                      >
                        Preview
                      </Button>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleLinkClick}
                      title="Insert Link with Custom Attributes"
                      data-testid="button-custom-link"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="ml-2">Insert Link</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setShowImageUpload(false);
                        fileInputRef.current?.click();
                      }}
                      title="Insert Image"
                      disabled={isImageUploading}
                    >
                      {isImageUploading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ImageIcon className="w-4 h-4" />
                      )}
                      <span className="ml-2">Insert Image</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleTableClick}
                      title="Insert Table"
                      data-testid="button-insert-table"
                    >
                      <TableIcon className="w-4 h-4" />
                      <span className="ml-2">Insert Table</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleFaqClick}
                      title="Insert FAQ"
                      data-testid="button-insert-faq"
                    >
                      <HelpCircle className="w-4 h-4" />
                      <span className="ml-2">Insert FAQ</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleHtmlBlockClick}
                      title="Insert HTML Block"
                      data-testid="button-insert-html-block"
                    >
                      <Code2 className="w-4 h-4" />
                      <span className="ml-2">Insert HTML Block</span>
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  {editorMode === 'blocks' ? (
                    // Block Editor Mode (WordPress-like)
                    <div className="block-editor-container">
                      <BlockEditor
                        data={editorJSData}
                        onChange={(data) => {
                          setEditorJSData(data);
                          // Auto-save to form field will be handled on form submit
                        }}
                        onReady={() => {
                          console.log('BlockEditor is ready!');
                        }}
                        placeholder="Start writing your content using blocks... Click the '+' button to add new blocks!"
                      />
                    </div>
                  ) : editorMode === 'rich' ? (
                    // Rich Text Editor Mode
                    <div className="react-quill-container overflow-auto" style={{ maxHeight: '600px', width: '100%' }}>
                      {editorMounted ? (
                        <Controller
                          name="content"
                          control={control}
                          render={({ field }) => (
                            <ReactQuill
                              key={`quill-${blogId || 'new'}-${field.value ? 'loaded' : 'empty'}`}
                              value={field.value || ''}
                              onChange={(value) => field.onChange(value)}
                              placeholder="Write your blog content here... You can paste content from Google Docs and it will preserve formatting including tables!"
                              modules={quillModules}
                              formats={quillFormats}
                              ref={editorRef}
                            />
                          )}
                        />
                      ) : (
                        <div className="h-[460px] border border-gray-300 rounded-md bg-gray-50 flex items-center justify-center">
                          <p className="text-gray-500">Loading editor...</p>
                        </div>
                      )}
                    </div>
                  ) : editorMode === 'html' ? (
                    // HTML Editor Mode
                    <div className="space-y-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Code2 className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-gray-700">HTML Code Editor</span>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={formatHtmlCode}
                          className="flex items-center space-x-2"
                          data-testid="button-format-html"
                        >
                          <Wand2 className="w-4 h-4" />
                          <span>Format Code</span>
                        </Button>
                      </div>
                      <div className="relative rounded-md overflow-hidden border border-gray-300">
                        <pre 
                          ref={htmlPreRef}
                          className="w-full h-[600px] p-4 font-mono text-sm overflow-auto bg-[#2d2d2d] m-0 pointer-events-none"
                        >
                          <code className="language-markup" dangerouslySetInnerHTML={{ 
                            __html: Prism.highlight(htmlContent || '<!-- Write your HTML code here -->', Prism.languages.markup, 'markup') 
                          }} />
                        </pre>
                        <textarea
                          ref={htmlTextareaRef}
                          value={htmlContent}
                          onChange={(e) => handleHtmlChange(e.target.value)}
                          onScroll={handleScroll}
                          placeholder="Write your HTML code here with inline/internal CSS and JavaScript..."
                          className="absolute top-0 left-0 w-full h-full p-4 font-mono text-sm resize-none bg-transparent overflow-auto z-10"
                          style={{
                            caretColor: '#ffffff',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            outline: 'none',
                            border: 'none',
                          }}
                          onFocus={(e) => {
                            e.target.style.outline = '2px solid rgb(59 130 246)';
                            e.target.style.borderRadius = '0.375rem';
                          }}
                          onBlur={(e) => {
                            e.target.style.outline = 'none';
                          }}
                          spellCheck="false"
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                        />
                      </div>
                    </div>
                  ) : (
                    // Preview Mode
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Eye className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-gray-700">Preview - How it will look when published</span>
                      </div>
                      <div className="border border-gray-300 rounded-md p-6 bg-white overflow-auto" style={{ maxHeight: '600px' }}>
                        <div 
                          className="prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: watch('content') || '<p class="text-gray-400">No content to preview</p>' }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {errors.content && (
                    <p className="text-red-500 text-sm mt-2">{errors.content.message}</p>
                  )}
                  
                  <div className="mt-2 text-sm text-gray-500">
                    {editorMode === 'blocks' ? (
                      <>🧱 <strong>Blocks Mode (WordPress-like):</strong> Click the '+' button to add blocks. Drag blocks to reorder. All blocks include Heading (H1-H6), Paragraph, Lists (nested), Tables, Images, Code, Raw HTML, FAQ, and more!</>
                    ) : editorMode === 'rich' ? (
                      <>✨ <strong>Google Docs Paste Support:</strong> Copy content from Google Docs and paste here - all formatting, headings, links, and lists will be preserved!</>
                    ) : editorMode === 'html' ? (
                      <>🔧 <strong>HTML Mode:</strong> Write custom HTML code with inline/internal CSS and JavaScript. Your styles and scripts will work when the post is published.</>
                    ) : (
                      <>👁️ <strong>Preview Mode:</strong> See exactly how your content will look when published, including tables, FAQs, and custom HTML.</>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with Tabs */}
            {isSidebarOpen && (
              <div className="bg-white rounded-lg border border-gray-200 h-fit sticky top-24">
              <Tabs defaultValue="post-settings" className="w-full">
                <TabsList className="w-full grid grid-cols-2 rounded-t-lg h-12">
                  <TabsTrigger value="post-settings" className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Post Settings</span>
                  </TabsTrigger>
                  <TabsTrigger value="seo-settings" className="flex items-center space-x-2">
                    <Search className="w-4 h-4" />
                    <span>SEO Settings</span>
                  </TabsTrigger>
                </TabsList>

                {/* Post Settings Tab */}
                <TabsContent value="post-settings" className="p-6 space-y-6">
                  
                  {/* Categories */}
                  <div>
                    <Label className="text-sm font-semibold mb-3 block">Categories</Label>
                    {categoriesLoading ? (
                      <div className="p-4 text-center text-sm text-gray-500">
                        <Loader2 className="w-4 h-4 animate-spin mx-auto mb-2" />
                        Loading categories...
                      </div>
                    ) : (
                      <Select
                        onValueChange={(value) => {
                          const categoryId = parseInt(value);
                          if (!selectedCategoryIds.includes(categoryId)) {
                            handleCategoryToggle(categoryId, true);
                          }
                        }}
                        onOpenChange={(open) => {
                          if (open) {
                            refetchCategories();
                          }
                        }}
                      >
                        <SelectTrigger data-testid="dropdown-categories" className="border-gray-300">
                          <SelectValue placeholder="Choose categories..." />
                        </SelectTrigger>
                        <SelectContent>
                          {(() => {
                            const availableCategories = categories.filter((category: any) => !selectedCategoryIds.includes(category.id));
                            const parentCategories = availableCategories.filter((cat: any) => !cat.parentId);
                            const childCategories = availableCategories.filter((cat: any) => cat.parentId);
                            
                            const hierarchicalItems: any[] = [];
                            
                            parentCategories.forEach((parent: any) => {
                              hierarchicalItems.push(
                                <SelectItem key={parent.id} value={parent.id.toString()}>
                                  <div className="flex items-center">
                                    <span className="font-medium">{parent.name}</span>
                                    <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Parent</span>
                                  </div>
                                </SelectItem>
                              );
                              
                              const children = childCategories.filter((child: any) => child.parentId === parent.id);
                              children.forEach((child: any) => {
                                hierarchicalItems.push(
                                  <SelectItem key={child.id} value={child.id.toString()}>
                                    <div className="flex items-center pl-4">
                                      <span className="text-gray-600">└─</span>
                                      <span className="ml-2 font-medium">{child.name}</span>
                                      <span className="ml-2 text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">Child</span>
                                    </div>
                                  </SelectItem>
                                );
                              });
                            });
                            
                            const orphanedChildren = childCategories.filter((child: any) => 
                              !parentCategories.some((parent: any) => parent.id === child.parentId)
                            );
                            orphanedChildren.forEach((child: any) => {
                              hierarchicalItems.push(
                                <SelectItem key={child.id} value={child.id.toString()}>
                                  <div className="flex items-center">
                                    <span className="font-medium">{child.name}</span>
                                    <span className="ml-2 text-xs text-orange-500 bg-orange-50 px-2 py-1 rounded">Orphaned</span>
                                  </div>
                                </SelectItem>
                              );
                            });
                            
                            return hierarchicalItems.length > 0 ? hierarchicalItems : (
                              <div className="p-2 text-center text-sm text-gray-500">
                                All categories are already selected
                              </div>
                            );
                          })()}
                        </SelectContent>
                      </Select>
                    )}

                    {/* Selected categories */}
                    {selectedCategoryIds.length > 0 && (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-2">
                          {selectedCategoryIds.map((categoryId) => {
                            const category = categories.find((cat: any) => cat.id === categoryId);
                            if (!category) return null;
                            
                            return (
                              <div key={categoryId} className="flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5">
                                <span className="text-sm font-medium text-blue-800">
                                  {category.name}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleCategoryToggle(categoryId, false)}
                                  className="text-blue-600 hover:text-blue-800"
                                  data-testid={`remove-category-${category.slug}`}
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Create new category */}
                    {canManageCategories(adminUser) && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Input
                            placeholder="Create new category"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleCreateCategory()}
                            disabled={createCategoryMutation.isPending}
                            className="text-sm"
                          />
                          <Button 
                            type="button"
                            onClick={handleCreateCategory}
                            disabled={createCategoryMutation.isPending || !newCategoryName.trim()}
                            size="sm"
                          >
                            {createCategoryMutation.isPending ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              "Create"
                            )}
                          </Button>
                        </div>
                      </div>
                    )}

                    <input type="hidden" {...register("category")} value={categories.find((cat: any) => selectedCategoryIds.includes(cat.id))?.name || "General"} />
                  </div>

                  {/* URL Slug */}
                  <div>
                    <Label htmlFor="slug" className="text-sm font-semibold mb-3 block">URL Slug</Label>
                    <Input
                      id="slug"
                      {...register("slug")}
                      placeholder="url-slug-here"
                      className="font-mono text-sm border-gray-300"
                    />
                    {errors.slug && (
                      <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>
                    )}
                  </div>

                  {/* Excerpt */}
                  <div>
                    <Label htmlFor="excerpt" className="text-sm font-semibold mb-3 block">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      {...register("excerpt")}
                      placeholder="Brief description of the blog post..."
                      rows={3}
                      className="text-sm border-gray-300"
                    />
                    {errors.excerpt && (
                      <p className="text-red-500 text-sm mt-1">{errors.excerpt.message}</p>
                    )}
                  </div>

                  {/* Author */}
                  <div>
                    <Label className="text-sm font-semibold mb-3 block">Author</Label>
                    <Select
                      value={watch("authorId")?.toString() || adminUser?.id?.toString() || ""}
                      onValueChange={(value) => setValue("authorId", parseInt(value))}
                    >
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Select author" />
                      </SelectTrigger>
                      <SelectContent>
                        {adminUsers.map((user: any) => (
                          <SelectItem key={user.id} value={user.id.toString()}>
                            {user.username}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Featured Image */}
                  <div>
                    <Label className="text-sm font-semibold mb-3 block">Featured Image</Label>
                    <Input
                      {...register("featuredImage")}
                      placeholder="Image URL or upload..."
                      className="text-sm border-gray-300 mb-3"
                    />
                    
                    <div className="space-y-2">
                      <Input
                        {...register("featuredImageAlt")}
                        placeholder="Alt text (for accessibility)"
                        className="text-sm border-gray-300"
                      />
                      <Input
                        {...register("featuredImageTitle")}
                        placeholder="Image title (appears on hover)"
                        className="text-sm border-gray-300"
                      />
                    </div>
                    
                    {watch("featuredImage") && (
                      <div className="mt-3">
                        <img 
                          src={watch("featuredImage")} 
                          alt={watch("featuredImageAlt") || "Featured image preview"} 
                          title={watch("featuredImageTitle") || "Featured image"}
                          className="w-full h-32 object-cover rounded border"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="flex flex-col space-y-2 mt-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowMediaModal(true)}
                        disabled={isImageUploading}
                        className="w-full"
                        data-testid="button-select-from-media-library"
                      >
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Select from Media Library
                      </Button>
                      
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setShowImageUpload(true);
                          fileInputRef.current?.click();
                        }}
                        disabled={isImageUploading}
                        className="w-full"
                        data-testid="button-upload-new-image"
                      >
                        {isImageUploading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin mr-2" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mr-2" />
                            Upload New Image
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Publish Date */}
                  <div>
                    <Label htmlFor="publishedAt" className="text-sm font-semibold mb-3 block">Publish Date</Label>
                    <Input
                      id="publishedAt"
                      type="date"
                      {...register("publishedAt")}
                      placeholder="Select publish date..."
                      className="border-gray-300"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Date when the post will be/was published
                    </p>
                  </div>

                </TabsContent>

                {/* SEO Settings Tab */}
                <TabsContent value="seo-settings" className="p-6 space-y-6">
                  
                  {/* Focus Keyword */}
                  <div>
                    <Label htmlFor="focusKeyword" className="text-sm font-semibold mb-3 block">Focus Keyword</Label>
                    <Input
                      id="focusKeyword"
                      {...register("focusKeyword")}
                      placeholder="Main keyword for SEO..."
                      className="border-gray-300"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      The primary keyword you want this post to rank for
                    </p>
                  </div>

                  {/* Meta Description */}
                  <div>
                    <Label htmlFor="metaDescription" className="text-sm font-semibold mb-3 block">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      {...register("metaDescription")}
                      placeholder="Brief description for search engines..."
                      rows={4}
                      className="border-gray-300"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      {watch("metaDescription")?.length || 0} / 160 characters (optimal: 150-160)
                    </p>
                  </div>

                </TabsContent>
              </Tabs>
            </div>
            )}
          </div>

          {/* Sidebar Toggle Button */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`fixed ${isSidebarOpen ? 'right-[calc(25%+100px)]' : 'right-4'} top-24 z-20 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group`}
            title={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? (
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            )}
          </button>
        </form>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Media Selection Modal */}
      {showMediaModal && (
        <MediaSelectionModal
          open={showMediaModal}
          onClose={() => setShowMediaModal(false)}
          onSelect={handleMediaSelect}
        />
      )}

      {/* Conflict Resolution Dialog */}
      <Dialog open={showConflictDialog} onOpenChange={setShowConflictDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span>Editing Conflict Detected</span>
            </DialogTitle>
            <DialogDescription>
              {conflictingUser && (
                <div className="space-y-3">
                  <p>
                    <strong>{conflictingUser.username}</strong> ({conflictingUser.roles?.join(', ') || 'User'}) is currently editing this post.
                  </p>
                  <p>
                    {conflictingUser.roles?.includes('admin') && !adminUser?.roles?.includes('admin')
                      ? "An admin is requesting to edit this post. You can allow them to take control or continue editing."
                      : "Do you want to request permission to edit this post?"
                    }
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="space-x-2">
            <Button 
              variant="outline" 
              onClick={() => handleConflictResolution('quit')}
              disabled={conflictRequestPending}
            >
              {conflictingUser?.roles?.includes('admin') && !adminUser?.roles?.includes('admin')
                ? "Keep Editing" 
                : "Cancel"
              }
            </Button>
            <Button 
              onClick={() => handleConflictResolution('edit')}
              disabled={conflictRequestPending}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              {conflictRequestPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                conflictingUser?.roles?.includes('admin') && !adminUser?.roles?.includes('admin')
                  ? "Allow Admin Access" 
                  : "Request Access"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Incoming Edit Request Dialog */}
      <Dialog open={showEditRequestDialog} onOpenChange={setShowEditRequestDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-blue-500" />
              <span>Edit Request</span>
            </DialogTitle>
            <DialogDescription>
              {incomingEditRequest && (
                <div className="space-y-3">
                  <p>
                    <strong>{incomingEditRequest.requestingUser?.username}</strong> is requesting permission to edit this post.
                  </p>
                  <p>
                    Would you like to grant them access?
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="space-x-2">
            <Button 
              variant="outline" 
              onClick={() => handleEditRequest('reject')}
            >
              Reject
            </Button>
            <Button 
              onClick={() => handleEditRequest('approve')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Grant Access
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Link Dialog */}
      <Dialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Insert Link</DialogTitle>
            <DialogDescription>
              Add a link with custom attributes
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="link-url">URL</Label>
              <Input
                id="link-url"
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                data-testid="input-link-url"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="link-text">Link Text (optional)</Label>
              <Input
                id="link-text"
                placeholder="Click here"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
                data-testid="input-link-text"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="link-new-tab"
                  checked={linkNewTab}
                  onCheckedChange={(checked) => setLinkNewTab(checked as boolean)}
                  data-testid="checkbox-link-new-tab"
                />
                <Label htmlFor="link-new-tab" className="text-sm font-normal cursor-pointer">
                  Open in new tab (target="_blank")
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="link-nofollow"
                  checked={linkNofollow}
                  onCheckedChange={(checked) => setLinkNofollow(checked as boolean)}
                  data-testid="checkbox-link-nofollow"
                />
                <Label htmlFor="link-nofollow" className="text-sm font-normal cursor-pointer">
                  Add nofollow (rel="nofollow")
                </Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setShowLinkDialog(false);
                setLinkUrl('');
                setLinkText('');
                setLinkNewTab(false);
                setLinkNofollow(false);
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleInsertLink}
              disabled={!linkUrl}
              className="bg-blue-600 hover:bg-blue-700"
              data-testid="button-insert-link"
            >
              Insert Link
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Table Dialog */}
      <Dialog open={showTableDialog} onOpenChange={setShowTableDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Insert Table</DialogTitle>
            <DialogDescription>
              Configure your table dimensions
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="table-rows">Rows</Label>
                <Input
                  id="table-rows"
                  type="number"
                  min="1"
                  max="20"
                  value={tableRows}
                  onChange={(e) => setTableRows(e.target.value)}
                  data-testid="input-table-rows"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="table-cols">Columns</Label>
                <Input
                  id="table-cols"
                  type="number"
                  min="1"
                  max="10"
                  value={tableCols}
                  onChange={(e) => setTableCols(e.target.value)}
                  data-testid="input-table-cols"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="table-header"
                checked={tableHasHeader}
                onCheckedChange={(checked) => setTableHasHeader(checked as boolean)}
                data-testid="checkbox-table-header"
              />
              <Label htmlFor="table-header" className="text-sm font-normal cursor-pointer">
                Include header row
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setShowTableDialog(false);
                setTableRows('3');
                setTableCols('3');
                setTableHasHeader(true);
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleInsertTable}
              className="bg-blue-600 hover:bg-blue-700"
              data-testid="button-confirm-insert-table"
            >
              Insert Table
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* FAQ Dialog */}
      <Dialog open={showFaqDialog} onOpenChange={setShowFaqDialog}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Insert FAQ Section</DialogTitle>
            <DialogDescription>
              Create collapsible FAQ items
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3 bg-gray-50">
                <div className="flex items-center justify-between">
                  <Label className="font-semibold">FAQ Item {index + 1}</Label>
                  {faqItems.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFaqItem(index)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`faq-question-${index}`}>Question</Label>
                  <Input
                    id={`faq-question-${index}`}
                    placeholder="Enter question..."
                    value={item.question}
                    onChange={(e) => updateFaqItem(index, 'question', e.target.value)}
                    data-testid={`input-faq-question-${index}`}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`faq-answer-${index}`}>Answer</Label>
                  <Textarea
                    id={`faq-answer-${index}`}
                    placeholder="Enter answer..."
                    value={item.answer}
                    onChange={(e) => updateFaqItem(index, 'answer', e.target.value)}
                    rows={3}
                    data-testid={`input-faq-answer-${index}`}
                  />
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addFaqItem}
              className="w-full"
              data-testid="button-add-faq-item"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Another FAQ
            </Button>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setShowFaqDialog(false);
                setFaqItems([{ question: '', answer: '' }]);
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleInsertFaq}
              className="bg-blue-600 hover:bg-blue-700"
              data-testid="button-confirm-insert-faq"
            >
              Insert FAQ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* HTML Block Dialog */}
      <Dialog open={showHtmlBlockDialog} onOpenChange={setShowHtmlBlockDialog}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Insert Custom HTML Block</DialogTitle>
            <DialogDescription>
              Add custom HTML, CSS, and JavaScript to your content
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {/* HTML Input */}
            <div className="space-y-2">
              <Label htmlFor="html-block-html" className="font-semibold">HTML</Label>
              <Textarea
                id="html-block-html"
                placeholder="Enter your HTML code here..."
                value={htmlBlockContent.html}
                onChange={(e) => setHtmlBlockContent({ ...htmlBlockContent, html: e.target.value })}
                rows={8}
                className="font-mono text-sm"
                data-testid="textarea-html-block-html"
              />
            </div>

            {/* CSS Input */}
            <div className="space-y-2">
              <Label htmlFor="html-block-css" className="font-semibold">CSS</Label>
              <Textarea
                id="html-block-css"
                placeholder="Enter your CSS styles here (without <style> tags)..."
                value={htmlBlockContent.css}
                onChange={(e) => setHtmlBlockContent({ ...htmlBlockContent, css: e.target.value })}
                rows={6}
                className="font-mono text-sm"
                data-testid="textarea-html-block-css"
              />
            </div>

            {/* JavaScript Input */}
            <div className="space-y-2">
              <Label htmlFor="html-block-js" className="font-semibold">JavaScript</Label>
              <Textarea
                id="html-block-js"
                placeholder="Enter your JavaScript code here (without <script> tags)..."
                value={htmlBlockContent.javascript}
                onChange={(e) => setHtmlBlockContent({ ...htmlBlockContent, javascript: e.target.value })}
                rows={6}
                className="font-mono text-sm"
                data-testid="textarea-html-block-js"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setShowHtmlBlockDialog(false);
                setHtmlBlockContent({ html: '', css: '', javascript: '' });
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={insertHtmlBlock}
              className="bg-blue-600 hover:bg-blue-700"
              data-testid="button-confirm-insert-html-block"
            >
              Insert HTML Block
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
