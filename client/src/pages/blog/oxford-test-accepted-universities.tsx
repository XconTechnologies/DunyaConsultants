import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Linkedin, Twitter, BookOpen, CheckCircle, Phone, Award, Star, Users, Globe, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OxfordTestAcceptedUniversities() {
  const shareUrl = window.location.href;
  const title = "Oxford Test Accepted Universities in UK";

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
    { id: "introduction", title: "Introduction to Oxford Test of English" },
    { id: "what-is-ote", title: "What is Oxford Test of English?" },
    { id: "accepted-universities", title: "Universities Accepting OTE" },
    { id: "test-format", title: "Test Format and Structure" },
    { id: "advantages", title: "Advantages of OTE" },
    { id: "preparation-tips", title: "Preparation Tips" },
    { id: "registration", title: "Registration Process" },
    { id: "comparison", title: "OTE vs Other Tests" },
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
            <span className="text-gray-900">Oxford Test Accepted Universities</span>
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
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Oxford Test of English"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Oxford Test of English</h2>
                  <p className="text-lg">Modern English Proficiency Test</p>
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
                  Oxford Test of English Accepted Universities in UK
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">Jan 4, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">12 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Dunya Consultants</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full">
                      Oxford Test
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full">
                      UK Universities
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-full">
                      English Test
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
                    The Oxford Test of English (OTE) is a modern, convenient, and accurate English proficiency test that has gained significant acceptance among UK universities. As an innovative alternative to traditional English tests, OTE offers a flexible, computer-based assessment that adapts to your English level and provides quick results.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    This comprehensive guide will help you understand which UK universities accept the Oxford Test of English, the test format, and how to prepare for success in your academic journey.
                  </p>
                </div>

                <div id="what-is-ote" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Oxford Test of English?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Oxford Test of English is a digital English proficiency test developed by Oxford University Press. It's designed to assess real-world English communication skills through adaptive testing technology.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Computer-based adaptive testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Results available within 14 days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Flexible test scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Accepted by 400+ institutions worldwide</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="accepted-universities" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">UK Universities Accepting Oxford Test of English</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Many prestigious UK universities now accept the Oxford Test of English for admission requirements. Here's a comprehensive list of institutions that recognize OTE:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Russell Group Universities</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• University of Edinburgh</li>
                        <li>• University of Glasgow</li>
                        <li>• King's College London</li>
                        <li>• University of Leeds</li>
                        <li>• University of Manchester</li>
                        <li>• Newcastle University</li>
                        <li>• University of Sheffield</li>
                        <li>• University of Southampton</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Other Leading Universities</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• University of Bath</li>
                        <li>• Coventry University</li>
                        <li>• De Montfort University</li>
                        <li>• Heriot-Watt University</li>
                        <li>• London South Bank University</li>
                        <li>• Northumbria University</li>
                        <li>• University of Salford</li>
                        <li>• Teesside University</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Note:</h3>
                    <p className="text-blue-800 text-sm">
                      The list of accepting universities is continuously growing. Always check directly with your chosen university's admissions office for the most current information about English language requirements and accepted tests.
                    </p>
                  </div>
                </div>

                <div id="test-format" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Test Format and Structure</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Oxford Test of English consists of four modules that assess different language skills, with adaptive technology adjusting difficulty based on your performance.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Speaking Module</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li>• Duration: 15 minutes</li>
                        <li>• Format: Computer-based</li>
                        <li>• Tasks: Interview simulation</li>
                        <li>• Focus: Fluency and pronunciation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-green-900 mb-3">Listening Module</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Duration: 25-30 minutes</li>
                        <li>• Format: Adaptive</li>
                        <li>• Tasks: Various audio contexts</li>
                        <li>• Focus: Comprehension skills</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-purple-900 mb-3">Reading Module</h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• Duration: 30-35 minutes</li>
                        <li>• Format: Adaptive</li>
                        <li>• Tasks: Academic and general texts</li>
                        <li>• Focus: Reading comprehension</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-orange-900 mb-3">Writing Module</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Duration: 45 minutes</li>
                        <li>• Format: Two writing tasks</li>
                        <li>• Tasks: Email and essay</li>
                        <li>• Focus: Written communication</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="advantages" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Advantages of Oxford Test of English</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    OTE offers several advantages over traditional English proficiency tests, making it an attractive option for students.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Convenience</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Available year-round</li>
                        <li>• Flexible scheduling</li>
                        <li>• No set exam dates</li>
                        <li>• Multiple test centers</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Adaptive testing</li>
                        <li>• Personalized difficulty</li>
                        <li>• Quick results</li>
                        <li>• Digital certificates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="preparation-tips" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparation Tips for Success</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Effective preparation is key to achieving your desired score on the Oxford Test of English.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Preparation Strategy:</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                        <span>Familiarize yourself with the test format</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                        <span>Practice with official preparation materials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                        <span>Improve your computer-based testing skills</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                        <span>Focus on all four language skills equally</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                        <span>Take practice tests to simulate exam conditions</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div id="registration" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration Process</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Registering for the Oxford Test of English is straightforward and can be done online.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Registration Steps:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Visit the Oxford Test of English website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Create an account and complete your profile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Choose your test center and preferred date</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Pay the test fee and confirm your booking</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="comparison" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">OTE vs Other English Tests</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Here's how the Oxford Test of English compares to other popular English proficiency tests:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Oxford Test</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">IELTS</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">TOEFL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Duration</td>
                          <td className="border border-gray-300 px-4 py-2">2 hours</td>
                          <td className="border border-gray-300 px-4 py-2">2h 45m</td>
                          <td className="border border-gray-300 px-4 py-2">3 hours</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Format</td>
                          <td className="border border-gray-300 px-4 py-2">Computer-based</td>
                          <td className="border border-gray-300 px-4 py-2">Paper/Computer</td>
                          <td className="border border-gray-300 px-4 py-2">Computer-based</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Results</td>
                          <td className="border border-gray-300 px-4 py-2">14 days</td>
                          <td className="border border-gray-300 px-4 py-2">3-13 days</td>
                          <td className="border border-gray-300 px-4 py-2">4-8 days</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Adaptive</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                          <td className="border border-gray-300 px-4 py-2">No</td>
                          <td className="border border-gray-300 px-4 py-2">No</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div id="conclusion" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Oxford Test of English represents a modern, efficient approach to English proficiency testing. With growing acceptance among UK universities and its innovative adaptive technology, OTE offers students a convenient and accurate way to demonstrate their English language skills.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    As more institutions recognize the value of this test, it's becoming an increasingly viable option for students seeking admission to UK universities. Consider OTE as a practical alternative to traditional English tests for your academic journey.
                  </p>
                </div>

                <div id="faqs" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">How long is the Oxford Test of English valid?</h3>
                      <p className="text-gray-700 text-sm">The test results are valid for 2 years from the date of the test.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Can I retake the Oxford Test of English?</h3>
                      <p className="text-gray-700 text-sm">Yes, you can retake the test as many times as you want, but you must wait at least 30 days between attempts.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">What's the minimum score required by UK universities?</h3>
                      <p className="text-gray-700 text-sm">Score requirements vary by university and program, typically ranging from 120-140 for undergraduate and 140-160 for postgraduate programs.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Is the Oxford Test of English recognized for visa applications?</h3>
                      <p className="text-gray-700 text-sm">Check with the UK Home Office for the most current list of accepted tests for visa applications, as this can change over time.</p>
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
                  <h3 className="font-semibold text-gray-900 mb-4">Need Help with English Tests?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our expert team can help you prepare for the Oxford Test of English and university applications.
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