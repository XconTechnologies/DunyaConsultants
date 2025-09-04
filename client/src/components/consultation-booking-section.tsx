import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import CalendlyButton from "@/components/calendly-button";

export default function ConsultationBookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl p-8 lg:p-12 text-center shadow-xl max-w-5xl mx-auto"
        >
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Book Your Free Consultation
          </h2>
          
          {/* Description */}
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to start your study abroad journey? Schedule a personalized consultation with our expert advisors. 
            We'll discuss your goals, recommend the best destinations, and create a customized plan for your success.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold">30-Minute Session</h3>
              <p className="text-blue-100 text-sm">Comprehensive consultation covering all aspects of your study abroad plans</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold">Expert Advisors</h3>
              <p className="text-blue-100 text-sm">Connect with certified education consultants with years of experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold">Personalized Plan</h3>
              <p className="text-blue-100 text-sm">Get a customized roadmap tailored to your goals and requirements</p>
            </motion.div>
          </div>

          {/* CTA Buttons - Two Step Process */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4"
          >
            {/* Step 1: Fill Form */}
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">Step 1: Fill Your Details</h4>
              <CalendlyButton
                url="https://calendly.com/d/cr7w-sby-xzh"
                text="📋 Fill Consultation Form"
                className="bg-white text-[#1D50C9] hover:bg-gray-100 hover:text-[#1845B3] px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                size="lg"
                showIcon={false}
              />
            </div>

            {/* Step 2: Schedule Meeting */}
            <div>
              <h4 className="text-white font-semibold mb-2">Step 2: Schedule Your Meeting</h4>
              <CalendlyButton
                url="https://calendly.com/globaldc89/30min"
                text="📅 Schedule Online Meeting"
                className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-[#1D50C9] px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                size="lg"
                showIcon={false}
              />
              <p className="text-blue-100 text-sm mt-2">Complete the form above first, then schedule your meeting</p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 flex items-center justify-center space-x-2 text-blue-100 text-sm"
          >
            <Clock className="w-4 h-4" />
            <span>Available Monday to Saturday, 10 AM - 6 PM</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}