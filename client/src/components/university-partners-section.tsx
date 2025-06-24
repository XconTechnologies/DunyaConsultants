import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Import new university logos
import southamptonSolentLogo from "@assets/IMG-20250425-WA0016_1750755121093.jpg";
import southWalesUniversityLogo from "@assets/IMG-20250425-WA0017_1750755121094.jpg";
import qaPartnershipLogo from "@assets/Untitled design (14)_1750755121095.jpg";
import ulsterUniversityLogo from "@assets/IMG-20250425-WA0015_1750755121095.jpg";
import universityAppliedSciencesLogo from "@assets/Uni-Logos-3-14-2048x878_1750755121096.jpg";
import southernCrossLogo from "@assets/Uni-Logos-3-15-1-2048x879_1750755121096.jpg";
import bsbiLogo from "@assets/Uni-Logos-3-16-2048x878_1750755121097.jpg";
import ardenUniversityLogo from "@assets/Uni-Logos-3-17-2048x879_1750755121098.jpg";
import avilaUniversityLogo from "@assets/Uni-Logos-3-18-2048x878_1750755121099.jpg";
import ibatCollegeLogo from "@assets/Uni-Logos-3-20-2048x878_1750755121100.jpg";

// University partners data
const universityPartners = [
  { name: "Southampton Solent University", country: "UK", logoUrl: southamptonSolentLogo },
  { name: "University of South Wales", country: "Wales", logoUrl: southWalesUniversityLogo },
  { name: "QA Partnership", country: "UK", logoUrl: qaPartnershipLogo },
  { name: "Ulster University", country: "UK", logoUrl: ulsterUniversityLogo },
  { name: "University of Applied Sciences Europe", country: "Netherlands", logoUrl: universityAppliedSciencesLogo },
  { name: "Southern Cross Institute", country: "Australia", logoUrl: southernCrossLogo },
  { name: "Berlin School of Business & Innovation", country: "Germany", logoUrl: bsbiLogo },
  { name: "Arden University Berlin", country: "Germany", logoUrl: ardenUniversityLogo },
  { name: "Avila University", country: "USA", logoUrl: avilaUniversityLogo },
  { name: "IBAT College Dublin", country: "Ireland", logoUrl: ibatCollegeLogo }
];

export default function UniversityPartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % universityPartners.length);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-6">
            Our Global University Partners
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Unlock your potential with our extensive network of world-class universities and institutions across the globe
          </p>
        </motion.div>

        {/* 3-Row Logo Grid */}
        <motion.div
          className="relative mb-16 bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Row 1 - First 4 logos */}
          <motion.div
            className="grid grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {universityPartners.slice(0, 4).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-16 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 - Next 3 logos */}
          <motion.div
            className="grid grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {universityPartners.slice(4, 7).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-16 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3 - Last 3 logos */}
          <motion.div
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {universityPartners.slice(7, 10).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-16 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">250+</div>
            <div className="text-sm text-gray-600">Universities</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-gray-600">Students Placed</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore University Guidance
            <motion.div
              className="text-xl"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}