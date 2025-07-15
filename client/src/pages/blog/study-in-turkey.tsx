import { motion } from "framer-motion";
import { Calendar, Clock, User, Eye, MapPin, DollarSign, FileText, CheckCircle, AlertCircle, GraduationCap, Globe, Award, Users, BookOpen, Star } from "lucide-react";

export default function StudyInTurkey() {
  const topUniversities = [
    {
      name: "Istanbul University",
      location: "Istanbul",
      established: "1453",
      ranking: "#1 in Turkey",
      tuition: "$2,000-$4,000",
      programs: ["Medicine", "Engineering", "Law", "Business"],
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      scholarships: "Available",
      international: "25,000+ students"
    },
    {
      name: "Middle East Technical University",
      location: "Ankara",
      established: "1956",
      ranking: "#2 in Turkey",
      tuition: "$1,500-$3,500",
      programs: ["Engineering", "Architecture", "Natural Sciences"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      scholarships: "Merit-based",
      international: "15,000+ students"
    },
    {
      name: "Boğaziçi University",
      location: "Istanbul",
      established: "1863",
      ranking: "#3 in Turkey",
      tuition: "$3,000-$5,000",
      programs: ["Business", "Engineering", "Arts & Sciences"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      scholarships: "Limited",
      international: "8,000+ students"
    },
    {
      name: "Koç University",
      location: "Istanbul",
      established: "1993",
      ranking: "#4 in Turkey",
      tuition: "$15,000-$20,000",
      programs: ["Business", "Medicine", "Engineering", "Law"],
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      scholarships: "Full & Partial",
      international: "5,000+ students"
    }
  ];

  const scholarshipPrograms = [
    {
      name: "Türkiye Bursları",
      type: "Government Scholarship",
      coverage: "Full tuition + living allowance",
      deadline: "March 15",
      eligibility: "All levels",
      benefits: ["Monthly stipend", "Accommodation", "Health insurance", "Turkish language course"],
      icon: Award
    },
    {
      name: "University Scholarships",
      type: "Merit-based",
      coverage: "25-100% tuition",
      deadline: "Varies",
      eligibility: "High achievers",
      benefits: ["Tuition reduction", "Academic support", "Research opportunities"],
      icon: GraduationCap
    },
    {
      name: "Private Foundations",
      type: "Need-based",
      coverage: "Partial funding",
      deadline: "Rolling",
      eligibility: "Financial need",
      benefits: ["Partial tuition", "Living support", "Mentorship"],
      icon: Users
    }
  ];

  const livingCosts = [
    { city: "Istanbul", rent: "$300-500", food: "$200-300", transport: "$30-50", total: "$530-850" },
    { city: "Ankara", rent: "$250-400", food: "$150-250", transport: "$25-40", total: "$425-690" },
    { city: "Izmir", rent: "$200-350", food: "$150-200", transport: "$20-35", total: "$370-585" },
    { city: "Antalya", rent: "$200-300", food: "$150-200", transport: "$20-30", total: "$370-530" }
  ];

  const advantages = [
    {
      title: "Affordable Education",
      description: "Low tuition fees compared to European universities",
      icon: DollarSign,
      stats: "50-80% cheaper"
    },
    {
      title: "Rich Cultural Heritage",
      description: "Experience unique blend of European and Asian cultures",
      icon: Globe,
      stats: "2000+ years history"
    },
    {
      title: "Strategic Location",
      description: "Bridge between Europe and Asia with excellent connectivity",
      icon: MapPin,
      stats: "2 continents"
    },
    {
      title: "Growing Economy",
      description: "Expanding job market and business opportunities",
      icon: Users,
      stats: "G20 member"
    },
    {
      title: "Quality Education",
      description: "Modern facilities and internationally recognized degrees",
      icon: BookOpen,
      stats: "180+ universities"
    },
    {
      title: "Student-Friendly",
      description: "Welcoming environment for international students",
      icon: Star,
      stats: "200K+ international students"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Research & Choose University",
      description: "Research universities and programs that match your interests",
      duration: "2-4 weeks",
      documents: ["University rankings", "Program details", "Entry requirements"]
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather and authenticate all required documents",
      duration: "3-4 weeks",
      documents: ["Academic transcripts", "English proficiency", "Passport", "Health reports"]
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Apply through university portal or YÖK system",
      duration: "1-2 weeks",
      documents: ["Application form", "Supporting documents", "Application fee"]
    },
    {
      step: 4,
      title: "Await Decision",
      description: "Universities review applications and send decisions",
      duration: "4-8 weeks",
      documents: ["Acceptance letter", "Enrollment instructions", "Visa requirements"]
    },
    {
      step: 5,
      title: "Student Visa",
      description: "Apply for Turkish student visa at consulate",
      duration: "2-4 weeks",
      documents: ["Visa application", "Acceptance letter", "Financial proof"]
    },
    {
      step: 6,
      title: "Arrival & Enrollment",
      description: "Arrive in Turkey and complete enrollment process",
      duration: "1-2 weeks",
      documents: ["Residence permit", "University registration", "Health insurance"]
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
            <span className="text-gray-900">Study in Turkey</span>
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
                  src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Study in Turkey"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2">Turkey: Bridge to Your Future</h3>
                  <p className="text-white/90">Discover world-class education in the heart of Eurasia</p>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">15,678 views</span>
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
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-700 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
                  Study in Turkey: Complete Guide 2025
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-red-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span className="text-red-700 font-medium">March 18, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-orange-700 font-medium">15 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <User className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">Dunya Consultants</span>
                  </div>
                </div>
              </motion.div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Turkey has emerged as one of the most attractive study destinations for international students, offering high-quality education at affordable costs. With its rich cultural heritage, strategic location, and growing economy, Turkey provides an excellent environment for academic and personal growth.
                </p>

                {/* Why Choose Turkey */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Study in Turkey?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advantages.map((advantage, index) => {
                      const Icon = advantage.icon;
                      return (
                        <div key={advantage.title} className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-red-100 rounded-xl">
                              <Icon className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{advantage.title}</h3>
                              <span className="text-red-600 font-medium text-sm">{advantage.stats}</span>
                            </div>
                          </div>
                          <p className="text-gray-700">{advantage.description}</p>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Universities in Turkey</h2>
                  <div className="space-y-8">
                    {topUniversities.map((uni, index) => (
                      <div key={uni.name} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                          <div className="md:col-span-2">
                            <img
                              src={uni.image}
                              alt={uni.name}
                              className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-600">{uni.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-600">Est. {uni.established}</span>
                            </div>
                          </div>
                          <div className="md:col-span-3">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
                              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                                {uni.ranking}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                              <div>
                                <span className="text-gray-600">Tuition:</span>
                                <div className="font-bold text-green-600">{uni.tuition}</div>
                              </div>
                              <div>
                                <span className="text-gray-600">International Students:</span>
                                <div className="font-medium">{uni.international}</div>
                              </div>
                              <div>
                                <span className="text-gray-600">Scholarships:</span>
                                <div className="font-medium">{uni.scholarships}</div>
                              </div>
                              <div>
                                <span className="text-gray-600">Programs:</span>
                                <div className="font-medium">{uni.programs.length}+ fields</div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {uni.programs.map((program, programIndex) => (
                                <span key={programIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
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

                {/* Scholarship Programs */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Scholarship Opportunities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {scholarshipPrograms.map((scholarship, index) => {
                      const Icon = scholarship.icon;
                      return (
                        <div key={scholarship.name} className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Icon className="w-8 h-8 text-blue-600" />
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{scholarship.name}</h3>
                              <span className="text-blue-600 text-sm">{scholarship.type}</span>
                            </div>
                          </div>
                          <div className="space-y-3 mb-4">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Coverage:</span>
                              <span className="font-medium">{scholarship.coverage}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Deadline:</span>
                              <span className="font-medium">{scholarship.deadline}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Eligibility:</span>
                              <span className="font-medium">{scholarship.eligibility}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {scholarship.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Living Costs */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Living Costs by City</h2>
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
                      <h3 className="text-xl font-bold mb-2">Monthly Living Expenses (USD)</h3>
                      <p className="opacity-90">Compare costs across major Turkish cities</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rent</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transport</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {livingCosts.map((city, index) => (
                            <tr key={city.city} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{city.city}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{city.rent}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{city.food}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{city.transport}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-sm font-bold text-red-600">{city.total}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>

                {/* Application Process */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Process</h2>
                  <div className="space-y-6">
                    {applicationProcess.map((step, index) => (
                      <div key={step.step} className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{step.step}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-4">{step.description}</p>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Required Documents:</h4>
                              <div className="flex flex-wrap gap-2">
                                {step.documents.map((doc, docIndex) => (
                                  <span key={docIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                                    {doc}
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

                {/* Student Life */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Student Life in Turkey</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Experience</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Rich historical heritage with ancient sites</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Diverse cultural festivals and events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Delicious Turkish cuisine and food culture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Friendly and welcoming local communities</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Environment</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Modern facilities and research centers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">International student support services</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">English-taught programs available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Active student clubs and societies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Work Opportunities */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Work Opportunities</h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-orange-900 mb-3">During Studies</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Part-time work permit (24 hours/week)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Campus jobs and internships</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Teaching assistant positions</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-900 mb-3">After Graduation</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">1-year job search visa</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Growing tech and business sectors</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Pathway to permanent residency</span>
                          </li>
                        </ul>
                      </div>
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
                    Turkey offers an exceptional opportunity for international students to experience high-quality education in a culturally rich environment. With affordable tuition fees, generous scholarship programs, and excellent career prospects, Turkey is an ideal destination for your academic journey.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Start planning your Turkish education adventure today. With proper preparation and guidance, you can successfully navigate the application process and embark on an enriching academic experience in this beautiful country.
                  </p>
                </motion.div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-semibold">180+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Int'l Students:</span>
                    <span className="font-semibold">200,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Tuition Range:</span>
                    <span className="font-semibold">$1,500-$20,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-semibold">$370-$850/month</span>
                  </div>
                </div>
              </div>

              {/* Popular Programs */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Popular Programs</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Engineering</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Business</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Medicine</span>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Arts & Sciences</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">15%</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Turkey Study Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option>Study Level</option>
                      <option>Bachelor's</option>
                      <option>Master's</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option>Field of Interest</option>
                      <option>Engineering</option>
                      <option>Business</option>
                      <option>Medicine</option>
                      <option>Arts & Sciences</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
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