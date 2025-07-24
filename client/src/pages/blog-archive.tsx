import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Calendar, Clock, User, Eye, Search, Filter, Grid, List, ChevronRight, Tag, TrendingUp, Star, Award, Globe, BookOpen, Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";

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
      category: post.category,
      author: post.author,
      date: new Date(post.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      readTime: post.readTime || "5 min",
      views: post.views || 0,
      tags: post.tags || [],
      image: post.featured_image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: post.featured || false,
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
    { name: "Study Tips", count: archivePosts.filter(p => p.category === "Study Tips").length }
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading blog posts</p>
          <p className="text-gray-600 mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Blog Archive</h1>
                <p className="mt-2 text-gray-600">
                  Explore our comprehensive collection of study abroad guides and resources
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md ${
                      viewMode === "grid" 
                        ? "bg-blue-100 text-blue-600" 
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md ${
                      viewMode === "list" 
                        ? "bg-blue-100 text-blue-600" 
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-8">
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
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                        selectedCategory === category.name
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-4 w-4" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
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

          {/* Main Content */}
          <div className="lg:col-span-9">
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
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-8"
              } style={{ padding: '0', margin: '0' }}>
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-none shadow-sm border-0 overflow-hidden hover:shadow-md transition-all duration-300 group ${
                      viewMode === "list" ? "flex flex-row" : "flex flex-col"
                    }`}
                    style={{ marginBottom: '30px' }}
                  >
                    <div className={viewMode === "list" ? "w-1/3" : "w-full"}>
                      <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '16/10' }}>
                        <Link href={post.href}>
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 cursor-pointer"
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                            }}
                          />
                        </Link>
                      </div>
                    </div>

                    <div className={`${viewMode === "list" ? "p-6 flex-1 flex flex-col justify-between" : "pt-4 pb-4"}`}>
                      <div>
                        <Link href={post.href}>
                          <h4 className="text-base font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-snug cursor-pointer">
                            {post.title}
                          </h4>
                        </Link>

                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <Link href={post.href}>
                          <span className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 cursor-pointer">
                            Read More
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
      </div>
    </div>
  );
}