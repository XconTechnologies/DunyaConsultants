import { useState } from "react";
import { X, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelWhatsAppInput } from "@/components/ui/floating-label-whatsapp-input";
import { FloatingLabelTextarea } from "@/components/ui/floating-label-textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
  "Cyprus",
  "Ireland",
  "Dubai",
  "Kyrgyzstan",
  "Denmark",
  "Other"
];

export default function CompactConsultationForm({ isOpen, onClose, defaultCountryCode = "+92" }: CompactConsultationFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    city: "",
    countryCode: defaultCountryCode,
    whatsappNumber: "",
    email: "",
    hasLanguageTest: "",
    testType: "",
    otherTestName: "",
    testScore: "",
    interestedCountries: [],
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time email validation
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

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName || !formData.whatsappNumber || !formData.email || emailError) {
        alert("Please fill in all required fields correctly");
        return;
      }
      setCurrentStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.interestedCountries.length === 0) {
      alert("Please select at least one country");
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
    
    // Build language test info
    let languageTestInfo = "";
    if (formData.hasLanguageTest === "yes") {
      if (formData.testType === "other") {
        languageTestInfo = `Language Test: ${formData.otherTestName}${formData.testScore ? ` - Score: ${formData.testScore}` : ''}`;
      } else if (formData.testType) {
        languageTestInfo = `Language Test: ${formData.testType.toUpperCase()}${formData.testScore ? ` - Score: ${formData.testScore}` : ''}`;
      }
    } else if (formData.hasLanguageTest === "no") {
      languageTestInfo = "Language Test: Not taken";
    }
    
    const additionalInfo = [formData.message, languageTestInfo].filter(Boolean).join("\n");
    
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
          additionalInfo: additionalInfo,
          educationLevel: "Not specified",
          fieldOfStudy: "Not specified",
          source: source
        })
      });
      
      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          fullName: "",
          city: "",
          countryCode: defaultCountryCode,
          whatsappNumber: "",
          email: "",
          hasLanguageTest: "",
          testType: "",
          otherTestName: "",
          testScore: "",
          interestedCountries: [],
          message: ""
        });
        setCurrentStep(1);
        
        // Auto-close thank you after 3 seconds
        setTimeout(() => {
          setShowThankYou(false);
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

  if (!isOpen) return null;

  // Thank You Popup
  if (showThankYou) {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Check className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your consultation request has been received. Our expert will contact you shortly.
          </p>
          <a
            href="https://wa.me/923261111947"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#1D50C9] hover:bg-[#1845B3] text-white font-semibold rounded-lg transition-all"
            data-testid="button-whatsapp-contact"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    );
  }

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
          className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl shadow-2xl flex flex-col"
          style={{ 
            maxHeight: '95vh',
            margin: '0 auto'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-6 relative rounded-t-2xl flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              data-testid="button-close-modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Get Personalized Study Abroad Guidance</h2>
              <p className="text-sm opacity-90">Takes less than a minute to complete</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="px-6 pt-4 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-600">Step {currentStep} of 2</span>
              <span className="text-xs text-gray-500">{currentStep === 1 ? "Personal Info" : "Study Preferences"}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#1D50C9]"
                initial={{ width: "0%" }}
                animate={{ width: currentStep === 1 ? "50%" : "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="p-6 overflow-y-auto flex-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <FloatingLabelInput
                    label="Full name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    data-testid="input-full-name"
                  />

                  <FloatingLabelInput
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    data-testid="input-city"
                  />

                  <FloatingLabelWhatsAppInput
                    label="WhatsApp number *"
                    countryCode={formData.countryCode}
                    onCountryCodeChange={(code) => setFormData(prev => ({ ...prev, countryCode: code }))}
                    numberValue={formData.whatsappNumber}
                    onNumberChange={(number) => setFormData(prev => ({ ...prev, whatsappNumber: number }))}
                    required
                    data-testid="input-whatsapp"
                  />

                  <div>
                    <FloatingLabelInput
                      label="Email address *"
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

                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full min-h-[44px] py-3 bg-[#1D50C9] hover:bg-[#1845B3] text-white font-semibold rounded-lg transition-all"
                    data-testid="button-next-step"
                  >
                    Continue to Study Preferences →
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Study Preferences */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  {/* Language Test Section */}
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-2">
                        Have you completed IELTS, PTE, or Duolingo? *
                      </label>
                      <p className="text-xs text-gray-500 mb-3">
                        Language tests help universities assess your English proficiency
                      </p>
                      <div className="flex gap-4">
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
                      <div className="space-y-3">
                        <select
                          name="testType"
                          value={formData.testType}
                          onChange={handleInputChange}
                          className="w-full min-h-[44px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all bg-white text-sm"
                          data-testid="select-test-type"
                        >
                          <option value="">Select test type</option>
                          <option value="ielts">IELTS</option>
                          <option value="pte">PTE</option>
                          <option value="toefl">TOEFL</option>
                          <option value="duolingo">Duolingo</option>
                          <option value="other">Other</option>
                        </select>

                        {formData.testType === "other" && (
                          <FloatingLabelInput
                            label="Which test?"
                            name="otherTestName"
                            value={formData.otherTestName}
                            onChange={handleInputChange}
                            data-testid="input-other-test"
                          />
                        )}

                        {formData.testType && formData.testType !== "other" && (
                          <FloatingLabelInput
                            label={formData.testType === "ielts" ? "Band score" : "Score"}
                            name="testScore"
                            value={formData.testScore}
                            onChange={handleInputChange}
                            data-testid="input-test-score"
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Multi-Select Dropdown for Countries */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      Interested countries *
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-full min-h-[44px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all bg-white text-left flex items-center justify-between"
                        data-testid="button-country-dropdown"
                      >
                        <span className="text-sm text-gray-700">
                          {formData.interestedCountries.length === 0
                            ? "Select countries"
                            : `${formData.interestedCountries.length} selected`}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {countries.map((country) => (
                            <label
                              key={country}
                              className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                              data-testid={`checkbox-country-${country.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.interestedCountries.includes(country)}
                                onChange={() => handleCountryToggle(country)}
                                className="w-4 h-4 text-[#1D50C9] rounded focus:ring-[#1D50C9]"
                              />
                              <span className="ml-3 text-sm text-gray-700">{country}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Selected Countries Display */}
                    {formData.interestedCountries.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.interestedCountries.map((country) => (
                          <Badge
                            key={country}
                            variant="secondary"
                            className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                          >
                            {country}
                            <button
                              type="button"
                              onClick={() => handleCountryToggle(country)}
                              className="ml-2 hover:text-blue-900"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <FloatingLabelTextarea
                    label="Tell us your preferred course or university (optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    data-testid="textarea-message"
                  />

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2">
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      variant="outline"
                      className="w-full min-h-[44px] py-3"
                      data-testid="button-back"
                    >
                      ← Back
                    </Button>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full min-h-[44px] py-3 bg-[#1D50C9] hover:bg-[#1845B3] text-white font-semibold rounded-lg transition-all"
                      data-testid="button-submit-consultation"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Consultation"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>

            {/* Trust Signals */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>1000+ students guided</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No consultation fees</span>
                </div>
              </div>
              
              <p className="text-center text-xs text-gray-500">
                Trusted by students worldwide for study abroad guidance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
