import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Grid, List, Calendar, Clock, User, Eye, TrendingUp, ArrowRight, Tag, Globe, BookOpen, Award, Heart, Users, Star, ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost as DBBlogPost } from "@shared/schema";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

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
    title: "Kaplan Test of English (KTE): Complete Guide 2025",
    excerpt: "Complete guide to the Kaplan Test of English including sections, preparation tips, costs, and everything you need to know about this online English proficiency test.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Jan 15, 2025",
    readTime: "8 min",
    views: 15847,
    tags: ["KTE", "English Test", "Study Abroad", "Test Preparation"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/kaplan-test-of-english"
  },
  {
    id: "2",
    title: "Global Talent Visa Australia: Complete Guide 2025",
    excerpt: "Comprehensive guide to Australia's Global Talent Visa program, including eligibility requirements, application process, and career opportunities for skilled professionals.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Jan 14, 2025",
    readTime: "12 min",
    views: 12450,
    tags: ["Australia", "Visa", "Global Talent", "Immigration"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/global-talent-visa-australia"
  },
  {
    id: "3",
    title: "Anglia Ruskin University – A Trusted Partner of Dunya Consultants",
    excerpt: "Explore the partnership between Dunya Consultants and Anglia Ruskin University, including programs offered, admission requirements, and student success stories.",
    category: "University Partnership",
    author: "Dunya Consultants",
    date: "Jan 13, 2025",
    readTime: "10 min",
    views: 8920,
    tags: ["UK", "University", "Partnership", "Higher Education"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/anglia-ruskin-university-partner"
  },
  {
    id: "4",
    title: "Cyprus Visa for Pakistan: Complete Student Guide 2025",
    excerpt: "Complete guide for Pakistani students seeking to study in Cyprus, including visa requirements, application process, costs, and university options.",
    category: "Study Abroad",
    author: "Dunya Consultants",
    date: "Jan 12, 2025",
    readTime: "11 min",
    views: 14250,
    tags: ["Cyprus", "Pakistan", "Student Visa", "Study Abroad"],
    image: "https://images.unsplash.com/photo-1544737151-6e4b55de4036?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/cyprus-visa-pakistan"
  },
  {
    id: "5",
    title: "Engineering and Law Programs in Canada: Best Universities for Pakistani Students in 2025",
    excerpt: "Complete guide to top Canadian universities offering engineering and law programs for Pakistani students, including admission requirements, costs, and career prospects.",
    category: "Study in Canada",
    author: "Dunya Consultants",
    date: "Jan 11, 2025",
    readTime: "14 min",
    views: 9850,
    tags: ["Canada", "Engineering", "Law", "Universities"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/engineering-law-programs-canada"
  },
  {
    id: "6",
    title: "Why Turkey is Best Choice for Pakistani Students?",
    excerpt: "Discover why Turkey has become the top destination for Pakistani students seeking quality education, cultural familiarity, and affordable study options in Europe.",
    category: "Study Abroad",
    author: "Dunya Consultants",
    date: "Jan 10, 2025",
    readTime: "9 min",
    views: 11240,
    tags: ["Turkey", "Pakistan", "Study Abroad", "Affordable Education"],
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/why-turkey-best-choice-pakistani-students"
  },
  {
    id: "7",
    title: "From UK LLM to Pakistani Bar: How to Convert Your Degree for Legal Practice?",
    excerpt: "Complete guide for Pakistani law graduates on how to convert their UK LLM degree for legal practice in Pakistan, including requirements, procedures, and career opportunities.",
    category: "Legal Education",
    author: "Dunya Consultants",
    date: "Jan 9, 2025",
    readTime: "12 min",
    views: 8750,
    tags: ["UK", "LLM", "Pakistan", "Legal Practice", "Bar Council"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/uk-llm-to-pakistani-bar"
  },
  {
    id: "8",
    title: "Study Nursing in the UK: Complete Guide for International Students",
    excerpt: "Comprehensive guide to studying nursing in the UK, including top universities, admission requirements, career prospects, and registration process for international students.",
    category: "Healthcare Studies",
    author: "Dunya Consultants",
    date: "Jan 8, 2025",
    readTime: "13 min",
    views: 15680,
    tags: ["UK", "Nursing", "Healthcare", "International Students"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/study-nursing-in-uk"
  },
  {
    id: "9",
    title: "Global Talent Visa UK: Complete Guide for Skilled Professionals",
    excerpt: "Comprehensive guide to the UK's Global Talent Visa, including eligibility criteria, application process, endorsement requirements, and career opportunities for exceptional talent.",
    category: "UK Immigration",
    author: "Dunya Consultants",
    date: "Jan 7, 2025",
    readTime: "11 min",
    views: 13420,
    tags: ["UK", "Visa", "Immigration", "Skilled Professionals"],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/global-talent-visa-uk"
  },
  {
    id: "10",
    title: "Top Study Abroad Countries: Best Destinations for International Students in 2025",
    excerpt: "Discover the world's top study abroad destinations, comparing education quality, costs, career opportunities, and student experiences to help you make the best choice for your international education.",
    category: "Study Destinations",
    author: "Dunya Consultants",
    date: "Jan 6, 2025",
    readTime: "15 min",
    views: 18950,
    tags: ["Study Abroad", "Countries", "International Education", "Comparison"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/top-study-abroad-countries"
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

// Helper functions for dynamic styling
function getCategoryGradient(category: string): string {
  const gradients: Record<string, string> = {
    "Test Preparation": "from-emerald-600 to-teal-600",
    "Visa Guides": "from-blue-600 to-indigo-600", 
    "Study Abroad": "from-purple-600 to-violet-600",
    "Legal Education": "from-orange-600 to-red-600",
    "Healthcare Studies": "from-pink-600 to-rose-600",
    "University Partnership": "from-cyan-600 to-blue-600",
    "Study Destinations": "from-green-600 to-emerald-600",
    "UK Immigration": "from-indigo-600 to-purple-600",
    "Study in Canada": "from-red-600 to-pink-600",
    "General": "from-gray-600 to-slate-600"
  };
  return gradients[category || "General"] || "from-blue-600 to-purple-600";
}

function getCategoryBadgeColor(category: string): string {
  const colors: Record<string, string> = {
    "Test Preparation": "bg-emerald-500",
    "Visa Guides": "bg-blue-500",
    "Study Abroad": "bg-purple-500", 
    "Legal Education": "bg-orange-500",
    "Healthcare Studies": "bg-pink-500",
    "University Partnership": "bg-cyan-500",
    "Study Destinations": "bg-green-500",
    "UK Immigration": "bg-indigo-500",
    "Study in Canada": "bg-red-500",
    "General": "bg-gray-500"
  };
  return colors[category || "General"] || "bg-blue-500";
}

// Dynamic Blog Post Component
function DynamicBlogPost({ slug }: { slug: string }) {
  const { data: blogPost, isLoading, error } = useQuery<DBBlogPost>({
    queryKey: [`/api/blog-posts/${slug}`],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section - Using dynamic gradient based on category */}
      <div className={`bg-gradient-to-r ${getCategoryGradient(blogPost.category || 'General')} text-white py-20`}>
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className={`${getCategoryBadgeColor(blogPost.category || 'General')} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                {blogPost.category || 'General'}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            {blogPost.excerpt && (
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                {blogPost.excerpt}
              </p>
            )}
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(blogPost.createdAt || new Date()).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Featured Image */}
              {blogPost.featuredImage && (
                <div className="mb-8">
                  <img 
                    src={blogPost.featuredImage} 
                    alt={blogPost.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content || '' }} />
              </div>

              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <div className="mt-12 bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Expert Guidance?</h3>
                <p className="text-gray-700 mb-6">
                  Get personalized consultation for your study abroad journey. Our expert counselors are here to help you every step of the way.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <User className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Expert Counselors</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Globe className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Multiple Destinations</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{blogPost.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Published:</span>
                  <span className="font-medium">{new Date(blogPost.createdAt || new Date()).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reading Time:</span>
                  <span className="font-medium">8 min</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
              <h3 className="font-semibold mb-3">Need Help?</h3>
              <p className="text-sm text-blue-100 mb-4">
                Get personalized guidance for your study abroad journey.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Expert Counselors</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>24/7 Support</span>
                </div>
              </div>
              <Link 
                href="/contact"
                className="inline-block w-full text-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-3">
                <Link href="/blog" className="block text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Study Abroad Guide 2025
                </Link>
                <Link href="/blog" className="block text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  University Selection Tips
                </Link>
                <Link href="/blog" className="block text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Visa Application Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function Blog() {
  const [match, params] = useRoute("/blog/:slug");
  
  if (match && params?.slug) {
    return <DynamicBlogPost slug={params.slug} />;
  }
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dunya Consultants Blog
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Your ultimate guide to studying abroad, visa applications, and international education insights
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{blogPosts.length}</div>
              <div className="text-gray-600">Total Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{featuredPosts.length}</div>
              <div className="text-gray-600">Featured Posts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{trendingPosts.length}</div>
              <div className="text-gray-600">Trending Now</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{categories.length - 1}</div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        selectedCategory === category.name
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 mr-3" />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Posts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Posts</h3>
                <div className="space-y-4">
                  {featuredPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} href={post.href}>
                      <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* View Toggle */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedCategory === "All" 
                  ? `All Articles (${filteredPosts.length})`
                  : `${selectedCategory} (${filteredPosts.length})`
                }
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg ${
                    viewMode === "grid"
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg ${
                    viewMode === "list"
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Articles Grid */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">No articles found matching your criteria.</div>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1"
              }`}>
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden ${
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