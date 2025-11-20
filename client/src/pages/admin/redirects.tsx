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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  ArrowRight, 
  Trash2, 
  Eye, 
  Plus,
  ExternalLink,
  Pencil,
  Check,
  X as XIcon
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Redirect, AdminUser } from "@shared/schema";

const redirectSchema = z.object({
  sourcePath: z.string().min(1, "Source path is required").regex(/^\//, "Must start with /"),
  destinationUrl: z.string().url("Must be a valid URL"),
  redirectType: z.enum(["permanent", "temporary"]),
  isActive: z.boolean(),
});

type RedirectFormData = z.infer<typeof redirectSchema>;

export default function RedirectsPage() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editSource, setEditSource] = useState("");
  const [editingDestId, setEditingDestId] = useState<number | null>(null);
  const [editDest, setEditDest] = useState("");

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem("adminToken") || localStorage.getItem("userToken");
    const user = localStorage.getItem("adminUser") || localStorage.getItem("user");
    
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

  const getAuthHeaders = () => {
    const token = localStorage.getItem("adminToken") || localStorage.getItem("userToken");
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  };

  const { data: redirects = [], isLoading } = useQuery<Redirect[]>({
    queryKey: ["/api/admin/redirects"],
    enabled: authChecked && !!adminUser,
  });

  const form = useForm<RedirectFormData>({
    resolver: zodResolver(redirectSchema),
    defaultValues: {
      sourcePath: "",
      destinationUrl: "",
      redirectType: "permanent",
      isActive: true,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: RedirectFormData) => 
      apiRequest('/api/admin/redirects', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: getAuthHeaders(),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/redirects"] });
      toast({
        title: "Success",
        description: "Redirect created successfully",
      });
      setIsDialogOpen(false);
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create redirect",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<RedirectFormData> }) =>
      apiRequest(`/api/admin/redirects/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: getAuthHeaders(),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/redirects"] });
      setEditingId(null);
      setEditSource("");
      setEditingDestId(null);
      setEditDest("");
      toast({
        title: "Success",
        description: "Redirect updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update redirect",
        variant: "destructive",
      });
    },
  });

  const trashMutation = useMutation({
    mutationFn: async (id: number) =>
      apiRequest(`/api/admin/redirects/${id}/trash`, {
        method: 'POST',
        body: JSON.stringify({ reason: "Deleted from admin" }),
        headers: getAuthHeaders(),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/redirects"] });
      toast({
        title: "Success",
        description: "Redirect moved to trash",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete redirect",
        variant: "destructive",
      });
    },
  });

  if (!authChecked) return null;

  const onSubmit = (data: RedirectFormData) => {
    createMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 flex">
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentUser={adminUser!} 
      />
      <div className="flex-1 flex flex-col lg:ml-64">
        <AdminHeader 
          onMenuClick={() => setSidebarOpen(true)} 
          currentUser={adminUser!} 
          title="URL Redirects"
          subtitle="Manage permanent and temporary redirects"
        />
        <MobileNav currentUser={adminUser} />
        <div className="flex-1 p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                URL Redirects
              </h1>
              <p className="text-gray-600 mt-2 text-lg">Create 301/302 redirects to manage old URLs</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg transition-all hover:shadow-xl"
                  data-testid="button-create-redirect"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Redirect
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    Create New Redirect
                  </DialogTitle>
                  <DialogDescription>
                    Redirect traffic from one URL to another
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="sourcePath"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Source Path</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="/old-page"
                              data-testid="input-source-path"
                            />
                          </FormControl>
                          <FormDescription>
                            The path to redirect from (e.g., /old-page)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="destinationUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destination URL</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="https://example.com/new-page"
                              data-testid="input-destination-url"
                            />
                          </FormControl>
                          <FormDescription>
                            The full URL to redirect to
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="redirectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Redirect Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-redirect-type">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="permanent">301 - Permanent</SelectItem>
                              <SelectItem value="temporary">302 - Temporary</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Permanent (301) for SEO, Temporary (302) for testing
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="isActive"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-3">
                          <div className="space-y-0.5">
                            <FormLabel>Active</FormLabel>
                            <FormDescription>
                              Enable or disable this redirect
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              data-testid="switch-is-active"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg transition-all hover:shadow-xl"
                      disabled={createMutation.isPending}
                      data-testid="button-submit-redirect"
                    >
                      {createMutation.isPending ? "Creating..." : "Create Redirect"}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-blue-50/50 to-transparent">
              <CardTitle className="text-2xl font-bold text-gray-900">Redirects</CardTitle>
              <CardDescription className="text-gray-600">Manage URL redirects and track hits</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto"></div>
                  <p className="text-gray-500 mt-4">Loading redirects...</p>
                </div>
              ) : redirects.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1D50C9]/10 to-[#1845B3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-10 w-10 text-[#1D50C9]" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg">No redirects yet</p>
                  <p className="text-gray-500 text-sm mt-2">Create your first redirect to get started</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-gray-50 to-blue-50/30 hover:from-gray-50 hover:to-blue-50/30">
                        <TableHead className="font-semibold text-gray-700">Source Path</TableHead>
                        <TableHead className="font-semibold text-gray-700">Destination</TableHead>
                        <TableHead className="font-semibold text-gray-700">Type</TableHead>
                        <TableHead className="font-semibold text-gray-700">Status</TableHead>
                        <TableHead className="font-semibold text-gray-700">Hits</TableHead>
                        <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {redirects.map((redirect) => (
                        <TableRow key={redirect.id} className="hover:bg-blue-50/20 transition-colors group">
                          <TableCell className="font-semibold text-gray-900 font-mono text-sm">
                            {editingId === redirect.id ? (
                              <div className="flex items-center gap-2">
                                <Input
                                  value={editSource}
                                  onChange={(e) => setEditSource(e.target.value)}
                                  className="h-8 font-mono"
                                  autoFocus
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && editSource.startsWith('/')) {
                                      updateMutation.mutate({ id: redirect.id, data: { sourcePath: editSource } });
                                    } else if (e.key === 'Escape') {
                                      setEditingId(null);
                                      setEditSource("");
                                    }
                                  }}
                                />
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 text-green-600"
                                  onClick={() => {
                                    if (editSource.startsWith('/')) {
                                      updateMutation.mutate({ id: redirect.id, data: { sourcePath: editSource } });
                                    } else {
                                      toast({
                                        title: "Invalid Path",
                                        description: "Source path must start with /",
                                        variant: "destructive",
                                      });
                                    }
                                  }}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 text-red-600"
                                  onClick={() => {
                                    setEditingId(null);
                                    setEditSource("");
                                  }}
                                >
                                  <XIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <span>{redirect.sourcePath}</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={() => {
                                    setEditingId(redirect.id);
                                    setEditSource(redirect.sourcePath);
                                  }}
                                  title="Edit source path"
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </TableCell>
                          <TableCell className="max-w-xs">
                            {editingDestId === redirect.id ? (
                              <div className="flex items-center gap-2">
                                <Input
                                  value={editDest}
                                  onChange={(e) => setEditDest(e.target.value)}
                                  className="h-8"
                                  autoFocus
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && editDest.startsWith('http')) {
                                      updateMutation.mutate({ id: redirect.id, data: { destinationUrl: editDest } });
                                    } else if (e.key === 'Escape') {
                                      setEditingDestId(null);
                                      setEditDest("");
                                    }
                                  }}
                                />
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 text-green-600"
                                  onClick={() => {
                                    if (editDest.startsWith('http')) {
                                      updateMutation.mutate({ id: redirect.id, data: { destinationUrl: editDest } });
                                    } else {
                                      toast({
                                        title: "Invalid URL",
                                        description: "URL must start with http:// or https://",
                                        variant: "destructive",
                                      });
                                    }
                                  }}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 text-red-600"
                                  onClick={() => {
                                    setEditingDestId(null);
                                    setEditDest("");
                                  }}
                                >
                                  <XIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <a 
                                  href={redirect.destinationUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[#1D50C9] hover:underline flex items-center gap-1 truncate"
                                >
                                  {redirect.destinationUrl.substring(0, 50)}...
                                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                                </a>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={() => {
                                    setEditingDestId(redirect.id);
                                    setEditDest(redirect.destinationUrl);
                                  }}
                                  title="Edit destination"
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge 
                              className={redirect.redirectType === 'permanent' 
                                ? "bg-green-100 text-green-700 border-green-200" 
                                : "bg-yellow-100 text-yellow-700 border-yellow-200"}
                            >
                              {redirect.redirectType === 'permanent' ? '301' : '302'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Switch
                              checked={redirect.isActive}
                              onCheckedChange={(checked) => {
                                updateMutation.mutate({ 
                                  id: redirect.id, 
                                  data: { isActive: checked } 
                                });
                              }}
                              data-testid={`switch-active-${redirect.id}`}
                            />
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 border-purple-200">
                              <Eye className="h-3 w-3 mr-1" />
                              {redirect.hitCount || 0}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => trashMutation.mutate(redirect.id)}
                              disabled={trashMutation.isPending}
                              data-testid={`button-trash-${redirect.id}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
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
      </div>
    </div>
  );
}
