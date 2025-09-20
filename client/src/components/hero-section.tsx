import { Button } from "@/components/ui/button";
import { Rocket, Play, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ConsultationFormModal from "@/components/consultation-form-modal";

export default function HeroSection() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
          {/* New Tagline Above */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-xl md:text-2xl text-white/90 font-semibold tracking-wide">
              A New Study Visa
            </div>
          </motion.div>

          {/* Professional Tagline */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="w-2 h-2 bg-accent rounded-full mr-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              Dedication To Education
            </motion.div>
          </motion.div>

          <motion.h1 
            className="font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '64px' }}
          >
            <span style={{ color: '#2764E8' }}>
              Dedication To Education
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of successful students who achieved their international education dreams with the best study abroad consultants in Pakistan, trusted and experienced visa experts guiding your journey step by step
          </motion.p>
          
          {/* Stats Cards - Made Smaller */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-lg md:text-xl font-bold text-accent">98%</div>
              <div className="text-xs text-blue-100">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-lg md:text-xl font-bold text-accent">5000+</div>
              <div className="text-xs text-blue-100">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-lg md:text-xl font-bold text-accent">5+</div>
              <div className="text-xs text-blue-100">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-lg md:text-xl font-bold text-accent">5</div>
              <div className="text-xs text-blue-100">Years Exp</div>
            </div>
          </motion.div>
          
          {/* Action Buttons - Made Smaller */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="default"
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-accent hover:bg-[#1D50C9] text-white px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
              data-testid="hero-free-consultation"
            >
              <Phone className="mr-2" size={16} />
              Book Free Consultation
            </Button>
            <Button 
              size="default"
              onClick={() => scrollToSection("contact")}
              className="bg-white/20 border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              <Rocket className="mr-2" size={16} />
              Start Your Journey
            </Button>
            <Button 
              variant="outline"
              size="default"
              onClick={() => scrollToSection("testimonials")}
              className="border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm bg-white/10"
            >
              <Play className="mr-2" size={16} />
              Watch Success Stories
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Consultation Form Modal */}
      <ConsultationFormModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
      
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
