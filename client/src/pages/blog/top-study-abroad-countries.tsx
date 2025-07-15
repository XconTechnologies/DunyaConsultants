import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Globe, CheckCircle, Star, TrendingUp, Award, Users, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function TopStudyAbroadCountries() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition-colors"
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
              <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Study Destinations
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Top Study Abroad Countries: Best Destinations for International Students in 2025
            </h1>
            
            <p className="text-xl text-emerald-100 mb-6">
              Discover the world's top study abroad destinations, comparing education quality, costs, career opportunities, and student experiences to help you make the best choice for your international education.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-emerald-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 6, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                15 min read
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Popular
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
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Top Study Abroad Countries"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-emerald-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Choosing Your Study Destination</h3>
                </div>
                <p className="text-gray-700">
                  With over 5.6 million international students worldwide, choosing the right study destination is crucial for your academic and career success. This guide compares the top countries based on education quality, affordability, career opportunities, and student satisfaction.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top 10 Study Abroad Countries</h2>
              
              <div className="space-y-8 mb-8">
                {/* United States */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</span>
                    <h3 className="text-xl font-semibold">United States</h3>
                    <span className="ml-auto text-sm text-gray-500">🇺🇸</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 mb-3">Home to world's top universities including Harvard, MIT, and Stanford.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Top Universities:</strong> Harvard, MIT, Stanford, Yale</div>
                        <div><strong>International Students:</strong> 1.1 million</div>
                        <div><strong>Popular Programs:</strong> Engineering, Business, Medicine</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Annual Cost:</strong> $30,000-$70,000</div>
                        <div><strong>Work Rights:</strong> F-1 OPT (1-3 years)</div>
                        <div><strong>Language:</strong> English</div>
                        <div><strong>Best For:</strong> Research, Technology, Business</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>Education Quality: 10/10</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-green-500 mr-1" />
                      <span>Career Opportunities: 9/10</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-500 mr-1" />
                      <span>Student Life: 8/10</span>
                    </div>
                  </div>
                </div>

                {/* United Kingdom */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</span>
                    <h3 className="text-xl font-semibold">United Kingdom</h3>
                    <span className="ml-auto text-sm text-gray-500">🇬🇧</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 mb-3">Historic universities with global reputation and shorter degree programs.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Top Universities:</strong> Oxford, Cambridge, Imperial, UCL</div>
                        <div><strong>International Students:</strong> 500,000+</div>
                        <div><strong>Popular Programs:</strong> Business, Law, Medicine</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Annual Cost:</strong> £25,000-£45,000</div>
                        <div><strong>Work Rights:</strong> 2-year Graduate Visa</div>
                        <div><strong>Language:</strong> English</div>
                        <div><strong>Best For:</strong> Business, Finance, Research</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>Education Quality: 9/10</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-green-500 mr-1" />
                      <span>Career Opportunities: 8/10</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-500 mr-1" />
                      <span>Student Life: 9/10</span>
                    </div>
                  </div>
                </div>

                {/* Canada */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</span>
                    <h3 className="text-xl font-semibold">Canada</h3>
                    <span className="ml-auto text-sm text-gray-500">🇨🇦</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 mb-3">Affordable education with excellent immigration opportunities.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Top Universities:</strong> Toronto, UBC, McGill, Waterloo</div>
                        <div><strong>International Students:</strong> 650,000+</div>
                        <div><strong>Popular Programs:</strong> Engineering, IT, Healthcare</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Annual Cost:</strong> CAD $20,000-$40,000</div>
                        <div><strong>Work Rights:</strong> 3-year PGWP</div>
                        <div><strong>Language:</strong> English/French</div>
                        <div><strong>Best For:</strong> Immigration, Tech, Research</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>Education Quality: 8/10</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-green-500 mr-1" />
                      <span>Career Opportunities: 9/10</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-500 mr-1" />
                      <span>Student Life: 9/10</span>
                    </div>
                  </div>
                </div>

                {/* Australia */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">4</span>
                    <h3 className="text-xl font-semibold">Australia</h3>
                    <span className="ml-auto text-sm text-gray-500">🇦🇺</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 mb-3">High-quality education with beautiful lifestyle and work opportunities.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Top Universities:</strong> Melbourne, Sydney, ANU, UNSW</div>
                        <div><strong>International Students:</strong> 450,000+</div>
                        <div><strong>Popular Programs:</strong> Engineering, Business, Medicine</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Annual Cost:</strong> AUD $25,000-$50,000</div>
                        <div><strong>Work Rights:</strong> 2-4 year PSW Visa</div>
                        <div><strong>Language:</strong> English</div>
                        <div><strong>Best For:</strong> Lifestyle, Mining, Healthcare</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>Education Quality: 8/10</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-green-500 mr-1" />
                      <span>Career Opportunities: 8/10</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-500 mr-1" />
                      <span>Student Life: 10/10</span>
                    </div>
                  </div>
                </div>

                {/* Germany */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">5</span>
                    <h3 className="text-xl font-semibold">Germany</h3>
                    <span className="ml-auto text-sm text-gray-500">🇩🇪</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 mb-3">Free or low-cost education with strong engineering and research programs.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Top Universities:</strong> TUM, LMU, Heidelberg, RWTH</div>
                        <div><strong>International Students:</strong> 350,000+</div>
                        <div><strong>Popular Programs:</strong> Engineering, Medicine, Sciences</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Annual Cost:</strong> €500-€20,000</div>
                        <div><strong>Work Rights:</strong> 18-month Job Search Visa</div>
                        <div><strong>Language:</strong> German/English</div>
                        <div><strong>Best For:</strong> Engineering, Research, PhD</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>Education Quality: 9/10</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-green-500 mr-1" />
                      <span>Career Opportunities: 8/10</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-500 mr-1" />
                      <span>Student Life: 7/10</span>
                    </div>
                  </div>
                </div>

                {/* France */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">6</span>
                    <h3 className="text-xl font-semibold">France</h3>
                    <span className="ml-auto text-sm text-gray-500">🇫🇷</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 mb-3">Rich cultural experience with excellent business and art programs.</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Top Universities:</strong> Sorbonne, Sciences Po, HEC</div>
                        <div><strong>International Students:</strong> 250,000+</div>
                        <div><strong>Popular Programs:</strong> Business, Arts, Fashion</div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Annual Cost:</strong> €3,000-€15,000</div>
                        <div><strong>Work Rights:</strong> 2-year APS Visa</div>
                        <div><strong>Language:</strong> French/English</div>
                        <div><strong>Best For:</strong> Business, Arts, Luxury</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>Education Quality: 8/10</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-green-500 mr-1" />
                      <span>Career Opportunities: 7/10</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-500 mr-1" />
                      <span>Student Life: 8/10</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Country Comparison Matrix</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Annual Cost</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Work Rights</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Language</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Immigration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">🇺🇸 USA</td>
                      <td className="border border-gray-300 px-4 py-2">$30K-$70K</td>
                      <td className="border border-gray-300 px-4 py-2">1-3 years OPT</td>
                      <td className="border border-gray-300 px-4 py-2">English</td>
                      <td className="border border-gray-300 px-4 py-2">Challenging</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">🇬🇧 UK</td>
                      <td className="border border-gray-300 px-4 py-2">£25K-£45K</td>
                      <td className="border border-gray-300 px-4 py-2">2 years Graduate</td>
                      <td className="border border-gray-300 px-4 py-2">English</td>
                      <td className="border border-gray-300 px-4 py-2">Moderate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">🇨🇦 Canada</td>
                      <td className="border border-gray-300 px-4 py-2">CAD $20K-$40K</td>
                      <td className="border border-gray-300 px-4 py-2">3 years PGWP</td>
                      <td className="border border-gray-300 px-4 py-2">English/French</td>
                      <td className="border border-gray-300 px-4 py-2">Excellent</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">🇦🇺 Australia</td>
                      <td className="border border-gray-300 px-4 py-2">AUD $25K-$50K</td>
                      <td className="border border-gray-300 px-4 py-2">2-4 years PSW</td>
                      <td className="border border-gray-300 px-4 py-2">English</td>
                      <td className="border border-gray-300 px-4 py-2">Good</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">🇩🇪 Germany</td>
                      <td className="border border-gray-300 px-4 py-2">€500-€20K</td>
                      <td className="border border-gray-300 px-4 py-2">18 months Job Search</td>
                      <td className="border border-gray-300 px-4 py-2">German/English</td>
                      <td className="border border-gray-300 px-4 py-2">Good</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">🇫🇷 France</td>
                      <td className="border border-gray-300 px-4 py-2">€3K-€15K</td>
                      <td className="border border-gray-300 px-4 py-2">2 years APS</td>
                      <td className="border border-gray-300 px-4 py-2">French/English</td>
                      <td className="border border-gray-300 px-4 py-2">Moderate</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choosing the Right Country</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">For Career Opportunities</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>🇺🇸 USA - Technology & Innovation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>🇨🇦 Canada - Immigration Pathways</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>🇬🇧 UK - Finance & Business</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">For Affordability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>🇩🇪 Germany - Low/Free Tuition</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>🇫🇷 France - Reasonable Costs</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>🇨🇦 Canada - Value for Money</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Requirements</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Common Requirements Across Countries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Academic Transcripts:</strong> Certified copies of all previous education
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <strong>English Proficiency:</strong> IELTS/TOEFL scores as required
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Personal Statement:</strong> Essay explaining your goals and motivation
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Financial Proof:</strong> Bank statements or sponsor letters
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Letters of Recommendation:</strong> From teachers or employers
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <strong>Passport:</strong> Valid for entire study period
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Making Your Decision</h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Key Factors to Consider</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                    <div>
                      <strong>Career Goals:</strong> Consider which country offers the best opportunities in your field
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                    <div>
                      <strong>Financial Capacity:</strong> Calculate total costs including living expenses
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                    <div>
                      <strong>Language Preference:</strong> Choose based on your language skills and comfort
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                    <div>
                      <strong>Immigration Plans:</strong> Consider post-study work and immigration policies
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">5</span>
                    <div>
                      <strong>Cultural Fit:</strong> Research lifestyle, culture, and social environment
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Choose Your Study Destination?</h3>
                <p className="mb-4">
                  Selecting the right country is crucial for your academic and career success. Let Dunya Consultants help you make an informed decision based on your goals, budget, and preferences.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Country Guidance
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
                  <li><a href="#top-countries" className="text-blue-600 hover:text-blue-800">Top 10 Countries</a></li>
                  <li><a href="#comparison" className="text-blue-600 hover:text-blue-800">Country Comparison</a></li>
                  <li><a href="#choosing" className="text-blue-600 hover:text-blue-800">Choosing Right Country</a></li>
                  <li><a href="#requirements" className="text-blue-600 hover:text-blue-800">Application Requirements</a></li>
                  <li><a href="#decision" className="text-blue-600 hover:text-blue-800">Making Decision</a></li>
                </ul>
              </div>

              {/* Quick Comparison */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Comparison</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Most Affordable:</span>
                    <span className="font-semibold">🇩🇪 Germany</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best for Immigration:</span>
                    <span className="font-semibold">🇨🇦 Canada</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Top Education:</span>
                    <span className="font-semibold">🇺🇸 USA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Student Life:</span>
                    <span className="font-semibold">🇦🇺 Australia</span>
                  </div>
                </div>
              </div>

              {/* Country Selector */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Your Match</h3>
                <form className="space-y-4">
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>Select Study Level</option>
                      <option>Bachelor's</option>
                      <option>Master's</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>Select Field</option>
                      <option>Engineering</option>
                      <option>Business</option>
                      <option>Medicine</option>
                      <option>IT</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>Budget Range</option>
                      <option>Under $20,000</option>
                      <option>$20,000-$40,000</option>
                      <option>$40,000+</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Find Best Match
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