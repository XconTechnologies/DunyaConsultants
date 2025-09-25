import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Tag, Plus, Trash2, LogOut } from "lucide-react";
import { canManageUsers } from "@/lib/permissions";
import type { AdminUser } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";

interface Category {
  name: string;
  count: number;
}

export default function CategoriesPage() {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Auth check
  useState(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          window.location.href = "/admin/login";
          return;
        }

        const response = await fetch("/api/admin/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const userData = await response.json();
          setAdminUser(userData.user);
        } else {
          localStorage.removeItem("adminToken");
          window.location.href = "/admin/login";
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        window.location.href = "/admin/login";
      } finally {
        setAuthChecked(true);
      }
    };

    checkAuth();
  });

  // Fetch categories
  const { data: categories = [], isLoading } = useQuery<Category[]>({
    queryKey: ["/api/admin/categories"],
    enabled: !!adminUser,
  });

  // Create category mutation
  const createCategoryMutation = useMutation({
    mutationFn: async (categoryName: string) => {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("/api/admin/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ name: categoryName }),
      });
      if (!response.ok) {
        throw new Error("Failed to create category");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/categories"] });
      setNewCategoryName("");
      setIsCreateDialogOpen(false);
      toast({
        title: "Success",
        description: "Category created successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create category",
        variant: "destructive",
      });
    },
  });

  // Delete category mutation
  const deleteCategoryMutation = useMutation({
    mutationFn: async (categoryName: string) => {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`/api/admin/categories/${encodeURIComponent(categoryName)}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete category");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/categories"] });
      toast({
        title: "Success",
        description: "Category deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete category",
        variant: "destructive",
      });
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    window.location.href = "/admin/login";
  };

  const handleCreateCategory = () => {
    if (!newCategoryName.trim()) {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive",
      });
      return;
    }
    createCategoryMutation.mutate(newCategoryName.trim());
  };

  const handleDeleteCategory = (categoryName: string) => {
    if (window.confirm(`Are you sure you want to delete the category "${categoryName}"? This will set all posts in this category to "General".`)) {
      deleteCategoryMutation.mutate(categoryName);
    }
  };

  if (!authChecked || !adminUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Tag className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">Categories Management</h1>
                    <p className="text-blue-100 text-sm">Manage blog post categories</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm text-blue-100">Welcome back,</div>
                  <div className="font-medium text-white">{adminUser.username}</div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Categories Management */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Blog Categories</h2>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="flex items-center space-x-2 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg"
                    data-testid="button-add-category"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Category</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Category</DialogTitle>
                    <DialogDescription>
                      Add a new category for organizing blog posts.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="categoryName">Category Name</Label>
                      <Input
                        id="categoryName"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="Enter category name"
                        data-testid="input-category-name"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsCreateDialogOpen(false)}
                      data-testid="button-cancel-category"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleCreateCategory}
                      disabled={createCategoryMutation.isPending}
                      data-testid="button-create-category"
                    >
                      {createCategoryMutation.isPending ? "Creating..." : "Create Category"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Existing Categories</CardTitle>
                <CardDescription>
                  Manage your blog post categories. Categories with posts cannot be deleted.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1D50C9]"></div>
                  </div>
                ) : categories.length === 0 ? (
                  <div className="text-center py-8">
                    <Tag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No categories found</p>
                    <p className="text-sm text-gray-400">Create your first category to get started</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category Name</TableHead>
                        <TableHead>Post Count</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {(categories as Category[]).map((category: Category) => (
                        <TableRow key={category.name} data-testid={`category-row-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          <TableCell className="font-medium">{category.name}</TableCell>
                          <TableCell>{category.count} posts</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteCategory(category.name)}
                              disabled={category.count > 0 || deleteCategoryMutation.isPending}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              data-testid={`button-delete-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}