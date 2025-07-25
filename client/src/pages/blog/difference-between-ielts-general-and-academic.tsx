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

const DifferenceBetweenIELTSGeneralAndAcademic: React.FC = () => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch('/api/blog-posts/difference-between-ielts-general-and-academic');
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
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
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
            <p className="text-red-600 mb-4">Failed to load the article</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
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
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
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
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm text-blue-700">
                  <div className="flex justify-between">
                    <span>Test Types:</span>
                    <span className="font-semibold">Academic & General</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">2h 45min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Skills Tested:</span>
                    <span className="font-semibold">4 (L, R, W, S)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Band Score:</span>
                    <span className="font-semibold">0-9</span>
                  </div>
                </div>
              </div>

              {/* Test Comparison */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Key Differences</h3>
                <div className="space-y-2 text-sm text-green-700">
                  <div>• Academic: University study</div>
                  <div>• General: Work & immigration</div>
                  <div>• Reading tasks differ</div>
                  <div>• Writing tasks differ</div>
                  <div>• Same listening & speaking</div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DifferenceBetweenIELTSGeneralAndAcademic;