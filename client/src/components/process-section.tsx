import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  UserCheck, 
  GraduationCap, 
  CheckSquare, 
  Send, 
  MessageCircle, 
  FileCheck,
  ArrowRight
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          
          {/* Process Steps - Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>

        {/* Minimal Stats */}
        <motion.div 
          className="mt-16 border-t border-neutral-200 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-neutral-600 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-neutral-600 text-sm">Days Average</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-neutral-600 text-sm">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">17+</div>
              <div className="text-neutral-600 text-sm">Branches</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}