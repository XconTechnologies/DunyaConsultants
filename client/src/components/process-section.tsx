import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  UserCheck, 
  GraduationCap, 
  CheckSquare, 
  Send, 
  MessageCircle, 
  FileCheck,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const processSteps = [
  {
    icon: UserCheck,
    title: "Get Details",
    description: "Initial consultation to understand your academic background, career goals, and preferences",
    color: "bg-blue-500",
    step: "01"
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Expert guidance to choose the best universities and programs matching your profile",
    color: "bg-purple-500",
    step: "02"
  },
  {
    icon: CheckSquare,
    title: "Meet Requirements",
    description: "Assistance in fulfilling all admission requirements including tests and documentation",
    color: "bg-green-500",
    step: "03"
  },
  {
    icon: Send,
    title: "Apply",
    description: "Professional application submission with careful review and optimization",
    color: "bg-orange-500",
    step: "04"
  },
  {
    icon: MessageCircle,
    title: "Interview",
    description: "Comprehensive preparation for university admission and visa interviews",
    color: "bg-red-500",
    step: "05"
  },
  {
    icon: FileCheck,
    title: "Visa",
    description: "Complete visa processing support from documentation to final approval",
    color: "bg-teal-500",
    step: "06"
  }
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleStep = (index: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSteps(newExpanded);
  };

  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl font-bold text-neutral-800 mb-3">
            Our Admission Process
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A streamlined 6-step process to guide you from initial consultation to successful visa approval
          </p>
        </motion.div>

        {/* Clean Process Flow */}
        <div className="relative">
          {/* Simple Connection Line */}
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-px bg-neutral-200"></div>
          
          {/* Desktop View - Clean Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-semibold text-lg mb-4">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <step.icon className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold text-neutral-800">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed px-2">{step.description}</p>
                </div>

                {/* Connection Arrow */}
                {index < processSteps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-6 -right-4 z-0">
                    <ArrowRight className="text-neutral-300" size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile View - Collapsible Steps */}
          <div className="md:hidden space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden"
              >
                {/* Step Header - Always Visible */}
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full font-semibold text-sm">
                      {step.step}
                    </div>
                    <div className="flex items-center space-x-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-neutral-800">{step.title}</h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedSteps.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-neutral-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-500" />
                    )}
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
                      <div className="px-4 pb-4 pt-2 border-t border-neutral-100">
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        

        {/* WhatsApp QR Code Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Ready to Start Your Application?
            </h3>
            <p className="text-neutral-600 mb-6">
              Scan the QR code to connect with our admission counselors on WhatsApp
            </p>
            
            {/* QR Code */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200 inline-block">
              <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center">
                {/* WhatsApp QR Code - Using a placeholder QR code pattern */}
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  {/* QR Code pattern - simplified representation */}
                  <rect width="160" height="160" fill="white"/>
                  {/* Corner squares */}
                  <rect x="0" y="0" width="28" height="28" fill="black"/>
                  <rect x="4" y="4" width="20" height="20" fill="white"/>
                  <rect x="8" y="8" width="12" height="12" fill="black"/>
                  
                  <rect x="132" y="0" width="28" height="28" fill="black"/>
                  <rect x="136" y="4" width="20" height="20" fill="white"/>
                  <rect x="140" y="8" width="12" height="12" fill="black"/>
                  
                  <rect x="0" y="132" width="28" height="28" fill="black"/>
                  <rect x="4" y="136" width="20" height="20" fill="white"/>
                  <rect x="8" y="140" width="12" height="12" fill="black"/>
                  
                  {/* Data pattern */}
                  <rect x="32" y="8" width="4" height="4" fill="black"/>
                  <rect x="40" y="8" width="4" height="4" fill="black"/>
                  <rect x="48" y="8" width="4" height="4" fill="black"/>
                  <rect x="64" y="8" width="4" height="4" fill="black"/>
                  <rect x="72" y="8" width="4" height="4" fill="black"/>
                  <rect x="88" y="8" width="4" height="4" fill="black"/>
                  <rect x="96" y="8" width="4" height="4" fill="black"/>
                  <rect x="104" y="8" width="4" height="4" fill="black"/>
                  <rect x="120" y="8" width="4" height="4" fill="black"/>
                  
                  {/* Add more pattern elements for authenticity */}
                  <rect x="8" y="32" width="4" height="4" fill="black"/>
                  <rect x="16" y="32" width="4" height="4" fill="black"/>
                  <rect x="32" y="32" width="4" height="4" fill="black"/>
                  <rect x="48" y="32" width="4" height="4" fill="black"/>
                  <rect x="56" y="32" width="4" height="4" fill="black"/>
                  <rect x="72" y="32" width="4" height="4" fill="black"/>
                  <rect x="88" y="32" width="4" height="4" fill="black"/>
                  <rect x="104" y="32" width="4" height="4" fill="black"/>
                  <rect x="112" y="32" width="4" height="4" fill="black"/>
                  <rect x="128" y="32" width="4" height="4" fill="black"/>
                  <rect x="144" y="32" width="4" height="4" fill="black"/>
                  
                  {/* Central timing pattern */}
                  <rect x="76" y="76" width="8" height="8" fill="black"/>
                  <rect x="68" y="68" width="4" height="4" fill="black"/>
                  <rect x="88" y="68" width="4" height="4" fill="black"/>
                  <rect x="68" y="88" width="4" height="4" fill="black"/>
                  <rect x="88" y="88" width="4" height="4" fill="black"/>
                </svg>
              </div>
              <p className="text-sm text-green-600 font-medium mt-2">Scan with WhatsApp</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}