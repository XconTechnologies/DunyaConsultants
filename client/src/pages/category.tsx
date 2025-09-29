import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, Eye, ArrowRight, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useRoute, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ConsultationBookingSection from "@/components/consultation-booking-section";
import { getBlogUrl } from "@/lib/blog-utils";

// Unified image src normalization function
const normalizeImageSrc = (image: string) => {
  if (!image || image.trim() === '') {
    return '/attached_assets/placeholder.jpg';
  }
  const trimmed = image.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  if (trimmed.startsWith('/api/uploads/') || trimmed.startsWith('api/uploads/')) {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  if (trimmed.startsWith('/blog/') || trimmed.startsWith('blog/')) {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  if (trimmed.startsWith('/attached_assets/') || trimmed.startsWith('attached_assets/')) {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  return `/attached_assets/${trimmed}`;
};

export default function CategoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [, params] = useRoute('/category/:categorySlug');
  const categorySlug = params?.categorySlug || '';
  const postsPerPage = 12;

  // Fetch blog posts
  const { data: blogPostsData, isLoading } = useQuery({
    queryKey: ['/api/blog-posts'],
    queryFn: async () => {
      const response = await fetch('/api/blog-posts');
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      return response.json();
    }
  });

  // Transform API data to component format
  const allBlogPosts = blogPostsData ? blogPostsData.map((post: any) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category || "Study Guides",
    categories: post.categories || [],
    author: post.authorName || "Path Visa Consultants",
    authorId: post.authorId,
    date: (() => {
      const dateStr = post.publishedAt || post.published_at || post.created_at;
      if (!dateStr) return 'Unknown Date';
      try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return 'Unknown Date';
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      } catch {
        return 'Unknown Date';
      }
    })(),
    readTime: "5 min",
    views: post.view_count || 0,
    tags: post.tags || [],
    image: normalizeImageSrc(post.featuredImage || ''),
    featured: false,
    slug: post.slug,
    content: post.content,
    rawContent: post.content
  })) : [];

  // Find the current category details
  const currentCategory = (() => {
    // Check if any post has categories matching the slug
    for (const post of allBlogPosts) {
      if (post.categories && post.categories.length > 0) {
        const matchingCategory = post.categories.find((cat: any) => 
          cat.slug === categorySlug || cat.name.toLowerCase().replace(/\s+/g, '-') === categorySlug
        );
        if (matchingCategory) {
          return matchingCategory;
        }
      }
    }
    
    // Fallback to decoding slug
    return {
      name: categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      slug: categorySlug
    };
  })();

  // Filter posts by category
  const categoryBlogPosts = allBlogPosts.filter((post: any) => {
    if (!post.categories || post.categories.length === 0) return false;
    
    return post.categories.some((cat: any) => 
      cat.slug === categorySlug || cat.name.toLowerCase().replace(/\s+/g, '-') === categorySlug
    );
  });

  // Filter posts by search term
  const searchFilteredPosts = searchTerm.trim() 
    ? categoryBlogPosts.filter((post: any) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          (post.tags && post.tags.some((tag: string) => tag.toLowerCase().includes(searchLower)))
        );
      })
    : categoryBlogPosts;

  // Sort posts by date (newest to oldest)
  const filteredPosts = searchFilteredPosts.sort((a: any, b: any) => {
    const dateA = new Date(a.publishedAt || a.published_at || a.created_at || 0);
    const dateB = new Date(b.publishedAt || b.published_at || b.created_at || 0);
    return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const postsToDisplay = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SEO and page title
  useEffect(() => {
    document.title = `${currentCategory.name} - Blog | Path Visa Consultants`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Explore our comprehensive ${currentCategory.name.toLowerCase()} articles and guides. Get expert insights and advice for studying abroad from Path Visa Consultants.`);
    }
  }, [currentCategory.name]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading category posts...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Category Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1D50C9] to-[#2563EB] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-white" />
                Category
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {currentCategory.name}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover expert insights and comprehensive guides in {currentCategory.name.toLowerCase()}. 
              Stay informed with the latest updates and advice from our consultants.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <span className="text-lg font-bold text-white">{filteredPosts.length}</span>
              <span className="text-white/90 ml-2">article{filteredPosts.length !== 1 ? 's' : ''} found</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Back Button and Search in Single Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Back Button */}
              <Link href="/category">
                <Button variant="outline">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to All Categories
                </Button>
              </Link>
              
              {/* Search */}
              <div className="max-w-md w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder={`Search in ${currentCategory.name}...`}
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="pl-10 w-full sm:w-80"
                    data-testid="search-category-posts"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center py-16"
            >
              <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {searchTerm ? 'No articles found' : `No articles in ${currentCategory.name}`}
              </h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                {searchTerm 
                  ? `We couldn't find any articles matching "${searchTerm}" in ${currentCategory.name}.`
                  : `This category doesn't have any published articles yet. Check back soon for new content!`
                }
              </p>
              <Link href="/blog">
                <Button>
                  Browse All Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
                {postsToDisplay.map((post: any, index: number) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={getBlogUrl(post.slug)}>
                      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                        
                        {/* Featured Image */}
                        {post.image && (
                          <div className="relative overflow-hidden rounded-t-lg">
                            <img 
                              src={post.image}
                              alt={post.title}
                              className="w-full h-56 object-cover transition-transform hover:scale-105"
                              data-testid={`post-image-${post.id}`}
                            />
                          </div>
                        )}
                        
                        <CardContent className="p-6">
                          {/* Categories */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories && post.categories.slice(0, 2).map((category: any, catIndex: number) => (
                              <Badge key={catIndex} variant="secondary" className="text-xs">
                                {category.name}
                              </Badge>
                            ))}
                          </div>
                          
                          {/* Title */}
                          <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2 hover:text-[#1D50C9] transition-colors">
                            {post.title}
                          </h3>
                          
                          {/* Excerpt */}
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          {/* Meta Information - Same as Blog Cards */}
                          <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                            <div className="flex items-center text-gray-500">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            
                            {/* Author on the right */}
                            <div className="flex items-center text-gray-500">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex justify-center items-center space-x-2"
                >
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    data-testid="prev-page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className="min-w-[40px]"
                      data-testid={`page-${page}`}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    data-testid="next-page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      <ConsultationBookingSection />
      <Footer />
    </div>
  );
}