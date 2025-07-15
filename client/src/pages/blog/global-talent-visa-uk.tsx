import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Crown, CheckCircle, AlertCircle, Star, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "wouter";

export default function GlobalTalentVisaUK() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
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
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                UK Immigration
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Global Talent Visa UK: Complete Guide for Skilled Professionals
            </h1>
            
            <p className="text-xl text-indigo-100 mb-6">
              Comprehensive guide to the UK's Global Talent Visa, including eligibility criteria, application process, endorsement requirements, and career opportunities for exceptional talent.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-indigo-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 7, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                11 min read
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
              className="prose prose-lg max-w-none"
            >
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Global Talent Visa UK"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <Crown className="h-5 w-5 text-indigo-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">What is the Global Talent Visa?</h3>
                </div>
                <p className="text-gray-700">
                  The Global Talent Visa is the UK's premier immigration route for individuals with exceptional talent or promise in specific fields including science, engineering, humanities, medicine, digital technology, and the arts.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligible Fields and Endorsing Bodies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Science & Research</h3>
                  <p className="text-gray-600 mb-3">Endorsed by UK Research and Innovation (UKRI)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Academia and research</li>
                    <li>• Applied science and engineering</li>
                    <li>• Medicine and health sciences</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Digital Technology</h3>
                  <p className="text-gray-600 mb-3">Endorsed by Tech Nation</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fintech and cybersecurity</li>
                    <li>• Gaming and emerging tech</li>
                    <li>• Data science and AI</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Arts & Culture</h3>
                  <p className="text-gray-600 mb-3">Endorsed by Arts Council England</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Literature and creative writing</li>
                    <li>• Film and television</li>
                    <li>• Music and performing arts</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Architecture</h3>
                  <p className="text-gray-600 mb-3">Endorsed by Royal Institute of British Architects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Architectural design</li>
                    <li>• Urban planning</li>
                    <li>• Sustainable architecture</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
              
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Two-Stage Application</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                    <div>
                      <strong>Stage 1: Endorsement Application</strong>
                      <p className="text-sm text-gray-600 mt-1">Apply to relevant endorsing body for your field</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                    <div>
                      <strong>Stage 2: Visa Application</strong>
                      <p className="text-sm text-gray-600 mt-1">Apply to Home Office with endorsement letter</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Endorsement Criteria</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Two Routes to Endorsement</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Exceptional Talent Route</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <strong>Proven track record:</strong> International recognition and significant contributions
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <strong>Leadership evidence:</strong> Leading roles in organizations or projects
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <strong>Industry recognition:</strong> Awards, patents, publications, or media coverage
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Exceptional Promise Route</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <strong>Emerging talent:</strong> Demonstrated potential for future leadership
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <strong>Innovation evidence:</strong> Novel approaches or breakthrough contributions
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <strong>Career trajectory:</strong> Rapid career progression and recognition
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Documentation</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Essential Documents</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Detailed CV highlighting achievements and impact</li>
                  <li>Academic qualifications and professional certifications</li>
                  <li>Evidence of exceptional talent or promise (publications, patents, awards)</li>
                  <li>Letters of recommendation from industry leaders</li>
                  <li>Personal statement explaining your contribution to the field</li>
                  <li>Evidence of media coverage or recognition</li>
                  <li>Portfolio of work (for creative fields)</li>
                  <li>Financial evidence (if applying for visa stage)</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Times and Costs</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Stage</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Processing Time</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Endorsement Application</td>
                      <td className="border border-gray-300 px-4 py-2">8-12 weeks</td>
                      <td className="border border-gray-300 px-4 py-2">£524</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Visa Application</td>
                      <td className="border border-gray-300 px-4 py-2">3-8 weeks</td>
                      <td className="border border-gray-300 px-4 py-2">£716</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Priority Service</td>
                      <td className="border border-gray-300 px-4 py-2">5 working days</td>
                      <td className="border border-gray-300 px-4 py-2">+£500</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Immigration Health Surcharge</td>
                      <td className="border border-gray-300 px-4 py-2">N/A</td>
                      <td className="border border-gray-300 px-4 py-2">£624/year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visa Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Star className="h-8 w-8 text-yellow-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Flexible Duration</h3>
                  <p className="text-gray-600">Initially valid for up to 5 years, extendable for another 5 years</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Users className="h-8 w-8 text-blue-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Family Inclusion</h3>
                  <p className="text-gray-600">Spouse/partner and children under 18 can accompany you</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <TrendingUp className="h-8 w-8 text-green-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Work Freedom</h3>
                  <p className="text-gray-600">Work for any employer, be self-employed, or start a business</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Award className="h-8 w-8 text-purple-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Settlement Path</h3>
                  <p className="text-gray-600">Eligible for Indefinite Leave to Remain after 3 years</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Success Tips</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Maximizing Your Application Success</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Build a strong portfolio:</strong> Document all achievements, publications, and recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Secure strong references:</strong> Get recommendations from respected figures in your field</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Demonstrate impact:</strong> Show how your work has influenced or advanced your field</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Professional presentation:</strong> Ensure all documents are professionally formatted</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Get expert advice:</strong> Consider using immigration lawyers or consultants</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Challenges</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Insufficient Evidence</h4>
                  <p className="text-sm text-red-700">Ensure comprehensive documentation of all achievements and recognition</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Weak Personal Statement</h4>
                  <p className="text-sm text-orange-700">Clearly articulate your unique contribution and future plans</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Poor References</h4>
                  <p className="text-sm text-yellow-700">Secure detailed letters from recognized leaders in your field</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">After Approval</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Arrival in UK:</strong> No requirement to have a job offer before arriving
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Employment flexibility:</strong> Work in any capacity within your field of expertise
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Extension applications:</strong> Can extend for another 5 years before settlement
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Settlement eligibility:</strong> Apply for ILR after 3 years of continuous residence
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Apply for Global Talent Visa?</h3>
                <p className="mb-4">
                  The Global Talent Visa offers exceptional opportunities for skilled professionals. Let Dunya Consultants guide you through the complex application process with expert support.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#fields" className="text-blue-600 hover:text-blue-800">Eligible Fields</a></li>
                  <li><a href="#process" className="text-blue-600 hover:text-blue-800">Application Process</a></li>
                  <li><a href="#criteria" className="text-blue-600 hover:text-blue-800">Endorsement Criteria</a></li>
                  <li><a href="#documents" className="text-blue-600 hover:text-blue-800">Required Documents</a></li>
                  <li><a href="#costs" className="text-blue-600 hover:text-blue-800">Processing & Costs</a></li>
                  <li><a href="#benefits" className="text-blue-600 hover:text-blue-800">Visa Benefits</a></li>
                  <li><a href="#tips" className="text-blue-600 hover:text-blue-800">Success Tips</a></li>
                </ul>
              </div>

              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Duration:</span>
                    <span className="font-semibold">Up to 5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Cost:</span>
                    <span className="font-semibold">£1,240</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-semibold">11-20 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Settlement:</span>
                    <span className="font-semibold">After 3 years</span>
                  </div>
                </div>
              </div>

              {/* Assessment Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Free Assessment</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Select Your Field</option>
                      <option>Science & Research</option>
                      <option>Digital Technology</option>
                      <option>Arts & Culture</option>
                      <option>Architecture</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Get Assessment
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