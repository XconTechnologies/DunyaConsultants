import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";
import ConsultationFormPopup from "@/components/consultation-form-popup";

interface ConsultationPopupContextType {
  openConsultationPopup: () => void;
  closeConsultationPopup: () => void;
  isOpen: boolean;
}

const ConsultationPopupContext = createContext<ConsultationPopupContextType | undefined>(undefined);

export function ConsultationPopupProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [previousPath, setPreviousPath] = useState("/");

  useEffect(() => {
    if (location === "/book-consultation") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location]);

  const openConsultationPopup = () => {
    setPreviousPath(location);
    setLocation("/book-consultation");
  };

  const closeConsultationPopup = () => {
    setIsOpen(false);
    if (location === "/book-consultation") {
      setLocation(previousPath);
    }
  };

  return (
    <ConsultationPopupContext.Provider value={{ openConsultationPopup, closeConsultationPopup, isOpen }}>
      {children}
      <ConsultationFormPopup isOpen={isOpen} onClose={closeConsultationPopup} />
    </ConsultationPopupContext.Provider>
  );
}

export function useConsultationPopup() {
  const context = useContext(ConsultationPopupContext);
  if (context === undefined) {
    throw new Error("useConsultationPopup must be used within ConsultationPopupProvider");
  }
  return context;
}
