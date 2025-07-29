import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin, Clock, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
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
        preferredDate: "",
        preferredTime: "",
        message: ""
      });
      onClose();
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" style={{ zIndex: 99999 }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto z-[100000]"
          >
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative">
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
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                            <User className="w-5 h-5 mr-2 text-blue-600" />
                            Personal Information
                          </h3>
                          
                          <div className="grid grid-cols-1 gap-4">
                            <Input
                              placeholder="Full Name *"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              required
                              className="border-gray-300 focus:border-blue-500"
                            />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Input
                                type="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                required
                                className="border-gray-300 focus:border-blue-500"
                              />
                              
                              <Input
                                type="tel"
                                placeholder="Phone Number *"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                required
                                className="border-gray-300 focus:border-blue-500"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Consultation Details */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-blue-600" />
                            Consultation Details
                          </h3>
                          
                          <Select value={formData.consultationType} onValueChange={(value) => handleInputChange("consultationType", value)}>
                            <SelectTrigger className="border-gray-300 focus:border-blue-500">
                              <SelectValue placeholder="Select Consultation Type *" />
                            </SelectTrigger>
                            <SelectContent>
                              {consultationTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                              type="date"
                              value={formData.preferredDate}
                              onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                              className="border-gray-300 focus:border-blue-500"
                            />
                            
                            <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                              <SelectTrigger className="border-gray-300 focus:border-blue-500">
                                <SelectValue placeholder="Preferred Time" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>{time}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <Textarea
                            placeholder="Tell us about your study abroad goals and any specific questions..."
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            rows={4}
                            className="border-gray-300 focus:border-blue-500"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-3 text-lg font-semibold"
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
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-green-600 mb-2">Consultation Booked!</h3>
                        <p className="text-gray-600 mb-4">
                          Thank you for booking a consultation with us. Our expert counselor will contact you within 24 hours.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-sm text-green-700">
                            <strong>Next Steps:</strong> You'll receive a confirmation email with consultation details and a calendar invite.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side - Contact Info */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 lg:p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Free Consultation?</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <p>Get personalized study abroad guidance from certified counselors</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <p>Learn about visa requirements and application processes</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <p>Discover scholarship opportunities and financial aid options</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <p>Get university selection assistance based on your profile</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-blue-200 pt-6">
                        <h4 className="font-semibold text-gray-800 mb-4">Contact Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 text-sm">
                            <Phone className="w-4 h-4 text-blue-600" />
                            <span>+92 304 1110947</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm">
                            <Mail className="w-4 h-4 text-blue-600" />
                            <span>info@dunyaconsultants.com</span>
                          </div>
                          <div className="flex items-start space-x-3 text-sm">
                            <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
                            <span>Alif Tower Buhadur shah zafar road, Sargodha</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">17+</div>
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