import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Mail, MessageCircle, Briefcase } from "lucide-react";

export default function ContactInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full relative">
            {/* Floating circles */}
            <motion.div 
              className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"
              animate={{ 
                x: [0, 100, 0], 
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: '10%', left: '10%' }}
            />
            <motion.div 
              className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
              animate={{ 
                x: [0, -80, 0], 
                y: [0, 60, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: '50%', right: '10%' }}
            />
            <motion.div 
              className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-25"
              animate={{ 
                x: [0, 60, 0], 
                y: [0, -80, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
              style={{ bottom: '10%', left: '20%' }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your educational journey starts with a simple conversation
          </p>
        </motion.div>

        {/* Contact Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Central Hub */}
          <div className="flex justify-center mb-16">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-40 h-40 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-500 rounded-full flex flex-col items-center justify-center text-white shadow-2xl relative overflow-hidden">
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ borderStyle: 'dashed' }}
                />
                <Phone className="w-12 h-12 mb-2 z-10" />
                <p className="text-sm font-bold text-center z-10">CALL NOW</p>
              </div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-neutral-800 px-6 py-3 rounded-full shadow-lg">
                <a 
                  href="tel:+923041110947"
                  className="text-lg font-bold hover:text-primary transition-colors"
                >
                  (+92) 304 1110947
                </a>
              </div>
            </motion.div>
          </div>

          {/* Orbital Contact Points */}
          <div className="relative flex justify-center">
            <div className="relative w-96 h-96">
              {/* Head Office */}
              <motion.div 
                className="absolute"
                style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl cursor-pointer group relative">
                  <MapPin className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Office</p>
                  {/* Connecting Line */}
                  <div className="absolute top-full w-0.5 h-16 bg-blue-300/50"></div>
                </div>
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Alif Tower, Sargodha
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="absolute"
                style={{ top: '50%', right: '0%', transform: 'translate(50%, -50%)' }}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
              >
                <a href="mailto:info@dunyaconsultants.com">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl cursor-pointer group relative">
                    <Mail className="w-6 h-6 mb-1" />
                    <p className="text-xs font-semibold">Email</p>
                    {/* Connecting Line */}
                    <div className="absolute right-full top-1/2 w-16 h-0.5 bg-blue-300/50 transform -translate-y-1/2"></div>
                  </div>
                  <div className="absolute top-1/2 right-28 transform -translate-y-1/2 bg-neutral-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    info@dunyaconsultants.com
                  </div>
                </a>
              </motion.div>

              {/* Business */}
              <motion.div 
                className="absolute"
                style={{ bottom: '0%', right: '25%', transform: 'translate(50%, 50%)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl cursor-pointer group relative">
                  <Briefcase className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Business</p>
                  {/* Connecting Line */}
                  <div className="absolute bottom-full right-1/2 w-0.5 h-16 bg-blue-300/50 transform translate-x-1/2"></div>
                </div>
                <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  <div className="space-y-1">
                    <a href="mailto:umer@dunyaconsultants.com" className="block hover:text-blue-300">
                      umer@dunyaconsultants.com
                    </a>
                    <a href="https://wa.me/923216051057" className="block hover:text-blue-300">
                      +923216051057
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Admission */}
              <motion.div 
                className="absolute"
                style={{ bottom: '0%', left: '25%', transform: 'translate(-50%, 50%)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl cursor-pointer group relative">
                  <MessageCircle className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Admission</p>
                  {/* Connecting Line */}
                  <div className="absolute bottom-full left-1/2 w-0.5 h-16 bg-blue-300/50 transform -translate-x-1/2"></div>
                </div>
                <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  <div className="space-y-1">
                    <a href="https://wa.me/923011231947" className="block hover:text-blue-300">
                      +923011231947
                    </a>
                    <a href="https://wa.me/923219991947" className="block hover:text-blue-300">
                      +923219991947
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
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-center mt-20"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Start Your Journey Today
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of students who've achieved their dreams through our guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+923041110947"
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 inline-block"
              >
                Call Now: (+92) 304 1110947
              </a>
              <a 
                href="https://wa.me/923041110947"
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}