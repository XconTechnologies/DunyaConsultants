import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
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