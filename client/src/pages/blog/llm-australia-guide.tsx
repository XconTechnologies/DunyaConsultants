import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Linkedin, Twitter, BookOpen, CheckCircle, Phone, Award, Star, Users, Globe, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LLMAustraliaGuide() {
  const shareUrl = window.location.href;
  const title = "Master of Laws (LLM) in Australia: A Comprehensive Guide";

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
    { id: "introduction", title: "Introduction to LLM in Australia" },
    { id: "why-australia", title: "Why Choose Australia for LLM?" },
    { id: "top-universities", title: "Top Universities for LLM" },
    { id: "specializations", title: "Popular LLM Specializations" },
    { id: "admission-requirements", title: "Admission Requirements" },
    { id: "costs", title: "Costs and Financial Aid" },
    { id: "application-process", title: "Application Process" },
    { id: "career-prospects", title: "Career Prospects" },
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
            <span className="text-gray-900">LLM in Australia Guide</span>
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
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="LLM in Australia"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Master of Laws (LLM)</h2>
                  <p className="text-lg">Study Law in Australia</p>
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
                  Master of Laws (LLM) in Australia: A Comprehensive Guide
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">Jan 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">16 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Dunya Consultants</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full">
                      LLM
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full">
                      Australia
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-full">
                      Legal Education
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
                    Australia has emerged as one of the world's leading destinations for pursuing a Master of Laws (LLM) degree. With its robust legal system, world-class universities, and diverse multicultural environment, Australia offers exceptional opportunities for law graduates seeking to advance their legal careers and expertise.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The LLM program in Australia provides students with specialized knowledge in various areas of law, research skills, and exposure to both common law and international legal principles. This comprehensive guide will help you understand everything you need to know about pursuing an LLM in Australia.
                  </p>
                </div>

                <div id="why-australia" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Australia for LLM?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Australia's legal education system is internationally recognized and offers numerous advantages for international students pursuing advanced legal studies.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Advantages:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>World-class legal education with global recognition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Strong common law tradition and legal system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Excellent post-study work opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Multicultural environment and diverse legal perspectives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Research-intensive programs with expert faculty</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="top-universities" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Universities for LLM in Australia</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Australia hosts several prestigious universities offering world-class LLM programs with various specializations and research opportunities.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">University of Melbourne</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Ranked #1 in Australia for Law</li>
                        <li>• Wide range of specializations</li>
                        <li>• Strong research facilities</li>
                        <li>• Global alumni network</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">University of Sydney</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Top-ranked law faculty</li>
                        <li>• International law focus</li>
                        <li>• Industry partnerships</li>
                        <li>• Clinical legal programs</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Australian National University</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Research-intensive programs</li>
                        <li>• Government connections</li>
                        <li>• Policy-focused studies</li>
                        <li>• Expert faculty</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">University of New South Wales</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Innovation in legal education</li>
                        <li>• Strong industry links</li>
                        <li>• Flexible study options</li>
                        <li>• International focus</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="specializations" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular LLM Specializations</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Australian universities offer diverse LLM specializations to match different career goals and interests in the legal field.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">International Law</h4>
                      <p className="text-sm text-blue-800">Focus on global legal frameworks and international relations</p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Commercial Law</h4>
                      <p className="text-sm text-green-800">Business law, corporate governance, and commercial transactions</p>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Environmental Law</h4>
                      <p className="text-sm text-purple-800">Climate change, sustainability, and environmental regulations</p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-900 mb-2">Human Rights Law</h4>
                      <p className="text-sm text-orange-800">International human rights and social justice</p>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-900 mb-2">Criminal Law</h4>
                      <p className="text-sm text-red-800">Criminal justice system and legal procedures</p>
                    </div>
                    
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                      <h4 className="font-semibold text-indigo-900 mb-2">Intellectual Property</h4>
                      <p className="text-sm text-indigo-800">Patents, trademarks, and innovation law</p>
                    </div>
                  </div>
                </div>

                <div id="admission-requirements" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Each university has specific requirements for LLM admission, but there are common criteria that most institutions follow.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">General Requirements:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Bachelor's degree in Law (LLB) or equivalent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Minimum GPA of 2.5-3.0 (varies by university)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>English proficiency: IELTS 6.5-7.0 or equivalent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Statement of purpose and academic references</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Work experience (preferred but not always required)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="costs" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Costs and Financial Aid</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Understanding the financial investment required for an LLM in Australia is crucial for planning your studies.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Tuition Fees (Annual)</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• International students: AUD $40,000-$60,000</li>
                        <li>• Top-tier universities: AUD $50,000-$65,000</li>
                        <li>• Specialized programs: AUD $45,000-$70,000</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Living Expenses (Annual)</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Accommodation: AUD $15,000-$25,000</li>
                        <li>• Food & groceries: AUD $4,000-$6,000</li>
                        <li>• Transportation: AUD $1,500-$3,000</li>
                        <li>• Other expenses: AUD $3,000-$5,000</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Scholarship Opportunities:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Australia Awards Scholarships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>University-specific merit scholarships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Research Training Program (RTP) scholarships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Destination Australia scholarships</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="application-process" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The application process for LLM programs in Australia typically follows a structured timeline and requires careful preparation.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Process:</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                        <span>Research universities and programs (January-March)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                        <span>Prepare documents and take English proficiency tests</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                        <span>Submit applications (April-July)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                        <span>Receive offers and accept admission</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                        <span>Apply for student visa and arrange accommodation</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div id="career-prospects" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Prospects</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    An LLM from Australia opens doors to diverse career opportunities both within Australia and internationally.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
                      <div className="text-sm text-gray-600">Graduate employment rate</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">AUD $90k+</div>
                      <div className="text-sm text-gray-600">Average starting salary</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">2-4 years</div>
                      <div className="text-sm text-gray-600">Post-study work visa</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Career Opportunities:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Corporate lawyer in multinational companies</li>
                      <li>• Legal consultant for international organizations</li>
                      <li>• Academic and research positions</li>
                      <li>• Government legal advisor</li>
                      <li>• International arbitrator or mediator</li>
                      <li>• Legal practice in specialized areas</li>
                    </ul>
                  </div>
                </div>

                <div id="conclusion" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Pursuing an LLM in Australia represents an excellent investment in your legal career. With world-class universities, diverse specializations, and strong career prospects, Australia offers an ideal environment for advancing your legal expertise and building a successful international career.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The combination of high-quality education, research opportunities, and post-study work options makes Australia an attractive destination for law graduates seeking to enhance their qualifications and expand their professional horizons.
                  </p>
                </div>

                <div id="faqs" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">How long does an LLM program take in Australia?</h3>
                      <p className="text-gray-700 text-sm">Most LLM programs are completed in 1-2 years, depending on whether you study full-time or part-time.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Can I work while studying LLM in Australia?</h3>
                      <p className="text-gray-700 text-sm">Yes, international students can work up to 48 hours per fortnight during studies and full-time during breaks.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Is an LLM from Australia recognized globally?</h3>
                      <p className="text-gray-700 text-sm">Yes, Australian LLM degrees are internationally recognized and respected by employers worldwide.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">What are the visa requirements for LLM students?</h3>
                      <p className="text-gray-700 text-sm">You'll need a Student visa (subclass 500) with evidence of financial capacity, health insurance, and English proficiency.</p>
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
                  <h3 className="font-semibold text-gray-900 mb-4">Need Help with LLM Applications?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our expert consultants can guide you through the LLM application process for Australian universities.
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