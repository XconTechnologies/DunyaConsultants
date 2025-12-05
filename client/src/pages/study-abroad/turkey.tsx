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
  Shield,
  Heart,
  Stethoscope
} from "lucide-react";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";
import ApplicationForm from "@/components/ApplicationForm";

export default function StudyAbroadTurkey() {
  useEffect(() => {
    setStaticPageMeta(
      "Study in Turkey with Dunya Consultants: Your Path to Global Education",
      "Explore studying in Turkey with Dunya Consultants. Scholarships, affordable tuition fees, and no IELTS requirement. Apply for your student visa today!",
      "/uploads/articles/study-in-turkey_1764218954918.jpg"
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

  const stats = [
    { icon: Building, label: "Partner Universities", value: "13", color: "from-blue-500 to-cyan-500" },
    { icon: Users, label: "Int'l Students", value: "200K+", color: "from-purple-500 to-pink-500" },
    { icon: Award, label: "Scholarships", value: "Full Funded", color: "from-orange-500 to-red-500" },
    { icon: Briefcase, label: "Avg. Salary", value: "$30K+", color: "from-green-500 to-emerald-500" }
  ];

  const whyStudyTurkey = [
    { icon: Globe, title: "World-Class Education", desc: "Top universities like Boğaziçi & Koç" },
    { icon: Rocket, title: "East Meets West", desc: "Unique blend of cultures & opportunities" },
    { icon: Target, title: "English Programs", desc: "Wide range of English-taught courses" },
    { icon: Briefcase, title: "Work Opportunities", desc: "Post-study work & internship options" },
    { icon: Users, title: "Cultural Heritage", desc: "Rich history & vibrant student life" },
    { icon: TrendingUp, title: "Affordable Fees", desc: "Lower costs than Europe or US" }
  ];

  const universities = [
    "Atlas University",
    "Arel University",
    "Isik University",
    "Gelisim University",
    "Altinbas University",
    "Kultur University",
    "Beykoz University",
    "Beykent University",
    "Uskudar University",
    "Halic University",
    "Dogus University",
    "Aydin University",
    "Bahçeşehir University"
  ];

  const popularCourses = [
    { name: "Engineering", demand: "Very High" },
    { name: "Medicine (MBBS)", demand: "Very High" },
    { name: "Business Administration", demand: "High" },
    { name: "Computer Science", demand: "Very High" },
    { name: "Architecture", demand: "High" },
    { name: "Dentistry", demand: "High" },
    { name: "International Relations", demand: "High" },
    { name: "Tourism Management", demand: "High" },
    { name: "Economics", demand: "High" }
  ];

  const faqs = [
    {
      question: "How Much Does It Cost to Study in Turkey from Pakistan?",
      answer: "The cost of studying in Turkey ranges from €1,000 to €7,000 per year for tuition fees. Living expenses can range from €400 to €700 per month depending on the city."
    },
    {
      question: "Can I Study Medicine in Turkey?",
      answer: "Yes, Turkey offers medical programs (MBBS) at an affordable cost compared to many countries. Tuition fees range from €5,000 to €15,000 per year, and many universities offer courses in English."
    },
    {
      question: "How Can I Get a Scholarship to Study in Turkey?",
      answer: "You can apply for scholarships through the Turkish government's Türkiye Scholarships program or directly from Turkish universities that offer merit-based or need-based scholarships."
    },
    {
      question: "How to Study in Turkey Without IELTS?",
      answer: "Many universities in Turkey offer programs in English without requiring IELTS. You can submit proof of previous education in English or take an alternative English proficiency test like TOEFL, PTE, or Duolingo."
    },
    {
      question: "What Are the Requirements to Study in Turkey?",
      answer: "To study in Turkey, you need an acceptance letter from a Turkish university, proof of financial support, a valid passport, and proof of English proficiency (if required)."
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
              <Star className="w-10 h-10 sm:w-12 sm:h-12 relative z-10" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Study in <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-pulse">Turkey</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              Your Path to High-Quality Education & Career Opportunities
            </p>
            
            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                13 Partner Universities
              </Badge>
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Türkiye Scholarships
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
                  1,000+
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
                  Top Institutions
                </div>
              </CardContent>
            </Card>

            {/* Tuition Fees */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-tuition">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  €1,000
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Min Tuition/Year
                </div>
                <div className="text-xs text-gray-500">
                  Affordable Education
                </div>
              </CardContent>
            </Card>

            {/* Visa Success */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-visa">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  95%
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Visa Success Rate
                </div>
                <div className="text-xs text-gray-500">
                  Proven Track Record
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Turkey?</h2>
                    <p className="text-gray-600">Transform Your Future with Turkish Excellence</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Turkey is becoming a leading destination for international students, offering world-class education, a rich cultural heritage, and diverse career opportunities. For Pakistani students, studying in Turkey presents an exciting opportunity to pursue high-quality academic programs at affordable costs.
                  </p>
                  <p>
                    Turkey is home to several universities that are recognized globally, including Boğaziçi University, Koç University, and Istanbul Technical University. Turkish universities offer a broad range of courses in English and are highly respected for their academic standards.
                  </p>
                </div>
                {/* Strategic Internal Link - Turkey Burslari */}
                <div className="mt-6 flex justify-center">
                  <a href="https://dunyaconsultants.com/2024/11/19/a-complete-guide-to-turkey-burslari-scholarship" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#0d2a5e] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      Complete Guide to Turkey Burslari Scholarship
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Why Study in Turkey - Modern Icon Grid */}
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white" data-testid="why-study-turkey-card">
              <CardHeader className="bg-gradient-to-r from-[#1D50C9]/5 to-transparent border-b border-blue-100">
                <CardTitle className="text-2xl sm:text-3xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  Why Study in Turkey
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Turkey is an increasingly popular destination for students worldwide due to its high-quality education system, affordable living costs, and welcoming culture.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyStudyTurkey.map((reason, index) => (
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
                  Study in Turkey Without IELTS & PTE
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed font-semibold text-lg text-orange-700">
                  ✓ IELTS and PTE are NOT Required!
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Turkish universities accept students without IELTS or PTE scores. You can apply directly with proof of English proficiency through alternative methods:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {["MOI Letter", "Duolingo", "TOEFL", "University Test", "Previous Education", "Language Certificate"].map((option, index) => (
                    <div key={index} className="group relative" data-testid={`admission-option-${index}`}>
                      <div className="relative bg-white p-4 rounded-2xl text-center shadow-[0_2px_8px_rgba(249,115,22,0.2)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300">
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm">{option}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-red-100/50 p-5 rounded-2xl shadow-sm">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-gray-900">✓ No University or Embassy Interview Required</strong><br />
                    <span className="text-gray-600">The application process is straightforward - submit your documents, get accepted, and apply for your visa. No interviews needed at the university or embassy!</span>
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
                <p className="text-white/90 mt-2">Understand the investment needed for your Turkish education</p>
              </div>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The cost of studying in Turkey is affordable compared to many other study destinations:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: GraduationCap, title: "Bachelor Programs (Annually)", desc: "$3,500 onwards | Initial Deposit: $1,000", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: Award, title: "Master's Programs (Whole Program)", desc: "$3,500 onwards | Initial Deposit: $1,000–$2,500", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: Building, title: "Bank Statement Requirement", desc: "$7,000 (Can be from Parents, Siblings, or Relatives) - Sponsor must be a filer", color: "from-[#1D50C9] to-[#1845B3]" }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300" data-testid={`cost-item-${index}`}>
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

            {/* Work Opportunities - Modern Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-white to-blue-50/30" data-testid="work-opportunities-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  Work While Studying in Turkey
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Turkey offers excellent work opportunities for international students to earn while studying and gain valuable work experience:
                </p>
                
                {/* Work Hours Section */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#1D50C9]" />
                    Permitted Work Hours
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="group p-5 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.2)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.4)] transition-all duration-300" data-testid="bachelor-work-hours">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900">Bachelor Students</h4>
                      </div>
                      <p className="text-gray-700 mb-2"><span className="font-semibold text-[#1D50C9]">20 hours per week</span></p>
                      <p className="text-xs text-gray-600 italic">*First year officially not allowed</p>
                    </div>
                    
                    <div className="group p-5 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.2)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.4)] transition-all duration-300" data-testid="master-work-hours">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900">Master Students</h4>
                      </div>
                      <p className="text-gray-700"><span className="font-semibold text-[#1D50C9]">30 hours per week</span></p>
                    </div>
                  </div>
                </div>

                {/* Job Opportunities Section */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#1D50C9]" />
                    Popular Job Opportunities
                  </h3>
                  <p className="text-gray-600 mb-4">More opportunities available for those with good English language skills:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Call Center", "Tourism Department", "Hospitality & Hoteling", "Skill-Based Jobs", "Customer Service", "English Tutoring"].map((job, index) => (
                      <div key={index} className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300" data-testid={`job-option-${index}`}>
                        <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{job}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wages Section */}
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#1D50C9]" />
                    Wage Range
                  </h3>
                  <div className="space-y-3">
                    <div className="p-5 bg-gradient-to-r from-blue-100 to-blue-100/50 rounded-2xl shadow-sm" data-testid="minimum-wage">
                      <p className="text-gray-700 font-medium">
                        <strong className="text-gray-900">Minimum Wage:</strong><br />
                        <span className="text-lg font-bold text-[#1D50C9]">20,000 - 22,000 Turkish Lira</span><br />
                        <span className="text-sm text-gray-600">($680 - $700 USD)</span>
                      </p>
                    </div>
                    <div className="p-5 bg-gradient-to-r from-blue-100 to-blue-100/50 rounded-2xl shadow-sm" data-testid="maximum-wage">
                      <p className="text-gray-700 font-medium">
                        <strong className="text-gray-900">Maximum Wage:</strong><br />
                        <span className="text-lg font-bold text-[#1D50C9]">30,000 - 40,000 Turkish Lira</span><br />
                        <span className="text-sm text-gray-600">($1,500 - $2,000 USD)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Study Medicine in Turkey - Special Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-white to-blue-50/30" data-testid="medicine-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  Study Medicine and MBBS in Turkey
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Turkey is an increasingly popular destination for international students wishing to study medicine (MBBS). Here's why you should consider studying medicine in Turkey:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">Affordable Tuition</h4>
                    </div>
                    <p className="text-gray-700">Tuition fees ranging from <span className="font-bold text-[#1D50C9]">€5,000 to €15,000</span> per year</p>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">High-Quality Programs</h4>
                    </div>
                    <p className="text-gray-700">Universities like <span className="font-bold text-[#1D50C9]">Istanbul & Hacettepe</span> offer internationally recognized programs</p>
                  </div>
                </div>
                {/* Strategic Internal Link - Best Universities */}
                <div className="mt-6 flex justify-center">
                  <a href="https://dunyaconsultants.com/blog/best-universities-in-turkey-for-international-students" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#0d2a5e] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      Best Universities in Turkey for International Students
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Intake Dates - Modern Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-white to-purple-50/30" data-testid="intake-dates-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  Intake Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Turkish universities offer multiple intake periods throughout the year to accommodate international students:
                </p>
                
                <div className="space-y-4">
                  {[
                    { 
                      title: "Fall Intake", 
                      month: "September",
                      programs: "Bachelor & Masters",
                      icon: "🍂"
                    },
                    { 
                      title: "Spring Intake", 
                      month: "January",
                      programs: "Bachelor & Masters",
                      icon: "🌸"
                    },
                    { 
                      title: "Short Intake", 
                      month: "Throughout Year",
                      programs: "Masters Only",
                      icon: "⚡"
                    }
                  ].map((intake, index) => (
                    <div key={index} className="group p-6 bg-gradient-to-br from-purple-50 to-indigo-50/50 rounded-2xl shadow-[0_2px_8px_rgba(147,51,234,0.15)] hover:shadow-[0_6px_16px_rgba(147,51,234,0.3)] transition-all duration-300" data-testid={`intake-item-${index}`}>
                      <div className="flex items-start gap-4">
                        <div className="text-3xl mt-1">{intake.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{intake.title}</h3>
                          <p className="text-gray-600 mb-2 flex items-center gap-2">
                            <span className="font-semibold text-[#1D50C9]">{intake.month}</span>
                          </p>
                          <p className="text-sm text-gray-700 bg-white/60 inline-block px-3 py-1 rounded-lg font-medium">
                            {intake.programs}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-purple-100 to-indigo-100/50 rounded-2xl shadow-sm border-l-4 border-purple-500">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-gray-900">💡 Pro Tip:</strong><br />
                    <span className="text-gray-600">Apply 3-4 months before your preferred intake date to ensure sufficient time for visa processing and document preparation. Early applications may also increase scholarship opportunities.</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Visa Application Process */}
            <Card className="border-0 shadow-lg overflow-hidden bg-white" data-testid="visa-process-card">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-50/50 border-b border-blue-100">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  How to Apply for a Study Visa in Turkey
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  To study in Turkey, you need a study visa (or student residence permit). Here's the process:
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Get Accepted into a Turkish University", desc: "Submit your application documents and meet the university's admission requirements" },
                    { step: "2", title: "Prepare Required Documents", desc: "Acceptance letter, passport, proof of financial resources, passport-sized photos, and health insurance" },
                    { step: "3", title: "Apply for the Visa", desc: "Submit your application at the Turkish consulate in Pakistan. Visa fee is typically USD 60-100" },
                    { step: "4", title: "Wait for Processing", desc: "The visa process can take a few weeks, so apply early and plan ahead" }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Required Documents for Visa - Comprehensive Card */}
            <Card className="border-0 shadow-lg overflow-hidden bg-white" data-testid="required-documents-card">
              <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="w-8 h-8" />
                  Required Documents for Turkey Student Visa
                </CardTitle>
                <p className="text-white/90 mt-2">Complete checklist of all documents needed for your visa application</p>
              </div>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Ensure you have all required documents ready before submitting your visa application at the Turkish consulate:
                </p>
                
                <div className="space-y-6">
                  {/* Personal Documents */}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#1D50C9] text-white text-xs font-bold flex items-center justify-center">1</div>
                      Personal Documents
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {["Valid Passport", "2 White Background Pictures (5x5)", "NTN Number"].map((doc, index) => (
                        <div key={index} className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-[0_2px_8px_rgba(29,80,201,0.1)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.2)] transition-all duration-300" data-testid={`personal-doc-${index}`}>
                          <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Financial Documents */}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#1D50C9] text-white text-xs font-bold flex items-center justify-center">2</div>
                      Financial Documents
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {["Bank Statement (20 Lac)", "Bank Maintenance Certificate", "2 Year Tax Returns", "Fee Receipt"].map((doc, index) => (
                        <div key={index} className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-[0_2px_8px_rgba(29,80,201,0.1)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.2)] transition-all duration-300" data-testid={`financial-doc-${index}`}>
                          <DollarSign className="w-5 h-5 text-[#1D50C9] flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Employment/Business Documents */}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#1D50C9] text-white text-xs font-bold flex items-center justify-center">3</div>
                      Employment/Business Documents
                    </h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-gray-700 font-medium text-sm">
                          <strong className="text-[#1D50C9]">For Job Applicants:</strong> Employment Letter & 3 Months Salary Slip
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-gray-700 font-medium text-sm">
                          <strong className="text-[#1D50C9]">For Business Owners:</strong> Business Letterhead
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* University & Support Documents */}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#1D50C9] text-white text-xs font-bold flex items-center justify-center">4</div>
                      University & Support Documents
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {["Final Acceptance Letter", "FRC (Financial Requirement Certificate)", "Affidavit of Support"].map((doc, index) => (
                        <div key={index} className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-[0_2px_8px_rgba(29,80,201,0.1)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.2)] transition-all duration-300" data-testid={`support-doc-${index}`}>
                          <GraduationCap className="w-5 h-5 text-[#1D50C9] flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Travel & Application Documents */}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#1D50C9] text-white text-xs font-bold flex items-center justify-center">5</div>
                      Travel & Application Documents
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {["One Way Flight Reservation", "Hotel Reservation", "Visa Application Form (Filled at Anatolia Office)", "Cover Letter", "Supporting Email"].map((doc, index) => (
                        <div key={index} className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-[0_2px_8px_rgba(29,80,201,0.1)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.2)] transition-all duration-300" data-testid={`travel-doc-${index}`}>
                          <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-blue-100 to-blue-100/50 rounded-2xl shadow-sm border-l-4 border-[#1D50C9]">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-gray-900">📋 Important Note:</strong><br />
                    <span className="text-gray-600">Have all documents prepared well in advance. The visa application form should be filled at the Anatolia Office. Keep copies of all documents for your records. Missing or incomplete documents may delay your visa processing.</span>
                  </p>
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
                  How to Study in Turkey for Free
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  While studying for free in Turkey is rare, there are several scholarships available to help cover tuition and living expenses:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Türkiye Scholarships (Fully Funded)",
                    "University-Specific Scholarships",
                    "Merit-Based Scholarships",
                    "Need-Based Financial Aid",
                    "Research Assistantships",
                    "Private Foundation Scholarships"
                  ].map((option, index) => (
                    <div key={index} className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(249,115,22,0.2)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300" data-testid={`scholarship-option-${index}`}>
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{option}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gradient-to-r from-orange-100 to-red-100/50 p-5 rounded-2xl shadow-sm">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-gray-900">Türkiye Scholarships Program</strong><br />
                    <span className="text-gray-600">The Turkish government offers this fully-funded scholarship that covers tuition fees, accommodation, health insurance, and a monthly stipend for international students.</span>
                  </p>
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
                  Top programs chosen by international students for their career potential:
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
                      Best Turkey Study Visa Consultants
                    </CardTitle>
                    <p className="text-white/80 text-sm">Expert Guidance for Your Turkish Dream</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative p-6 sm:p-8">
                <p className="text-white/95 mb-8 leading-relaxed text-base md:text-lg">
                  Dunya Consultants is recognized as one of the <strong className="text-white font-bold">best consultants for Turkey study visa in Pakistan</strong>. Our expert team provides comprehensive support:
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
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 border-0 text-lg">
                      Contact Us Today
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
                  Ready to start your Turkey study journey? Our expert consultants are here to help you every step of the way.
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
                    { label: "Visa Type", value: "Student Residence" },
                    { label: "English Test", value: "IELTS/TOEFL/PTE" },
                    { label: "Tuition Range", value: "$3.5K - $16K/year" },
                    { label: "Living Cost", value: "$440-770/month" },
                    { label: "Scholarship", value: "Türkiye Burslari" }
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
