import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, GraduationCap, Award, TrendingUp, Globe } from "lucide-react";
import EducationalTooltip from "./educational-tooltip";

// Force video autoplay on component mount
const forceVideoAutoplay = () => {
  const video = document.querySelector('video');
  if (video) {
    video.muted = true;
    video.play().catch(() => {
      // If autoplay fails, try again after user interaction
      const handleUserInteraction = () => {
        video.play().catch(console.error);
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      };
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
    });
  }
};

export default function StatsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      // Delay to ensure video is loaded
      setTimeout(forceVideoAutoplay, 500);
    }
  }, [isInView]);
  
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
      label: "Office Branches",
      color: "from-purple-500 to-pink-500",
      tooltip: {
        title: "Nationwide Presence",
        description: "Our extensive network of 17+ offices across Pakistan ensures accessible consultation services in major cities for personalized guidance.",
        type: "location" as const
      }
    },
    {
      icon: GraduationCap,
      number: 50,
      suffix: "+",
      label: "University Partners",
      color: "from-green-500 to-emerald-500",
      tooltip: {
        title: "Global University Network",
        description: "Strong partnerships with 50+ prestigious universities across USA, UK, Canada, Australia, and other top study destinations worldwide.",
        type: "educational" as const
      }
    },
    {
      icon: Globe,
      number: 15,
      suffix: "+",
      label: "Countries Covered",
      color: "from-orange-500 to-red-500",
      tooltip: {
        title: "International Reach",
        description: "We provide visa and admission services for 15+ countries including USA, UK, Canada, Australia, Germany, New Zealand, and more.",
        type: "location" as const
      }
    },
    {
      icon: Award,
      number: 98,
      suffix: "%",
      label: "Visa Success Rate",
      color: "from-indigo-500 to-blue-500",
      tooltip: {
        title: "Outstanding Success Rate",
        description: "Our expert team maintains a 98% visa approval rate through meticulous document preparation, interview coaching, and comprehensive support.",
        type: "achievement" as const
      }
    },
    {
      icon: TrendingUp,
      number: 200,
      suffix: "+",
      label: "Expert Counselors",
      color: "from-teal-500 to-green-500",
      tooltip: {
        title: "Professional Team",
        description: "Our team of 200+ certified counselors brings years of experience in international education and visa consultation services.",
        type: "process" as const
      }
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
      {/* Animated Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(console.error);
          }}
        >
          <source src="https://videos.pexels.com/video-files/6195392/6195392-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&crop=center"
            alt="Students studying abroad"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-indigo-900/85"></div>
        
        {/* Additional Video Overlay for Enhanced Effect */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Particles Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 6s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Dynamic Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        {/* Video Play/Pause Overlay Control */}
        <div className="absolute bottom-8 right-8 z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
            onClick={() => {
              const video = document.querySelector('video');
              if (video) {
                if (video.paused) {
                  video.play().catch(console.error);
                } else {
                  video.pause();
                }
              }
            }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
            </div>
          </motion.button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Professional Tagline */}
          

          {/* Main Hero Heading */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-bold text-white mb-8 text-[46px]"
            style={{ fontSize: '42px' }}
          >
            Dedication To{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Education
            </span>
          </motion.h1>
          
          {/* Hero Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-blue-100 max-w-4xl mx-auto leading-relaxed mb-10"
            style={{ fontSize: '16px' }}
          >
Transforming dreams into reality since 2009. Join thousands of successful students who achieved their international education goals with Pakistan's most trusted and experienced visa consultancy.
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
            <EducationalTooltip
              key={stat.label}
              title={stat.tooltip.title}
              description={stat.tooltip.description}
              type={stat.tooltip.type}
              delay={300}
            >
              <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1 + (index * 0.15) }}
                className="text-center group"
              >
                <div className="relative">
                  {/* Icon Background */}
                  <div className={`w-16 h-16 lg:w-18 lg:h-18 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                    <stat.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  {/* Enhanced Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 lg:w-18 lg:h-18 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500`}></div>
                </div>

                <div className="text-white">
                  <div className="mb-1">
                    <div className="text-base lg:text-lg xl:text-xl font-bold">
                      <AnimatedCounter 
                        number={stat.number} 
                        suffix={stat.suffix} 
                        isVisible={isInView} 
                      />
                    </div>
                  </div>
                  <p className="text-xs lg:text-sm text-blue-200 font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            </EducationalTooltip>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-8 py-2.5 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            style={{ fontSize: '16px' }}
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}