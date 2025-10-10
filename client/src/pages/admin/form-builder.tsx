import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, GripVertical, ArrowLeft, Save } from "lucide-react";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import type { AdminUser } from "@shared/schema";

interface FormField {
  id: number;
  formId: number;
  fieldLabel: string;
  fieldType: string;
  fieldName: string;
  placeholder: string | null;
  required: boolean;
  options: string[] | null;
  order: number;
  createdAt: string;
}

interface CustomForm {
  id: number;
  title: string;
  description: string | null;
  slug: string;
  isActive: boolean;
}

const FIELD_TYPES = [
  { value: "text", label: "Text" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "number", label: "Number" },
  { value: "textarea", label: "Textarea" },
  { value: "select", label: "Dropdown" },
  { value: "radio", label: "Radio Buttons" },
  { value: "checkbox", label: "Checkbox" },
  { value: "date", label: "Date" },
];

export default function FormBuilder() {
  const [, params] = useRoute("/admin/form-builder/:id");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const formId = params?.id ? parseInt(params.id) : null;
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  const [isAddFieldDialogOpen, setIsAddFieldDialogOpen] = useState(false);
  const [fieldData, setFieldData] = useState({
    fieldLabel: "",
    fieldType: "text",
    fieldName: "",
    placeholder: "",
    required: false,
    options: ""
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

  // Fetch form details
  const { data: form } = useQuery<CustomForm>({
    queryKey: ["/api/admin/custom-forms", formId],
    enabled: authChecked && !!currentUser && !!formId
  });

  // Fetch form fields
  const { data: fields = [], isLoading } = useQuery<FormField[]>({
    queryKey: ["/api/admin/custom-forms", formId, "fields"],
    enabled: authChecked && !!currentUser && !!formId
  });

  // Create field mutation
  const createFieldMutation = useMutation({
    mutationFn: (data: typeof fieldData) => apiRequest(`/api/admin/custom-forms/${formId}/fields`, {
      method: "POST",
      body: JSON.stringify({
        fieldLabel: data.fieldLabel,
        fieldType: data.fieldType,
        fieldName: data.fieldName || data.fieldLabel.toLowerCase().replace(/\s+/g, '_'),
        placeholder: data.placeholder || null,
        required: data.required,
        options: data.options ? data.options.split('\n').filter(o => o.trim()) : null,
        order: fields.length
      })
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/custom-forms", formId, "fields"] });
      setIsAddFieldDialogOpen(false);
      resetFieldData();
      toast({ title: "Success", description: "Field added successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Error", 
        description: error.message || "Failed to add field",
        variant: "destructive"
      });
    }
  });

  // Update field mutation
  const updateFieldMutation = useMutation({
    mutationFn: (data: { id: number; updates: Partial<FormField> }) => 
      apiRequest(`/api/admin/form-fields/${data.id}`, {
        method: "PATCH",
        body: JSON.stringify(data.updates)
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/custom-forms", formId, "fields"] });
      toast({ title: "Success", description: "Field updated successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Error", 
        description: error.message || "Failed to update field",
        variant: "destructive"
      });
    }
  });

  // Delete field mutation
  const deleteFieldMutation = useMutation({
    mutationFn: (fieldId: number) => apiRequest(`/api/admin/form-fields/${fieldId}`, {
      method: "DELETE"
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/custom-forms", formId, "fields"] });
      toast({ title: "Success", description: "Field deleted successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Error", 
        description: error.message || "Failed to delete field",
        variant: "destructive"
      });
    }
  });

  const resetFieldData = () => {
    setFieldData({
      fieldLabel: "",
      fieldType: "text",
      fieldName: "",
      placeholder: "",
      required: false,
      options: ""
    });
  };

  const handleAddField = () => {
    if (!fieldData.fieldLabel) {
      toast({ 
        title: "Error", 
        description: "Field label is required",
        variant: "destructive" 
      });
      return;
    }
    createFieldMutation.mutate(fieldData);
  };

  const handleDeleteField = (fieldId: number, label: string) => {
    if (confirm(`Are you sure you want to delete the field "${label}"?`)) {
      deleteFieldMutation.mutate(fieldId);
    }
  };

  useEffect(() => {
    if (fieldData.fieldLabel && !fieldData.fieldName) {
      setFieldData(prev => ({
        ...prev,
        fieldName: prev.fieldLabel.toLowerCase().replace(/\s+/g, '_')
      }));
    }
  }, [fieldData.fieldLabel]);

  if (!authChecked || !currentUser || !formId) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar currentUser={currentUser} />
      
      <div className="flex-1 md:ml-64">
        <AdminHeader currentUser={currentUser} />
        
        <div className="p-6">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => setLocation("/admin/form-management")}
              className="mb-4"
              data-testid="button-back-to-forms"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Forms
            </Button>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {form?.title || "Form Builder"}
                </h1>
                <p className="text-gray-600 mt-2">
                  Add and configure form fields
                </p>
              </div>
              
              <Dialog open={isAddFieldDialogOpen} onOpenChange={setIsAddFieldDialogOpen}>
                <DialogTrigger asChild>
                  <Button data-testid="button-add-field">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Field
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add Form Field</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fieldLabel">Field Label *</Label>
                        <Input
                          id="fieldLabel"
                          data-testid="input-field-label"
                          value={fieldData.fieldLabel}
                          onChange={(e) => setFieldData({ ...fieldData, fieldLabel: e.target.value })}
                          placeholder="Full Name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="fieldType">Field Type *</Label>
                        <Select value={fieldData.fieldType} onValueChange={(value) => setFieldData({ ...fieldData, fieldType: value })}>
                          <SelectTrigger data-testid="select-field-type">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {FIELD_TYPES.map(type => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fieldName">Field Name (internal)</Label>
                        <Input
                          id="fieldName"
                          data-testid="input-field-name"
                          value={fieldData.fieldName}
                          onChange={(e) => setFieldData({ ...fieldData, fieldName: e.target.value })}
                          placeholder="full_name"
                        />
                        <p className="text-xs text-gray-500 mt-1">Auto-generated from label if left empty</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="placeholder">Placeholder (optional)</Label>
                        <Input
                          id="placeholder"
                          data-testid="input-field-placeholder"
                          value={fieldData.placeholder}
                          onChange={(e) => setFieldData({ ...fieldData, placeholder: e.target.value })}
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    {(fieldData.fieldType === 'select' || fieldData.fieldType === 'radio' || fieldData.fieldType === 'checkbox') && (
                      <div>
                        <Label htmlFor="options">Options (one per line)</Label>
                        <Textarea
                          id="options"
                          data-testid="textarea-field-options"
                          value={fieldData.options}
                          onChange={(e) => setFieldData({ ...fieldData, options: e.target.value })}
                          placeholder="Option 1&#10;Option 2&#10;Option 3"
                          rows={5}
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="required">Required Field</Label>
                      <Switch
                        id="required"
                        data-testid="switch-field-required"
                        checked={fieldData.required}
                        onCheckedChange={(checked) => setFieldData({ ...fieldData, required: checked })}
                      />
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setIsAddFieldDialogOpen(false);
                          resetFieldData();
                        }}
                      >
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleAddField}
                        disabled={createFieldMutation.isPending}
                        data-testid="button-submit-field"
                      >
                        {createFieldMutation.isPending ? "Adding..." : "Add Field"}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading fields...</p>
            </div>
          ) : fields.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No fields yet</h3>
                <p className="text-gray-600 mb-4">Add your first field to start building the form</p>
                <Button onClick={() => setIsAddFieldDialogOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Field
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {fields.map((field, index) => (
                <Card key={field.id}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <GripVertical className="w-5 h-5 text-gray-400" />
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{field.fieldLabel}</h3>
                          {field.required && (
                            <span className="text-red-500 text-sm">*</span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          <span>Type: <code className="bg-gray-100 px-1 rounded">{field.fieldType}</code></span>
                          <span>Name: <code className="bg-gray-100 px-1 rounded">{field.fieldName}</code></span>
                          {field.placeholder && (
                            <span>Placeholder: "{field.placeholder}"</span>
                          )}
                        </div>
                        {field.options && field.options.length > 0 && (
                          <div className="mt-2 text-sm">
                            <span className="text-gray-600">Options: </span>
                            <span className="text-gray-700">{field.options.join(', ')}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateFieldMutation.mutate({ 
                            id: field.id, 
                            updates: { required: !field.required } 
                          })}
                          data-testid={`button-toggle-required-${field.id}`}
                        >
                          {field.required ? "Make Optional" : "Make Required"}
                        </Button>
                        
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteField(field.id, field.fieldLabel)}
                          data-testid={`button-delete-field-${field.id}`}
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
    </div>
  );
}
