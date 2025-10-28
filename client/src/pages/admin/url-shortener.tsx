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
  Eye
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { ShortUrl as ShortUrlType, AdminUser } from "@shared/schema";

const shortUrlSchema = z.object({
  shortCode: z.string().min(3, "Short code must be at least 3 characters").max(20, "Short code must be at most 20 characters"),
  originalUrl: z.string().url("Must be a valid URL"),
  title: z.string().optional(),
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
      // Only reset when closing
      setEditingUrl(null);
      form.reset();
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
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        <MobileNav />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">URL Shortener</h1>
                <p className="text-gray-600 mt-1">Create and manage short URLs</p>
              </div>
              
              <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#153a92] text-white" data-testid="button-create-short-url">
                    <Plus className="w-4 h-4 mr-2" />
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
                      <Label htmlFor="shortCode">Short Code</Label>
                      <div className="flex gap-2">
                        <Input
                          id="shortCode"
                          {...form.register("shortCode")}
                          placeholder="abc123"
                          disabled={!!editingUrl}
                          data-testid="input-short-code"
                        />
                        {!editingUrl && (
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
                      <Label htmlFor="title">Title (Optional)</Label>
                      <Input
                        id="title"
                        {...form.register("title")}
                        placeholder="My Campaign Link"
                        data-testid="input-title"
                      />
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

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Total URLs</div>
                    <div className="text-3xl font-bold text-[#1D50C9]">{shortUrls.length}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Total Clicks</div>
                    <div className="text-3xl font-bold text-green-600">
                      {shortUrls.reduce((sum, url) => sum + (url.clicks || 0), 0)}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Active URLs</div>
                    <div className="text-3xl font-bold text-purple-600">
                      {shortUrls.filter(url => url.isActive).length}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Short URLs Table */}
            <Card>
              <CardHeader>
                <CardTitle>Your Short URLs</CardTitle>
                <CardDescription>
                  Manage your shortened URLs and track their performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1D50C9]"></div>
                  </div>
                ) : shortUrls.length === 0 ? (
                  <div className="text-center py-12">
                    <Link2 className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No short URLs yet</h3>
                    <p className="text-gray-600 mb-6">Create your first short URL to get started</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
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
