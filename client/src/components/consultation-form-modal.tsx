import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelTextarea } from "@/components/ui/floating-label-textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationFormModalProps {
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

const countryCodes = [
  { code: "+92", country: "Pakistan" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+358", country: "Finland" },
  { code: "+32", country: "Belgium" },
  { code: "+90", country: "Turkey" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+20", country: "Egypt" },
];

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

export default function ConsultationFormModal({ isOpen, onClose }: ConsultationFormModalProps) {
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
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.whatsappNumber || formData.interestedCountries.length === 0) {
      alert("Please fill in all required fields and select at least one country.");
      return;
    }

    setIsSubmitting(true);
    
    // Get source page from URL
    const currentPath = window.location.pathname;
    let source = "Website - Unknown Page";
    
    // Test Prep Pages
    if (currentPath.includes("ielts")) source = "IELTS Page";
    else if (currentPath.includes("pte")) source = "PTE Page";
    else if (currentPath.includes("toefl")) source = "TOEFL Page";
    else if (currentPath.includes("duolingo")) source = "Duolingo Page";
    
    // Country Pages
    else if (currentPath.includes("usa")) source = "USA Study Guide";
    else if (currentPath.includes("uk")) source = "UK Study Guide";
    else if (currentPath.includes("canada")) source = "Canada Study Guide";
    else if (currentPath.includes("finland")) source = "Finland Study Guide";
    else if (currentPath.includes("australia")) source = "Australia Study Guide";
    else if (currentPath.includes("belgium")) source = "Belgium Study Guide";
    else if (currentPath.includes("turkey")) source = "Turkey Study Guide";
    
    // Office Pages
    else if (currentPath.includes("sargodha")) source = "Sargodha Office";
    else if (currentPath.includes("lahore")) source = "Lahore Office";
    else if (currentPath.includes("karachi")) source = "Karachi Office";
    else if (currentPath.includes("islamabad")) source = "Islamabad Office";
    else if (currentPath.includes("faisalabad")) source = "Faisalabad Office";
    else if (currentPath.includes("bahawalpur")) source = "Bahawalpur Office";
    else if (currentPath.includes("multan")) source = "Multan Office";
    else if (currentPath.includes("gujranwala")) source = "Gujranwala Office";
    else if (currentPath.includes("sialkot")) source = "Sialkot Office";
    else if (currentPath.includes("gujrat")) source = "Gujrat Office";
    else if (currentPath.includes("jhelum")) source = "Jhelum Office";
    else if (currentPath.includes("sheikhupura")) source = "Sheikhupura Office";
    else if (currentPath.includes("mian-channu") || currentPath.includes("mianchannu")) source = "Mian Channu Office";
    else if (currentPath.includes("mandi-bahauddin")) source = "Mandi Bahauddin Office";
    else if (currentPath.includes("peshawar")) source = "Peshawar Office";
    else if (currentPath.includes("mardan")) source = "Mardan Office";
    else if (currentPath.includes("jeddah")) source = "Jeddah Office";
    else if (currentPath.includes("cairo")) source = "Cairo Office";
    else if (currentPath.includes("istanbul")) source = "Istanbul Office";
    else if (currentPath.includes("edinburgh")) source = "Edinburgh Office";
    
    // Other Pages
    else if (currentPath.includes("services")) source = "Services Page";
    else if (currentPath.includes("about")) source = "About Us";
    else if (currentPath.includes("blog")) source = "Blog Page";
    else if (currentPath.includes("contact")) source = "Contact Page";
    else if (currentPath.includes("cost-calculator")) source = "Cost Calculator";
    else if (currentPath.includes("course-match")) source = "Course Match Tool";
    else if (currentPath.includes("journey")) source = "Study Abroad Journey";
    else if (currentPath.includes("event")) source = "Events Page";
    else if (currentPath === "/" || currentPath === "") source = "Homepage";
    
    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode}${formData.whatsappNumber}`,
          city: formData.city,
          preferredCountry: formData.interestedCountries.join(", "),
          additionalInfo: formData.message,
          educationLevel: "Not specified",
          fieldOfStudy: "Not specified",
          source: source
        })
      });
      
      if (response.ok) {
        alert("Thank you! Your consultation request has been submitted. We'll contact you soon.");
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
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999 
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -50 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl"
          style={{ 
            maxHeight: '90vh',
            margin: '0 auto'
          }}
        >
          <div className="overflow-y-auto max-h-full rounded-2xl">
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
              {/* Full Name and WhatsApp Number - Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingLabelInput
                  label="Full Name *"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  data-testid="input-full-name"
                />
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="w-24 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all bg-white text-sm"
                    data-testid="select-country-code"
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code}
                      </option>
                    ))}
                  </select>
                  <div className="flex-1">
                    <FloatingLabelInput
                      label="WhatsApp Number *"
                      name="whatsappNumber"
                      type="tel"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      required
                      data-testid="input-whatsapp"
                    />
                  </div>
                </div>
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
                  data-testid="input-email"
                />
                <FloatingLabelInput
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  data-testid="input-city"
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
                        id={`country-${country}`}
                        checked={formData.interestedCountries.includes(country)}
                        onCheckedChange={() => handleCountryToggle(country)}
                        data-testid={`checkbox-${country.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                      <label
                        htmlFor={`country-${country}`}
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
                data-testid="textarea-message"
              />

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
