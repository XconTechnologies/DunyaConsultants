import { motion } from "framer-motion";
import { Calendar, Clock, User, Eye, MapPin, DollarSign, FileText, CheckCircle, AlertCircle, GraduationCap, Plane } from "lucide-react";

export default function CyprusVisaPakistan() {
  const visaRequirements = [
    {
      category: "Academic Documents",
      icon: GraduationCap,
      items: [
        "Completed degree certificates",
        "Official transcripts",
        "English proficiency test results",
        "Academic references (2-3 letters)"
      ]
    },
    {
      category: "Financial Documents",
      icon: DollarSign,
      items: [
        "Bank statements (6 months)",
        "Sponsor's income proof",
        "Property documents",
        "Scholarship letter (if applicable)"
      ]
    },
    {
      category: "Personal Documents",
      icon: FileText,
      items: [
        "Valid passport (6+ months)",
        "Passport-sized photographs",
        "Birth certificate",
        "Character certificate"
      ]
    },
    {
      category: "Application Forms",
      icon: CheckCircle,
      items: [
        "Student visa application form",
        "University acceptance letter",
        "Health insurance documents",
        "Accommodation proof"
      ]
    }
  ];

  const topUniversities = [
    {
      name: "University of Cyprus",
      location: "Nicosia",
      established: "1989",
      ranking: "#1 in Cyprus",
      tuition: "€9,000-€13,000",
      programs: ["Business", "Engineering", "Medicine", "Law"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Cyprus University of Technology",
      location: "Limassol",
      established: "2004",
      ranking: "#2 in Cyprus",
      tuition: "€8,000-€12,000",
      programs: ["Technology", "Applied Arts", "Health Sciences"],
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "European University Cyprus",
      location: "Nicosia",
      established: "1961",
      ranking: "#3 in Cyprus",
      tuition: "€10,000-€15,000",
      programs: ["Business", "Humanities", "Sciences", "Medicine"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const processingSteps = [
    {
      step: 1,
      title: "University Application",
      description: "Apply to Cyprus universities with required documents",
      duration: "2-4 weeks",
      icon: GraduationCap
    },
    {
      step: 2,
      title: "Acceptance Letter",
      description: "Receive official acceptance letter from university",
      duration: "1-2 weeks",
      icon: FileText
    },
    {
      step: 3,
      title: "Document Preparation",
      description: "Gather all required documents for visa application",
      duration: "1-2 weeks",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Visa Application",
      description: "Submit visa application to Cyprus Embassy",
      duration: "3-4 weeks",
      icon: Plane
    },
    {
      step: 5,
      title: "Interview (if required)",
      description: "Attend visa interview at embassy",
      duration: "1 day",
      icon: User
    },
    {
      step: 6,
      title: "Visa Decision",
      description: "Receive visa decision and passport",
      duration: "1-2 weeks",
      icon: CheckCircle
    }
  ];

  const costBreakdown = [
    { item: "Tuition Fees", amount: "€8,000-€15,000", frequency: "per year" },
    { item: "Living Expenses", amount: "€600-€800", frequency: "per month" },
    { item: "Accommodation", amount: "€300-€500", frequency: "per month" },
    { item: "Health Insurance", amount: "€200-€300", frequency: "per year" },
    { item: "Visa Application Fee", amount: "€60", frequency: "one-time" },
    { item: "Travel Expenses", amount: "€500-€800", frequency: "one-time" }
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
            <span className="text-gray-900">Cyprus Visa for Pakistan</span>
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
                  src="https://images.unsplash.com/photo-1544737151-6e4b55de4036?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Cyprus Study Visa"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">12,456 views</span>
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
                  Cyprus Visa for Pakistan: Complete Guide 2025
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">March 20, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">12 min read</span>
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
                  Cyprus is becoming an increasingly popular destination for Pakistani students seeking quality education at affordable costs. With its strategic location in the Mediterranean, EU membership, and English-taught programs, Cyprus offers excellent opportunities for international students.
                </p>

                {/* Why Choose Cyprus */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Study in Cyprus?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <DollarSign className="w-8 h-8 text-blue-600" />
                        <h3 className="text-xl font-bold text-blue-900">Affordable Education</h3>
                      </div>
                      <p className="text-gray-700">Lower tuition fees compared to other EU countries with high-quality education standards.</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-8 h-8 text-green-600" />
                        <h3 className="text-xl font-bold text-green-900">EU Membership</h3>
                      </div>
                      <p className="text-gray-700">Access to European education system and opportunities for further study in EU.</p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="w-8 h-8 text-purple-600" />
                        <h3 className="text-xl font-bold text-purple-900">English Programs</h3>
                      </div>
                      <p className="text-gray-700">Many programs taught in English, making it accessible for Pakistani students.</p>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Plane className="w-8 h-8 text-orange-600" />
                        <h3 className="text-xl font-bold text-orange-900">Easy Visa Process</h3>
                      </div>
                      <p className="text-gray-700">Relatively straightforward student visa process for Pakistani students.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Visa Requirements */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Visa Requirements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visaRequirements.map((req, index) => {
                      const Icon = req.icon;
                      return (
                        <div key={req.category} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                          <div className="flex items-center gap-3 mb-4">
                            <Icon className="w-8 h-8 text-blue-600" />
                            <h3 className="text-xl font-bold text-gray-900">{req.category}</h3>
                          </div>
                          <ul className="space-y-2">
                            {req.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Top Universities */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Universities in Cyprus</h2>
                  <div className="space-y-6">
                    {topUniversities.map((uni, index) => (
                      <div key={uni.name} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div className="md:col-span-1">
                            <img
                              src={uni.image}
                              alt={uni.name}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:col-span-3">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {uni.ranking}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                              <div>
                                <span className="text-gray-600">Location:</span>
                                <div className="font-medium">{uni.location}</div>
                              </div>
                              <div>
                                <span className="text-gray-600">Established:</span>
                                <div className="font-medium">{uni.established}</div>
                              </div>
                              <div>
                                <span className="text-gray-600">Tuition:</span>
                                <div className="font-medium">{uni.tuition}</div>
                              </div>
                              <div>
                                <span className="text-gray-600">Programs:</span>
                                <div className="font-medium">{uni.programs.length}+</div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {uni.programs.map((program, programIndex) => (
                                <span key={programIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                                  {program}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Application Process */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process Timeline</h2>
                  <div className="space-y-6">
                    {processingSteps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.step} className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold">{step.step}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                              <div className="flex items-center gap-3 mb-3">
                                <Icon className="w-6 h-6 text-blue-600" />
                                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                                  {step.duration}
                                </span>
                              </div>
                              <p className="text-gray-700">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Cost Breakdown */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Breakdown</h2>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {costBreakdown.map((cost, index) => (
                        <div key={cost.item} className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-gray-900">{cost.item}</h3>
                              <p className="text-gray-600 text-sm">{cost.frequency}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-blue-600">{cost.amount}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-600 rounded-lg text-white text-center">
                      <h3 className="font-bold mb-2">Total First Year Cost</h3>
                      <p className="text-2xl font-bold">€15,000 - €25,000</p>
                      <p className="text-sm opacity-90">Including tuition, living expenses, and visa fees</p>
                    </div>
                  </div>
                </motion.div>

                {/* Important Tips */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Tips</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-bold text-green-900 mb-3">✅ Do's</h3>
                      <ul className="space-y-2 text-green-700">
                        <li>• Apply early for better university selection</li>
                        <li>• Ensure all documents are properly attested</li>
                        <li>• Maintain good academic standing</li>
                        <li>• Learn basic Greek or improve English</li>
                        <li>• Research accommodation options in advance</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="font-bold text-red-900 mb-3">❌ Don'ts</h3>
                      <ul className="space-y-2 text-red-700">
                        <li>• Don't submit incomplete applications</li>
                        <li>• Don't wait until the last minute</li>
                        <li>• Don't provide false information</li>
                        <li>• Don't ignore visa requirements</li>
                        <li>• Don't forget health insurance</li>
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
                    Cyprus offers an excellent opportunity for Pakistani students to study in Europe at affordable costs. With proper preparation and documentation, the visa process can be smooth and successful.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Start your application process early, ensure all documents are prepared correctly, and consider professional guidance to maximize your chances of success.
                  </p>
                </motion.div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Quick Facts */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-semibold">6-8 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Visa Fee:</span>
                    <span className="font-semibold">€60</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Work Permit:</span>
                    <span className="font-semibold">20 hrs/week</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Need Cyprus Visa Help?</h3>
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
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
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
                    Get Free Consultation
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