import { ArrowLeft, Clock, User, Share2, DollarSign, CheckCircle, AlertCircle, FileText, BookOpen, Award, Users, Target, Globe, TrendingUp, Star, Calculator, MapPin, Calendar, CreditCard } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function GMATTestFeeInPakistan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                GMAT Test
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              GMAT Test Fee in Pakistan: Complete Cost Guide 2025
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Everything you need to know about GMAT test fees, registration costs, and additional charges for Pakistani students planning to take the GMAT.
            </p>
            <div className="flex items-center justify-center space-x-6 text-orange-200">
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
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                  alt="GMAT Test Fee in Pakistan"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Graduate Management Admission Test (GMAT) is a crucial requirement for admission to MBA programs worldwide. For Pakistani students planning to take the GMAT, understanding the complete cost structure is essential for proper financial planning. This comprehensive guide covers all GMAT-related fees and costs in Pakistan.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                  GMAT Test Fee Structure 2025
                </h2>

                <div className="bg-orange-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Current GMAT Fees</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <DollarSign className="w-5 h-5 text-orange-600 mr-2" />
                        <span className="font-semibold text-gray-900">GMAT Focus Edition</span>
                      </div>
                      <p className="text-2xl font-bold text-orange-600">$300 USD</p>
                      <p className="text-sm text-gray-600">≈ PKR 83,400 (approx.)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calculator className="w-5 h-5 text-orange-600 mr-2" />
                        <span className="font-semibold text-gray-900">Enhanced Score Report</span>
                      </div>
                      <p className="text-2xl font-bold text-orange-600">$30 USD</p>
                      <p className="text-sm text-gray-600">≈ PKR 8,340 (approx.)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <div className="flex items-center mb-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-semibold text-yellow-900">Important Note</h3>
                  </div>
                  <p className="text-gray-700">
                    The PKR amount may vary based on current exchange rates. The test fee must be paid in USD through international payment methods.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                  Additional GMAT Fees and Services
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Score Reporting Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Additional Score Report</span>
                        <span className="font-semibold text-orange-600">$35 USD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Score Reinstatement</span>
                        <span className="font-semibold text-orange-600">$50 USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Rescheduling and Cancellation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Reschedule (more than 24 hours)</span>
                        <span className="font-semibold text-orange-600">$60 USD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Cancellation Refund</span>
                        <span className="font-semibold text-orange-600">$80 USD</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                  GMAT Test Centers in Pakistan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-blue-900">Lahore</h3>
                    </div>
                    <p className="text-gray-700 mb-2">Test Center: Pearson Professional Centers</p>
                    <p className="text-sm text-gray-600">Location: Liberty Market, Gulberg III</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-green-900">Karachi</h3>
                    </div>
                    <p className="text-gray-700 mb-2">Test Center: Pearson Professional Centers</p>
                    <p className="text-sm text-gray-600">Location: Clifton, Block 5</p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="text-lg font-semibold text-purple-900">Islamabad</h3>
                    </div>
                    <p className="text-gray-700 mb-2">Test Center: Pearson Professional Centers</p>
                    <p className="text-sm text-gray-600">Location: Blue Area, F-6</p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-red-600 mr-2" />
                      <h3 className="text-lg font-semibold text-red-900">Online Option</h3>
                    </div>
                    <p className="text-gray-700 mb-2">GMAT Online</p>
                    <p className="text-sm text-gray-600">Take the test from home</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                  Payment Methods for Pakistani Students
                </h2>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Accepted Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <CreditCard className="w-5 h-5 text-blue-600 mr-3" />
                      <span><strong>Credit/Debit Cards:</strong> Visa, MasterCard, American Express</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="w-5 h-5 text-blue-600 mr-3" />
                      <span><strong>PayPal:</strong> International PayPal account with USD balance</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Target className="w-5 h-5 text-blue-600 mr-3" />
                      <span><strong>Bank Transfer:</strong> International wire transfer (additional fees apply)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4">Payment Tips for Pakistani Students</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span>Ensure your card has international transaction enabled</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span>Check with your bank about foreign exchange rates</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span>Consider using a US Dollar account for better rates</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span>Keep payment confirmation receipts for records</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                  GMAT Registration Process
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">Step 1: Create GMAT Account</h3>
                    <p className="text-gray-700">
                      Visit mba.com and create your GMAT account with valid personal information matching your passport.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Step 2: Choose Test Format</h3>
                    <p className="text-gray-700">
                      Select between GMAT Focus Edition (in-person) or GMAT Online based on your preference and convenience.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">Step 3: Select Test Center and Date</h3>
                    <p className="text-gray-700">
                      Choose your preferred test center in Pakistan and select an available date that suits your preparation timeline.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Step 4: Complete Payment</h3>
                    <p className="text-gray-700">
                      Pay the test fee using your preferred payment method. Ensure your payment method supports international transactions.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-900 mb-3">Step 5: Receive Confirmation</h3>
                    <p className="text-gray-700">
                      After successful payment, you'll receive a confirmation email with your appointment details and important instructions.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                  Cost Comparison: GMAT vs Other Tests
                </h2>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">GMAT Focus</h3>
                      <p className="text-2xl font-bold text-orange-600">$300</p>
                      <p className="text-sm text-gray-600">≈ PKR 83,400</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">GRE General</h3>
                      <p className="text-2xl font-bold text-blue-600">$220</p>
                      <p className="text-sm text-gray-600">≈ PKR 61,160</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">IELTS Academic</h3>
                      <p className="text-2xl font-bold text-green-600">$245</p>
                      <p className="text-sm text-gray-600">≈ PKR 68,110</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                  Money-Saving Tips for Pakistani Students
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Preparation Strategy</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Use free GMAT prep materials first</li>
                      <li>• Take advantage of free practice tests</li>
                      <li>• Join study groups to share resources</li>
                      <li>• Consider online coaching over expensive courses</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Test Taking Tips</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Take the test only when fully prepared</li>
                      <li>• Avoid multiple retakes (additional fees)</li>
                      <li>• Consider GMAT Online if more convenient</li>
                      <li>• Register early to avoid last-minute fees</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Can I pay GMAT fee in Pakistani Rupees?</h4>
                      <p className="text-gray-700">No, the GMAT fee must be paid in USD. However, your bank will convert PKR to USD during the transaction.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Is there any fee waiver available for Pakistani students?</h4>
                      <p className="text-gray-700">GMAC offers fee waivers for eligible candidates facing financial hardship. You need to apply through the official GMAT website.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What happens if I need to reschedule my test?</h4>
                      <p className="text-gray-700">You can reschedule your test for $60 USD if done more than 24 hours before the appointment. Last-minute changes may incur higher fees.</p>
                    </div>
                  </div>
                </div>

                {/* Social Share */}
                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                  <div className="flex space-x-4">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
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
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>Test Fee: $300 USD</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Duration: 2 hours 15 minutes</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Centers: Lahore, Karachi, Islamabad</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>Online Option: Available</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#fees" className="text-orange-600 hover:underline">GMAT Fee Structure</a></li>
                  <li><a href="#additional" className="text-orange-600 hover:underline">Additional Services</a></li>
                  <li><a href="#centers" className="text-orange-600 hover:underline">Test Centers</a></li>
                  <li><a href="#payment" className="text-orange-600 hover:underline">Payment Methods</a></li>
                  <li><a href="#registration" className="text-orange-600 hover:underline">Registration Process</a></li>
                  <li><a href="#comparison" className="text-orange-600 hover:underline">Cost Comparison</a></li>
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
              Need help with GMAT registration or have questions about the test fees? Contact our expert team for comprehensive guidance on your GMAT journey.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}