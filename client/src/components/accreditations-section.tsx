import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, CheckCircle, Star } from "lucide-react";

export default function AccreditationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const accreditations = [
    {
      name: "ICEF Agency",
      description: "International Consultants for Education and Fairs",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md border">
          <div className="text-center">
            <div className="font-bold text-xs leading-tight" style={{ color: '#2764E8' }}>ICEF</div>
            <div className="font-bold text-sm" style={{ color: '#2764E8' }}>AGENCY</div>
            <div className="text-xs" style={{ color: '#2764E8' }}>STATUS</div>
          </div>
        </div>
      ),
      status: "Certified Agent"
    },
    {
      name: "British Council",
      description: "UK's International Cultural Relations Organization",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md border">
          <div className="text-center">
            <div className="w-16 h-6 rounded flex items-center justify-center mb-1" style={{ backgroundColor: '#2764E8' }}>
              <span className="text-white font-bold text-xs">BC</span>
            </div>
            <div className="text-xs" style={{ color: '#2764E8' }}>British Council</div>
          </div>
        </div>
      ),
      status: "Authorized Partner"
    },
    {
      name: "LanguageCert",
      description: "International English Language Assessment",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md border">
          <div className="text-center">
            <div className="font-bold text-xs" style={{ color: '#2764E8' }}>Language</div>
            <div className="font-bold text-xs" style={{ color: '#2764E8' }}>Cert</div>
            <div className="w-12 h-0.5 rounded mx-auto mt-1" style={{ backgroundColor: '#2764E8' }}></div>
            <div className="text-xs mt-1" style={{ color: '#2764E8' }}>INTERNATIONAL</div>
          </div>
        </div>
      ),
      status: "Testing Partner"
    },
    {
      name: "Duolingo",
      description: "English Test Official Partner",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md border">
          <div className="text-center">
            <div className="w-8 h-6 bg-blue-500 rounded-full flex items-center justify-center mb-1 mx-auto">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="text-blue-600 font-bold text-xs">Duolingo</div>
            <div className="text-xs text-blue-500">English Test</div>
          </div>
        </div>
      ),
      status: "Test Center"
    },
    {
      name: "PTE Academic",
      description: "Pearson Test of English Academic",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md border">
          <div className="text-center">
            <div className="font-bold text-lg" style={{ color: '#2764E8' }}>PTE</div>
            <div className="font-medium text-xs" style={{ color: '#2764E8' }}>Academic</div>
            <div className="text-xs" style={{ color: '#2764E8' }}>Pearson</div>
          </div>
        </div>
      ),
      status: "Authorized Center"
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
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2764E8' }}>
            Our <span style={{ color: '#2764E8' }}>Accreditations</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Recognized and certified by leading international education bodies and testing organizations worldwide
          </p>
        </motion.div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100">
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <div className="text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1" style={{ backgroundColor: '#e8f0ff', color: '#2764E8' }}>
                    <CheckCircle className="w-3 h-3" />
                    <span className="hidden sm:inline">Verified</span>
                  </div>
                </div>

                {/* Logo Area */}
                <div className="text-center mb-4">
                  <div className="transform group-hover:scale-105 transition-transform duration-300">
                    {accreditation.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {accreditation.name}
                  </h3>
                  
                  <p className="text-xs text-neutral-600 mb-3 leading-relaxed hidden lg:block">
                    {accreditation.description}
                  </p>

                  <div className="inline-flex items-center space-x-1 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    <Star className="w-3 h-3" />
                    <span className="hidden sm:inline">{accreditation.status}</span>
                    <span className="sm:hidden">Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-neutral-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-neutral-600">International Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-neutral-600">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-neutral-600">Quality Assurance</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quality Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quality You Can Trust</h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Our accreditations ensure that you receive the highest quality service and guidance 
                throughout your international education journey
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}