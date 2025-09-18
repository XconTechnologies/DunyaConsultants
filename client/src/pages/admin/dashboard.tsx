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
} from "lucide-react";

interface AdminUser {
  id: number;
  username: string;
  email: string;
  role: string;
}

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

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const user = localStorage.getItem("adminUser");
    
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

  // Get auth token
  const getAuthHeaders = () => {
    const token = localStorage.getItem("adminToken");
    return {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  // Fetch all blog posts without pagination
  const { data: blogPosts = [], isLoading: blogLoading, refetch: refetchBlogs } = useQuery({
    queryKey: ["/api/admin/blog-posts"],
    enabled: authChecked && !!adminUser,
    queryFn: async () => {
      const response = await fetch("/api/admin/blog-posts?limit=100", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to fetch blog posts");
      return response.json();
    },
  });



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

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    setLocation("/admin/login");
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 #1845B3 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-8 h-8 #1845B3" />
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, <span className="font-medium">{adminUser.username}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogPosts.length}</div>
              <p className="text-xs text-muted-foreground">
                {blogPosts.filter((post: BlogPost) => post.isPublished).length} published
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Blog Posts Management */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Blog Posts Management</h2>
            <Button 
              onClick={() => setLocation("/admin/blog-editor")}
              className="flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Post</span>
            </Button>
          </div>

          {/* Bulk Actions */}
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <span className="text-sm text-blue-700 font-medium">
                {selectedIds.length} blog{selectedIds.length === 1 ? '' : 's'} selected
              </span>
              <div className="flex gap-2">
                <Button
                  data-testid="button-bulk-publish"
                  size="sm"
                  variant="default"
                  disabled={selectedIds.length === 0}
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to publish ${selectedIds.length} selected blog post${selectedIds.length === 1 ? '' : 's'}?`)) {
                      // TODO: Add bulk publish mutation
                      console.log('Bulk publish:', selectedIds);
                    }
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Publish Selected
                </Button>
                <Button
                  data-testid="button-bulk-draft"
                  size="sm"
                  variant="outline"
                  disabled={selectedIds.length === 0}
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to move ${selectedIds.length} selected blog post${selectedIds.length === 1 ? '' : 's'} to draft?`)) {
                      // TODO: Add bulk draft mutation
                      console.log('Bulk draft:', selectedIds);
                    }
                  }}
                >
                  <FileText className="w-4 h-4 mr-1" />
                  Draft Selected
                </Button>
                <Button
                  data-testid="button-bulk-delete"
                  size="sm"
                  variant="destructive"
                  disabled={selectedIds.length === 0}
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to DELETE ${selectedIds.length} selected blog post${selectedIds.length === 1 ? '' : 's'}? This action cannot be undone.`)) {
                      // TODO: Add bulk delete mutation
                      console.log('Bulk delete:', selectedIds);
                    }
                  }}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete Selected
                </Button>
              </div>
            </div>
          )}

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        data-testid="checkbox-select-all"
                        checked={isAllSelected}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Created</TableHead>
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
                          <Checkbox
                            data-testid={`checkbox-select-blog-${post.id}`}
                            checked={selectedIds.includes(post.id)}
                            onCheckedChange={(checked) => handleSelectBlog(post.id, checked as boolean)}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>
                          <Badge variant={post.isPublished ? "default" : "secondary"}>
                            {post.isPublished ? "Published" : "Draft"}
                          </Badge>
                        </TableCell>
                        <TableCell>{post.views || 0}</TableCell>
                        <TableCell>{new Date(post.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                              title="View Article"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setLocation(`/admin/blog-editor/${post.id}`)}
                              title="Edit Article"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            {!post.isPublished && (
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
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDelete("blog", post.id)}
                              title="Delete Article"
                              className="#1845B3 hover:text-#1a73e8"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
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
  );
}