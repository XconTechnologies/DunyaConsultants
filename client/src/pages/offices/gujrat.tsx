import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, CheckCircle, Users, GraduationCap, FileText, Globe, Award, Heart, ArrowRight, BookOpen, MessageCircle, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CompactConsultationForm from "@/components/compact-consultation-form";
import { setStaticPageMeta } from "@/lib/seo";

export default function GujratOffice() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  useEffect(() => {
    setStaticPageMeta(
      "Gujrat Office",
      "Expert study abroad consultants in Gujrat helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more."
    );
  }, []);
  
  const services = [
    {
      icon: Users,
      title: "Career & Course Counselling",
      description: "Meet your goals and budget for suitable programs and study abroad destinations for Pakistani students. Our advisors at Gujrat help you choose the perfect course and country.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "University Shortlisting",
      description: "Options aligned with your profile, intake, and eligibility. We will assist you in selecting a study abroad program that suits your profile and budget.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Application Support",
      description: "Documents, forms, and SOPs prepared correctly and on time. We prepare your documents, fill out forms, and make sure everything is submitted on time.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Visa Guidance",
      description: "Up-to-date checklists, file review, and interview preparation. Our study visa experts at Gujrat follow the process with greatest care.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Interview Preparation",
      description: "We conduct practice interviews, provide practical advice, and boost your confidence to help you perform at your best in university and visa interviews.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Pre-Departure Briefing",
      description: "Travel, accommodation, culture, and packing tips. We'll give you advice ensuring a smooth start to your new adventure.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const ieltsFeatures = [
    "Experienced trainers for Listening, Reading, Writing, Speaking – Learn from skilled and friendly instructors",
    "Modern teaching with practical tasks and clear feedback – Easy lessons that actually make sense",
    "Small batches for personal attention – More personal attention and feedback",
    "Free assessment and tailored study plan – Find out where you stand and how to improve",
    "End-to-end support: IELTS + admission + visa under one roof – A supportive environment with the latest facilities"
  ];

  const whyChooseUs = [
    "Expert guidance: Friendly, qualified counsellors",
    "Personalized plans: Advice tailored to you",
    "Proven results: Strong record in admissions and visas",
    "Local access: Easy follow-ups at our Gujrat office",
    "Clear and transparent process"
  ];

  const countries = ["USA", "UK", "Australia", "Canada", "Belgium", "Cyprus", "Germany", "Turkey", "Finland", "Ireland"];
  // Duplicate countries for seamless infinite scrolling
  const duplicatedCountries = [...countries, ...countries];

  // Country codes mapping for flags
  const countryCodesMap = {
    "USA": "US",
    "UK": "GB", 
    "Australia": "AU",
    "Canada": "CA",
    "Belgium": "BE",
    "Cyprus": "CY",
    "Germany": "DE",
    "Turkey": "TR",
    "Finland": "FI",
    "Ireland": "IE"
  };

  const faqs = [
    {
      question: "Which documents do I need to begin?",
      answer: "Transcripts, passport, English test (if required), CV, SOP/personal statement, references, and financial/visa documents. We'll share a custom checklist."
    },
    {
      question: "Can I apply with a study gap or average grades?",
      answer: "Often yes. We align course level and country, then strengthen your case with a focused SOP and relevant evidence."
    },
    {
      question: "Do you help with scholarships and fee planning?",
      answer: "Yes! university/government scholarships, deadlines, and budgeting advice for tuition and living costs."
    },
    {
      question: "Is IELTS mandatory for all universities?",
      answer: "Not always. Some accept PTE/Duolingo/MOI or have pathway options. We'll shortlist according to your profile and target country."
    },
    {
      question: "Do you offer online counselling if I'm in Kharian, Lalamusa, or Wazirabad?",
      answer: "Yes! WhatsApp/phone/video sessions available, plus in-office meetings at Service Morh (G.T. Road), Gujrat."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#1565c0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/15 rounded-full backdrop-blur-sm mb-8 border border-white/20">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Gujrat Office</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
              Dunya Consultants Gujrat | Overseas Education, Admissions & Student Visa Services
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Searching for study abroad options in Gujrat? We make the procedure straightforward and stress-free. Our local experts will help you find the correct course and country, prepare great applications, and establish a legal student visa, step by step.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 text-lg">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+92 300-105-1947</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Mon–Sat 10 AM–6 PM</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              

                <Button size="lg" onClick={() => setIsFormOpen(true)} className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-4 text-lg font-semibold" data-testid="office-free-consultation">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <a href="https://maps.app.goo.gl/CCixqVyJaA8Hjz756" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Get Directions
                  <MapPin className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Dunya Consultants Gujrat
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Trust Reasons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4 flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-medium text-sm">{reason}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Office Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="grid gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-xl shadow-xl"
                >
                  <img loading="lazy" 
                    src="/attached_assets/IMG_1254_1756195719395.jpg" 
                    alt="Dunya Consultants Gujrat Office Building - Located at Service Morh Road, G.T. Gujrat"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="overflow-hidden rounded-xl shadow-lg"
                  >
                    <img loading="lazy" 
                      src="/attached_assets/gujrat office pictures-16_1756195727708.jpg" 
                      alt="Dunya Consultants Gujrat - Professional Consultation Area with Students"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="overflow-hidden rounded-xl shadow-lg"
                  >
                    <img loading="lazy" 
                      src="/attached_assets/gujrat office pictures-03_1756195732853.jpg" 
                      alt="Dunya Consultants Gujrat - Executive Office with Professional Staff"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Office Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                Countries We{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Support
                </span>
              </h3>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#1D50C9] relative">
                {/* Infinite Scrolling Container */}
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="flex gap-6"
                    animate={{ x: [-0, -50 + "%"] }}
                    transition={{ 
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    {duplicatedCountries.map((country, index) => (
                      <motion.div
                        key={`${country}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: (index % countries.length) * 0.05 }}
                        className="group cursor-pointer flex-shrink-0"
                      >
                        <div className="bg-white text-gray-800 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[160px] border border-gray-200">
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-12 mb-3 rounded-md overflow-hidden shadow-md border-2 border-gray-200">
                              <ReactCountryFlag 
                                countryCode={countryCodesMap[country as keyof typeof countryCodesMap]} 
                                svg 
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                              />
                            </div>
                            <p className="text-sm font-semibold">{country}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-sm">We also advise on IELTS alternatives where accepted (e.g., PTE/Duolingo/MOI) and special cases like UK universities without IELTS</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services We Offer{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                (Gujrat)
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Looking for the best consultant in Gujrat? Our process is transparent, timeline-driven, and focused on results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 mb-4 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IELTS Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IELTS{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Coaching
              </span>{" "}
              in Gujrat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experienced trainers for Listening, Reading, Writing, Speaking with modern teaching methods and practical tasks
            </p>
          </motion.div>

          {/* IELTS Features Carousel */}
          <div className="relative overflow-hidden mb-16">
            <motion.div 
              className="flex gap-6"
              animate={{ x: [-0, -50 + "%"] }}
              transition={{ 
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              {[...ieltsFeatures, ...ieltsFeatures].map((feature, index) => (
                <motion.div
                  key={`${feature}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % ieltsFeatures.length) * 0.05 }}
                  className="group cursor-pointer flex-shrink-0"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1 min-w-[280px]">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                        {feature.split(' – ')[0] || feature.split(':')[0] || feature.split('.')[0]}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.split(' – ')[1] || feature.split(':')[1] || feature}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-[#1D50C9] via-[#1845B3] to-[#1565c0] text-white overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  <BookOpen className="w-20 h-20 mx-auto mb-6 text-white opacity-90" />
                  <div style={{color: '#ffffff', fontWeight: 'bold', fontSize: '1.875rem', marginBottom: '1rem', textShadow: 'none', display: 'block'}}>
                    Ready to Start Your Study Abroad Journey?
                  </div>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Book your free consultation and start your study abroad Gujrat journey today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={() => setIsFormOpen(true)} className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-4 text-lg font-semibold" data-testid="office-free-consultation">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Enroll Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                      Free Assessment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              Ready to start your study abroad journey from Gujrat? Let's discuss your goals and create a plan together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                <h3 className="text-4xl font-bold text-gray-900 mb-8">
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

            {/* Contact Card */}
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
                      <h4 className="text-white font-bold text-lg mb-2">Address</h4>
                      <p className="text-blue-100 leading-relaxed">
                        Dunya Consultants, Service Morh Road, Baghdad Colony, Gujrat
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Phone</h4>
                      <a href="tel:+923001051947" className="text-blue-100 hover:text-white transition-colors text-lg">
                        +92 300-105-1947
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Office Hours</h4>
                      <p className="text-blue-100 text-lg">
                        Monday - Saturday: 10 AM - 6 PM
                      </p>
                    </div>
                  </div>
                  
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Our Gujrat office provides comprehensive visa consultation services including document preparation, application processing, and pre-departure guidance for students planning to study abroad.
                  </p>
                </div>

                <div className="space-y-4 mt-4">
                  <Button size="lg" onClick={() => setIsFormOpen(true)} className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold" data-testid="office-contact-consultation">
                    <span className="flex items-center justify-center w-full">
                      Book Free Consultation
                      <Calendar className="w-5 h-5 ml-2" />
                    </span>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                    <a href="https://maps.app.goo.gl/CCixqVyJaA8Hjz756" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
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

      <CompactConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <Footer />
    </div>
  );
}
