import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, CheckCircle, Users, GraduationCap, FileText, Globe, Award, Heart, ArrowRight, BookOpen, MessageCircle, Calendar, ChevronDown, ChevronUp, Building2 } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function MardanOffice() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const services = [
    {
      icon: Users,
      title: "Career Counseling",
      description: "Match your strengths and goals with the right program and country. Our advisors at Mardan sit down with you, understand your aspirations, and suggest the best study options for your future.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Shortlists based on your profile, budget, and intake timelines. We work with multiple top-ranked universities worldwide to find the perfect match for you.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Application Handling",
      description: "Prepared documents, forms, SOPs correctly and on time. We handle all your application requirements so you don't have to worry about deadlines.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Visa Guidance",
      description: "Up-to-date checklists, file review, and interview practice. Our visa experts at Mardan follow the process with greatest care to ensure your success.",
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
      description: "Travel, accommodation, culture, and packing tips. We'll give you comprehensive advice to ensure a smooth start to your new adventure.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const ieltsFeatures = [
    "Experienced trainers for Listening, Reading, Writing, Speaking",
    "Modern teaching with clear, practical lessons",
    "Small batches for personal feedback and faster improvement",
    "Free assessment to map your band-score plan",
    "End-to-end support: IELTS + admission + visa under one roof"
  ];

  const whyChooseUs = [
    "Expert guidance: Friendly, qualified counselors",
    "Personalized plans: Advice tailored to you",
    "Proven results: Strong record in admissions and visas",
    "Local support: Easy follow-ups at our Mardan office",
    "End-to-end service from consultation to visa approval"
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
      question: "Which countries can I apply to from Mardan?",
      answer: "We process applications for the USA, UK, Australia, Canada, Belgium, Cyprus, Germany, Turkey, Finland, and Ireland, aligned with your goals and budget."
    },
    {
      question: "What documents do I need to start?",
      answer: "Transcripts, passport, English test (if required), CV, SOP/personal statement, references, and financial/visa documents. We share a custom checklist for your case."
    },
    {
      question: "When should I begin my study-abroad process?",
      answer: "Start 6–9 months before your target intake to secure offers, scholarships, and a smooth visa timeline."
    },
    {
      question: "Do you offer IELTS classes in Mardan?",
      answer: "Yes! Experienced trainers, small batches, and a free assessment. We also advise on accepted test alternatives where applicable."
    },
    {
      question: "Do you help with scholarships, visa files, and interviews?",
      answer: "Absolutely. We shortlist scholarships, prepare a compliant visa file, and conduct mock interviews to boost confidence and approval chances."
    },
    {
      question: "What makes Dunya Consultants Mardan special?",
      answer: "Our local team understands the unique needs of students from Mardan and KPK region. We provide personalized guidance with proven results and local support."
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
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Dunya Consultants
                <span className="block text-3xl md:text-5xl mt-2 text-blue-200">Mardan Office</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Planning to study abroad from Mardan? We make it simple and stress-free. Our local team helps you choose the right course and country.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold text-lg mb-2">Visit Our Office</h3>
                <p className="text-blue-100 text-sm">2nd Floor, Office Unit A, Walyan Commercial Centre, Nowshera Road, Mardan</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold text-lg mb-2">Call Us Today</h3>
                <p className="text-blue-100 text-sm">+92 317-1114617</p>
                <p className="text-blue-100 text-xs mt-1">Mon–Sat 10 AM–6 PM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <MessageCircle className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold text-lg mb-2">WhatsApp Chat</h3>
                <p className="text-blue-100 text-sm">Quick responses</p>
                <p className="text-blue-100 text-xs mt-1">Available 9 AM–9 PM</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('tel:+923171114617')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +92 317-1114617
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1D50C9] font-semibold px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/923171114617?text=Hello, I want to learn about study abroad opportunities from Mardan')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#1565c0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-white/15 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  Why Choose Dunya Consultants Mardan?
                </h2>
                
                <div className="grid gap-6">
                  {whyChooseUs.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
                    >
                      <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                      <p className="text-white/90 leading-relaxed">{reason}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    size="lg"
                    className="bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Office Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 aspect-square flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <Building2 className="w-12 h-12 text-white/70 mx-auto mb-3" />
                    <p className="text-white/80 text-sm">Modern Office Space</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 aspect-square flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-white/70 mx-auto mb-3" />
                    <p className="text-white/80 text-sm">Expert Counselors</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 aspect-square flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-white/70 mx-auto mb-3" />
                    <p className="text-white/80 text-sm">Study Materials</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 aspect-square flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-white/70 mx-auto mb-3" />
                    <p className="text-white/80 text-sm">Achievements</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Destinations We Cover
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              USA, UK, Australia, Canada, Belgium, Cyprus, Germany, Turkey, Finland, and Ireland
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: [0, -100 * countries.length] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
                className="flex gap-6 flex-shrink-0"
                style={{ width: `${200 * countries.length}%` }}
              >
                {duplicatedCountries.map((country, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-shrink-0 w-48"
                  >
                    <div className="text-center">
                      <ReactCountryFlag
                        countryCode={countryCodesMap[country as keyof typeof countryCodesMap]}
                        svg
                        style={{
                          width: '60px',
                          height: '45px',
                        }}
                        className="mx-auto mb-4 rounded-lg shadow-sm"
                      />
                      <h3 className="font-semibold text-gray-900 text-lg">{country}</h3>
                      <p className="text-gray-500 text-sm">Study Destination</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do in Mardan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive study abroad services tailored for students from Mardan and the KPK region
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IELTS Classes in Mardan
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expert IELTS training with modern teaching methods and personalized attention
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* IELTS Features */}
              <div className="lg:col-span-2 space-y-6">
                {ieltsFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] text-white border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Award className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                      <h3 className="text-2xl font-bold mb-4">Start Your IELTS Journey</h3>
                      <p className="text-blue-100 mb-6">
                        Get your free assessment and personalized study plan today
                      </p>
                      <div className="space-y-3">
                        <Button 
                          size="lg"
                          className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold"
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Free Assessment
                        </Button>
                        <Button 
                          size="lg"
                          variant="outline"
                          className="w-full border-white text-white hover:bg-white/10"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call for Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about studying abroad? Our expert counselors in Mardan are here to help
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-[#1D50C9] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#1D50C9] flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
                style={{ minHeight: '600px' }}
              >
                <Card className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] text-white border-0 shadow-2xl h-full">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <MapPin className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Visit Our Mardan Office</h3>
                        <p className="text-blue-100">We're here to help you achieve your study abroad dreams</p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Address</p>
                            <p className="text-blue-100">2nd Floor, Office Unit A, Walyan Commercial Centre, Nowshera Road, Mardan</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <Phone className="w-6 h-6 text-blue-200 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Phone</p>
                            <p className="text-blue-100">+92 317-1114617</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <Clock className="w-6 h-6 text-blue-200 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Office Hours</p>
                            <p className="text-blue-100">Monday - Saturday: 10 AM - 6 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mt-8">
                      <Button 
                        size="lg"
                        className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold"
                        onClick={() => window.open('tel:+923171114617')}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white/10"
                        onClick={() => window.open('https://wa.me/923171114617')}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}