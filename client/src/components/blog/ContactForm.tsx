import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    <div className={`bg-blue-800 rounded-lg p-6 text-white ${className}`}>
      <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="bg-transparent border-b-2 border-white/30 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 focus:border-white pb-2"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="bg-transparent border-b-2 border-white/30 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 focus:border-white pb-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="text"
              placeholder="Your Qualification"
              value={formData.qualification}
              onChange={(e) => handleInputChange('qualification', e.target.value)}
              required
              className="bg-transparent border-b-2 border-white/30 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 focus:border-white pb-2"
            />
          </div>
          <div>
            <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
              <SelectTrigger className="bg-transparent border-b-2 border-white/30 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 focus:border-white pb-2">
                <SelectValue placeholder="Countries" />
              </SelectTrigger>
              <SelectContent>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="text"
              placeholder="Percentage/GPA/CGPA"
              value={formData.percentage}
              onChange={(e) => handleInputChange('percentage', e.target.value)}
              className="bg-transparent border-b-2 border-white/30 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 focus:border-white pb-2"
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="PTE / IELTS SCORE"
              value={formData.testScore}
              onChange={(e) => handleInputChange('testScore', e.target.value)}
              className="bg-transparent border-b-2 border-white/30 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 focus:border-white pb-2"
            />
          </div>
        </div>

        <div>
          <Textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={4}
            className="bg-transparent border-b-2 border-white/30 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 focus:border-white resize-none"
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full border-2 border-white/20 hover:border-white/40 transition-all"
          >
            {isSubmitting ? 'Sending...' : 'Send Details'}
          </Button>
        </div>
      </form>
    </div>
  );
}