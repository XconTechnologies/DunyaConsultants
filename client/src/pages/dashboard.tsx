import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Edit2, 
  Eye, 
  FileText, 
  Plus, 
  LogOut,
  Calendar,
  User,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { AdminUser, BlogPost } from "@shared/schema";

interface UserDashboardData {
  user: AdminUser;
  assignedPosts: BlogPost[];
  recentActivity: any[];
}

export default function UserDashboard() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [authChecked, setAuthChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const user = localStorage.getItem("user");
    
    if (!token || !user) {
      setLocation("/user-login");
      return;
    }
    
    try {
      setCurrentUser(JSON.parse(user));
      setAuthChecked(true);
    } catch {
      setLocation("/user-login");
    }
  }, [setLocation]);

  // Get auth headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem("userToken");
    return {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  // Fetch user's assigned posts
  const { data: assignedPosts, isLoading } = useQuery({
    queryKey: ["/api/admin/users", currentUser?.id, "posts"],
    enabled: authChecked && !!currentUser,
    queryFn: async () => {
      const response = await fetch(`/api/admin/users/${currentUser?.id}/posts`, {
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to fetch assigned posts');
      return response.json();
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    setLocation("/user-login");
  };

  const getStatusBadge = (isPublished: boolean) => {
    return isPublished ? (
      <Badge className="bg-green-100 text-green-800 border-green-300">
        Published
      </Badge>
    ) : (
      <Badge variant="secondary">
        Draft
      </Badge>
    );
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#1D50C9] to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Content Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, {currentUser?.username}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span className="capitalize">{currentUser?.role}</span>
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
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assigned Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assignedPosts?.length || 0}</div>
              <p className="text-xs text-muted-foreground">Posts you can edit</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {assignedPosts?.filter(post => post.isPublished).length || 0}
              </div>
              <p className="text-xs text-muted-foreground">Live posts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Drafts</CardTitle>
              <Edit2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {assignedPosts?.filter(post => !post.isPublished).length || 0}
              </div>
              <p className="text-xs text-muted-foreground">Work in progress</p>
            </CardContent>
          </Card>
        </div>

        {/* Posts Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Assigned Posts</CardTitle>
              <Link href="/admin/blog-editor">
                <Button className="bg-gradient-to-r from-[#1D50C9] to-indigo-600 hover:from-[#1845B3] hover:to-indigo-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Post
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1D50C9] mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading your posts...</p>
              </div>
            ) : assignedPosts && assignedPosts.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assignedPosts.map((post: BlogPost) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium max-w-[400px] truncate">
                            {post.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {post.id}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(post.isPublished)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">
                            {new Date(post.updatedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Link href={`/admin/blog-editor/${post.id}`}>
                            <Button
                              size="sm"
                              variant="outline"
                              title="Edit Post"
                              data-testid={`button-edit-post-${post.id}`}
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Link href={`/admin/blog-preview/${post.id}`}>
                            <Button
                              size="sm"
                              variant="outline"
                              title="Preview Post"
                              data-testid={`button-preview-post-${post.id}`}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No posts assigned yet</h3>
                <p className="text-gray-500 mb-4">
                  You don't have any posts assigned to you yet. Create your first post to get started.
                </p>
                <Link href="/admin/blog-editor">
                  <Button className="bg-gradient-to-r from-[#1D50C9] to-indigo-600 hover:from-[#1845B3] hover:to-indigo-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Post
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}