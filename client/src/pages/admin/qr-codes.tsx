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
import { Badge } from "@/components/ui/badge";
import { 
  QrCode, 
  Download, 
  Trash2, 
  Eye, 
  Plus,
  ExternalLink,
  Image,
  Type,
  RefreshCw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { QrCode as QrCodeType, AdminUser } from "@shared/schema";

const qrCodeSchema = z.object({
  title: z.string().min(1, "Title is required"),
  link: z.string().url("Must be a valid URL"),
  embedType: z.enum(["none", "text", "image"]),
  embedContent: z.string().optional(),
});

type QrCodeFormData = z.infer<typeof qrCodeSchema>;

export default function QrCodesPage() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewQrCode, setViewQrCode] = useState<QrCodeType | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Auth check
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

  // Fetch QR codes - must be called before any conditional returns
  const { data: qrCodes = [], isLoading } = useQuery<QrCodeType[]>({
    queryKey: ["/api/admin/qr-codes"],
    enabled: authChecked && !!adminUser,
    queryFn: async () => {
      const response = await fetch('/api/admin/qr-codes', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch QR codes');
      }
      return response.json();
    },
  });

  // Form setup - must be called before any conditional returns
  const form = useForm<QrCodeFormData>({
    resolver: zodResolver(qrCodeSchema),
    defaultValues: {
      title: "",
      link: "",
      embedType: "none",
      embedContent: "",
    },
  });

  // Create QR code mutation - must be called before any conditional returns
  const createMutation = useMutation({
    mutationFn: async (data: QrCodeFormData) => {
      const response = await fetch('/api/admin/qr-codes', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create QR code');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/qr-codes"] });
      toast({
        title: "Success",
        description: "QR code created successfully",
      });
      setIsDialogOpen(false);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create QR code",
        variant: "destructive",
      });
    },
  });

  // Trash QR code mutation - must be called before any conditional returns
  const trashMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/qr-codes/${id}/trash`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ reason: "Deleted from admin" }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to trash QR code');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/qr-codes"] });
      toast({
        title: "Success",
        description: "QR code moved to trash",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete QR code",
        variant: "destructive",
      });
    },
  });

  // Regenerate QR code mutation - must be called before any conditional returns
  const regenerateMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/qr-codes/${id}/regenerate`, {
        method: 'POST',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to regenerate QR code');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/qr-codes"] });
      setImageErrors(new Set()); // Clear image errors after regeneration
      toast({
        title: "Success",
        description: "QR code regenerated successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to regenerate QR code",
        variant: "destructive",
      });
    },
  });


  if (!authChecked) return null;

  // Download handlers
  const downloadPNG = async (id: number, title: string) => {
    try {
      const response = await fetch(`/api/admin/qr-codes/${id}/download/png`, {
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Download failed');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `qr-${title.replace(/\s+/g, '-').toLowerCase()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download QR code",
        variant: "destructive",
      });
    }
  };

  const downloadSVG = async (id: number, title: string) => {
    try {
      const response = await fetch(`/api/admin/qr-codes/${id}/download/svg`, {
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Download failed');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `qr-${title.replace(/\s+/g, '-').toLowerCase()}.svg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download QR code",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (data: QrCodeFormData) => {
    createMutation.mutate({
      ...data,
      embedType: "none",
      embedContent: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 flex">
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentUser={adminUser!} 
      />
      <div className="flex-1 flex flex-col lg:ml-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} currentUser={adminUser!} />
        <MobileNav currentUser={adminUser} />
        <div className="flex-1 p-6 space-y-6">
        {/* Page Header with Gradient */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
              QR Code Generator
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Create and manage custom QR codes with unlimited scans</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg transition-all hover:shadow-xl"
                data-testid="button-create-qr"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create QR Code
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Create New QR Code
                </DialogTitle>
                <DialogDescription>
                  Generate a custom QR code for any URL
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-gray-700 font-medium">Title</Label>
                  <Input
                    id="title"
                    {...form.register("title")}
                    placeholder="My QR Code"
                    data-testid="input-qr-title"
                    className="mt-1.5"
                  />
                  {form.formState.errors.title && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.title.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="link" className="text-gray-700 font-medium">Link/URL</Label>
                  <Input
                    id="link"
                    {...form.register("link")}
                    placeholder="https://example.com"
                    data-testid="input-qr-link"
                    className="mt-1.5"
                  />
                  {form.formState.errors.link && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.link.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg transition-all hover:shadow-xl"
                  disabled={createMutation.isPending}
                  data-testid="button-submit-qr"
                >
                  {createMutation.isPending ? "Creating..." : "Generate QR Code"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Main Card with Glass-morphism */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-blue-50/50 to-transparent">
            <CardTitle className="text-2xl font-bold text-gray-900">QR Codes</CardTitle>
            <CardDescription className="text-gray-600">Manage your custom QR codes and track scans</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto"></div>
                <p className="text-gray-500 mt-4">Loading QR codes...</p>
              </div>
            ) : qrCodes.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1D50C9]/10 to-[#1845B3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-10 w-10 text-[#1D50C9]" />
                </div>
                <p className="text-gray-700 font-medium text-lg">No QR codes yet</p>
                <p className="text-gray-500 text-sm mt-2">Create your first QR code to get started</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-gray-50 to-blue-50/30 hover:from-gray-50 hover:to-blue-50/30">
                      <TableHead className="font-semibold text-gray-700">Preview</TableHead>
                      <TableHead className="font-semibold text-gray-700">Title</TableHead>
                      <TableHead className="font-semibold text-gray-700">Link</TableHead>
                      <TableHead className="font-semibold text-gray-700">Embed Type</TableHead>
                      <TableHead className="font-semibold text-gray-700">Scans</TableHead>
                      <TableHead className="font-semibold text-gray-700">Created</TableHead>
                      <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {qrCodes.map((qr) => (
                      <TableRow key={qr.id} className="hover:bg-blue-50/20 transition-colors">
                        <TableCell>
                          {qr.qrImageUrl && !imageErrors.has(qr.id) ? (
                            <img loading="lazy" 
                              src={qr.qrImageUrl} 
                              alt={qr.title} 
                              className="h-14 w-14 object-contain cursor-pointer border-2 border-gray-200 hover:border-[#1D50C9] rounded-lg p-1.5 transition-all hover:shadow-md"
                              onClick={() => setViewQrCode(qr)}
                              onError={() => {
                                setImageErrors(prev => new Set(prev).add(qr.id));
                              }}
                              data-testid={`img-qr-${qr.id}`}
                            />
                          ) : (
                            <div 
                              className="h-14 w-14 bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-200 hover:border-[#1D50C9] rounded-lg flex items-center justify-center cursor-pointer transition-all hover:shadow-md"
                              onClick={() => setViewQrCode(qr)}
                              title="QR Code Preview"
                            >
                              <QrCode className="h-7 w-7 text-gray-400" />
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="font-semibold text-gray-900">{qr.title}</TableCell>
                        <TableCell>
                          <a 
                            href={qr.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#1D50C9] hover:text-[#1845B3] hover:underline flex items-center gap-1 font-medium transition-colors"
                          >
                            {qr.link.substring(0, 40)}...
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className="capitalize border-gray-300 text-gray-700 bg-white/50"
                          >
                            {qr.embedType === "none" ? (
                              "None"
                            ) : qr.embedType === "text" ? (
                              <><Type className="h-3 w-3 mr-1" /> Text</>
                            ) : (
                              <><Image className="h-3 w-3 mr-1" /> Image</>
                            )}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 border border-purple-200 shadow-sm">
                            <Eye className="h-3 w-3 mr-1" />
                            {qr.scanCount || 0}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600 font-medium">
                          {new Date(qr.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2 flex-wrap">
                            {imageErrors.has(qr.id) && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-[#1D50C9] text-[#1D50C9] hover:bg-[#1D50C9] hover:text-white transition-all"
                                onClick={() => regenerateMutation.mutate(qr.id)}
                                disabled={regenerateMutation.isPending}
                                data-testid={`button-regenerate-${qr.id}`}
                                title="Regenerate missing QR code image"
                              >
                                <RefreshCw className="h-4 w-4 mr-1" />
                                Fix
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-300 hover:border-[#1D50C9] hover:bg-blue-50 transition-all"
                              onClick={() => downloadPNG(qr.id, qr.title)}
                              data-testid={`button-download-png-${qr.id}`}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              PNG
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-300 hover:border-[#1D50C9] hover:bg-blue-50 transition-all"
                              onClick={() => downloadSVG(qr.id, qr.title)}
                              data-testid={`button-download-svg-${qr.id}`}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              SVG
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              className="hover:shadow-md transition-all"
                              onClick={() => trashMutation.mutate(qr.id)}
                              disabled={trashMutation.isPending}
                              data-testid={`button-trash-${qr.id}`}
                            >
                              <Trash2 className="h-4 w-4" />
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

        {/* QR Code Preview Dialog */}
        <Dialog open={!!viewQrCode} onOpenChange={() => setViewQrCode(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                {viewQrCode?.title}
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                {viewQrCode?.link}
              </DialogDescription>
            </DialogHeader>
            {viewQrCode?.qrImageUrl && !imageErrors.has(viewQrCode.id) ? (
              <div className="flex justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl">
                <img loading="lazy" 
                  src={viewQrCode.qrImageUrl} 
                  alt={viewQrCode.title} 
                  className="max-w-full h-auto border-2 border-gray-200 rounded-lg shadow-lg"
                  onError={() => {
                    setImageErrors(prev => new Set(prev).add(viewQrCode.id));
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-[#1D50C9]/10 to-[#1845B3]/10 rounded-full flex items-center justify-center mb-4">
                  <QrCode className="h-12 w-12 text-[#1D50C9]" />
                </div>
                <p className="text-gray-700 font-medium">QR Code preview unavailable</p>
                <p className="text-gray-500 text-sm mt-1">You can still download the QR code</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
        </div>
      </div>
    </div>
  );
}
