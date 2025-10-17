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
  Trash,
} from "lucide-react";
import type { AdminUser, Media, BlogPost, Category, Event } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";
import MobileNav from "@/components/admin/mobile-nav";
import { getRoleBadges } from "@/lib/roleHelpers";

export default function TrashManagement() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("media");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [actionType, setActionType] = useState<"restore" | "purge" | "empty" | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [emptyTrashType, setEmptyTrashType] = useState<string | null>(null);
  
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

  // Empty trash mutation (delete all items of a type)
  const emptyTrashMutation = useMutation({
    mutationFn: async (type: string) => {
      const response = await fetch(`/api/trash/empty/${type}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to empty trash");
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/trash"] });
      setShowConfirmDialog(false);
      setEmptyTrashType(null);
      toast({
        title: "Success",
        description: data.message || `Trash emptied successfully`,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to empty trash",
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

  // Handle empty trash
  const handleEmptyTrash = (type: string) => {
    setEmptyTrashType(type);
    setActionType("empty");
    setShowConfirmDialog(true);
  };

  // Confirm action
  const confirmAction = () => {
    if (actionType === "restore" && selectedItem) {
      restoreMutation.mutate({ type: selectedItem.type, id: selectedItem.item.id });
    } else if (actionType === "purge" && selectedItem) {
      purgeMutation.mutate({ type: selectedItem.type, id: selectedItem.item.id });
    } else if (actionType === "empty" && emptyTrashType) {
      emptyTrashMutation.mutate(emptyTrashType);
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
      
      {/* Mobile Navigation */}
      <MobileNav currentUser={adminUser} />
      
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
                <p className="text-blue-100 mt-1">
                  Restore or permanently delete trashed items
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                <p className="text-white text-sm">Total Items</p>
                <p className="text-white text-2xl font-bold">{totalTrashedItems}</p>
              </div>
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
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Inbox className="h-10 w-10 text-[#1D50C9]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trash is Empty</h3>
                <p className="text-gray-500">
                  Deleted items will appear here. You can restore them or permanently delete them.
                </p>
              </div>
            </div>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5 mb-8 bg-white border-0 shadow-lg p-1 rounded-xl">
                <TabsTrigger 
                  value="media" 
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white rounded-lg transition-all duration-200" 
                  data-testid="tab-trash-media"
                >
                  <Image className="h-4 w-4" />
                  Media ({trashedItems.media?.length || 0})
                </TabsTrigger>
                <TabsTrigger 
                  value="blogPosts" 
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white rounded-lg transition-all duration-200" 
                  data-testid="tab-trash-posts"
                >
                  <FileText className="h-4 w-4" />
                  Posts ({trashedItems.blogPosts?.length || 0})
                </TabsTrigger>
                <TabsTrigger 
                  value="categories" 
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white rounded-lg transition-all duration-200" 
                  data-testid="tab-trash-categories"
                >
                  <FolderOpen className="h-4 w-4" />
                  Categories ({trashedItems.categories?.length || 0})
                </TabsTrigger>
                <TabsTrigger 
                  value="events" 
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white rounded-lg transition-all duration-200" 
                  data-testid="tab-trash-events"
                >
                  <Calendar className="h-4 w-4" />
                  Events ({trashedItems.events?.length || 0})
                </TabsTrigger>
                <TabsTrigger 
                  value="adminUsers" 
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white rounded-lg transition-all duration-200" 
                  data-testid="tab-trash-users"
                >
                  <User className="h-4 w-4" />
                  Users ({trashedItems.adminUsers?.length || 0})
                </TabsTrigger>
              </TabsList>

              {/* Media Tab */}
              <TabsContent value="media">
                {!trashedItems.media || trashedItems.media.length === 0 ? (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Image className="h-8 w-8 text-[#1D50C9]" />
                    </div>
                    <p className="text-gray-500">No trashed media files</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-end mb-4">
                      <Button
                        variant="destructive"
                        onClick={() => handleEmptyTrash('media')}
                        className="gap-2"
                        data-testid="button-empty-trash-media"
                      >
                        <Trash className="h-4 w-4" />
                        Empty Media Trash
                      </Button>
                    </div>
                    <Card className="border-0 shadow-lg">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50/50">
                          <TableHead className="font-semibold text-gray-700">Preview</TableHead>
                          <TableHead className="font-semibold text-gray-700">File</TableHead>
                          <TableHead className="font-semibold text-gray-700">Type</TableHead>
                          <TableHead className="font-semibold text-gray-700">Size</TableHead>
                          <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.media.map((media: Media) => (
                          <TableRow key={media.id} className="hover:bg-blue-50/50 transition-colors duration-200" data-testid={`row-trash-media-${media.id}`}>
                            <TableCell>
                              {media.mimeType.startsWith('image/') ? (
                                <img 
                                  src={`/api/uploads/${media.filename}`} 
                                  alt={media.originalName}
                                  className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                                  data-testid={`preview-media-${media.id}`}
                                />
                              ) : (
                                <div className="w-16 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                                  <FileText className="h-6 w-6 text-gray-400" />
                                </div>
                              )}
                            </TableCell>
                            <TableCell className="font-medium text-gray-900">{media.originalName}</TableCell>
                            <TableCell className="text-gray-600">{media.mimeType}</TableCell>
                            <TableCell className="text-gray-600">{formatFileSize(media.size)}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('media', media)}
                                className="rounded-lg hover:bg-green-50 hover:text-green-600 hover:border-green-600 transition-colors duration-200"
                                data-testid={`button-restore-media-${media.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handlePurge('media', media)}
                                className="rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
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
                  </>
                )}
              </TabsContent>

              {/* Blog Posts Tab */}
              <TabsContent value="blogPosts">
                {!trashedItems.blogPosts || trashedItems.blogPosts.length === 0 ? (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-[#1D50C9]" />
                    </div>
                    <p className="text-gray-500">No trashed blog posts</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-end mb-4">
                      <Button
                        variant="destructive"
                        onClick={() => handleEmptyTrash('blogPosts')}
                        className="gap-2"
                        data-testid="button-empty-trash-posts"
                      >
                        <Trash className="h-4 w-4" />
                        Empty Posts Trash
                      </Button>
                    </div>
                    <Card className="border-0 shadow-lg">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50/50">
                          <TableHead className="font-semibold text-gray-700">Title</TableHead>
                          <TableHead className="font-semibold text-gray-700">Status</TableHead>
                          <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.blogPosts.map((post: BlogPost) => (
                          <TableRow key={post.id} className="hover:bg-blue-50/50 transition-colors duration-200" data-testid={`row-trash-post-${post.id}`}>
                            <TableCell className="font-medium text-gray-900">{post.title}</TableCell>
                            <TableCell>
                              <Badge className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200">{post.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('blogPosts', post)}
                                className="rounded-lg hover:bg-green-50 hover:text-green-600 hover:border-green-600 transition-colors duration-200"
                                data-testid={`button-restore-post-${post.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handlePurge('blogPosts', post)}
                                className="rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
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
                  </>
                )}
              </TabsContent>

              {/* Categories Tab */}
              <TabsContent value="categories">
                {!trashedItems.categories || trashedItems.categories.length === 0 ? (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FolderOpen className="h-8 w-8 text-[#1D50C9]" />
                    </div>
                    <p className="text-gray-500">No trashed categories</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-end mb-4">
                      <Button
                        variant="destructive"
                        onClick={() => handleEmptyTrash('categories')}
                        className="gap-2"
                        data-testid="button-empty-trash-categories"
                      >
                        <Trash className="h-4 w-4" />
                        Empty Categories Trash
                      </Button>
                    </div>
                    <Card className="border-0 shadow-lg">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50/50">
                          <TableHead className="font-semibold text-gray-700">Name</TableHead>
                          <TableHead className="font-semibold text-gray-700">Slug</TableHead>
                          <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.categories.map((category: Category) => (
                          <TableRow key={category.id} className="hover:bg-blue-50/50 transition-colors duration-200" data-testid={`row-trash-category-${category.id}`}>
                            <TableCell className="font-medium text-gray-900">{category.name}</TableCell>
                            <TableCell className="text-gray-600">{category.slug}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('categories', category)}
                                className="rounded-lg hover:bg-green-50 hover:text-green-600 hover:border-green-600 transition-colors duration-200"
                                data-testid={`button-restore-category-${category.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handlePurge('categories', category)}
                                className="rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
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
                  </>
                )}
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events">
                {!trashedItems.events || trashedItems.events.length === 0 ? (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-[#1D50C9]" />
                    </div>
                    <p className="text-gray-500">No trashed events</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-end mb-4">
                      <Button
                        variant="destructive"
                        onClick={() => handleEmptyTrash('events')}
                        className="gap-2"
                        data-testid="button-empty-trash-events"
                      >
                        <Trash className="h-4 w-4" />
                        Empty Events Trash
                      </Button>
                    </div>
                    <Card className="border-0 shadow-lg">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50/50">
                          <TableHead className="font-semibold text-gray-700">Title</TableHead>
                          <TableHead className="font-semibold text-gray-700">Date</TableHead>
                          <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.events.map((event: Event) => (
                          <TableRow key={event.id} className="hover:bg-blue-50/50 transition-colors duration-200" data-testid={`row-trash-event-${event.id}`}>
                            <TableCell className="font-medium text-gray-900">{event.title}</TableCell>
                            <TableCell className="text-gray-600">{formatDate(event.eventDate)}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('events', event)}
                                className="rounded-lg hover:bg-green-50 hover:text-green-600 hover:border-green-600 transition-colors duration-200"
                                data-testid={`button-restore-event-${event.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handlePurge('events', event)}
                                className="rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
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
                  </>
                )}
              </TabsContent>

              {/* Admin Users Tab */}
              <TabsContent value="adminUsers">
                {!trashedItems.adminUsers || trashedItems.adminUsers.length === 0 ? (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-[#1D50C9]" />
                    </div>
                    <p className="text-gray-500">No trashed users</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-end mb-4">
                      <Button
                        variant="destructive"
                        onClick={() => handleEmptyTrash('adminUsers')}
                        className="gap-2"
                        data-testid="button-empty-trash-users"
                      >
                        <Trash className="h-4 w-4" />
                        Empty Users Trash
                      </Button>
                    </div>
                    <Card className="border-0 shadow-lg">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50/50">
                          <TableHead className="font-semibold text-gray-700">Username</TableHead>
                          <TableHead className="font-semibold text-gray-700">Email</TableHead>
                          <TableHead className="font-semibold text-gray-700">Role</TableHead>
                          <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {trashedItems.adminUsers.map((user: AdminUser) => (
                          <TableRow key={user.id} className="hover:bg-blue-50/50 transition-colors duration-200" data-testid={`row-trash-user-${user.id}`}>
                            <TableCell className="font-medium text-gray-900">{user.username}</TableCell>
                            <TableCell className="text-gray-600">{user.email}</TableCell>
                            <TableCell>
                              {getRoleBadges(user.roles || (user as any).role)}
                            </TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRestore('adminUsers', user)}
                                className="rounded-lg hover:bg-green-50 hover:text-green-600 hover:border-green-600 transition-colors duration-200"
                                data-testid={`button-restore-user-${user.id}`}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Restore
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handlePurge('adminUsers', user)}
                                className="rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
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
                  </>
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
              {actionType === "restore" ? "Restore Item?" : actionType === "empty" ? "Empty Trash?" : "Permanently Delete Item?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {actionType === "restore" ? (
                "This will restore the item to its original location. You can trash it again later if needed."
              ) : actionType === "empty" ? (
                <span className="text-red-600 font-medium">
                  This will permanently delete ALL items in this trash category. This action cannot be undone!
                </span>
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
              className={actionType === "purge" || actionType === "empty" ? "bg-red-600 hover:bg-red-700" : ""}
              data-testid="button-confirm-action"
            >
              {actionType === "restore" ? "Restore" : actionType === "empty" ? "Empty Trash" : "Delete Forever"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
