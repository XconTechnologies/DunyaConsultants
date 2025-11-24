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
  Shield,
  Star
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
    { icon: Building, title: "World-Class Universities", desc: "Study at prestigious institutions like Oxford and Cambridge" },
    { icon: Clock, title: "Shorter Programs", desc: "3-year Bachelor's and 1-year Master's degrees" },
    { icon: Award, title: "Global Recognition", desc: "High-quality education recognized worldwide" },
    { icon: Users, title: "Multicultural", desc: "Students from 200+ countries" },
    { icon: Briefcase, title: "Post-Study Work", desc: "2-year Graduate Visa opportunities" },
    { icon: Globe, title: "Rich Culture", desc: "Historical landmarks and cultural heritage" }
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
    { name: "Engineering", demand: "High" },
    { name: "Business Administration", demand: "Very High" },
    { name: "Computer Science", demand: "Very High" },
    { name: "Medicine", demand: "High" },
    { name: "Law", demand: "High" },
    { name: "Economics", demand: "High" },
    { name: "Architecture", demand: "High" },
    { name: "Data Science", demand: "Very High" },
    { name: "Artificial Intelligence", demand: "Very High" }
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
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
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
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Studying in the UK is a life-changing decision that offers numerous academic, professional, and personal benefits for Pakistani students. With world-renowned universities, a diverse and vibrant cultural scene, and numerous post-graduation opportunities, the UK has become one of the most sought-after destinations for higher education.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  This complete guide provides you with everything you need to know about studying in the UK, including the application process, visa requirements, scholarships, top universities, and career opportunities with trusted guidance from <a href="/contact" className="text-[#1D50C9] hover:underline font-medium">Dunya Consultants</a>.
                </p>
              </CardContent>
            </Card>

            {/* Why Study in UK */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    Why Study in the UK?
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">
                  Discover what makes the UK a top choice for international students
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  The UK offers world-class education, cultural diversity, excellent job opportunities, and strong post-graduation work options for international students.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyStudyUK.map((reason, index) => (
                    <div 
                      key={index} 
                      className="group p-5 bg-white rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300 cursor-pointer"
                      data-testid={`reason-card-${index}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D50C9]/10 to-[#1845B3]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <reason.icon className="w-6 h-6 text-[#1D50C9]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#1D50C9] transition-colors">
                            {reason.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <a 
                    href="https://dunyaconsultants.com/blog/living-in-uk-as-international-student"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Learn More: Living in UK as International Student
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    How to Study in the UK from Pakistan
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">
                  Your complete step-by-step application guide
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  For Pakistani students aspiring to study in the UK, the process begins with research and ends with a successful visa interview. Here's a step-by-step guide on how to navigate the application process:
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5 text-[#1D50C9]" />
                    Application Steps
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 1:</strong> Choose the right course and university that aligns with your interests and career goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 2:</strong> Apply online through UCAS (undergraduate) or directly to university (postgraduate)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 3:</strong> Secure your offer and receive CAS (Confirmation of Acceptance for Studies)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 4:</strong> Apply for Tier 4 student visa with required documents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span><strong>Step 5:</strong> Demonstrate sufficient funds for tuition and living expenses</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://dunyaconsultants.com/blog/uk-study-visa-interview-questions-tips"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      UK Visa Interview Tips
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a 
                    href="https://dunyaconsultants.com/2024/09/24/uk-student-visa-requirements"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      UK Student Visa Requirements
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* English Language Requirements */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    English Language Requirements
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">
                  IELTS and alternative test options for UK universities
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Many UK universities accept students without IELTS. Here are your alternatives:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {["PTE", "Duolingo", "TOEFL", "MOI Letter"].map((test, index) => (
                    <div key={index} className="group relative" data-testid={`test-option-${index}`}>
                      <div className="relative bg-white p-4 rounded-2xl text-center shadow-[0_2px_8px_rgba(249,115,22,0.2)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{test}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-red-100/50 p-5 rounded-2xl shadow-sm">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-gray-900">Note:</strong> Some institutions may accept a Medium of Instruction (MOI) letter from your previous school or university as proof of English proficiency.
                  </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://dunyaconsultants.com/2024/10/07/duolingo-english-test-accepted-university-in-uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      Duolingo Accepted Universities
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a 
                    href="https://dunyaconsultants.com/2024/10/23/moi-accepted-universities-in-uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      MOI Accepted Universities
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Financial Requirements */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    Cost of Studying in the UK
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">
                  Financial requirements and funding options
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Understanding the financial commitment is crucial for planning your UK education:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: GraduationCap, title: "Tuition Fees", desc: "£10,000-£20,000/year (UG) | £12,000-£30,000/year (PG)", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: Building, title: "Living Expenses", desc: "£1,023/month outside London | £1,334/month in London", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: FileText, title: "Financial Proof", desc: "Bank statements showing tuition + living costs required", color: "from-[#1D50C9] to-[#1845B3]" }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300" data-testid={`cost-item-${index}`}>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <a 
                    href="https://dunyaconsultants.com/2024/08/12/a-complete-guide-to-bank-statement-for-uk-visa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Complete Guide: Bank Statement for UK Visa
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Study Gap Acceptance */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    Study Gap Acceptance
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">
                  Flexibility for students with education gaps
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  UK universities are flexible with study gaps when combined with relevant work experience:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">Bachelor's</h4>
                    </div>
                    <p className="text-gray-700">Up to <span className="font-bold text-[#1D50C9]">2-3 years gap</span> is acceptable</p>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">Master's</h4>
                    </div>
                    <p className="text-gray-700"><span className="font-bold text-[#1D50C9]">5-10 years gap</span> accepted with valid justification</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scholarships */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    Scholarships Available
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">
                  Funding opportunities for Pakistani students
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Several scholarship options are available to help fund your UK education:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Chevening Scholarships",
                    "Commonwealth Scholarships",
                    "University-Specific Scholarships",
                    "Merit-Based Awards"
                  ].map((option, index) => (
                    <div key={index} className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(249,115,22,0.2)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300" data-testid={`scholarship-option-${index}`}>
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{option}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Courses */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    Popular Courses
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">
                  Top programs chosen by Pakistani students
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Top programs chosen by Pakistani students for their high earning potential:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {popularCourses.map((course, index) => (
                    <div key={index} className={`group relative overflow-hidden p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl transition-all duration-300 ${
                      course.demand === 'Very High' ? 'shadow-[0_2px_8px_rgba(249,115,22,0.2)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)]' :
                      course.demand === 'High' ? 'shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)]' : 
                      'shadow-md hover:shadow-lg'
                    }`} data-testid={`course-card-${index}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#1D50C9] transition-colors">
                          {course.name}
                        </h3>
                        {course.demand && (
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                            course.demand === 'Very High' ? 'bg-orange-100 text-orange-700' :
                            course.demand === 'High' ? 'bg-blue-100 text-[#1D50C9]' : 
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {course.demand}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <a 
                    href="https://dunyaconsultants.com/blog/courses-to-study-in-uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Explore Popular Courses to Study in UK
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Top Universities */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    Top UK Universities
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">
                  World-class institutions accepting Pakistani students
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-3">
                  {universities.map((university, index) => (
                    <div key={index} className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300" data-testid={`university-item-${index}`}>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                        <Building className="w-4 h-4 text-[#1D50C9]" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{university}</span>
                    </div>
                  ))}
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
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Work and Career Opportunities */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    Work & Career Opportunities
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">
                  Post-study work options in the UK
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  The UK provides several opportunities for international students to gain work experience during and after their studies:
                </p>
                <div className="space-y-4">
                  <div className="p-5 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">During Studies</h4>
                    <p className="text-gray-700">Work up to 20 hours per week during term time and full-time during holidays</p>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Graduate Route Visa</h4>
                    <p className="text-gray-700">2 years for Bachelor's/Master's graduates, 3 years for PhD graduates</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-100 to-red-100/50 p-5 rounded-2xl shadow-sm">
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
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://dunyaconsultants.com/2024/12/27/uk-student-visa-ratio-from-pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      UK Visa Ratio from Pakistan
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a 
                    href="https://dunyaconsultants.com/blog/uk-immigration-white-paper-2025-what-it-means-for-visas-and-settlement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1642a8] hover:to-[#14398a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                      UK Immigration White Paper 2025
                      <ExternalLink className="w-4 h-4 ml-2" />
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
