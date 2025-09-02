import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, CheckCircle, Star } from "lucide-react";

export default function AccreditationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const accreditations = [
    {
      name: "British Council",
      description: "UK's International Cultural Relations Organization",
      image: "/attached_assets/Group 1000008328_1756811863750.png",
      status: "Authorized Partner"
    },
    {
      name: "ICEF Agency", 
      description: "International Consultants for Education and Fairs",
      image: "/attached_assets/Group 1000008327_1756811863752.png",
      status: "Certified Agent"
    },
    {
      name: "Duolingo",
      description: "English Test Official Partner",
      image: "/attached_assets/Group 1000008325_1756811863753.png",
      status: "Test Center"
    },
    {
      name: "LanguageCert",
      description: "International English Language Assessment",
      image: "/attached_assets/Group 1000008326_1756811863754.png",
      status: "Testing Partner"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-neutral-700">Trusted & Certified</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#1D50C9' }}>
            Our <span style={{ color: '#1D50C9' }}>Accreditations</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Recognized and certified by leading international education bodies and testing organizations worldwide
          </p>
        </motion.div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={accreditation.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1
              }}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100 h-80 flex flex-col">
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <div className="text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1" style={{ backgroundColor: '#e8f0ff', color: '#1D50C9' }}>
                    <CheckCircle className="w-3 h-3" />
                    <span className="hidden sm:inline">Verified</span>
                  </div>
                </div>

                {/* Logo Area */}
                <div className="text-center mb-4 flex-shrink-0">
                  <div className="transform group-hover:scale-105 transition-transform duration-300 h-24 flex items-center justify-center">
                    <img
                      src={accreditation.image}
                      alt={accreditation.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm lg:text-base font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors duration-300">
                      {accreditation.name}
                    </h3>
                    
                    <p className="text-xs text-neutral-600 mb-4 leading-relaxed hidden lg:block min-h-[2.5rem]">
                      {accreditation.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="inline-flex items-center space-x-1 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                      <Star className="w-3 h-3" />
                      <span className="hidden sm:inline">{accreditation.status}</span>
                      <span className="sm:hidden">Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}