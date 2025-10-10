import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelWhatsAppInput } from "@/components/ui/floating-label-whatsapp-input";
import { FloatingLabelTextarea } from "@/components/ui/floating-label-textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent, trackConsultationBooking } from "@/lib/analytics";

interface ConsultationFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  whatsappNumber: string;
  city: string;
  interestedCountries: string[];
  message: string;
}

const countries = [
  "United States",
  "United Kingdom", 
  "Canada",
  "Australia",
  "Germany",
  "Finland",
  "Belgium",
  "Turkey"
];

export default function ConsultationFormPopup({ isOpen, onClose }: ConsultationFormPopupProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "+92",
    whatsappNumber: "",
    city: "",
    interestedCountries: [],
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryToggle = (country: string) => {
    setFormData(prev => ({
      ...prev,
      interestedCountries: prev.interestedCountries.includes(country)
        ? prev.interestedCountries.filter(c => c !== country)
        : [...prev.interestedCountries, country]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.interestedCountries.length === 0) {
      alert("Please select at least one country.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send data to Google Sheets via backend
      const response = await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode}${formData.whatsappNumber}`,
          city: formData.city,
          country: formData.interestedCountries.join(", "),
          message: formData.message
        }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        // Track successful consultation booking
        trackConsultationBooking();
        trackEvent('consultation_popup_success', 'conversion', formData.interestedCountries.join(", "));
        
        alert("✅ Submitted Successfully");
        setFormData({
          fullName: "",
          email: "",
          countryCode: "+92",
          whatsappNumber: "",
          city: "",
          interestedCountries: [],
          message: ""
        });
        onClose();
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div style={{ color: 'white' }}>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'white' }}>Book Your Free Consultation</h2>
              <p className="text-sm opacity-90" style={{ color: 'white' }}>Connect with our expert advisors today</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name and WhatsApp Number - Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingLabelInput
                  label="Full Name *"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                <FloatingLabelWhatsAppInput
                  label="WhatsApp Number *"
                  countryCode={formData.countryCode}
                  onCountryCodeChange={(code) => setFormData(prev => ({ ...prev, countryCode: code }))}
                  numberValue={formData.whatsappNumber}
                  onNumberChange={(number) => setFormData(prev => ({ ...prev, whatsappNumber: number }))}
                  required
                />
              </div>

              {/* Email and City - Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingLabelInput
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <FloatingLabelInput
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>

              {/* Interested Countries - Checkboxes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Interested Countries *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {countries.map((country) => (
                    <div key={country} className="flex items-center space-x-2">
                      <Checkbox
                        id={`form-popup-${country}`}
                        checked={formData.interestedCountries.includes(country)}
                        onCheckedChange={() => handleCountryToggle(country)}
                      />
                      <label
                        htmlFor={`form-popup-${country}`}
                        className="text-sm text-gray-700 cursor-pointer select-none"
                      >
                        {country}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <FloatingLabelTextarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={2}
              />

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                {/* Submit Form Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#1D50C9] hover:bg-[#1845B3] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
