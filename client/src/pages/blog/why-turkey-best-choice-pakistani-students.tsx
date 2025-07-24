import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, MapPin, CheckCircle, AlertCircle, DollarSign, Globe, Star, Award, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function WhyTurkeyBestChoicePakistaniStudents() {
  return (
    <div className="min-h-screen bg-gray-50">
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-600 text-white">
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
                Study Abroad
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Why Turkey is Best Choice for Pakistani Students?
            </h1>
            
            <p className="text-xl text-red-100 mb-6">
              Discover why Turkey has become the top destination for Pakistani students seeking quality education, cultural familiarity, and affordable study options in Europe.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-red-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 10, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                9 min read
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
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Turkey Education for Pakistani Students"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Why Turkey?</h3>
                </div>
                <p className="text-gray-700">
                  Turkey offers Pakistani students a unique combination of high-quality education, cultural compatibility, affordable costs, and strategic location bridging Europe and Asia. With over 40,000 Pakistani students currently studying in Turkey, it has become the preferred destination for quality international education.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Reasons to Choose Turkey</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <DollarSign className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Affordable Education</h3>
                  <p className="text-gray-600">Tuition fees range from $200-$4,000 per year, making it one of the most cost-effective study destinations.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Globe className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Cultural Similarity</h3>
                  <p className="text-gray-600">Strong Islamic culture and historical ties with Pakistan provide a familiar and comfortable environment.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Award className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Quality Education</h3>
                  <p className="text-gray-600">Turkish universities are globally recognized with modern facilities and experienced faculty.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <TrendingUp className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Career Opportunities</h3>
                  <p className="text-gray-600">Growing economy and job market with opportunities in various sectors.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Excellence</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Why Turkish Education System Stands Out</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>International Recognition:</strong> Turkish degrees are recognized worldwide and by Higher Education Commission (HEC) Pakistan
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Modern Infrastructure:</strong> State-of-the-art laboratories, libraries, and research facilities
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>English Programs:</strong> Many universities offer programs in English, eliminating language barriers
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Research Opportunities:</strong> Strong emphasis on research and innovation across disciplines
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Comparison</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Expense Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Turkey</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">UK</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">USA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Tuition Fees (per year)</td>
                      <td className="border border-gray-300 px-4 py-2">$200-$4,000</td>
                      <td className="border border-gray-300 px-4 py-2">$15,000-$35,000</td>
                      <td className="border border-gray-300 px-4 py-2">$20,000-$50,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Living Expenses</td>
                      <td className="border border-gray-300 px-4 py-2">$300-$500/month</td>
                      <td className="border border-gray-300 px-4 py-2">$1,200-$1,800/month</td>
                      <td className="border border-gray-300 px-4 py-2">$1,000-$1,500/month</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Total Annual Cost</td>
                      <td className="border border-gray-300 px-4 py-2">$3,800-$10,000</td>
                      <td className="border border-gray-300 px-4 py-2">$29,400-$56,600</td>
                      <td className="border border-gray-300 px-4 py-2">$32,000-$68,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Turkish Universities</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Boğaziçi University</h3>
                  <p className="text-gray-600 mb-3">Turkey's top-ranked university with excellent programs in engineering, business, and sciences.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Location:</strong> Istanbul</div>
                    <div><strong>World Ranking:</strong> 451-500</div>
                    <div><strong>Language:</strong> English</div>
                    <div><strong>Tuition:</strong> $1,000-$2,000/year</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Middle East Technical University (METU)</h3>
                  <p className="text-gray-600 mb-3">Renowned for engineering and technology programs with strong international reputation.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Location:</strong> Ankara</div>
                    <div><strong>World Ranking:</strong> 501-600</div>
                    <div><strong>Language:</strong> English</div>
                    <div><strong>Tuition:</strong> $800-$1,500/year</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Koç University</h3>
                  <p className="text-gray-600 mb-3">Private university known for business, engineering, and liberal arts programs.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Location:</strong> Istanbul</div>
                    <div><strong>World Ranking:</strong> 601-700</div>
                    <div><strong>Language:</strong> English</div>
                    <div><strong>Tuition:</strong> $12,000-$15,000/year</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cultural Benefits</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Why Pakistani Students Feel at Home</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Islamic Culture:</strong> Strong Islamic values and traditions similar to Pakistan
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Food Similarity:</strong> Turkish cuisine shares many similarities with Pakistani food
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Historical Ties:</strong> Ottoman Empire's historical connection with Indian subcontinent
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Pakistani Community:</strong> Large Pakistani student community for support and networking
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
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>High school diploma or equivalent (for undergraduate programs)</li>
                  <li>Bachelor's degree (for graduate programs)</li>
                  <li>Transcript of academic records</li>
                  <li>English proficiency test (TOEFL/IELTS) or Turkish proficiency (TÖMER)</li>
                  <li>Statement of purpose</li>
                  <li>Letters of recommendation</li>
                  <li>Passport and visa documentation</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Opportunities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Türkiye Scholarships</h4>
                  <p className="text-sm text-green-700">Government scholarship covering tuition, accommodation, and monthly stipend</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">University Scholarships</h4>
                  <p className="text-sm text-blue-700">Merit-based scholarships offered by individual universities</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Private Scholarships</h4>
                  <p className="text-sm text-purple-700">Scholarships from private organizations and foundations</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Exchange Programs</h4>
                  <p className="text-sm text-orange-700">Student exchange programs with Pakistani universities</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Living in Turkey</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Student Life & Experience</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Accommodation:</strong> Affordable dormitories and shared apartments available
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Transportation:</strong> Excellent public transport system with student discounts
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Healthcare:</strong> Affordable healthcare system accessible to students
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Part-time Work:</strong> Students can work part-time with proper permits
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Study in Turkey?</h3>
                <p className="mb-4">
                  Join thousands of Pakistani students who have chosen Turkey for their international education. Dunya Consultants provides complete support from application to arrival.
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
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#reasons" className="text-blue-600 hover:text-blue-800">Top Reasons</a></li>
                  <li><a href="#education" className="text-blue-600 hover:text-blue-800">Educational Excellence</a></li>
                  <li><a href="#costs" className="text-blue-600 hover:text-blue-800">Cost Comparison</a></li>
                  <li><a href="#universities" className="text-blue-600 hover:text-blue-800">Top Universities</a></li>
                  <li><a href="#culture" className="text-blue-600 hover:text-blue-800">Cultural Benefits</a></li>
                  <li><a href="#admission" className="text-blue-600 hover:text-blue-800">Admission Requirements</a></li>
                  <li><a href="#scholarships" className="text-blue-600 hover:text-blue-800">Scholarships</a></li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pakistani Students:</span>
                    <span className="font-semibold">40,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-semibold">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Cost:</span>
                    <span className="font-semibold">$3,800-$10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-semibold">Turkish/English</span>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for Turkey</h3>
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
                      <option>Select Study Level</option>
                      <option>Bachelor's</option>
                      <option>Master's</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
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
    </div>
  );
}