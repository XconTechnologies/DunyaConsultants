import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, Users, CheckCircle, BookOpen, FileText, Headphones, Mic, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Duolingo() {
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

  const preparationCourses = [
    {
      title: "Duolingo Basic Course",
      duration: "4 weeks",
      price: "PKR 12,000",
      features: ["Test format familiarization", "Practice questions", "Basic strategies", "Progress tracking"]
    },
    {
      title: "Duolingo Complete Course",
      duration: "6 weeks",
      price: "PKR 20,000",
      features: ["Comprehensive preparation", "Mock tests", "Speaking practice", "Writing feedback", "Score improvement"]
    },
    {
      title: "Duolingo Intensive Course",
      duration: "8 weeks",
      price: "PKR 28,000",
      features: ["Intensive training", "One-on-one sessions", "Multiple mock tests", "Personalized feedback", "Score guarantee"]
    },
    {
      title: "Duolingo Online Course",
      duration: "5 weeks",
      price: "PKR 15,000",
      features: ["Online live classes", "Digital materials", "Interactive practice", "Flexible timing", "24/7 support"]
    }
  ];

  const scoreRequirements = [
    { level: "Undergraduate", score: "105-120", description: "Most universities accept 105+ for bachelor's programs" },
    { level: "Graduate", score: "120-135", description: "Master's programs typically require 120+ scores" },
    { level: "Top Universities", score: "135-160", description: "Ivy League and prestigious institutions" },
    { level: "Competitive Programs", score: "140-160", description: "Highly competitive graduate programs" }
  ];

  const advantages = [
    {
      title: "Convenient Testing",
      description: "Take the test from home on your computer anytime, anywhere"
    },
    {
      title: "Quick Results",
      description: "Receive your scores within 48 hours of completing the test"
    },
    {
      title: "Affordable Pricing",
      description: "More cost-effective compared to other English proficiency tests"
    },
    {
      title: "Wide Acceptance",
      description: "Accepted by 4,000+ universities and institutions worldwide"
    },
    {
      title: "Adaptive Format",
      description: "Computer-adaptive test that adjusts to your skill level"
    },
    {
      title: "Multiple Attempts",
      description: "Retake the test as many times as needed with no waiting period"
    }
  ];

  const tips = [
    {
      title: "Test Environment",
      description: "Ensure you have a quiet, well-lit room with stable internet connection"
    },
    {
      title: "Practice Regularly",
      description: "Use Duolingo app and practice questions to familiarize yourself with format"
    },
    {
      title: "Time Management",
      description: "Practice completing questions efficiently within the adaptive format"
    },
    {
      title: "Speaking Clarity",
      description: "Speak clearly and naturally during speaking tasks"
    },
    {
      title: "Writing Accuracy",
      description: "Focus on grammar, spelling, and coherent sentence structure"
    },
    {
      title: "Technical Preparation",
      description: "Test your computer, microphone, and camera before the actual test"
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
              <span className="text-sm font-medium">Duolingo English Test</span>
            </div>
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white leading-tight py-2">
              Duolingo English Test
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Online English proficiency test accepted by 4,000+ universities worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-blue-50">
                Take Test Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Start Preparation
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
                Test{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Format
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the Duolingo English Test structure and format
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Duolingo?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of taking the Duolingo English Test
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Preparation{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Courses
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized courses to help you excel in the Duolingo English Test
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
                Typical Duolingo English Test score requirements for different programs
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Success{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Tips
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert strategies to maximize your Duolingo English Test performance
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
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
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
    </div>
  );
}