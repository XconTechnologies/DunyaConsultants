import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import SmartImage from "@/components/ui/smart-image";
import type { BranchIcon } from "@shared/schema";

export default function BranchesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Fetch branch icons from database
  const { data: branches = [], isLoading } = useQuery<BranchIcon[]>({
    queryKey: ["/api/branch-icons"],
  });
  
  // Triple the array for seamless infinite scrolling
  const duplicatedBranches = [...branches, ...branches, ...branches];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || branches.length === 0) return;

    let intervalId: NodeJS.Timeout;
    let isPaused = false;
    let isTransitioning = false;
    let cachedCardWidth = 0;
    
    // Calculate card width including gap
    const getCardWidth = () => {
      if (cachedCardWidth > 0) return cachedCardWidth;
      
      const firstCard = carousel.querySelector('.branch-card');
      if (!firstCard) return window.innerWidth >= 640 ? 144 : 120; // w-36 or w-30 in pixels
      
      const cardWidth = firstCard.clientWidth;
      const gap = window.innerWidth >= 640 ? 16 : 12; // sm:gap-4 or gap-3
      cachedCardWidth = cardWidth + gap;
      return cachedCardWidth;
    };

    // Start at the middle set (second copy) for seamless looping
    const initializePosition = () => {
      const cardWidth = getCardWidth();
      carousel.style.scrollBehavior = 'auto';
      carousel.scrollLeft = cardWidth * branches.length;
      setTimeout(() => {
        carousel.style.scrollBehavior = 'smooth';
      }, 100);
    };

    // Initialize position after a short delay to ensure layout is ready
    setTimeout(initializePosition, 150);

    const scrollToNextCard = () => {
      if (isPaused || isTransitioning) return;
      
      const cardWidth = getCardWidth();
      const singleSetWidth = cardWidth * branches.length;
      
      // Smooth scroll to next card
      carousel.scrollLeft += cardWidth;
      
      // Check if we're approaching the end of the second set
      setTimeout(() => {
        const currentScroll = carousel.scrollLeft;
        const threshold = singleSetWidth * 2 - cardWidth;
        
        // If we've scrolled past the second set, jump to equivalent position in first set
        if (currentScroll >= threshold) {
          isTransitioning = true;
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = currentScroll - singleSetWidth;
          setTimeout(() => {
            carousel.style.scrollBehavior = 'smooth';
            isTransitioning = false;
          }, 50);
        }
        // If scrolled before first set, jump to equivalent position in second set
        else if (currentScroll < cardWidth) {
          isTransitioning = true;
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = currentScroll + singleSetWidth;
          setTimeout(() => {
            carousel.style.scrollBehavior = 'smooth';
            isTransitioning = false;
          }, 50);
        }
      }, 600); // Wait for scroll animation to complete
    };

    // Auto-scroll every 3 seconds
    intervalId = setInterval(scrollToNextCard, 3000);

    // Pause on hover and touch
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    const handleTouchStart = () => {
      isPaused = true;
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        isPaused = false;
        // Check position after manual scroll
        const cardWidth = getCardWidth();
        const singleSetWidth = cardWidth * branches.length;
        const currentScroll = carousel.scrollLeft;
        
        if (currentScroll >= singleSetWidth * 2 - cardWidth) {
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = currentScroll - singleSetWidth;
          setTimeout(() => {
            carousel.style.scrollBehavior = 'smooth';
          }, 50);
        } else if (currentScroll < cardWidth) {
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = currentScroll + singleSetWidth;
          setTimeout(() => {
            carousel.style.scrollBehavior = 'smooth';
          }, 50);
        }
      }, 150);
    };

    // Handle window resize to recalculate positions
    const handleResize = () => {
      cachedCardWidth = 0; // Reset cache
      initializePosition();
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('resize', handleResize);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, [branches.length]);

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

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {isLoading ? (
            <div className="text-center py-8 text-gray-500">Loading branches...</div>
          ) : branches.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No branches available</div>
          ) : (
            <>
              <style>{`
                @media (max-width: 639px) {
                  .branch-carousel-container {
                    padding-left: calc((100vw - 120px) / 2);
                    padding-right: calc((100vw - 120px) / 2);
                  }
                }
                @media (min-width: 640px) {
                  .branch-carousel-container {
                    padding-left: calc((100vw - 144px) / 2);
                    padding-right: calc((100vw - 144px) / 2);
                  }
                }
              `}</style>
              <div
                ref={carouselRef}
                className="branch-carousel-container flex gap-3 sm:gap-4 overflow-x-scroll scrollbar-hide will-change-scroll"
                style={{
                  scrollBehavior: 'auto',
                  width: '100%',
                  WebkitOverflowScrolling: 'touch',
                  scrollSnapType: 'x mandatory'
                }}
              >
                {duplicatedBranches.map((branch, index) => (
                  <div
                    key={`${branch.id}-${index}`}
                    className="flex-shrink-0 w-30 sm:w-36 branch-card my-4 sm:my-6"
                    style={{
                      scrollSnapAlign: 'center'
                    }}
                  >
                    {/* Icon Card with City Name */}
                    <Link href={branch.route}>
                      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group p-3 sm:p-4 flex flex-col items-center justify-center h-32 sm:h-36">
                        <SmartImage
                          src={branch.iconUrl} 
                          alt={`${branch.name} office landmark`}
                          className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <p className="mt-2 text-xs sm:text-sm font-semibold text-[#1D50C9] text-center line-clamp-2">
                          {branch.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Gradient Overlays for smooth fade effect */}
              <div className="absolute top-0 left-0 w-8 sm:w-16 lg:w-24 h-full bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-8 sm:w-16 lg:w-24 h-full bg-gradient-to-l from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
