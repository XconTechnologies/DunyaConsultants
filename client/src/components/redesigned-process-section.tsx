import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Globe, FileText, Send, Shield, Plane, CheckCircle, Clock, Target, ArrowRight, GraduationCap, BookOpen } from "lucide-react";
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
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
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
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
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
              <div className="text-3xl font-bold text-blue-600 mb-2">18-20</div>
              <div className="text-neutral-700 font-medium">Weeks Timeline</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-neutral-700 font-medium">Visa Success Rate</div>
            </div>      
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">250+</div>
              <div className="text-neutral-700 font-medium">Partner Universities</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Begin Your Educational Journey Today</h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of successful students who have achieved their international education dreams through our comprehensive 8-step process. Expert guidance at every step.
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