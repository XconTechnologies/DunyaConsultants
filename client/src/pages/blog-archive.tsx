import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Calendar, Clock, User, Eye, Search, Filter, Grid, List, ChevronRight, Tag, TrendingUp, Star, Award, Globe, BookOpen, Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface BlogArchivePost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  tags: string[];
  image: string;
  featured?: boolean;
  trending?: boolean;
  href: string;
}

export default function BlogArchive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Fetch published blog posts from API with optimization
  const { data: blogPosts = [], isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts/published'],
    staleTime: Infinity, // Never consider data stale - load instantly
    gcTime: Infinity, // Keep in cache forever
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
  });

  // Map of blog post slugs to their actual featured images based on content
  const featuredImages: Record<string, string> = {
    // TOEFL related
    'toefl-test-fee-in-pakistan': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/TOEFL-Test-Guide.webp',
    
    // Cyprus Visa
    'cyprus-visa-pakistan': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Cyprus-Visa-for-Pakistan.webp',
    
    // Australia Global Talent Visa
    'global-talent-visa-australia-complete-guide-2025': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Global-talent-visa-Australia.webp',
    'global-talent-visa-australia': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Global-talent-visa-Australia.webp',
    
    // Engineering and Law in Canada
    'engineering-law-canada': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Engineering-and-Law-Programs-in-Canada-Best-Universities-for-Pakistani-Students-in-2025.webp',
    
    // UK Study Guide
    'study-in-uk-complete-guide-pakistani-students': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Study-in-UK-Complete-Guide.webp',
    
    // Canada Study Guide
    'complete-guide-to-studying-in-canada': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Complete-Guide-to-Studying-in-Canada.webp',
    
    // UK January Intake
    'january-intake-universities-in-uk': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/January-Intake-Universities-UK.webp',
    
    // IELTS Listening Skills
    'how-to-improve-ielts-listening-skills': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/How-to-Improve-IELTS-Listening-Skills.webp',
    
    // UK Student Visa Mistakes
    'most-common-mistakes-to-avoid-for-your-uk-student-visa-success': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/UK-Student-Visa-Common-Mistakes.webp',
    
    // London Study Benefits
    'benefits-of-studying-in-london': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Benefits-of-Studying-in-London.webp',
    
    // Top Universities in London
    'top-10-universities-in-london': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Top-10-Universities-in-London.webp',
    
    // Recommendation Letter Guide
    'recommendation-letter-for-student-scholarship': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Recommendation-Letter-Guide.webp',
    
    // Study Abroad Consultants
    'study-abroad-education-consultants-dunya-consultants': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Study-Abroad-Education-Consultants.webp',
    
    // Dubai Visa Guide
    'dubai-visa-for-pakistani': 'https://dunyaconsultants.com/wp-content/uploads/2025/03/Dubai-Visa-for-Pakistani.webp'
  };

  // Convert API data to archive format
  const archivePosts: BlogArchivePost[] = useMemo(() => {
    if (!blogPosts || !Array.isArray(blogPosts)) return [];
    return blogPosts.map((post: BlogPost) => ({
      id: post.id.toString(),
      title: post.title,
      excerpt: post.excerpt || post.content.slice(0, 200) + "...",
      category: post.category || "General",
      author: "Dunya Consultants",
      date: new Date(post.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      readTime: "5 min",
      views: post.views || 0,
      tags: post.tags || [],
      image: post.featuredImage || featuredImages[post.slug] || "https://dunyaconsultants.com/wp-content/uploads/2025/03/Study-Abroad-Default.webp",
      featured: false,
      trending: (post.views || 0) > 1000,
      href: `/blog/${post.slug}`
    }));
  }, [blogPosts]);

  const categories = [
    { name: "All", count: archivePosts.length },
    { name: "Study Abroad", count: archivePosts.filter(p => p.category === "Study Abroad").length },
    { name: "Visa Guides", count: archivePosts.filter(p => p.category === "Visa Guides").length },
    { name: "Test Preparation", count: archivePosts.filter(p => p.category === "Test Preparation").length },
    { name: "University Guides", count: archivePosts.filter(p => p.category === "University Guides").length },
    { name: "Scholarships", count: archivePosts.filter(p => p.category === "Scholarships").length },
    { name: "Study Destinations", count: archivePosts.filter(p => p.category === "Study Destinations").length },
    { name: "Study Tips", count: archivePosts.filter(p => p.category === "Study Tips").length },
    { name: "Immigration Guide", count: archivePosts.filter(p => p.category === "Immigration Guide").length }
  ];

  const filteredPosts = useMemo(() => {
    let filtered = archivePosts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "popular":
          return b.views - a.views;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [archivePosts, searchTerm, selectedCategory, sortBy]);

  // Show loading only if there's no data at all and still loading
  if (isLoading && (!blogPosts || blogPosts.length === 0)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-blue-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-blue-600">Error loading blog posts</p>
          <p className="text-gray-600 mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Enhanced Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20"></div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.1, 1, 1.1],
                rotate: [0, -5, 0],
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/20"
              >
                <BookOpen className="w-5 h-5 text-blue-200" />
                <span className="text-sm font-medium text-blue-100">Complete Blog Archive</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                Blog
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Explore our comprehensive collection of study abroad guides, visa information, and educational resources to help you succeed in your international education journey.
              </motion.p>



              {/* View Mode Toggle */}
              <div className="flex items-center justify-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === "grid" 
                      ? "bg-white text-blue-600 shadow-lg" 
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === "list" 
                      ? "bg-white text-blue-600 shadow-lg" 
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <List className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Filters Section - Moved to Top */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredPosts.length} Articles
              </h2>
              <p className="text-gray-600 mt-1">
                {selectedCategory !== "All" ? `in ${selectedCategory}` : "across all categories"}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
          </div>

          {/* Articles Grid/List */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "space-y-6"
            }>
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <Link href={post.href}>
                        <span className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 flex items-center gap-1">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}