import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, BookOpen, CheckCircle, ExternalLink, ArrowRight, Eye, Target, Zap, Award, TrendingUp, Users, Globe, Mic, PenTool, Headphones, FileText, Timer, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const shareUrl = window.location.href;
  const title = "Kaplan Test of English (KTE) - Complete Guide";

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
    { id: "what-is-kaplan", title: "What is Kaplan Test?" },
    { id: "sections", title: "Sections of Kaplan English Test" },
    { id: "preparation", title: "How to Prepare for KTE?" },
    { id: "cost", title: "Cost for Kaplan Assessment Exam" },
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
            <span className="text-gray-900">Kaplan Test of English</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="py-8">
              {/* Featured Image with Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative group overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Kaplan Test of English"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">15,847 views</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute bottom-4 left-4 z-20">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold">Expert Guide</span>
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
                  Kaplan Test of English (KTE): Complete Guide & Preparation Tips
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-4 text-sm mb-6"
                >
                  <div className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 rounded-full px-4 py-2 transition-colors duration-300">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">March 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 hover:bg-green-100 rounded-full px-4 py-2 transition-colors duration-300">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">8 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 rounded-full px-4 py-2 transition-colors duration-300">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Dunya Consultants</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex items-center justify-between border-t border-b border-gray-200 py-6"
                >
                  <div className="flex flex-wrap gap-3">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full shadow-lg cursor-pointer"
                    >
                      English Test
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full shadow-lg cursor-pointer"
                    >
                      Study Abroad
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-full shadow-lg cursor-pointer"
                    >
                      Test Preparation
                    </motion.span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">Share:</span>
                    {shareLinks.map((link, index) => (
                      <motion.button
                        key={link.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-full hover:shadow-lg transition-all duration-300 ${link.color}`}
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <link.icon className="w-5 h-5" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    If you are an international student planning to study for a Master's or PhD abroad, you may need to prove your English language skills. Different universities accept different tests, so it is crucial to check which one suits you best. The Kaplan Test of English (KTE) is an online test that evaluates your writing, reading, listening, and speaking skills.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    You can take Kaplan assessment test from home anytime without booking an appointment or visiting a Kaplan test center. You just need a suitable technical setup. Results are sent via email within 2-5 days. You can forward the Kaplan assessment exam results to as many universities as you want, completely free of charge. Unlike other tests, there are no extra fees for sending results.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    Here's what you need to know about the Kaplan Test of English and how to prepare for it effectively.
                  </p>
                </div>

                <div id="what-is-kaplan" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">What is Kaplan Test?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Kaplan English Test is an adaptive online test that checks your English language skills in different areas. During the test, you may need to listen to conversations, write an essay, read emails and articles, answer comprehension questions, or speak into your computer's microphone.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Unlike traditional paper-based tests, where everyone answers the same questions, Kaplan test questions work differently. It is an adaptive test, meaning the questions change based on your English level. As you take the test, KTE selects questions that match your abilities, so no two test takers have the exact same questions.
                  </p>
                </div>

                <div id="sections" className="mb-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    Sections of Kaplan English Test
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-700 leading-relaxed text-lg mb-8"
                  >
                    The Kaplan English Test checks your skills in reading, listening, writing, and speaking across different timed and untimed sections.
                  </motion.p>
                  
                  {/* Interactive Test Format Infographic */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 shadow-xl">
                    <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      KTE Test Format Overview
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Writing Section */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-200"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                          <PenTool className="w-8 h-8 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-bold text-blue-900 mb-2 text-center">Writing</h4>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <Timer className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">25-40 minutes</span>
                          </div>
                          <p className="text-sm text-gray-600">Essay, paragraph, or email writing tasks</p>
                        </div>
                      </motion.div>

                      {/* Listening Section */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-green-200"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                          <Headphones className="w-8 h-8 text-green-600" />
                        </div>
                        <h4 className="text-lg font-bold text-green-900 mb-2 text-center">Listening</h4>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <Infinity className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">No time limit</span>
                          </div>
                          <p className="text-sm text-gray-600">Adaptive audio comprehension</p>
                        </div>
                      </motion.div>

                      {/* Reading Section */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-purple-200"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                          <FileText className="w-8 h-8 text-purple-600" />
                        </div>
                        <h4 className="text-lg font-bold text-purple-900 mb-2 text-center">Reading</h4>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <Infinity className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-purple-700">No time limit</span>
                          </div>
                          <p className="text-sm text-gray-600">Text comprehension & grammar</p>
                        </div>
                      </motion.div>

                      {/* Speaking Section */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-orange-200"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                          <Mic className="w-8 h-8 text-orange-600" />
                        </div>
                        <h4 className="text-lg font-bold text-orange-900 mb-2 text-center">Speaking</h4>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <Timer className="w-4 h-4 text-orange-600" />
                            <span className="text-sm font-medium text-orange-700">10 minutes</span>
                          </div>
                          <p className="text-sm text-gray-600">Recorded oral responses</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <PenTool className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900">Writing – Timed Section (25-40 Minutes)</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        The Writing section is timed, and its length depends on your English level. You may need to write an essay, paragraph, or email. You'll have time to read the question and type your answer. After the Kaplan assessment exam, a KTE grader will evaluate your work and give you a score.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <Headphones className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-green-900">Listening, Reading & Grammar – No Time Limit</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        In these sections, there is no timer. KTE will automatically end the test once it has enough information about your English level. Your test may be longer or shorter than others, so focus on doing your best. On average, these sections take a little over an hour to complete.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                          <Mic className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-purple-900">Speaking – Timed Section (10 Minutes)</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        The Speaking section of Kaplan test questions lasts about 10 minutes. You will speak into your computer's microphone, and your responses will be recorded. A Kaplan assessment test grader will check your answers and give you a score after the test.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div id="preparation" className="mb-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    How to Prepare for KTE?
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-700 leading-relaxed text-lg mb-8"
                  >
                    The best way to get ready for the Kaplan English test is to practice your English skills regularly. Here are the most effective preparation strategies:
                  </motion.p>
                  
                  {/* Interactive Preparation Strategy Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                          <Globe className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">Practice English Daily</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        Listen to English podcasts and practice writing messages in English. Immerse yourself in the language through various media formats.
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <Target className="w-4 h-4" />
                        <span>Daily Practice Goal</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                          <Users className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-green-900">Active Communication</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        Speak with English-speaking friends, read articles regularly, and try thinking in English to improve fluency.
                      </p>
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <TrendingUp className="w-4 h-4" />
                        <span>Fluency Building</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                          <CheckCircle className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-purple-900">Format Familiarity</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        Get used to multiple-choice questions. Since the test uses this format extensively, practicing similar questions will help you feel more comfortable.
                      </p>
                      <div className="flex items-center gap-2 text-purple-600 font-medium">
                        <Zap className="w-4 h-4" />
                        <span>Format Mastery</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                          <Award className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-900">Expert Pro Tip</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        You will get a chance to practice Kaplan test questions before the real exam, so don't stress about the format.
                      </p>
                      <div className="flex items-center gap-2 text-orange-600 font-medium">
                        <Eye className="w-4 h-4" />
                        <span>Stress-Free Approach</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Preparation Timeline */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Recommended Preparation Timeline
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Week 1-2</h4>
                        <p className="text-gray-600 text-sm">Assessment & Basic Practice</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Week 3-4</h4>
                        <p className="text-gray-600 text-sm">Intensive Skill Development</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Week 5-6</h4>
                        <p className="text-gray-600 text-sm">Mock Tests & Final Preparation</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div id="cost" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Cost for Kaplan Assessment Exam</h2>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-8 mb-8">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-900 mb-2">£118 (€140)</p>
                      <p className="text-blue-700 text-lg font-medium">Standard Test Fee</p>
                      <p className="text-blue-600 text-sm mt-2">25% discount available for Kaplan partner universities</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The KTE costs around £118 (€140), which is competitive compared to other English proficiency tests. However, you may get a 25% discount if the university you're applying to is a Kaplan partner. Check with the university to see if you qualify.
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">Results & Delivery</h3>
                    <p className="text-green-800 leading-relaxed text-lg">
                      You will receive your results via email within 2-5 working days. Kaplan does not send your results to universities—you need to share them yourself. The good news is that you can send them to as many universities as you want without paying any extra fees, unlike some other English tests.
                    </p>
                  </div>
                </div>

                <div id="conclusion" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">What This Means</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Kaplan English Test is an online test you can take from home to check your English skills. It measures your ability in listening, grammar, writing, reading, and speaking, covering levels from beginner (A1) to advanced (C2).
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The test is adaptive, meaning the questions change based on your level. Some people may get more questions than others, but that is completely normal. It is recommended to just take your time and give your best.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    KTE is a simple and flexible way to prove your English proficiency for universities that accept this certification.
                  </p>
                </div>

                <div id="faqs" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">How many times can you take the Kaplan exam?</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        You can take the Kaplan Test of English (KTE) as many times as you want, anytime. But for each attempt, you need to register again and pay the test fee.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">How can I practice Kaplan test questions?</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        You can practice for the KTE using free resources like practice tests, quizzes, and daily questions. If you want more help, you can also buy their courses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="border-t border-gray-200 pt-8 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Dunya Consultants</p>
                      <p className="text-gray-600">Educational Consultancy Expert</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Dunya Consultants has been helping students achieve their study abroad dreams since 2010. With over 17 offices across Pakistan and partnerships with 400+ universities worldwide, we provide comprehensive guidance for international education.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-gray-500">Share:</span>
                    {shareLinks.map((link) => (
                      <button
                        key={link.name}
                        className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${link.color}`}
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <link.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Help with Test Preparation?</h3>
                  <p className="mb-6 text-blue-100">
                    Get expert guidance for Kaplan Test preparation and other English proficiency tests
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50"
                    onClick={() => window.location.href = 'tel:+923041110947'}
                  >
                    Contact Our Experts
                  </Button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-2 px-3 rounded hover:bg-white transition-colors"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Contact */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Phone:</span>
                    <a href="tel:+923041110947" className="text-blue-600 hover:underline">
                      +92 304 1110947
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Email:</span>
                    <a href="mailto:query@teamdunya.com" className="text-blue-600 hover:underline">
                      query@teamdunya.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-600">Address:</span>
                    <span className="text-gray-700">110 Link Stadium Road Sargodha</span>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <a href="#" className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      IELTS vs PTE vs TOEFL: Which Test Should You Choose?
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Compare major English proficiency tests</p>
                  </a>
                  <a href="#" className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      Study Abroad: Complete Application Guide 2025
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Step-by-step university application process</p>
                  </a>
                  <a href="#" className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      Scholarship Opportunities for Pakistani Students
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Find funding for your international education</p>
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