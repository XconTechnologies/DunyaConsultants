import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileText, 
  GraduationCap, 
  Plane, 
  DollarSign, 
  MessageCircle, 
  Headphones,
  Check
} from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Career Counseling",
    description: "Professional guidance to identify the right career path and educational opportunities aligned with your goals.",
    features: ["Career assessment", "Goal planning", "Industry insights"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: FileText,
    title: "Application Handling",
    description: "Complete assistance with university applications, documentation, and submission processes.",
    features: ["Document preparation", "Application review", "Submission tracking"],
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: DollarSign,
    title: "Scholarships",
    description: "Access to exclusive scholarship programs and financial aid opportunities to reduce education costs.",
    features: ["Scholarship matching", "Application support", "Financial planning"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Expert advice on choosing the best university and program based on your profile and preferences.",
    features: ["University matching", "Program analysis", "Admission requirements"],
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Headphones,
    title: "Interview Preparation",
    description: "Comprehensive training for visa interviews and university admission interviews.",
    features: ["Mock interviews", "Question practice", "Confidence building"],
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefing",
    description: "Complete preparation for your journey including travel, accommodation, and cultural orientation.",
    features: ["Travel guidance", "Cultural briefing", "Essential preparations"],
    color: "text-green-600",
    bgColor: "bg-green-100"
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">Our Services</h2>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
            Comprehensive visa consultation services tailored to your educational goals and destination country requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 shadow-lg card-hover h-full">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className={`${service.color} text-2xl`} size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-800 mb-4">{service.title}</h3>
                  <p className="text-neutral-500 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-neutral-500">
                        <Check className="text-secondary mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
