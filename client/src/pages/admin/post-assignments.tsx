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
  FileText, 
  UserPlus, 
  Trash2, 
  Users, 
  Link as LinkIcon,
  Crown,
  FileEdit,
  Upload,
  Settings
} from "lucide-react";
import type { AdminUser, BlogPost } from "@shared/schema";
import { isAdmin } from "@/lib/permissions";

// Role configuration for user display
const ROLE_CONFIG = {
  admin: {
    label: "Admin",
    color: "bg-red-500",
    icon: Crown,
  },
  editor: {
    label: "Editor", 
    color: "bg-blue-500",
    icon: FileEdit,
  },
  publisher: {
    label: "Publisher",
    color: "bg-green-500", 
    icon: Upload,
  },
  custom: {
    label: "Custom",
    color: "bg-purple-500",
    icon: Settings,
  }
} as const;

interface PostAssignment {
  id: number;
  userId: number;
  postId: number;
  assignedBy: number;
  createdAt: string;
  user: AdminUser;
  post: BlogPost;
}

export default function PostAssignments() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [authChecked, setAuthChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [selectedPostIds, setSelectedPostIds] = useState<string[]>([]);

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

  // Fetch all blog posts with authentication
  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/admin/blog-posts"],
    queryFn: async () => {
      const response = await fetch("/api/admin/blog-posts", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    enabled: authChecked && !!currentUser,
  });

  // Fetch all post assignments - we'll need to create this endpoint
  const { data: assignments = [], isLoading } = useQuery<PostAssignment[]>({
    queryKey: ["/api/admin/all-post-assignments"],
    // For now, we'll fetch assignments for each user individually
    queryFn: async () => {
      // This is a workaround - ideally we'd have a single endpoint for all assignments
      const allAssignments: PostAssignment[] = [];
      
      for (const user of users) {
        try {
          const response = await fetch(`/api/admin/users/${user.id}/posts`, {
            headers: getAuthHeaders(),
          });
          if (!response.ok) {
            throw new Error(`${response.status}: ${await response.text()}`);
          }
          const userPosts = await response.json() as BlogPost[];
          for (const post of userPosts) {
            allAssignments.push({
              id: `${user.id}-${post.id}` as any,
              userId: user.id,
              postId: post.id,
              assignedBy: 1, // We'll get this from the actual assignment data
              createdAt: new Date().toISOString(),
              user,
              post
            });
          }
        } catch (error) {
          console.error(`Error fetching posts for user ${user.id}:`, error);
        }
      }
      
      return allAssignments;
    },
    enabled: users.length > 0
  });

  // Create assignment mutation (now supports multiple posts)
  const createAssignmentMutation = useMutation({
    mutationFn: async ({ userId, postIds }: { userId: number; postIds: number[] }) => {
      const results = [];
      for (const postId of postIds) {
        const response = await fetch("/api/admin/post-assignments", {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({ userId, postId }),
        });
        if (!response.ok) {
          throw new Error(`${response.status}: ${await response.text()}`);
        }
        results.push(await response.json());
      }
      return results;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/all-post-assignments"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      setIsAssignDialogOpen(false);
      setSelectedUserId("");
      setSelectedPostIds([]);
      toast({
        title: "Success",
        description: `${data.length} post(s) assigned to user successfully`,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to assign posts",
        variant: "destructive",
      });
    },
  });

  // Delete assignment mutation
  const deleteAssignmentMutation = useMutation({
    mutationFn: async ({ userId, postId }: { userId: number; postId: number }) => {
      const response = await fetch(`/api/admin/post-assignments/${userId}/${postId}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/all-post-assignments"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      toast({
        title: "Success", 
        description: "Post assignment removed successfully",
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

  const handleCreateAssignment = () => {
    if (!selectedUserId || selectedPostIds.length === 0) {
      toast({
        title: "Error",
        description: "Please select a user and at least one post",
        variant: "destructive",
      });
      return;
    }

    createAssignmentMutation.mutate({
      userId: parseInt(selectedUserId),
      postIds: selectedPostIds.map(id => parseInt(id))
    });
  };

  const togglePostSelection = (postId: string) => {
    setSelectedPostIds(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleAllPosts = () => {
    if (selectedPostIds.length === blogPosts.length) {
      setSelectedPostIds([]);
    } else {
      setSelectedPostIds(blogPosts.map(post => post.id.toString()));
    }
  };

  const handleDeleteAssignment = (userId: number, postId: number) => {
    if (confirm("Are you sure you want to remove this post assignment?")) {
      deleteAssignmentMutation.mutate({ userId, postId });
    }
  };

  const getRoleBadge = (role: string) => {
    const config = ROLE_CONFIG[role as keyof typeof ROLE_CONFIG];
    if (!config) return null;
    
    const Icon = config.icon;
    return (
      <Badge className={`${config.color} text-white`}>
        <Icon className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  const getStatusBadge = (isPublished: boolean) => {
    return (
      <Badge variant={isPublished ? "default" : "secondary"}>
        {isPublished ? "Published" : "Draft"}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Sidebar */}
      <AdminSidebar currentUser={currentUser} />
      
      {/* Mobile Navigation */}
      <MobileNav currentUser={currentUser} />
      
      {/* Main Content */}
      <div className="ml-64 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Post Assignments</h1>
          <p className="text-gray-600 mt-1">Manage which users can access specific posts</p>
        </div>
        
        <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white shadow-lg">
              <LinkIcon className="w-4 h-4 mr-2" />
              Assign Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Assign Posts to User</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="user">Select User</Label>
                <Select value={selectedUserId} onValueChange={setSelectedUserId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a user" />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem key={user.id} value={user.id.toString()}>
                        <div className="flex items-center space-x-2">
                          <span>{user.username}</span>
                          <span className="text-sm text-gray-500">({user.email})</span>
                          {getRoleBadge(user.role)}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Select Posts</Label>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={toggleAllPosts}
                    className="text-xs"
                  >
                    {selectedPostIds.length === blogPosts.length ? "Deselect All" : "Select All"}
                  </Button>
                </div>
                <ScrollArea className="h-[300px] border rounded-md p-4">
                  <div className="space-y-2">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox 
                          id={`post-${post.id}`}
                          checked={selectedPostIds.includes(post.id.toString())}
                          onCheckedChange={() => togglePostSelection(post.id.toString())}
                        />
                        <label 
                          htmlFor={`post-${post.id}`}
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{post.title}</span>
                            {getStatusBadge(post.isPublished)}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">ID: {post.id}</p>
                        </label>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <p className="text-sm text-gray-500 mt-2">
                  {selectedPostIds.length} post(s) selected
                </p>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsAssignDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleCreateAssignment}
                  disabled={createAssignmentMutation.isPending || selectedPostIds.length === 0}
                >
                  {createAssignmentMutation.isPending ? "Assigning..." : `Assign ${selectedPostIds.length} Post(s)`}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Assignments</CardTitle>
            <div className="p-2 bg-[#1D50C9] rounded-lg">
              <LinkIcon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#1D50C9]">
              {assignments.length}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Active post assignments
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Users with Access</CardTitle>
            <div className="p-2 bg-green-500 rounded-lg">
              <Users className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              {new Set(assignments.map(a => a.userId)).size}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Users with post access
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Assigned Posts</CardTitle>
            <div className="p-2 bg-purple-500 rounded-lg">
              <FileText className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">
              {new Set(assignments.map(a => a.postId)).size}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Posts with assignments
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Assignments Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <LinkIcon className="w-5 h-5 mr-2" />
            Post Assignments ({assignments.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1D50C9]"></div>
            </div>
          ) : assignments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <LinkIcon className="w-12 h-12 mx-auto text-gray-300 mb-4" />
              <p className="text-lg font-medium">No post assignments found</p>
              <p className="text-sm">Assign posts to users to get started</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Post</TableHead>
                  <TableHead>Post Status</TableHead>
                  <TableHead>Assigned Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignments.map((assignment) => (
                  <TableRow key={`${assignment.userId}-${assignment.postId}`}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#1D50C9]/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-[#1D50C9]">
                            {assignment.user.username.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{assignment.user.username}</div>
                          <div className="text-sm text-gray-500">{assignment.user.email}</div>
                        </div>
                        {getRoleBadge(assignment.user.role)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium max-w-[300px] truncate">
                          {assignment.post.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {assignment.post.id}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(assignment.post.isPublished)}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {new Date(assignment.createdAt).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {isAdmin(currentUser) && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteAssignment(assignment.userId, assignment.postId)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          disabled={deleteAssignmentMutation.isPending}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
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
  );
}