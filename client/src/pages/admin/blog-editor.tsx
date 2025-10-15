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
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { canPublishContent, canManageCategories } from "@/lib/permissions";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { 
  Save, Eye, ArrowLeft, Loader2, FileText, 
  Calendar, User, Hash, Globe, Upload, Image as ImageIcon, AlertTriangle, X, Plus, Settings, Search, ChevronRight, ChevronLeft
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getBlogUrl } from "@/lib/blog-utils";
import type { AdminUser, Media, ContentBlock } from "@shared/schema";
import MediaSelectionModal from "@/components/admin/media-selection-modal";
import ContentBlocks from "@/components/admin/content-blocks";
import ContentBlocksRenderer from "@/components/content-blocks-renderer";

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
  const [showConflictDialog, setShowConflictDialog] = useState(false);
  const [conflictingUser, setConflictingUser] = useState<AdminUser | null>(null);
  const [conflictRequestPending, setConflictRequestPending] = useState(false);
  const [showEditRequestDialog, setShowEditRequestDialog] = useState(false);
  const [incomingEditRequest, setIncomingEditRequest] = useState<any>(null);
  const [editorMode, setEditorMode] = useState<'rich' | 'html'>('rich');
  const [htmlContent, setHtmlContent] = useState('');
  const [editorMounted, setEditorMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
    enabled: isEditing,
  });

  // Load post categories
  const { data: postCategories = [] } = useQuery<any[]>({
    queryKey: [`/api/admin/blog-posts/${blogId}/categories`],
    enabled: isEditing,
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

      return apiRequest(url, {
        method,
        body: JSON.stringify(data),
      });
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
      return apiRequest('/api/admin/categories', {
        method: 'POST',
        body: JSON.stringify({ name }),
      });
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
      return apiRequest(`/api/admin/blog-posts/${blogId}/approval`, {
        method: 'PUT',
        body: JSON.stringify({ approvalStatus: status }),
      });
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
  const handleModeSwitch = (mode: 'rich' | 'html') => {
    if (mode === 'html' && editorMode === 'rich') {
      // Switching from rich to HTML
      const currentContent = watch('content') || '';
      setHtmlContent(currentContent);
    } else if (mode === 'rich' && editorMode === 'html') {
      // Switching from HTML to rich
      setValue('content', htmlContent);
    }
    setEditorMode(mode);
  };

  // Handle HTML content change
  const handleHtmlChange = (value: string) => {
    setHtmlContent(value);
    setValue('content', value);
  };

  // Quill modules configuration
  const quillModules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
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
    'list', 'bullet',
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
                </div>
                <div className="p-4">
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
            className={`fixed ${isSidebarOpen ? 'right-[calc(25%-0.75rem)]' : 'right-4'} top-24 z-20 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group`}
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
    </div>
  );
}
