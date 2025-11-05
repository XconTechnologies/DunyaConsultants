import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";

interface IconPreviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  icon: {
    name: string;
    iconUrl?: string;
    logoUrl?: string;
  } | null;
  imageField: 'iconUrl' | 'logoUrl';
}

export function IconPreviewDialog({ isOpen, onClose, icon, imageField }: IconPreviewDialogProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!icon) return null;

  const imageUrl = imageField === 'iconUrl' ? icon.iconUrl : icon.logoUrl;

  const handleDownload = async () => {
    if (!imageUrl) return;

    setIsDownloading(true);
    try {
      // Fetch the image as a blob
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Extract filename from URL or use icon name
      const urlParts = imageUrl.split('/');
      const filename = urlParts[urlParts.length - 1] || `${icon.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download image. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
            Icon Preview
          </DialogTitle>
          <DialogDescription className="mt-1">
            {icon.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Preview */}
          <div className="relative bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-lg p-8 border-2 border-blue-100 flex items-center justify-center min-h-[300px]">
            <div className="relative">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={icon.name}
                  className="max-h-64 max-w-full object-contain shadow-xl rounded-lg"
                  data-testid="preview-image"
                />
              ) : (
                <div className="text-gray-400 text-center">
                  <p>No image available</p>
                </div>
              )}
            </div>
          </div>

          {/* Image Information */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600 font-medium mb-1">Icon Name</p>
                <p className="text-gray-900 font-semibold">{icon.name}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-1">Image URL</p>
                <p className="text-gray-900 font-mono text-xs truncate" title={imageUrl}>
                  {imageUrl || 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end pt-2 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={onClose}
              data-testid="button-close"
            >
              Close
            </Button>
            <Button
              onClick={handleDownload}
              disabled={!imageUrl || isDownloading}
              className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white"
              data-testid="button-download"
            >
              <Download className="h-4 w-4 mr-2" />
              {isDownloading ? 'Downloading...' : 'Download Image'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
