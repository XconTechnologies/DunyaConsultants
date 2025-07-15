import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Linkedin, Twitter, BookOpen, CheckCircle, Phone, Award, Star, Users, Globe, TrendingUp, ExternalLink, Volume2, Headphones, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ImproveIELTSListeningSkills() {
  const shareUrl = window.location.href;
  const title = "How to Improve IELTS Listening Skills?";

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "text-blue-600 hover:text-blue-800"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      color: "text-blue-400 hover:text-blue-600"
    }
  ];

  const tableOfContents = [
    { id: "introduction", title: "Introduction to IELTS Listening" },
    { id: "test-format", title: "Understanding Test Format" },
    { id: "common-challenges", title: "Common Challenges" },
    { id: "improvement-strategies", title: "Improvement Strategies" },
    { id: "practice-techniques", title: "Practice Techniques" },
    { id: "listening-materials", title: "Recommended Materials" },
    { id: "exam-tips", title: "Exam Day Tips" },
    { id: "scoring-guide", title: "Scoring Guide" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faqs", title: "FAQs" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="text-gray-900">Improve IELTS Listening Skills</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  alt="IELTS Listening Skills"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">IELTS Listening Skills</h2>
                  <p className="text-lg">Master the Art of Listening</p>
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
                  How to Improve IELTS Listening Skills?
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">Jan 3, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">14 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Dunya Consultants</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full">
                      IELTS
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full">
                      Listening Skills
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-full">
                      Test Preparation
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">Share:</span>
                    {shareLinks.map((link) => (
                      <button
                        key={link.name}
                        className={`p-3 rounded-full hover:shadow-lg transition-all duration-300 ${link.color}`}
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <link.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div id="introduction" className="mb-10">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The IELTS Listening test is often considered one of the most challenging components of the IELTS exam. Success in this section requires not only good listening skills but also effective strategies, regular practice, and familiarity with various English accents and contexts.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    This comprehensive guide will provide you with proven techniques, practical tips, and structured approaches to dramatically improve your IELTS Listening performance and achieve your target band score.
                  </p>
                </div>

                <div id="test-format" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the IELTS Listening Test Format</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The IELTS Listening test consists of four sections, each with 10 questions, totaling 40 questions in 30 minutes plus 10 minutes for transferring answers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Section 1</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li>• Social/survival context</li>
                        <li>• Two people conversation</li>
                        <li>• Form completion, notes</li>
                        <li>• Easiest section</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-green-900 mb-3">Section 2</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Social context</li>
                        <li>• One person speaking</li>
                        <li>• Maps, plans, diagrams</li>
                        <li>• Moderate difficulty</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-purple-900 mb-3">Section 3</h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• Academic context</li>
                        <li>• Multiple speakers</li>
                        <li>• Discussions, tutorials</li>
                        <li>• Challenging section</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-orange-900 mb-3">Section 4</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Academic lecture</li>
                        <li>• One speaker</li>
                        <li>• Complex vocabulary</li>
                        <li>• Most difficult</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="common-challenges" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Challenges Students Face</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Understanding common obstacles can help you prepare more effectively and avoid typical mistakes.
                  </p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-red-900 mb-4">Main Challenges:</h3>
                    <ul className="space-y-2 text-red-800">
                      <li className="flex items-start gap-2">
                        <Volume2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Different accents (British, American, Australian, Canadian)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Volume2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Fast speech and connected speech patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Volume2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Distractors and incorrect information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Volume2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Time pressure and multitasking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Volume2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Spelling and grammar errors</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="improvement-strategies" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Improvement Strategies</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    These evidence-based strategies will help you systematically improve your listening skills.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        <Headphones className="w-5 h-5 inline mr-2" />
                        Active Listening
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Listen for keywords and synonyms</li>
                        <li>• Focus on stressed words</li>
                        <li>• Identify speaker's attitude</li>
                        <li>• Note cause-effect relationships</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        <Play className="w-5 h-5 inline mr-2" />
                        Prediction Skills
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Read questions before listening</li>
                        <li>• Predict possible answers</li>
                        <li>• Understand question types</li>
                        <li>• Use context clues</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        <CheckCircle className="w-5 h-5 inline mr-2" />
                        Note-Taking
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Use abbreviations and symbols</li>
                        <li>• Write key information only</li>
                        <li>• Organize notes logically</li>
                        <li>• Practice shorthand writing</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        <Star className="w-5 h-5 inline mr-2" />
                        Accent Familiarity
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Listen to various English accents</li>
                        <li>• Watch international news</li>
                        <li>• Use accent-specific materials</li>
                        <li>• Practice with native speakers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="practice-techniques" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Effective Practice Techniques</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Consistent practice with the right techniques is crucial for improvement.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Daily Practice Routine:</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                        <span>Listen to English media for 30 minutes daily</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                        <span>Complete one IELTS listening practice test</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                        <span>Focus on weak areas with targeted exercises</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                        <span>Review mistakes and learn from them</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                        <span>Practice dictation exercises</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div id="listening-materials" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Listening Materials</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Diverse listening materials will expose you to different accents, contexts, and vocabulary.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Academic Sources</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• TED Talks</li>
                        <li>• University lectures</li>
                        <li>• Academic podcasts</li>
                        <li>• BBC Learning English</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Entertainment</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• English movies/TV shows</li>
                        <li>• Radio programs</li>
                        <li>• YouTube channels</li>
                        <li>• Audio books</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Practice Materials</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Cambridge IELTS books</li>
                        <li>• Official IELTS practice tests</li>
                        <li>• Online platforms</li>
                        <li>• Mock test recordings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="exam-tips" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Exam Day Tips</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    These practical tips will help you perform your best on the actual test day.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Before the Test:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Arrive early and check your equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Bring required identification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Review question types quickly</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">During the Test:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Read instructions carefully</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Use the preview time effectively</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Don't panic if you miss an answer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Transfer answers carefully</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="scoring-guide" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">IELTS Listening Scoring Guide</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Understanding the scoring system helps you set realistic goals and track your progress.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Band Score</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Correct Answers</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Performance Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">9.0</td>
                          <td className="border border-gray-300 px-4 py-2">39-40</td>
                          <td className="border border-gray-300 px-4 py-2">Expert user</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">8.5</td>
                          <td className="border border-gray-300 px-4 py-2">37-38</td>
                          <td className="border border-gray-300 px-4 py-2">Very good user</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">8.0</td>
                          <td className="border border-gray-300 px-4 py-2">35-36</td>
                          <td className="border border-gray-300 px-4 py-2">Very good user</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">7.5</td>
                          <td className="border border-gray-300 px-4 py-2">32-34</td>
                          <td className="border border-gray-300 px-4 py-2">Good user</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">7.0</td>
                          <td className="border border-gray-300 px-4 py-2">30-31</td>
                          <td className="border border-gray-300 px-4 py-2">Good user</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">6.5</td>
                          <td className="border border-gray-300 px-4 py-2">26-29</td>
                          <td className="border border-gray-300 px-4 py-2">Competent user</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">6.0</td>
                          <td className="border border-gray-300 px-4 py-2">23-25</td>
                          <td className="border border-gray-300 px-4 py-2">Competent user</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div id="conclusion" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Improving your IELTS Listening skills requires dedication, consistent practice, and the right strategies. By following the techniques outlined in this guide and maintaining a regular practice routine, you can significantly enhance your listening abilities and achieve your target band score.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Remember that listening skills develop gradually, so be patient with yourself and celebrate small improvements along the way. With persistence and the right approach, you'll be well-prepared for success in the IELTS Listening test.
                  </p>
                </div>

                <div id="faqs" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">How long should I practice listening daily?</h3>
                      <p className="text-gray-700 text-sm">Aim for at least 30-60 minutes of focused listening practice daily, combining different types of materials and exercises.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Can I improve my listening skills in one month?</h3>
                      <p className="text-gray-700 text-sm">While significant improvement is possible in one month with intensive practice, realistic improvement typically takes 2-3 months of consistent effort.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Should I focus on British or American English?</h3>
                      <p className="text-gray-700 text-sm">IELTS uses various English accents, so practice with British, American, Australian, and Canadian accents for comprehensive preparation.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">What if I can't understand fast speech?</h3>
                      <p className="text-gray-700 text-sm">Start with slower content and gradually increase speed. Practice with connected speech patterns and focus on stressed words rather than every word.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Need IELTS Coaching?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our expert IELTS trainers can help you improve your listening skills and achieve your target band score.
                  </p>
                  <Button className="w-full" onClick={() => window.open('tel:+923041110947', '_blank')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call (+92) 304 1110947
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}