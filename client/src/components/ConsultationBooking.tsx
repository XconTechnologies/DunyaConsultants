import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import CalendlyButton from "@/components/calendly-button";

interface ConsultationBookingProps {
  country: string;
  children: React.ReactNode;
}

export default function ConsultationBooking({ country, children }: ConsultationBookingProps) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center text-[#1845B3]">
          <Calendar className="w-5 h-5 mr-2" />
          Book Free Consultation
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <p className="font-semibold text-[#1e3a8a]">UAN Number</p>
          <p className="text-xl font-bold text-[#1845B3]">(+92) 326 1111947</p>
        </div>
        <div className="space-y-3">
          <a href="tel:+923261111947" className="w-full">
            <Button 
              className="w-full bg-[#1845B3] hover:bg-[#1a73e8] text-white"
            >
              📞 Call Now
            </Button>
          </a>
          <Button 
            onClick={() => window.open('https://wa.me/923261111947?text=Hello, I want to book a free consultation for study abroad')}
            className="w-full bg-[#1845B3] hover:bg-[#1a73e8] text-white"
          >
            💬 WhatsApp
          </Button>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>📧 info@dunyaconsultants.com</p>
          <p>📍 Alif Tower, Sargodha</p>
        </div>
      </div>
    </>
  );
}