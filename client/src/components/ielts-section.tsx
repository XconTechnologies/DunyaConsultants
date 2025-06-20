import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BookOpen, 
  Users, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Target,
  Trophy,
  Lightbulb
} from "lucide-react";

const ieltsFeatures = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from certified IELTS trainers with proven track records"
  },
  {
    icon: Lightbulb,
    title: "Advanced Teaching Methods",
    description: "Modern pedagogical approaches for effective learning"
  },
  {
    icon: Target,
    title: "Individual Attention",
    description: "Personalized coaching tailored to your learning needs"
  },
  {
    icon: BookOpen,
    title: "Modern Classrooms",
    description: "State-of-the-art facilities with latest learning resources"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Multiple batch timings to fit your schedule"
  },
  {
    icon: DollarSign,
    title: "Affordable Fee Structure",
    description: "Quality education at competitive prices"
  }
];

const additionalServices = [
  {
    icon: CheckCircle,
    title: "Free Assessment",
    description: "Complimentary evaluation of your current English proficiency level"
  },
  {
    icon: Trophy,
    title: "Study Visa Support",
    description: "Complete assistance with your study visa application process"
  },
  {
    icon: Users,
    title: "Education Counselling",
    description: "Expert guidance on course and university selection"
  }
];

export default function IeltsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="ielts" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Learn IELTS at Path Consultants
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Master IELTS with our comprehensive training program designed to achieve your target scores
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ieltsFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-lg card-hover h-full bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="text-primary text-2xl" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div 
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-neutral-800 mb-8">
            Additional Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="text-secondary" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">{service.title}</h4>
                <p className="text-neutral-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="mr-2" size={20} />
              Start Your IELTS Journey
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}