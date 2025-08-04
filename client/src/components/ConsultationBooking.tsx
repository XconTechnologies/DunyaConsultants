import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface ConsultationBookingProps {
  country: string;
  children: React.ReactNode;
}

export default function ConsultationBooking({ country, children }: ConsultationBookingProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center text-blue-600">
            <Calendar className="w-5 h-5 mr-2" />
            Book Free Consultation - {country}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-900">UAN Number</p>
            <p className="text-xl font-bold text-blue-600">(+92) 304 1110947</p>
          </div>
          <div className="space-y-3">
            <Button 
              onClick={() => window.open('tel:+923041110947')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              📞 Call Now
            </Button>
            <Button 
              onClick={() => window.open(`https://wa.me/923041110947?text=Hello, I want to book a free consultation for studying in ${country}`)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              💬 WhatsApp
            </Button>
          </div>
          <div className="text-center text-sm text-gray-600">
            <p>📧 info@dunyaconsultants.com</p>
            <p>📍 Alif Tower, Sargodha</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}