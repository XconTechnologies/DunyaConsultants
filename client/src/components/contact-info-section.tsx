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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)`
              }}>
              </div>
            </div>
          </div>

          {/* Main Contact Bar */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200 shadow-xl">
            {/* Hero Contact */}
            <div className="text-center mb-8 pb-6 border-b border-neutral-200">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary to-secondary rounded-full px-8 py-4 text-white shadow-lg">
                <Phone className="w-6 h-6" />
                <div>
                  <p className="text-sm font-medium opacity-90">Call Us Now</p>
                  <a 
                    href="tel:+923041110947"
                    className="text-xl font-bold hover:text-blue-200 transition-colors"
                  >
                    (+92) 304 1110947
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Circles */}
            <div className="flex flex-wrap justify-center gap-8">
              {/* Head Office Circle */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                  <MapPin className="w-8 h-8 mb-2" />
                  <p className="text-xs font-semibold text-center">Head Office</p>
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Alif Tower Buhadur shah zafar road, Sargodha
                </div>
              </motion.div>

              {/* Email Circle */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a href="mailto:info@dunyaconsultants.com">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                    <Mail className="w-8 h-8 mb-2" />
                    <p className="text-xs font-semibold text-center">Email</p>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    info@dunyaconsultants.com
                  </div>
                </a>
              </motion.div>

              {/* Business Circle */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                  <Briefcase className="w-8 h-8 mb-2" />
                  <p className="text-xs font-semibold text-center">Business</p>
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <div className="space-y-1">
                    <a href="mailto:umer@dunyaconsultants.com" className="block hover:text-orange-300">
                      umer@dunyaconsultants.com
                    </a>
                    <a href="https://wa.me/923216051057" className="block hover:text-green-300">
                      WhatsApp: +923216051057
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Admission Circle */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                  <MessageCircle className="w-8 h-8 mb-2" />
                  <p className="text-xs font-semibold text-center">Admission</p>
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <div className="space-y-1">
                    <a href="https://wa.me/923011231947" className="block hover:text-green-300">
                      WhatsApp: +923011231947
                    </a>
                    <a href="https://wa.me/923219991947" className="block hover:text-green-300">
                      WhatsApp: +923219991947
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

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