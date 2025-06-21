import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Mail, MessageCircle, Briefcase } from "lucide-react";

export default function ContactInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Ready to start your educational journey? Contact us today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Give Us A Call</h3>
            <a 
              href="tel:+923041110947"
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              (+92) 304 1110947
            </a>
          </motion.div>

          {/* Head Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Head Office Location</h3>
            <p className="text-neutral-600 leading-relaxed">
              Alif Tower Buhadur shah zafar road, Sargodha.
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Email Address</h3>
            <a 
              href="mailto:info@dunyaconsultants.com"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              info@dunyaconsultants.com
            </a>
          </motion.div>

          {/* Business Proposals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">For Business Proposals</h3>
            <div className="space-y-2">
              <a 
                href="mailto:umer@dunyaconsultants.com"
                className="block text-primary hover:text-primary/80 transition-colors font-medium"
              >
                umer@dunyaconsultants.com
              </a>
              <a 
                href="https://wa.me/923216051057"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Umer Farooq +923216051057</span>
              </a>
            </div>
          </motion.div>

          {/* Admission & Query */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 md:col-span-2 lg:col-span-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">For Admission & Query</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/923011231947"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+923011231947</span>
              </a>
              <a 
                href="https://wa.me/923219991947"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+923219991947</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't wait - your dream education abroad is just a call away. Contact us today to get started.
            </p>
            <a 
              href="tel:+923041110947"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-block"
            >
              Call Now: (+92) 304 1110947
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}