import { useState, useEffect } from "react";
import { X, Phone, Mail, MapPin, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SimpleConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SimpleConsultationPopup({ isOpen, onClose }: SimpleConsultationPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const consultationTypes = [
    "General Consultation",
    "UK Study Visa",
    "Canada Study Visa", 
    "Australia Study Visa",
    "USA Study Visa",
    "Germany Study Visa",
    "IELTS Preparation",
    "University Selection",
    "Document Guidance"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        consultationType: "",
        message: ""
      });
      onClose();
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center z-50 p-4 pt-16"
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
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-auto mt-8"
        onClick={(e) => e.stopPropagation()}
        style={{ marginTop: '2rem' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4285F4] to-[#1a73e8] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Book Your Free Consultation</h2>
              <p className="text-blue-100">Get expert guidance for your study abroad journey</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <User className="w-5 h-5 mr-2 #3367D6" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <Input
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="border-gray-300 focus:#4285F4"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="border-gray-300 focus:#4285F4"
                    />
                    
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="border-gray-300 focus:#4285F4"
                    />
                  </div>
                </div>
              </div>

              {/* Consultation Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Consultation Details</h3>
                
                <Select value={formData.consultationType} onValueChange={(value) => handleInputChange("consultationType", value)}>
                  <SelectTrigger className="border-gray-300 focus:#4285F4">
                    <SelectValue placeholder="Select Consultation Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    {consultationTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell us about your study abroad goals and any specific questions..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="border-gray-300 focus:#4285F4 min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                className="w-full #3367D6 hover:bg-#1a73e8 text-white font-semibold py-3 text-lg transition-colors"
              >
                {isSubmitting ? "Booking Consultation..." : "Book Free Consultation"}
              </Button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 #3367D6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultation Booked Successfully!</h3>
              <p className="text-gray-600 mb-4">
                Thank you for booking your free consultation. Our expert counselor will contact you within 24 hours.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-#1a73e8">
                  <strong>Next Steps:</strong> Prepare your academic documents and think about your preferred study destinations.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-6 border-t">
          <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 #3367D6" />
              <span>+92 304 1110947</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 #3367D6" />
              <span>info@dunyaconsultants.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 #3367D6" />
              <span>Alif Tower, Sargodha</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}