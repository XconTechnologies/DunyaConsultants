import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle, ArrowRight, Users, FileText, GraduationCap, Plane, Award, Calendar, Clock, Star } from "lucide-react";
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

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveStep(step.id)}
            >
              <Card className={`h-full border-0 shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl ${
                activeStep === step.id ? 'ring-2 ring-primary shadow-2xl -translate-y-1' : ''
              }`}>
                <CardContent className="p-0 h-full">
                  {/* Card Header */}
                  <div 
                    className={`${step.bgColor} p-6 relative overflow-hidden`}
                    style={{ backgroundImage: getPatternSvg(step.pattern) }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-neutral-400">0{step.id}</div>
                        <div className="text-xs text-neutral-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">{step.title}</h3>
                    <p className="text-sm font-medium text-neutral-600">{step.subtitle}</p>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-neutral-600 mb-4 leading-relaxed">{step.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-neutral-800 uppercase tracking-wide">
                        Key Deliverables
                      </h4>
                      {step.deliverables.map((deliverable, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={activeStep === step.id ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{deliverable}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-neutral-200">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-neutral-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-2">Complete Timeline</h3>
            <p className="text-neutral-600">From consultation to departure - your journey mapped out</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-2">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center space-x-3 bg-neutral-50 rounded-full px-4 py-2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{step.id}</span>
                  </div>
                  <span className="text-sm font-medium text-neutral-700">{step.duration}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-neutral-400 mx-2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have successfully reached their dream universities through our proven process.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
                >
                  Start Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
                >
                  Download Process Guide
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}