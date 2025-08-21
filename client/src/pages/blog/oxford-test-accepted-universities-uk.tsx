import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, User, Share2, Download, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
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

const OxfordTestAcceptedUniversitiesUK: React.FC = () => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch('/api/blog-posts/oxford-test-accepted-universities-in-uk');
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
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 #1D50C9 mx-auto mb-4"></div>
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
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="#1845B3 mb-4">Failed to load the article</p>
            <Link href="/blog" className="#1845B3 hover:text-[#1565c0]">
              ← Back to Blog
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
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            <h1 className="font-bold leading-tight mb-8 text-white italic" style={{ fontSize: '64px' }}>
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{new Date(blogPost.published_at).toLocaleDateString()}</span>
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

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="bg-white">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-[#1565c0] mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm text-#1a73e8">
                  <div className="flex justify-between">
                    <span>Test Type:</span>
                    <span className="font-semibold">OIETC (ELLT)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accepted By:</span>
                    <span className="font-semibold">8+ UK Universities</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Test Duration:</span>
                    <span className="font-semibold">2-3 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alternative To:</span>
                    <span className="font-semibold">IELTS</span>
                  </div>
                </div>
              </div>

              {/* Featured Universities */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-[#1565c0] mb-4">Top OIETC Universities</h3>
                <div className="space-y-2 text-sm text-#1a73e8">
                  <div>• University of Edinburgh</div>
                  <div>• University of Nottingham</div>
                  <div>• Bangor University</div>
                  <div>• University of Leeds</div>
                  <div>• University of Bristol</div>
                  <div>• Birmingham City University</div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default OxfordTestAcceptedUniversitiesUK;