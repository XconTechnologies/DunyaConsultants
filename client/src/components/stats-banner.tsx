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
  MapPin,
  MessageCircle
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import CompactConsultationForm from "@/components/compact-consultation-form";

const AnimatedCounter = ({ number, suffix, isVisible }: { number: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 800;
    const steps = 40;
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
      case 4: // Expert Counselors - Go to team page
        setLocation('/about/team');
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
      number: 20,
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
      {/* Social Icons - Fixed Position for Desktop, Bottom Section for Mobile - Outside container for proper z-index */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[9999] bg-white rounded-full px-2 py-3 shadow-lg border border-gray-200 hidden lg:block">
        <div className="flex flex-col gap-2">
          <a
            href="https://www.facebook.com/DunyaConsultant/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="w-7 h-7 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
          >
            <FaFacebook className="w-3 h-3 text-white" />
          </a>
          <a
            href="https://www.instagram.com/dunya.consultants/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="w-7 h-7 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
          >
            <FaInstagram className="w-3 h-3 text-white" />
          </a>
          <a
            href="https://www.tiktok.com/@dunya.consultants"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Watch us on TikTok"
            className="w-7 h-7 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
          >
            <FaTiktok className="w-3 h-3 text-white" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC7m3BZYXrHTeu1RXaK3PeLA"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Subscribe to our YouTube channel"
            className="w-7 h-7 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
          >
            <FaYoutube className="w-3 h-3 text-white" />
          </a>
          <a
            href="https://pk.linkedin.com/company/dunyaconsultant"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Connect with us on LinkedIn"
            className="w-7 h-7 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin className="w-3 h-3 text-white" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 lg:pt-[120px] pb-8 sm:pb-12 lg:pb-[50px]" ref={ref}>

        {/* Mobile Social Icons - At bottom of banner */}
        <div className="flex justify-center mt-8 mb-4 lg:hidden">
          <div className="flex gap-4 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
            <a
              href="https://www.facebook.com/DunyaConsultant/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="w-8 h-8 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
            >
              <FaFacebook className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.instagram.com/dunya.consultants/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.tiktok.com/@dunya.consultants"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Watch us on TikTok"
              className="w-8 h-8 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
            >
              <FaTiktok className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC7m3BZYXrHTeu1RXaK3PeLA"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Subscribe to our YouTube channel"
              className="w-8 h-8 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
            >
              <FaYoutube className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://pk.linkedin.com/company/dunyaconsultant"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Connect with us on LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full social-icon-background transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 text-white font-normal px-2">
            Turning <span className="font-bold italic">Ambition</span> into <span className="font-bold italic">Admission</span>
          </h1>
          
          <p className="text-white/80 text-xs sm:text-sm lg:text-base max-w-3xl mx-auto leading-relaxed px-4">
            Join thousands of successful students who achieved their international education dreams with the best study abroad consultants in Pakistan, trusted and experienced visa experts guiding your journey step by step
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4 max-w-5xl mx-auto px-2 sm:px-4">
          {/* First 4 cards in normal grid */}
          {stats.slice(0, 4).map((stat, index) => {
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
                <div className="relative bg-white/8 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full group-hover:bg-white/12 group-hover:shadow-lg">
                  {/* Icon Container */}
                  <div className="relative mb-2 sm:mb-3 lg:mb-4 flex justify-center">
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center ${stat.glowColor} shadow-lg group-hover:shadow-xl transition-all duration-500`} style={{ backgroundColor: '#1D50C9' }}>
                      <IconComponent className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-1 sm:space-y-1.5 lg:space-y-2">
                    <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 group-hover:from-white group-hover:via-blue-100 group-hover:to-white transition-all duration-500">
                      <AnimatedCounter 
                        number={stat.number} 
                        suffix={stat.suffix} 
                        isVisible={isInView} 
                      />
                    </div>
                    
                    <p className="text-white font-semibold text-xs sm:text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500 leading-tight">
                      {stat.label}
                    </p>
                    
                    <p className="text-white/60 text-xs sm:text-xs group-hover:text-white/80 transition-colors duration-300 leading-tight">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* 5th card centered */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 flex justify-center">
            <div className="group relative cursor-pointer w-full max-w-[200px]" onClick={() => handleStatClick(4)}>
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                style={{ background: stats[4].bgPattern }}
              />
              
              {/* Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${stats[4].gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/8 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full group-hover:bg-white/12 group-hover:shadow-lg">
                {/* Icon Container */}
                <div className="relative mb-2 sm:mb-3 lg:mb-4 flex justify-center">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center ${stats[4].glowColor} shadow-lg group-hover:shadow-xl transition-all duration-500`} style={{ backgroundColor: '#1D50C9' }}>
                    <Star className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-1 sm:space-y-1.5 lg:space-y-2">
                  <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 group-hover:from-white group-hover:via-blue-100 group-hover:to-white transition-all duration-500">
                    <AnimatedCounter 
                      number={stats[4].number} 
                      suffix={stats[4].suffix} 
                      isVisible={isInView} 
                    />
                  </div>
                  
                  <p className="text-white font-semibold text-xs sm:text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500 leading-tight">
                    {stats[4].label}
                  </p>
                  
                  <p className="text-white/60 text-xs sm:text-xs group-hover:text-white/80 transition-colors duration-300 leading-tight">
                    {stats[4].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Element */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12 lg:mt-16 mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#1D50C9' }} />
            <span className="text-white/80 font-medium text-sm sm:text-base">Trusted Excellence Since 2021</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: '#1D50C9' }} />
          </div>
          <Button 
            onClick={() => setIsPopupOpen(true)}
            className="bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 px-4 py-2 text-sm font-medium rounded-full backdrop-blur-xl transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Connect now
          </Button>
        </div>
      </div>
      
      {/* Consultation Form Popup */}
      <CompactConsultationForm 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      
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