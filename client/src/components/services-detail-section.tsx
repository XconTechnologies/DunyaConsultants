import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Star
} from "lucide-react";

export default function ServicesDetailSection() {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: "admission",
      title: "Admission Guidance",
      icon: GraduationCap,
      description: "Complete university application and admission support",
      color: "from-blue-500 to-blue-600",
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
      process: [
        { step: "Profile Assessment", time: "1 week", description: "Evaluate academic background and preferences" },
        { step: "University Research", time: "1 week", description: "Research and shortlist suitable universities" },
        { step: "Application Preparation", time: "4-6 weeks", description: "Prepare and review all application materials" },
        { step: "Submission & Follow-up", time: "2-4 weeks", description: "Submit applications and track progress" },
        { step: "Decision & Acceptance", time: "8-12 weeks", description: "Receive offers and make final decision" }
      ],
      successRate: "95%",
      clientsServed: "2,500+"
    },
    {
      id: "visa",
      title: "Visa Filing",
      icon: FileText,
      description: "Expert visa application and documentation services",
      color: "from-blue-500 to-blue-600",
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
      process: [
        { step: "Visa Assessment", time: "3 days", description: "Determine visa category and requirements" },
        { step: "Document Collection", time: "2-3 weeks", description: "Gather and prepare all required documents" },
        { step: "Application Submission", time: "1 week", description: "Submit visa application with biometrics" },
        { step: "Interview Preparation", time: "1 week", description: "Mock interviews and coaching" },
        { step: "Decision & Collection", time: "4-8 weeks", description: "Track application and collect passport" }
      ],
      successRate: "92%",
      clientsServed: "3,200+"
    },
    {
      id: "sop",
      title: "SOP & Documentation Support",
      icon: PenTool,
      description: "Professional statement writing and document preparation",
      color: "from-blue-500 to-blue-600",
      price: "PKR 8,000 - 20,000",
      duration: "2-4 weeks",
      features: [
        "Statement of Purpose writing",
        "Personal statement development",
        "Letter of recommendation guidance",
        "CV/Resume optimization",
        "Academic transcript evaluation",
        "Document translation and certification"
      ],
      process: [
        { step: "Initial Consultation", time: "2 days", description: "Understand background and goals" },
        { step: "Draft Preparation", time: "1 week", description: "Create initial drafts of all documents" },
        { step: "Review & Revision", time: "3-5 days", description: "Multiple review cycles with feedback" },
        { step: "Final Editing", time: "2-3 days", description: "Professional editing and proofreading" },
        { step: "Document Certification", time: "3-5 days", description: "Notarization and official certification" }
      ],
      successRate: "98%",
      clientsServed: "4,100+"
    },
    {
      id: "coaching",
      title: "IELTS/PTE Coaching",
      icon: BookOpen,
      description: "Comprehensive English language test preparation",
      color: "from-blue-500 to-blue-600",
      price: "PKR 12,000 - 25,000",
      duration: "2-6 months",
      features: [
        "Diagnostic assessment test",
        "Personalized study plan",
        "Expert instructor guidance",
        "Practice tests and materials",
        "Speaking practice sessions",
        "Score improvement guarantee"
      ],
      process: [
        { step: "Diagnostic Test", time: "2 hours", description: "Assess current English proficiency level" },
        { step: "Study Plan Creation", time: "2 days", description: "Customize learning path based on target score" },
        { step: "Intensive Training", time: "8-20 weeks", description: "Regular classes and practice sessions" },
        { step: "Mock Tests", time: "Ongoing", description: "Weekly practice tests with detailed feedback" },
        { step: "Final Preparation", time: "1 week", description: "Exam strategies and last-minute tips" }
      ],
      successRate: "88%",
      clientsServed: "1,800+"
    },
    {
      id: "predeparture",
      title: "Pre-departure Briefing",
      icon: Plane,
      description: "Complete preparation for international study experience",
      color: "from-blue-500 to-blue-600",
      price: "PKR 5,000 - 15,000",
      duration: "1-2 weeks",
      features: [
        "Country-specific orientation",
        "Cultural adaptation guidance",
        "Banking and finance setup",
        "Healthcare and insurance info",
        "Academic system overview",
        "Emergency contacts and support"
      ],
      process: [
        { step: "Pre-departure Assessment", time: "1 day", description: "Review student needs and concerns" },
        { step: "Orientation Sessions", time: "3-5 days", description: "Comprehensive country and culture briefing" },
        { step: "Practical Arrangements", time: "2-3 days", description: "Banking, insurance, and documentation" },
        { step: "Final Checklist", time: "1 day", description: "Last-minute preparations and reminders" },
        { step: "Ongoing Support", time: "Ongoing", description: "24/7 support during initial settlement" }
      ],
      successRate: "99%",
      clientsServed: "2,200+"
    },
    {
      id: "accommodation",
      title: "Accommodation & Travel",
      icon: Home,
      description: "Housing and travel arrangement services",
      color: "from-blue-500 to-blue-600",
      price: "PKR 10,000 - 30,000",
      duration: "2-6 weeks",
      features: [
        "University accommodation booking",
        "Private housing search",
        "Flight booking assistance",
        "Airport pickup arrangements",
        "Temporary accommodation",
        "Local area orientation"
      ],
      process: [
        { step: "Requirement Analysis", time: "2 days", description: "Understand accommodation and travel preferences" },
        { step: "Options Research", time: "1 week", description: "Find suitable accommodation and travel options" },
        { step: "Booking & Confirmation", time: "3-5 days", description: "Secure bookings and confirmations" },
        { step: "Travel Arrangements", time: "1 week", description: "Organize flights and airport transfers" },
        { step: "Arrival Support", time: "1 week", description: "Assistance during first week of arrival" }
      ],
      successRate: "96%",
      clientsServed: "1,600+"
    }
  ];

  const testimonials = [
    {
      name: "Ayesha Khan",
      service: "Admission Guidance",
      university: "University of Toronto",
      rating: 5,
      comment: "Outstanding service! Got admission to my dream university with full guidance.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b31c1d67?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ahmad Hassan",
      service: "Visa Filing",
      university: "University of Melbourne",
      rating: 5,
      comment: "Visa process was smooth and stress-free with their expert support.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Fatima Ali",
      service: "IELTS Coaching",
      university: "University of Manchester",
      rating: 5,
      comment: "Improved my IELTS score from 6.0 to 7.5 in just 3 months!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1e3a8a]">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From admission guidance to post-arrival support, we provide end-to-end services for your study abroad journey
          </p>
        </motion.div>

        {/* Service Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {services.map((service, index) => (
            <Button
              key={service.id}
              variant={selectedService === index ? "default" : "outline"}
              onClick={() => setSelectedService(index)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all ${
                selectedService === index
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                  : "hover:bg-gray-100"
              }`}
            >
              <service.icon className="h-5 w-5" />
              <span className="font-medium">{service.title}</span>
            </Button>
          ))}
        </motion.div>

        {/* Selected Service Details */}
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className={`bg-gradient-to-r ${services[selectedService].color} text-white p-8`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    {React.createElement(services[selectedService].icon, { className: "h-8 w-8" })}
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-2">{services[selectedService].title}</CardTitle>
                    <CardDescription className="text-white/90 text-lg">
                      {services[selectedService].description}
                    </CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{services[selectedService].price}</div>
                  <div className="text-white/80">{services[selectedService].duration}</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 m-4 rounded-xl">
                  <TabsTrigger value="overview" className="rounded-lg">Overview</TabsTrigger>
                  <TabsTrigger value="process" className="rounded-lg">Process</TabsTrigger>
                  <TabsTrigger value="features" className="rounded-lg">Features</TabsTrigger>
                  <TabsTrigger value="testimonials" className="rounded-lg">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="p-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center shadow-lg border-l-4 border-blue-500">
                      <CardContent className="p-6">
                        <Award className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900">{services[selectedService].successRate}</h3>
                        <p className="text-gray-600">Success Rate</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center shadow-lg border-l-4 border-blue-500">
                      <CardContent className="p-6">
                        <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900">{services[selectedService].clientsServed}</h3>
                        <p className="text-gray-600">Clients Served</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center shadow-lg border-l-4 border-blue-500">
                      <CardContent className="p-6">
                        <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900">{services[selectedService].duration}</h3>
                        <p className="text-gray-600">Typical Duration</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 text-center">
                    <Button size="lg" className={`bg-gradient-to-r ${services[selectedService].color} text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all`}>
                      Get Started with {services[selectedService].title}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="process" className="p-6">
                  <div className="space-y-6">
                    {services[selectedService].process.map((step, index) => (
                      <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${services[selectedService].color} text-white rounded-full flex items-center justify-center font-bold`}>
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xl font-semibold text-gray-900">{step.step}</h4>
                                <Badge variant="secondary" className="ml-2">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {step.time}
                                </Badge>
                              </div>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="features" className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {services[selectedService].features.map((feature, index) => (
                      <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className={`h-6 w-6 text-blue-600 flex-shrink-0`} />
                            <span className="text-gray-800 font-medium">{feature}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Expert consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>24/7 support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Progress tracking</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Regular updates</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Money-back guarantee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Post-service support</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="testimonials" className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                      <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                              <p className="text-sm text-gray-600">{testimonial.university}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-blue-400" />
                            ))}
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.comment}"</p>
                          <Badge variant="secondary" className="mt-3">
                            {testimonial.service}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}