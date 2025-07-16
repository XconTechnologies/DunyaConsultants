import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Calendar, Clock, User, Eye, Search, Filter, Grid, List, ChevronRight, Tag, TrendingUp, Star, Award, Globe, BookOpen, Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface BlogPost {
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

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Apply For IELTS in Pakistan",
    excerpt: "Complete guide to IELTS registration and application process in Pakistan, including requirements, booking steps, fees, and frequently asked questions for 2025.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Mar 10, 2025",
    readTime: "8 min",
    views: 12450,
    tags: ["IELTS", "Pakistan", "Registration", "Application"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/how-to-apply-for-ielts-in-pakistan"
  },
  {
    id: "2",
    title: "Bachelors in ICT (Software Engineering)",
    excerpt: "Complete guide to Software Engineering programs in Finland, including universities, eligibility criteria, documents required, and application process for international students.",
    category: "Study Programs",
    author: "Dunya Consultants",
    date: "Mar 8, 2025",
    readTime: "9 min",
    views: 9870,
    tags: ["Software Engineering", "Finland", "ICT", "Bachelor's"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/bachelors-in-ict-software-engineering"
  },
  {
    id: "3",
    title: "Master of Laws (LLM) in Australia: Complete Guide for International Students",
    excerpt: "Everything you need to know about studying LLM in Australia, including best universities, eligibility criteria, costs, application process, and career opportunities.",
    category: "Legal Education",
    author: "Dunya Consultants",
    date: "Mar 7, 2025",
    readTime: "10 min",
    views: 8750,
    tags: ["Australia", "LLM", "Legal Education", "Master of Laws"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/master-of-laws-llm-australia"
  },
  {
    id: "4",
    title: "GMAT Test Fee in Pakistan: Complete Registration Guide 2025",
    excerpt: "Complete guide to GMAT exam fees in Pakistan, registration process, test dates, eligibility criteria, and preparation tips for business school applications.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Mar 6, 2025",
    readTime: "8 min",
    views: 5680,
    tags: ["GMAT", "Pakistan", "Test Fee", "Business School"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/gmat-test-fee-in-pakistan"
  },
  {
    id: "5",
    title: "How to Improve IELTS Listening Skills: Expert Tips and Strategies",
    excerpt: "Master the IELTS listening test with expert tips, practice strategies, and techniques to improve your English listening skills for better band scores.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Mar 5, 2025",
    readTime: "8 min",
    views: 9420,
    tags: ["IELTS", "Listening", "Test Preparation", "English Skills"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/how-to-improve-ielts-listening-skills"
  },
  {
    id: "6",
    title: "Top 10 IELTS Preparation Tips: Expert Guide for High Band Score",
    excerpt: "Complete IELTS preparation guide with 10 essential tips and strategies to achieve your target band score, including study schedules, practice resources, and expert advice.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Mar 4, 2025",
    readTime: "10 min",
    views: 11200,
    tags: ["IELTS", "Preparation", "Study Tips", "Band Score"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/ielts-preparation-tips-and-tricks"
  }
];

const categories = [
  { name: "All", icon: Grid, count: blogPosts.length },
  { name: "Study Abroad", icon: Globe, count: blogPosts.filter(p => p.category === "Study Abroad").length },
  { name: "Visa Guides", icon: BookOpen, count: blogPosts.filter(p => p.category === "Visa Guides").length },
  { name: "Test Preparation", icon: Award, count: blogPosts.filter(p => p.category === "Test Preparation").length },
  { name: "Healthcare Studies", icon: Heart, count: blogPosts.filter(p => p.category === "Healthcare Studies").length },
  { name: "Legal Education", icon: Users, count: blogPosts.filter(p => p.category === "Legal Education").length },
  { name: "UK Immigration", icon: TrendingUp, count: blogPosts.filter(p => p.category === "UK Immigration").length },
  { name: "Study Destinations", icon: Star, count: blogPosts.filter(p => p.category === "Study Destinations").length },
  { name: "University Partnership", icon: Users, count: blogPosts.filter(p => p.category === "University Partnership").length },
  { name: "Study in Canada", icon: Globe, count: blogPosts.filter(p => p.category === "Study in Canada").length }
];

export default function BlogArchive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

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
  }, [searchTerm, selectedCategory, sortBy]);

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
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.name
                          ? "bg-blue-50 text-blue-600 border border-blue-200"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
                  {selectedCategory !== "All" && (
                    <span className="text-gray-500"> in {selectedCategory}</span>
                  )}
                </h2>
                {searchTerm && (
                  <p className="text-sm text-gray-600 mt-1">
                    Showing results for "{searchTerm}"
                  </p>
                )}
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* Articles Grid/List */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  {searchTerm || selectedCategory !== "All" 
                    ? "Try adjusting your search or filter criteria"
                    : "No blog articles are currently available"
                  }
                </p>
              </div>
            ) : (
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 gap-8"
                  : "space-y-6"
              }>
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                  >
                    <div className={viewMode === "list" ? "flex-shrink-0 w-48" : ""}>
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className={`object-cover ${
                            viewMode === "list" ? "h-32 w-full" : "h-48 w-full"
                          }`}
                        />
                        {post.featured && (
                          <div className="absolute top-3 left-3">
                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                        {post.trending && (
                          <div className="absolute top-3 right-3">
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Trending
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views.toLocaleString()}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <Link
                          href={post.href}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                        >
                          Read More
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{post.tags.length - 3} more
                            </span>
                          )}
                        </div>
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