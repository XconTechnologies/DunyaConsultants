import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function BusinessProposalsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
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

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Email Contact */}
            <motion.a
              href="mailto:umer@dunyaconsultants.com"
              className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 hover:bg-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-6 h-6 text-blue-300 mr-4 group-hover:text-white transition-colors" />
              <div className="text-left">
                <div className="text-white font-semibold">Email</div>
                <div className="text-blue-200 text-sm">umer@dunyaconsultants.com</div>
              </div>
            </motion.a>

            {/* WhatsApp Contact */}
            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 group"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <MessageCircle className="w-6 h-6 text-green-300 mr-4 group-hover:text-white transition-colors" />
              <div className="text-left">
                <div className="text-white font-semibold">WhatsApp</div>
                <div className="text-blue-200 text-sm">Umer Farooq</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}