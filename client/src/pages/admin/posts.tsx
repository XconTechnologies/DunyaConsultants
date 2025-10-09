import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  CheckCircle,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { getBlogUrl } from "@/lib/blog-utils";
import { 
  canPublishContent, 
  canDeleteContent, 
  canEditContent,
  canCreateContent,
} from "@/lib/permissions";
import type { AdminUser } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";
import MobileNav from "@/components/admin/mobile-nav";

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

interface Author {
  id: number;
  username: string;
  email: string;
}

export default function AllPosts() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

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

  // Check authentication
  useEffect(() => {
    const checkAuth = () => {
      const adminData = localStorage.getItem("adminUser");
      if (adminData) {
        try {
          const user = JSON.parse(adminData);
          setAdminUser(user);
        } catch (error) {
          console.error('Error parsing admin user data:', error);
          setLocation("/admin/login");
          return;
        }
      } else {
        setLocation("/admin/login");
        return;
      }
      setAuthChecked(true);
    };

    checkAuth();
  }, [setLocation]);

  // Fetch blog posts
  const { data: blogPosts = [], isLoading: blogLoading } = useQuery({
    queryKey: ["/api/admin/blog-posts"],
    enabled: authChecked,
    queryFn: async () => {
      const response = await fetch('/api/admin/blog-posts', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      return response.json();
    },
  });

  // Fetch authors
  const { data: authors = [] } = useQuery({
    queryKey: ["/api/admin/users"],
    enabled: authChecked,
    queryFn: async () => {
      const response = await fetch('/api/admin/users', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch authors');
      }
      return response.json();
    },
  });

  // Get author name helper
  const getAuthorName = (authorId: number) => {
    const author = authors.find((a: Author) => a.id === authorId);
    return author ? author.username : "Unknown";
  };

  // Selection handlers
  const handleSelectBlog = (id: number, checked: boolean) => {
    setSelectedIds(prev => 
      checked ? [...prev, id] : prev.filter(selectedId => selectedId !== id)
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? blogPosts.map((post: BlogPost) => post.id) : []);
  };

  const isAllSelected = selectedIds.length === blogPosts.length && blogPosts.length > 0;

  // Bulk actions
  const bulkPublishMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/blog-posts/bulk-publish', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to publish posts');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Selected posts have been published." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to publish selected posts.", variant: "destructive" });
    },
  });

  const bulkDraftMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/blog-posts/bulk-draft', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to draft posts');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Selected posts have been moved to draft." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to move selected posts to draft.", variant: "destructive" });
    },
  });

  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/blog-posts/bulk-delete', {
        method: 'DELETE',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to delete posts');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Selected posts have been deleted." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete selected posts.", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/blog-posts/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete post');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Blog post deleted successfully." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete blog post.", variant: "destructive" });
    },
  });

  if (!authChecked) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar currentUser={adminUser} />
      
      {/* Mobile Navigation */}
      <MobileNav currentUser={adminUser} />
      
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
              <p className="text-gray-600 mt-2">Manage all blog posts</p>
            </div>
            {canCreateContent(adminUser) && (
              <Button 
                onClick={() => setLocation("/admin/blog-editor")}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Post</span>
              </Button>
            )}
          </div>

          {/* Bulk Actions */}
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

          {/* Posts Table */}
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
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogLoading ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8">
                        Loading blog posts...
                      </TableCell>
                    </TableRow>
                  ) : blogPosts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
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
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">General</Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-500">
                          {post.publishedAt 
                            ? new Date(post.publishedAt).toLocaleDateString()
                            : new Date(post.createdAt).toLocaleDateString()
                          }
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={post.isPublished ? "default" : "secondary"}
                            className={post.isPublished ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                          >
                            {post.isPublished ? "Published" : "Draft"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          {getAuthorName(post.authorId)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            {post.isPublished && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => window.open(getBlogUrl(post.slug), '_blank')}
                                data-testid={`button-view-blog-${post.id}`}
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                            )}
                            {canEditContent(adminUser) && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setLocation(`/admin/blog-editor/${post.id}`)}
                                data-testid={`button-edit-blog-${post.id}`}
                              >
                                <Edit2 className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                            )}
                            {canDeleteContent(adminUser) && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  if (window.confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
                                    deleteMutation.mutate(post.id);
                                  }
                                }}
                                data-testid={`button-delete-blog-${post.id}`}
                                className="text-red-600 hover:text-red-800"
                              >
                                <Trash2 className="w-4 h-4 mr-1" />
                                Delete
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
  );
}