import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, Target, Award, Globe, Eye, Heart, MessageCircle, Tag } from "lucide-react";
import { Link } from "wouter";
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  metaDescription: string;
  focusKeyword: string;
  category: string;
  tags: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
  viewCount: number;
  readingTime?: number;
}

export default function DynamicBlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const { data: blogPost, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog-posts/${slug}`],
    enabled: !!slug,
  });

  const { data: relatedPosts } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts/published'],
    select: (data) => data?.filter(post => post.slug !== slug).slice(0, 3) || [],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
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
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              Return to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{blogPost.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category || "Study Abroad"}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                By Dunya Consultants Team
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(blogPost.publishedAt || blogPost.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {blogPost.readingTime || 8} min read
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {blogPost.viewCount || 0} views
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              {blogPost.excerpt || blogPost.metaDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-8">
            <article className="max-w-none">
              {/* Featured Image */}
              {blogPost.featuredImage && (
                <div className="mb-8">
                  <img 
                    src={blogPost.featuredImage}
                    alt={blogPost.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
              
              {/* Article Content */}
              <div className="prose prose-lg prose-blue max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: blogPost.content || `
                      <h2>Introduction</h2>
                      <p>This comprehensive guide provides detailed information about ${blogPost.title.toLowerCase()}. Our expert team at Dunya Consultants has compiled essential information to help you make informed decisions about your international education journey.</p>
                      
                      <h2>Key Information</h2>
                      <p>As one of Pakistan's leading education consultancy firms, we understand the complexities of international education. This article covers all the essential aspects you need to know.</p>
                      
                      <h2>Why Choose Dunya Consultants?</h2>
                      <ul>
                        <li>17+ office locations across Pakistan</li>
                        <li>200+ certified education counselors</li>
                        <li>98% visa success rate</li>
                        <li>Partnerships with 400+ universities worldwide</li>
                        <li>24/7 student support services</li>
                      </ul>
                      
                      <h2>Our Services</h2>
                      <p>We provide comprehensive education consultancy services including university selection, application assistance, visa guidance, and post-arrival support.</p>
                      
                      <h2>Contact Us for Guidance</h2>
                      <p>For personalized guidance and expert advice, contact our team of professionals. We're here to help you achieve your educational goals.</p>
                      
                      <blockquote>
                        <p>"Your success is our commitment. We ensure every student receives the best possible guidance for their international education journey."</p>
                      </blockquote>
                    ` 
                  }} 
                />
              </div>

              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-900 mr-2">Tags:</span>
                    {blogPost.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900">Share this article:</span>
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Table of Contents
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#introduction" className="text-blue-600 hover:text-blue-800">Introduction</a></li>
                  <li><a href="#key-information" className="text-blue-600 hover:text-blue-800">Key Information</a></li>
                  <li><a href="#requirements" className="text-blue-600 hover:text-blue-800">Requirements</a></li>
                  <li><a href="#application-process" className="text-blue-600 hover:text-blue-800">Application Process</a></li>
                  <li><a href="#conclusion" className="text-blue-600 hover:text-blue-800">Conclusion</a></li>
                </ul>
              </div>

              {/* Quick Facts */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reading Time:</span>
                    <span className="font-medium">{blogPost.readingTime || 8} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{blogPost.category || "Study Abroad"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Published:</span>
                    <span className="font-medium">
                      {new Date(blogPost.publishedAt || blogPost.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Views:</span>
                    <span className="font-medium">{blogPost.viewCount || 0}</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Need Expert Guidance?
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get personalized advice from our certified education consultants
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-md text-gray-900 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-md text-gray-900 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 rounded-md text-gray-900 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className="w-full px-4 py-2 rounded-md text-gray-900 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
                  </button>
                </form>
                <div className="mt-4 pt-4 border-t border-blue-400 text-center">
                  <p className="text-xs text-blue-100">
                    Call us: <span className="font-semibold">(+92) 304 1110947</span>
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-green-600" />
                  Why Choose Dunya Consultants?
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    98% visa success rate
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    17+ office locations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    200+ certified counselors
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    400+ university partners
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    24/7 student support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <p className="text-lg text-gray-600">Explore more helpful resources for your study abroad journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {post.featuredImage && (
                    <img 
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {post.category || "Study Abroad"}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt || post.metaDescription}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readingTime || 8} min
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read More
                      <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      )}

      <ContactSection />
      <Footer />
    </div>
  );
}