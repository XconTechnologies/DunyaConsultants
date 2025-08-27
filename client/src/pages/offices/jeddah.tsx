import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Users, 
  BookOpen, 
  Award,
  GraduationCap,
  FileText,
  Building
} from 'lucide-react';
import { Link } from 'wouter';

export default function JeddahOffice() {
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

  const services = [
    {
      icon: Users,
      title: "Student Counselling",
      description: "Personalized guidance for course and country selection based on your academic background and career goals."
    },
    {
      icon: FileText,
      title: "Application Support",
      description: "Complete assistance with university applications, documentation, and submission processes."
    },
    {
      icon: Award,
      title: "Visa Documentation",
      description: "Expert help with student visa preparation, interview practice, and compliance requirements."
    }
  ];

  const testPrepFeatures = [
    "Free Assessment Test",
    "Experienced Instructors", 
    "Flexible Timings",
    "Mock Tests Available",
    "Score Improvement Guarantee",
    "Small Batch Sizes"
  ];

  const whyChooseUs = [
    "Experienced team with proven track record",
    "Personalized strategy for each student", 
    "High visa approval rates",
    "Local and remote support available",
    "Free consultation and guidance",
    "Complete end-to-end services"
  ];

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
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#163C8C] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30 text-sm font-medium backdrop-blur-sm">
                🇸🇦 Saudi Arabia Office
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Dunya Consultants
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-blue-100">
                  Jeddah, Saudi Arabia
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Study Abroad and Student Visa Experts - Making overseas education simple with personalized guidance for Saudi students
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20"
            >
              <div className="grid md:grid-cols-3 gap-4 text-white">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-200" />
                  <span className="font-medium">+966 59 638 2593</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-200" />
                  <span className="font-medium">Jeddah, Saudi Arabia</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-200" />
                  <span className="font-medium">umer@dunyaconsultants.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
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
                className="border-white text-white hover:bg-white hover:text-[#1D50C9] font-semibold px-8 py-3 backdrop-blur-sm transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Visit Our Office
              </Button>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Countries We Support from{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Jeddah Office
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Jeddah team specializes in helping Saudi students pursue higher education in top global destinations
            </p>
          </motion.div>

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
            <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6">
              <h3 className="text-2xl font-bold text-white text-center">Study Destinations</h3>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {countries.map((country, index) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {country.flag}
                    </div>
                    <p className="font-medium text-gray-800 group-hover:text-[#1D50C9] transition-colors">
                      {country.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services in{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Jeddah
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support from counselling to pre-departure - everything you need for successful study abroad journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Test Preparation */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Test Preparation in{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Jeddah
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compact coaching for IELTS, PTE, TOEFL, and Duolingo with experienced instructors and proven results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {testPrepFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4 flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-medium text-sm">{feature}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#163C8C] text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Award className="w-16 h-16 mx-auto mb-6 text-white" />
                    <h3 className="text-2xl font-bold mb-4">Ready to Start Your Test Prep?</h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      Join our proven test preparation programs with expert instructors and achieve your target scores for international admissions.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Start Free Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch with{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Jeddah Office
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your study abroad journey? Contact our Jeddah team for personalized guidance and support.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border border-gray-200 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-start">
                          <span className="w-6 h-6 bg-[#1D50C9] text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            ?
                          </span>
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 ml-9 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
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
                      <p className="text-blue-100 text-sm leading-relaxed">
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
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Sunday - Thursday: 9 AM - 7 PM<br />
                        Friday: 2 PM - 7 PM<br />
                        Saturday: Closed
                      </p>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}