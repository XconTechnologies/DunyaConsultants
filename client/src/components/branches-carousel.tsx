import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { BranchIcon } from "@shared/schema";

export default function BranchesCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Fetch branch icons from database
  const { data: branches = [], isLoading } = useQuery<BranchIcon[]>({
    queryKey: ["/api/branch-icons"],
  });
  
  // Duplicate array twice for seamless infinite scrolling
  const duplicatedBranches = [...branches, ...branches];
  const totalDistance = -120 * branches.length;

  return (
    <section className="py-8 lg:py-12 pb-6 lg:pb-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
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
          className="relative overflow-hidden min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {isLoading ? (
            <div className="text-center py-8 text-gray-500">Loading branches...</div>
          ) : branches.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No branches available</div>
          ) : (
            <div
              className="flex gap-2 sm:gap-3 lg:gap-4 will-change-transform py-4 animate-scroll-seamless"
              style={{ 
                width: `${120 * duplicatedBranches.length}px`,
                animationPlayState: isHovered ? 'paused' : 'running'
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
                      <img loading="lazy" 
                        src={branch.iconUrl} 
                        alt={`${branch.name} landmark`}
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
        @keyframes scroll-seamless {
          0% { transform: translateX(0); }
          100% { transform: translateX(${totalDistance}px); }
        }
        .animate-scroll-seamless {
          animation: scroll-seamless ${Math.max(branches.length * 2, 20)}s linear infinite;
        }
      `}</style>
    </section>
  );
}