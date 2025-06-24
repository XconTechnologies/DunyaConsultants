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

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            {/* UAN Card */}
            <motion.a
              href="tel:+923041110947"
              className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">UAN Number</div>
                <div className="text-green-600 font-medium">(+92) 304 1110947</div>
              </div>
            </motion.a>

            {/* Head Office Card */}
            <motion.div
              className="flex items-start p-6 bg-gray-50 rounded-xl"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">Head Office Location</div>
                <div className="text-gray-600">Alif Tower Buhadur shah zafar road, Sargodha</div>
              </div>
            </motion.div>

            {/* General Queries Card */}
            <motion.a
              href="mailto:info@dunyaconsultants.com"
              className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">For General Queries</div>
                <div className="text-blue-600 font-medium">info@dunyaconsultants.com</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Side - Business Proposals */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">Business Proposals</h3>
              <p className="text-blue-100 mb-8">
                Ready to explore partnership opportunities? Connect with our business development team
              </p>

              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <div className="text-lg font-semibold mb-2">Umer Farooq</div>
                <div className="text-blue-100 text-sm mb-4">Business Development Manager</div>
                
                <motion.a
                  href="mailto:umer@dunyaconsultants.com"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Proposal
                </motion.a>
              </div>

              <div className="text-center">
                <div className="text-blue-100 text-sm">
                  umer@dunyaconsultants.com
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}