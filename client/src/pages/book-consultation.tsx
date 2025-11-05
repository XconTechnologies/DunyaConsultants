import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import ConsultationFormPopup from "@/components/consultation-form-popup";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function BookConsultation() {
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setLocation("/");
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-lg text-gray-600">
            Loading consultation form...
          </p>
        </div>
      </div>
      <Footer />
      
      <ConsultationFormPopup isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
