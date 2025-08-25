import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, Users, CheckCircle, BookOpen, FileText, Headphones, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PTE() {
  const testSections = [
    {
      title: "Speaking",
      duration: "77-93 minutes",
      icon: Mic,
      description: "Personal introduction, read aloud, repeat sentence, describe image, re-tell lecture",
      tasks: ["Personal Introduction", "Read Aloud", "Repeat Sentence", "Describe Image", "Re-tell Lecture", "Answer Short Question"]
    },
    {
      title: "Writing",
      duration: "77-93 minutes",
      icon: FileText,
      description: "Summarize written text, essay writing",
      tasks: ["Summarize Written Text", "Essay Writing"]
    },
    {
      title: "Reading",
      duration: "32-41 minutes",
      icon: BookOpen,
      description: "Multiple choice, re-order paragraphs, fill in the blanks",
      tasks: ["Multiple Choice Single Answer", "Multiple Choice Multiple Answers", "Re-order Paragraphs", "Fill in the Blanks", "Reading & Writing Fill in the Blanks"]
    },
    {
      title: "Listening",
      duration: "45-57 minutes",
      icon: Headphones,
      description: "Summarize spoken text, multiple choice, fill the blanks, highlight correct summary",
      tasks: ["Summarize Spoken Text", "Multiple Choice", "Fill in the Blanks", "Highlight Correct Summary", "Select Missing Word", "Highlight Incorrect Words", "Write from Dictation"]
    }
  ];

  const preparationCourses = [
    {
      title: "PTE Foundation Course",
      duration: "4 weeks",
      price: "PKR 15,000",
      features: ["Basic PTE format understanding", "Fundamental skills development", "Practice materials", "Weekly assessments"]
    },
    {
      title: "PTE Complete Course",
      duration: "8 weeks",
      price: "PKR 25,000",
      features: ["Comprehensive PTE preparation", "All four skills training", "Mock tests", "Personal feedback", "Speaking practice sessions"]
    },
    {
      title: "PTE Intensive Course",
      duration: "12 weeks",
      price: "PKR 35,000",
      features: ["Intensive preparation", "One-on-one sessions", "Multiple mock tests", "Score guarantee", "Free retake option"]
    },
    {
      title: "PTE Online Course",
      duration: "6 weeks",
      price: "PKR 20,000",
      features: ["Online live classes", "Recorded sessions", "Digital practice materials", "Online mock tests", "24/7 support"]
    }
  ];

  const scoreRequirements = [
    { level: "Competent English", score: "65+ overall", description: "For most Australian visa applications" },
    { level: "Proficient English", score: "79+ overall", description: "For skilled migration and professional registration" },
    { level: "Superior English", score: "89+ overall", description: "For maximum immigration points" },
    { level: "Academic Requirements", score: "58-79", description: "Varies by university and program level" }
  ];

  const tips = [
    {
      title: "Practice Regularly",
      description: "Consistent daily practice with PTE format questions and time management"
    },
    {
      title: "Computer Familiarity",
      description: "Get comfortable with computer-based testing and typing skills"
    },
    {
      title: "Template Learning",
      description: "Master templates for speaking and writing tasks to save time"
    },
    {
      title: "Vocabulary Building",
      description: "Focus on academic vocabulary and collocations commonly used in PTE"
    },
    {
      title: "Mock Tests",
      description: "Take regular full-length mock tests to build stamina and confidence"
    },
    {
      title: "Time Management",
      description: "Practice completing tasks within the allocated time limits"
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
              <span className="text-sm font-medium">PTE Academic</span>
            </div>
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white">
              PTE Academic
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Computer-based English test trusted by thousands of universities and organizations worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-blue-50">
                Book Your Test
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
                PTE Test{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Format
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the PTE Academic test format and sections
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
                PTE Preparation{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Courses
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect course to achieve your target PTE score
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
                Understanding PTE score requirements for different purposes
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
                Professional advice to maximize your PTE score
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
    </div>
  );
}