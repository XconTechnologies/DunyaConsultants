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
          className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            {/* Main Contact */}
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-2">Give Us A Call</h3>
              <a 
                href="tel:+923041110947"
                className="text-lg font-bold text-primary hover:text-primary/80 transition-colors block"
              >
                (+92) 304 1110947
              </a>
            </div>

            {/* Head Office */}
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-2">Head Office</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Alif Tower Buhadur shah zafar road, Sargodha.
              </p>
            </div>

            {/* Email */}
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-2">Email Address</h3>
              <a 
                href="mailto:info@dunyaconsultants.com"
                className="text-sm text-primary hover:text-primary/80 transition-colors font-medium block"
              >
                info@dunyaconsultants.com
              </a>
            </div>

            {/* Business Proposals */}
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-3">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-2">Business</h3>
              <div className="space-y-1">
                <a 
                  href="mailto:umer@dunyaconsultants.com"
                  className="block text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  umer@dunyaconsultants.com
                </a>
                <a 
                  href="https://wa.me/923216051057"
                  className="flex items-center justify-center md:justify-start space-x-1 text-sm text-green-600 hover:text-green-700 transition-colors font-medium"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>+923216051057</span>
                </a>
              </div>
            </div>

            {/* Admission & Query */}
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-3">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-2">Admission</h3>
              <div className="space-y-1">
                <a 
                  href="https://wa.me/923011231947"
                  className="flex items-center justify-center md:justify-start space-x-1 text-sm text-green-600 hover:text-green-700 transition-colors font-medium"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>+923011231947</span>
                </a>
                <a 
                  href="https://wa.me/923219991947"
                  className="flex items-center justify-center md:justify-start space-x-1 text-sm text-green-600 hover:text-green-700 transition-colors font-medium"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>+923219991947</span>
                </a>
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