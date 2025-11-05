import { Button } from "@/components/ui/button";
import { useConsultationPopup } from "@/contexts/consultation-popup-context";
import { Calendar } from "lucide-react";

interface BookConsultationButtonProps {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
}

export default function BookConsultationButton({ 
  variant = "default", 
  size = "default",
  className = "",
  children 
}: BookConsultationButtonProps) {
  const { openConsultationPopup } = useConsultationPopup();

  return (
    <Button
      onClick={openConsultationPopup}
      variant={variant}
      size={size}
      className={className}
      data-testid="button-book-consultation"
    >
      {children || (
        <>
          <Calendar className="w-5 h-5 mr-2" />
          Book Free Consultation
        </>
      )}
    </Button>
  );
}
