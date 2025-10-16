import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Code, Eye, FileText, Copy, ExternalLink } from "lucide-react";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import type { AdminUser } from "@shared/schema";

interface CustomForm {
  id: number;
  title: string;
  description: string | null;
  slug: string;
  isActive: boolean;
  createdBy: number | null;
  createdAt: string;
  updatedAt: string;
}

export default function FormManagement() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingForm, setEditingForm] = useState<CustomForm | null>(null);
  const [showEmbedDialog, setShowEmbedDialog] = useState(false);
  const [selectedFormSlug, setSelectedFormSlug] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    isActive: true
  });

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const user = localStorage.getItem("adminUser");
    
    if (!token || !user) {
      setLocation("/admin/login");
      return;
    }

    try {
      setCurrentUser(JSON.parse(user));
      setAuthChecked(true);
    } catch (error) {
      console.error("Error parsing admin user:", error);
      setLocation("/admin/login");
    }
  }, [setLocation]);

  // Fetch all forms
  const { data: forms = [], isLoading } = useQuery<CustomForm[]>({
    queryKey: ["/api/admin/custom-forms"],
    enabled: authChecked && !!currentUser
  });

  // Create form mutation
  const createFormMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/admin/custom-forms", data),
    onSuccess: (newForm: any) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/custom-forms"] });
      setIsCreateDialogOpen(false);
      setFormData({ title: "", description: "", slug: "", isActive: true });
      toast({ title: "Success", description: "Form created successfully" });
      // Navigate to form builder
      setLocation(`/admin/form-builder/${newForm.id}`);
    },
    onError: (error: any) => {
      toast({ 
        title: "Error", 
        description: error.message || "Failed to create form",
        variant: "destructive"
      });
    }
  });

  // Update form mutation
  const updateFormMutation = useMutation({
    mutationFn: (data: { id: number; updates: Partial<CustomForm> }) => 
      apiRequest("PATCH", `/api/admin/custom-forms/${data.id}`, data.updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/custom-forms"] });
      setEditingForm(null);
      toast({ title: "Success", description: "Form updated successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Error", 
        description: error.message || "Failed to update form",
        variant: "destructive"
      });
    }
  });

  // Delete form mutation
  const deleteFormMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/admin/custom-forms/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/custom-forms"] });
      toast({ title: "Success", description: "Form deleted successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Error", 
        description: error.message || "Failed to delete form",
        variant: "destructive"
      });
    }
  });

  const handleCreateForm = () => {
    if (!formData.title || !formData.slug) {
      toast({ 
        title: "Error", 
        description: "Title and slug are required",
        variant: "destructive" 
      });
      return;
    }
    createFormMutation.mutate(formData);
  };

  const handleUpdateForm = (id: number, updates: Partial<CustomForm>) => {
    updateFormMutation.mutate({ id, updates });
  };

  const handleDeleteForm = (id: number, title: string) => {
    if (confirm(`Are you sure you want to delete the form "${title}"? This will also delete all its fields and submissions.`)) {
      deleteFormMutation.mutate(id);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const copyEmbedCode = (slug: string) => {
    const embedCode = `<div id="custom-form-${slug}"></div>
<script>
  // Fetch and render form
  fetch('/api/forms/${slug}')
    .then(r => r.json())
    .then(form => {
      // Render form dynamically in your application
      console.log(form);
    });
</script>`;
    
    navigator.clipboard.writeText(embedCode);
    toast({ title: "Copied!", description: "Embed code copied to clipboard" });
  };

  const copyFormUrl = (slug: string) => {
    const url = `${window.location.origin}/api/forms/${slug}`;
    navigator.clipboard.writeText(url);
    toast({ title: "Copied!", description: "Form URL copied to clipboard" });
  };

  if (!authChecked || !currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading forms...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <AdminSidebar currentUser={currentUser} />
      
      <div className="ml-64">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-white">Form Management</h1>
                <p className="text-blue-100 mt-1">Create and manage custom forms with dynamic fields</p>
              </div>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-white text-[#1D50C9] hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-create-form">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Form
                  </Button>
                </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Form</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Form Title *</Label>
                    <Input
                      id="title"
                      data-testid="input-form-title"
                      value={formData.title}
                      onChange={(e) => {
                        setFormData({ 
                          ...formData, 
                          title: e.target.value,
                          slug: formData.slug || generateSlug(e.target.value)
                        });
                      }}
                      placeholder="Contact Form"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="slug">Slug (URL-friendly) *</Label>
                    <Input
                      id="slug"
                      data-testid="input-form-slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="contact-form"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Form will be accessible at: /api/forms/{formData.slug || 'your-slug'}
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description (optional)</Label>
                    <Textarea
                      id="description"
                      data-testid="textarea-form-description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Brief description of this form"
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isActive">Active</Label>
                    <Switch
                      id="isActive"
                      data-testid="switch-form-active"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                    />
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsCreateDialogOpen(false);
                        setFormData({ title: "", description: "", slug: "", isActive: true });
                      }}
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleCreateForm}
                      disabled={createFormMutation.isPending}
                      data-testid="button-submit-form"
                    >
                      {createFormMutation.isPending ? "Creating..." : "Create & Add Fields"}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Total Forms</CardTitle>
                <div className="p-2 bg-[#1D50C9] rounded-lg">
                  <FileText className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#1D50C9]">{forms.length}</div>
                <p className="text-xs text-gray-600 mt-1">Custom forms created</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Active Forms</CardTitle>
                <div className="p-2 bg-green-500 rounded-lg">
                  <Eye className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">
                  {forms.filter(f => f.isActive).length}
                </div>
                <p className="text-xs text-gray-600 mt-1">Currently active forms</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Inactive Forms</CardTitle>
                <div className="p-2 bg-gray-500 rounded-lg">
                  <FileText className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-600">
                  {forms.filter(f => !f.isActive).length}
                </div>
                <p className="text-xs text-gray-600 mt-1">Inactive forms</p>
              </CardContent>
            </Card>
          </div>

          {isLoading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading forms...</p>
            </div>
          ) : forms.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-10 w-10 text-[#1D50C9]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No forms yet</h3>
                <p className="text-gray-500 mb-6">Create your first custom form to get started</p>
                <Button onClick={() => setIsCreateDialogOpen(true)} className="bg-[#1D50C9] hover:bg-[#1845B3]">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Form
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6">
              {forms.map((form) => (
                <div key={form.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{form.title}</h3>
                          <Badge 
                            className={
                              form.isActive
                                ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200" 
                                : "bg-gradient-to-r from-gray-50 to-slate-50 text-gray-700 border-gray-200"
                            }
                          >
                            {form.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        {form.description && (
                          <p className="text-sm text-gray-600 mb-3">{form.description}</p>
                        )}
                        <div className="flex items-center gap-3">
                          <code className="text-xs bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700">
                            /api/forms/{form.slug}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyFormUrl(form.slug)}
                            className="rounded-lg hover:bg-blue-50 hover:text-[#1D50C9] transition-colors duration-200"
                            data-testid={`button-copy-url-${form.id}`}
                          >
                            <Copy className="w-3 h-3 mr-1" />
                            Copy URL
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setLocation(`/admin/form-builder/${form.id}`)}
                          className="rounded-lg hover:bg-blue-50 hover:text-[#1D50C9] hover:border-[#1D50C9] transition-colors duration-200"
                          data-testid={`button-edit-fields-${form.id}`}
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit Fields
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setLocation(`/admin/form-submissions/${form.id}`)}
                          className="rounded-lg hover:bg-purple-50 hover:text-purple-600 hover:border-purple-600 transition-colors duration-200"
                          data-testid={`button-view-submissions-${form.id}`}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Submissions
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedFormSlug(form.slug);
                            setShowEmbedDialog(true);
                          }}
                          className="rounded-lg hover:bg-green-50 hover:text-green-600 hover:border-green-600 transition-colors duration-200"
                          data-testid={`button-embed-${form.id}`}
                        >
                          <Code className="w-4 h-4 mr-1" />
                          Embed
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpdateForm(form.id, { isActive: !form.isActive })}
                          className="rounded-lg hover:bg-orange-50 hover:text-orange-600 hover:border-orange-600 transition-colors duration-200"
                          data-testid={`button-toggle-active-${form.id}`}
                        >
                          {form.isActive ? "Deactivate" : "Activate"}
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteForm(form.id, form.title)}
                          className="rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                          data-testid={`button-delete-${form.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Embed Code Dialog */}
        <Dialog open={showEmbedDialog} onOpenChange={setShowEmbedDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Embed Form</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Form URL</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  readOnly
                  value={`${window.location.origin}/api/forms/${selectedFormSlug}`}
                  className="flex-1"
                />
                <Button onClick={() => copyFormUrl(selectedFormSlug)}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <Label>React Component Usage</Label>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-1 text-sm overflow-x-auto">
{`import DynamicForm from '@/components/DynamicForm';

<DynamicForm slug="${selectedFormSlug}" />`}
              </pre>
            </div>
            
            <div>
              <Label>Direct API Call</Label>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-1 text-sm overflow-x-auto">
{`// Fetch form structure
const form = await fetch('/api/forms/${selectedFormSlug}').then(r => r.json());

// Submit form
await fetch('/api/forms/${selectedFormSlug}/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    data: { /* your form data */ },
    source: window.location.pathname
  })
});`}
              </pre>
            </div>
          </div>
        </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
