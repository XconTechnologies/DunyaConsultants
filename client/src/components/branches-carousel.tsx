import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import SmartImage from "@/components/ui/smart-image";
import type { BranchIcon } from "@shared/schema";

export default function BranchesCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  // Check screen size for all breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Fetch branch icons from database
  const { data: branches = [], isLoading } = useQuery<BranchIcon[]>({
    queryKey: ["/api/branch-icons"],
  });
  
  // Double the array for seamless infinite scrolling
  const duplicatedBranches = [...branches, ...branches];
  
  // Calculate exact scroll distance including gaps for seamless loop
  // Mobile: w-28 (112px) + gap-2 (8px)
  // Tablet (sm): w-32 (128px) + gap-3 (12px)
  // Desktop (lg): w-40 (160px) + gap-4 (16px)
  const itemWidth = screenSize === 'mobile' ? 112 : screenSize === 'tablet' ? 128 : 160;
  const gapSize = screenSize === 'mobile' ? 8 : screenSize === 'tablet' ? 12 : 16;
  // Total distance = (n items × width) + ((n-1) gaps × gap size)
  const totalDistance = -(branches.length * itemWidth + (branches.length - 1) * gapSize);

  return (
    <section className="py-8 lg:py-12 pb-8 lg:pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-6 text-[#1D50C9]"
          >Our Global Network</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          >
            Serving students globally with our extensive network of offices across Pakistan, UK, Turkey, Egypt, and Saudi Arabia
          </motion.p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div 
          className="relative overflow-hidden h-[160px] sm:h-[180px] lg:h-[200px] flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {isLoading ? (
            <div className="text-center py-8 text-gray-500">Loading branches...</div>
          ) : branches.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No branches available</div>
          ) : (
            <div
              className="flex items-center gap-2 sm:gap-3 lg:gap-4 will-change-transform animate-scroll"
              style={{ 
                width: `${itemWidth * duplicatedBranches.length + gapSize * (duplicatedBranches.length - 1)}px`,
                animationPlayState: isHovered ? 'paused' : 'running',
                paddingLeft: `${gapSize}px !important`,
                paddingRight: `${gapSize}px !important`
              }}
            >
              {duplicatedBranches.map((branch, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-28 sm:w-32 lg:w-40 flex items-center justify-center"
                >
                  {/* Icon Card with City Name */}
                  <Link href={branch.route} className="block">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group p-3 sm:p-4 flex flex-col items-center justify-center">
                      <SmartImage
                        src={branch.iconUrl} 
                        alt={`${branch.name} office landmark`}
                        width={64}
                        height={64}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <p className="mt-2 text-xs sm:text-sm font-semibold text-[#1D50C9] text-center">
                        {branch.name}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-8 sm:w-16 lg:w-24 h-full bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 sm:w-16 lg:w-24 h-full bg-gradient-to-l from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(${totalDistance}px); }
        }
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
      `}</style>
    </section>
  );
}