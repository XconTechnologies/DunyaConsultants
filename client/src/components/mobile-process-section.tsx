import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ChevronUp, 
  UserCheck, 
  FileText, 
  GraduationCap, 
  Plane, 
  BookOpen, 
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
  Plus,
  Minus,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CalendlyButton from "@/components/calendly-button";
import ConsultationFormPopup from "@/components/consultation-form-popup";

export default function MobileProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set([0])); // First step expanded by default
  const [expandAll, setExpandAll] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      icon: UserCheck,
      shortDescription: "Free assessment of your profile and goals",
      detailDescription: "We begin with a comprehensive evaluation of your academic background, career aspirations, and financial situation. Our expert counselors will discuss your preferred study destinations, program preferences, and timeline to create a personalized roadmap for your international education journey.",
      duration: "30-45 minutes",
      deliverables: ["Profile Assessment Report", "Country Recommendations", "Program Shortlist"],
      nextSteps: ["Document checklist preparation", "University research initiation"]
    },
    {
      step: 2,
      title: "University Selection",
      icon: GraduationCap,
      shortDescription: "Choose the best universities for your profile",
      detailDescription: "Based on your consultation results, we research and shortlist universities that match your academic profile, budget, and career goals. We provide detailed information about admission requirements, program curriculum, campus facilities, and career prospects for each recommended institution.",
      duration: "1-2 weeks",
      deliverables: ["University Comparison Chart", "Admission Requirements List", "Scholarship Opportunities"],
      nextSteps: ["Application strategy development", "Document preparation timeline"]
    },
    {
      step: 3,
      title: "Application Preparation",
      icon: FileText,
      shortDescription: "Complete and submit your applications",
      detailDescription: "Our team guides you through the entire application process, from preparing your Statement of Purpose and recommendation letters to completing online applications. We ensure all documents meet university standards and deadlines are met for maximum admission chances.",
      duration: "4-6 weeks",
      deliverables: ["Completed Applications", "Supporting Documents", "Application Timeline"],
      nextSteps: ["Application submission", "Interview preparation if required"]
    },
    {
      step: 4,
      title: "Test Preparation",
      icon: BookOpen,
      shortDescription: "IELTS, TOEFL, GRE, GMAT preparation support",
      detailDescription: "We provide comprehensive test preparation support including study materials, practice tests, and expert coaching for required standardized tests. Our experienced trainers help you achieve the scores needed for your target universities.",
      duration: "2-4 months",
      deliverables: ["Study Materials", "Practice Tests", "Score Reports"],
      nextSteps: ["Test registration", "Score submission to universities"]
    },
    {
      step: 5,
      title: "Visa Processing",
      icon: Award,
      shortDescription: "Student visa application and approval",
      detailDescription: "Once you receive university acceptance, we assist with the complete visa application process. This includes document preparation, visa form completion, interview preparation, and guidance on financial documentation to ensure visa approval.",
      duration: "4-8 weeks",
      deliverables: ["Visa Application", "Supporting Documents", "Interview Preparation"],
      nextSteps: ["Visa interview scheduling", "Travel preparation"]
    },
    {
      step: 6,
      title: "Pre-Departure",
      icon: Plane,
      shortDescription: "Final preparations for your journey",
      detailDescription: "We provide comprehensive pre-departure orientation covering accommodation arrangements, travel planning, banking setup, health insurance, and cultural preparation. Our support ensures you're fully prepared for life in your new country.",
      duration: "2-3 weeks",
      deliverables: ["Pre-departure Checklist", "Travel Itinerary", "Accommodation Confirmation"],
      nextSteps: ["Departure", "Ongoing support in destination country"]
    }
  ];

  const toggleStep = (index: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSteps(newExpanded);
  };

  const toggleAllSteps = () => {
    if (expandAll) {
      setExpandedSteps(new Set());
      setExpandAll(false);
    } else {
      setExpandedSteps(new Set(processSteps.map((_, index) => index)));
      setExpandAll(true);
    }
  };

  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Step-by-Step Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Your Journey to <span className="text-primary">International Education</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
            Our proven 6-step process ensures a smooth and successful path to your dream university
          </p>
          
          {/* Mobile Controls */}
          <div className="flex justify-center space-x-4 md:hidden">
            <button
              onClick={toggleAllSteps}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {expandAll ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              <span className="font-medium">{expandAll ? 'Collapse All' : 'Expand All'}</span>
            </button>
          </div>
        </motion.div>

        {/* Desktop View - Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Step Number */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Content Card */}
                  <Card className="flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <step.icon className="w-6 h-6 text-primary" />
                          <h3 className="text-xl font-bold text-neutral-800">{step.title}</h3>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-neutral-500">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-neutral-600 mb-4">{step.detailDescription}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-2">Deliverables:</h4>
                          <ul className="space-y-1">
                            {step.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-neutral-600">
                                <CheckCircle className="w-3 h-3 #1D50C9" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-2">Next Steps:</h4>
                          <ul className="space-y-1">
                            {step.nextSteps.map((item, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-neutral-600">
                                <ArrowRight className="w-3 h-3 text-primary" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Collapsible Cards */}
        <div className="md:hidden space-y-4 mt-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden shadow-lg">
                {/* Collapsible Header */}
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full p-4 bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="text-left">
                        <div className="flex items-center space-x-2">
                          <step.icon className="w-5 h-5 text-primary" />
                          <h3 className="font-bold text-neutral-800">{step.title}</h3>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">{step.shortDescription}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-neutral-500">{step.duration}</div>
                      {expandedSteps.has(index) ? (
                        <ChevronUp className="w-5 h-5 text-neutral-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-500" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedSteps.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <CardContent className="p-4 pt-0 border-t border-neutral-100">
                        <div className="space-y-4">
                          <p className="text-neutral-600 leading-relaxed">
                            {step.detailDescription}
                          </p>
                          
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-neutral-800 mb-2 flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 #1D50C9" />
                                What You'll Receive:
                              </h4>
                              <ul className="space-y-1 ml-6">
                                {step.deliverables.map((item, idx) => (
                                  <li key={idx} className="flex items-center space-x-2 text-sm text-neutral-600">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-neutral-800 mb-2 flex items-center">
                                <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                                What Comes Next:
                              </h4>
                              <ul className="space-y-1 ml-6">
                                {step.nextSteps.map((item, idx) => (
                                  <li key={idx} className="flex items-center space-x-2 text-sm text-neutral-600">
                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6">
              Begin with a free consultation and take the first step towards your international education goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton
                size="lg"
                text="📅 Book Free Consultation"
                className="bg-white text-[#1845B3] hover:bg-blue-50 font-semibold px-6 py-3 shadow-xl"
                showIcon={false}
              />
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setIsPopupOpen(true)}
                className="border-white text-white hover:bg-white hover:text-[#1845B3] font-semibold px-6 py-3"
              >
                💬 Connect Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Consultation Form Popup */}
      <ConsultationFormPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </section>
  );
}