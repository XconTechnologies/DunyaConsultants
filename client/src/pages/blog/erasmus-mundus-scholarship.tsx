import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, User, FileText, Phone, Mail, Building, CheckCircle, DollarSign, BookOpen, Globe, Users, Award, Star, Target, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function ErasmusMundusScholarship() {
  const scholarshipBenefits = [
    {
      benefit: "Full Tuition Coverage",
      amount: "€24,000",
      description: "Complete tuition fees covered for 2-year program"
    },
    {
      benefit: "Monthly Stipend",
      amount: "€1,400",
      description: "Living allowance per month for 24 months"
    },
    {
      benefit: "Travel Allowance",
      amount: "€4,000",
      description: "Travel costs and mobility support"
    },
    {
      benefit: "Installation Costs",
      amount: "€2,000",
      description: "Settlement and accommodation support"
    }
  ];

  const programTypes = [
    {
      type: "Master's Programs",
      duration: "1-2 Years",
      subjects: ["Engineering", "Business", "Social Sciences", "Environmental Studies"],
      universities: "2-4 European Universities"
    },
    {
      type: "Doctoral Programs",
      duration: "3-4 Years",
      subjects: ["Research-based", "Innovation", "Technology", "Humanities"],
      universities: "Multiple European Institutions"
    },
    {
      type: "Joint Programs",
      duration: "2 Years",
      subjects: ["Interdisciplinary", "International Relations", "Digital Innovation"],
      universities: "Consortium Universities"
    }
  ];

  const eligibilityRequirements = [
    "Bachelor's degree (for Master's) or Master's degree (for Doctoral)",
    "English proficiency: IELTS 6.5+ or TOEFL 90+",
    "Strong academic record with minimum 3.0 GPA",
    "Relevant work experience (preferred)",
    "Research proposal (for Doctoral programs)",
    "Letters of recommendation from professors",
    "Statement of purpose aligned with program goals",
    "EU citizenship not required - open to international students"
  ];

  const applicationSteps = [
    { step: "Program Selection", description: "Choose your preferred Erasmus Mundus program from 200+ available options" },
    { step: "Document Preparation", description: "Gather academic transcripts, language certificates, and recommendation letters" },
    { step: "Online Application", description: "Submit application through program-specific portal with all required documents" },
    { step: "Selection Process", description: "Universities review applications and conduct interviews if required" },
    { step: "Scholarship Award", description: "Successful candidates receive full scholarship notification and admission" }
  ];

  const topPrograms = [
    {
      program: "European Master in Renewable Energy",
      universities: "Netherlands, Norway, Greece",
      duration: "2 Years",
      focus: "Sustainable Energy Systems"
    },
    {
      program: "International Master in Digital Transformation",
      universities: "Germany, France, Italy",
      duration: "2 Years", 
      focus: "Technology Innovation"
    },
    {
      program: "Master in International Relations",
      universities: "Belgium, Poland, Turkey",
      duration: "2 Years",
      focus: "European Integration"
    },
    {
      program: "European Master in Environmental Sciences",
      universities: "Denmark, Spain, Portugal",
      duration: "2 Years",
      focus: "Climate Change Solutions"
    }
  ];

  const successTips = [
    "Start application process 12-18 months early",
    "Research program requirements thoroughly before applying",
    "Prepare strong statement of purpose highlighting European perspective",
    "Obtain excellent recommendation letters from professors",
    "Demonstrate language proficiency in program instruction languages",
    "Show commitment to European integration and mobility",
    "Highlight leadership experience and community involvement",
    "Prepare for potential interviews with program coordinators"
  ];

  return (
    
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#124FD3] via-[#124FD3] to-[#0d3db8] flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }}
          />
          <div className="relative z-10 text-center px-8">
            <h1 className="text-5xl font-bold mb-4">Erasmus Mundus Scholarship</h1>
            <p className="text-2xl font-light">Europe's Most Prestigious Scholarship for International Students</p>
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
                  The <strong>Erasmus Mundus Scholarship</strong> is the European Union's flagship educational program offering full funding for international students to pursue Master's and Doctoral degrees at top European universities. This prestigious scholarship provides complete financial support, covering tuition fees, living expenses, travel costs, and insurance for exceptional students worldwide.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Established in 2004, Erasmus Mundus promotes European higher education globally while fostering intercultural understanding and academic excellence. The program offers over 200 joint programs across multiple European countries, allowing students to study at 2-4 different universities and earn joint or multiple degrees.
                </p>
              </div>

              {/* Scholarship Benefits */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
                  <DollarSign className="mr-3 h-6 w-6" />
                  Complete Financial Coverage
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Erasmus Mundus provides comprehensive financial support covering all aspects of your European education:
                </p>
              </motion.div>

              {/* Benefits Table */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Scholarship Benefits Breakdown</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Benefit Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Amount (EUR)</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Coverage Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scholarshipBenefits.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={index % 2 === 0 ? "bg-white" : "bg-white"}
                        >
                          <td className="border border-gray-300 px-4 py-3 text-gray-800 font-semibold">{item.benefit}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-bold text-blue-700">{item.amount}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-600">{item.description}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Total Value:</strong> €30,000+ per student for Master's programs | €40,000+ for Doctoral programs
                  </p>
                </div>
              </div>

              {/* Program Types */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Available Program Types</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Erasmus Mundus offers diverse academic programs across multiple disciplines and degree levels:
                </p>
                
                <div className="grid gap-6">
                  {programTypes.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card className="bg-gradient-to-br from-purple-50 to-blue-100 border-purple-200">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-purple-800 mb-3">{program.type}</h3>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-purple-700 font-medium">Duration:</span>
                              <div className="font-semibold text-purple-800">{program.duration}</div>
                            </div>
                            <div>
                              <span className="text-purple-700 font-medium">Subjects:</span>
                              <div className="font-semibold text-purple-800">{program.subjects.join(", ")}</div>
                            </div>
                            <div>
                              <span className="text-purple-700 font-medium">Mobility:</span>
                              <div className="font-semibold text-purple-800">{program.universities}</div>
                            </div>
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
                  To qualify for Erasmus Mundus Scholarship, applicants must meet the following criteria:
                </p>
                <div className="grid gap-4">
                  {eligibilityRequirements.map((requirement, index) => (
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

              {/* Top Programs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular Erasmus Mundus Programs</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Here are some of the most sought-after Erasmus Mundus programs for international students:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {topPrograms.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold text-gray-800 mb-3">{program.program}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Globe className="h-4 w-4 text-blue-500" />
                              <span className="text-gray-700">{program.universities}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-green-500" />
                              <span className="text-gray-700">{program.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Target className="h-4 w-4 text-purple-500" />
                              <span className="text-gray-700">{program.focus}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application Process */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Application Process</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Follow these essential steps to apply for Erasmus Mundus Scholarship:
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
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
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
                        <div className="absolute left-5 top-10 w-0.5 h-6 bg-blue-300"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Success Tips */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Success Tips for Applicants</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Increase your chances of securing Erasmus Mundus Scholarship with these proven strategies:
                </p>
                <div className="grid gap-4">
                  {successTips.map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500"
                    >
                      <Star className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Important Deadlines */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-800">Application Deadlines</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Erasmus Mundus applications typically follow these timeline patterns:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>December - February:</strong> Most program application deadlines</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>March - May:</strong> Selection process and interviews</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>June - July:</strong> Scholarship results announcement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>September:</strong> Program commencement in Europe</span>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Start Your European Journey</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Erasmus Mundus Scholarship represents an extraordinary opportunity to pursue world-class education across multiple European countries with full financial support. This prestigious program not only covers all expenses but also provides invaluable international experience and networking opportunities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Begin your application process early and contact Dunya Consultants for expert guidance on program selection, application preparation, and scholarship success strategies. Our team has helped numerous Pakistani students secure Erasmus Mundus scholarships and achieve their European education dreams.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">How competitive is Erasmus Mundus Scholarship?</h3>
                    <p className="text-gray-700">
                      Erasmus Mundus is highly competitive with acceptance rates typically between 5-15% depending on the program. Strong academic records, relevant experience, and excellent application materials are essential.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can Pakistani students apply for all programs?</h3>
                    <p className="text-gray-700">
                      Yes, Pakistani students are eligible for all Erasmus Mundus programs. Some programs may have specific regional preferences, but most are open to global applicants.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Is work experience required for all programs?</h3>
                    <p className="text-gray-700">
                      Work experience requirements vary by program. While not always mandatory, relevant professional experience significantly strengthens your application, especially for Master's programs.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can I apply to multiple Erasmus Mundus programs?</h3>
                    <p className="text-gray-700">
                      Yes, you can apply to multiple programs, but each requires a separate application with program-specific requirements and deadlines. Choose programs that align with your academic goals.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">What happens after graduation?</h3>
                    <p className="text-gray-700">
                      Erasmus Mundus graduates receive joint or multiple degrees from partner universities and become part of the alumni network. Many continue with PhD studies or secure positions with international organizations.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Are family members allowed to accompany scholars?</h3>
                    <p className="text-gray-700">
                      The scholarship covers only the student. Family members can accompany you, but their visa, accommodation, and living expenses are not covered by the Erasmus Mundus grant.
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
                  <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    Scholarship Overview
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Coverage:</span>
                      <span className="font-semibold text-blue-800">100% Funded</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Duration:</span>
                      <span className="font-semibold text-blue-800">1-4 Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Countries:</span>
                      <span className="font-semibold text-blue-800">27+ EU Nations</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Programs:</span>
                      <span className="font-semibold text-blue-800">200+ Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Program Types */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Popular Fields</h3>
                  <div className="space-y-3">
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <div className="font-medium">Engineering & Technology</div>
                      <div className="text-blue-600 text-xs">40+ Programs Available</div>
                    </div>
                    <div className="p-2 bg-purple-50 rounded text-sm">
                      <div className="font-medium">Business & Economics</div>
                      <div className="text-purple-600 text-xs">35+ Programs Available</div>
                    </div>
                    <div className="p-2 bg-green-50 rounded text-sm">
                      <div className="font-medium">Environmental Studies</div>
                      <div className="text-green-600 text-xs">25+ Programs Available</div>
                    </div>
                    <div className="p-2 bg-orange-50 rounded text-sm">
                      <div className="font-medium">Social Sciences</div>
                      <div className="text-orange-600 text-xs">30+ Programs Available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Application Form */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Get Expert Guidance</h3>
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
                      <option>Field of Interest</option>
                      <option>Engineering</option>
                      <option>Business</option>
                      <option>Environmental Studies</option>
                      <option>Social Sciences</option>
                      <option>Other</option>
                    </select>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Get Scholarship Guidance
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