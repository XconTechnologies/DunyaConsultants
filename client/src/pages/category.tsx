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
import { setMetaTags } from "@/lib/seo";

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
    publishedAt: post.publishedAt || post.published_at || post.created_at,
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
    const dateA = new Date(a.publishedAt || 0);
    const dateB = new Date(b.publishedAt || 0);
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
    setMetaTags({
      title: currentCategory.name,
      metaTitle: (currentCategory as any).metaTitle || (currentCategory as any).meta_title,
      description: `Explore our comprehensive ${currentCategory.name.toLowerCase()} articles and guides. Get expert insights and advice for studying abroad from Path Visa Consultants.`,
      metaDescription: (currentCategory as any).metaDescription || (currentCategory as any).meta_description,
      siteName: "Blog | Dunya Consultants"
    });
  }, [currentCategory]);

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
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-[30px]"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center mb-8"
            >
              <Badge className="px-6 py-3 text-lg bg-white/20 backdrop-blur-sm text-white flex items-center gap-2 border border-white/30 shadow-lg">
                <Tag className="w-6 h-6 text-white" />
                Category
              </Badge>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg"
            >
              {currentCategory.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Discover expert insights and comprehensive guides in {currentCategory.name.toLowerCase()}. 
              Stay informed with the latest updates and advice from our consultants.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/30 shadow-lg"
            >
              <span className="text-2xl font-bold text-white">{filteredPosts.length}</span>
              <span className="text-white/90 ml-3 text-lg">article{filteredPosts.length !== 1 ? 's' : ''} found</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                <Button 
                  variant="outline" 
                  className="border-2 border-[#1D50C9] text-[#1D50C9] hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
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
                    className="pl-10 w-full sm:w-80 border-2 border-[#1D50C9] focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent rounded-xl shadow-md"
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
                <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                      <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-full group hover:-translate-y-2">
                        
                        {/* Featured Image */}
                        {post.image && (
                          <div className="relative overflow-hidden rounded-t-lg">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <img loading="lazy" 
                              src={post.image}
                              alt={post.title}
                              className="w-full h-56 sm:h-56 md:h-56 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                              style={{ objectFit: 'cover', objectPosition: 'center', maxWidth: '100%', height: 'auto', minHeight: '200px' }}
                              data-testid={`post-image-${post.id}`}
                            />
                          </div>
                        )}
                        
                        <CardContent className="p-6">
                          {/* Categories */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories && post.categories.slice(0, 2).map((category: any, catIndex: number) => (
                              <Badge key={catIndex} className="text-xs bg-gradient-to-r from-[#1D50C9]/10 to-[#1845B3]/10 text-[#1D50C9] border border-[#1D50C9]/20 hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white transition-all duration-300 rounded-sm">
                                {category.name}
                              </Badge>
                            ))}
                          </div>
                          
                          {/* Title */}
                          <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-[#1D50C9] transition-colors duration-300">
                            {post.title}
                          </h3>
                          
                          {/* Excerpt */}
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          {/* Meta Information and Read More - Same Line */}
                          <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                            <div className="flex items-center text-gray-500">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1.5" />
                                <span className="text-xs">{post.date}</span>
                              </div>
                            </div>
                            
                            {/* Read More Link */}
                            <div className="flex items-center text-[#1D50C9] font-semibold group-hover:text-[#1845B3] transition-colors">
                              <span className="text-sm">Read More</span>
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                    className="border-2 border-[#1D50C9] text-[#1D50C9] hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[40px] border-2 transition-all duration-300 ${
                        currentPage === page 
                          ? 'bg-gradient-to-r from-[#1D50C9] to-[#1845B3] border-[#1D50C9] text-white shadow-lg' 
                          : 'border-[#1D50C9] text-[#1D50C9] hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white'
                      }`}
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
                    className="border-2 border-[#1D50C9] text-[#1D50C9] hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
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