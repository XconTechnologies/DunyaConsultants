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
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mb-8 shadow-2xl">
            <Award className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            Our <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">Accreditations</span>
          </h2>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Trusted by global education leaders and certified by prestigious international organizations
          </p>
        </motion.div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-white/20 h-80 flex flex-col group-hover:bg-white/15">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-lg">
                    <CheckCircle className="w-3 h-3" />
                    <span className="hidden sm:inline">Verified</span>
                  </div>
                </div>

                {/* Logo Area */}
                <div className="text-center mb-6 flex-shrink-0">
                  <div className="w-20 h-20 mx-auto bg-white rounded-xl p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                    <img
                      src={accreditation.image}
                      alt={accreditation.name}
                      className="max-h-12 max-w-12 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {accreditation.name}
                    </h3>
                    
                    <p className="text-sm text-blue-200 mb-4 leading-relaxed min-h-[3rem] opacity-90">
                      {accreditation.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg">
                      <Star className="w-4 h-4" />
                      <span>{accreditation.status}</span>
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