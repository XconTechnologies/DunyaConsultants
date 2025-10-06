import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Trash2,
  RotateCcw,
  AlertTriangle,
  Image,
  FileText,
  FolderOpen,
  Calendar,
  User,
  Inbox,
} from "lucide-react";
import type { AdminUser, Media, BlogPost, Category, Event } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";

export default function TrashManagement() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("media");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [actionType, setActionType] = useState<"restore" | "purge" | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Get auth headers helper (admin only)
  const getAuthHeaders = () => {
    const adminToken = localStorage.getItem("adminToken");
    return {
      'Content-Type': 'application/json',
      ...(adminToken && { 'Authorization': `Bearer ${adminToken}` })
    };
  };

  // Check authentication (admin only)
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const user = localStorage.getItem("adminUser");
    
    if (!token || !user) {
      setLocation("/admin/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      setAdminUser(userData);
      setAuthChecked(true);
    } catch {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  // Fetch all trashed items
  const { data: trashedItems = {}, isLoading } = useQuery({
    queryKey: ["/api/trash"],
    enabled: authChecked && !!adminUser,
    queryFn: async () => {
      const response = await fetch("/api/trash", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to fetch trashed items");
      return response.json();
    },
  });

  // Restore mutation
  const restoreMutation = useMutation({
    mutationFn: async (data: { type: string; id: number }) => {
      const endpoints: Record<string, string> = {
        media: `/api/admin/media/${data.id}/restore`,
        blogPosts: `/api/admin/blog-posts/${data.id}/restore`,
        categories: `/api/admin/categories/${data.id}/restore`,
        events: `/api/admin/events/${data.id}/restore`,
        adminUsers: `/api/admin/users/${data.id}/restore`,
      };
      
      const response = await fetch(endpoints[data.type], {
        method: "POST",
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to restore item");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/trash"] });
      setShowConfirmDialog(false);
      setSelectedItem(null);
      toast({
        title: "Success",
        description: "Item restored successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to restore item",
        variant: "destructive",
      });
    },
  });

  // Purge mutation (permanent delete)
  const purgeMutation = useMutation({
    mutationFn: async (data: { type: string; id: number }) => {
      const endpoints: Record<string, string> = {
        media: `/api/admin/media/${data.id}/permanent`,
        blogPosts: `/api/admin/blog-posts/${data.id}/permanent`,
        categories: `/api/admin/categories/${data.id}/permanent`,
        events: `/api/admin/events/${data.id}/permanent`,
        adminUsers: `/api/admin/users/${data.id}/permanent`,
      };
      
      const response = await fetch(endpoints[data.type], {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to permanently delete item");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/trash"] });
      setShowConfirmDialog(false);
      setSelectedItem(null);
      toast({
        title: "Success",
        description: "Item permanently deleted",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to permanently delete item",
        variant: "destructive",
      });
    },
  });

  // Handle restore
  const handleRestore = (type: string, item: any) => {
    setSelectedItem({ type, item });
    setActionType("restore");
    setShowConfirmDialog(true);
  };

  // Handle purge (permanent delete)
  const handlePurge = (type: string, item: any) => {
    setSelectedItem({ type, item });
    setActionType("purge");
    setShowConfirmDialog(true);
  };

  // Confirm action
  const confirmAction = () => {
    if (!selectedItem || !actionType) return;
    
    if (actionType === "restore") {
      restoreMutation.mutate({ type: selectedItem.type, id: selectedItem.item.id });
    } else {
      purgeMutation.mutate({ type: selectedItem.type, id: selectedItem.item.id });
    }
  };

  // Format date
  const formatDate = (date: string) => {
    return new Date(date).toLocaleString();
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!authChecked || !adminUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading trash...</p>
        </div>
      </div>
    );
  }

  const totalTrashedItems = (trashedItems.media?.length || 0) +
    (trashedItems.blogPosts?.length || 0) +
    (trashedItems.categories?.length || 0) +
    (trashedItems.events?.length || 0) +
    (trashedItems.adminUsers?.length || 0);

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
              <div>
                <h1 className="text-3xl font-bold text-white flex items-center">
                  <Trash2 className="h-8 w-8 mr-3" />
                  Trash
                </h1>
                <p className="text-blue-100 mt-2">
                  Restore or permanently delete trashed items
                </p>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {totalTrashedItems} {totalTrashedItems === 1 ? 'item' : 'items'}
              </Badge>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading trashed items...</p>
            </div>
          ) : totalTrashedItems === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Inbox className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">Trash is Empty</h3>
                <p className="text-gray-500">
                  Deleted items will appear here. You can restore them or permanently delete them.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="media" className="flex items-center gap-2" data-testid="tab-trash-media">
                  <Image className="h-4 w-4" />
                  Media ({trashedItems.media?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="blogPosts" className="flex items-center gap-2" data-testid="tab-trash-posts">
                  <FileText className="h-4 w-4" />
                  Posts ({trashedItems.blogPosts?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="categories" className="flex items-center gap-2" data-testid="tab-trash-categories">
                  <FolderOpen className="h-4 w-4" />
                  Categories ({trashedItems.categories?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2" data-testid="tab-trash-events">
                  <Calendar className="h-4 w-4" />
                  Events ({trashedItems.events?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="adminUsers" className="flex items-center gap-2" data-testid="tab-trash-users">
                  <User className="h-4 w-4" />
                  Users ({trashedItems.adminUsers?.length || 0})
                </TabsTrigger>
              </TabsList>

              {/* Media Tab */}
              <TabsContent value="media">
                {!trashedItems.media || trashedItems.media.length === 0 ? (
                  <Card className="text-center py-8">
                    <CardContent>
                      <Image className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No trashed media files</p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>File</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Trashed At</TableHead>
                          <TableHead>Reason</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.media.map((media: Media) => (
                          <TableRow key={media.id} data-testid={`row-trash-media-${media.id}`}>
                            <TableCell className="font-medium">{media.originalName}</TableCell>
                            <TableCell>{media.mimeType}</TableCell>
                            <TableCell>{formatFileSize(media.size)}</TableCell>
                            <TableCell>{formatDate(media.trashedAt!)}</TableCell>
                            <TableCell>{media.trashReason || '-'}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('media', media)}
                                data-testid={`button-restore-media-${media.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handlePurge('media', media)}
                                data-testid={`button-purge-media-${media.id}`}
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Delete Forever
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                )}
              </TabsContent>

              {/* Blog Posts Tab */}
              <TabsContent value="blogPosts">
                {!trashedItems.blogPosts || trashedItems.blogPosts.length === 0 ? (
                  <Card className="text-center py-8">
                    <CardContent>
                      <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No trashed blog posts</p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Trashed At</TableHead>
                          <TableHead>Reason</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.blogPosts.map((post: BlogPost) => (
                          <TableRow key={post.id} data-testid={`row-trash-post-${post.id}`}>
                            <TableCell className="font-medium">{post.title}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{post.status}</Badge>
                            </TableCell>
                            <TableCell>{formatDate(post.trashedAt!)}</TableCell>
                            <TableCell>{post.trashReason || '-'}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('blogPosts', post)}
                                data-testid={`button-restore-post-${post.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handlePurge('blogPosts', post)}
                                data-testid={`button-purge-post-${post.id}`}
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Delete Forever
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                )}
              </TabsContent>

              {/* Categories Tab */}
              <TabsContent value="categories">
                {!trashedItems.categories || trashedItems.categories.length === 0 ? (
                  <Card className="text-center py-8">
                    <CardContent>
                      <FolderOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No trashed categories</p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Slug</TableHead>
                          <TableHead>Trashed At</TableHead>
                          <TableHead>Reason</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.categories.map((category: Category) => (
                          <TableRow key={category.id} data-testid={`row-trash-category-${category.id}`}>
                            <TableCell className="font-medium">{category.name}</TableCell>
                            <TableCell>{category.slug}</TableCell>
                            <TableCell>{formatDate(category.trashedAt!)}</TableCell>
                            <TableCell>{category.trashReason || '-'}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('categories', category)}
                                data-testid={`button-restore-category-${category.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handlePurge('categories', category)}
                                data-testid={`button-purge-category-${category.id}`}
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Delete Forever
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                )}
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events">
                {!trashedItems.events || trashedItems.events.length === 0 ? (
                  <Card className="text-center py-8">
                    <CardContent>
                      <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No trashed events</p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Trashed At</TableHead>
                          <TableHead>Reason</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.events.map((event: Event) => (
                          <TableRow key={event.id} data-testid={`row-trash-event-${event.id}`}>
                            <TableCell className="font-medium">{event.title}</TableCell>
                            <TableCell>{formatDate(event.eventDate)}</TableCell>
                            <TableCell>{formatDate(event.trashedAt!)}</TableCell>
                            <TableCell>{event.trashReason || '-'}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('events', event)}
                                data-testid={`button-restore-event-${event.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handlePurge('events', event)}
                                data-testid={`button-purge-event-${event.id}`}
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Delete Forever
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                )}
              </TabsContent>

              {/* Admin Users Tab */}
              <TabsContent value="adminUsers">
                {!trashedItems.adminUsers || trashedItems.adminUsers.length === 0 ? (
                  <Card className="text-center py-8">
                    <CardContent>
                      <User className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No trashed users</p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Username</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Trashed At</TableHead>
                          <TableHead>Reason</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.adminUsers.map((user: AdminUser) => (
                          <TableRow key={user.id} data-testid={`row-trash-user-${user.id}`}>
                            <TableCell className="font-medium">{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                              <Badge>{user.role}</Badge>
                            </TableCell>
                            <TableCell>{formatDate(user.trashedAt!)}</TableCell>
                            <TableCell>{user.trashReason || '-'}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('adminUsers', user)}
                                data-testid={`button-restore-user-${user.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handlePurge('adminUsers', user)}
                                data-testid={`button-purge-user-${user.id}`}
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Delete Forever
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          )}
        </main>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent data-testid="dialog-confirm-action">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              {actionType === "restore" ? "Restore Item?" : "Permanently Delete Item?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {actionType === "restore" ? (
                "This will restore the item to its original location. You can trash it again later if needed."
              ) : (
                <span className="text-red-600 font-medium">
                  This action cannot be undone! The item will be permanently deleted from the database.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="button-cancel-action">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmAction}
              className={actionType === "purge" ? "bg-red-600 hover:bg-red-700" : ""}
              data-testid="button-confirm-action"
            >
              {actionType === "restore" ? "Restore" : "Delete Forever"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
