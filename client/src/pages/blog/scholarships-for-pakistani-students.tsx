import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, BookOpen, CheckCircle, ExternalLink, ArrowRight, Eye, Target, Zap, Award, TrendingUp, Users, Globe, DollarSign, GraduationCap, Star, Trophy, Gift, Heart, Briefcase, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ScholarshipsForPakistaniStudents() {
  const shareLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/intent/tweet?text=Top Scholarships for Pakistani Students 2025&url=" + encodeURIComponent(window.location.href),
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
    { id: "government-scholarships", title: "Government Scholarships" },
    { id: "university-scholarships", title: "University Scholarships" },
    { id: "country-specific", title: "Country-Specific Scholarships" },
    { id: "application-process", title: "Application Process" },
    { id: "tips-for-success", title: "Tips for Success" },
    { id: "faqs", title: "FAQs" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const governmentScholarships = [
    {
      name: "Chevening Scholarships (UK)",
      amount: "Full funding",
      level: "Master's",
      deadline: "November 2025",
      description: "Prestigious UK government scholarship for future leaders"
    },
    {
      name: "Fulbright Program (USA)",
      amount: "$50,000+",
      level: "Master's/PhD",
      deadline: "May 2025",
      description: "US government scholarship for academic excellence"
    },
    {
      name: "Australia Awards",
      amount: "Full funding",
      level: "Bachelor's to PhD",
      deadline: "May 2025",
      description: "Australian government scholarships for development"
    },
    {
      name: "Canadian Commonwealth Scholarships",
      amount: "Full funding",
      level: "Master's/PhD",
      deadline: "December 2025",
      description: "Commonwealth scholarships for Canadian universities"
    }
  ];

  const universityScholarships = [
    {
      name: "University of Oxford - Clarendon Fund",
      amount: "£17,000+",
      eligibility: "Merit-based",
      programs: "All graduate programs"
    },
    {
      name: "Harvard University - Need-based Aid",
      amount: "Up to $70,000",
      eligibility: "Financial need",
      programs: "Undergraduate & Graduate"
    },
    {
      name: "University of Toronto - Lester B. Pearson",
      amount: "Full tuition",
      eligibility: "Academic excellence",
      programs: "Undergraduate"
    },
    {
      name: "MIT - Need-based Financial Aid",
      amount: "Up to $75,000",
      eligibility: "Financial need",
      programs: "Undergraduate & Graduate"
    }
  ];

  const countryScholarships = [
    {
      country: "Germany",
      scholarships: [
        "DAAD Scholarships",
        "Deutschlandstipendium",
        "Friedrich Ebert Foundation"
      ],
      amount: "€850-1,200/month",
      benefits: "Free education, living allowance, health insurance"
    },
    {
      country: "Netherlands",
      scholarships: [
        "Holland Scholarship",
        "Orange Tulip Scholarship",
        "Erasmus Mundus"
      ],
      amount: "€5,000-25,000",
      benefits: "Tuition reduction, living expenses"
    },
    {
      country: "Sweden",
      scholarships: [
        "Swedish Institute Scholarships",
        "University-specific scholarships"
      ],
      amount: "SEK 15,000/month",
      benefits: "Full tuition, living allowance, insurance"
    },
    {
      country: "France",
      scholarships: [
        "Eiffel Excellence Scholarships",
        "Charpak Scholarships"
      ],
      amount: "€1,181-1,700/month",
      benefits: "Tuition coverage, monthly allowance"
    }
  ];

  const applicationTips = [
    {
      icon: Target,
      title: "Research Thoroughly",
      description: "Understand scholarship requirements, deadlines, and selection criteria completely"
    },
    {
      icon: FileText,
      title: "Strong Personal Statement",
      description: "Write compelling essays that showcase your achievements and future goals"
    },
    {
      icon: Users,
      title: "Quality References",
      description: "Choose referees who know your work well and can provide strong recommendations"
    },
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Maintain high grades and demonstrate consistent academic performance"
    },
    {
      icon: Globe,
      title: "Leadership Experience",
      description: "Show evidence of leadership, community service, and extracurricular activities"
    },
    {
      icon: Heart,
      title: "Clear Vision",
      description: "Articulate how the scholarship aligns with your career goals and impact plans"
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
            <span className="text-gray-900">Scholarships for Pakistani Students</span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-orange-600/20 to-red-600/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Scholarships for Pakistani Students"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Badge className="bg-yellow-600 text-white mb-3">Scholarships</Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      Top Scholarships for Pakistani Students 2025
                    </h1>
                    <p className="text-gray-200 text-lg">
                      Complete guide to funding your international education
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
                    <span className="text-sm text-gray-600">12 min read</span>
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
                    Studying abroad can be expensive, but numerous scholarship opportunities exist for Pakistani students. 
                    From government-funded programs to university-specific awards, this comprehensive guide covers the 
                    best scholarships available in 2025, including application tips and success strategies.
                  </p>

                  <section id="government-scholarships" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Government Scholarships
                    </h2>
                    
                    <div className="space-y-6">
                      {governmentScholarships.map((scholarship, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">{scholarship.name}</h3>
                              <p className="text-gray-600 mb-3">{scholarship.description}</p>
                            </div>
                            <Award className="h-8 w-8 text-yellow-500" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Amount</div>
                              <div className="font-semibold text-green-600">{scholarship.amount}</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Level</div>
                              <div className="font-semibold text-blue-600">{scholarship.level}</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Deadline</div>
                              <div className="font-semibold text-red-600">{scholarship.deadline}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="university-scholarships" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      University Scholarships
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {universityScholarships.map((scholarship, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">{scholarship.name}</h3>
                              <Badge variant="outline" className="mb-2">{scholarship.programs}</Badge>
                            </div>
                            <GraduationCap className="h-6 w-6 text-blue-500" />
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Amount:</span>
                              <span className="font-semibold text-green-600">{scholarship.amount}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Eligibility:</span>
                              <span className="font-semibold text-blue-600">{scholarship.eligibility}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="country-specific" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Country-Specific Scholarships
                    </h2>
                    
                    <div className="space-y-6">
                      {countryScholarships.map((country, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">{country.country}</h3>
                              <div className="space-y-1">
                                {country.scholarships.map((scholarship, idx) => (
                                  <Badge key={idx} variant="secondary" className="mr-2 mb-1">
                                    {scholarship}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Globe className="h-8 w-8 text-green-500" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Amount</div>
                              <div className="font-semibold text-green-600">{country.amount}</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Benefits</div>
                              <div className="font-semibold text-blue-600">{country.benefits}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
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
                          "Research and shortlist suitable scholarships",
                          "Check eligibility criteria and requirements",
                          "Prepare required documents (transcripts, certificates)",
                          "Write compelling personal statement/essays",
                          "Secure strong letters of recommendation",
                          "Submit applications before deadlines",
                          "Prepare for interviews (if required)",
                          "Follow up on application status"
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

                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <h3 className="text-xl font-semibold mb-4 text-yellow-800">Required Documents</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-yellow-700">
                        <li>• Academic transcripts and certificates</li>
                        <li>• English language proficiency scores</li>
                        <li>• Letters of recommendation</li>
                        <li>• Personal statement/motivation letter</li>
                        <li>• CV/Resume</li>
                        <li>• Portfolio (if applicable)</li>
                        <li>• Financial documents</li>
                        <li>• Passport copy</li>
                      </ul>
                    </div>
                  </section>

                  <section id="tips-for-success" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Tips for Success
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {applicationTips.map((tip, index) => (
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

                  <section id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Frequently Asked Questions
                    </h2>
                    
                    <div className="space-y-6">
                      {[
                        {
                          question: "When should I start applying for scholarships?",
                          answer: "Start researching and preparing applications at least 12-18 months before your intended study start date. Many scholarships have deadlines 6-12 months before the academic year begins."
                        },
                        {
                          question: "Can I apply for multiple scholarships?",
                          answer: "Yes, you can and should apply for multiple scholarships to increase your chances. However, ensure you meet all eligibility criteria and can manage the application workload effectively."
                        },
                        {
                          question: "Are scholarships only for excellent students?",
                          answer: "While many scholarships are merit-based, there are also need-based scholarships, scholarships for specific fields, and those supporting underrepresented groups. Don't let grades discourage you from applying."
                        },
                        {
                          question: "Do I need to repay scholarship money?",
                          answer: "Most scholarships are grants that don't need to be repaid. However, some may have conditions like maintaining certain grades or working in specific sectors after graduation."
                        },
                        {
                          question: "What if I don't get a scholarship?",
                          answer: "Consider alternative funding options like education loans, part-time work, or looking for universities with lower tuition fees. Many students combine multiple funding sources."
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
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Scholarship Guidance</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Need help finding and applying for scholarships? Our experts can guide you through the process.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Get Scholarship Help
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