import { motion } from "framer-motion";
import { Calendar, Clock, User, Eye, Award, CheckCircle, Globe, TrendingUp, Target, Users, BookOpen, PenTool, Headphones, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function IELTSPreparationTips() {
  const tips = [
    {
      title: "Understand the Test Format",
      description: "Familiarize yourself with all four sections: Listening, Reading, Writing, and Speaking",
      icon: BookOpen,
      color: "bg-blue-500",
      details: [
        "Study the test structure and timing",
        "Practice with official IELTS materials",
        "Learn about different question types",
        "Understand the scoring system"
      ]
    },
    {
      title: "Practice Daily English",
      description: "Immerse yourself in English through various media and activities",
      icon: Globe,
      color: "bg-green-500",
      details: [
        "Read English newspapers and magazines",
        "Watch English movies and TV shows",
        "Listen to English podcasts and radio",
        "Practice thinking in English"
      ]
    },
    {
      title: "Master Time Management",
      description: "Learn to allocate time effectively across all sections",
      icon: Target,
      color: "bg-purple-500",
      details: [
        "Practice with timed mock tests",
        "Learn to pace yourself properly",
        "Prioritize questions strategically",
        "Leave time for reviewing answers"
      ]
    },
    {
      title: "Build Vocabulary",
      description: "Expand your vocabulary for academic and general contexts",
      icon: PenTool,
      color: "bg-orange-500",
      details: [
        "Learn academic word lists",
        "Practice synonyms and antonyms",
        "Use vocabulary in context",
        "Keep a vocabulary journal"
      ]
    },
    {
      title: "Improve Listening Skills",
      description: "Enhance your ability to understand spoken English",
      icon: Headphones,
      color: "bg-red-500",
      details: [
        "Practice with different accents",
        "Focus on main ideas and details",
        "Learn to predict answers",
        "Take notes effectively"
      ]
    },
    {
      title: "Polish Speaking Skills",
      description: "Develop fluency and confidence in spoken English",
      icon: Mic,
      color: "bg-indigo-500",
      details: [
        "Practice speaking regularly",
        "Record yourself speaking",
        "Work on pronunciation",
        "Learn to organize ideas quickly"
      ]
    }
  ];

  const bandScores = [
    { band: 9, level: "Expert", description: "Has fully operational command of the language" },
    { band: 8, level: "Very Good", description: "Has fully operational command with only occasional unsystematic inaccuracies" },
    { band: 7, level: "Good", description: "Has operational command with occasional inaccuracies" },
    { band: 6, level: "Competent", description: "Has generally effective command despite some inaccuracies" },
    { band: 5, level: "Modest", description: "Has partial command of the language" },
    { band: 4, level: "Limited", description: "Basic competence is limited to familiar situations" }
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
            <span className="text-gray-900">IELTS Preparation Tips</span>
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
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="IELTS Preparation Tips"
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
                      <span className="font-semibold">18,765 views</span>
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
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight"
                >
                  Top 10 IELTS Preparation Tips and Tricks for a High Band Score
                </motion.h1>
                
                <motion.div 
                  className="flex flex-wrap items-center gap-4 text-sm mb-6"
                >
                  <div className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">March 10, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 hover:bg-green-100 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">13 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 rounded-full px-4 py-2">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Dunya Consultants</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Getting a good score in the IELTS exam is very important. It helps you study in countries like the UK, Canada, Australia, and New Zealand. This comprehensive guide provides proven strategies to help you achieve a high band score.
                  </p>
                </div>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {tips.map((tip, index) => (
                    <motion.div
                      key={tip.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 ${tip.color} rounded-full flex items-center justify-center`}>
                            <tip.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{tip.description}</p>
                        
                        <ul className="space-y-2">
                          {tip.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Band Score Guide */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">IELTS Band Score Guide</h2>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="text-left p-3 font-semibold">Band</th>
                            <th className="text-left p-3 font-semibold">Level</th>
                            <th className="text-left p-3 font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bandScores.map((score, index) => (
                            <tr key={score.band} className={index % 2 === 0 ? 'bg-white/50' : ''}>
                              <td className="p-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                    {score.band}
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 font-semibold text-gray-900">{score.level}</td>
                              <td className="p-3 text-gray-700">{score.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>

                {/* Study Schedule */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Study Schedule</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                      <h3 className="font-bold text-blue-900 mb-3">Week 1-2</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Take diagnostic test</li>
                        <li>• Identify weak areas</li>
                        <li>• Set target band score</li>
                        <li>• Create study plan</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                      <h3 className="font-bold text-green-900 mb-3">Week 3-6</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Focus on weak sections</li>
                        <li>• Practice daily</li>
                        <li>• Build vocabulary</li>
                        <li>• Improve grammar</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                      <h3 className="font-bold text-purple-900 mb-3">Week 7-10</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Take mock tests</li>
                        <li>• Time management</li>
                        <li>• Review mistakes</li>
                        <li>• Practice speaking</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                      <h3 className="font-bold text-orange-900 mb-3">Week 11-12</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Final preparation</li>
                        <li>• Review strategies</li>
                        <li>• Relax and rest</li>
                        <li>• Exam day prep</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Common Mistakes */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="font-semibold text-red-900 mb-2">Not Managing Time Properly</h3>
                      <p className="text-red-700">Many students spend too much time on difficult questions and run out of time for easier ones.</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="font-semibold text-yellow-900 mb-2">Ignoring Instructions</h3>
                      <p className="text-yellow-700">Always read instructions carefully and follow the word count requirements.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold text-blue-900 mb-2">Lack of Practice</h3>
                      <p className="text-blue-700">Regular practice is essential for improving your English skills and test performance.</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-semibold text-green-900 mb-2">Memorizing Answers</h3>
                      <p className="text-green-700">Don't memorize essays or answers. Focus on understanding and natural communication.</p>
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
                    Achieving a high IELTS band score requires dedication, consistent practice, and the right strategies. Focus on improving your overall English skills rather than just memorizing test techniques.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Remember, success in IELTS comes from thorough preparation and understanding of the test format. With these tips and consistent practice, you can achieve your target band score and pursue your dream of studying abroad.
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
                <h3 className="font-semibold text-gray-900 mb-4">IELTS Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Test Duration:</span>
                    <span className="font-semibold">2h 45m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Validity:</span>
                    <span className="font-semibold">2 years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Test Fee:</span>
                    <span className="font-semibold">$215-250</span>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Need IELTS Coaching?</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Join our expert-led IELTS preparation courses and achieve your target band score.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}