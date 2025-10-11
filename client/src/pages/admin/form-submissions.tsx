import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Eye, Trash2, Download, Filter } from "lucide-react";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import type { AdminUser } from "@shared/schema";

interface CustomFormSubmission {
  id: number;
  formId: number;
  submissionData: Record<string, any>;
  submittedAt: string;
  source: string | null;
  status: string;
  notes: string | null;
  assignedTo: number | null;
}

interface CustomForm {
  id: number;
  title: string;
  slug: string;
}

export default function FormSubmissions() {
  const [, params] = useRoute("/admin/form-submissions/:id");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const formId = params?.id ? parseInt(params.id) : null;
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  const [selectedSubmission, setSelectedSubmission] = useState<CustomFormSubmission | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

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

  // Fetch submissions
  const { data: submissions = [], isLoading } = useQuery<CustomFormSubmission[]>({
    queryKey: ["/api/admin/custom-form-submissions", { formId }],
    enabled: authChecked && !!currentUser && !!formId
  });

  // Update submission mutation
  const updateSubmissionMutation = useMutation({
    mutationFn: (data: { id: number; updates: Partial<CustomFormSubmission> }) => 
      apiRequest("PATCH", `/api/admin/custom-form-submissions/${data.id}`, data.updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/custom-form-submissions"] });
      toast({ title: "Success", description: "Submission updated successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Error", 
        description: error.message || "Failed to update submission",
        variant: "destructive"
      });
    }
  });

  // Delete submission mutation
  const deleteSubmissionMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/admin/custom-form-submissions/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/custom-form-submissions"] });
      setSelectedSubmission(null);
      toast({ title: "Success", description: "Submission deleted successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Error", 
        description: error.message || "Failed to delete submission",
        variant: "destructive"
      });
    }
  });

  const handleDeleteSubmission = (id: number) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      deleteSubmissionMutation.mutate(id);
      setSelectedIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  const handleToggleSelection = (id: number) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    if (selectedIds.size === filteredSubmissions.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredSubmissions.map(s => s.id)));
    }
  };

  const handleBulkDelete = () => {
    if (selectedIds.size === 0) return;
    
    const count = selectedIds.size;
    if (confirm(`Are you sure you want to delete ${count} submission${count > 1 ? 's' : ''}?`)) {
      selectedIds.forEach(id => {
        deleteSubmissionMutation.mutate(id);
      });
      setSelectedIds(new Set());
    }
  };

  const exportToCSV = () => {
    if (filteredSubmissions.length === 0) return;

    // Get all unique keys from submission data
    const allKeys = new Set<string>();
    filteredSubmissions.forEach(sub => {
      Object.keys(sub.submissionData).forEach(key => allKeys.add(key));
    });

    const headers = ['ID', 'Submitted At', 'Source', 'Status', ...Array.from(allKeys), 'Notes'];
    const rows = filteredSubmissions.map(sub => {
      const row = [
        sub.id,
        format(new Date(sub.submittedAt), 'yyyy-MM-dd HH:mm:ss'),
        sub.source || '',
        sub.status,
      ];
      
      allKeys.forEach(key => {
        row.push(sub.submissionData[key] || '');
      });
      
      row.push(sub.notes || '');
      return row;
    });

    const csv = [headers, ...rows].map(row => 
      row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    ).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${form?.slug || 'form'}-submissions-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredSubmissions = submissions.filter(sub => {
    if (statusFilter !== "all" && sub.status !== statusFilter) return false;
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const dataString = JSON.stringify(sub.submissionData).toLowerCase();
      return dataString.includes(searchLower);
    }
    return true;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      pending: "secondary",
      contacted: "default",
      converted: "default",
      lost: "destructive"
    };
    return <Badge variant={variants[status] || "secondary"}>{status}</Badge>;
  };

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
                  {form?.title || "Form"} Submissions
                </h1>
                <p className="text-gray-600 mt-2">
                  {filteredSubmissions.length} total submission{filteredSubmissions.length !== 1 ? 's' : ''}
                  {selectedIds.size > 0 && (
                    <span className="ml-2 text-blue-600 font-medium">
                      ({selectedIds.size} selected)
                    </span>
                  )}
                </p>
              </div>
              
              <div className="flex gap-2">
                {selectedIds.size > 0 && (
                  <Button 
                    variant="destructive"
                    onClick={handleBulkDelete}
                    data-testid="button-bulk-delete"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Selected ({selectedIds.size})
                  </Button>
                )}
                
                <Button 
                  onClick={exportToCSV} 
                  disabled={filteredSubmissions.length === 0}
                  data-testid="button-export-csv"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-4">
                {filteredSubmissions.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedIds.size === filteredSubmissions.length && filteredSubmissions.length > 0}
                      onCheckedChange={handleSelectAll}
                      data-testid="checkbox-select-all"
                    />
                    <span className="text-sm text-gray-600">Select All</span>
                  </div>
                )}
                
                <div className="flex-1">
                  <Input
                    placeholder="Search submissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    data-testid="input-search"
                    className="max-w-md"
                  />
                </div>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48" data-testid="select-status-filter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="lost">Lost</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
          </Card>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading submissions...</p>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No submissions yet</h3>
                <p className="text-gray-600">Submissions will appear here once users fill out this form</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => (
                <Card key={submission.id}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={selectedIds.has(submission.id)}
                        onCheckedChange={() => handleToggleSelection(submission.id)}
                        className="mt-1"
                        data-testid={`checkbox-submission-${submission.id}`}
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-sm">
                            Submission #{submission.id}
                          </CardTitle>
                          {getStatusBadge(submission.status)}
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-2">
                          <span>Submitted: {format(new Date(submission.submittedAt), 'MMM dd, yyyy HH:mm')}</span>
                          {submission.source && (
                            <span className="ml-4">Source: {submission.source}</span>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          {Object.entries(submission.submissionData).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="font-medium text-gray-700">{key}: </span>
                              <span className="text-gray-600">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedSubmission(submission)}
                          data-testid={`button-view-${submission.id}`}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteSubmission(submission.id)}
                          data-testid={`button-delete-${submission.id}`}
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

      {/* View/Edit Submission Dialog */}
      <Dialog open={!!selectedSubmission} onOpenChange={(open) => !open && setSelectedSubmission(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Submission #{selectedSubmission?.id}</DialogTitle>
          </DialogHeader>
          
          {selectedSubmission && (
            <div className="space-y-4">
              <div>
                <Label>Status</Label>
                <Select 
                  value={selectedSubmission.status} 
                  onValueChange={(value) => {
                    updateSubmissionMutation.mutate({
                      id: selectedSubmission.id,
                      updates: { status: value }
                    });
                    setSelectedSubmission({ ...selectedSubmission, status: value });
                  }}
                >
                  <SelectTrigger data-testid="select-submission-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="lost">Lost</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Submitted Data</Label>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-1">
                  {JSON.stringify(selectedSubmission.submissionData, null, 2)}
                </pre>
              </div>
              
              <div>
                <Label>Notes</Label>
                <Textarea
                  value={selectedSubmission.notes || ""}
                  onChange={(e) => setSelectedSubmission({ ...selectedSubmission, notes: e.target.value })}
                  placeholder="Add notes about this submission..."
                  rows={4}
                  data-testid="textarea-submission-notes"
                />
                <Button 
                  className="mt-2"
                  onClick={() => {
                    updateSubmissionMutation.mutate({
                      id: selectedSubmission.id,
                      updates: { notes: selectedSubmission.notes }
                    });
                  }}
                  data-testid="button-save-notes"
                >
                  Save Notes
                </Button>
              </div>
              
              <div className="text-sm text-gray-600">
                <p>Submitted: {format(new Date(selectedSubmission.submittedAt), 'PPpp')}</p>
                {selectedSubmission.source && <p>Source: {selectedSubmission.source}</p>}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
