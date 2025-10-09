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
  Type
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

  const embedType = form.watch("embedType");

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
    createMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentUser={adminUser!} 
      />
      <div className="flex-1 flex flex-col lg:ml-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} currentUser={adminUser!} />
        <MobileNav currentUser={adminUser} />
        <div className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">QR Code Generator</h1>
            <p className="text-gray-600 mt-2">Create and manage custom QR codes with unlimited scans</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#1D50C9] hover:bg-[#1D50C9]/90" data-testid="button-create-qr">
                <Plus className="h-4 w-4 mr-2" />
                Create QR Code
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New QR Code</DialogTitle>
                <DialogDescription>
                  Generate a custom QR code with optional embedded content
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    {...form.register("title")}
                    placeholder="My QR Code"
                    data-testid="input-qr-title"
                  />
                  {form.formState.errors.title && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.title.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="link">Link/URL</Label>
                  <Input
                    id="link"
                    {...form.register("link")}
                    placeholder="https://example.com"
                    data-testid="input-qr-link"
                  />
                  {form.formState.errors.link && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.link.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="embedType">Embed Content Type</Label>
                  <Select
                    value={form.watch("embedType")}
                    onValueChange={(value) => form.setValue("embedType", value as "none" | "text" | "image")}
                  >
                    <SelectTrigger data-testid="select-embed-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="image">Image URL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {embedType !== "none" && (
                  <div>
                    <Label htmlFor="embedContent">
                      {embedType === "text" ? "Text Content" : "Image URL"}
                    </Label>
                    <Input
                      id="embedContent"
                      {...form.register("embedContent")}
                      placeholder={embedType === "text" ? "Enter text" : "https://example.com/logo.png"}
                      data-testid="input-embed-content"
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-[#1D50C9] hover:bg-[#1D50C9]/90"
                  disabled={createMutation.isPending}
                  data-testid="button-submit-qr"
                >
                  {createMutation.isPending ? "Creating..." : "Generate QR Code"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>QR Codes</CardTitle>
            <CardDescription>Manage your custom QR codes and track scans</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-12">Loading...</div>
            ) : qrCodes.length === 0 ? (
              <div className="text-center py-12">
                <QrCode className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No QR codes yet</p>
                <p className="text-gray-400 text-sm mt-2">Create your first QR code to get started</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Preview</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Link</TableHead>
                      <TableHead>Embed Type</TableHead>
                      <TableHead>Scans</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {qrCodes.map((qr) => (
                      <TableRow key={qr.id}>
                        <TableCell>
                          {qr.qrImageUrl && (
                            <img 
                              src={qr.qrImageUrl} 
                              alt={qr.title} 
                              className="h-12 w-12 object-contain cursor-pointer"
                              onClick={() => setViewQrCode(qr)}
                              data-testid={`img-qr-${qr.id}`}
                            />
                          )}
                        </TableCell>
                        <TableCell className="font-medium">{qr.title}</TableCell>
                        <TableCell>
                          <a 
                            href={qr.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#1D50C9] hover:underline flex items-center gap-1"
                          >
                            {qr.link.substring(0, 40)}...
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
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
                          <Badge className="bg-purple-100 text-purple-700">
                            <Eye className="h-3 w-3 mr-1" />
                            {qr.scanCount || 0}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          {new Date(qr.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => downloadPNG(qr.id, qr.title)}
                              data-testid={`button-download-png-${qr.id}`}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              PNG
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => downloadSVG(qr.id, qr.title)}
                              data-testid={`button-download-svg-${qr.id}`}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              SVG
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{viewQrCode?.title}</DialogTitle>
              <DialogDescription>{viewQrCode?.link}</DialogDescription>
            </DialogHeader>
            {viewQrCode?.qrImageUrl && (
              <div className="flex justify-center p-4">
                <img 
                  src={viewQrCode.qrImageUrl} 
                  alt={viewQrCode.title} 
                  className="max-w-full h-auto"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
        </div>
      </div>
    </div>
  );
}
