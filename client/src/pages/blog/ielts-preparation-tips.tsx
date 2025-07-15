import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, BookOpen, CheckCircle, ExternalLink, ArrowRight, Eye, Target, Zap, Award, TrendingUp, Users, Globe, Headphones, PenTool, Mic, MessageSquare, Timer, Star, Trophy, Brain, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function IELTSPreparationTips() {
  const shareLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/intent/tweet?text=Top 10 IELTS Preparation Tips for High Band Score&url=" + encodeURIComponent(window.location.href),
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook", 
      url: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      icon: Facebook,
      color: "hover:text-blue-600"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href),
      icon: Linkedin,
      color: "hover:text-blue-700"
    }
  ];

  const tableOfContents = [
    { id: "understanding-ielts", title: "Understanding IELTS" },
    { id: "listening-tips", title: "Listening Section Tips" },
    { id: "reading-tips", title: "Reading Section Tips" },
    { id: "writing-tips", title: "Writing Section Tips" },
    { id: "speaking-tips", title: "Speaking Section Tips" },
    { id: "study-schedule", title: "Study Schedule & Timeline" },
    { id: "common-mistakes", title: "Common Mistakes to Avoid" },
    { id: "final-tips", title: "Final Preparation Tips" },
    { id: "faqs", title: "FAQs" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const listeningTips = [
    {
      icon: Headphones,
      title: "Practice Active Listening",
      description: "Listen to English podcasts, BBC News, and TED talks daily to improve comprehension"
    },
    {
      icon: Timer,
      title: "Time Management",
      description: "You get 30 minutes for 40 questions - practice managing your time effectively"
    },
    {
      icon: Eye,
      title: "Read Questions First",
      description: "Always read questions before the audio starts to predict answers"
    },
    {
      icon: Target,
      title: "Focus on Keywords",
      description: "Listen for keywords and synonyms that indicate the correct answer"
    }
  ];

  const readingTips = [
    {
      icon: BookOpen,
      title: "Skimming & Scanning",
      description: "Master these techniques to quickly locate information in texts"
    },
    {
      icon: Clock,
      title: "Time Distribution",
      description: "Allocate 20 minutes per passage - don't spend too long on difficult questions"
    },
    {
      icon: Target,
      title: "Question Types",
      description: "Practice all question types: multiple choice, true/false, matching, gap-fill"
    },
    {
      icon: Brain,
      title: "Vocabulary Building",
      description: "Expand your vocabulary through extensive reading of academic texts"
    }
  ];

  const writingTips = [
    {
      icon: PenTool,
      title: "Task Response",
      description: "Fully address all parts of the question and maintain focus throughout"
    },
    {
      icon: Trophy,
      title: "Coherence & Cohesion",
      description: "Use linking words and organize ideas logically with clear paragraphs"
    },
    {
      icon: Lightbulb,
      title: "Lexical Resource",
      description: "Use a wide range of vocabulary accurately and appropriately"
    },
    {
      icon: CheckCircle,
      title: "Grammar Range",
      description: "Demonstrate variety in sentence structures and grammatical accuracy"
    }
  ];

  const speakingTips = [
    {
      icon: Mic,
      title: "Fluency Practice",
      description: "Practice speaking English daily, even if just talking to yourself"
    },
    {
      icon: MessageSquare,
      title: "Develop Ideas",
      description: "Learn to expand your answers with examples and personal experiences"
    },
    {
      icon: Users,
      title: "Pronunciation",
      description: "Focus on clear pronunciation and natural intonation patterns"
    },
    {
      icon: Star,
      title: "Confidence Building",
      description: "Practice with mock interviews and record yourself speaking"
    }
  ];

  const studySchedule = [
    { week: "Week 1-2", focus: "Diagnostic Test & Skill Assessment", activities: ["Take practice test", "Identify weak areas", "Set realistic goals"] },
    { week: "Week 3-4", focus: "Listening & Reading Intensive", activities: ["Daily listening practice", "Reading comprehension", "Vocabulary building"] },
    { week: "Week 5-6", focus: "Writing Skills Development", activities: ["Task 1 practice", "Task 2 essays", "Grammar improvement"] },
    { week: "Week 7-8", focus: "Speaking Practice", activities: ["Daily speaking practice", "Mock interviews", "Pronunciation work"] },
    { week: "Week 9-10", focus: "Mock Tests & Review", activities: ["Full practice tests", "Review mistakes", "Final preparations"] }
  ];

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
            <span className="text-gray-900">IELTS Preparation Tips</span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-green-600/20 to-purple-600/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="IELTS Preparation Tips"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Badge className="bg-green-600 text-white mb-3">Test Preparation</Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      Top 10 IELTS Preparation Tips for High Band Score
                    </h1>
                    <p className="text-gray-200 text-lg">
                      Master strategies to achieve your target IELTS score
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Article Meta */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Dunya Consultants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">January 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">15 min read</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Share</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Achieving a high band score in IELTS requires strategic preparation, consistent practice, and 
                    understanding of the test format. Whether you're aiming for 7.0 or 8.5, these proven tips 
                    will help you maximize your performance across all four skills: Listening, Reading, Writing, and Speaking.
                  </p>

                  <section id="understanding-ielts" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Understanding IELTS
                    </h2>
                    
                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-blue-800">IELTS Test Structure</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Academic Module</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Listening: 30 minutes + 10 minutes transfer</li>
                            <li>• Reading: 60 minutes (3 passages)</li>
                            <li>• Writing: 60 minutes (2 tasks)</li>
                            <li>• Speaking: 11-14 minutes (face-to-face)</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">General Training</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Same listening and speaking tests</li>
                            <li>• Reading: More practical texts</li>
                            <li>• Writing: Letters and essays</li>
                            <li>• Often easier than Academic</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-green-800">Band Score Requirements</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">6.0-6.5</div>
                          <div className="text-sm text-green-700">Undergraduate Programs</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">7.0-7.5</div>
                          <div className="text-sm text-green-700">Graduate Programs</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">8.0+</div>
                          <div className="text-sm text-green-700">Professional Bodies</div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="listening-tips" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Listening Section Tips
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {listeningTips.map((tip, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                        >
                          <tip.icon className="h-8 w-8 text-blue-600 mb-4" />
                          <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                          <p className="text-gray-600">{tip.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <h3 className="text-xl font-semibold mb-4 text-yellow-800">Listening Practice Resources</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-yellow-700">
                        <li>• BBC Learning English</li>
                        <li>• Cambridge IELTS Practice Tests</li>
                        <li>• IELTS Listening Practice Online</li>
                        <li>• English Podcasts (All Ears English)</li>
                        <li>• TED Talks with subtitles</li>
                        <li>• British Council IELTS Prep</li>
                      </ul>
                    </div>
                  </section>

                  <section id="reading-tips" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Reading Section Tips
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {readingTips.map((tip, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-purple-50 p-6 rounded-lg border border-purple-100"
                        >
                          <tip.icon className="h-8 w-8 text-purple-600 mb-4" />
                          <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                          <p className="text-gray-600">{tip.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <h3 className="text-xl font-semibold mb-4 text-purple-800">Reading Strategies</h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-purple-700">Read the instructions carefully and understand what each question is asking</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-purple-700">Don't waste time reading the entire passage first - go straight to the questions</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-purple-700">Look for synonyms and paraphrases - answers rarely use the exact same words</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-purple-700">Use process of elimination for multiple choice questions</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="writing-tips" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Writing Section Tips
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {writingTips.map((tip, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-green-50 p-6 rounded-lg border border-green-100"
                        >
                          <tip.icon className="h-8 w-8 text-green-600 mb-4" />
                          <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                          <p className="text-gray-600">{tip.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h3 className="text-xl font-semibold mb-4 text-green-800">Task 1 Tips (Academic)</h3>
                        <ul className="space-y-2 text-green-700">
                          <li>• Spend 20 minutes maximum</li>
                          <li>• Write at least 150 words</li>
                          <li>• Describe trends, not every detail</li>
                          <li>• Use appropriate vocabulary for data</li>
                          <li>• Compare and contrast key features</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h3 className="text-xl font-semibold mb-4 text-green-800">Task 2 Tips</h3>
                        <ul className="space-y-2 text-green-700">
                          <li>• Spend 40 minutes on this task</li>
                          <li>• Write at least 250 words</li>
                          <li>• Plan your essay structure first</li>
                          <li>• Support arguments with examples</li>
                          <li>• Write a clear conclusion</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="speaking-tips" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Speaking Section Tips
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {speakingTips.map((tip, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-red-50 p-6 rounded-lg border border-red-100"
                        >
                          <tip.icon className="h-8 w-8 text-red-600 mb-4" />
                          <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                          <p className="text-gray-600">{tip.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h3 className="text-xl font-semibold mb-4 text-red-800">Speaking Test Structure</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">Part 1 (4-5 mins)</h4>
                          <ul className="text-sm text-red-600 space-y-1">
                            <li>• Introduction and interview</li>
                            <li>• Familiar topics</li>
                            <li>• Short responses</li>
                            <li>• Personal questions</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">Part 2 (3-4 mins)</h4>
                          <ul className="text-sm text-red-600 space-y-1">
                            <li>• Individual long turn</li>
                            <li>• 1 minute preparation</li>
                            <li>• 2 minutes speaking</li>
                            <li>• Follow-up questions</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">Part 3 (4-5 mins)</h4>
                          <ul className="text-sm text-red-600 space-y-1">
                            <li>• Two-way discussion</li>
                            <li>• Abstract topics</li>
                            <li>• Detailed responses</li>
                            <li>• Express opinions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="study-schedule" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      10-Week Study Schedule
                    </h2>
                    
                    <div className="space-y-6">
                      {studySchedule.map((week, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">{week.week}</h3>
                            <Badge variant="outline">{week.focus}</Badge>
                          </div>
                          <ul className="space-y-2">
                            {week.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="common-mistakes" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Common Mistakes to Avoid
                    </h2>
                    
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-red-800">Test Day Mistakes</h3>
                          <ul className="space-y-2 text-red-700">
                            <li>• Not reading instructions carefully</li>
                            <li>• Poor time management</li>
                            <li>• Leaving questions unanswered</li>
                            <li>• Not checking answers</li>
                            <li>• Panicking during the test</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-red-800">Preparation Mistakes</h3>
                          <ul className="space-y-2 text-red-700">
                            <li>• Focusing on only one skill</li>
                            <li>• Not practicing under test conditions</li>
                            <li>• Memorizing answers</li>
                            <li>• Ignoring feedback</li>
                            <li>• Last-minute cramming</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="final-tips" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Final Preparation Tips
                    </h2>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Week Before the Test</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Take a full practice test under exam conditions</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Review your mistakes and weak areas</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Practice relaxation techniques</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Prepare all required documents</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Get enough sleep and eat well</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Arrive early at the test center</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Frequently Asked Questions
                    </h2>
                    
                    <div className="space-y-6">
                      {[
                        {
                          question: "How long should I prepare for IELTS?",
                          answer: "Most students need 6-12 weeks of consistent preparation. If you're already at an intermediate level, 6-8 weeks may be sufficient. Beginners might need 3-6 months of preparation."
                        },
                        {
                          question: "How many times can I take the IELTS test?",
                          answer: "There's no limit to how many times you can take IELTS. However, you must wait for your results before booking another test, and there should be reasonable gaps between attempts."
                        },
                        {
                          question: "Which is harder: IELTS Academic or General Training?",
                          answer: "IELTS Academic is generally considered more challenging, especially in Reading and Writing tasks. Academic reading passages are more complex, and Writing Task 1 requires describing graphs and charts."
                        },
                        {
                          question: "Can I use American English in IELTS?",
                          answer: "Yes, both British and American English are accepted in IELTS. However, be consistent throughout your test - don't mix different varieties of English in the same response."
                        },
                        {
                          question: "What's the minimum score needed for Canadian immigration?",
                          answer: "For Canadian immigration, you typically need at least CLB 7 (IELTS 6.0 in each skill) for skilled worker programs. Higher scores improve your chances significantly."
                        }
                      ].map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Share Article */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Share This Article</h3>
                  <div className="flex space-x-3">
                    {shareLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full bg-gray-100 transition-colors ${link.color}`}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">IELTS Preparation Course</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Join our comprehensive IELTS preparation course and achieve your target band score with expert guidance.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Enroll Now
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