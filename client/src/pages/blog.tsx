import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, Eye, ArrowRight, Tag, ChevronDown, ChevronUp, Share2, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
      
      let title = trimmedLine.replace(/^##\s*/, '').trim();
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
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#1D50C9]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#1D50C9]" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4 text-gray-700 bg-gray-50 border-l border-r border-b border-gray-200 rounded-b-lg">
        <div className="pt-2">
          {answer.split('\n').map((paragraph: string, index: number) => {
            if (paragraph.trim()) {
              return (
                <p key={index} className="text-gray-700 leading-relaxed text-base mb-2 last:mb-0">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>
      </CollapsibleContent>
    </Collapsible>
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
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      copy: shareUrl
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  const relatedBlogsCarouselRef = useRef<HTMLDivElement>(null);

  const relatedBlogs = [
    {
      id: 'mbbs-in-uk-for-pakistani-students',
      title: 'MBBS in UK for Pakistani Students',
      excerpt: 'Complete guide to MBBS in UK for Pakistani students including eligibility requirements, admission process, fees, scholarships, and top medical universities.',
      category: 'Study Abroad',
      date: 'September 21, 2024',
      image: '/attached_assets/image_1755675204547.png',
      slug: '2024/09/21/mbbs-in-uk-for-pakistani-students'
    },
    {
      id: 'mbbs-in-germany-for-pakistani-students',
      title: 'MBBS in Germany for Pakistani Students | Admission Process & Fee Structure',
      excerpt: 'Complete guide to studying MBBS in Germany for Pakistani students including admission process, fee structure, eligibility requirements, and scholarship opportunities.',
      category: 'Study Abroad',
      date: 'October 5, 2024',
      image: '/attached_assets/image_1755674890474.png',
      slug: '2024/10/05/mbbs-in-germany-for-pakistani-students'
    },
    {
      id: 'how-to-get-scholarship-to-study-abroad-after-12th',
      title: 'How to Get a Scholarship to Study Abroad after 12th?',
      excerpt: 'Complete guide on how to get scholarship to study abroad after 12th including types of scholarships, application process, tips and tricks for international students.',
      category: 'Study Abroad',
      date: 'September 5, 2024',
      image: '/attached_assets/image_1755675582619.png',
      slug: '2024/09/05/how-to-get-scholarship-to-study-abroad-after-12th'
    },
    {
      id: 'bank-statement-for-uk-visa',
      title: 'Bank Statement for UK Visa: Complete Guide',
      excerpt: 'Complete guide to bank statement requirements for UK visa including documents needed, financial requirements, and tips to avoid visa refusal.',
      category: 'Visa Services',
      date: 'August 15, 2024',
      image: '/attached_assets/image_1755675870364.png',
      slug: '2024/08/15/bank-statement-for-uk-visa'
    },
    {
      id: 'exchange-programs-for-pakistani-students',
      title: 'Exchange Programs for Pakistani Students',
      excerpt: 'Complete guide to exchange programs for Pakistani students including types, popular programs like Fulbright, Erasmus+, YES, and application process.',
      category: 'Study Abroad',
      date: 'July 20, 2024',
      image: '/attached_assets/image_1755676067750.png',
      slug: '2024/07/20/exchange-programs-for-pakistani-students'
    }
  ];

  // Duplicate the blogs for infinite scroll effect
  const duplicatedRelatedBlogs = [...relatedBlogs, ...relatedBlogs];

  // Infinite scroll animation for related blogs
  useEffect(() => {
    const carousel = relatedBlogsCarouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let isPaused = false;
    
    const animate = () => {
      if (!isPaused) {
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
    image: post.featured_image || post.featuredImage,
    featured: false,
    slug: post.slug,
    content: post.content,
    rawContent: post.content
  })) : staticBlogPosts;

  const blogPost = blogPosts.find((post: any) => post.slug === slug);

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
  let contentSections;
  if (typeof blogPost.rawContent === 'string' && blogPost.rawContent.startsWith('{')) {
    try {
      const parsedContent = JSON.parse(blogPost.rawContent);
      if (parsedContent.sections) {
        contentSections = parsedContent.sections
          .filter((section: any) => section.title.trim() !== '') // Filter out empty titles
          .map((section: any, index: number) => ({
            id: `section-${index}`,
            title: section.title.replace(/^##\s*/, ''),
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
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{blogPost.readTime}</span>
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
                    src={blogPost.image.startsWith('http') || blogPost.image.startsWith('/attached_assets/') ? blogPost.image : `/attached_assets/${blogPost.image}`} 
                    alt={blogPost.title}
                    className="w-full h-auto"
                    onError={(e) => {
                      // Fallback to a default placeholder or hide image on error
                      e.currentTarget.style.display = 'none';
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
                  {/* Show Intro with Special Blue Box */}
                  {contentSections.length > 0 && contentSections[0] && !contentSections[0].title && (
                    <div className="bg-gradient-to-r from-[#1D50C9]/10 via-[#1D50C9]/5 to-transparent border-l-4 border-[#1D50C9] rounded-lg p-6 mb-8">
                      <div className="text-gray-700 leading-relaxed">
                        {contentSections[0].content.split('\n').map((paragraph: string, pIndex: number) => {
                          if (paragraph.trim()) {
                            return (
                              <p key={pIndex} className="text-gray-700 leading-relaxed text-base mb-3 last:mb-0">
                                {paragraph}
                              </p>
                            );
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
                                  <p 
                                    key={pIndex} 
                                    className="text-gray-700 leading-relaxed text-base mb-4 last:mb-0"
                                    dangerouslySetInnerHTML={{
                                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    }}
                                  />
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      );
                    }
                    // Check if this is an FAQ section
                    const isFAQSection = section.title.toLowerCase().includes('faq');
                    const nextSections = contentSections.slice(contentSections.indexOf(section) + 1);
                    
                    if (isFAQSection && section.content.trim() === '') {
                      // This is an FAQ header, render FAQs from following sections
                      const faqSections = nextSections.filter((nextSection: any) => 
                        nextSection.title && nextSection.content.trim() !== ''
                      );
                      
                      return (
                        <section key={index} id={section.id} className="mb-8">
                          <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {section.title.replace(/^#+\s*/, '')}
                          </h2>
                          <div className="space-y-4">
                            {faqSections.map((faqSection: any, faqIndex: number) => (
                              <FAQItem 
                                key={faqIndex}
                                question={faqSection.title}
                                answer={faqSection.content}
                              />
                            ))}
                          </div>
                        </section>
                      );
                    }
                    
                    // Skip FAQ answer sections as they're handled above
                    if (index > 0) {
                      const prevSection = contentSections[contentSections.indexOf(section) - 1];
                      if (prevSection && prevSection.title.toLowerCase().includes('faq') && prevSection.content.trim() === '') {
                        return null;
                      }
                    }
                    
                    // Skip individual FAQ sections that should be part of collapsible FAQs and duplicate university sections
                    if (section.title && (
                        section.title.includes('What is the issue rate of UK student visas?') ||
                        section.title.includes('Is it difficult to get a UK student visa from Pakistan?') ||
                        section.title.includes('What is the UK student visa ratio from Pakistan?') ||
                        section.title.includes('What is the acceptance rate for the Türkiye Scholarships Burslari?') ||
                        section.title.includes('Is there an age limit for Turkey burslari scholarship?') ||
                        section.title.includes('How much of a stipend is granted for a Burslari scholarship in Turkey?') ||
                        section.title.includes('Can I get a fee waiver for the SAT in Pakistan?') ||
                        section.title.includes('How much is the SAT exam fee in Pakistan?') ||
                        section.title.includes('How can I prepare for the SAT in Pakistan as a beginner?') ||
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
                      <section key={index} id={section.id} className="mb-8">
                        {section.title && (
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            {section.title.replace(/^#+\s*/, '')}
                          </h2>
                        )}
                        <div>
                          {/* Check if this section contains FAQ content */}
                          {section.title.toLowerCase().includes('faq') ? (
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
                          ) : (
                            section.content.split('\n').map((paragraph: string, pIndex: number) => {
                              if (paragraph.trim().startsWith('###')) {
                                return (
                                  <h3 key={pIndex} className="text-xl font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                                    <span className="w-6 h-6 bg-[#1D50C9]/10 rounded-lg flex items-center justify-center mr-3">
                                      <span className="w-1.5 h-1.5 bg-[#1D50C9] rounded-full"></span>
                                    </span>
                                    <span>{paragraph.replace(/^#+\s*/, '')}</span>
                                  </h3>
                                );
                              }
                              
                              if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('•')) {
                                return (
                                  <div key={pIndex} className="flex items-start leading-tight mb-2">
                                    <span className="text-[#1D50C9] mr-2 text-sm leading-none mt-1">•</span>
                                    <span 
                                      className="text-gray-700 text-base leading-tight"
                                      dangerouslySetInnerHTML={{
                                        __html: paragraph
                                          .replace(/^[-•]\s*/, '')
                                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                      }}
                                    />
                                  </div>
                                );
                              }
                              
                              // Skip FAQ questions and answers in regular content
                              if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**') && paragraph.includes('?')) {
                                return null;
                              }
                              
                              // Skip FAQ answer lines that follow **questions**
                              const prevParagraph = section.content.split('\n')[section.content.split('\n').indexOf(paragraph) - 1];
                              if (prevParagraph && prevParagraph.trim().startsWith('**') && prevParagraph.trim().endsWith('**') && prevParagraph.includes('?')) {
                                return null;
                              }

                              // Skip markdown table remnants
                              if (paragraph.trim().startsWith('|') && paragraph.includes('|')) {
                                return null;
                              }
                              
                              // Check for complete HTML table content and render it properly
                              if (paragraph.trim().startsWith('<div class="overflow-x-auto">') && paragraph.includes('</div>')) {
                                return (
                                  <div key={pIndex} className="my-6" dangerouslySetInnerHTML={{ __html: paragraph }} />
                                );
                              }
                              
                              // Skip individual HTML table lines that are part of a larger block
                              if (paragraph.trim().match(/^<(table|thead|tbody|tr|th|td)/i) || paragraph.trim().match(/<\/(table|thead|tbody|tr|th|td)>$/i)) {
                                return null;
                              }
                              
                              // Special handling for Statement of Purpose comparison table
                              if (section.title === 'A General SOP VS an SOP for Scholarship') {
                                // Show table only once for the section
                                if (pIndex === 0) {
                                  return (
                                    <div key={pIndex} className="my-6">
                                      <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                                          <thead>
                                            <tr className="bg-blue-50 dark:bg-blue-900">
                                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">General SOP</th>
                                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">SOP for Scholarship</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr className="bg-white dark:bg-gray-800">
                                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">A statement that is written to display your interest in a particular program.</td>
                                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">A statement to display the reasons for getting the scholarship.</td>
                                            </tr>
                                            <tr className="bg-gray-50 dark:bg-gray-700">
                                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">The purpose of writing it is to fulfill a requirement of an application process.</td>
                                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Its purpose is to communicate that how availing the scholarship will help the student to achieve his goals.</td>
                                            </tr>
                                            <tr className="bg-white dark:bg-gray-800">
                                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">The major focus of this is to explain the reason for selecting the reason for selecting a particular program.</td>
                                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">The major focus is to explain the financial circumstances and sustainability for the scholarship of that applicant.</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  );
                                }
                                // Skip all other content in this section since we only want the table
                                return null;
                              }
                            
                            // Check for Australia Universities table intro
                            if (paragraph.includes('Some of the cheapest universities in Australia for international students are as follows:')) {
                              return (
                                <div key={pIndex} className="my-6">
                                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                                    Some of the cheapest universities in Australia for international students are as follows:
                                  </p>
                                  <div className="overflow-x-auto">
                                    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                      <thead className="bg-[#1D50C9]/10">
                                        <tr>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Sr No.
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            University Name
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">1</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Swinburne University of Technology</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">2</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">The University of Queensland</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">3</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">The University of Adelaide</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">4</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">The University of Southern Queensland</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">5</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Bond University</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">6</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">The University of South Australia</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">7</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Macquarie University</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">8</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">The University of New South Wales</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              );
                            }
                            
                            // Check for IELTS Fee table intro
                            if (paragraph.includes('Here is the breakdown of IELTS test exam fee:')) {
                              return (
                                <div key={pIndex} className="my-6">
                                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                                    The IELTS fee in Pakistan is the same for both IELTS formats (General Training and Academic). Here is the breakdown of IELTS test exam fee:
                                  </p>
                                  <div className="overflow-x-auto">
                                    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                      <thead className="bg-[#1D50C9]/10">
                                        <tr>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Paper Bases
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            IELTS Fee (in USD)
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            IELTS Fee (in PKR)
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Computer-Based Module</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">205 USD</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Rs. 57,400</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Paper-Based Module</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">229 USD</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Rs. 63,800</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Computer-Based UKVI Test</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">185 USD</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Rs. 51,700</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Paper-Based UKVI Test</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">197 USD</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Rs. 55,000</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">IELTS Life Skills Test</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">143 USD</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Rs. 50,000</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              );
                            }
                            
                            // Check for UK Student Visa Types table intro
                            if (paragraph.includes('There are three main types of UK study visa for international students that are as follows:')) {
                              return (
                                <div key={pIndex} className="my-6">
                                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                                    There are three main types of UK study visa for international students that are as follows:
                                  </p>
                                  <div className="overflow-x-auto">
                                    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                      <thead className="bg-[#1D50C9]/10">
                                        <tr>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Sr. No
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Student Visa Type
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Who can Apply?
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">1</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Student route visa (Tier 4 General student visa)</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Those studying at a UK university course for more than six months or an English language course for more than eleven months.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">2</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Child Student visa</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Those who are under 18</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">3</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Short-term study visa</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">For English language courses that are less than twelve months</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              );
                            }

                            // Check for MOI Universities table intro
                            if (paragraph.includes('Here are some of the best private as well as public universities in UK that accept MOI instead of IELTS or PTE:')) {
                              return (
                                <div key={pIndex} className="my-6">
                                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                                    Are you searching for the UK cheap university for international student that accepts MOI? If yes, then you are at the right place. Here are some of the best private as well as public universities in UK that accept MOI instead of IELTS or PTE:
                                  </p>
                                  <div className="overflow-x-auto">
                                    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                      <thead className="bg-[#1D50C9]/10">
                                        <tr>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Sr. No
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            UK Universities
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">1</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Law (U Law)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">2</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Hertfordshire</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">3</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of South Wales</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">4</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Suffolk</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">5</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Nottingham Trent University</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">6</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Bangor University</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">7</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Leeds Metropolitan University (LMU)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">8</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Birmingham City University</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">9</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Portsmouth</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">10</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Stirling</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">11</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Wolverhampton</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">12</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Essex</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">13</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Cardiff Metropolitan University</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">14</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Central Lancashire</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">15</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Sunderland</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">16</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">St. Mary's University</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">17</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Edinburgh Napier University (ENU)</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              );
                            }
                            
                            // Check for Turkey Medical Universities table intro
                            if (paragraph.includes('Below given is the list of the top medical universities in Turkey:')) {
                              return (
                                <div key={pIndex} className="my-6">
                                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                                    In Turkey, the majority of the students are searching to get admission to universities with good status and low cost to continue their higher studies. If you are one of them, there is no need to worry. In addition to some high-end medical universities, there are several cheapest universities in Turkey for international students as well. Below given is the list of the top medical universities in Turkey:
                                  </p>
                                  <div className="overflow-x-auto">
                                    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                      <thead className="bg-[#1D50C9]/10">
                                        <tr>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Sr No.
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            University Name
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Located In
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">1</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Atlas University</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Istanbul, Hamidiye District</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">2</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Istinye University</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Istanbul</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">3</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Altinbas University</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Istanbul (Bakırköy, Bağcılar, Şişli)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">4</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Beykent University</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Istanbul (Büyükçekmece Campus)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">5</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Aydin University</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Istanbul (Halit Aydın Florya Yerleşkesi)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">6</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Bahcesehir University</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Istanbul (Bosporus)</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  
                                  <div className="mt-6 space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Atlas University</h3>
                                    <p className="text-gray-700 leading-relaxed text-base mb-3">
                                      Located in Istanbul, Turkey, Atlas University pays massive attention to medical departments and programs. The main campus of this university is known as the Vadi Campus and is situated in a very central location (Istanbul's Hamidiye District). Furthermore, this institute was founded by the Turkish Balkan Education Culture and Health Foundation in 2018.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                                      Its mission is to raise students who can make prominent contributions to the medical world. Their training program encourages individuals to educate people-oriented clinicians and doctors who can prioritize all health problems and provide practical solutions to deal with them. Atlas University also has a Medical Faculty Hospital called Medicine Hospital in Istanbul Bağcılar.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Istinye University</h3>
                                    <p className="text-gray-700 leading-relaxed text-base mb-3">
                                      In 2015, Istinye University was founded by the 21st Century Anatolian Foundation. International students want to study medicine in Turkey, İstinye University is a no. 1 choice among them. The Faculty of Medicine at this university allows students to get a high-quality education as well as prepares them for a successful medical career.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                                      The worldwide popularity of Istinye University is due to its modern facilities, beautiful campus, and diverse range of academic programs. Furthermore, the tuition charges for international students at this university can be between $4320 and $21600 yearly for the medical program, while the tuition charges for the Master's program are $5400 yearly.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Altinbas University</h3>
                                    <p className="text-gray-700 leading-relaxed text-base mb-3">
                                      In 2008, Altınbaş University was founded in Istanbul, Turkey as Istanbul Kemerburgaz University. In 2017, its name was changed to its current name. It is regarded as one of the top private universities in the country and is famous for offering medical and engineering programs. The institute has around three campuses located in Bakırköy, Bağcılar, and Şişli.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                                      Moreover, it has over 5000 international students from eighty-nine different nations. Altınbaş University is home to 3 graduate schools, nine undergraduate schools, and two vocational schools. Currently, it offers approximately 34 associate degree programs, 30 bachelor's degree programs, 6 PhD programs, and 28 master's degree programs.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Beykent University</h3>
                                    <p className="text-gray-700 leading-relaxed text-base mb-3">
                                      Another name on the list of best universities in Istanbul is Beykent University. The university offers various courses in English, Russian combined, and Turkish. Its Faculty of Medicine aims to train the best doctors to work according to scientific developments and conduct their research.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                                      Additionally, Beykent University was founded by Adem Çelik (Beykent Educational Foundation), and since then, it has had public legal status. The university started its educational journey in 1997 – 1998 on Büyükçekmece Campus. It provides education on four well-furnished campuses situated in central areas of Istanbul.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Aydin University</h3>
                                    <p className="text-gray-700 leading-relaxed text-base mb-3">
                                      Istanbul Aydın University was created on 18th May 2007. It is a private university made as an extension of its ancestor (the Vocational College of Anadolu BIL). The Faculty of Medicine of this university is a fantastic faculty that supports clinical care, education, and research missions.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                                      Furthermore, the seminars & lectures of the pre-clinical phase are given in English at the campus called "Halit Aydın Florya Yerleşkesi." The advanced field laboratories situated in the Basic Medical Sciences Laboratory complex of its faculty are created to give full advantage to each student. Also, the institute is a technology center of approximately 175,000 m².
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Bahcesehir University</h3>
                                    <p className="text-gray-700 leading-relaxed text-base mb-3">
                                      Bahçeşehir University (BAU) is situated in Istanbul around the Bosporus. Its medicine is the 1st-ever Turkish faculty of medicine. From the start, the university has aimed to manufacture a research center for scientific research and has succeeded in this mission.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                                      Furthermore, the education system of this institute will provide the best opportunities to students with an advanced structure. The university has one school of languages, eight faculties, and 2 vocational schools. More than 1700 students are currently studying at the university (undergraduate & graduate students).
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                            
                            // Check for University table intro
                            if (paragraph.includes('Here is the language cert accepted universities list you should know before applying:')) {
                              return (
                                <div key={pIndex} className="my-6">
                                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                                    Here is the language cert accepted universities list you should know before applying:
                                  </p>
                                  <div className="overflow-x-auto">
                                    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                      <thead className="bg-[#1D50C9]/10">
                                        <tr>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Sr. No
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            University Name
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">1</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of York</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">2</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Warwick</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">3</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Nottingham</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">4</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Leeds</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">5</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">University of Liverpool</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">6</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Imperial College London</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">7</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">London University of the Arts</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">8</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Abertay University</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">9</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Aberystwyth University</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">10</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">Anglia Ruskin University</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              );
                            }
                            
                            // Check if this specific paragraph contains the visa ratio table intro
                            if (paragraph.includes('The UK student visa success rate 2024 for different types is as follows:')) {
                              // Render the complete table section in one go
                              return (
                                <div key={pIndex} className="my-6">
                                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                                    The UK student visa success rate 2024 for different types is as follows:
                                  </p>
                                  <div className="overflow-x-auto">
                                    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                      <thead className="bg-[#1D50C9]/10">
                                        <tr>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            Visa Category
                                          </th>
                                          <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                            UK Visa Ratio
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Student Visa</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">98%</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Family Visa</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">86%</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Work Visas</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">95%</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">Visitor Visas</td>
                                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900">77%</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              );
                            }
                            
                            // Skip rendering raw table data since we have custom tables above
                            if ((paragraph.includes('Sr. No') && paragraph.includes('University Name')) ||
                                paragraph.includes('| Sr No. | University Name |') ||
                                paragraph.includes('| Sr No. | University Name | Located In |') ||
                                paragraph.includes('|--------|') ||
                                paragraph.includes('University of York') ||
                                paragraph.includes('University of Warwick') ||
                                paragraph.includes('University of Nottingham') ||
                                paragraph.includes('University of Leeds') ||
                                paragraph.includes('University of Liverpool') ||
                                paragraph.includes('Imperial College London') ||
                                paragraph.includes('London University of the Arts') ||
                                paragraph.includes('Abertay University') ||
                                paragraph.includes('Aberystwyth University') ||
                                paragraph.includes('Anglia Ruskin University') ||
                                paragraph.includes('Atlas University') ||
                                paragraph.includes('Istinye University') ||
                                paragraph.includes('Altinbas University') ||
                                paragraph.includes('Beykent University') ||
                                paragraph.includes('Aydin University') ||
                                paragraph.includes('Bahcesehir University') ||
                                paragraph.includes('Istanbul, Hamidiye District') ||
                                paragraph.includes('Istanbul (Bakırköy, Bağcılar, Şişli)') ||
                                paragraph.includes('Istanbul (Büyükçekmece Campus)') ||
                                paragraph.includes('Istanbul (Halit Aydın Florya Yerleşkesi)') ||
                                paragraph.includes('Istanbul (Bosporus)') ||
                                (paragraph.includes('Paper Bases') && paragraph.includes('IELTS Fee')) ||
                                paragraph.includes('Computer-Based Module') ||
                                paragraph.includes('Paper-Based Module') ||
                                paragraph.includes('Computer-Based UKVI Test') ||
                                paragraph.includes('Paper-Based UKVI Test') ||
                                paragraph.includes('IELTS Life Skills Test') ||
                                paragraph.includes('205 USD') ||
                                paragraph.includes('229 USD') ||
                                paragraph.includes('185 USD') ||
                                paragraph.includes('197 USD') ||
                                paragraph.includes('143 USD') ||
                                paragraph.includes('Rs. 57,400') ||
                                paragraph.includes('Rs. 63,800') ||
                                paragraph.includes('Rs. 51,700') ||
                                paragraph.includes('Rs. 55,000') ||
                                paragraph.includes('Rs. 50,000') ||
                                paragraph.includes('Visa Category | UK Visa Ratio') || 
                                paragraph.includes('Student Visa | 98%') ||
                                paragraph.includes('Family Visa | 86%') ||
                                paragraph.includes('Work Visas | 95%') ||
                                paragraph.includes('Visitor Visas | 77%') ||
                                // Skip standalone university names that are duplicates
                                (paragraph.trim() === 'Atlas University' && !paragraph.includes('Located in Istanbul')) ||
                                (paragraph.trim() === 'Istinye University' && !paragraph.includes('In 2015')) ||
                                (paragraph.trim() === 'Altinbas University' && !paragraph.includes('In 2008')) ||
                                (paragraph.trim() === 'Beykent University' && !paragraph.includes('Another name')) ||
                                (paragraph.trim() === 'Aydin University' && !paragraph.includes('Istanbul Aydın')) ||
                                (paragraph.trim() === 'Bahcesehir University' && !paragraph.includes('Bahçeşehir University')) ||
                                // Skip standalone university content that creates duplicates
                                paragraph.includes('Istanbul Aydın University was created on 18th May 2007') ||
                                paragraph.includes('It is a private university made as an extension of its ancestor') ||
                                paragraph.includes('The Faculty of Medicine of this university is a fantastic faculty') ||
                                paragraph.includes('Furthermore, the seminars & lectures of the pre-clinical phase are given in English') ||
                                paragraph.includes('The advanced field laboratories situated in the Basic Medical Sciences Laboratory') ||
                                paragraph.includes('Also, the institute is a technology center of approximately 175,000 m²')) {
                              return null;
                            }
                            
                            // Handle numbered lists (1., 2., 3., etc.)
                            if (/^\d+\.\s/.test(paragraph.trim())) {
                              return (
                                <div key={pIndex} className="flex items-start leading-tight mb-3">
                                  <span className="text-[#1D50C9] mr-3 font-semibold text-base leading-none mt-0.5">
                                    {paragraph.trim().match(/^\d+\./)?.[0]}
                                  </span>
                                  <span 
                                    className="text-gray-700 text-base leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                      __html: paragraph
                                        .replace(/^\d+\.\s*/, '')
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    }}
                                  />
                                </div>
                              );
                            }

                            if (paragraph.trim()) {
                              return (
                                <p 
                                  key={pIndex} 
                                  className="text-gray-700 leading-relaxed text-base mb-3"
                                  dangerouslySetInnerHTML={{
                                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                  }}
                                />
                              );
                            }
                            return null;
                            })
                          )}
                        </div>
                      </section>
                    );
                  })}
                </div>



                {/* Related Blogs Section - Infinite Scroll Carousel */}
                <footer className="pt-8 border-t border-gray-200">
                  <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#1D50C9]">Related Blogs</h2>
                    
                    {/* Infinite Scroll Carousel */}
                    <div className="relative">
                      <div
                        ref={relatedBlogsCarouselRef}
                        className="flex gap-4 md:gap-6 overflow-x-hidden will-change-scroll"
                        style={{
                          scrollBehavior: 'auto',
                          width: '100%',
                          WebkitOverflowScrolling: 'touch'
                        }}
                      >
                        {duplicatedRelatedBlogs.map((blog, index) => (
                          <motion.div
                            key={`${blog.id}-${index}`}
                            className="flex-shrink-0 w-80 md:w-96"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.5) }}
                          >
                            <Link href={`/blog/${blog.slug}`}>
                              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                                
                                {/* Featured Image */}
                                {blog.image && (
                                  <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                                    <img 
                                      src={blog.image.startsWith('http') || blog.image.startsWith('/attached_assets/') ? blog.image : `/attached_assets/${blog.image}`} 
                                      alt={blog.title}
                                      className="w-full h-56 object-cover transition-transform hover:scale-105"
                                      style={{ 
                                        objectFit: 'cover', 
                                        objectPosition: 'center',
                                        imageRendering: 'auto',
                                        backfaceVisibility: 'hidden'
                                      }}
                                      loading="lazy"
                                      decoding="async"
                                      onLoad={(e) => {
                                        e.currentTarget.style.opacity = '1';
                                      }}
                                      onError={(e) => {
                                        console.log('Image failed to load:', blog.image);
                                        e.currentTarget.src = '/attached_assets/default-blog-image.png';
                                        e.currentTarget.onerror = null; // Prevent infinite loop
                                      }}
                                    />
                                  </div>
                                )}

                                <CardContent className="p-6">
                                  
                                  {/* Category Badge */}
                                  <div className="mb-3">
                                    <Badge variant="secondary" className="bg-[#1D50C9]/10 text-[#1D50C9]">
                                      {blog.category}
                                    </Badge>
                                  </div>

                                  {/* Title */}
                                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {blog.title}
                                  </h3>

                                  {/* Excerpt */}
                                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {blog.excerpt}
                                  </p>

                                  {/* Meta Information and Read More - Same Line */}
                                  <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center text-gray-500">
                                      <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        <span>{blog.date}</span>
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
                    </div>
                  </section>
                </footer>

              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4 lg:space-y-6">
              
              {/* Search Bar */}
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-[#1D50C9]">Search Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search blog posts..."
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
                  <CardTitle className="text-xl text-[#1D50C9] flex items-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share This Article
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex flex-col items-center justify-center gap-2 group"
                    >
                      <div className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#166FE5] transition-colors shadow-lg">
                        <Facebook className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#1877F2] transition-colors">Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex flex-col items-center justify-center gap-2 group"
                    >
                      <div className="w-14 h-14 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:bg-[#1A91DA] transition-colors shadow-lg">
                        <Twitter className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#1DA1F2] transition-colors">Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex flex-col items-center justify-center gap-2 group"
                    >
                      <div className="w-14 h-14 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#094D92] transition-colors shadow-lg">
                        <Linkedin className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex flex-col items-center justify-center gap-2 group"
                    >
                      <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg">
                        <Copy className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-600 transition-colors">Copy Link</span>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              {contentSections.length > 0 && (
                <Card className="bg-white border border-gray-200 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-[#1D50C9]">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {contentSections.filter((section: any) => section.title && section.title.trim() !== '').map((section: any, index: number) => (
                        <li key={index}>
                          <a 
                            href={`#${section.id}`}
                            className="text-[#1D50C9] hover:underline block py-1 text-sm"
                          >
                            {index + 1}. {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Contact Box */}
              <Card className="bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] text-white border-0">
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
      <Footer />
    </div>
  );
}

// Main Blog Component
export default function Blog() {
  const [match, params] = useRoute("/blog/:year/:month/:day/:slug");
  const [simpleMatch, simpleParams] = useRoute("/blog/:slug");
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
    image: post.featured_image || post.featuredImage,
    featured: false,
    slug: post.slug
  })) : staticBlogPosts;

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
          {postsToDisplay.map((post: any) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={post.slug.includes('/') ? `/blog/${post.slug}` : `/blog/${post.slug}`}>
                <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                  
                  {/* Featured Image */}
                  {post.image && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image.startsWith('http') || post.image.startsWith('/attached_assets/') ? post.image : `/attached_assets/${post.image}`} 
                        alt={post.title}
                        className="w-full h-56 object-cover transition-transform hover:scale-105"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        onError={(e) => {
                          // Fallback to a default placeholder or hide image on error
                          e.currentTarget.style.display = 'none';
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