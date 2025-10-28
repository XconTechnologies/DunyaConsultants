import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, GripVertical, Eye, EyeOff } from "lucide-react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { BranchIcon } from "@shared/schema";

function SortableRow({ icon, onEdit, onDelete, onToggleActive }: { 
  icon: BranchIcon; 
  onEdit: (icon: BranchIcon) => void;
  onDelete: (id: number) => void;
  onToggleActive: (icon: BranchIcon) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: icon.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow ref={setNodeRef} style={style}>
      <TableCell>
        <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing">
          <GripVertical className="h-5 w-5 text-gray-400" />
        </div>
      </TableCell>
      <TableCell className="font-medium">{icon.name}</TableCell>
      <TableCell>
        <img src={icon.iconUrl} alt={icon.name} className="h-12 w-12 object-contain rounded border border-gray-200" />
      </TableCell>
      <TableCell className="max-w-xs truncate text-sm text-gray-600">{icon.route}</TableCell>
      <TableCell>
        <Badge variant={icon.isActive ? "default" : "secondary"} className={icon.isActive ? "bg-green-500" : "bg-gray-400"}>
          {icon.isActive ? "Active" : "Inactive"}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onToggleActive(icon)}
            data-testid={`button-toggle-active-${icon.id}`}
          >
            {icon.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(icon)}
            data-testid={`button-edit-${icon.id}`}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(icon.id)}
            className="text-red-600 hover:text-red-700"
            data-testid={`button-delete-${icon.id}`}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default function BranchIconsManagement() {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIcon, setEditingIcon] = useState<BranchIcon | null>(null);
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

  const { data: icons = [], isLoading } = useQuery<BranchIcon[]>({
    queryKey: ["/api/admin/branch-icons"],
  });

  const [sortedIcons, setSortedIcons] = useState<BranchIcon[]>([]);

  // Update sorted icons when data changes
  useEffect(() => {
    if (icons.length > 0) {
      setSortedIcons([...icons]);
    }
  }, [icons]);

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const maxOrder = Math.max(...icons.map(i => i.displayOrder), -1);
      return await apiRequest("/api/admin/branch-icons", "POST", {
        ...data,
        displayOrder: maxOrder + 1,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/branch-icons"] });
      toast({ title: "Branch icon created successfully" });
      handleCloseDialog();
    },
    onError: () => {
      toast({ title: "Failed to create branch icon", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (data: { id: number; updates: Partial<typeof formData> }) => {
      return await apiRequest(`/api/admin/branch-icons/${data.id}`, "PATCH", data.updates);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/branch-icons"] });
      toast({ title: "Branch icon updated successfully" });
      handleCloseDialog();
    },
    onError: () => {
      toast({ title: "Failed to update branch icon", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest(`/api/admin/branch-icons/${id}`, "DELETE");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/branch-icons"] });
      toast({ title: "Branch icon deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete branch icon", variant: "destructive" });
    },
  });

  const reorderMutation = useMutation({
    mutationFn: async (iconOrders: { id: number; displayOrder: number }[]) => {
      return await apiRequest("/api/admin/branch-icons/reorder", "POST", { iconOrders });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/branch-icons"] });
      toast({ title: "Branch icons reordered successfully" });
    },
    onError: () => {
      toast({ title: "Failed to reorder branch icons", variant: "destructive" });
    },
  });

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSortedIcons((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);

        // Update display order
        const iconOrders = newItems.map((item, index) => ({
          id: item.id,
          displayOrder: index,
        }));
        reorderMutation.mutate(iconOrders);

        return newItems;
      });
    }
  };

  const handleOpenDialog = (icon?: BranchIcon) => {
    if (icon) {
      setEditingIcon(icon);
      setFormData({
        name: icon.name,
        iconUrl: icon.iconUrl,
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

  const handleToggleActive = (icon: BranchIcon) => {
    updateMutation.mutate({
      id: icon.id,
      updates: { isActive: !icon.isActive },
    });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this branch icon?")) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      
      <div className="flex-1 lg:ml-64">
        <AdminHeader />
        
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900" data-testid="text-page-title">
                  Branch Icons Management
                </h1>
                <p className="text-gray-600 mt-1">Manage icons displayed in the branches carousel</p>
              </div>
              <Button onClick={() => handleOpenDialog()} data-testid="button-add-icon">
                <Plus className="h-4 w-4 mr-2" />
                Add Icon
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Branch Icons ({icons.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8 text-gray-500">Loading...</div>
                ) : icons.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No branch icons yet. Create one to get started.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12"></TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Icon</TableHead>
                          <TableHead>Route</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <DndContext
                          sensors={sensors}
                          collisionDetection={closestCenter}
                          onDragEnd={handleDragEnd}
                        >
                          <SortableContext
                            items={sortedIcons.map(i => i.id)}
                            strategy={verticalListSortingStrategy}
                          >
                            {sortedIcons.map((icon) => (
                              <SortableRow
                                key={icon.id}
                                icon={icon}
                                onEdit={handleOpenDialog}
                                onDelete={handleDelete}
                                onToggleActive={handleToggleActive}
                              />
                            ))}
                          </SortableContext>
                        </DndContext>
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle data-testid="text-dialog-title">
              {editingIcon ? "Edit Branch Icon" : "Add Branch Icon"}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">City Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Lahore"
                required
                data-testid="input-name"
              />
            </div>

            <div>
              <Label htmlFor="iconUrl">Icon URL *</Label>
              <Input
                id="iconUrl"
                value={formData.iconUrl}
                onChange={(e) => setFormData({ ...formData, iconUrl: e.target.value })}
                placeholder="https://example.com/icon.png"
                required
                data-testid="input-icon-url"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload icon to media library and paste the URL here
              </p>
            </div>

            <div>
              <Label htmlFor="route">Route *</Label>
              <Input
                id="route"
                value={formData.route}
                onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                placeholder="/offices/lahore"
                required
                data-testid="input-route"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="rounded border-gray-300"
                data-testid="input-is-active"
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Active (show in carousel)
              </Label>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={createMutation.isPending || updateMutation.isPending}
                data-testid="button-submit"
              >
                {editingIcon ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
