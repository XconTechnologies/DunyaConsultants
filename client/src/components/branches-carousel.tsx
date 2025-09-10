import { motion, useAnimation } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { 
  Building, 
  Building2, 
  Landmark, 
  MapPin, 
  Factory,
  Zap,
  Plane,
  Castle,
  Crown,
  Star,
  Mountain,
  Globe,
  Shield,
  Trophy,
  Target,
  Flag
} from "lucide-react";

// Import branch landmark icons
import lahoreIcon from "@assets/2_1753704363745.webp";
import karachiIcon from "@assets/4_1753704363746.webp";
import sargodhaIcon from "@assets/5_1753704363747.webp";
import gujratIcon from "@assets/6_1753704363748.webp";
import faisalabadIcon from "@assets/8_1753704363742.webp";
import bahawalputIcon from "@assets/9_1753704363743.webp";
import mianChannuIcon from "@assets/10_1753704363744.webp";
import mandiBahauddinIcon from "@assets/11_1753704363740.webp";
import sialkotIcon from "@assets/12_1753704363741.webp";
import sheikhupuraIcon from "@assets/13_1753704363739.webp";
import mardanIcon from "@assets/14_1753704363737.webp";
import multanIcon from "@assets/15_1753704363733.webp";

// Optimized branches array with only key locations for faster loading
const branches = [
  { name: "Karachi", icon: Building2, sketch: "🏢", landmarkIcon: karachiIcon, route: "/offices/karachi" },
  { name: "Sargodha", icon: Landmark, sketch: "🏛️", landmarkIcon: sargodhaIcon, route: "/offices/sargodha-head-office" },
  { name: "Gujrat", icon: Castle, sketch: "🏰", landmarkIcon: gujratIcon, route: "/offices/gujrat" },
  { name: "Faisalabad", icon: Factory, sketch: "🏭", landmarkIcon: faisalabadIcon, route: "/offices/faisalabad" },
  { name: "Sialkot", icon: Trophy, sketch: "🏆", landmarkIcon: sialkotIcon, route: "/offices/sialkot" },
  { name: "Multan", icon: Star, sketch: "⭐", landmarkIcon: multanIcon, route: "/offices/multan" },
  { name: "Bahawalpur", icon: Crown, sketch: "👑", landmarkIcon: bahawalputIcon, route: "/offices/bahawalpur" },
  { name: "Sheikhupura", icon: Building, sketch: "🏘️", landmarkIcon: sheikhupuraIcon, route: "/offices/sheikhupura" },
  { name: "Mardan", icon: Mountain, sketch: "⛰️", landmarkIcon: mardanIcon, route: "/offices/mardan" },
  { name: "Mian Channu", icon: Shield, sketch: "🛡️", landmarkIcon: mianChannuIcon, route: "/offices/mianchannu" },
  { name: "Mandi Bahauddin", icon: Target, sketch: "🎯", landmarkIcon: mandiBahauddinIcon, route: "/offices/mandi-bahauddin" },
  { name: "Lahore", icon: Building2, sketch: "🏢", landmarkIcon: lahoreIcon, route: "/offices/lahore-dha" }
];

export default function BranchesCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  
  // Triple the array for seamless infinite scrolling
  const duplicatedBranches = [...branches, ...branches, ...branches];
  const totalDistance = -120 * branches.length;

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: totalDistance,
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 12,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }

    return () => {
      controls.stop();
    };
  }, [isHovered, controls, totalDistance]);

  return (
    <section className="py-8 lg:py-12 pb-16 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-6 text-[#1D50C9]"
          >Our Branches</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          >
            Serving students across Pakistan with our extensive network of branches
          </motion.p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div 
          className="relative overflow-hidden min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <motion.div
            animate={controls}
            className="flex gap-2 sm:gap-3 lg:gap-4 will-change-transform py-4"
            style={{ width: `${120 * duplicatedBranches.length}px` }}
          >
            {duplicatedBranches.map((branch, index) => {
              const IconComponent = branch.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-28 sm:w-32 lg:w-40 flex items-center justify-center"
                >
                  {/* Clean Icon Container with Link */}
                  <Link href={branch.route} className="block">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                      {branch.landmarkIcon ? (
                        <img 
                          src={branch.landmarkIcon} 
                          alt={`${branch.name} landmark`}
                          className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#1D50C9] group-hover:scale-105 transition-transform duration-300" />
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </motion.div>

          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-8 sm:w-16 lg:w-24 h-full bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 sm:w-16 lg:w-24 h-full bg-gradient-to-l from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}