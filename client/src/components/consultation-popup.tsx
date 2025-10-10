import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelTextarea } from "@/components/ui/floating-label-textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
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

export default function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+92",
    whatsappNumber: "",
    city: "",
    interestedCountries: [] as string[],
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    
    // Get source page from URL
    const currentPath = window.location.pathname;
    let source = "Website - Unknown Page";
    
    if (currentPath.includes("ielts")) source = "IELTS Page";
    else if (currentPath.includes("pte")) source = "PTE Page";
    else if (currentPath.includes("toefl")) source = "TOEFL Page";
    else if (currentPath.includes("duolingo")) source = "Duolingo Page";
    else if (currentPath.includes("usa")) source = "USA Study Guide";
    else if (currentPath.includes("uk")) source = "UK Study Guide";
    else if (currentPath.includes("canada")) source = "Canada Study Guide";
    else if (currentPath.includes("finland")) source = "Finland Study Guide";
    else if (currentPath.includes("australia")) source = "Australia Study Guide";
    else if (currentPath.includes("belgium")) source = "Belgium Study Guide";
    else if (currentPath.includes("turkey")) source = "Turkey Study Guide";
    else if (currentPath.includes("services")) source = "Services Page";
    else if (currentPath.includes("about")) source = "About Us";
    else if (currentPath.includes("blog")) source = "Blog Page";
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
        setIsSubmitted(true);
        
        setTimeout(() => {
          setIsSubmitted(false);
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
        }, 3000);
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ 
            zIndex: 999999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1
            }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto"
            style={{ zIndex: 2 }}
          >
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6 text-white relative">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Book Your Free Consultation</h2>
                      <p className="text-blue-100">Get expert guidance for your study abroad journey</p>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Side - Form */}
                  <div className="p-6 lg:p-8">
                    {!isSubmitted ? (
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
                          <div className="flex gap-2">
                            <select
                              name="countryCode"
                              value={formData.countryCode}
                              onChange={handleInputChange}
                              className="w-24 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all bg-white text-sm"
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
                                  id={`popup-country-${country}`}
                                  checked={formData.interestedCountries.includes(country)}
                                  onCheckedChange={() => handleCountryToggle(country)}
                                />
                                <label
                                  htmlFor={`popup-country-${country}`}
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

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] py-3 text-lg font-semibold"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Booking Consultation...</span>
                            </div>
                          ) : (
                            "Book Free Consultation"
                          )}
                        </Button>
                      </form>
                    ) : (
                      /* Success State */
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-[#1D50C9] rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1845B3] mb-2">Consultation Booked!</h3>
                        <p className="text-gray-600 mb-4">
                          Thank you for booking a consultation with us. Our expert counselor will contact you within 24 hours.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-[#1D50C9]">
                            <strong>Next Steps:</strong> You'll receive a confirmation email with consultation details and a calendar invite.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side - Contact Info */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-6 lg:p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Free Consultation?</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#1D50C9] rounded-full mt-2 flex-shrink-0" />
                            <p>Get personalized study abroad guidance from certified counselors</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#1D50C9] rounded-full mt-2 flex-shrink-0" />
                            <p>Learn about visa requirements and application processes</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#1D50C9] rounded-full mt-2 flex-shrink-0" />
                            <p>Discover scholarship opportunities and financial aid options</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#1D50C9] rounded-full mt-2 flex-shrink-0" />
                            <p>Get university selection assistance based on your profile</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-blue-200 pt-6">
                        <h4 className="font-semibold text-gray-800 mb-4">Contact Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 text-sm">
                            <Phone className="w-4 h-4 text-[#1845B3]" />
                            <span>+92 304 1110947</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm">
                            <Mail className="w-4 h-4 text-[#1845B3]" />
                            <span>info@dunyaconsultants.com</span>
                          </div>
                          <div className="flex items-start space-x-3 text-sm">
                            <MapPin className="w-4 h-4 text-[#1845B3] mt-0.5" />
                            <span>Alif Tower Buhadur shah zafar road, Sargodha</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#1845B3]">17+</div>
                          <div className="text-xs text-gray-600">Office Locations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
