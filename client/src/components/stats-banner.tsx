import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, GraduationCap, Award, TrendingUp, Globe } from "lucide-react";

export default function StatsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    {
      icon: Users,
      number: 15000,
      suffix: "+",
      label: "Students Placed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      number: 17,
      suffix: "+",
      label: "Office Branches",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      number: 250,
      suffix: "+",
      label: "University Partners",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      number: 15,
      suffix: "+",
      label: "Countries Covered",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      number: 98,
      suffix: "%",
      label: "Visa Success Rate",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      number: 200,
      suffix: "+",
      label: "Expert Counselors",
      color: "from-teal-500 to-green-500"
    }
  ];

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

    return (
      <span className="text-3xl lg:text-4xl font-bold">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Thousands</span> Worldwide
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our numbers speak for themselves - join the success stories of students who achieved their dreams
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                {/* Icon Background */}
                <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>

              <div className="text-white">
                <div className="mb-2">
                  <AnimatedCounter 
                    number={stat.number} 
                    suffix={stat.suffix} 
                    isVisible={isInView} 
                  />
                </div>
                <p className="text-sm lg:text-base text-blue-200 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Award Winner</h3>
            <p className="text-blue-200 text-sm">Best Education Consultancy 2024</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Growing Fast</h3>
            <p className="text-blue-200 text-sm">500+ new students monthly</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
            <p className="text-blue-200 text-sm">Offices across Pakistan</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}