import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

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

export default function CalendlyButton({
  url = "https://calendly.com/pathvisaconsultants/consultation",
  text = "Schedule Meeting",
  className = "",
  variant = "default",
  size = "default",
  showIcon = true
}: CalendlyButtonProps) {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback: open in new tab if Calendly isn't loaded
      window.open(url, '_blank');
    }
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