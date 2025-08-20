import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, CheckCircle, Users, GraduationCap, FileText, Globe, Award, Heart, ArrowRight, BookOpen, MessageCircle, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function LahoreDHACity() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const services = [
    {
      icon: Users,
      title: "Career Counseling",
      description: "Not sure which course or country is best for you? Our advisors at DHA, Lahore sit down with you, understand your goals, and suggest the best study options for your future.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "We work together at multiple top ranked universities worldwide. We will assist you in selecting a study abroad program that suits your profile and budget.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Application Support",
      description: "Applications can be difficult. We prepare your documents, fill out forms, and make sure everything is submitted on time — so you don't have to worry about deadlines.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Visa Guidance",
      description: "Our study visa experts at DHA, Lahore follow the process with greatest care. We'll make sure your visa application is solid and meets with the most recent rules.",
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
      description: "We'll give you advice on travel, lodging, cultural differences, and student life before you depart, ensuring a smooth start to your new adventure.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const ieltsFeatures = [
    "Experienced Trainers – Learn from skilled and friendly instructors",
    "Modern Teaching Style – Easy lessons that actually make sense",
    "Small Class Sizes – More personal attention and feedback",
    "Free IELTS Assessment – Find out where you stand and how to improve",
    "Comfortable Classrooms – A supportive environment with the latest facilities"
  ];

  const whyChooseUs = [
    "Local office in DHA for easy access",
    "Thousands of successful admissions and visas",
    "Friendly, experienced counselors",
    "Personalized plans for each student",
    "Clear and affordable process"
  ];

  const countries = ["USA", "UK", "Australia", "Canada", "Belgium", "Cyprus", "Germany", "Turkey", "Finland", "Ireland"];

  const faqs = [
    {
      question: "Who are Dunya Consultants DHA, Lahore and how can you help me study abroad?",
      answer: "We are local study-abroad consultants in DHA, Lahore. We guide you from course selection, country selection for applications, getting scholarships, IELTS prep, visa filing, and pre-departure support - step by step, stress-free."
    },
    {
      question: "Which countries do you support?",
      answer: "We currently help students apply to the USA, UK, Australia, Canada, Belgium, Cyprus, Germany, Turkey, Finland, and Ireland - shortlisting programs and guiding you through admissions, IELTS alternatives (where applicable), and student visas for each country."
    },
    {
      question: "What services do you offer in DHA, Lahore?",
      answer: "Career counseling, university shortlisting, application preparation, document review, scholarship guidance, visa file building, interview preparation, and pre-departure briefing."
    },
    {
      question: "What documents do I need to start?",
      answer: "Typically: educational transcripts, passport, English test (if required), CV, SOP/personal statement, references, and financial documents for the visa. We'll share a custom checklist for your case."
    },
    {
      question: "When should I start my application?",
      answer: "Start 6–9 months before your target intake. This gives time for offers, scholarships, and a smooth visa process."
    },
    {
      question: "Do you offer IELTS classes in DHA, Lahore?",
      answer: "Yes. We provide expert IELTS training with modern teaching methods, small batches, free assessments, and focused feedback - right here in DHA, Lahore."
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
              <span className="text-sm font-medium">DHA Phase 1, Lahore</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Welcome to Dunya Consultants DHA, Lahore
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Do you want to study overseas? We turn that dream into a reality at Dunya Consultants DHA, Lahore. We help you every step of the way, from selecting the best university to getting your student visa.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 text-lg">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+92 300-167-1947</span>
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
                <a href="https://share.google/yDY7u2J5ED43ikhNp" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Study Abroad Partner in{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  DHA, Lahore
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our team is here to ensure that the process is successful, simple, and stress-free. We provide personalized guidance to help you achieve your international education goals.
              </p>
              
            </div>

            <div className="relative">
              <Card className="border-0 shadow-2xl bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Countries We Support</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {countries.map((country, index) => (
                      <motion.div
                        key={country}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge variant="secondary" className="w-full justify-center py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 border border-blue-200">
                          {country}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                DHA, Lahore
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  IELTS Classes
                </span>{" "}
                in DHA, Lahore
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                If you're planning to take IELTS, our DHA, Lahore center offers expert training.
              </p>
              
              <div className="space-y-4">
                {ieltsFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] text-white">
                <CardContent className="p-8 text-center">
                  <BookOpen className="w-16 h-16 mx-auto mb-6 text-white" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Expert IELTS Training</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Get comprehensive IELTS preparation with our experienced trainers and modern teaching methods.
                  </p>
                  <Button size="lg" className="bg-white text-[#1D50C9] hover:bg-blue-50">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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
              Why Students Trust{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Dunya Consultants DHA, Lahore
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">{reason}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              If you're searching for study abroad consultants in DHA, Lahore, we're here to help. Visit us today for a free consultation and take the first step toward your dream university abroad.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - FAQs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Questions
                </span>
              </h3>
              <p className="text-gray-600 mb-8">Get answers to common questions about studying abroad from DHA, Lahore</p>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <button
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        >
                          <h4 className="text-sm font-bold text-gray-900 pr-4">{faq.question}</h4>
                          {expandedFaq === index ? (
                            <ChevronUp className="w-4 h-4 text-[#1D50C9] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#1D50C9] flex-shrink-0" />
                          )}
                        </button>
                        {expandedFaq === index && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Address</h4>
                        <p className="text-blue-100 leading-relaxed">
                          1st Floor 174, 6 Street 123, Sector H, DHA Phase 1, Lahore
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Phone</h4>
                        <a href="tel:+923001671947" className="text-blue-100 hover:text-white transition-colors">
                          +92 300-167-1947
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Email</h4>
                        <a href="mailto:ar.nafey@dunyaconsultants.com" className="text-blue-100 hover:text-white transition-colors">
                          ar.nafey@dunyaconsultants.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Come visit us at our DHA office for personalized consultation and expert guidance on your study abroad journey.
                </p>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1a73e8] hover:to-[#1565c0] text-white py-4">
                    <Link href="/contact" className="flex items-center justify-center w-full">
                      Book Free Consultation
                      <Calendar className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full border-[#1D50C9] text-[#1D50C9] hover:bg-blue-50 py-4">
                    <a href="https://share.google/yDY7u2J5ED43ikhNp" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
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
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1D50C9] via-[#1845B3] to-[#1565c0] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-lg"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Visit us today for a free consultation and take the first step toward your dream university abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <a href="tel:+923001671947" className="flex items-center">
                  Call Now: +92 300-167-1947
                  <Phone className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}