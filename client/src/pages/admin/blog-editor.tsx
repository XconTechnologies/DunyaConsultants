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
import { useToast } from "@/hooks/use-toast";
import { canPublishContent, canManageCategories } from "@/lib/permissions";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { 
  Save, Eye, ArrowLeft, Loader2, FileText, 
  Calendar, User, Hash, Globe, Upload, Image as ImageIcon, AlertTriangle, X, Plus
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
    // Multiple layers of protection to prevent session creation chaos
    if (!postId || !adminUser) {
      console.log('Missing postId or adminUser, skipping session creation');
      return;
    }

    // Don't create if we already have an active session for this post
    if (currentEditingSession && currentEditingSession.postId === postId) {
      console.log('Session already exists for post:', postId);
      return;
    }

    // Rate limiting: Don't create sessions too frequently 
    const now = Date.now();
    if (lastSessionCreation && (now - lastSessionCreation) < 1000) {
      console.log('Rate limiting: Too soon since last session creation');
      return;
    }

    try {
      console.log('Creating editing session for post:', postId);
      setLastSessionCreation(now);
      
      const response = await fetch('/api/admin/editing-sessions', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ postId })
      });
      
      if (response.ok) {
        const session = await response.json();
        console.log('Session created successfully:', session.id);
        setCurrentEditingSession(session);
      } else {
        console.error('Failed to create session:', response.status);
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

  // Handle conflict resolution for the two-way popup system
  const handleConflictResolution = async (action: 'edit' | 'quit') => {
    setShowConflictDialog(false);
    
    if (action === 'edit' && blogId && conflictingUser) {
      // Send edit request to current editor
      try {
        const response = await fetch('/api/admin/edit-requests', {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({
            postId: blogId,
            currentEditorId: conflictingUser.id
          })
        });

        if (response.ok) {
          setConflictRequestPending(true);
          // Start polling for the response
          startPollingForEditRequestResponse();
        } else {
          const error = await response.json();
          toast({
            title: "Error",
            description: error.message || "Failed to send edit request",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error sending edit request:', error);
        toast({
          title: "Error",
          description: "Failed to send edit request",
          variant: "destructive",
        });
      }
    } else {
      // User chose to quit, redirect back to dashboard
      setLocation('/admin/dashboard');
    }
  };

  // Start polling for edit request response
  const startPollingForEditRequestResponse = () => {
    // Clear any existing polling
    if (pollingInterval) {
      clearInterval(pollingInterval);
    }

    const interval = setInterval(async () => {
      try {
        const response = await fetch('/api/admin/edit-requests/for-me', {
          headers: getAuthHeaders(),
        });

        if (response.ok) {
          const requests = await response.json();
          const relevantRequest = requests.find((req: any) => 
            req.postId === blogId && req.status !== 'pending'
          );

          if (relevantRequest) {
            clearInterval(interval);
            setPollingInterval(null);
            setConflictRequestPending(false);

            if (relevantRequest.status === 'approved') {
              toast({
                title: "Access Granted",
                description: `${relevantRequest.requester.username} has allowed you to edit this post.`,
              });
              // Reload the page to start editing
              window.location.reload();
            } else {
              toast({
                title: "Access Denied",
                description: `${relevantRequest.requester.username} has declined your edit request.`,
                variant: "destructive",
              });
              setLocation('/admin/dashboard');
            }
          }
        }
      } catch (error) {
        console.error('Error polling for edit request response:', error);
      }
    }, 2000); // Poll every 2 seconds

    setPollingInterval(interval);
    
    // Auto-timeout after 2 minutes
    setTimeout(() => {
      if (pollingInterval) {
        clearInterval(interval);
        setPollingInterval(null);
        setConflictRequestPending(false);
        toast({
          title: "Request Timeout",
          description: "Your edit request timed out. Please try again.",
          variant: "destructive",
        });
        setLocation('/admin/dashboard');
      }
    }, 120000);
  };

  // Poll for incoming edit requests
  const pollForIncomingEditRequests = () => {
    const interval = setInterval(async () => {
      if (currentEditingSession && blogId) {
        try {
          const response = await fetch(`/api/admin/edit-requests/for-me?t=${Date.now()}`, {
            headers: {
              ...getAuthHeaders(),
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            },
          });

          if (response.ok) {
            const requests = await response.json();
            console.log('Received edit requests:', requests);
            const pendingRequest = requests.find((req: any) => 
              req.postId === blogId && req.status === 'pending'
            );

            if (pendingRequest && !incomingEditRequest) {
              console.log('New incoming edit request:', pendingRequest);
              setIncomingEditRequest(pendingRequest);
              setShowEditRequestDialog(true);
            }
          } else {
            console.log('Failed to fetch edit requests:', response.status);
          }
        } catch (error) {
          console.error('Error polling for incoming edit requests:', error);
        }
      }
    }, 2000); // Poll every 2 seconds for real-time

    return interval;
  };

  // Handle incoming edit request response
  const handleEditRequestResponse = async (action: 'approve' | 'decline') => {
    if (!incomingEditRequest) return;

    try {
      const response = await fetch(`/api/admin/edit-requests/${incomingEditRequest.id}`, {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify({ action })
      });

      if (response.ok) {
        setShowEditRequestDialog(false);
        setIncomingEditRequest(null);

        if (action === 'approve') {
          toast({
            title: "Access Granted",
            description: `You've granted ${incomingEditRequest.requester.username} access to edit this post.`,
          });
          // Redirect to dashboard as editing session is transferred
          setLocation('/admin/dashboard');
        } else {
          toast({
            title: "Access Denied",
            description: `You've declined ${incomingEditRequest.requester.username}'s edit request.`,
          });
        }
      }
    } catch (error) {
      console.error('Error responding to edit request:', error);
    }
  };

  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [editorMounted, setEditorMounted] = useState(false);
  const [editorMode, setEditorMode] = useState<'rich' | 'html'>('rich');
  const [htmlContent, setHtmlContent] = useState('');
  const { toast } = useToast();
  
  // Editing session management
  const [currentEditingSession, setCurrentEditingSession] = useState<any>(null);
  const [lastSessionCreation, setLastSessionCreation] = useState<number | null>(null);
  const [showConflictDialog, setShowConflictDialog] = useState(false);
  const [conflictingUser, setConflictingUser] = useState<any>(null);
  const [conflictRequestPending, setConflictRequestPending] = useState(false);
  
  // Edit request management
  const [showEditRequestDialog, setShowEditRequestDialog] = useState(false);
  const [incomingEditRequest, setIncomingEditRequest] = useState<any>(null);
  const [pollingInterval, setPollingInterval] = useState<NodeJS.Timeout | null>(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [showBlockMenu, setShowBlockMenu] = useState(false);
  const [blockMenuPosition, setBlockMenuPosition] = useState({ top: 0, left: 0 });
  const [currentQuill, setCurrentQuill] = useState<any>(null);
  
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
  
  // Customize toolbar button and handle block menu
  useEffect(() => {
    const handleShowBlockMenu = (event: any) => {
      const quill = event.detail.quill;
      setCurrentQuill(quill);
      
      // Get the button position
      const button = document.querySelector('.ql-addBlock');
      if (button) {
        const rect = button.getBoundingClientRect();
        setBlockMenuPosition({
          top: rect.bottom + 5,
          left: rect.left
        });
        setShowBlockMenu(true);
      }
    };
    
    document.addEventListener('showBlockMenu', handleShowBlockMenu);
    return () => {
      document.removeEventListener('showBlockMenu', handleShowBlockMenu);
    };
  }, []);
  
  // Customize the Add Block button in the toolbar
  useEffect(() => {
    if (editorMounted) {
      const button = document.querySelector('.ql-addBlock');
      if (button && !button.innerHTML) {
        button.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`;
        button.setAttribute('title', 'Add Block (+)');
      }
    }
  }, [editorMounted]);
  
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

  // Fetch categories from API
  const { data: categories = [], isLoading: categoriesLoading, refetch: refetchCategories } = useQuery({
    queryKey: ["/api/admin/categories"],
    queryFn: async () => {
      const response = await fetch('/api/admin/categories', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      return response.json();
    },
    enabled: authChecked,
    staleTime: 0, // Always consider data stale
    gcTime: 0, // Don't cache in memory
  });

  // Fetch admin users for author selection
  const { data: adminUsers = [] } = useQuery({
    queryKey: ["/api/admin/users"],
    queryFn: async () => {
      const response = await fetch('/api/admin/users', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch admin users');
      }
      return response.json();
    },
    enabled: authChecked,
  });

  // Fetch categories for a blog post when editing
  const { data: postCategories = [], isLoading: postCategoriesLoading } = useQuery({
    queryKey: ["/api/admin/blog-posts", blogId, "categories"],
    queryFn: async () => {
      const response = await fetch(`/api/admin/blog-posts/${blogId}/categories`, {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch post categories');
      }
      return response.json();
    },
    enabled: isEditing && !!blogId && authChecked
  });

  // Create category mutation
  const createCategoryMutation = useMutation({
    mutationFn: async (name: string) => {
      const response = await fetch("/api/admin/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create category");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/categories"] });
      refetchCategories(); // Force refetch categories
      setNewCategoryName("");
      setIsCreatingCategory(false);
      toast({
        title: "Success",
        description: "Category created successfully"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create category",
        variant: "destructive"
      });
    }
  });

  // Handle creating new category
  const handleCreateCategory = () => {
    if (!newCategoryName.trim()) {
      toast({
        title: "Error",
        description: "Category name cannot be empty",
        variant: "destructive"
      });
      return;
    }
    createCategoryMutation.mutate(newCategoryName.trim());
  };

  // Handle category selection
  const handleCategoryToggle = (categoryId: number, checked: boolean) => {
    setSelectedCategoryIds(prev => {
      if (checked) {
        return [...prev, categoryId];
      } else {
        return prev.filter(id => id !== categoryId);
      }
    });
    
    // Update form value for validation
    setValue('categoryIds', selectedCategoryIds);
  };

  // Get selected categories for display
  const getSelectedCategoriesText = () => {
    if (selectedCategoryIds.length === 0) return "No categories selected";
    const selectedCategories = categories.filter((cat: any) => selectedCategoryIds.includes(cat.id));
    return selectedCategories.map((cat: any) => cat.name).join(", ");
  };

  const contentRef = useRef<HTMLTextAreaElement>(null);
  const editorRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Block insertion functions
  const insertBlockAtCursor = (blockType: string) => {
    if (!currentQuill) return;
    
    const range = currentQuill.getSelection();
    if (!range) return;
    
    let blockHtml = '';
    
    switch (blockType) {
      case 'faq':
        blockHtml = `
          <div class="content-block faq-block" style="margin: 1.5rem 0; padding: 1rem; border: 2px dashed #60a5fa; border-radius: 0.5rem; background: #eff6ff;">
            <div class="block-label" style="font-weight: 600; color: #2563eb; margin-bottom: 0.5rem; font-size: 0.875rem;">FAQ BLOCK</div>
            <div style="background: white; padding: 1rem; border-radius: 0.375rem;">
              <p style="margin: 0; font-weight: 500;">Click here to add your question</p>
              <p style="margin: 0.5rem 0 0 0; color: #6b7280;">Click here to add your answer...</p>
            </div>
          </div>
        `;
        break;
      case 'table':
        blockHtml = `
          <div class="content-block table-block" style="margin: 1.5rem 0; padding: 1rem; border: 2px dashed #10b981; border-radius: 0.5rem; background: #ecfdf5;">
            <div class="block-label" style="font-weight: 600; color: #059669; margin-bottom: 0.5rem; font-size: 0.875rem;">TABLE BLOCK</div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><th style="border: 1px solid #d1d5db; padding: 0.5rem; background: #f3f4f6;">Header 1</th><th style="border: 1px solid #d1d5db; padding: 0.5rem; background: #f3f4f6;">Header 2</th></tr>
              <tr><td style="border: 1px solid #d1d5db; padding: 0.5rem;">Cell 1</td><td style="border: 1px solid #d1d5db; padding: 0.5rem;">Cell 2</td></tr>
            </table>
          </div>
        `;
        break;
      case 'html':
        blockHtml = `
          <div class="content-block html-block" style="margin: 1.5rem 0; padding: 1rem; border: 2px dashed #f59e0b; border-radius: 0.5rem; background: #fef3c7;">
            <div class="block-label" style="font-weight: 600; color: #d97706; margin-bottom: 0.5rem; font-size: 0.875rem;">HTML BLOCK</div>
            <div style="background: white; padding: 1rem; border-radius: 0.375rem;">
              <p style="margin: 0;">Add custom HTML content here</p>
            </div>
          </div>
        `;
        break;
      case 'button':
        blockHtml = `
          <div class="content-block button-block" style="margin: 1.5rem 0; padding: 1rem; border: 2px dashed #8b5cf6; border-radius: 0.5rem; background: #f5f3ff; text-align: center;">
            <div class="block-label" style="font-weight: 600; color: #7c3aed; margin-bottom: 0.5rem; font-size: 0.875rem;">BUTTON BLOCK</div>
            <button style="background: #8b5cf6; color: white; padding: 0.75rem 2rem; border-radius: 0.5rem; border: none; font-weight: 500; cursor: pointer;">Click Me</button>
          </div>
        `;
        break;
      case 'image':
        blockHtml = `
          <div class="content-block image-block" style="margin: 1.5rem 0; padding: 1rem; border: 2px dashed #ec4899; border-radius: 0.5rem; background: #fdf2f8; text-align: center;">
            <div class="block-label" style="font-weight: 600; color: #db2777; margin-bottom: 0.5rem; font-size: 0.875rem;">IMAGE BLOCK</div>
            <div style="background: #f3f4f6; padding: 2rem; border-radius: 0.375rem;">
              <p style="margin: 0; color: #6b7280;">Image placeholder - Click to upload</p>
            </div>
          </div>
        `;
        break;
      case 'youtube':
        blockHtml = `
          <div class="content-block youtube-block" style="margin: 1.5rem 0; padding: 1rem; border: 2px dashed #ef4444; border-radius: 0.5rem; background: #fef2f2; text-align: center;">
            <div class="block-label" style="font-weight: 600; color: #dc2626; margin-bottom: 0.5rem; font-size: 0.875rem;">YOUTUBE BLOCK</div>
            <div style="background: #000; padding: 3rem; border-radius: 0.375rem;">
              <p style="margin: 0; color: white;">YouTube Video Embed</p>
            </div>
          </div>
        `;
        break;
      case 'spacer':
        blockHtml = `<div class="content-block spacer-block" style="height: 3rem; margin: 1rem 0; background: repeating-linear-gradient(90deg, #e5e7eb 0, #e5e7eb 10px, transparent 10px, transparent 20px);"></div>`;
        break;
      case 'divider':
        blockHtml = `<hr class="content-block divider-block" style="margin: 2rem 0; border: none; border-top: 2px solid #e5e7eb;" />`;
        break;
    }
    
    currentQuill.clipboard.dangerouslyPasteHTML(range.index, blockHtml + '<p><br></p>');
    setShowBlockMenu(false);
  };

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
      status: "draft",
      content: "",
      category: "General", // Default category
      categoryIds: [], // Default to no categories selected
      publishedAt: "", // Don't pre-fill - only set when actually publishing
      authorId: adminUser?.id, // Default to current user
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
        ['addBlock'], // Custom Add Block button
        ['clean']
      ],
      handlers: {
        'addBlock': function(this: any) {
          // This handler will be triggered by clicking the toolbar button
          // The actual dropdown logic will be handled by a separate click event
          const event = new CustomEvent('showBlockMenu', { 
            detail: { quill: this.quill } 
          });
          document.dispatchEvent(event);
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
          contentBlocks: blogPost.contentBlocks || [],
          category: blogPost.category || "General",
          categoryIds: selectedCategoryIds,
          metaDescription: blogPost.metaDescription || "",
          focusKeyword: blogPost.focusKeyword || "",
          featuredImage: blogPost.featuredImage || "",
          featuredImageAlt: blogPost.featuredImageAlt || "",
          featuredImageTitle: blogPost.featuredImageTitle || "",
          featuredImageOriginalName: blogPost.featuredImageOriginalName || "",
          authorId: blogPost.authorId || adminUser?.id,
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
  }, [blogPost, isEditing, reset, setValue, selectedCategoryIds]);

  // Update selected categories when post categories are loaded
  useEffect(() => {
    if (postCategories && postCategories.length > 0) {
      const categoryIds = postCategories.map((cat: any) => cat.id);
      setSelectedCategoryIds(categoryIds);
    }
  }, [postCategories]);

  // Check for editing conflicts and start editing session when opening an existing post
  useEffect(() => {
    const initializeEditingSession = async () => {
      if (isEditing && blogId && adminUser && authChecked) {
        console.log('Initializing editing session for post:', blogId);
        const canEdit = await checkEditingConflicts(blogId);
        if (canEdit) {
          await startEditingSession(blogId);
        }
      }
    };

    initializeEditingSession();

    // Start polling for incoming edit requests when editing starts
    let requestsPollingInterval: NodeJS.Timeout | null = null;
    let takeoverPollingInterval: NodeJS.Timeout | null = null;
    
    if (currentEditingSession && blogId) {
      requestsPollingInterval = pollForIncomingEditRequests();
      
      // Poll for takeover events (check if session still exists)
      takeoverPollingInterval = setInterval(async () => {
        try {
          const response = await fetch(`/api/admin/editing-sessions/check/${currentEditingSession.id}`, {
            headers: getAuthHeaders(),
          });
          
          if (!response.ok || response.status === 404) {
            // Session was ended (probably by admin takeover)
            toast({
              title: "Post Taken Over",
              description: "An admin has taken control of this post. You are being redirected to the dashboard.",
              variant: "destructive",
            });
            
            // Redirect to dashboard
            setTimeout(() => {
              setLocation('/admin/dashboard');
            }, 2000);
          }
        } catch (error) {
          console.error('Error checking for takeover:', error);
        }
      }, 3000); // Check every 3 seconds
    }

    // Cleanup editing session when component unmounts or user navigates away
    return () => {
      if (currentEditingSession) {
        endEditingSession();
      }
      if (requestsPollingInterval) {
        clearInterval(requestsPollingInterval);
      }
      if (takeoverPollingInterval) {
        clearInterval(takeoverPollingInterval);
      }
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, [isEditing, blogId, adminUser, authChecked]); // Removed currentEditingSession to prevent infinite loop

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

  // Handle browser close/refresh events for better session cleanup
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (currentEditingSession) {
        // Use sendBeacon for reliable cleanup on page unload
        const payload = JSON.stringify({ sessionId: currentEditingSession.id });
        navigator.sendBeacon(
          `/api/admin/editing-sessions/${currentEditingSession.id}`,
          new Blob([payload], { type: 'application/json' })
        );
      }
    };

    // Remove overly aggressive visibility change handler that was causing
    // constant session creation/deletion when switching tabs

    window.addEventListener('beforeunload', handleBeforeUnload);
    // Removed visibilitychange listener that was too aggressive

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Removed visibilitychange cleanup
    };
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
      
      const result = await response.json();
      
      // Save categories for the blog post - if none selected, use General category
      const postId = isEditing ? blogId : result.post?.id;
      if (postId) {
        let categoryIdsToSave = selectedCategoryIds;
        
        // If no categories selected, use General category as default
        if (categoryIdsToSave.length === 0) {
          const generalCategory = categories.find((cat: any) => cat.name === "General");
          if (generalCategory) {
            categoryIdsToSave = [generalCategory.id];
          }
        }
        
        const categoriesResponse = await fetch(`/api/admin/blog-posts/${postId}/categories`, {
          method: "POST",
          body: JSON.stringify({ categoryIds: categoryIdsToSave }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!categoriesResponse.ok) {
          console.error('Failed to save categories:', categoriesResponse.statusText);
        }
      }
      
      return result;
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
    console.log('Form errors:', errors);
    setIsSaving(true);
    try {
      await saveMutation.mutateAsync(data);
    } catch (error) {
      console.error('Save error:', error);
      console.error('Error details:', JSON.stringify(error));
    } finally {
      setIsSaving(false);
    }
  };

  // ReactQuill now handled via Controller - no manual handler needed

  // Handle media selection from media library
  const handleMediaSelection = (media: Media) => {
    // Set featured image fields with selected media
    setValue("featuredImage", media.url);
    setValue("featuredImageAlt", media.alt || "");
    setValue("featuredImageOriginalName", media.originalName);
    
    // Close the modal
    setShowMediaModal(false);
    
    toast({
      title: "Media Selected",
      description: `Selected ${media.originalName} as featured image`,
    });
  };

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
        // For featured image - store URL and original filename
        setValue("featuredImage", url);
        setValue("featuredImageOriginalName", file.name);
        setShowImageUpload(false);
      } else {
        // For content image - insert directly into ReactQuill (no automatic links)
        const quillEditor = document.querySelector('.ql-editor');
        if (quillEditor) {
          const imageHtml = `<p><img loading="lazy" src="${url}" alt="${file.name}" style="max-width: 100%; height: auto;" /></p>`;
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
                type="submit"
                form="blog-form"
                disabled={isSaving || isImageUploading}
                className="flex items-center space-x-2 bg-[#1D50C9] hover:bg-[#1642a8] text-white"
                onClick={() => {
                  console.log('Save Draft button clicked');
                  setValue('isPublished', false);
                  setValue('status', 'draft');
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

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Hash className="w-5 h-5" />
                    <span>Categories</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Category selection dropdown */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">
                        Select Categories
                      </Label>
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
                              refetchCategories(); // Refresh categories when dropdown opens
                            }
                          }}
                        >
                          <SelectTrigger data-testid="dropdown-categories">
                            <SelectValue placeholder="Choose categories to add..." />
                          </SelectTrigger>
                          <SelectContent>
                            {(() => {
                              // Organize categories hierarchically
                              const availableCategories = categories.filter((category: any) => !selectedCategoryIds.includes(category.id));
                              const parentCategories = availableCategories.filter((cat: any) => !cat.parentId);
                              const childCategories = availableCategories.filter((cat: any) => cat.parentId);
                              
                              const hierarchicalItems: any[] = [];
                              
                              // Add parent categories first
                              parentCategories.forEach((parent: any) => {
                                hierarchicalItems.push(
                                  <SelectItem key={parent.id} value={parent.id.toString()}>
                                    <div className="flex items-center">
                                      <span className="font-medium">{parent.name}</span>
                                      <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Parent</span>
                                    </div>
                                  </SelectItem>
                                );
                                
                                // Add child categories under each parent
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
                              
                              // Add orphaned child categories (children without visible parents)
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
                    </div>

                    {/* Selected categories display with remove buttons */}
                    {selectedCategoryIds.length > 0 && (
                      <div>
                        <Label className="text-sm font-medium mb-2 block">
                          Selected Categories ({selectedCategoryIds.length})
                        </Label>
                        <div className="flex flex-wrap gap-2">
                          {selectedCategoryIds.map((categoryId) => {
                            const category = categories.find((cat: any) => cat.id === categoryId);
                            if (!category) return null;
                            
                            return (
                              <div key={categoryId} className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg px-3 py-2">
                                <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                                  {category.name}
                                </span>
                                {category.focusKeyword && (
                                  <Badge variant="outline" className="text-xs">
                                    {category.focusKeyword}
                                  </Badge>
                                )}
                                <button
                                  type="button"
                                  onClick={() => handleCategoryToggle(categoryId, false)}
                                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 ml-2"
                                  data-testid={`remove-category-${category.slug}`}
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}


                    {/* Backward compatibility with single category */}
                    <input type="hidden" {...register("category")} value={categories.find((cat: any) => selectedCategoryIds.includes(cat.id))?.name || "General"} />
                  </div>

                  {/* Add new category section */}
                  {canManageCategories(adminUser) && (
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Input
                          placeholder="Create new category"
                          value={newCategoryName}
                          onChange={(e) => setNewCategoryName(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleCreateCategory()}
                          disabled={createCategoryMutation.isPending}
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
                      <p className="text-xs text-gray-500 mt-1">
                        New categories will be available immediately for all blog posts.
                      </p>
                    </div>
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

              {/* Content Preview with Blocks */}
              {((watch("contentBlocks") as ContentBlock[] | undefined)?.length ?? 0) > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Eye className="w-5 h-5" />
                      <span>Content Preview (with blocks)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-lg p-6 bg-white">
                      {/* Integrated preview of content with blocks at correct positions */}
                      <div className="prose prose-sm max-w-none">
                        <ContentBlocksRenderer 
                          blocks={(watch("contentBlocks") as ContentBlock[]) || []} 
                          content={(watch("content") as string) || ''}
                          integrated={true}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      This preview shows your content with blocks inserted at their selected positions.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Content Blocks */}
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Content Blocks</CardTitle>
                </CardHeader>
                <CardContent>
                  <Controller
                    name="contentBlocks"
                    control={control}
                    render={({ field }) => (
                      <ContentBlocks
                        blocks={field.value || []}
                        onChange={field.onChange}
                        content={watch("content") as string || ''}
                      />
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Author Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Author</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select
                    value={watch("authorId")?.toString() || adminUser?.id?.toString() || ""}
                    onValueChange={(value) => setValue("authorId", parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select author" />
                    </SelectTrigger>
                    <SelectContent>
                      {adminUsers.map((user: any) => (
                        <SelectItem key={user.id} value={user.id.toString()}>
                          {user.username} ({user.role})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500 mt-2">
                    Choose the author for this blog post
                  </p>
                </CardContent>
              </Card>

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
                  
                  <div className="space-y-3">
                    <Input
                      {...register("featuredImageAlt")}
                      placeholder="Alt text (for accessibility)"
                      className="text-sm"
                    />
                    <Input
                      {...register("featuredImageTitle")}
                      placeholder="Image title (appears on hover)"
                      className="text-sm"
                    />
                  </div>
                  
                  {watch("featuredImage") && (
                    <div className="mt-2">
                      <img loading="lazy" 
                        src={watch("featuredImage")} 
                        alt={watch("featuredImageAlt") || "Featured image preview"} 
                        title={watch("featuredImageTitle") || "Featured image"}
                        className="max-w-full h-32 object-cover rounded border"
                        loading="lazy"
                        onLoad={() => {}}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {watch("featuredImageOriginalName") && (
                        <p className="text-xs text-gray-500 mt-1">
                          File: {watch("featuredImageOriginalName")}
                        </p>
                      )}
                    </div>
                  )}
                  {!watch("featuredImage") && (
                    <div className="mt-2 text-sm text-gray-500">
                      No featured image selected
                    </div>
                  )}
                  <div className="flex flex-col space-y-2">
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
                    <strong>{incomingEditRequest.requester.username}</strong> ({incomingEditRequest.requester.roles?.join(', ') || 'User'}) wants to edit this post.
                  </p>
                  <p>
                    Do you want to allow them to take control of editing this post? If you approve, your editing session will be closed and they will be able to edit the post.
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="space-x-2">
            <Button 
              variant="outline" 
              onClick={() => handleEditRequestResponse('decline')}
            >
              Decline
            </Button>
            <Button 
              onClick={() => handleEditRequestResponse('approve')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Allow Access
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Media Selection Modal */}
      <MediaSelectionModal
        isOpen={showMediaModal}
        onClose={() => setShowMediaModal(false)}
        onSelect={handleMediaSelection}
        allowedTypes={["image/*"]}
        title="Select Featured Image"
        description="Choose an image from your media library or upload a new one for your blog post."
      />
      
      {/* Block Menu Dropdown */}
      {showBlockMenu && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowBlockMenu(false)}
          />
          <div 
            className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[200px]"
            style={{
              top: `${blockMenuPosition.top}px`,
              left: `${blockMenuPosition.left}px`
            }}
          >
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 border-b">
              INSERT BLOCK
            </div>
            <button
              type="button"
              onClick={() => insertBlockAtCursor('faq')}
              className="w-full px-4 py-2 text-left hover:bg-blue-50 flex items-center gap-2 text-sm"
            >
              <div className="w-3 h-3 rounded bg-blue-500" />
              <span>FAQ Block</span>
            </button>
            <button
              type="button"
              onClick={() => insertBlockAtCursor('table')}
              className="w-full px-4 py-2 text-left hover:bg-green-50 flex items-center gap-2 text-sm"
            >
              <div className="w-3 h-3 rounded bg-green-500" />
              <span>Table Block</span>
            </button>
            <button
              type="button"
              onClick={() => insertBlockAtCursor('html')}
              className="w-full px-4 py-2 text-left hover:bg-yellow-50 flex items-center gap-2 text-sm"
            >
              <div className="w-3 h-3 rounded bg-yellow-500" />
              <span>HTML Block</span>
            </button>
            <button
              type="button"
              onClick={() => insertBlockAtCursor('button')}
              className="w-full px-4 py-2 text-left hover:bg-purple-50 flex items-center gap-2 text-sm"
            >
              <div className="w-3 h-3 rounded bg-purple-500" />
              <span>Button Block</span>
            </button>
            <button
              type="button"
              onClick={() => insertBlockAtCursor('image')}
              className="w-full px-4 py-2 text-left hover:bg-pink-50 flex items-center gap-2 text-sm"
            >
              <div className="w-3 h-3 rounded bg-pink-500" />
              <span>Image Block</span>
            </button>
            <button
              type="button"
              onClick={() => insertBlockAtCursor('youtube')}
              className="w-full px-4 py-2 text-left hover:bg-red-50 flex items-center gap-2 text-sm"
            >
              <div className="w-3 h-3 rounded bg-red-500" />
              <span>YouTube Block</span>
            </button>
            <div className="border-t mt-1 pt-1">
              <button
                type="button"
                onClick={() => insertBlockAtCursor('spacer')}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm"
              >
                <div className="w-3 h-3 rounded bg-gray-400" />
                <span>Spacer</span>
              </button>
              <button
                type="button"
                onClick={() => insertBlockAtCursor('divider')}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm"
              >
                <div className="w-3 h-3 rounded bg-gray-400" />
                <span>Divider</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}