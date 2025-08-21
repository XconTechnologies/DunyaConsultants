import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, CheckCircle, Users, GraduationCap, FileText, Globe, Award, Heart, ArrowRight, BookOpen, MessageCircle, Calendar, ChevronDown, ChevronUp, Star, Target } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import joharOffice1 from "@assets/IMG-20250419-WA0086_1755765616664.jpg";
import joharOffice2 from "@assets/IMG-20250419-WA0079_1755765618829.jpg";
import joharOffice3 from "@assets/IMG-20250419-WA0077_1755765622670.jpg";

export default function LahoreJohar() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const services = [
    {
      icon: Users,
      title: "Personalized Career Advice",
      description: "We listen to your objectives and recommend the best study options for you, so don't expect generic recommendations.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Find the Perfect University",
      description: "Are you unsure of where to study? We'll connect you with a university that suits your goals and cost range, whether it's in the UK, USA, Canada, Australia, or Europe.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Hassle-Free Applications",
      description: "Leave the paperwork to us! We'll get the documentation ready, complete the necessary files, and turn it in on schedule, every step while maintaining you updated.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Visa Success",
      description: "Our visa specialists guarantee the strength of your application. We'll go over all of your paperwork, get you ready for interviews, and give you more self-assurance.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Pre-Departure Preparation",
      description: "From mock interviews to travel tips, we make sure you're fully ready before you fly.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const ieltsFeatures = [
    "Friendly, experienced trainers",
    "Focus on speaking, listening, reading & writing",
    "Small groups for personalized attention",
    "Free assessment before you start"
  ];

  const whyChooseUs = [
    "Experienced & trustworthy advisors",
    "Honest, student-focused guidance", 
    "High success rate with admissions & visas",
    "Convenient location in Johar Town, Lahore"
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
      question: "What services do you offer in Johar Town, Lahore?",
      answer: "We provide career counselling, university shortlisting, application support, scholarship guidance, test prep (IELTS, PTE, TOEFL, Duolingo), visa filing, interview practice, and pre-departure briefings."
    },
    {
      question: "Which countries can I apply to through your Johar Town office?",
      answer: "USA, UK, Australia, Canada, Belgium, Cyprus, Germany, Turkey, Finland, and Ireland."
    },
    {
      question: "Can I apply without IELTS?",
      answer: "Sometimes yes. Many universities accept PTE or the Duolingo English Test, and some may accept an MOI letter. We'll match you to options that fit your profile and intake."
    },
    {
      question: "When should I start my study abroad process?",
      answer: "Start 6–9 months before your intake. This leaves time for tests, documents, applications, and visa."
    },
    {
      question: "How do you support the visa process?",
      answer: "We give updated checklists, review your documents, build a compliant file, and run mock interviews so you feel confident."
    },
    {
      question: "How long does a student visa take?",
      answer: "Timelines vary by country and season. Starting early and submitting a complete file helps avoid delays."
    }
  ];

  const officeImages = [
    {
      src: joharOffice1,
      alt: "Study Consultants Johar Town Office - Modern consultation area with blue chairs and professional setup"
    },
    {
      src: joharOffice2,
      alt: "Study Consultants Johar Town Office - Professional workspace with country flags and motivational decor"
    },
    {
      src: joharOffice3,
      alt: "Study Consultants Johar Town Office - Spacious consultation lounge with comfortable seating arrangement"
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Dream of Studying Abroad? We Can Help!
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              At Study consultants Lahore, we make the process easy and stress-free as a study abroad consultants in Johar Town, Lahore.
            </p>
            <p className="text-lg mb-8 opacity-80">
              From choosing the right course to getting your visa, we guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#1D50C9] hover:bg-blue-50 text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +92 300-827-1947
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Support You Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#1D50C9' }}>
              How We Support You:
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive support system ensures your study abroad journey is smooth and successful
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
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

      {/* IELTS Training Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#1D50C9' }}>
                IELTS Training in Johar Town
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Need to take IELTS? Our program makes it easy:
              </p>
              
              <div className="space-y-4 mb-8">
                {ieltsFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="text-lg px-8 py-4" style={{ backgroundColor: '#1D50C9' }}>
                <BookOpen className="w-5 h-5 mr-2" />
                Join IELTS Training
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1D50C9]/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-bold mb-4" style={{ color: '#1D50C9' }}>IELTS</div>
                  <p className="text-gray-600 mb-6">
                    Comprehensive IELTS preparation with expert trainers and proven methods
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Small Classes
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Expert Trainers
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#1D50C9' }}>
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for study abroad success in Johar Town, Lahore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-gray-700 font-medium">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Support Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#1D50C9' }}>
              Countries We Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Apply to top destinations worldwide with our expert guidance
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{
                x: [0, -100 * countries.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {duplicatedCountries.map((country, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-12 mx-auto mb-4 rounded-lg overflow-hidden shadow-md border-2 border-blue-200">
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
                  <h3 className="font-semibold text-gray-800">{country}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Images Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#1D50C9' }}>
              Our Johar Town Office
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our modern, comfortable office designed for productive consultations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {officeImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#1D50C9' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our services in Johar Town
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow border-0 h-full">
                    <CardContent className="p-0">
                      <button
                        className="w-full p-6 text-left focus:outline-none"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-800 pr-4">
                            {faq.question}
                          </h3>
                          {expandedFaq === index ? (
                            <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#1D50C9' }} />
                          ) : (
                            <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#1D50C9' }} />
                          )}
                        </div>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-gray-100"
                          >
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#1565c0] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Let's Start Your Journey!
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Ready to study abroad? Reach out today! We'd love to help you turn your dream into reality.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Visit Us:</p>
                    <p className="opacity-90">1st Floor, 85/R1, Phase 2, Johar Town, Lahore</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Call:</p>
                    <a href="tel:+92300-827-1947" className="opacity-90 hover:opacity-100 transition-opacity">
                      +92 300-827-1947
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Google Maps:</p>
                    <a 
                      href="https://maps.app.goo.gl/dF9NNwLCi6prpgVq5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="opacity-90 hover:opacity-100 transition-opacity"
                    >
                      View Location
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Schedule Your Free Consultation</h3>
              <p className="mb-6 opacity-90">
                Take the first step towards your international education dreams. Book a free consultation with our expert counselors today.
              </p>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 text-lg py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10 text-lg py-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-sm opacity-80">
                  Walk-ins welcome • Free initial consultation • Expert guidance guaranteed
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}