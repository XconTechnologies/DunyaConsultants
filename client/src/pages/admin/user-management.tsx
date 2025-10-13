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
  EyeOff
} from "lucide-react";
import type { AdminUser } from "@shared/schema";
import { canManageUsers } from "@/lib/permissions";

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
  const [editPermissions, setEditPermissions] = useState<Record<string, boolean>>({});

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      setIsCreateDialogOpen(false);
      setCreateForm({ username: "", email: "", password: "", roles: ["editor"], permissions: {} });
      toast({
        title: "Success",
        description: "User created successfully",
      });
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
    
    createUserMutation.mutate(userData);
  };

  const handleEditUser = (user: AdminUser) => {
    setEditingUser(user);
    setEditUsername(user.username);
    setEditPassword("");
    setShowEditPassword(false);
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
          <DialogContent className="sm:max-w-md">
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
              
              {/* Permissions Preview */}
              {createForm.roles.length > 0 && (
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
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
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
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input value={editingUser.email} disabled className="bg-gray-100" />
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
              </div>
              <div>
                <Label htmlFor="edit-password">Password</Label>
                <div className="relative">
                  <Input
                    id="edit-password"
                    type={showEditPassword ? "text" : "password"}
                    value={editPassword}
                    onChange={(e) => setEditPassword(e.target.value)}
                    placeholder="Leave blank to keep current password"
                    className="pr-10"
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
                <p className="text-xs text-gray-500 mt-1">Only enter a password if you want to change it</p>
              </div>
              <div>
                <Label htmlFor="edit-role">Role</Label>
                <Select 
                  value={editingUser.role} 
                  onValueChange={(value) => setEditingUser({ 
                    ...editingUser, 
                    role: value as any,
                    permissions: value === 'custom' ? (editingUser.permissions || {}) : null
                  })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(ROLE_CONFIG).map(([key, config]) => (
                      <SelectItem key={key} value={key}>
                        <div className="flex items-center">
                          <config.icon className="w-4 h-4 mr-2" />
                          <span>{config.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Custom Permissions Section for Edit Dialog */}
              {editingUser.role === 'custom' && (
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
                    const updates: any = { 
                      role: editingUser.role,
                      permissions: editingUser.role === 'custom' ? editPermissions : null
                    };
                    
                    // Add username if changed
                    if (editUsername && editUsername !== editingUser.username) {
                      updates.username = editUsername;
                    }
                    
                    // Add password if provided
                    if (editPassword) {
                      updates.password = editPassword;
                    }
                    
                    handleUpdateUser(updates);
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
      </div>
      </div>
    </div>
  );
}