import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, BookOpen, CheckCircle, ExternalLink, ArrowRight, Eye, Target, Zap, Award, TrendingUp, Users, Globe, Heart, Stethoscope, GraduationCap, MapPin, DollarSign, FileText, Star, Shield, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudyNursingUK() {
  const shareLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/intent/tweet?text=Study Nursing in the UK - Complete Guide&url=" + encodeURIComponent(window.location.href),
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
    { id: "why-study-nursing", title: "Why Study Nursing in the UK?" },
    { id: "entry-requirements", title: "Entry Requirements" },
    { id: "top-universities", title: "Top UK Universities for Nursing" },
    { id: "course-structure", title: "Course Structure & Duration" },
    { id: "tuition-fees", title: "Tuition Fees & Living Costs" },
    { id: "career-prospects", title: "Career Prospects" },
    { id: "application-process", title: "Application Process" },
    { id: "faqs", title: "FAQs" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const topUniversities = [
    {
      name: "University of Manchester",
      ranking: "#1 in UK",
      tuition: "£28,000/year",
      location: "Manchester"
    },
    {
      name: "King's College London",
      ranking: "#2 in UK",
      tuition: "£27,500/year",
      location: "London"
    },
    {
      name: "University of Edinburgh",
      ranking: "#3 in UK",
      tuition: "£26,800/year",
      location: "Edinburgh"
    },
    {
      name: "University of Southampton",
      ranking: "#4 in UK",
      tuition: "£25,900/year",
      location: "Southampton"
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
            <span className="text-gray-900">Study Nursing in the UK</span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Study Nursing in UK"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Badge className="bg-blue-600 text-white mb-3">Healthcare Education</Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      Study Nursing in the UK
                    </h1>
                    <p className="text-gray-200 text-lg">
                      Complete guide to nursing education in the United Kingdom
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
                    <span className="text-sm text-gray-600">8 min read</span>
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
                    The UK is renowned globally for its exceptional healthcare system and world-class nursing education. 
                    With the NHS being one of the world's largest healthcare providers, studying nursing in the UK 
                    offers unparalleled opportunities for Pakistani students seeking a career in healthcare.
                  </p>

                  <section id="why-study-nursing" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Why Study Nursing in the UK?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {[
                        {
                          icon: Heart,
                          title: "World-Class Healthcare System",
                          description: "Learn from the NHS, one of the world's most respected healthcare systems"
                        },
                        {
                          icon: GraduationCap,
                          title: "Excellent Education Standards",
                          description: "UK nursing programs meet international standards and are globally recognized"
                        },
                        {
                          icon: Globe,
                          title: "Global Recognition",
                          description: "UK nursing qualifications are recognized worldwide, opening global career opportunities"
                        },
                        {
                          icon: Users,
                          title: "Diverse Learning Environment",
                          description: "Study alongside international students and gain multicultural healthcare experience"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                        >
                          <item.icon className="h-8 w-8 text-blue-600 mb-4" />
                          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="entry-requirements" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Entry Requirements
                    </h2>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Academic Requirements</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>A-levels: AAB-BBB (including Biology or Chemistry)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>International Baccalaureate: 32-35 points</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Pakistani FSc: 70-80% with Biology/Chemistry</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Foundation Year: Available for students not meeting direct entry</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">English Language Requirements</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>IELTS: Overall 7.0 with minimum 6.5 in each component</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>PTE Academic: Overall 76 with minimum 69 in each skill</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>TOEFL iBT: Overall 100 with minimum 24 in each section</span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  <section id="top-universities" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Top UK Universities for Nursing
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {topUniversities.map((university, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">{university.name}</h3>
                              <Badge variant="secondary" className="text-xs">{university.ranking}</Badge>
                            </div>
                            <Building className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{university.location}</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-2" />
                              <span>{university.tuition}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="course-structure" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Course Structure & Duration
                    </h2>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Bachelor of Nursing (BNurs) - 3 Years</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-600 mb-2">Year 1</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Fundamentals of Nursing</li>
                            <li>• Human Anatomy & Physiology</li>
                            <li>• Healthcare Ethics</li>
                            <li>• Communication Skills</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-600 mb-2">Year 2</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Advanced Clinical Skills</li>
                            <li>• Mental Health Nursing</li>
                            <li>• Pharmacology</li>
                            <li>• Clinical Placements</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-600 mb-2">Year 3</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Specialist Nursing Practice</li>
                            <li>• Research Methods</li>
                            <li>• Leadership in Healthcare</li>
                            <li>• Final Clinical Placement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="tuition-fees" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Tuition Fees & Living Costs
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                        <h3 className="text-xl font-semibold mb-4 text-red-800">Annual Tuition Fees</h3>
                        <ul className="space-y-2 text-red-700">
                          <li>• Top Universities: £25,000 - £30,000</li>
                          <li>• Mid-tier Universities: £20,000 - £25,000</li>
                          <li>• Other Universities: £15,000 - £20,000</li>
                          <li>• Foundation Year: £18,000 - £22,000</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h3 className="text-xl font-semibold mb-4 text-green-800">Living Costs (Per Year)</h3>
                        <ul className="space-y-2 text-green-700">
                          <li>• London: £15,000 - £18,000</li>
                          <li>• Other Cities: £12,000 - £15,000</li>
                          <li>• Accommodation: £8,000 - £12,000</li>
                          <li>• Food & Utilities: £4,000 - £6,000</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="career-prospects" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Career Prospects
                    </h2>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Post-Study Work Opportunities</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Graduate Route Visa: 2-year work permit after graduation</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>NHS Employment: Direct employment opportunities in the NHS</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Private Healthcare: Opportunities in private hospitals and clinics</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Career Progression: Opportunities for specialization and leadership roles</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Salary Expectations</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Newly Qualified: £25,000 - £30,000</li>
                          <li>• Experienced Nurse: £35,000 - £45,000</li>
                          <li>• Senior Nurse: £45,000 - £60,000</li>
                          <li>• Nurse Manager: £60,000+</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Career Specializations</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Critical Care Nursing</li>
                          <li>• Mental Health Nursing</li>
                          <li>• Pediatric Nursing</li>
                          <li>• Community Nursing</li>
                        </ul>
                      </div>
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
                          "Research universities and programs",
                          "Prepare required documents",
                          "Submit UCAS application",
                          "Attend interviews (if required)",
                          "Receive offers and choose firm/insurance",
                          "Apply for student visa",
                          "Prepare for departure"
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
                      <h3 className="text-xl font-semibold mb-4 text-yellow-800">Important Documents</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-yellow-700">
                        <li>• Academic transcripts</li>
                        <li>• English language certificate</li>
                        <li>• Personal statement</li>
                        <li>• References</li>
                        <li>• DBS check</li>
                        <li>• Health declaration</li>
                      </ul>
                    </div>
                  </section>

                  <section id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                      Frequently Asked Questions
                    </h2>
                    
                    <div className="space-y-6">
                      {[
                        {
                          question: "Can I work while studying nursing in the UK?",
                          answer: "Yes, international students can work up to 20 hours per week during term time and full-time during holidays. However, nursing programs are intensive, so time management is crucial."
                        },
                        {
                          question: "Is nursing a good career choice in the UK?",
                          answer: "Absolutely! The UK has a high demand for nurses, offering excellent job security, competitive salaries, and opportunities for career advancement within the NHS and private healthcare sectors."
                        },
                        {
                          question: "What are the clinical placement requirements?",
                          answer: "All nursing programs include substantial clinical placements (usually 2,300+ hours) in various healthcare settings including hospitals, community health centers, and specialist units."
                        },
                        {
                          question: "Can I specialize in a particular area of nursing?",
                          answer: "Yes, you can choose from Adult Nursing, Children's Nursing, Mental Health Nursing, or Learning Disabilities Nursing. Some universities also offer dual field programs."
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
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Get Expert Guidance</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Ready to start your nursing journey in the UK? Contact our education consultants for personalized advice.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
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