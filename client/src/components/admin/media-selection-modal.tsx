import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Upload,
  Image,
  Video,
  File,
  Search,
  Check,
  Grid3X3,
  List,
} from "lucide-react";
import type { Media } from "@shared/schema";

interface MediaSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (media: Media) => void;
  allowedTypes?: string[]; // e.g., ["image/*"] for images only
  title?: string;
  description?: string;
}

export default function MediaSelectionModal({
  isOpen,
  onClose,
  onSelect,
  allowedTypes = ["image/*", "video/*"],
  title = "Select Media",
  description = "Choose from your media library or upload a new file.",
}: MediaSelectionModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [uploadFiles, setUploadFiles] = useState<FileList | null>(null);
  const [activeTab, setActiveTab] = useState("library");
  
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

  // Fetch media files
  const { data: mediaFiles = [], isLoading } = useQuery({
    queryKey: ["/api/admin/media"],
    enabled: isOpen,
    queryFn: async () => {
      const response = await fetch("/api/admin/media", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to fetch media");
      return response.json();
    },
  });

  // Filter media files based on search and allowed types
  const filteredMedia = mediaFiles.filter((media: Media) => {
    const matchesSearch = 
      media.originalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      media.alt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      "";
    
    const matchesType = allowedTypes.some(type => {
      if (type === "image/*") return media.mimeType.startsWith("image/");
      if (type === "video/*") return media.mimeType.startsWith("video/");
      return media.mimeType === type;
    });
    
    return matchesSearch && matchesType;
  });

  // Upload media mutation
  const uploadMutation = useMutation({
    mutationFn: async (files: FileList) => {
      const uploadedMedia = [];
      
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
        
        const media = await response.json();
        uploadedMedia.push(media);
      }
      
      return uploadedMedia;
    },
    onSuccess: (uploadedMedia) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/media"] });
      setUploadFiles(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      
      // Auto-select the first uploaded media if only one file was uploaded
      if (uploadedMedia.length === 1) {
        setSelectedMedia(uploadedMedia[0]);
        setActiveTab("library");
      }
      
      toast({
        title: "Success",
        description: `${uploadedMedia.length} file${uploadedMedia.length === 1 ? '' : 's'} uploaded successfully`,
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

  // Handle file upload
  const handleUpload = () => {
    if (uploadFiles && uploadFiles.length > 0) {
      uploadMutation.mutate(uploadFiles);
    }
  };

  // Handle media selection
  const handleSelectMedia = (media: Media) => {
    setSelectedMedia(media);
  };

  // Handle confirm selection
  const handleConfirmSelection = () => {
    if (selectedMedia) {
      onSelect(selectedMedia);
      handleClose();
    }
  };

  // Handle close
  const handleClose = () => {
    setSelectedMedia(null);
    setSearchTerm("");
    setUploadFiles(null);
    setActiveTab("library");
    onClose();
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

  // Get accept attribute for file input
  const getAcceptAttribute = () => {
    return allowedTypes.join(",");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col" data-testid="dialog-media-selection">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="library" data-testid="tab-media-library">Media Library</TabsTrigger>
            <TabsTrigger value="upload" data-testid="tab-upload-new">Upload New</TabsTrigger>
          </TabsList>
          
          <TabsContent value="library" className="flex-1 flex flex-col min-h-0 space-y-4">
            {/* Search and View Controls */}
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search media files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-modal"
                />
              </div>
              
              <div className="flex items-center border border-gray-300 rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                  data-testid="button-grid-view-modal"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                  data-testid="button-list-view-modal"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Media Content */}
            <div className="flex-1 overflow-auto">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading media files...</p>
                </div>
              ) : filteredMedia.length === 0 ? (
                <div className="text-center py-8">
                  <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    {searchTerm 
                      ? "No media files match your search."
                      : "No media files available."
                    }
                  </p>
                  <Button onClick={() => setActiveTab("upload")} data-testid="button-upload-from-empty">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Media
                  </Button>
                </div>
              ) : viewMode === "grid" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {filteredMedia.map((media: Media) => (
                    <Card 
                      key={media.id} 
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedMedia?.id === media.id ? 'ring-2 ring-[#1D50C9] bg-blue-50' : ''
                      }`}
                      onClick={() => handleSelectMedia(media)}
                      data-testid={`card-media-select-${media.id}`}
                    >
                      <div className="relative">
                        {selectedMedia?.id === media.id && (
                          <div className="absolute top-2 right-2 bg-[#1D50C9] text-white rounded-full p-1 z-10">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                        
                        {media.mimeType.startsWith("image/") ? (
                          <img
                            src={media.url}
                            alt={media.alt || media.originalName}
                            className="w-full h-24 object-cover rounded-t"
                            data-testid={`img-media-select-${media.id}`}
                          />
                        ) : (
                          <div className="w-full h-24 bg-gray-100 flex items-center justify-center rounded-t">
                            {getFileTypeIcon(media.mimeType)}
                          </div>
                        )}
                      </div>
                      
                      <CardContent className="p-2">
                        <h4 className="text-xs font-medium truncate" title={media.originalName} data-testid={`text-media-name-${media.id}`}>
                          {media.originalName}
                        </h4>
                        <p className="text-xs text-gray-500" data-testid={`text-media-size-${media.id}`}>
                          {formatFileSize(media.size)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredMedia.map((media: Media) => (
                    <Card
                      key={media.id}
                      className={`cursor-pointer transition-all hover:shadow-sm ${
                        selectedMedia?.id === media.id ? 'ring-2 ring-[#1D50C9] bg-blue-50' : ''
                      }`}
                      onClick={() => handleSelectMedia(media)}
                      data-testid={`card-media-list-${media.id}`}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-3">
                          {media.mimeType.startsWith("image/") ? (
                            <img
                              src={media.url}
                              alt={media.alt || media.originalName}
                              className="w-12 h-12 object-cover rounded"
                              data-testid={`img-media-list-${media.id}`}
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                              {getFileTypeIcon(media.mimeType)}
                            </div>
                          )}
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium truncate" data-testid={`text-media-list-name-${media.id}`}>
                              {media.originalName}
                            </h4>
                            <p className="text-sm text-gray-500" data-testid={`text-media-list-size-${media.id}`}>
                              {formatFileSize(media.size)} • {media.mimeType}
                            </p>
                            {media.alt && (
                              <p className="text-sm text-gray-600 truncate" data-testid={`text-media-list-alt-${media.id}`}>
                                {media.alt}
                              </p>
                            )}
                          </div>
                          
                          {selectedMedia?.id === media.id && (
                            <div className="bg-[#1D50C9] text-white rounded-full p-1">
                              <Check className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="upload" className="flex-1 flex flex-col space-y-4">
            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div className="text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload New Media</h3>
                <p className="text-gray-600 mb-4">
                  Select files to upload to your media library
                </p>
              </div>
              
              <div>
                <Label htmlFor="media-upload-modal">Select Files</Label>
                <Input
                  id="media-upload-modal"
                  type="file"
                  ref={fileInputRef}
                  multiple
                  accept={getAcceptAttribute()}
                  onChange={(e) => setUploadFiles(e.target.files)}
                  data-testid="input-file-upload-modal"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Supported formats: {allowedTypes.join(", ")}
                </p>
              </div>
              
              {uploadFiles && uploadFiles.length > 0 && (
                <div>
                  <p className="text-sm font-medium">Selected Files:</p>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    {Array.from(uploadFiles).map((file, index) => (
                      <li key={index} data-testid={`text-upload-file-${index}`}>
                        {file.name} ({formatFileSize(file.size)})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Button
                onClick={handleUpload}
                disabled={!uploadFiles || uploadFiles.length === 0 || uploadMutation.isPending}
                className="w-full"
                data-testid="button-upload-modal"
              >
                {uploadMutation.isPending ? "Uploading..." : "Upload Files"}
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose} data-testid="button-cancel-modal">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmSelection}
            disabled={!selectedMedia}
            data-testid="button-select-modal"
          >
            Select Media
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}