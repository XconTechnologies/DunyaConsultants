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
import islamabadOffice1 from "@assets/WhatsApp Image 2024-07-20 at 11.05.13_0f23fc96_1755846273550.jpg";
import islamabadOffice2 from "@assets/WhatsApp Image 2024-07-20 at 11.05.12_50cd8325_1755846275288.jpg";
import islamabadOffice3 from "@assets/WhatsApp Image 2024-07-20 at 11.02.31_cc1213a4_1755846277007.jpg";

export default function Islamabad() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const services = [
    {
      icon: Users,
      title: "Personalized Career Advice",
      description: "Reach with you to discuss your goals and recommend the best locations and courses based on your requirements and available resources.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Find the Perfect University",
      description: "We don't just list countries – we match you with places where you'll thrive. From UK's centuries-old universities to USA's vibrant campus life.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Hassle-Free Applications",
      description: "Take care of all the paperwork, including visa documents and applications. We simplify the complex with clear next steps.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Visa Success",
      description: "Complete student-visa filing with proven results. Our students' visas and acceptances speak for us.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Pre-Departure Preparation",
      description: "Before you leave, give helpful tips about living overseas. We stay by your side from first chat to touchdown overseas.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "IELTS/PTE/Duolingo Training",
      description: "Small groups, experienced trainers, free assessment, and a personalized study plan for IELTS, PTE, TOEFL, or Duolingo.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const testPrepFeatures = [
    "Small groups for personalized attention – Individual feedback and guidance",
    "Experienced trainers with proven results – Learn from skilled instructors",
    "Free assessment before you start – Find out where you stand and how to improve",
    "Flexible scheduling for working professionals – Weekend and evening classes available"
  ];

  const whyChooseUs = [
    "Listen first: Your dreams, not our agenda, shape your path",
    "Simplify the complex: No jargon, just clear next steps",
    "Prove it works: Our students' visas and acceptances speak for us",
    "Stay by your side: From first chat to touchdown overseas",
    "Convenient Blue Area location in Islamabad"
  ];

  const countries = ["UK", "USA", "Canada", "Australia", "Germany", "Cyprus", "Ireland"];
  // Duplicate countries for seamless infinite scrolling
  const duplicatedCountries = [...countries, ...countries];

  // Country codes mapping for flags
  const countryCodesMap = {
    "USA": "US",
    "UK": "GB", 
    "Australia": "AU",
    "Canada": "CA",
    "Germany": "DE",
    "Cyprus": "CY",
    "Ireland": "IE"
  };

  const faqs = [
    {
      question: "What services do you offer at Dunya Consultants Islamabad?",
      answer: "We provide career counselling, country and course selection, university applications, scholarship guidance, IELTS/PTE/Duolingo prep, complete student-visa filing, interview practice, and pre-departure support."
    },
    {
      question: "Which countries can I apply to from Islamabad?",
      answer: "UK, USA, Canada, Australia, Germany, Cyprus, Ireland, and other European destinations. We recommend the best fit based on your profile, budget, and intake."
    },
    {
      question: "Can I study abroad without IELTS?",
      answer: "In many cases yes. Universities may accept PTE or the Duolingo English Test, and some accept a Medium of Instruction (MOI) letter. We'll shortlist options that match your eligibility."
    },
    {
      question: "How long does a student visa take?",
      answer: "Timelines vary by country and season. Submitting a complete file early improves your odds. We monitor processing times and keep you updated."
    },
    {
      question: "Do you offer IELTS or PTE classes in Islamabad?",
      answer: "Yes. Small groups, experienced trainers, free assessment, and a personalized study plan for IELTS, PTE, TOEFL, or Duolingo."
    },
    {
      question: "Can I book online counselling instead of visiting the office?",
      answer: "Yes. We offer in-office meetings in Blue Area and online sessions via phone, WhatsApp, or video whichever you prefer."
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
              <span className="text-sm font-medium">Blue Area, Islamabad</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-8 text-white">
              Dunya Consultants, Islamabad: Your Trustworthy Study Abroad Guide
            </h1>
            
            <p className="text-lg lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Do you want to begin your studies in Australia, Canada, the United States, or the United Kingdom or anywhere else in Europe? Are you afraid to apply for visas and applications? We understand. For years, we at Dunya Consultants Islamabad have been assisting students just like you in recognizing their goals of studying abroad.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 text-lg">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>0333-7775458</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Mon–Sat 10 AM–6 PM</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <a href="https://maps.app.goo.gl/MPVGi5ZDaCbhBTjK7" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
              Why Students{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Choose Us
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
                  <img 
                    src={islamabadOffice3}
                    alt="Dunya Consultants Islamabad Office"
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
                    <img 
                      src={islamabadOffice1}
                      alt="Professional consultation space"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="overflow-hidden rounded-xl shadow-lg"
                  >
                    <img 
                      src={islamabadOffice2}
                      alt="Modern office environment"
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
                  <p className="text-gray-600 text-sm">Helping students achieve their dreams in top study destinations worldwide</p>
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
              What We Do for Students in{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Islamabad
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that applying to universities abroad can be challenging. For this reason, we:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white group-hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
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
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                IELTS Training
              </span>{" "}
              in Islamabad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Small groups, experienced trainers, free assessment, and a personalized study plan for IELTS, PTE, TOEFL, or Duolingo
            </p>
          </motion.div>

          {/* Test Prep Features Carousel */}
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
              {[...testPrepFeatures, ...testPrepFeatures].map((feature, index) => (
                <motion.div
                  key={`${feature}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % testPrepFeatures.length) * 0.05 }}
                  className="group cursor-pointer flex-shrink-0"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1 min-w-[280px]">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                        {feature.split(' – ')[0]}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.split(' – ')[1]}
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
                    Ready to Start Your Test Preparation?
                  </div>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join hundreds of successful students who achieved their target scores with our expert guidance and proven teaching methods in Islamabad.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Join Training Classes
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
              Let's Talk About{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Your Future
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop by our office in the Blue Area or give us a call. We'll answer your questions honestly and help you figure out the best path forward.
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
                      <h4 className="text-white font-bold text-lg mb-2">Address</h4>
                      <p className="text-blue-100 leading-relaxed">
                        Mezz-3, ATS Centre, Fazal-e-Haq Road, Blue Area, Islamabad
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Phone</h4>
                      <a href="tel:+923337775458" className="text-blue-100 hover:text-white transition-colors text-lg">
                        0333-7775458
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
                    Our Islamabad Blue Area office provides comprehensive visa consultation services including document preparation, application processing, and pre-departure guidance for students planning to study abroad.
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
                    <a href="https://maps.app.goo.gl/MPVGi5ZDaCbhBTjK7" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
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