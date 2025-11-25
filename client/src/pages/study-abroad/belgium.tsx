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
  Calendar,
  Users,
  Zap,
  Award,
  Briefcase,
  BookOpen,
  Building,
  ChevronDown,
  Clock,
  Shield,
  Star,
  Sparkles,
  Rocket,
  Target,
  Castle,
  Home,
  MapPin
} from "lucide-react";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";

export default function StudyAbroadBelgium() {
  useEffect(() => {
    setStaticPageMeta(
      "Study in Belgium with Dunya Consultants: Your Path to Global Education",
      "Explore study opportunities in Belgium with Dunya Consultants. Scholarships, affordable tuition, and no IELTS requirements. Apply for your study visa today!",
      "/uploads/study-in-belgium.jpg"
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

  const whyStudyBelgium = [
    { icon: Building, title: "World-Class Education", desc: "Home to top universities like KU Leuven, Ghent University, and University of Brussels" },
    { icon: Globe, title: "English-Taught Programs", desc: "Wide range of Bachelor's and Master's programs taught entirely in English" },
    { icon: Users, title: "Multicultural Environment", desc: "Heart of Europe offering a melting pot of cultures and enriching experiences" },
    { icon: DollarSign, title: "Affordable Tuition", desc: "Lower tuition fees compared to UK or US with reasonable living costs" },
    { icon: Briefcase, title: "Post-Study Work Permits", desc: "Gain valuable work experience with post-graduation work opportunities" },
    { icon: MapPin, title: "Central EU Location", desc: "Gateway to European job market and travel opportunities" }
  ];

  const universities = [
    "KU Leuven",
    "Ghent University",
    "University of Brussels (VUB)",
    "Université Libre de Bruxelles",
    "University of Antwerp",
    "Hasselt University",
    "University of Liège",
    "UCLouvain",
    "Vrije Universiteit Brussel",
    "Solvay Brussels School"
  ];

  const popularCourses = [
    { name: "Engineering", demand: "Very High" },
    { name: "Computer Science", demand: "Very High" },
    { name: "Business & Management", demand: "High" },
    { name: "Law", demand: "High" },
    { name: "Medicine", demand: "Very High" },
    { name: "Architecture", demand: "High" },
    { name: "Dentistry", demand: "High" },
    { name: "Environmental Science", demand: "High" },
    { name: "International Relations", demand: "High" }
  ];

  const faqs = [
    {
      question: "How Much Does It Cost to Study in Belgium from Pakistan?",
      answer: "The cost of studying in Belgium varies from €900 to €8,000 per year for tuition, depending on the program. Living expenses range from €700 to €1,200 per month."
    },
    {
      question: "Can I Study in Belgium Without IELTS?",
      answer: "Yes, many Belgian universities offer programs that do not require IELTS. You can submit alternative proof of English proficiency such as TOEFL, PTE, Duolingo, or a Medium of Instruction letter."
    },
    {
      question: "How to Apply for a Study Visa in Belgium?",
      answer: "After receiving your university offer, you can apply for a student visa (Type D) by submitting your acceptance letter, proof of funds, passport, health insurance, and other required documents to the Belgian embassy."
    },
    {
      question: "What Are the Requirements to Study in Belgium?",
      answer: "The general requirements include an acceptance letter from a Belgian university, proof of sufficient financial support (€670/month), a valid passport, and proof of English proficiency (if required)."
    },
    {
      question: "How Can I Get Permanent Residency in Belgium After Study?",
      answer: "After completing your studies, you may be eligible for a post-study work permit. After working in Belgium for a certain period, you can apply for permanent residency."
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
              <Castle className="w-10 h-10 sm:w-12 sm:h-12 relative z-10" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Study in <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-pulse">Belgium</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              Your Path to High-Quality Education and Global Career Opportunities
            </p>
            
            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                15+ Universities
              </Badge>
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                No IELTS Options
              </Badge>
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Castle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Heart of Europe
              </Badge>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <CalendlyButton
                text="Book Free Consultation"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 font-bold px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                size="lg"
                showIcon={false}
              />
              <Button 
                size="lg"
                onClick={() => setIsPopupOpen(true)}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Connect Now
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">Culture • Quality • Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {/* Tuition Fees */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-tuition">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  €900-€8K
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Yearly Tuition
                </div>
                <div className="text-xs text-gray-500">
                  Affordable Education
                </div>
              </CardContent>
            </Card>

            {/* Living Cost */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-living">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  €700-€1.2K
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Monthly Living
                </div>
                <div className="text-xs text-gray-500">
                  Reasonable Costs
                </div>
              </CardContent>
            </Card>

            {/* Universities */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-universities">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  15+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Top Universities
                </div>
                <div className="text-xs text-gray-500">
                  World-Class Institutions
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Study in Belgium?</h2>
                    <p className="text-gray-600">Your Gateway to European Excellence and Career Growth</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Belgium offers world-class education and a vibrant multicultural environment, making it an increasingly popular destination for international students, including those from Pakistan. Whether you're pursuing a Bachelor's, Master's, or professional degree, Belgium provides various opportunities across diverse fields.
                  </p>
                  <p>
                    Belgium is home to some of Europe's top universities, including KU Leuven, Ghent University, and the University of Brussels. Known for their strong academic reputation and international programs, Belgian universities offer students the chance to pursue education in engineering, law, medicine, business, and more.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Link href="/study-abroad">
                      <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#0d2a5e] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Explore All Study Destinations
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Study in Belgium - Modern Icon Grid */}
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white" data-testid="why-study-belgium-card">
              <CardHeader className="bg-gradient-to-r from-[#1D50C9]/5 to-transparent border-b border-blue-100">
                <CardTitle className="text-2xl sm:text-3xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  Why Study in Belgium
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Belgium offers a unique blend of high-quality education, rich cultural heritage, and excellent career opportunities for international students.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyStudyBelgium.map((reason, index) => (
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
                  Study in Belgium Without IELTS
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Many Belgian universities allow international students to study without IELTS if they meet other criteria. Here's how to study in Belgium without IELTS:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {["TOEFL", "PTE", "Duolingo", "MOI Letter"].map((test, index) => (
                    <div key={index} className="group relative" data-testid={`test-option-${index}`}>
                      <div className="relative bg-white p-4 rounded-2xl text-center shadow-[0_2px_8px_rgba(249,115,22,0.2)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{test}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-red-100/50 p-5 rounded-2xl shadow-sm">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-gray-900">University-Specific Tests Available</strong><br />
                    <span className="text-gray-600">If you have completed your previous education in English, you may be able to skip IELTS by providing a Medium of Instruction (MOI) letter. Some universities also offer their own English proficiency tests.</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cost Requirements - Modern Financial Card */}
            <Card className="border-0 shadow-lg overflow-hidden bg-white" data-testid="cost-requirements-card">
              <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <DollarSign className="w-8 h-8" />
                  How Much Does It Cost to Study in Belgium?
                </CardTitle>
                <p className="text-white/90 mt-2">Understand the investment needed for your Belgian education</p>
              </div>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The cost of studying in Belgium can vary depending on the level of study and the university. Here's a breakdown of typical costs:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: GraduationCap, title: "Bachelor's Programs", desc: "€900–€4,000 per year (for non-EU students)", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: Award, title: "Master's Programs", desc: "€1,000–€8,000 per year (for non-EU students)", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: BookOpen, title: "Doctoral Programs", desc: "€1,000–€6,000 per year (for non-EU students)", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: Building, title: "Living Expenses", desc: "€700–€1,200 per month (Brussels is generally more expensive)", color: "from-[#1D50C9] to-[#1845B3]" }
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

            {/* Application Process */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-white to-blue-50/30" data-testid="application-process-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  How to Study in Belgium: Step-by-Step Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Choose Your Program and University", desc: "Research Belgian universities and their offered programs across engineering, business, computer science, medicine, and law" },
                    { step: "2", title: "Check Admission Requirements", desc: "Make sure you meet the academic requirements. Some programs may require language proficiency tests" },
                    { step: "3", title: "Submit Your Application", desc: "Apply directly to the university or through official Belgian application portals with all required documents" },
                    { step: "4", title: "Apply for Student Visa", desc: "Once accepted, apply for a Type D student visa at the Belgian embassy with acceptance letter and proof of funds" },
                    { step: "5", title: "Plan Your Finances", desc: "Ensure you have €670 per month in funds to cover living expenses as required for visa approval" }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4 p-5 bg-white rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
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

            {/* Visa Application Process */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-white to-blue-50/30" data-testid="visa-application-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  How to Apply for Study Visa in Belgium
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  To study in Belgium, you will need a student visa (Type D). Here's the process:
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Get an Offer from a University", desc: "You need to first be accepted into a program at a Belgian university" },
                    { step: "2", title: "Prepare Your Documents", desc: "Acceptance letter, passport, proof of sufficient funds (€670/month), proof of health insurance, and language proficiency" },
                    { step: "3", title: "Apply for the Visa", desc: "Submit your visa application to the Belgian embassy in Pakistan. Be prepared to pay the visa fee and attend an interview if required" },
                    { step: "4", title: "Wait for Processing", desc: "The visa process may take several weeks, so plan ahead and submit your application early" }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4 p-5 bg-white rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
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

            {/* Scholarships - Premium Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 via-white to-orange-50/30" data-testid="scholarships-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  Scholarships for Pakistani Students
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Belgium offers several scholarship opportunities for international students:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Belgian Government Scholarships",
                    "VLIR-UOS Scholarships",
                    "Erasmus+ Scholarships",
                    "University-Specific Scholarships",
                    "Need-based Financial Aid",
                    "Research Fellowships"
                  ].map((option, index) => (
                    <div key={index} className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(249,115,22,0.2)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300" data-testid={`scholarship-option-${index}`}>
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{option}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gradient-to-r from-orange-100 to-red-100/50 p-5 rounded-2xl shadow-sm">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-gray-900">VLIR-UOS Scholarships</strong><br />
                    <span className="text-gray-600">Offered to students from specific countries including Pakistan, these scholarships cover full tuition and living costs for studying in Belgium.</span>
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

            {/* Top Universities - Modern Chips */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-white to-blue-50/30" data-testid="universities-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  Top Universities in Belgium
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-3">
                  {universities.map((uni, index) => (
                    <Badge 
                      key={index} 
                      className="bg-white text-[#1D50C9] border border-[#1D50C9]/20 px-4 py-2 text-sm font-medium shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] hover:bg-[#1D50C9] hover:text-white transition-all duration-300 cursor-pointer"
                      data-testid={`university-chip-${index}`}
                    >
                      {uni}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Post-Study Work & Immigration */}
            <Card className="border-0 shadow-lg overflow-hidden bg-white" data-testid="post-study-work-card">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-50/50 border-b border-blue-100">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  Post-Study Work & Immigration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Belgium offers post-graduation work permits, allowing students to gain work experience in the country after completing their studies:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <Badge className="bg-[#1D50C9] text-white text-xs px-2 py-1">Work Permit</Badge>
                    </div>
                    <p className="text-gray-700">Post-study work permit allows you to <span className="font-bold text-[#1D50C9]">gain valuable work experience</span> and build your professional network</p>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                        <Home className="w-5 h-5 text-white" />
                      </div>
                      <Badge className="bg-[#1D50C9] text-white text-xs px-2 py-1">Permanent Residency</Badge>
                    </div>
                    <p className="text-gray-700">Apply for PR after <span className="font-bold text-[#1D50C9]">working in Belgium</span> for a certain period</p>
                  </div>
                </div>
                <div className="mt-6 bg-gradient-to-r from-blue-100 to-blue-100/50 p-5 rounded-2xl shadow-sm">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-gray-900">Part-Time Work</strong><br />
                    <span className="text-gray-600">Students can work up to 20 hours per week during studies, helping to cover living expenses and gain valuable work experience.</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section - Modern Accordion */}
            <Card className="border-0 shadow-lg overflow-hidden bg-white" data-testid="faq-card">
              <CardHeader className="bg-gradient-to-r from-[#1D50C9]/5 to-transparent border-b border-blue-100">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
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
                      className="bg-gradient-to-r from-gray-50 to-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(29,80,201,0.1)] hover:shadow-[0_4px_12px_rgba(29,80,201,0.2)] transition-all duration-300"
                      data-testid={`faq-item-${index}`}
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-[#1D50C9] flex-shrink-0 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#0d2a5e] text-white overflow-hidden relative" data-testid="cta-section">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
              <CardContent className="p-8 sm:p-12 text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl mb-6 border border-white/20">
                  <Rocket className="w-8 h-8" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful students who have achieved their dreams of studying in Belgium with Dunya Consultants.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CalendlyButton
                    text="Book Free Consultation"
                    className="bg-white text-[#1D50C9] hover:bg-blue-50 font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    size="lg"
                    showIcon={false}
                  />
                  <Link href="/contact">
                    <Button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Quick Contact Card */}
            <Card className="border-0 shadow-xl sticky top-24 bg-white overflow-hidden" data-testid="quick-contact-card">
              <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6 text-white">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Get Expert Guidance
                </h3>
                <p className="text-white/80 text-sm mt-1">Start your Belgium journey today</p>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">UAN Number</p>
                  <p className="text-xl font-bold text-[#1D50C9]">(+92) 304 1110947</p>
                </div>
                
                <CalendlyButton
                  text="Book Free Consultation"
                  className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#0d2a5e] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  size="default"
                  showIcon={false}
                />
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#1D50C9] text-[#1D50C9] hover:bg-[#1D50C9] hover:text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  onClick={() => window.open('https://wa.me/923261111947?text=Hello, I want to start my application for studying in Belgium. Please guide me through the process.')}
                >
                  Chat on WhatsApp
                </Button>
                
                <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-100">
                  <p className="mb-2">info@dunyaconsultants.com</p>
                  <p className="text-xs">106 Stadium Road, Opposite Bajwa Trauma Centre, Sargodha</p>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Dunya */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 via-white to-orange-50/30" data-testid="why-choose-dunya-card">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  Why Choose Dunya?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "95% Visa Success Rate",
                  "Expert Belgium Counselors",
                  "Complete Application Support",
                  "Scholarship Assistance",
                  "Pre-Departure Guidance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-[0_2px_8px_rgba(249,115,22,0.15)] hover:shadow-[0_4px_12px_rgba(249,115,22,0.25)] transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-0 shadow-lg bg-white" data-testid="quick-links-card">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#1D50C9]" />
                  Explore More Destinations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { name: "Study in UK", href: "/study-abroad/uk" },
                  { name: "Study in USA", href: "/study-abroad/usa" },
                  { name: "Study in Canada", href: "/study-abroad/canada" },
                  { name: "Study in Australia", href: "/study-abroad/australia" },
                  { name: "Study in Finland", href: "/study-abroad/finland" }
                ].map((link, index) => (
                  <Link key={index} href={link.href}>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-[#1D50C9] hover:text-white transition-all duration-300 cursor-pointer group">
                      <span className="text-sm font-medium">{link.name}</span>
                      <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
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
