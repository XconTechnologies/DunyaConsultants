import { ArrowLeft, Clock, User, Share2, Download, FileText, Users, CheckCircle, AlertCircle, Calendar, CreditCard, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';

export default function HowToApplyIELTSPakistan() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center text-gray-600 hover:text-blue-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>March 10, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>8 min read</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
      }}>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-green-600/80"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">How to Apply For IELTS in Pakistan</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">Complete Guide to IELTS Registration and Application Process</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm">
              <div className="p-8">
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    If you are planning to study or work abroad, taking the IELTS test is an important step. It helps universities 
                    as well as employers check your English skills. Numerous IELTS preparation centers in cities like Lahore, 
                    Karachi, and Islamabad guide students to achieve their goals.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Facts About IELTS</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• IELTS is accepted by over 12,000 organizations worldwide</li>
                      <li>• Available in Academic and General Training versions</li>
                      <li>• Tests can be taken on paper or computer</li>
                      <li>• Registration is available online and offline</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <FileText className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Test Types</h3>
                      </div>
                      <p className="text-gray-700">Choose between IELTS Academic for university admissions or IELTS General Training for immigration purposes.</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Users className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Global Recognition</h3>
                      </div>
                      <p className="text-gray-700">IELTS is recognized by universities, employers, and immigration authorities in over 140 countries worldwide.</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Requirements to Apply for IELTS in Pakistan
                  </h2>
                  <p className="mb-6">
                    For IELTS test registration, you must have the correct documents. Whether you register online or offline, 
                    the test center will check your details. Here's what you need:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Passport or National ID</h4>
                          <p className="text-gray-600">Valid passport or national ID card with matching details used during registration.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Passport-sized Photos</h4>
                          <p className="text-gray-600">Recent passport-sized photographs as required by the test center.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Payment Proof</h4>
                          <p className="text-gray-600">Receipt or bank slip as proof of payment for test registration.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Parental Consent (For under 18)</h4>
                          <p className="text-gray-600">Written permission from parent or guardian if candidate is under 18 years old.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    How to Book IELTS Test in Pakistan?
                  </h2>
                  <p className="mb-6">
                    Here's an easy step-by-step guide to help you register for IELTS Pakistan without any problems:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                        <h3 className="text-xl font-semibold text-gray-900">Register for the IELTS Test</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Go to the official IELTS website and click on "Register for test." Choose the type of test you need: 
                        IELTS Academic or IELTS General Training. Then, decide how you want to take the test – on paper or on a computer.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                        <h3 className="text-xl font-semibold text-gray-900">Choose Your City</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Select the city where you want to take the test. This step is important if you are taking the test on 
                        paper or on a computer at a test center.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                        <h3 className="text-xl font-semibold text-gray-900">Pick a Date & Time</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Choose a test date and time that is best for you. You can check the available dates on the website 
                        and select the one that suits you.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                        <h3 className="text-xl font-semibold text-gray-900">Fill Out the Application Form</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Complete the online application form by entering your details. Before submitting, upload a clear copy 
                        of your passport.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">5</div>
                        <h3 className="text-xl font-semibold text-gray-900">Pay the Test Fee</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Pay the test fee using a Visa or Mastercard debit/credit card. Make sure your card is activated for 
                        online payments. Once you finish these steps, you will receive an email or SMS confirmation.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <h3 className="text-lg font-semibold text-green-900">Confirmation</h3>
                    </div>
                    <p className="text-green-800">
                      After completing all steps, you will receive confirmation via email or SMS with your test booking details 
                      and instructions for test day.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the IELTS registration fee in Pakistan?</h3>
                      <p className="text-gray-700">
                        The IELTS registration fee in Pakistan varies by test center but typically ranges from PKR 45,000 to 
                        PKR 50,000. Check with your local test center for exact pricing.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Is IELTS online registration easy?</h3>
                      <p className="text-gray-700">
                        Yes, IELTS online registration is straightforward. Follow the five-step process: register, choose city, 
                        pick date, fill form, and pay fee. The system is user-friendly and guides you through each step.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I take IELTS online in Pakistan?</h3>
                      <p className="text-gray-700">
                        Yes, IELTS online testing is available in Pakistan. You can choose between paper-based, computer-based, 
                        or online testing depending on your preference and availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#requirements" className="block text-sm text-gray-600 hover:text-blue-600">Requirements to Apply</a>
                  <a href="#booking" className="block text-sm text-gray-600 hover:text-blue-600">How to Book Test</a>
                  <a href="#faqs" className="block text-sm text-gray-600 hover:text-blue-600">FAQs</a>
                </nav>
              </div>

              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-blue-600 mr-3" />
                    <span className="text-sm text-gray-600">(+92) 304 1110947</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-blue-600 mr-3" />
                    <span className="text-sm text-gray-600">query@teamdunya.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 mr-3" />
                    <span className="text-sm text-gray-600">110 Link Stadium Road Sargodha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}