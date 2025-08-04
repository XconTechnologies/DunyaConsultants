import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle, Circle, ArrowRight, Calendar, MapPin, GraduationCap, Plane, FileText, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const journeySteps = [
  {
    id: 1,
    phase: "Discovery",
    title: "Initial Consultation",
    description: "Free personalized counseling session to understand your goals, academic background, and career aspirations.",
    duration: "Week 1",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    details: [
      "Career assessment and goal setting",
      "Academic background evaluation",
      "Budget and timeline planning",
      "Country and program selection"
    ]
  },
  {
    id: 2,
    phase: "Planning",
    title: "University Selection",
    description: "Research and shortlist universities based on your profile, preferences, and budget requirements.",
    duration: "Week 2-3",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    details: [
      "University research and ranking analysis",
      "Program compatibility assessment",
      "Scholarship opportunities identification",
      "Application requirements compilation"
    ]
  },
  {
    id: 3,
    phase: "Preparation",
    title: "Test Preparation & Documentation",
    description: "Prepare for required tests (IELTS/PTE/TOEFL) and gather all necessary documents for applications.",
    duration: "Week 4-8",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    details: [
      "IELTS/PTE/TOEFL preparation",
      "Academic transcripts collection",
      "Letters of recommendation",
      "Statement of purpose writing"
    ]
  },
  {
    id: 4,
    phase: "Application",
    title: "University Applications",
    description: "Submit applications to selected universities with all required documents and application fees.",
    duration: "Week 9-12",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    details: [
      "Online application completion",
      "Document upload and verification",
      "Application fee payment",
      "Application tracking and follow-up"
    ]
  },
  {
    id: 5,
    phase: "Admission",
    title: "Offer Letters & Acceptance",
    description: "Receive and evaluate offer letters, accept the best option, and confirm your enrollment.",
    duration: "Week 13-16",
    icon: Award,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    details: [
      "Offer letter evaluation",
      "Scholarship negotiation",
      "Acceptance confirmation",
      "Enrollment deposit payment"
    ]
  },
  {
    id: 6,
    phase: "Visa Process",
    title: "Student Visa Application",
    description: "Complete visa documentation, attend interviews, and secure your student visa for travel.",
    duration: "Week 17-20",
    icon: MapPin,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    details: [
      "Visa application preparation",
      "Financial documentation",
      "Visa interview coaching",
      "Biometrics and submission"
    ]
  },
  {
    id: 7,
    phase: "Departure",
    title: "Pre-Departure & Travel",
    description: "Final preparations including accommodation, travel arrangements, and orientation sessions.",
    duration: "Week 21-24",
    icon: Plane,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    details: [
      "Accommodation arrangements",
      "Flight booking assistance",
      "Pre-departure orientation",
      "Airport pickup coordination"
    ]
  }
];

export default function EducationJourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Your Journey to International Education
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A comprehensive 6-month roadmap from initial consultation to your departure. 
            Every step guided by our expert counselors to ensure your success.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white rounded-full p-2 shadow-lg border border-neutral-200">
            <div className="flex space-x-2">
              {journeySteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                      : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
                  }`}
                >
                  {step.phase}
                  {activeStep === step.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Active Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {journeySteps.map((step) => (
            step.id === activeStep && (
              <div key={step.id} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                          Step {step.id} • {step.duration}
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-800 mt-1">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-neutral-600 mb-6">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className={`${step.bgColor} rounded-xl p-8 relative overflow-hidden`}>
                    <div className="absolute top-4 right-4 opacity-20">
                      <step.icon className="w-24 h-24" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-4">
                        What happens in {step.phase}?
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-neutral-600">Duration</span>
                          <span className="text-sm font-medium text-neutral-800">{step.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-neutral-600">Phase</span>
                          <span className="text-sm font-medium text-neutral-800">{step.phase}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-neutral-600">Activities</span>
                          <span className="text-sm font-medium text-neutral-800">{step.details.length} tasks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </motion.div>

        {/* Timeline Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-16"
        >
          <div className="flex justify-between items-center">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-full border-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    activeStep >= step.id
                      ? `bg-gradient-to-br ${step.color} border-transparent shadow-lg`
                      : 'bg-white border-neutral-300'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  {activeStep > step.id ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : activeStep === step.id ? (
                    <step.icon className="w-6 h-6 text-white" />
                  ) : (
                    <Circle className="w-6 h-6 text-neutral-400" />
                  )}
                </motion.div>
                <div className="text-center mt-3 hidden sm:block">
                  <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                    {step.phase}
                  </div>
                  <div className="text-sm text-neutral-600 mt-1">
                    {step.duration}
                  </div>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className={`absolute top-6 left-12 w-20 lg:w-32 h-1 transition-all duration-500 ${
                    activeStep > step.id ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-600/20" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Our expert counselors are here to guide you through every step. 
                Book your free consultation today and take the first step towards your international education.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
                >
                  Book Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
                >
                  Download Journey Guide
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}