import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  showIcon?: boolean;
}

export default function CalendlyButton({
  url = "https://calendly.com/meet-dunya-consultants/20min",
  text = "Book Free Consultation",
  className = "",
  variant = "default",
  size = "default",
  showIcon = true
}: CalendlyButtonProps) {

  const openCalendly = () => {
    // Track Calendly button click
    trackEvent('calendly_click', 'engagement', 'consultation_booking');
    
    // Open Calendly directly in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={openCalendly}
      className={`bg-[#1D50C9] hover:bg-[#1845B3] text-white ${className}`}
      variant={variant}
      size={size}
    >
      {showIcon && <Calendar className="w-4 h-4 mr-2" />}
      {text}
    </Button>
  );
}