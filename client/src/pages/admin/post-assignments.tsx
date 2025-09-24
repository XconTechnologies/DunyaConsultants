import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
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
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [selectedPostId, setSelectedPostId] = useState<string>("");

  // Fetch all users
  const { data: users = [] } = useQuery<AdminUser[]>({
    queryKey: ["/api/admin/users"],
  });

  // Fetch all blog posts
  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/admin/blog-posts"],
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
          const userPosts = await apiRequest(`/api/admin/users/${user.id}/posts`, "GET") as unknown as BlogPost[];
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

  // Create assignment mutation
  const createAssignmentMutation = useMutation({
    mutationFn: ({ userId, postId }: { userId: number; postId: number }) =>
      apiRequest("/api/admin/post-assignments", "POST", { userId, postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/all-post-assignments"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      setIsAssignDialogOpen(false);
      setSelectedUserId("");
      setSelectedPostId("");
      toast({
        title: "Success",
        description: "Post assigned to user successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to assign post",
        variant: "destructive",
      });
    },
  });

  // Delete assignment mutation
  const deleteAssignmentMutation = useMutation({
    mutationFn: ({ userId, postId }: { userId: number; postId: number }) =>
      apiRequest(`/api/admin/post-assignments/${userId}/${postId}`, "DELETE"),
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
    if (!selectedUserId || !selectedPostId) {
      toast({
        title: "Error",
        description: "Please select both a user and a post",
        variant: "destructive",
      });
      return;
    }

    createAssignmentMutation.mutate({
      userId: parseInt(selectedUserId),
      postId: parseInt(selectedPostId)
    });
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
    <div className="p-6 space-y-6">
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
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Assign Post to User</DialogTitle>
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
                <Label htmlFor="post">Select Post</Label>
                <Select value={selectedPostId} onValueChange={setSelectedPostId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a post" />
                  </SelectTrigger>
                  <SelectContent>
                    {blogPosts.map((post) => (
                      <SelectItem key={post.id} value={post.id.toString()}>
                        <div className="flex items-center space-x-2">
                          <span className="truncate max-w-[200px]">{post.title}</span>
                          {getStatusBadge(post.isPublished)}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsAssignDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleCreateAssignment}
                  disabled={createAssignmentMutation.isPending}
                >
                  {createAssignmentMutation.isPending ? "Assigning..." : "Assign Post"}
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
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteAssignment(assignment.userId, assignment.postId)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        disabled={deleteAssignmentMutation.isPending}
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
  );
}