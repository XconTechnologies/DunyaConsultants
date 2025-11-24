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
  Star,
  Sparkles,
  Clock,
  Target,
  Rocket,
  Shield
} from "lucide-react";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";
import ApplicationForm from "@/components/ApplicationForm";

export default function StudyAbroadUSA() {
  useEffect(() => {
    setStaticPageMeta(
      "Study in USA from Pakistan - Complete Guide 2024 | Dunya Consultants",
      "Complete guide to study in USA from Pakistan. Learn about USA student visa requirements, costs, scholarships, top universities, work opportunities, and expert guidance from best USA study visa consultants.",
      "/objects/uploads/study-in-the-usa_1763961982261_811b2918.webp"
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

  const stats = [
    { icon: Building, label: "Universities", value: "5,000+", color: "from-blue-500 to-cyan-500" },
    { icon: Users, label: "Students Globally", value: "1M+", color: "from-purple-500 to-pink-500" },
    { icon: Award, label: "Scholarships", value: "$100B+", color: "from-orange-500 to-red-500" },
    { icon: Briefcase, label: "Avg. Salary", value: "$70K+", color: "from-green-500 to-emerald-500" }
  ];

  const whyStudyUSA = [
    { icon: Globe, title: "Global Recognition", desc: "Degrees accepted worldwide" },
    { icon: Rocket, title: "Innovation Hub", desc: "Access to cutting-edge technology" },
    { icon: Target, title: "Flexible Programs", desc: "Customize your education path" },
    { icon: Briefcase, title: "Job Opportunities", desc: "Strong internship & career market" },
    { icon: Users, title: "Diverse Culture", desc: "Multicultural learning environment" },
    { icon: TrendingUp, title: "Career Growth", desc: "Better settlement opportunities" }
  ];

  const universities = [
    "Avila University",
    "LIM College",
    "Herzing University",
    "Webster University",
    "Massachusetts Institute of Technology (MIT)",
    "Stanford University",
    "Harvard University",
    "California Institute of Technology",
    "University of California, Berkeley",
    "Columbia University"
  ];

  const popularCourses = [
    { name: "Engineering", demand: "High" },
    { name: "Computer Science", demand: "Very High" },
    { name: "Business Administration", demand: "High" },
    { name: "Data Science", demand: "Very High" },
    { name: "Economics", demand: "Medium" },
    { name: "Nursing", demand: "High" },
    { name: "Media Studies", demand: "Medium" },
    { name: "Cybersecurity", demand: "Very High" },
    { name: "Artificial Intelligence", demand: "Very High" }
  ];

  const faqs = [
    {
      question: "How can I study in the USA from Pakistan?",
      answer: "Pakistani students can study in the USA by applying to an accredited university, securing an I-20, paying the SEVIS fee, preparing financial documents, and attending the F1 visa interview. Working with an experienced consultant like Dunya Consultants helps students complete all steps correctly and increase their visa approval chances."
    },
    {
      question: "How much money is required to study in the USA for Pakistani students?",
      answer: "The required money depends on the university and city, but students generally need enough funds to cover one year of tuition and living expenses. Financial proof includes a bank statement, sponsor letter and fee documentation. Dunya Consultants guides students on accurate budgeting and required financial documents."
    },
    {
      question: "Can I study in the USA without IELTS?",
      answer: "Yes, many USA universities accept students without IELTS. Students can apply using PTE, Duolingo, TOEFL, or a medium of instruction letter depending on the university's policy. PTE is accepted for the USA study visa in many cases."
    },
    {
      question: "How much study gap is acceptable in the USA?",
      answer: "The USA is flexible with study gaps. A gap of up to five years is usually acceptable for bachelors and up to ten years for masters if supported by valid reasons such as work experience, skills development or personal responsibilities."
    },
    {
      question: "Can a Pakistani student get PR or a green card after studying in the USA?",
      answer: "Yes, students can eventually get PR after studying in the USA through pathways like the H1B skilled work visa, employer sponsorship or exceptional talent categories. Many Pakistani graduates successfully settle in the USA after gaining professional experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <Navigation />
      
      {/* Modern Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#0d2a5e] text-white pt-32 pb-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Icon with Glow Effect */}
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-xl rounded-3xl mb-6 border border-white/20 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl group-hover:scale-110 transition-transform duration-500"></div>
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 relative z-10" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Study in <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-pulse">USA</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              Your Gateway to World-Class Education & Global Career Opportunities
            </p>
            
            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                5,000+ Universities
              </Badge>
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                F1 Visa Support
              </Badge>
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Post Study Work Opportunities
              </Badge>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <CalendlyButton
                text="Book Free Consultation"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 hover:scale-105 px-8 py-4 text-lg font-semibold shadow-2xl transition-all duration-300"
                size="lg"
                showIcon={false}
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 hover:scale-105 transition-all duration-300 shadow-xl"
                onClick={() => setIsPopupOpen(true)}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Application
              </Button>
            </div>
          </div>
        </div>

      </section>

      {/* Homepage Stats Cards Section - Overlapping */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Students Placed */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-students">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  2,500+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Students Placed
                </div>
                <div className="text-xs text-gray-500">
                  Success Stories
                </div>
              </CardContent>
            </Card>

            {/* University Partners */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-partners">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  University Partners
                </div>
                <div className="text-xs text-gray-500">
                  Global Network
                </div>
              </CardContent>
            </Card>

            {/* Countries Covered */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-countries">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  15+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Countries Covered
                </div>
                <div className="text-xs text-gray-500">
                  Global Reach
                </div>
              </CardContent>
            </Card>

            {/* Expert Counselors */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-counselors">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  200+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Expert Counselors
                </div>
                <div className="text-xs text-gray-500">
                  Professional Team
                </div>
              </CardContent>
            </Card>
          </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction - Modern Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm" data-testid="introduction-card">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose USA?</h2>
                    <p className="text-gray-600">Transform Your Future with American Education</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Studying in the USA is one of the smartest decisions a Pakistani student can make for their future. The United States offers world-class education, global career opportunities, and a multicultural learning environment that helps students grow personally and professionally.
                  </p>
                  <p>
                    Pakistani students choose the USA because it provides flexible courses, strong post-study work options, and a clear pathway toward long-term settlement. This complete guide explains how to study in the USA from Pakistan, costs, requirements, and visa processes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Why Study in USA - Modern Icon Grid */}
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white" data-testid="why-study-usa-card">
              <CardHeader className="bg-gradient-to-r from-[#1D50C9]/5 to-transparent border-b border-blue-100">
                <CardTitle className="text-2xl sm:text-3xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  Why Study in USA
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  The USA offers world-recognized degrees, excellent job opportunities, practical learning, and huge scholarships for international students.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyStudyUSA.map((reason, index) => (
                    <div 
                      key={index} 
                      className="group p-5 bg-white rounded-2xl hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300 cursor-pointer"
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
                          <p className="text-sm text-gray-600">
                            {reason.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Without IELTS - Modern Pill Design */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 via-white to-orange-50/30" data-testid="study-without-ielts-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  Study in USA Without IELTS
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Many American universities accept students without IELTS. Here are your alternatives:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {["PTE", "Duolingo", "TOEFL", "MOI Letter"].map((test, index) => (
                    <div key={index} className="group relative" data-testid={`test-option-${index}`}>
                      <div className="relative bg-white p-4 rounded-2xl text-center hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{test}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-red-100/50 p-5 rounded-2xl shadow-sm">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-gray-900">Is PTE accepted in USA for study visa?</strong><br />
                    <span className="text-gray-600">Yes, PTE is accepted in USA by many universities and is valid for the F1 visa.</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cost Requirements - Modern Financial Card */}
            <Card className="border-0 shadow-lg overflow-hidden bg-white" data-testid="cost-requirements-card">
              <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <DollarSign className="w-8 h-8" />
                  Financial Requirements
                </CardTitle>
                <p className="text-white/90 mt-2">Understand the investment needed for your US education</p>
              </div>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Students need to show financial support to cover tuition and living costs for at least one year.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: GraduationCap, title: "Tuition Fees", desc: "Varies by institution type - community colleges are more affordable", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: Building, title: "Living Expenses", desc: "Accommodation, food, health insurance, and transportation", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: FileText, title: "Financial Proof", desc: "Bank statements and sponsor documentation required", color: "from-[#1D50C9] to-[#1845B3]" }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300" data-testid={`cost-item-${index}`}>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1.5 text-lg">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* GPA Requirements - Clean Modern Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-white to-blue-50/30" data-testid="gpa-requirements-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  Academic Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
                  <Star className="w-12 h-12 text-[#1D50C9] flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Most universities accept students with a minimum GPA of <span className="font-bold text-[#1D50C9]">2.5 to 3.5</span>, depending on the program.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Competitive courses like engineering or medicine may require higher grades.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Study Gap - Split Design */}
            <Card className="border-0 shadow-lg overflow-hidden bg-white" data-testid="study-gap-card">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-50/50 border-b border-blue-100">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  Study Gap Acceptance
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  USA universities are highly flexible with study gaps:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">Bachelor's</h4>
                    </div>
                    <p className="text-gray-700">Up to <span className="font-bold text-orange-700">2-5 years gap</span> is acceptable</p>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
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

            {/* Scholarships - Premium Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 via-white to-orange-50/30" data-testid="scholarships-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  Free Study in USA
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Students can study in the USA at very low cost or almost free through various funding opportunities:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Merit Scholarships",
                    "Need-based Grants",
                    "External Funding",
                    "Research Assistantships",
                    "Teaching Assistantships",
                    "University Scholarships"
                  ].map((option, index) => (
                    <div key={index} className="group flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300" data-testid={`scholarship-option-${index}`}>
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{option}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Courses - Modern Grid with Demand Indicator */}
            <Card className="border-0 shadow-lg bg-white" data-testid="popular-courses-card">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-50/50 border-b border-blue-100">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  Popular Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Top programs chosen by Pakistani students for their high earning potential:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {popularCourses.map((course, index) => (
                    <div key={index} className={`group relative overflow-hidden p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl transition-all duration-300 ${
                      course.demand === 'Very High' ? 'hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)]' :
                      course.demand === 'High' ? 'hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)]' : 
                      'hover:shadow-lg'
                    }`} data-testid={`course-card-${index}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#1D50C9] transition-colors">
                          {course.name}
                        </h3>
                        <Badge className={`${
                          course.demand === 'Very High' ? 'bg-orange-500' :
                          course.demand === 'High' ? 'bg-[#1D50C9]' :
                          'bg-gray-500'
                        } text-white text-xs px-2 py-1`}>
                          {course.demand}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Universities - Premium List */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 via-white to-gray-50/30" data-testid="universities-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  Top Universities
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-3">
                  {universities.map((university, index) => (
                    <div key={index} className="group flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300" data-testid={`university-item-${index}`}>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                        <Building className="w-4 h-4 text-[#1D50C9]" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{university}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Best Consultant - Premium Highlight Card */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#0d2a5e] overflow-hidden relative" data-testid="consultant-card">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
              <CardHeader className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl text-white mb-1">
                      Best USA Study Visa Consultants
                    </CardTitle>
                    <p className="text-white/80 text-sm">Expert Guidance for Your American Dream</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative p-6 sm:p-8">
                <p className="text-white/95 mb-8 leading-relaxed text-base md:text-lg">
                  Dunya Consultants is recognized as one of the <strong className="text-white font-bold">best consultants for USA study visa in Pakistan</strong>. Our expert team provides comprehensive support:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Target, text: "University Selection" },
                    { icon: FileText, text: "Application Processing" },
                    { icon: Award, text: "Scholarship Guidance" },
                    { icon: Shield, text: "Visa File Preparation" },
                    { icon: Users, text: "Interview Coaching" },
                    { icon: Rocket, text: "Pre-Departure Briefing" }
                  ].map((service, index) => (
                    <div key={index} className="group flex items-start gap-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <service.icon className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                      <span className="text-white font-medium">{service.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link href="/blog/best-usa-student-visa-consultants">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 border-0 text-lg">
                      Read Our Complete Guide
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* FAQs - Modern Accordion */}
            <Card className="border-0 shadow-lg bg-white" data-testid="faqs-card">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                <CardTitle className="text-2xl sm:text-3xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="group border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#1D50C9]/30 transition-all duration-300"
                      data-testid={`faq-item-${index}`}
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 bg-white hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1D50C9]/10 to-[#1845B3]/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="font-bold text-[#1D50C9]">{index + 1}</span>
                          </div>
                          <span className="font-semibold text-gray-900 text-base sm:text-lg group-hover:text-[#1D50C9] transition-colors">
                            {faq.question}
                          </span>
                        </div>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center transition-transform duration-300 ${expandedFaq === index ? 'rotate-180 bg-[#1D50C9]' : ''}`}>
                          <ChevronDown className={`w-5 h-5 ${expandedFaq === index ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 bg-gradient-to-br from-blue-50/50 to-white">
                          <div className="pl-12 pr-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar - Sticky Modern Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Quick Contact Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] text-white sticky top-24" data-testid="quick-contact-card">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Get Expert Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Ready to start your USA study journey? Our expert consultants are here to help you every step of the way.
                </p>
                <div className="space-y-3">
                  <CalendlyButton
                    text="Book Free Consultation"
                    className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                    size="lg"
                    showIcon={false}
                  />
                  <Button 
                    className="w-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30 font-semibold shadow-lg"
                    size="lg"
                    onClick={() => setIsPopupOpen(true)}
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Application
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts Card */}
            <Card className="border-0 shadow-lg bg-white sticky top-[430px]" data-testid="quick-facts-card">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#1D50C9]" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { label: "Visa Type", value: "F1 Student Visa" },
                    { label: "English Test", value: "IELTS/PTE/TOEFL" },
                    { label: "Min. GPA", value: "2.5 - 3.5" },
                    { label: "Study Gap", value: "Up to 10 years" },
                    { label: "Work Rights", value: "CPT & OPT" }
                  ].map((fact, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-sm text-gray-600 font-medium">{fact.label}</span>
                      <span className="text-sm text-gray-900 font-semibold">{fact.value}</span>
                    </div>
                  ))}
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
