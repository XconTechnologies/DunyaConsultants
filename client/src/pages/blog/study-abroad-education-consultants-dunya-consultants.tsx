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

            {/* Comprehensive Support From Start to Finish */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <CheckCircle className="h-6 w-6 #1845B3 mr-3" />
                Comprehensive Support From Start to Finish
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Complete Support from Day One till you Fly One of the reasons as to why Dunya Consultants distinguish themselves as the Best Study Abroad Consultants in Pakistan, its full services from admission to departure. They ensure no student gets lost in the shuffle.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <Users className="h-10 w-10 #1845B3 mb-4" />
                  <h4 className="text-lg font-semibold text-#1e3a8a mb-3">Career Counseling</h4>
                  <p className="text-[#1565c0] text-sm">
                    Guiding the students to select the best suited country, course and university of their choice according to their academic background and career plans.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-green-100 rounded-lg p-6">
                  <BookOpen className="h-10 w-10 #1845B3 mb-4" />
                  <h4 className="text-lg font-semibold text-#1e3a8a mb-3">University Selection & Applications</h4>
                  <p className="text-[#1565c0] text-sm">
                    Helping to shortlist universities and managing all application documentation to minimize delays or errors.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6">
                  <CheckCircle className="h-10 w-10 #1845B3 mb-4" />
                  <h4 className="text-lg font-semibold text-#1e3a8a mb-3">Visa Guidance & Interview Preparation</h4>
                  <p className="text-[#1565c0] text-sm">
                    We provide guidance step by step through mock interview and question rounds, with the possibilities of visa approval.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-teal-100 rounded-lg p-6">
                  <Globe className="h-10 w-10 #1845B3 mb-4" />
                  <h4 className="text-lg font-semibold text-#1e3a8a mb-3">Pre-Departure Assistance</h4>
                  <p className="text-[#1565c0] text-sm">
                    Giving information about the country that will make you well enough helping you in easing your transition.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                This comprehensive support system is to make sure the student doesn't only apply, but actually arrive in the country of choice, securing admission and beginning studies without struggle.
              </p>
            </div>

            {/* Experience That Builds Trust */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Award className="h-6 w-6 #1845B3 mr-3" />
                Experience That Builds Trust
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Over a decade long experience has earned Dunya Consultants the trust in overseas education services. Their team keeps in touch with the latest visa policies, scholarship and admission requirements of top universities.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-#1e3a8a mb-4">Because of this experience:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">Students gain scientifically based, practical and current advice.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">The odds of getting an admission and visa get much higher.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">Families are more secure, with the peace of mind that comes from working with a trusted counselor.</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The strong success stories and the positive feedback from students from every part of Pakistan is a reflection of why they are known as the Best Study Abroad Consultants in Pakistan.
                </p>
              </div>
            </div>

            {/* IELTS Coaching That Makes a Difference */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <BookOpen className="h-6 w-6 #1845B3 mr-3" />
                IELTS Coaching That Makes a Difference
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The English language is a must for overseas studies and Dunya Consultants is well aware of the importance. That is why they provide IELTS preparation coaching with:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="h-5 w-5 #1845B3 mr-2" />
                    Expert Training
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Experienced trainers</li>
                    <li>• Modern teaching techniques</li>
                    <li>• Individual attention</li>
                    <li>• Free assessments and practice sessions</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 #1845B3 mr-2" />
                    Student Success
                  </h4>
                  <p className="text-gray-700 text-sm">
                    This way, students are not only well educated but confident enough to score high in IELTS and thereby increase their admission prospects in foreign universities.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong Global Partnerships */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Globe className="h-6 w-6 #1845B3 mr-3" />
                Strong Global Partnerships
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Although being one of the leading Study Abroad Consultants in Pakistan, one major reason for why Dunya Consultants is becoming a household brand in today's era is because of its powerful connections with universities worldwide. These partnerships provide students:
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">More options Access to quality institutions in the UK, USA, Canada, Australia, Finland, Turkey & more</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">Simplified admission processes with faster response</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Due to these worldwide links students receive opportunities not possible on their own.
                </p>
              </div>
            </div>

            {/* Why Choose Dunya Consultants? */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Star className="h-6 w-6 #1845B3 mr-3" />
                Why Choose Dunya Consultants?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In one simple words why students choose Dunya consultants over the rest of the consultants:
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">Comprehensive services (counseling, admissions, visas, IELTS, pre-departure).</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">Experienced team with a high success rate.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">Proven track record backed by student success stories.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">IELTS coaching to boost admission chances.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-0.5" />
                    <span className="text-[#1565c0] text-sm">Global university partnerships offering diverse study options.</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  For students and families who seek the trusted source on this industry, refer to Dunya Consultants as the Best Study Abroad Consultants in Pakistan.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">What services do Dunya Consultants provide as study abroad consultants in Pakistan?</h4>
                  <p className="text-gray-700 text-sm">Dunya Consultants offer complete support for students planning to study abroad, including career counselling, help with university selection and applications, IELTS coaching, student visa guidance and interview preparation, and pre-departure assistance. They handle the whole process so students can focus on preparing for their studies.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Which countries and universities can Dunya Consultants help me apply to?</h4>
                  <p className="text-gray-700 text-sm">They work with a wide range of partner universities around the world, including top institutions in the UK, USA, Canada, Australia, Finland and Turkey. Their global partnerships give students more options and smoother application processes.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Do Dunya Consultants provide IELTS coaching and test preparation?</h4>
                  <p className="text-gray-700 text-sm">Yes. Dunya offers professional IELTS coaching with experienced trainers, modern teaching methods, free assessments and personalized practice plans to help students improve their scores and strengthen their university applications.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">How do Dunya Consultants support student visa applications and interview preparation?</h4>
                  <p className="text-gray-700 text-sm">They provide step-by-step visa guidance, document checks, and mock interviews so students feel confident during the visa interview. Their team stays updated on visa rules to give accurate, practical advice that increases the chance of approval.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">What is Dunya Consultants' track record and why should I trust them?</h4>
                  <p className="text-gray-700 text-sm">With over a decade of experience and many positive student testimonials, Dunya has built a reputation for reliable, student-centered service. Their up-to-date knowledge of admissions, scholarships and visa policies helps students get into the right programs with less stress.</p>
                </div>
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
                  <CheckCircle className="h-4 w-4 #1845B3 mt-0.5" />
                  <span className="text-gray-700">More than 5 years since company built</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 #1845B3 mt-0.5" />
                  <span className="text-gray-700">5000+ successful placements</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 #1845B3 mt-0.5" />
                  <span className="text-gray-700">98% visa success rate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 #1845B3 mt-0.5" />
                  <span className="text-gray-700">20+ office locations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 #1845B3 mt-0.5" />
                  <span className="text-gray-700">50+ university partners</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-#1e3a8a mb-4">Popular Destinations</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#1565c0]">United Kingdom</span>
                  <span className="#1845B3 font-medium">Most Popular</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1565c0]">Canada</span>
                  <span className="#1845B3 font-medium">High Demand</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1565c0]">Australia</span>
                  <span className="#1845B3 font-medium">Growing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1565c0]">USA</span>
                  <span className="#1845B3 font-medium">Premium</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1565c0]">Germany</span>
                  <span className="#1845B3 font-medium">Affordable</span>
                </div>
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