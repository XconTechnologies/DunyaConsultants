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
                className="bg-white text-[#1D50C9] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('tel:+923041110947')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +92 304 1110947
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1D50C9] font-semibold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/923041110947?text=Hello, I want to learn about study abroad opportunities')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose your preferred way to contact us
              </p>
            </motion.div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+923041110947" className="text-[#1845B3] hover:text-[#1D50C9] font-semibold text-lg">
                +92 304 1110947
              </a>
              <p className="text-gray-600 text-sm mt-2">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/923041110947?text=Hello, I want to learn about study abroad opportunities"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1845B3] hover:text-[#1D50C9] font-semibold"
              >
                Chat Instantly
              </a>
              <p className="text-gray-600 text-sm mt-2">Quick Response</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@dunyaconsultants.com" className="text-[#1845B3] hover:text-[#1D50C9] font-semibold">
                info@dunyaconsultants.com
              </a>
              <p className="text-gray-600 text-sm mt-2">Professional Response</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-[#1845B3] hover:text-[#1D50C9] font-semibold">20+ Offices</p>
              <p className="text-gray-600 text-sm mt-2">Across Pakistan</p>
            </motion.div>
          </div>

          {/* Contact Form & Info Section */}
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto mt-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-8">
                  <h3 className="text-2xl font-bold flex items-center mb-3">
                    <Send className="w-6 h-6 mr-3" />
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="inquiryType" className="text-gray-700 font-semibold">Inquiry Type</Label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full mt-2 h-12 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1D50C9] bg-white"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
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
                      className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white h-12 text-lg font-semibold hover:shadow-lg transition-all duration-300 rounded-xl"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-8">
                  <h3 className="text-2xl font-bold flex items-center mb-3">
                    <Building className="w-6 h-6 mr-3" />
                    Our Office Locations
                  </h3>
                  <p className="text-white/90 text-lg">Visit us at any of our convenient locations</p>
                </div>

                <div className="p-8">
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-900 text-lg">{office.city}</h4>
                        {office.city.includes("Head Office") && (
                          <Badge variant="secondary" className="bg-blue-100 text-[#1565c0]">
                            Head Office
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="text-[#1845B3] hover:underline">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="text-[#1845B3] hover:underline">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-700">{office.hours}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1">
                          {office.specialties.map((specialty, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-8">
                  <h3 className="text-2xl font-bold flex items-center mb-3">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Why Choose Dunya Consultants?
                  </h3>
                  <p className="text-white/90 text-lg">Your trusted partner for study abroad success</p>
                </div>

                <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-[#1845B3] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">5+ Years Experience</h4>
                      <p className="text-gray-600 text-sm">Trusted by thousands of students since 2009</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-[#1845B3] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">98% Success Rate</h4>
                      <p className="text-gray-600 text-sm">Proven track record in admissions and visas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-[#1845B3] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">20+ Offices</h4>
                      <p className="text-gray-600 text-sm">Nationwide presence for easy access</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#1845B3] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">End-to-End Services</h4>
                      <p className="text-gray-600 text-sm">From consultation to post-arrival support</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}