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
      {/* Blue Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1565c0] text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
              Contact <span className="text-white">Dunya Consultants</span>
            </h1>
            <p className="text-lg lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Ready to start your study abroad journey? Get in touch with our expert counselors for personalized guidance and support
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                24/7 Support
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Quick Response
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Expert Counselors
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1D50C9]">
              Get In Touch With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below or contact us directly through any of our communication channels
            </p>
          </motion.div>

        {/* Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="text-center shadow-lg hover:shadow-xl transition-all border-l-4 border-[#1D50C9]">
            <CardContent className="p-6">
              <Phone className="h-10 w-10 text-[#1845B3] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+923041110947" className="text-[#1845B3] hover:underline">
                +92 304 1110947
              </a>
              <p className="text-gray-500 text-sm mt-1">24/7 Support</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-all border-l-4 border-[#1D50C9]">
            <CardContent className="p-6">
              <MessageCircle className="h-10 w-10 text-[#1845B3] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/923041110947?text=Hello, I'm interested in studying abroad. Can you help me?"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1845B3] hover:underline"
              >
                Chat with Us
              </a>
              <p className="text-gray-500 text-sm mt-1">Instant Response</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-all border-l-4 border-[#1D50C9]">
            <CardContent className="p-6">
              <Mail className="h-10 w-10 text-[#1845B3] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@dunyaconsultants.com" className="text-[#1845B3] hover:underline">
                info@dunyaconsultants.com
              </a>
              <p className="text-gray-500 text-sm mt-1">24 Hour Response</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-all border-l-4 border-[#1D50C9]">
            <CardContent className="p-6">
              <MapPin className="h-10 w-10 text-[#1845B3] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-[#1845B3] font-medium">20+ Offices</p>
              <p className="text-gray-500 text-sm mt-1">Across Pakistan</p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-8">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Send className="h-6 w-6" />
                  <span>Send Us a Message</span>
                </CardTitle>
                <p className="text-white/90">Get personalized guidance for your study abroad plans</p>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="preferredCountry">Preferred Country</Label>
                      <select
                        id="preferredCountry"
                        name="preferredCountry"
                        value={formData.preferredCountry}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Brief subject line"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us about your study abroad plans, academic background, and any specific questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white py-3 text-lg font-semibold hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-6">
                <CardTitle className="text-xl flex items-center space-x-3">
                  <Building className="h-6 w-6" />
                  <span>Our Office Locations</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
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
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-6">
                <CardTitle className="text-xl flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6" />
                  <span>Why Choose Dunya Consultants?</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 #1845B3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">5+ Years Experience</h4>
                      <p className="text-gray-600 text-sm">Trusted by thousands of students since 2009</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 #1845B3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">98% Success Rate</h4>
                      <p className="text-gray-600 text-sm">Proven track record in admissions and visas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 #1845B3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">20+ Offices</h4>
                      <p className="text-gray-600 text-sm">Nationwide presence for easy access</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 #1845B3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">End-to-End Services</h4>
                      <p className="text-gray-600 text-sm">From consultation to post-arrival support</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}