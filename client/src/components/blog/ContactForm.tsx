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
    <div className={`bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-6 text-white shadow-xl border border-blue-600/20 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Contact Us</h3>
        <p className="text-blue-200/80 text-sm mt-1">Get expert guidance for your study abroad journey</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="bg-transparent border-0 border-b-2 border-white/50 rounded-none text-black placeholder-white focus:border-white focus:border-b-[3px] focus:bg-transparent pb-3 pt-3 px-2 transition-all duration-200 focus:ring-0 focus:ring-offset-0 text-sm"
            />
          </div>
          <div className="relative">
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="bg-transparent border-0 border-b-2 border-white/50 rounded-none text-black placeholder-white focus:border-white focus:border-b-[3px] focus:bg-transparent pb-3 pt-3 px-2 transition-all duration-200 focus:ring-0 focus:ring-offset-0 text-sm"
            />
          </div>
        </div>

        <div className="relative">
          <Input
            type="text"
            placeholder="Your Qualification"
            value={formData.qualification}
            onChange={(e) => handleInputChange('qualification', e.target.value)}
            required
            className="bg-transparent border-0 border-b-2 border-white/50 rounded-none text-black placeholder-white focus:border-white focus:border-b-[3px] focus:bg-transparent pb-3 pt-3 px-2 transition-all duration-200 focus:ring-0 focus:ring-offset-0 text-sm"
          />
        </div>

        <div className="relative">
          <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
            <SelectTrigger className="bg-transparent border-0 border-b-2 border-white/50 rounded-none text-black focus:border-white focus:border-b-[3px] focus:bg-transparent pb-3 pt-3 px-2 transition-all duration-200 focus:ring-0 focus:ring-offset-0 text-sm">
              <SelectValue placeholder="Select Your Interested Country*" className="text-white" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-lg border border-gray-200">
              <SelectItem value="USA">🇺🇸 USA</SelectItem>
              <SelectItem value="UK">🇬🇧 UK</SelectItem>
              <SelectItem value="Canada">🇨🇦 Canada</SelectItem>
              <SelectItem value="Australia">🇦🇺 Australia</SelectItem>
              <SelectItem value="Finland">🇫🇮 Finland</SelectItem>
              <SelectItem value="Turkey">🇹🇷 Turkey</SelectItem>
              <SelectItem value="Dubai">🇦🇪 Dubai</SelectItem>
              <SelectItem value="Romania">🇷🇴 Romania</SelectItem>
              <SelectItem value="Malaysia">🇲🇾 Malaysia</SelectItem>
              <SelectItem value="Germany">🇩🇪 Germany</SelectItem>
              <SelectItem value="Cyprus">🇨🇾 Cyprus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Percentage/GPA/CGPA"
              value={formData.percentage}
              onChange={(e) => handleInputChange('percentage', e.target.value)}
              className="bg-transparent border-0 border-b-2 border-white/50 rounded-none text-black placeholder-white focus:border-white focus:border-b-[3px] focus:bg-transparent pb-3 pt-3 px-2 transition-all duration-200 focus:ring-0 focus:ring-offset-0 text-sm"
            />
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="PTE / IELTS SCORE"
              value={formData.testScore}
              onChange={(e) => handleInputChange('testScore', e.target.value)}
              className="bg-transparent border-0 border-b-2 border-white/50 rounded-none text-black placeholder-white focus:border-white focus:border-b-[3px] focus:bg-transparent pb-3 pt-3 px-2 transition-all duration-200 focus:ring-0 focus:ring-offset-0 text-sm"
            />
          </div>
        </div>

        <div className="relative">
          <Textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={3}
            className="bg-transparent border-0 border-b-2 border-white/50 rounded-none text-black placeholder-white focus:border-white focus:border-b-[3px] focus:bg-transparent resize-none pb-3 pt-3 px-2 transition-all duration-200 focus:ring-0 focus:ring-offset-0 text-sm"
          />
        </div>

        <div className="text-center pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 text-sm border-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </span>
            ) : (
              'Send Details'
            )}
          </Button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="mt-6 pt-5 border-t border-white/20">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-blue-100">110 Link Stadium Road Sargodha</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <a href="tel:+923041110947" className="text-sm text-blue-100 hover:text-white transition-colors">(+92) 304 1110947</a>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <a href="mailto:query@teamdunya.com" className="text-sm text-blue-100 hover:text-white transition-colors">query@teamdunya.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}