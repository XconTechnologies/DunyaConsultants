import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Heart, Calendar } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Award,
      title: "200 Certified Counsellors",
      description: "Expert guidance from certified professionals with deep knowledge of immigration policies.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "17 City Branches",
      description: "Nationwide presence with 250 ambassadors ensuring local support everywhere.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Heart,
      title: "20+ University Partnerships",
      description: "Direct partnerships with leading international universities for better admission chances.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const stats = [
    { value: "17", label: "City Branches", color: "text-primary" },
    { value: "200", label: "Certified Counsellors", color: "text-secondary" },
    { value: "250", label: "Ambassadors", color: "text-accent" },
    { value: "20+", label: "University Partners", color: "text-purple-600" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">Who We Are</h2>
            <p className="text-xl text-neutral-500 mb-8 leading-relaxed">
              With a decade of overseas education experience, we are your trusted partner in achieving international education dreams. Our extensive network and proven track record set us apart in the industry.
            </p>
            
            
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-2" size={20} />
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        
      </div>
    </section>
  );
}
