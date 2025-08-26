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
                  <h3 className="text-2xl font-bold flex items-center mb-3 text-white">
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
                      className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white h-12 text-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-8">
                  <h3 className="text-2xl font-bold flex items-center mb-3 text-white">
                    <Globe className="w-6 h-6 mr-3" />
                    Our Expert Services
                  </h3>
                  <p className="text-white/90 text-lg">Comprehensive support for your study abroad journey</p>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-[#1845B3]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Career Counseling</h4>
                        <p className="text-gray-600 text-sm">Personalized guidance to help you choose the right course and country for your academic goals.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-[#1845B3]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">University Selection</h4>
                        <p className="text-gray-600 text-sm">Access to 50+ partner universities worldwide with guaranteed admission pathways.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#1845B3]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Visa Processing</h4>
                        <p className="text-gray-600 text-sm">Complete visa application support with 98% success rate and expert documentation.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-[#1845B3]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Test Preparation</h4>
                        <p className="text-gray-600 text-sm">IELTS, PTE, TOEFL coaching with experienced instructors and proven strategies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-8">
                  <h3 className="text-2xl font-bold flex items-center mb-3 text-white">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Why Choose Dunya Consultants?
                  </h3>
                  <p className="text-white/90 text-lg">Your trusted partner for study abroad success</p>
                </div>

                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">15+ Years Experience</h4>
                        <p className="text-gray-600 text-sm">Trusted by thousands of students since 2009 with proven expertise in study abroad guidance.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-[#1845B3]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">98% Success Rate</h4>
                        <p className="text-gray-600 text-sm">Outstanding track record in university admissions and visa approvals across all destinations.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">20+ Offices Nationwide</h4>
                        <p className="text-gray-600 text-sm">Convenient locations across Pakistan for easy access to our expert counseling services.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">End-to-End Support</h4>
                        <p className="text-gray-600 text-sm">Complete assistance from initial consultation to post-arrival support and settlement guidance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D50C9] mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Join thousands of successful students who have achieved their dreams of studying abroad with our expert guidance
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">200+ Certified Counselors</h3>
                <p className="text-gray-600">Expert guidance from certified professionals with extensive experience in international education.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">50+ Partner Universities</h3>
                <p className="text-gray-600">Direct partnerships with top-ranked universities across UK, USA, Canada, Australia, and more.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">15,000+ Success Stories</h3>
                <p className="text-gray-600">Thousands of students have successfully achieved their study abroad dreams through our services.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}