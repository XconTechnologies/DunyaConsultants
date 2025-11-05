import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Upload, FileText } from "lucide-react";
import { useIconManagement } from "@/hooks/use-icon-management";
import { IconTable } from "@/components/admin/icon-table";
import { IconFormDialog } from "@/components/admin/icon-form-dialog";
import { IconPreviewDialog } from "@/components/admin/icon-preview-dialog";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function BranchIconsTab() {
  const { toast } = useToast();
  const [previewIcon, setPreviewIcon] = useState<any>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const config = {
    entityType: 'branch' as const,
    apiEndpoint: '/api/admin/branch-icons',
    queryKey: '/api/admin/branch-icons',
    labels: {
      singular: 'Branch Icon',
      plural: 'Branch Icons',
    },
    imageFieldName: 'iconUrl' as const,
    hasSeedEndpoint: true,
  };

  const {
    icons,
    sortedIcons,
    isLoading,
    sensors,
    isDialogOpen,
    editingIcon,
    formData,
    setFormData,
    createMutation,
    updateMutation,
    seedMutation,
    handleDragEnd,
    handleOpenDialog,
    handleCloseDialog,
    handleSubmit,
    handleToggleActive,
    handleDelete,
  } = useIconManagement(config);

  // Get all media
  const { data: mediaFiles = [] } = useQuery({
    queryKey: ["/api/admin/media"],
  });

  // Convert to WebP mutation
  const convertToWebPMutation = useMutation({
    mutationFn: async () => {
      // Get all media IDs from branch icons that need conversion
      const iconMediaIds = icons
        .map(icon => {
          const media = mediaFiles.find((m: any) => m.url === icon.iconUrl);
          return media?.id;
        })
        .filter((id): id is number => id !== undefined);

      if (iconMediaIds.length === 0) {
        throw new Error("No images found to convert");
      }

      const res = await apiRequest('POST', '/api/admin/media/convert-to-webp', { mediaIds: iconMediaIds });
      return await res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [config.queryKey] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/media"] });
      
      const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
      };
      
      const totalSavings = data.results.reduce((sum: number, r: any) => sum + (r.savings || 0), 0);
      toast({
        title: "Conversion Complete",
        description: `Converted ${data.converted} branch icon(s) to WebP. Saved ${formatFileSize(totalSavings)}`,
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Conversion Failed",
        description: error.message || "Failed to convert icons to WebP",
      });
    },
  });

  const handlePreview = (icon: any) => {
    setPreviewIcon(icon);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setPreviewIcon(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Branch Icons</h2>
          <p className="text-gray-600 mt-1">
            Manage icons displayed in the branches carousel on your homepage
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => convertToWebPMutation.mutate()} 
            variant="outline"
            disabled={convertToWebPMutation.isPending || icons.length === 0}
            data-testid="button-convert-all-webp"
            className="border-green-600 text-green-700 hover:bg-green-50 transition-all"
          >
            <FileText className="h-4 w-4 mr-2" />
            {convertToWebPMutation.isPending ? "Converting..." : "Convert All to WebP"}
          </Button>
          {icons.length === 0 && (
            <Button 
              onClick={() => seedMutation.mutate()} 
              variant="outline"
              disabled={seedMutation.isPending}
              data-testid="button-seed-data"
              className="border-[#1D50C9] text-[#1D50C9] hover:bg-[#1D50C9] hover:text-white transition-all"
            >
              <Upload className="h-4 w-4 mr-2" />
              {seedMutation.isPending ? "Importing..." : "Import Previous Data"}
            </Button>
          )}
          <Button 
            onClick={() => handleOpenDialog()} 
            data-testid="button-add-branch-icon"
            className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg transition-all"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Branch Icon
          </Button>
        </div>
      </div>

      {/* Icon Table */}
      <IconTable
        icons={sortedIcons}
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onEdit={handleOpenDialog}
        onDelete={handleDelete}
        onToggleActive={handleToggleActive}
        onPreview={handlePreview}
        isLoading={isLoading}
        imageField="iconUrl"
      />

      {/* Form Dialog */}
      <IconFormDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
        isEditing={!!editingIcon}
        formData={formData}
        setFormData={setFormData}
        isPending={createMutation.isPending || updateMutation.isPending}
        labels={config.labels}
        imageFieldLabel="Icon URL"
      />

      {/* Preview Dialog */}
      <IconPreviewDialog
        isOpen={isPreviewOpen}
        onClose={handleClosePreview}
        icon={previewIcon}
        imageField="iconUrl"
      />
    </div>
  );
}
