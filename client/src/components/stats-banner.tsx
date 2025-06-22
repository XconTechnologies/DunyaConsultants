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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&crop=center"
          alt="Students studying abroad"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/90"></div>
        {/* Additional Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Main Hero Heading */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Thousands
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Worldwide</span>
          </motion.h1>
          
          {/* Hero Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4"
          >
            Making Global Education Dreams Come True Since 2009
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Our numbers speak for themselves - join the success stories of students who achieved their dreams with Pakistan's most trusted visa consultancy
          </motion.p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 1 + (index * 0.15) }}
              className="text-center group"
            >
              <div className="relative">
                {/* Icon Background */}
                <div className={`w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                  <stat.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                
                {/* Enhanced Glow Effect */}
                <div className={`absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-br ${stat.color} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500`}></div>
              </div>

              <div className="text-white">
                <div className="mb-3">
                  <div className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                    <AnimatedCounter 
                      number={stat.number} 
                      suffix={stat.suffix} 
                      isVisible={isInView} 
                    />
                  </div>
                </div>
                <p className="text-base lg:text-lg xl:text-xl text-blue-200 font-semibold tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20"
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Award className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Award Winner</h3>
            <p className="text-blue-200 text-base lg:text-lg">Best Education Consultancy 2024</p>
            <div className="mt-4 text-yellow-400 text-sm font-semibold">Excellence in Service</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20"
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Growing Fast</h3>
            <p className="text-blue-200 text-base lg:text-lg">500+ new students monthly</p>
            <div className="mt-4 text-green-400 text-sm font-semibold">Expanding Rapidly</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20"
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Globe className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Global Reach</h3>
            <p className="text-blue-200 text-base lg:text-lg">Offices across Pakistan</p>
            <div className="mt-4 text-purple-400 text-sm font-semibold">Nationwide Network</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}