import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Download, Loader2, Search, CheckCircle, XCircle } from "lucide-react";

interface WordPressPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  contentBlocks: any[];
  featuredImageUrl?: string;
  wordpressId: number;
  sourceUrl: string;
  publishedAt: string;
  wpCategories: Array<{ id: number; name: string; slug: string }>;
  wpAuthor: string;
  wpModified: string;
}

export default function WordPressImport() {
  const [siteUrl, setSiteUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<WordPressPost | null>(null);
  const [categoryMapping, setCategoryMapping] = useState<Record<number, number>>({});
  const [showImportDialog, setShowImportDialog] = useState(false);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch local categories for mapping
  const { data: localCategories = [] } = useQuery({
    queryKey: ["/api/admin/categories"],
    queryFn: async () => {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/categories', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json();
    },
  });

  // Fetch WordPress posts
  const {
    data: wpData,
    isLoading: isFetching,
    refetch,
  } = useQuery({
    queryKey: ["/api/admin/wordpress/fetch", siteUrl, page, search],
    enabled: false, // Manual fetch
    queryFn: async () => {
      const response = await apiRequest("/api/admin/wordpress/fetch", {
        method: "POST",
        body: JSON.stringify({ siteUrl, username, password, page, perPage: 10, search }),
      });
      return response;
    },
  });

  // Import WordPress post
  const importMutation = useMutation({
    mutationFn: async (post: WordPressPost) => {
      return apiRequest("/api/admin/wordpress/import", {
        method: "POST",
        body: JSON.stringify({
          siteUrl,
          username,
          password,
          postId: post.wordpressId,
          categoryMapping,
        }),
      });
    },
    onSuccess: (data: any) => {
      toast({
        title: data.action === 'created' ? "Post Imported" : "Post Updated",
        description: `WordPress post "${selectedPost?.title}" has been ${data.action === 'created' ? 'imported' : 'updated'} successfully.`,
      });
      setShowImportDialog(false);
      setSelectedPost(null);
      setCategoryMapping({});
      queryClient.invalidateQueries({ queryKey: ["/api/admin/posts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Import Failed",
        description: error.message || "Failed to import WordPress post",
        variant: "destructive",
      });
    },
  });

  const handleFetch = () => {
    if (!siteUrl) {
      toast({
        title: "Site URL Required",
        description: "Please enter a WordPress site URL",
        variant: "destructive",
      });
      return;
    }
    refetch();
  };

  const handleImportClick = (post: WordPressPost) => {
    setSelectedPost(post);
    
    // Auto-map categories by slug matching
    const autoMapping: Record<number, number> = {};
    post.wpCategories.forEach(wpCat => {
      const localCat = localCategories.find((lc: any) => 
        lc.slug.toLowerCase() === wpCat.slug.toLowerCase()
      );
      if (localCat) {
        autoMapping[wpCat.id] = localCat.id;
      }
    });
    setCategoryMapping(autoMapping);
    
    setShowImportDialog(true);
  };

  const handleImportConfirm = () => {
    if (selectedPost) {
      importMutation.mutate(selectedPost);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          WordPress Import
        </CardTitle>
        <CardDescription>
          Import articles from any WordPress site using the REST API
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Connection Settings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="wp-url">WordPress Site URL *</Label>
            <Input
              id="wp-url"
              type="url"
              placeholder="https://example.com"
              value={siteUrl}
              onChange={(e) => setSiteUrl(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wp-username">Username (Optional)</Label>
            <Input
              id="wp-username"
              type="text"
              placeholder="For private posts"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wp-password">Password (Optional)</Label>
            <Input
              id="wp-password"
              type="password"
              placeholder="Application password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Search and Fetch */}
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              placeholder="Search WordPress posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          </div>
          <Button onClick={handleFetch} disabled={isFetching || !siteUrl}>
            {isFetching ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Fetching...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Fetch Posts
              </>
            )}
          </Button>
        </div>

        {/* WordPress Posts Table */}
        {wpData && wpData.posts && wpData.posts.length > 0 && (
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Categories</TableHead>
                  <TableHead>Modified</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wpData.posts.map((post: WordPressPost) => (
                  <TableRow key={post.wordpressId}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell>{post.wpAuthor}</TableCell>
                    <TableCell>
                      <div className="flex gap-1 flex-wrap">
                        {post.wpCategories.slice(0, 2).map((cat) => (
                          <Badge key={cat.id} variant="secondary" className="text-xs">
                            {cat.name}
                          </Badge>
                        ))}
                        {post.wpCategories.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.wpCategories.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(post.wpModified).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleImportClick(post)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Import
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            {wpData.totalPages > 1 && (
              <div className="flex justify-between items-center p-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Page {page} of {wpData.totalPages} ({wpData.total} total posts)
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={page === 1}
                    onClick={() => setPage(p => p - 1)}
                  >
                    Previous
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={page >= wpData.totalPages}
                    onClick={() => setPage(p => p + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {wpData && wpData.posts && wpData.posts.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No WordPress posts found
          </div>
        )}

        {/* Import Dialog */}
        <Dialog open={showImportDialog} onOpenChange={setShowImportDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Import WordPress Post</DialogTitle>
              <DialogDescription>
                Map WordPress categories to your local categories before importing
              </DialogDescription>
            </DialogHeader>

            {selectedPost && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">{selectedPost.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {selectedPost.excerpt}
                  </p>
                </div>

                <div className="space-y-3">
                  <Label>Category Mapping</Label>
                  {selectedPost.wpCategories.map((wpCat) => (
                    <div key={wpCat.id} className="flex items-center gap-3">
                      <Badge variant="outline" className="min-w-[120px]">
                        {wpCat.name}
                      </Badge>
                      <span className="text-muted-foreground">→</span>
                      <Select
                        value={categoryMapping[wpCat.id]?.toString() || ""}
                        onValueChange={(value) => {
                          setCategoryMapping(prev => ({
                            ...prev,
                            [wpCat.id]: parseInt(value, 10)
                          }));
                        }}
                      >
                        <SelectTrigger className="flex-1">
                          <SelectValue placeholder="Select local category" />
                        </SelectTrigger>
                        <SelectContent>
                          {localCategories.map((cat: any) => (
                            <SelectItem key={cat.id} value={cat.id.toString()}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-muted p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Featured image will be downloaded and uploaded to cloud storage</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>HTML content will be converted to content blocks</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Post will be imported as draft for review</span>
                  </div>
                </div>
              </div>
            )}

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowImportDialog(false)}
                disabled={importMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                onClick={handleImportConfirm}
                disabled={importMutation.isPending}
              >
                {importMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Importing...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Import Post
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
