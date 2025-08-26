import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Users, 
  Star, 
  Award, 
  Building2, 
  ArrowLeft, 
  Calendar, 
  CheckCircle, 
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Globe,
  BookOpen,
  Target,
  TrendingUp,
  Shield,
  Briefcase,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function GujranwalaOffice() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      icon: User,
      title: "Career Counselling",
      description: "Match your goals and budget to the right program and country."
    },
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Shortlists aligned with your profile and intake timelines."
    },
    {
      icon: BookOpen,
      title: "Application Handling",
      description: "Preparing documents, forms, SOPs correctly and on time."
    },
    {
      icon: Shield,
      title: "Visa Guidance",
      description: "Up-to-date checklists, file review, and interview prep."
    },
    {
      icon: Globe,
      title: "Pre-departure Briefing",
      description: "Travel, accommodation, culture, and packing tips."
    }
  ];

  const ieltsFeatures = [
    "Experienced trainers for LRWS",
    "Modern teaching with practical tasks", 
    "Small batches for personal feedback",
    "Free assessment to map your band-score plan",
    "End-to-end support: IELTS + admission + visa under one roof"
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Friendly, qualified counsellors"
    },
    {
      icon: Target,
      title: "Personalized Plans", 
      description: "Advice tailored to you"
    },
    {
      icon: TrendingUp,
      title: "Strong Results",
      description: "Proven admissions and visa approvals"
    },
    {
      icon: Building2,
      title: "Local Support",
      description: "Easy follow-ups at our Gujranwala office"
    }
  ];

  const countries = [
    { name: "USA", flag: "🇺🇸" },
    { name: "UK", flag: "🇬🇧" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Belgium", flag: "🇧🇪" },
    { name: "Cyprus", flag: "🇨🇾" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Turkey", flag: "🇹🇷" },
    { name: "Finland", flag: "🇫🇮" },
    { name: "Ireland", flag: "🇮🇪" }
  ];

  const faqs = [
    {
      question: "What documents do I need to start?",
      answer: "Transcripts, passport, English test (if required), CV, SOP/personal statement, references, and financial/visa documents. We'll share a custom checklist."
    },
    {
      question: "Can I apply with average grades or a study gap?",
      answer: "Often yes. We align the course level and country, then strengthen your case with a focused SOP and supporting evidence."
    },
    {
      question: "Do you help with scholarships?",
      answer: "Yes! shortlisting relevant options and improving your application quality and timing."
    },
    {
      question: "How long does the visa process take?",
      answer: "Timelines vary by country and intake. Starting 6–9 months early keeps offers, and visas on track."
    },
    {
      question: "Do you offer online counselling if I can't visit?",
      answer: "Yes! phone/WhatsApp/video sessions available, plus in-office meetings for local students."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-6">
            <Link href="/offices">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Offices
              </Button>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Dunya Consultants{" "}
                <span className="text-yellow-300">Gujranwala</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Studying abroad from Gujranwala shouldn't feel complicated. We guide you step by step from choosing the right course and country, preparing strong applications, and filing a compliant student visa, so the journey stays simple, clear, and stress-free.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +92 332-9991947
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/attached_assets/WhatsApp Image 2024-07-20 at 17.59.34_c77d42af_1756191592651.jpg" 
                    alt="Dunya Consultants Gujranwala Office - Reception Area"
                    className="w-full h-48 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/attached_assets/WhatsApp Image 2024-07-20 at 17.59.33_bb208391_1756191597249.jpg" 
                    alt="Executive Consultation Room"
                    className="w-full h-32 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="pt-8">
                  <img 
                    src="/attached_assets/WhatsApp Image 2024-07-20 at 17.59.34_cb96a013_1756191605533.jpg" 
                    alt="Dunya Consultants Gujranwala Building Exterior"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services we offer{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                (Gujranwala)
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive study abroad services designed to make your international education journey seamless
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IELTS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IELTS Classes in{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Gujranwala
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional IELTS preparation with experienced trainers and proven teaching methods
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our IELTS Program?</h3>
                <div className="space-y-4">
                  {ieltsFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">IELTS Band Score Target</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#1D50C9] mb-2">7.5+</div>
                    <p className="text-gray-600 mb-6">Average student achievement</p>
                    <Button className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white hover:shadow-lg">
                      Start Free Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why choose{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Dunya Consultants (Gujranwala)
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for study abroad success with proven expertise and personalized guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Study{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer admission and visa services for top study destinations worldwide
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="border-2 border-gray-100 hover:border-[#1D50C9] transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{country.flag}</div>
                    <h3 className="font-semibold text-gray-900">{country.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it works{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                (3 simple steps)
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 3-step process ensures your study abroad journey is smooth and successful
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Profile review & plan",
                description: "Course, country, and intake selection",
                icon: User
              },
              {
                step: "2", 
                title: "Documents & applications",
                description: "University filing options",
                icon: BookOpen
              },
              {
                step: "3",
                title: "Visa file & interview",
                description: "Compliant case + mock interview", 
                icon: Shield
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="relative h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <item.icon className="w-8 h-8 text-[#1D50C9]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book your free consultation and start your study-abroad journey today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - FAQs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked{" "}
                  <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                    Questions
                  </span>
                </h3>
                
                <div className="space-y-3 flex-grow">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <div className="bg-gray-50 rounded-lg border border-gray-200 hover:border-[#1D50C9] transition-all duration-300 overflow-hidden">
                        <button
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        >
                          <h4 className="text-gray-900 font-semibold pr-4">{faq.question}</h4>
                          <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                            {expandedFaq === index ? (
                              <ChevronUp className="w-4 h-4 text-[#1D50C9]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#1D50C9]" />
                            )}
                          </div>
                        </button>
                        {expandedFaq === index && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-4 border-t border-gray-200"
                          >
                            <p className="text-gray-700 leading-relaxed pt-3">{faq.answer}</p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl p-8 text-white shadow-2xl flex flex-col" style={{minHeight: '600px'}}>
                <div className="text-3xl font-bold mb-8 text-center" style={{color: '#ffffff', fontWeight: 'bold'}}>Contact Information</div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Address</h4>
                      <p className="text-blue-100 leading-relaxed">
                        Dunya Consultants, Peoples Colony Underpass, Gujranwala, Pakistan
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Phone</h4>
                      <a href="tel:+923329991947" className="text-blue-100 hover:text-white transition-colors text-lg">
                        +92 332-9991947
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Office Hours</h4>
                      <p className="text-blue-100 text-lg">
                        Monday - Saturday: 10 AM - 6 PM
                      </p>
                    </div>
                  </div>
                  
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Our Gujranwala office provides comprehensive visa consultation services including document preparation, application processing, and pre-departure guidance for students planning to study abroad.
                  </p>
                </div>

                <div className="space-y-4 mt-4">
                  <Button size="lg" className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                    <Link href="/contact" className="flex items-center justify-center w-full">
                      Book Free Consultation
                      <Calendar className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                    <a href="https://maps.app.goo.gl/qTLB3khgQTmrFyY88" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                      Get Directions
                      <MapPin className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}