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
    <section id="process" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Admission Process</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A streamlined 6-step process to guide you from initial consultation to successful visa approval
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 via-orange-500 via-red-500 to-teal-500 opacity-30 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-8 shadow-xl card-hover h-full bg-neutral-800 border-neutral-700">
                  <CardContent className="p-0 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 ${step.color} bg-opacity-20 rounded-xl flex items-center justify-center mb-6 mx-auto mt-6`}>
                      <step.icon className="text-white text-3xl" size={40} />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-neutral-300 leading-relaxed">{step.description}</p>
                    
                    {/* Arrow for larger screens */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="text-neutral-500" size={24} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their international education dreams through our proven process.
            </p>
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <UserCheck className="mr-2" size={20} />
              Begin Your Process Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}