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

// Import office images
import MandiBahauddinOffice1 from "@assets/mandi-bahauddin-office-1.jpg";
import MandiBahauddinOffice2 from "@assets/mandi-bahauddin-office-2.jpg";
import MandiBahauddinOffice3 from "@assets/mandi-bahauddin-office-3.jpg";

export default function MandiBahauddinOffice() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const services = [
    {
      icon: Users,
      title: "Career Counseling",
      description: "Match your strengths and goals with the right program and country.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Shortlists based on your profile, budget, and intake.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Application Handling",
      description: "Documents, forms, SOPs prepared correctly and submitted on time.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Visa Guidance",
      description: "Up-to-date checklists, file review, and interview tips.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Interview Preparation",
      description: "Mock interviews to boost your confidence and approval chances.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Pre-Departure Briefing",
      description: "Travel, accommodation, culture, and packing essentials.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const ieltsFeatures = [
    "Experienced trainers with clear strategies for all four modules",
    "Modern teaching that keeps lessons simple and practical",
    "Small batches for personal feedback and faster improvement",
    "Free assessment to know your current level and study plan",
    "Comfortable classrooms with the right learning tools",
    "End-to-end support: IELTS + admission + visa under one roof"
  ];

  const whyChooseUs = [
    "Expert guidance: Qualified, friendly counselors",
    "Personalized plans: Advice tailored to you",
    "Proven results: Strong record of admissions and visas",
    "Local support: Quick help from our Mandi Bahauddin office"
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
      question: "What services do you provide in Mandi Bahauddin?",
      answer: "Career counseling, university shortlisting, application preparation, document review, visa file building, interview prep, and pre-departure briefing."
    },
    {
      question: "Which countries can I apply to through your Mandi Bahauddin office?",
      answer: "USA, UK, Australia, Canada, Belgium, Cyprus, Germany, Turkey, Finland, and Ireland, which is matched to your profile, budget, and intake."
    },
    {
      question: "What documents do I need to start my application?",
      answer: "Transcripts, passport, English test (if required), CV, SOP/personal statement, references, and financial/visa documents. We share a custom checklist for your case."
    },
    {
      question: "When should I start the study-abroad process?",
      answer: "Ideally 6–9 months before your intake for offers, and a smooth visa timeline."
    },
    {
      question: "Do you offer IELTS classes in Mandi Bahauddin?",
      answer: "Yes! experienced trainers, small batches, modern methods, and a free assessment. We also guide on acceptable test alternatives where applicable."
    },
    {
      question: "Do you help with visa files, and interview preparation?",
      answer: "Absolutely. We shortlist universities, prepare a compliant visa file, and run mock interviews to boost your confidence and approval chances."
    }
  ];

  const officeGallery = [
    {
      image: MandiBahauddinOffice1,
      title: "Consultation Area",
      description: "Modern consultation space with international flags and world map"
    },
    {
      image: MandiBahauddinOffice2,
      title: "Reception & Entrance",
      description: "Professional reception area with blue diamond ceiling displays"
    },
    {
      image: MandiBahauddinOffice3,
      title: "Executive Office",
      description: "Executive consultation area with country flags and university materials"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#164095]"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full blur-md animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              Mandi Bahauddin Office
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dunya Consultants Mandi Bahauddin | Study Abroad & Visa Experts
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Are you thinking of studying abroad from Mandi Bahauddin? It's easy for us. Our local experts will help you every step of the way, from picking the best course and country to getting your visa documentation ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#1845B3] hover:bg-blue-50 font-semibold px-8 py-3">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Call +92 321-3001947
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose Dunya Consultants (Mandi Bahauddin)
              </h2>
              <p className="text-xl text-gray-600">
                Your trusted local partner for international education
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#1845B3] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {officeGallery.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-200">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Countries We Support
            </h2>
            <p className="text-xl text-gray-600">
              Study destinations available through our Mandi Bahauddin office
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -100 * countries.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCountries.map((country, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center space-y-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-40"
                >
                  <ReactCountryFlag
                    countryCode={countryCodesMap[country as keyof typeof countryCodesMap]}
                    svg
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <span className="font-semibold text-gray-800 text-center text-sm">
                    {country}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Study Abroad Services (Mandi Bahauddin)
            </h2>
            <p className="text-xl text-gray-600">
              Complete support for your international education journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#1845B3] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IELTS Classes Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                IELTS Classes in Mandi Bahauddin
              </h2>
              <p className="text-xl text-gray-600">
                Professional IELTS preparation with proven results
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Why Choose Our IELTS Classes?
                  </h3>
                  <div className="space-y-4">
                    {ieltsFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[#1845B3] mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-[#1845B3] to-blue-600 rounded-xl p-8 text-white">
                    <BookOpen className="w-12 h-12 mb-6" />
                    <h4 className="text-xl font-bold mb-4">Start Your IELTS Journey</h4>
                    <p className="text-blue-100 mb-6">
                      Get a free assessment to know your current level and receive a personalized study plan.
                    </p>
                    <Button className="bg-white text-[#1845B3] hover:bg-blue-50 font-semibold w-full">
                      Book Free Assessment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help you start your study abroad journey
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FAQs */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                      <div className="ml-4 flex-shrink-0 w-8 h-8 bg-[#1845B3] rounded-full flex items-center justify-center">
                        {expandedFaq === index ? (
                          <ChevronUp className="w-4 h-4 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </button>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 py-4 bg-white"
                      >
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <Card className="shadow-xl border-0 h-full" style={{ minHeight: '600px' }}>
                <CardContent className="p-8 h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h3>
                    <p className="text-gray-600">Visit our Mandi Bahauddin office or get in touch</p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1845B3] rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                        <p className="text-gray-600">Dunya Consultants Punjab Center, Mandi Bahauddin</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1845B3] rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                        <a href="tel:+923213001947" className="text-[#1845B3] hover:text-blue-700 font-medium">
                          +92 321-3001947
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1845B3] rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                        <p className="text-gray-600">Mon–Sat 10 AM–6 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1845B3] rounded-full flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                        <a 
                          href="https://maps.app.goo.gl/yJkUy1AaRXaxoEhy5" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#1845B3] hover:text-blue-700 font-medium"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full bg-[#1845B3] hover:bg-blue-700 text-white font-semibold py-3">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Consultation
                    </Button>
                    <Button variant="outline" className="w-full border-[#1845B3] text-[#1845B3] hover:bg-blue-50 font-semibold py-3">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Start WhatsApp Chat
                    </Button>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-2">Call or visit for a free consultation</p>
                    <p className="text-[#1845B3] font-semibold">Start your study-abroad journey today</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}