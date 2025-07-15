import { motion } from "framer-motion";
import { Calendar, Clock, User, Eye, Heart, TrendingUp, Users, Award, CheckCircle, Volume2, Headphones, PlayCircle, BookOpen } from "lucide-react";

export default function ImproveIELTSListening() {
  const listeningStrategies = [
    {
      title: "Active Listening Practice",
      description: "Focus completely on the audio without distractions",
      icon: Headphones,
      tips: ["Remove all distractions", "Focus entirely on the speaker", "Take notes while listening", "Practice daily for 30 minutes"]
    },
    {
      title: "Prediction Techniques",
      description: "Anticipate what you'll hear before listening",
      icon: Eye,
      tips: ["Read questions first", "Predict possible answers", "Look for keywords", "Understand question patterns"]
    },
    {
      title: "Note-Taking Skills",
      description: "Develop efficient note-taking methods",
      icon: BookOpen,
      tips: ["Use abbreviations", "Focus on key information", "Practice shorthand", "Organize notes logically"]
    },
    {
      title: "Vocabulary Building",
      description: "Expand your listening vocabulary",
      icon: Users,
      tips: ["Learn synonyms", "Practice collocations", "Study academic vocabulary", "Use context clues"]
    }
  ];

  const practiceResources = [
    {
      type: "Official IELTS Practice",
      description: "Use official IELTS listening materials",
      level: "All Levels",
      duration: "60+ hours",
      features: ["Authentic test format", "Scoring criteria", "Answer explanations", "Progress tracking"]
    },
    {
      type: "BBC Learning English",
      description: "Free listening exercises and news",
      level: "Intermediate to Advanced",
      duration: "Unlimited",
      features: ["Current affairs", "Various accents", "Transcript available", "Interactive exercises"]
    },
    {
      type: "TED Talks",
      description: "Academic and professional presentations",
      level: "Advanced",
      duration: "10-20 mins each",
      features: ["Subtitles available", "Wide range of topics", "Expert speakers", "Interactive transcripts"]
    },
    {
      type: "Podcasts",
      description: "English podcasts for skill improvement",
      level: "All Levels",
      duration: "20-60 mins each",
      features: ["Various topics", "Natural speech", "Regular episodes", "Downloadable content"]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Not reading instructions carefully",
      solution: "Always read instructions twice before starting",
      impact: "Can lead to wrong answer format"
    },
    {
      mistake: "Trying to understand every word",
      solution: "Focus on key information and context",
      impact: "Causes panic and missed answers"
    },
    {
      mistake: "Writing while listening to first recording",
      solution: "Use first listening to understand, second to write",
      impact: "Missing important details"
    },
    {
      mistake: "Spelling mistakes in answers",
      solution: "Practice spelling common IELTS words",
      impact: "Incorrect answers even with right content"
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
            <span className="text-gray-900">How to Improve IELTS Listening</span>
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
                  src="https://images.unsplash.com/photo-1606096559100-04f0ab2c1fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="IELTS Listening Improvement"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">8,234 views</span>
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
                  How to Improve IELTS Listening Skills
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">March 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">8 min read</span>
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
                  IELTS Listening is often considered one of the most challenging sections of the IELTS exam. However, with the right strategies and consistent practice, you can significantly improve your listening skills and achieve your target band score.
                </p>

                {/* Listening Strategies Infographic */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Listening Strategies</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {listeningStrategies.map((strategy, index) => {
                      const Icon = strategy.icon;
                      return (
                        <div key={strategy.title} className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-blue-100 rounded-xl">
                              <Icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{strategy.title}</h3>
                          </div>
                          <p className="text-gray-700 mb-4">{strategy.description}</p>
                          <ul className="space-y-2">
                            {strategy.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Practice Resources Chart */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practice Resources</h2>
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                      <h3 className="text-xl font-bold mb-2">Recommended Listening Resources</h3>
                      <p className="opacity-90">Compare different resources to find what works best for you</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {practiceResources.map((resource, index) => (
                        <div key={resource.type} className="p-6 hover:bg-gray-50 transition-colors">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <div>
                              <h4 className="font-bold text-gray-900 mb-1">{resource.type}</h4>
                              <p className="text-gray-600 text-sm">{resource.description}</p>
                            </div>
                            <div className="text-center">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {resource.level}
                              </span>
                            </div>
                            <div className="text-center">
                              <span className="text-gray-600 font-medium">{resource.duration}</span>
                            </div>
                            <div>
                              <div className="flex flex-wrap gap-1">
                                {resource.features.map((feature, featureIndex) => (
                                  <span key={featureIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                    {feature}
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

                {/* Common Mistakes Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                  <div className="space-y-6">
                    {commonMistakes.map((item, index) => (
                      <div key={index} className="bg-red-50 border border-red-200 rounded-2xl p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h3 className="font-bold text-red-900 mb-2">❌ Mistake</h3>
                            <p className="text-red-700">{item.mistake}</p>
                          </div>
                          <div>
                            <h3 className="font-bold text-green-900 mb-2">✅ Solution</h3>
                            <p className="text-green-700">{item.solution}</p>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">⚠️ Impact</h3>
                            <p className="text-gray-700">{item.impact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Band Score Improvement Chart */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Band Score Improvement Timeline</h2>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-xl">1</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Week 1-2</h3>
                        <p className="text-gray-600 text-sm">Baseline assessment and strategy learning</p>
                        <div className="mt-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Band 5.0-5.5</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-xl">2</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Week 3-4</h3>
                        <p className="text-gray-600 text-sm">Intensive practice and skill building</p>
                        <div className="mt-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Band 6.0-6.5</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-xl">3</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Week 5-6</h3>
                        <p className="text-gray-600 text-sm">Advanced techniques and mock tests</p>
                        <div className="mt-2">
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Band 7.0-7.5</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-xl">4</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Week 7-8</h3>
                        <p className="text-gray-600 text-sm">Final preparation and confidence building</p>
                        <div className="mt-2">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Band 8.0+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Key Tips Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Top 5 Quick Tips</h2>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {[
                      { number: "1", tip: "Practice with different accents daily", color: "bg-blue-500" },
                      { number: "2", tip: "Use prediction techniques before listening", color: "bg-green-500" },
                      { number: "3", tip: "Focus on keywords and synonyms", color: "bg-purple-500" },
                      { number: "4", tip: "Take effective notes while listening", color: "bg-red-500" },
                      { number: "5", tip: "Review and learn from mistakes", color: "bg-yellow-500" }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <span className="text-white font-bold">{item.number}</span>
                        </div>
                        <p className="text-gray-700 text-sm font-medium">{item.tip}</p>
                      </div>
                    ))}
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
                    Improving your IELTS listening skills requires consistent practice, the right strategies, and patience. Focus on understanding the test format, practicing with authentic materials, and developing your note-taking skills.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Remember that improvement takes time, so be patient with yourself and celebrate small victories along the way. With dedication and the right approach, you can achieve your target band score.
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
                    <span className="text-gray-600">Improvement Time:</span>
                    <span className="font-semibold">6-8 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Daily Practice:</span>
                    <span className="font-semibold">30-60 minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Target Band:</span>
                    <span className="font-semibold">7.0+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold">85%</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Need IELTS Coaching?</h3>
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
                      <option>Current Band Score</option>
                      <option>4.0 - 4.5</option>
                      <option>5.0 - 5.5</option>
                      <option>6.0 - 6.5</option>
                      <option>7.0+</option>
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

              {/* Related Articles */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/ielts-preparation-tips" className="block text-blue-600 hover:text-blue-800 text-sm">
                    IELTS Preparation Tips: 10 Expert Strategies
                  </a>
                  <a href="/blog/ielts-writing-task-1" className="block text-blue-600 hover:text-blue-800 text-sm">
                    IELTS Writing Task 1: Academic Guide
                  </a>
                  <a href="/blog/ielts-speaking-practice" className="block text-blue-600 hover:text-blue-800 text-sm">
                    IELTS Speaking Practice Methods
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}