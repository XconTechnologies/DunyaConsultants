import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Globe, FileText, Send, Shield, Plane, CheckCircle, Clock, Target, ArrowRight, GraduationCap, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    id: 1,
    title: "Initial Consultation & Assessment",
    subtitle: "Comprehensive Career Evaluation",
    description: "Begin your journey with a detailed consultation where our certified counselors assess your academic profile, career aspirations, and study preferences to create a personalized roadmap.",
    icon: MessageCircle,
    color: "from-[#1D50C9] to-[#1845B3]",
    bgColor: "bg-blue-50",
    pattern: "dots",
    duration: "Week 1",
    deliverables: [
      "Academic profile assessment and gap analysis",
      "Career counseling and goal alignment session",
      "Country suitability evaluation",
      "Preliminary budget planning and scholarship identification"
    ]
  },
  {
    id: 2,
    title: "Strategic Planning & Research",
    subtitle: "Destination & Institution Selection",
    description: "Conduct comprehensive research on countries, universities, and programs. Make informed decisions based on rankings, career prospects, costs, and immigration policies.",
    icon: Globe,
    color: "from-[#1D50C9] to-[#1845B3]",
    bgColor: "bg-blue-50",
    pattern: "waves",
    duration: "Week 2-3",
    deliverables: [
      "Detailed country comparison matrix",
      "University shortlist with program analysis",
      "Scholarship and funding opportunity research",
      "Final destination and university selection"
    ]
  },
  {
    id: 3,
    title: "Test Preparation & Language Training",
    subtitle: "Standardized Test Excellence",
    description: "Prepare for required standardized tests (IELTS, TOEFL, GRE, GMAT) with expert coaching and achieve competitive scores for university admission.",
    icon: BookOpen,
    color: "from-[#1D50C9] to-[#1845B3]",
    bgColor: "bg-blue-50",
    pattern: "grid",
    duration: "Week 2-8",
    deliverables: [
      "Diagnostic test and skill assessment",
      "Personalized study plan and materials",
      "Expert coaching sessions and practice tests",
      "Test registration and scheduling assistance"
    ]
  },
  {
    id: 4,
    title: "Document Preparation & Verification",
    subtitle: "Application Portfolio Development",
    description: "Prepare, authenticate, and organize all required documentation including academic records, professional documents, and supporting materials for university applications.",
    icon: FileText,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    pattern: "circles",
    duration: "Week 4-7",
    deliverables: [
      "Academic transcript evaluation and verification",
      "Professional document translation and notarization",
      "Statement of Purpose and essay writing assistance",
      "Letters of recommendation coordination"
    ]
  },
  {
    id: 5,
    title: "University Application Submission",
    subtitle: "Strategic Application Management",
    description: "Submit comprehensive applications to selected universities with optimized documentation, ensuring all requirements are met and deadlines are adhered to.",
    icon: Send,
    color: "from-[#1D50C9] to-[#1845B3]",
    bgColor: "bg-blue-50",
    pattern: "triangles",
    duration: "Week 8-10",
    deliverables: [
      "Complete online application submission",
      "Application fee payment and receipt management",
      "Document upload verification and quality check",
      "Application status tracking system setup"
    ]
  },
  {
    id: 6,
    title: "Admission Follow-up & Decision",
    subtitle: "University Response Management",
    description: "Track application progress, handle university communications, and make informed decisions on admission offers while preparing for the next steps.",
    icon: CheckCircle,
    color: "from-[#1D50C9] to-[#1845B3]",
    bgColor: "bg-blue-50",
    pattern: "hexagons",
    duration: "Week 10-14",
    deliverables: [
      "Application status monitoring and updates",
      "University interview preparation and coaching",
      "Admission offer evaluation and comparison",
      "Acceptance confirmation and enrollment deposit"
    ]
  },
  {
    id: 7,
    title: "Visa Application & Processing",
    subtitle: "Immigration Documentation",
    description: "Navigate the complex visa application process with expert guidance, ensuring all immigration requirements are met for successful visa approval.",
    icon: Shield,
    color: "from-[#1D50C9] to-[#1845B3]",
    bgColor: "bg-blue-50",
    pattern: "waves",
    duration: "Week 14-18",
    deliverables: [
      "Visa category determination and application preparation",
      "Financial documentation and sponsorship letters",
      "Visa interview preparation and mock sessions",
      "Biometric appointment scheduling and assistance"
    ]
  },
  {
    id: 8,
    title: "Pre-Departure Preparation",
    subtitle: "Journey Readiness",
    description: "Complete final preparations including accommodation arrangements, travel planning, orientation sessions, and essential checklist completion for a smooth departure.",
    icon: Plane,
    color: "from-[#1D50C9] to-[#1845B3]",
    bgColor: "bg-blue-50",
    pattern: "dots",
    duration: "Week 18-20",
    deliverables: [
      "Accommodation booking and confirmation",
      "Flight reservation and travel insurance",
      "Pre-departure orientation and cultural briefing",
      "Banking and financial setup guidance"
    ]
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
        <div className="absolute top-10 left-10 w-72 h-72 #1D50C9 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-4 w-72 h-72 #1D50C9 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 #1D50C9 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
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
            <Star className="w-5 h-5 #1D50C9" />
            <span className="text-sm font-medium text-neutral-600">Step-by-Step Process</span>
          </div>
          <h2 className="text-2xl md:text-6xl font-bold mb-6" style={{ color: '#1D50C9' }}>
            <span style={{ color: '#1D50C9' }}>
              Your Journey to International Education
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Our proven 6-step process ensures a smooth and successful path to your dream university. 
            From initial consultation to visa approval, we guide you every step of the way.
          </p>
        </motion.div>

        {/* Circular Timeline */}
        <div className="relative mb-16">
          {/* Desktop Circular Timeline */}
          <div className="hidden lg:block">
            <div className="relative w-full max-w-5xl mx-auto h-[800px] flex items-center justify-center">
              {/* Central Hub */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute z-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-2xl"
              >
                <div className="w-72 h-72 rounded-full bg-white flex flex-col items-center justify-center text-center p-8">
                  <GraduationCap className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">Your Journey to</h3>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    International Education
                  </h3>
                  <p className="text-sm text-neutral-600 mt-3">
                    Complete 8-step comprehensive process designed for your success
                  </p>
                  <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-neutral-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>18-20 Weeks</span>
                    </div>
                    <div className="w-px h-4 bg-neutral-300"></div>
                    <div className="flex items-center space-x-1">
                      <Target className="w-3 h-3" />
                      <span>95% Success Rate</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Circular Timeline Ring */}
              <div className="absolute w-[640px] h-[640px] rounded-full border-2 border-dashed border-neutral-300 opacity-50"></div>
              <div className="absolute w-[660px] h-[660px] rounded-full border border-primary/20"></div>
              <div className="absolute w-[680px] h-[680px] rounded-full border border-secondary/10"></div>

              {/* Process Steps in Circle */}
              {processSteps.map((step, index) => {
                const angle = (index * 45) - 90; // 45 degrees apart for 8 steps starting from top
                const radius = 320;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="absolute z-10 group cursor-pointer"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setActiveStep(step.id)}
                  >
                    {/* Connection Line to Center */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 1.2, delay: index * 0.15 + 1 }}
                      className="absolute w-28 h-0.5 bg-gradient-to-r from-primary/40 to-transparent origin-right z-0"
                      style={{
                        transform: `rotate(${angle + 180}deg)`,
                        right: '50%',
                        top: '50%',
                      }}
                    ></motion.div>

                    {/* Step Circle Container */}
                    <div className="relative">
                      {/* Outer Ring Animation */}
                      <motion.div
                        animate={activeStep === step.id ? {
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 w-28 h-28 rounded-full border-2 ${step.color.replace('from-', 'border-').replace('to-', '').split(' ')[0].replace('bg-gradient-to-br', 'border')} opacity-20 transform -translate-x-2 -translate-y-2`}
                      />
                      
                      {/* Step Circle */}
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl border-4 border-white group-hover:shadow-3xl transition-all duration-300 cursor-pointer ${
                          activeStep === step.id ? 'ring-4 ring-primary/40 scale-110' : ''
                        }`}
                      >
                        <step.icon className="w-10 h-10 text-white" />
                        
                        {/* Step Number Badge */}
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-neutral-100"
                        >
                          <span className="text-xs font-bold text-neutral-700">{step.id}</span>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Floating Info Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeStep === step.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute ${
                        index < 3 ? 'top-28' : 'bottom-28'
                      } left-1/2 transform -translate-x-1/2 w-72 pointer-events-none`}
                    >
                      <Card className="shadow-2xl border-0 bg-white">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Clock className="w-4 h-4 text-neutral-500" />
                            <span className="text-xs text-neutral-600">{step.duration}</span>
                          </div>
                          <h4 className="text-lg font-bold text-neutral-800 mb-2">{step.title}</h4>
                          <p className="text-sm text-neutral-600 mb-3">{step.subtitle}</p>
                          <div className="space-y-1">
                            {step.deliverables.slice(0, 2).map((deliverable, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 #1D50C9 flex-shrink-0" />
                                <span className="text-xs text-neutral-600">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Timeline Progress Arc */}
              <motion.div
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 3, delay: 2 }}
                className="absolute inset-0 w-full h-full"
              >
                <svg className="w-full h-full" viewBox="0 0 800 800">
                  <motion.circle
                    cx="400"
                    cy="400"
                    r="320"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                    initial={{ pathLength: 0, rotate: -90 }}
                    animate={isInView ? { pathLength: 1, rotate: 270 } : {}}
                    transition={{ duration: 4, delay: 2.5 }}
                    style={{ transformOrigin: "400px 400px" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Step Connectors */}
              {processSteps.map((step, index) => {
                const angle = (index * 45) - 90;
                const nextAngle = ((index + 1) * 45) - 90;
                const radius = 320;
                
                if (index === processSteps.length - 1) return null;

                return (
                  <motion.div
                    key={`connector-${step.id}`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 3 }}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle + 22.5}deg)`,
                      transformOrigin: '0 0',
                    }}
                  >
                    <ArrowRight className="w-5 h-5 text-primary/40 transform translate-x-72 -translate-y-2.5" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Simplified View */}
          <div className="block lg:hidden">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  {/* Step Circle */}
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-4 border-white flex-shrink-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-neutral-200">
                      <span className="text-xs font-bold text-neutral-700">{step.id}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 shadow-lg border-0 bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-3 h-3 text-neutral-500" />
                        <span className="text-xs text-neutral-600">{step.duration}</span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-800 mb-1">{step.title}</h3>
                      <p className="text-sm text-neutral-600 mb-3">{step.subtitle}</p>
                      <div className="space-y-1">
                        {step.deliverables.slice(0, 2).map((deliverable, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 #1D50C9 flex-shrink-0" />
                            <span className="text-xs text-neutral-600">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                      className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-accent opacity-40 origin-top"
                    ></motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg border border-blue-200">
              <div className="text-3xl font-bold #1845B3 mb-2">18-20</div>
              <div className="text-neutral-700 font-medium">Weeks Timeline</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg border border-blue-200">
              <div className="text-3xl font-bold #1845B3 mb-2">95%</div>
              <div className="text-neutral-700 font-medium">Visa Success Rate</div>
            </div>      
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg border border-blue-200">
              <div className="text-3xl font-bold #1845B3 mb-2">250+</div>
              <div className="text-neutral-700 font-medium">Partner Universities</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg border border-blue-200">
              <div className="text-3xl font-bold #1845B3 mb-2">24/7</div>
              <div className="text-neutral-700 font-medium">Expert Support</div>
            </div>
          </div>
        </motion.div>

        {/* Professional Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1D50C9]/20 to-[#1845B3]/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Begin Your Educational Journey Today</h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of successful students who achieved their international education goals with Pakistan's most trusted and experienced visa consultancy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Process Guide
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-8 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Guaranteed Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}