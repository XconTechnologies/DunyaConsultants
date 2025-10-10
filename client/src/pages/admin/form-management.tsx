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
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar currentUser={currentUser} />
      
      <div className="flex-1 md:ml-64">
        <AdminHeader currentUser={currentUser} />
        
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Form Management</h1>
              <p className="text-gray-600 mt-2">
                Create and manage custom forms with dynamic fields
              </p>
            </div>
            
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button data-testid="button-create-form">
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

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading forms...</p>
            </div>
          ) : forms.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No forms yet</h3>
                <p className="text-gray-600 mb-4">Create your first custom form to get started</p>
                <Button onClick={() => setIsCreateDialogOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Form
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {forms.map((form) => (
                <Card key={form.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle>{form.title}</CardTitle>
                          <Badge variant={form.isActive ? "default" : "secondary"}>
                            {form.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        {form.description && (
                          <p className="text-sm text-gray-600 mt-1">{form.description}</p>
                        )}
                        <div className="flex items-center gap-4 mt-2">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                            /api/forms/{form.slug}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyFormUrl(form.slug)}
                            data-testid={`button-copy-url-${form.id}`}
                          >
                            <Copy className="w-3 h-3 mr-1" />
                            Copy URL
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setLocation(`/admin/form-builder/${form.id}`)}
                          data-testid={`button-edit-fields-${form.id}`}
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit Fields
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setLocation(`/admin/form-submissions/${form.id}`)}
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
                          data-testid={`button-embed-${form.id}`}
                        >
                          <Code className="w-4 h-4 mr-1" />
                          Embed
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpdateForm(form.id, { isActive: !form.isActive })}
                          data-testid={`button-toggle-active-${form.id}`}
                        >
                          {form.isActive ? "Deactivate" : "Activate"}
                        </Button>
                        
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteForm(form.id, form.title)}
                          data-testid={`button-delete-${form.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

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
  );
}
