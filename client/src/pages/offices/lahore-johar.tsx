import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LahoreJoharOffice() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-orange-600 to-red-600 pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Johar Town</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Lahore Johar Town Office
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comprehensive student counseling and test preparation services
            </p>
            
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Office Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="w-8 h-8" />
                  <div>
                    <h2 className="text-2xl font-bold">Lahore Johar Town Office</h2>
                    <p className="text-orange-100">Student counseling center</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Address</h4>
                        <p className="text-gray-600">1st Floor, 85 /R‑1, Phase 2, Johar Town, Lahore</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <a href="tel:+923008271947" className="text-blue-600 hover:text-blue-700">
                          +92 300‑827‑1947
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Working Hours</h4>
                        <p className="text-gray-600">Monday–Saturday: 10 AM–6 PM</p>
                        <p className="text-gray-500 text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <a href="mailto:lahore-johar@dunyaconsultants.com" className="text-blue-600 hover:text-blue-700">
                          lahore-johar@dunyaconsultants.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Offered</h3>
                    <div className="space-y-3">
                      {[
                        "Student Counseling",
                        "Test Preparation", 
                        "Career Guidance",
                        "Academic Planning",
                        "Scholarship Information"
                      ].map((service, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span className="text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}