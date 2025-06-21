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
    <section id="process" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Admission Process
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A streamlined 6-step process to guide you from initial consultation to successful visa approval
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 via-red-500 to-teal-500 transform -translate-x-1/2"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-12 gap-8`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20`}>
                    <step.icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} text-center lg:max-w-md`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    {/* Step Number Badge */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${step.color} rounded-full text-white font-bold text-lg mb-4 shadow-lg`}>
                      {step.step}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-4">{step.description}</p>
                    
                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <div className="flex space-x-1">
                        {Array.from({ length: 6 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i <= index ? step.color : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-400 ml-2">
                        Step {index + 1} of 6
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'} flex justify-center`}>
                  <div className={`w-32 h-32 ${step.color} bg-opacity-20 rounded-2xl flex items-center justify-center shadow-2xl border border-white/10`}>
                    <step.icon className="text-white" size={48} />
                  </div>
                </div>

                {/* Mobile Timeline Node */}
                <div className="lg:hidden absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white/20`}>
                    <step.icon className="text-white" size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { number: "95%", label: "Success Rate" },
            { number: "30+", label: "Days Average" },
            { number: "24/7", label: "Support" },
            { number: "17+", label: "Branches" }
          ].map((stat, index) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}