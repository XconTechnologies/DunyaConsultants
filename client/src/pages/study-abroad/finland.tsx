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
  Target
} from "lucide-react";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";

export default function StudyAbroadFinland() {
  useEffect(() => {
    setStaticPageMeta(
      "Study in Finland with Dunya Consultants: Global Education & Career Growth",
      "Learn how to study in Finland with Dunya Consultants, offering affordable tuition, no IELTS required, and numerous career opportunities. Start your journey toward higher education today.",
      "/uploads/study-in-finland.jpg"
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

  const whyStudyFinland = [
    { icon: Building, title: "World-Class Education", desc: "Top-ranked universities with innovative teaching" },
    { icon: FileText, title: "No IELTS Required", desc: "Many universities accept MOI or alternative tests" },
    { icon: DollarSign, title: "Affordable Tuition", desc: "Lower costs compared to other European countries" },
    { icon: Users, title: "Multicultural", desc: "Students from around the world" },
    { icon: Briefcase, title: "Post-Study Work", desc: "Stay and work after graduation" },
    { icon: Globe, title: "High Quality of Life", desc: "Safe, clean, and innovative society" }
  ];

  const universities = [
    "University of Helsinki",
    "Aalto University",
    "University of Turku",
    "University of Oulu",
    "Tampere University",
    "University of Eastern Finland",
    "LUT University",
    "Åbo Akademi University",
    "University of Vaasa",
    "Hanken School of Economics"
  ];

  const popularCourses = [
    { name: "Engineering", demand: "High" },
    { name: "Computer Science", demand: "Very High" },
    { name: "Business Administration", demand: "Very High" },
    { name: "Data Science", demand: "Very High" },
    { name: "Nursing", demand: "High" },
    { name: "Design and Architecture", demand: "High" },
    { name: "Medicine", demand: "High" },
    { name: "Environmental Science", demand: "High" },
    { name: "Artificial Intelligence", demand: "Very High" }
  ];

  const faqs = [
    {
      question: "How Much Does It Cost to Study a Master's in Finland?",
      answer: "The cost of studying a Master's program in Finland ranges from €10,000 to €20,000 per year, depending on the university and program."
    },
    {
      question: "How Do I Apply for a Study Visa to Finland?",
      answer: "To apply for a student visa, you need an offer from a Finnish university. Afterward, you submit your visa application to the Finnish Immigration Service with necessary documents like proof of admission, financial support, and health insurance."
    },
    {
      question: "Can I Study in Finland Without IELTS?",
      answer: "Yes, many Finnish universities do not require IELTS. You can apply using other proofs of English proficiency, like previous education in English or other tests like TOEFL or Duolingo."
    },
    {
      question: "How Much Money is Required to Study in Finland?",
      answer: "The total cost of studying in Finland includes tuition fees (€8,000–€20,000 per year) and living expenses (€700–€1,200 per month)."
    },
    {
      question: "How Can I Get a Scholarship to Study in Finland?",
      answer: "Finland offers several scholarships for international students, including university-specific scholarships, Finnish government scholarships, and the Erasmus+ program."
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
              Study in <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-pulse">Finland</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              Your Path to World-Class Education & Career Opportunities
            </p>
            
            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                40+ Universities
              </Badge>
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                No IELTS Required
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
                  500+
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
                  20+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  University Partners
                </div>
                <div className="text-xs text-gray-500">
                  Finnish Network
                </div>
              </CardContent>
            </Card>

            {/* Affordable Tuition */}
            <Card className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative" data-testid="homepage-stat-tuition">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  €8K+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Annual Tuition
                </div>
                <div className="text-xs text-gray-500">
                  Affordable Education
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Finland?</h2>
                    <p className="text-gray-600">Your Path to World-Class Education & Career Opportunities</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Finland has become a leading destination for international students, offering an exceptional quality of education, a rich cultural experience, and ample career opportunities after graduation. Whether you're considering studying in Finland for undergraduate or postgraduate courses, this guide will walk you through everything you need to know.
                  </p>
                  <p>
                    Studying in Finland offers a unique blend of academic excellence, cultural richness, and career possibilities. Finland's education system is globally recognized for its innovative teaching methods, high academic standards, and emphasis on student well-being.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Link href="/blog/study-in-finland">
                      <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#0d2a5e] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Read Our Complete Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Study in Finland - Modern Icon Grid */}
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white" data-testid="why-study-finland-card">
              <CardHeader className="bg-gradient-to-r from-[#1D50C9]/5 to-transparent border-b border-blue-100">
                <CardTitle className="text-2xl sm:text-3xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  Why Study in Finland
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Finland offers world-recognized degrees, excellent job opportunities, practical learning, and numerous scholarships for international students.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyStudyFinland.map((reason, index) => (
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
                  Study in Finland Without IELTS
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Many Finnish universities do not require IELTS for international students, making it easier for Pakistani students to apply. Here are your alternatives:
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
                    <strong className="text-gray-900">Previous Education in English Accepted</strong><br />
                    <span className="text-gray-600">Instead of IELTS, universities may accept proof of previous education in English or their own English proficiency tests.</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cost Requirements - Modern Financial Card */}
            <Card className="border-0 shadow-lg overflow-hidden bg-white" data-testid="cost-requirements-card">
              <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <DollarSign className="w-8 h-8" />
                  How Much Does It Cost to Study in Finland?
                </CardTitle>
                <p className="text-white/90 mt-2">Understand the investment needed for your Finnish education</p>
              </div>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The cost of studying in Finland varies depending on the level of education and the program chosen:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: GraduationCap, title: "Bachelor's Programs", desc: "€8,000–€18,000 per year", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: Award, title: "Master's Programs", desc: "€10,000–€20,000 per year", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: BookOpen, title: "Doctoral Programs", desc: "Often free, but may require funding for research", color: "from-[#1D50C9] to-[#1845B3]" },
                    { icon: Building, title: "Living Expenses", desc: "€700–€1,200 per month (accommodation €200–€500)", color: "from-[#1D50C9] to-[#1845B3]" }
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

            {/* Visa Application Process */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-white to-blue-50/30" data-testid="visa-application-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  How to Apply for a Study Visa in Finland
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Applying for a study visa in Finland involves the following steps:
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Secure an Offer", desc: "Get accepted into a degree program at a recognized Finnish institution" },
                    { step: "2", title: "Prepare Documents", desc: "Proof of admission, sufficient funds, passport, and health insurance" },
                    { step: "3", title: "Submit Application", desc: "Apply for a residence permit through Finnish Immigration Service (Migri)" },
                    { step: "4", title: "Interview (if required)", desc: "Demonstrate your intent to study and financial stability" }
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
                <div className="mt-6 flex justify-center">
                  <Link href="/2025/01/20/finland-online-visa-application-from-pakistan">
                    <Button className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#0d2a5e] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      Learn About Visa Application Process
                    </Button>
                  </Link>
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
                  Many Finnish universities are flexible when it comes to study gaps, especially if you have relevant work experience:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <Badge className="bg-[#1D50C9] text-white text-xs px-2 py-1">Bachelor's</Badge>
                    </div>
                    <p className="text-gray-700">Gaps of up to <span className="font-bold text-[#1D50C9]">2-3 years</span> typically accepted</p>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-[0_2px_8px_rgba(29,80,201,0.15)] hover:shadow-[0_6px_16px_rgba(29,80,201,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <Badge className="bg-[#1D50C9] text-white text-xs px-2 py-1">Master's</Badge>
                    </div>
                    <p className="text-gray-700"><span className="font-bold text-[#1D50C9]">5-10 years gap</span> may be acceptable with strong justification</p>
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
                  Scholarships in Finland
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Finland offers many scholarship opportunities and affordable living costs. Here are funding options for international students:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "University-specific Scholarships",
                    "Finnish Government Scholarships",
                    "Erasmus+ Program",
                    "EDUFI Fellowships",
                    "Research Grants",
                    "Need-based Financial Aid"
                  ].map((option, index) => (
                    <div key={index} className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(249,115,22,0.2)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] transition-all duration-300" data-testid={`scholarship-option-${index}`}>
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
                  Top programs chosen by international students for their high earning potential:
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
                  Top Universities in Finland
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Universities such as the University of Helsinki and Aalto University are consistently ranked among the best in Europe:
                </p>
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
                      Start Your Journey with Dunya Consultants
                    </CardTitle>
                    <p className="text-white/80 text-sm">Expert Guidance for Your Finnish Dream</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative p-6 sm:p-8">
                <p className="text-white/95 mb-8 leading-relaxed text-base md:text-lg">
                  Studying in Finland is an investment in your future. With world-class education, no IELTS requirement, and a variety of scholarships, Finland provides an excellent opportunity for Pakistani students. Our expert team provides comprehensive support:
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
                  Ready to start your Finland study journey? Our expert consultants are here to help you every step of the way.
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
                    { label: "Visa Type", value: "Residence Permit" },
                    { label: "English Test", value: "Optional (MOI)" },
                    { label: "Tuition Range", value: "€8K - €20K/year" },
                    { label: "Study Gap", value: "Up to 10 years" },
                    { label: "Work Rights", value: "25 hrs/week" }
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
