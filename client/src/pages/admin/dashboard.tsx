import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  FileText, Users, Settings, LogOut, Plus, Edit, Trash2, 
  Eye, EyeOff, Calendar, Activity, BarChart3, PenTool
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

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
  createdAt: Date;
  updatedAt: Date;
}

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
  isPublished: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  const navigate = (path: string) => setLocation(path);

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const user = localStorage.getItem("adminUser");
    
    if (!token || !user) {
      navigate("/admin/login");
      return;
    }

    try {
      setAdminUser(JSON.parse(user));
    } catch {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Verify session
  const { data: sessionData, isLoading: sessionLoading, error: sessionError } = useQuery({
    queryKey: ["/api/admin/me"],
    enabled: !!localStorage.getItem("adminToken"),
    retry: false,
    queryFn: async () => {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("/api/admin/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Session verification failed");
      return response.json();
    },
  });

  // Fetch blog posts
  const { data: blogPosts = [], isLoading: blogLoading } = useQuery({
    queryKey: ["/api/admin/blog-posts"],
    enabled: !!adminUser,
    queryFn: async () => {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("/api/admin/blog-posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch blog posts");
      return response.json();
    },
  });

  // Fetch services
  const { data: services = [], isLoading: servicesLoading } = useQuery({
    queryKey: ["/api/admin/services"],
    enabled: !!adminUser,
    queryFn: async () => {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("/api/admin/services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch services");
      return response.json();
    },
  });

  // Fetch pages
  const { data: pages = [], isLoading: pagesLoading } = useQuery({
    queryKey: ["/api/admin/pages"],
    enabled: !!adminUser,
    queryFn: async () => {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("/api/admin/pages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch pages");
      return response.json();
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  const handlePublishToggle = async (type: 'blog' | 'page', id: number) => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`/api/admin/${type === 'blog' ? 'blog-posts' : 'pages'}/${id}/publish`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to publish item:", error);
    }
  };

  const handleDelete = async (type: 'blog' | 'service' | 'page', id: number) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    
    try {
      const token = localStorage.getItem("adminToken");
      const endpoint = type === 'blog' ? 'blog-posts' : type === 'service' ? 'services' : 'pages';
      
      const response = await fetch(`/api/admin/${endpoint}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  if (sessionLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (sessionError || !adminUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Alert variant="destructive" className="max-w-md">
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {adminUser.username}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="px-3 py-1">
                {adminUser.role}
              </Badge>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogPosts?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                {blogPosts?.filter((p: BlogPost) => p.isPublished).length || 0} published
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Services</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{services?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                {services?.filter((s: Service) => s.isActive).length || 0} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pages</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pages?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                {pages?.filter((p: Page) => p.isPublished).length || 0} published
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Admin User</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">
                Active session
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Content Management */}
        <Tabs defaultValue="blog" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
          </TabsList>

          {/* Blog Posts Tab */}
          <TabsContent value="blog" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Blog Posts Management</h2>
              <Button
                onClick={() => navigate("/admin/blog/new")}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                New Blog Post
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                {blogLoading ? (
                  <div className="p-6 text-center">Loading blog posts...</div>
                ) : !blogPosts?.length ? (
                  <div className="p-6 text-center text-gray-500">
                    No blog posts found. Create your first blog post!
                  </div>
                ) : (
                  <div className="divide-y">
                    {blogPosts.map((post: BlogPost) => (
                      <div key={post.id} className="p-6 flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{post.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
                            {post.publishedAt && (
                              <span>Published: {new Date(post.publishedAt).toLocaleDateString()}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={post.isPublished ? "default" : "secondary"}>
                            {post.isPublished ? "Published" : "Draft"}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePublishToggle('blog', post.id)}
                          >
                            {post.isPublished ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete('blog', post.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Services Management</h2>
              <Button
                onClick={() => navigate("/admin/services/new")}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                New Service
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                {servicesLoading ? (
                  <div className="p-6 text-center">Loading services...</div>
                ) : !services?.length ? (
                  <div className="p-6 text-center text-gray-500">
                    No services found. Create your first service!
                  </div>
                ) : (
                  <div className="divide-y">
                    {services.map((service: Service) => (
                      <div key={service.id} className="p-6 flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{service.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span>Created: {new Date(service.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={service.isActive ? "default" : "secondary"}>
                            {service.isActive ? "Active" : "Inactive"}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/admin/services/edit/${service.id}`)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete('service', service.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pages Tab */}
          <TabsContent value="pages" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Pages Management</h2>
              <Button
                onClick={() => navigate("/admin/pages/new")}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                New Page
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                {pagesLoading ? (
                  <div className="p-6 text-center">Loading pages...</div>
                ) : !pages?.length ? (
                  <div className="p-6 text-center text-gray-500">
                    No pages found. Create your first page!
                  </div>
                ) : (
                  <div className="divide-y">
                    {pages.map((page: Page) => (
                      <div key={page.id} className="p-6 flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{page.title}</h3>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span>Created: {new Date(page.createdAt).toLocaleDateString()}</span>
                            {page.publishedAt && (
                              <span>Published: {new Date(page.publishedAt).toLocaleDateString()}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={page.isPublished ? "default" : "secondary"}>
                            {page.isPublished ? "Published" : "Draft"}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/admin/pages/edit/${page.id}`)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePublishToggle('page', page.id)}
                          >
                            {page.isPublished ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete('page', page.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}