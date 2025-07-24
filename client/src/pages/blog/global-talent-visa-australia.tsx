import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Globe, CheckCircle, AlertCircle, Star, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "wouter";
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function GlobalTalentVisaAustralia() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors"
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
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Visa Guides
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Global Talent Visa Australia: Complete Guide 2025
            </h1>
            
            <p className="text-xl text-green-100 mb-6">
              Everything you need to know about Australia's Global Talent Visa program including eligibility requirements, application process, priority sectors, and success tips for skilled professionals.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-green-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 14, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                12 min read
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Trending
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
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Global Talent Visa Australia"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-green-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">What is the Global Talent Visa?</h3>
                </div>
                <p className="text-gray-700">
                  The Global Talent Visa (GTI) is Australia's premier skilled migration program designed to attract exceptional and talented individuals in target sectors to contribute to Australia's economic growth and innovation.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Priority Sectors for 2025</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Technology</h4>
                  <p className="text-sm text-blue-700">AI, cybersecurity, quantum computing, blockchain, and emerging technologies</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Health Industries</h4>
                  <p className="text-sm text-purple-700">Medical technology, pharmaceuticals, biotechnology, and digital health</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Energy & Mining</h4>
                  <p className="text-sm text-green-700">Renewable energy, mining technology, and energy transition</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Space & Advanced Manufacturing</h4>
                  <p className="text-sm text-orange-700">Aerospace, defense, advanced manufacturing, and space technology</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Agri-food & AgTech</h4>
                  <p className="text-sm text-red-700">Agricultural technology, food security, and sustainable farming</p>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-800 mb-2">Infrastructure & Tourism</h4>
                  <p className="text-sm text-teal-700">Smart cities, transport, sustainable tourism, and infrastructure</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Requirements</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Key Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Exceptional talent:</strong> Internationally recognized record of exceptional and outstanding achievements
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Priority sector:</strong> Talent must be in one of the designated priority sectors
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Salary threshold:</strong> Ability to earn the Fair Work High Income Threshold (currently AUD $167,500)
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Australian nomination:</strong> Nomination by an Australian organization or individual
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Health and character:</strong> Meet health and character requirements
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Step-by-Step Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                    <div>
                      <strong>Expression of Interest (EOI)</strong>
                      <p className="text-sm text-gray-600 mt-1">Submit your EOI through SkillSelect with detailed evidence of your exceptional talent</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                    <div>
                      <strong>Department Assessment</strong>
                      <p className="text-sm text-gray-600 mt-1">Department of Home Affairs reviews your EOI and supporting documents</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                    <div>
                      <strong>Invitation to Apply</strong>
                      <p className="text-sm text-gray-600 mt-1">If successful, you'll receive an invitation to lodge a visa application</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                    <div>
                      <strong>Visa Application</strong>
                      <p className="text-sm text-gray-600 mt-1">Submit your visa application with all required documents within 60 days</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">5</span>
                    <div>
                      <strong>Final Assessment</strong>
                      <p className="text-sm text-gray-600 mt-1">Department conducts final assessment including health and character checks</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Essential Documentation</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Detailed CV with evidence of exceptional achievements</li>
                  <li>Academic qualifications and transcripts</li>
                  <li>Evidence of international recognition (awards, publications, patents)</li>
                  <li>Letters of recommendation from industry leaders</li>
                  <li>Employment contracts or job offers showing salary threshold</li>
                  <li>Australian nomination from eligible nominator</li>
                  <li>Health examination results</li>
                  <li>Character clearance certificates</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of the Global Talent Visa</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Award className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Permanent Residency</h3>
                  <p className="text-gray-600">Direct pathway to permanent residency without temporary visa requirements</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Users className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Family Inclusion</h3>
                  <p className="text-gray-600">Include your spouse/partner and dependent children in your application</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Globe className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Work Anywhere</h3>
                  <p className="text-gray-600">Freedom to work anywhere in Australia in your field of expertise</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <TrendingUp className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Citizenship Path</h3>
                  <p className="text-gray-600">Eligible for Australian citizenship after meeting residency requirements</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Success Tips</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Maximizing Your Chances</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Build a strong profile:</strong> Highlight your exceptional achievements and international recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Secure strong nominations:</strong> Get nominations from reputable Australian organizations or individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Professional assistance:</strong> Consider working with registered migration agents familiar with GTI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Quality over quantity:</strong> Focus on exceptional achievements rather than volume of work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Stay updated:</strong> Monitor changes in priority sectors and program requirements</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Times and Costs</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Stage</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Processing Time</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Expression of Interest</td>
                      <td className="border border-gray-300 px-4 py-2">3-6 months</td>
                      <td className="border border-gray-300 px-4 py-2">Free</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">Visa Application</td>
                      <td className="border border-gray-300 px-4 py-2">6-12 months</td>
                      <td className="border border-gray-300 px-4 py-2">AUD $4,710</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Additional charges</td>
                      <td className="border border-gray-300 px-4 py-2">N/A</td>
                      <td className="border border-gray-300 px-4 py-2">Health/Character checks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Apply for Global Talent Visa?</h3>
                <p className="mb-4">
                  Our expert team at Dunya Consultants has successfully guided numerous professionals through the Global Talent Visa process. Let us help you achieve your Australian dream.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Expert Guidance
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
                  <li><a href="#sectors" className="text-blue-600 hover:text-blue-800">Priority Sectors</a></li>
                  <li><a href="#eligibility" className="text-blue-600 hover:text-blue-800">Eligibility Requirements</a></li>
                  <li><a href="#process" className="text-blue-600 hover:text-blue-800">Application Process</a></li>
                  <li><a href="#documents" className="text-blue-600 hover:text-blue-800">Required Documents</a></li>
                  <li><a href="#benefits" className="text-blue-600 hover:text-blue-800">Benefits</a></li>
                  <li><a href="#tips" className="text-blue-600 hover:text-blue-800">Success Tips</a></li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Subclass:</span>
                    <span className="font-semibold">858</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing:</span>
                    <span className="font-semibold">6-12 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-semibold">AUD $4,710</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Validity:</span>
                    <span className="font-semibold">Permanent</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Free Assessment</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                      <option>Select Your Sector</option>
                      <option>Technology</option>
                      <option>Health Industries</option>
                      <option>Energy & Mining</option>
                      <option>Space & Manufacturing</option>
                      <option>Agri-food & AgTech</option>
                      <option>Infrastructure & Tourism</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Get Assessment
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
              Ready to apply for Australia's Global Talent Visa? Contact our expert team for personalized guidance and professional support throughout your application process.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}