import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, User, FileText, Phone, Mail, Building, CheckCircle, GraduationCap, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function MOIAcceptedUniversitiesInUK() {
  const moiUniversities = [
    { rank: 1, name: "University of Law (U Law)", location: "London", ranking: "Top Law School" },
    { rank: 2, name: "University of Hertfordshire", location: "Hertfordshire", ranking: "Modern University" },
    { rank: 3, name: "University of South Wales", location: "Wales", ranking: "Innovation University" },
    { rank: 4, name: "University of Suffolk", location: "Suffolk", ranking: "Contemporary University" },
    { rank: 5, name: "Nottingham Trent University", location: "Nottingham", ranking: "Modern University" },
    { rank: 6, name: "Bangor University", location: "Wales", ranking: "Research University" },
    { rank: 7, name: "Leeds Metropolitan University (LMU)", location: "Leeds", ranking: "Metropolitan University" },
    { rank: 8, name: "Birmingham City University", location: "Birmingham", ranking: "City University" },
    { rank: 9, name: "University of Portsmouth", location: "Portsmouth", ranking: "Coastal University" },
    { rank: 10, name: "University of Stirling", location: "Scotland", ranking: "Scottish University" },
    { rank: 11, name: "University of Wolverhampton", location: "Wolverhampton", ranking: "Regional University" },
    { rank: 12, name: "University of Essex", location: "Essex", ranking: "Research Intensive" },
    { rank: 13, name: "Cardiff Metropolitan University", location: "Cardiff", ranking: "Welsh University" },
    { rank: 14, name: "University of Central Lancashire", location: "Preston", ranking: "Central University" },
    { rank: 15, name: "University of Sunderland", location: "Sunderland", ranking: "Northern University" },
    { rank: 16, name: "St. Mary's University", location: "London", ranking: "Catholic University" },
    { rank: 17, name: "Edinburgh Napier University (ENU)", location: "Edinburgh", ranking: "Scottish Modern" }
  ];

  const eligibilityCriteria = [
    "Completed higher or secondary education in English medium",
    "Studies completed recently (within 2-5 years)",
    "Educational institution verified by UKVI for English quality",
    "Sufficient period of English medium education"
  ];

  const moiSteps = [
    {
      step: 1,
      title: "Contact Admissions Department",
      description: "Reach out to registrar's office of your previous institution"
    },
    {
      step: 2,
      title: "Request MOI Certificate",
      description: "Request Medium of Instruction certificate with specific application forms"
    },
    {
      step: 3,
      title: "Provide Supporting Documents",
      description: "Submit graduation certificates or transcripts if required"
    },
    {
      step: 4,
      title: "Pay Processing Fees",
      description: "Pay required processing fees and wait for certificate processing"
    }
  ];

  return (
    
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }}
          />
          <div className="relative z-10 text-center px-8">
            <h1 className="text-5xl font-bold mb-4">MOI Accepted Universities in UK</h1>
            <p className="text-2xl font-light">Complete guide to universities accepting Medium of Instruction</p>
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
                  Pursuing higher <strong>education in the United Kingdom</strong> is the dream of thousands of international students. Not just studying in the UK opens new job opportunities for you but will also help in your personal growth. However, while meeting all requirements to get admission to your chosen university, the majority of students face one major issue, and that is proving their English language proficiency through a widely accepted test like IELTS or PTE.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are one of them facing the same issue, let me share good news with you. There are many universities <strong>MOI accepted universities in UK</strong> that allow students to study their favorite program. It means that they can apply to these institutions without submitting proof of English language proficiency. Those who are interested in applying to a low-cost university in UK for international students, book your consultation today with Dunya Consultants and increase your chances of admission.
                </p>
              </div>

              {/* What is MOI */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
                  <BookOpen className="mr-3 h-6 w-6" />
                  What is MOI for UK?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>MOI full form in UK visa is Medium of Instruction</strong>. The Medium of Instruction is an authorized document given by the previous college or university of students and proves that their previous education was completed in English.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Furthermore, students who come from a nation where English is not the first language of instruction but have finished the most of their past education in English can consider the option of choosing <strong>MOI based university in UK</strong>.
                </p>
              </motion.div>

              {/* Universities List */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">List of the UK MOI Accepted Universities</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Are you searching for the <strong>UK cheap university for international student</strong> that accepts MOI? If yes, then you are at the right place. Here are some of the best private as well as public universities in UK that accept MOI for UK instead of IELTS or PTE:
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead>
                      <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sr. No</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">UK Universities</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Location</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {moiUniversities.map((university, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">{university.rank}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-800 font-semibold">{university.name}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-600">{university.location}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-600">{university.ranking}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Eligibility Criteria for MOI Based University in UK</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are looking for the <strong>cheapest university in UK</strong> that accepts MOI letter as an alternative to PTE or IELTS, you should fulfill specific criteria fixed by the UKVI (UK Visa and Immigration) authorities. Let's have a look at the eligibility criteria below:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {eligibilityCriteria.map((criteria, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{criteria}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* How to Get MOI */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">How to Get an MOI Letter or Certificate?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your previous educational institution will generally grant a MOI letter. It can be your school, secondary college, or the university where you got your undergraduate degree. The steps to get MOI to study at a UK cheap university for international students:
                </p>
                
                <div className="space-y-6">
                  {moiSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="lg:col-span-3">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-gradient-to-br from-emerald-50 to-teal-100 border-l-4 border-emerald-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-emerald-800 flex items-center">
                  <Award className="mr-3 h-6 w-6" />
                  Benefits of MOI Universities
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-emerald-800">No IELTS/PTE Required</h3>
                        <p className="text-emerald-700 text-sm">Save time and money on English proficiency tests</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-emerald-800">Faster Application Process</h3>
                        <p className="text-emerald-700 text-sm">Streamlined admission without waiting for test results</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-emerald-800">Cost-Effective Option</h3>
                        <p className="text-emerald-700 text-sm">Avoid expensive test fees and preparation costs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-emerald-800">Valid for Visa Application</h3>
                        <p className="text-emerald-700 text-sm">Accepted by UKVI for student visa applications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-4 text-green-800">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Students who are interested to study in the UK without taking the IELTS or PTE can apply for <strong>MOI accepted universities in UK</strong>. There are various universities in UK for international students that accept Medium of Instruction as evidence of English proficiency. These universities make the application process much smoother for all students who have studied before in English.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In addition, we have mentioned the list of MOI accepted universities in UK to make the decision easier for you. If you still have any queries or want to get more information regarding studying in the UK, reach out to our team at Dunya Consultants!
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can I apply for a UK student visa with MOI?</h3>
                    <p className="text-gray-700">
                      Yes, if your UK university accepts MOI as proof of English language proficiency, you can apply for a UK student visa.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can I get admission in postgraduate courses with MOI for UK?</h3>
                    <p className="text-gray-700">
                      Students can apply for postgraduate programs with a Medium of Instruction (MOI). It totally depends on the course and the university you select.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">What are some of the best MOI accepted universities in UK?</h3>
                    <p className="text-gray-700">
                      Some top MOI accepted universities include University of Law, University of Hertfordshire, University of South Wales, Nottingham Trent University, and Bangor University.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Does a university with January intake in UK accept MOI?</h3>
                    <p className="text-gray-700">
                      Yes, many universities with January intake accept MOI certificates. Check with specific universities for their intake requirements.
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
              <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-emerald-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-emerald-800 mb-4 flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    MOI Quick Facts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Total Universities:</span>
                      <span className="font-semibold text-emerald-800">17+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Cost Savings:</span>
                      <span className="font-semibold text-emerald-800">$200-400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Processing Time:</span>
                      <span className="font-semibold text-emerald-800">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Visa Validity:</span>
                      <span className="font-semibold text-emerald-800">Accepted</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Universities */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Top MOI Universities</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <p className="font-semibold text-gray-800">University of Law</p>
                        <p className="text-xs text-gray-600">Top Law School</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                      <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <p className="font-semibold text-gray-800">University of Hertfordshire</p>
                        <p className="text-xs text-gray-600">Modern University</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-cyan-50 rounded-lg">
                      <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <p className="font-semibold text-gray-800">University of South Wales</p>
                        <p className="text-xs text-gray-600">Innovation University</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Get MOI Guidance</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                      <option>Previous Education Medium</option>
                      <option>English Medium</option>
                      <option>Mixed Medium</option>
                      <option>Other</option>
                    </select>
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                      Get MOI Assessment
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