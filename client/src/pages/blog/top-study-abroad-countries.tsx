import { motion } from "framer-motion";
import { Calendar, Clock, User, Eye, Award, CheckCircle, Globe, TrendingUp, Target, Users, DollarSign, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function TopStudyAbroadCountries() {
  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      ranking: 1,
      universities: "4,000+",
      avgTuition: "$25,000 - $55,000",
      topUniversities: ["Harvard", "MIT", "Stanford", "Yale"],
      advantages: ["World-class education", "Research opportunities", "Career prospects", "Cultural diversity"],
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-red-500"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      ranking: 2,
      universities: "150+",
      avgTuition: "£15,000 - £35,000",
      topUniversities: ["Oxford", "Cambridge", "Imperial College", "UCL"],
      advantages: ["Historic universities", "3-year degrees", "English language", "Cultural heritage"],
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-red-500 to-blue-500"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      ranking: 3,
      universities: "100+",
      avgTuition: "CAD $15,000 - $30,000",
      topUniversities: ["University of Toronto", "McGill", "UBC", "Waterloo"],
      advantages: ["Affordable education", "Immigration opportunities", "Safe environment", "Quality of life"],
      image: "https://images.unsplash.com/photo-1503184992922-d7c76e4b76b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-red-500 to-white"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      ranking: 4,
      universities: "40+",
      avgTuition: "AUD $25,000 - $45,000",
      topUniversities: ["Melbourne", "Sydney", "ANU", "UNSW"],
      advantages: ["High quality education", "Work opportunities", "Beautiful country", "Multicultural society"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-green-500"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      ranking: 5,
      universities: "400+",
      avgTuition: "€500 - €3,000",
      topUniversities: ["TU Munich", "Heidelberg", "LMU Munich", "Humboldt"],
      advantages: ["Low tuition fees", "Strong economy", "Research focus", "Central location"],
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-black to-red-500"
    },
    {
      name: "France",
      flag: "🇫🇷",
      ranking: 6,
      universities: "70+",
      avgTuition: "€2,770 - €3,770",
      topUniversities: ["Sorbonne", "École Normale", "Sciences Po", "HEC Paris"],
      advantages: ["Rich culture", "Affordable education", "Fashion & arts", "European access"],
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="text-gray-900">Top Study Abroad Countries</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="py-8">
              {/* Featured Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative group overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Top Study Abroad Countries"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute top-4 right-4 z-20">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">13,789 views</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Article Header */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight"
                >
                  Top Study Abroad Countries
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-4 text-sm mb-6"
                >
                  <div className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 rounded-full px-4 py-2 transition-colors duration-300">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">March 16, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 hover:bg-green-100 rounded-full px-4 py-2 transition-colors duration-300">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">14 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 rounded-full px-4 py-2 transition-colors duration-300">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Dunya Consultants</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Studying in another country is the best and life-changing experience. It helps students get high quality education, explore new cultures, and build global networks. Choosing the right destination is crucial for your academic and career success.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    This comprehensive guide explores the top study abroad destinations, their unique advantages, costs, and opportunities for international students, particularly those from Pakistan.
                  </p>
                </div>

                {/* Countries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {countries.map((country, index) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative">
                        <img 
                          src={country.image} 
                          alt={country.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${country.color} opacity-20`}></div>
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-2xl">{country.flag}</span>
                            <span className="font-bold text-gray-900">#{country.ranking}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{country.name}</h3>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Universities:</span>
                            <span className="font-semibold text-gray-900">{country.universities}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Avg. Tuition:</span>
                            <span className="font-semibold text-gray-900">{country.avgTuition}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Top Universities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {country.topUniversities.map((uni) => (
                              <Badge key={uni} variant="secondary" className="text-xs">
                                {uni}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Advantages:</h4>
                          <ul className="space-y-1">
                            {country.advantages.map((advantage, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {advantage}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Comparison Table */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 rounded-lg">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-4 text-left font-semibold">Country</th>
                          <th className="border border-gray-300 p-4 text-left font-semibold">Tuition Range</th>
                          <th className="border border-gray-300 p-4 text-left font-semibold">Duration</th>
                          <th className="border border-gray-300 p-4 text-left font-semibold">Work Rights</th>
                          <th className="border border-gray-300 p-4 text-left font-semibold">Post-Study Work</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-4 font-medium">🇺🇸 United States</td>
                          <td className="border border-gray-300 p-4">$25,000 - $55,000</td>
                          <td className="border border-gray-300 p-4">4 years (Bachelor's)</td>
                          <td className="border border-gray-300 p-4">20 hrs/week</td>
                          <td className="border border-gray-300 p-4">1-3 years (OPT)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 font-medium">🇬🇧 United Kingdom</td>
                          <td className="border border-gray-300 p-4">£15,000 - £35,000</td>
                          <td className="border border-gray-300 p-4">3 years (Bachelor's)</td>
                          <td className="border border-gray-300 p-4">20 hrs/week</td>
                          <td className="border border-gray-300 p-4">2 years (Graduate Route)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-4 font-medium">🇨🇦 Canada</td>
                          <td className="border border-gray-300 p-4">CAD $15,000 - $30,000</td>
                          <td className="border border-gray-300 p-4">4 years (Bachelor's)</td>
                          <td className="border border-gray-300 p-4">20 hrs/week</td>
                          <td className="border border-gray-300 p-4">Up to 3 years (PGWP)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 font-medium">🇦🇺 Australia</td>
                          <td className="border border-gray-300 p-4">AUD $25,000 - $45,000</td>
                          <td className="border border-gray-300 p-4">3 years (Bachelor's)</td>
                          <td className="border border-gray-300 p-4">40 hrs/fortnight</td>
                          <td className="border border-gray-300 p-4">2-4 years (485 visa)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-4 font-medium">🇩🇪 Germany</td>
                          <td className="border border-gray-300 p-4">€500 - €3,000</td>
                          <td className="border border-gray-300 p-4">3 years (Bachelor's)</td>
                          <td className="border border-gray-300 p-4">20 hrs/week</td>
                          <td className="border border-gray-300 p-4">18 months</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 font-medium">🇫🇷 France</td>
                          <td className="border border-gray-300 p-4">€2,770 - €3,770</td>
                          <td className="border border-gray-300 p-4">3 years (Bachelor's)</td>
                          <td className="border border-gray-300 p-4">20 hrs/week</td>
                          <td className="border border-gray-300 p-4">2 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>

                {/* Decision Factors */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right Country</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <DollarSign className="w-8 h-8 text-blue-600" />
                        <h3 className="text-xl font-bold text-blue-900">Budget Considerations</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Tuition fees and living costs</li>
                        <li>• Scholarship opportunities</li>
                        <li>• Work-study options</li>
                        <li>• Currency exchange rates</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="w-8 h-8 text-green-600" />
                        <h3 className="text-xl font-bold text-green-900">Academic Factors</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• University rankings</li>
                        <li>• Program quality</li>
                        <li>• Research opportunities</li>
                        <li>• Faculty expertise</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-purple-600" />
                        <h3 className="text-xl font-bold text-purple-900">Cultural Fit</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Language requirements</li>
                        <li>• Cultural similarities</li>
                        <li>• International student community</li>
                        <li>• Climate and lifestyle</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-8 h-8 text-orange-600" />
                        <h3 className="text-xl font-bold text-orange-900">Future Prospects</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Post-study work opportunities</li>
                        <li>• Immigration pathways</li>
                        <li>• Industry connections</li>
                        <li>• Career advancement</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Conclusion */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Each of these top study abroad destinations offers unique advantages and opportunities. Your choice should align with your academic goals, financial situation, career aspirations, and personal preferences.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At Dunya Consultants, we help students make informed decisions about their study abroad journey. Our experienced counselors can guide you through the application process and help you choose the destination that best fits your needs.
                  </p>
                </motion.div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Countries Covered:</span>
                    <span className="font-semibold">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-semibold">4,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Avg. Cost Range:</span>
                    <span className="font-semibold">$500 - $55,000</span>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Need Help Choosing?</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Our experts can help you choose the perfect study destination based on your goals and budget.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}