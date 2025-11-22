import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { setStaticPageMeta } from "@/lib/seo";
import { 
  CheckCircle, 
  DollarSign, 
  FileText, 
  GraduationCap, 
  Globe, 
  MapPin, 
  Calendar, 
  Users, 
  Heart,
  Award,
  Clock,
  Briefcase,
  TrendingUp,
  Shield,
  BookOpen,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";
import CalendlyButton from "@/components/calendly-button";
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
  { icon: Clock, title: "Shorter Degree Programs", description: "3-year Bachelor's and 1-year Master's programs save time and money" },
  { icon: Globe, title: "Multicultural Environment", description: "Students from over 200 countries creating a diverse learning experience" },
  { icon: Briefcase, title: "Strong Career Prospects", description: "Excellent job opportunities in finance, technology, and healthcare" },
  { icon: TrendingUp, title: "Post-Study Work Visa", description: "2-year Graduate Route Visa to work after graduation" },
  { icon: Heart, title: "Rich Cultural Heritage", description: "Historic landmarks, museums, and vibrant cultural scene" }
];

const applicationSteps = [
  { step: 1, title: "Choose Course & University", description: "Research programs that match your career goals" },
  { step: 2, title: "Apply Online", description: "Submit via UCAS (undergrad) or directly (postgrad)" },
  { step: 3, title: "Receive CAS Letter", description: "Get Confirmation of Acceptance for Studies" },
  { step: 4, title: "Apply for Visa", description: "Complete Tier 4 student visa application" },
  { step: 5, title: "Prepare Financially", description: "Show proof of funds for tuition and living" }
];

export default function StudyAbroadUK() {
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
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full mb-6"
            >
              <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Study in the <span className="text-white">UK</span>
            </h1>
            <p className="text-base md:text-lg lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Experience world-renowned education with 166 universities offering over 50,000+ programs
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              <Badge variant="secondary" className="px-3 md:px-4 py-2 text-sm md:text-lg">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                166 Universities
              </Badge>
              <Badge variant="secondary" className="px-3 md:px-4 py-2 text-sm md:text-lg">
                <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Highest Visa Ratio
              </Badge>
              <Badge variant="secondary" className="px-3 md:px-4 py-2 text-sm md:text-lg">
                <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                50,000+ Programs
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <CalendlyButton
                text="Book Free Consultation"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 w-full sm:w-auto px-6 py-3 text-base md:text-lg font-semibold"
                size="lg"
                showIcon={false}
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                onClick={() => setIsPopupOpen(true)}
              >
                Connect now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8 md:space-y-12">
            
            {/* Why Study in UK Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
                Why Study in the UK?
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                The UK has consistently ranked as one of the best destinations for international students due to its world-class education system, cultural diversity, and global job market connections. Here are some key reasons why Pakistani students choose to study in the UK:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {whyStudyUK.map((item, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 md:p-6">
                      <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#1D50C9] mb-3 md:mb-4" />
                      <h3 className="text-base md:text-lg font-bold text-neutral-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-neutral-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a 
                  href="https://dunyaconsultants.com/blog/best-uk-study-visa-consultants" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm md:text-base"
                >
                  Learn why Dunya Consultants are the best UK study visa consultants
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            {/* Top Universities Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
                Top Universities in the UK for Pakistani Students
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Choosing the right university is crucial for your academic and professional growth. Here are some of the most popular universities in the UK for Pakistani students:
              </p>

              <div className="space-y-4 md:space-y-6">
                {topUniversities.map((university, index) => (
                  <Card key={university.name} className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-0">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                            #{university.rank}
                          </div>
                          <div>
                            <h4 className="text-lg md:text-xl font-bold text-neutral-800">{university.name}</h4>
                            <p className="text-xs md:text-sm text-neutral-600 flex items-center">
                              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                              {university.location}
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-[#1D50C9] w-fit text-xs md:text-sm">
                          {university.tuition}/year
                        </Badge>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-bold text-neutral-800 mb-2 text-sm md:text-base">Popular Programs</h5>
                        <div className="flex flex-wrap gap-2">
                          {university.programs.map((program, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{program}</Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white text-sm md:text-base">
                        Get Admission Guidance
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a 
                  href="https://dunyaconsultants.com/blog/courses-to-study-in-uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm md:text-base"
                >
                  Explore popular courses to study in the UK
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            {/* Application Process */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
                How to Study in the UK from Pakistan
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                For Pakistani students aspiring to study in the UK, the process begins with research and ends with a successful visa interview. Here's a step-by-step guide:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {applicationSteps.map((item, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mb-3">
                        {item.step}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-neutral-800 mb-2">{item.title}</h3>
                      <p className="text-xs text-neutral-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <a 
                  href="https://dunyaconsultants.com/blog/uk-study-visa-interview-questions-tips" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm"
                >
                  UK Study Visa Interview Questions and Tips
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="https://dunyaconsultants.com/2024/09/24/uk-student-visa-requirements" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm"
                >
                  Complete UK Student Visa Requirements
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            {/* Financial Requirements */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
                Financial Requirements: How Much Money Do You Need?
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Studying in the UK can be expensive, but various funding options can make it more affordable. Here's a breakdown of the financial requirements:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-[#1D50C9] text-base md:text-lg">
                      <DollarSign className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                      Tuition Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 mb-4">
                      Tuition fees vary by university and course:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 md:p-3 bg-blue-50 rounded-lg">
                        <span className="text-xs md:text-sm font-medium">Undergraduate</span>
                        <span className="font-bold text-[#1D50C9] text-xs md:text-sm">£10,000-£20,000/yr</span>
                      </div>
                      <div className="flex justify-between items-center p-2 md:p-3 bg-blue-50 rounded-lg">
                        <span className="text-xs md:text-sm font-medium">Postgraduate</span>
                        <span className="font-bold text-[#1D50C9] text-xs md:text-sm">£12,000-£30,000/yr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-[#1D50C9] text-base md:text-lg">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                      Living Expenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 mb-4">
                      Monthly costs vary by location:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 md:p-3 bg-blue-50 rounded-lg">
                        <span className="text-xs md:text-sm font-medium">Outside London</span>
                        <span className="font-bold text-[#1D50C9] text-xs md:text-sm">£1,023/month</span>
                      </div>
                      <div className="flex justify-between items-center p-2 md:p-3 bg-blue-50 rounded-lg">
                        <span className="text-xs md:text-sm font-medium">In London</span>
                        <span className="font-bold text-[#1D50C9] text-xs md:text-sm">£1,334/month</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-[#1D50C9] text-base md:text-lg">
                      <Award className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                      Scholarships
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 mb-4">
                      Available funding options:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#1D50C9] flex-shrink-0" />
                        <span className="text-xs md:text-sm">Chevening Scholarships</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#1D50C9] flex-shrink-0" />
                        <span className="text-xs md:text-sm">Commonwealth Scholarships</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#1D50C9] flex-shrink-0" />
                        <span className="text-xs md:text-sm">University-Specific Awards</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 text-center">
                <a 
                  href="https://dunyaconsultants.com/2024/08/12/a-complete-guide-to-bank-statement-for-uk-visa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm md:text-base"
                >
                  Complete Guide to Bank Statement for UK Visa
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            {/* English Language Requirements */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
                IELTS or Alternative Tests for Pakistani Students
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                For Pakistani students, English proficiency is an essential requirement for studying in the UK. While IELTS is the most widely accepted test, some universities may also accept alternative tests like TOEFL, PTE, or Duolingo English Test.
              </p>

              <Card className="shadow-lg mb-6">
                <CardContent className="p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-neutral-800 mb-2 text-sm md:text-base">IELTS</h3>
                      <p className="text-xs md:text-sm text-neutral-600">Most widely accepted English proficiency test</p>
                    </div>
                    <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-neutral-800 mb-2 text-sm md:text-base">TOEFL</h3>
                      <p className="text-xs md:text-sm text-neutral-600">Accepted by many UK universities</p>
                    </div>
                    <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-neutral-800 mb-2 text-sm md:text-base">PTE</h3>
                      <p className="text-xs md:text-sm text-neutral-600">Pearson Test of English Academic</p>
                    </div>
                    <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-neutral-800 mb-2 text-sm md:text-base">Duolingo English Test</h3>
                      <p className="text-xs md:text-sm text-neutral-600">Increasingly accepted alternative</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 md:p-4 bg-gradient-to-r from-[#1D50C9]/10 to-[#1845B3]/10 rounded-lg border border-[#1D50C9]/20">
                    <p className="text-xs md:text-sm text-neutral-700">
                      <strong>Note:</strong> Some institutions may accept a Medium of Instruction (MOI) letter from your previous school or university as proof of English proficiency.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <a 
                  href="https://dunyaconsultants.com/2024/10/07/duolingo-english-test-accepted-university-in-uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm"
                >
                  Duolingo Test Accepted Universities in UK
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="https://dunyaconsultants.com/2024/10/23/moi-accepted-universities-in-uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm"
                >
                  MOI Accepted Universities in UK
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            {/* Work and Career Opportunities */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
                Work and Career Opportunities After Studying in the UK
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                The UK provides several opportunities for international students to gain work experience during and after their studies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-[#1D50C9] text-base md:text-lg">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                      On-Campus Work
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-600">20 hours/week during term</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-600">Full-time during holidays</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-600">Gain work experience</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-[#1D50C9] text-base md:text-lg">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                      Graduate Route Visa
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-600">2 years for graduates</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-600">3 years for PhD holders</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-600">Look for work or start business</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-[#1D50C9] text-base md:text-lg">
                      <Briefcase className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                      Career Prospects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-600">Finance & banking roles</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-600">Technology positions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-600">Healthcare opportunities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <a 
                  href="https://dunyaconsultants.com/blog/living-in-uk-as-international-student" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm"
                >
                  Living in UK as an International Student
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="https://dunyaconsultants.com/2024/12/27/uk-student-visa-ratio-from-pakistan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm"
                >
                  UK Student Visa Ratio from Pakistan
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            {/* Visa Requirements */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
                Visa Requirements and Application Process
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                To study in the UK, Pakistani students must apply for a Tier 4 (General) student visa. Make sure to apply at least 3 months before your course starts.
              </p>

              <Card className="shadow-lg mb-6">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="flex items-start space-x-3 p-3 md:p-4 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-neutral-800 mb-1 text-sm md:text-base">Valid Passport</h4>
                        <p className="text-xs text-neutral-600">With validity for stay duration</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 md:p-4 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-neutral-800 mb-1 text-sm md:text-base">CAS Letter</h4>
                        <p className="text-xs text-neutral-600">Confirmation of Acceptance for Studies</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 md:p-4 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-neutral-800 mb-1 text-sm md:text-base">Financial Evidence</h4>
                        <p className="text-xs text-neutral-600">Bank statements with sufficient funds</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 md:p-4 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-neutral-800 mb-1 text-sm md:text-base">English Proficiency</h4>
                        <p className="text-xs text-neutral-600">IELTS or other test results</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 md:p-4 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-neutral-800 mb-1 text-sm md:text-base">Academic Certificates</h4>
                        <p className="text-xs text-neutral-600">Previous qualifications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 md:p-4 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-neutral-800 mb-1 text-sm md:text-base">TB Test Results</h4>
                        <p className="text-xs text-neutral-600">Tuberculosis test certificate</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <a 
                  href="https://dunyaconsultants.com/blog/uk-immigration-white-paper-2025-what-it-means-for-visas-and-settlement" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1D50C9] hover:text-[#1845B3] font-medium text-sm md:text-base"
                >
                  UK Immigration White Paper 2025 - What It Means for Visas
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            {/* FAQs Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-600 mb-6">
                Find answers to common questions about studying in the UK
              </p>

              <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 text-left hover:no-underline">
                      <span className="font-semibold text-neutral-800 text-sm md:text-base">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 md:px-6 pb-3 md:pb-4">
                      <p className="text-neutral-600 text-sm">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Conclusion */}
            <section className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Is Studying in the UK the Right Choice for You?
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6">
                Studying in the UK offers a unique blend of academic excellence, cultural enrichment, and career opportunities. With a clear application process, strong financial support options, and a robust post-graduation visa system, the UK is an attractive destination for Pakistani students looking to advance their careers on a global scale.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                If you're ready to embark on this exciting educational journey, start planning your application today and reach out to trusted educational consultants who can guide you through every step of the process.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-[#1D50C9] flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Expert Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900 text-sm">UAN Number</p>
                  <p className="text-lg md:text-xl font-bold text-[#1D50C9]">(+92) 304 1110947</p>
                </div>
                
                <ApplicationForm country="UK">
                  <Button className="w-full bg-[#1D50C9] hover:bg-[#1642a8] text-white text-sm md:text-base">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </ApplicationForm>
                
                <Button 
                  variant="outline" 
                  className="w-full text-sm md:text-base"
                  onClick={() => window.open('https://wa.me/923261111947?text=Hello, I want to start my application for studying in UK. Please guide me through the process.')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Start Your Application
                </Button>
                
                <div className="text-center text-xs md:text-sm text-gray-600 space-y-1">
                  <p>📧 info@dunyaconsultants.com</p>
                  <p>📍 106 Sadium Road, Opposite Bajwa Trauma Centre, Sargodha</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Consultation Form Popup */}
      <CompactConsultationForm 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
