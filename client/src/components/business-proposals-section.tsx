import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import teamPhoto from "@assets/Linkedin Cover_1750765339302.jpg";

export default function BusinessProposalsSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            For Business Proposals
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with us to expand educational opportunities and create meaningful connections worldwide
          </motion.p>
        </motion.div>

        {/* Full Team Photo */}
        <motion.div
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img 
            src={teamPhoto} 
            alt="Dunya Consultants Team" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Modern Contact Layout */}
        <div className="space-y-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 text-lg">Reach out to us through any of these channels</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* UAN Card */}
              <motion.a
                href="tel:+923041110947"
                className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full -mr-10 -mt-10" />
                <div className="relative">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">UAN Number</h4>
                  <p className="text-green-600 font-semibold text-lg">(+92) 304 1110947</p>
                  <p className="text-gray-600 text-sm mt-2">Call us anytime</p>
                </div>
              </motion.a>

              {/* Head Office Card */}
              <motion.div
                className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-200/30 rounded-full -mr-10 -mt-10" />
                <div className="relative">
                  <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Head Office</h4>
                  <p className="text-red-600 font-semibold">Alif Tower</p>
                  <p className="text-gray-600 text-sm">Buhadur shah zafar road, Sargodha</p>
                </div>
              </motion.div>

              {/* General Queries Card */}
              <motion.a
                href="mailto:info@dunyaconsultants.com"
                className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full -mr-10 -mt-10" />
                <div className="relative">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">General Queries</h4>
                  <p className="text-blue-600 font-semibold">info@dunyaconsultants.com</p>
                  <p className="text-gray-600 text-sm mt-2">We'll respond within 24 hours</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Business Proposals Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm" />
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm" />
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-white">
                    <motion.div
                      className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Partnership Opportunities
                    </motion.div>
                    
                    <h3 className="text-4xl font-bold mb-6">Business Proposals</h3>
                    <p className="text-white/90 text-lg mb-8 leading-relaxed">
                      Ready to explore partnership opportunities? Connect with our business development team to discuss collaborations, franchise opportunities, and strategic partnerships.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center text-white/90">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Strategic Partnerships
                      </div>
                      <div className="flex items-center text-white/90">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Franchise Opportunities
                      </div>
                      <div className="flex items-center text-white/90">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Business Collaborations
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Contact Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="text-center text-white">
                      <motion.div
                        className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MessageCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h4 className="text-2xl font-bold mb-3">Umer Farooq</h4>
                      <p className="text-white/80 mb-6">Business Development Manager</p>
                      
                      <div className="space-y-4">
                        <motion.a
                          href="mailto:umer@dunyaconsultants.com"
                          className="block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Mail className="w-5 h-5 inline mr-2" />
                          Send Business Proposal
                        </motion.a>
                        
                        <div className="text-white/70 text-sm">
                          umer@dunyaconsultants.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}