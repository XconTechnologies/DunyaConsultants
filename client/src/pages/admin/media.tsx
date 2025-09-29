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
} from "lucide-react";
import type { AdminUser, Media } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";

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

  // Get auth headers for file upload (without Content-Type for FormData)
  const getUploadAuthHeaders = () => {
    const adminToken = localStorage.getItem("adminToken");
    const userToken = localStorage.getItem("userToken");
    const token = adminToken || userToken;
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  };

  // Check authentication
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

  // Filter media files based on search and filter type
  const filteredMedia = mediaFiles.filter((media: Media) => {
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
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
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

  // Delete media mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/media/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to delete media");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/media"] });
      toast({
        title: "Success",
        description: "Media deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete media",
        variant: "destructive",
      });
    },
  });

  // Bulk delete mutation
  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const promises = ids.map(id => 
        fetch(`/api/admin/media/${id}`, {
          method: "DELETE",
          headers: getAuthHeaders(),
        })
      );
      await Promise.all(promises);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/media"] });
      setSelectedMediaIds([]);
      toast({
        title: "Success",
        description: "Selected media deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete selected media",
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

  // Handle delete media
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this media file?")) {
      deleteMutation.mutate(id);
    }
  };

  // Handle bulk delete
  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedMediaIds.length} selected media files?`)) {
      bulkDeleteMutation.mutate(selectedMediaIds);
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
  const formatDate = (date: string) => {
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
          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search media files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-media"
                />
              </div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md bg-white"
                data-testid="select-filter-type"
              >
                <option value="all">All Files</option>
                <option value="image">Images</option>
                <option value="video">Videos</option>
                <option value="document">Documents</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              {selectedMediaIds.length > 0 && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleBulkDelete}
                  data-testid="button-bulk-delete"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Selected ({selectedMediaIds.length})
                </Button>
              )}
              
              <div className="flex items-center border border-gray-300 rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                  data-testid="button-grid-view"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                  data-testid="button-list-view"
                >
                  <List className="h-4 w-4" />
                </Button>
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
            <Card className="text-center py-12">
              <CardContent>
                <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  {searchTerm || filterType !== "all" 
                    ? "No media files match your search criteria."
                    : "No media files uploaded yet."
                  }
                </p>
                <Button onClick={() => setShowUploadDialog(true)} data-testid="button-upload-first-media">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Your First Media File
                </Button>
              </CardContent>
            </Card>
          ) : viewMode === "grid" ? (
            <>
              {/* Select All in Grid View */}
              <div className="mb-4 flex items-center">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all media"
                  data-testid="checkbox-select-all"
                />
                <label className="ml-2 text-sm text-gray-600">
                  Select All ({filteredMedia.length} files)
                </label>
              </div>
              
              {/* Grid View */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredMedia.map((media: Media) => (
                  <Card key={media.id} className="overflow-hidden group hover:shadow-lg transition-shadow" data-testid={`card-media-${media.id}`}>
                    <div className="relative">
                      <div className="absolute top-2 left-2 z-10">
                        <Checkbox
                          checked={selectedMediaIds.includes(media.id)}
                          onCheckedChange={(checked) => handleSelectMedia(media.id, !!checked)}
                          aria-label={`Select ${media.originalName}`}
                          data-testid={`checkbox-select-${media.id}`}
                        />
                      </div>
                      
                      {media.mimeType.startsWith("image/") ? (
                        <img
                          src={media.url}
                          alt={media.alt || media.originalName}
                          className="w-full h-32 object-cover"
                          data-testid={`img-preview-${media.id}`}
                        />
                      ) : (
                        <div className="w-full h-32 bg-gray-100 flex items-center justify-center">
                          {getFileTypeIcon(media.mimeType)}
                        </div>
                      )}
                      
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => window.open(media.url, '_blank')}
                            data-testid={`button-view-${media.id}`}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleEdit(media)}
                            data-testid={`button-edit-${media.id}`}
                          >
                            <Edit2 className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(media.id)}
                            data-testid={`button-delete-${media.id}`}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-3">
                      <h3 className="text-sm font-medium truncate" title={media.originalName} data-testid={`text-filename-${media.id}`}>
                        {media.originalName}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1" data-testid={`text-size-${media.id}`}>
                        {formatFileSize(media.size)}
                      </p>
                      <p className="text-xs text-gray-500" data-testid={`text-date-${media.id}`}>
                        {formatDate(media.createdAt)}
                      </p>
                    </CardContent>
                  </Card>
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
                            onClick={() => window.open(media.url, '_blank')}
                            data-testid={`button-list-view-${media.id}`}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(media)}
                            data-testid={`button-list-edit-${media.id}`}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(media.id)}
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