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
      title: "Expert Guidance",
      description: "Certified visa consultants with deep knowledge of immigration policies across 15+ countries.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Proven Track Record",
      description: "Successfully processed over 5,000 student visas with a 98% approval rate.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every student receives individual attention and customized solutions for their unique needs.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const stats = [
    { value: "5000+", label: "Successful Applications", color: "text-primary" },
    { value: "15+", label: "Countries Covered", color: "text-secondary" },
    { value: "98%", label: "Success Rate", color: "text-accent" },
    { value: "15", label: "Years Experience", color: "text-purple-600" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team of visa consultants in modern office" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">About Path</h2>
            <p className="text-xl text-neutral-500 mb-8 leading-relaxed">
              With over 15 years of experience in international education consulting, we have helped thousands of students achieve their dreams of studying abroad.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className={`${feature.color} text-xl`} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{feature.title}</h3>
                    <p className="text-neutral-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
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
        
        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-neutral-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
