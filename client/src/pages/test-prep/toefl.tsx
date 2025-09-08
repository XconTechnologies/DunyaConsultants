import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Clock, Users, CheckCircle, BookOpen, FileText, Headphones, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsultationBookingSection from "@/components/consultation-booking-section";
import CalendlyButton from "@/components/calendly-button";
import ConsultationFormPopup from "@/components/consultation-form-popup";

export default function TOEFL() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const testSections = [
    {
      title: "Reading",
      duration: "54-72 minutes",
      icon: BookOpen,
      description: "3-4 academic passages with 10 questions each",
      tasks: ["Academic Reading Passages", "Multiple Choice Questions", "Insert Text Questions", "Prose Summary Questions"]
    },
    {
      title: "Listening",
      duration: "41-57 minutes",
      icon: Headphones,
      description: "Lectures and conversations with questions",
      tasks: ["Academic Lectures", "Campus Conversations", "Multiple Choice Questions", "Note-taking"]
    },
    {
      title: "Speaking",
      duration: "17 minutes",
      icon: Mic,
      description: "4 tasks expressing opinions and summarizing information",
      tasks: ["Independent Speaking", "Integrated Speaking", "Campus Situations", "Academic Content"]
    },
    {
      title: "Writing",
      duration: "50 minutes",
      icon: FileText,
      description: "1 integrated task and 1 independent essay",
      tasks: ["Integrated Writing Task", "Independent Writing Task", "Academic Discussion Task"]
    }
  ];

  const preparationCourses = [
    {
      title: "TOEFL Foundation Course",
      duration: "6 weeks",
      price: "PKR 18,000",
      features: ["TOEFL format introduction", "Basic academic English", "Practice materials", "Weekly assessments"]
    },
    {
      title: "TOEFL Complete Course",
      duration: "10 weeks",
      price: "PKR 30,000",
      features: ["Comprehensive preparation", "All four skills training", "Mock tests", "Essay feedback", "Speaking practice"]
    },
    {
      title: "TOEFL Intensive Course",
      duration: "14 weeks",
      price: "PKR 40,000",
      features: ["Intensive preparation", "One-on-one sessions", "Multiple mock tests", "Score guarantee", "University guidance"]
    },
    {
      title: "TOEFL Online Course",
      duration: "8 weeks",
      price: "PKR 25,000",
      features: ["Online live classes", "Recorded sessions", "Digital materials", "Online mock tests", "Flexible schedule"]
    }
  ];

  const scoreRequirements = [
    { level: "Undergraduate", score: "80-100", description: "Most universities require 80+ for undergraduate programs" },
    { level: "Graduate", score: "90-110", description: "Master's programs typically require 90+ overall" },
    { level: "PhD Programs", score: "100-120", description: "Doctoral programs often require 100+ scores" },
    { level: "Top Universities", score: "110-120", description: "Ivy League and top-tier institutions" }
  ];

  const tips = [
    {
      title: "Academic Vocabulary",
      description: "Build strong academic vocabulary essential for university-level content"
    },
    {
      title: "Note-taking Skills",
      description: "Develop effective note-taking strategies for listening and integrated tasks"
    },
    {
      title: "Time Management",
      description: "Practice managing time effectively across all four sections"
    },
    {
      title: "Critical Thinking",
      description: "Develop analytical skills for reading comprehension and writing tasks"
    },
    {
      title: "Speaking Fluency",
      description: "Practice speaking clearly and coherently within time limits"
    },
    {
      title: "Essay Structure",
      description: "Master academic essay writing with proper structure and development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-[#1D50C9] to-[#1565c0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <Award className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">TOEFL iBT</span>
            </div>
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white">
              TOEFL iBT
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Academic English assessment accepted by 11,500+ universities in over 160 countries
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <CalendlyButton
                text="Book Free Consultation"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 w-full sm:w-auto px-6 py-3 text-lg font-semibold"
                size="lg"
                showIcon={false}
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                onClick={() => setIsPopupOpen(true)}
              >
                Connect now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Test Format Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                TOEFL Test{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Format
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the TOEFL iBT test structure and academic requirements
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-lg flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {section.duration}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Task Types:</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.tasks.map((task, taskIndex) => (
                          <Badge key={taskIndex} variant="secondary" className="text-xs">
                            {task}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <ConsultationBookingSection />

      {/* Preparation Courses Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                TOEFL Preparation{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Courses
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive courses designed to achieve your target TOEFL score
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preparationCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </CardDescription>
                    <div className="text-2xl font-bold #1845B3">{course.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 #1D50C9 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-#1a73e8 hover:to-[#1a73e8] text-white">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Score Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Score{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Requirements
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                TOEFL score requirements for different academic levels
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scoreRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{requirement.level}</CardTitle>
                    <div className="text-3xl font-bold #1845B3">{requirement.score}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{requirement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Expert{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Tips
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional strategies to excel in your TOEFL examination
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Consultation Form Popup */}
      <ConsultationFormPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}