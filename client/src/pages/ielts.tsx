import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Clock, CheckCircle, BookOpen, PenTool, Headphones, MessageSquare, Sparkles, Target, Zap, Lightbulb, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsultationBookingSection from "@/components/consultation-booking-section";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";
import { setStaticPageMeta } from "@/lib/seo";

export default function IELTS() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  
  useEffect(() => {
    setStaticPageMeta(
      "IELTS Preparation Courses",
      "Expert IELTS preparation courses to achieve your target band score. Comprehensive training for Listening, Reading, Writing, and Speaking modules with experienced instructors."
    );
  }, []);

  const testSections = [
    {
      title: "Listening",
      duration: "30 minutes",
      icon: Headphones,
      description: "4 sections with conversations and monologues in various accents",
      tasks: ["Conversations", "Monologues", "Academic Discussions", "Lectures"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Reading",
      duration: "60 minutes", 
      icon: BookOpen,
      description: "3 passages with 40 questions testing reading comprehension",
      tasks: ["Academic Texts", "General Training", "Multiple Choice", "True/False/Not Given"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Writing",
      duration: "60 minutes",
      icon: PenTool,
      description: "Task 1: Chart/Graph description, Task 2: Essay writing",
      tasks: ["Task 1 - Data Description", "Task 2 - Essay Writing", "Coherence & Cohesion"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Speaking",
      duration: "11-14 minutes",
      icon: MessageSquare,
      description: "3 parts face-to-face interview with certified examiner",
      tasks: ["Introduction & Interview", "Long Turn", "Discussion", "Fluency Assessment"],
      color: "from-blue-500 to-blue-600"
    }
  ];

  const bandRequirements = [
    { level: "Student Visa", band: "6.0+", description: "Most universities" },
    { level: "Undergraduate", band: "6.5+", description: "Bachelor's programs" },
    { level: "Postgraduate", band: "7.0+", description: "Master's & PhD" },
    { level: "Professional", band: "7.5+", description: "Professional roles" }
  ];

  const tips = [
    { title: "Daily Practice", description: "Dedicate at least 2 hours daily to practice all four IELTS skills", icon: Target },
    { title: "Vocabulary Building", description: "Learn 10-15 new words daily and use them in sentences", icon: Sparkles },
    { title: "Mock Tests", description: "Take full-length practice tests weekly to build stamina and confidence", icon: Award },
    { title: "Time Management", description: "Practice completing tasks within allocated time limits", icon: Clock },
    { title: "Speaking Practice", description: "Record yourself speaking and practice with native speakers", icon: Mic },
    { title: "Reading Strategies", description: "Develop skimming and scanning techniques for better comprehension", icon: BookOpen }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#1565c0] text-white pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-14 sm:w-20 h-14 sm:h-20 bg-white/15 rounded-full mb-4 sm:mb-6 border border-white/20 backdrop-blur-sm"
            >
              <Award className="w-7 sm:w-10 h-7 sm:h-10" />
            </motion.div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 pb-2">
              IELTS
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
              Master the world's most popular English proficiency test for higher education and global migration
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4 mb-8">
              <CalendlyButton
                text="Book Free Consultation"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 w-full sm:w-auto px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-transform"
                size="lg"
                showIcon={false}
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 w-full sm:w-auto transform hover:scale-105 transition-transform"
                onClick={() => setIsPopupOpen(true)}
              >
                Connect now
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto text-center"
            >
              {[
                { label: "Academic" },
                { label: "Global" },
                { label: "Trusted" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  className="bg-white/15 backdrop-blur-md rounded-full px-3 sm:px-5 py-2.5 sm:py-3 border border-white/40 hover:border-white/70 transition-all duration-300 shadow-lg shadow-white/10"
                >
                  <p className="text-xs sm:text-sm font-semibold whitespace-nowrap">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Test Format Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Test <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">Format</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Master each section of the IELTS exam
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testSections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div 
                  className="relative h-full bg-white rounded-2xl border border-blue-100 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${section.color}`}></div>
                  
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        <motion.div 
                          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          <section.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{section.title}</h3>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{section.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{section.description}</p>

                    <motion.div
                      animate={{ height: expandedSection === index ? "auto" : 0, opacity: expandedSection === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-blue-100">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Components:</h4>
                        <div className="flex flex-wrap gap-2">
                          {section.tasks.map((task, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <span className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full hover:shadow-md hover:border-blue-400 transition-all duration-200">
                                {task}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center gap-1 cursor-pointer group">
                      <span>{expandedSection === index ? "Show less" : "View details"}</span>
                      <motion.div animate={{ rotate: expandedSection === index ? 180 : 0 }}>
                        ↓
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Band Requirements */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Band <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">Requirements</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">IELTS band score requirements for different purposes</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {bandRequirements.map((req, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-blue-100 overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">Academic</span>
                    <div className="text-3xl sm:text-4xl font-bold text-[#1D50C9] mb-2">{req.band}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{req.level}</h3>
                    <p className="text-sm text-gray-600">{req.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Tips Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Expert <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">Tips</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">Professional strategies to achieve your target band score</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200 overflow-hidden h-full shadow-md hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative">
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-xl flex items-center justify-center mb-4 shadow-lg"
                      whileHover={{ scale: 1.15, rotate: -10 }}
                    >
                      <tip.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <ConsultationBookingSection />

      <Footer />
      
      <CompactConsultationForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
