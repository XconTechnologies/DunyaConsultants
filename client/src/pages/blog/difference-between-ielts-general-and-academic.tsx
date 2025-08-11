import { Calendar, Clock, User, BookOpen, CheckCircle, AlertCircle, FileText, Award, Users, Target, Globe, TrendingUp, Star, University, PenTool, MessageSquare, Headphones, BookOpen as Book } from 'lucide-react';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function DifferenceBetweenIELTSGeneralAndAcademic() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Test Preparation
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Difference Between IELTS General and Academic
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete comparison guide to help you choose between IELTS Academic and General Training modules.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 19, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>7 min read</span>
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
                <p className="text-gray-700 leading-relaxed mb-4">
                  IELTS (International English Language Testing System) offers two distinct test formats: Academic and General Training. 
                  Choosing the right format is crucial for your success and depends on your specific goals and requirements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This comprehensive guide will help you understand the key differences between IELTS Academic and General Training 
                  modules, helping you make an informed decision about which test to take.
                </p>
              </div>

              {/* Quick Comparison Table */}
              <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 #1D50C9">
                <h2 className="text-2xl font-bold mb-4 text-#1565c0">Quick Comparison</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-#1a73e8 mb-2">IELTS Academic</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• For higher education abroad</li>
                      <li>• University applications</li>
                      <li>• Professional registration</li>
                      <li>• Academic contexts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-#1a73e8 mb-2">IELTS General Training</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• For immigration purposes</li>
                      <li>• Work experience abroad</li>
                      <li>• Secondary education</li>
                      <li>• Practical contexts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}