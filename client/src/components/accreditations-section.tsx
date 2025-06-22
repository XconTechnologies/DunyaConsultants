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
      color: "from-blue-500 to-blue-700",
      icon: "🏆",
      status: "Certified Agent"
    },
    {
      name: "British Council",
      description: "UK's International Cultural Relations Organization",
      color: "from-red-500 to-blue-600",
      icon: "🇬🇧",
      status: "Authorized Partner"
    },
    {
      name: "LanguageCert",
      description: "International English Language Assessment",
      color: "from-green-500 to-teal-600",
      icon: "📜",
      status: "Testing Partner"
    },
    {
      name: "Duolingo",
      description: "English Test Official Partner",
      color: "from-emerald-500 to-green-600",
      icon: "🦉",
      status: "Test Center"
    },
    {
      name: "PTE Academic",
      description: "Pearson Test of English Academic",
      color: "from-orange-500 to-red-600",
      icon: "🎯",
      status: "Authorized Center"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-neutral-700">Trusted & Certified</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Accreditations</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Recognized and certified by leading international education bodies and testing organizations worldwide
          </p>
        </motion.div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={accreditation.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral-100 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accreditation.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Icon/Logo Area */}
                <div className="relative z-10 text-center mb-4">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${accreditation.color} rounded-2xl flex items-center justify-center text-3xl transform group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                    <span className="filter drop-shadow-lg">{accreditation.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {accreditation.name}
                  </h3>
                  
                  <p className="text-sm text-neutral-600 mb-3 leading-relaxed">
                    {accreditation.description}
                  </p>

                  <div className={`inline-flex items-center space-x-1 bg-gradient-to-r ${accreditation.color} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                    <Star className="w-3 h-3" />
                    <span>{accreditation.status}</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
              </div>

              {/* Floating Animation */}
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className={`w-full h-full bg-gradient-to-br ${accreditation.color} opacity-5 rounded-2xl`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-neutral-600">Quality Assurance</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quality Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
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