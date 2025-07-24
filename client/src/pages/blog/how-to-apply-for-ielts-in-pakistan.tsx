import { ArrowLeft, Clock, User, Share2, FileText, CheckCircle, AlertCircle, BookOpen, Award, Users, Target, Globe, TrendingUp, Star, MapPin, Calendar, CreditCard, Phone } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function HowToApplyForIELTSInPakistan() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                IELTS Registration
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              How to Apply for IELTS in Pakistan: Complete Guide 2025
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Step-by-step guide to register for IELTS in Pakistan, including test centers, fees, booking process, and important requirements.
            </p>
            <div className="flex items-center justify-center space-x-6 text-teal-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>10 min read</span>
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
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
                  alt="IELTS Registration in Pakistan"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The International English Language Testing System (IELTS) is a crucial requirement for students and professionals planning to study or work abroad. In Pakistan, IELTS is conducted by the British Council and IDP Education. This comprehensive guide will walk you through the complete application process for IELTS in Pakistan.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
                  IELTS Test Providers in Pakistan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-teal-900 mb-3">British Council</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Website:</strong> britishcouncil.org.pk</p>
                      <p><strong>Phone:</strong> +92-42-111-11-7272</p>
                      <p><strong>Email:</strong> customer.service@britishcouncil.org.pk</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">IDP Education</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Website:</strong> idpielts.com</p>
                      <p><strong>Phone:</strong> +92-42-111-111-432</p>
                      <p><strong>Email:</strong> info@idp.com</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
                  IELTS Test Types
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">IELTS Academic</h3>
                    <p className="text-gray-700 mb-3">
                      Designed for students who want to study at undergraduate or postgraduate levels in English-speaking countries.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Suitable for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• University admissions</li>
                        <li>• Graduate programs</li>
                        <li>• Professional registration</li>
                        <li>• Academic purposes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">IELTS General Training</h3>
                    <p className="text-gray-700 mb-3">
                      Designed for people who want to migrate to English-speaking countries or for work and training purposes.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Suitable for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Immigration purposes</li>
                        <li>• Work visas</li>
                        <li>• Training programs</li>
                        <li>• Secondary education</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
                  IELTS Test Centers in Pakistan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-blue-900">Lahore</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• British Council Lahore</li>
                      <li>• IDP Education Lahore</li>
                      <li>• Kinnaird College for Women</li>
                      <li>• LUMS School of Education</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-green-900">Karachi</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• British Council Karachi</li>
                      <li>• IDP Education Karachi</li>
                      <li>• Aga Khan University</li>
                      <li>• Institute of Business Administration</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="text-lg font-semibold text-purple-900">Islamabad</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• British Council Islamabad</li>
                      <li>• IDP Education Islamabad</li>
                      <li>• Foundation University</li>
                      <li>• National University of Modern Languages</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-orange-600 mr-2" />
                      <h3 className="text-lg font-semibold text-orange-900">Other Cities</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Faisalabad</li>
                      <li>• Multan</li>
                      <li>• Peshawar</li>
                      <li>• Quetta</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
                  IELTS Registration Process
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-teal-900 mb-3">Step 1: Choose Test Type and Provider</h3>
                    <p className="text-gray-700 mb-3">
                      Decide whether you need IELTS Academic or General Training based on your purpose (study vs. immigration).
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Decision Factors:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Your destination country requirements</li>
                        <li>• University or employer specifications</li>
                        <li>• Immigration category requirements</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Step 2: Create Online Account</h3>
                    <p className="text-gray-700 mb-3">
                      Visit the official website of British Council or IDP Education and create your account with accurate personal information.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Required Information:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Full name (as per passport)</li>
                        <li>• Date of birth</li>
                        <li>• Email address</li>
                        <li>• Phone number</li>
                        <li>• Postal address</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">Step 3: Select Test Date and Center</h3>
                    <p className="text-gray-700 mb-3">
                      Choose your preferred test date and center from available options. Book early as popular dates fill up quickly.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Booking Tips:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Book at least 2-3 weeks in advance</li>
                        <li>• Check availability regularly</li>
                        <li>• Consider multiple test centers</li>
                        <li>• Avoid peak seasons (March-May, September-November)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Step 4: Complete Payment</h3>
                    <p className="text-gray-700 mb-3">
                      Pay the test fee online using credit/debit card or through bank transfer. The fee is approximately PKR 52,000.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Methods:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Credit/Debit Cards (Visa, MasterCard)</li>
                        <li>• Bank Transfer</li>
                        <li>• Online Banking</li>
                        <li>• Payment at test center (limited availability)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-900 mb-3">Step 5: Receive Confirmation</h3>
                    <p className="text-gray-700 mb-3">
                      After successful payment, you'll receive a confirmation email with your test details and important instructions.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Confirmation Details:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Test date and time</li>
                        <li>• Test center address</li>
                        <li>• Candidate number</li>
                        <li>• Required documents list</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
                  IELTS Test Fees in Pakistan
                </h2>

                <div className="bg-white p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <CreditCard className="w-5 h-5 text-teal-600 mr-2" />
                        <span className="font-semibold text-gray-900">British Council</span>
                      </div>
                      <p className="text-2xl font-bold text-teal-600">PKR 52,000</p>
                      <p className="text-sm text-gray-600">For both Academic and General Training</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">IDP Education</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">PKR 52,000</p>
                      <p className="text-sm text-gray-600">For both Academic and General Training</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
                  Required Documents
                </h2>

                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4">On Registration</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span>Valid passport or national ID card</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span>Recent passport-sized photograph</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span>Payment method (credit/debit card)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">On Test Day</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <span>Original passport (primary identification)</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <span>Test confirmation email (printed copy)</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <span>Pencils, erasers (if permitted by test center)</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
                  Important Deadlines and Policies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-900 mb-3">Cancellation Policy</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 5+ weeks before: 75% refund</li>
                      <li>• 2-5 weeks before: 50% refund</li>
                      <li>• Less than 2 weeks: No refund</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Transfer Policy</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 5+ weeks before: Free transfer</li>
                      <li>• 2-5 weeks before: 50% fee</li>
                      <li>• Less than 2 weeks: Full fee</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
                  Preparation Tips
                </h2>

                <div className="bg-teal-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-teal-900 mb-4">Before You Register</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <span>Take a practice test to assess your current level</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <span>Allow 2-3 months for adequate preparation</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <span>Determine your target band score</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <span>Consider enrolling in a preparation course</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Can I take IELTS multiple times?</h4>
                      <p className="text-gray-700">Yes, there's no limit on the number of times you can take IELTS. You can retake the test as many times as needed.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How long are IELTS results valid?</h4>
                      <p className="text-gray-700">IELTS results are valid for 2 years from the test date. After that, you'll need to take the test again.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">When will I receive my results?</h4>
                      <p className="text-gray-700">Results are typically available online 13 days after your test date. You'll receive an email notification.</p>
                    </div>
                  </div>
                </div>

                {/* Social Share */}
                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                  <div className="flex space-x-4">
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                      <Share2 className="w-4 h-4 mr-2 inline" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Form */}
              <ContactForm />
              
              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CreditCard className="w-4 h-4 mr-2" />
                    <span>Fee: PKR 52,000</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Duration: 2 hours 45 minutes</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Centers: 20+ locations</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Validity: 2 years</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#providers" className="text-teal-600 hover:underline">Test Providers</a></li>
                  <li><a href="#types" className="text-teal-600 hover:underline">Test Types</a></li>
                  <li><a href="#centers" className="text-teal-600 hover:underline">Test Centers</a></li>
                  <li><a href="#registration" className="text-teal-600 hover:underline">Registration Process</a></li>
                  <li><a href="#fees" className="text-teal-600 hover:underline">Test Fees</a></li>
                  <li><a href="#documents" className="text-teal-600 hover:underline">Required Documents</a></li>
                </ul>
              </div>

              {/* Share */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="flex-1 bg-sky-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-sky-600 transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-blue-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-800 transition-colors">
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to register for IELTS? Contact our expert team for guidance on test registration, preparation strategies, and comprehensive support for your English language testing journey.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}