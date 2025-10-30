import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";

export default function ConsultationBookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const whiteTextStyle = {
    color: '#FFFFFF',
    textDecoration: 'none',
    textShadow: 'none',
    opacity: 1,
    fontFamily: 'inherit',
    WebkitTextFillColor: '#FFFFFF',
    MozTextFillColor: '#FFFFFF'
  };

  return (
    <section className="py-16" ref={ref} style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl p-8 lg:p-12 text-center shadow-xl max-w-5xl mx-auto"
          style={{ 
            background: 'linear-gradient(135deg, #1D50C9 0%, #1845B3 100%)',
            '--text-color': '#ffffff'
          } as React.CSSProperties}
        >
          {/* Heading */}
          <h2 style={{
            ...whiteTextStyle,
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            display: 'block'
          }}>
            Book Your Free Consultation
          </h2>
          
          {/* Description */}
          <p style={{
            ...whiteTextStyle,
            fontSize: '1.125rem',
            marginBottom: '2rem',
            lineHeight: '1.6',
            maxWidth: '48rem',
            margin: '0 auto 2rem auto',
            display: 'block'
          }}>
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
                <Calendar className="w-6 h-6" style={whiteTextStyle} />
              </div>
              <h3 style={{
                ...whiteTextStyle,
                fontWeight: 'bold',
                fontSize: '1.1rem',
                display: 'block'
              }}>
                20 Minutes Session
              </h3>
              <p style={{
                ...whiteTextStyle,
                fontSize: '0.875rem',
                textAlign: 'center',
                display: 'block'
              }}>
                Comprehensive consultation covering all aspects of your study abroad plans
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6" style={whiteTextStyle} />
              </div>
              <h3 style={{
                ...whiteTextStyle,
                fontWeight: 'bold',
                fontSize: '1.1rem',
                display: 'block'
              }}>
                Expert Advisors
              </h3>
              <p style={{
                ...whiteTextStyle,
                fontSize: '0.875rem',
                textAlign: 'center',
                display: 'block'
              }}>
                Connect with certified education consultants with years of experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6" style={whiteTextStyle} />
              </div>
              <h3 style={{
                ...whiteTextStyle,
                fontWeight: 'bold',
                fontSize: '1.1rem',
                display: 'block'
              }}>
                Personalized Plan
              </h3>
              <p style={{
                ...whiteTextStyle,
                fontSize: '0.875rem',
                textAlign: 'center',
                display: 'block'
              }}>
                Get a customized roadmap tailored to your goals and requirements
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CalendlyButton
              url="https://calendly.com/meet-dunya-consultants/20min"
              text="Book Free Consultation"
              className="bg-white text-[#1D50C9] hover:bg-gray-100 hover:text-[#1845B3] px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              size="lg"
              showIcon={false}
            />
            <Button
              onClick={() => setIsPopupOpen(true)}
              className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-[#1D50C9] px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              size="lg"
            >
              Connect now
            </Button>
          </motion.div>

          </motion.div>
      </div>

      {/* Consultation Form Popup */}
      <CompactConsultationForm 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}