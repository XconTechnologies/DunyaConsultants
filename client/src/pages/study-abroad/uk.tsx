import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { setStaticPageMeta } from "@/lib/seo";
import { Link } from "wouter";
import {
  CheckCircle,
  DollarSign,
  FileText,
  GraduationCap,
  Globe,
  MapPin,
  Calendar,
  Users,
  Zap,
  Award,
  Briefcase,
  BookOpen,
  TrendingUp,
  Building,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Clock,
  Shield
} from "lucide-react";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";
import ApplicationForm from "@/components/ApplicationForm";

export default function StudyAbroadUK() {
  useEffect(() => {
    setStaticPageMeta(
      "Study in the UK: Step-by-Step Guide for Pakistani Students",
      "Find out how Pakistani students can successfully apply to UK universities. Learn about scholarships, visa processes, and career opportunities post-graduation."
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
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const whyStudyUK = [
    "World-renowned universities like Oxford and Cambridge",
    "Shorter degree programs (3-year Bachelor's, 1-year Master's)",
    "High-quality education with global recognition",
    "Multicultural environment with students from 200+ countries",
    "Strong post-study work opportunities (2-year Graduate Visa)",
    "Rich cultural heritage and historical landmarks"
  ];

  const universities = [
    "University of Oxford",
    "University of Cambridge",
    "Imperial College London",
    "London School of Economics (LSE)",
    "University College London (UCL)",
    "University of Edinburgh",
    "King's College London",
    "University of Manchester",
    "University of Bristol",
    "University of Warwick"
  ];

  const popularCourses = [
    "Engineering",
    "Business Administration",
    "Computer Science",
    "Medicine",
    "Law",
    "Economics",
    "Architecture",
    "Data Science",
    "Artificial Intelligence"
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Study in <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">UK</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto px-4">
              A comprehensive guide to studying in the UK for Pakistani students. Get essential information on visas, scholarships, and top universities to kickstart your academic journey.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
              <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-white/20 text-white border-white/30">
                <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                130+ Universities
              </Badge>
              <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-white/20 text-white border-white/30">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                2-Year Work Visa
              </Badge>
              <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-white/20 text-white border-white/30">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Scholarship Options
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <CalendlyButton
                text="Book Free Consultation"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
                size="lg"
                showIcon={false}
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-8"
                onClick={() => setIsPopupOpen(true)}
              >
                Start Your Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction */}
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Studying in the UK is a life-changing decision that offers numerous academic, professional, and personal benefits for Pakistani students. With world-renowned universities, a diverse and vibrant cultural scene, and numerous post-graduation opportunities, the UK has become one of the most sought-after destinations for higher education.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This complete guide provides you with everything you need to know about studying in the UK, including the application process, visa requirements, scholarships, top universities, and career opportunities with trusted guidance from <a href="/contact" className="text-[#1D50C9] hover:underline font-medium">Dunya Consultants</a>.
                </p>
              </CardContent>
            </Card>

            {/* Why Study in UK */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Why Study in the UK?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The UK has consistently ranked as one of the best destinations for international students due to its world-class education system, cultural diversity, and global job market connections. Here are some key reasons why Pakistani students choose to study in the UK:
                </p>
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Key Reasons</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {whyStudyUK.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <a 
                    href="https://dunyaconsultants.com/blog/living-in-uk-as-international-student"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Learn More: Living in UK as International Student
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  How to Study in the UK from Pakistan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For Pakistani students aspiring to study in the UK, the process begins with research and ends with a successful visa interview. Here's a step-by-step guide on how to navigate the application process:
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-5 md:p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#1D50C9]" />
                    Application Steps
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 1:</strong> Choose the right course and university that aligns with your interests and career goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 2:</strong> Apply online through UCAS (undergraduate) or directly to university (postgraduate)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 3:</strong> Secure your offer and receive CAS (Confirmation of Acceptance for Studies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 4:</strong> Apply for Tier 4 student visa with required documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 5:</strong> Demonstrate sufficient funds for tuition and living expenses</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://dunyaconsultants.com/blog/uk-study-visa-interview-questions-tips"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      UK Visa Interview Tips
                    </Button>
                  </a>
                  <a 
                    href="https://dunyaconsultants.com/2024/09/24/uk-student-visa-requirements"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      UK Student Visa Requirements
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Top Universities */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <Building className="w-6 h-6" />
                  Top Universities in the UK for Pakistani Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Choosing the right university is crucial for your academic and professional growth. Here are some of the most popular universities in the UK for Pakistani students:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {universities.map((university, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-8 h-8 bg-[#1D50C9] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{university}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <a 
                    href="https://dunyaconsultants.com/blog/courses-to-study-in-uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Explore Popular Courses to Study in UK
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Financial Requirements */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <DollarSign className="w-6 h-6" />
                  Financial Requirements: How Much Money Do You Need?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Studying in the UK can be expensive, but various funding options can make it more affordable. Here's a breakdown of the financial requirements:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-10 h-10 bg-[#1D50C9] rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tuition Fees</h4>
                      <p className="text-gray-600 text-sm">£10,000 to £20,000 per year for undergraduate</p>
                      <p className="text-gray-600 text-sm">£12,000 to £30,000 per year for postgraduate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-10 h-10 bg-[#1D50C9] rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Living Costs</h4>
                      <p className="text-gray-600 text-sm">£1,023 per month outside London</p>
                      <p className="text-gray-600 text-sm">£1,334 per month in London</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-10 h-10 bg-[#1D50C9] rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Scholarships Available</h4>
                      <p className="text-gray-600 text-sm">Chevening, Commonwealth, and university-specific scholarships</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <a 
                    href="https://dunyaconsultants.com/2024/08/12/a-complete-guide-to-bank-statement-for-uk-visa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Complete Guide: Bank Statement for UK Visa
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* English Language Requirements */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  IELTS or Alternative Tests for Pakistani Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For Pakistani students, English proficiency is an essential requirement for studying in the UK. While IELTS is the most widely accepted test, some universities may also accept alternative tests:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">IELTS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">TOEFL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">PTE</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">Duolingo English Test</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100/30 p-4 rounded-r-lg border-l-4 border-orange-600 shadow-sm">
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Note:</strong> Some institutions may accept a Medium of Instruction (MOI) letter from your previous school or university as proof of English proficiency.
                  </p>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://dunyaconsultants.com/2024/10/07/duolingo-english-test-accepted-university-in-uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      Duolingo Accepted Universities
                    </Button>
                  </a>
                  <a 
                    href="https://dunyaconsultants.com/2024/10/23/moi-accepted-universities-in-uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      MOI Accepted Universities
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Best Consultant Highlighted Section */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#1D50C9] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
              <CardHeader className="relative">
                <CardTitle className="text-2xl md:text-3xl text-white flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Best UK Study Visa Consultants in Pakistan
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-white/95 mb-6 leading-relaxed text-base md:text-lg">
                  Dunya Consultants is recognized as one of the <strong className="text-white font-bold">best UK study visa consultants in Pakistan</strong>. Our team supports students with:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "University selection and course guidance",
                    "Complete application processing",
                    "Scholarship and financial aid guidance",
                    "Visa documentation preparation",
                    "Mock interview coaching",
                    "Pre-departure orientation"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white font-medium text-sm md:text-base">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <a 
                    href="https://dunyaconsultants.com/blog/best-uk-study-visa-consultants"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                      Learn Why We're the Best UK Consultants
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Work and Career Opportunities */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  Work and Career Opportunities After Studying in the UK
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The UK provides several opportunities for international students to gain work experience during and after their studies:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-gray-900 mb-2">During Studies</h4>
                    <p className="text-gray-700">Work up to 20 hours per week during term time and full-time during holidays</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Graduate Route Visa</h4>
                    <p className="text-gray-700">2 years for Bachelor's/Master's graduates, 3 years for PhD graduates</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100/30 p-4 rounded-r-lg border-l-4 border-orange-600 shadow-sm">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Excellent job opportunities in finance, engineering, technology, and healthcare</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Clear pathway to skilled worker visa and permanent residency</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://dunyaconsultants.com/2024/12/27/uk-student-visa-ratio-from-pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      UK Visa Ratio from Pakistan
                    </Button>
                  </a>
                  <a 
                    href="https://dunyaconsultants.com/blog/uk-immigration-white-paper-2025-what-it-means-for-visas-and-settlement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      UK Immigration White Paper 2025
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="border-b border-blue-100 bg-gradient-to-r from-blue-50 to-orange-50/30">
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1D50C9] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">?</span>
                  </div>
                  Frequently Asked Questions
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  Get answers to the most common questions about studying in the UK
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3 sm:space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`
                        group relative rounded-xl overflow-hidden border-2 transition-all duration-200
                        ${expandedFaq === index 
                          ? 'border-[#1D50C9] shadow-lg shadow-blue-100' 
                          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                        }
                      `}
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className={`
                          w-full px-4 sm:px-5 py-3 sm:py-4 text-left transition-all duration-200 flex items-start gap-3 sm:gap-4
                          ${expandedFaq === index 
                            ? 'bg-gradient-to-r from-blue-50 to-orange-50/30' 
                            : 'bg-white group-hover:bg-gray-50'
                          }
                        `}
                      >
                        <div className={`
                          flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-200
                          ${expandedFaq === index 
                            ? 'bg-[#1D50C9] text-white' 
                            : 'bg-blue-100 text-[#1D50C9] group-hover:bg-[#1D50C9] group-hover:text-white'
                          }
                        `}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className={`
                            font-semibold transition-colors duration-200 text-sm sm:text-base
                            ${expandedFaq === index ? 'text-[#1D50C9]' : 'text-gray-900 group-hover:text-[#1D50C9]'}
                          `}>
                            {faq.question}
                          </h3>
                        </div>
                        <div className="flex-shrink-0">
                          {expandedFaq === index ? (
                            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D50C9]" />
                          ) : (
                            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#1D50C9] transition-colors" />
                          )}
                        </div>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 sm:px-5 py-3 sm:py-4 bg-white border-t-2 border-blue-100">
                          <div className="pl-0 sm:pl-12">
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start space-y-6">
            
            {/* Quick Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-[#1D50C9] flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Get Expert Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-700 mb-1">UAN Number</p>
                  <p className="text-2xl font-bold text-[#1D50C9]">(+92) 304 1110947</p>
                </div>
                
                <ApplicationForm country="UK">
                  <Button className="w-full bg-[#1D50C9] hover:bg-[#1845B3] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </ApplicationForm>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#1D50C9] text-[#1D50C9] hover:bg-blue-50"
                  onClick={() => window.open('https://wa.me/923261111947?text=Hello, I want to start my application for studying in UK. Please guide me through the process.')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
                
                <div className="text-sm text-gray-600 space-y-2 pt-3 border-t">
                  <p className="flex items-start gap-2">
                    <span>📧</span>
                    <span>info@dunyaconsultants.com</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>📍</span>
                    <span>106 Sadium Road, Opposite Bajwa Trauma Centre, Sargodha</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-[#1D50C9]">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-gray-600 mb-1">Tuition Range</p>
                  <p className="text-lg font-bold text-[#1D50C9]">£10,000 - £30,000</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-xs text-gray-600 mb-1">Living Cost (Outside London)</p>
                  <p className="text-lg font-bold text-orange-600">£1,023/month</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-gray-600 mb-1">Work Visa After Studies</p>
                  <p className="text-lg font-bold text-[#1D50C9]">2 Years</p>
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
