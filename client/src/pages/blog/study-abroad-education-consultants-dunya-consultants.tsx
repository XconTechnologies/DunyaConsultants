import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/blog/ContactForm";
import ContactSection from "@/components/blog/ContactSection";
import { Calendar, Clock, User, Eye, ChevronRight, CheckCircle, Globe, Users, BookOpen, Award, Target, TrendingUp, Star, Heart, ArrowRight } from "lucide-react";

const StudyAbroadEducationConsultants = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full h-80 bg-gradient-to-br from-green-600 via-teal-600 to-blue-800 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-teal-900/70 to-blue-900/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Study Abroad Education Consultants
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Your Trusted Partner for International Education Success
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Studying abroad has become a highly sought-after opportunity for students worldwide, and Pakistani students are no exception. The chance to experience new cultures, gain global exposure, and enhance career prospects are just a few reasons that make studying abroad an attractive option for ambitious students seeking quality education and international exposure.
              </p>
            </div>

            {/* Benefits of Studying Abroad */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Globe className="h-6 w-6 text-green-600 mr-3" />
                Benefits of Studying Abroad
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Here are some key benefits that make studying abroad a worthwhile experience for Pakistani students:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <Globe className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Global Exposure</h4>
                  <p className="text-blue-800 text-sm">
                    Studying abroad exposes Pakistani students to different cultures, languages, and teaching methodologies. This exposure helps them develop a broader perspective on life and adapt to various situations in their personal and professional lives.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <Users className="h-10 w-10 text-green-600 mb-4" />
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Personal Growth</h4>
                  <p className="text-green-800 text-sm">
                    Living and studying in a foreign country can be challenging but often leads to significant personal growth. Students become more independent, learn to navigate new environments, and develop essential problem-solving skills.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">Enhanced Career Prospects</h4>
                  <p className="text-purple-800 text-sm">
                    International education credentials are highly valued by employers worldwide. Graduates with foreign degrees often have better job prospects and higher earning potential in the global job market.
                  </p>
                </div>
              </div>
            </div>

            {/* The Need for Education Consultants */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <BookOpen className="h-6 w-6 text-orange-600 mr-3" />
                The Need for Education Consultants
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Navigating the complex world of international education can be overwhelming for students and their families. From choosing the right program and university to understanding visa requirements and cultural differences, the process involves numerous challenges that require expert guidance and support.
              </p>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-4">Why Students Need Professional Guidance</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-orange-800 text-sm">Complex application processes</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-orange-800 text-sm">Visa documentation requirements</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-orange-800 text-sm">University selection criteria</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-orange-800 text-sm">Financial planning and scholarships</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-orange-800 text-sm">Cultural adaptation guidance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-orange-800 text-sm">Pre-departure preparation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Role of Abroad Education Consultants */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Target className="h-6 w-6 text-blue-600 mr-3" />
                Role of Abroad Education Consultants
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Professional education consultants play a crucial role in making the study abroad journey smooth and successful. They provide comprehensive support throughout the entire process, from initial counseling to post-arrival assistance.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    Choosing the Right Program
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Education consultants help students identify the most suitable programs based on their academic background, career goals, and financial situation. They provide detailed information about various universities, their rankings, and program offerings.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Academic program assessment and matching</li>
                    <li>• University rankings and reputation analysis</li>
                    <li>• Career prospects and alumni networks</li>
                    <li>• Financial considerations and cost analysis</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Assistance with Documentation and Visa Processing
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    One of the most critical aspects of studying abroad is proper documentation and visa processing. Consultants ensure all documents are correctly prepared and submitted within deadlines.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Document preparation and verification</li>
                    <li>• Visa application guidance and support</li>
                    <li>• Interview preparation and coaching</li>
                    <li>• Financial documentation assistance</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Globe className="h-5 w-5 text-purple-600 mr-2" />
                    Pre-departure Guidance
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Consultants provide comprehensive pre-departure briefings to help students prepare for their new academic and cultural environment.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cultural orientation and adaptation tips</li>
                    <li>• Accommodation and housing guidance</li>
                    <li>• Banking and financial setup assistance</li>
                    <li>• Travel and arrival preparation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dunya Consultants: The Best Choice */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Star className="h-6 w-6 text-yellow-600 mr-3" />
                Dunya Consultants: The Best Choice for Pakistani Students
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dunya Consultants has established itself as a leading education consultancy in Pakistan, helping thousands of students achieve their international education dreams. Our comprehensive services and experienced team make us the ideal partner for your study abroad journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
                  <Award className="h-10 w-10 text-yellow-600 mb-4" />
                  <h4 className="text-lg font-semibold text-yellow-900 mb-3">Expertise and Experience</h4>
                  <p className="text-yellow-800 text-sm">
                    With years of experience in international education, our team of experts understands the unique challenges faced by Pakistani students and provides tailored solutions to overcome them.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                  <Users className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Customized Counseling</h4>
                  <p className="text-blue-800 text-sm">
                    We believe that every student is unique, which is why we provide personalized counseling sessions to understand individual needs and create customized study plans.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6">
                  <Globe className="h-10 w-10 text-green-600 mb-4" />
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Strong International Network</h4>
                  <p className="text-green-800 text-sm">
                    Our extensive network of partner universities and institutions worldwide ensures that our students have access to the best educational opportunities available.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                  <Heart className="h-10 w-10 text-purple-600 mb-4" />
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">Continuous Support</h4>
                  <p className="text-purple-800 text-sm">
                    Our commitment to students doesn't end with admission. We provide ongoing support throughout their academic journey and beyond.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Our Comprehensive Services</h3>
              <div className="bg-white rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Academic Services</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span>University selection and application</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span>Course and program counseling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span>Scholarship guidance and applications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span>Academic document preparation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Support Services</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span>Visa application and processing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span>Interview preparation and coaching</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span>Pre-departure orientation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span>Post-arrival assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Why do Pakistani students need education consultants for studying abroad?</h4>
                  <p className="text-gray-700 text-sm">Pakistani students benefit from education consultants because they provide expert guidance on complex application processes, visa requirements, and cultural adaptation, making the study abroad journey smoother and more successful.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">How do Dunya Consultants help Pakistani students choose the right study abroad program?</h4>
                  <p className="text-gray-700 text-sm">We provide personalized counseling sessions to understand each student's academic background, career goals, and financial situation, then recommend the most suitable programs and universities that align with their objectives.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">What kind of pre-departure guidance do Dunya Consultants offer?</h4>
                  <p className="text-gray-700 text-sm">Our pre-departure services include cultural orientation, accommodation guidance, banking setup assistance, travel preparation, and comprehensive briefings about academic and social life in the destination country.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">How does Dunya Consultants' international network benefit Pakistani students?</h4>
                  <p className="text-gray-700 text-sm">Our extensive network of partner universities and institutions worldwide ensures students have access to the best educational opportunities, scholarship programs, and preferential admission processes.</p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Wrapping It Up</h3>
              <p className="text-gray-700 leading-relaxed">
                Choosing the right education consultant is crucial for a successful study abroad experience. Dunya Consultants combines expertise, experience, and personalized service to ensure that Pakistani students achieve their international education goals. With our comprehensive support and strong international network, we are committed to making your study abroad dreams a reality.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                <p className="text-center text-gray-800 font-medium">
                  Ready to start your international education journey? Contact Dunya Consultants today for expert guidance and support.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <ContactForm />
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Dunya Consultants?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">15+ years of experience</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">5000+ successful placements</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">98% visa success rate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">17+ office locations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">400+ university partnerships</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Popular Destinations</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">United Kingdom</span>
                  <span className="text-blue-600 font-medium">Most Popular</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Canada</span>
                  <span className="text-blue-600 font-medium">High Demand</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Australia</span>
                  <span className="text-blue-600 font-medium">Growing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">USA</span>
                  <span className="text-blue-600 font-medium">Premium</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Germany</span>
                  <span className="text-blue-600 font-medium">Affordable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection 
        title="Ready to Begin Your Study Abroad Journey?"
        description="Connect with our expert education consultants and take the first step towards your international education success."
      />
      
      <Footer />
    </div>
  );
};

export default StudyAbroadEducationConsultants;