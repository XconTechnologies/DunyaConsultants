import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafId = useRef<number | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
      ticking.current = false;
    };

    const requestTick = () => {
      if (!ticking.current) {
        rafId.current = requestAnimationFrame(updateScrollProgress);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => {
      window.removeEventListener('scroll', requestTick);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50 backdrop-blur-sm">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ 
          scaleX: scrollProgress,
          transformOrigin: "0%" 
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}