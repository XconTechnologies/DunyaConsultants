import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
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
    "United Kingdom",
    "Canada", 
    "Australia",
    "United States",
    "Germany",
    "New Zealand",
    "Ireland",
    "Not Sure"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#0f3ba8] text-white pt-24 pb-16 overflow-hidden">
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
            
            {/* Contact CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                className="bg-white text-[#1D50C9] hover:bg-gray-100 font-semibold px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('tel:+923041110947')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +92 304 1110947
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1D50C9] font-semibold px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/923041110947?text=Hello, I want to learn about study abroad opportunities')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.a
              href="tel:+923041110947"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Call Now</h3>
                  <p className="text-green-600 font-semibold text-lg">+92 304 1110947</p>
                  <p className="text-gray-500 text-sm">Instant Support</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/923041110947?text=Hello, I want to learn about study abroad opportunities"
              target="_blank"
              rel="nofollow noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-green-600 font-semibold">Chat Instantly</p>
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
                  <p className="text-[#1845B3] font-semibold">Professional Support</p>
                  <p className="text-gray-500 text-sm">24 hour response</p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Contact Form - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-3" style={{ color: '#ffffff !important' }}>
                  Send Us a Message
                </h3>
                <p className="text-white/90 text-lg">Get personalized guidance for your study abroad plans</p>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12 border-2 border-gray-200 focus:border-[#1D50C9] rounded-xl"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12 border-2 border-gray-200 focus:border-[#1D50C9] rounded-xl"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12 border-2 border-gray-200 focus:border-[#1D50C9] rounded-xl"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredCountry" className="text-gray-700 font-semibold">Preferred Country</Label>
                      <select
                        id="preferredCountry"
                        name="preferredCountry"
                        value={formData.preferredCountry}
                        onChange={handleInputChange}
                        className="w-full mt-2 h-12 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1D50C9] bg-white"
                      >
                        <option value="">Select country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-semibold">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2 h-12 border-2 border-gray-200 focus:border-[#1D50C9] rounded-xl"
                      placeholder="Brief subject line"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-2 border-2 border-gray-200 focus:border-[#1D50C9] rounded-xl resize-none"
                      placeholder="Tell us about your study abroad plans, academic background, and any specific questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white h-14 text-lg font-semibold hover:shadow-lg transition-all duration-300 rounded-xl"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Modern Stats Section */}
          <div className="mt-20">
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#1D50C9] mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#1D50C9] mb-2">98%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#1D50C9] mb-2">50+</div>
                <div className="text-gray-600 font-medium">Partner Universities</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#1D50C9] mb-2">20+</div>
                <div className="text-gray-600 font-medium">Office Locations</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}