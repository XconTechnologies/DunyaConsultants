import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Grid, List, Calendar, Clock, User, Eye, TrendingUp, ArrowRight, Tag, Globe, BookOpen, Award, Heart, Users, Star, ArrowLeft, Target, MessageCircle, Phone, Mail } from "lucide-react";
import ContactForm from '@/components/blog/ContactForm';
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
    href: "/blog/from-uk-llm-to-pakistani-bar"
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
    "Visa Guides": "from-[#1D50C9] to-indigo-600", 
    "Study Abroad": "from-purple-600 to-violet-600",
    "Legal Education": "from-orange-600 to-red-600",
    "Healthcare Studies": "from-pink-600 to-rose-600",
    "University Partnership": "from-cyan-600 to-[text-[#1D50C9]]",
    "Study Destinations": "from-green-600 to-emerald-600",
    "UK Immigration": "from-indigo-600 to-purple-600",
    "Study in Canada": "from-red-600 to-pink-600",
    "General": "from-gray-600 to-slate-600"
  };
  return gradients[category || "General"] || "from-[#1D50C9] to-purple-600";
}

function getCategoryBadgeColor(category: string): string {
  const colors: Record<string, string> = {
    "Test Preparation": "#1D50C9",
    "Visa Guides": "#1D50C9",
    "Study Abroad": "#1D50C9", 
    "Legal Education": "#1D50C9",
    "Healthcare Studies": "#1D50C9",
    "University Partnership": "#1D50C9",
    "Study Destinations": "#1D50C9",
    "UK Immigration": "#1D50C9",
    "Study in Canada": "#1D50C9",
    "General": "bg-gray-500"
  };
  return colors[category || "General"] || "#1D50C9";
}

// Helper function to parse content into sections with table of contents
function parseContentToSections(content: string) {
  if (!content) return [];
  
  // Split content by common section indicators
  const lines = content.split('\n');
  const sections: Array<{id: string, title: string, content: string}> = [];
  let currentSection: {id: string, title: string, content: string} | null = null;
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    // Look for section headings (## or **bold text**)
    if (trimmedLine.startsWith('##') || 
        (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length > 10)) {
      
      // Save previous section
      if (currentSection) {
        sections.push(currentSection);
      }
      
      // Create new section
      let title = trimmedLine;
      if (title.startsWith('##')) {
        title = title.replace(/^##\s*/, '').trim();
      } else if (title.startsWith('**') && title.endsWith('**')) {
        title = title.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
      }
      
      const id = title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      currentSection = {
        id,
        title,
        content: ''
      };
    } else if (currentSection && trimmedLine) {
      // Add content to current section
      currentSection.content += line + '\n';
    } else if (!currentSection && trimmedLine) {
      // Content before any section headers - create a default introduction section
      if (sections.length === 0) {
        currentSection = {
          id: 'introduction',
          title: 'Introduction',
          content: line + '\n'
        };
      }
    }
  });
  
  // Add the last section
  if (currentSection) {
    sections.push(currentSection);
  }
  
  return sections.filter(section => section.content.trim().length > 0);
}

// Dynamic Blog Post Component - Enhanced with Kaplan Blog Design
function DynamicBlogPost({ slug }: { slug: string }) {
  const { data: blogPost, isLoading, error } = useQuery<DBBlogPost>({
    queryKey: [`/api/blog-posts/${slug}`],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-[text-[#1D50C9]] ">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Parse content to create sections (similar to Kaplan blog structure)
  const contentSections = parseContentToSections(blogPost.content || '');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Same as Kaplan Blog */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-[#1D50C9] text-white px-4 py-2 rounded-full text-sm font-medium">
                {blogPost.category || 'Study Destinations'}
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
                <Clock className="w-5 h-5 mr-2" />
                <span>{new Date(blogPost.publishedAt || blogPost.createdAt || new Date()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
              
              {/* Introduction */}
              <div className="mb-8">
                {blogPost.excerpt && (
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {blogPost.excerpt}
                  </p>
                )}
              </div>

              {/* Table of Contents */}
              {contentSections.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                  <ul className="space-y-2 text-gray-600">
                    {contentSections.map((section, index) => (
                      <li key={index}>
                        <a href={`#${section.id}`} className="">
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Content with Enhanced Styling */}
              <div className="prose prose-lg max-w-none">
                {contentSections.length > 0 ? (
                  contentSections.map((section, index) => (
                    <div key={index} className="mb-8" id={section.id}>
                      <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">
                        {section.title}
                      </h2>
                      <div 
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: section.content }} 
                      />
                    </div>
                  ))
                ) : (
                  <div className="text-gray-700 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: blogPost.content || '' }} />
                  </div>
                )}
              </div>

              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-[#1565c0] px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action - Same as Kaplan Blog */}
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Start Your Study Abroad Journey?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Get personalized guidance from Pakistan's most trusted education consultants. 
                    Book your free consultation today and take the first step towards your international education dreams.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center px-6 py-3 text-[#1D50C9] text-white font-semibold rounded-lg  "
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Book Free Consultation
                    </Link>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center px-6 py-3 border-2 text-[#1D50C9] text-[#1D50C9] font-semibold rounded-lg  "
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </Link>
                  </div>
                </div>
              </div>

            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <Target className="w-5 h-5 mr-2 #1D50C9" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  {blogPost.slug === 'from-uk-llm-to-pakistani-bar' ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">UK LLM Duration:</span>
                        <span className="font-medium">1 Year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pakistan LLB:</span>
                        <span className="font-medium">5 Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Conversion Course:</span>
                        <span className="font-medium">1 Year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bar Registration:</span>
                        <span className="font-medium">Required</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Practice System:</span>
                        <span className="font-medium">Advocacy</span>
                      </div>
                    </>
                  ) : blogPost.slug === 'study-nursing-in-the-uk' ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Degree Duration:</span>
                        <span className="font-medium">3-4 Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">IELTS Required:</span>
                        <span className="font-medium">7.0 Overall</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Fees:</span>
                        <span className="font-medium">£14,000-£35,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application:</span>
                        <span className="font-medium">Through UCAS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Registration:</span>
                        <span className="font-medium">NMC Required</span>
                      </div>
                    </>
                  ) : blogPost.slug === 'global-talent-visa-uk' ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Visa Duration:</span>
                        <span className="font-medium">Up to 5 Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application Cost:</span>
                        <span className="font-medium">£716</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing Time:</span>
                        <span className="font-medium">3 Weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Success Rate:</span>
                        <span className="font-medium">95%+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Endorsement:</span>
                        <span className="font-medium">Required</span>
                      </div>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>

              {/* Blog-specific second sidebar section */}
              {blogPost.slug === 'from-uk-llm-to-pakistani-bar' ? (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 #1D50C9" />
                    Key Requirements
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Pakistani LLB degree</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Required</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Bar Council registration</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Mandatory</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Local law understanding</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Essential</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Professional networking</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Helpful</span>
                    </div>
                  </div>
                </div>
              ) : blogPost.slug === 'study-nursing-in-the-uk' ? (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 #1D50C9" />
                    Top Nursing Universities
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>University of Dundee</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">#1 Ranked</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>University of Glasgow</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Top Choice</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>University of Edinburgh</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Prestigious</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Kingston University London</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">London Based</span>
                    </div>
                  </div>
                </div>
              ) : blogPost.slug === 'global-talent-visa-uk' ? (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 #1D50C9" />
                    Eligible Fields
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Digital Technology</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Tech Leader</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Academia & Research</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Researcher</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Arts & Culture</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Creative</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Science & Innovation</span>
                      <span className="text-xs bg-blue-100 text-[#1D50C9] px-2 py-1 rounded">Innovator</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 #1D50C9" />
                    Related Topics
                  </h3>
                  <div className="space-y-3">
                    <Link href="/blog" className="block text-sm text-[#1D50C9]  ">
                      Study Abroad Guide 2025
                    </Link>
                    <Link href="/blog" className="block text-sm text-[#1D50C9]  ">
                      University Selection Tips
                    </Link>
                    <Link href="/blog" className="block text-sm text-[#1D50C9]  ">
                      Visa Application Process
                    </Link>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <ContactForm />
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

  // Fetch published blog posts from database with optimized caching
  const { data: dbBlogPosts = [], isLoading } = useQuery({
    queryKey: ['/api/blog-posts/published'],
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes (renamed from cacheTime in v5)
  });

  // Convert database posts to local format
  const blogPosts: BlogPost[] = useMemo(() => {
    return (dbBlogPosts as DBBlogPost[]).map((post: DBBlogPost) => ({
      id: post.id.toString(),
      title: post.title,
      excerpt: post.excerpt || "Read this comprehensive guide to learn more about this important topic.",
      category: post.category || "General",
      author: `Author ${post.authorId || 1}`,
      date: new Date(post.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      readTime: `${Math.ceil(post.content.length / 1000)} min`,
      views: post.views || Math.floor(Math.random() * 20000) + 5000,
      tags: post.tags || [],
      image: post.featuredImage || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false, // Could be based on a specific category or tag
      trending: Math.random() > 0.7, // Random trending status
      href: `/blog/${post.slug}`
    }));
  }, [dbBlogPosts]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [blogPosts, selectedCategory, searchTerm]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending);

  // Generate categories from posts
  const categories = useMemo(() => {
    const categoryCount: Record<string, number> = {};
    blogPosts.forEach(post => {
      categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
    });

    return [
      "All",
      ...Object.keys(categoryCount).sort()
    ];
  }, [blogPosts]);

  // Remove loading state - show content immediately

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section with Blue Gradient */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-[#1D50C9] to-[#1565c0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/15 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white/20 rounded-full blur-sm"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            {/* Blog Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Educational Resources</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block">Dunya Consultants</span>
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Your ultimate guide to studying abroad, visa applications, and international education insights from Pakistan's most trusted consultancy
            </motion.p>
            
            {/* Enhanced Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" />
                <input
                  type="text"
                  placeholder="Search for study abroad tips, visa guides, university insights..."
                  className="w-full pl-12 pr-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20 shadow-2xl bg-white/95 backdrop-blur-sm text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-2 top-2 bottom-2 flex items-center">
                  <kbd className="px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded-lg">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold">{blogPosts.length}+</div>
                <div className="text-blue-100 text-sm">Expert Articles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-blue-100 text-sm">Monthly Readers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-blue-100 text-sm">Countries Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-100 text-sm">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Navigation Bar */}
      <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h2 className="text-xl font-bold text-gray-900">Latest Articles</h2>
              
              {/* Category Pills */}
              <div className="hidden md:flex items-center space-x-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'text-[#1D50C9] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 '
                    }`}
                  >
                    {category}
                    {category !== "All" && (
                      <span className="ml-2 px-1.5 py-0.5 bg-white/20 rounded-full text-xs">
                        {blogPosts.filter(post => post.category === category).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "grid" ? 'bg-white shadow-sm text-[#1D50C9]' : 'text-gray-500 '
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "list" ? 'bg-white shadow-sm text-[#1D50C9]' : 'text-gray-500 '
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#1D50C9] rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
                  <p className="text-gray-600">Handpicked by our education experts</p>
                </div>
              </div>
              <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
                {featuredPosts.length} featured posts
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="cursor-pointer"
                >
                  <Link href={post.href} className="block no-hover-link" style={{ textDecoration: 'none' }}>
                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
                      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-72 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Enhanced badges */}
                        <div className="absolute top-6 left-6">
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-[#1D50C9] text-white shadow-lg">
                            <Star className="w-4 h-4 mr-2" />
                            Featured
                          </span>
                        </div>
                        
                        <div className="absolute top-6 right-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                            <Eye className="w-3 h-3 mr-1" />
                            {post.views.toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center space-x-4 text-white/90 text-sm mb-3">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 leading-tight" style={{ color: 'white' }}>
                            {post.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-[#1565c0]">
                            {post.category}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 text-sm">By {post.author}</span>
                        </div>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center text-[#1D50C9] font-semibold  ">
                            <span className="text-sm">Read Article</span>
                            <ArrowRight className="w-4 h-4 ml-2 " />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mobile Category Filter */}
        <div className="md:hidden mb-8">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category} {category !== "All" && `(${blogPosts.filter(post => post.category === category).length})`}
              </option>
            ))}
          </select>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-[#1D50C9]" />
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === "All" ? "All Articles" : selectedCategory}
              </h2>
              <span className="px-3 py-1 bg-blue-100 text-[#1565c0] rounded-full text-sm font-medium">
                {filteredPosts.length} articles
              </span>
            </div>
          </div>

          {/* Enhanced Articles Grid */}
          <div className={`${
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 gap-8" 
              : "space-y-8"
          }`}>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className={`cursor-pointer ${
                  viewMode === "list" ? "flex flex-col md:flex-row" : ""
                }`}
              >
                <Link href={post.href} className={`block no-hover-link ${
                  viewMode === "list" ? "flex flex-col md:flex-row w-full" : ""
                }`} style={{ textDecoration: 'none' }}>
                  <div className={`
                    bg-white rounded-2xl shadow-lg overflow-hidden 
                    ${viewMode === "list" ? "flex flex-col md:flex-row" : ""}
                  `}>
                    <div className={`relative overflow-hidden ${
                      viewMode === "list" ? "md:w-80 flex-shrink-0" : ""
                    }`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className={`
                          object-cover  
                          ${viewMode === "list" ? "w-full h-64 md:h-full" : "w-full h-56"}
                        `}
                      />
                      
                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0  " />
                      
                      {/* Category and Status Badges */}
                      <div className="absolute top-4 left-4 flex items-center space-x-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-gray-800 shadow-sm">
                          {post.category}
                        </span>
                        {post.featured && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#1D50C9] to-orange-500 text-white shadow-sm">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </span>
                        )}
                        {post.trending && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#1D50C9] to-emerald-500 text-white shadow-sm">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </span>
                        )}
                      </div>

                      {/* Read Time Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      {/* Meta Information */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">{post.views.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`
                        font-bold text-gray-900 mb-4 line-clamp-2
                        ${viewMode === "list" ? "text-2xl" : "text-xl"}
                      `} style={{ color: '#111827' }}>
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 text-gray-700  ">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-[#1D50C9] font-semibold  ">
                          <span className="text-sm">Read Article</span>
                          <ArrowRight className="w-4 h-4 ml-2  " />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
                    className={`bg-white rounded-lg shadow-sm  overflow-hidden ${
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
                            <span className="bg-[#1D50C9] text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                        {post.trending && (
                          <div className="absolute top-3 right-3">
                            <span className="bg-[#1D50C9] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Trending
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-blue-100 text-[#1565c0] px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views.toLocaleString()}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2" style={{ color: '#111827' }}>
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
                          className="text-[text-[#1D50C9]]  text-sm font-medium flex items-center"
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
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#1D50C9] to-#1565c0 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Stay Updated</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest study abroad tips, visa guides, and university insights delivered straight to your inbox
            </p>
            
            <div className="max-w-md mx-auto flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button className="px-6 py-3 bg-white text-[#1D50C9] font-semibold rounded-xl  ">
                Subscribe
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              Join 10,000+ students already subscribed. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-gray-700 mb-6">
              <Target className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Ready to Start?</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Study Abroad Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get expert guidance from Pakistan's most trusted education consultancy with 98% visa success rate
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a 
                href="tel:+923041110947" 
                className="flex-1 text-[#1D50C9] text-white px-8 py-4 rounded-xl font-semibold   flex items-center justify-center"
              >
                📞 Call Now
              </a>
              <a 
                href="mailto:query@teamdunya.com" 
                className="flex-1 bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold   flex items-center justify-center"
              >
                ✉️ Email Us
              </a>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1D50C9] mb-2">5,000+</div>
                <div className="text-gray-600">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1D50C9] mb-2">98%</div>
                <div className="text-gray-600">Visa Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1D50C9] mb-2">17+</div>
                <div className="text-gray-600">Office Locations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}