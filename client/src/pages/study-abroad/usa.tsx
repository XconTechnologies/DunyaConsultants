import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  ExternalLink
} from "lucide-react";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";
import ApplicationForm from "@/components/ApplicationForm";

export default function StudyAbroadUSA() {
  useEffect(() => {
    setStaticPageMeta(
      "Study in USA from Pakistan - Complete Guide 2024 | Dunya Consultants",
      "Complete guide to study in USA from Pakistan. Learn about USA student visa requirements, costs, scholarships, top universities, work opportunities, and expert guidance from best USA study visa consultants."
    );
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const whyStudyUSA = [
    "Global degree recognition",
    "Access to modern technology and research",
    "Flexible education system",
    "Strong internship and job market",
    "Multicultural society",
    "Better PR and settlement opportunities"
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
    "Engineering",
    "Computer Science",
    "Business Administration",
    "Data Science",
    "Economics",
    "Nursing",
    "Media Studies",
    "Cybersecurity",
    "Artificial Intelligence"
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <GraduationCap className="w-10 h-10" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              Study in <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">USA</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto"
            >
              Your Complete Guide to Studying in the USA from Pakistan
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              <Badge variant="secondary" className="px-4 py-2 text-base bg-white/20 text-white border-white/30">
                <GraduationCap className="w-4 h-4 mr-2" />
                5,000+ Universities
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base bg-white/20 text-white border-white/30">
                <Globe className="w-4 h-4 mr-2" />
                F1 Visa Guidance
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base bg-white/20 text-white border-white/30">
                <Award className="w-4 h-4 mr-2" />
                Scholarship Support
              </Badge>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
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
            </motion.div>
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
                  Studying in the USA is one of the smartest decisions a Pakistani student can make for their future. The United States offers world-class education, global career opportunities, and a multicultural learning environment that helps students grow personally and professionally. Pakistani students choose the USA because it provides flexible courses, strong post-study work options, and a clear pathway toward long-term settlement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This complete guide explains how to study in the USA from Pakistan, how much money is required, admission requirements, study gap acceptance, top universities, scholarship options, and how to get a USA study visa with the help of trusted USA study visa consultants like <a href="/contact" target="_blank" className="text-[#1D50C9] hover:underline font-medium">Dunya Consultants</a>.
                </p>
              </CardContent>
            </Card>

            {/* Why Study in USA */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Why Study in USA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The USA offers a world-recognized degree, excellent job opportunities, practical learning, and a huge number of scholarships for international students, making it the top study destination for Pakistani students.
                </p>
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Key Reasons</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {whyStudyUSA.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  If you are preparing for your visa interview, this also answers the common question "Why study in USA" or "Why study in USA?" clearly.
                </p>
              </CardContent>
            </Card>

            {/* Study in USA from Pakistan */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Study in USA from Pakistan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pakistani students can study in the USA by applying to an approved university, securing an I-20, paying the SEVIS fee, and attending the F1 visa interview. Dunya Consultants guides students through every step including course selection, application submission, financial documentation, interview preparation, and visa support.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#1D50C9]" />
                    Study in USA for Pakistani Students
                  </h4>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Every year thousands of students from Pakistan join American universities because the USA offers:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span>High quality education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span>Wide program selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span>Scholarships and assistantships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span>Strong industry links</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span>Better career growth</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Pakistani students especially prefer fields like engineering, business, computer science, AI, health sciences, and economics because these areas offer higher earning potential.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Study Without IELTS */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Study in USA Without IELTS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Many American universities accept students without IELTS. Alternatives include:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">PTE</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">Duolingo</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">TOEFL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">Medium of Instruction Letter</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Is PTE accepted in USA for study visa?</strong><br />
                    Yes, PTE is accepted in USA by many universities and is valid for the F1 visa.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cost Requirements */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <DollarSign className="w-6 h-6" />
                  How Much Money is Required to Study in USA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Students need to show enough financial support to cover tuition and living costs for at least one year. The average requirement includes:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-10 h-10 bg-[#1D50C9] rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tuition</h4>
                      <p className="text-gray-600 text-sm">Community colleges are lower cost, while public and private universities vary</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-10 h-10 bg-[#1D50C9] rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Living Cost</h4>
                      <p className="text-gray-600 text-sm">Accommodation, food, health insurance, and transport</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-10 h-10 bg-[#1D50C9] rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Bank Statement</h4>
                      <p className="text-gray-600 text-sm">Required for visa and I-20 issuance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* GPA Requirements */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  How Much GPA is Required to Study in USA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Most universities accept students with a minimum GPA of <strong>2.5 to 3.5</strong>, depending on the program. Competitive courses like engineering or medicine may require higher grades.
                </p>
              </CardContent>
            </Card>

            {/* Study Gap */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  How Much Study Gap is Acceptable in USA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  USA universities are flexible.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Bachelor's Degree</h4>
                    <p className="text-gray-700">Up to <strong>2 to 5 years gap</strong> is acceptable</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Master's Degree</h4>
                    <p className="text-gray-700"><strong>5 to 10 years gap</strong> can be accepted with valid justification such as work experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Free/Affordable Study */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <DollarSign className="w-6 h-6" />
                  Free Study in USA for Pakistani Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Students can study in the USA at very low cost or almost free through:
                </p>
                <div className="space-y-2">
                  {[
                    "Merit scholarships",
                    "Need-based grants",
                    "External funding",
                    "Research and teaching assistantships",
                    "University scholarships"
                  ].map((option, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-700">{option}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Dunya Consultants helps students identify and apply for these opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Best Consultant */}
            <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-blue-100/50">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Best Consultant for USA Study Visa in Pakistan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Dunya Consultants is recognized as one of the <strong>best consultants for USA study visa in Pakistan</strong>. Their team supports students with:
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  {[
                    "University selection",
                    "Application processing",
                    "Scholarship guidance",
                    "Visa file preparation",
                    "Interview coaching"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                      <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Learn more about <Link href="/blog/best-usa-student-visa-consultants" className="text-[#1D50C9] hover:underline font-medium inline-flex items-center gap-1">choosing the right USA study visa consultant <ExternalLink className="w-3 h-3" /></Link> for your needs.
                </p>
              </CardContent>
            </Card>

            {/* Popular Courses */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Popular Courses to Study in USA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When students ask which subject is best to study in USA, the most popular fields include:
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {popularCourses.map((course, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
                      <span className="text-gray-700 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  If you want specialized guidance for choosing a subject, Dunya Consultants can assist.
                </p>
              </CardContent>
            </Card>

            {/* Top Universities */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <Building className="w-6 h-6" />
                  Best Universities in USA for Pakistani Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The United States is home to some of the world's most prestigious universities. Here are the <Link href="/blog/top-universities-in-the-usa" className="text-[#1D50C9] hover:underline font-medium inline-flex items-center gap-1">top universities in the USA <ExternalLink className="w-3 h-3" /></Link> that Pakistani students frequently choose:
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
              </CardContent>
            </Card>

            {/* F1 Visa */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Study Visa in USA (F1 Visa)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The USA study visa is known as the <strong>F1 visa</strong>. Students must have:
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    "Valid passport",
                    "Acceptance letter and I-20",
                    "SEVIS fee payment",
                    "Academic documents",
                    "Bank statements",
                    "Visa interview appointment"
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <CheckCircle className="w-5 h-5 text-[#1D50C9]" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  For detailed information, read our comprehensive guide on <Link href="/blog/usa-student-visa-requirements" className="text-[#1D50C9] hover:underline font-medium inline-flex items-center gap-1">USA student visa requirements <ExternalLink className="w-3 h-3" /></Link>.
                </p>
              </CardContent>
            </Card>

            {/* Work Opportunities */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  Work and Career Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Students can work:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-gray-900 mb-2">On Campus</h4>
                    <p className="text-gray-700">Up to 20 hours per week</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Off Campus</h4>
                    <p className="text-gray-700">Through OPT or CPT</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-lg border border-blue-200">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#1D50C9] mt-0.5 flex-shrink-0" />
                        <span><strong>OPT</strong> allows one year of work after studies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#1D50C9] mt-0.5 flex-shrink-0" />
                        <span><strong>STEM OPT</strong> allows up to two additional years in science and tech fields</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  This leads to better long-term settlement options.
                </p>
              </CardContent>
            </Card>

            {/* Green Card */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Can I Get Green Card After Study in USA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Yes, students can move toward permanent residency. Common pathways include:
                </p>
                <div className="space-y-2">
                  {[
                    "H1B skilled worker visa",
                    "Employer sponsorship",
                    "Extraordinary talent categories",
                    "Long-term residency through work experience"
                  ].map((pathway, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <TrendingUp className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{pathway}</span>
                    </div>
                  ))}
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
                  Get answers to the most common questions about studying in the USA
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`
                        group relative rounded-xl overflow-hidden border-2 transition-all duration-300
                        ${expandedFaq === index 
                          ? 'border-[#1D50C9] shadow-lg shadow-blue-100' 
                          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                        }
                      `}
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className={`
                          w-full px-5 py-4 text-left transition-all duration-300 flex items-start gap-4
                          ${expandedFaq === index 
                            ? 'bg-gradient-to-r from-blue-50 to-orange-50/30' 
                            : 'bg-white group-hover:bg-gray-50'
                          }
                        `}
                      >
                        <div className={`
                          flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                          ${expandedFaq === index 
                            ? 'bg-[#1D50C9] text-white' 
                            : 'bg-blue-100 text-[#1D50C9] group-hover:bg-[#1D50C9] group-hover:text-white'
                          }
                        `}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className={`
                            font-semibold transition-colors duration-300
                            ${expandedFaq === index ? 'text-[#1D50C9]' : 'text-gray-900 group-hover:text-[#1D50C9]'}
                          `}>
                            {faq.question}
                          </h3>
                        </div>
                        <div className="flex-shrink-0">
                          {expandedFaq === index ? (
                            <ChevronUp className="w-6 h-6 text-[#1D50C9]" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-[#1D50C9] transition-colors" />
                          )}
                        </div>
                      </button>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 py-4 bg-white border-t-2 border-blue-100">
                            <div className="pl-12">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
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
                
                <ApplicationForm country="USA">
                  <Button className="w-full bg-[#1D50C9] hover:bg-[#1845B3] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </ApplicationForm>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#1D50C9] text-[#1D50C9] hover:bg-blue-50"
                  onClick={() => window.open('https://wa.me/923261111947?text=Hello, I want to start my application for studying in USA. Please guide me through the process.')}
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
                  <p className="text-lg font-bold text-[#1D50C9]">$27,940 - $65,000</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-xs text-gray-600 mb-1">SEVIS Fee</p>
                  <p className="text-lg font-bold text-orange-600">$350</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-gray-600 mb-1">Visa Application</p>
                  <p className="text-lg font-bold text-[#1D50C9]">$185</p>
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
