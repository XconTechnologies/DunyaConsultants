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

const ComparisonEducationSystemPakistanUK: React.FC = () => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch('/api/blog-posts/comparison-education-system-pakistan-uk');
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
      
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
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
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
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
                  <Target className="w-5 h-5 mr-2 text-blue-500" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pakistan Literacy:</span>
                    <span className="font-medium">58.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">UK Education:</span>
                    <span className="font-medium">World Ranking</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Primary Age:</span>
                    <span className="font-medium">PK: 5-6, UK: 4-5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Degree Duration:</span>
                    <span className="font-medium">UK: 3-4 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Academic Year:</span>
                    <span className="font-medium">UK: Sep-Aug</span>
                  </div>
                </div>
              </div>

              {/* Education Levels */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Education Levels
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Primary</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Ages 5-11</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Secondary</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Ages 11-18</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Higher Ed</span>
                    <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">18+ Years</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>UK Standards</span>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">Global</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Pakistan System</span>
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Developing</span>
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

export default ComparisonEducationSystemPakistanUK;