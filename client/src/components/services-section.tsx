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
    icon: FileText,
    title: "Visa Application",
    description: "Complete assistance with visa documentation, application forms, and submission process for all major study destinations.",
    features: ["Document preparation", "Application review", "Interview preparation"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Personalized guidance to choose the right university and program based on your academic profile and career goals.",
    features: ["Profile assessment", "University matching", "Application support"],
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description: "Comprehensive preparation for your journey abroad including accommodation, travel, and cultural orientation.",
    features: ["Travel arrangements", "Accommodation guidance", "Cultural orientation"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: DollarSign,
    title: "Financial Planning",
    description: "Expert advice on education funding, scholarships, and financial documentation for visa applications.",
    features: ["Scholarship guidance", "Loan assistance", "Financial documentation"],
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: MessageCircle,
    title: "Language Support",
    description: "IELTS, TOEFL, and other language test preparation with expert trainers and proven methodologies.",
    features: ["Test preparation", "Practice sessions", "Score improvement"],
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey from application to arrival at your destination.",
    features: ["Emergency support", "Progress tracking", "Post-arrival assistance"],
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
