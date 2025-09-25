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

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  isPublished: boolean;
  publishedAt: Date | null;
  authorId: number;
  tags: string[];
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
    const canEdit = await checkEditingConflicts(postId);
    if (canEdit) {
      // No conflict, navigate directly to editor
      setLocation(`/admin/blog-editor/${postId}`);
    }
    // If there's a conflict, the dialog will handle the rest
  };

  // Handle conflict resolution for the two-way popup system
  const handleConflictResolution = async (action: 'edit' | 'quit') => {
    setShowConflictDialog(false);
    
    if (action === 'edit' && pendingPostId && conflictingUser) {
      // Send edit request to current editor
      try {
        const response = await fetch('/api/admin/edit-requests', {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({
            postId: pendingPostId,
            currentEditorId: conflictingUser.id
          })
        });

        if (response.ok) {
          setConflictRequestPending(true);
          // Start polling for the response
          startPollingForEditRequestResponse();
          toast({
            title: "Request Sent",
            description: `Your edit request has been sent to ${conflictingUser.username}. Waiting for response...`,
          });
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

  // Fetch active editing sessions for real-time editing status
  const { data: editingSessions = [] } = useQuery({
    queryKey: ["/api/admin/editing-sessions/all"],
    enabled: authChecked && !!adminUser,
    refetchInterval: 10000, // Poll every 10 seconds for real-time updates
    queryFn: async () => {
      const response = await fetch("/api/admin/editing-sessions/all", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) return [];
      return response.json();
    },
  });

  // Helper function to get editing status for a post
  const getEditingStatus = (postId: number) => {
    const session = editingSessions.find((s: any) => s.postId === postId && s.isActive);
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
        <header className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Content Dashboard</h1>
                  <p className="text-blue-100 text-sm">
                    {adminUser.role === 'admin' ? 'Full Access' : 'Editor Access'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-blue-100">Welcome back,</div>
                <div className="font-medium text-white">{adminUser.username}</div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards - Only visible for users with analytics permission */}
        {canViewAnalytics(adminUser) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
        </div>
        )}

        {/* Blog Posts Management */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Blog Posts Management</h2>
            {canCreateContent(adminUser) && (
              <Button 
                onClick={() => setLocation("/blog-editor")}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Post</span>
              </Button>
            )}
          </div>

          {/* Bulk Actions - Only show if user has permission for any bulk action */}
          {selectedIds.length > 0 && (canPublishContent(adminUser) || canEditContent(adminUser) || canDeleteContent(adminUser)) && (
            <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#1D50C9]/20 rounded-xl shadow-sm">
              <span className="text-sm text-[#1D50C9] font-medium">
                {selectedIds.length} blog{selectedIds.length === 1 ? '' : 's'} selected
              </span>
              <div className="flex gap-2">
                {canPublishContent(adminUser) && (
                  <Button
                    data-testid="button-bulk-publish"
                    size="sm"
                    variant="default"
                    disabled={selectedIds.length === 0}
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to publish ${selectedIds.length} selected blog post${selectedIds.length === 1 ? '' : 's'}?`)) {
                        bulkPublishMutation.mutate(selectedIds);
                      }
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Publish Selected
                  </Button>
                )}
                {canEditContent(adminUser) && (
                  <Button
                    data-testid="button-bulk-draft"
                    size="sm"
                    variant="outline"
                    disabled={selectedIds.length === 0}
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to move ${selectedIds.length} selected blog post${selectedIds.length === 1 ? '' : 's'} to draft?`)) {
                        bulkDraftMutation.mutate(selectedIds);
                      }
                    }}
                    className="border-[#1D50C9] text-[#1D50C9] hover:bg-[#1D50C9]/10"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    Draft Selected
                  </Button>
                )}
                {canDeleteContent(adminUser) && (
                  <Button
                    data-testid="button-bulk-delete"
                    size="sm"
                    variant="destructive"
                    disabled={selectedIds.length === 0}
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to DELETE ${selectedIds.length} selected blog post${selectedIds.length === 1 ? '' : 's'}? This action cannot be undone.`)) {
                        bulkDeleteMutation.mutate(selectedIds);
                      }
                    }}
                    className="shadow-sm"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete Selected
                  </Button>
                )}
              </div>
            </div>
          )}

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      {(canPublishContent(adminUser) || canEditContent(adminUser) || canDeleteContent(adminUser)) && (
                        <Checkbox
                          data-testid="checkbox-select-all"
                          checked={isAllSelected}
                          onCheckedChange={handleSelectAll}
                        />
                      )}
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogLoading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        Loading blog posts...
                      </TableCell>
                    </TableRow>
                  ) : blogPosts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                        No blog posts found. Create your first post!
                      </TableCell>
                    </TableRow>
                  ) : (
                    blogPosts.map((post: BlogPost) => (
                      <TableRow key={post.id}>
                        <TableCell>
                          {(canPublishContent(adminUser) || canEditContent(adminUser) || canDeleteContent(adminUser)) && (
                            <Checkbox
                              data-testid={`checkbox-select-blog-${post.id}`}
                              checked={selectedIds.includes(post.id)}
                              onCheckedChange={(checked) => handleSelectBlog(post.id, checked as boolean)}
                            />
                          )}
                        </TableCell>
                        <TableCell className="font-medium">
                          <div>
                            <div>{post.title}</div>
                            {(() => {
                              const editStatus = getEditingStatus(post.id);
                              return editStatus.isBeingEdited ? (
                                <div className="text-xs text-orange-600 mt-1 flex items-center space-x-1">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                                  <span>{editStatus.editingUser?.username} is editing</span>
                                </div>
                              ) : null;
                            })()}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          {post.isPublished && post.publishedAt 
                            ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short', 
                                day: 'numeric'
                              })
                            : new Date(post.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })
                          }
                          <div className="text-xs text-gray-400">
                            {post.isPublished && post.publishedAt ? 'Published' : 'Created'}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={post.isPublished ? "default" : "secondary"}>
                            {post.isPublished ? "Published" : "Draft"}
                          </Badge>
                        </TableCell>
                        <TableCell>{post.views || 0}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => window.open(getBlogUrl(post.slug), '_blank')}
                              title="View Article"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            {canEditContent(adminUser) && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditPost(post.id)}
                                title="Edit Article"
                              >
                                <Edit2 className="w-4 h-4" />
                              </Button>
                            )}
                            {!post.isPublished && canPublishContent(adminUser) && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handlePublish(post.id)}
                                title="Publish Article"
                                className="#1845B3 hover:text-#1a73e8"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                            )}
                            {canDeleteContent(adminUser) && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDelete("blog", post.id)}
                                title="Delete Article"
                                className="#1845B3 hover:text-#1a73e8"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
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
                    <strong>{conflictingUser.username}</strong> ({conflictingUser.role}) is currently editing this post.
                  </p>
                  <p>
                    You can request access from them, or come back later when they're done editing.
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
              Cancel
            </Button>
            <Button 
              onClick={() => handleConflictResolution('edit')}
              disabled={conflictRequestPending}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {conflictRequestPending ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Requesting...</span>
                </div>
              ) : (
                "Request Access"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}