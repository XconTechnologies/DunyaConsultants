import { motion } from "framer-motion";
import { Calendar, Clock, User, BookOpen, Share2, Twitter, Facebook, Linkedin, Eye, Award, CheckCircle, Globe, TrendingUp, Target, Users, Zap, Timer, Infinity, PenTool, Headphones, FileText, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GlobalTalentVisaAustralia() {
  const shareLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/intent/tweet?text=Global Talent Visa Australia - Complete Guide&url=" + encodeURIComponent(window.location.href),
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
    { id: "what-is-gtv", title: "What is Global Talent Visa Australia?" },
    { id: "eligibility", title: "Eligibility Requirements" },
    { id: "application-process", title: "Application Process" },
    { id: "benefits", title: "Benefits & Advantages" },
    { id: "timeline", title: "Processing Timeline" },
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
            <span className="text-gray-900">Global Talent Visa Australia</span>
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
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Global Talent Visa Australia"
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
                      <span className="font-semibold">12,456 views</span>
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
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">Visa Expert Guide</span>
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
                  A Complete Guide to Global Talent Visa Australia
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-4 text-sm mb-6"
                >
                  <div className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 rounded-full px-4 py-2 transition-colors duration-300">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">March 24, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 hover:bg-green-100 rounded-full px-4 py-2 transition-colors duration-300">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">12 min read</span>
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
                      Visa Guide
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full shadow-lg cursor-pointer"
                    >
                      Australia Immigration
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-full shadow-lg cursor-pointer"
                    >
                      Global Talent
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
                    If you have special skills and internationally recognized qualifications, you can apply for Global Talent Visa Australia (subclass 858). This visa allows skilled professionals to live and work permanently in Australia without requiring a job offer or nomination from an Australian employer.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Global Talent Visa is designed to attract exceptional and talented individuals who can contribute to Australia's innovation and economy. This comprehensive guide will help you understand the eligibility requirements, application process, and benefits of this prestigious visa.
                  </p>
                </div>

                <div id="what-is-gtv" className="mb-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    What is Global Talent Visa Australia?
                  </motion.h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Global Talent Visa (subclass 858) is a permanent residence visa for highly skilled individuals who can contribute to Australia's economy. It's part of the Global Talent Independent program, which aims to attract the best and brightest minds from around the world.
                  </p>
                  
                  {/* Key Features Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">Permanent Residence</h3>
                      </div>
                      <p className="text-gray-700">
                        Grants immediate permanent residence in Australia without the need for temporary visas.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <Globe className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-green-900">No Job Offer Required</h3>
                      </div>
                      <p className="text-gray-700">
                        You don't need a job offer or employer nomination to apply for this visa.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-purple-900">Fast Processing</h3>
                      </div>
                      <p className="text-gray-700">
                        Priority processing with faster application times compared to other visa categories.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-900">Include Family</h3>
                      </div>
                      <p className="text-gray-700">
                        Include your spouse/partner and dependent children in your application.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div id="eligibility" className="mb-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    Eligibility Requirements
                  </motion.h2>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
                    <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Key Eligibility Criteria
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Exceptional Talent</h4>
                          <p className="text-gray-700">You must have exceptional talent in one of the target sectors including technology, advanced manufacturing, energy, health industries, space, advanced materials, quantum information, medical technology, cyber security, agriculture, and resources.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Internationally Recognized Record</h4>
                          <p className="text-gray-700">Evidence of internationally recognized record of exceptional and outstanding achievement in your field.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Globe className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Nomination</h4>
                          <p className="text-gray-700">You must be nominated by an Australian organization or individual with a national reputation in your field.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Contribution to Australia</h4>
                          <p className="text-gray-700">Demonstrate how your talent will benefit Australia and contribute to the Australian economy.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="application-process" className="mb-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    Application Process
                  </motion.h2>
                  
                  <div className="space-y-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900">Expression of Interest (EOI)</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Submit an EOI through the Global Talent Officer. Provide evidence of your exceptional talent and achievements in your field.
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
                          <span className="text-white font-bold">2</span>
                        </div>
                        <h3 className="text-2xl font-bold text-green-900">Unique Identifier</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        If your EOI is successful, you'll receive a unique identifier that allows you to apply for the Global Talent visa.
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
                          <span className="text-white font-bold">3</span>
                        </div>
                        <h3 className="text-2xl font-bold text-purple-900">Visa Application</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Submit your complete visa application with all required documents, including nomination letter and evidence of achievements.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div id="benefits" className="mb-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    Benefits & Advantages
                  </motion.h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                        <h3 className="text-lg font-bold text-gray-900">Permanent Residence</h3>
                      </div>
                      <p className="text-gray-700">Live and work permanently in Australia</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-blue-500" />
                        <h3 className="text-lg font-bold text-gray-900">Include Family</h3>
                      </div>
                      <p className="text-gray-700">Include spouse/partner and dependent children</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-8 h-8 text-purple-500" />
                        <h3 className="text-lg font-bold text-gray-900">Path to Citizenship</h3>
                      </div>
                      <p className="text-gray-700">Eligible for Australian citizenship after meeting requirements</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-8 h-8 text-orange-500" />
                        <h3 className="text-lg font-bold text-gray-900">Travel Freedom</h3>
                      </div>
                      <p className="text-gray-700">Travel freely in and out of Australia for 5 years</p>
                    </motion.div>
                  </div>
                </div>

                <div id="timeline" className="mb-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    Processing Timeline
                  </motion.h2>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Timer className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">EOI Processing</h4>
                        <p className="text-gray-600 text-sm">2-4 weeks</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Visa Application</h4>
                        <p className="text-gray-600 text-sm">3-6 months</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Total Process</h4>
                        <p className="text-gray-600 text-sm">4-8 months</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="conclusion" className="mb-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    Conclusion
                  </motion.h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Global Talent Visa Australia offers an exceptional opportunity for skilled professionals to establish themselves in one of the world's most innovative economies. With its streamlined application process and attractive benefits, this visa pathway provides a direct route to permanent residence for those with exceptional talent.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you believe you have the exceptional talent and achievements required for this visa, we encourage you to explore this opportunity. Our experienced consultants at Dunya Consultants can guide you through the entire process to maximize your chances of success.
                  </p>
                </div>

                <div id="faqs" className="mb-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    Frequently Asked Questions
                  </motion.h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Do I need a job offer to apply for the Global Talent Visa?</h3>
                      <p className="text-gray-700">No, you do not need a job offer or employer nomination to apply for the Global Talent Visa. This is one of its key advantages.</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">What sectors are eligible for the Global Talent Visa?</h3>
                      <p className="text-gray-700">The target sectors include technology, advanced manufacturing, energy, health industries, space, advanced materials, quantum information, medical technology, cyber security, agriculture, and resources.</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">How long does the application process take?</h3>
                      <p className="text-gray-700">The entire process typically takes 4-8 months, including EOI processing (2-4 weeks) and visa application processing (3-6 months).</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Can I include my family in the application?</h3>
                      <p className="text-gray-700">Yes, you can include your spouse/partner and dependent children in your Global Talent Visa application.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dunya Consultants</p>
                    <p className="text-sm text-gray-600">Visa & Immigration Experts</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  With over 15 years of experience in Australian immigration, our team provides expert guidance for visa applications and study abroad programs.
                </p>
                <Button size="sm" className="w-full">
                  Contact Expert
                </Button>
              </div>

              {/* Contact CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Need Help with Your Application?</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Our visa experts are ready to help you with your Global Talent Visa application.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}