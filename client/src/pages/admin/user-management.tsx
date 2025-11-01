import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Users, 
  UserPlus, 
  Edit, 
  Trash2, 
  Mail, 
  Shield, 
  Crown,
  FileEdit,
  Upload,
  Settings,
  Eye,
  EyeOff,
  Calendar,
  MapPin,
  Sparkles
} from "lucide-react";
import type { AdminUser } from "@shared/schema";
import { canManageUsers, isAdmin } from "@/lib/permissions";

// Role configuration with permissions and styling
const ROLE_CONFIG = {
  admin: {
    label: "Admin",
    color: "bg-gradient-to-r from-red-500 to-red-600",
    badgeColor: "bg-red-500",
    icon: Crown,
    description: "Full system access and user management",
    defaultPermissions: {
      canCreate: true,
      canEdit: true,
      canPublish: true,
      canDelete: true,
      canManageUsers: true,
      canManageCategories: true,
      canViewAnalytics: true,
      canManageMedia: true,
      canAccessEvents: true,
      canAccessQRScanner: true,
      canDownloadRegistrations: true,
      canDeleteRegistrations: true,
      canManageLeads: true,
    }
  },
  editor: {
    label: "Editor",
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    badgeColor: "bg-blue-500",
    icon: FileEdit,
    description: "Create and edit assigned posts, categories, media",
    defaultPermissions: {
      canCreate: true,
      canEdit: true,
      canPublish: false,
      canDelete: false,
      canManageUsers: false,
      canManageCategories: true,
      canViewAnalytics: false,
      canManageMedia: true,
      canAccessEvents: false,
      canAccessQRScanner: false,
      canDownloadRegistrations: false,
      canDeleteRegistrations: false,
      canManageLeads: false,
    }
  },
  publisher: {
    label: "Publisher",
    color: "bg-gradient-to-r from-green-500 to-green-600",
    badgeColor: "bg-green-500",
    icon: Upload,
    description: "Create, edit and publish content",
    defaultPermissions: {
      canCreate: true,
      canEdit: true,
      canPublish: true,
      canDelete: false,
      canManageUsers: false,
      canManageCategories: false,
      canViewAnalytics: true,
      canManageMedia: true,
      canAccessEvents: false,
      canAccessQRScanner: false,
      canDownloadRegistrations: false,
      canDeleteRegistrations: false,
      canManageLeads: false,
    }
  },
  events_manager: {
    label: "Events Manager",
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
    badgeColor: "bg-purple-500",
    icon: Settings,
    description: "Manage assigned events, scan QR codes, download registrations",
    defaultPermissions: {
      canCreate: false,
      canEdit: false,
      canPublish: false,
      canDelete: false,
      canManageUsers: false,
      canManageCategories: false,
      canViewAnalytics: false,
      canManageMedia: false,
      canAccessEvents: true,
      canAccessQRScanner: true,
      canDownloadRegistrations: true,
      canDeleteRegistrations: false,
      canManageLeads: false,
    }
  },
  leads_manager: {
    label: "Leads Manager",
    color: "bg-gradient-to-r from-orange-500 to-orange-600",
    badgeColor: "bg-orange-500",
    icon: Users,
    description: "Manage leads, assign to users, update lead status",
    defaultPermissions: {
      canCreate: false,
      canEdit: false,
      canPublish: false,
      canDelete: false,
      canManageUsers: false,
      canManageCategories: false,
      canViewAnalytics: false,
      canManageMedia: false,
      canAccessEvents: false,
      canAccessQRScanner: false,
      canDownloadRegistrations: false,
      canDeleteRegistrations: false,
      canManageLeads: true,
    }
  },
  custom: {
    label: "Custom",
    color: "bg-gradient-to-r from-gray-500 to-gray-600",
    badgeColor: "bg-gray-500",
    icon: Settings,
    description: "Custom permission set",
    defaultPermissions: {
      canCreate: false,
      canEdit: false,
      canPublish: false,
      canDelete: false,
      canManageUsers: false,
      canManageCategories: false,
      canViewAnalytics: false,
      canManageMedia: false,
      canAccessEvents: false,
      canAccessQRScanner: false,
      canDownloadRegistrations: false,
      canDeleteRegistrations: false,
      canManageLeads: false,
    }
  }
} as const;

interface CreateUserFormData {
  username: string;
  email: string;
  password: string;
  roles: string[];
  permissions?: Record<string, boolean>;
}

export default function UserManagement() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [authChecked, setAuthChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [createForm, setCreateForm] = useState<CreateUserFormData>({
    username: "",
    email: "",
    password: "",
    roles: ["editor"],
    permissions: {}
  });
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [editUsername, setEditUsername] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editRoles, setEditRoles] = useState<string[]>([]);
  const [editPermissions, setEditPermissions] = useState<Record<string, boolean>>({});
  const [showEventAssignmentDialog, setShowEventAssignmentDialog] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<number[]>([]);
  const [pendingUserUpdate, setPendingUserUpdate] = useState<{id: number, updates: Partial<AdminUser>} | null>(null);
  const [pendingUserCreate, setPendingUserCreate] = useState<CreateUserFormData | null>(null);
  const [eventAssignmentUserId, setEventAssignmentUserId] = useState<number | null>(null);
  const [existingEventAssignments, setExistingEventAssignments] = useState<number[]>([]);

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

  // Fetch all admin users with authentication
  const { data: users = [], isLoading, error } = useQuery<AdminUser[]>({
    queryKey: ["/api/admin/users"],
    queryFn: async () => {
      const response = await fetch("/api/admin/users", {
        headers: getAuthHeaders(),
      });
      if (response.status === 401) {
        // Token expired or invalid - redirect to login
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        setLocation("/admin/login");
        throw new Error("Session expired. Please login again.");
      }
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    enabled: authChecked && !!currentUser,
  });

  // Fetch all events for assignment
  const { data: events = [] } = useQuery<any[]>({
    queryKey: ["/api/events"],
    enabled: showEventAssignmentDialog,
  });

  // Fetch existing event assignments for user
  const { data: userAssignedEvents = [], refetch: refetchUserEvents } = useQuery<any[]>({
    queryKey: ["/api/admin/users", eventAssignmentUserId, "/events"],
    queryFn: async () => {
      if (!eventAssignmentUserId) return [];
      const response = await fetch(`/api/admin/users/${eventAssignmentUserId}/events`, {
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to fetch user events');
      return response.json();
    },
    enabled: showEventAssignmentDialog && eventAssignmentUserId !== null,
  });

  // Update selected events when user assigned events are loaded or dialog opens
  useEffect(() => {
    if (showEventAssignmentDialog) {
      if (eventAssignmentUserId !== null) {
        // Editing existing user - load their assignments (or empty array if none)
        const assignedIds = userAssignedEvents.map((e: any) => e.id);
        setSelectedEvents(assignedIds);
        setExistingEventAssignments(assignedIds);
      } else {
        // Creating new user - start with empty selection
        setSelectedEvents([]);
        setExistingEventAssignments([]);
      }
    }
  }, [userAssignedEvents, showEventAssignmentDialog, eventAssignmentUserId]);

  // Create user mutation
  const createUserMutation = useMutation({
    mutationFn: async (userData: CreateUserFormData) => {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      
      // If we created an events manager with pending event assignments
      if (pendingUserCreate && selectedEvents.length > 0 && data.id) {
        // Assign events to the newly created user
        assignEventsMutation.mutate({
          userId: data.id,
          eventIds: selectedEvents
        });
      } else {
        // Normal user creation
        setIsCreateDialogOpen(false);
        setCreateForm({ username: "", email: "", password: "", roles: ["editor"], permissions: {} });
        toast({
          title: "Success",
          description: "User created successfully",
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create user",
        variant: "destructive",
      });
    },
  });

  // Update user mutation
  const updateUserMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: number; updates: Partial<AdminUser> }) => {
      const response = await fetch(`/api/admin/users/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(updates),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      setIsEditDialogOpen(false);
      setEditingUser(null);
      
      // If user updated their own info, update localStorage
      if (data.updatedSelf) {
        const { updatedSelf, ...userData } = data;
        localStorage.setItem("adminUser", JSON.stringify(userData));
        setCurrentUser(userData);
      }
      
      toast({
        title: "Success",
        description: "User updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update user",
        variant: "destructive",
      });
    },
  });

  // Delete user mutation
  const deleteUserMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/users/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete user",
        variant: "destructive",
      });
    },
  });

  // Bulk delete users mutation
  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/users/bulk-delete', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      setSelectedIds([]);
      toast({
        title: "Success",
        description: data.message || "Users deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete users",
        variant: "destructive",
      });
    },
  });

  // Assign events to user mutation
  const assignEventsMutation = useMutation({
    mutationFn: async ({ userId, eventIds }: { userId: number; eventIds: number[] }) => {
      const promises = eventIds.map(eventId =>
        fetch('/api/admin/event-assignments', {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({ userId, eventId }),
        }).then(res => {
          if (!res.ok) throw new Error(`Failed to assign event ${eventId}`);
          return res.json();
        })
      );
      return Promise.all(promises);
    },
    onSuccess: async () => {
      // Now update the user role if we have pending update
      if (pendingUserUpdate) {
        updateUserMutation.mutate(pendingUserUpdate);
        setPendingUserUpdate(null);
        
        toast({
          title: "Success",
          description: "User updated and events assigned successfully",
        });
      } else if (pendingUserCreate) {
        // For newly created user with event assignments
        setPendingUserCreate(null);
        setCreateForm({ username: "", email: "", password: "", roles: ["editor"], permissions: {} });
        
        toast({
          title: "Success",
          description: "User created and events assigned successfully",
        });
      } else {
        // Just event assignments (no pending user operation)
        toast({
          title: "Success",
          description: "Events assigned successfully",
        });
      }
      
      setShowEventAssignmentDialog(false);
      setSelectedEvents([]);
      setEventAssignmentUserId(null);
      setExistingEventAssignments([]);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to assign events",
        variant: "destructive",
      });
    },
  });

  // Remove event assignment mutation
  const removeEventAssignmentMutation = useMutation({
    mutationFn: async ({ userId, eventId }: { userId: number; eventId: number }) => {
      const response = await fetch(`/api/admin/event-assignments/${userId}/${eventId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to remove event assignment');
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Event assignment removed",
      });
      refetchUserEvents();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to remove event assignment",
        variant: "destructive",
      });
    },
  });

  // Selection handlers
  const toggleSelectAll = () => {
    const activeUsers = users.filter(u => u.isActive);
    if (selectedIds.length === activeUsers.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(activeUsers.map(u => u.id));
    }
  };

  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) return;
    if (confirm(`Are you sure you want to delete ${selectedIds.length} user(s)? This will move them to trash.`)) {
      bulkDeleteMutation.mutate(selectedIds);
    }
  };

  const handleCreateUser = () => {
    if (!createForm.username || !createForm.email || !createForm.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!createForm.roles || createForm.roles.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one role",
        variant: "destructive",
      });
      return;
    }

    // Merge permissions from all selected roles
    const mergedPermissions: Record<string, boolean> = {};
    createForm.roles.forEach(roleKey => {
      const roleConfig = ROLE_CONFIG[roleKey as keyof typeof ROLE_CONFIG];
      if (roleConfig && roleConfig.defaultPermissions) {
        Object.entries(roleConfig.defaultPermissions).forEach(([key, value]) => {
          // If any role grants a permission, grant it (OR logic)
          if (value) {
            mergedPermissions[key] = true;
          }
        });
      }
    });

    const userData = {
      ...createForm,
      permissions: mergedPermissions
    };
    
    // Check if events_manager role is selected
    if (createForm.roles.includes('events_manager')) {
      // Show event assignment dialog first
      setPendingUserCreate(userData);
      setIsCreateDialogOpen(false);
      setEventAssignmentUserId(null); // null means creating new user
      setShowEventAssignmentDialog(true);
    } else {
      // Create user directly
      createUserMutation.mutate(userData);
    }
  };

  const handleEditUser = (user: AdminUser) => {
    setEditingUser(user);
    setEditUsername(user.username);
    setEditPassword("");
    setShowEditPassword(false);
    // Initialize edit roles with legacy fallback
    const userRoles = user.roles?.length ? user.roles : (('role' in user && user.role) ? [user.role as string] : ['editor']);
    setEditRoles(userRoles);
    // Initialize edit permissions with user's current permissions
    setEditPermissions(user.permissions || {});
    setIsEditDialogOpen(true);
  };

  const handleUpdateUser = (updates: Partial<AdminUser>) => {
    if (!editingUser) return;
    updateUserMutation.mutate({ id: editingUser.id, updates });
  };

  const handleDeleteUser = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      deleteUserMutation.mutate(id);
    }
  };

  const getRoleBadges = (roles: string[] | string | undefined) => {
    // Handle both old single role and new roles array for backward compatibility
    const roleArray = Array.isArray(roles) ? roles : (roles ? [roles] : []);
    
    if (roleArray.length === 0) return <Badge variant="outline">No Roles</Badge>;
    
    return (
      <div className="flex flex-wrap gap-1">
        {roleArray.map((role) => {
          const config = ROLE_CONFIG[role as keyof typeof ROLE_CONFIG];
          if (!config) return null;
          
          const Icon = config.icon;
          return (
            <Badge key={role} className={`${config.badgeColor} text-white text-xs`}>
              <Icon className="w-3 h-3 mr-1" />
              {config.label}
            </Badge>
          );
        })}
      </div>
    );
  };

  if (error) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-red-600">Error loading users: {error.message}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Sidebar */}
      <AdminSidebar 
        currentUser={currentUser} 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      {/* Main Content */}
      <div className="lg:ml-64">
        <AdminHeader 
          currentUser={currentUser}
          title="User Management"
          subtitle="Create and manage system users with role-based access control"
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Mobile Navigation */}
        <MobileNav currentUser={currentUser} />
        
        <div className="p-6 space-y-6 max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#2563eb] rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#2563eb] bg-clip-text text-transparent">
                  User Management
                </h1>
                <p className="text-gray-600 mt-1">Manage roles, permissions, and user accounts</p>
              </div>
            </div>
        
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-[#1D50C9] to-[#2563eb] hover:from-[#1640a8] hover:to-[#1d4ed8] text-white px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl font-semibold">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Add User
                </Button>
              </DialogTrigger>
          <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New User</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={createForm.username}
                  onChange={(e) => setCreateForm({ ...createForm, username: e.target.value })}
                  placeholder="Enter username"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={createForm.email}
                  onChange={(e) => setCreateForm({ ...createForm, email: e.target.value })}
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showCreatePassword ? "text" : "password"}
                    value={createForm.password}
                    onChange={(e) => setCreateForm({ ...createForm, password: e.target.value })}
                    placeholder="Enter password"
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowCreatePassword(!showCreatePassword)}
                  >
                    {showCreatePassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              <div>
                <Label className="text-base font-semibold mb-3 block">Roles (Select one or more)</Label>
                <div className="space-y-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border-2 border-blue-200">
                  {Object.entries(ROLE_CONFIG).map(([key, config]) => {
                    const isSelected = createForm.roles.includes(key);
                    return (
                      <div 
                        key={key} 
                        className={`flex items-start space-x-3 p-3 rounded-lg transition-all cursor-pointer hover:bg-white/60 ${isSelected ? 'bg-white border-2 border-[#1D50C9]' : 'border border-transparent'}`}
                        onClick={() => {
                          const newRoles = isSelected 
                            ? createForm.roles.filter(r => r !== key)
                            : [...createForm.roles, key];
                          setCreateForm({ ...createForm, roles: newRoles });
                        }}
                      >
                        <Checkbox
                          id={`role-${key}`}
                          checked={isSelected}
                          onCheckedChange={() => {
                            const newRoles = isSelected 
                              ? createForm.roles.filter(r => r !== key)
                              : [...createForm.roles, key];
                            setCreateForm({ ...createForm, roles: newRoles });
                          }}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <config.icon className="w-5 h-5 text-[#1D50C9]" />
                            <Label htmlFor={`role-${key}`} className="font-semibold text-base cursor-pointer">
                              {config.label}
                            </Label>
                          </div>
                          <p className="text-sm text-gray-600">{config.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Permissions Preview - Only show when Custom role is selected */}
              {createForm.roles.includes('custom') && (
                <div className="space-y-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-purple-600" />
                    <Label className="text-sm font-semibold text-purple-700">Custom Permissions</Label>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">Select the specific permissions for this user</p>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(ROLE_CONFIG.custom.defaultPermissions)
                      .filter(([permission]) => permission !== 'canManageMedia') // Hide Media - admin only
                      .map(([permission, defaultValue]) => {
                      const permissionLabels: Record<string, string> = {
                        canCreate: "Create Posts",
                        canEdit: "Edit Assigned Posts", 
                        canPublish: "Publish Posts",
                        canDelete: "Delete Posts",
                        canManageUsers: "Manage User Assignments",
                        canManageCategories: "Manage Post Categories", 
                        canViewAnalytics: "View Dashboard Analytics",
                        canAccessEvents: "Manage Assigned Events",
                        canAccessQRScanner: "Create & View QR Codes",
                        canManageLeads: "Manage Assigned Leads",
                        canDownloadRegistrations: "Download Event Data",
                        canDeleteRegistrations: "Delete Event Registrations"
                      };
                      
                      return (
                        <div key={permission} className="flex items-center space-x-2">
                          <Checkbox
                            id={permission}
                            checked={createForm.permissions?.[permission] ?? defaultValue}
                            onCheckedChange={(checked) => {
                              setCreateForm({
                                ...createForm,
                                permissions: {
                                  ...createForm.permissions,
                                  [permission]: checked === true
                                }
                              });
                            }}
                          />
                          <Label 
                            htmlFor={permission}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {permissionLabels[permission] || permission}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleCreateUser}
                  disabled={createUserMutation.isPending}
                >
                  {createUserMutation.isPending ? "Creating..." : "Create User"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Users Table */}
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-[#1D50C9]/5 to-[#2563eb]/5 border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-xl">
              <Users className="w-6 h-6 mr-3 text-[#1D50C9]" />
              <span>System Users</span>
              <Badge className="ml-3 bg-[#1D50C9] text-white">{users.length}</Badge>
              {selectedIds.length > 0 && (
                <span className="text-sm text-gray-600 ml-3 font-normal">
                  {selectedIds.length} selected
                </span>
              )}
            </CardTitle>
            {selectedIds.length > 0 && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleBulkDelete}
                disabled={bulkDeleteMutation.isPending}
                data-testid="button-bulk-delete-users"
                className="bg-red-500 hover:bg-red-600 font-semibold"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete ({selectedIds.length})
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedIds.length === users.filter(u => u.isActive).length && users.filter(u => u.isActive).length > 0}
                      onCheckedChange={toggleSelectAll}
                      data-testid="checkbox-select-all-users"
                    />
                  </TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user: AdminUser) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedIds.includes(user.id)}
                        onCheckedChange={() => toggleSelect(user.id)}
                        disabled={!user.isActive}
                        data-testid={`checkbox-user-${user.id}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">
                            {user.username.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{user.username}</div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Mail className="w-3 h-3 mr-1" />
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getRoleBadges(user.roles || (user as any).role)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.isActive ? "default" : "secondary"}>
                        {user.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {user.lastLogin 
                        ? new Date(user.lastLogin).toLocaleDateString()
                        : "Never"
                      }
                    </TableCell>
                    <TableCell>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditUser(user)}
                          data-testid={`button-edit-user-${user.id}`}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        {canManageUsers(currentUser) && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:text-red-700"
                            data-testid={`button-delete-user-${user.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          
          {!isLoading && users.length === 0 && (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No users found</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit User Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            {isAdmin(currentUser) && editingUser && (
              <p className="text-sm text-gray-600 mt-2">
                As an admin, you can update the username and reset the password for {editingUser.username}
              </p>
            )}
          </DialogHeader>
          {editingUser && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-username">Username</Label>
                <Input
                  id="edit-username"
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  placeholder="Enter username"
                  disabled={!isAdmin(currentUser) && editingUser.id !== currentUser?.id}
                />
                {!isAdmin(currentUser) && editingUser.id !== currentUser?.id && (
                  <p className="text-xs text-amber-600 mt-1">Only admins can change other users' usernames</p>
                )}
              </div>
              <div>
                <Label>Email</Label>
                <Input value={editingUser.email} disabled className="bg-gray-100" />
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
              </div>
              <div>
                <Label htmlFor="edit-password">
                  {isAdmin(currentUser) ? "Reset Password" : "New Password"}
                </Label>
                <div className="relative">
                  <Input
                    id="edit-password"
                    type={showEditPassword ? "text" : "password"}
                    value={editPassword}
                    onChange={(e) => setEditPassword(e.target.value)}
                    placeholder={isAdmin(currentUser) ? "Enter new password to reset" : "Leave blank to keep current password"}
                    className="pr-10"
                    disabled={!isAdmin(currentUser) && editingUser.id !== currentUser?.id}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowEditPassword(!showEditPassword)}
                  >
                    {showEditPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                {isAdmin(currentUser) ? (
                  <p className="text-xs text-blue-600 mt-1 font-medium">
                    Admin privilege: Enter a new password to reset this user's password
                  </p>
                ) : (
                  <p className="text-xs text-gray-500 mt-1">Only enter a password if you want to change it</p>
                )}
              </div>
              <div>
                <Label className="text-base font-semibold mb-3 block">Roles (Select one or more)</Label>
                <div className="space-y-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border-2 border-blue-200">
                  {Object.entries(ROLE_CONFIG).map(([key, config]) => {
                    const isSelected = editRoles.includes(key);
                    return (
                      <div 
                        key={key} 
                        className={`flex items-start space-x-3 p-3 rounded-lg transition-all cursor-pointer hover:bg-white/60 ${isSelected ? 'bg-white border-2 border-[#1D50C9]' : 'border border-transparent'}`}
                        onClick={() => {
                          const newRoles = isSelected 
                            ? editRoles.filter(r => r !== key)
                            : [...editRoles, key];
                          setEditRoles(newRoles);
                        }}
                      >
                        <Checkbox
                          id={`edit-role-${key}`}
                          checked={isSelected}
                          onCheckedChange={() => {
                            const newRoles = isSelected 
                              ? editRoles.filter(r => r !== key)
                              : [...editRoles, key];
                            setEditRoles(newRoles);
                          }}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <config.icon className="w-5 h-5 text-[#1D50C9]" />
                            <Label htmlFor={`edit-role-${key}`} className="font-semibold text-base cursor-pointer">
                              {config.label}
                            </Label>
                          </div>
                          <p className="text-sm text-gray-600">{config.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Custom Permissions Section for Edit Dialog - Only show when Custom role is selected */}
              {editRoles.includes('custom') && (
                <div className="space-y-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-purple-600" />
                    <Label className="text-sm font-semibold text-purple-700">Custom Permissions</Label>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">Select the specific permissions for this user</p>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(ROLE_CONFIG.custom.defaultPermissions)
                      .filter(([permission]) => permission !== 'canManageMedia') // Hide Media - admin only
                      .map(([permission, defaultValue]) => {
                      const permissionLabels: Record<string, string> = {
                        canCreate: "Create Posts",
                        canEdit: "Edit Assigned Posts", 
                        canPublish: "Publish Posts",
                        canDelete: "Delete Posts",
                        canManageUsers: "Manage User Assignments",
                        canManageCategories: "Manage Post Categories", 
                        canViewAnalytics: "View Dashboard Analytics",
                        canAccessEvents: "Manage Assigned Events",
                        canAccessQRScanner: "Create & View QR Codes",
                        canManageLeads: "Manage Assigned Leads",
                        canDownloadRegistrations: "Download Event Data",
                        canDeleteRegistrations: "Delete Event Registrations"
                      };
                      
                      return (
                        <div key={permission} className="flex items-center space-x-2">
                          <Checkbox
                            id={`edit-${permission}`}
                            checked={editPermissions?.[permission] ?? defaultValue}
                            onCheckedChange={(checked) => {
                              setEditPermissions({
                                ...editPermissions,
                                [permission]: checked === true
                              });
                            }}
                          />
                          <Label 
                            htmlFor={`edit-${permission}`}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {permissionLabels[permission] || permission}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={() => {
                    // Validate that at least one role is selected
                    if (editRoles.length === 0) {
                      toast({
                        title: "Validation Error",
                        description: "Please select at least one role",
                        variant: "destructive",
                      });
                      return;
                    }
                    
                    const updates: any = { 
                      roles: editRoles,
                      permissions: editPermissions
                    };
                    
                    // Add username if changed
                    if (editUsername && editUsername !== editingUser.username) {
                      updates.username = editUsername;
                    }
                    
                    // Add password if provided
                    if (editPassword) {
                      updates.password = editPassword;
                    }
                    
                    // Check if events_manager role is selected (new or existing)
                    const wasEventsManager = editingUser.roles?.includes('events_manager') || false;
                    const isEventsManager = editRoles.includes('events_manager');
                    
                    if (isEventsManager) {
                      // Show event assignment dialog (for both new and existing events managers)
                      setPendingUserUpdate({ id: editingUser.id, updates });
                      setEventAssignmentUserId(editingUser.id);
                      setIsEditDialogOpen(false);
                      setShowEventAssignmentDialog(true);
                    } else {
                      // Update user directly
                      handleUpdateUser(updates);
                    }
                  }}
                  disabled={updateUserMutation.isPending}
                >
                  {updateUserMutation.isPending ? "Updating..." : "Update User"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Event Assignment Dialog */}
      <Dialog open={showEventAssignmentDialog} onOpenChange={setShowEventAssignmentDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Assign Events to Events Manager
                </DialogTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Select the events this user will manage. They can view registrations, scan QR codes, and manage these events.
                </p>
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            {events.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>No events available to assign</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {events.map((event) => {
                  const isSelected = selectedEvents.includes(event.id);
                  const eventDate = event.eventDate ? new Date(event.eventDate) : null;
                  
                  return (
                    <div 
                      key={event.id} 
                      className={`relative group transition-all duration-200 ${
                        isSelected 
                          ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-400 shadow-md' 
                          : 'bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-sm'
                      } rounded-xl p-4 cursor-pointer`}
                      onClick={(e) => {
                        console.log('🔵 Event card clicked:', event.title, 'Current selected:', selectedEvents);
                        e.stopPropagation();
                        
                        if (isSelected) {
                          const newSelection = selectedEvents.filter(id => id !== event.id);
                          console.log('🔴 Unselecting event. New selection:', newSelection);
                          setSelectedEvents(newSelection);
                        } else {
                          const newSelection = [...selectedEvents, event.id];
                          console.log('🟢 Selecting event. New selection:', newSelection);
                          setSelectedEvents(newSelection);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id={`event-${event.id}`}
                          checked={isSelected}
                          className="mt-1 pointer-events-none"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="font-semibold text-gray-900 text-base leading-tight">
                              {event.title}
                            </h3>
                            {event.eventType && (
                              <Badge 
                                className={`shrink-0 ${
                                  event.eventType === 'Open Day' 
                                    ? 'bg-blue-500' 
                                    : event.eventType === 'Expo' 
                                    ? 'bg-purple-500' 
                                    : 'bg-green-500'
                                } text-white text-xs`}
                              >
                                {event.eventType}
                              </Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                            {event.location && (
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-purple-500" />
                                <span>{event.location}</span>
                              </div>
                            )}
                            {eventDate && !isNaN(eventDate.getTime()) && (
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-purple-500" />
                                <span>{eventDate.toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric', 
                                  year: 'numeric' 
                                })}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            
            {selectedEvents.length > 0 && (
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <p className="text-sm font-semibold text-purple-900">
                    {selectedEvents.length} event{selectedEvents.length !== 1 ? 's' : ''} selected
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4 border-t mt-4">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowEventAssignmentDialog(false);
                  setSelectedEvents([]);
                  setExistingEventAssignments([]);
                  setPendingUserUpdate(null);
                  setPendingUserCreate(null);
                  setEventAssignmentUserId(null);
                  // Reopen the appropriate dialog
                  if (pendingUserCreate) {
                    setIsCreateDialogOpen(true);
                  } else if (pendingUserUpdate) {
                    setIsEditDialogOpen(true);
                  }
                }}
                className="px-6"
                data-testid="button-cancel-event-assignment"
              >
                Cancel
              </Button>
              <Button 
                onClick={async () => {
                  // For new users, require at least one event
                  if (pendingUserCreate && selectedEvents.length === 0) {
                    toast({
                      title: "Validation Error",
                      description: "Please select at least one event to assign to the new events manager",
                      variant: "destructive",
                    });
                    return;
                  }
                  
                  // For creating new user
                  if (pendingUserCreate) {
                    // Create user first, event assignment will happen in createUserMutation.onSuccess
                    createUserMutation.mutate(pendingUserCreate);
                    return;
                  }
                  
                  // For editing existing user
                  if (pendingUserUpdate && eventAssignmentUserId) {
                    // Determine which events to add and remove
                    const eventsToAdd = selectedEvents.filter(id => !existingEventAssignments.includes(id));
                    const eventsToRemove = existingEventAssignments.filter(id => !selectedEvents.includes(id));
                    
                    try {
                      // Remove unselected events
                      for (const eventId of eventsToRemove) {
                        await removeEventAssignmentMutation.mutateAsync({
                          userId: eventAssignmentUserId,
                          eventId
                        });
                      }
                      
                      // Add newly selected events
                      if (eventsToAdd.length > 0) {
                        await assignEventsMutation.mutateAsync({
                          userId: eventAssignmentUserId,
                          eventIds: eventsToAdd
                        });
                        // User update happens in assignEventsMutation.onSuccess
                      } else {
                        // If only removing events, update the user now
                        await updateUserMutation.mutateAsync(pendingUserUpdate);
                        setPendingUserUpdate(null);
                        setShowEventAssignmentDialog(false);
                        setSelectedEvents([]);
                        setExistingEventAssignments([]);
                        setEventAssignmentUserId(null);
                        
                        toast({
                          title: "Success",
                          description: "User updated and event assignments saved successfully",
                        });
                      }
                    } catch (error) {
                      console.error('Error updating event assignments:', error);
                      toast({
                        title: "Error",
                        description: "Failed to update event assignments",
                        variant: "destructive",
                      });
                    }
                  }
                }}
                disabled={createUserMutation.isPending || assignEventsMutation.isPending || removeEventAssignmentMutation.isPending}
                className="px-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg"
                data-testid="button-save-event-assignment"
              >
                {(createUserMutation.isPending || assignEventsMutation.isPending || removeEventAssignmentMutation.isPending) ? (
                  <>
                    <span className="animate-pulse">Saving...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Save Event Assignments
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      </div>
      </div>
    </div>
  );
}