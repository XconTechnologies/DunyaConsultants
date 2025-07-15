import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, BookOpen, CheckCircle, ExternalLink, ArrowRight, Eye, Target, Zap, Award, TrendingUp, Users, Globe, FileText, CreditCard, MapPin, Shield, AlertCircle, Info, Clock4, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudentVisaGuide() {
  const shareLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/intent/tweet?text=Complete Student Visa Guide for Pakistani Students&url=" + encodeURIComponent(window.location.href),
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook", 
      url: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      icon: Facebook,
      color: "hover:text-blue-600"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href),
      icon: Linkedin,
      color: "hover:text-blue-700"
    }
  ];

  const tableOfContents = [
    { id: "visa-types", title: "Types of Student Visas" },
    { id: "country-requirements", title: "Country-Specific Requirements" },
    { id: "application-process", title: "Application Process" },
    { id: "required-documents", title: "Required Documents" },
    { id: "financial-requirements", title: "Financial Requirements" },
    { id: "interview-tips", title: "Interview Tips" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "faqs", title: "FAQs" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const visaTypes = [
    {
      country: "United States",
      visaType: "F-1 Student Visa",
      duration: "Program duration + 60 days",
      workRights: "On-campus work allowed",
      requirements: "SEVIS fee, I-20 form, financial proof"
    },
    {
      country: "United Kingdom",
      visaType: "Student Visa (Tier 4)",
      duration: "Program duration + 4 months",
      workRights: "20 hours/week during studies",
      requirements: "CAS number, English proficiency, maintenance funds"
    },
    {
      country: "Canada",
      visaType: "Study Permit",
      duration: "Program duration + 90 days",
      workRights: "20 hours/week during studies",
      requirements: "Letter of acceptance, financial proof, medical exam"
    },
    {
      country: "Australia",
      visaType: "Student Visa (Subclass 500)",
      duration: "Program duration + 2-4 months",
      workRights: "40 hours/fortnight during studies",
      requirements: "CoE, OSHC, English proficiency, GTE requirement"
    }
  ];

  const documentChecklist = [
    { category: "Academic Documents", items: ["Academic transcripts", "Degree certificates", "English language test results", "Recommendation letters"] },
    { category: "Financial Documents", items: ["Bank statements", "Scholarship letters", "Sponsor affidavit", "Property documents"] },
    { category: "Personal Documents", items: ["Passport", "Photographs", "Birth certificate", "Medical certificates"] },
    { category: "Application Forms", items: ["Visa application form", "University acceptance letter", "Statement of purpose", "CV/Resume"] }
  ];

  const financialRequirements = [
    {
      country: "UK",
      tuitionFees: "£15,000 - £40,000/year",
      livingCosts: "£1,334/month (London), £1,023/month (outside London)",
      totalRequired: "£25,000 - £50,000/year",
      bankBalance: "28 days before application"
    },
    {
      country: "Canada",
      tuitionFees: "CAD $15,000 - $50,000/year",
      livingCosts: "CAD $12,000 - $15,000/year",
      totalRequired: "CAD $30,000 - $65,000/year",
      bankBalance: "4 months before application"
    },
    {
      country: "Australia",
      tuitionFees: "AUD $20,000 - $45,000/year",
      livingCosts: "AUD $21,041/year",
      totalRequired: "AUD $40,000 - $70,000/year",
      bankBalance: "3 months before application"
    },
    {
      country: "USA",
      tuitionFees: "USD $25,000 - $60,000/year",
      livingCosts: "USD $15,000 - $25,000/year",
      totalRequired: "USD $40,000 - $85,000/year",
      bankBalance: "At the time of application"
    }
  ];

  const interviewTips = [
    {
      icon: Target,
      title: "Be Prepared",
      description: "Research your course, university, and future career plans thoroughly"
    },
    {
      icon: Users,
      title: "Stay Confident",
      description: "Speak clearly, maintain eye contact, and show enthusiasm for your studies"
    },
    {
      icon: FileText,
      title: "Know Your Documents",
      description: "Be familiar with all documents you've submitted and their contents"
    },
    {
      icon: Globe,
      title: "Explain Your Choice",
      description: "Clearly articulate why you chose this country, university, and program"
    },
    {
      icon: Shield,
      title: "Show Ties to Home",
      description: "Demonstrate strong connections to Pakistan and intention to return"
    },
    {
      icon: CreditCard,
      title: "Financial Clarity",
      description: "Be clear about your funding sources and future financial plans"
    }
  ];

  const commonMistakes = [
    {
      icon: AlertCircle,
      title: "Incomplete Documentation",
      description: "Missing or incorrectly prepared documents are the most common reason for visa rejection"
    },
    {
      icon: Clock4,
      title: "Late Application",
      description: "Applying too close to the start date can result in processing delays"
    },
    {
      icon: CreditCard,
      title: "Insufficient Financial Proof",
      description: "Not showing enough funds or proper documentation of fund sources"
    },
    {
      icon: Users,
      title: "Poor Interview Performance",
      description: "Lack of preparation or nervousness during the visa interview"
    },
    {
      icon: FileText,
      title: "Inconsistent Information",
      description: "Contradictory information across different documents or forms"
    },
    {
      icon: Target,
      title: "Unclear Study Plans",
      description: "Not being able to clearly explain academic and career goals"
    }
  ];

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
            <span className="text-gray-900">Student Visa Guide</span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Student Visa Guide"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Badge className="bg-indigo-600 text-white mb-3">Visa Guide</Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      Complete Student Visa Guide for Pakistani Students
                    </h1>
                    <p className="text-gray-200 text-lg">
                      Everything you need to know about student visa applications
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Article Meta */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Dunya Consultants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">January 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">18 min read</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Share</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Obtaining a student visa is a crucial step in your study abroad journey. This comprehensive guide 
                    covers everything Pakistani students need to know about student visa applications, requirements, 
                    and tips for success across popular study destinations.
                  </p>

                  <section id="visa-types" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Types of Student Visas
                    </h2>
                    
                    <div className="space-y-6">
                      {visaTypes.map((visa, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-1">{visa.country}</h3>
                              <Badge variant="secondary" className="mb-2">{visa.visaType}</Badge>
                            </div>
                            <Building className="h-8 w-8 text-blue-500" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Duration</div>
                              <div className="font-semibold text-gray-900">{visa.duration}</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Work Rights</div>
                              <div className="font-semibold text-gray-900">{visa.workRights}</div>
                            </div>
                          </div>
                          <div className="mt-4 bg-white p-3 rounded-lg">
                            <div className="text-sm text-gray-500">Key Requirements</div>
                            <div className="font-semibold text-gray-900">{visa.requirements}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="country-requirements" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Country-Specific Requirements
                    </h2>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-purple-800">Important Note</h3>
                      <p className="text-purple-700">
                        Visa requirements frequently change. Always check the official embassy or consulate website 
                        for the most up-to-date information before applying. Our consultants can also provide 
                        current requirements and guidance.
                      </p>
                    </div>
                  </section>

                  <section id="application-process" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Application Process
                    </h2>
                    
                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-blue-800">Step-by-Step Application Guide</h3>
                      <div className="space-y-4">
                        {[
                          "Get acceptance letter from university",
                          "Gather all required documents",
                          "Fill out visa application form online",
                          "Pay visa application fees",
                          "Schedule biometrics appointment",
                          "Submit application and documents",
                          "Attend visa interview (if required)",
                          "Wait for processing and decision",
                          "Collect passport with visa"
                        ].map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section id="required-documents" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Required Documents
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {documentChecklist.map((category, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                          <ul className="space-y-2">
                            {category.items.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="financial-requirements" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Financial Requirements
                    </h2>
                    
                    <div className="space-y-6">
                      {financialRequirements.map((country, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">{country.country}</h3>
                            <CreditCard className="h-8 w-8 text-green-500" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Tuition Fees</div>
                              <div className="font-semibold text-gray-900">{country.tuitionFees}</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Living Costs</div>
                              <div className="font-semibold text-gray-900">{country.livingCosts}</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Total Required</div>
                              <div className="font-semibold text-green-600">{country.totalRequired}</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Bank Balance Duration</div>
                              <div className="font-semibold text-blue-600">{country.bankBalance}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="interview-tips" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Interview Tips
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {interviewTips.map((tip, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-purple-50 p-6 rounded-lg border border-purple-100"
                        >
                          <tip.icon className="h-8 w-8 text-purple-600 mb-4" />
                          <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                          <p className="text-gray-600">{tip.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="common-mistakes" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Common Mistakes to Avoid
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {commonMistakes.map((mistake, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-red-50 p-6 rounded-lg border border-red-100"
                        >
                          <mistake.icon className="h-8 w-8 text-red-600 mb-4" />
                          <h3 className="font-semibold text-gray-900 mb-2">{mistake.title}</h3>
                          <p className="text-gray-600">{mistake.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Frequently Asked Questions
                    </h2>
                    
                    <div className="space-y-6">
                      {[
                        {
                          question: "How long does student visa processing take?",
                          answer: "Processing times vary by country: UK (3-6 weeks), Canada (4-12 weeks), Australia (1-4 months), USA (2-4 months). Apply well in advance of your course start date."
                        },
                        {
                          question: "Can I work while studying on a student visa?",
                          answer: "Most countries allow part-time work during studies (usually 20 hours/week) and full-time work during holidays. Check specific restrictions for your visa type."
                        },
                        {
                          question: "What happens if my visa is rejected?",
                          answer: "You can usually appeal the decision or reapply after addressing the reasons for rejection. It's important to understand why it was rejected first."
                        },
                        {
                          question: "Can I extend my student visa?",
                          answer: "Yes, if you're continuing studies or have genuine reasons. You usually need to apply before your current visa expires."
                        },
                        {
                          question: "Do I need health insurance for my student visa?",
                          answer: "Yes, most countries require health insurance. Some provide it (like Australia's OSHC), while others require you to purchase it separately."
                        }
                      ].map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Share Article */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Share This Article</h3>
                  <div className="flex space-x-3">
                    {shareLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full bg-gray-100 transition-colors ${link.color}`}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Visa Application Support</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Need help with your student visa application? Our experts can guide you through the entire process.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Get Visa Help
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