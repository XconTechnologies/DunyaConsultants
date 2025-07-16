import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    qualification: '',
    country: '',
    percentage: '',
    testScore: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        qualification: '',
        country: '',
        percentage: '',
        testScore: '',
        message: ''
      });
      alert('Form submitted successfully! We will contact you soon.');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className={`bg-blue-800 rounded-lg p-4 text-white ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="bg-transparent border-0 border-b-2 border-white/30 rounded-none text-white placeholder-white/70 focus:border-white pb-2 focus:ring-0 focus:ring-offset-0 text-sm"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="bg-transparent border-0 border-b-2 border-white/30 rounded-none text-white placeholder-white/70 focus:border-white pb-2 focus:ring-0 focus:ring-offset-0 text-sm"
            />
          </div>
        </div>

        <div>
          <Input
            type="text"
            placeholder="Your Qualification"
            value={formData.qualification}
            onChange={(e) => handleInputChange('qualification', e.target.value)}
            required
            className="bg-transparent border-0 border-b-2 border-white/30 rounded-none text-white placeholder-white/70 focus:border-white pb-2 focus:ring-0 focus:ring-offset-0 text-sm"
          />
        </div>

        <div>
          <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
            <SelectTrigger className="bg-transparent border-0 border-b-2 border-white/30 rounded-none text-white focus:border-white pb-2 focus:ring-0 focus:ring-offset-0 text-sm">
              <SelectValue placeholder="Select Your Interested Country*" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="USA">USA</SelectItem>
              <SelectItem value="UK">UK</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
              <SelectItem value="Finland">Finland</SelectItem>
              <SelectItem value="Turkey">Turkey</SelectItem>
              <SelectItem value="Dubai">Dubai</SelectItem>
              <SelectItem value="Romania">Romania</SelectItem>
              <SelectItem value="Malaysia">Malaysia</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="Cyprus">Cyprus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Input
              type="text"
              placeholder="Percentage/GPA/CGPA"
              value={formData.percentage}
              onChange={(e) => handleInputChange('percentage', e.target.value)}
              className="bg-transparent border-0 border-b-2 border-white/30 rounded-none text-white placeholder-white/70 focus:border-white pb-2 focus:ring-0 focus:ring-offset-0 text-sm"
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="PTE / IELTS SCORE"
              value={formData.testScore}
              onChange={(e) => handleInputChange('testScore', e.target.value)}
              className="bg-transparent border-0 border-b-2 border-white/30 rounded-none text-white placeholder-white/70 focus:border-white pb-2 focus:ring-0 focus:ring-offset-0 text-sm"
            />
          </div>
        </div>

        <div>
          <Textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={3}
            className="bg-transparent border-0 border-b-2 border-white/30 rounded-none text-white placeholder-white/70 focus:border-white resize-none pb-2 focus:ring-0 focus:ring-offset-0 text-sm"
          />
        </div>

        <div className="text-center pt-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full border-2 border-white/20 hover:border-white/40 transition-all text-sm"
          >
            {isSubmitting ? 'Sending...' : 'Send Details'}
          </Button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
        <div className="flex items-center space-x-2">
          <MapPin className="w-3 h-3 text-white/70" />
          <span className="text-xs text-white/90">110 Link Stadium Road Sargodha</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-3 h-3 text-white/70" />
          <a href="tel:+923041110947" className="text-xs text-white/90 hover:text-white">(+92) 304 1110947</a>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-3 h-3 text-white/70" />
          <a href="mailto:query@teamdunya.com" className="text-xs text-white/90 hover:text-white">query@teamdunya.com</a>
        </div>
      </div>
    </div>
  );
}