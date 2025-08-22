import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, User, FileText, Phone, Mail, Building, CheckCircle, DollarSign, BookOpen, Calculator, Target, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function GRETestFeeInPakistan() {
  const feeBreakdown = [
    {
      testType: "GRE General Test",
      fee: "$220 USD",
      pkrAmount: "PKR 61,600",
      description: "Standard GRE test fee worldwide"
    },
    {
      testType: "Late Registration",
      fee: "$25 USD",
      pkrAmount: "PKR 7,000",
      description: "Additional fee for late registration"
    },
    {
      testType: "Rescheduling Fee",
      fee: "$50 USD",
      pkrAmount: "PKR 14,000",
      description: "Fee to reschedule your test date"
    },
    {
      testType: "Additional Score Reports",
      fee: "$27 USD",
      pkrAmount: "PKR 7,560",
      description: "Per university after 4 free reports"
    }
  ];

  const testCenters = [
    {
      city: "Karachi",
      centers: 3,
      locations: ["British Council", "IBA Karachi", "PECHS Campus"]
    },
    {
      city: "Lahore",
      centers: 2,
      locations: ["University of Management & Technology", "LUMS"]
    },
    {
      city: "Islamabad",
      centers: 2,
      locations: ["COMSATS University", "National University"]
    },
    {
      city: "Faisalabad",
      centers: 1,
      locations: ["University of Agriculture"]
    }
  ];

  const testSections = [
    {
      section: "Analytical Writing",
      duration: "60 minutes",
      tasks: "2 essays",
      scoring: "0-6 scale"
    },
    {
      section: "Verbal Reasoning",
      duration: "60 minutes",
      questions: "40 questions",
      scoring: "130-170 scale"
    },
    {
      section: "Quantitative Reasoning",
      duration: "70 minutes",
      questions: "40 questions",
      scoring: "130-170 scale"
    }
  ];

  const preparationTips = [
    "Start preparation at least 3-4 months before your test date",
    "Take practice tests under timed conditions regularly",
    "Focus on building vocabulary for verbal reasoning section",
    "Review basic mathematics concepts for quantitative section",
    "Practice analytical writing with sample prompts",
    "Use official ETS preparation materials and PowerPrep software",
    "Consider taking a prep course if you need structured guidance",
    "Book your test date early to avoid late registration fees"
  ];

  const registrationSteps = [
    { step: "Create ETS Account", description: "Visit ets.org and create your personal account" },
    { step: "Select Test Date", description: "Choose available date and time at your preferred center" },
    { step: "Complete Payment", description: "Pay $220 USD using international credit/debit card" },
    { step: "Receive Confirmation", description: "Get confirmation email with test details and instructions" },
    { step: "Prepare Documentation", description: "Ensure passport is valid for test day identification" }
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
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
              GRE Test Fee in Pakistan
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete guide to GRE costs, registration process, and test centers available in Pakistan with detailed fee breakdown.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 16, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>10 min read</span>
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
                  The <strong>Graduate Record Examination (GRE)</strong> is a standardized test required for admission to most graduate programs in the United States and many other countries. For Pakistani students planning to pursue higher education abroad, understanding the GRE test fee structure and registration process is crucial for proper financial planning.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The GRE General Test measures verbal reasoning, quantitative reasoning, and analytical writing skills. With test centers available in major Pakistani cities, students can take this computer-based test year-round with flexible scheduling options.
                </p>
              </div>

              {/* Current GRE Test Fees */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-blue-50 border-l-4 #1D50C9 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-[#1565c0] flex items-center">
                  <DollarSign className="mr-3 h-6 w-6" />
                  Current GRE Test Fees in Pakistan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The GRE test fee is standardized globally and charged in US dollars. Here's the complete breakdown of all GRE-related costs for Pakistani students:
                </p>
              </motion.div>

              {/* Fee Breakdown Table */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">GRE Test Fee Breakdown</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#1D50C9] to-teal-600 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">USD Fee</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PKR Equivalent</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeBreakdown.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={index % 2 === 0 ? "bg-white" : "bg-white"}
                        >
                          <td className="border border-gray-300 px-4 py-3 text-gray-800 font-semibold">{item.testType}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-bold text-#1a73e8">{item.fee}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">{item.pkrAmount}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm">{item.description}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-[#1565c0]">
                    <strong>Note:</strong> PKR amounts are approximate based on current exchange rates (1 USD = 280 PKR). Actual charges may vary depending on your bank's exchange rate and processing fees.
                  </p>
                </div>
              </div>

              {/* Test Format and Sections */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">GRE Test Format and Sections</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The GRE General Test consists of three main sections. Understanding the format helps you prepare effectively:
                </p>
                
                <div className="grid gap-6">
                  {testSections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card className="bg-gradient-to-br from-blue-50 to-green-100 border-blue-200">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-[#1565c0] mb-3">{section.section}</h3>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-#1a73e8 font-medium">Duration:</span>
                              <div className="font-semibold text-[#1565c0]">{section.duration}</div>
                            </div>
                            <div>
                              <span className="text-#1a73e8 font-medium">{section.questions ? "Questions:" : "Tasks:"}</span>
                              <div className="font-semibold text-[#1565c0]">{section.questions || section.tasks}</div>
                            </div>
                            <div>
                              <span className="text-#1a73e8 font-medium">Scoring:</span>
                              <div className="font-semibold text-[#1565c0]">{section.scoring}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Test Centers in Pakistan */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">GRE Test Centers in Pakistan</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  GRE is available at authorized test centers across major Pakistani cities. Here are the current testing locations:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {testCenters.map((center, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-gray-800">{center.city}</h3>
                            <span className="bg-blue-100 text-[#1565c0] text-sm font-medium px-3 py-1 rounded-full">
                              {center.centers} {center.centers === 1 ? 'Center' : 'Centers'}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {center.locations.map((location, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 #1D50C9 rounded-full"></div>
                                <span className="text-gray-700 text-sm">{location}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Registration Process */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">GRE Registration Process</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Follow these steps to register for the GRE test in Pakistan:
                </p>
                
                <div className="space-y-6">
                  {registrationSteps.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1D50C9] to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{item.step}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                      {index < registrationSteps.length - 1 && (
                        <div className="absolute left-5 top-10 w-0.5 h-6 bg-blue-300"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Preparation Tips */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">GRE Preparation Tips</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Effective preparation is key to achieving your target GRE score. Here are essential tips for Pakistani students:
                </p>
                <div className="grid gap-4">
                  {preparationTips.map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-l-4 #1D50C9"
                    >
                      <CheckCircle className="h-5 w-5 #1845B3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-blue-50 border-l-4 #1D50C9 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-[#1565c0]">Payment Methods in Pakistan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pakistani students can pay GRE test fees using the following methods:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>International Credit Cards:</strong> Visa, MasterCard, or American Express</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>International Debit Cards:</strong> With international transaction capability</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Bank Transfer:</strong> Contact ETS for alternative payment arrangements</span>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="mb-8 p-6 bg-blue-50 border-l-4 #1D50C9 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-4 text-[#1565c0]">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The GRE test fee of $220 USD (approximately PKR 61,600) is a significant investment in your academic future. With proper planning and preparation, Pakistani students can successfully register for and take the GRE at authorized test centers across the country.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Remember to register early to avoid late fees, prepare thoroughly using official materials, and ensure your passport is valid for test day. Contact Dunya Consultants for comprehensive GRE preparation guidance and graduate school application support.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">How much does the GRE test cost in Pakistan?</h3>
                    <p className="text-gray-700">
                      The GRE General Test costs $220 USD (approximately PKR 61,600) worldwide, including Pakistan. Additional fees apply for late registration and rescheduling.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can I pay GRE fees with Pakistani rupees?</h3>
                    <p className="text-gray-700">
                      No, GRE fees must be paid in US dollars using an international credit or debit card. Your bank will convert the amount to PKR at the current exchange rate.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">How many times can I take the GRE?</h3>
                    <p className="text-gray-700">
                      You can take the GRE once every 21 days and up to 5 times in a 12-month period. Each attempt requires paying the full test fee.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Are there any fee waivers available for Pakistani students?</h3>
                    <p className="text-gray-700">
                      ETS offers limited fee reduction vouchers for students demonstrating financial need. Contact ETS directly or check with local educational advisors for availability.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">What documents do I need for GRE registration?</h3>
                    <p className="text-gray-700">
                      You need a valid passport for registration and test day identification. The name on your registration must exactly match your passport.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">How long are GRE scores valid?</h3>
                    <p className="text-gray-700">
                      GRE scores are valid for 5 years from the test date. You can send score reports to universities during this period.
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
              <Card className="bg-gradient-to-br from-blue-50 to-teal-100 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#1565c0] mb-4 flex items-center">
                    <Calculator className="mr-2 h-5 w-5" />
                    GRE Cost Summary
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-#1a73e8">Test Fee:</span>
                      <span className="font-semibold text-[#1565c0]">$220 USD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-#1a73e8">PKR Equivalent:</span>
                      <span className="font-semibold text-[#1565c0]">~61,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-#1a73e8">Score Reports:</span>
                      <span className="font-semibold text-[#1565c0]">4 Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-#1a73e8">Score Validity:</span>
                      <span className="font-semibold text-[#1565c0]">5 Years</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Test Centers */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Major Test Centers</h3>
                  <div className="space-y-3">
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <div className="font-medium">Karachi</div>
                      <div className="#1845B3 text-xs">3 Centers • British Council</div>
                    </div>
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <div className="font-medium">Lahore</div>
                      <div className="#1845B3 text-xs">2 Centers • UMT, LUMS</div>
                    </div>
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <div className="font-medium">Islamabad</div>
                      <div className="#1845B3 text-xs">2 Centers • COMSATS</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Registration Form */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Get GRE Guidance</h3>
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
                      <option>Target Score Range</option>
                      <option>300-310</option>
                      <option>310-320</option>
                      <option>320-330</option>
                      <option>330+</option>
                    </select>
                    <Button className="w-full bg-gradient-to-r from-[#1D50C9] to-teal-600 hover:from-green-700 hover:to-teal-700">
                      Get GRE Prep Info
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