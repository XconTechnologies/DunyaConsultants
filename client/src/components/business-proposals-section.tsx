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
                  
                  {/* Unique Contact Card */}
                  <div className="relative">
                    {/* Card Container */}
                    <motion.div 
                      className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                      whileHover={{ rotateY: 5, rotateX: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Floating Background Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-50 blur-xl" />
                      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-30 blur-xl" />
                      
                      {/* Content */}
                      <div className="relative z-10 text-center">
                        {/* Profile Icon with Unique Design */}
                        <motion.div
                          className="relative w-24 h-24 mx-auto mb-6"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center relative">
                            <MessageCircle className="w-12 h-12 text-white" />
                            {/* Animated border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-purple-300 animate-pulse" />
                          </div>
                          {/* Status indicator */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-600 rounded-full animate-ping" />
                          </div>
                        </motion.div>
                        
                        {/* Name with gradient text */}
                        <h4 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Abdul Majeed</h4>
                        
                        {/* Title with badge design */}
                        <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-8">
                          <p className="text-gray-700 font-medium text-sm">General Manager</p>
                        </div>
                        
                        {/* Action Button with unique design */}
                        <motion.a
                          href="mailto:abdul.majeed@dunyaconsultants.com"
                          className="group relative inline-block"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-6 text-white font-semibold shadow-xl group-hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center justify-center space-x-3">
                              <Mail className="w-6 h-6" />
                              <span className="text-lg">Send Business Proposal</span>
                            </div>
                            {/* Animated underline */}
                            <div className="h-1 bg-white/30 rounded-full mt-3 overflow-hidden">
                              <div className="h-full bg-white rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </div>
                          </div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                        </motion.a>
                        
                        {/* Email with copy functionality */}
                        <motion.div 
                          className="mt-6 p-3 bg-gray-50 rounded-xl cursor-pointer group"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => navigator.clipboard.writeText('abdul.majeed@dunyaconsultants.com')}
                        >
                          <div className="flex items-center justify-center space-x-2 text-gray-600 group-hover:text-blue-600 transition-colors">
                            <Mail className="w-4 h-4" />
                            <span className="text-sm font-medium">abdul.majeed@dunyaconsultants.com</span>
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                            >
                              Click to copy
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
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