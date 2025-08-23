import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight, Headphones } from 'lucide-react';

export default function AssistanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Get personalized advice from certified education counselors"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries and concerns"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Free Consultation",
      description: "No cost initial consultation to understand your goals"
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#1D50C9] rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1845B3] rounded-full translate-x-48 translate-y-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-[#1D50C9]">Worried about Admission?</span>
              <br />
              <span className="text-[#1D50C9]">Get Assistance for</span>
              <br />
              <span className="text-[#1D50C9]">
                Free
              </span>
            </motion.h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Don't let admission complexities overwhelm you. Our expert counselors are here to guide you through every step of your study abroad journey, completely free of charge.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, shadow: "lg" }}
                >
                  <div className="text-[#1845B3] bg-blue-50 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Options */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="flex-1 bg-gradient-to-r from-[#1D50C9] to-[#1a73e8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-#1a73e8 hover:to-#1565c0 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.button>
              
              <motion.button
                className="flex-1 bg-white #1845B3 px-8 py-4 rounded-lg font-semibold text-lg border-2 #1845B3 hover:bg-[#1845B3] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Headphones className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Expert Help</h3>
                <p className="text-gray-600">Schedule your free consultation</p>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Study Destination
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select a country</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="usa">United States</option>
                    <option value="germany">Germany</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1a73e8] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-#1a73e8 hover:to-#1565c0 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500 mb-3">
                  Trusted by 10,000+ students
                </p>
                <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    100% Free
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    No Obligation
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Expert Advice
                  </span>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full opacity-20 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}