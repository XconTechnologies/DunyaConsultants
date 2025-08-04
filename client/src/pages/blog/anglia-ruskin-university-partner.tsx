import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Award, Globe, CheckCircle, AlertCircle, Star, TrendingUp, Users, BookOpen } from "lucide-react";
import { Link } from "wouter";
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function AngliaRuskinUniversityPartner() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                University Partnership
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Anglia Ruskin University – A Trusted Partner of Dunya Consultants
            </h1>
            
            <p className="text-xl text-blue-100 mb-6">
              Discover why Anglia Ruskin University is the perfect choice for Pakistani students seeking quality education in the UK. Complete guide to programs, rankings, and admission requirements.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 13, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                10 min read
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Featured
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Anglia Ruskin University"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">About Anglia Ruskin University</h3>
                </div>
                <p className="text-gray-700">
                  Anglia Ruskin University (ARU) is a prestigious public university in East Anglia, UK, with a rich history spanning 162 years. Named "University of the Year" in 2023, ARU is renowned for its innovative approach and student-centered education.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Anglia Ruskin University?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Award className="h-8 w-8 text-blue-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Gold Teaching Excellence</h3>
                  <p className="text-gray-600">ARU has been awarded a Gold rating for teaching excellence and won Times Higher Education University of the Year 2023.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Users className="h-8 w-8 text-blue-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Student Support</h3>
                  <p className="text-gray-600">Comprehensive support system with flexible study options to help students balance education with personal life.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Globe className="h-8 w-8 text-blue-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Global Recognition</h3>
                  <p className="text-gray-600">Ranked among the top universities in the UK and worldwide by Times Higher Education rankings.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <TrendingUp className="h-8 w-8 text-blue-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Career Success</h3>
                  <p className="text-gray-600">High employment rates with strong industry partnerships providing internships and work experience.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic Programs</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Popular Programs at ARU</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Business and Management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Computer Science & IT</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Health & Social Care</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Engineering</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Psychology</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Law</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Arts & Media</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Education</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Life Sciences</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Nursing</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">University Rankings</h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">ARU's Position in Global Rankings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Times University Guide 2024</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">115th UK</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Guardian University Guide 2024</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">102nd UK</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">THE World University Rankings</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">301-350 Global</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">US News Global Universities</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">814th Global</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partnership with Dunya Consultants</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">How We Support Pakistani Students</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Complete Application Support:</strong> From choosing the right program to submitting your application
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Visa Guidance:</strong> Expert assistance with UK student visa applications and requirements
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Scholarship Opportunities:</strong> Guidance on available scholarships and financial aid options
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Pre-departure Support:</strong> Comprehensive briefing on UK life, culture, and academic expectations
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Ongoing Support:</strong> Continuous assistance throughout your studies at ARU
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Entry Requirements</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong>Undergraduate Programs:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Completion of 12 years of education (A-levels or equivalent)</li>
                      <li>IELTS 6.0 overall with no band below 5.5</li>
                      <li>Academic transcripts and certificates</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Postgraduate Programs:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Bachelor's degree from recognized institution</li>
                      <li>IELTS 6.5 overall with no band below 6.0</li>
                      <li>Personal statement and references</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Campus Life and Facilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Modern Facilities</h4>
                  <p className="text-sm text-blue-700">State-of-the-art laboratories, libraries, and learning spaces equipped with latest technology</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Student Accommodation</h4>
                  <p className="text-sm text-blue-700">Comfortable and secure on-campus housing options with modern amenities</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Sports & Recreation</h4>
                  <p className="text-sm text-blue-700">Comprehensive sports facilities including gym, swimming pool, and sports courts</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Student Support</h4>
                  <p className="text-sm text-blue-700">Dedicated international student support services and counseling</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Graduate Employment Success</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>High employment rates:</strong> 95% of graduates find employment within 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Industry connections:</strong> Strong partnerships with leading employers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Career services:</strong> Comprehensive support from day one through graduation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Work placements:</strong> Opportunities for internships and practical experience</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">What are ARU's English language requirements?</h4>
                  <p className="text-gray-700">International students need a minimum IELTS score of 6.0 overall with no band below 5.5 for undergraduate programs, and 6.5 overall with no band below 6.0 for postgraduate programs.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">How can I get admission to Anglia Ruskin University?</h4>
                  <p className="text-gray-700">Apply through UCAS for undergraduate programs or directly to the university for postgraduate programs. Dunya Consultants provides complete application support throughout the process.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Are scholarships available for Pakistani students?</h4>
                  <p className="text-gray-700">Yes, ARU offers various scholarships including merit-based awards and international student scholarships. Our team can help you identify and apply for suitable funding options.</p>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Study at Anglia Ruskin University?</h3>
                <p className="mb-4">
                  As a trusted partner of ARU, Dunya Consultants provides comprehensive support for Pakistani students. From application to arrival, we're here to make your UK education dream a reality.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Application
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#why-choose" className="text-blue-600 hover:text-blue-800">Why Choose ARU</a></li>
                  <li><a href="#programs" className="text-blue-600 hover:text-blue-800">Academic Programs</a></li>
                  <li><a href="#rankings" className="text-blue-600 hover:text-blue-800">University Rankings</a></li>
                  <li><a href="#partnership" className="text-blue-600 hover:text-blue-800">Partnership Benefits</a></li>
                  <li><a href="#admission" className="text-blue-600 hover:text-blue-800">Admission Requirements</a></li>
                  <li><a href="#campus" className="text-blue-600 hover:text-blue-800">Campus Life</a></li>
                  <li><a href="#careers" className="text-blue-600 hover:text-blue-800">Career Opportunities</a></li>
                </ul>
              </div>

              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-semibold">1858</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold">35,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Campuses:</span>
                    <span className="font-semibold">Cambridge & Chelmsford</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Teaching Award:</span>
                    <span className="font-semibold">Gold Rating</span>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply to ARU</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Select Program Level</option>
                      <option>Undergraduate</option>
                      <option>Postgraduate</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get Information
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to apply to Anglia Ruskin University? Contact our expert team for personalized guidance and comprehensive support throughout your application journey.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}