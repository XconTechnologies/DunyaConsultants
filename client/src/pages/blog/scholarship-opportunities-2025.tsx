import { motion } from "framer-motion";
import { Calendar, Clock, User, Eye, Award, DollarSign, Globe, BookOpen, CheckCircle, Star, TrendingUp } from "lucide-react";

export default function ScholarshipOpportunities2025() {
  const scholarships = [
    {
      name: "Fulbright Scholarship",
      country: "USA",
      coverage: "Full funding",
      amount: "$50,000+",
      deadline: "October 15, 2025",
      level: "Master's & PhD",
      requirements: ["High academic achievement", "Leadership potential", "English proficiency"],
      benefits: ["Tuition coverage", "Living stipend", "Health insurance", "Travel allowance"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      difficulty: "Very High"
    },
    {
      name: "Chevening Scholarship",
      country: "UK",
      coverage: "Full funding",
      amount: "£30,000+",
      deadline: "November 2, 2025",
      level: "Master's only",
      requirements: ["2+ years work experience", "Leadership qualities", "Return to home country"],
      benefits: ["Full tuition", "Living allowance", "Travel costs", "Visa support"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      difficulty: "Very High"
    },
    {
      name: "Australia Awards",
      country: "Australia",
      coverage: "Full funding",
      amount: "AUD 40,000+",
      deadline: "April 30, 2025",
      level: "All levels",
      requirements: ["Development impact", "Leadership potential", "Academic merit"],
      benefits: ["Tuition fees", "Living expenses", "Health cover", "Travel support"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      difficulty: "High"
    },
    {
      name: "DAAD Scholarship",
      country: "Germany",
      coverage: "Partial/Full",
      amount: "€850-1,200/month",
      deadline: "Various dates",
      level: "Master's & PhD",
      requirements: ["Academic excellence", "German language (some)", "Research proposal"],
      benefits: ["Monthly stipend", "Health insurance", "Travel allowance", "Research support"],
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      difficulty: "Medium"
    },
    {
      name: "Vanier Canada Graduate",
      country: "Canada",
      coverage: "Full funding",
      amount: "CAD 50,000/year",
      deadline: "November 1, 2025",
      level: "PhD only",
      requirements: ["Academic excellence", "Research potential", "Leadership skills"],
      benefits: ["Annual stipend", "Research funding", "Conference support", "Mentorship"],
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      difficulty: "Very High"
    },
    {
      name: "Erasmus Mundus",
      country: "Europe",
      coverage: "Full funding",
      amount: "€24,000-48,000",
      deadline: "Various dates",
      level: "Master's & PhD",
      requirements: ["Academic merit", "Multi-country study", "EU program specific"],
      benefits: ["Tuition coverage", "Living allowance", "Travel costs", "Multi-country experience"],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      difficulty: "Medium"
    }
  ];

  const applicationTips = [
    {
      title: "Start Early",
      description: "Begin preparation 12-18 months before deadlines",
      icon: Clock,
      tips: ["Research requirements thoroughly", "Build strong academic record", "Develop leadership experiences", "Improve language skills"]
    },
    {
      title: "Strong Personal Statement",
      description: "Craft compelling narrative about your goals and impact",
      icon: BookOpen,
      tips: ["Tell your unique story", "Connect past experiences to future goals", "Show leadership and impact", "Demonstrate cultural awareness"]
    },
    {
      title: "Academic Excellence",
      description: "Maintain high GPA and strong test scores",
      icon: Star,
      tips: ["Aim for 3.5+ GPA", "Score well on standardized tests", "Seek challenging coursework", "Build research experience"]
    },
    {
      title: "Letters of Recommendation",
      description: "Secure strong endorsements from mentors",
      icon: User,
      tips: ["Choose recommenders who know you well", "Provide them with detailed information", "Give sufficient time", "Follow up appropriately"]
    }
  ];

  const countryGuide = [
    {
      country: "United States",
      totalAmount: "$2.5B+",
      programs: "500+",
      topScholarships: ["Fulbright", "Gates Cambridge", "Rhodes", "Knight-Hennessy"],
      averageAward: "$35,000",
      successRate: "5-15%"
    },
    {
      country: "United Kingdom", 
      totalAmount: "£800M+",
      programs: "300+",
      topScholarships: ["Chevening", "Commonwealth", "Gates Cambridge", "Rhodes"],
      averageAward: "£25,000",
      successRate: "8-20%"
    },
    {
      country: "Canada",
      totalAmount: "CAD 600M+",
      programs: "250+",
      topScholarships: ["Vanier", "Trudeau", "Mitacs", "NSERC"],
      averageAward: "CAD 30,000",
      successRate: "10-25%"
    },
    {
      country: "Australia",
      totalAmount: "AUD 500M+",
      programs: "200+",
      topScholarships: ["Australia Awards", "Endeavour", "Research Training", "Vice-Chancellor's"],
      averageAward: "AUD 28,000",
      successRate: "12-30%"
    },
    {
      country: "Germany",
      totalAmount: "€400M+",
      programs: "400+",
      topScholarships: ["DAAD", "Heinrich Böll", "Konrad Adenauer", "Friedrich Ebert"],
      averageAward: "€14,000",
      successRate: "15-35%"
    }
  ];

  const timeline = [
    {
      period: "18 months before",
      tasks: ["Research scholarship opportunities", "Identify target programs", "Start building profile"],
      priority: "High"
    },
    {
      period: "12 months before",
      tasks: ["Take standardized tests", "Secure research experience", "Build leadership portfolio"],
      priority: "High"
    },
    {
      period: "6 months before",
      tasks: ["Draft personal statements", "Request recommendation letters", "Prepare application materials"],
      priority: "Critical"
    },
    {
      period: "3 months before",
      tasks: ["Finalize applications", "Review and edit thoroughly", "Submit before deadlines"],
      priority: "Critical"
    },
    {
      period: "After submission",
      tasks: ["Prepare for interviews", "Apply for backup funding", "Plan for different outcomes"],
      priority: "Medium"
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
            <span className="text-gray-900">Scholarship Opportunities 2025</span>
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
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Scholarship Opportunities"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2">Your Path to Funded Education</h3>
                  <p className="text-white/90">Discover world-class scholarships for international students</p>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">22,340 views</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Article Header */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
                  Top Scholarship Opportunities for 2025
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">March 12, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">18 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Dunya Consultants</span>
                  </div>
                </div>
              </motion.div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Securing funding for international education can transform your academic journey. This comprehensive guide covers the most prestigious and accessible scholarship opportunities available for 2025, helping you find the perfect funding match for your educational goals.
                </p>

                {/* Top Scholarships */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Top International Scholarships</h2>
                  <div className="space-y-8">
                    {scholarships.map((scholarship, index) => (
                      <div key={scholarship.name} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div className="md:col-span-1">
                            <img
                              src={scholarship.image}
                              alt={scholarship.name}
                              className="w-full h-32 object-cover rounded-lg mb-4"
                            />
                            <div className="flex items-center gap-2 mb-2">
                              <Globe className="w-4 h-4 text-blue-600" />
                              <span className="text-blue-600 font-medium">{scholarship.country}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-green-600" />
                              <span className="text-green-600 font-medium">{scholarship.coverage}</span>
                            </div>
                          </div>
                          <div className="md:col-span-3">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-gray-900">{scholarship.name}</h3>
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-green-600">{scholarship.amount}</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  scholarship.difficulty === 'Very High' ? 'bg-red-100 text-red-800' :
                                  scholarship.difficulty === 'High' ? 'bg-orange-100 text-orange-800' :
                                  'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {scholarship.difficulty}
                                </span>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <span className="text-gray-600 text-sm">Deadline:</span>
                                <div className="font-medium">{scholarship.deadline}</div>
                              </div>
                              <div>
                                <span className="text-gray-600 text-sm">Level:</span>
                                <div className="font-medium">{scholarship.level}</div>
                              </div>
                              <div>
                                <span className="text-gray-600 text-sm">Requirements:</span>
                                <div className="font-medium">{scholarship.requirements.length} criteria</div>
                              </div>
                            </div>
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                              <div className="flex flex-wrap gap-2">
                                {scholarship.requirements.map((req, reqIndex) => (
                                  <span key={reqIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                    {req}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                              <div className="flex flex-wrap gap-2">
                                {scholarship.benefits.map((benefit, benefitIndex) => (
                                  <span key={benefitIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Application Timeline */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Timeline</h2>
                  <div className="space-y-6">
                    {timeline.map((phase, index) => (
                      <div key={phase.period} className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            phase.priority === 'Critical' ? 'bg-red-600' :
                            phase.priority === 'High' ? 'bg-orange-600' :
                            'bg-blue-600'
                          }`}>
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-lg font-bold text-gray-900">{phase.period}</h3>
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                phase.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                                phase.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {phase.priority}
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {phase.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Application Success Tips */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Strategies</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {applicationTips.map((tip, index) => {
                      const Icon = tip.icon;
                      return (
                        <div key={tip.title} className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Icon className="w-8 h-8 text-blue-600" />
                            <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                          </div>
                          <p className="text-gray-700 mb-4">{tip.description}</p>
                          <ul className="space-y-2">
                            {tip.tips.map((tipItem, tipIndex) => (
                              <li key={tipIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{tipItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Country-wise Scholarship Guide */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Country-wise Scholarship Overview</h2>
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                      <h3 className="text-xl font-bold mb-2">Global Scholarship Landscape</h3>
                      <p className="opacity-90">Compare scholarship opportunities across major study destinations</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {countryGuide.map((country, index) => (
                        <div key={country.country} className="p-6 hover:bg-gray-50 transition-colors">
                          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                            <div className="md:col-span-2">
                              <h4 className="font-bold text-gray-900 mb-1">{country.country}</h4>
                              <p className="text-gray-600 text-sm">{country.programs} programs available</p>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-green-600">{country.totalAmount}</div>
                              <div className="text-gray-500 text-sm">Total funding</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-blue-600">{country.averageAward}</div>
                              <div className="text-gray-500 text-sm">Average award</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-purple-600">{country.successRate}</div>
                              <div className="text-gray-500 text-sm">Success rate</div>
                            </div>
                            <div>
                              <div className="flex flex-wrap gap-1">
                                {country.topScholarships.map((scholarship, scholarshipIndex) => (
                                  <span key={scholarshipIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                                    {scholarship}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Scholarship Journey</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Securing a scholarship requires strategic planning, exceptional preparation, and persistent effort. Start early, build a strong profile, and apply to multiple opportunities to maximize your chances of success.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Remember that scholarship applications are competitive, but with the right approach and professional guidance, you can significantly improve your chances of securing funding for your international education.
                  </p>
                </motion.div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Scholarship Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Scholarship Statistics</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Scholarships:</span>
                    <span className="font-semibold">10,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Funding:</span>
                    <span className="font-semibold">$5B+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold">15-25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average Award:</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                </div>
              </div>

              {/* Deadline Tracker */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Fulbright (USA)</span>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Oct 15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Chevening (UK)</span>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Nov 2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Vanier (Canada)</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Nov 1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Australia Awards</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Apr 30</span>
                  </div>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Scholarship Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Target Country</option>
                      <option>USA</option>
                      <option>UK</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Germany</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Study Level</option>
                      <option>Bachelor's</option>
                      <option>Master's</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    Get Scholarship Guidance
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