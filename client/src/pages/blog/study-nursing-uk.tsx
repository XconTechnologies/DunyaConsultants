import { motion } from "framer-motion";
import { Calendar, Clock, User, Eye, Heart, TrendingUp, Users, Award, CheckCircle, DollarSign } from "lucide-react";

export default function StudyNursingUK() {
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
            <span className="text-gray-900">Study Nursing in the UK</span>
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
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Study Nursing in the UK"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">9,456 views</span>
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
                  Study Nursing in the UK
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">March 18, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">10 min read</span>
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
                  Nursing is a highly respected and in-demand profession worldwide which makes it the best career choice for students. The UK offers excellent nursing education with world-class facilities, experienced faculty, and strong clinical training programs.
                </p>

                {/* Why Study Nursing in UK */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Study Nursing in the UK?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="w-8 h-8 text-blue-600" />
                        <h3 className="text-xl font-bold text-blue-900">High-Quality Education</h3>
                      </div>
                      <p className="text-gray-700">World-renowned nursing programs with excellent clinical training and modern facilities.</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-8 h-8 text-green-600" />
                        <h3 className="text-xl font-bold text-green-900">Career Opportunities</h3>
                      </div>
                      <p className="text-gray-700">High demand for qualified nurses with excellent job prospects and career advancement.</p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-purple-600" />
                        <h3 className="text-xl font-bold text-purple-900">NHS Experience</h3>
                      </div>
                      <p className="text-gray-700">Gain valuable experience working with the National Health Service (NHS).</p>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-8 h-8 text-orange-600" />
                        <h3 className="text-xl font-bold text-orange-900">Global Recognition</h3>
                      </div>
                      <p className="text-gray-700">UK nursing qualifications are recognized worldwide, opening global career opportunities.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Course Types */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Nursing Courses</h2>
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Bachelor of Science in Nursing (BSc)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-700 mb-3">A comprehensive undergraduate program covering all aspects of nursing.</p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Duration: 3 years</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Entry: A-levels or equivalent</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Clinical placements included</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Specialization Areas:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Adult Nursing</li>
                            <li>• Children's Nursing</li>
                            <li>• Mental Health Nursing</li>
                            <li>• Learning Disability Nursing</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Master of Science in Nursing (MSc)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-700 mb-3">Advanced nursing education for career progression and specialization.</p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Duration: 1-2 years</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Entry: BSc in Nursing</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Research component</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Specialization Areas:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Critical Care Nursing</li>
                            <li>• Midwifery</li>
                            <li>• Public Health Nursing</li>
                            <li>• Nursing Leadership</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Top Universities */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Universities for Nursing</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: "King's College London", ranking: "#1", tuition: "£27,000", location: "London" },
                      { name: "University of Manchester", ranking: "#2", tuition: "£25,000", location: "Manchester" },
                      { name: "University of Edinburgh", ranking: "#3", tuition: "£26,500", location: "Edinburgh" },
                      { name: "University of Glasgow", ranking: "#4", tuition: "£24,000", location: "Glasgow" },
                      { name: "University of Southampton", ranking: "#5", tuition: "£23,500", location: "Southampton" },
                      { name: "University of Birmingham", ranking: "#6", tuition: "£22,000", location: "Birmingham" }
                    ].map((uni, index) => (
                      <div key={uni.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-gray-900">{uni.name}</h3>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                            {uni.ranking}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Location:</span>
                            <span className="font-medium ml-2">{uni.location}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Tuition:</span>
                            <span className="font-medium ml-2">{uni.tuition}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Requirements */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Entry Requirements</h2>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-4">Academic Requirements</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">A-levels with grades AAB-BBB (or equivalent)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">GCSE Mathematics and English (Grade C or above)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Science subjects (Biology, Chemistry preferred)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Personal statement and references</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-4">English Language Requirements</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">IELTS: 7.0 overall (6.5 in each component)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">TOEFL: 100 overall (minimum 24 in each section)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">PTE Academic: 67 overall (58 in each section)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Interview and assessment may be required</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Career Prospects */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Prospects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                      <h3 className="font-bold text-gray-900 mb-3">Starting Salary</h3>
                      <div className="text-2xl font-bold text-green-600 mb-2">£24,000 - £30,000</div>
                      <p className="text-sm text-gray-600">Newly qualified nurses</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                      <h3 className="font-bold text-gray-900 mb-3">Experienced Salary</h3>
                      <div className="text-2xl font-bold text-blue-600 mb-2">£35,000 - £45,000</div>
                      <p className="text-sm text-gray-600">5+ years experience</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                      <h3 className="font-bold text-gray-900 mb-3">Senior Positions</h3>
                      <div className="text-2xl font-bold text-purple-600 mb-2">£50,000+</div>
                      <p className="text-sm text-gray-600">Nurse managers, specialists</p>
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
                    Studying nursing in the UK offers excellent opportunities for personal and professional growth. With high-quality education, strong clinical training, and excellent career prospects, it's an ideal choice for students passionate about healthcare.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The UK's nursing programs are designed to prepare you for a successful career in healthcare, whether you choose to work in the NHS, private healthcare, or pursue further specialization. Start your nursing journey with us today.
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
                    <span className="text-gray-600">Course Duration:</span>
                    <span className="font-semibold">3 years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average Tuition:</span>
                    <span className="font-semibold">£25,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">IELTS Required:</span>
                    <span className="font-semibold">7.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Starting Salary:</span>
                    <span className="font-semibold">£24,000+</span>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Ready to Start Your Nursing Career?</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Get expert guidance on nursing programs and admission requirements.
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