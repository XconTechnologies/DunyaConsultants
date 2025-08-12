import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, User, FileText, Phone, Mail, Building, CheckCircle, DollarSign, BookOpen, PenTool, Headphones, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function IELTSExamFeeInPakistan() {
  const ieltsTests = [
    { type: "Computer-Based Module", feeUSD: 205, feePKR: 57400, duration: "2h 45m" },
    { type: "Paper-Based Module", feeUSD: 229, feePKR: 63800, duration: "2h 45m" },
    { type: "Computer-Based UKVI Test", feeUSD: 185, feePKR: 51700, duration: "2h 45m" },
    { type: "Paper-Based UKVI Test", feeUSD: 197, feePKR: 55000, duration: "2h 45m" },
    { type: "IELTS Life Skills Test", feeUSD: 143, feePKR: 50000, duration: "20m" }
  ];

  const ieltsFormat = [
    {
      section: "Listening",
      duration: "30 minutes",
      description: "Listen to four recordings and answer related questions",
      icon: <Headphones className="h-6 w-6" />
    },
    {
      section: "Reading",
      duration: "60 minutes", 
      description: "Read three lengthy passages and answer different types of questions",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      section: "Writing",
      duration: "60 minutes",
      description: "Two tasks: write a description and an essay with proper reasons",
      icon: <PenTool className="h-6 w-6" />
    },
    {
      section: "Speaking",
      duration: "11-14 minutes",
      description: "Direct discussion with an examiner on different topics",
      icon: <MessageSquare className="h-6 w-6" />
    }
  ];

  const requiredDocuments = [
    "Original passport or CNIC as evidence of identity",
    "No fixed age limit for applicants",
    "Recommended for students above 16 years old",
    "Valid photo identification"
  ];

  const testCenters = [
    { city: "Karachi", center: "British Council Karachi", address: "Plot # 4, 5 & 6, Block 1, Kehkashan, Clifton" },
    { city: "Lahore", center: "British Council Lahore", address: "17 Ahmad Block, New Garden Town" },
    { city: "Islamabad", center: "British Council Islamabad", address: "House No. 1, Street 5, F-6/3 Super Market" },
    { city: "Peshawar", center: "British Council Peshawar", address: "TC 1, Phase V, Hayatabad" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Test Preparation
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              IELTS Exam Fee in Pakistan
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete guide to IELTS test costs, format, and registration in Pakistan with detailed fee breakdown and preparation tips.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Students who are planning to pursue their higher education in an international country have to meet all requirements. One of the most important requirements is to prove their English language proficiency. There are different types of tests available that you can take before applying to universities abroad. However, the most common and highly accepted test is <strong>IELTS (International English Language Testing System)</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Every year, thousands of Pakistani students take this exam and the most searched thing on the internet regarding this is the <strong>IELTS test fee in Pakistan</strong>. Furthermore, you need to get the required IELTS score to get admission successfully in your selected university. If you are worried about IELTS test preparation, you can either visit Dunya Consultants physically or can also take online classes. We have expert instructors at our every office branch who make sure you master the English language and get a good score on the final examination.
                </p>
              </div>

              {/* What is IELTS */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-blue-50 border-l-4 #1D50C9 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-[#1565c0] flex items-center">
                  <BookOpen className="mr-3 h-6 w-6" />
                  What is the IELTS Full Form?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>IELTS long form is the International English Language Testing System</strong>. It is a standardized test conducted every year to assess the English language expertise of international non-native English speakers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Moreover, IELTS is commonly accepted by universities, immigration officers, employers, and even professional bodies throughout the world. This international English language testing system evaluates four major language skills including reading, writing, listening, and speaking.
                </p>
              </motion.div>

              {/* IELTS Format */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">IELTS Format and Sections</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  There are two types of IELTS in general that are General Training and Academic. There is a difference between academic IELTS and general IELTS:
                </p>

                {/* IELTS Types */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#1565c0] mb-3">IELTS General Training</h3>
                      <p className="text-#1a73e8 text-sm leading-relaxed">
                        IELTS for General training is basically for non-academic purposes. It is taken for high school admissions, work experience programs, and also immigration applications. This format assesses English skills for relevant students and people.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-violet-100 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#1565c0] mb-3">IELTS Academic</h3>
                      <p className="text-#1a73e8 text-sm leading-relaxed">
                        IELTS Academic is specifically made for students. It is used to apply for undergraduate as well as postgraduate programs. All questions in this test are framed designed for students willing to pursue higher education from an international country.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* IELTS Sections */}
                <div className="grid gap-6 mb-6">
                  {ieltsFormat.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1D50C9] to-purple-600 rounded-full flex items-center justify-center text-white">
                              {section.icon}
                            </div>
                            <div className="lg:col-span-3">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-gray-800">{section.section}</h3>
                                <span className="text-sm font-semibold #1845B3 bg-blue-100 px-3 py-1 rounded-full">
                                  {section.duration}
                                </span>
                              </div>
                              <p className="text-gray-600">{section.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* IELTS Test Fees */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">IELTS Test Fee in Pakistan</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The IELTS fee in Pakistan is the same for both IELTS formats (General Training and Academic). Here is the breakdown of IELTS test exam fee:
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#1D50C9] to-purple-600 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Paper Bases</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">IELTS Fee (USD)</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">IELTS Fee (PKR)</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ieltsTests.map((test, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={index % 2 === 0 ? "bg-white" : "bg-white"}
                        >
                          <td className="border border-gray-300 px-4 py-3 text-gray-800 font-semibold">{test.type}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">${test.feeUSD}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">Rs. {test.feePKR.toLocaleString()}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-600">{test.duration}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Documents Required */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Documents Required to Register for IELTS Examination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To book for IELTS British Council Pakistan, students will need their original passport or CNIC as evidence of their identity. Also, there is no fixed age limit for the applicants to register for the IELTS test. However, it is highly suggested that students above sixteen years old should book for the test.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {requiredDocuments.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-l-4 #1D50C9"
                    >
                      <CheckCircle className="h-5 w-5 #1845B3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Test Centers */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">IELTS Test Centers in Pakistan</h2>
                <div className="grid gap-6">
                  {testCenters.map((center, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1D50C9] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {center.city.charAt(0)}
                            </div>
                            <div className="lg:col-span-3">
                              <h3 className="text-lg font-bold text-gray-800 mb-1">{center.center}</h3>
                              <p className="#1845B3 font-semibold mb-2">{center.city}</p>
                              <p className="text-gray-600 text-sm">{center.address}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Band Score Information */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-blue-50 border-l-4 #1D50C9 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-[#1565c0]">IELTS Band Score Requirements</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold #1845B3 mb-2">5.5 - 6.0</div>
                    <p className="text-sm text-#1a73e8">Undergraduate Programs</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold #1845B3 mb-2">6.0 - 6.5</div>
                    <p className="text-sm text-#1a73e8">Postgraduate Programs</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold #1845B3 mb-2">7.0+</div>
                    <p className="text-sm text-#1a73e8">Top Universities</p>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="mb-8 p-6 bg-blue-50 border-l-4 #1D50C9 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-4 text-[#1565c0]">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To get admission in any international country, every Pakistani student needs to prove their English language proficiency. The standardized international English language testing system exam used to assess English proficiency is IELTS. Students will have to obtain a required band in their IELTS examination in order to get admission in any certified institution.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In addition, all details regarding the IELTS examination fee in Pakistan has already been mentioned earlier. If you are looking for the best IELTS preparation center, look no further than Dunya Consultants. We have the best instructors possible!
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">What are IELTS test charges for Paper-Based UKVI Test?</h3>
                    <p className="text-gray-700">
                      The IELTS reservation fee for Paper-Based UKVI Test is around 197 USD or Rs. 55,000. You can register for this test easily.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">What is a satisfactory IELTS test band score?</h3>
                    <p className="text-gray-700">
                      Most universities accept a 5.5 or 6 band score to verify English language proficiency of students.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can I prepare for IELTS at home?</h3>
                    <p className="text-gray-700">
                      Yes, you can read English books and newspapers or can also listen to English audiobooks. However, it is recommended to take proper classes for IELTS test preparation.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">How much time is given to candidates for IELTS?</h3>
                    <p className="text-gray-700">
                      The total time given to students is around two hours twenty-five minutes. In this part, you have to cover all four sections.
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
              <Card className="bg-gradient-to-br from-blue-50 to-purple-100 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#1565c0] mb-4 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    IELTS Quick Facts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-#1a73e8">Computer-Based:</span>
                      <span className="font-semibold text-[#1565c0]">$205</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-#1a73e8">Paper-Based:</span>
                      <span className="font-semibold text-[#1565c0]">$229</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-#1a73e8">Total Duration:</span>
                      <span className="font-semibold text-[#1565c0]">2h 45m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-#1a73e8">Validity:</span>
                      <span className="font-semibold text-[#1565c0]">2 years</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Test Format */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Test Format</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="text-sm font-medium">Listening</span>
                      <span className="text-xs #1845B3">30 min</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="text-sm font-medium">Reading</span>
                      <span className="text-xs #1845B3">60 min</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="text-sm font-medium">Writing</span>
                      <span className="text-xs #1845B3">60 min</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="text-sm font-medium">Speaking</span>
                      <span className="text-xs #1845B3">11-14 min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Book IELTS Test</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Test Type</option>
                      <option>Academic</option>
                      <option>General Training</option>
                      <option>UKVI</option>
                    </select>
                    <Button className="w-full bg-gradient-to-r from-[#1D50C9] to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      Get Test Information
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