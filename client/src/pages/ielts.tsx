import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Clock, Users, CheckCircle, BookOpen, PenTool, Headphones, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";

export default function IELTS() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const testSections = [
    {
      title: "Listening",
      duration: "30 minutes",
      icon: Headphones,
      description: "4 sections with conversations and monologues in various accents",
      tasks: ["Conversations", "Monologues", "Academic Discussions", "Lectures"]
    },
    {
      title: "Reading",
      duration: "60 minutes", 
      icon: BookOpen,
      description: "3 passages with 40 questions testing reading comprehension",
      tasks: ["Academic Texts", "General Training", "Multiple Choice", "True/False/Not Given"]
    },
    {
      title: "Writing",
      duration: "60 minutes",
      icon: PenTool,
      description: "Task 1: Chart/Graph description, Task 2: Essay writing",
      tasks: ["Task 1 - Data Description", "Task 2 - Essay Writing", "Academic Writing", "Coherence & Cohesion"]
    },
    {
      title: "Speaking",
      duration: "11-14 minutes",
      icon: MessageSquare,
      description: "3 parts face-to-face interview with certified examiner",
      tasks: ["Introduction & Interview", "Long Turn", "Discussion", "Fluency Assessment"]
    }
  ];

  const preparationCourses = [
    {
      title: "IELTS Foundation Course",
      duration: "6 weeks",
      price: "PKR 20,000",
      features: ["Complete IELTS format training", "All four skills development", "Weekly mock tests", "Study materials included"]
    },
    {
      title: "IELTS Complete Course", 
      duration: "10 weeks",
      price: "PKR 35,000",
      features: ["Comprehensive preparation", "Individual feedback", "Multiple mock tests", "Speaking practice sessions", "Score improvement guarantee"]
    },
    {
      title: "IELTS Intensive Course",
      duration: "14 weeks", 
      price: "PKR 45,000",
      features: ["Intensive training", "One-on-one sessions", "Unlimited mock tests", "Personal mentor", "University application guidance"]
    },
    {
      title: "IELTS Online Course",
      duration: "8 weeks",
      price: "PKR 25,000",
      features: ["Online live classes", "Recorded sessions", "Digital materials", "Online mock tests", "Flexible schedule"]
    }
  ];

  const bandRequirements = [
    { level: "Student Visa", band: "6.0+", description: "Minimum requirement for most universities" },
    { level: "Undergraduate", band: "6.5+", description: "Bachelor's degree programs" },
    { level: "Postgraduate", band: "7.0+", description: "Master's and PhD programs" },
    { level: "Professional", band: "7.5+", description: "Medical, nursing, teaching professions" }
  ];

  const tips = [
    {
      title: "Daily Practice",
      description: "Dedicate at least 2 hours daily to practice all four IELTS skills"
    },
    {
      title: "Vocabulary Building", 
      description: "Learn 10-15 new words daily and use them in sentences"
    },
    {
      title: "Mock Tests",
      description: "Take full-length practice tests weekly to build stamina and confidence"
    },
    {
      title: "Time Management",
      description: "Practice completing tasks within allocated time limits"
    },
    {
      title: "Speaking Practice",
      description: "Record yourself speaking and practice with native speakers when possible"
    },
    {
      title: "Reading Strategies",
      description: "Develop skimming and scanning techniques for better comprehension"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6"
            >
              <Award className="w-10 h-10" />
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              IELTS
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              World's most popular English language proficiency test for higher education and global migration
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
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
            <div className="mt-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
              >
                <p className="text-sm font-medium">
                  Academic • General • Global Recognition
                </p>
              </motion.div>
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
                IELTS Test{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1565c0] bg-clip-text text-transparent">
                  Format
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the IELTS test structure and sections
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
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1D50C9] to-[#1a73e8] rounded-lg flex items-center justify-center">
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
                      <h4 className="font-semibold text-gray-900">Components:</h4>
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

      

      {/* Band Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Band{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1565c0] bg-clip-text text-transparent">
                  Requirements
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                IELTS band score requirements for different purposes
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bandRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{requirement.level}</CardTitle>
                    <div className="text-3xl font-bold #1845B3">{requirement.band}</div>
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
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1565c0] bg-clip-text text-transparent">
                  Tips
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional strategies to achieve your target IELTS band score
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
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-[#1D50C9] to-[#1a73e8] rounded-lg flex items-center justify-center">
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
      
      <CompactConsultationForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}