import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/blog/ContactForm";
import ContactSection from "@/components/blog/ContactSection";
import { Calendar, Clock, User, Eye, ChevronRight, CheckCircle, FileText, GraduationCap, Globe, MapPin, DollarSign, CreditCard } from "lucide-react";

const StudyInUK = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full h-80 bg-gradient-to-br from-[#1D50C9] via-[#1D50C9] to-[#1845B3] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D50C9]/80 via-[#1D50C9]/70 to-[#1845B3]/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="font-bold leading-tight mb-8 text-white" style={{ fontSize: '64px' }}>
              Study in UK
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Comprehensive Guide to Education in the United Kingdom for Pakistani Students
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
                <span>January 16, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Dunya Consultants</span>
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Study in the UK?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The United Kingdom remains one of the most prestigious study destinations for Pakistani students, offering world-class education, cultural diversity, and excellent career prospects. With 166 public and private universities offering over 50,000 programs, the UK provides unparalleled opportunities for international students.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 #1845B3 mr-3" />
                Key Benefits of Studying in the UK
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">Cost-effective education</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">Shorter and intensive programs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">Work-study opportunities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">No language barrier</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">Moderate weather conditions</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">Highest visa success rate for Pakistani students</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">Rich cultural diversity</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">Affordable accommodation options</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">Simple visa process</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 #1845B3 rounded-full mt-2"></div>
                    <span className="text-gray-700">Safe and supportive environment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visa Requirements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <FileText className="h-6 w-6 #1845B3 mr-3" />
                UK Study Visa Requirements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Essential Documents</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 #1845B3" />
                      <span>Original Passport</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 #1845B3" />
                      <span>Confirmation of Acceptance for Study (CAS)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 #1845B3" />
                      <span>Tuberculosis (TB) Test Results</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 #1845B3" />
                      <span>Birth Certificate</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 #1845B3" />
                      <span>Proof of Financial Support</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">TB Test Centers in Pakistan</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 #1845B3" />
                      <span>AMC (Approved Medical Center)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 #1845B3" />
                      <span>Dr. Arshad Health Associates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 #1845B3" />
                      <span>IOM (International Organization for Migration)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Language Requirements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <GraduationCap className="h-6 w-6 #1845B3 mr-3" />
                English Language Requirements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="font-semibold text-#1e3a8a mb-3">IELTS Requirements</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#1565c0]">Undergraduate:</span>
                      <span className="font-medium text-#1e3a8a">6.0 (no less than 5.5)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1565c0]">Postgraduate:</span>
                      <span className="font-medium text-#1e3a8a">6.5 (no less than 6.0)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6">
                  <h4 className="font-semibold text-#1e3a8a mb-3">PTE Requirements</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#1565c0]">Undergraduate:</span>
                      <span className="font-medium text-#1e3a8a">59 minimum each</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1565c0]">Postgraduate:</span>
                      <span className="font-medium text-#1e3a8a">59 minimum each</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tuition Fees */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <DollarSign className="h-6 w-6 #1845B3 mr-3" />
                Tuition Fees Structure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-green-100 rounded-lg p-6 text-center">
                  <GraduationCap className="h-12 w-12 #1845B3 mx-auto mb-4" />
                  <h4 className="font-semibold text-#1e3a8a mb-2">Undergraduate Programs</h4>
                  <p className="text-2xl font-bold text-[#1565c0]">£11,000 - £17,000</p>
                  <p className="text-sm text-#1a73e8 mt-2">Per Academic Year</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                  <GraduationCap className="h-12 w-12 #1845B3 mx-auto mb-4" />
                  <h4 className="font-semibold text-#1e3a8a mb-2">Postgraduate Programs</h4>
                  <p className="text-2xl font-bold text-[#1565c0]">£11,000 - £17,000</p>
                  <p className="text-sm text-#1a73e8 mt-2">Per Academic Year</p>
                </div>
              </div>
            </div>

            {/* Application Documents */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <CreditCard className="h-6 w-6 #1845B3 mr-3" />
                Required Application Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                    <FileText className="h-5 w-5 #1845B3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Original Passport</h4>
                      <p className="text-sm text-gray-600">Valid for duration of intended stay</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                    <FileText className="h-5 w-5 #1845B3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Educational Certificates</h4>
                      <p className="text-sm text-gray-600">Matric, Intermediate, Bachelor's degrees</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                    <FileText className="h-5 w-5 #1845B3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">IELTS/PTE Score Card</h4>
                      <p className="text-sm text-gray-600">English proficiency proof</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                    <FileText className="h-5 w-5 #1845B3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Experience Certificate</h4>
                      <p className="text-sm text-gray-600">Work experience validation</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                    <FileText className="h-5 w-5 #1845B3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Recommendation Letters</h4>
                      <p className="text-sm text-gray-600">From teachers or employers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                    <FileText className="h-5 w-5 #1845B3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Statement of Purpose</h4>
                      <p className="text-sm text-gray-600">Academic and career goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                    <FileText className="h-5 w-5 #1845B3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">GRE/GMAT Scores</h4>
                      <p className="text-sm text-gray-600">If required by university</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                    <FileText className="h-5 w-5 #1845B3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Europass CV</h4>
                      <p className="text-sm text-gray-600">European format curriculum vitae</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Study Programs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Globe className="h-6 w-6 #1845B3 mr-3" />
                Study Programs Available
              </h3>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The UK offers an extensive range of academic programs across various disciplines. With 166 universities providing over 50,000 different programs, Pakistani students have access to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-#1e3a8a mb-2">Undergraduate Programs</h4>
                    <p className="text-sm text-gray-600">3-year Bachelor's degrees</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-#1e3a8a mb-2">Postgraduate Programs</h4>
                    <p className="text-sm text-gray-600">1-2 year Master's degrees</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-#1e3a8a mb-2">Research Programs</h4>
                    <p className="text-sm text-gray-600">PhD and research opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">What is the visa success rate for Pakistani students?</h4>
                  <p className="text-gray-700 text-sm">The UK has one of the highest visa success rates for Pakistani students, especially when applications are properly prepared with all required documentation.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Can I work while studying in the UK?</h4>
                  <p className="text-gray-700 text-sm">Yes, international students can work part-time (up to 20 hours per week) during term time and full-time during holidays.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">What are the accommodation options?</h4>
                  <p className="text-gray-700 text-sm">Students can choose from university halls of residence, private student accommodation, or shared housing with other students.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <ContactForm />
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Universities:</span>
                  <span className="font-medium">166</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Programs:</span>
                  <span className="font-medium">50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-medium">English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Study Duration:</span>
                  <span className="font-medium">1-4 years</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-#1e3a8a mb-4">Need Help?</h3>
              <p className="text-[#1565c0] text-sm mb-4">
                Get expert guidance for your UK study journey from our experienced consultants.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-[#1565c0]">
                  <span className="w-2 h-2 #1845B3 rounded-full mr-2"></span>
                  University selection assistance
                </p>
                <p className="flex items-center text-[#1565c0]">
                  <span className="w-2 h-2 #1845B3 rounded-full mr-2"></span>
                  Visa application support
                </p>
                <p className="flex items-center text-[#1565c0]">
                  <span className="w-2 h-2 #1845B3 rounded-full mr-2"></span>
                  Documentation guidance
                </p>
                <p className="flex items-center text-[#1565c0]">
                  <span className="w-2 h-2 #1845B3 rounded-full mr-2"></span>
                  Pre-departure briefing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection 
        title="Ready to Start Your UK Study Journey?"
        description="Get expert guidance and support for studying in the UK. Our experienced consultants are here to help you achieve your academic goals."
      />
      
      <Footer />
    </div>
  );
};

export default StudyInUK;