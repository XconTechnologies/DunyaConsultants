import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Static blog posts data structure for fallback
const staticBlogPosts = [
  {
    id: "gre-test-fee-pakistan",
    title: "GRE Test Fee in Pakistan",
    excerpt: "Complete guide to GRE test fees, registration process, and format options for Pakistani students planning to study abroad.",
    category: "Test Preparation", 
    author: "Path Visa Consultants",
    date: "October 15, 2024",
    readTime: "8 min",
    views: 2450,
    tags: ["GRE", "Test Preparation", "Pakistan", "Study Abroad"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/10/GRE-Test-Fee-in-Pakistan.webp",
    featured: true,
    slug: "gre-test-fee-pakistan"
  },
  {
    id: "study-in-uk-complete-guide",
    title: "Study in UK: Complete Guide for Pakistani Students",
    excerpt: "Everything you need to know about studying in the UK - from university selection to visa application and living costs.",
    category: "Study Abroad",
    author: "Path Visa Consultants", 
    date: "October 12, 2024",
    readTime: "12 min",
    views: 3200,
    tags: ["UK", "Study Abroad", "Universities", "Visa"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/10/Study-in-UK-Complete-Guide.webp",
    featured: true,
    slug: "study-in-uk-complete-guide"
  },
  {
    id: "ielts-band-score-complete-guide",
    title: "IELTS Band Score: Complete Guide",
    excerpt: "Understanding IELTS band scores, scoring criteria, and tips to achieve your target score for study abroad applications.",
    category: "Test Preparation",
    author: "Path Visa Consultants",
    date: "October 10, 2024", 
    readTime: "10 min",
    views: 2800,
    tags: ["IELTS", "Test Preparation", "Study Abroad"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/10/IELTS-Band-Score-Complete-Guide.webp",
    featured: false,
    slug: "ielts-band-score-complete-guide"
  },
  {
    id: "study-in-canada-complete-guide",
    title: "Study in Canada: Complete Guide for International Students",
    excerpt: "Comprehensive guide to studying in Canada including top universities, admission requirements, costs, and visa process.",
    category: "Study Abroad",
    author: "Path Visa Consultants",
    date: "October 8, 2024",
    readTime: "15 min", 
    views: 4100,
    tags: ["Canada", "Study Abroad", "Universities", "Immigration"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/10/Study-in-Canada-Complete-Guide.webp",
    featured: true,
    slug: "study-in-canada-complete-guide"
  },
  {
    id: "ms-in-business-analytics-course-in-usa",
    title: "MS in Business Analytics Course in USA",
    excerpt: "Complete guide to pursuing Master's in Business Analytics in the United States - top universities, requirements, and career prospects.",
    category: "Study Abroad",
    author: "Path Visa Consultants",
    date: "October 5, 2024",
    readTime: "13 min",
    views: 3500,
    tags: ["USA", "Masters", "Business Analytics", "Study Abroad"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/10/MS-in-Business-Analytics-Course-in-USA.webp",
    featured: false,
    slug: "ms-in-business-analytics-course-in-usa"
  },
  {
    id: "study-in-australia-guide",
    title: "Study in Australia: Complete Guide for Pakistani Students",
    excerpt: "Everything about studying in Australia - universities, costs, visa requirements, and living as an international student.",
    category: "Study Abroad",
    author: "Path Visa Consultants",
    date: "October 3, 2024",
    readTime: "14 min",
    views: 3800,
    tags: ["Australia", "Study Abroad", "Universities", "Visa"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/10/Study-in-Australia-Guide.webp",
    featured: true,
    slug: "study-in-australia-guide"
  },
  {
    id: "global-talent-visa-uk",
    title: "Global Talent Visa UK: Complete Application Guide",
    excerpt: "Comprehensive guide to UK Global Talent Visa application process, requirements, and benefits for skilled professionals.",
    category: "Visa & Immigration",
    author: "Path Visa Consultants",
    date: "October 1, 2024",
    readTime: "11 min",
    views: 2700,
    tags: ["UK", "Visa", "Immigration", "Global Talent"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/10/Global-Talent-Visa-UK.webp",
    featured: false,
    slug: "global-talent-visa-uk"
  },
  {
    id: "study-in-finland-guide",
    title: "Study in Finland: Guide for International Students",
    excerpt: "Complete guide to studying in Finland - free education, top universities, living costs, and visa requirements.",
    category: "Study Abroad",
    author: "Path Visa Consultants",
    date: "September 28, 2024",
    readTime: "12 min",
    views: 3100,
    tags: ["Finland", "Study Abroad", "Universities", "Europe"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/09/Study-in-Finland-Guide.webp",
    featured: true,
    slug: "study-in-finland-guide"
  },
  {
    id: "requirements-to-study-computer-science-in-usa",
    title: "Requirements to Study Computer Science in USA",
    excerpt: "Complete guide to admission requirements, eligibility criteria, costs, and top universities for CS programs in America.",
    category: "Study Abroad",
    author: "Path Visa Consultants",
    date: "September 25, 2024",
    readTime: "16 min",
    views: 4500,
    tags: ["USA", "Computer Science", "Universities", "Requirements"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/09/Requirements-to-Study-Computer-Science-in-USA.webp",
    featured: true,
    slug: "requirements-to-study-computer-science-in-usa"
  },
  {
    id: "study-in-turkey-guide",
    title: "Study in Turkey: Complete Guide for Pakistani Students",
    excerpt: "Everything about studying in Turkey - universities, scholarships, costs, culture, and student life for Pakistani students.",
    category: "Study Abroad",
    author: "Path Visa Consultants",
    date: "September 22, 2024",
    readTime: "13 min",
    views: 3600,
    tags: ["Turkey", "Study Abroad", "Universities", "Scholarships"],
    image: "https://dunyaconsultants.com/wp-content/uploads/2024/09/Study-in-Turkey-Guide.webp",
    featured: false,
    slug: "study-in-turkey-guide"
  }
];

export default function BlogsCarouselSection() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Fetch blog posts from API (same as blog page)
  const { data: blogPostsData } = useQuery({
    queryKey: ['/api/blog-posts'],
    queryFn: async () => {
      const response = await fetch('/api/blog-posts');
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      return response.json();
    }
  });

  // Transform API data to component format (same as blog page)
  const blogPosts = blogPostsData ? blogPostsData.map((post: any) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category || "Study Guides",
    author: "Path Visa Consultants",
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
    image: post.featured_image || post.featuredImage,
    featured: false,
    slug: post.slug
  })) : staticBlogPosts;

  // Get latest 10 blogs
  const latestBlogs = blogPosts.slice(0, 10);

  // Duplicate the blogs for infinite scroll effect
  const duplicatedBlogs = [...latestBlogs, ...latestBlogs];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    
    const animate = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 0.5; // Slow scroll speed
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D50C9] mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, guides, and tips for your study abroad journey. 
            From visa applications to university admissions, we've got you covered.
          </p>
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-hidden"
            style={{
              scrollBehavior: 'smooth',
              width: '100%'
            }}
          >
            {duplicatedBlogs.map((post, index) => (
              <motion.div
                key={`${post.id}-${index}`}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={post.slug.includes('/') ? `/blog/${post.slug}` : `/blog/${post.slug}`}>
                  <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full rounded-lg overflow-hidden">
                    
                    {/* Featured Image with Overlay */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image.startsWith('http') || post.image.startsWith('/attached_assets/') ? post.image : `/attached_assets/${post.image}`} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          onError={(e) => {
                            // Fallback to a default placeholder or hide image on error
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        
                        {/* Blue Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9]/90 via-[#1D50C9]/80 to-[#1845B3]/90"></div>
                        
                        {/* Company Branding */}
                        <div className="absolute top-4 left-4">
                          <div className="text-white font-bold text-lg tracking-wide">
                            DUNYA
                          </div>
                        </div>
                        
                        {/* Title Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">
                            {post.title.toUpperCase()}
                          </h3>
                        </div>
                      </div>
                    )}

                    <CardContent className="p-4">
                      
                      {/* Category Badge */}
                      <div className="mb-3">
                        <Badge variant="secondary" className="bg-[#1D50C9] text-white text-xs px-2 py-1">
                          {post.category}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        {/* Read More Link */}
                        <div className="flex items-center text-[#1D50C9] font-medium hover:text-[#1845B3] transition-colors">
                          <span className="text-xs">Read More</span>
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}