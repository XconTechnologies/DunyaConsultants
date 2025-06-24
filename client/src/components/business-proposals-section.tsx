import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import teamPhoto from "@assets/Linkedin Cover_1750765339302.jpg";

export default function BusinessProposalsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Photo Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img 
            src={teamPhoto} 
            alt="Dunya Consultants Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-indigo-900/80" />
        </motion.div>

        <div className="relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              For Business Proposals
            </motion.h2>
            
            <motion.p
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to partner with us? Get in touch for business opportunities and collaborations
            </motion.p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* UAN Contact */}
            <motion.a
              href="tel:+923041110947"
              className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-8 h-8 text-green-300 mb-3 group-hover:text-white transition-colors" />
              <div className="text-center">
                <div className="text-white font-semibold mb-1">UAN</div>
                <div className="text-blue-200 text-sm">(+92) 304 1110947</div>
              </div>
            </motion.a>

            {/* Head Office */}
            <motion.div
              className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 group"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <MapPin className="w-8 h-8 text-red-300 mb-3 group-hover:text-white transition-colors" />
              <div className="text-center">
                <div className="text-white font-semibold mb-1">Head Office</div>
                <div className="text-blue-200 text-sm">Alif Tower Buhadur shah zafar road, Sargodha</div>
              </div>
            </motion.div>

            {/* General Queries */}
            <motion.a
              href="mailto:info@dunyaconsultants.com"
              className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-8 h-8 text-blue-300 mb-3 group-hover:text-white transition-colors" />
              <div className="text-center">
                <div className="text-white font-semibold mb-1">For Queries</div>
                <div className="text-blue-200 text-sm">info@dunyaconsultants.com</div>
              </div>
            </motion.a>

            {/* Business Proposals */}
            <motion.a
              href="mailto:umer@dunyaconsultants.com"
              className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-8 h-8 text-purple-300 mb-3 group-hover:text-white transition-colors" />
              <div className="text-center">
                <div className="text-white font-semibold mb-1">Business Proposals</div>
                <div className="text-blue-200 text-sm">Umer Farooq</div>
                <div className="text-blue-200 text-xs mt-1">umer@dunyaconsultants.com</div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}