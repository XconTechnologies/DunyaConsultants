import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle, ArrowRight, Users, FileText, GraduationCap, Plane, Award, Calendar, Clock, Star, Circle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    id: 1,
    title: "Free Consultation",
    subtitle: "Understand Your Goals",
    description: "Meet with our expert counselors to discuss your academic background, career aspirations, and study abroad dreams.",
    icon: Users,
    duration: "30-45 mins",
    deliverables: ["Personalized assessment", "Country recommendations", "Budget planning"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    pattern: "dots"
  },
  {
    id: 2,
    title: "University Selection",
    subtitle: "Find Your Perfect Match",
    description: "Research and shortlist universities that align with your profile, preferences, and career objectives.",
    icon: GraduationCap,
    duration: "1-2 weeks",
    deliverables: ["University shortlist", "Program analysis", "Admission requirements"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    pattern: "waves"
  },
  {
    id: 3,
    title: "Test Preparation",
    subtitle: "Achieve Your Target Score",
    description: "Prepare for IELTS, PTE, or TOEFL with our expert coaching and achieve the required language proficiency.",
    icon: Award,
    duration: "2-4 weeks",
    deliverables: ["Test preparation plan", "Mock tests", "Score improvement"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    pattern: "grid"
  },
  {
    id: 4,
    title: "Documentation",
    subtitle: "Prepare Your Profile",
    description: "Compile and prepare all necessary documents including transcripts, SOPs, and recommendation letters.",
    icon: FileText,
    duration: "2-3 weeks",
    deliverables: ["Document checklist", "SOP writing", "Academic transcripts"],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    pattern: "lines"
  },
  {
    id: 5,
    title: "Application Submission",
    subtitle: "Apply to Universities",
    description: "Submit your applications to selected universities with all required documents and track their progress.",
    icon: Calendar,
    duration: "1-2 weeks",
    deliverables: ["Application submissions", "Fee payments", "Progress tracking"],
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    pattern: "circles"
  },
  {
    id: 6,
    title: "Visa & Departure",
    subtitle: "Final Steps to Success",
    description: "Secure your student visa, arrange accommodation, and prepare for your departure to your dream destination.",
    icon: Plane,
    duration: "4-6 weeks",
    deliverables: ["Visa approval", "Accommodation booking", "Pre-departure briefing"],
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    pattern: "hexagons"
  }
];

export default function RedesignedProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(1);

  const getPatternSvg = (pattern: string) => {
    switch (pattern) {
      case "dots":
        return `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`;
      case "waves":
        return `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M0 20c10 0 10-10 20-10s10 10 20 10v20H0z'/%3E%3C/g%3E%3C/svg%3E")`;
      case "grid":
        return `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Crect width='1' height='1'/%3E%3C/g%3E%3C/svg%3E")`;
      default:
        return `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg mb-6">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-neutral-600">Step-by-Step Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Your Journey to International Education
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Our proven 6-step process ensures a smooth and successful path to your dream university. 
            From initial consultation to visa approval, we guide you every step of the way.
          </p>
        </motion.div>

        {/* Timeline with Steps */}
        <div className="relative mb-16">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full opacity-30"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-20">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl border-4 border-white`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-neutral-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-neutral-700">{step.id}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <Card className="shadow-xl border-0 bg-white">
                      <CardContent className="p-6">
                        {/* Duration Badge */}
                        <div className="inline-flex items-center px-3 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600 mb-4">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </div>
                        
                        {/* Step Title */}
                        <h3 className="text-2xl font-bold text-neutral-800 mb-2">{step.title}</h3>
                        <p className="text-neutral-600 font-medium mb-4">{step.subtitle}</p>
                        <p className="text-neutral-600 leading-relaxed mb-6">{step.description}</p>
                        
                        {/* Deliverables */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wide">
                            Key Deliverables
                          </h4>
                          <div className="space-y-2">
                            {step.deliverables.map((deliverable, i) => (
                              <div key={i} className="flex items-center space-x-3">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-neutral-600">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for layout */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="block md:hidden space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start space-x-4"
              >
                {/* Mobile Timeline Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-20 bg-gradient-to-b from-primary to-accent opacity-30"></div>
                )}
                
                {/* Step Circle */}
                <div className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-4 border-white flex-shrink-0`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <Card className="flex-1 shadow-lg border-0 bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center px-2 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.duration}
                      </div>
                      <span className="text-lg font-bold text-neutral-300">0{step.id}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-neutral-800 mb-1">{step.title}</h3>
                    <p className="text-sm text-neutral-600 mb-3">{step.subtitle}</p>
                    <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{step.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wide">
                        Key Deliverables
                      </h4>
                      {step.deliverables.slice(0, 2).map((deliverable, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-neutral-600">{deliverable}</span>
                        </div>
                      ))}
                      {step.deliverables.length > 2 && (
                        <div className="text-xs text-primary font-medium">
                          +{step.deliverables.length - 2} more
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simple Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-neutral-200">
              <div className="text-3xl font-bold text-primary mb-2">12-16</div>
              <div className="text-neutral-600">Weeks to Complete</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-neutral-200">
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <div className="text-neutral-600">Success Rate</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-neutral-200">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-neutral-600">Expert Support</div>
            </div>
          </div>
        </motion.div>

        {/* Simple Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Get personalized guidance from our expert counselors and take the first step towards your dream university.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100 font-semibold px-8 py-3"
            >
              Book Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}