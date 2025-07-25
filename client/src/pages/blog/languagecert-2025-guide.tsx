import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, User, BookOpen, CheckCircle, AlertCircle, FileText, Award, Users, Target, Globe, TrendingUp, Star, University } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  published_at: string;
  author_id: number;
  category: string;
  tags: string[];
  featured_image?: string;
}

const LanguageCert2025Guide: React.FC = () => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch('/api/blog-posts/languagecert-2025-complete-guide');
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        setBlogPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading article...</span>
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
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Failed to load the article</h1>
            <p className="text-gray-600 mb-6">{error || 'Article not found'}</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              ← Return to Blog
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
      
      <article className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#124FD3] text-white py-16 px-8 -mx-4 sm:-mx-6 lg:-mx-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {blogPost.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {blogPost.excerpt}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{new Date(blogPost.published_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>{blogPost.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>
              
              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Quick Facts */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm text-blue-700">
                    <div className="flex justify-between">
                      <span>Test Type:</span>
                      <span className="font-semibold">English Proficiency</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Skills Tested:</span>
                      <span className="font-semibold">4 (L, R, W, S)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Validity:</span>
                      <span className="font-semibold">3 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Results:</span>
                      <span className="font-semibold">4-7 days</span>
                    </div>
                  </div>
                </div>

                {/* Test Levels */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Test Levels</h3>
                  <div className="space-y-2 text-sm text-green-700">
                    <div>• C2 Mastery: Expert level</div>
                    <div>• C1 Expert: Advanced level</div>
                    <div>• B2 Communicator: Upper-intermediate</div>
                    <div>• B1 Achiever: Intermediate</div>
                    <div>• A2 Access: Elementary</div>
                  </div>
                </div>

                {/* Contact Form */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default LanguageCert2025Guide;