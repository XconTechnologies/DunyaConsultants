import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, Eye, ArrowRight, Tag, ChevronDown, ChevronUp } from "lucide-react";
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
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    
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
  });
  
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
    date: new Date(post.published_at || post.created_at).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
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
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] py-20 overflow-hidden">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {blogPost.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              {blogPost.excerpt}
            </motion.p>
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
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              
              {/* Featured Image */}
              {blogPost.image && (
                <div className="relative">
                  <img 
                    src={blogPost.image} 
                    alt={blogPost.title}
                    className="w-full h-auto"
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
                    <p className="text-xl text-gray-700 leading-relaxed font-light italic">
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
                    return section.title && section.title.trim() !== '';
                  }).map((section: any, index: number) => {
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
                    
                    return (
                      <section key={index} id={section.id} className="mb-8">
                        {section.title && (
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            {section.title.replace(/^#+\s*/, '')}
                          </h2>
                        )}
                        
                        <div>
                          {section.content.split('\n').map((paragraph: string, pIndex: number) => {
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
                                  <span className="text-gray-700 text-base leading-tight">
                                    {paragraph.replace(/^[-•]\s*/, '')}
                                  </span>
                                </div>
                              );
                            }
                            
                            if (paragraph.includes('|') && section.content.includes('Visa Category')) {
                              // Table formatting for visa ratios
                              const tableLines = section.content.split('\n').filter((line: string) => line.includes('|') && !line.includes('-'));
                              if (tableLines.length > 0) {
                                return (
                                  <div key={pIndex} className="overflow-x-auto my-6">
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
                                );
                              }
                            }
                            
                            // Skip rendering raw table data since we have custom table above
                            if (paragraph.includes('Visa Category | UK Visa Ratio') || 
                                paragraph.includes('Student Visa | 98%') ||
                                paragraph.includes('Family Visa | 86%') ||
                                paragraph.includes('Work Visas | 95%') ||
                                paragraph.includes('Visitor Visas | 77%')) {
                              return null;
                            }
                            
                            if (paragraph.trim()) {
                              return (
                                <p key={pIndex} className="text-gray-700 leading-relaxed text-base mb-3">
                                  {paragraph}
                                </p>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </section>
                    );
                  })}
                </div>



                {/* Tags Section */}
                <footer className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">Related Topics</h4>
                    <Link href="/blog" className="text-[#1D50C9] hover:underline font-medium">
                      View All Articles →
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag: string, index: number) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="border border-[#1D50C9]/30 text-[#1D50C9] hover:bg-[#1D50C9] hover:text-white hover:border-[#1D50C9] transition-all duration-300 px-3 py-1 text-sm font-medium cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </footer>

              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
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
    date: new Date(post.published_at || post.created_at).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Same style as other pages */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Study Abroad Blog
            </motion.h1>
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
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                onClick={() => setSelectedCategory(category.name)}
                className="mb-2"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: any) => (
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
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-56 object-cover transition-transform hover:scale-105"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
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
                      <div className="flex items-center space-x-4 text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
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