import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, Eye, ArrowRight, Tag, ChevronDown, ChevronUp, Share2, Facebook, X, Linkedin, Share, Instagram, Calculator, List } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import ConsultationBookingSection from "@/components/consultation-booking-section";
import { getBlogUrl, extractTableOfContents, addHeadingIds, TOCItem } from "@/lib/blog-utils";

// Unified image src normalization function
const normalizeImageSrc = (image: string) => {
  if (!image || image.trim() === '') {
    return '/attached_assets/placeholder.jpg'; // fallback for empty images
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
    slug: "2024/10/15/gre-test-fee-in-pakistan",
    content: `Do you want to show your best educational as well as analytical skills across several international countries? If yes, then this GRE Test in Pakistan is a perfect option for you. Several countries from worldwide check the logical reasoning, analytical capabilities, and critical thinking of international students via this test. ETS takes the graduate record examination or GRE.

The head office of ETS is located in the United States of America. However, it has branches in approximately 160 countries. If you are not aware of the GRE test fee in Pakistan or the process to register for the test, this complete guide is for you. Those who are interested in applying in an international country or want to get details about the importance of the GRE test can reach out to our experts at Dunya Consultants and book your consultation services.

## What is GRE (Graduate Record Examination)?

The graduate record examination general test or GRE is made for those students who are planning to apply to different graduate programs. This test identifies your abilities in some vital areas, including your skills to analyze data and solve mathematical problems, your ability to understand and understand written texts, and your expertise in presenting your ideas in written form.

Furthermore, colleges and universities use the GRE scores, along with other application sections, to check your eligibility for their graduate programs.

## Why GRE Test is Important?

You might have heard this question: why Pakistani students should attempt GRE test? Remember that the GRE is a vital component of the university admissions process. Based on your test scores, the admissions officers decide whether you are capable of admission.

In addition, high GRE scores can improve your application by showing your willingness for challenging educational work. High scores will also impact your chances of getting financial aid or scholarships. Some well-developed businesses use this to check job candidates, specifically for jobs that require high analytical and critical thinking skills.

## GRE General Test Fee in Pakistan

In Pakistan, the GRE test fee is around 220 dollars. The GRE test fee in Pakistani rupees is around sixty-one thousand. Remember that payment is only accepted through PKR. Furthermore, you can visit the official website of ETS to get info about graduate record examination dates or the new GRE test format.

Let's discuss other average costs linked with the graduate record examination general test in Pakistan:

- Additional Score Reports – around twenty-seven USD per applicant
- GRE General Test Fee – around 220 dollars
- Changing Test Center – around fifty dollars
- Rescheduling Fee: around fifty dollars

## New GRE Test Format

The GRE (graduate record examination) General Test is available in two different formats, as mentioned below. Remember that proper test preparation is very important for getting good scores.

### Paper-Based GRE Test

The paper-based GRE Test is only provided in sites where the computer-based GRE test is not provided. It is usually taken a few times a year.

### Computer-Based GRE Test

The computer-based GRE Test is accessible year-round at different testing centers all around the world. This format provides several test dates and shows your test scores instantly after the test.

## Steps to Register for GRE Test in Pakistan

The entire GRE registration process is quite simple and can be done online through the Educational Testing Service (ETS) website. Here is a step-by-step guide for you to enroll for a GRE test in Pakistan:

1. First, make an account on the official website of the ETS. Your full name, phone number, home address, and email ID are some of the details you will need to provide.
2. Choose whether you are willing to take the Subject Test or a General Test for the GRE. The Subject Test checks knowledge in a specific area, while the General Test assesses numeric reasoning, verbal thinking, and analytical writing skills.
3. Select a testing facility in your country from available sites. You need to choose a center according to your ease and the availability of graduate record examination dates.
4. When you have decided about the test day and site, you need to pay the test fee with your credit/debit card or another accepted mode of payment.
5. Once you have paid the test fee, you will receive a confirmation email from ETS with details about the test time, day, and location. Always check the email's info to ensure it is appropriate.

## Conclusion

For Pakistani students who are willing to be admitted to universities to study courses like law, finance, medicine, or engineering, the GRE (graduate record examination) test is highly recommended. There are so many benefits of GRE test for Pakistani students that they cannot ignore. Your chances of getting admission can automatically be improved if you get high scores on the GRE test. Furthermore, the fee for taking the GRE test is somewhat high in Pakistan. But it is a good option for you since it will open new opportunities for your future.`
  }
];

// This will be defined inside the component where blogPosts is available

// Helper function to parse content into sections
function parseContentToSections(content: string) {
  if (!content) return [];
  
  const lines = content.split('\n');
  const sections: Array<{id: string, title: string, content: string}> = [];
  let currentSection: {id: string, title: string, content: string} | null = null;
  let insideHTMLTable = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Check if we're starting an HTML table
    if (trimmedLine.startsWith('<div class="overflow-x-auto">')) {
      insideHTMLTable = true;
      if (currentSection) {
        currentSection.content += line + '\n';
      }
      continue;
    }
    
    // Check if we're ending an HTML table
    if (insideHTMLTable && trimmedLine.includes('</div>')) {
      insideHTMLTable = false;
      if (currentSection) {
        currentSection.content += line + '\n';
      }
      continue;
    }
    
    // If inside HTML table, add all lines to preserve formatting
    if (insideHTMLTable) {
      if (currentSection) {
        currentSection.content += line + '\n';
      }
      continue;
    }
    
    if (trimmedLine.startsWith('##')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      
      let title = trimmedLine.replace(/^#+\s*/, '').replace(/#+/g, '').trim();
      const id = title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      currentSection = { id, title, content: '' };
    } else if (currentSection && trimmedLine) {
      currentSection.content += line + '\n';
    } else if (!currentSection && trimmedLine) {
      if (sections.length === 0) {
        currentSection = {
          id: 'introduction',
          title: 'Introduction',
          content: line + '\n'
        };
      }
    }
  }
  
  if (currentSection) {
    sections.push(currentSection);
  }
  
  return sections.filter(section => section.content.trim().length > 0);
}

// FAQ Component for collapsible questions
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item mb-1 border border-gray-200 rounded-lg overflow-hidden bg-white transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-question flex items-center justify-between w-full p-4 bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 text-sm">{question}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="faq-answer p-4 pt-0 bg-white border-t border-gray-100">
          {answer.split('\n').map((paragraph: string, index: number) => {
            if (paragraph.trim()) {
              return (
                <p key={index} className="text-gray-600 text-sm leading-relaxed mb-2 last:mb-0">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}

// Table of Contents Component
function TableOfContents({ content, isVisible = true }: { content: string; isVisible?: boolean }) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!content) return;
    
    const items = extractTableOfContents(content);
    setTocItems(items);
    
    // Add heading IDs to actual DOM elements after content is rendered
    const timeoutId = setTimeout(() => {
      const contentContainer = document.querySelector('.blog-content, .prose, article');
      if (contentContainer) {
        const headings = contentContainer.querySelectorAll('h2, h3');
        headings.forEach((heading, index) => {
          const text = heading.textContent?.trim() || '';
          if (text && !heading.id) {
            const matchingItem = items.find(item => item.text === text);
            if (matchingItem) {
              heading.id = matchingItem.id;
            }
          }
        });
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [content]);

  // Track active heading based on scroll position
  useEffect(() => {
    if (tocItems.length === 0) return;

    const handleScroll = () => {
      const headings = tocItems
        .map(item => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      
      if (headings.length === 0) return;

      const scrollPosition = window.scrollY + 100; // Offset for better UX
      
      let activeHeading = headings[0];
      for (const heading of headings) {
        if (heading.offsetTop <= scrollPosition) {
          activeHeading = heading;
        } else {
          break;
        }
      }
      
      setActiveId(activeHeading?.id || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const handleTocClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible || tocItems.length === 0) return null;

  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-sm font-semibold text-gray-900">
          <List className="w-4 h-4 mr-2 text-[#1D50C9]" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTocClick(item.id)}
              className={`
                block w-full text-left px-2 py-2 text-sm rounded-md transition-colors duration-200
                ${activeId === item.id 
                  ? 'bg-[#1D50C9]/10 text-[#1D50C9] font-medium border-l-2 border-[#1D50C9]' 
                  : 'text-gray-600 hover:text-[#1D50C9] hover:bg-gray-50'
                }
              `}
              style={{ 
                marginLeft: `${(item.level - 2) * 16}px`,
                fontSize: item.level === 2 ? '14px' : '13px'
              }}
              data-testid={`toc-item-${item.id}`}
            >
              {item.text}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}

// Blog Post Detail Component
function BlogPostDetail({ slug }: { slug: string }) {
  const [sidebarSearch, setSidebarSearch] = useState("");

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Blog Post - Path Visa Consultants';

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      instagram: `https://www.instagram.com/`,
      share: shareUrl
    };
    
    if (platform === 'share') {
      if (navigator.share) {
        navigator.share({
          title: shareTitle,
          url: shareUrl,
        }).catch(console.error);
      } else {
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      }
    } else if (platform === 'instagram') {
      window.open('https://www.instagram.com/', '_blank');
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  const relatedBlogsCarouselRef = useRef<HTMLDivElement>(null);
  
  // Fetch blog posts for detail view
  const { data: blogPostsData, isLoading } = useQuery({
    queryKey: ['/api/blog-posts'],
    queryFn: async () => {
      const response = await fetch('/api/blog-posts');
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      return response.json();
    }
  });

  // Transform API data to component format
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
    image: normalizeImageSrc(post.featuredImage || ''),
    featured: false,
    slug: post.slug,
    content: post.content,
    rawContent: post.content
  })) : staticBlogPosts;

  const blogPost = blogPosts.find((post: any) => post.slug === slug);

  // Get latest 5 blogs excluding the current blog (always run this)
  const relatedBlogs = blogPosts
    .filter((post: any) => post.slug !== slug) // Exclude current blog
    .slice(0, 5); // Get latest 5

  // Duplicate the blogs for infinite scroll effect
  const duplicatedRelatedBlogs = [...relatedBlogs, ...relatedBlogs];

  // Initialize FAQs for ALL blog content (always run this)
  useEffect(() => {
    // Wait for content to be rendered, then initialize FAQs
    const timeoutId = setTimeout(() => {
      const contentContainer = document.querySelector('.blog-content, .prose');
      if (contentContainer) {
        initializeFAQs(contentContainer as HTMLElement);
      }
      
      // Also check for any content sections that might have FAQs
      const allContentSections = document.querySelectorAll('[class*="prose"], .blog-content, .content-section');
      allContentSections.forEach(section => {
        initializeFAQs(section as HTMLElement);
      });
      
      // Additional force initialization for specific blog posts that need FAQ functionality
      const blogsThatNeedFAQs = ['ielts-vs-toefl-for-study-abroad', 'study-abroad-consultant-red-flags'];
      if (blogsThatNeedFAQs.includes(slug)) {
        setTimeout(() => {
          const body = document.body;
          initializeFAQs(body);
          // Force FAQ initialization for troublesome blog posts
          const strongElements = body.querySelectorAll('strong, b');
          strongElements.forEach((strong) => {
            const text = strong.textContent?.trim() || '';
            if (text.endsWith('?')) {
              const parent = strong.parentElement;
              if (parent && parent.tagName === 'P') {
                let nextP = parent.nextElementSibling;
                let attempts = 0;
                while (nextP && !nextP.textContent?.trim() && attempts < 3) {
                  nextP = nextP.nextElementSibling;
                  attempts++;
                }
                if (nextP && nextP.tagName === 'P' && nextP.textContent?.trim()) {
                  const nextText = nextP.textContent?.trim() || '';
                  if (!nextText.endsWith('?')) {
                    convertToFAQStructure(parent as HTMLElement, nextP as HTMLElement);
                  }
                }
              }
            }
          });
        }, 500);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [blogPost?.content, slug]); // Re-run when content changes

  // Infinite scroll animation for related blogs (always call this hook)
  useEffect(() => {
    const carousel = relatedBlogsCarouselRef.current;
    if (!carousel) return;

    // Wait for content to load and measure
    const startAnimation = () => {
      if (carousel.scrollWidth <= carousel.clientWidth) {
        // If content doesn't exceed container, no need to animate
        return;
      }

      let animationId: number;
      let isPaused = false;
      
      const animate = () => {
        if (!isPaused && carousel) {
          // Reset scroll position when we reach halfway point (since we duplicated content)
          if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
          } else {
            carousel.scrollLeft += 1; // Smooth scroll speed
          }
        }
        animationId = requestAnimationFrame(animate);
      };

      // Start animation
      animationId = requestAnimationFrame(animate);

      // Pause on hover
      const handleMouseEnter = () => {
        isPaused = true;
      };

      const handleMouseLeave = () => {
        isPaused = false;
      };

      if (carousel) {
        carousel.addEventListener('mouseenter', handleMouseEnter);
        carousel.addEventListener('mouseleave', handleMouseLeave);
      }

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        if (carousel) {
          carousel.removeEventListener('mouseenter', handleMouseEnter);
          carousel.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    };

    // Small delay to ensure content is rendered
    const timeoutId = setTimeout(startAnimation, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [duplicatedRelatedBlogs]);

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Show not found only after data has loaded and blog post doesn't exist
  if (!blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-[#1D50C9] hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Parse content based on format
  let contentSections: any[] = [];
  let isHTMLContent = false;
  
  // Check if content is HTML (starts with HTML tags)
  if (blogPost.content && (blogPost.content.startsWith('<') || blogPost.content.includes('<p>'))) {
    isHTMLContent = true;
    // For HTML content, create a single section to render as HTML
    contentSections = [{
      id: 'content',
      title: '',
      content: blogPost.content
    }];
  } else if (typeof blogPost.rawContent === 'string' && blogPost.rawContent.startsWith('{')) {
    try {
      const parsedContent = JSON.parse(blogPost.rawContent);
      if (parsedContent.sections) {
        contentSections = parsedContent.sections
          .filter((section: any) => section.title.trim() !== '') // Filter out empty titles
          .map((section: any, index: number) => ({
            id: `section-${index}`,
            title: section.title.replace(/^#+\s*/, '').replace(/#+/g, ''),
            content: section.content
          }));
      } else {
        contentSections = parseContentToSections(blogPost.content);
      }
    } catch {
      contentSections = parseContentToSections(blogPost.content);
    }
  } else {
    contentSections = parseContentToSections(blogPost.content);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section - Same style as other pages */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white">
                <Tag className="w-4 h-4 mr-2" />
                {blogPost.category}
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold mb-6 leading-tight text-white"
              style={{ fontSize: '48px' }}
            >
              {blogPost.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center space-x-6 text-blue-200"
            >
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{blogPost.date}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              
              {/* Featured Image */}
              {blogPost.image && (
                <div className="relative">
                  <img 
                    src={normalizeImageSrc(blogPost.image)}
                    alt={blogPost.title}
                    className="w-full h-auto"
                    onError={(e) => {
                      const img = e.currentTarget;
                      const originalSrc = img.src;
                      
                      // Try different extensions if not already tried
                      if (!img.dataset.retryCount) {
                        img.dataset.retryCount = '0';
                      }
                      
                      const retryCount = parseInt(img.dataset.retryCount);
                      const basePath = originalSrc.replace(/\.[^/.]+$/, '');
                      const extensions = ['.png', '.jpg', '.jpeg', '.webp'];
                      
                      if (retryCount < extensions.length) {
                        const newSrc = basePath + extensions[retryCount];
                        img.dataset.retryCount = String(retryCount + 1);
                        img.src = newSrc;
                        return;
                      }
                      
                      // Try uploads API as final fallback
                      if (retryCount === extensions.length) {
                        const filename = originalSrc.split('/').pop()?.replace(/\.[^/.]+$/, '') + '.jpg';
                        img.dataset.retryCount = String(retryCount + 1);
                        img.src = `/api/uploads/${filename}`;
                        return;
                      }
                      
                      // Hide image after all attempts failed
                      img.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              )}

              {/* Content Container */}
              <div className="p-8 lg:p-12">
                
                {/* Article Header */}
                <header className="mb-10">
                  <div className="flex items-center gap-2 mb-6">
                    {blogPost.tags.slice(0, 2).map((tag: string, index: number) => (
                      <Badge key={index} className="bg-[#1D50C9] text-white px-3 py-1.5 text-sm font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#1D50C9]/5 via-blue-50/50 to-transparent rounded-xl p-8 border-l-4 border-[#1D50C9]">
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                      {blogPost.excerpt}
                    </p>
                  </div>
                </header>

                {/* Blog Content */}
                <div className="prose prose-xl max-w-none">
                  {/* Handle HTML content or regular intro sections */}
                  {isHTMLContent ? (
                    <div 
                      className="blog-content prose prose-xl max-w-none" 
                      dangerouslySetInnerHTML={{ __html: contentSections[0]?.content || '' }}
                      ref={(el) => {
                        // Initialize FAQ functionality after content is rendered
                        if (el) {
                          setTimeout(() => {
                            initializeFAQs(el);
                          }, 100);
                        }
                      }}
                    />
                  ) : contentSections.length > 0 && contentSections[0] && !contentSections[0].title && (
                    <div className="bg-gradient-to-r from-[#1D50C9]/10 via-[#1D50C9]/5 to-transparent border-l-4 border-[#1D50C9] rounded-lg p-6 mb-8">
                      <div className="text-gray-700 leading-relaxed">
                        {contentSections[0].content.split('\n').map((paragraph: string, pIndex: number) => {
                          if (paragraph.trim()) {
                            // Check if the paragraph contains HTML links
                            const hasHtmlLinks = /<a\s+[^>]*href[^>]*>/.test(paragraph);
                            
                            if (hasHtmlLinks) {
                              return (
                                <p key={pIndex} className="text-gray-700 leading-relaxed text-base mb-3 last:mb-0" dangerouslySetInnerHTML={{ __html: paragraph }} />
                              );
                            } else {
                              return (
                                <p key={pIndex} className="text-gray-700 leading-relaxed text-base mb-3 last:mb-0">
                                  {paragraph}
                                </p>
                              );
                            }
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* Regular Content Sections */}
                  {contentSections.filter((section: any, index: number) => {
                    // Skip first section if it's the intro (no title)
                    if (index === 0 && !section.title) return false;
                    // Skip sections where title is just "Atlas University" without meaningful content
                    if (section.title.trim() === 'Atlas University' && (!section.content || section.content.trim().length === 0)) {
                      return false;
                    }
                    // Skip duplicate university sections that are standalone
                    const duplicateUniversitySections = [
                      'Aydin University',
                      'Atlas University', 
                      'Istinye University',
                      'Altinbas University',
                      'Beykent University',
                      'Bahcesehir University'
                    ];
                    
                    // Check if this is a standalone university section that duplicates table content
                    if (duplicateUniversitySections.includes(section.title.trim())) {
                      // Allow it only if it's part of the structured table content (contains proper intro text)
                      const hasProperIntro = section.content && (
                        section.content.includes('Located in Istanbul') ||
                        section.content.includes('In 2015') ||
                        section.content.includes('In 2008') ||
                        section.content.includes('Another name') ||
                        section.content.includes('Bahçeşehir University')
                      );
                      if (!hasProperIntro) {
                        return false;
                      }
                    }
                    
                    // Skip sections with Aydin University duplicate content
                    if (section.content && section.content.includes('Istanbul Aydın University was created on 18th May 2007')) {
                      return false;
                    }
                    
                    // Skip the specific h2 element with text "Which engineering has the highest scope in Pakistan?"
                    if (section.title && section.title.trim() === 'Which engineering has the highest scope in Pakistan?') {
                      return false;
                    }
                    
                    // Skip the section with title "Which university is best for BS Artificial Intelligence in Pakistan?"
                    if (section.title && section.title.trim() === 'Which university is best for BS Artificial Intelligence in Pakistan?') {
                      return false;
                    }
                    
                    // Skip the section with title "Is there a data science scope in Pakistan?"
                    if (section.title && section.title.trim() === 'Is there a data science scope in Pakistan?') {
                      return false;
                    }
                    
                    // Skip any broken FAQ sections with jumbled HTML content
                    if (section.title && section.title.toLowerCase().includes('frequently asked questions') && 
                        section.content && section.content.includes('What services do Dunya Consultants provide')) {
                      return false;
                    }
                    
                    // Skip the main FAQ section with "Frequently Asked Questions" title
                    if (section.title && section.title.toLowerCase().includes('frequently asked questions')) {
                      return false;
                    }
                    
                    return section.title && section.title.trim() !== '';
                  }).map((section: any, index: number) => {
                    // Special handling for intro-before-main section
                    if (section.title === 'intro-before-main') {
                      return (
                        <div key={index} className="mb-8">
                          <div className="text-gray-700 leading-relaxed">
                            {section.content.split('\n').map((paragraph: string, pIndex: number) => {
                              if (paragraph.trim()) {
                                return (
                                  <p key={pIndex} className="text-gray-700 leading-relaxed text-base mb-4 last:mb-0">
                                    {(() => {
                                      // Parse markdown-style formatting
                                      let processedParagraph = paragraph
                                        // Handle bold text **text** -> <strong>text</strong>
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        // Handle markdown links [text](url) -> <a href="url">text</a>
                                        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
                                      
                                      return (
                                        <span className="blog-content" dangerouslySetInnerHTML={{ __html: processedParagraph }} />
                                      );
                                    })()}
                                  </p>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      );
                    }
                    // Check if this is an FAQ section or a question that should be rendered as FAQ
                    const isFAQSection = section.title.toLowerCase().includes('faq') || 
                                       section.title.toLowerCase().includes('frequently asked questions');
                    const isQuestionSection = section.title && section.title.includes('?');
                    const nextSections = contentSections.slice(contentSections.indexOf(section) + 1);
                    
                    // Handle explicit FAQ sections
                    if (isFAQSection) {
                      // Parse FAQ content properly
                      let faqItems: Array<{question: string, answer: string}> = [];
                      
                      // If this section has content, parse it for FAQ items
                      if (section.content && section.content.trim() !== '') {
                        const lines = section.content.split('\n').filter((line: string) => line.trim());
                        for (let i = 0; i < lines.length; i++) {
                          const trimmed = lines[i].trim();
                          // Look for question patterns
                          if (trimmed.includes('?')) {
                            const question = trimmed.replace(/^\*\*|\*\*$/g, '').replace(/^#+\s*/, '');
                            let answer = '';
                            // Get answer from next lines until we hit another question or end
                            for (let j = i + 1; j < lines.length; j++) {
                              const nextLine = lines[j].trim();
                              if (nextLine.includes('?') && !nextLine.includes('answer')) {
                                break;
                              }
                              if (nextLine && !nextLine.startsWith('**')) {
                                answer += nextLine + '\n';
                              }
                            }
                            if (answer.trim()) {
                              faqItems.push({ question, answer: answer.trim() });
                            }
                          }
                        }
                      }
                      
                      // If no FAQ items found in content, look at following sections
                      if (faqItems.length === 0) {
                        const faqSections = nextSections.filter((nextSection: any) => 
                          nextSection.title && nextSection.title.includes('?') && nextSection.content.trim() !== ''
                        ).slice(0, 10); // Limit to reasonable number
                        
                        faqItems = faqSections.map((faqSection: any) => ({
                          question: faqSection.title,
                          answer: faqSection.content
                        }));
                      }
                      
                      if (faqItems.length > 0) {
                        return (
                          <section key={index} id={section.id} className="mb-8 faq-section">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                              FAQs
                            </h2>
                            <div className="space-y-1">
                              {faqItems.map((faqItem: any, faqIndex: number) => (
                                <FAQItem 
                                  key={faqIndex}
                                  question={faqItem.question}
                                  answer={faqItem.answer}
                                />
                              ))}
                            </div>
                          </section>
                        );
                      }
                    }
                    
                    // Check if we're in a group of question sections that should be rendered as FAQs
                    if (isQuestionSection) {
                      // Look for other question sections around this one to group them as FAQs
                      const questionSections: any[] = [];
                      let startIndex = index;
                      
                      // Find the start of question group (look backwards)
                      while (startIndex > 0 && contentSections[startIndex - 1].title && contentSections[startIndex - 1].title.includes('?')) {
                        startIndex--;
                      }
                      
                      // Collect all consecutive question sections
                      let currentIndex = startIndex;
                      while (currentIndex < contentSections.length && 
                             contentSections[currentIndex].title && 
                             contentSections[currentIndex].title.includes('?') &&
                             contentSections[currentIndex].content.trim() !== '') {
                        questionSections.push(contentSections[currentIndex]);
                        currentIndex++;
                      }
                      
                      // If we have multiple questions or specific FAQ-type questions, render as FAQ group
                      if (slug !== 'top-study-abroad-countries' && (questionSections.length > 1 || 
                          section.title.includes('What is the issue rate of UK student visas?') ||
                          section.title.includes('Is it difficult to get a UK student visa from Pakistan?') ||
                          section.title.includes('What is the UK student visa ratio from Pakistan?') ||
                          section.title.includes('What is the acceptance rate for the Türkiye Scholarships Burslari?') ||
                          section.title.includes('Is there an age limit for Turkey burslari scholarship?') ||
                          section.title.includes('How much of a stipend is granted for a Burslari scholarship in Turkey?') ||
                          section.title.includes('Can I get a fee waiver for the SAT in Pakistan?') ||
                          section.title.includes('How much is the SAT exam fee in Pakistan?') ||
                          section.title.includes('How can I prepare for the SAT in Pakistan as a beginner?') ||
                          section.title === 'What services do Dunya Consultants provide as study abroad consultants in Pakistan?' ||
                          section.title === 'Which countries and universities can Dunya Consultants help me apply to?' ||
                          section.title === 'Do Dunya Consultants provide IELTS coaching and test preparation?' ||
                          section.title === 'How do Dunya Consultants support student visa applications and interview preparation?' ||
                          section.title === 'What is Dunya Consultants\' track record and why should I trust them?' ||
                          section.title.includes('How can I contact Dunya Consultants?'))) {
                        
                        // Skip FAQ sections entirely - no rendering
                        return null;
                      }
                    }
                    
                    // Skip FAQ answer sections as they're handled above
                    if (index > 0) {
                      const prevSection = contentSections[contentSections.indexOf(section) - 1];
                      if (prevSection && prevSection.title.toLowerCase().includes('faq') && prevSection.content.trim() === '') {
                        return null;
                      }
                    }
                    
                    // Skip all FAQ sections and individual question-based sections, except for top-study-abroad-countries
                    if (slug !== 'top-study-abroad-countries' && section.title && (
                        section.title.toLowerCase().includes('faq') ||
                        section.title.toLowerCase().includes('frequently asked questions') ||
                        section.title.includes('What is the issue rate of UK student visas?') ||
                        section.title.includes('Is it difficult to get a UK student visa from Pakistan?') ||
                        section.title.includes('What is the UK student visa ratio from Pakistan?') ||
                        section.title.includes('What is the acceptance rate for the Türkiye Scholarships Burslari?') ||
                        section.title.includes('Is there an age limit for Turkey burslari scholarship?') ||
                        section.title.includes('How much of a stipend is granted for a Burslari scholarship in Turkey?') ||
                        section.title.includes('Can I get a fee waiver for the SAT in Pakistan?') ||
                        section.title.includes('How much is the SAT exam fee in Pakistan?') ||
                        section.title.includes('How can I prepare for the SAT in Pakistan as a beginner?') ||
                        section.title === 'What services do Dunya Consultants provide as study abroad consultants in Pakistan?' ||
                        section.title === 'Which countries and universities can Dunya Consultants help me apply to?' ||
                        section.title === 'Do Dunya Consultants provide IELTS coaching and test preparation?' ||
                        section.title === 'How do Dunya Consultants support student visa applications and interview preparation?' ||
                        section.title === 'What is Dunya Consultants\' track record and why should I trust them?' ||
                        section.title.includes('How can I contact Dunya Consultants?') ||
                        section.title === 'Atlas University' ||
                        section.title === 'Istinye University' ||
                        section.title === 'Altinbas University' ||
                        section.title === 'Beykent University' ||
                        section.title === 'Aydin University' ||
                        section.title === 'Bahcesehir University'
                    )) {
                      return null;
                    }
                    
                    return (
                      <section 
                        key={index} 
                        id={section.id} 
                        className="mb-8 content-section"
                        ref={(el) => {
                          if (el) {
                            setTimeout(() => initializeFAQs(el), 100);
                          }
                        }}
                      >
                        {section.title && (
                          (() => {
                            const cleanTitle = section.title.replace(/^#+\s*/, '');
                            // Check if the title contains HTML links
                            const hasHtmlLinks = /<a\s+[^>]*href[^>]*>/.test(cleanTitle);
                            
                            // For top-study-abroad-countries, use h2 for numbered headings and h3 for sub-headings
                            if (slug === 'top-study-abroad-countries') {
                              const isNumberedHeading = /^\d+\./.test(cleanTitle);
                              const isSubHeading = cleanTitle.includes('Why ') || cleanTitle.includes('Real Example');
                              
                              if (isNumberedHeading) {
                                // Numbered countries are h2
                                return (
                                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                    {hasHtmlLinks ? 
                                      <span dangerouslySetInnerHTML={{ __html: cleanTitle }} /> : 
                                      cleanTitle
                                    }
                                  </h2>
                                );
                              } else if (isSubHeading) {
                                // Sub-headings are h3
                                return (
                                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {hasHtmlLinks ? 
                                      <span dangerouslySetInnerHTML={{ __html: cleanTitle }} /> : 
                                      cleanTitle
                                    }
                                  </h3>
                                );
                              }
                            }
                            
                            // For how-to-apply-for-student-visa, properly handle h2 and h3 based on document structure
                            if (slug === 'how-to-apply-for-student-visa') {
                              // These should be h3 (subsections)
                              const h3Sections = [
                                'Pick your country and course',
                                'Build a simple timeline',
                                '1) Shortlist and apply to universities',
                                '2) Secure your offer and confirm acceptance',
                                '3) Pay the tuition deposit if required',
                                '4) Prepare financial proof',
                                '5) Gather the full document set',
                                '6) Complete the online visa application',
                                '7) Book biometrics and, if required, the interview',
                                '8) Track your application',
                                '9) Get the decision and check the details',
                                '10) Book travel and housing, then attend pre-departure',
                                'United Kingdom',
                                'Sweden',
                                'Finland',
                                'Turkey',
                                'Cyprus',
                                'Germany',
                                'Belgium',
                                'United States',
                                'Canada',
                                'Australia',
                                'Cost buckets to plan',
                                'Sample timeline (generic)'
                              ];
                              
                              const isH3 = h3Sections.includes(cleanTitle);
                              
                              if (isH3) {
                                // Sub-sections are h3
                                return (
                                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {hasHtmlLinks ? 
                                      <span dangerouslySetInnerHTML={{ __html: cleanTitle }} /> : 
                                      cleanTitle
                                    }
                                  </h3>
                                );
                              }
                            }
                            
                            // For best-uk-study-visa-consultants, properly handle h2 and h3 based on document structure
                            if (slug === 'best-uk-study-visa-consultants') {
                              // These should be h3 (subsections)
                              const h3Sections = [
                                'What is on a CAS',
                                'CAS checklist before you request it',
                                'Common CAS delays',
                                'Core fees you will pay',
                                'Living cost plan',
                                'Payment methods and tips',
                                'Identity and academics',
                                'Educational documents',
                                'University and course',
                                'Language and tests',
                                'Financial evidence',
                                'Compliance and extras',
                                'Create and complete your GOV.UK application',
                                'Biometrics at the Visa Application Centre',
                                'Processing times',
                                'Typical questions',
                                'How to answer well',
                                'Red flags to avoid',
                                'A structure that works',
                                'Good lines you can adapt',
                                '6–8 months before intake',
                                '5–6 months before intake',
                                '4–5 months before intake',
                                '3–4 months before intake',
                                '2–3 months before intake',
                                'After approval'
                              ];
                              
                              const isH3 = h3Sections.includes(cleanTitle);
                              
                              if (isH3) {
                                // Sub-sections are h3
                                return (
                                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {hasHtmlLinks ? 
                                      <span dangerouslySetInnerHTML={{ __html: cleanTitle }} /> : 
                                      cleanTitle
                                    }
                                  </h3>
                                );
                              }
                            }
                            
                            // Default h2 for all other blogs
                            return (
                              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                {hasHtmlLinks ? 
                                  <span dangerouslySetInnerHTML={{ __html: cleanTitle }} /> : 
                                  cleanTitle
                                }
                              </h2>
                            );
                          })()
                        )}
                        <div>
                          {/* Allow FAQs for specific blog posts, skip for others */}
                          {section.title.toLowerCase().includes('faq') ? (
                            // Only show FAQs for the cheapest countries blog post
                            slug === 'top-study-abroad-countries' ? (
                              <div className="space-y-4">
                                {(() => {
                                  const lines = section.content.split('\n').filter((line: any) => line.trim());
                                  const faqs: Array<{question: string, answer: string}> = [];
                                  
                                  for (let i = 0; i < lines.length; i++) {
                                    const trimmed = lines[i].trim();
                                    if (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.includes('?')) {
                                      const question = trimmed.replace(/^\*\*|\*\*$/g, '');
                                      const answer = lines[i + 1] ? lines[i + 1].trim() : '';
                                      faqs.push({ question, answer });
                                    }
                                  }
                                  
                                  return faqs.map((faq, index) => (
                                    <FAQItem 
                                      key={index}
                                      question={faq.question}
                                      answer={faq.answer}
                                    />
                                  ));
                                })()}
                              </div>
                            ) : null
                          ) : (
                            // For this specific blog post with table content, render HTML directly
                            slug === 'top-study-abroad-countries' && section.content.includes('<table') ? (
                              <div className="text-gray-700 leading-relaxed"
                                   dangerouslySetInnerHTML={{ __html: section.content }} 
                              />
                            ) : 
                            // Handle country cards for how-to-apply-for-student-visa blog in Country notes section
                            slug === 'how-to-apply-for-student-visa' && section.title === 'Country notes' ? (
                              (() => {
                                // Parse countries from the content
                                const countries = [
                                  {
                                    name: 'United Kingdom',
                                    visaName: 'Student route',
                                    keyProof: 'CAS, tuition deposit receipt as applicable, financial evidence, language test',
                                    work: 'Usually allowed part-time in term and full-time during breaks, subject to visa rules',
                                    links: 'UKVI, UCAS'
                                  },
                                  {
                                    name: 'Sweden',
                                    portal: 'Migrationsverket',
                                    keyProof: 'Admission, financial means, insurance, housing details if asked',
                                    work: 'Part-time work allowed within limits',
                                    links: 'Study in Sweden'
                                  },
                                  {
                                    name: 'Finland',
                                    portal: 'Enter Finland',
                                    keyProof: 'Admission, financial means, insurance',
                                    work: 'Part-time within national limits',
                                    links: 'Migri, Studyinfo.fi, Study in Finland'
                                  },
                                  {
                                    name: 'Turkey',
                                    process: 'Admission first, then visa appointment through the Turkish system',
                                    keyProof: 'Offer letter, financial means, accommodation plan',
                                    work: 'Options vary by city and program rules',
                                    links: 'YÖK Atlas, official consular site'
                                  },
                                  {
                                    name: 'Cyprus',
                                    process: 'Offer letter, visa application via embassy or college guidance',
                                    keyProof: 'Financial means and health checks as requested',
                                    work: 'Limited roles depending on rules',
                                    links: 'Official university pages, embassy guidance'
                                  },
                                  {
                                    name: 'Germany',
                                    portal: 'Embassy appointment plus online steps. Many programs use Uni-Assist',
                                    keyProof: 'Admission, blocked account or other acceptable proof, insurance',
                                    work: 'Limited part-time hours per year',
                                    links: 'DAAD, Uni-Assist'
                                  },
                                  {
                                    name: 'Belgium',
                                    process: 'Long-stay student category via embassy',
                                    keyProof: 'Admission, financial means, insurance, housing',
                                    work: 'Part-time options available with limits',
                                    links: 'Study in Flanders'
                                  },
                                  {
                                    name: 'United States',
                                    visaName: 'F-1',
                                    keyProof: 'I-20, SEVIS fee receipt, financial evidence, intent to study',
                                    interview: 'Usually required',
                                    work: 'On-campus during studies, other options have rules',
                                    links: 'EducationUSA, official consular site'
                                  },
                                  {
                                    name: 'Australia',
                                    portal: 'ImmiAccount',
                                    keyProof: 'COE, OSHC, financial means, GTE-style statements as required',
                                    work: 'Part-time during studies within national limits',
                                    links: 'Study in Australia, Department of Home Affairs'
                                  }
                                ];

                                return (
                                  <div>
                                    {/* Section summary */}
                                    <p className="text-gray-700 leading-relaxed text-base mb-6">
                                      Each destination has its own form names, portals, and typical proofs. Always check the latest guidance.
                                    </p>
                                    
                                    {/* Country Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                      {countries.map((country, index) => (
                                        <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                          <h3 className="text-lg font-bold text-[#1D50C9] mb-4 border-b border-blue-200 pb-2">
                                            {country.name}
                                          </h3>
                                          <div className="space-y-3 text-sm">
                                            {country.visaName && (
                                              <div>
                                                <span className="font-semibold text-gray-800">Visa name: </span>
                                                <span className="text-gray-700">{country.visaName}</span>
                                              </div>
                                            )}
                                            {country.portal && (
                                              <div>
                                                <span className="font-semibold text-gray-800">Portal: </span>
                                                <span className="text-gray-700">{country.portal}</span>
                                              </div>
                                            )}
                                            {country.process && (
                                              <div>
                                                <span className="font-semibold text-gray-800">Process: </span>
                                                <span className="text-gray-700">{country.process}</span>
                                              </div>
                                            )}
                                            <div>
                                              <span className="font-semibold text-gray-800">Key proof: </span>
                                              <span className="text-gray-700">{country.keyProof}</span>
                                            </div>
                                            {country.interview && (
                                              <div>
                                                <span className="font-semibold text-gray-800">Interview: </span>
                                                <span className="text-gray-700">{country.interview}</span>
                                              </div>
                                            )}
                                            <div>
                                              <span className="font-semibold text-gray-800">Work: </span>
                                              <span className="text-gray-700">{country.work}</span>
                                            </div>
                                            <div>
                                              <span className="font-semibold text-gray-800">Useful links: </span>
                                              <span className="text-gray-700">{country.links}</span>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    
                                    {/* Note at the bottom */}
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                                      <p className="text-sm text-gray-700">
                                        <span className="font-semibold">Note:</span> Policies change. Always confirm the latest rules on the official websites before you apply.
                                      </p>
                                    </div>
                                  </div>
                                );
                              })()
                            ) : 
                            // Handle intake cards for Canada student visa blog
                            slug === 'canada-student-visa-consultants' && section.content.includes('INTAKE_CARDS_START') ? (
                              (() => {
                                const startMarker = section.content.indexOf('**INTAKE_CARDS_START**');
                                const endMarker = section.content.indexOf('**INTAKE_CARDS_END**');
                                
                                if (startMarker !== -1 && endMarker !== -1) {
                                  const beforeCards = section.content.substring(0, startMarker);
                                  const cardsContent = section.content.substring(startMarker + 23, endMarker);
                                  const afterCards = section.content.substring(endMarker + 21);
                                  
                                  const intakeSteps = cardsContent.split('**').filter((step: string) => step.trim()).reduce((acc: Array<{title: string, content: string}>, current: string, index: number) => {
                                    if (index % 2 === 0) {
                                      acc.push({ title: current.trim(), content: '' });
                                    } else {
                                      if (acc.length > 0) {
                                        acc[acc.length - 1].content = current.trim();
                                      }
                                    }
                                    return acc;
                                  }, [] as Array<{title: string, content: string}>);

                                  return (
                                    <div>
                                      {/* Before cards content */}
                                      {beforeCards.split('\n').map((paragraph: string, pIndex: number) => {
                                        if (paragraph.trim()) {
                                          const processedText = paragraph
                                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
                                            .trim();
                                          return (
                                            <p key={pIndex} className="text-gray-700 leading-relaxed text-base mb-3 blog-content" dangerouslySetInnerHTML={{ __html: processedText }} />
                                          );
                                        }
                                        return null;
                                      })}
                                      
                                      {/* Intake Cards */}
                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                                        {intakeSteps.map((intake: {title: string, content: string}, intakeIndex: number) => (
                                          <div key={intakeIndex} className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                            <h3 className="text-lg font-bold text-[#1D50C9] mb-4 border-b border-indigo-200 pb-2">
                                              {intake.title}
                                            </h3>
                                            <div className="space-y-3">
                                              {intake.content.split('\n').filter((line: string) => line.trim()).map((line: string, lineIndex: number) => {
                                                if (line.trim().startsWith('-')) {
                                                  return (
                                                    <div key={lineIndex} className="flex items-start">
                                                      <span className="text-[#1D50C9] mr-2 text-sm leading-none mt-1">•</span>
                                                      <span className="text-gray-700 text-sm leading-relaxed">
                                                        {line.replace(/^[-•]\s*/, '')}
                                                      </span>
                                                    </div>
                                                  );
                                                } else {
                                                  return (
                                                    <p key={lineIndex} className="text-gray-600 text-sm leading-relaxed mb-2">
                                                      {line}
                                                    </p>
                                                  );
                                                }
                                              })}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                      
                                      {/* After cards content */}
                                      {afterCards.split('\n').map((paragraph: string, pIndex: number) => {
                                        if (paragraph.trim()) {
                                          const processedText = paragraph
                                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
                                            .trim();
                                          return (
                                            <p key={pIndex} className="text-gray-700 leading-relaxed text-base mb-3 blog-content" dangerouslySetInnerHTML={{ __html: processedText }} />
                                          );
                                        }
                                        return null;
                                      })}
                                    </div>
                                  );
                                }
                                return null;
                              })()
                            ) : 
                            // Handle intake cards for UK student visa blog (includes requirements box)
                            slug === 'best-uk-study-visa-consultants' && section.content.includes('INTAKE_CARDS_START') ? (
                              (() => {
                                const startMarker = section.content.indexOf('**INTAKE_CARDS_START**');
                                const endMarker = section.content.indexOf('**INTAKE_CARDS_END**');
                                
                                if (startMarker !== -1 && endMarker !== -1) {
                                  const beforeCards = section.content.substring(0, startMarker);
                                  const cardsContent = section.content.substring(startMarker + 23, endMarker);
                                  const afterCards = section.content.substring(endMarker + 21);
                                  
                                  const intakeSteps = cardsContent.split('**').filter((step: string) => step.trim()).reduce((acc: Array<{title: string, content: string}>, current: string, index: number) => {
                                    if (index % 2 === 0) {
                                      acc.push({ title: current.trim(), content: '' });
                                    } else {
                                      if (acc.length > 0) {
                                        acc[acc.length - 1].content = current.trim();
                                      }
                                    }
                                    return acc;
                                  }, [] as Array<{title: string, content: string}>);

                                  // Check for requirements box in afterCards content
                                  const reqStartMarker = afterCards.indexOf('**REQUIREMENTS_BOX_START**');
                                  const reqEndMarker = afterCards.indexOf('**REQUIREMENTS_BOX_END**');

                                  return (
                                    <div>
                                      {/* Before cards content */}
                                      {beforeCards.split('\n').map((paragraph: string, pIndex: number) => {
                                        if (paragraph.trim()) {
                                          const processedText = paragraph
                                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
                                            .trim();
                                          return (
                                            <p key={pIndex} className="text-gray-700 leading-relaxed text-base mb-3 blog-content" dangerouslySetInnerHTML={{ __html: processedText }} />
                                          );
                                        }
                                        return null;
                                      })}
                                      
                                      {/* Intake Cards */}
                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                                        {intakeSteps.map((intake: {title: string, content: string}, intakeIndex: number) => (
                                          <div key={intakeIndex} className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                            <h3 className="text-lg font-bold text-[#1D50C9] mb-4 border-b border-indigo-200 pb-2">
                                              {intake.title}
                                            </h3>
                                            <div className="space-y-2">
                                              {intake.content.split('\n').filter((line: string) => line.trim()).map((line: string, lineIndex: number) => {
                                                if (line.startsWith('- ')) {
                                                  return (
                                                    <div key={lineIndex} className="flex items-start">
                                                      <span className="text-[#1D50C9] mr-2 text-sm leading-none mt-1">•</span>
                                                      <span className="text-gray-700 text-sm leading-relaxed">
                                                        {line.substring(2)}
                                                      </span>
                                                    </div>
                                                  );
                                                } else {
                                                  return (
                                                    <p key={lineIndex} className="text-gray-600 text-sm leading-relaxed mb-2">
                                                      {line}
                                                    </p>
                                                  );
                                                }
                                              })}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                      
                                      {/* Simplified section rendering */}
                                      {(() => {
                                        // Check for special handling cases
                                        if (slug === 'canada-student-visa-consultants' && section.content.includes('TIMELINE_CARDS_START')) {
                                          return (
                                            <div>
                                              <p className="text-gray-700 leading-relaxed text-base mb-3">
                                                {section.content}
                                              </p>
                                            </div>
                                          );
                                        }
                                        
                                        // Default case for all sections
                                        return (
                                          <div>
                                            <p className="text-gray-700 leading-relaxed text-base mb-3">
                                              {section.content}
                                            </p>
                                          </div>
                                        );
                                      })()}
                                    </div>
                                  );
                                }
                                return null;
                              })()
                            ) : (
                              // Default case for all other blog posts
                              <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6" id={section.id}>
                                  {section.title}
                                </h2>
                                <div className="text-gray-700 leading-relaxed">
                                  {section.content.split('\n').map((paragraph: string, pIndex: number) => {
                                    if (paragraph.trim()) {
                                      return (
                                        <p key={pIndex} className="mb-4 text-base leading-relaxed">
                                          {paragraph}
                                        </p>
                                      );
                                    }
                                    return null;
                                  })}
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </section>
                </footer>

              </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4 lg:space-y-6">
              
              {/* Table of Contents */}
              <TableOfContents content={blogPost.content} />
              
              {/* Search Bar */}
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-[#1D50C9]">Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search..."
                      value={sidebarSearch}
                      onChange={(e) => setSidebarSearch(e.target.value)}
                      className="pl-10"
                    />
                    {sidebarSearch && (
                      <div className="mt-3 p-2 bg-gray-50 rounded text-sm text-gray-600">
                        <Link href={`/blog?search=${encodeURIComponent(sidebarSearch)}`} className="text-[#1D50C9] hover:underline">
                          Search for "{sidebarSearch}" →
                        </Link>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Share Buttons */}
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-[#1D50C9]">
                    Share This Article
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-start gap-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                      title="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                    <button
                      onClick={() => handleShare('x')}
                      className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                      title="Share on X"
                    >
                      <X className="w-4 h-4 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                    <button
                      onClick={() => handleShare('instagram')}
                      className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                      title="Share on Instagram"
                    >
                      <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('share')}
                      className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                      title="Share"
                    >
                      <Share className="w-4 h-4 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                  </div>
                </CardContent>
              </Card>

              

                {/* Quick Cost Calculator - Only for exchange programs post */}
                {(slug.includes("exchange-programs-for-pakistani-students")) && (
                  <div className="mb-6">
                    <Card className="bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] text-white border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg flex items-center">
                          <Calculator className="w-5 h-5 mr-2" />
                          Quick Cost Calculator
                        </CardTitle>
                        <p className="text-blue-100 text-sm">Get an instant estimate of your study abroad costs</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <Label className="text-blue-100 text-sm mb-2 block">Country</Label>
                            <Select>
                              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                <SelectValue placeholder="Select Country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="canada">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="usa">United States</SelectItem>
                                <SelectItem value="australia">Australia</SelectItem>
                                <SelectItem value="germany">Germany</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-blue-100 text-sm mb-2 block">Study Level</Label>
                            <Select>
                              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                <SelectValue placeholder="Select Level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                                <SelectItem value="postgraduate">Postgraduate</SelectItem>
                                <SelectItem value="diploma">Diploma</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-blue-100 text-sm mb-2 block">Duration</Label>
                            <Select>
                              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                <SelectValue placeholder="Years" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 Year</SelectItem>
                                <SelectItem value="2">2 Years</SelectItem>
                                <SelectItem value="3">3 Years</SelectItem>
                                <SelectItem value="4">4 Years</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 mt-4">
                            Calculate
                          </Button>
                          <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/20">
                            <span className="text-blue-100 text-sm">Estimated Total:</span>
                            <span className="text-white font-bold">$45,000 - $65,000</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Contact Box */}
                <div>
                  <Card className="bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] text-white border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl">Need Help?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-100 text-sm mb-4">
                        Get personalized guidance for your study abroad journey
                      </p>
                      <Link href="/contact">
                        <Button className="w-full bg-white text-[#1D50C9] hover:bg-blue-50">
                          Contact Us
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}

// Force FAQ initialization for specific blog posts
const forceFAQInitialization = (container: HTMLElement) => {
  // More aggressive FAQ detection for troublesome blog posts
  const strongElements = container.querySelectorAll('strong, b');
  
  strongElements.forEach((strong, index) => {
    const text = strong.textContent?.trim() || '';
    
    // Check if this looks like a question (ends with ?)
    if (text.endsWith('?')) {
      const parent = strong.parentElement;
      if (parent && parent.tagName === 'P') {
        // Find the next paragraph as the answer
        let nextP = parent.nextElementSibling;
        let attempts = 0;
        
        // Skip empty elements
        while (nextP && !nextP.textContent?.trim() && attempts < 3) {
          nextP = nextP.nextElementSibling;
          attempts++;
        }
        
        if (nextP && nextP.tagName === 'P' && nextP.textContent?.trim()) {
          // Don't convert if the next paragraph also ends with ?
          const nextText = nextP.textContent?.trim() || '';
          if (!nextText.endsWith('?')) {
            convertToFAQStructure(parent as HTMLElement, nextP as HTMLElement);
          }
        }
      }
    }
  });
  
  // Also look for any h3/h4 that end with ? followed by paragraphs
  const headings = container.querySelectorAll('h3, h4, h5');
  headings.forEach(heading => {
    const text = heading.textContent?.trim() || '';
    if (text.endsWith('?')) {
      let nextElement = heading.nextElementSibling;
      let attempts = 0;
      
      // Skip empty elements
      while (nextElement && !nextElement.textContent?.trim() && attempts < 3) {
        nextElement = nextElement.nextElementSibling;
        attempts++;
      }
      
      if (nextElement && (nextElement.tagName === 'P' || nextElement.tagName === 'DIV') && nextElement.textContent?.trim()) {
        const nextText = nextElement.textContent?.trim() || '';
        if (!nextText.endsWith('?')) {
          convertToFAQStructure(heading as HTMLElement, nextElement as HTMLElement);
        }
      }
    }
  });
};

// Enhanced FAQ initialization function
const initializeFAQs = (container: HTMLElement) => {
  if (!container) return;
  
  // Prevent multiple initialization on the same container
  if (container.dataset.faqInitialized === 'true') return;
  container.dataset.faqInitialized = 'true';
  
  // Method 1: Handle existing .faq-question elements
  const faqQuestions = container.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    setupFAQHandler(question as HTMLElement);
  });
  
  // Method 2: Auto-detect FAQ patterns and convert them
  autoDetectAndConvertFAQs(container);
  
  // Method 3: Handle simple numbered questions
  convertNumberedQuestionsToFAQs(container);
  
  // Method 4: Look for any text content with FAQ patterns and convert
  detectTextFAQs(container);
};

const setupFAQHandler = (question: HTMLElement) => {
  // Remove any existing listeners to prevent duplicates
  const existingHandler = (question as any).__faqHandler;
  if (existingHandler) {
    question.removeEventListener('click', existingHandler);
  }
  
  // Create new handler
  const handler = () => {
    const answer = question.nextElementSibling as HTMLElement;
    const chevron = question.querySelector('.faq-chevron') as HTMLElement;

    if (answer && (answer.classList.contains('faq-answer') || answer.classList.contains('answer'))) {
      const isVisible = answer.style.display === 'block' || answer.style.maxHeight !== '0px';
      
      if (isVisible) {
        answer.style.display = 'none';
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        if (chevron) chevron.classList.remove('expanded');
        question.classList.remove('expanded');
      } else {
        answer.style.display = 'block';
        answer.style.maxHeight = '1000px';
        answer.style.opacity = '1';
        if (chevron) chevron.classList.add('expanded');
        question.classList.add('expanded');
      }
    }
  };
  
  // Store handler reference and add listener
  (question as any).__faqHandler = handler;
  question.addEventListener('click', handler);
  question.style.cursor = 'pointer';
  
  // Add chevron if it doesn't exist
  if (!question.querySelector('.faq-chevron')) {
    const chevron = document.createElement('svg');
    chevron.className = 'faq-chevron';
    chevron.innerHTML = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/>';
    chevron.setAttribute('viewBox', '0 0 24 24');
    chevron.setAttribute('fill', 'none');
    question.appendChild(chevron);
  }
};

const autoDetectAndConvertFAQs = (container: HTMLElement) => {
  // Look for h3/h4 elements that contain question words followed by p elements
  const headings = container.querySelectorAll('h3, h4, .question');
  
  headings.forEach(heading => {
    const text = heading.textContent?.toLowerCase() || '';
    const isQuestion = text.includes('?') || 
                      text.match(/^(what|how|why|when|where|who|can|do|does|is|are|will|would|should)/);
    
    if (isQuestion) {
      const nextElement = heading.nextElementSibling;
      if (nextElement && (nextElement.tagName === 'P' || nextElement.tagName === 'DIV')) {
        // Convert to FAQ structure
        convertToFAQStructure(heading as HTMLElement, nextElement as HTMLElement);
      }
    }
  });
};

const convertNumberedQuestionsToFAQs = (container: HTMLElement) => {
  // Look for numbered questions like "1. Question?" or bold numbered questions "**1. Question?**"
  const allElements = container.querySelectorAll('p, div, strong, b, h3, h4, h5, h6, span');
  
  allElements.forEach(element => {
    const text = element.textContent?.trim() || '';
    const innerHTML = element.innerHTML?.trim() || '';
    
    // Match various FAQ question patterns (enhanced detection):
    const patterns = [
      /^\*?\*?\d+\.\s*.+\?\*?\*?/, // **1. Question?** or 1. Question?
      /^Q\d*[:.]?\s*.+\?/,         // Q1: Question? or Q. Question?
      /^\d+\)\s*.+\?/,             // 1) Question?
      /^Question\s*\d*[:.]?\s*.+\?/, // Question 1: text?
      /^FAQ\s*\d*[:.]?\s*.+\?/     // FAQ 1: text?
    ];
    
    const isNumberedQuestion = patterns.some(pattern => text.match(pattern)) ||
                              (innerHTML.includes('<strong>') && text.match(/^\d+\.\s*.+\?/)) ||
                              (element.tagName.match(/^(STRONG|B)$/) && text.match(/^\d+\.\s*.+\?/));
    
    if (isNumberedQuestion && !element.classList.contains('faq-question')) {
      // Look for the answer in the next sibling or next few siblings
      let nextElement = element.nextElementSibling;
      
      // Skip empty elements and find the actual answer
      let attempts = 0;
      while (nextElement && !nextElement.textContent?.trim() && attempts < 3) {
        nextElement = nextElement.nextElementSibling;
        attempts++;
      }
      
      if (nextElement && 
          (nextElement.tagName === 'P' || nextElement.tagName === 'DIV') && 
          nextElement.textContent?.trim() && 
          !patterns.some(pattern => nextElement.textContent?.trim().match(pattern))) {
        
        // If the question element is inside a <strong> or <b>, use its parent
        const questionElement = element.tagName.match(/^(STRONG|B)$/) ? 
          element.parentElement as HTMLElement : element as HTMLElement;
        
        if (questionElement && questionElement !== nextElement) {
          convertToFAQStructure(questionElement, nextElement as HTMLElement);
        }
      }
    }
  });
};

const convertToFAQStructure = (questionElement: HTMLElement, answerElement: HTMLElement) => {
  // Skip if already converted
  if (questionElement.classList.contains('faq-question')) return;
  
  // Create FAQ wrapper
  const faqWrapper = document.createElement('div');
  faqWrapper.className = 'faq-item';
  faqWrapper.style.cssText = `
    margin-bottom: 0.25rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    overflow: hidden;
    background: white;
    transition: all 0.2s ease;
  `;
  
  // Setup question element
  questionElement.className = 'faq-question';
  questionElement.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 1.5rem;
    background: white;
    border: none;
    cursor: pointer;
    font-weight: 500;
    color: #111827;
    font-size: 0.875rem;
    line-height: 1.5;
    text-align: left;
    transition: background-color 0.2s ease;
  `;
  
  // Setup answer element
  answerElement.className = 'faq-answer';
  answerElement.style.cssText = `
    display: none;
    padding: 0 1.5rem 1rem 1.5rem;
    background: white;
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.5;
    border-top: 1px solid #f3f4f6;
    margin: 0;
    max-height: 0px;
    opacity: 0;
    transition: all 0.3s ease;
    overflow: hidden;
  `;
  
  // Insert wrapper before question
  questionElement.parentNode?.insertBefore(faqWrapper, questionElement);
  
  // Move elements into wrapper
  faqWrapper.appendChild(questionElement);
  faqWrapper.appendChild(answerElement);
  
  // Setup click handler
  setupFAQHandler(questionElement);
};

// New method to detect FAQ patterns in text content
const detectTextFAQs = (container: HTMLElement) => {
  const textContent = container.innerHTML || '';
  
  // Look for FAQ patterns in HTML content like **1. Question?**
  const faqPattern = /<strong>\s*\d+\.\s*([^<]*\?)\s*<\/strong>/gi;
  let matches = textContent.match(faqPattern);
  
  if (matches && matches.length > 1) {
    // If we found multiple FAQ-style questions, create a proper FAQ section
    let faqSection = '<div class="faq-section"><h2>FAQs</h2>';
    
    // Replace each match with proper FAQ structure
    let updatedContent = textContent;
    matches.forEach((match, index) => {
      const questionMatch = match.match(/<strong>\s*\d+\.\s*([^<]*\?)\s*<\/strong>/i);
      if (questionMatch) {
        const question = questionMatch[1];
        const faqItem = `
          <div class="faq-item" style="margin-bottom: 0.25rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background: white; transition: all 0.2s ease;">
            <div class="faq-question" style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 1rem 1.5rem; background: white; border: none; cursor: pointer; font-weight: 500; color: #111827; font-size: 0.875rem; line-height: 1.5; text-align: left; transition: background-color 0.2s ease;">
              <span>${question}</span>
              <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" style="width: 1rem; height: 1rem; color: #6b7280; transition: transform 0.2s ease; flex-shrink: 0; margin-left: 0.75rem;">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/>
              </svg>
            </div>
            <div class="faq-answer" style="display: none; padding: 0 1.5rem 1rem 1.5rem; background: white; color: #6b7280; font-size: 0.875rem; line-height: 1.5; border-top: 1px solid #f3f4f6; margin: 0; max-height: 0px; opacity: 0; transition: all 0.3s ease; overflow: hidden;">
              <p style="margin: 0; padding-top: 0.5rem;">Click to add answer...</p>
            </div>
          </div>
        `;
        updatedContent = updatedContent.replace(match, faqItem);
      }
    });
    
    faqSection += '</div>';
    
    if (updatedContent !== textContent) {
      container.innerHTML = updatedContent;
    }
  }
};

// Main Blog Component
export default function Blog() {
  const [match, params] = useRoute("/:year/:month/:day/:slug");
  const [simpleMatch, simpleParams] = useRoute("/blog/:slug");
  const [directMatch, directParams] = useRoute("/:slug");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayCount, setDisplayCount] = useState(12); // Show 12 blogs initially

  // Fetch blog posts from API
  const { data: blogPostsData, isLoading } = useQuery({
    queryKey: ['/api/blog-posts'],
    queryFn: async () => {
      const response = await fetch('/api/blog-posts');
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      return response.json();
    }
  });

  // Transform API data to component format
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
    image: normalizeImageSrc(post.featuredImage || ''),
    featured: false,
    slug: post.slug,
    sortDate: (() => {
      // Extract date from slug for sorting (format: YYYY/MM/DD/slug)
      const slugParts = post.slug.split('/');
      if (slugParts.length >= 3) {
        const year = slugParts[0];
        const month = slugParts[1];
        const day = slugParts[2];
        return new Date(`${year}-${month}-${day}`);
      }
      // Fallback to created_at if available
      const dateStr = post.publishedAt || post.published_at || post.created_at;
      return dateStr ? new Date(dateStr) : new Date('1970-01-01');
    })()
  })).sort((a: any, b: any) => {
    // Sort by date descending (newest first)
    return b.sortDate.getTime() - a.sortDate.getTime();
  }) : staticBlogPosts;

  // Categories for filtering
  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "General", count: blogPosts.filter((p: any) => p.category === "General").length },
    { name: "Study Guides", count: blogPosts.filter((p: any) => p.category === "Study Guides").length },
    { name: "Test Preparation", count: blogPosts.filter((p: any) => p.category === "Test Preparation").length },
  ].filter(cat => cat.count > 0);

  // If we're viewing a specific blog post
  if (match && params) {
    const slug = `${params.year}/${params.month}/${params.day}/${params.slug}`;
    return <BlogPostDetail slug={slug} />;
  }
  
  // Handle simple slug format (for older posts)
  if (simpleMatch && simpleParams) {
    return <BlogPostDetail slug={simpleParams.slug} />;
  }
  
  // Handle direct slug format (backward compatibility)
  if (directMatch && directParams) {
    // Find blog post that ends with this slug
    const post = blogPosts.find((p: any) => p.slug.endsWith(directParams.slug));
    if (post) {
      return <BlogPostDetail slug={post.slug} />;
    }
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading blog posts...</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post: any) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some((tag: any) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get posts to display based on current displayCount
  const postsToDisplay = filteredPosts.slice(0, displayCount);
  const hasMorePosts = filteredPosts.length > displayCount;

  // Load more function
  const loadMorePosts = () => {
    setDisplayCount(prev => prev + 3); // Show 3 more posts each time
  };

  // Reset displayCount when search or category changes
  const resetPagination = () => {
    setDisplayCount(12);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section - Same style as other pages */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >Study Abroad Blogs</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Expert insights, tips, and guides for your international education journey
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    resetPagination();
                  }}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category.name);
                  resetPagination();
                }}
                className="mb-2"
              >
{category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {postsToDisplay.map((post: any, index: number) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={getBlogUrl(post.slug)}>
                <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                  
                  {/* Featured Image */}
                  {post.image && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={normalizeImageSrc(post.image)}
                        alt={post.title}
                        className="w-full h-56 object-cover transition-transform hover:scale-105"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        onError={(e) => {
                          const img = e.currentTarget;
                          const originalSrc = img.src;
                          
                          // Try different extensions if not already tried
                          if (!img.dataset.retryCount) {
                            img.dataset.retryCount = '0';
                          }
                          
                          const retryCount = parseInt(img.dataset.retryCount);
                          const basePath = originalSrc.replace(/\.[^/.]+$/, '');
                          const extensions = ['.png', '.jpg', '.jpeg', '.webp'];
                          
                          if (retryCount < extensions.length) {
                            const newSrc = basePath + extensions[retryCount];
                            img.dataset.retryCount = String(retryCount + 1);
                            img.src = newSrc;
                            return;
                          }
                          
                          // Try uploads API as final fallback
                          if (retryCount === extensions.length) {
                            const filename = originalSrc.split('/').pop()?.replace(/\.[^/.]+$/, '') + '.jpg';
                            img.dataset.retryCount = String(retryCount + 1);
                            img.src = `/api/uploads/${filename}`;
                            return;
                          }
                          
                          // Hide image after all attempts failed
                          img.style.display = 'none';
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

        {/* Load More Button */}
        {hasMorePosts && (
          <div className="text-center mt-12">
            <Button 
              onClick={loadMorePosts}
              size="lg"
              className="bg-[#1D50C9] hover:bg-[#1845B3] text-white px-8 py-3"
            >
              Load More
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}