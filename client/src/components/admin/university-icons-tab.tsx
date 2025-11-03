import { Button } from "@/components/ui/button";
import { Plus, Upload, Wrench } from "lucide-react";
import { useIconManagement } from "@/hooks/use-icon-management";
import { IconTable } from "@/components/admin/icon-table";
import { IconFormDialog } from "@/components/admin/icon-form-dialog";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function UniversityIconsTab() {
  const { toast } = useToast();
  
  const config = {
    entityType: 'university' as const,
    apiEndpoint: '/api/admin/university-icons',
    queryKey: '/api/admin/university-icons',
    labels: {
      singular: 'University Icon',
      plural: 'University Icons',
    },
    imageFieldName: 'logoUrl' as const,
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

  // Fix broken URLs mutation
  const fixUrlsMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest('/api/admin/university-icons/fix-urls', {
        method: 'POST',
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [config.queryKey] });
      toast({
        title: "URLs Fixed",
        description: data.message || `Fixed ${data.updatedCount || 0} university icon URLs`,
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to fix URLs",
      });
    },
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">University Icons</h2>
          <p className="text-gray-600 mt-1">
            Manage university partner logos displayed across your website
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => seedMutation.mutate()} 
            variant="outline"
            disabled={seedMutation.isPending}
            data-testid="button-seed-university-data"
            className="border-[#1D50C9] text-[#1D50C9] hover:bg-[#1D50C9] hover:text-white transition-all"
          >
            <Upload className="h-4 w-4 mr-2" />
            {seedMutation.isPending 
              ? "Importing..." 
              : icons.length === 0 
                ? "Import All 44 Universities" 
                : "Clear & Import All 44 Universities"}
          </Button>
          <Button 
            onClick={() => handleOpenDialog()} 
            data-testid="button-add-university-icon"
            className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg transition-all"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add University Icon
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
        isLoading={isLoading}
        imageField="logoUrl"
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
        imageFieldLabel="Logo URL"
      />
    </div>
  );
}
