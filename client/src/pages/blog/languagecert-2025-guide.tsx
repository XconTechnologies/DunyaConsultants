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

const NewYearResolutionsStudents2025: React.FC = () => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch('/api/blog-posts/new-year-resolutions-students-2025');
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
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 #1845B3"></div>
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
            <Link href="/blog" className="#1845B3 hover:text-[#1565c0]">
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
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-[1.5rem]">
              {blogPost.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {blogPost.excerpt}
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
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

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-[#1565c0] text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time to Start:</span>
                    <span className="font-medium">12-18 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Key Areas:</span>
                    <span className="font-medium">7 Essential Goals</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-medium">Higher with planning</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-medium">Year-long journey</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Priority:</span>
                    <span className="font-medium">Consistency matters</span>
                  </div>
                </div>
              </div>

              {/* Resolution Categories */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 #1D50C9" />
                  Resolution Categories
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Academic</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Test Scores</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Financial</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Budgeting</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Personal</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Mental Health</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Language</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Communication</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Cultural</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Adaptation</span>
                  </div>
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

export default NewYearResolutionsStudents2025;