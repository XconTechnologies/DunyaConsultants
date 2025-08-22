import { useState, useEffect } from "react";
import { X, Phone, MessageCircle, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SimpleConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SimpleConsultationPopup({ isOpen, onClose }: SimpleConsultationPopupProps) {
  const [selectedCountry, setSelectedCountry] = useState("General");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const countryOptions = [
    "General",
    "UK Study Visa",
    "Canada Study Visa", 
    "Australia Study Visa",
    "USA Study Visa",
    "Germany Study Visa"
  ];

  const handleCall = () => {
    window.open('tel:+923041110947', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/923041110947', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1D50C9] to-[#1565c0] p-4 text-white relative rounded-t-xl">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center space-x-2 mb-3">
            <Users className="w-5 h-5" />
            <h2 className="text-lg font-bold">Free Consultation</h2>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Available Now</span>
              </span>
              <span>• 15 online</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.8/5</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <p className="text-gray-600 text-sm">Get expert guidance for study abroad</p>
          
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Country Counselor:</label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-full h-10 border-gray-300 focus:border-[#1D50C9]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {countryOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Main Office</span>
                <span className="text-gray-500">General</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              onClick={handleCall}
              className="w-full bg-[#1D50C9] hover:bg-[#1565c0] text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Main Office</span>
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-2 text-center text-xs text-gray-500">
            <div>
              <div className="font-semibold text-[#1D50C9]">15K+</div>
              <div>Students</div>
            </div>
            <div>
              <div className="font-semibold text-[#1D50C9]">98%</div>
              <div>Success</div>
            </div>
            <div>
              <div className="font-semibold text-[#1D50C9]">15+</div>
              <div>Years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}