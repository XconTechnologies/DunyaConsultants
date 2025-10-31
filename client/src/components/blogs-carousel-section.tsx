import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogUrl } from "@/lib/blog-utils";

// Unified image src normalization function (same as blog.tsx)
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

  // Production sync state (for development environment)
  const [useProductionData, setUseProductionData] = useState(false);

  // Fetch latest 10 blog posts from API for carousel with production sync option
  const { data: blogPostsData, refetch } = useQuery({
    queryKey: ['/api/blog-posts', { limit: 10, sync: useProductionData ? 'production' : 'local' }],
    queryFn: async () => {
      const syncParam = useProductionData ? '&sync=production' : '';
      const response = await fetch(`/api/blog-posts?limit=10${syncParam}`);
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
    author: post.authorName || "Path Visa Consultants",
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
    slug: post.slug
  })) : staticBlogPosts;

  // Get latest 10 blogs
  const latestBlogs = blogPosts.slice(0, 10);

  // Triple the blogs for truly seamless infinite scroll
  const duplicatedBlogs = [...latestBlogs, ...latestBlogs, ...latestBlogs];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let intervalId: NodeJS.Timeout;
    let isPaused = false;
    let isTransitioning = false;
    
    // Calculate card width including gap
    const getCardWidth = () => {
      const firstCard = carousel.querySelector('.blog-card');
      if (!firstCard) return window.innerWidth >= 768 ? 384 : 320; // w-96 or w-80 in pixels
      const cardWidth = firstCard.clientWidth;
      const gap = window.innerWidth >= 768 ? 24 : 16; // md:gap-6 or gap-4
      return cardWidth + gap;
    };

    // Start at the middle set (second copy) for seamless looping
    const initializePosition = () => {
      const cardWidth = getCardWidth();
      carousel.style.scrollBehavior = 'auto';
      carousel.scrollLeft = cardWidth * latestBlogs.length;
      setTimeout(() => {
        carousel.style.scrollBehavior = 'smooth';
      }, 100);
    };

    // Initialize position after a short delay to ensure layout is ready
    setTimeout(initializePosition, 150);

    const scrollToNextCard = () => {
      if (isPaused || isTransitioning) return;
      
      const cardWidth = getCardWidth();
      const singleSetWidth = cardWidth * latestBlogs.length;
      
      // Smooth scroll to next card
      carousel.scrollLeft += cardWidth;
      
      // Check if we're approaching the end of the second set
      // Reset position seamlessly during the scroll
      setTimeout(() => {
        const currentScroll = carousel.scrollLeft;
        const threshold = singleSetWidth * 2 - cardWidth;
        
        // If we've scrolled past the second set, jump to equivalent position in first set
        if (currentScroll >= threshold) {
          isTransitioning = true;
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = currentScroll - singleSetWidth;
          setTimeout(() => {
            carousel.style.scrollBehavior = 'smooth';
            isTransitioning = false;
          }, 50);
        }
        // If scrolled before first set, jump to equivalent position in second set
        else if (currentScroll < cardWidth) {
          isTransitioning = true;
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = currentScroll + singleSetWidth;
          setTimeout(() => {
            carousel.style.scrollBehavior = 'smooth';
            isTransitioning = false;
          }, 50);
        }
      }, 600); // Wait for scroll animation to complete
    };

    // Auto-scroll every 3.5 seconds (slightly longer for better UX)
    intervalId = setInterval(scrollToNextCard, 3500);

    // Pause on hover and touch
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    const handleTouchStart = () => {
      isPaused = true;
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        isPaused = false;
        // Check position after manual scroll
        const cardWidth = getCardWidth();
        const singleSetWidth = cardWidth * latestBlogs.length;
        const currentScroll = carousel.scrollLeft;
        
        if (currentScroll >= singleSetWidth * 2 - cardWidth) {
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = currentScroll - singleSetWidth;
          setTimeout(() => {
            carousel.style.scrollBehavior = 'smooth';
          }, 50);
        } else if (currentScroll < cardWidth) {
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = currentScroll + singleSetWidth;
          setTimeout(() => {
            carousel.style.scrollBehavior = 'smooth';
          }, 50);
        }
      }, 150);
    };

    // Handle window resize to recalculate positions
    const handleResize = () => {
      initializePosition();
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('resize', handleResize);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, [latestBlogs.length]);

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
            className="flex gap-4 md:gap-6 overflow-x-scroll scrollbar-hide will-change-scroll"
            style={{
              scrollBehavior: 'auto',
              width: '100%',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory'
            }}
          >
            {duplicatedBlogs.map((post, index) => (
              <motion.div
                key={`${post.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 blog-card"
                style={{
                  scrollSnapAlign: 'center'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.5) }}
              >
                <Link href={getBlogUrl(post.slug)}>
                  <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                    
                    {/* Featured Image - Exact same as blog page */}
                    {post.image && (
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img loading="lazy" 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-56 object-cover transition-transform hover:scale-105"
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          onError={(e) => {
                            e.currentTarget.src = '/attached_assets/generated_images/Blog_placeholder_image_201b6785.png';
                          }}
                        />
                      </div>
                    )}

                    <CardContent className="p-6">
                      
                      {/* Category Badge */}
                      <div className="mb-3">
                        <Badge variant="secondary" className="bg-[#1D50C9]/10 text-[#1D50C9]">
                          {post.category}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Information and Read More - Same Line */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        
                        {/* Read More Link */}
                        <div className="flex items-center text-[#1D50C9] font-medium">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Blogs Button - After Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <div className="inline-flex items-center bg-[#1D50C9] hover:bg-[#1845B3] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
              View All Blogs
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}