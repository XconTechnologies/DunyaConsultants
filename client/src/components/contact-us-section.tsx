import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { trackEvent, trackContactForm } from "@/lib/analytics";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  User, 
  Send,
  CheckCircle,
  Building,
  Globe,
  Users
} from "lucide-react";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredCountry: "",
    inquiryType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      const response = await fetch('/api/contacts', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Track successful contact form submission
        trackContactForm();
        trackEvent('contact_form_success', 'conversion', formData.preferredCountry || 'unknown');
        
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          preferredCountry: "",
          inquiryType: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: "Sargodha (Head Office)",
      address: "Alif Tower, Buhadur Shah Zafar Road, Sargodha",
      phone: "+92 304 1110947",
      email: "info@dunyaconsultants.com",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      specialties: ["All Services", "Management", "Operations"]
    },
    {
      city: "Lahore",
      address: "DHA Phase 1, 1st Floor, 174-6th Street, Sector H",
      phone: "+92 423 5881234",
      email: "lahore@dunyaconsultants.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      specialties: ["UK", "Canada", "Australia", "IELTS Training"]
    },
    {
      city: "Islamabad",
      address: "F-10 Markaz, 2nd Floor, Office #24",
      phone: "+92 515 2345678",
      email: "islamabad@dunyaconsultants.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      specialties: ["USA", "Germany", "Scholarship Guidance"]
    },
    {
      city: "Karachi",
      address: "Gulshan-e-Iqbal, Block 13-A, Main University Road",
      phone: "+92 213 4567890",
      email: "karachi@dunyaconsultants.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      specialties: ["All Countries", "Visa Processing", "Documentation"]
    }
  ];

  const inquiryTypes = [
    "University Admission",
    "Visa Processing",
    "IELTS/PTE Coaching",
    "Scholarship Information",
    "Document Preparation",
    "General Inquiry"
  ];

  const countries = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Finland",
    "Belgium",
    "Turkey",
    "Germany"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#0f3ba8] text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Ready to start your study abroad journey? Connect with our expert counselors for personalized guidance
            </p>
            
          </motion.div>
        </div>
      </section>
      {/* Modern Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Call Now</h3>
                  <p className="text-[#1D50C9] font-semibold text-lg">+92 304 1110947</p>
                  <p className="text-gray-500 text-sm">Instant Support</p>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="https://wa.me/923041110947?text=Hello, I want to learn about study abroad opportunities"
              target="_blank"
              rel="nofollow noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
              onClick={() => trackEvent('whatsapp_click', 'engagement', 'contact_page')}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-[#1D50C9] font-semibold">Chat Instantly</p>
                  <p className="text-gray-500 text-sm">Quick Replies</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@dunyaconsultants.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-[#1D50C9] font-semibold">Professional Support</p>
                  <p className="text-gray-500 text-sm">24 hour response</p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Contact Form and Content - Side by Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid lg:grid-cols-5 gap-8 items-start"
          >
            {/* Left Side - Content */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Start Your Study Abroad Journey?
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Connect with our expert counselors for personalized guidance and support throughout your educational journey.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h4>
                      <p className="text-gray-600">Get personalized advice from our experienced counselors who understand your unique goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Universities</h4>
                      <p className="text-gray-600">Access to 50+ partner universities across USA, UK, Canada, Australia, and more.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">5+ Years Experience</h4>
                      <p className="text-gray-600">Trusted by thousands of students with our proven track record of success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'white', WebkitTextFillColor: 'white' }}>
                  Send Us a Message
                </h3>
                <p className="text-white/90">Get personalized guidance for your study abroad plans</p>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredCountry" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Country *</label>
                      <select
                        id="preferredCountry"
                        name="preferredCountry"
                        value={formData.preferredCountry}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-2 h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2 h-12 border-2 border-gray-200 focus:border-[#1D50C9] rounded-xl"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all resize-none"
                      placeholder=""
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#1D50C9] hover:bg-[#1845B3] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}