import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import AdminSidebar from "@/components/admin/sidebar";
import MobileNav from "@/components/admin/mobile-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
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
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Mail, 
  UserPlus, 
  Trash2, 
  Users, 
  Link as LinkIcon,
  Crown,
  FileEdit,
  Upload,
  Settings
} from "lucide-react";
import type { AdminUser, Consultation } from "@shared/schema";
import { isAdmin } from "@/lib/permissions";
import AdminHeader from "@/components/admin/header";
import { getRoleBadges, ROLE_CONFIG } from "@/lib/roleHelpers";

interface LeadAssignment {
  id: number;
  userId: number;
  leadId: number;
  assignedBy: number;
  createdAt: string;
  user: AdminUser;
  lead: Consultation;
}

export default function LeadAssignments() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [authChecked, setAuthChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [selectedLeadIds, setSelectedLeadIds] = useState<string[]>([]);

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const user = localStorage.getItem("adminUser");
    
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

  // Get auth headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem("adminToken");
    return {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  // Fetch all users with authentication
  const { data: users = [] } = useQuery<AdminUser[]>({
    queryKey: ["/api/admin/users"],
    queryFn: async () => {
      const response = await fetch("/api/admin/users", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    enabled: authChecked && !!currentUser,
  });

  // Fetch all leads (consultations) with authentication
  const { data: leads = [] } = useQuery<Consultation[]>({
    queryKey: ["/api/consultations"],
    queryFn: async () => {
      const response = await fetch("/api/consultations", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    enabled: authChecked && !!currentUser,
  });

  // Fetch all lead assignments
  const { data: assignments = [], isLoading } = useQuery<LeadAssignment[]>({
    queryKey: ["/api/admin/all-lead-assignments"],
    queryFn: async () => {
      const allAssignments: LeadAssignment[] = [];
      
      for (const user of users) {
        try {
          const response = await fetch(`/api/admin/users/${user.id}/leads`, {
            headers: getAuthHeaders(),
          });
          if (!response.ok) {
            throw new Error(`${response.status}: ${await response.text()}`);
          }
          const userLeads = await response.json() as Consultation[];
          for (const lead of userLeads) {
            allAssignments.push({
              id: `${user.id}-${lead.id}` as any,
              userId: user.id,
              leadId: lead.id,
              assignedBy: 1,
              createdAt: new Date().toISOString(),
              user,
              lead
            });
          }
        } catch (error) {
          console.error(`Error fetching leads for user ${user.id}:`, error);
        }
      }
      
      return allAssignments;
    },
    enabled: users.length > 0
  });

  // Create assignment mutation (supports multiple leads)
  const createAssignmentMutation = useMutation({
    mutationFn: async ({ userId, leadIds }: { userId: number; leadIds: number[] }) => {
      const results = [];
      for (const leadId of leadIds) {
        const response = await fetch("/api/admin/lead-assignments", {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({ userId, leadId }),
        });
        if (!response.ok) {
          throw new Error(`${response.status}: ${await response.text()}`);
        }
        results.push(await response.json());
      }
      return results;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/all-lead-assignments"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      setIsAssignDialogOpen(false);
      setSelectedUserId("");
      setSelectedLeadIds([]);
      toast({
        title: "Success",
        description: `${data.length} lead(s) assigned to user successfully`,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to assign leads",
        variant: "destructive",
      });
    },
  });

  // Delete assignment mutation
  const deleteAssignmentMutation = useMutation({
    mutationFn: async ({ userId, leadId }: { userId: number; leadId: number }) => {
      const response = await fetch(`/api/admin/lead-assignments/${userId}/${leadId}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/all-lead-assignments"] });
      toast({
        title: "Success",
        description: "Lead assignment removed successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to remove assignment",
        variant: "destructive",
      });
    },
  });

  const handleAssignLeads = () => {
    if (!selectedUserId || selectedLeadIds.length === 0) {
      toast({
        title: "Error",
        description: "Please select a user and at least one lead",
        variant: "destructive",
      });
      return;
    }

    createAssignmentMutation.mutate({
      userId: parseInt(selectedUserId),
      leadIds: selectedLeadIds.map(id => parseInt(id)),
    });
  };

  const handleDeleteAssignment = (userId: number, leadId: number) => {
    if (confirm("Are you sure you want to remove this lead assignment?")) {
      deleteAssignmentMutation.mutate({ userId, leadId });
    }
  };

  const toggleLeadSelection = (leadId: string) => {
    setSelectedLeadIds(prev => 
      prev.includes(leadId) 
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    );
  };

  const selectedLeadsCount = selectedLeadIds.length;
  const availableLeads = leads.filter(lead => !(lead as any).trashedAt);

  if (!authChecked || !currentUser || !isAdmin(currentUser)) {
    return null;
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
                <h1 className="text-3xl font-bold text-white">Leads Assignments</h1>
                <p className="text-blue-100 mt-1">Assign leads submissions to specific users for personalized management</p>
              </div>
              <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-white text-[#1D50C9] hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-new-assignment">
                    <UserPlus className="w-4 h-4 mr-2" />
                    New Assignment
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle>Assign Leads Submissions to User</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div>
                      <Label>Select User</Label>
                      <Select value={selectedUserId} onValueChange={setSelectedUserId}>
                        <SelectTrigger data-testid="select-user">
                          <SelectValue placeholder="Choose a user" />
                        </SelectTrigger>
                        <SelectContent>
                          {users.filter(u => !u.trashedAt && u.isActive).map(user => {
                            // Get first role for icon display
                            const userRoles = user.roles || (user as any).role ? [(user as any).role] : [];
                            const firstRole = userRoles[0] || 'editor';
                            const roleConfig = ROLE_CONFIG[firstRole as keyof typeof ROLE_CONFIG];
                            const RoleIcon = roleConfig?.icon || Settings;
                            
                            return (
                              <SelectItem key={user.id} value={user.id.toString()}>
                                <div className="flex items-center gap-2">
                                  <RoleIcon className="w-4 h-4" />
                                  <span>{user.username}</span>
                                  {getRoleBadges(user.roles || (user as any).role)}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Select Leads ({selectedLeadsCount} selected)</Label>
                      <ScrollArea className="h-64 border rounded-md p-4">
                        <div className="space-y-2">
                          {availableLeads.map(lead => (
                            <div 
                              key={lead.id} 
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
                            >
                              <Checkbox
                                id={`lead-${lead.id}`}
                                checked={selectedLeadIds.includes(lead.id.toString())}
                                onCheckedChange={() => toggleLeadSelection(lead.id.toString())}
                                data-testid={`checkbox-lead-${lead.id}`}
                              />
                              <label
                                htmlFor={`lead-${lead.id}`}
                                className="flex-1 cursor-pointer"
                              >
                                <div>
                                  <p className="font-medium">{lead.name}</p>
                                  <p className="text-sm text-gray-600">{lead.email} - {lead.preferredCountry}</p>
                                  {lead.source && (
                                    <Badge variant="outline" className="mt-1 text-xs">
                                      {lead.source}
                                    </Badge>
                                  )}
                                </div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsAssignDialogOpen(false);
                          setSelectedUserId("");
                          setSelectedLeadIds([]);
                        }}
                        data-testid="button-cancel-assignment"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleAssignLeads}
                        disabled={createAssignmentMutation.isPending}
                        data-testid="button-confirm-assignment"
                      >
                        Assign {selectedLeadsCount > 0 && `(${selectedLeadsCount})`}
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
          {/* Stats Card */}
          <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Total Assignments</CardTitle>
              <div className="p-2 bg-purple-500 rounded-lg">
                <LinkIcon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{assignments.length}</div>
              <p className="text-xs text-gray-600 mt-1">Active lead assignments</p>
            </CardContent>
          </Card>

          {/* Table */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-gray-900">All Leads Assignments</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/50">
                      <TableHead className="font-semibold text-gray-700">User</TableHead>
                      <TableHead className="font-semibold text-gray-700">Role</TableHead>
                      <TableHead className="font-semibold text-gray-700">Lead Name</TableHead>
                      <TableHead className="font-semibold text-gray-700">Email</TableHead>
                      <TableHead className="font-semibold text-gray-700">Country</TableHead>
                      <TableHead className="font-semibold text-gray-700">Source</TableHead>
                      <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {isLoading ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-16">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
                          <p className="text-gray-600">Loading assignments...</p>
                        </TableCell>
                      </TableRow>
                    ) : assignments.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-16">
                          <div className="max-w-md mx-auto">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                              <LinkIcon className="h-10 w-10 text-[#1D50C9]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No lead assignments found</h3>
                            <p className="text-gray-500 mb-6">Create a new assignment to get started</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      assignments.map((assignment) => {
                        return (
                          <TableRow 
                            key={`${assignment.userId}-${assignment.leadId}`}
                            className="hover:bg-blue-50/50 transition-colors duration-200"
                          >
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className="p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                                  <Users className="w-4 h-4 text-[#1D50C9]" />
                                </div>
                                <span className="font-medium text-gray-900">{assignment.user.username}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              {getRoleBadges(assignment.user.roles || (assignment.user as any).role)}
                            </TableCell>
                            <TableCell className="font-medium text-gray-900">{assignment.lead.name}</TableCell>
                            <TableCell className="text-gray-600">{assignment.lead.email}</TableCell>
                            <TableCell className="text-gray-600">{assignment.lead.preferredCountry}</TableCell>
                            <TableCell>
                              {assignment.lead.source && (
                                <Badge className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200">
                                  {assignment.lead.source}
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteAssignment(assignment.userId, assignment.leadId)}
                                className="rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                                data-testid={`button-delete-assignment-${assignment.userId}-${assignment.leadId}`}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
      
      <MobileNav currentUser={currentUser} />
    </div>
  );
}
