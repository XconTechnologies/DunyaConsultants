import { useState, useEffect, useRef, useMemo } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { canPublishContent, canManageCategories } from "@/lib/permissions";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { 
  Save, Eye, ArrowLeft, Loader2, FileText, 
  Calendar, User, Hash, Globe, Upload, Image as ImageIcon, AlertTriangle
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getBlogUrl } from "@/lib/blog-utils";
import type { AdminUser } from "@shared/schema";

// Predefined categories for blog posts
const BLOG_CATEGORIES = [
  "General",
  "Student Visa",
  "Study Abroad",
  "University Guides",
  "Test Preparation",
  "Scholarships",
  "Student Life",
  "Country Guides",
  "Immigration",
  "Career Advice",
  "Study Tips",
  "Visa Requirements",
  "Application Process",
  "Document Guidelines",
  "Success Stories"
] as const;

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  metaDescription: z.string().optional(),
  focusKeyword: z.string().optional(),
  featuredImage: z.string().optional(),
  tags: z.string().optional(),
  publishedAt: z.string().optional(),
  isPublished: z.boolean().default(false),
});

type BlogForm = z.infer<typeof blogSchema>;

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  metaDescription?: string;
  focusKeyword?: string;
  featuredImage?: string;
  tags: string[];
  publishedAt?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogEditor() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/admin/blog-editor/:id?");
  const isEditing = Boolean(params?.id);
  const blogId = params?.id ? parseInt(params.id) : undefined;

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
          if (conflictUser.role === 'admin' && adminUser?.role !== 'admin') {
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

  // Start editing session
  const startEditingSession = async (postId: number) => {
    try {
      const response = await fetch('/api/admin/editing-sessions', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ postId })
      });
      
      if (response.ok) {
        const session = await response.json();
        setCurrentEditingSession(session);
      }
    } catch (error) {
      console.error('Error starting editing session:', error);
    }
  };

  // End editing session
  const endEditingSession = async () => {
    if (currentEditingSession) {
      try {
        await fetch(`/api/admin/editing-sessions/${currentEditingSession.id}`, {
          method: 'DELETE',
          headers: getAuthHeaders(),
        });
        setCurrentEditingSession(null);
      } catch (error) {
        console.error('Error ending editing session:', error);
      }
    }
  };

  // Handle conflict resolution
  const handleConflictResolution = async (allow: boolean) => {
    setShowConflictDialog(false);
    if (allow && blogId) {
      const canEdit = await checkEditingConflicts(blogId);
      if (canEdit) {
        await startEditingSession(blogId);
      }
    } else {
      // User declined, redirect back to dashboard
      setLocation('/admin/dashboard');
    }
  };
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [editorMounted, setEditorMounted] = useState(false);
  const [editorMode, setEditorMode] = useState<'rich' | 'html'>('rich');
  const [htmlContent, setHtmlContent] = useState('');
  const { toast } = useToast();
  
  // Editing session management
  const [currentEditingSession, setCurrentEditingSession] = useState<any>(null);
  const [showConflictDialog, setShowConflictDialog] = useState(false);
  const [conflictingUser, setConflictingUser] = useState<any>(null);
  const [conflictRequestPending, setConflictRequestPending] = useState(false);
  
  // Check authentication - support both admin and user tokens
  useEffect(() => {
    let token = localStorage.getItem("adminToken");
    let user = localStorage.getItem("adminUser");
    
    if (!token || !user) {
      token = localStorage.getItem("userToken");
      user = localStorage.getItem("user");
    }
    
    if (!token || !user) {
      setLocation("/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      setAdminUser(userData);
      setAuthChecked(true);
    } catch {
      setLocation("/login");
    }
  }, [setLocation]);
  
  // Get auth token - support both admin and user tokens
  const getAuthHeaders = () => {
    let token = localStorage.getItem("adminToken");
    if (!token) {
      token = localStorage.getItem("userToken");
    }
    return {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };
  
  // Initialize FAQ functionality and register custom formats after editor loads
  useEffect(() => {
    if (editorMounted && editorRef.current) {
      const quill = editorRef.current.getEditor();
      
      // Register custom FAQ formats
      const Parchment = quill.constructor.import('parchment');
      
      // Register FAQ item format
      const FAQItemBlot = quill.constructor.import('blots/block');
      class FAQItem extends FAQItemBlot {
        static blotName = 'faq-item';
        static tagName = 'div';
        static className = 'faq-item';
      }
      
      // Register FAQ question format
      const FAQQuestionBlot = quill.constructor.import('blots/block');
      class FAQQuestion extends FAQQuestionBlot {
        static blotName = 'faq-question';
        static tagName = 'div';
        static className = 'faq-question';
      }
      
      // Register FAQ answer format
      const FAQAnswerBlot = quill.constructor.import('blots/block');
      class FAQAnswer extends FAQAnswerBlot {
        static blotName = 'faq-answer';
        static tagName = 'div';
        static className = 'faq-answer';
      }
      
      // Register FAQ icon format
      const FAQIconBlot = quill.constructor.import('blots/inline');
      class FAQIcon extends FAQIconBlot {
        static blotName = 'faq-icon';
        static tagName = 'span';
        static className = 'faq-icon';
      }
      
      // Register the formats
      quill.constructor.register(FAQItem);
      quill.constructor.register(FAQQuestion);
      quill.constructor.register(FAQAnswer);
      quill.constructor.register(FAQIcon);
      
      const initializeFAQs = () => {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
          if (!(question as any).__faqHandler) {
            const handler = () => {
              const answer = question.nextElementSibling as HTMLElement;
              const icon = question.querySelector('.faq-icon') as HTMLElement;
              
              if (answer && answer.classList.contains('faq-answer')) {
                const isVisible = answer.style.display !== 'none';
                answer.style.display = isVisible ? 'none' : 'block';
                if (icon) icon.textContent = isVisible ? '+' : '—';
                
                // Toggle expanded class for proper styling
                if (isVisible) {
                  question.classList.remove('expanded');
                } else {
                  question.classList.add('expanded');
                }
              }
            };
            (question as any).__faqHandler = handler;
            question.addEventListener('click', handler);
          }
        });
      };
      
      // Initialize FAQs on content change
      const interval = setInterval(initializeFAQs, 500);
      return () => clearInterval(interval);
    }
  }, [editorMounted]);
  const queryClient = useQueryClient();
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const editorRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const token = localStorage.getItem("adminToken") || localStorage.getItem("userToken");

  // Ensure editor is mounted client-side
  useEffect(() => {
    setEditorMounted(true);
  }, []);

  // Fetch blog post for editing
  const { data: blogPost, isLoading, error } = useQuery({
    queryKey: ["/api/admin/blog-posts", blogId],
    enabled: isEditing && !!token,
    queryFn: async () => {
      console.log('Fetching blog post with ID:', blogId);
      const response = await fetch(`/api/admin/blog-posts/${blogId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to fetch blog post:', response.status, errorText);
        throw new Error(`Failed to fetch blog post: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched blog post data:', data);
      return data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    control,
  } = useForm<BlogForm>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      isPublished: false,
      content: "",
      category: "General", // Default category
      publishedAt: "", // Don't pre-fill - only set when actually publishing
    },
  });

  const title = watch("title");
  const content = watch("content");
  const isPublished = watch("isPublished");
  
  // Sync HTML content with form content
  useEffect(() => {
    if (editorMode === 'html' && content && htmlContent !== content) {
      setHtmlContent(content);
    }
  }, [content, editorMode]);
  
  // Handle mode switching
  const handleModeSwitch = (mode: 'rich' | 'html') => {
    if (mode === 'html') {
      // Switching to HTML mode - sync current rich text content to HTML
      setHtmlContent(content || '');
    } else {
      // Switching to rich text mode - sync HTML content back to form
      if (htmlContent !== content) {
        setValue('content', htmlContent);
      }
    }
    setEditorMode(mode);
  };
  
  // Handle HTML content changes
  const handleHtmlChange = (value: string) => {
    setHtmlContent(value);
    setValue('content', value);
  };
  
  // Memoized ReactQuill modules to prevent reinitializing
  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'align': [] }],
        ['link'],
        ['faq'], // Custom FAQ button
        ['clean']
      ],
      handlers: {
        'faq': function(this: any) {
          const quill = this.quill;
          const range = quill.getSelection();
          if (range) {
            const faqHtml = `
              <div class="faq-item" style="margin-bottom: 0.25rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background: white; transition: all 0.2s ease;">
                <div class="faq-question" style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 1rem 1.5rem; background: white; border: none; cursor: pointer; font-weight: 500; color: #111827; font-size: 0.875rem; line-height: 1.5; text-align: left; transition: background-color 0.2s ease;">
                  <span style="color: #111827;">Click here to add your question?</span>
                  <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" style="width: 1rem; height: 1rem; color: #6b7280; transition: transform 0.2s ease; flex-shrink: 0; margin-left: 0.75rem;">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
                <div class="faq-answer" style="display: none; padding: 0 1.5rem 1rem 1.5rem; background: white; color: #6b7280; font-size: 0.875rem; line-height: 1.5; border-top: 1px solid #f3f4f6; margin: 0; max-height: 0px; opacity: 0; transition: all 0.3s ease; overflow: hidden; text-align: left;">
                  <p style="margin: 0; padding-top: 0.5rem;">Click here to add your answer...</p>
                </div>
              </div>
            `;
            quill.clipboard.dangerouslyPasteHTML(range.index, faqHtml);
          }
        }
      }
    },
    clipboard: {
      // Preserve all formatting including tables and FAQs when pasting
      matchVisual: false,
      stripPastedStyles: false,
      // Allow table and FAQ tags to pass through, including list elements
      allowedTags: ['table', 'thead', 'tbody', 'tr', 'td', 'th', 'div', 'span', 'ol', 'ul', 'li'],
      // More aggressive preservation
      keepSelection: true,
      substituteBlockElements: false
    },
    keyboard: {
      bindings: {
        // Enhanced keyboard shortcuts for list management
        'list autofill': {
          key: ' ',
          shiftKey: null,
          handler: function(this: any, range: any, context: any) {
            const quill = this.quill;
            if (range.index === 0 || quill.getLine(range.index)[0].cache.delta.ops[0].insert !== context.prefix) {
              return true;
            }
            const lineStart = range.index - context.offset;
            quill.insertText(lineStart, context.prefix, 'user');
            
            if (context.prefix === '1. ') {
              quill.formatLine(lineStart, 1, 'list', 'ordered');
            } else if (context.prefix === '* ' || context.prefix === '- ') {
              quill.formatLine(lineStart, 1, 'list', 'bullet');
            }
            quill.deleteText(lineStart, context.prefix.length);
            quill.setSelection(lineStart);
            return false;
          }
        },
        'indent add': {
          key: 'Tab',
          handler: function(this: any, range: any) {
            const quill = this.quill;
            const [line] = quill.getLine(range.index);
            if (line && line.statics.blotName === 'list-item') {
              quill.format('indent', '+1');
              return false;
            }
            return true;
          }
        },
        'indent remove': {
          key: 'Tab',
          shiftKey: true,
          handler: function(this: any, range: any) {
            const quill = this.quill;
            const [line] = quill.getLine(range.index);
            if (line && line.statics.blotName === 'list-item') {
              quill.format('indent', '-1');
              return false;
            }
            return true;
          }
        }
      }
    }
  }), []);

  // ReactQuill formats (separate from modules)
  const quillFormats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'align', 'direction',
    'link', 'image', 'video',
    'table', 'table-cell', 'table-row', 'table-header',
    'faq-item', 'faq-question', 'faq-answer', 'faq-icon'
  ];

  // Debug logging for form state changes
  useEffect(() => {
    console.log('Form content changed:', content?.length || 0, 'characters');
  }, [content]);

  // Enhanced paste handler for table preservation
  useEffect(() => {
    const handlePaste = (e: Event) => {
      const clipboardEvent = e as ClipboardEvent;
      const clipboardData = clipboardEvent.clipboardData;
      if (!clipboardData) return;

      const htmlData = clipboardData.getData('text/html');
      if (htmlData && htmlData.includes('<table')) {
        e.preventDefault();
        e.stopPropagation();
        
        // Get the Quill editor instance
        const quill = editorRef.current?.getEditor();
        if (quill) {
          const range = quill.getSelection();
          if (range) {
            // Clean up the HTML but preserve table structure
            const cleanedHtml = htmlData.replace(/(<table[^>]*>)/gi, '$1 style="width: 100%; border-collapse: collapse; margin: 20px 0;"')
                                        .replace(/(<td[^>]*>)/gi, '$1')
                                        .replace(/(<th[^>]*>)/gi, '$1');
            
            // Insert the HTML directly, preserving table structure
            quill.clipboard.dangerouslyPasteHTML(range.index, cleanedHtml);
            // Update the form value after a short delay
            setTimeout(() => {
              const newContent = quill.root.innerHTML;
              setValue('content', newContent);
            }, 100);
          }
        }
      }
    };

    // Enhanced table preservation on content change
    const preserveTableStructure = () => {
      const quill = editorRef.current?.getEditor();
      if (quill) {
        const currentContent = quill.root.innerHTML;
        // If content has tables, ensure they're properly formatted
        if (currentContent.includes('<table')) {
          const preservedContent = currentContent.replace(/(<table)([^>]*>)/gi, '$1 style="width: 100%; border-collapse: collapse; margin: 20px 0;"$2');
          if (preservedContent !== currentContent) {
            setValue('content', preservedContent);
          }
        }
      }
    };

    // Add event listener to the Quill editor container
    const quillContainer = document.querySelector('.ql-editor');
    if (quillContainer) {
      quillContainer.addEventListener('paste', handlePaste as EventListener);
      quillContainer.addEventListener('input', preserveTableStructure as EventListener);
      return () => {
        quillContainer.removeEventListener('paste', handlePaste as EventListener);
        quillContainer.removeEventListener('input', preserveTableStructure as EventListener);
      };
    }
  }, [editorMounted, setValue]);

  // Generate slug from title
  useEffect(() => {
    if (title && !isEditing) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setValue("slug", slug);
    }
  }, [title, setValue, isEditing]);

  // Populate form when editing
  useEffect(() => {
    if (blogPost && isEditing) {
      console.log('Loading blog post data for editing:', blogPost);
      
      // Use setTimeout to ensure form is ready
      setTimeout(() => {
        console.log('Raw blog post content:', blogPost.content);
        
        // Reset form with the actual data
        reset({
          title: blogPost.title || "",
          slug: blogPost.slug || "",
          excerpt: blogPost.excerpt || "",
          content: blogPost.content || "",
          category: blogPost.category || "General",
          metaDescription: blogPost.metaDescription || "",
          focusKeyword: blogPost.focusKeyword || "",
          featuredImage: blogPost.featuredImage || "",
          tags: Array.isArray(blogPost.tags) 
            ? blogPost.tags.join(", ") 
            : typeof blogPost.tags === 'string' 
              ? blogPost.tags 
              : "",
          publishedAt: blogPost.publishedAt 
            ? new Date(blogPost.publishedAt).toISOString().split('T')[0] 
            : "",
          isPublished: !!blogPost.isPublished,
        });
        
        // Force ReactQuill to update with content after reset
        setTimeout(() => {
          setValue("content", blogPost.content || "", { shouldValidate: true });
        }, 100);
      }, 300);
    }
  }, [blogPost, isEditing, reset, setValue]);

  // Check for editing conflicts and start editing session when opening an existing post
  useEffect(() => {
    const initializeEditingSession = async () => {
      if (isEditing && blogId && adminUser && authChecked) {
        const canEdit = await checkEditingConflicts(blogId);
        if (canEdit) {
          await startEditingSession(blogId);
        }
      }
    };

    initializeEditingSession();

    // Cleanup editing session when component unmounts or user navigates away
    return () => {
      if (currentEditingSession) {
        endEditingSession();
      }
    };
  }, [isEditing, blogId, adminUser, authChecked]);

  // Periodically update editing activity (keep-alive)
  useEffect(() => {
    if (currentEditingSession) {
      const interval = setInterval(async () => {
        try {
          await fetch(`/api/admin/editing-sessions/${currentEditingSession.id}/activity`, {
            method: 'PUT',
            headers: getAuthHeaders(),
          });
        } catch (error) {
          console.error('Error updating editing activity:', error);
        }
      }, 30000); // Update every 30 seconds

      return () => clearInterval(interval);
    }
  }, [currentEditingSession]);

  // Save mutation
  const saveMutation = useMutation({
    mutationFn: async (data: BlogForm) => {
      const url = isEditing
        ? `/api/admin/blog-posts/${blogId}`
        : "/api/admin/blog-posts";
      const method = isEditing ? "PUT" : "POST";

      const payload = {
        ...data,
        tags: data.tags ? data.tags.split(",").map(tag => tag.trim()) : [],
        status: data.isPublished ? "published" : "draft", // Set status field correctly
        publishedAt: data.isPublished && data.publishedAt ? data.publishedAt : undefined, // Only send if provided
      };

      const response = await fetch(url, {
        method,
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status}: ${errorText}`);
      }
      
      return response.json();
    },
    onSuccess: (result) => {
      toast({
        title: isEditing ? "Blog Updated" : "Blog Created",
        description: `Blog post has been ${isEditing ? "updated" : "created"} successfully.`,
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      // Don't redirect - stay on the blog editor
      // If creating a new post, update the URL to the edit mode
      if (!isEditing && result?.id) {
        setLocation(`/admin/blog-editor/${result.id}`);
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

  const onSubmit = async (data: BlogForm) => {
    console.log('Form submitted with data:', data);
    setIsSaving(true);
    try {
      await saveMutation.mutateAsync(data);
    } catch (error) {
      console.error('Save error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  // ReactQuill now handled via Controller - no manual handler needed

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImageUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Upload failed');
      }

      const { url, filename } = await response.json();
      
      // Verify the uploaded file exists before setting it
      const verifyResponse = await fetch(url, { method: 'HEAD' });
      if (!verifyResponse.ok) {
        throw new Error('Uploaded file verification failed');
      }
      
      if (showImageUpload === true) {
        // For featured image
        setValue("featuredImage", url);
        setShowImageUpload(false);
      } else {
        // For content image - insert directly into ReactQuill
        const quillEditor = document.querySelector('.ql-editor');
        if (quillEditor) {
          const imageHtml = `<p><img src="${url}" alt="${file.name}" style="max-width: 100%; height: auto;" /></p>`;
          quillEditor.innerHTML += imageHtml;
        }
      }
      
      toast({
        title: "Image Uploaded",
        description: "Image has been uploaded successfully.",
      });
    } catch (error: any) {
      console.error('Image upload error:', error);
      toast({
        title: "Upload Failed",
        description: error.message || "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsImageUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  if (!authChecked || !adminUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading editor...</p>
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
                onClick={() => setLocation("/admin/dashboard")}
              >
                Back to Dashboard
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setLocation("/admin/dashboard")}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
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
                  onClick={() => {
                    // Always use admin preview for better reliability, especially for new/draft posts
                    window.open(`/admin/blog-preview/${blogPost.id}`, '_blank');
                  }}
                  data-testid="preview-blog"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </Button>
              )}
              <Button
                type="submit"
                form="blog-form"
                disabled={isSaving || isImageUploading}
                className="flex items-center space-x-2"
                onClick={() => {
                  console.log('Save button clicked');
                  setValue('isPublished', false);
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
                  onClick={() => {
                    console.log('Publish button clicked');
                    setValue('isPublished', true);
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
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form id="blog-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Title */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Blog Title</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    {...register("title")}
                    placeholder="Enter blog title..."
                    className="text-lg"
                  />
                  {errors.title && (
                    <p className="#1D50C9 text-sm mt-1">{errors.title.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Category */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Hash className="w-5 h-5" />
                    <span>Category</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {BLOG_CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                  )}
                  {!canManageCategories(adminUser) && (
                    <p className="text-sm text-gray-500 mt-2">
                      Only users with category management permissions can create new categories. Contact an admin to add new categories.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Slug */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Hash className="w-5 h-5" />
                    <span>URL Slug</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    {...register("slug")}
                    placeholder="url-slug"
                    className="font-mono"
                  />
                  {errors.slug && (
                    <p className="#1D50C9 text-sm mt-1">{errors.slug.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Excerpt */}
              <Card>
                <CardHeader>
                  <CardTitle>Excerpt</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    {...register("excerpt")}
                    placeholder="Brief description of the blog post..."
                    rows={3}
                  />
                  {errors.excerpt && (
                    <p className="#1D50C9 text-sm mt-1">{errors.excerpt.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Content Area with Rich Text and HTML Editor */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Content</span>
                    <div className="flex items-center space-x-2">
                      {/* Editor Mode Toggle */}
                      <div className="flex bg-gray-100 rounded-md p-1">
                        <Button
                          type="button"
                          size="sm"
                          variant={editorMode === 'rich' ? 'default' : 'ghost'}
                          onClick={() => handleModeSwitch('rich')}
                          className="px-3 py-1 text-xs"
                        >
                          Rich Text
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant={editorMode === 'html' ? 'default' : 'ghost'}
                          onClick={() => handleModeSwitch('html')}
                          className="px-3 py-1 text-xs"
                        >
                          HTML
                        </Button>
                      </div>
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
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {editorMode === 'rich' ? (
                    // Rich Text Editor Mode
                    <div className="react-quill-container" style={{ minHeight: '500px', width: '100%' }}>
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
                  ) : (
                    // HTML Editor Mode with Live Preview
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* HTML Code Editor */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">HTML Code</label>
                        <textarea
                          value={htmlContent}
                          onChange={(e) => handleHtmlChange(e.target.value)}
                          placeholder="Write your HTML code here..."
                          className="w-full h-[460px] p-3 border border-gray-300 rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      {/* Live Preview */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Live Preview</label>
                        <div 
                          className="w-full h-[460px] p-3 border border-gray-300 rounded-md bg-white overflow-auto prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {errors.content && (
                    <p className="text-red-500 text-sm mt-2">{errors.content.message}</p>
                  )}
                  
                  <div className="mt-2 text-sm text-gray-500">
                    {editorMode === 'rich' ? (
                      <>✨ <strong>Google Docs Paste Support:</strong> Copy content from Google Docs and paste here - all formatting, headings, links, and lists will be preserved!</>
                    ) : (
                      <>🔧 <strong>HTML Mode:</strong> Write custom HTML code with live preview. Perfect for advanced formatting, custom styles, and embedding multimedia content.</>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              


              {/* Featured Image */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ImageIcon className="w-5 h-5" />
                    <span>Featured Image</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    {...register("featuredImage")}
                    placeholder="Image URL or upload..."
                  />
                  {watch("featuredImage") && (
                    <div className="mt-2">
                      <img 
                        src={watch("featuredImage")} 
                        alt="Featured image preview" 
                        className="max-w-full h-32 object-cover rounded border"
                        onLoad={() => {}}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  {!watch("featuredImage") && (
                    <div className="mt-2 text-sm text-gray-500">
                      No featured image selected
                    </div>
                  )}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowImageUpload(true);
                      fileInputRef.current?.click();
                    }}
                    disabled={isImageUploading}
                    className="w-full"
                  >
                    {isImageUploading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Image
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Publish Date */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Publish Date</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    type="date"
                    {...register("publishedAt")}
                    placeholder="Select publish date..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Date when the post will be/was published
                  </p>
                </CardContent>
              </Card>

              {/* SEO Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>SEO Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="focusKeyword">Focus Keyword</Label>
                    <Input
                      id="focusKeyword"
                      {...register("focusKeyword")}
                      placeholder="Main keyword for SEO..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      {...register("metaDescription")}
                      placeholder="Brief description for search engines..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    {...register("tags")}
                    placeholder="Tag1, Tag2, Tag3..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Separate tags with commas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
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
                    <strong>{conflictingUser.username}</strong> ({conflictingUser.role}) is currently editing this post.
                  </p>
                  <p>
                    {conflictingUser.role === 'admin' && adminUser?.role !== 'admin' 
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
              onClick={() => handleConflictResolution(false)}
              disabled={conflictRequestPending}
            >
              {conflictingUser?.role === 'admin' && adminUser?.role !== 'admin' 
                ? "Keep Editing" 
                : "Cancel"
              }
            </Button>
            <Button 
              onClick={() => handleConflictResolution(true)}
              disabled={conflictRequestPending}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              {conflictRequestPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                conflictingUser?.role === 'admin' && adminUser?.role !== 'admin' 
                  ? "Allow Admin Access" 
                  : "Request Access"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}