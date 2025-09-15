import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  FileText, 
  PenTool, 
  BookOpen, 
  Plane, 
  Home,
  CheckCircle,
  Clock,
  Users,
  Award,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsultationBookingSection from "@/components/consultation-booking-section";

export default function ServicesPage() {
  const services = [
    {
      id: "admission",
      title: "Admission Guidance",
      icon: GraduationCap,
      description: "Complete university application and admission process support for studying abroad",
      color: "from-[#1D50C9] to-[#1845B3]",
      price: "PKR 25,000 - 50,000",
      duration: "3-6 months",
      features: [
        "University selection and shortlisting",
        "Application form completion",
        "Document verification and preparation",
        "Application submission and tracking",
        "Interview preparation",
        "Offer letter negotiation"
      ],
      successRate: "High",
      clientsServed: "Many"
    },
    {
      id: "visa",
      title: "Visa Filing",
      icon: FileText,
      description: "Expert visa application and documentation services for universities abroad",
      color: "from-[#1D50C9] to-[#1845B3]",
      price: "PKR 15,000 - 35,000",
      duration: "2-4 months",
      features: [
        "Visa category assessment",
        "Document checklist preparation",
        "Application form assistance",
        "Financial documentation support",
        "Interview preparation",
        "Visa tracking and updates"
      ],
      successRate: "High",
      clientsServed: "Many"
    },
    {
      id: "test-prep",
      title: "Test Preparation",
      icon: PenTool,
      description: "Comprehensive IELTS, PTE, TOEFL, and Duolingo English test preparation",
      color: "from-[#1D50C9] to-[#1845B3]",
      price: "PKR 8,000 - 25,000",
      duration: "1-3 months",
      features: [
        "Mock test sessions",
        "Personalized study plans",
        "Speaking practice sessions",
        "Writing feedback and correction",
        "Reading and listening exercises",
        "Score improvement guarantee"
      ],
      successRate: "High",
      clientsServed: "Many"
    },
    {
      id: "scholarship",
      title: "Scholarship Assistance",
      icon: Award,
      description: "Help securing scholarships and financial aid for international education",
      color: "from-[#1D50C9] to-[#1845B3]",
      price: "PKR 10,000 - 30,000",
      duration: "2-5 months",
      features: [
        "Scholarship research and identification",
        "Application essay writing",
        "Merit-based application support",
        "Need-based aid applications",
        "Interview preparation",
        "Follow-up and negotiation"
      ],
      successRate: "Good",
      clientsServed: "Many"
    },
    {
      id: "accommodation",
      title: "Accommodation Support",
      icon: Home,
      description: "Secure comfortable and affordable housing options near your university",
      color: "from-[#1D50C9] to-[#1845B3]",
      price: "PKR 5,000 - 15,000",
      duration: "1-2 months",
      features: [
        "University housing applications",
        "Private accommodation search",
        "Contract review and negotiation",
        "Location and safety assessment",
        "Airport pickup arrangements",
        "Ongoing support and assistance"
      ],
      successRate: "High",
      clientsServed: "Many"
    },
    {
      id: "pre-departure",
      title: "Pre-Departure Briefing",
      icon: Plane,
      description: "Essential guidance and orientation before you travel to your study destination",
      color: "from-[#1D50C9] to-[#1845B3]",
      price: "PKR 3,000 - 8,000",
      duration: "2-4 weeks",
      features: [
        "Cultural orientation sessions",
        "Banking and financial guidance",
        "Travel and packing assistance",
        "Academic system briefing",
        "Emergency contact setup",
        "Alumni network introduction"
      ],
      successRate: "Excellent",
      clientsServed: "Many"
    }
  ];

  const stats = [
    { icon: Users, label: "Team Members", value: "200+" },
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: MapPin, label: "Countries Covered", value: "15+" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
                Our Services
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Complete Study Abroad Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              From admission guidance to pre-departure support, we provide comprehensive services to make your study abroad journey seamless and successful
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center space-x-6 text-blue-200"
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>200+ Team Members</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>98% Success Rate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#1D50C9] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-[#1D50C9] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent mb-6"
            >
              Our Complete Service
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We offer end-to-end support for your study abroad journey, ensuring every step is handled with expertise and care
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} text-white flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Duration:</span> {service.duration}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span>{service.successRate} Success</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{service.clientsServed}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent mb-6"
            >Why Choose Dunya Consultants?</motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "5+ Years of Excellence",
                description: "Proven expertise in international education consulting with many successful cases."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified counselors and visa experts with deep knowledge of global education systems and requirements."
              },
              {
                icon: CheckCircle,
                title: "98% Success Rate",
                description: "Industry-leading success rate in university admissions and visa approvals across all destinations."
              },
              {
                icon: Clock,
                title: "End-to-End Support",
                description: "Complete assistance from initial counseling to post-arrival support, ensuring a smooth journey."
              },
              {
                icon: Star,
                title: "Personalized Guidance",
                description: "Tailored solutions based on individual profiles, preferences, and career aspirations."
              },
              {
                icon: Phone,
                title: "24/7 Support",
                description: "Round-the-clock assistance and emergency support for students studying abroad."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#1D50C9] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-[#1D50C9] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+92 326 1111947</p>
              <p className="text-sm text-gray-500">Monday to Saturday, 10 AM - 6 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-[#1D50C9] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@pathvisaconsultants.com</p>
              <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-[#1D50C9] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">20+ Offices Across Pakistan</p>
              <p className="text-sm text-gray-500">Find your nearest location</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Book Your Free Consultation Section */}
      <ConsultationBookingSection />
      <Footer />
    </div>
  );
}