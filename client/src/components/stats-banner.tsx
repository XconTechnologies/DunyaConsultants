import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Users, 
  Building, 
  Award, 
  Clock,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Star,
  MapPin
} from "lucide-react";

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
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const stats = [
    {
      icon: Users,
      number: 5000,
      suffix: '+',
      label: 'Students Placed',
      description: 'Success Stories',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      glowColor: 'shadow-emerald-500/25',
      bgPattern: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)'
    },
    {
      icon: Building,
      number: 17,
      suffix: '+',
      label: 'Office Branches',
      description: 'Nationwide Coverage',
      gradient: 'from-violet-400 via-purple-500 to-indigo-600',
      glowColor: 'shadow-violet-500/25',
      bgPattern: 'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
    },
    {
      icon: Award,
      number: 50,
      suffix: '+',
      label: 'University Partners',
      description: 'Global Network',
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      glowColor: 'shadow-green-500/25',
      bgPattern: 'radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)'
    },
    {
      icon: MapPin,
      number: 15,
      suffix: '+',
      label: 'Countries Covered',
      description: 'Global Reach',
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      glowColor: 'shadow-red-500/25',
      bgPattern: 'radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)'
    },
    {
      icon: Shield,
      number: 98,
      suffix: '%',
      label: 'Visa Success Rate',
      description: 'Proven Results',
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      glowColor: 'shadow-blue-500/25',
      bgPattern: 'radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
    },
    {
      icon: Star,
      number: 200,
      suffix: '+',
      label: 'Expert Counselors',
      description: 'Professional Team',
      gradient: 'from-emerald-400 via-cyan-500 to-blue-600',
      glowColor: 'shadow-cyan-500/25',
      bgPattern: 'radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)'
    }
  ];

  return (
    <div className="relative min-h-[400px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-10 -left-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-10 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000"></div>
        
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 150 - 75],
              y: [0, Math.random() * 150 - 75],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles className="w-3 h-3 text-white/30" />
            ) : i % 3 === 1 ? (
              <Star className="w-2 h-2 text-yellow-400/40" />
            ) : (
              <Zap className="w-2 h-2 text-cyan-400/40" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-full px-8 py-3 mb-6 border border-white/10"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <Target className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 font-medium">Excellence in Numbers</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>
          </motion.div>
          
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4 cursor-pointer transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">Dedication To </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Education
            </span>
          </motion.h2>
          
          <motion.p
            className="text-white/80 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming dreams into reality since 2009. Join thousands of successful students who achieved their international education goals with Pakistan's most trusted and experienced visa consultancy.
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 + 0.8,
                  type: "spring",
                  stiffness: 80,
                  damping: 12
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -10,
                  transition: { duration: 0.3, type: "spring", stiffness: 200 }
                }}
              >
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: stat.bgPattern }}
                />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full">
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <motion.div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center ${stat.glowColor} shadow-lg group-hover:shadow-xl transition-all duration-500`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </motion.div>
                    
                    {/* Floating Sparkles */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6"
                      animate={{
                        rotate: [0, 180, 360],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-yellow-400 opacity-70" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <motion.div
                      className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 group-hover:from-white group-hover:via-blue-100 group-hover:to-white transition-all duration-500"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 1.2, type: "spring", stiffness: 100 }}
                    >
                      <AnimatedCounter 
                        number={stat.number} 
                        suffix={stat.suffix} 
                        isVisible={isInView} 
                      />
                    </motion.div>
                    
                    <h3 className="text-white font-semibold text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500">
                      {stat.label}
                    </h3>
                    
                    <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <motion.div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 48 } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 + 1.5 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stat.gradient}`}
                      initial={{ x: '-100%' }}
                      animate={isInView ? { x: 0 } : { x: '-100%' }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 1.8 }}
                    />
                  </motion.div>

                  {/* Hover Effect Arrow */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      x: [0, 5, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <TrendingUp className="w-5 h-5 text-white/60" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Element */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.15)",
              borderColor: "rgba(255,255,255,0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-white/80 font-medium">Trusted Excellence Since 2010</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}