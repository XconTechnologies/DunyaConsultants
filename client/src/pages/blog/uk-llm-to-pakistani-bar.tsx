import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Scale, CheckCircle, AlertCircle, FileText, BookOpen, Award, Users } from "lucide-react";
import { Link } from "wouter";
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function UKLLMToPakistaniBar() {
  return (
    <div className="min-h-screen bg-white">
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white">
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
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Legal Education
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              From UK LLM to Pakistani Bar: How to Convert Your Degree for Legal Practice?
            </h1>
            
            <p className="text-xl text-blue-100 mb-6">
              Complete guide for Pakistani law graduates on how to convert their UK LLM degree for legal practice in Pakistan, including requirements, procedures, and career opportunities.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 9, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                12 min read
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
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="UK LLM to Pakistani Bar Conversion"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <Scale className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Understanding the Conversion Process</h3>
                </div>
                <p className="text-gray-700">
                  Converting a UK LLM degree for practice in Pakistan involves several steps through the Higher Education Commission (HEC) and Pakistan Bar Council. This guide provides a comprehensive roadmap for Pakistani law graduates.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Conversion Process</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Complete Conversion Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                    <div>
                      <strong>HEC Equivalence Certificate</strong>
                      <p className="text-sm text-gray-600 mt-1">Apply for degree equivalence from Higher Education Commission (HEC) Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                    <div>
                      <strong>Document Verification</strong>
                      <p className="text-sm text-gray-600 mt-1">Verify all UK academic documents through Pakistani Embassy/High Commission</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                    <div>
                      <strong>Bar Council Registration</strong>
                      <p className="text-sm text-gray-600 mt-1">Apply for enrollment with Provincial Bar Council</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                    <div>
                      <strong>Legal Practice Certificate</strong>
                      <p className="text-sm text-gray-600 mt-1">Obtain license to practice law in Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">5</span>
                    <div>
                      <strong>Continuous Professional Development</strong>
                      <p className="text-sm text-gray-600 mt-1">Complete mandatory CPD requirements</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">HEC Equivalence Requirements</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Required Documents for HEC</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Original UK LLM degree:</strong> Issued by recognized UK university
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Academic transcripts:</strong> Complete record of courses and grades
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Undergraduate law degree:</strong> LLB or equivalent from Pakistan/recognized institution
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Passport copies:</strong> All relevant pages showing UK residence
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Verification documents:</strong> Attested by Pakistani Embassy/High Commission
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bar Council Enrollment Process</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Provincial Bar Council Requirements</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong>Punjab Bar Council:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>HEC equivalence certificate</li>
                      <li>Character certificate from magistrate</li>
                      <li>Medical fitness certificate</li>
                      <li>Enrollment fee payment</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Sindh Bar Council:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Similar requirements with additional affidavit</li>
                      <li>Proof of legal education completion</li>
                      <li>Verification of UK degree</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline and Costs</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Process</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cost (PKR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">HEC Equivalence</td>
                      <td className="border border-gray-300 px-4 py-2">2-4 months</td>
                      <td className="border border-gray-300 px-4 py-2">15,000-25,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">Document Verification</td>
                      <td className="border border-gray-300 px-4 py-2">1-2 months</td>
                      <td className="border border-gray-300 px-4 py-2">5,000-10,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Bar Council Enrollment</td>
                      <td className="border border-gray-300 px-4 py-2">1-3 months</td>
                      <td className="border border-gray-300 px-4 py-2">20,000-35,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">Total Process</td>
                      <td className="border border-gray-300 px-4 py-2">4-9 months</td>
                      <td className="border border-gray-300 px-4 py-2">40,000-70,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <FileText className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Corporate Law</h3>
                  <p className="text-gray-600">Join multinational corporations as legal counsel with expertise in international law.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Users className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Law Firms</h3>
                  <p className="text-gray-600">Work with top-tier law firms handling international transactions and disputes.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <BookOpen className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Academia</h3>
                  <p className="text-gray-600">Teach law at universities and contribute to legal research and scholarship.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Award className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Government Services</h3>
                  <p className="text-gray-600">Join civil service as legal advisor or pursue judicial service.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Specialization Areas</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">High-Demand Legal Specializations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>International Trade Law</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Banking and Finance Law</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Intellectual Property Law</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Corporate and Commercial Law</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Human Rights Law</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Environmental Law</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Energy and Natural Resources</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>International Arbitration</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Challenges and Solutions</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Challenge: Lengthy HEC Process</h4>
                  <p className="text-sm text-red-700"><strong>Solution:</strong> Apply early, ensure all documents are properly attested, and follow up regularly with HEC.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Challenge: Document Verification Issues</h4>
                  <p className="text-sm text-orange-700"><strong>Solution:</strong> Use authorized agents or visit Pakistani Embassy/High Commission personally.</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Challenge: Bar Council Requirements</h4>
                  <p className="text-sm text-yellow-700"><strong>Solution:</strong> Consult with local lawyers and ensure all provincial requirements are met.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Development</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Continuing Legal Education</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Mandatory CPD:</strong> Complete required continuing professional development hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Professional Networks:</strong> Join legal associations and professional bodies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Specialized Training:</strong> Attend workshops and seminars in your area of practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>International Connections:</strong> Maintain links with UK legal community</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Convert Your UK LLM?</h3>
                <p className="mb-4">
                  Dunya Consultants provides expert guidance on converting your UK law degree for practice in Pakistan. Our team will help you navigate the entire process smoothly.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Expert Help
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
                  <li><a href="#process" className="text-blue-600 hover:text-blue-800">Conversion Process</a></li>
                  <li><a href="#hec" className="text-blue-600 hover:text-blue-800">HEC Requirements</a></li>
                  <li><a href="#bar-council" className="text-blue-600 hover:text-blue-800">Bar Council Enrollment</a></li>
                  <li><a href="#timeline" className="text-blue-600 hover:text-blue-800">Timeline & Costs</a></li>
                  <li><a href="#career" className="text-blue-600 hover:text-blue-800">Career Opportunities</a></li>
                  <li><a href="#specialization" className="text-blue-600 hover:text-blue-800">Specialization Areas</a></li>
                  <li><a href="#challenges" className="text-blue-600 hover:text-blue-800">Common Challenges</a></li>
                </ul>
              </div>

              {/* Quick Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Duration:</span>
                    <span className="font-semibold">4-9 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Cost:</span>
                    <span className="font-semibold">PKR 40-70K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Main Authority:</span>
                    <span className="font-semibold">HEC Pakistan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Practice License:</span>
                    <span className="font-semibold">Provincial Bar</span>
                  </div>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Legal Consultation</h3>
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
                      <option>Select UK University</option>
                      <option>Oxford University</option>
                      <option>Cambridge University</option>
                      <option>UCL</option>
                      <option>King's College London</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get Consultation
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
              Need help converting your UK LLM to practice law in Pakistan? Contact our expert team for personalized guidance and professional support throughout the conversion process.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}