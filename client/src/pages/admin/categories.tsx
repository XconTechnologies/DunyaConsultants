import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest, queryClient as globalQueryClient } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Tag, Plus, Trash2, LogOut, Edit, Search } from "lucide-react";
import { canManageUsers } from "@/lib/permissions";
import type { AdminUser, Category } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";

interface EnhancedCategory extends Category {
  count: number;
}

interface CategoryFormData {
  name: string;
  slug?: string;
  description?: string;
  parentId?: number | null;
  focusKeyword?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export default function CategoriesPage() {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<EnhancedCategory | null>(null);
  const [formData, setFormData] = useState<CategoryFormData>({
    name: "",
    slug: "",
    description: "",
    parentId: null,
    focusKeyword: "",
    metaTitle: "",
    metaDescription: "",
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Auth check - same pattern as admin dashboard
  useEffect(() => {
    // Check for admin token first
    let token = localStorage.getItem("adminToken");
    let user = localStorage.getItem("adminUser");
    
    // If no admin token, check for user token
    if (!token || !user) {
      token = localStorage.getItem("userToken");
      user = localStorage.getItem("user");
    }
    
    if (!token || !user) {
      window.location.href = "/admin/login";
      return;
    }

    try {
      const userData = JSON.parse(user);
      setAdminUser(userData);
      setAuthChecked(true);
    } catch {
      window.location.href = "/admin/login";
    }
  }, []);

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

  // Fetch all categories
  const { data: categories = [], isLoading } = useQuery<EnhancedCategory[]>({
    queryKey: ["/api/admin/categories"],
    queryFn: async () => {
      const response = await fetch('/api/admin/categories', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      return response.json();
    },
    enabled: !!adminUser,
  });

  // Fetch parent categories for dropdown
  const { data: parentCategories = [] } = useQuery<Category[]>({
    queryKey: ["/api/admin/categories-parents"],
    queryFn: async () => {
      const response = await fetch('/api/admin/categories-parents', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch parent categories');
      }
      return response.json();
    },
    enabled: !!adminUser,
  });

  // Create category mutation
  const createCategoryMutation = useMutation({
    mutationFn: async (categoryData: CategoryFormData) => {
      const response = await fetch("/api/admin/categories", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(categoryData),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create category");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/categories"] });
      globalQueryClient.invalidateQueries({ queryKey: ["/api/admin/categories"] });
      resetForm();
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

  // Update category mutation
  const updateCategoryMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<CategoryFormData> }) => {
      const response = await fetch(`/api/admin/categories/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update category");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/categories"] });
      globalQueryClient.invalidateQueries({ queryKey: ["/api/admin/categories"] });
      setIsEditDialogOpen(false);
      setEditingCategory(null);
      resetForm();
      toast({
        title: "Success",
        description: "Category updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update category",
        variant: "destructive",
      });
    },
  });

  // Delete category mutation
  const deleteCategoryMutation = useMutation({
    mutationFn: async (categoryId: number) => {
      const response = await fetch(`/api/admin/categories/${categoryId}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to delete category");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/categories"] });
      globalQueryClient.invalidateQueries({ queryKey: ["/api/admin/categories"] });
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

  const resetForm = () => {
    setFormData({
      name: "",
      slug: "",
      description: "",
      parentId: null,
      focusKeyword: "",
      metaTitle: "",
      metaDescription: "",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    window.location.href = "/admin/login";
  };

  const handleCreateCategory = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive",
      });
      return;
    }
    createCategoryMutation.mutate(formData);
  };

  const handleEditCategory = (category: EnhancedCategory) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      slug: category.slug || "",
      description: category.description || "",
      parentId: category.parentId || null,
      focusKeyword: category.focusKeyword || "",
      metaTitle: category.metaTitle || "",
      metaDescription: category.metaDescription || "",
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdateCategory = () => {
    if (!editingCategory || !formData.name.trim()) {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive",
      });
      return;
    }
    updateCategoryMutation.mutate({
      id: editingCategory.id,
      data: formData,
    });
  };

  const handleDeleteCategory = (category: EnhancedCategory) => {
    if (window.confirm(`Are you sure you want to delete the category "${category.name}"? This action cannot be undone.`)) {
      deleteCategoryMutation.mutate(category.id);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Auto-generate slug when name changes
  const handleNameChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      name,
      ...((!prev.slug || prev.slug === generateSlug(prev.name)) && { slug: generateSlug(name) })
    }));
  };

  // Organize categories hierarchically
  const organizeHierarchicalCategories = (categories: EnhancedCategory[]) => {
    const parentCategories = categories.filter(cat => !cat.parentId);
    const childCategories = categories.filter(cat => cat.parentId);
    
    const organizedCategories: EnhancedCategory[] = [];
    
    parentCategories.forEach(parent => {
      organizedCategories.push(parent);
      const children = childCategories.filter(child => child.parentId === parent.id);
      children.forEach(child => {
        organizedCategories.push(child);
      });
    });
    
    return organizedCategories;
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
                    <h1 className="text-2xl font-bold text-white">Enhanced Categories Management</h1>
                    <p className="text-blue-100 text-sm">Manage blog categories with SEO optimization</p>
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
              <Dialog open={isCreateDialogOpen} onOpenChange={(open) => { setIsCreateDialogOpen(open); if (!open) resetForm(); }}>
                <DialogTrigger asChild>
                  <Button 
                    className="flex items-center space-x-2 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg"
                    data-testid="button-add-category"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Category</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create New Category</DialogTitle>
                    <DialogDescription>
                      Add a new category with SEO optimization for organizing blog posts.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="categoryName">Category Name *</Label>
                        <Input
                          id="categoryName"
                          value={formData.name}
                          onChange={(e) => handleNameChange(e.target.value)}
                          placeholder="Enter category name"
                          data-testid="input-category-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="categorySlug">URL Slug</Label>
                        <Input
                          id="categorySlug"
                          value={formData.slug}
                          onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                          placeholder="auto-generated-from-name"
                          data-testid="input-category-slug"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="parentCategory">Parent Category (Optional)</Label>
                      <Select
                        value={formData.parentId?.toString() || ""}
                        onValueChange={(value) => setFormData(prev => ({ 
                          ...prev, 
                          parentId: value ? parseInt(value) : null 
                        }))}
                      >
                        <SelectTrigger data-testid="select-parent-category">
                          <SelectValue placeholder="Select parent category (leave empty for main category)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">None (Main Category)</SelectItem>
                          {parentCategories.map((parent) => (
                            <SelectItem key={parent.id} value={parent.id.toString()}>
                              {parent.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="categoryDescription">Description</Label>
                      <Textarea
                        id="categoryDescription"
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Brief description of this category"
                        data-testid="input-category-description"
                      />
                    </div>
                    <div>
                      <Label htmlFor="categoryFocusKeyword">Focus Keyword</Label>
                      <Input
                        id="categoryFocusKeyword"
                        value={formData.focusKeyword}
                        onChange={(e) => setFormData(prev => ({ ...prev, focusKeyword: e.target.value }))}
                        placeholder="Primary SEO keyword"
                        data-testid="input-category-focus-keyword"
                      />
                    </div>
                    <div>
                      <Label htmlFor="categoryMetaTitle">Meta Title</Label>
                      <Input
                        id="categoryMetaTitle"
                        value={formData.metaTitle}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                        placeholder="SEO title for search engines (50-60 chars)"
                        data-testid="input-category-meta-title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="categoryMetaDescription">Meta Description</Label>
                      <Textarea
                        id="categoryMetaDescription"
                        value={formData.metaDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                        placeholder="SEO description for search engines (150-160 chars)"
                        data-testid="input-category-meta-description"
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

            {/* Edit Dialog */}
            <Dialog open={isEditDialogOpen} onOpenChange={(open) => { setIsEditDialogOpen(open); if (!open) { setEditingCategory(null); resetForm(); } }}>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Edit Category</DialogTitle>
                  <DialogDescription>
                    Update category information and SEO settings.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="editCategoryName">Category Name *</Label>
                      <Input
                        id="editCategoryName"
                        value={formData.name}
                        onChange={(e) => handleNameChange(e.target.value)}
                        placeholder="Enter category name"
                        data-testid="input-edit-category-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="editCategorySlug">URL Slug</Label>
                      <Input
                        id="editCategorySlug"
                        value={formData.slug}
                        onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                        placeholder="auto-generated-from-name"
                        data-testid="input-edit-category-slug"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="editParentCategory">Parent Category (Optional)</Label>
                    <Select
                      value={formData.parentId?.toString() || ""}
                      onValueChange={(value) => setFormData(prev => ({ 
                        ...prev, 
                        parentId: value ? parseInt(value) : null 
                      }))}
                    >
                      <SelectTrigger data-testid="select-edit-parent-category">
                        <SelectValue placeholder="Select parent category (leave empty for main category)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">None (Main Category)</SelectItem>
                        {parentCategories.filter(parent => parent.id !== editingCategory?.id).map((parent) => (
                          <SelectItem key={parent.id} value={parent.id.toString()}>
                            {parent.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="editCategoryDescription">Description</Label>
                    <Textarea
                      id="editCategoryDescription"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Brief description of this category"
                      data-testid="input-edit-category-description"
                    />
                  </div>
                  <div>
                    <Label htmlFor="editCategoryFocusKeyword">Focus Keyword</Label>
                    <Input
                      id="editCategoryFocusKeyword"
                      value={formData.focusKeyword}
                      onChange={(e) => setFormData(prev => ({ ...prev, focusKeyword: e.target.value }))}
                      placeholder="Primary SEO keyword"
                      data-testid="input-edit-category-focus-keyword"
                    />
                  </div>
                  <div>
                    <Label htmlFor="editCategoryMetaTitle">Meta Title</Label>
                    <Input
                      id="editCategoryMetaTitle"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                      placeholder="SEO title for search engines (50-60 chars)"
                      data-testid="input-edit-category-meta-title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="editCategoryMetaDescription">Meta Description</Label>
                    <Textarea
                      id="editCategoryMetaDescription"
                      value={formData.metaDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                      placeholder="SEO description for search engines (150-160 chars)"
                      data-testid="input-edit-category-meta-description"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsEditDialogOpen(false)}
                    data-testid="button-cancel-edit"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleUpdateCategory}
                    disabled={updateCategoryMutation.isPending}
                    data-testid="button-update-category"
                  >
                    {updateCategoryMutation.isPending ? "Updating..." : "Update Category"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Existing Categories</CardTitle>
                <CardDescription>
                  Manage your blog post categories with SEO optimization. Categories with posts cannot be deleted.
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
                        <TableHead>Category</TableHead>
                        <TableHead>SEO Info</TableHead>
                        <TableHead>Posts</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {organizeHierarchicalCategories(categories).map((category) => {
                        const isChild = !!category.parentId;
                        return (
                          <TableRow key={category.id} data-testid={`category-row-${category.slug}`}>
                            <TableCell>
                              <div className={isChild ? "ml-6" : ""}>
                                <div className="flex items-center space-x-2">
                                  {isChild && <span className="text-gray-400">└─</span>}
                                  <div className="flex items-center space-x-2">
                                    {!isChild && <span className="text-blue-600 font-semibold">📁</span>}
                                    {isChild && <span className="text-green-600">📄</span>}
                                    <div className={`font-medium ${isChild ? "text-gray-700" : "text-gray-900"}`}>
                                      {category.name}
                                    </div>
                                  </div>
                                </div>
                                <div className={`text-sm text-gray-500 ${isChild ? "ml-8" : ""}`}>
                                  /{category.slug}
                                </div>
                                {category.description && (
                                  <div className={`text-xs text-gray-400 mt-1 max-w-xs truncate ${isChild ? "ml-8" : ""}`}>
                                    {category.description}
                                  </div>
                                )}
                              </div>
                            </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {category.focusKeyword && (
                                <Badge variant="outline" className="text-xs">
                                  <Search className="w-3 h-3 mr-1" />
                                  {category.focusKeyword}
                                </Badge>
                              )}
                              {category.metaTitle && (
                                <div className="text-xs text-gray-500 max-w-xs truncate">
                                  {category.metaTitle}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={category.count > 0 ? "default" : "secondary"}>
                              {category.count} posts
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={category.isActive ? "default" : "secondary"}>
                              {category.isActive ? "Active" : "Inactive"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEditCategory(category)}
                                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                data-testid={`button-edit-${category.slug}`}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDeleteCategory(category)}
                                disabled={category.count > 0 || deleteCategoryMutation.isPending}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50 disabled:opacity-50"
                                data-testid={`button-delete-${category.slug}`}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
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