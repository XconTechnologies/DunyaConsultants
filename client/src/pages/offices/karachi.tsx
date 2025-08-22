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
// Using temporary office images - please replace with actual Karachi office images
import karachiOffice1 from "@assets/IMG-20250419-WA0086_1755765616664.jpg";
import karachiOffice2 from "@assets/IMG-20250419-WA0079_1755765618829.jpg";
import karachiOffice3 from "@assets/IMG-20250419-WA0077_1755765622670.jpg";

export default function Karachi() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const services = [
    {
      icon: Users,
      title: "Personalized Study Abroad Consultation",
      description: "First, we listen. We will match you with courses in the UK, USA, Canada, Australia, Germany, Ireland, Turkey or Cyprus based on your goals.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "University Applications Made Easy",
      description: "No more worrying about paperwork! We keep you informed, meet deadlines, and prepare documents.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Visa Success",
      description: "Our consultants for study visas are skilled at making your application stand out. includes tested interviews!",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Pre-Departure Prep",
      description: "Before you travel, get accommodation assistance, cultural knowledge, and travel advice.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const ieltsFeatures = [
    "Experienced teachers",
    "Small groups",
    "Free assessment",
    "Modern classrooms"
  ];

  const whyChooseUs = [
    "Your local partner: We're top-rated study consultants near me right here in Karachi",
    "Proven results: Consistently high admission and visa success rates",
    "Plans built for you: No one-size-fits-all approaches - only personalized guidance",
    "Risk-free start: Begin with completely free counselling for study abroad"
  ];

  const studyDestinations = [
    "Study in UK: With expert UK student visa support",
    "Study in USA: Tailored guidance for international students", 
    "Study in Canada: Combine education with work opportunities",
    "Study in Australia, Germany & Italy: Quality education in vibrant destinations",
    "Emerging options: Cyprus and Finland for unique programs"
  ];

  const countries = ["USA", "UK", "Australia", "Canada", "Germany", "Cyprus", "Ireland", "Turkey", "Finland"];
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
    "Ireland": "IE",
    "Turkey": "TR",
    "Finland": "FI"
  };

  const faqs = [
    {
      question: "What services do you offer in Karachi?",
      answer: "We provide career counselling, university shortlisting, application support, scholarship guidance, test prep (IELTS, PTE, TOEFL, Duolingo), visa filing, interview practice, and pre-departure briefings."
    },
    {
      question: "Which countries can I apply to through your Karachi office?",
      answer: "UK, USA, Canada, Australia, Germany, Ireland, Turkey, Cyprus, and Finland."
    },
    {
      question: "Do you offer IELTS classes in Karachi?",
      answer: "Yes, we offer IELTS classes with experienced teachers, small groups, free assessment, and modern classrooms."
    },
    {
      question: "What makes you the best consultant for UK study visa in Karachi?",
      answer: "We're among Karachi's top-rated overseas education consultants with proven results, personalized guidance, and high visa success rates."
    },
    {
      question: "Do you offer free consultation for study abroad?",
      answer: "Yes, we offer completely free counselling for study abroad to help you get started risk-free."
    },
    {
      question: "Where is your Karachi office located?",
      answer: "Our office is located at 05-C Prime Point Building, Main, 2 Khayaban-e-Ittehad Road, Phase Defence Housing Authority, Karachi."
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
              <span className="text-sm font-medium">Defence Housing Authority, Karachi</span>
            </div>
            
            <h1 className="font-bold leading-tight mb-8 text-white italic" style={{ fontSize: '64px' }}>
              Your Friendly Study Abroad Guides in Karachi
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Do you want to study abroad but find yourself in trouble? We make the process of getting a letter of acceptance easier at Dunya Consultants in Karachi. Simple, step-by-step instructions without any complicated terms.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 text-lg">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+92 323-251-6319</span>
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
                <a href="https://maps.app.goo.gl/8wXLTgDLBuvf88cQ7" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Get Directions
                  <MapPin className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Help{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Karachi Students
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of the challenging tasks so you may focus on your goals:
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Why Karachi Students{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Trust Us
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
                    src={karachiOffice1}
                    alt="Study Consultants Karachi Office"
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
                      src={karachiOffice2}
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
                      src={karachiOffice3}
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

      {/* Test Preparation Section */}
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
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                IELTS Training
              </span>{" "}
              in Karachi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experienced teachers, small groups, free assessment, and modern classrooms
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
                      <h3 className="text-sm font-bold text-gray-900 mb-3 leading-tight">
                        {feature}
                      </h3>
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
                    Join hundreds of successful students who achieved their target scores with our expert guidance and proven teaching methods in Karachi.
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

      {/* Study Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Where We Excel:{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Your Study Destinations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've successfully guided Karachi students into universities across the globe:
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
                  className="flex-shrink-0 w-48 bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
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

          <div className="mt-12 grid md:grid-cols-1 lg:grid-cols-5 gap-6">
            {studyDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-gray-700 font-medium">{destination}</p>
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
              Let's Begin{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Your Journey!
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Looking for the best consultant for a UK study visa or study in USA options? We're among Karachi's top-rated overseas education consultants. Walk in for free consultation for study abroad today!
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
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl overflow-hidden"
                    >
                      <div className="w-full">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          className="w-full text-left px-4 py-4 focus:outline-none hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900 text-sm pr-4">{faq.question}</h4>
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
                        05-C Prime Point Building, Main, 2 Khayaban-e-Ittehad Road, Phase Defence Housing Authority, Karachi
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Phone</h4>
                      <a href="tel:+923232516319" className="text-blue-100 hover:text-white transition-colors text-lg">
                        +92 323-251-6319
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Email</h4>
                      <a href="mailto:info@dunyaconsultants.com" className="text-blue-100 hover:text-white transition-colors text-lg">
                        info@dunyaconsultants.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Our Karachi Defence office provides comprehensive visa consultation services including document preparation, application processing, and pre-departure guidance for students planning to study abroad.
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
                    <a href="https://maps.app.goo.gl/8wXLTgDLBuvf88cQ7" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
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