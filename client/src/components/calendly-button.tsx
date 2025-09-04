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

    // If currently loading, wait for it
    if (calendlyLoading) {
      const checkLoaded = setInterval(() => {
        if (calendlyLoaded && window.Calendly) {
          clearInterval(checkLoaded);
          resolve();
        }
      }, 100);
      return;
    }

    calendlyLoading = true;

    // Load CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(cssLink);

    // Load JavaScript
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      calendlyLoaded = true;
      calendlyLoading = false;
      resolve();
    };
    
    script.onerror = () => {
      calendlyLoading = false;
      reject(new Error('Failed to load Calendly'));
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
      // Load Calendly if not already loaded
      await loadCalendly();
      
      // Open Calendly popup
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url });
      } else {
        // Fallback: open in new tab
        window.open(url, '_blank');
      }
    } catch (error) {
      console.error('Error loading Calendly:', error);
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