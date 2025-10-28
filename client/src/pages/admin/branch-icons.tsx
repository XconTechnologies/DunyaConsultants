import { useState, useEffect } from "react";
import { useLocation } from "wouter";
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
import { Plus, Pencil, Trash2, GripVertical, Eye, EyeOff, Upload } from "lucide-react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { BranchIcon, AdminUser } from "@shared/schema";

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
    <TableRow 
      ref={setNodeRef} 
      style={style}
      className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors"
    >
      <TableCell>
        <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-2 rounded hover:bg-blue-100/50 transition-colors">
          <GripVertical className="h-5 w-5 text-[#1D50C9]" />
        </div>
      </TableCell>
      <TableCell className="font-semibold text-gray-900">{icon.name}</TableCell>
      <TableCell>
        <div className="p-2 bg-white rounded-lg border-2 border-blue-100 inline-block shadow-sm">
          <img src={icon.iconUrl} alt={icon.name} className="h-12 w-12 object-contain" />
        </div>
      </TableCell>
      <TableCell className="max-w-xs truncate text-sm text-gray-600 font-mono bg-gray-50 rounded px-2 py-1">{icon.route}</TableCell>
      <TableCell>
        <Badge 
          variant={icon.isActive ? "default" : "secondary"} 
          className={icon.isActive 
            ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0" 
            : "bg-gray-300 text-gray-700 border-0"
          }
        >
          {icon.isActive ? "Active" : "Inactive"}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex gap-1 justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onToggleActive(icon)}
            data-testid={`button-toggle-active-${icon.id}`}
            className="hover:bg-blue-100 hover:text-[#1D50C9]"
            title={icon.isActive ? "Hide from carousel" : "Show in carousel"}
          >
            {icon.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(icon)}
            data-testid={`button-edit-${icon.id}`}
            className="hover:bg-blue-100 hover:text-[#1D50C9]"
            title="Edit branch icon"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(icon.id)}
            className="text-red-600 hover:bg-red-50 hover:text-red-700"
            data-testid={`button-delete-${icon.id}`}
            title="Delete branch icon"
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
  const [, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIcon, setEditingIcon] = useState<BranchIcon | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    iconUrl: "",
    route: "",
    isActive: true,
  });

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const adminUserStr = localStorage.getItem("adminUser");
    const userToken = localStorage.getItem("userToken");
    const userStr = localStorage.getItem("user");

    const token = adminToken || userToken;
    const user = adminUserStr || userStr;

    if (!token || !user) {
      setLocation("/admin/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      setCurrentUser(userData);
      setAuthChecked(true);
    } catch {
      setLocation("/admin/login");
    }
  }, [setLocation]);

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
      return await apiRequest("POST", "/api/admin/branch-icons", {
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
      return await apiRequest("PATCH", `/api/admin/branch-icons/${data.id}`, data.updates);
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
      return await apiRequest("DELETE", `/api/admin/branch-icons/${id}`);
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
      return await apiRequest("POST", "/api/admin/branch-icons/reorder", { iconOrders });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/branch-icons"] });
      toast({ title: "Branch icons reordered successfully" });
    },
    onError: () => {
      toast({ title: "Failed to reorder branch icons", variant: "destructive" });
    },
  });

  const seedMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/admin/branch-icons/seed");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/branch-icons"] });
      toast({ title: "Successfully imported all previous branch icons!" });
    },
    onError: (error: any) => {
      const errorMessage = error?.message || "Failed to seed branch icons";
      
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

  if (!authChecked || !currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30 flex">
      <AdminSidebar currentUser={currentUser} />
      
      <div className="flex-1 lg:ml-64">
        <AdminHeader currentUser={currentUser} title="Branch Icons Management" />
        
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-[#1D50C9] bg-clip-text text-transparent pb-2" data-testid="text-page-title">
                    Branch Icons Management
                  </h1>
                  <p className="text-gray-600 mt-2">Manage icons displayed in the branches carousel on your homepage</p>
                </div>
                <div className="flex gap-2">
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
                    data-testid="button-add-icon"
                    className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg transition-all"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Icon
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#1D50C9]/5 to-[#2563eb]/5 border-b">
                <CardTitle className="flex items-center gap-2 text-xl bg-gradient-to-r from-gray-900 to-[#1D50C9] bg-clip-text text-transparent">
                  <GripVertical className="w-5 h-5 text-[#1D50C9]" />
                  Branch Icons ({icons.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#1D50C9]"></div>
                    <p className="mt-4 text-gray-600">Loading branch icons...</p>
                  </div>
                ) : icons.length === 0 ? (
                  <div className="text-center py-16 px-4">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1D50C9]/10 to-[#1845B3]/10 flex items-center justify-center">
                      <GripVertical className="w-10 h-10 text-[#1D50C9]" />
                    </div>
                    <p className="text-gray-600 text-lg mb-2">No branch icons yet</p>
                    <p className="text-gray-500 text-sm">Click "Import Previous Data" or "Add Icon" to get started</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto -mx-6 px-6">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-b border-gray-200 hover:bg-transparent">
                          <TableHead className="w-12 text-gray-700 font-semibold"></TableHead>
                          <TableHead className="text-gray-700 font-semibold">Name</TableHead>
                          <TableHead className="text-gray-700 font-semibold">Icon</TableHead>
                          <TableHead className="text-gray-700 font-semibold">Route</TableHead>
                          <TableHead className="text-gray-700 font-semibold">Status</TableHead>
                          <TableHead className="text-gray-700 font-semibold text-right">Actions</TableHead>
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
        <DialogContent className="max-w-md border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#1D50C9] bg-clip-text text-transparent pb-2" data-testid="text-dialog-title">
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

            <DialogFooter className="gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleCloseDialog}
                className="border-gray-300 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={createMutation.isPending || updateMutation.isPending}
                data-testid="button-submit"
                className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg"
              >
                {createMutation.isPending || updateMutation.isPending ? "Saving..." : (editingIcon ? "Update" : "Create")}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
