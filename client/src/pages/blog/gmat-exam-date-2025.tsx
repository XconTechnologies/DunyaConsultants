import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Linkedin, Twitter, BookOpen, CheckCircle, Phone, Award, Star, Users, Globe, TrendingUp, ExternalLink, CalendarDays, DollarSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GMATExamDate2025() {
  const shareUrl = window.location.href;
  const title = "GMAT Exam Date 2025 Registration Date";

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "text-blue-600 hover:text-blue-800"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      color: "text-blue-400 hover:text-blue-600"
    }
  ];

  const tableOfContents = [
    { id: "introduction", title: "Introduction to GMAT 2025" },
    { id: "exam-dates", title: "GMAT Exam Dates 2025" },
    { id: "registration-process", title: "Registration Process" },
    { id: "exam-format", title: "New GMAT Format" },
    { id: "preparation-timeline", title: "Preparation Timeline" },
    { id: "fees-costs", title: "Fees and Costs" },
    { id: "test-centers", title: "Test Centers" },
    { id: "score-validity", title: "Score Validity" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faqs", title: "FAQs" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="text-gray-900">GMAT Exam Date 2025</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="py-8">
              {/* Featured Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative group overflow-hidden rounded-2xl shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1606145435649-6d6e5e7a2ed0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="GMAT Exam 2025"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">GMAT 2025</h2>
                  <p className="text-lg">Your Gateway to Top Business Schools</p>
                </div>
              </motion.div>

              {/* Article Header */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
                  GMAT Exam Date 2025 Registration Date
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">Jan 1, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">15 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Dunya Consultants</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full">
                      GMAT
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full">
                      2025 Exam Dates
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-full">
                      MBA Preparation
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">Share:</span>
                    {shareLinks.map((link) => (
                      <button
                        key={link.name}
                        className={`p-3 rounded-full hover:shadow-lg transition-all duration-300 ${link.color}`}
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <link.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div id="introduction" className="mb-10">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The GMAT (Graduate Management Admission Test) is a crucial step for aspiring business school students worldwide. As we enter 2025, the GMAT has undergone significant changes with the new GMAT Focus Edition becoming the standard test format. This comprehensive guide will help you understand the exam dates, registration process, and everything you need to know about taking the GMAT in 2025.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Whether you're planning to apply for MBA programs, Master's in Management, or other graduate business programs, understanding the GMAT schedule and requirements is essential for your success.
                  </p>
                </div>

                <div id="exam-dates" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">GMAT Exam Dates 2025</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The GMAT is available year-round at test centers worldwide, offering flexibility for candidates to schedule their exam based on their preparation timeline and application deadlines.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2025 Exam Availability:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CalendarDays className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Available 365 days a year (except official holidays)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CalendarDays className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Test centers operate Monday through Saturday</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CalendarDays className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Multiple time slots available daily</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CalendarDays className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Online GMAT also available 24/7</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Peak Season (Sep-Dec)</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• High demand for seats</li>
                        <li>• Book 2-3 months in advance</li>
                        <li>• R1 MBA application deadlines</li>
                        <li>• Limited availability</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Off-Peak Season (Jan-May)</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• More availability</li>
                        <li>• Easier to reschedule</li>
                        <li>• R2 & R3 applications</li>
                        <li>• Better test center options</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="registration-process" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration Process</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Registering for the GMAT is a straightforward process that can be completed online through the official GMAC website.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Registration:</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                        <span>Create an account on mba.com</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                        <span>Complete your profile and verify identity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                        <span>Select test center location and date</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                        <span>Choose your preferred time slot</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                        <span>Pay the exam fee and confirm registration</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Registration Deadlines:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Test center: At least 24 hours before exam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Online GMAT: At least 24 hours before exam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Recommended: 1-2 months in advance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="exam-format" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">New GMAT Focus Edition Format</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The GMAT Focus Edition, launched in 2023, is now the standard format for all GMAT tests in 2025. This updated version is shorter, more focused, and provides a better testing experience.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Quantitative Reasoning</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li>• 21 questions</li>
                        <li>• 45 minutes</li>
                        <li>• Score range: 60-90</li>
                        <li>• Data sufficiency & problem solving</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-green-900 mb-3">Verbal Reasoning</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• 23 questions</li>
                        <li>• 45 minutes</li>
                        <li>• Score range: 60-90</li>
                        <li>• Reading comprehension & critical reasoning</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-purple-900 mb-3">Data Insights</h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• 20 questions</li>
                        <li>• 45 minutes</li>
                        <li>• Score range: 60-90</li>
                        <li>• Data analysis & interpretation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Changes from Previous Format:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Shorter duration: 2 hours 15 minutes (vs. 3 hours 7 minutes)</li>
                      <li>• No Analytical Writing Assessment (AWA)</li>
                      <li>• New Data Insights section</li>
                      <li>• Improved score preview and selection</li>
                      <li>• Enhanced data sufficiency questions</li>
                    </ul>
                  </div>
                </div>

                <div id="preparation-timeline" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparation Timeline</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    A well-structured preparation timeline is crucial for GMAT success. Most candidates require 2-6 months of dedicated preparation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">3-Month Timeline</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Month 1: Foundation building</li>
                        <li>• Month 2: Practice tests & weak areas</li>
                        <li>• Month 3: Final review & mock tests</li>
                        <li>• Ideal for: Strong quantitative background</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">6-Month Timeline</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Months 1-2: Concept mastery</li>
                        <li>• Months 3-4: Intensive practice</li>
                        <li>• Months 5-6: Advanced strategies</li>
                        <li>• Ideal for: Comprehensive preparation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="fees-costs" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">GMAT Fees and Costs 2025</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Understanding the various fees associated with the GMAT will help you budget effectively for your test preparation and applications.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        <DollarSign className="w-5 h-5 inline mr-2" />
                        Exam Fees
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• GMAT Focus Edition: $275</li>
                        <li>• Rescheduling: $50</li>
                        <li>• Cancellation: $75 refund</li>
                        <li>• Additional Score Report: $35</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        <Target className="w-5 h-5 inline mr-2" />
                        Optional Services
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Enhanced Score Report: $30</li>
                        <li>• Score reinstatement: $50</li>
                        <li>• Hand scoring: $45</li>
                        <li>• Test center change: $50</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="test-centers" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Test Centers in Pakistan</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Pakistan has multiple GMAT test centers located in major cities, providing convenient access for candidates across the country.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Major Cities</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li>• Lahore - Multiple centers</li>
                        <li>• Karachi - Multiple centers</li>
                        <li>• Islamabad - Pearson VUE</li>
                        <li>• Faisalabad - Test center</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-green-900 mb-3">Online Option</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Available 24/7</li>
                        <li>• Take from home</li>
                        <li>• Same scoring as test center</li>
                        <li>• Technical requirements apply</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="score-validity" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Score Validity and Reporting</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    GMAT scores are valid for 5 years from the test date, and you can take the exam up to 5 times in a 12-month period.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">5 Years</div>
                      <div className="text-sm text-gray-600">Score validity</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">5 Times</div>
                      <div className="text-sm text-gray-600">Annual limit</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">16 Days</div>
                      <div className="text-sm text-gray-600">Wait between attempts</div>
                    </div>
                  </div>
                </div>

                <div id="conclusion" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The GMAT 2025 offers flexibility and accessibility for aspiring business school students. With the new Focus Edition format and year-round availability, candidates can plan their test strategy according to their preparation timeline and application deadlines.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Remember to register early, especially during peak seasons, and allow adequate time for preparation. With proper planning and dedication, you can achieve your target GMAT score and take a significant step toward your MBA dreams.
                  </p>
                </div>

                <div id="faqs" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">How many times can I take the GMAT in 2025?</h3>
                      <p className="text-gray-700 text-sm">You can take the GMAT up to 5 times in a 12-month period, with at least 16 days between attempts.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">What is the difference between GMAT Focus Edition and the old format?</h3>
                      <p className="text-gray-700 text-sm">The Focus Edition is shorter (2h 15m vs 3h 7m), has no AWA section, includes a new Data Insights section, and offers improved score preview options.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Can I choose which scores to send to schools?</h3>
                      <p className="text-gray-700 text-sm">Yes, you can select which GMAT scores to send to schools. You can view your score before deciding whether to accept or cancel it.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Is the online GMAT the same as the test center version?</h3>
                      <p className="text-gray-700 text-sm">Yes, the online GMAT has the same format, difficulty, and scoring as the test center version. Schools treat both equally.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Need GMAT Preparation Help?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our expert instructors can help you prepare for the GMAT and achieve your target score.
                  </p>
                  <Button className="w-full" onClick={() => window.open('tel:+923041110947', '_blank')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call (+92) 304 1110947
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}