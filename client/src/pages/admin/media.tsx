import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Upload,
  Image,
  Video,
  File,
  Trash2,
  Edit2,
  Download,
  Eye,
  Search,
  Filter,
  Grid3X3,
  List,
  Calendar,
  User,
  FileText,
  Copy,
} from "lucide-react";
import type { AdminUser, Media } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";
import MobileNav from "@/components/admin/mobile-nav";

export default function MediaManagement() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [selectedMediaIds, setSelectedMediaIds] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [editingMedia, setEditingMedia] = useState<Media | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [uploadFiles, setUploadFiles] = useState<FileList | null>(null);
  const [editForm, setEditForm] = useState({
    alt: "",
    filename: "",
  });
  
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get auth headers helper (admin only)
  const getAuthHeaders = () => {
    const adminToken = localStorage.getItem("adminToken");
    return {
      'Content-Type': 'application/json',
      ...(adminToken && { 'Authorization': `Bearer ${adminToken}` })
    };
  };

  // Get auth headers for file upload (without Content-Type for FormData)
  const getUploadAuthHeaders = (): HeadersInit => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      return { 'Authorization': `Bearer ${adminToken}` };
    }
    return {};
  };

  // Check authentication (admin only)
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const user = localStorage.getItem("adminUser");
    
    if (!token || !user) {
      setLocation("/admin/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      setAdminUser(userData);
      setAuthChecked(true);
    } catch {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  // Fetch media files
  const { data: mediaFiles = [], isLoading, refetch } = useQuery({
    queryKey: ["/api/admin/media"],
    enabled: authChecked && !!adminUser,
    queryFn: async () => {
      const response = await fetch("/api/admin/media", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to fetch media");
      return response.json();
    },
  });

  // Filter media files based on search and filter type (exclude trashed)
  const filteredMedia = mediaFiles.filter((media: Media) => {
    // Exclude trashed media from main library
    if (media.trashedAt) return false;
    
    const matchesSearch = 
      media.originalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      media.alt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      "";
    
    const matchesType = filterType === "all" || 
      (filterType === "image" && media.mimeType.startsWith("image/")) ||
      (filterType === "video" && media.mimeType.startsWith("video/")) ||
      (filterType === "document" && !media.mimeType.startsWith("image/") && !media.mimeType.startsWith("video/"));
    
    return matchesSearch && matchesType;
  });

  // Upload media mutation
  const uploadMutation = useMutation({
    mutationFn: async (files: FileList) => {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append('file', files[i]);
        
        const response = await fetch("/api/admin/media/upload", {
          method: "POST",
          headers: getUploadAuthHeaders(),
          body: formData,
        });
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Failed to upload file");
        }
      }
      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/media"] });
      setShowUploadDialog(false);
      setUploadFiles(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      toast({
        title: "Success",
        description: "Files uploaded successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Update media mutation
  const updateMutation = useMutation({
    mutationFn: async (data: { id: number; alt: string; filename: string }) => {
      const response = await fetch(`/api/admin/media/${data.id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          alt: data.alt,
          filename: data.filename,
        }),
      });
      if (!response.ok) throw new Error("Failed to update media");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/media"] });
      setShowEditDialog(false);
      setEditingMedia(null);
      toast({
        title: "Success",
        description: "Media updated successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update media",
        variant: "destructive",
      });
    },
  });

  // Trash media mutation (soft delete)
  const trashMutation = useMutation({
    mutationFn: async (data: { id: number; reason?: string }) => {
      const response = await fetch(`/api/admin/media/${data.id}/trash`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ reason: data.reason }),
      });
      if (!response.ok) throw new Error("Failed to trash media");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/media"] });
      toast({
        title: "Success",
        description: "Media moved to trash",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to trash media",
        variant: "destructive",
      });
    },
  });

  // Bulk trash mutation (soft delete)
  const bulkTrashMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const promises = ids.map(id => 
        fetch(`/api/admin/media/${id}/trash`, {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({ reason: "Bulk trash" }),
        })
      );
      await Promise.all(promises);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/media"] });
      setSelectedMediaIds([]);
      toast({
        title: "Success",
        description: "Selected media moved to trash",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to trash selected media",
        variant: "destructive",
      });
    },
  });

  // Import existing media mutation
  const importMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/admin/media/import", {
        method: "POST",
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to import media files");
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/media"] });
      toast({
        title: "Success",
        description: `Imported ${data.imported} media files`,
      });
    },
    onError: (error) => {
      toast({
        title: "Error", 
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Handle file upload
  const handleUpload = () => {
    if (uploadFiles && uploadFiles.length > 0) {
      uploadMutation.mutate(uploadFiles);
    }
  };

  // Handle edit media
  const handleEdit = (media: Media) => {
    setEditingMedia(media);
    setEditForm({
      alt: media.alt || "",
      filename: media.filename,
    });
    setShowEditDialog(true);
  };

  // Handle save edit
  const handleSaveEdit = () => {
    if (editingMedia) {
      updateMutation.mutate({
        id: editingMedia.id,
        alt: editForm.alt,
        filename: editForm.filename,
      });
    }
  };

  // Handle trash media (soft delete)
  const handleDelete = (id: number) => {
    if (window.confirm("Move this media file to trash? You can restore it later.")) {
      trashMutation.mutate({ id });
    }
  };

  // Handle bulk trash (soft delete)
  const handleBulkDelete = () => {
    if (window.confirm(`Move ${selectedMediaIds.length} selected media files to trash? You can restore them later.`)) {
      bulkTrashMutation.mutate(selectedMediaIds);
    }
  };

  // Handle select media
  const handleSelectMedia = (mediaId: number, checked: boolean) => {
    if (checked) {
      setSelectedMediaIds(prev => [...prev, mediaId]);
    } else {
      setSelectedMediaIds(prev => prev.filter(id => id !== mediaId));
    }
  };

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedMediaIds(filteredMedia.map((media: Media) => media.id));
    } else {
      setSelectedMediaIds([]);
    }
  };

  // Handle copy URL to clipboard
  const handleCopyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Success",
        description: "Media URL copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy URL",
        variant: "destructive",
      });
    }
  };

  // Get file type icon
  const getFileTypeIcon = (mimeType: string) => {
    if (mimeType.startsWith("image/")) return <Image className="h-4 w-4" />;
    if (mimeType.startsWith("video/")) return <Video className="h-4 w-4" />;
    return <File className="h-4 w-4" />;
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Format date
  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString();
  };

  if (!authChecked || !adminUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading media library...</p>
        </div>
      </div>
    );
  }

  const isAllSelected = filteredMedia.length > 0 && selectedMediaIds.length === filteredMedia.length;
  const isSomeSelected = selectedMediaIds.length > 0 && selectedMediaIds.length < filteredMedia.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Sidebar */}
      <AdminSidebar currentUser={adminUser} />
      
      {/* Mobile Navigation */}
      <MobileNav currentUser={adminUser} />
      
      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-white">Media Library</h1>
                <p className="text-blue-100 mt-2">
                  Upload and manage your media files
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  onClick={() => importMutation.mutate()}
                  disabled={importMutation.isPending}
                  variant="outline"
                  className="bg-white text-[#1D50C9] hover:bg-blue-50 border-[#1D50C9]"
                  data-testid="button-import-media"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {importMutation.isPending ? "Importing..." : "Import Existing"}
                </Button>
                <Button
                  onClick={() => setShowUploadDialog(true)}
                  className="bg-white text-[#1D50C9] hover:bg-blue-50"
                  data-testid="button-upload-media"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Media
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filter Bar */}
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex items-center space-x-4 flex-1 w-full lg:w-auto">
                <div className="relative flex-1 lg:max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search media files..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-11 border-gray-200 focus:border-[#1D50C9] focus:ring-[#1D50C9] rounded-lg"
                    data-testid="input-search-media"
                  />
                </div>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-700 font-medium focus:border-[#1D50C9] focus:ring-1 focus:ring-[#1D50C9] transition-colors"
                  data-testid="select-filter-type"
                >
                  <option value="all">All Files</option>
                  <option value="image">Images</option>
                  <option value="video">Videos</option>
                  <option value="document">Documents</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-3">
                {selectedMediaIds.length > 0 && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleBulkDelete}
                    className="h-10"
                    data-testid="button-bulk-delete"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete ({selectedMediaIds.length})
                  </Button>
                )}
                
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`rounded-md ${viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
                    data-testid="button-grid-view"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`rounded-md ${viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
                    data-testid="button-list-view"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Media Grid/List */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading media files...</p>
            </div>
          ) : filteredMedia.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image className="h-10 w-10 text-[#1D50C9]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {searchTerm || filterType !== "all" 
                    ? "No media files found"
                    : "No media files yet"
                  }
                </h3>
                <p className="text-gray-500 mb-6">
                  {searchTerm || filterType !== "all" 
                    ? "Try adjusting your search or filter to find what you're looking for."
                    : "Upload your first media file to get started with your library."
                  }
                </p>
                <Button 
                  onClick={() => setShowUploadDialog(true)} 
                  className="bg-[#1D50C9] hover:bg-[#1845B3]"
                  data-testid="button-upload-first-media"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Media File
                </Button>
              </div>
            </div>
          ) : viewMode === "grid" ? (
            <>
              {/* Select All in Grid View */}
              <div className="mb-6 flex items-center bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all media"
                  className="border-gray-300"
                  data-testid="checkbox-select-all"
                />
                <label className="ml-3 text-sm font-medium text-gray-700">
                  Select All <span className="text-gray-500">({filteredMedia.length} files)</span>
                </label>
              </div>
              
              {/* Grid View */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {filteredMedia.map((media: Media) => (
                  <div
                    key={media.id}
                    className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#1D50C9]/30 hover:shadow-xl transition-all duration-300"
                    data-testid={`card-media-${media.id}`}
                  >
                    <div className="relative aspect-square">
                      <div className="absolute top-3 left-3 z-20">
                        <div className="bg-white/90 backdrop-blur-sm rounded-md p-1.5 shadow-sm">
                          <Checkbox
                            checked={selectedMediaIds.includes(media.id)}
                            onCheckedChange={(checked) => handleSelectMedia(media.id, !!checked)}
                            aria-label={`Select ${media.originalName}`}
                            className="border-gray-300"
                            data-testid={`checkbox-select-${media.id}`}
                          />
                        </div>
                      </div>
                      
                      {media.mimeType.startsWith("image/") ? (
                        <img
                          src={media.url}
                          alt={media.alt || media.originalName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-testid={`img-preview-${media.id}`}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                          <div className="text-gray-400">
                            {getFileTypeIcon(media.mimeType)}
                          </div>
                        </div>
                      )}
                      
                      {/* Hover Actions Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 right-3 flex space-x-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleCopyUrl(media.url)}
                            className="h-8 w-8 p-0 bg-white/90 backdrop-blur-sm hover:bg-white border-0"
                            title="Copy URL"
                            data-testid={`button-copy-${media.id}`}
                          >
                            <Copy className="h-4 w-4 text-gray-700" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => window.open(media.url, '_blank')}
                            className="h-8 w-8 p-0 bg-white/90 backdrop-blur-sm hover:bg-white border-0"
                            title="View"
                            data-testid={`button-view-${media.id}`}
                          >
                            <Eye className="h-4 w-4 text-gray-700" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleEdit(media)}
                            className="h-8 w-8 p-0 bg-white/90 backdrop-blur-sm hover:bg-white border-0"
                            title="Edit"
                            data-testid={`button-edit-${media.id}`}
                          >
                            <Edit2 className="h-4 w-4 text-gray-700" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(media.id)}
                            className="h-8 w-8 p-0 bg-red-500/90 backdrop-blur-sm hover:bg-red-600 border-0"
                            title="Delete"
                            data-testid={`button-delete-${media.id}`}
                          >
                            <Trash2 className="h-4 w-4 text-white" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900 truncate mb-1" title={media.originalName} data-testid={`text-filename-${media.id}`}>
                        {media.originalName}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span data-testid={`text-size-${media.id}`}>{formatFileSize(media.size)}</span>
                        <span data-testid={`text-date-${media.id}`}>{formatDate(media.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* List View */
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={isAllSelected}
                        onCheckedChange={handleSelectAll}
                        aria-label="Select all media"
                        data-testid="checkbox-select-all-list"
                      />
                    </TableHead>
                    <TableHead>File</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Uploaded By</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMedia.map((media: Media) => (
                    <TableRow key={media.id} data-testid={`row-media-${media.id}`}>
                      <TableCell>
                        <Checkbox
                          checked={selectedMediaIds.includes(media.id)}
                          onCheckedChange={(checked) => handleSelectMedia(media.id, !!checked)}
                          aria-label={`Select ${media.originalName}`}
                          data-testid={`checkbox-select-list-${media.id}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          {media.mimeType.startsWith("image/") ? (
                            <img
                              src={media.url}
                              alt={media.alt || media.originalName}
                              className="w-10 h-10 object-cover rounded"
                              data-testid={`img-list-preview-${media.id}`}
                            />
                          ) : (
                            <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                              {getFileTypeIcon(media.mimeType)}
                            </div>
                          )}
                          <div>
                            <p className="font-medium" data-testid={`text-list-filename-${media.id}`}>{media.originalName}</p>
                            {media.alt && (
                              <p className="text-sm text-gray-500" data-testid={`text-list-alt-${media.id}`}>{media.alt}</p>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getFileTypeIcon(media.mimeType)}
                          <span className="text-sm" data-testid={`text-list-type-${media.id}`}>{media.mimeType}</span>
                        </div>
                      </TableCell>
                      <TableCell data-testid={`text-list-size-${media.id}`}>{formatFileSize(media.size)}</TableCell>
                      <TableCell data-testid={`text-list-date-${media.id}`}>{formatDate(media.createdAt)}</TableCell>
                      <TableCell data-testid={`text-list-uploader-${media.id}`}>
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span>Admin</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleCopyUrl(media.url)}
                            title="Copy URL"
                            data-testid={`button-list-copy-${media.id}`}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => window.open(media.url, '_blank')}
                            title="View"
                            data-testid={`button-list-view-${media.id}`}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(media)}
                            title="Edit"
                            data-testid={`button-list-edit-${media.id}`}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(media.id)}
                            title="Delete"
                            data-testid={`button-list-delete-${media.id}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          )}
        </main>
      </div>

      {/* Upload Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent className="max-w-md" data-testid="dialog-upload">
          <DialogHeader>
            <DialogTitle>Upload Media Files</DialogTitle>
            <DialogDescription>
              Select one or more files to upload to your media library.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="media-upload">Select Files</Label>
              <Input
                id="media-upload"
                type="file"
                ref={fileInputRef}
                multiple
                accept="image/*,video/*,.pdf,.doc,.docx"
                onChange={(e) => setUploadFiles(e.target.files)}
                data-testid="input-file-upload"
              />
              <p className="text-sm text-gray-500 mt-1">
                Supported formats: Images, Videos, PDF, DOC, DOCX
              </p>
            </div>
            
            {uploadFiles && uploadFiles.length > 0 && (
              <div>
                <p className="text-sm font-medium">Selected Files:</p>
                <ul className="text-sm text-gray-600 mt-1">
                  {Array.from(uploadFiles).map((file, index) => (
                    <li key={index} data-testid={`text-selected-file-${index}`}>
                      {file.name} ({formatFileSize(file.size)})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUploadDialog(false)} data-testid="button-cancel-upload">
              Cancel
            </Button>
            <Button
              onClick={handleUpload}
              disabled={!uploadFiles || uploadFiles.length === 0 || uploadMutation.isPending}
              data-testid="button-confirm-upload"
            >
              {uploadMutation.isPending ? "Uploading..." : "Upload"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Media Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-md" data-testid="dialog-edit">
          <DialogHeader>
            <DialogTitle>Edit Media</DialogTitle>
            <DialogDescription>
              Update the metadata for this media file.
            </DialogDescription>
          </DialogHeader>
          
          {editingMedia && (
            <div className="space-y-4">
              {editingMedia.mimeType.startsWith("image/") && (
                <div>
                  <img
                    src={editingMedia.url}
                    alt={editingMedia.alt || editingMedia.originalName}
                    className="w-full h-32 object-cover rounded"
                    data-testid="img-edit-preview"
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="edit-filename">Filename</Label>
                <Input
                  id="edit-filename"
                  value={editForm.filename}
                  onChange={(e) => setEditForm(prev => ({ ...prev, filename: e.target.value }))}
                  data-testid="input-edit-filename"
                />
              </div>
              
              <div>
                <Label htmlFor="edit-alt">Alt Text</Label>
                <Input
                  id="edit-alt"
                  value={editForm.alt}
                  onChange={(e) => setEditForm(prev => ({ ...prev, alt: e.target.value }))}
                  placeholder="Describe this image for accessibility"
                  data-testid="input-edit-alt"
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditDialog(false)} data-testid="button-cancel-edit">
              Cancel
            </Button>
            <Button
              onClick={handleSaveEdit}
              disabled={updateMutation.isPending}
              data-testid="button-save-edit"
            >
              {updateMutation.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}