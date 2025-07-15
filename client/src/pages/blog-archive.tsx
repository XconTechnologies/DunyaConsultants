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
    title: "Global Talent Visa Australia: Complete Guide 2025",
    excerpt: "Comprehensive guide to Australia's Global Talent Visa program with requirements, application process, and success tips for skilled professionals.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Jan 15, 2025",
    readTime: "12 min",
    views: 15420,
    tags: ["Australia", "Visa", "Immigration", "Global Talent"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/global-talent-visa-australia"
  },
  {
    id: "2",
    title: "Top Study Abroad Countries for Pakistani Students",
    excerpt: "Discover the best study destinations with detailed analysis of education quality, costs, visa requirements, and career opportunities.",
    category: "Study Abroad",
    author: "Dunya Consultants",
    date: "Jan 12, 2025",
    readTime: "15 min",
    views: 12850,
    tags: ["Study Abroad", "Countries", "Education", "International"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/top-study-abroad-countries"
  },
  {
    id: "3",
    title: "IELTS Preparation Tips: 10 Expert Strategies for High Band Score",
    excerpt: "Master the IELTS exam with proven strategies from our expert trainers. Get band 7+ with these comprehensive preparation tips.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Jan 10, 2025",
    readTime: "8 min",
    views: 9680,
    tags: ["IELTS", "Test Prep", "English", "Band Score"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/ielts-preparation-tips"
  },
  {
    id: "4",
    title: "Study Nursing in the UK: Complete Guide 2025",
    excerpt: "Everything you need to know about nursing education in the UK, including top universities, requirements, and career prospects.",
    category: "Healthcare Studies",
    author: "Dunya Consultants",
    date: "Jan 8, 2025",
    readTime: "10 min",
    views: 7420,
    tags: ["UK", "Nursing", "Healthcare", "Career"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/study-nursing-uk"
  },
  {
    id: "13",
    title: "How to Improve IELTS Listening Skills: Expert Guide",
    excerpt: "Proven strategies and techniques to enhance your IELTS listening performance with practice resources and common mistakes to avoid.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Jan 6, 2025",
    readTime: "8 min",
    views: 8234,
    tags: ["IELTS", "Listening", "Test Prep", "Skills"],
    image: "https://images.unsplash.com/photo-1606096559100-04f0ab2c1fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/improve-ielts-listening"
  },
  {
    id: "14",
    title: "Cyprus Visa for Pakistan: Complete Guide 2025",
    excerpt: "Comprehensive guide to obtaining a Cyprus student visa for Pakistani students, including requirements, process, and top universities.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Jan 4, 2025",
    readTime: "12 min",
    views: 12456,
    tags: ["Cyprus", "Visa", "Pakistan", "Student"],
    image: "https://images.unsplash.com/photo-1544737151-6e4b55de4036?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/cyprus-visa-pakistan"
  },
  {
    id: "15",
    title: "Study in Turkey: Complete Guide 2025",
    excerpt: "Discover affordable education opportunities in Turkey with comprehensive guide to universities, scholarships, and living costs.",
    category: "Study Abroad",
    author: "Dunya Consultants",
    date: "Jan 2, 2025",
    readTime: "15 min",
    views: 15678,
    tags: ["Turkey", "Study Abroad", "Scholarships", "Universities"],
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/study-in-turkey"
  },
  {
    id: "16",
    title: "Top Scholarship Opportunities for 2025",
    excerpt: "Comprehensive guide to international scholarships including Fulbright, Chevening, and other prestigious funding opportunities.",
    category: "Scholarships",
    author: "Dunya Consultants",
    date: "Dec 28, 2024",
    readTime: "18 min",
    views: 22340,
    tags: ["Scholarships", "Funding", "International", "Education"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/scholarship-opportunities-2025"
  },
  {
    id: "17",
    title: "Anglia Ruskin University – A Trusted Partner of Dunya Consultants",
    excerpt: "Discover why Anglia Ruskin University is the perfect choice for Pakistani students seeking quality education in the UK.",
    category: "University Partnership",
    author: "Dunya Consultants",
    date: "Mar 19, 2025",
    readTime: "12 min",
    views: 2847,
    tags: ["UK", "University", "Partnership", "Education"],
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/anglia-ruskin-university-partner"
  },
  {
    id: "5",
    title: "Kaplan Test of English (KTE): Complete Guide",
    excerpt: "Comprehensive guide to the Kaplan Test of English with test format, preparation tips, and scoring system explained.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Jan 5, 2025",
    readTime: "9 min",
    views: 6150,
    tags: ["KTE", "Kaplan", "English Test", "Preparation"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/kaplan-test-of-english"
  },
  {
    id: "6",
    title: "How to Choose the Right University for Your Career Goals",
    excerpt: "Expert guide on selecting the perfect university based on your career aspirations, budget, and academic preferences.",
    category: "University Selection",
    author: "Dunya Consultants",
    date: "Jan 3, 2025",
    readTime: "11 min",
    views: 5890,
    tags: ["University", "Career", "Selection", "Guide"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/university-selection-guide"
  },
  {
    id: "7",
    title: "Student Visa Requirements for Canada: 2025 Update",
    excerpt: "Complete guide to Canadian student visa requirements, application process, and recent policy changes for international students.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Dec 30, 2024",
    readTime: "13 min",
    views: 8750,
    tags: ["Canada", "Student Visa", "Immigration", "Requirements"],
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/canada-student-visa-2025"
  },
  {
    id: "8",
    title: "Scholarship Opportunities for Pakistani Students Abroad",
    excerpt: "Discover fully-funded scholarships and financial aid options for Pakistani students pursuing international education.",
    category: "Scholarships",
    author: "Dunya Consultants",
    date: "Dec 28, 2024",
    readTime: "14 min",
    views: 11200,
    tags: ["Scholarships", "Financial Aid", "Pakistan", "International"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/scholarships-pakistani-students"
  },
  {
    id: "9",
    title: "PTE Academic vs IELTS: Which Test Should You Choose?",
    excerpt: "Detailed comparison of PTE Academic and IELTS exams to help you choose the right English proficiency test.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Dec 25, 2024",
    readTime: "7 min",
    views: 4680,
    tags: ["PTE", "IELTS", "Comparison", "English Test"],
    image: "https://images.unsplash.com/photo-1606096559100-04f0ab2c1fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/pte-vs-ielts-comparison"
  },
  {
    id: "10",
    title: "Study Engineering in Germany: Tuition-Free Education Guide",
    excerpt: "Complete guide to studying engineering in Germany with information on tuition-free universities and admission requirements.",
    category: "Study Abroad",
    author: "Dunya Consultants",
    date: "Dec 22, 2024",
    readTime: "12 min",
    views: 6840,
    tags: ["Germany", "Engineering", "Tuition-Free", "Education"],
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/study-engineering-germany"
  },
  {
    id: "11",
    title: "UK Post-Study Work Visa: Graduate Route Explained",
    excerpt: "Everything about the UK's Graduate Route visa for international students, including eligibility and application process.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Dec 20, 2024",
    readTime: "10 min",
    views: 9320,
    tags: ["UK", "Graduate Route", "Work Visa", "Post-Study"],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/uk-graduate-route-visa"
  },
  {
    id: "12",
    title: "Business Studies in Australia: Top Universities and Opportunities",
    excerpt: "Explore the best business schools in Australia with detailed information on programs, costs, and career prospects.",
    category: "Business Studies",
    author: "Dunya Consultants",
    date: "Dec 18, 2024",
    readTime: "11 min",
    views: 5670,
    tags: ["Australia", "Business", "MBA", "Universities"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/business-studies-australia"
  }
];

const categories = [
  { name: "All", icon: Grid, count: blogPosts.length },
  { name: "Study Abroad", icon: Globe, count: blogPosts.filter(p => p.category === "Study Abroad").length },
  { name: "Visa Guides", icon: BookOpen, count: blogPosts.filter(p => p.category === "Visa Guides").length },
  { name: "Test Preparation", icon: Award, count: blogPosts.filter(p => p.category === "Test Preparation").length },
  { name: "Healthcare Studies", icon: Heart, count: blogPosts.filter(p => p.category === "Healthcare Studies").length },
  { name: "Scholarships", icon: Star, count: blogPosts.filter(p => p.category === "Scholarships").length },
  { name: "University Selection", icon: Users, count: blogPosts.filter(p => p.category === "University Selection").length },
  { name: "Business Studies", icon: TrendingUp, count: blogPosts.filter(p => p.category === "Business Studies").length }
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
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.views - a.views);
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      default: // latest
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog Archive
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Explore our comprehensive collection of study abroad guides, visa information, and expert insights
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Eye className="w-4 h-4 text-gray-600" />
                        <span className="font-medium">{post.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    
                    <Link href={post.href}>
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Filter and Sort Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                        selectedCategory === category.name
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{category.name}</span>
                      <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Sort and View Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>

                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-500"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-500"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredPosts.length}</span> articles
            {selectedCategory !== "All" && (
              <span> in <span className="font-semibold text-blue-600">{selectedCategory}</span></span>
            )}
            {searchTerm && (
              <span> matching "<span className="font-semibold text-blue-600">{searchTerm}</span>"</span>
            )}
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      {post.trending && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Eye className="w-4 h-4 text-gray-600" />
                          <span className="font-medium">{post.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link href={post.href}>
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-80 flex-shrink-0 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        {post.trending && (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-lg">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()} views</span>
                          </div>
                        </div>
                        
                        <Link href={post.href}>
                          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Read Article
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Study Abroad Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get personalized guidance from our expert counselors and turn your dreams into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Get Free Consultation
              </button>
            </Link>
            <Link href="/offices">
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors">
                Find Nearest Office
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}