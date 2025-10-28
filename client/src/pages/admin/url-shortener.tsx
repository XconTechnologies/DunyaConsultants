import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import MobileNav from "@/components/admin/mobile-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Link2, 
  Copy, 
  Trash2, 
  Plus,
  ExternalLink,
  BarChart3,
  RefreshCw,
  Eye,
  Activity
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { ShortUrl as ShortUrlType, AdminUser } from "@shared/schema";

const shortUrlSchema = z.object({
  shortCode: z.string().min(1, "Short code is required").max(20, "Short code must be at most 20 characters").regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, hyphens and underscores allowed"),
  originalUrl: z.string().url("Must be a valid URL"),
  title: z.string().optional().or(z.literal("")),
  isActive: z.boolean().default(true),
});

type ShortUrlFormData = z.infer<typeof shortUrlSchema>;

export default function UrlShortenerPage() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUrl, setEditingUrl] = useState<ShortUrlType | null>(null);
  const [isFetchingTitle, setIsFetchingTitle] = useState(false);
  const [useCustomCode, setUseCustomCode] = useState(false);

  // Auth check
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

  // Fetch short URLs
  const { data: shortUrls = [], isLoading } = useQuery<ShortUrlType[]>({
    queryKey: ["/api/admin/short-urls"],
    enabled: authChecked && !!adminUser,
    queryFn: async () => {
      const response = await fetch('/api/admin/short-urls', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch short URLs');
      }
      return response.json();
    },
  });

  // Form setup
  const form = useForm<ShortUrlFormData>({
    resolver: zodResolver(shortUrlSchema),
    defaultValues: {
      shortCode: "",
      originalUrl: "",
      title: "",
      isActive: true,
    },
  });

  // Generate random short code
  const generateShortCode = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    form.setValue('shortCode', code);
  };

  // Auto-fetch title from URL
  const fetchTitle = async (url: string) => {
    try {
      setIsFetchingTitle(true);
      const response = await fetch('/api/fetch-url-title', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ url }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.title) {
          form.setValue('title', data.title);
        }
      }
    } catch (error) {
      console.error('Failed to fetch title:', error);
    } finally {
      setIsFetchingTitle(false);
    }
  };

  // Watch URL changes to auto-fetch title
  const watchedUrl = form.watch('originalUrl');
  const watchedTitle = form.watch('title');

  // Create/Update short URL mutation
  const saveMutation = useMutation({
    mutationFn: async (data: ShortUrlFormData) => {
      if (editingUrl) {
        // Update existing
        const response = await fetch(`/api/admin/short-urls/${editingUrl.id}`, {
          method: 'PUT',
          headers: getAuthHeaders(),
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update short URL');
        return response.json();
      } else {
        // Create new
        const response = await fetch('/api/admin/short-urls', {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to create short URL');
        }
        return response.json();
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/short-urls"] });
      toast({
        title: "Success",
        description: editingUrl ? "Short URL updated successfully" : "Short URL created successfully",
      });
      handleDialogChange(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Trash short URL mutation
  const trashMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/short-urls/${id}/trash`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ reason: "Deleted from admin" }),
      });
      if (!response.ok) throw new Error('Failed to delete short URL');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/short-urls"] });
      toast({
        title: "Success",
        description: "Short URL deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete short URL",
        variant: "destructive",
      });
    },
  });

  // Copy short URL to clipboard
  const copyToClipboard = (shortCode: string) => {
    const baseUrl = window.location.origin;
    const shortUrl = `${baseUrl}/s/${shortCode}`;
    navigator.clipboard.writeText(shortUrl);
    toast({
      title: "Copied!",
      description: "Short URL copied to clipboard",
    });
  };

  // Handle form submission
  const onSubmit = (data: ShortUrlFormData) => {
    saveMutation.mutate(data);
  };

  // Open edit dialog
  const handleEdit = (url: ShortUrlType) => {
    setEditingUrl(url);
    form.reset({
      shortCode: url.shortCode,
      originalUrl: url.originalUrl,
      title: url.title || "",
      isActive: url.isActive,
    });
    setIsDialogOpen(true);
  };

  // Handle dialog state change
  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      // Reset when closing
      setEditingUrl(null);
      setUseCustomCode(false);
      form.reset();
    } else if (!editingUrl) {
      // Generate code when opening for new URL
      generateShortCode();
    }
  };

  // Conditional returns for auth checks
  if (!authChecked) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!adminUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar currentUser={adminUser} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} currentUser={adminUser} />
        <MobileNav currentUser={adminUser} />
        
        <main className="flex-1 p-4 md:p-6 space-y-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full -mr-16 md:-mr-32 -mt-16 md:-mt-32"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-white/10 rounded-full -ml-12 md:-ml-24 -mb-12 md:-mb-24"></div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-white/20 p-3 md:p-4 rounded-lg md:rounded-xl backdrop-blur-sm flex-shrink-0">
                    <Link2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">URL Shortener</h1>
                    <p className="text-blue-100 text-sm md:text-base lg:text-lg">Transform long URLs into short, shareable links</p>
                  </div>
                </div>
                
                <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-[#1D50C9] hover:bg-blue-50 shadow-lg font-semibold px-4 md:px-6 py-4 md:py-6 text-base md:text-lg w-full md:w-auto" data-testid="button-create-short-url">
                      <Plus className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Create Short URL
                    </Button>
                  </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>{editingUrl ? "Edit Short URL" : "Create New Short URL"}</DialogTitle>
                    <DialogDescription>
                      {editingUrl ? "Update the details of your short URL" : "Create a short URL to share easily"}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="originalUrl">Destination URL</Label>
                      <Input
                        id="originalUrl"
                        {...form.register("originalUrl")}
                        placeholder="https://example.com/very-long-url"
                        data-testid="input-original-url"
                      />
                      {form.formState.errors.originalUrl && (
                        <p className="text-sm text-red-600">{form.formState.errors.originalUrl.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="title">Title (Optional)</Label>
                        {watchedUrl && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            onClick={() => fetchTitle(watchedUrl)} 
                            disabled={isFetchingTitle || !watchedUrl}
                            data-testid="button-fetch-title"
                          >
                            {isFetchingTitle ? "Fetching..." : "Auto-fetch"}
                          </Button>
                        )}
                      </div>
                      <Input
                        id="title"
                        {...form.register("title")}
                        placeholder="Leave empty or auto-fetch from URL"
                        data-testid="input-title"
                      />
                      <p className="text-xs text-gray-500">Optional: Add a descriptive title for easier management</p>
                    </div>

                    <div className="space-y-2">
                      {!editingUrl && (
                        <div className="flex items-center space-x-2 mb-2">
                          <Switch
                            id="useCustomCode"
                            checked={useCustomCode}
                            onCheckedChange={(checked) => {
                              setUseCustomCode(checked);
                              if (!checked) {
                                generateShortCode();
                              }
                            }}
                            data-testid="switch-use-custom-code"
                          />
                          <Label htmlFor="useCustomCode">Use custom short code</Label>
                        </div>
                      )}
                      <Label htmlFor="shortCode">Short Code</Label>
                      <div className="flex gap-2">
                        <Input
                          id="shortCode"
                          {...form.register("shortCode")}
                          placeholder="abc123"
                          disabled={!!editingUrl || !useCustomCode}
                          data-testid="input-short-code"
                        />
                        {!editingUrl && !useCustomCode && (
                          <Button type="button" variant="outline" onClick={generateShortCode} data-testid="button-generate-code">
                            <RefreshCw className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      {form.formState.errors.shortCode && (
                        <p className="text-sm text-red-600">{form.formState.errors.shortCode.message}</p>
                      )}
                      {!editingUrl && (
                        <p className="text-sm text-gray-500">
                          Your short URL will be: {window.location.origin}/s/{form.watch("shortCode") || "code"}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isActive"
                        checked={form.watch("isActive")}
                        onCheckedChange={(checked) => form.setValue("isActive", checked)}
                        data-testid="switch-is-active"
                      />
                      <Label htmlFor="isActive">Active (URL is accessible)</Label>
                    </div>

                    <div className="flex justify-end space-x-2 pt-4">
                      <Button type="button" variant="outline" onClick={() => handleDialogChange(false)} data-testid="button-cancel">
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={saveMutation.isPending}
                        className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#153a92] text-white"
                        data-testid="button-save-short-url"
                      >
                        {saveMutation.isPending ? "Saving..." : editingUrl ? "Update" : "Create"}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
              </div>
            </div>

            {/* Enhanced Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-blue-600 mb-1">Total URLs</p>
                      <p className="text-3xl md:text-4xl font-bold text-[#1D50C9]">{shortUrls.length}</p>
                    </div>
                    <div className="bg-[#1D50C9] p-3 md:p-4 rounded-xl shadow-md flex-shrink-0">
                      <Link2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 flex items-center text-xs text-blue-600">
                    <BarChart3 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    <span>All shortened links</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-green-600 mb-1">Total Clicks</p>
                      <p className="text-3xl md:text-4xl font-bold text-green-700">
                        {shortUrls.reduce((sum, url) => sum + (url.clicks || 0), 0)}
                      </p>
                    </div>
                    <div className="bg-green-600 p-3 md:p-4 rounded-xl shadow-md flex-shrink-0">
                      <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 flex items-center text-xs text-green-600">
                    <Activity className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    <span>Total link visits</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-purple-600 mb-1">Active URLs</p>
                      <p className="text-3xl md:text-4xl font-bold text-purple-700">
                        {shortUrls.filter(url => url.isActive).length}
                      </p>
                    </div>
                    <div className="bg-purple-600 p-3 md:p-4 rounded-xl shadow-md flex-shrink-0">
                      <Eye className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 flex items-center text-xs text-purple-600">
                    <RefreshCw className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    <span>Currently accessible</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Short URLs Table */}
            <Card className="shadow-xl border-gray-200">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-2 md:p-3 rounded-lg flex-shrink-0">
                    <Link2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-2xl">Your Short URLs</CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Manage your shortened URLs and track their performance
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1D50C9]"></div>
                  </div>
                ) : shortUrls.length === 0 ? (
                  <div className="text-center py-12 md:py-16 px-4">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <Link2 className="w-10 h-10 md:w-12 md:h-12 text-[#1D50C9]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">No short URLs yet</h3>
                    <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">Create your first short URL to start tracking clicks and sharing links easily</p>
                    <Button 
                      onClick={() => setIsDialogOpen(true)} 
                      className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#153a92] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
                    >
                      <Plus className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Create Your First URL
                    </Button>
                  </div>
                ) : (
                  <div className="overflow-x-auto -mx-4 md:mx-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Short URL</TableHead>
                          <TableHead>Destination</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead className="text-center">Clicks</TableHead>
                          <TableHead className="text-center">Status</TableHead>
                          <TableHead className="text-center">Created</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {shortUrls.map((url) => (
                          <TableRow key={url.id} data-testid={`row-short-url-${url.id}`}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Link2 className="w-4 h-4 text-gray-400" />
                                <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                                  /s/{url.shortCode}
                                </code>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="max-w-xs truncate text-sm text-gray-600" title={url.originalUrl}>
                                {url.originalUrl}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm">{url.title || "-"}</span>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge variant="outline" className="font-mono">
                                {url.clicks || 0}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center">
                              {url.isActive ? (
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
                              ) : (
                                <Badge variant="secondary">Inactive</Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-center text-sm text-gray-600">
                              {new Date(url.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(url.shortCode)}
                                  data-testid={`button-copy-${url.id}`}
                                  title="Copy short URL"
                                >
                                  <Copy className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => window.open(url.originalUrl, '_blank')}
                                  data-testid={`button-visit-${url.id}`}
                                  title="Visit destination"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleEdit(url)}
                                  data-testid={`button-edit-${url.id}`}
                                  title="Edit URL"
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => trashMutation.mutate(url.id)}
                                  disabled={trashMutation.isPending}
                                  data-testid={`button-delete-${url.id}`}
                                  title="Delete URL"
                                >
                                  <Trash2 className="w-4 h-4 text-red-600" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
