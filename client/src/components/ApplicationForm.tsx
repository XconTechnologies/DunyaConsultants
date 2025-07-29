import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-center text-green-600">Application Submitted Successfully!</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600">Thank you for applying to study in {country}. Our team will contact you within 24 hours.</p>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-semibold text-blue-900">Quick Contact</p>
              <p className="text-blue-600">(+92) 304 1110947</p>
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
      <DialogContent className="max-w-lg bg-white max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#124FD3] flex items-center justify-between">
            Apply to {country}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="educationLevel">Education Level</Label>
            <Select value={formData.educationLevel} onValueChange={(value) => handleInputChange("educationLevel", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Education Level" />
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

          <div className="space-y-2">
            <Label htmlFor="fieldOfStudy">Field of Study</Label>
            <Input
              id="fieldOfStudy"
              type="text"
              placeholder="e.g., Computer Science, Business, Medicine"
              value={formData.fieldOfStudy}
              onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredIntake">Preferred Intake</Label>
            <Select value={formData.preferredIntake} onValueChange={(value) => handleInputChange("preferredIntake", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Intake" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="fall-2025">Fall 2025</SelectItem>
                <SelectItem value="spring-2026">Spring 2026</SelectItem>
                <SelectItem value="summer-2026">Summer 2026</SelectItem>
                <SelectItem value="fall-2026">Fall 2026</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your goals, preferences, or any specific questions"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full h-20"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#124FD3] hover:bg-[#0d3fb8] text-white py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting Application...
              </div>
            ) : (
              "Submit Application"
            )}
          </Button>

          <div className="text-center text-sm text-gray-600">
            <p>📞 (+92) 304 1110947 • 📧 info@dunyaconsultants.com</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}