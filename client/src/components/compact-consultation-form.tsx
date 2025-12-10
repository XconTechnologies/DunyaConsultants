import { useState, useEffect, useRef } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelWhatsAppInput } from "@/components/ui/floating-label-whatsapp-input";
import { FloatingLabelTextarea } from "@/components/ui/floating-label-textarea";
import { FloatingLabelSelect } from "@/components/ui/floating-label-select";
import { motion } from "framer-motion";
import { trackEvent, trackConsultationBooking, trackAdConversion } from "@/lib/analytics";
import { Checkbox } from "@/components/ui/checkbox";

interface CompactConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCountryCode?: string;
}

interface FormData {
  fullName: string;
  city: string;
  countryCode: string;
  whatsappNumber: string;
  email: string;
  lastDegree: string;
  degreeGrade: string;
  hasLanguageTest: string;
  testType: string;
  otherTestName: string;
  testScore: string;
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
  "Turkey",
  "Sweden",
  "Ireland",
  "Kyrgyzstan",
  "Denmark",
  "Cyprus",
  "Dubai",
  "Other"
];

const degreeOptions = [
  { value: "matriculation", label: "Matriculation" },
  { value: "intermediate", label: "Intermediate" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "PhD" }
];

const testTypes = [
  { value: "ielts", label: "IELTS" },
  { value: "pte", label: "PTE" },
  { value: "language_cert", label: "Language Cert" },
  { value: "duolingo", label: "Duolingo" },
  { value: "other", label: "Other" }
];

export default function CompactConsultationForm({ isOpen, onClose, defaultCountryCode = "+92" }: CompactConsultationFormProps) {
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    city: "",
    countryCode: defaultCountryCode,
    whatsappNumber: "",
    email: "",
    lastDegree: "",
    degreeGrade: "",
    hasLanguageTest: "",
    testType: "",
    otherTestName: "",
    testScore: "",
    interestedCountries: [],
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const thankYouRef = useRef<HTMLDivElement>(null);

  // Get page source from current URL
  const getPageSource = () => {
    if (typeof window === 'undefined') return 'website';
    
    const path = window.location.pathname;
    const url = window.location.href;
    
    // Map specific paths to readable source names
    if (path === '/' || path === '') return 'Homepage';
    if (path.includes('/ielts')) return 'IELTS Page';
    if (path.includes('/pte')) return 'PTE Page';
    if (path.includes('/duolingo')) return 'Duolingo Page';
    if (path.includes('/offices/')) {
      const officeName = path.split('/offices/')[1]?.replace(/-/g, ' ').replace(/\//g, '');
      return officeName ? `${officeName.charAt(0).toUpperCase() + officeName.slice(1)} Office` : 'Office Page';
    }
    if (path.includes('/study-abroad/')) {
      const country = path.split('/study-abroad/')[1]?.replace(/-/g, ' ').replace(/\//g, '');
      return country ? `Study ${country.charAt(0).toUpperCase() + country.slice(1)}` : 'Study Abroad Page';
    }
    if (path.includes('/blog/')) return 'Blog Page';
    if (path.includes('/events')) return 'Events Page';
    if (path.includes('/services')) return 'Services Page';
    if (path.includes('/contact')) return 'Contact Page';
    if (path.includes('/about')) return 'About Page';
    
    return url || 'website';
  };

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Don't close if clicking on a select option or dropdown menu
      if (target.tagName === 'OPTION' || target.closest('select')) {
        return;
      }
      
      // Don't close if clicking on Radix UI Select dropdown (rendered in portal)
      if (
        target.closest('[role="listbox"]') || 
        target.closest('[data-radix-select-content]') ||
        target.closest('[data-radix-popper-content-wrapper]') ||
        target.getAttribute('role') === 'option'
      ) {
        return;
      }
      
      if (showThankYou && thankYouRef.current && !thankYouRef.current.contains(event.target as Node)) {
        setShowThankYou(false);
        onClose();
      } else if (!showThankYou && formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, showThankYou, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
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
    
    if (!formData.fullName || !formData.city || !formData.whatsappNumber || !formData.email || !formData.lastDegree || !formData.hasLanguageTest || formData.interestedCountries.length === 0) {
      alert("Please fill in all required fields");
      return;
    }

    if (formData.lastDegree && !formData.degreeGrade) {
      alert("Please enter your CGPA / Percentage / Division");
      return;
    }

    if (formData.hasLanguageTest === "yes" && !formData.testType) {
      alert("Please select your language test type");
      return;
    }

    if (formData.testType === "other" && !formData.otherTestName) {
      alert("Please specify which test you have taken");
      return;
    }

    if (emailError) {
      alert("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const payload = {
        fullName: formData.fullName,
        city: formData.city,
        whatsappNumber: `${formData.countryCode}${formData.whatsappNumber}`,
        email: formData.email,
        educationLevel: formData.lastDegree,
        degreeGrade: formData.degreeGrade,
        hasLanguageTest: formData.hasLanguageTest,
        testType: formData.testType,
        otherTestName: formData.otherTestName,
        testScore: formData.testScore,
        interestedCountries: formData.interestedCountries,
        message: formData.message,
        source: getPageSource() // Add page source tracking
      };

      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        trackEvent("consultation_form_submitted", "engagement", formData.interestedCountries.join(", "));
        
        trackConsultationBooking();
        
        trackAdConversion();

        setShowThankYou(true);
        
        setFormData({
          fullName: "",
          city: "",
          countryCode: defaultCountryCode,
          whatsappNumber: "",
          email: "",
          lastDegree: "",
          degreeGrade: "",
          hasLanguageTest: "",
          testType: "",
          otherTestName: "",
          testScore: "",
          interestedCountries: [],
          message: ""
        });

        // Remove the 3-second timeout - user must manually close
        // setTimeout(() => {
        //   setShowThankYou(false);
        //   onClose();
        // }, 3000);
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

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    onClose();
  };

  if (showThankYou) {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleCloseThankYou();
          }
        }}
      >
        <motion.div
          ref={thankYouRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-2xl relative"
        >
          <button
            onClick={handleCloseThankYou}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            data-testid="button-close-thankyou"
          >
            <X className="w-6 h-6" />
          </button>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-[#1D50C9] rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Check className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your consultation request has been received. Our expert will contact you shortly.
          </p>
          <a
            href="https://whatsapp.com/channel/0029VbAnwfe8qIzremjcqn2V"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#1D50C9] hover:bg-[#1845B3] text-white font-semibold rounded-lg transition-all"
            data-testid="button-whatsapp-contact"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join Our WhatsApp Channel
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        ref={formRef}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg flex flex-col max-h-[90vh] shadow-2xl"
      >
        {/* Fixed Header */}
        <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-4 sm:p-6 relative flex-shrink-0 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            data-testid="button-close-popup"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div style={{ color: 'white' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 pr-8" style={{ color: 'white' }}>
              Book Your Free Consultation
            </h2>
            <p className="text-xs sm:text-sm opacity-90" style={{ color: 'white' }}>
              Connect with our expert advisors today
            </p>
          </div>
        </div>

        {/* Scrollable Form */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FloatingLabelInput
                label="Full Name *"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                data-testid="input-fullname"
              />

              <FloatingLabelInput
                label="City *"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                data-testid="input-city"
              />
            </div>

            <FloatingLabelWhatsAppInput
              label="WhatsApp Number *"
              countryCode={formData.countryCode}
              onCountryCodeChange={(code) => setFormData(prev => ({ ...prev, countryCode: code }))}
              numberValue={formData.whatsappNumber}
              onNumberChange={(number) => setFormData(prev => ({ ...prev, whatsappNumber: number }))}
              required
            />

            <div>
              <FloatingLabelInput
                label="Email Address *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                data-testid="input-email"
              />
              {emailError && (
                <p className="text-xs text-red-500 mt-1">{emailError}</p>
              )}
            </div>

            <div className={`grid gap-4 ${formData.lastDegree ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              <FloatingLabelSelect
                label="Last Degree *"
                value={formData.lastDegree}
                onValueChange={(value) => setFormData(prev => ({ ...prev, lastDegree: value, degreeGrade: "" }))}
                options={degreeOptions}
                placeholder="Select your last degree"
                required
                data-testid="select-last-degree"
              />

              {formData.lastDegree && (
                <FloatingLabelInput
                  label="CGPA / Percentage / Division *"
                  name="degreeGrade"
                  value={formData.degreeGrade}
                  onChange={handleInputChange}
                  required
                  data-testid="input-degree-grade"
                />
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Have you done language test? *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasLanguageTest"
                    value="yes"
                    checked={formData.hasLanguageTest === "yes"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#1D50C9] focus:ring-[#1D50C9]"
                    data-testid="radio-language-yes"
                  />
                  <span className="text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasLanguageTest"
                    value="no"
                    checked={formData.hasLanguageTest === "no"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#1D50C9] focus:ring-[#1D50C9]"
                    data-testid="radio-language-no"
                  />
                  <span className="text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>

            {formData.hasLanguageTest === "yes" && (
              <>
                {formData.testType === "other" && (
                  <FloatingLabelInput
                    label="Which test have you taken? *"
                    name="otherTestName"
                    value={formData.otherTestName}
                    onChange={handleInputChange}
                    placeholder="e.g., TOEFL, Cambridge English"
                    required
                    data-testid="input-other-test"
                  />
                )}

                <div className={`grid gap-4 ${formData.testType ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  <FloatingLabelSelect
                    label="Select test type"
                    value={formData.testType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, testType: value, otherTestName: "", testScore: "" }))}
                    options={testTypes}
                    placeholder="Select test type"
                    required
                    data-testid="select-test-type"
                  />

                  {formData.testType && (
                    <FloatingLabelInput
                      label={formData.testType === "ielts" ? "IELTS Band Score" : "Test Score"}
                      name="testScore"
                      value={formData.testScore}
                      onChange={handleInputChange}
                      required
                      data-testid="input-test-score"
                    />
                  )}
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                Interested Countries *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-2 border border-gray-200 rounded-lg">
                {countries.map((country) => (
                  <label
                    key={country}
                    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
                  >
                    <Checkbox
                      checked={formData.interestedCountries.includes(country)}
                      onCheckedChange={() => handleCountryToggle(country)}
                      className="data-[state=checked]:bg-[#1D50C9] data-[state=checked]:border-[#1D50C9]"
                    />
                    <span className="text-sm text-gray-700">{country}</span>
                  </label>
                ))}
              </div>
            </div>

            <FloatingLabelTextarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              data-testid="textarea-message"
            />
          </form>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                <span>1000+ students guided</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                <span>No consultation fees</span>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              Trusted by students worldwide for study abroad guidance
            </p>
          </div>
        </div>

        {/* Fixed Submit Button */}
        <div className="p-4 sm:p-6 border-t border-gray-200 flex-shrink-0 bg-white rounded-b-2xl">
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full min-h-[44px] py-3 bg-[#1D50C9] hover:bg-[#1845B3] text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-submit-consultation"
          >
            {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
