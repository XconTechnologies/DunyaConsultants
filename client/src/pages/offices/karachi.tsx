import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Users, Award, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function KarachiOffice() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-800/50 text-blue-100 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">DHA Phase</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Karachi <span className="text-blue-300">Office</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive visa processing and financial guidance services in Pakistan's economic hub
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Phone className="w-4 h-4 mr-2" />
                Contact Office
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Office Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-white to-cyan-50">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600">05‑C Prime Point Building, Main 2, Khayaban‑e‑Ittehad Road, DHA, Karachi</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <a href="tel:+923323643373" className="text-blue-600 hover:text-blue-700 transition-colors">
                          +92 332‑364‑3373
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                        <p className="text-gray-600">Monday–Saturday: 10 AM–6 PM</p>
                        <p className="text-gray-500 text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:karachi@dunyaconsultants.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                          karachi@dunyaconsultants.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services Offered */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Offered</h2>
                  
                  <div className="grid gap-4">
                    {[
                      { icon: Globe, title: "Visa Processing", description: "Expert visa consultation for international travel and study" },
                      { icon: Users, title: "University Applications", description: "Comprehensive university admission guidance" },
                      { icon: Award, title: "Financial Guidance", description: "Educational loans and financial planning assistance" }
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Features */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Karachi Office?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in Pakistan's economic center with specialized financial services and strong business connections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Economic Hub",
                description: "Located in Pakistan's business and financial capital with extensive networks",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: Award,
                title: "Financial Expertise",
                description: "Specialized guidance for educational loans and financial planning",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                icon: Users,
                title: "Business Network",
                description: "Strong connections with educational institutions and financial partners",
                gradient: "from-purple-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}