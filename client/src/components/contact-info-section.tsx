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

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Head Office */}
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-neutral-800 mb-1">Head Office</h4>
                  <p className="text-sm text-neutral-600 leading-tight">
                    Alif Tower Buhadur shah zafar road, Sargodha
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-neutral-800 mb-1">Email</h4>
                  <a 
                    href="mailto:info@dunyaconsultants.com"
                    className="text-sm text-purple-600 hover:text-purple-800 transition-colors font-medium break-all"
                  >
                    info@dunyaconsultants.com
                  </a>
                </div>
              </div>

              {/* Business */}
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-neutral-800 mb-1">Business</h4>
                  <div className="space-y-1">
                    <a 
                      href="mailto:umer@dunyaconsultants.com"
                      className="block text-xs text-orange-600 hover:text-orange-800 transition-colors font-medium break-all"
                    >
                      umer@dunyaconsultants.com
                    </a>
                    <a 
                      href="https://wa.me/923216051057"
                      className="flex items-center space-x-1 text-xs text-green-600 hover:text-green-800 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>+923216051057</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Admission */}
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-neutral-800 mb-1">Admission</h4>
                  <div className="space-y-1">
                    <a 
                      href="https://wa.me/923011231947"
                      className="flex items-center space-x-1 text-xs text-green-600 hover:text-green-800 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>+923011231947</span>
                    </a>
                    <a 
                      href="https://wa.me/923219991947"
                      className="flex items-center space-x-1 text-xs text-green-600 hover:text-green-800 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>+923219991947</span>
                    </a>
                  </div>
                </div>
              </div>
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