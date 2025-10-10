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

export default function JeddahOffice() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const services = [
    {
      icon: Users,
      title: "Career and Course Counselling",
      description: "Match your career goals with the right program and country. Our advisors in Jeddah sit down with you, understand your aspirations, and suggest the best study options for your future.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "University Shortlisting",
      description: "University shortlisting by profile and intake. We work with multiple top-ranked universities worldwide to find the perfect match for your academic background and budget.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Application Support",
      description: "Application filing, documents, and statement of purpose. We handle all your application requirements professionally and ensure everything is submitted on time.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Visa Guidance",
      description: "Visa guidance, checklists, file review, and mock interviews. Our visa experts in Jeddah follow the process with greatest care to ensure your success.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Pre-Departure Briefing",
      description: "Pre-departure briefing on travel, housing, and culture. We'll give you comprehensive advice to ensure a smooth start to your new adventure.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Test Preparation",
      description: "IELTS | PTE | TOEFL | Duolingo small groups, clear strategies, free assessment. Expert trainers with personalized feedback to help you achieve your target scores.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const ieltsFeatures = [
    "IELTS | PTE | TOEFL | Duolingo small groups",
    "Clear strategies and proven methods",
    "Free assessment to map your score plan",
    "Expert trainers with personalized feedback",
    "End-to-end support: test prep + admission + visa"
  ];

  const whyChooseUs = [
    "Expert counsellors with proven track record",
    "Personalised plans tailored to your goals",
    "Proven outcomes with strong success rate",
    "Local and online support available",
    "Clear and affordable process"
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
      question: "Which documents are needed?",
      answer: "Passport, transcripts, English test if required, CV, SOP, references, and funds evidence."
    },
    {
      question: "Do you help with scholarships?",
      answer: "Yes, both country and university awards."
    },
    {
      question: "Is IELTS mandatory?",
      answer: "Not always. PTE, TOEFL, Duolingo, or MOI may be accepted."
    },
    {
      question: "Can families ask about dependents?",
      answer: "Yes, rules differ by country. We advise case by case."
    },
    {
      question: "Do you support online meetings?",
      answer: "Yes, by WhatsApp or video, and in the office."
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
              <span className="text-sm font-medium">Jeddah Office</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
              Dunya Consultants | Jeddah (Saudi Arabia)
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Based in Jeddah, we make overseas education simple. We help with course and country selection, strong applications, and a compliant student visa.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 text-lg">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+966 59 638 2593</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Sun–Thu 9 AM–7 PM</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              

                <Button size="lg" onClick={() => setIsFormOpen(true)} className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-4 text-lg font-semibold" data-testid="office-free-consultation">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <a href="https://maps.app.goo.gl/YourJeddahLocationLink" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center">
                  Get Directions
                  <MapPin className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
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
              Services in{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Jeddah
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your study abroad journey
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
              Master{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Test Preparation
              </span>{" "}
              with Expert Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Achieve your dream test scores with our comprehensive training program designed for success
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
                    Book a free consultation and start your study abroad plan from Jeddah with our expert guidance and proven success methods.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={() => setIsFormOpen(true)} className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-4 text-lg font-semibold" data-testid="office-free-consultation">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Book Free Consultation
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
              If you're searching for study abroad consultants in Jeddah, we're here to help. Visit us today for a free consultation and take the first step toward your dream university abroad.
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
                        Above Topten, Engineering Square, Makarona Street, 2nd Floor, Office 27, Jeddah 23447, Saudi Arabia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Phone</h4>
                      <a href="tel:+966596382593" className="text-blue-100 hover:text-white transition-colors text-lg">
                        +966 59 638 2593
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
                        Sunday - Thursday: 9 AM - 7 PM<br />
                        Friday: 2 PM - 7 PM
                      </p>
                    </div>
                  </div>
                  
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Book a free consultation and start your study abroad plan from Jeddah. Email: umer@dunyaconsultants.com
                  </p>
                </div>

                <div className="space-y-4 mt-4">
                  <Button size="lg" onClick={() => setIsFormOpen(true)} className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold" data-testid="office-contact-consultation">
                    <span className="flex items-center justify-center w-full">
                      Book Free Consultation
                      <Calendar className="w-5 h-5 ml-2" />
                    </span>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full border-white/50 text-white hover:bg-white/10 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 font-semibold">
                    <a href="https://wa.me/966596382593" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center justify-center w-full">
                      WhatsApp Chat
                      <MessageCircle className="w-5 h-5 ml-2" />
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
