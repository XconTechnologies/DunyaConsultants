import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Globe, CheckCircle, AlertCircle, FileText, DollarSign, Clock3, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function CyprusVisaPakistan() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-cyan-200 hover:text-white mb-6 transition-colors"
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
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Visa Guides
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Cyprus Visa for Pakistan: Complete Student Guide 2025
            </h1>
            
            <p className="text-xl text-cyan-100 mb-6">
              Comprehensive guide to obtaining a Cyprus student visa for Pakistani students, including requirements, application process, costs, and top universities in Cyprus.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-cyan-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 12, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                11 min read
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
              className="prose prose-lg max-w-none"
            >
              <img 
                src="https://images.unsplash.com/photo-1544737151-6e4b55de4036?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Cyprus Visa for Pakistan"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-cyan-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Why Study in Cyprus?</h3>
                </div>
                <p className="text-gray-700">
                  Cyprus offers high-quality education, affordable living costs, beautiful Mediterranean climate, and EU membership benefits. It's an ideal destination for Pakistani students seeking European education at reasonable costs.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cyprus Student Visas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Short-term Study Visa</h3>
                  <p className="text-gray-600 mb-3">For courses lasting less than 90 days</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Language courses</li>
                    <li>• Summer programs</li>
                    <li>• Short-term certifications</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Long-term Study Visa</h3>
                  <p className="text-gray-600 mb-3">For courses lasting more than 90 days</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Bachelor's degree programs</li>
                    <li>• Master's degree programs</li>
                    <li>• PhD programs</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visa Requirements</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Required Documents</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Completed visa application form</strong> - Filled accurately and signed
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Valid passport</strong> - At least 6 months validity remaining
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Passport-sized photographs</strong> - Recent colored photos (35x45mm)
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>University acceptance letter</strong> - From recognized Cyprus institution
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Academic transcripts</strong> - Certified copies of educational documents
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Financial proof</strong> - Bank statements showing sufficient funds
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Health insurance</strong> - Coverage for entire study period
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>English proficiency test</strong> - IELTS/TOEFL scores if required
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Requirements</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Proof of Funds</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  You must demonstrate sufficient financial resources to cover your studies and living expenses in Cyprus.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Monthly living expenses:</span>
                    <span className="font-semibold">€600-800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Annual tuition fees:</span>
                    <span className="font-semibold">€3,000-12,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total per year:</span>
                    <span className="font-semibold">€10,000-22,000</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Step-by-Step Application</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-cyan-100 text-cyan-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                    <div>
                      <strong>Choose University and Program</strong>
                      <p className="text-sm text-gray-600 mt-1">Research and select your preferred university and course</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-cyan-100 text-cyan-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                    <div>
                      <strong>Apply to University</strong>
                      <p className="text-sm text-gray-600 mt-1">Submit your application directly to the university</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-cyan-100 text-cyan-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                    <div>
                      <strong>Receive Acceptance Letter</strong>
                      <p className="text-sm text-gray-600 mt-1">Wait for university acceptance and offer letter</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-cyan-100 text-cyan-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                    <div>
                      <strong>Prepare Documents</strong>
                      <p className="text-sm text-gray-600 mt-1">Gather all required documents and translations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-cyan-100 text-cyan-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">5</span>
                    <div>
                      <strong>Submit Visa Application</strong>
                      <p className="text-sm text-gray-600 mt-1">Apply at Cyprus Embassy/Consulate in Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-cyan-100 text-cyan-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">6</span>
                    <div>
                      <strong>Attend Interview</strong>
                      <p className="text-sm text-gray-600 mt-1">Attend visa interview if required</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-cyan-100 text-cyan-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">7</span>
                    <div>
                      <strong>Receive Visa Decision</strong>
                      <p className="text-sm text-gray-600 mt-1">Wait for visa processing and decision</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Universities in Cyprus</h2>
              
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">University of Cyprus</h3>
                  <p className="text-gray-600 mb-3">The leading public university in Cyprus with excellent research facilities</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Location:</span> Nicosia
                    </div>
                    <div>
                      <span className="font-medium">Programs:</span> 50+ undergraduate, 100+ postgraduate
                    </div>
                    <div>
                      <span className="font-medium">Tuition:</span> €3,000-4,000/year
                    </div>
                    <div>
                      <span className="font-medium">Language:</span> Greek, English
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Near East University</h3>
                  <p className="text-gray-600 mb-3">Large private university with diverse international student body</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Location:</span> Lefkoşa
                    </div>
                    <div>
                      <span className="font-medium">Programs:</span> Medicine, Engineering, Business
                    </div>
                    <div>
                      <span className="font-medium">Tuition:</span> €4,000-12,000/year
                    </div>
                    <div>
                      <span className="font-medium">Language:</span> English, Turkish
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Cyprus International University</h3>
                  <p className="text-gray-600 mb-3">Modern university with strong focus on international education</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Location:</span> Haspolat
                    </div>
                    <div>
                      <span className="font-medium">Programs:</span> Business, IT, Health Sciences
                    </div>
                    <div>
                      <span className="font-medium">Tuition:</span> €3,500-8,000/year
                    </div>
                    <div>
                      <span className="font-medium">Language:</span> English
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Living in Cyprus</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Student Life & Culture</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Climate:</strong> Mediterranean climate with warm summers and mild winters
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Language:</strong> Greek and Turkish official languages, English widely spoken
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Cost of Living:</strong> Generally lower than other EU countries
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Transportation:</strong> Good public transport and student discounts available
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Safety:</strong> Very safe environment with low crime rates
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Time and Fees</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Visa Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Processing Time</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Visa Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Short-term Study Visa</td>
                      <td className="border border-gray-300 px-4 py-2">15-30 days</td>
                      <td className="border border-gray-300 px-4 py-2">€80</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Long-term Study Visa</td>
                      <td className="border border-gray-300 px-4 py-2">30-60 days</td>
                      <td className="border border-gray-300 px-4 py-2">€80</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Multiple Entry Visa</td>
                      <td className="border border-gray-300 px-4 py-2">30-60 days</td>
                      <td className="border border-gray-300 px-4 py-2">€80</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Important Notes</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Apply for your visa at least 2 months before your intended travel date</li>
                  <li>Ensure all documents are translated into English or Greek by certified translators</li>
                  <li>Health insurance must cover the entire duration of your stay</li>
                  <li>Bank statements should show consistent funds for at least 3 months</li>
                  <li>Some programs may require specific entrance exams or interviews</li>
                </ul>
              </div>

              <div className="bg-cyan-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Apply for Cyprus Student Visa?</h3>
                <p className="mb-4">
                  Let Dunya Consultants guide you through the entire Cyprus visa application process. Our experienced team ensures a smooth and successful application for Pakistani students.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-cyan-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Visa Assistance
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#visa-types" className="text-blue-600 hover:text-blue-800">Visa Types</a></li>
                  <li><a href="#requirements" className="text-blue-600 hover:text-blue-800">Requirements</a></li>
                  <li><a href="#financial" className="text-blue-600 hover:text-blue-800">Financial Requirements</a></li>
                  <li><a href="#application" className="text-blue-600 hover:text-blue-800">Application Process</a></li>
                  <li><a href="#universities" className="text-blue-600 hover:text-blue-800">Top Universities</a></li>
                  <li><a href="#living" className="text-blue-600 hover:text-blue-800">Living in Cyprus</a></li>
                  <li><a href="#processing" className="text-blue-600 hover:text-blue-800">Processing & Fees</a></li>
                </ul>
              </div>

              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capital:</span>
                    <span className="font-semibold">Nicosia</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Currency:</span>
                    <span className="font-semibold">Euro (€)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-semibold">Greek, Turkish</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">EU Member:</span>
                    <span className="font-semibold">Yes</span>
                  </div>
                </div>
              </div>

              {/* Visa Consultation */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Free Visa Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                      <option>Select Study Level</option>
                      <option>Undergraduate</option>
                      <option>Postgraduate</option>
                      <option>PhD</option>
                      <option>Language Course</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                  >
                    Get Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}