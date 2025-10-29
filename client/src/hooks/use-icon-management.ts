import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useSensor, useSensors, PointerSensor, KeyboardSensor } from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';

interface IconData {
  id: number;
  name: string;
  iconUrl?: string;
  logoUrl?: string;
  route: string;
  displayOrder: number;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IconManagementConfig {
  entityType: 'branch' | 'university';
  apiEndpoint: string;
  queryKey: string;
  labels: {
    singular: string;
    plural: string;
  };
  imageFieldName: 'iconUrl' | 'logoUrl';
  hasSeedEndpoint?: boolean;
}

export function useIconManagement(config: IconManagementConfig) {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIcon, setEditingIcon] = useState<IconData | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    iconUrl: "",
    route: "",
    isActive: true,
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const { data: icons = [], isLoading } = useQuery<IconData[]>({
    queryKey: [config.queryKey],
  });

  const [sortedIcons, setSortedIcons] = useState<IconData[]>([]);

  useEffect(() => {
    if (icons.length > 0) {
      setSortedIcons([...icons]);
    }
  }, [icons]);

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const maxOrder = Math.max(...icons.map(i => i.displayOrder), -1);
      const payload = {
        name: data.name,
        [config.imageFieldName]: data.iconUrl,
        route: data.route,
        isActive: data.isActive,
        displayOrder: maxOrder + 1,
      };
      return await apiRequest("POST", config.apiEndpoint, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [config.queryKey] });
      toast({ title: `${config.labels.singular} created successfully` });
      handleCloseDialog();
    },
    onError: () => {
      toast({ title: `Failed to create ${config.labels.singular.toLowerCase()}`, variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (data: { id: number; updates: Partial<typeof formData> }) => {
      const payload = {
        name: data.updates.name,
        [config.imageFieldName]: data.updates.iconUrl,
        route: data.updates.route,
        isActive: data.updates.isActive,
      };
      return await apiRequest("PATCH", `${config.apiEndpoint}/${data.id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [config.queryKey] });
      toast({ title: `${config.labels.singular} updated successfully` });
      handleCloseDialog();
    },
    onError: () => {
      toast({ title: `Failed to update ${config.labels.singular.toLowerCase()}`, variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest("DELETE", `${config.apiEndpoint}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [config.queryKey] });
      toast({ title: `${config.labels.singular} deleted successfully` });
    },
    onError: () => {
      toast({ title: `Failed to delete ${config.labels.singular.toLowerCase()}`, variant: "destructive" });
    },
  });

  const reorderMutation = useMutation({
    mutationFn: async (iconOrders: { id: number; displayOrder: number }[]) => {
      return await apiRequest("POST", `${config.apiEndpoint}/reorder`, { iconOrders });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [config.queryKey] });
      toast({ title: `${config.labels.plural} reordered successfully` });
    },
    onError: () => {
      toast({ title: `Failed to reorder ${config.labels.plural.toLowerCase()}`, variant: "destructive" });
    },
  });

  const seedMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", `${config.apiEndpoint}/seed`);
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [config.queryKey] });
      toast({ title: `Successfully imported all previous ${config.labels.plural.toLowerCase()}!` });
    },
    onError: (error: any) => {
      const errorMessage = error?.message || `Failed to seed ${config.labels.plural.toLowerCase()}`;
      
      if (errorMessage.includes("401") || errorMessage.includes("expired") || errorMessage.includes("Invalid")) {
        toast({ 
          title: "Session Expired", 
          description: "Please log out and log back in to continue.",
          variant: "destructive" 
        });
      } else {
        toast({ 
          title: errorMessage, 
          variant: "destructive" 
        });
      }
    },
  });

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSortedIcons((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);

        const iconOrders = newItems.map((item, index) => ({
          id: item.id,
          displayOrder: index,
        }));
        reorderMutation.mutate(iconOrders);

        return newItems;
      });
    }
  };

  const handleOpenDialog = (icon?: IconData) => {
    if (icon) {
      setEditingIcon(icon);
      setFormData({
        name: icon.name,
        iconUrl: icon.iconUrl || icon.logoUrl || "",
        route: icon.route,
        isActive: icon.isActive,
      });
    } else {
      setEditingIcon(null);
      setFormData({
        name: "",
        iconUrl: "",
        route: "",
        isActive: true,
      });
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingIcon(null);
    setFormData({
      name: "",
      iconUrl: "",
      route: "",
      isActive: true,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.iconUrl || !formData.route) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    if (editingIcon) {
      updateMutation.mutate({ id: editingIcon.id, updates: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleToggleActive = (icon: IconData) => {
    updateMutation.mutate({
      id: icon.id,
      updates: { isActive: !icon.isActive },
    });
  };

  const handleDelete = (id: number) => {
    if (confirm(`Are you sure you want to delete this ${config.labels.singular.toLowerCase()}?`)) {
      deleteMutation.mutate(id);
    }
  };

  return {
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
    deleteMutation,
    reorderMutation,
    seedMutation,
    handleDragEnd,
    handleOpenDialog,
    handleCloseDialog,
    handleSubmit,
    handleToggleActive,
    handleDelete,
  };
}
