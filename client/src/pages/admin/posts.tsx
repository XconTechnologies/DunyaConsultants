import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Plus,
  Edit,
  Edit2,
  Trash2,
  Eye,
  CheckCircle,
  AlertTriangle,
  FileText,
  Search,
  Filter,
  X,
  User,
  Clock,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { getBlogUrl } from "@/lib/blog-utils";
import { 
  canPublishContent, 
  canDeleteContent, 
  canEditContent,
  canCreateContent,
} from "@/lib/permissions";
import type { AdminUser } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import MobileNav from "@/components/admin/mobile-nav";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  isPublished: boolean;
  approvalStatus?: 'approved' | 'not_approved' | 'editable';
  approvedAt?: Date | null;
  approverId?: number | null;
  publishedAt: Date | null;
  authorId: number;
  metaTitle: string | null;
  metaDescription: string | null;
  featuredImage: string | null;
  readingTime: number | null;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  trashedAt: Date | null;
}

interface Author {
  id: number;
  username: string;
  email: string;
}

export default function AllPosts() {
  const [location, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hasHoverCapability, setHasHoverCapability] = useState(true); // Default to true for SSR
  const [contextMenu, setContextMenu] = useState<{
    show: boolean;
    x: number;
    y: number;
    postId: number;
    postSlug: string;
    isPublished: boolean;
  } | null>(null);
  
  // Quick edit modal state
  const [quickEditPost, setQuickEditPost] = useState<{
    id: number;
    title: string;
    authorId: number;
    publishedAt: string;
    categoryIds: number[];
  } | null>(null);

  // Detect if device has hover capability
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHoverCapability(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setHasHoverCapability(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Get initial filter from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const initialFilter = (urlParams.get('filter') || 'all') as 'all' | 'published' | 'draft' | 'trash';
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft' | 'trash'>(initialFilter);
  
  // Additional filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [monthFilter, setMonthFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('');
  
  // Pagination states
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Close context menu on click outside
  useEffect(() => {
    const handleClickOutside = () => setContextMenu(null);
    if (contextMenu?.show) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [contextMenu]);

  // Get auth headers helper
  const getAuthHeaders = () => {
    const adminToken = localStorage.getItem("adminToken");
    const userToken = localStorage.getItem("userToken");
    const token = adminToken || userToken;
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  };

  // Update filter when URL changes
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = (urlParams.get('filter') || 'all') as 'all' | 'published' | 'draft' | 'trash';
    setStatusFilter(filter);
  }, [location]);

  // Check authentication
  useEffect(() => {
    const checkAuth = () => {
      const adminData = localStorage.getItem("adminUser");
      if (adminData) {
        try {
          const user = JSON.parse(adminData);
          setAdminUser(user);
        } catch (error) {
          console.error('Error parsing admin user data:', error);
          setLocation("/admin/login");
          return;
        }
      } else {
        setLocation("/admin/login");
        return;
      }
      setAuthChecked(true);
    };

    checkAuth();
  }, [setLocation]);

  // Fetch blog posts
  const { data: blogPosts = [], isLoading: blogLoading } = useQuery({
    queryKey: ["/api/admin/blog-posts"],
    enabled: authChecked,
    queryFn: async () => {
      const response = await fetch('/api/admin/blog-posts', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      return response.json();
    },
  });

  // Fetch authors
  const { data: authors = [] } = useQuery({
    queryKey: ["/api/admin/users"],
    enabled: authChecked,
    queryFn: async () => {
      const response = await fetch('/api/admin/users', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch authors');
      }
      return response.json();
    },
  });

  // Fetch all categories
  const { data: allCategories = [] } = useQuery({
    queryKey: ["/api/admin/categories"],
    enabled: authChecked,
    queryFn: async () => {
      const response = await fetch('/api/admin/categories', {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      return response.json();
    },
  });

  // Fetch categories for each post
  const { data: postCategories = {} } = useQuery({
    queryKey: ["/api/admin/blog-posts/categories", blogPosts],
    enabled: authChecked && blogPosts.length > 0,
    queryFn: async () => {
      const categoriesMap: { [key: number]: any[] } = {};
      await Promise.all(
        blogPosts.map(async (post: BlogPost) => {
          try {
            const response = await fetch(`/api/admin/blog-posts/${post.id}/categories`, {
              headers: getAuthHeaders()
            });
            if (response.ok) {
              categoriesMap[post.id] = await response.json();
            }
          } catch (error) {
            console.error(`Failed to fetch categories for post ${post.id}`);
          }
        })
      );
      return categoriesMap;
    },
  });

  // Get author name helper
  const getAuthorName = (authorId: number) => {
    const author = authors.find((a: Author) => a.id === authorId);
    return author ? author.username : "Unknown";
  };

  // Get approver name helper
  const getApproverName = (approverId: number | null | undefined) => {
    if (!approverId) return null;
    const approver = authors.find((a: Author) => a.id === approverId);
    return approver ? approver.username : "Unknown";
  };

  // Get unique years and months from posts
  const availableYears = Array.from(new Set(
    blogPosts
      .filter((post: BlogPost) => post.publishedAt)
      .map((post: BlogPost) => new Date(post.publishedAt!).getFullYear())
  )).sort((a, b) => b - a);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Filter posts based on all filters
  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    // Status filter
    if (statusFilter === 'published' && (!post.isPublished || post.trashedAt)) return false;
    if (statusFilter === 'draft' && (post.isPublished || post.trashedAt)) return false;
    if (statusFilter === 'trash' && !post.trashedAt) return false;
    if (statusFilter !== 'all' && statusFilter !== 'trash' && post.trashedAt) return false;
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const titleMatch = post.title.toLowerCase().includes(query);
      const contentMatch = post.content.toLowerCase().includes(query);
      const excerptMatch = post.excerpt?.toLowerCase().includes(query);
      if (!titleMatch && !contentMatch && !excerptMatch) return false;
    }
    
    // Category filter
    if (categoryFilter !== 'all') {
      const categories = postCategories[post.id] || [];
      const hasCategory = categories.some((cat: any) => cat.id.toString() === categoryFilter);
      if (!hasCategory) return false;
    }
    
    // Date filter (specific date)
    if (dateFilter) {
      if (!post.publishedAt) return false;
      const postDate = new Date(post.publishedAt).toISOString().split('T')[0];
      if (postDate !== dateFilter) return false;
    }
    
    // Year filter
    if (yearFilter !== 'all') {
      if (!post.publishedAt) return false;
      const postYear = new Date(post.publishedAt).getFullYear().toString();
      if (postYear !== yearFilter) return false;
    }
    
    // Month filter
    if (monthFilter !== 'all') {
      if (!post.publishedAt) return false;
      const postMonth = new Date(post.publishedAt).getMonth().toString();
      if (postMonth !== monthFilter) return false;
    }
    
    return true;
  });

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, searchQuery, categoryFilter, yearFilter, monthFilter, dateFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Selection handlers
  const handleSelectBlog = (id: number, checked: boolean) => {
    setSelectedIds(prev => 
      checked ? [...prev, id] : prev.filter(selectedId => selectedId !== id)
    );
  };

  const handleSelectAll = (checked: boolean) => {
    const pagePostIds = paginatedPosts.map((post: BlogPost) => post.id);
    if (checked) {
      setSelectedIds([...new Set([...selectedIds, ...pagePostIds])]);
    } else {
      setSelectedIds(selectedIds.filter(id => !pagePostIds.includes(id)));
    }
  };

  const isAllSelected = paginatedPosts.length > 0 && paginatedPosts.every((post: BlogPost) => selectedIds.includes(post.id));

  // Clear all filters function
  const clearAllFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setYearFilter('all');
    setMonthFilter('all');
    setDateFilter('');
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || categoryFilter !== 'all' || yearFilter !== 'all' || monthFilter !== 'all' || dateFilter;

  // Bulk actions
  const bulkPublishMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/blog-posts/bulk-publish', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to publish posts');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Selected posts have been published." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to publish selected posts.", variant: "destructive" });
    },
  });

  const bulkDraftMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/blog-posts/bulk-draft', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to draft posts');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Selected posts have been moved to draft." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to move selected posts to draft.", variant: "destructive" });
    },
  });

  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/blog-posts/bulk-delete', {
        method: 'DELETE',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to delete posts');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Selected posts have been deleted." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete selected posts.", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/blog-posts/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete post');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Blog post deleted successfully." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete blog post.", variant: "destructive" });
    },
  });

  // Quick edit mutation
  const quickEditMutation = useMutation({
    mutationFn: async (data: { id: number; authorId: number; publishedAt: string; categoryIds: number[] }) => {
      const response = await fetch(`/api/admin/blog-posts/${data.id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          authorId: data.authorId,
          publishedAt: data.publishedAt,
          categoryIds: data.categoryIds,
        }),
      });
      if (!response.ok) throw new Error('Failed to update post');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Post updated successfully." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts/categories"] });
      setQuickEditPost(null);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update post.", variant: "destructive" });
    },
  });

  if (!authChecked) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30">
      <AdminSidebar currentUser={adminUser} />
      
      {/* Mobile Navigation */}
      <MobileNav currentUser={adminUser} />

      {/* Top Header Bar */}
      <div className="lg:ml-64">
        <AdminHeader
          currentUser={adminUser}
          title="All Posts"
          subtitle="Manage all blog posts"
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          searchPlaceholder="Search posts..."
          actionButtons={
            canCreateContent(adminUser) ? (
              <Button 
                onClick={() => setLocation("/admin/blog-editor")}
                className="flex items-center space-x-2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                data-testid="button-add-new-post"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Post</span>
              </Button>
            ) : null
          }
        />
      </div>
      
      <div className="lg:ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Status Filter Counters */}
          <div className="flex items-center gap-3 py-4 border-b border-gray-200">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                statusFilter === 'all'
                  ? 'bg-[#1D50C9] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              data-testid="filter-all"
            >
              All ({blogPosts.length})
            </button>
            <button
              onClick={() => setStatusFilter('published')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                statusFilter === 'published'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              data-testid="filter-published"
            >
              Published ({blogPosts.filter(p => p.isPublished && !p.trashedAt).length})
            </button>
            <button
              onClick={() => setStatusFilter('draft')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                statusFilter === 'draft'
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              data-testid="filter-draft"
            >
              Draft ({blogPosts.filter(p => !p.isPublished && !p.trashedAt).length})
            </button>
            <button
              onClick={() => setStatusFilter('trash')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                statusFilter === 'trash'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              data-testid="filter-trash"
            >
              Trash ({blogPosts.filter(p => p.trashedAt).length})
            </button>
          </div>

          {/* Advanced Filters */}
          <Card className="border-0 shadow-md bg-gradient-to-br from-white to-blue-50/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-[#1D50C9]" />
                <h3 className="text-lg font-semibold text-gray-900">Filter Posts</h3>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="ml-auto text-red-600 hover:text-red-700 hover:bg-red-50"
                    data-testid="button-clear-filters"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear All Filters
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Category Filter */}
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="border-gray-300 focus:border-[#1D50C9] focus:ring-[#1D50C9]" data-testid="select-category-filter">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {allCategories.map((category: any) => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Year Filter */}
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="border-gray-300 focus:border-[#1D50C9] focus:ring-[#1D50C9]" data-testid="select-year-filter">
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {availableYears.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Month Filter */}
                <Select value={monthFilter} onValueChange={setMonthFilter}>
                  <SelectTrigger className="border-gray-300 focus:border-[#1D50C9] focus:ring-[#1D50C9]" data-testid="select-month-filter">
                    <SelectValue placeholder="All Months" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Months</SelectItem>
                    {monthNames.map((month, index) => (
                      <SelectItem key={index} value={index.toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Specific Date Filter */}
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="border-gray-300 focus:border-[#1D50C9] focus:ring-[#1D50C9]"
                  data-testid="input-date-filter"
                />
              </div>

              {/* Results Counter */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold text-[#1D50C9]">{filteredPosts.length}</span> of <span className="font-semibold">{blogPosts.length}</span> total posts
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bulk Actions */}
          {selectedIds.length > 0 && (canPublishContent(adminUser) || canEditContent(adminUser) || canDeleteContent(adminUser)) && (
            <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#1D50C9]/20 rounded-xl shadow-sm">
              <span className="text-sm text-[#1D50C9] font-medium">
                {selectedIds.length} blog{selectedIds.length === 1 ? '' : 's'} selected
              </span>
              <div className="flex gap-2">
                {canPublishContent(adminUser) && (
                  <Button
                    data-testid="button-bulk-publish"
                    size="sm"
                    variant="default"
                    disabled={selectedIds.length === 0}
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to publish ${selectedIds.length} selected blog post${selectedIds.length === 1 ? '' : 's'}?`)) {
                        bulkPublishMutation.mutate(selectedIds);
                      }
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Publish Selected
                  </Button>
                )}
                {canEditContent(adminUser) && (
                  <Button
                    data-testid="button-bulk-draft"
                    size="sm"
                    variant="outline"
                    disabled={selectedIds.length === 0}
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to move ${selectedIds.length} selected blog post${selectedIds.length === 1 ? '' : 's'} to draft?`)) {
                        bulkDraftMutation.mutate(selectedIds);
                      }
                    }}
                    className="border-[#1D50C9] text-[#1D50C9] hover:bg-[#1D50C9]/10"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    Draft Selected
                  </Button>
                )}
                {canDeleteContent(adminUser) && (
                  <Button
                    data-testid="button-bulk-delete"
                    size="sm"
                    variant="destructive"
                    disabled={selectedIds.length === 0}
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to DELETE ${selectedIds.length} selected blog post${selectedIds.length === 1 ? '' : 's'}? This action cannot be undone.`)) {
                        bulkDeleteMutation.mutate(selectedIds);
                      }
                    }}
                    className="shadow-sm"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete Selected
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Posts Table */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100/50">
                    <TableHead className="w-12 py-4">
                      {(canPublishContent(adminUser) || canEditContent(adminUser) || canDeleteContent(adminUser)) && (
                        <Checkbox
                          data-testid="checkbox-select-all"
                          checked={isAllSelected}
                          onCheckedChange={handleSelectAll}
                        />
                      )}
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">Title</TableHead>
                    <TableHead className="font-semibold text-gray-700">Author</TableHead>
                    <TableHead className="font-semibold text-gray-700">Published Date</TableHead>
                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                    <TableHead className="font-semibold text-gray-700 w-24 text-center">Delete</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogLoading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        Loading blog posts...
                      </TableCell>
                    </TableRow>
                  ) : blogPosts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                        No blog posts found. Create your first post!
                      </TableCell>
                    </TableRow>
                  ) : filteredPosts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                        No {statusFilter} posts found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    paginatedPosts.map((post: BlogPost) => {
                      const categories = postCategories[post.id] || [];
                      const postUrl = getBlogUrl(post.slug);
                      const isHovered = hoveredRow === post.id;
                      
                      return (
                        <TableRow 
                          key={post.id} 
                          className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-all duration-200 group"
                          onMouseEnter={() => setHoveredRow(post.id)}
                          onMouseLeave={() => setHoveredRow(null)}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            setContextMenu({
                              show: true,
                              x: e.clientX,
                              y: e.clientY,
                              postId: post.id,
                              postSlug: post.slug,
                              isPublished: post.isPublished
                            });
                          }}
                        >
                          <TableCell className="py-4">
                            {(canPublishContent(adminUser) || canEditContent(adminUser) || canDeleteContent(adminUser)) && (
                              <Checkbox
                                data-testid={`checkbox-select-blog-${post.id}`}
                                checked={selectedIds.includes(post.id)}
                                onCheckedChange={(checked) => handleSelectBlog(post.id, checked as boolean)}
                              />
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="space-y-2">
                              <Link 
                                href={`/admin/blog-editor/${post.id}`}
                                className="font-semibold text-gray-900 text-base hover:text-[#1D50C9] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D50C9] rounded"
                                data-testid={`link-title-blog-${post.id}`}
                              >
                                {post.title}
                              </Link>
                              <div className={`flex items-center gap-3 flex-wrap transition-opacity duration-200 ${hasHoverCapability ? (isHovered ? 'opacity-100' : 'opacity-0') : 'opacity-100'}`}>
                                {post.isPublished ? (
                                  <Link
                                    href={postUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={`link-view-blog-${post.id}`}
                                    className="inline-flex items-center h-7 px-3 text-sm font-medium text-[#1D50C9] hover:bg-[#1D50C9]/10 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D50C9]"
                                  >
                                    <Eye className="w-3.5 h-3.5 mr-1.5" />
                                    View
                                  </Link>
                                ) : (
                                  <Link
                                    href={`/admin/blog-preview/${post.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={`link-preview-blog-${post.id}`}
                                    className="inline-flex items-center h-7 px-3 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600"
                                  >
                                    <Eye className="w-3.5 h-3.5 mr-1.5" />
                                    Preview
                                  </Link>
                                )}
                                {canEditContent(adminUser) && (
                                  <>
                                    <button
                                      onClick={() => {
                                        const cats = postCategories[post.id] || [];
                                        setQuickEditPost({
                                          id: post.id,
                                          title: post.title,
                                          authorId: post.authorId,
                                          publishedAt: post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : '',
                                          categoryIds: cats.map((c: any) => c.id),
                                        });
                                      }}
                                      data-testid={`button-quick-edit-${post.id}`}
                                      className="inline-flex items-center h-7 px-3 text-sm font-medium text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
                                    >
                                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                                      Quick Edit
                                    </button>
                                    <Link
                                      href={`/admin/blog-editor/${post.id}`}
                                      data-testid={`link-edit-blog-${post.id}`}
                                      className="inline-flex items-center h-7 px-3 text-sm font-medium text-[#1D50C9] hover:bg-[#1D50C9]/10 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D50C9]"
                                    >
                                      <Edit2 className="w-3.5 h-3.5 mr-1.5" />
                                      Edit
                                    </Link>
                                  </>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm text-gray-600">
                              {post.authorName || 'Unknown'}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm text-gray-600">
                              {post.publishedAt 
                                ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric' 
                                  })
                                : post.isPublished 
                                ? 'Not set'
                                : '-'
                              }
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1">
                              <Badge 
                                variant={post.isPublished ? "default" : "secondary"}
                                className={post.isPublished ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-sm" : "bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-0"}
                              >
                                {post.isPublished ? "Published" : "Draft"}
                              </Badge>
                              <Badge 
                                variant="outline"
                                className={
                                  post.approvalStatus === 'approved' 
                                    ? "bg-green-50 text-green-700 border-green-300" 
                                    : post.approvalStatus === 'not_approved'
                                    ? "bg-red-50 text-red-700 border-red-300"
                                    : "bg-blue-50 text-blue-700 border-blue-300"
                                }
                              >
                                {post.approvalStatus === 'approved' 
                                  ? "✓ Approved" 
                                  : post.approvalStatus === 'not_approved'
                                  ? "✗ Not Approved"
                                  : "✎ Editable"}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            {canDeleteContent(adminUser) && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  if (window.confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
                                    deleteMutation.mutate(post.id);
                                  }
                                }}
                                data-testid={`button-delete-blog-${post.id}`}
                                className="text-red-600 hover:text-red-800 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">Items per page:</span>
                      <Select
                        value={itemsPerPage.toString()}
                        onValueChange={(value) => {
                          setItemsPerPage(parseInt(value));
                          setCurrentPage(1);
                        }}
                      >
                        <SelectTrigger className="w-20 h-9 border-gray-300 bg-white shadow-sm hover:border-[#1D50C9] transition-colors" data-testid="select-items-per-page">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25">25</SelectItem>
                          <SelectItem value="50">50</SelectItem>
                          <SelectItem value="100">100</SelectItem>
                        </SelectContent>
                      </Select>
                      <span className="text-sm text-gray-600 bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-sm">
                        Showing <span className="font-semibold text-[#1D50C9]">{startIndex + 1}</span> to <span className="font-semibold text-[#1D50C9]">{Math.min(endIndex, filteredPosts.length)}</span> of <span className="font-semibold text-[#1D50C9]">{filteredPosts.length}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="h-9 px-3 bg-white border-gray-300 hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white hover:border-[#1D50C9] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all duration-200"
                        data-testid="button-previous-page"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Previous
                      </Button>
                      
                      <div className="flex items-center gap-1 mx-2">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          
                          return (
                            <Button
                              key={pageNum}
                              variant={currentPage === pageNum ? "default" : "outline"}
                              size="sm"
                              onClick={() => setCurrentPage(pageNum)}
                              className={currentPage === pageNum 
                                ? "h-9 w-9 p-0 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white border-0 shadow-md font-semibold" 
                                : "h-9 w-9 p-0 bg-white border-gray-300 hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white hover:border-[#1D50C9] shadow-sm transition-all duration-200"}
                              data-testid={`button-page-${pageNum}`}
                            >
                              {pageNum}
                            </Button>
                          );
                        })}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="h-9 px-3 bg-white border-gray-300 hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white hover:border-[#1D50C9] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all duration-200"
                        data-testid="button-next-page"
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right-Click Context Menu */}
      {contextMenu?.show && (() => {
        // Use admin preview URL for drafts, public URL for published
        const menuUrl = contextMenu.isPublished 
          ? getBlogUrl(contextMenu.postSlug)
          : `/admin/blog-preview/${contextMenu.postId}`;
        
        return (
          <div
            className="fixed z-50 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 min-w-[220px]"
            style={{
              left: `${contextMenu.x}px`,
              top: `${contextMenu.y}px`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                window.open(menuUrl, '_blank');
                setContextMenu(null);
              }}
              className="w-full px-4 py-2 text-left hover:bg-blue-50 text-sm text-gray-700 flex items-center gap-2"
              data-testid="context-open-new-tab"
            >
              <ExternalLink className="w-4 h-4" />
              Open in new tab
            </button>
            
            <button
              onClick={() => {
                const fullUrl = window.location.origin + menuUrl;
                navigator.clipboard.writeText(fullUrl);
                toast({ title: "URL copied to clipboard" });
                setContextMenu(null);
              }}
              className="w-full px-4 py-2 text-left hover:bg-blue-50 text-sm text-gray-700 flex items-center gap-2"
              data-testid="context-copy-url"
            >
              <FileText className="w-4 h-4" />
              Copy URL
            </button>
            
            <button
              onClick={() => {
                const newWindow = window.open(menuUrl, '_blank', 'noopener,noreferrer');
                if (newWindow) newWindow.opener = null;
                setContextMenu(null);
              }}
              className="w-full px-4 py-2 text-left hover:bg-blue-50 text-sm text-gray-700 flex items-center gap-2"
              data-testid="context-open-new-window"
            >
              <ExternalLink className="w-4 h-4" />
              Open in new window
            </button>
            
            <div className="border-t border-gray-200 my-1"></div>
            
            <button
              onClick={() => {
                setLocation(`/admin/blog-editor/${contextMenu.postId}`);
                setContextMenu(null);
              }}
              className="w-full px-4 py-2 text-left hover:bg-blue-50 text-sm text-gray-700 flex items-center gap-2"
              data-testid="context-edit-post"
            >
              <Edit2 className="w-4 h-4" />
              Edit post
            </button>
            
            <button
              onClick={() => {
                const url = window.location.origin + menuUrl;
                const blob = new Blob([url], { type: 'text/plain' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `${contextMenu.postSlug}-url.txt`;
                link.click();
                URL.revokeObjectURL(link.href);
                toast({ title: "URL saved as text file" });
                setContextMenu(null);
              }}
              className="w-full px-4 py-2 text-left hover:bg-blue-50 text-sm text-gray-700 flex items-center gap-2"
              data-testid="context-save-link"
            >
              <FileText className="w-4 h-4" />
              Save link address as
            </button>
          </div>
        );
      })()}

      {/* Quick Edit Dialog */}
      <Dialog open={quickEditPost !== null} onOpenChange={(open) => !open && setQuickEditPost(null)}>
        <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden">
          {quickEditPost && (
            <>
              {/* Gradient Header with Post Title */}
              <div className="bg-gradient-to-r from-[#1D50C9] to-[#2B5FD9] text-white p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Edit className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1">Quick Edit</h3>
                    <p className="text-blue-100 text-sm line-clamp-2 leading-relaxed">
                      {quickEditPost.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 space-y-6">
                {/* Author Selection */}
                <div className="space-y-2">
                  <Label htmlFor="quick-edit-author" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#1D50C9]" />
                    Author
                  </Label>
                  <Select
                    value={quickEditPost.authorId.toString()}
                    onValueChange={(value) => setQuickEditPost({ ...quickEditPost, authorId: parseInt(value) })}
                  >
                    <SelectTrigger id="quick-edit-author" className="border-gray-300 focus:border-[#1D50C9] focus:ring-[#1D50C9]">
                      <SelectValue placeholder="Select author" />
                    </SelectTrigger>
                    <SelectContent>
                      {authors.map((author: Author) => (
                        <SelectItem key={author.id} value={author.id.toString()}>
                          {author.username}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Published Date */}
                <div className="space-y-2">
                  <Label htmlFor="quick-edit-date" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1D50C9]" />
                    Published Date
                  </Label>
                  <Input
                    id="quick-edit-date"
                    type="date"
                    value={quickEditPost.publishedAt}
                    onChange={(e) => setQuickEditPost({ ...quickEditPost, publishedAt: e.target.value })}
                    className="border-gray-300 focus:border-[#1D50C9] focus:ring-[#1D50C9]"
                  />
                </div>

                {/* Categories */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#1D50C9]" />
                    Categories
                  </Label>
                  <div className="border border-gray-300 rounded-lg p-4 max-h-60 overflow-y-auto bg-gray-50/50">
                    <div className="space-y-2.5">
                      {allCategories.map((category: any) => (
                        <div 
                          key={category.id} 
                          className="flex items-center space-x-3 p-2 rounded-md hover:bg-white transition-colors"
                        >
                          <Checkbox
                            id={`category-${category.id}`}
                            checked={quickEditPost.categoryIds.includes(category.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setQuickEditPost({
                                  ...quickEditPost,
                                  categoryIds: [...quickEditPost.categoryIds, category.id]
                                });
                              } else {
                                setQuickEditPost({
                                  ...quickEditPost,
                                  categoryIds: quickEditPost.categoryIds.filter(id => id !== category.id)
                                });
                              }
                            }}
                            className="data-[state=checked]:bg-[#1D50C9] data-[state=checked]:border-[#1D50C9]"
                          />
                          <Label 
                            htmlFor={`category-${category.id}`} 
                            className="text-sm cursor-pointer flex-1 font-medium text-gray-700"
                          >
                            {category.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-2 border-t border-gray-200">
                  <Button
                    variant="outline"
                    onClick={() => setQuickEditPost(null)}
                    disabled={quickEditMutation.isPending}
                    className="border-gray-300 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => quickEditMutation.mutate(quickEditPost)}
                    disabled={quickEditMutation.isPending}
                    className="bg-[#1D50C9] hover:bg-[#1845B3] text-white shadow-md"
                  >
                    {quickEditMutation.isPending ? (
                      <>
                        <span className="mr-2">Saving...</span>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}