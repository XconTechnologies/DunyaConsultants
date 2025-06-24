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
          {/* Contact Information Section - Business Card Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 text-lg">Reach out to us through any of these channels</p>
            </div>
            
            {/* Business Card Style Layout */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full -ml-12 -mb-12" />
                
                <div className="relative z-10 p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* UAN Contact */}
                    <motion.a
                      href="tel:+923041110947"
                      className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">UAN Number</h4>
                      <p className="text-2xl font-bold text-green-600 mb-2">(+92) 304 1110947</p>
                      <p className="text-gray-600 text-sm">Call us anytime</p>
                    </motion.a>

                    {/* Head Office */}
                    <motion.div
                      className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Head Office</h4>
                      <p className="text-lg font-semibold text-red-600 mb-1">Alif Tower</p>
                      <p className="text-gray-600 text-sm leading-relaxed">Buhadur shah zafar road, Sargodha</p>
                    </motion.div>

                    {/* General Queries */}
                    <motion.a
                      href="mailto:info@dunyaconsultants.com"
                      className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">General Queries</h4>
                      <p className="text-lg font-semibold text-blue-600 mb-2">info@dunyaconsultants.com</p>
                      <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                    </motion.a>
                  </div>
                  
                  {/* Bottom Border Design */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
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
                        
                        {/* Contact Info Stack */}
                        <div className="space-y-4 mb-8">
                          <h4 className="text-2xl font-bold text-gray-900">Abdul Majeed</h4>
                          <p className="text-gray-600 font-medium">General Manager</p>
                        </div>
                        
                        {/* Action Button */}
                        <motion.a
                          href="mailto:abdul.majeed@dunyaconsultants.com"
                          className="group relative inline-block w-full"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-xl p-4 text-white font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-center space-x-2">
                              <Mail className="w-5 h-5" />
                              <span>Send Business Proposal</span>
                            </div>
                          </div>
                        </motion.a>
                        
                        {/* Email Display */}
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <div className="text-gray-700 text-sm text-center font-medium">
                            abdul.majeed@dunyaconsultants.com
                          </div>
                        </div>
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