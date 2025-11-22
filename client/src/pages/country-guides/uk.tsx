import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  MapPin,
  GraduationCap,
  DollarSign,
  Users,
  Calendar,
  Award,
  BookOpen,
  Building,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  FileText,
  Briefcase,
  Heart,
  Shield,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { setStaticPageMeta } from "@/lib/seo";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CompactConsultationForm from "@/components/compact-consultation-form";

const faqs = [
  {
    question: "What are the main reasons to study in the UK?",
    answer: "The UK offers world-class education, career opportunities, a multicultural society, and strong post-graduation work options."
  },
  {
    question: "How can Pakistani students apply to study in the UK?",
    answer: "Pakistani students apply through UCAS for undergrad or directly for postgrad. After an offer, apply for a Tier 4 student visa."
  },
  {
    question: "What is the cost of studying in the UK for Pakistani students?",
    answer: "Tuition fees range from £10,000 to £20,000/year. Living costs are around £1,023/month outside London and £1,334/month in London."
  },
  {
    question: "Do I need IELTS to study in the UK?",
    answer: "IELTS is required, but alternatives like TOEFL, PTE, or Duolingo are accepted. A Medium of Instruction letter may also be valid."
  },
  {
    question: "What scholarships are available for Pakistani students in the UK?",
    answer: "Scholarships include Chevening, Commonwealth, and university-specific awards based on merit or need."
  },
  {
    question: "Can I work while studying in the UK?",
    answer: "Yes, students can work 20 hours/week during term time and full-time during holidays. After graduation, the Graduate Route Visa allows 2 years of work."
  },
  {
    question: "How much money do I need to show for a UK student visa?",
    answer: "You need to show funds for tuition and £1,023/month for living costs (outside London) or £1,334/month (London)."
  },
  {
    question: "What are the best universities in the UK for Pakistani students?",
    answer: "Top choices include Oxford, Cambridge, Imperial College, LSE, and UCL, known for academic excellence and global reputations."
  },
  {
    question: "Can I get permanent residency after studying in the UK?",
    answer: "Yes, the Graduate Route Visa allows up to 2 years of work, after which you can apply for a skilled worker visa to gain permanent residency."
  },
  {
    question: "Is there flexibility regarding study gaps for Pakistani students applying to UK universities?",
    answer: "Yes, study gaps of 2-3 years for undergrad and up to 5-10 years for postgrad are accepted with relevant work experience."
  }
];

const topUniversities = [
  {
    name: "University of Oxford",
    rank: 1,
    location: "Oxford, England",
    tuition: "£10,000-£30,000",
    programs: ["Medicine", "Law", "Engineering", "Business", "Humanities"]
  },
  {
    name: "University of Cambridge",
    rank: 2,
    location: "Cambridge, England",
    tuition: "£10,000-£30,000",
    programs: ["Natural Sciences", "Engineering", "Mathematics", "Medicine", "Economics"]
  },
  {
    name: "Imperial College London",
    rank: 3,
    location: "London, England",
    tuition: "£12,000-£35,000",
    programs: ["Engineering", "Medicine", "Natural Sciences", "Business"]
  },
  {
    name: "London School of Economics (LSE)",
    rank: 4,
    location: "London, England",
    tuition: "£12,000-£25,000",
    programs: ["Economics", "Politics", "Law", "International Relations", "Management"]
  },
  {
    name: "University College London (UCL)",
    rank: 5,
    location: "London, England",
    tuition: "£12,000-£30,000",
    programs: ["Architecture", "Engineering", "Arts", "Health Sciences", "Social Sciences"]
  }
];

const whyStudyUK = [
  { icon: Award, title: "World-Renowned Universities", description: "Home to Oxford, Cambridge, and other globally recognized institutions" },
  { icon: Clock, title: "High-Quality Education", description: "Rigorous academics with practical experience and critical thinking focus" },
  { icon: Globe, title: "Diverse Cultural Environment", description: "Multicultural society with students from over 200 countries" },
  { icon: Briefcase, title: "Strong Job Market", description: "Abundant opportunities in finance, engineering, technology, and healthcare" },
  { icon: TrendingUp, title: "Post-Study Work Visa", description: "Graduate Route Visa allows 2 years to work after graduation" },
  { icon: Heart, title: "Cultural Enrichment", description: "Rich history, architecture, and vibrant cultural scene" }
];

const applicationSteps = [
  { step: 1, title: "Choose the Right Course and University", description: "Research universities and programs that align with your career goals" },
  { step: 2, title: "Apply Online", description: "Submit through UCAS for undergraduate or directly to university for postgraduate" },
  { step: 3, title: "Secure Your Offer", description: "Receive Confirmation of Acceptance for Studies (CAS) from your university" },
  { step: 4, title: "Apply for Student Visa", description: "Complete Tier 4 visa application with required documents" },
  { step: 5, title: "Financial Planning", description: "Demonstrate sufficient funds for tuition and living expenses" }
];

export default function UKGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setStaticPageMeta(
      "Study in UK - Complete Guide for Pakistani Students 2025",
      "Study in the UK with world-class education from prestigious universities like Oxford and Cambridge. Learn about admission requirements, costs, scholarships, visa process, and post-study work opportunities for Pakistani students."
    );

    // Add FAQ schema for SEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-[#1D50C9]/30 to-[#1565c0]/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link href="/country-guide">
              <Button variant="outline" className="mb-8 text-white border-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Country Guide
              </Button>
            </Link>
            
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <span className="text-3xl">🇬🇧</span>
              <span className="text-sm font-medium">Study in United Kingdom</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Study in the United Kingdom
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Experience world-class education with prestigious universities, shorter degree programs, and excellent post-study work opportunities
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-white">130+</div>
                <div className="text-xs md:text-sm text-blue-100">Universities</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-white">500K+</div>
                <div className="text-xs md:text-sm text-blue-100">International Students</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-white">2 Years</div>
                <div className="text-xs md:text-sm text-blue-100">Post-Study Work</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-white">89%</div>
                <div className="text-xs md:text-sm text-blue-100">Visa Success</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Study in UK Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Why Study in the UK?
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              The UK has consistently ranked as one of the best destinations for international students due to its world-class education system, cultural diversity, and global job market connections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyStudyUK.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-[#1D50C9] mb-4" />
                    <h3 className="text-lg font-bold text-neutral-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://dunyaconsultants.com/blog/best-uk-study-visa-consultants" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
            >
              Learn why Dunya Consultants are the best UK study visa consultants
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Top Universities in the UK for Pakistani Students
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              Choosing the right university is crucial for your academic and professional growth. Here are some of the most popular universities in the UK for Pakistani students.
            </p>
          </div>

          <div className="space-y-6">
            {topUniversities.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                          #{university.rank}
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-neutral-800 mb-1">{university.name}</h4>
                          <p className="text-sm text-neutral-600 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {university.location}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-[#1D50C9] w-fit">
                        {university.tuition}/year
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-bold text-neutral-800 mb-3">Popular Programs</h5>
                      <div className="flex flex-wrap gap-2">
                        {university.programs.map((program, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{program}</Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white">
                      Get Admission Guidance for {university.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://dunyaconsultants.com/blog/courses-to-study-in-uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
            >
              Explore popular courses to study in the UK
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              How to Study in the UK from Pakistan
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              For Pakistani students aspiring to study in the UK, the process begins with research and ends with a successful visa interview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {applicationSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-base font-bold text-neutral-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <a 
              href="https://dunyaconsultants.com/blog/uk-study-visa-interview-questions-tips" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
            >
              UK Study Visa Interview Questions and Tips
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="https://dunyaconsultants.com/2024/09/24/uk-student-visa-requirements" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
            >
              Complete UK Student Visa Requirements
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Financial Requirements Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Financial Requirements: How Much Money Do You Need?
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              Studying in the UK can be expensive, but various funding options can make it more affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D50C9]">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Tuition Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">
                  Tuition fees for international students vary depending on the university and course.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Undergraduate</span>
                    <span className="font-bold text-[#1D50C9]">£10,000-£20,000/year</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Postgraduate</span>
                    <span className="font-bold text-[#1D50C9]">£12,000-£30,000/year</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D50C9]">
                  <MapPin className="w-6 h-6 mr-2" />
                  Living Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">
                  Monthly living expenses vary based on where you study in the UK.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Outside London</span>
                    <span className="font-bold text-[#1D50C9]">£1,023/month</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">In London</span>
                    <span className="font-bold text-[#1D50C9]">£1,334/month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D50C9]">
                  <Award className="w-6 h-6 mr-2" />
                  Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">
                  Numerous scholarships and financial aid options are available to international students.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1D50C9]" />
                    <span className="text-sm">Chevening Scholarships</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1D50C9]" />
                    <span className="text-sm">Commonwealth Scholarships</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1D50C9]" />
                    <span className="text-sm">University-Specific Scholarships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://dunyaconsultants.com/2024/08/12/a-complete-guide-to-bank-statement-for-uk-visa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
            >
              Complete Guide to Bank Statement for UK Visa
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* English Language Requirements Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              IELTS or Alternative Tests for Pakistani Students
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              For Pakistani students, English proficiency is an essential requirement for studying in the UK. While IELTS is the most widely accepted test, some universities may also accept alternative tests.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-neutral-800 mb-2">IELTS</h3>
                      <p className="text-sm text-neutral-600">Most widely accepted English proficiency test</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-neutral-800 mb-2">TOEFL</h3>
                      <p className="text-sm text-neutral-600">Accepted by many UK universities</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-neutral-800 mb-2">PTE</h3>
                      <p className="text-sm text-neutral-600">Pearson Test of English Academic</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-neutral-800 mb-2">Duolingo English Test</h3>
                      <p className="text-sm text-neutral-600">Increasingly accepted alternative</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-[#1D50C9]/10 to-[#1845B3]/10 rounded-lg border border-[#1D50C9]/20">
                    <p className="text-sm text-neutral-700">
                      <strong>Note:</strong> Some institutions may accept a Medium of Instruction (MOI) letter from your previous school or university as proof of English proficiency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <a 
                href="https://dunyaconsultants.com/2024/10/07/duolingo-english-test-accepted-university-in-uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
              >
                Duolingo English Test Accepted Universities in UK
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="https://dunyaconsultants.com/2024/10/23/moi-accepted-universities-in-uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
              >
                MOI Accepted Universities in UK
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work and Career Opportunities Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Work and Career Opportunities After Studying in the UK
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              The UK provides several opportunities for international students to gain work experience during and after their studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D50C9]">
                  <Clock className="w-6 h-6 mr-2" />
                  On-Campus Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Work up to 20 hours per week during term time</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Full-time work during holidays</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Gain valuable work experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D50C9]">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Graduate Route Visa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">2 years for Bachelor's and Master's graduates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">3 years for PhD graduates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Look for work or start a business</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D50C9]">
                  <Briefcase className="w-6 h-6 mr-2" />
                  Career Prospects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Finance and banking opportunities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Engineering and technology roles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Healthcare and research positions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <a 
              href="https://dunyaconsultants.com/blog/living-in-uk-as-international-student" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
            >
              Living in UK as an International Student
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="https://dunyaconsultants.com/2024/12/27/uk-student-visa-ratio-from-pakistan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
            >
              UK Student Visa Ratio from Pakistan
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Visa Requirements Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Visa Requirements and Application Process
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              To study in the UK, Pakistani students must apply for a Tier 4 (General) student visa. Make sure to apply at least 3 months before your course starts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-6 h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">Valid Passport</h4>
                      <p className="text-sm text-neutral-600">With validity for the duration of your stay</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-6 h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">CAS Letter</h4>
                      <p className="text-sm text-neutral-600">Confirmation of Acceptance for Studies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-6 h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">Financial Evidence</h4>
                      <p className="text-sm text-neutral-600">Bank statements showing sufficient funds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-6 h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">English Proficiency</h4>
                      <p className="text-sm text-neutral-600">IELTS or other test results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-6 h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">Academic Certificates</h4>
                      <p className="text-sm text-neutral-600">Previous educational qualifications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-6 h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">TB Test Results</h4>
                      <p className="text-sm text-neutral-600">Tuberculosis test certificate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <a 
                href="https://dunyaconsultants.com/blog/uk-immigration-white-paper-2025-what-it-means-for-visas-and-settlement" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#1D50C9] hover:text-[#1845B3] font-medium"
              >
                UK Immigration White Paper 2025 - What It Means for Visas
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-neutral-600">
              Find answers to common questions about studying in the UK
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md border-none">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-neutral-800">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-neutral-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your UK Study Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Studying in the UK offers a unique blend of academic excellence, cultural enrichment, and career opportunities. If you're ready to embark on this exciting educational journey, start planning your application today.
          </p>
          <CompactConsultationForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
