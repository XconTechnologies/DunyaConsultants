import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useToast } from "@/hooks/use-toast";
import {
  BarChart3,
  BookOpen,
  FileText,
  Settings,
  Plus,
  Edit2,
  Trash2,
  Eye,
  LogOut,
  Users,
  Activity,
  CheckCircle,
  AlertTriangle,
  Tag,
  ExternalLink,
} from "lucide-react";
import { getBlogUrl } from "@/lib/blog-utils";
import { 
  canManageUsers, 
  canPublishContent, 
  canDeleteContent, 
  canEditContent,
  canCreateContent,
  canViewAnalytics,
  isAdmin 
} from "@/lib/permissions";
import type { AdminUser } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  isPublished: boolean;
  publishedAt: Date | null;
  authorId: number;
  metaTitle: string | null;
  metaDescription: string | null;
  featuredImage: string | null;
  readingTime: number | null;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}



export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch categories for count
  const { data: categories = [] } = useQuery({
    queryKey: ["/api/admin/categories"],
    enabled: authChecked && !!adminUser,
    queryFn: async () => {
      const response = await fetch('/api/admin/categories', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      return response.json();
    },
  });
  
  // Edit conflict state management
  const [showConflictDialog, setShowConflictDialog] = useState(false);
  const [conflictingUser, setConflictingUser] = useState<any>(null);
  const [pendingPostId, setPendingPostId] = useState<number | null>(null);
  const [conflictRequestPending, setConflictRequestPending] = useState(false);
  const [pollingInterval, setPollingInterval] = useState<NodeJS.Timeout | null>(null);

  // Get auth headers helper
  const getAuthHeaders = () => {
    const adminToken = localStorage.getItem("adminToken");
    const userToken = localStorage.getItem("userToken");
    const token = adminToken || userToken;
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  };

  // Check for editing conflicts before opening post
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
          setPendingPostId(postId);
          setShowConflictDialog(true);
          return false; // Block editing
        }
      }
      return true; // Allow editing
    } catch (error) {
      console.error('Error checking editing conflicts:', error);
      return true; // Allow editing on error
    }
  };

  // Handle edit button click with conflict checking
  const handleEditPost = async (postId: number) => {
    // Check if user is admin - admins can takeover posts
    const isAdmin = adminUser?.role === 'admin';
    
    if (isAdmin) {
      // Admin takeover - check for existing sessions and handle takeover
      const sessions = await fetch(`/api/admin/posts/${postId}/editing-sessions`, {
        headers: getAuthHeaders(),
      });
      
      if (sessions.ok) {
        const sessionsData = await sessions.json();
        const otherUsersSessions = sessionsData.filter((session: any) => session.userId !== adminUser?.id);
        
        if (otherUsersSessions.length > 0) {
          // Admin takes over - end other sessions and notify them
          try {
            await fetch('/api/admin/editing-sessions/takeover', {
              method: 'POST',
              headers: getAuthHeaders(),
              body: JSON.stringify({ postId, takeoverUserId: adminUser.id })
            });
            
            toast({
              title: "Post Taken Over",
              description: "You have taken control of this post. Other editors have been notified.",
            });
          } catch (error) {
            console.error('Error during admin takeover:', error);
          }
        }
      }
      
      // Navigate to editor regardless (admin always gets access)
      setLocation(`/admin/blog-editor/${postId}`);
    } else {
      // Non-admin users need conflict checking
      const canEdit = await checkEditingConflicts(postId);
      if (canEdit) {
        // No conflict, navigate directly to editor
        setLocation(`/admin/blog-editor/${postId}`);
      }
      // If there's a conflict, the dialog will handle the rest
    }
  };

  // Handle conflict resolution for the two-way popup system
  const handleConflictResolution = async (action: 'edit' | 'quit') => {
    setShowConflictDialog(false);
    
    if (action === 'edit' && pendingPostId && conflictingUser) {
      // Send edit request to current editor
      try {
        console.log('Sending edit request:', { postId: pendingPostId, currentEditorId: conflictingUser.id });
        const response = await fetch('/api/admin/edit-requests', {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({
            postId: pendingPostId,
            currentEditorId: conflictingUser.id
          })
        });

        console.log('Edit request response:', response.status);
        
        if (response.ok) {
          const result = await response.json();
          console.log('Edit request created:', result);
          setConflictRequestPending(true);
          // Start polling for the response
          startPollingForEditRequestResponse();
          toast({
            title: "Request Sent",
            description: `Your edit request has been sent to ${conflictingUser.username}. Waiting for response...`,
          });
        } else {
          const error = await response.json();
          console.error('Edit request failed:', error);
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
      // User chose to quit, reset state
      setPendingPostId(null);
      setConflictingUser(null);
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
            req.postId === pendingPostId && req.status !== 'pending'
          );

          if (relevantRequest) {
            clearInterval(interval);
            setPollingInterval(null);
            setConflictRequestPending(false);

            if (relevantRequest.status === 'approved') {
              toast({
                title: "Access Granted",
                description: `${conflictingUser.username} has allowed you to edit this post.`,
              });
              // Navigate to editor
              setLocation(`/admin/blog-editor/${pendingPostId}`);
            } else {
              toast({
                title: "Access Denied",
                description: `${conflictingUser.username} has declined your edit request.`,
                variant: "destructive",
              });
            }
            
            // Reset state
            setPendingPostId(null);
            setConflictingUser(null);
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
        setPendingPostId(null);
        setConflictingUser(null);
      }
    }, 120000);
  };

  // Check authentication - support both admin and user tokens
  useEffect(() => {
    // Check for admin token first
    let token = localStorage.getItem("adminToken");
    let user = localStorage.getItem("adminUser");
    
    // If no admin token, check for user token
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


  // Fetch blog posts - all posts for admin, only assigned posts for other users
  const { data: blogPosts = [], isLoading: blogLoading, refetch: refetchBlogs } = useQuery({
    queryKey: adminUser?.role === 'admin' ? ["/api/admin/blog-posts"] : ["/api/admin/users", adminUser?.id, "posts"],
    enabled: authChecked && !!adminUser,
    queryFn: async () => {
      if (adminUser?.role === 'admin') {
        // Admin sees all posts
        const response = await fetch("/api/admin/blog-posts?limit=100", {
          headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("Failed to fetch blog posts");
        return response.json();
      } else {
        // Non-admin users see only assigned posts
        const response = await fetch(`/api/admin/users/${adminUser?.id}/posts`, {
          headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("Failed to fetch assigned posts");
        return response.json();
      }
    },
  });

  // Fetch categories for blog posts
  const { data: allCategories = [] } = useQuery({
    queryKey: ["/api/admin/categories"],
    enabled: authChecked && !!adminUser,
    queryFn: async () => {
      const response = await fetch("/api/admin/categories", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to fetch categories");
      return response.json();
    }
  });

  // Fetch blog post categories for all posts (with enhanced error handling)
  const { data: blogPostCategories = {} } = useQuery({
    queryKey: ["/api/admin/blog-posts", "categories"],
    enabled: authChecked && !!adminUser && blogPosts.length > 0,
    queryFn: async () => {
      const categoryMap: Record<number, any[]> = {};
      
      // Fetch categories for each blog post
      const promises = blogPosts.map(async (post: any) => {
        try {
          const response = await fetch(`/api/admin/blog-posts/${post.id}/categories`, {
            headers: getAuthHeaders(),
          });
          if (response.ok) {
            const categories = await response.json();
            categoryMap[post.id] = categories;
          } else {
            // Fallback to empty array if fetch fails
            categoryMap[post.id] = [];
          }
        } catch (error) {
          console.error(`Failed to fetch categories for post ${post.id}:`, error);
          categoryMap[post.id] = [];
        }
      });
      
      await Promise.all(promises);
      return categoryMap;
    }
  });

  // Fetch active editing sessions for real-time editing status
  const { data: editingSessions = [] } = useQuery({
    queryKey: ["/api/admin/editing-sessions/all"],
    enabled: authChecked && !!adminUser,
    refetchInterval: 3000, // Poll every 3 seconds for real-time updates
    queryFn: async () => {
      const response = await fetch("/api/admin/editing-sessions/all", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) return [];
      return response.json();
    },
  });

  // Helper function to get editing status for a post (exclude current user's own sessions)
  const getEditingStatus = (postId: number) => {
    const session = editingSessions.find((s: any) => 
      s.postId === postId && 
      s.isActive && 
      s.userId !== adminUser?.id  // Don't show own editing sessions
    );
    return session ? { isBeingEdited: true, editingUser: session.user } : { isBeingEdited: false };
  };



  // Delete mutations
  const deleteBlogMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/blog-posts/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to delete blog post");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      toast({ title: "Success", description: "Blog post deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete blog post", variant: "destructive" });
    },
  });

  const deleteServiceMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to delete service");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-services"] });
      toast({ title: "Success", description: "Service deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete service", variant: "destructive" });
    },
  });

  const deletePageMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/pages/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to delete page");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-pages"] });
      toast({ title: "Success", description: "Page deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete page", variant: "destructive" });
    },
  });

  // Publish blog post mutation
  const publishMutation = useMutation({
    mutationFn: async (id: number) => {
      console.log(`Publishing blog post ${id}`);
      const token = localStorage.getItem("adminToken");
      
      const response = await fetch(`/api/admin/blog-posts/${id}/publish`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status}: ${errorText}`);
      }
      
      const result = await response.json();
      console.log(`Publish result:`, result);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      toast({
        title: "Success", 
        description: "Blog post published successfully",
      });
    },
    onError: (error) => {
      console.error('Publish error:', error);
      toast({
        title: "Error",
        description: `Failed to publish: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  // Bulk publish mutation
  const bulkPublishMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/blog-posts/bulk/publish', {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to bulk publish blog posts');
      return response.json();
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setSelectedIds([]);
      toast({
        title: "Success",
        description: `Successfully published ${result.publishedCount} blog post${result.publishedCount === 1 ? '' : 's'}`,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to publish selected blog posts",
        variant: "destructive",
      });
    },
  });

  // Bulk draft mutation
  const bulkDraftMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/blog-posts/bulk/draft', {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to bulk draft blog posts');
      return response.json();
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setSelectedIds([]);
      toast({
        title: "Success",
        description: `Successfully moved ${result.draftedCount} blog post${result.draftedCount === 1 ? '' : 's'} to draft`,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to move selected blog posts to draft",
        variant: "destructive",
      });
    },
  });

  // Bulk delete mutation
  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/blog-posts/bulk', {
        method: 'DELETE',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to bulk delete blog posts');
      return response.json();
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setSelectedIds([]);
      toast({
        title: "Success",
        description: `Successfully deleted ${result.deletedCount} blog post${result.deletedCount === 1 ? '' : 's'}`,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete selected blog posts",
        variant: "destructive",
      });
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    setLocation("/login");
  };

  const handlePublish = (id: number) => {
    if (window.confirm(`Are you sure you want to publish this blog post?`)) {
      publishMutation.mutate(id);
    }
  };

  const handleDelete = (type: "blog" | "service" | "page", id: number) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      if (type === "blog") deleteBlogMutation.mutate(id);
      if (type === "service") deleteServiceMutation.mutate(id);
      if (type === "page") deletePageMutation.mutate(id);
    }
  };

  // Handle checkbox selection
  const handleSelectBlog = (blogId: number, checked: boolean) => {
    if (checked) {
      setSelectedIds(prev => [...prev, blogId]);
    } else {
      setSelectedIds(prev => prev.filter(id => id !== blogId));
    }
  };

  // Handle select all checkbox
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = blogPosts.map((post: BlogPost) => post.id);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  // Check if all blogs are selected
  const isAllSelected = blogPosts.length > 0 && selectedIds.length === blogPosts.length;
  const isSomeSelected = selectedIds.length > 0 && selectedIds.length < blogPosts.length;

  if (!authChecked || !adminUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Sidebar */}
      <AdminSidebar currentUser={adminUser} />
      
      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <AdminHeader 
          currentUser={adminUser}
          title="Content Dashboard"
          subtitle={adminUser.role === 'admin' ? 'Full Access' : 'Editor Access'}
        />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards - Only visible for users with analytics permission */}
        {canViewAnalytics(adminUser) && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Total Blog Posts</CardTitle>
              <div className="p-2 bg-[#1D50C9] rounded-lg">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1D50C9]">{blogPosts.length}</div>
              <p className="text-xs text-gray-600 mt-1">
                {blogPosts.filter((post: BlogPost) => post.isPublished).length} published
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Published</CardTitle>
              <div className="p-2 bg-green-500 rounded-lg">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {blogPosts.filter((post: BlogPost) => post.isPublished).length}
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Live articles
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-orange-50/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Drafts</CardTitle>
              <div className="p-2 bg-orange-500 rounded-lg">
                <FileText className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">
                {blogPosts.filter((post: BlogPost) => !post.isPublished).length}
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Unpublished articles
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Categories</CardTitle>
              <div className="p-2 bg-purple-500 rounded-lg">
                <Tag className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">
                {categories.length}
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Content categories
              </p>
            </CardContent>
          </Card>
        </div>
        )}

      </div>
      </div>

      {/* Edit Conflict Dialog */}
      <Dialog open={showConflictDialog} onOpenChange={setShowConflictDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <span>Post Being Edited</span>
            </DialogTitle>
            <DialogDescription>
              {conflictingUser && (
                <div className="space-y-3">
                  <p>
                    <strong>{conflictingUser.username}</strong> is currently editing this post.
                  </p>
                  <p>
                    Do you want to request editing access from them?
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
              Quit
            </Button>
            <Button 
              onClick={() => handleConflictResolution('edit')}
              disabled={conflictRequestPending}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {conflictRequestPending ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending Request...</span>
                </div>
              ) : (
                "Send Request"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}