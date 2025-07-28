import { motion } from "framer-motion";
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

const branches = [
  { name: "Islamabad", icon: Building, sketch: "🏛️", landmarkIcon: null },
  { name: "Karachi", icon: Building2, sketch: "🏢", landmarkIcon: karachiIcon },
  { name: "Sargodha", icon: Landmark, sketch: "🏛️", landmarkIcon: sargodhaIcon },
  { name: "Gujrat", icon: Castle, sketch: "🏰", landmarkIcon: gujratIcon },
  { name: "Gujranwala", icon: MapPin, sketch: "🌆", landmarkIcon: null },
  { name: "Faisalabad", icon: Factory, sketch: "🏭", landmarkIcon: faisalabadIcon },
  { name: "Sialkot", icon: Trophy, sketch: "🏆", landmarkIcon: sialkotIcon },
  { name: "Multan", icon: Star, sketch: "⭐", landmarkIcon: multanIcon },
  { name: "Bahawalpur", icon: Crown, sketch: "👑", landmarkIcon: bahawalputIcon },
  { name: "Sheikhupura", icon: Building, sketch: "🏘️", landmarkIcon: sheikhupuraIcon },
  { name: "Mardan", icon: Mountain, sketch: "⛰️", landmarkIcon: mardanIcon },
  { name: "Mian Channu", icon: Shield, sketch: "🛡️", landmarkIcon: mianChannuIcon },
  { name: "Mandi Bahauddin", icon: Target, sketch: "🎯", landmarkIcon: mandiBahauddinIcon },
  { name: "Lahore DHA", icon: Building2, sketch: "🏢", landmarkIcon: lahoreIcon },
  { name: "Lahore Johar Town", icon: Building, sketch: "🏘️", landmarkIcon: lahoreIcon },
  { name: "Jeddah", icon: Flag, sketch: "🕌", landmarkIcon: null },
  { name: "Istanbul", icon: Globe, sketch: "🌍", landmarkIcon: null }
];

export default function BranchesCarousel() {
  // Duplicate the array for seamless infinite scrolling
  const duplicatedBranches = [...branches, ...branches];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4"
          >
            OUR BRANCHES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Serving students across Pakistan with our extensive network of branches
          </motion.p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -150 * branches.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-6 will-change-transform"
            style={{ width: `${150 * duplicatedBranches.length}px` }}
          >
            {duplicatedBranches.map((branch, index) => {
              const IconComponent = branch.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-36 text-center"
                >
                  {/* Icon with Sketch */}
                  <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center relative shadow-lg border border-blue-100">
                    {branch.landmarkIcon ? (
                      <img 
                        src={branch.landmarkIcon} 
                        alt={`${branch.name} landmark`}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <IconComponent className="w-8 h-8 text-[#1e3a8a]" />
                    )}
                  </div>
                  
                  {/* Branch Name */}
                  <h3 className="text-sm font-medium text-[#1e3a8a]">
                    {branch.name}
                  </h3>
                </div>
              );
            })}
          </motion.div>

          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <div className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-1">17+</div>
            <div className="text-sm text-gray-600">Branches</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <div className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-1">15+</div>
            <div className="text-sm text-gray-600">Cities</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <div className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-1">200+</div>
            <div className="text-sm text-gray-600">Expert Staff</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <div className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-1">10K+</div>
            <div className="text-sm text-gray-600">Students Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}