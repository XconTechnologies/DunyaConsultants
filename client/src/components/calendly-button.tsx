import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Loader2 } from "lucide-react";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  showIcon?: boolean;
}

// Cache to track if Calendly is already loaded
let calendlyLoaded = false;
let calendlyLoading = false;

const loadCalendly = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // If already loaded, resolve immediately
    if (calendlyLoaded && window.Calendly) {
      resolve();
      return;
    }

    // If currently loading, wait for it with timeout
    if (calendlyLoading) {
      let attempts = 0;
      const maxAttempts = 100; // 10 seconds max
      const checkLoaded = setInterval(() => {
        attempts++;
        if (calendlyLoaded && window.Calendly) {
          clearInterval(checkLoaded);
          resolve();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkLoaded);
          reject(new Error('Calendly loading timeout'));
        }
      }, 100);
      return;
    }

    calendlyLoading = true;

    // Check if script already exists
    if (document.querySelector('script[src*="calendly"]')) {
      // Script exists, wait for it to load
      let attempts = 0;
      const maxAttempts = 50;
      const checkLoaded = setInterval(() => {
        attempts++;
        if (window.Calendly) {
          clearInterval(checkLoaded);
          calendlyLoaded = true;
          calendlyLoading = false;
          resolve();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkLoaded);
          calendlyLoading = false;
          reject(new Error('Calendly script exists but failed to initialize'));
        }
      }, 100);
      return;
    }

    // Load CSS if not already loaded
    if (!document.querySelector('link[href*="calendly"]')) {
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(cssLink);
    }

    // Load JavaScript
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    // Set a timeout for loading
    const timeout = setTimeout(() => {
      calendlyLoading = false;
      reject(new Error('Calendly loading timeout'));
    }, 10000); // 10 second timeout
    
    script.onload = () => {
      clearTimeout(timeout);
      calendlyLoaded = true;
      calendlyLoading = false;
      resolve();
    };
    
    script.onerror = () => {
      clearTimeout(timeout);
      calendlyLoading = false;
      reject(new Error('Failed to load Calendly script'));
    };
    
    document.head.appendChild(script);
  });
};

export default function CalendlyButton({
  url = "https://calendly.com/globaldc89/30min",
  text = "Schedule Meeting",
  className = "",
  variant = "default",
  size = "default",
  showIcon = true
}: CalendlyButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const openCalendly = async () => {
    setIsLoading(true);
    
    try {
      // Add debug logging
      console.log('Calendly button clicked, loading Calendly...');
      
      // Load Calendly if not already loaded
      await loadCalendly();
      
      // Double check if Calendly is available
      if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
        console.log('Opening Calendly popup for URL:', url);
        window.Calendly.initPopupWidget({ url });
      } else {
        console.warn('Calendly not available, opening in new tab');
        window.open(url, '_blank');
      }
    } catch (error) {
      console.error('Error loading Calendly:', error);
      console.log('Falling back to opening in new tab');
      // Fallback: open in new tab
      window.open(url, '_blank');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={openCalendly}
      disabled={isLoading}
      className={`bg-[#1D50C9] hover:bg-[#1845B3] text-white disabled:opacity-70 ${className}`}
      variant={variant}
      size={size}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      ) : (
        showIcon && <Calendar className="w-4 h-4 mr-2" />
      )}
      {isLoading ? "Loading..." : text}
    </Button>
  );
}