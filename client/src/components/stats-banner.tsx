import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocation } from "wouter";
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
  const [, setLocation] = useLocation();

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Click handlers for each stat
  const handleStatClick = (index: number) => {
    switch (index) {
      case 0: // Students Placed - Go to our success stories page
        setLocation('/about/our-success-stories');
        break;
      case 1: // Office Branches - Go to offices page
        setLocation('/offices');
        break;
      case 2: // University Partners - Scroll to university partners section
        scrollToSection('university-partners');
        break;
      case 3: // Countries Covered - Scroll to study destinations section
        scrollToSection('study-destinations');
        break;
      case 4: // Expert Counselors - No navigation
        break;
      default:
        break;
    }
  };

  const stats = [
    {
      icon: Users,
      number: 2500,
      suffix: '+',
      label: 'Students Placed',
      description: 'Success Stories',
      gradient: 'custom-blue-gradient',
      glowColor: 'shadow-blue-500/25',
      bgPattern: `radial-gradient(circle at 20% 50%, rgba(39, 100, 232, 0.3) 0%, transparent 50%)`
    },
    {
      icon: Building,
      number: 17,
      suffix: '+',
      label: 'Office Branches',
      description: 'Nationwide Coverage',
      gradient: 'custom-blue-gradient',
      glowColor: 'shadow-blue-500/25',
      bgPattern: `radial-gradient(circle at 80% 20%, rgba(39, 100, 232, 0.3) 0%, transparent 50%)`
    },
    {
      icon: Award,
      number: 50,
      suffix: '+',
      label: 'University Partners',
      description: 'Global Network',
      gradient: 'custom-blue-gradient',
      glowColor: 'shadow-blue-500/25',
      bgPattern: `radial-gradient(circle at 50% 80%, rgba(39, 100, 232, 0.3) 0%, transparent 50%)`
    },
    {
      icon: MapPin,
      number: 15,
      suffix: '+',
      label: 'Countries Covered',
      description: 'Global Reach',
      gradient: 'custom-blue-gradient',
      glowColor: 'shadow-blue-500/25',
      bgPattern: `radial-gradient(circle at 30% 30%, rgba(39, 100, 232, 0.3) 0%, transparent 50%)`
    },
    {
      icon: Star,
      number: 200,
      suffix: '+',
      label: 'Expert Counselors',
      description: 'Professional Team',
      gradient: 'custom-blue-gradient',
      glowColor: 'shadow-blue-500/25',
      bgPattern: `radial-gradient(circle at 40% 60%, rgba(39, 100, 232, 0.3) 0%, transparent 50%)`
    }
  ];

  return (
    <div className="relative min-h-[400px] overflow-hidden" style={{ background: `linear-gradient(135deg, #1e293b 0%, #2764E8 50%, #1e50c7 100%)` }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-10 -left-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: '#2764E8' }}></div>
        <div className="absolute top-0 -right-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#2764E8' }}></div>
        <div className="absolute -bottom-10 left-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{ backgroundColor: '#2764E8' }}></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000" style={{ backgroundColor: '#2764E8' }}></div>
        
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
              <Star className="w-2 h-2 text-blue-400/40" />
            ) : (
              <Zap className="w-2 h-2 text-blue-400/40" />
            )}
          </motion.div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-[120px] pb-[50px]" ref={ref}>
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
            <Target className="w-5 h-5" style={{ color: '#2764E8' }} />
            <span className="text-white/90 font-medium">Excellence in Numbers</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" style={{ color: '#2764E8' }} />
            </motion.div>
          </motion.div>
          
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4 cursor-pointer transition-all duration-300 hover:scale-105" style={{ color: '#2764E8' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >Turning Ambition to Admission</motion.h2>
          
          <motion.p
            className="text-white/80 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >Join thousands of successful students who achieved their international education goals with Pakistan's most trusted and experienced visa consultancy.</motion.p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => handleStatClick(index)}
              >
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: stat.bgPattern }}
                />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full group-hover:bg-white/12 group-hover:shadow-lg">
                  {/* Icon Container */}
                  <div className="relative mb-4 flex justify-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.glowColor} shadow-lg group-hover:shadow-xl transition-all duration-500`} style={{ backgroundColor: '#2764E8' }}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Floating Sparkles - Only star animation kept */}
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
                      <Sparkles className="w-6 h-6 opacity-70" style={{ color: '#2764E8' }} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <div className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 group-hover:from-white group-hover:via-blue-100 group-hover:to-white transition-all duration-500">
                      <AnimatedCounter 
                        number={stat.number} 
                        suffix={stat.suffix} 
                        isVisible={isInView} 
                      />
                    </div>
                    
                    <h3 className="text-white font-semibold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500">
                      {stat.label}
                    </h3>
                    
                    <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Element */}
        <motion.div
          className="flex justify-center mt-16 mb-24"
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
            <Shield className="w-5 h-5" style={{ color: '#2764E8' }} />
            <span className="text-white/80 font-medium">Trusted Excellence Since 2021</span>
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
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2764E8' }} />
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