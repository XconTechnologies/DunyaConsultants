import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, User, FileText, Phone, Mail, Building, CheckCircle, DollarSign, BookOpen, Award, Globe, Users, Target, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function ErasmusMundusScholarship() {
  const scholarshipBenefits = [
    {
      title: "Full Tuition Coverage",
      description: "Complete tuition fees for the entire program duration",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Monthly Stipend",
      description: "€1,400 per month for living expenses",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Travel Allowance",
      description: "Round-trip flight costs covered",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Insurance Coverage",
      description: "Health and accident insurance included",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const applicationRequirements = [
    "Bachelor's degree (for Master's programs) or Master's degree (for Doctoral programs)",
    "Minimum 2 years of relevant academic/professional experience",
    "English language proficiency (IELTS 6.5+ or TOEFL 80+)",
    "Academic transcripts with good grades (minimum 60%)",
    "Letter of motivation explaining career goals",
    "Two academic reference letters",
    "CV highlighting academic and professional achievements",
    "Copy of passport or national ID"
  ];

  const programTypes = [
    {
      level: "Master's Programs",
      duration: "1-2 years",
      funding: "€1,400/month + tuition",
      description: "Joint master's degree from multiple European universities"
    },
    {
      level: "Doctoral Programs", 
      duration: "3-4 years",
      funding: "€1,800/month + tuition",
      description: "Research-based PhD programs with international mobility"
    }
  ];

  const popularPrograms = [
    "European Master in International Humanitarian Action (NOHA)",
    "Master in Economics and Management of Network Industries",
    "European Master in Tourism Management (EMTM)",
    "Master in Dependable Software Systems (DESEM)",
    "European Joint Master in English and American Studies",
    "Master in European Forestry (MEF)",
    "European Master in Health and Physical Activity (EHPA)"
  ];

  const applicationTimeline = [
    { phase: "Program Research", duration: "September - November", description: "Research and select programs" },
    { phase: "Application Preparation", duration: "October - December", description: "Prepare all required documents" },
    { phase: "Application Submission", duration: "December - January", description: "Submit applications through official portals" },
    { phase: "Selection Process", duration: "February - April", description: "Evaluation and selection by universities" },
    { phase: "Results Announcement", duration: "April - May", description: "Scholarship results published" },
    { phase: "Pre-departure", duration: "June - August", description: "Visa processing and travel preparation" }
  ];

  return (
    <>
      <Navigation />
      <div className="w-[1440px] mx-auto">
        {/* Hero Section */}
        <div className="relative h-[500px] bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-800 flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }}
          />
          <div className="relative z-10 text-center px-8">
            <h1 className="text-5xl font-bold mb-4">Erasmus Mundus Scholarship</h1>
            <p className="text-2xl font-light">Complete guide to Europe's most prestigious scholarship program</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8 p-8">
          {/* Main Article */}
          <div className="flex-1">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>Erasmus Mundus Scholarship</strong> is one of the most prestigious and competitive scholarship programs offered by the European Union. This fully-funded scholarship provides exceptional opportunities for international students, including those from Pakistan, to pursue high-quality master's and doctoral programs at top European universities.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Erasmus Mundus Joint Master Degrees (EMJMDs) and European Joint Doctorates (EJDs) offer students the unique opportunity to study at multiple universities across different European countries, gaining international experience and diverse perspectives in their chosen field of study.
                </p>
              </div>

              {/* What is Erasmus Mundus */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-purple-800 flex items-center">
                  <Award className="mr-3 h-6 w-6" />
                  What is Erasmus Mundus Scholarship?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Erasmus Mundus is the European Union's flagship scholarship program that supports high-quality international master's and doctoral courses delivered by consortiums of higher education institutions from Europe and around the world.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The program aims to enhance the quality of European higher education and promote dialogue and understanding between people and cultures. Students receive joint, double, or multiple degrees from the participating institutions.
                </p>
              </motion.div>

              {/* Scholarship Benefits */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Erasmus Mundus Scholarship Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {scholarshipBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white border border-purple-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                              {benefit.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                              <p className="text-gray-600">{benefit.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Program Types */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Types of Erasmus Mundus Programs</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {programTypes.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card className="bg-gradient-to-br from-indigo-50 to-purple-100 border-indigo-200">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-indigo-800 mb-3">{program.level}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-indigo-700">Duration:</span>
                              <span className="font-semibold text-indigo-800">{program.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-indigo-700">Funding:</span>
                              <span className="font-semibold text-indigo-800">{program.funding}</span>
                            </div>
                            <p className="text-indigo-700 mt-3">{program.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Eligibility Requirements */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Eligibility Requirements</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To be eligible for Erasmus Mundus scholarship, Pakistani students must meet the following criteria:
                </p>
                <div className="grid gap-4">
                  {applicationRequirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500"
                    >
                      <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Popular Programs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular Erasmus Mundus Programs</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Here are some of the most popular Erasmus Mundus programs among international students:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {popularPrograms.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-800 font-semibold">{program}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application Timeline */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Application Timeline</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Erasmus Mundus application process follows a specific timeline. Here's what Pakistani students need to know:
                </p>
                <div className="space-y-6">
                  {applicationTimeline.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                              <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                                {phase.duration}
                              </span>
                            </div>
                            <p className="text-gray-600">{phase.description}</p>
                          </div>
                        </div>
                      </div>
                      {index < applicationTimeline.length - 1 && (
                        <div className="absolute left-5 top-10 w-0.5 h-6 bg-purple-300"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application Tips */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-green-800">Application Tips for Pakistani Students</h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Start your application preparation at least 6 months before the deadline</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Research programs thoroughly and align your background with program requirements</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Prepare a compelling motivation letter highlighting your academic and career goals</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Secure strong recommendation letters from academic supervisors</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ensure all documents are properly translated and authenticated</span>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Erasmus Mundus Scholarship represents an exceptional opportunity for Pakistani students to pursue world-class education in Europe with full financial support. The program not only covers all educational and living expenses but also provides invaluable international experience and networking opportunities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With careful preparation and a strong application, Pakistani students can join thousands of international scholars who have benefited from this prestigious program. Contact Dunya Consultants for expert guidance on your Erasmus Mundus application process.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can Pakistani students apply for Erasmus Mundus?</h3>
                    <p className="text-gray-700">
                      Yes, Pakistani students are eligible to apply for Erasmus Mundus scholarships. The program is open to students from all countries worldwide.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">What is the application deadline for Erasmus Mundus?</h3>
                    <p className="text-gray-700">
                      Application deadlines vary by program but typically fall between December and January. Check individual program websites for specific dates.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">How much monthly stipend do scholarship recipients receive?</h3>
                    <p className="text-gray-700">
                      Master's students receive €1,400 per month, while doctoral students receive €1,800 per month to cover living expenses.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Do I need to study in multiple countries?</h3>
                    <p className="text-gray-700">
                      Yes, Erasmus Mundus programs require mobility between at least two different European countries as part of the joint degree structure.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">What degree will I receive upon graduation?</h3>
                    <p className="text-gray-700">
                      Students receive either a joint degree (single diploma signed by all institutions) or multiple degrees from each participating university.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can I work while studying on Erasmus Mundus?</h3>
                    <p className="text-gray-700">
                      Work regulations vary by country, but generally students can work part-time (up to 20 hours per week) while maintaining their studies.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-80">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-100 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-purple-800 mb-4 flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    Scholarship Quick Facts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-700">Monthly Stipend:</span>
                      <span className="font-semibold text-purple-800">€1,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700">Program Duration:</span>
                      <span className="font-semibold text-purple-800">1-2 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700">Coverage:</span>
                      <span className="font-semibold text-purple-800">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700">Countries:</span>
                      <span className="font-semibold text-purple-800">27+ EU</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Program Types */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Program Levels</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                      <span className="text-sm font-medium">Master's</span>
                      <span className="text-xs text-purple-600">€1,400/month</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-indigo-50 rounded">
                      <span className="text-sm font-medium">Doctoral</span>
                      <span className="text-xs text-indigo-600">€1,800/month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Application Form */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Get Scholarship Guidance</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Education Level</option>
                      <option>Bachelor's Degree</option>
                      <option>Master's Degree</option>
                      <option>PhD</option>
                    </select>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                      Get Scholarship Info
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>(+92) 304 1110947</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="mr-2 h-4 w-4" />
                      <span>query@teamdunya.com</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <Building className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <span>110 Link Stadium Road Sargodha</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}