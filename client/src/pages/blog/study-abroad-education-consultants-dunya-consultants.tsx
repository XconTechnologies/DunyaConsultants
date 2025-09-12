import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/blog/ContactSection";
import { Calendar, Clock, User, CheckCircle, Globe, Users, BookOpen, Award, Target, TrendingUp, Star, Heart, ArrowRight } from "lucide-react";

const StudyAbroadEducationConsultants = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full h-80 bg-gradient-to-br from-[#1D50C9] via-[#1D50C9] to-[#1845B3] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D50C9]/80 via-[#1D50C9]/70 to-[#1845B3]/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Why Dunya Consultants Are the Best Study Abroad Consultants in Pakistan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert visa guidance, university admissions, and IELTS coaching for your study abroad journey
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1440px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Article Meta */}
            <div className="flex items-center space-x-6 text-sm text-gray-600 border-b pb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>May 16, 2023</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Dunya Consultants</span>
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                To study abroad is one of the most important life decisions. It presents doors to new opportunities, cultures and career expansion. But it can also feel overwhelming to apply, get accepted and obtain a visa. That is why most students look for the Best Study Abroad Consultants in Pakistan to facilitate them in every possible manner.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From the plethora of consultancy firms across the nation, Dunya Consultants is known to be dependable, seasoned and student centered. Having a great success rate, they assist in making your dream of studying abroad come true.
              </p>
            </div>

            {/* Why Choose Dunya Consultants Section */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="h-8 w-8 text-[#1845B3] mr-3" />
                Why Choose Dunya Consultants?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In one simple words why students choose Dunya consultants over the rest of the consultants:
              </p>
              
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#1845B3] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Comprehensive services</strong> (counseling, admissions, visas, IELTS, pre-departure).
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#1845B3] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Experienced team</strong> with a high success rate.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#1845B3] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Proven track record</strong> backed by student success stories.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#1845B3] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>IELTS coaching</strong> to boost admission chances.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#1845B3] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Global university partnerships</strong> offering diverse study options.
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <p className="text-gray-700 font-medium text-center">
                  For students and families who seek the trusted source on this industry, refer to Dunya Consultants as the <span className="text-[#1845B3] font-bold">Best Study Abroad Consultants in Pakistan</span>.
                </p>
              </div>
            </div>

            {/* Comprehensive Support From Start to Finish */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <CheckCircle className="h-6 w-6 text-[#1845B3] mr-3" />
                Comprehensive Support From Start to Finish
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Complete Support from Day One till you Fly One of the reasons as to why Dunya Consultants distinguish themselves as the Best Study Abroad Consultants in Pakistan, its full services from admission to departure. They ensure no student gets lost in the shuffle.
              </p>
            </div>

            {/* Service Quality */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Award className="h-6 w-6 text-[#1845B3] mr-3" />
                Exceptional Service Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What sets Dunya Consultants apart is their commitment to quality service and personalized attention to each student's unique needs. Their experienced counselors provide expert guidance throughout the entire process.
              </p>
            </div>

            {/* Global Partnerships */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Globe className="h-6 w-6 text-[#1845B3] mr-3" />
                Strong Global Partnerships
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With partnerships across multiple countries and universities, Dunya Consultants offers students a wide range of study destinations and programs to choose from, ensuring the best fit for each individual's academic goals.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">20+ Office Locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span className="text-sm">High Success Rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">50+ University Partners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">IELTS Coaching Available</span>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h4>
              <div className="space-y-3">
                <a href="/blog/study-in-canada-complete-guide" className="block text-sm text-gray-600 hover:text-[#1845B3] transition-colors">
                  Complete Guide to Study in Canada
                </a>
                <a href="/blog/study-in-uk-guide" className="block text-sm text-gray-600 hover:text-[#1845B3] transition-colors">
                  Study in UK: Complete Guide
                </a>
                <a href="/blog/ielts-preparation-tips" className="block text-sm text-gray-600 hover:text-[#1845B3] transition-colors">
                  IELTS Preparation Tips
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default StudyAbroadEducationConsultants;