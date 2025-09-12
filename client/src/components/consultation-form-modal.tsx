import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  interestedCountry: string;
  message: string;
}

const countries = [
  "Select a country",
  "USA",
  "UK", 
  "Canada",
  "Australia",
  "Finland",
  "Belgium",
  "Turkey",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
  "Denmark",
  "Norway"
];

export default function ConsultationFormModal({ isOpen, onClose }: ConsultationFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    interestedCountry: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.interestedCountry || formData.interestedCountry === "Select a country") {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you! Your consultation request has been submitted. We'll contact you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interestedCountry: "",
        message: ""
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-2xl max-w-md w-full my-8 shadow-2xl relative"
          style={{ maxHeight: 'calc(100vh - 4rem)' }}
        >
          <div className="max-h-full overflow-y-auto rounded-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6 relative rounded-t-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              data-testid="button-close-modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Book Your Free Consultation</h2>
              <p className="text-sm opacity-90">Connect with our expert advisors today</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name and Email - Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all"
                    required
                    data-testid="input-full-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              {/* Phone Number and Country - Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all"
                    required
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <label htmlFor="interestedCountry" className="block text-sm font-medium text-gray-700 mb-1">
                    Interested Country *
                  </label>
                  <select
                    id="interestedCountry"
                    name="interestedCountry"
                    value={formData.interestedCountry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all bg-white"
                    required
                    data-testid="select-country"
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your study abroad goals..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all resize-none"
                  data-testid="textarea-message"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-submit-consultation"
              >
                {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
              </Button>
            </form>
          </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}