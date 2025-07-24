import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, User, FileText, Phone, Mail, Building, CheckCircle, DollarSign, BookOpen, Globe, Users, Award, Star, Target, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function JanuaryIntakeUniversitiesInUK() {
  const januaryUniversities = [
    {
      university: "University of Greenwich",
      programs: ["Business Management", "Computer Science", "Engineering"],
      requirements: "IELTS 6.0+",
      deadline: "November 30th"
    },
    {
      university: "Middlesex University",
      programs: ["MBA", "Data Science", "International Business"],
      requirements: "IELTS 6.5+",
      deadline: "December 15th"
    },
    {
      university: "University of Hertfordshire",
      programs: ["Aerospace Engineering", "Finance", "Marketing"],
      requirements: "IELTS 6.0+",
      deadline: "December 1st"
    },
    {
      university: "London South Bank University",
      programs: ["Civil Engineering", "Accounting", "Digital Marketing"],
      requirements: "IELTS 6.0+",
      deadline: "November 15th"
    },
    {
      university: "University of Bedfordshire",
      programs: ["International Business", "Computer Networks", "Tourism"],
      requirements: "IELTS 6.0+",
      deadline: "December 10th"
    },
    {
      university: "Teesside University",
      programs: ["Mechanical Engineering", "Psychology", "Law"],
      requirements: "IELTS 6.0+",
      deadline: "November 30th"
    }
  ];

  const advantages = [
    {
      advantage: "Shorter Gap Year",
      description: "Start studies just 6 months after graduation instead of waiting 12 months",
      icon: Clock
    },
    {
      advantage: "Less Competition",
      description: "Fewer applicants apply for January intake, increasing admission chances",
      icon: Target
    },
    {
      advantage: "Fresh Start",
      description: "Begin the new year with new academic goals and fresh motivation",
      icon: Star
    },
    {
      advantage: "Weather Benefits",
      description: "Avoid harsh winter arrival - settle in during milder spring weather",
      icon: Globe
    },
    {
      advantage: "Summer Graduation",
      description: "Graduate during pleasant summer weather with better job market opportunities",
      icon: GraduationCap
    },
    {
      advantage: "Additional Preparation Time",
      description: "Extra months to improve IELTS scores and strengthen application",
      icon: BookOpen
    }
  ];

  const applicationRequirements = [
    "Completed bachelor's degree with minimum 60% marks",
    "IELTS 6.0-6.5 or equivalent English proficiency test",
    "Academic transcripts and degree certificates",
    "Statement of Purpose (SOP) explaining career goals",
    "Letters of Recommendation from professors or employers",
    "Updated CV/Resume highlighting relevant experience",
    "Financial documents showing tuition and living expense coverage",
    "Valid passport with minimum 6 months validity"
  ];

  const applicationSteps = [
    { step: "University Research", description: "Research and shortlist universities offering January intake in your field" },
    { step: "Document Preparation", description: "Gather all required academic and financial documents" },
    { step: "English Proficiency", description: "Take IELTS/PTE/TOEFL test and achieve required scores" },
    { step: "Online Application", description: "Submit applications through university portals by deadlines" },
    { step: "Offer Letters", description: "Receive conditional/unconditional offers from universities" },
    { step: "Visa Application", description: "Apply for UK student visa after accepting offer" },
    { step: "Departure Preparation", description: "Arrange accommodation, flights, and pre-departure briefing" }
  ];

  const popularPrograms = [
    {
      field: "Business & Management",
      programs: ["MBA", "International Business", "Digital Marketing", "Finance"],
      universities: "15+ Universities"
    },
    {
      field: "Engineering & Technology",
      programs: ["Computer Science", "Mechanical Engineering", "Civil Engineering"],
      universities: "12+ Universities"
    },
    {
      field: "Health & Life Sciences",
      programs: ["Public Health", "Biomedical Sciences", "Psychology"],
      universities: "8+ Universities"
    },
    {
      field: "Arts & Humanities",
      programs: ["International Relations", "English Literature", "History"],
      universities: "10+ Universities"
    }
  ];

  const timelineEvents = [
    { month: "August-September", activity: "Research universities and prepare documents" },
    { month: "October", activity: "Take English proficiency tests (IELTS/PTE)" },
    { month: "November", activity: "Submit university applications before deadlines" },
    { month: "December", activity: "Receive offer letters and accept preferred university" },
    { month: "January-February", activity: "Apply for UK student visa and prepare for departure" },
    { month: "March", activity: "Arrive in UK and begin studies" }
  ];

  return (
    
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 via-red-700 to-pink-800 flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }}
          />
          <div className="relative z-10 text-center px-8">
            <h1 className="text-5xl font-bold mb-4">January Intake Universities in UK</h1>
            <p className="text-2xl font-light">Your Alternative Path to UK Higher Education</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>January intake</strong> in UK universities offers an excellent alternative admission opportunity for international students who missed the traditional September intake or need additional time to prepare their applications. Also known as Spring intake, this admission cycle allows students to begin their UK education journey in January/February, providing flexibility and additional advantages for international applicants.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Many top UK universities now offer January intake for various undergraduate and postgraduate programs, recognizing the diverse needs of international students. This alternative admission cycle has become increasingly popular among Pakistani students seeking quality British education with more flexible timing.
                </p>
              </div>

              {/* Advantages Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-orange-800 flex items-center">
                  <Star className="mr-3 h-6 w-6" />
                  Why Choose January Intake?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  January intake offers numerous advantages over traditional September admission:
                </p>
              </motion.div>

              {/* Advantages Grid */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Advantages of January Intake</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-gradient-to-br from-orange-50 to-red-100 border-orange-200 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <advantage.icon className="h-8 w-8 text-orange-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-orange-800 mb-2">{advantage.advantage}</h3>
                              <p className="text-gray-700 text-sm">{advantage.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Universities Offering January Intake */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Top UK Universities with January Intake</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Here are leading UK universities offering January/Spring admission for international students:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">University</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Popular Programs</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">English Requirement</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Application Deadline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {januaryUniversities.map((uni, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="border border-gray-300 px-4 py-3 text-gray-800 font-semibold">{uni.university}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">{uni.programs.join(", ")}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium text-orange-700">{uni.requirements}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">{uni.deadline}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Popular Programs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular Programs Available in January</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  January intake covers a wide range of academic disciplines across various fields:
                </p>
                
                <div className="grid gap-6">
                  {popularPrograms.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card className="bg-gradient-to-br from-red-50 to-orange-100 border-red-200">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-red-800">{program.field}</h3>
                            <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                              {program.universities}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {program.programs.map((prog, idx) => (
                              <span key={idx} className="bg-white text-red-700 text-sm px-3 py-1 rounded-full border border-red-200">
                                {prog}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application Requirements */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Application Requirements</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To apply for January intake in UK universities, international students must meet these requirements:
                </p>
                <div className="grid gap-4">
                  {applicationRequirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500"
                    >
                      <CheckCircle className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application Process */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Step-by-Step Application Process</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Follow this comprehensive process to secure January intake admission:
                </p>
                
                <div className="space-y-6">
                  {applicationSteps.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{item.step}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                      {index < applicationSteps.length - 1 && (
                        <div className="absolute left-5 top-10 w-0.5 h-6 bg-orange-300"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application Timeline */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">January Intake Timeline</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Plan your January intake application according to this timeline:
                </p>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                  <div className="space-y-4">
                    {timelineEvents.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                      >
                        <div className="flex-shrink-0 w-24 text-center">
                          <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">
                            {event.month}
                          </span>
                        </div>
                        <div className="lg:col-span-3">
                          <p className="text-gray-700 font-medium">{event.activity}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Important Considerations */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Important Considerations</h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Limited Program Availability:</strong> Not all programs offer January intake - verify availability with universities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Accommodation:</strong> Book university accommodation early as January intake students have fewer options</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Scholarships:</strong> Some scholarships may not be available for January intake - research funding options carefully</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Visa Processing:</strong> Plan visa application timing carefully to ensure arrival before program commencement</span>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="mb-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-4 text-orange-800">Start Your UK Journey in January</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  January intake provides an excellent opportunity for international students to begin their UK education with reduced competition and additional preparation time. With proper planning and early application submission, you can secure admission to top UK universities for the spring semester.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Contact Dunya Consultants for comprehensive guidance on January intake applications, university selection, visa processing, and pre-departure preparation. Our expert team will help you navigate the entire process and secure admission to your preferred UK university.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Which UK universities offer January intake?</h3>
                    <p className="text-gray-700">
                      Many UK universities offer January intake including University of Greenwich, Middlesex University, University of Hertfordshire, London South Bank University, Teesside University, and University of Bedfordshire.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Is January intake harder to get into than September intake?</h3>
                    <p className="text-gray-700">
                      Generally, January intake is less competitive than September intake as fewer students apply, potentially increasing your chances of admission with the same qualifications.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Are all programs available in January intake?</h3>
                    <p className="text-gray-700">
                      No, not all programs offer January intake. Business, engineering, and computer science programs commonly have January options, while some specialized programs may only offer September intake.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">When should I apply for January intake?</h3>
                    <p className="text-gray-700">
                      Application deadlines typically fall between October and December. Start your application process by August-September to ensure all documents are ready on time.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can I get scholarships for January intake?</h3>
                    <p className="text-gray-700">
                      Some scholarships are available for January intake, but options may be more limited than September intake. Check with individual universities for specific scholarship opportunities.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">What's the difference between January and September graduation?</h3>
                    <p className="text-gray-700">
                      January intake students typically graduate in summer (July-August), which can be advantageous for job hunting as it aligns with the peak recruitment season in many industries.
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
              <Card className="bg-gradient-to-br from-orange-50 to-red-100 border-orange-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-orange-800 mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    January Intake Facts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-orange-700">Start Date:</span>
                      <span className="font-semibold text-orange-800">Jan-Feb</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-700">Application Deadline:</span>
                      <span className="font-semibold text-orange-800">Oct-Dec</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-700">Graduation:</span>
                      <span className="font-semibold text-orange-800">Summer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-700">Competition:</span>
                      <span className="font-semibold text-orange-800">Lower</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Universities */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Top January Universities</h3>
                  <div className="space-y-3">
                    <div className="p-2 bg-orange-50 rounded text-sm">
                      <div className="font-medium">University of Greenwich</div>
                      <div className="text-orange-600 text-xs">Business, Engineering</div>
                    </div>
                    <div className="p-2 bg-red-50 rounded text-sm">
                      <div className="font-medium">Middlesex University</div>
                      <div className="text-red-600 text-xs">MBA, Data Science</div>
                    </div>
                    <div className="p-2 bg-pink-50 rounded text-sm">
                      <div className="font-medium">University of Hertfordshire</div>
                      <div className="text-pink-600 text-xs">Aerospace, Finance</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Application Form */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Get January Intake Guidance</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>Preferred Field</option>
                      <option>Business & Management</option>
                      <option>Engineering</option>
                      <option>Computer Science</option>
                      <option>Health Sciences</option>
                      <option>Other</option>
                    </select>
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                      Get Application Help
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
    
    </div>
  );
}