import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, FileAudio, Image, Video, FileText, Loader2, Download, Trash2 } from "lucide-react";

interface MediaAttachment {
  url: string;
  title?: string;
  caption?: string;
  duration?: string;
  thumbnail?: string;
  fileType?: string;
  size?: number;
  uploadedAt: string;
}

interface EventMediaManagerProps {
  eventId: number;
}

export default function EventMediaManager({ eventId }: EventMediaManagerProps) {
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [uploadMediaType, setUploadMediaType] = useState<'recording' | 'image' | 'video' | 'document'>('recording');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCaption, setUploadCaption] = useState("");
  const [uploadDuration, setUploadDuration] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch event media
  const { data: mediaData, isLoading } = useQuery<{
    recordings: MediaAttachment[];
    images: MediaAttachment[];
    videos: MediaAttachment[];
    documents: MediaAttachment[];
  }>({
    queryKey: ['/api/events', eventId, 'media'],
  });

  // Upload media mutation
  const uploadMutation = useMutation({
    mutationFn: async () => {
      if (!uploadFile) throw new Error("No file selected");

      const formData = new FormData();
      formData.append('file', uploadFile);
      formData.append('mediaType', uploadMediaType);
      if (uploadTitle) formData.append('title', uploadTitle);
      if (uploadCaption) formData.append('caption', uploadCaption);
      if (uploadDuration) formData.append('duration', uploadDuration);

      const response = await fetch(`/api/events/${eventId}/media/upload`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Upload failed');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Media uploaded successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/events', eventId, 'media'] });
      setShowUploadDialog(false);
      setUploadFile(null);
      setUploadTitle("");
      setUploadCaption("");
      setUploadDuration("");
    },
    onError: (error: Error) => {
      toast({
        title: "Upload Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Delete media mutation
  const deleteMutation = useMutation({
    mutationFn: async ({ mediaType, index }: { mediaType: string; index: number }) => {
      return await apiRequest('DELETE', `/api/events/${eventId}/media/${mediaType}/${index}`);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Media deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/events', eventId, 'media'] });
    },
    onError: (error: Error) => {
      toast({
        title: "Delete Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadFile(file);
      if (!uploadTitle) {
        setUploadTitle(file.name);
      }
    }
  };

  const handleDelete = (mediaType: string, index: number) => {
    if (confirm("Are you sure you want to delete this media?")) {
      deleteMutation.mutate({ mediaType, index });
    }
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return '';
    const mb = bytes / (1024 * 1024);
    return mb < 1 ? `${(bytes / 1024).toFixed(1)} KB` : `${mb.toFixed(1)} MB`;
  };

  const MediaList = ({ items, type }: { items: MediaAttachment[]; type: string }) => {
    if (!items || items.length === 0) {
      return (
        <p className="text-sm text-gray-500 text-center py-4">
          No {type} uploaded yet
        </p>
      );
    }

    return (
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg p-3 bg-gray-50">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                {type === 'images' && (
                  <img 
                    src={item.url} 
                    alt={item.caption || 'Event image'} 
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                )}
                <p className="font-medium text-sm truncate">
                  {item.title || item.caption || 'Untitled'}
                </p>
                {item.caption && type === 'images' && (
                  <p className="text-xs text-gray-600 mt-1">{item.caption}</p>
                )}
                {item.duration && (
                  <p className="text-xs text-gray-600 mt-1">Duration: {item.duration}</p>
                )}
                {item.fileType && (
                  <p className="text-xs text-gray-600 mt-1">
                    {item.fileType.toUpperCase()} {item.size && `• ${formatFileSize(item.size)}`}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(item.uploadedAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => window.open(item.url, '_blank')}
                  data-testid={`button-download-${type}-${index}`}
                >
                  <Download className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={() => handleDelete(type.slice(0, -1), index)}
                  data-testid={`button-delete-${type}-${index}`}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-gray-800">Event Media</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="shadow-lg border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-gray-800">Event Media</CardTitle>
          <Button
            size="sm"
            onClick={() => setShowUploadDialog(true)}
            className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white hover:opacity-90"
            data-testid="button-upload-media"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recordings" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1">
              <TabsTrigger 
                value="recordings"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs"
                data-testid="tab-recordings"
              >
                <FileAudio className="w-3 h-3 mr-1" />
                Audio ({mediaData?.recordings?.length || 0})
              </TabsTrigger>
              <TabsTrigger 
                value="images"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs"
                data-testid="tab-images"
              >
                <Image className="w-3 h-3 mr-1" />
                Images ({mediaData?.images?.length || 0})
              </TabsTrigger>
              <TabsTrigger 
                value="videos"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs"
                data-testid="tab-videos"
              >
                <Video className="w-3 h-3 mr-1" />
                Videos ({mediaData?.videos?.length || 0})
              </TabsTrigger>
              <TabsTrigger 
                value="documents"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs"
                data-testid="tab-documents"
              >
                <FileText className="w-3 h-3 mr-1" />
                Docs ({mediaData?.documents?.length || 0})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recordings" className="mt-4">
              <MediaList items={mediaData?.recordings || []} type="recordings" />
            </TabsContent>

            <TabsContent value="images" className="mt-4">
              <MediaList items={mediaData?.images || []} type="images" />
            </TabsContent>

            <TabsContent value="videos" className="mt-4">
              <MediaList items={mediaData?.videos || []} type="videos" />
            </TabsContent>

            <TabsContent value="documents" className="mt-4">
              <MediaList items={mediaData?.documents || []} type="documents" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Upload Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Event Media</DialogTitle>
            <DialogDescription>
              Upload recordings, images, videos, or documents for this event.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Media Type</Label>
              <Select
                value={uploadMediaType}
                onValueChange={(value: any) => setUploadMediaType(value)}
              >
                <SelectTrigger data-testid="select-media-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recording">Audio Recording</SelectItem>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="document">Document</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>File</Label>
              <Input
                type="file"
                onChange={handleFileSelect}
                accept={
                  uploadMediaType === 'recording' ? 'audio/*' :
                  uploadMediaType === 'image' ? 'image/*' :
                  uploadMediaType === 'video' ? 'video/*' :
                  '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx'
                }
                data-testid="input-file"
              />
              {uploadFile && (
                <p className="text-sm text-gray-600">
                  Selected: {uploadFile.name} ({formatFileSize(uploadFile.size)})
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={uploadTitle}
                onChange={(e) => setUploadTitle(e.target.value)}
                placeholder="Enter title"
                data-testid="input-title"
              />
            </div>

            {uploadMediaType === 'image' && (
              <div className="space-y-2">
                <Label>Caption (optional)</Label>
                <Input
                  value={uploadCaption}
                  onChange={(e) => setUploadCaption(e.target.value)}
                  placeholder="Enter caption"
                  data-testid="input-caption"
                />
              </div>
            )}

            {(uploadMediaType === 'recording' || uploadMediaType === 'video') && (
              <div className="space-y-2">
                <Label>Duration (optional)</Label>
                <Input
                  value={uploadDuration}
                  onChange={(e) => setUploadDuration(e.target.value)}
                  placeholder="e.g., 5:30 or 1h 30m"
                  data-testid="input-duration"
                />
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowUploadDialog(false)}
              disabled={uploadMutation.isPending}
              data-testid="button-cancel-upload"
            >
              Cancel
            </Button>
            <Button
              onClick={() => uploadMutation.mutate()}
              disabled={!uploadFile || uploadMutation.isPending}
              className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white"
              data-testid="button-confirm-upload"
            >
              {uploadMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
