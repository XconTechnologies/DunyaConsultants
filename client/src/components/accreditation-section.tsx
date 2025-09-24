import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import accreditation images
import britishCouncilLogo from "@assets/Group 1000008328_1758700076447.png";
import duolingoLogo from "@assets/Group 1000008325_1758700076449.png";
import languageCertLogo from "@assets/Group 1000008326_1758700076449.png";
import icefAgencyLogo from "@assets/ICEF_Agency[1]_1758700143132.png";

const accreditations = [
  {
    name: "British Council",
    logo: britishCouncilLogo
  },
  {
    name: "Duolingo",
    logo: duolingoLogo
  },
  {
    name: "LanguageCert",
    logo: languageCertLogo
  },
  {
    name: "ICEF Agency",
    logo: icefAgencyLogo
  }
];

export default function AccreditationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6 cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1D50C9 0%, #1845B3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            whileHover={{ scale: 1.05 }}
          >
            Our Accreditation
          </motion.h2>
          <p className="text-neutral-600 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
            Trusted by leading international organizations and certified to provide quality education services
          </p>
        </motion.div>

        {/* Accreditation Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={accreditation.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#1D50C9]/20">
                <div className="flex items-center justify-center">
                  {/* Logo Container */}
                  <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-[#1D50C9]/5 transition-colors duration-300">
                    <img
                      src={accreditation.logo}
                      alt={`${accreditation.name} logo`}
                      className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}