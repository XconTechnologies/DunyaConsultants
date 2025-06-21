import { Button } from "@/components/ui/button";
import { Rocket, Play, Sparkles } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      controls.start("visible");
    }, 500);
    return () => clearTimeout(timer);
  }, [controls]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating highlight animation variants
  const floatingVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    visible: (index: number) => ({
      opacity: [0, 1, 0.8, 1],
      scale: [0, 1.2, 0.9, 1],
      rotate: [0, 10, -5, 0],
      transition: {
        duration: 1.5,
        delay: index * 0.3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 2
      }
    })
  };

  // Text reveal animation variants
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  };

  // Highlight bubble animation
  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: [0, 0.8, 0.6],
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div 
          className="text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Tagline with Floating Highlights */}
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Floating Highlight Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Sparkle elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${-20 + (i % 2) * 40}%`,
                  }}
                  variants={floatingVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  custom={i}
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </motion.div>
              ))}

              {/* Floating dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${-30 + (i % 3) * 25}%`,
                    background: `linear-gradient(45deg, ${
                      i % 2 === 0 ? '#fbbf24, #f59e0b' : '#34d399, #10b981'
                    })`,
                  }}
                  variants={floatingVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  custom={i + 0.5}
                />
              ))}

              {/* Animated rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute border-2 border-white/20 rounded-full"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${-10 + i * 15}%`,
                    width: `${20 + i * 10}px`,
                    height: `${20 + i * 10}px`,
                  }}
                  variants={bubbleVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                />
              ))}
            </div>

            {/* Main Tagline Container */}
            <div className="relative z-10 inline-flex items-center justify-center w-full">
              <motion.div
                className="relative px-8 py-4 rounded-full bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg border border-white/30 shadow-2xl"
                variants={bubbleVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-xl"></div>
                
                {/* Animated pulse indicator */}
                <motion.div
                  className="absolute -left-1 top-1/2 transform -translate-y-1/2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
                </motion.div>

                {/* Animated text reveal */}
                <div className="relative flex items-center justify-center space-x-1 text-white font-semibold text-lg">
                  {"Dedication to Education".split(" ").map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className="inline-block"
                      variants={textRevealVariants}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      custom={wordIndex}
                    >
                      {word.split("").map((letter, letterIndex) => (
                        <motion.span
                          key={letterIndex}
                          className="inline-block"
                          variants={textRevealVariants}
                          initial="hidden"
                          animate={isVisible ? "visible" : "hidden"}
                          custom={wordIndex * 3 + letterIndex * 0.05}
                        >
                          {letter}
                        </motion.span>
                      ))}
                      {wordIndex < 2 && <span className="mr-1"></span>}
                    </motion.span>
                  ))}
                </div>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: "80%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Gateway to{" "}
            <span className="text-accent block md:inline">Global Education</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert visa consultation services to help you achieve your dream of studying abroad. Professional guidance, proven success rates.
          </motion.p>
          
          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-blue-100">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent">5000+</div>
              <div className="text-sm text-blue-100">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
              <div className="text-sm text-blue-100">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent">15</div>
              <div className="text-sm text-blue-100">Years Exp</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Rocket className="mr-2" size={20} />
              Start Your Journey
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("testimonials")}
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm bg-white/10"
            >
              <Play className="mr-2" size={20} />
              Watch Success Stories
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-24 h-24 bg-accent/20 rounded-full hidden lg:block"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-20 h-20 bg-secondary/20 rounded-full hidden lg:block"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 1 
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-20 w-16 h-16 bg-primary/20 rounded-full hidden xl:block"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 2 
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-20 w-12 h-12 bg-accent/30 rounded-full hidden xl:block"
        animate={{ 
          x: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 0.5 
        }}
      />
    </section>
  );
}
