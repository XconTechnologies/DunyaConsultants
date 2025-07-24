import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, Award, TrendingUp, MapPin, DollarSign } from "lucide-react";
import { Link } from "wouter";
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function EngineeringLawProgramsCanada() {
  return (
    <div className="min-h-screen bg-white">
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors"
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
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Study in Canada
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Engineering and Law Programs in Canada: Best Universities for Pakistani Students in 2025
            </h1>
            
            <p className="text-xl text-red-100 mb-6">
              Complete guide to top Canadian universities offering engineering and law programs for Pakistani students, including admission requirements, costs, and career prospects.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-red-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 11, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                14 min read
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Engineering and Law Programs in Canada"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Why Choose Canada for Engineering and Law?</h3>
                </div>
                <p className="text-gray-700">
                  Canada offers world-class education in engineering and law, with excellent career prospects, immigration opportunities, and a welcoming environment for international students. The country's strong economy and diverse industries provide abundant opportunities for graduates.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Engineering Universities in Canada</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">University of Toronto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-3">One of the world's top engineering schools with cutting-edge research facilities.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> Toronto, Ontario</div>
                        <div><strong>QS Ranking:</strong> #26 worldwide</div>
                        <div><strong>Programs:</strong> All engineering disciplines</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Tuition (International):</strong> CAD $61,930/year</div>
                        <div><strong>Requirements:</strong> 85%+ in relevant subjects</div>
                        <div><strong>IELTS:</strong> 6.5 overall (6.0 minimum)</div>
                        <div><strong>Specializations:</strong> AI, Robotics, Biomedical</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">University of Waterloo</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-3">Renowned for its co-op programs and innovation in engineering and technology.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> Waterloo, Ontario</div>
                        <div><strong>QS Ranking:</strong> #154 worldwide</div>
                        <div><strong>Programs:</strong> Computer, Electrical, Mechanical</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Tuition (International):</strong> CAD $62,000/year</div>
                        <div><strong>Requirements:</strong> 80%+ in relevant subjects</div>
                        <div><strong>IELTS:</strong> 6.5 overall (6.0 minimum)</div>
                        <div><strong>Co-op Program:</strong> Available</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">McGill University</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-3">Prestigious university with strong engineering programs and international reputation.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> Montreal, Quebec</div>
                        <div><strong>QS Ranking:</strong> #31 worldwide</div>
                        <div><strong>Programs:</strong> Civil, Mining, Chemical</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Tuition (International):</strong> CAD $50,000/year</div>
                        <div><strong>Requirements:</strong> 85%+ in relevant subjects</div>
                        <div><strong>IELTS:</strong> 6.5 overall (6.0 minimum)</div>
                        <div><strong>Language:</strong> English/French</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Law Universities in Canada</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">University of Toronto Faculty of Law</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-3">Canada's top law school with excellent clinical programs and diverse faculty.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> Toronto, Ontario</div>
                        <div><strong>QS Law Ranking:</strong> #18 worldwide</div>
                        <div><strong>Programs:</strong> JD, LLM, SJD</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Tuition (International):</strong> CAD $65,000/year</div>
                        <div><strong>LSAT:</strong> Required for JD</div>
                        <div><strong>IELTS:</strong> 7.0 overall (6.5 minimum)</div>
                        <div><strong>Specializations:</strong> Corporate, Human Rights</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Osgoode Hall Law School (York University)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-3">Historic law school with strong focus on social justice and public interest law.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> Toronto, Ontario</div>
                        <div><strong>QS Law Ranking:</strong> #51-100 worldwide</div>
                        <div><strong>Programs:</strong> JD, LLM, PhD</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Tuition (International):</strong> CAD $50,000/year</div>
                        <div><strong>LSAT:</strong> Required for JD</div>
                        <div><strong>IELTS:</strong> 7.0 overall (6.5 minimum)</div>
                        <div><strong>Specializations:</strong> Business Law, Criminal Law</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">University of British Columbia Faculty of Law</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-3">Top-ranked law school with strong international programs and diverse student body.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> Vancouver, BC</div>
                        <div><strong>QS Law Ranking:</strong> #33 worldwide</div>
                        <div><strong>Programs:</strong> JD, LLM, PhD</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Tuition (International):</strong> CAD $58,000/year</div>
                        <div><strong>LSAT:</strong> Required for JD</div>
                        <div><strong>IELTS:</strong> 7.0 overall (6.5 minimum)</div>
                        <div><strong>Specializations:</strong> Indigenous Law, Environmental Law</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Engineering Specializations in High Demand</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Top Engineering Fields</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Software Engineering</strong>
                        <p className="text-sm text-gray-600">High demand in tech industry, average salary CAD $90,000+</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Petroleum Engineering</strong>
                        <p className="text-sm text-gray-600">Strong in Alberta, average salary CAD $120,000+</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Biomedical Engineering</strong>
                        <p className="text-sm text-gray-600">Growing field in healthcare, average salary CAD $85,000+</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Civil Engineering</strong>
                        <p className="text-sm text-gray-600">Infrastructure development, average salary CAD $80,000+</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Electrical Engineering</strong>
                        <p className="text-sm text-gray-600">Power systems and electronics, average salary CAD $85,000+</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Mechanical Engineering</strong>
                        <p className="text-sm text-gray-600">Manufacturing and automotive, average salary CAD $82,000+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Practice Areas in Canada</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">High-Demand Legal Specializations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Corporate Law</strong>
                        <p className="text-sm text-gray-600">Business transactions, average salary CAD $150,000+</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Immigration Law</strong>
                        <p className="text-sm text-gray-600">Growing demand, average salary CAD $100,000+</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Intellectual Property</strong>
                        <p className="text-sm text-gray-600">Tech and innovation focus, average salary CAD $130,000+</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Environmental Law</strong>
                        <p className="text-sm text-gray-600">Sustainability focus, average salary CAD $95,000+</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Criminal Law</strong>
                        <p className="text-sm text-gray-600">Public and private practice, average salary CAD $90,000+</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Family Law</strong>
                        <p className="text-sm text-gray-600">Consistent demand, average salary CAD $85,000+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">General Requirements</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <strong>Engineering Programs:</strong>
                    <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                      <li>Strong background in Mathematics, Physics, and Chemistry</li>
                      <li>Minimum 80-85% in Grade 12 or equivalent</li>
                      <li>IELTS 6.5 overall or TOEFL 100 iBT</li>
                      <li>Some programs require SAT/ACT scores</li>
                      <li>Letters of recommendation</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Law Programs:</strong>
                    <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                      <li>Bachelor's degree from recognized institution</li>
                      <li>Minimum GPA of 3.0/4.0 (varies by school)</li>
                      <li>LSAT scores (for JD programs)</li>
                      <li>IELTS 7.0 overall or TOEFL 100 iBT</li>
                      <li>Personal statement and references</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost of Study and Living</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Expense</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Engineering</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Law</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Tuition (per year)</td>
                      <td className="border border-gray-300 px-4 py-2">CAD $45,000-65,000</td>
                      <td className="border border-gray-300 px-4 py-2">CAD $50,000-70,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">Living Expenses</td>
                      <td className="border border-gray-300 px-4 py-2">CAD $15,000-20,000</td>
                      <td className="border border-gray-300 px-4 py-2">CAD $15,000-20,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Books & Supplies</td>
                      <td className="border border-gray-300 px-4 py-2">CAD $2,000-3,000</td>
                      <td className="border border-gray-300 px-4 py-2">CAD $2,500-3,500</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">Total (per year)</td>
                      <td className="border border-gray-300 px-4 py-2">CAD $62,000-88,000</td>
                      <td className="border border-gray-300 px-4 py-2">CAD $67,500-93,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Prospects and Immigration</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Post-Graduation Opportunities</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Post-Graduation Work Permit (PGWP):</strong> Up to 3 years work authorization
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Express Entry System:</strong> Engineers and lawyers qualify for permanent residence
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>High Earning Potential:</strong> Both fields offer competitive salaries and career growth
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Provincial Nominee Programs:</strong> Additional immigration pathways available
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Timeline</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Key Dates for Pakistani Students</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Application Deadline (Fall):</span>
                    <span>January - March</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">IELTS/TOEFL Tests:</span>
                    <span>By December</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">LSAT (for Law):</span>
                    <span>August - February</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Admission Results:</span>
                    <span>March - May</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Visa Application:</span>
                    <span>May - June</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Program Start:</span>
                    <span>September</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Apply for Engineering or Law Programs in Canada?</h3>
                <p className="mb-4">
                  Dunya Consultants has helped hundreds of Pakistani students secure admission to top Canadian universities. Our expert team provides comprehensive support from application to arrival.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#engineering" className="text-blue-600 hover:text-blue-800">Top Engineering Universities</a></li>
                  <li><a href="#law" className="text-blue-600 hover:text-blue-800">Top Law Universities</a></li>
                  <li><a href="#specializations" className="text-blue-600 hover:text-blue-800">Popular Specializations</a></li>
                  <li><a href="#admission" className="text-blue-600 hover:text-blue-800">Admission Requirements</a></li>
                  <li><a href="#costs" className="text-blue-600 hover:text-blue-800">Costs & Living</a></li>
                  <li><a href="#career" className="text-blue-600 hover:text-blue-800">Career Prospects</a></li>
                  <li><a href="#timeline" className="text-blue-600 hover:text-blue-800">Application Timeline</a></li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Top Universities:</span>
                    <span className="font-semibold">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Tuition:</span>
                    <span className="font-semibold">CAD $45-70K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">PGWP Duration:</span>
                    <span className="font-semibold">Up to 3 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg. Starting Salary:</span>
                    <span className="font-semibold">CAD $80-120K</span>
                  </div>
                </div>
              </div>

              {/* Application Help */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Application Help</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                      <option>Select Field</option>
                      <option>Engineering</option>
                      <option>Law</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Get Guidance
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
              Ready to pursue engineering or law studies in Canada? Contact our expert team for personalized guidance and comprehensive support throughout your application journey.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}