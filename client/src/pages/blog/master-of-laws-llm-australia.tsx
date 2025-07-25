import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, FileText, Target, Award, Globe, DollarSign, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function MasterOfLawsLLMAustralia() {
  const { data: blogPost, isLoading } = useQuery({
    queryKey: ['/api/blog-posts/master-of-laws-llm-in-australia'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
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
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study in Australia
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Master of Laws (LLM) in Australia: A Comprehensive Guide
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover everything you need to know about pursuing an LLM degree in Australia, including top universities, admission requirements, costs, and career opportunities for international students.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>March 13, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>15 min read</span>
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
              {/* Content from Database */}
              <div className="mb-8">
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: blogPost?.content || "Loading content..." 
                  }}
                />
              </div>





            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                Quick Facts
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">1-2 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tuition Range:</span>
                  <span className="font-medium">AUD 25,000-55,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IELTS Required:</span>
                  <span className="font-medium">6.5-7.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Work Rights:</span>
                  <span className="font-medium">20 hrs/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Post-Study Work:</span>
                  <span className="font-medium">2-4 Years</span>
                </div>
              </div>
            </div>

            {/* Top Universities */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                Top Law Schools
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>University of Melbourne</span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">#1 Ranked</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>University of Sydney</span>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Top Choice</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Australian National University</span>
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">Prestigious</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>UNSW Sydney</span>
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Research</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}