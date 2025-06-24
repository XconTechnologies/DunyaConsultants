import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Import university logos - original 10
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

// Import additional university logos - batch 2 (12 logos)
import skillsAustraliaLogo from "@assets/Uni-Logos-3-22-2048x878_1750756376768.jpg";
import canterburyChristChurchLogo from "@assets/Uni-Logos-10_1750756376770.jpg";
import concordiaUniversityLogo from "@assets/Uni-Logos-18-1_1750756376771.jpg";
import gloucestershireLogo from "@assets/Uni-Logos-20-1_1750756376772.jpg";
import ulsterUniversityNewLogo from "@assets/Uni-Logos-21_1750756376773.jpg";
import northamptonLogo from "@assets/Uni-Logos-25-1_1750756376774.jpg";
import bangorUniversityLogo from "@assets/Uni-Logos-2-08-1_1750756376776.jpg";
import universityCanadaWestLogo from "@assets/Uni-Logos-3-01-2048x878_1750756376777.jpg";
import kadirHasLogo from "@assets/Uni-Logos-3-02-2048x877_1750756376778.jpg";
import universityOfLawLogo from "@assets/Uni-Logos-3-03-2048x878_1750756376779.jpg";

// Import additional university logos - batch 3 (10 logos)
import deMontfortLogo from "@assets/Uni-Logos-3-04-2048x877_1750756577519.jpg";
import gbsGlobalLogo from "@assets/Uni-Logos-3-05-2048x879_1750756577520.jpg";
import abertayUniversityLogo from "@assets/Uni-Logos-3-06-2048x878_1750756577521.jpg";
import heriotWattLogo from "@assets/Uni-Logos-3-07-2048x879_1750756577522.jpg";
import bahcesehirLogo from "@assets/Uni-Logos-3-08-2048x878_1750756577523.jpg";
import collegeDeParisLogo from "@assets/Uni-Logos-3-09-2048x879_1750756577524.jpg";
import limCollegeLogo from "@assets/Uni-Logos-3-11-2048x879_1750756577525.jpg";
import gusMedicalLogo from "@assets/Uni-Logos-3-12-2048x878_1750756577526.jpg";
import herzingUniversityLogo from "@assets/Uni-Logos-3-13-2048x879_1750756577527.jpg";
import icUniversityLogo from "@assets/Artboard-1-copy-5_1750756577528.jpg";

// University partners data - all 32 universities
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
  { name: "IBAT College Dublin", country: "Ireland", logoUrl: ibatCollegeLogo },
  { name: "Skills Australia Institute", country: "Australia", logoUrl: skillsAustraliaLogo },
  { name: "Canterbury Christ Church University", country: "UK", logoUrl: canterburyChristChurchLogo },
  { name: "Concordia University", country: "Canada", logoUrl: concordiaUniversityLogo },
  { name: "University of Gloucestershire", country: "UK", logoUrl: gloucestershireLogo },
  { name: "Ulster University", country: "UK", logoUrl: ulsterUniversityNewLogo },
  { name: "University of Northampton", country: "UK", logoUrl: northamptonLogo },
  { name: "Bangor University", country: "Wales", logoUrl: bangorUniversityLogo },
  { name: "University Canada West", country: "Canada", logoUrl: universityCanadaWestLogo },
  { name: "Kadir Has University", country: "Turkey", logoUrl: kadirHasLogo },
  { name: "The University of Law", country: "UK", logoUrl: universityOfLawLogo },
  { name: "De Montfort University Dubai", country: "UAE", logoUrl: deMontfortLogo },
  { name: "GBS Global Applied Knowledge", country: "Germany", logoUrl: gbsGlobalLogo },
  { name: "Abertay University", country: "Scotland", logoUrl: abertayUniversityLogo },
  { name: "Heriot-Watt University", country: "Scotland", logoUrl: heriotWattLogo },
  { name: "Bahçeşehir University", country: "Turkey", logoUrl: bahcesehirLogo },
  { name: "College de Paris", country: "France", logoUrl: collegeDeParisLogo },
  { name: "LIM College", country: "USA", logoUrl: limCollegeLogo },
  { name: "GUS Medical & Veterinary Schools", country: "Caribbean", logoUrl: gusMedicalLogo },
  { name: "Herzing University", country: "USA", logoUrl: herzingUniversityLogo },
  { name: "IC University of Applied Sciences", country: "Netherlands", logoUrl: icUniversityLogo }
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

        {/* Expanded 8-Row Logo Grid for 32 Universities */}
        <motion.div
          className="relative mb-16 bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Row 1 - First 4 logos */}
          <motion.div
            className="grid grid-cols-4 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {universityPartners.slice(0, 4).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-14 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 - Next 4 logos */}
          <motion.div
            className="grid grid-cols-4 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {universityPartners.slice(4, 8).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-14 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3 - Next 4 logos */}
          <motion.div
            className="grid grid-cols-4 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {universityPartners.slice(8, 12).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-14 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 4 - Next 4 logos */}
          <motion.div
            className="grid grid-cols-4 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {universityPartners.slice(12, 16).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-14 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 5 - Next 4 logos */}
          <motion.div
            className="grid grid-cols-4 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {universityPartners.slice(16, 20).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-14 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 6 - Next 4 logos */}
          <motion.div
            className="grid grid-cols-4 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {universityPartners.slice(20, 24).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-14 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 7 - Next 4 logos */}
          <motion.div
            className="grid grid-cols-4 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {universityPartners.slice(24, 28).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-14 max-w-full object-contain filter drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 8 - Last 4 logos */}
          <motion.div
            className="grid grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {universityPartners.slice(28, 32).map((university, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={university.logoUrl}
                  alt={`${university.name} logo`}
                  className="max-h-14 max-w-full object-contain filter drop-shadow-sm"
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
            <div className="text-3xl font-bold text-primary mb-2">350+</div>
            <div className="text-sm text-gray-600">Universities</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
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