import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Clock, CheckCircle, BookOpen, Headphones, Mic, Smartphone, Sparkles, Target, Zap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsultationBookingSection from "@/components/consultation-booking-section";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";
import { setStaticPageMeta } from "@/lib/seo";

export default function Duolingo() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [expandedAdvantage, setExpandedAdvantage] = useState<number | null>(null);
  
  useEffect(() => {
    setStaticPageMeta(
      "Duolingo English Test Preparation",
      "Prepare for the Duolingo English Test with expert guidance. Take the test from home, get results in 48 hours. Accepted by 4,000+ universities worldwide."
    );
  }, []);

  const testSections = [
    {
      title: "Adaptive Test",
      duration: "45 minutes",
      icon: Smartphone,
      description: "Computer-adaptive questions that adjust to your ability level",
      tasks: ["Reading Comprehension", "Listening Comprehension", "Writing Samples", "Speaking Samples"]
    },
    {
      title: "Video Interview",
      duration: "10 minutes",
      icon: Mic,
      description: "Unscored video interview sent to institutions",
      tasks: ["Speaking Responses", "Written Responses", "Personal Introduction"]
    }
  ];

  const scoreRequirements = [
    { level: "Undergraduate", score: "105-120", description: "Bachelor's programs" },
    { level: "Graduate", score: "120-135", description: "Master's programs" },
    { level: "Top Universities", score: "135-160", description: "Ivy League & elite" },
    { level: "Competitive", score: "140-160", description: "Highly selective" }
  ];

  const advantages = [
    { title: "Convenient Testing", description: "Take from home on your computer" },
    { title: "Quick Results", description: "Scores within 48 hours" },
    { title: "Affordable Pricing", description: "Cost-effective option" },
    { title: "Wide Acceptance", description: "4,000+ universities worldwide" },
    { title: "Adaptive Format", description: "Adjusts to your skill level" },
    { title: "Multiple Attempts", description: "No waiting period between retakes" }
  ];

  const tips = [
    { title: "Test Environment", description: "Quiet, well-lit room with stable internet", icon: Lightbulb },
    { title: "Practice Regularly", description: "Use Duolingo app & practice questions", icon: Target },
    { title: "Time Management", description: "Complete questions efficiently", icon: Clock },
    { title: "Speaking Clarity", description: "Speak clearly and naturally", icon: Mic },
    { title: "Writing Accuracy", description: "Focus on grammar and structure", icon: BookOpen },
    { title: "Technical Prep", description: "Test equipment before exam day", icon: Zap }
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
              Duolingo English Test
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
              Master the online English test accepted by 4,000+ universities worldwide
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
                { label: "Online", icon: "🌐" },
                { label: "48hr Results", icon: "⚡" },
                { label: "Home Test", icon: "🏠" }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-4 py-2 sm:py-3 border border-white/20">
                  <p className="text-xs sm:text-sm font-medium">{item.label}</p>
                </div>
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
              Understand the Duolingo English Test structure
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="relative bg-white rounded-2xl border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <section.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{section.title}</h3>
                        <div className="flex items-center gap-2 text-blue-600 font-semibold mt-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{section.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{section.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Components:</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.tasks.map((task, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs hover:bg-blue-100 transition-colors">
                              {task}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <ConsultationBookingSection />

      {/* Modern Advantages Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">Duolingo?</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">Advantages of the Duolingo English Test</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => setExpandedAdvantage(expandedAdvantage === index ? null : index)}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-blue-100 overflow-hidden h-full shadow-md hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative">
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-xl flex items-center justify-center mb-4 shadow-lg"
                      whileHover={{ scale: 1.15, rotate: -10 }}
                    >
                      <Sparkles className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{adv.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Score Requirements */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Score <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">Requirements</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">Typical score ranges for different programs</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {scoreRequirements.map((req, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100 overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl font-bold text-[#1D50C9] mb-2">{req.score}</div>
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Success <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">Tips</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">Expert strategies to maximize your performance</p>
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
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-blue-200 overflow-hidden h-full shadow-md hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300">
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

      <Footer />
      
      <CompactConsultationForm 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
