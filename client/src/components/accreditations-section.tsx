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
      image: "/attached_assets/icef-agency-certification.png",
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D50C9] mb-6">
            Our Accreditations
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Recognized and certified by leading international education organizations
          </p>
        </motion.div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accreditations.map((accreditation, index) => {
            const isICEF = accreditation.name === "ICEF Agency";
            const content = (
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
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#1D50C9] flex flex-col items-center justify-center space-y-4">

                  {/* Logo Area */}
                  <div className="text-center">
                    <img
                      src={accreditation.image}
                      alt={accreditation.name}
                      className="max-h-48 max-w-48 mx-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Badge */}
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 text-white text-sm font-medium px-4 py-2 rounded-full" style={{ backgroundColor: '#1D50C9' }}>
                      <Star className="w-4 h-4" />
                      <span>{accreditation.status}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );

            return isICEF ? (
              <a 
                key={accreditation.name}
                href="https://accreditations.icef.com/certificate?id=210f08ad-2604-44df-ad7f-9a9af53e90c1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : content;
          })}
        </div>

      </div>
    </section>
  );
}