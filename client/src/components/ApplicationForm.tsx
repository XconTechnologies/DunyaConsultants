import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, User, GraduationCap, FileText, Check } from "lucide-react";

interface ApplicationFormProps {
  country: string;
  children: React.ReactNode;
}

export default function ApplicationForm({ country, children }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    educationLevel: "",
    fieldOfStudy: "",
    preferredIntake: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        educationLevel: "",
        fieldOfStudy: "",
        preferredIntake: "",
        message: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-2xl bg-white max-h-[85vh] overflow-y-auto p-0" aria-describedby="success-description">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white relative">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold">Application Submitted Successfully!</DialogTitle>
                <p className="text-green-100">Thank you for applying to study in {country}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 text-center space-y-4">
            <div id="success-description" className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-600">Our team will contact you within 24 hours to discuss your application and next steps.</p>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-semibold text-blue-900">Quick Contact</p>
              <p className="text-[#1D50C9]">(+92) 304 1110947</p>
              <p className="text-sm text-gray-600">📧 info@dunyaconsultants.com</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-white max-h-[85vh] overflow-y-auto p-0" aria-describedby="application-form-description">
        {/* Header with Gradient Background */}
        <div className="bg-gradient-to-r from-[#1D50C9] to-[#1a73e8] p-6 text-white relative">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">Apply to Study in {country}</DialogTitle>
              <p className="text-blue-100">Start your academic journey with expert guidance</p>
            </div>
          </div>
        </div>
        
        <div id="application-form-description" className="sr-only">Complete application form for studying in {country}</div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <User className="w-5 h-5 mr-2 text-[#1D50C9]" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#1D50C9]"
                />
                
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#1D50C9]"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#1D50C9]"
                />
                
                <Select value={formData.educationLevel} onValueChange={(value) => handleInputChange("educationLevel", value)}>
                  <SelectTrigger className="w-full border-gray-300 focus:border-[#1D50C9]">
                    <SelectValue placeholder="Education Level *" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="fieldOfStudy"
                type="text"
                placeholder="Field of Study *"
                value={formData.fieldOfStudy}
                onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                required
                className="border-gray-300 focus:border-[#1D50C9]"
              />

              <Select value={formData.preferredIntake} onValueChange={(value) => handleInputChange("preferredIntake", value)}>
                <SelectTrigger className="w-full border-gray-300 focus:border-[#1D50C9]">
                  <SelectValue placeholder="Preferred Intake Year *" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="fall-2025">Fall 2025</SelectItem>
                  <SelectItem value="spring-2026">Spring 2026</SelectItem>
                  <SelectItem value="summer-2026">Summer 2026</SelectItem>
                  <SelectItem value="fall-2026">Fall 2026</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-[#1D50C9]" />
                Additional Information
              </h3>
              
              <Textarea
                id="message"
                placeholder="Tell us about your goals, preferences, or any specific questions (Optional)"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full h-20 border-gray-300 focus:border-[#1D50C9]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#1D50C9] hover:bg-[#0d3fb8] text-white py-3 text-lg font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting Application...
                </div>
              ) : (
                <>
                  <Calendar className="w-5 h-5 mr-2" />
                  Submit Application
                </>
              )}
            </Button>

            <div className="text-center text-sm text-gray-600 border-t pt-4">
              <p className="font-medium">Need immediate assistance?</p>
              <p>📞 (+92) 304 1110947 • 📧 info@dunyaconsultants.com</p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}