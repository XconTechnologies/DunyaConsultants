import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FileAudio, Image as ImageIcon, Video, FileText, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

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

interface EventMediaDisplayProps {
  recordings?: MediaAttachment[];
  images?: MediaAttachment[];
  videos?: MediaAttachment[];
  documents?: MediaAttachment[];
}

export default function EventMediaDisplay({ recordings, images, videos, documents }: EventMediaDisplayProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Ensure arrays are never null/undefined
  const recordingsList = recordings ?? [];
  const imagesList = images ?? [];
  const videosList = videos ?? [];
  const documentsList = documents ?? [];
  
  const hasMedia = recordingsList.length > 0 || imagesList.length > 0 || videosList.length > 0 || documentsList.length > 0;

  if (!hasMedia) {
    return null;
  }

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return '';
    const mb = bytes / (1024 * 1024);
    return mb < 1 ? `${(bytes / 1024).toFixed(1)} KB` : `${mb.toFixed(1)} MB`;
  };

  return (
    <>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Event Media</h3>
        
        <Tabs defaultValue={recordingsList.length > 0 ? "recordings" : imagesList.length > 0 ? "images" : videosList.length > 0 ? "videos" : "documents"} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 mb-6">
            {recordingsList.length > 0 && (
              <TabsTrigger 
                value="recordings"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white text-sm"
                data-testid="tab-recordings"
              >
                <FileAudio className="w-4 h-4 mr-2" />
                Audio ({recordingsList.length})
              </TabsTrigger>
            )}
            {imagesList.length > 0 && (
              <TabsTrigger 
                value="images"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white text-sm"
                data-testid="tab-images"
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Images ({imagesList.length})
              </TabsTrigger>
            )}
            {videosList.length > 0 && (
              <TabsTrigger 
                value="videos"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white text-sm"
                data-testid="tab-videos"
              >
                <Video className="w-4 h-4 mr-2" />
                Videos ({videosList.length})
              </TabsTrigger>
            )}
            {documentsList.length > 0 && (
              <TabsTrigger 
                value="documents"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white text-sm"
                data-testid="tab-documents"
              >
                <FileText className="w-4 h-4 mr-2" />
                Documents ({documentsList.length})
              </TabsTrigger>
            )}
          </TabsList>

          {recordingsList.length > 0 && (
            <TabsContent value="recordings" className="space-y-4">
              {recordingsList.map((recording, index) => (
                <Card key={index} className="bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex-shrink-0">
                          <FileAudio className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">{recording.title || 'Audio Recording'}</h4>
                          {recording.duration && (
                            <p className="text-sm text-gray-600">Duration: {recording.duration}</p>
                          )}
                        </div>
                      </div>
                      <audio controls className="max-w-xs" data-testid={`audio-${index}`}>
                        <source src={recording.url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          )}

          {imagesList.length > 0 && (
            <TabsContent value="images">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {imagesList.map((image, index) => (
                  <Card 
                    key={index} 
                    className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all border-0"
                    onClick={() => setSelectedImage(image.url)}
                    data-testid={`image-card-${index}`}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={image.url} 
                          alt={image.caption || `Event image ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white font-medium text-sm line-clamp-2">
                              {image.caption || image.title || 'View image'}
                            </p>
                          </div>
                        </div>
                      </div>
                      {image.caption && (
                        <div className="p-3 bg-gray-50">
                          <p className="text-sm text-gray-700 line-clamp-2">{image.caption}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          )}

          {videosList.length > 0 && (
            <TabsContent value="videos" className="space-y-4">
              {videosList.map((video, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative">
                      <video 
                        controls 
                        className="w-full aspect-video"
                        poster={video.thumbnail}
                        data-testid={`video-${index}`}
                      >
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video element.
                      </video>
                    </div>
                    {video.title && (
                      <div className="p-4 bg-gradient-to-r from-[#1D50C9] to-[#1845B3]">
                        <h4 className="font-semibold text-white">{video.title}</h4>
                        {video.uploadedAt && (
                          <p className="text-sm text-blue-100 mt-1">
                            Uploaded: {new Date(video.uploadedAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          )}

          {documentsList.length > 0 && (
            <TabsContent value="documents" className="space-y-3">
              {documentsList.map((doc, index) => (
                <Card key={index} className="bg-gradient-to-br from-orange-50 to-white border-orange-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">{doc.title || 'Document'}</h4>
                          <p className="text-sm text-gray-600">
                            {doc.fileType?.toUpperCase().replace('.', '')} 
                            {doc.size && ` • ${formatFileSize(doc.size)}`}
                          </p>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white hover:opacity-90"
                        data-testid={`button-download-doc-${index}`}
                      >
                        <a href={doc.url} download target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          )}
        </Tabs>
      </div>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-0">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage} 
                alt="Event image" 
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
