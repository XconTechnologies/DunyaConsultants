import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Eye, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getBlogUrl } from "@/lib/blog-utils";
import { RefreshCw, Database, Globe } from "lucide-react";

// Unified image src normalization function (same as other components)
const normalizeImageSrc = (image: string) => {
  if (!image || image.trim() === '') {
    return '/attached_assets/generated_images/Blog_placeholder_image_201b6785.png'; // fallback for empty images
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

const blogPosts = [
  {
    id: 1,
    title: "Kaplan Test of English (KTE)",
    excerpt: "If you are an international student planning to study for a Master's or PhD abroad, you may need to prove...",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Test Preparation",
    date: "March 25, 2025",
    readTime: "8 min",
    author: "Dunya Consultants",
    slug: "/",
    views: "15,847"
  },
  {
    id: 2,
    title: "A Complete Guide to Global Talent Visa Australia",
    excerpt: "If you have special skills and internationally recognized qualifications, you can apply for Global Talent Visa Australia (subclass 858)...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Visa & Immigration",
    date: "March 24, 2025",
    readTime: "12 min",
    author: "Dunya Consultants",
    slug: "/2024/10/25/global-talent-visa-australia",
    views: "12,456"
  },
  {
    id: 3,
    title: "Anglia Ruskin University – A Trusted Partner of Dunya Consultants",
    excerpt: "Anglia Ruskin University (ARU) is one of the most popular public universities located in East Anglia, UK, with a history...",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "University Partners",
    date: "March 23, 2025",
    readTime: "10 min",
    author: "Dunya Consultants",
    slug: "/2024/10/22/anglia-ruskin-university",
    views: "9,823"
  },
  {
    id: 4,
    title: "Cyprus Visa for Pakistan",
    excerpt: "Studying in Cyprus is the best choice for Pakistani students because it has some of the top universities and affordable...",
    image: "https://images.unsplash.com/photo-1544737151-6e4b55de4036?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Study Abroad",
    date: "March 22, 2025",
    readTime: "9 min",
    author: "Dunya Consultants",
    slug: "/2024/10/20/cyprus-visa-pakistan",
    views: "8,765"
  },
  {
    id: 5,
    title: "Engineering and Law Programs in Canada: Best Universities for Pakistani Students in 2025",
    excerpt: "Canada is one of the most popular choices for Pakistani students around the world. Studying in Canada can improve your...",
    image: "https://images.unsplash.com/photo-1503184392313-7319a7e8a8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Study Abroad",
    date: "March 21, 2025",
    readTime: "15 min",
    author: "Dunya Consultants",
    slug: "/2024/10/14/engineering-law-canada",
    views: "11,234"
  },
  {
    id: 6,
    title: "Why Turkey is Best Choice for Pakistani Students?",
    excerpt: "At present, numerous students are choosing to study abroad. Study in Turkey has become a top choice for Pakistani students...",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Study Abroad",
    date: "March 20, 2025",
    readTime: "11 min",
    author: "Dunya Consultants",
    slug: "/2024/10/12/turkey-pakistani-students",
    views: "7,892"
  },
  {
    id: 7,
    title: "From UK LLM to Pakistani Bar: How to Convert Your Degree for Legal Practice?",
    excerpt: "An LLM in UK for Pakistani students is a master's degree in law that allows them to study a specific...",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Legal Education",
    date: "March 19, 2025",
    readTime: "13 min",
    author: "Dunya Consultants",
    slug: "/2024/10/08/uk-llm-pakistani-bar",
    views: "6,543"
  },
  {
    id: 8,
    title: "Study Nursing in the UK",
    excerpt: "Nursing is a highly respected and in-demand profession worldwide which makes it the best career choice for students...",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Healthcare Education",
    date: "March 18, 2025",
    readTime: "10 min",
    author: "Dunya Consultants",
    slug: "/2024/10/06/study-nursing-uk",
    views: "9,456"
  },
  {
    id: 9,
    title: "Global Talent Visa UK",
    excerpt: "The Global Talent Visa UK allows you to live and work in the country for up to five years...",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Visa & Immigration",
    date: "March 17, 2025",
    readTime: "12 min",
    author: "Dunya Consultants",
    slug: "/2024/09/24/global-talent-visa-uk",
    views: "10,123"
  },
  {
    id: 10,
    title: "Top Study Abroad Countries",
    excerpt: "Studying in another country is the best and life-changing experience. It helps students get high quality education...",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Study Abroad",
    date: "March 16, 2025",
    readTime: "14 min",
    author: "Dunya Consultants",
    slug: "/2024/09/22/top-study-abroad-countries",
    views: "13,789"
  },
  {
    id: 11,
    title: "Master of Laws (LLM) in Australia: A Comprehensive Guide",
    excerpt: "The Master's degree in law (LL.M.) is a postgraduate degree that helps students get advanced knowledge in legal studies...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Legal Education",
    date: "March 15, 2025",
    readTime: "16 min",
    author: "Dunya Consultants",
    slug: "/2024/09/20/llm-australia-guide",
    views: "8,654"
  },
  {
    id: 12,
    title: "Oxford Test Accepted Universities in UK",
    excerpt: "Many students from around the world dream of studying in the UK because of its high quality education...",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Test Preparation",
    date: "March 14, 2025",
    readTime: "11 min",
    author: "Dunya Consultants",
    slug: "/2024/09/18/oxford-test-uk-universities",
    views: "7,321"
  },
  {
    id: 13,
    title: "How to Improve IELTS Listening Skills?",
    excerpt: "The IELTS exam consists of four sections: Listening, Writing, Speaking, and Reading. Each section is important...",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Test Preparation",
    date: "March 13, 2025",
    readTime: "9 min",
    author: "Dunya Consultants",
    slug: "/2024/09/16/improve-ielts-listening",
    views: "14,567"
  },
  {
    id: 14,
    title: "UK Internship for International Students",
    excerpt: "Are you a student or recent graduate looking for an internship in the UK? According to the ISE...",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Career Development",
    date: "March 12, 2025",
    readTime: "12 min",
    author: "Dunya Consultants",
    slug: "/2024/09/14/uk-internship-international-students",
    views: "9,876"
  },
  {
    id: 15,
    title: "GMAT Exam Date 2025 Registration Date",
    excerpt: "The GMAT is an important exam for students who want to get into the best business schools...",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Test Preparation",
    date: "March 11, 2025",
    readTime: "8 min",
    author: "Dunya Consultants",
    slug: "/2024/09/12/gmat-exam-date-2025",
    views: "11,234"
  },
  {
    id: 16,
    title: "Top 10 IELTS Preparation Tips and Tricks for a High Band Score",
    excerpt: "Getting a good score in the IELTS exam is very important. It helps you study in countries like the UK...",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Test Preparation",
    date: "March 10, 2025",
    readTime: "13 min",
    author: "Dunya Consultants",
    slug: "/2024/09/10/ielts-preparation-tips",
    views: "18,765"
  },
  {
    id: 17,
    title: "How to Apply For IELTS in Pakistan?",
    excerpt: "If you are planning to study or work abroad, taking the IELTS test is an important step...",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Test Preparation",
    date: "March 9, 2025",
    readTime: "10 min",
    author: "Dunya Consultants",
    slug: "/2024/09/08/apply-ielts-pakistan",
    views: "16,543"
  },
  {
    id: 18,
    title: "Bachelors in ICT (Software Engineering)",
    excerpt: "Software and technology are now a big part of everyday life. With digital advancements, societies are changing...",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technology Education",
    date: "March 8, 2025",
    readTime: "11 min",
    author: "Dunya Consultants",
    slug: "/2024/09/06/bachelors-ict-software-engineering",
    views: "8,234"
  },
  {
    id: 19,
    title: "Bachelors in Industrial Engineering and Management",
    excerpt: "Are you interested in studying Industrial Engineering and Management? Do you want to know what an industrial engineer does?",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Engineering Education",
    date: "March 7, 2025",
    readTime: "12 min",
    author: "Dunya Consultants",
    slug: "/2024/09/04/bachelors-industrial-engineering",
    views: "7,654"
  },
  {
    id: 20,
    title: "Teesside University – A Trusted Partner of Dunya Consultants",
    excerpt: "Teesside University is a modern as well as welcoming university located in Middlesbrough, North East England...",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "University Partners",
    date: "March 6, 2025",
    readTime: "10 min",
    author: "Dunya Consultants",
    slug: "/2024/09/02/teesside-university-partner",
    views: "9,123"
  }
];

const categories = [
  "All",
  "Test Preparation", 
  "Study Abroad",
  "Visa & Immigration",
  "University Partners",
  "Legal Education",
  "Healthcare Education",
  "Career Development",
  "Technology Education",
  "Engineering Education"
];

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [useProductionData, setUseProductionData] = useState(false);

  // Fetch all blog posts from API with production sync option
  const { data: blogPostsData, isLoading, refetch } = useQuery({
    queryKey: ['/api/blog-posts', { sync: useProductionData ? 'production' : 'local' }],
    queryFn: async () => {
      const syncParam = useProductionData ? '?sync=production' : '';
      const response = await fetch(`/api/blog-posts${syncParam}`);
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      return response.json();
    }
  });

  // Transform API data to component format (same as other blog components)
  const allBlogPosts = blogPostsData ? blogPostsData.map((post: any) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category || "Study Guides",
    author: "Team Dunya Consultants",
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
    image: normalizeImageSrc(post.featuredImage || ''),
    slug: post.slug
  })) : blogPosts; // Fallback to static data if API fails

  // Get unique categories for filter buttons
  const dynamicCategories = ["All", ...Array.from(new Set(allBlogPosts.map((post: any) => post.category)))];
  const categoryStrings = dynamicCategories as string[];

  const filteredPosts = allBlogPosts.filter((post: any) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-900">Blog</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[30px]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-[#1D50C9] to-#1565c0 bg-clip-text text-transparent mb-6"
          >
            Our Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Stay updated with the latest insights, tips, and guides for your study abroad journey
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/blog/archive">
              <Button className="bg-gradient-to-r from-[#1D50C9] to-#1565c0 hover:from-#1a73e8 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg">
                View Full Archive
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 border border-[#1D50C9] rounded-xl focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categoryStrings.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white shadow-lg border-[#1D50C9]'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-[#1D50C9]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Production Data Sync Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mt-6"
          >
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                {useProductionData ? <Globe className="h-4 w-4 text-green-600" /> : <Database className="h-4 w-4 text-blue-600" />}
                <span>Data Source: {useProductionData ? 'Production (dunyaconsultants.com)' : 'Local Development'}</span>
                {blogPostsData?.[0]?._source && (
                  <Badge variant={blogPostsData[0]._source === 'production' ? 'default' : 'secondary'}>
                    {blogPostsData[0]._source}
                  </Badge>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setUseProductionData(!useProductionData);
                    setTimeout(() => refetch(), 100);
                  }}
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  {isLoading ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : useProductionData ? (
                    <Database className="h-4 w-4" />
                  ) : (
                    <Globe className="h-4 w-4" />
                  )}
                  Switch to {useProductionData ? 'Local' : 'Production'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => refetch()}
                  disabled={isLoading}
                >
                  <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: any, index: number) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Link 
                href={getBlogUrl(post.slug)} 
                className="group block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D50C9] rounded-lg"
                data-testid={`link-blog-${post.id}`}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border shadow-md cursor-pointer h-full">
                  {/* Featured Image */}
                  {post.image && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img loading="lazy" 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        onError={(e) => {
                          e.currentTarget.src = '/attached_assets/generated_images/Blog_placeholder_image_201b6785.png';
                        }}
                      />
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1845B3] transition-colors line-clamp-2">
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
                      
                      <div 
                        className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] group-hover:from-[#1845B3] group-hover:to-[#1D50C9] text-white rounded-md transition-all shadow-sm hover:shadow-md"
                        data-testid={`cta-read-more-${post.id}`}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#1D50C9] to-[#1a73e8] hover:from-[#1D50C9] hover:to-purple-700 text-white px-8 py-3 rounded-xl"
          >
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </div>
  );
}