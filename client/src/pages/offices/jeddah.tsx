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

export default function JeddahOffice() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const services = [
    {
      icon: Users,
      title: "Student Counselling",
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
      question: "What documents do I need?",
      answer: "Passport, transcripts, English test if required, CV, SOP, references, and proof of funds."
    },
    {
      question: "Is IELTS mandatory?",
      answer: "Not always. Some courses accept PTE, TOEFL, Duolingo, or MOI."
    },
    {
      question: "How long does a visa take?",
      answer: "It depends on the country. Starting 6 to 9 months early helps."
    },
    {
      question: "Do you support online counselling?",
      answer: "Yes, by WhatsApp or video, and in the office."
    },
    {
      question: "Which countries do you support from Jeddah?",
      answer: "We currently help students apply to the USA, UK, Australia, Canada, Belgium, Cyprus, Germany, Turkey, Finland, Ireland and more - guiding you through admissions and student visas for each country."
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge 
                variant="secondary" 
                className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium backdrop-blur-sm"
              >
                <ReactCountryFlag
                  countryCode="SA"
                  svg
                  style={{
                    width: '1.2em',
                    height: '1.2em',
                  }}
                  className="mr-2"
                />
                Jeddah, Saudi Arabia
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Study Abroad from Jeddah
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Your gateway to world-class education. Expert guidance for students from Jeddah seeking international study opportunities with personalized support.
              </p>
              
              {/* Countries Infinite Scroll */}
              <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8">
                <div className="flex animate-scroll whitespace-nowrap">
                  {duplicatedCountries.map((country, index) => (
                    <div key={index} className="inline-flex items-center mx-4 text-white/90">
                      <ReactCountryFlag
                        countryCode={countryCodesMap[country]}
                        svg
                        style={{
                          width: '1.5em',
                          height: '1.5em',
                        }}
                        className="mr-2"
                      />
                      <span className="font-medium">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-3 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Path Visa Consultants
                  <span className="block text-[#1D50C9]">Jeddah Office</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Located in the heart of Jeddah, we serve students across Saudi Arabia with comprehensive study abroad guidance. Our local expertise combined with international standards ensures your success.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-[#1D50C9] mr-3 flex-shrink-0" />
                    <span className="font-medium">King Fahd Road, Jeddah 23441, Saudi Arabia</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 text-[#1D50C9] mr-3 flex-shrink-0" />
                    <span className="font-medium">+966 12 234 5678</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 text-[#1D50C9] mr-3 flex-shrink-0" />
                    <span className="font-medium">Sunday - Thursday: 9 AM - 7 PM</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#1D50C9] to-[#1565c0] rounded-2xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Our Jeddah Office?</h3>
                  <div className="space-y-4">
                    {whyChooseUs.map((reason, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-[#1D50C9] to-[#1565c0] bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete study abroad solutions from consultation to visa approval
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group hover:scale-105">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
        </div>
      </section>

      {/* IELTS Test Preparation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Test <span className="bg-gradient-to-r from-[#1D50C9] to-[#1565c0] bg-clip-text text-transparent">Preparation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master IELTS, PTE, TOEFL & Duolingo with expert guidance in Jeddah
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Infinite Scrolling Test Features */}
                <div className="space-y-6 mb-8">
                  <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex animate-scroll-slow whitespace-nowrap">
                      {ieltsFeatures.concat(ieltsFeatures).map((feature, index) => (
                        <div key={index} className="inline-flex items-center mx-6 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#1D50C9] mr-2 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {ieltsFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#1D50C9] flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-[#1D50C9] to-[#1565c0] text-white border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Award className="w-16 h-16 text-white mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Start Your Test Prep Journey</h3>
                      <p className="text-blue-100 mb-6 leading-relaxed">
                        Join our proven test preparation program in Jeddah. Small groups, personalized attention, and guaranteed score improvement.
                      </p>
                      <Button 
                        size="lg" 
                        className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        <BookOpen className="w-5 h-5 mr-2" />
                        Free Assessment Test
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#1565c0] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Visit our Jeddah office or connect online. We're here to guide your study abroad journey.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <span className="font-medium text-white">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-white flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-4">
                          <p className="text-blue-100 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">Address</h4>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          King Fahd Road<br />
                          Jeddah 23441<br />
                          Saudi Arabia
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">Phone</h4>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          +966 12 234 5678
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">Office Hours</h4>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          Sunday - Thursday: 9 AM - 7 PM<br />
                          Friday: 2 PM - 7 PM<br />
                          Saturday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book a Free Consultation
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}