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

  // Fetch published blog posts from API
  const { data: blogPosts = [], isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts/published'],
  });

  // Convert API data to archive format
  const archivePosts: BlogArchivePost[] = useMemo(() => {
    return blogPosts.map(post => ({
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
      image: post.featuredImage || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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

  if (isLoading) {
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
          <p className="text-red-600">Error loading blog posts</p>
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
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
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
                Blog Archive
                <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent block">
                  & Resources
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Explore our comprehensive collection of study abroad guides, visa information, and educational resources to help you succeed in your international education journey.
              </motion.p>

              {/* Enhanced Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">{archivePosts.length}+</div>
                  <div className="text-sm text-blue-200">Total Articles</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">9</div>
                  <div className="text-sm text-blue-200">Categories</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">25K+</div>
                  <div className="text-sm text-blue-200">Total Views</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">Weekly</div>
                  <div className="text-sm text-blue-200">New Content</div>
                </motion.div>
              </motion.div>

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-8 space-y-8">
                {/* Search */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl shadow-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Search Articles</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl shadow-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                          selectedCategory === category.name
                            ? "bg-blue-600 text-white shadow-md transform scale-105"
                            : "hover:bg-blue-100 text-blue-700 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <BookOpen className="h-4 w-4" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          selectedCategory === category.name
                            ? "bg-blue-500 text-white"
                            : "bg-blue-200 text-blue-700"
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl shadow-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
                  >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                    <option value="title">Alphabetical</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    {filteredPosts.length} Articles
                  </h2>
                  <p className="text-blue-600 mt-1">
                    {selectedCategory !== "All" ? `in ${selectedCategory}` : "across all categories"}
                    {searchTerm && ` matching "${searchTerm}"`}
                  </p>
                </div>
              </div>

              {/* Articles Grid/List */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200">
                  <BookOpen className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-blue-900 mb-2">No articles found</h3>
                  <p className="text-blue-600">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className={
                  viewMode === "grid" 
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" 
                    : "space-y-6"
                }>
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 ${
                        viewMode === "list" ? "flex flex-row" : "flex flex-col"
                      }`}
                    >
                      <div className={viewMode === "list" ? "w-1/3" : "w-full"}>
                        <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 aspect-[16/9]">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-blue-900/20"></div>
                          {post.trending && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                🔥 Trending
                              </span>
                            </div>
                          )}
                          <div className="absolute bottom-4 left-4">
                            <span className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={`p-6 ${viewMode === "list" ? "w-2/3" : "w-full"}`}>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2 text-blue-600 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-blue-600 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-blue-700 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-blue-600 text-sm">
                              <Eye className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-blue-600 text-sm">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                          </div>

                          <Link href={post.href}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:from-blue-700 hover:to-blue-800 flex items-center space-x-2"
                            >
                              <span>Read More</span>
                              <ArrowRight className="h-4 w-4" />
                            </motion.button>
                          </Link>
                        </div>

                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
              }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Get weekly expert tips, scholarship updates, and study abroad insights delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your email address" 
                  className="bg-white/15 border-white/30 text-white placeholder:text-white/70 backdrop-blur-md h-12 px-4 rounded-lg focus:border-white focus:ring-white focus:outline-none flex-1"
                />
                <button className="bg-white text-blue-700 hover:bg-blue-50 whitespace-nowrap h-12 px-8 font-semibold transition-all duration-300 transform hover:scale-105 rounded-lg">
                  Subscribe Free
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-4">✨ No spam, unsubscribe anytime</p>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}