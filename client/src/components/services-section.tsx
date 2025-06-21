import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, CheckCircle, ArrowRight, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Services data with your specified offerings
const services = [
  {
    id: 1,
    title: "Career Counselling",
    description: "Expert guidance to help you choose the right career path and educational opportunities that align with your goals and interests.",
    icon: "🔍",
    color: "from-blue-500 to-blue-600",
    bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100",
    process: [
      "Initial consultation and assessment",
      "Career aptitude testing",
      "Educational pathway planning",
      "Goal setting and timeline creation"
    ],
    benefits: [
      "Personalized career roadmap",
      "Expert industry insights",
      "Long-term success planning",
      "Confidence in decision making"
    ],
    duration: "2-3 sessions",
    includes: ["Career assessment", "Personal consultation", "Written report", "Follow-up support"]
  },
  {
    id: 2,
    title: "University Selection",
    description: "Strategic university selection based on your academic profile, career goals, and financial considerations for best-fit institutions.",
    icon: "🏫",
    color: "from-green-500 to-green-600", 
    bgPattern: "bg-gradient-to-br from-green-50 to-green-100",
    process: [
      "Academic profile analysis",
      "University research and ranking",
      "Program compatibility check",
      "Final recommendation report"
    ],
    benefits: [
      "Best-fit university selection",
      "Higher admission chances",
      "Cost-effective choices",
      "Career-focused decisions"
    ],
    duration: "1-2 weeks",
    includes: ["University research", "Program analysis", "Ranking comparison", "Final recommendations"]
  },
  {
    id: 3,
    title: "Admission Support",
    description: "Complete admission process management ensuring your applications meet all requirements and deadlines for maximum success.",
    icon: "📝",
    color: "from-purple-500 to-purple-600",
    bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100", 
    process: [
      "Application requirement analysis",
      "Timeline and deadline management",
      "Application form guidance",
      "Submission tracking and follow-up"
    ],
    benefits: [
      "Streamlined admission process",
      "No missed deadlines",
      "Professional guidance",
      "Higher acceptance rates"
    ],
    duration: "4-6 weeks",
    includes: ["Requirement checklist", "Application guidance", "Deadline management", "Progress tracking"]
  },
  {
    id: 4,
    title: "Document Preparation",
    description: "Professional document preparation and verification ensuring all your paperwork meets international standards and requirements.",
    icon: "✍️",
    color: "from-orange-500 to-orange-600",
    bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100",
    process: [
      "Document requirement analysis",
      "Professional drafting and formatting",
      "Quality review and verification",
      "Final certification and notarization"
    ],
    benefits: [
      "Professional document standards",
      "Reduced rejection risk",
      "Time-saving process",
      "Expert quality assurance"
    ],
    duration: "2-3 weeks",
    includes: ["Document drafting", "Professional review", "Formatting", "Certification support"]
  },
  {
    id: 5,
    title: "Application Submission",
    description: "Systematic application submission management with tracking and follow-up to ensure your applications reach admissions offices safely.",
    icon: "📤",
    color: "from-teal-500 to-teal-600",
    bgPattern: "bg-gradient-to-br from-teal-50 to-teal-100",
    process: [
      "Final application review",
      "Online portal submission",
      "Document upload verification",
      "Confirmation and tracking setup"
    ],
    benefits: [
      "Guaranteed submission",
      "Real-time tracking",
      "Professional handling",
      "Peace of mind"
    ],
    duration: "1 week",
    includes: ["Submission management", "Tracking setup", "Confirmation receipts", "Follow-up support"]
  },
  {
    id: 6,
    title: "Interview Preparation", 
    description: "Comprehensive interview coaching to help you confidently present yourself to admissions committees and visa officers.",
    icon: "🛂",
    color: "from-red-500 to-red-600",
    bgPattern: "bg-gradient-to-br from-red-50 to-red-100",
    process: [
      "Mock interview sessions",
      "Common questions practice",
      "Body language coaching",
      "Confidence building exercises"
    ],
    benefits: [
      "Increased confidence",
      "Professional presentation",
      "Higher success rates",
      "Reduced interview anxiety"
    ],
    duration: "5-7 sessions",
    includes: ["Mock interviews", "Feedback sessions", "Practice materials", "Follow-up coaching"]
  },
  {
    id: 7,
    title: "Pre-Departure Support",
    description: "Essential preparation for your journey abroad, covering everything from travel arrangements to cultural adaptation and settling guidance.",
    icon: "🏠",
    color: "from-indigo-500 to-indigo-600",
    bgPattern: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    process: [
      "Travel documentation check",
      "Accommodation arrangements",
      "Cultural orientation session",
      "Emergency contacts setup"
    ],
    benefits: [
      "Smooth transition abroad",
      "Cultural preparedness",
      "Emergency readiness",
      "Confidence for new journey"
    ],
    duration: "1-2 sessions",
    includes: ["Travel checklist", "Cultural guide", "Emergency contacts", "Orientation materials"]
  },
  {
    id: 8,
    title: "Test Preparation Support",
    description: "Comprehensive test preparation for IELTS, PTE, TOEFL and other standardized tests with expert coaching and practice materials.",
    icon: "📚",
    color: "from-pink-500 to-pink-600",
    bgPattern: "bg-gradient-to-br from-pink-50 to-pink-100",
    process: [
      "Assessment and level testing",
      "Customized study plan",
      "Regular practice sessions",
      "Mock test evaluations"
    ],
    benefits: [
      "Improved test scores",
      "Structured preparation",
      "Expert guidance",
      "Confidence building"
    ],
    duration: "6-12 weeks",
    includes: ["Study materials", "Practice tests", "Coaching sessions", "Progress tracking"]
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const servicesPerPage = 1;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + 1 >= services.length ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= services.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? services.length - 1 : prev - 1
    );
  };

  const currentService = services[currentIndex];

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From career counselling to test preparation, we provide end-to-end support 
            for your study abroad journey with expert guidance every step of the way.
          </p>
        </motion.div>

        {/* Services Slider Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Navigation Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-neutral-600">
                {currentIndex + 1} of {services.length}
              </span>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-600 group-hover:text-primary" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              >
                <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-primary" />
              </button>
            </div>
          </div>

          {/* Single Service Display */}
          <div className="max-w-2xl mx-auto mb-8">
            <motion.div
              key={currentService.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`relative overflow-hidden rounded-3xl ${currentService.bgPattern} p-10 border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern id={`pattern-${currentService.id}`} x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                        <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#pattern-${currentService.id})`} />
                  </svg>
                </div>

                {/* Service Content */}
                <div className="relative z-10 text-center">
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <div className={`w-32 h-32 bg-gradient-to-br ${currentService.color} rounded-full flex items-center justify-center text-white text-6xl shadow-2xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                      {currentService.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors duration-300">{currentService.title}</h3>
                    <Badge variant="secondary" className="text-sm bg-white/80 px-4 py-2">
                      Duration: {currentService.duration}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                    {currentService.description}
                  </p>

                  {/* Key Benefits Preview */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-neutral-800 mb-4">Key Benefits</h4>
                    <div className="grid md:grid-cols-2 gap-3 max-w-lg mx-auto">
                      {currentService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3 bg-white/60 rounded-lg px-4 py-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-neutral-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          size="lg"
                          className={`bg-gradient-to-r ${currentService.color} text-white hover:shadow-xl transition-all duration-500 transform group-hover:scale-105 font-semibold px-8`}
                          onClick={() => setSelectedService(currentService)}
                        >
                          Explore Service Details
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${selectedService?.color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg`}>
                              {selectedService?.icon}
                            </div>
                            <div>
                              <div className="text-2xl font-bold">{selectedService?.title}</div>
                              <Badge variant="secondary" className="text-sm mt-1">
                                Duration: {selectedService?.duration}
                              </Badge>
                            </div>
                          </DialogTitle>
                          <DialogDescription className="text-lg text-neutral-600 mt-4 leading-relaxed">
                            {selectedService?.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        {selectedService && (
                          <div className="grid md:grid-cols-2 gap-8 mt-8">
                            {/* Process */}
                            <div>
                              <h3 className="text-xl font-semibold mb-6 flex items-center">
                                <Clock className="w-6 h-6 mr-3 text-primary" />
                                Our Process
                              </h3>
                              <div className="space-y-4">
                                {selectedService.process.map((step, idx) => (
                                  <div key={idx} className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                      {idx + 1}
                                    </div>
                                    <span className="text-neutral-700 leading-relaxed">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h3 className="text-xl font-semibold mb-6 flex items-center">
                                <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                                Key Benefits
                              </h3>
                              <div className="space-y-4">
                                {selectedService.benefits.map((benefit, idx) => (
                                  <div key={idx} className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                    <span className="text-neutral-700 leading-relaxed">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* What's Included */}
                            <div className="md:col-span-2 mt-8">
                              <h3 className="text-xl font-semibold mb-6">What's Included in This Service</h3>
                              <div className="grid md:grid-cols-2 gap-4">
                                {selectedService.includes.map((item, idx) => (
                                  <div key={idx} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-neutral-700 font-medium">{item}</span>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Call to Action */}
                              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="text-lg font-semibold text-neutral-800">Ready to get started?</h4>
                                    <p className="text-neutral-600">Contact us for a free consultation and personalized service plan.</p>
                                  </div>
                                  <Button className="bg-primary hover:bg-primary/90">
                                    Get Quote
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    
                    <Button size="lg" variant="outline" className="bg-white/80 border-white/70 hover:bg-white font-semibold px-8">
                      Get Free Quote
                    </Button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentService.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ExternalLink className="w-6 h-6 text-neutral-400" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Need Help Choosing the Right Service?
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Our expert counselors are here to guide you through our comprehensive service offerings 
              and create a personalized plan for your study abroad journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}