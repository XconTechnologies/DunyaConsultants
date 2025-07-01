import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, GraduationCap, Award, TrendingUp, Globe } from "lucide-react";
import EducationalTooltip from "./educational-tooltip";

const AnimatedCounter = ({ number, suffix, isVisible }: { number: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [number, isVisible]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function StatsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    {
      icon: Users,
      number: 5000,
      suffix: "+",
      label: "Students Placed",
      color: "from-blue-500 to-cyan-500",
      tooltip: {
        title: "Successful Student Placements",
        description: "Over 5,000 students have successfully secured admissions in top universities worldwide through our expert guidance and comprehensive support services.",
        type: "statistic" as const
      }
    },
    {
      icon: MapPin,
      number: 17,
      suffix: "+",
      label: "Countries",
      color: "from-green-500 to-emerald-500",
      tooltip: {
        title: "Global Reach",
        description: "We have established partnerships and successful placements across 17+ countries including USA, UK, Canada, Australia, Germany, and many more.",
        type: "location" as const
      }
    },
    {
      icon: GraduationCap,
      number: 50,
      suffix: "+",
      label: "University Partners",
      color: "from-purple-500 to-violet-500",
      tooltip: {
        title: "Partner Universities",
        description: "Strong partnerships with 50+ leading universities worldwide, providing our students access to diverse academic programs and opportunities.",
        type: "educational" as const
      }
    },
    {
      icon: Award,
      number: 98,
      suffix: "%",
      label: "Success Rate",
      color: "from-orange-500 to-red-500",
      tooltip: {
        title: "Success Rate",
        description: "An impressive 98% success rate in student placements, demonstrating our commitment to excellence and proven track record in education consultancy.",
        type: "achievement" as const
      }
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <EducationalTooltip tooltip={stat.tooltip}>
                  <div className="relative">
                    {/* Icon Container */}
                    <div className="mx-auto mb-2 relative">
                      <div className="w-8 h-8 mx-auto flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="text-white">
                      <div className="mb-1">
                        <div className="text-sm lg:text-base font-bold">
                          <AnimatedCounter 
                            number={stat.number} 
                            suffix={stat.suffix} 
                            isVisible={isInView} 
                          />
                        </div>
                      </div>
                      <p className="text-xs text-blue-200 font-medium tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </EducationalTooltip>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}