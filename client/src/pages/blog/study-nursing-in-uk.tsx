import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, CheckCircle, AlertCircle, Award, Users, TrendingUp, Star } from "lucide-react";
import { Link } from "wouter";

export default function StudyNursingInUK() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-pink-200 hover:text-white mb-6 transition-colors"
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
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Healthcare Studies
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Study Nursing in the UK: Complete Guide for International Students
            </h1>
            
            <p className="text-xl text-pink-100 mb-6">
              Comprehensive guide to studying nursing in the UK, including top universities, admission requirements, career prospects, and registration process for international students.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-pink-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 8, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                13 min read
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
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Study Nursing in UK"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <Heart className="h-5 w-5 text-pink-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Why Study Nursing in the UK?</h3>
                </div>
                <p className="text-gray-700">
                  The UK offers world-class nursing education with excellent clinical training opportunities, high employment rates, and the chance to work in the renowned NHS system. UK nursing degrees are internationally recognized and provide pathways to global career opportunities.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top UK Universities for Nursing</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">King's College London</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-3">Leading institution for nursing and healthcare education with excellent clinical partnerships.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> London</div>
                        <div><strong>QS Ranking:</strong> #2 Nursing (UK)</div>
                        <div><strong>Programs:</strong> BSc, MSc, PhD</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Tuition (International):</strong> £28,050/year</div>
                        <div><strong>Requirements:</strong> IELTS 7.0</div>
                        <div><strong>Clinical Partners:</strong> NHS Trusts</div>
                        <div><strong>Employment Rate:</strong> 95%+</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">University of Edinburgh</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-3">Ancient university with modern nursing facilities and strong research focus.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> Edinburgh, Scotland</div>
                        <div><strong>QS Ranking:</strong> #5 Nursing (UK)</div>
                        <div><strong>Programs:</strong> BSc, MSc, Research</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Tuition (International):</strong> £32,100/year</div>
                        <div><strong>Requirements:</strong> IELTS 7.0</div>
                        <div><strong>Clinical Partners:</strong> NHS Scotland</div>
                        <div><strong>Duration:</strong> 3-4 years</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">University of Manchester</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-3">Russell Group university with comprehensive nursing programs and excellent facilities.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> Manchester</div>
                        <div><strong>QS Ranking:</strong> #6 Nursing (UK)</div>
                        <div><strong>Programs:</strong> BSc, MSc, Specialist</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Tuition (International):</strong> £25,500/year</div>
                        <div><strong>Requirements:</strong> IELTS 7.0</div>
                        <div><strong>Clinical Partners:</strong> Manchester NHS</div>
                        <div><strong>Specializations:</strong> Adult, Child, Mental Health</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nursing Specializations Available</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Adult Nursing</h3>
                  <p className="text-gray-600 mb-3">Care for adults with various health conditions in hospitals and community settings.</p>
                  <div className="text-sm text-gray-700">
                    <div><strong>Duration:</strong> 3 years</div>
                    <div><strong>Clinical Hours:</strong> 2,300 hours</div>
                    <div><strong>Career Path:</strong> Ward Nurse, Specialist Nurse</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Mental Health Nursing</h3>
                  <p className="text-gray-600 mb-3">Support individuals with mental health conditions and promote psychological wellbeing.</p>
                  <div className="text-sm text-gray-700">
                    <div><strong>Duration:</strong> 3 years</div>
                    <div><strong>Clinical Hours:</strong> 2,300 hours</div>
                    <div><strong>Career Path:</strong> Mental Health Nurse, Counselor</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Children's Nursing</h3>
                  <p className="text-gray-600 mb-3">Specialized care for infants, children, and young people up to 18 years.</p>
                  <div className="text-sm text-gray-700">
                    <div><strong>Duration:</strong> 3 years</div>
                    <div><strong>Clinical Hours:</strong> 2,300 hours</div>
                    <div><strong>Career Path:</strong> Pediatric Nurse, NICU Nurse</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Learning Disability Nursing</h3>
                  <p className="text-gray-600 mb-3">Support people with learning disabilities to achieve their full potential.</p>
                  <div className="text-sm text-gray-700">
                    <div><strong>Duration:</strong> 3 years</div>
                    <div><strong>Clinical Hours:</strong> 2,300 hours</div>
                    <div><strong>Career Path:</strong> Community Nurse, Specialist Support</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Entry Requirements for International Students</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Academic Qualifications:</strong> A-levels (BBC) or equivalent international qualifications
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>English Language:</strong> IELTS 7.0 overall with 6.5 in each component (some universities require 7.0 in all)
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Health Check:</strong> Occupational health screening and immunizations
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>DBS Check:</strong> Enhanced Disclosure and Barring Service check
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Personal Statement:</strong> Demonstrating commitment to nursing and healthcare
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">NMC Registration Process</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Steps to Register with NMC</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                    <div>
                      <strong>Complete Approved Program</strong>
                      <p className="text-sm text-gray-600 mt-1">Graduate from NMC-approved nursing program</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                    <div>
                      <strong>Apply for Registration</strong>
                      <p className="text-sm text-gray-600 mt-1">Submit application to NMC with required documents</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                    <div>
                      <strong>Pass Test of Competence</strong>
                      <p className="text-sm text-gray-600 mt-1">Complete computer-based test and OSCE if required</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                    <div>
                      <strong>Receive PIN Number</strong>
                      <p className="text-sm text-gray-600 mt-1">Get your Personal Identification Number to practice</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Prospects and Salary</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Position</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Experience</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Salary Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Newly Qualified Nurse</td>
                      <td className="border border-gray-300 px-4 py-2">0-2 years</td>
                      <td className="border border-gray-300 px-4 py-2">£25,000-£31,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Registered Nurse</td>
                      <td className="border border-gray-300 px-4 py-2">2-5 years</td>
                      <td className="border border-gray-300 px-4 py-2">£31,000-£37,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Senior Nurse</td>
                      <td className="border border-gray-300 px-4 py-2">5-10 years</td>
                      <td className="border border-gray-300 px-4 py-2">£37,000-£44,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Specialist Nurse</td>
                      <td className="border border-gray-300 px-4 py-2">10+ years</td>
                      <td className="border border-gray-300 px-4 py-2">£44,000-£60,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Studying Nursing in UK</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Award className="h-8 w-8 text-gold-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Global Recognition</h3>
                  <p className="text-gray-600">UK nursing qualifications are recognized worldwide, opening doors to international careers.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Users className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">NHS Experience</h3>
                  <p className="text-gray-600">Gain valuable experience in one of the world's largest healthcare systems.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Career Progression</h3>
                  <p className="text-gray-600">Clear career pathways with opportunities for specialization and leadership roles.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Star className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">High Demand</h3>
                  <p className="text-gray-600">Nursing shortage ensures excellent job prospects and competitive salaries.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Costs and Financial Support</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Financial Information</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong>Tuition Fees:</strong> £25,000-£35,000 per year for international students
                  </div>
                  <div>
                    <strong>Living Costs:</strong> £12,000-£18,000 per year depending on location
                  </div>
                  <div>
                    <strong>NHS Bursary:</strong> Available for some students (mainly UK/EU residents)
                  </div>
                  <div>
                    <strong>Scholarships:</strong> University-specific scholarships and merit awards available
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Post-Study Work Opportunities</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Work Visa Options</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Graduate Visa:</strong> 2-year post-study work visa for all graduates
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Skilled Worker Visa:</strong> Long-term visa for nursing positions
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Health and Care Worker Visa:</strong> Dedicated visa for healthcare professionals
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Indefinite Leave to Remain:</strong> Pathway to permanent residency
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Start Your Nursing Career in the UK?</h3>
                <p className="mb-4">
                  Join the rewarding field of nursing in the UK. Dunya Consultants provides comprehensive support for your nursing education journey from application to career placement.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Journey
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
                  <li><a href="#universities" className="text-blue-600 hover:text-blue-800">Top Universities</a></li>
                  <li><a href="#specializations" className="text-blue-600 hover:text-blue-800">Specializations</a></li>
                  <li><a href="#admission" className="text-blue-600 hover:text-blue-800">Admission Requirements</a></li>
                  <li><a href="#nmc" className="text-blue-600 hover:text-blue-800">NMC Registration</a></li>
                  <li><a href="#career" className="text-blue-600 hover:text-blue-800">Career Prospects</a></li>
                  <li><a href="#benefits" className="text-blue-600 hover:text-blue-800">Benefits</a></li>
                  <li><a href="#costs" className="text-blue-600 hover:text-blue-800">Costs & Support</a></li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">3 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clinical Hours:</span>
                    <span className="font-semibold">2,300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IELTS Required:</span>
                    <span className="font-semibold">7.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starting Salary:</span>
                    <span className="font-semibold">£25,000</span>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for Nursing</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                      <option>Select Specialization</option>
                      <option>Adult Nursing</option>
                      <option>Mental Health Nursing</option>
                      <option>Children's Nursing</option>
                      <option>Learning Disability Nursing</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                  >
                    Get Information
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