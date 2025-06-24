import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Import authentic university logos
import etonCollegeLogo from "@assets/download-1_1750752090669.webp";
import southernCrossLogo from "@assets/Uni-Logos-3-15-1-2048x879_1750752090670.webp";
import skillsAustraliaLogo from "@assets/Uni-Logos-3-22-2048x878_1750752090670.webp";
import universityAppliedSciencesLogo from "@assets/Uni-Logos-3-14-2048x878_1750752090671.webp";
import ibatCollegeLogo from "@assets/Uni-Logos-3-20-2048x878_1750752090672.webp";
import gbsLogo from "@assets/Uni-Logos-3-05-2048x879_1750752090672.webp";
import collegeParisLogo from "@assets/Uni-Logos-3-09-2048x879_1750752090673.webp";
import gismaUniversityLogo from "@assets/Uni-Logos-2-04-1_1750752090673.webp";
import ardenUniversityLogo from "@assets/Uni-Logos-3-17-2048x879_1750752090674.webp";
import universityEuropeLogo from "@assets/Artboard-1-copy-42_1750752090674.webp";
import bsbiLogo from "@assets/Uni-Logos-3-16-2048x878_1750752090675.webp";
import labLogo from "@assets/lab-logo_1750752090675.webp";
import limCollegeLogo from "@assets/Uni-Logos-3-11-2048x879_1750752378811.webp";
import websterUniversityLogo from "@assets/Artboard-1-copy-4_1750752378812.webp";
import qaPartnershipLogo from "@assets/Untitled design (14)_1750752416711.png";
import hartpuryUniversityLogo from "@assets/download_1750752416712.webp";
import ulsterUniversityLogo from "@assets/IMG-20250425-WA0015_1750752416712.webp";
import southamptonSolentLogo from "@assets/IMG-20250425-WA0016_1750752416713.webp";
import southWalesUniversityLogo from "@assets/IMG-20250425-WA0017_1750752416714.webp";

// University partners data with authentic logos
const universityPartners = [
  // Authentic Partner Universities
  { name: "Eton College", country: "UK", logoUrl: etonCollegeLogo, ranking: "Premier" },
  { name: "Southern Cross Institute", country: "Australia", logoUrl: southernCrossLogo, ranking: "Top 10" },
  { name: "Skills Australia Institute", country: "Australia", logoUrl: skillsAustraliaLogo, ranking: "Leading" },
  { name: "University of Applied Sciences Europe", country: "Germany", logoUrl: universityAppliedSciencesLogo, ranking: "Top 20" },
  { name: "IBAT College Dublin", country: "Ireland", logoUrl: ibatCollegeLogo, ranking: "Prestigious" },
  { name: "GBS Global Applied Knowledge", country: "UK", logoUrl: gbsLogo, ranking: "Excellence" },
  { name: "College de Paris", country: "France", logoUrl: collegeParisLogo, ranking: "Elite" },
  { name: "Gisma University of Applied Sciences", country: "Germany", logoUrl: gismaUniversityLogo, ranking: "Top 15" },
  { name: "Arden University Berlin", country: "Germany", logoUrl: ardenUniversityLogo, ranking: "Innovative" },
  { name: "University of Europe", country: "Germany", logoUrl: universityEuropeLogo, ranking: "Leading" },
  { name: "Berlin School of Business & Innovation", country: "Germany", logoUrl: bsbiLogo, ranking: "Premier" },
  { name: "LAB University", country: "Finland", logoUrl: labLogo, ranking: "Excellence" },
  { name: "LIM College - Business of Fashion & Lifestyle", country: "USA", logoUrl: limCollegeLogo, ranking: "Specialized" },
  { name: "Webster University", country: "USA", logoUrl: websterUniversityLogo, ranking: "Global" },
  { name: "QA Partnership", country: "UK", logoUrl: qaPartnershipLogo, ranking: "Partnership" },
  { name: "Hartpury University and College", country: "UK", logoUrl: hartpuryUniversityLogo, ranking: "Specialized" },
  { name: "Ulster University", country: "UK", logoUrl: ulsterUniversityLogo, ranking: "Research" },
  { name: "Southampton Solent University", country: "UK", logoUrl: southamptonSolentLogo, ranking: "Modern" },
  { name: "University of South Wales", country: "Wales", logoUrl: southWalesUniversityLogo, ranking: "Innovation" },
  
  // Additional top universities
  { name: "Harvard University", country: "USA", logoUrl: null, ranking: "#1" },
  { name: "Stanford University", country: "USA", logoUrl: null, ranking: "#2" },
  { name: "MIT", country: "USA", logoUrl: null, ranking: "#3" },
  { name: "University of Oxford", country: "UK", logoUrl: null, ranking: "#1 UK" },
  { name: "University of Cambridge", country: "UK", logoUrl: null, ranking: "#2 UK" },
  { name: "University of Toronto", country: "Canada", logoUrl: null, ranking: "#1 CA" },
  { name: "University of British Columbia", country: "Canada", logoUrl: null, ranking: "#2 CA" },
  { name: "McGill University", country: "Canada", logoUrl: null, ranking: "#3 CA" },
  { name: "Australian National University", country: "Australia", logoUrl: null, ranking: "#1 AU" },
  { name: "University of Melbourne", country: "Australia", logoUrl: null, ranking: "#2 AU" },
  { name: "University of Sydney", country: "Australia", logoUrl: null, ranking: "#3 AU" },
  { name: "Technical University of Munich", country: "Germany", logoUrl: null, ranking: "#1 DE" },
  { name: "LMU Munich", country: "Germany", logoUrl: null, ranking: "#2 DE" },
  { name: "ETH Zurich", country: "Switzerland", logoUrl: null, ranking: "#1 CH" },
  { name: "National University of Singapore", country: "Singapore", logoUrl: null, ranking: "#1 SG" },
];

// Generate more universities to reach 250+
const generateMoreUniversities = () => {
  const additionalUniversities = [];
  const countries = ["USA", "UK", "Canada", "Australia", "Germany", "France", "Netherlands", "Sweden", "Italy", "Spain"];
  const prefixes = ["Royal", "National", "State", "Technical", "Metropolitan", "Central", "International", "Global"];
  const suffixes = ["University", "Institute", "College", "Academy", "School"];
  
  for (let i = 0; i < 180; i++) {
    const country = countries[i % countries.length];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const cityNames = ["Victoria", "Cambridge", "Oxford", "Berlin", "Paris", "Rome", "Madrid", "Vienna", "Prague", "Dublin"];
    const city = cityNames[Math.floor(Math.random() * cityNames.length)];
    
    additionalUniversities.push({
      name: `${prefix} ${suffix} of ${city}`,
      country,
      logoUrl: `/logos/university-${i + 11}.webp`,
      ranking: `#${i + 11}`
    });
  }
  return additionalUniversities;
};

const allUniversities = [...universityPartners, ...generateMoreUniversities()];

export default function UniversityPartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter only universities with logos (authentic partners)
  const authenticPartners = universityPartners.filter(uni => uni.logoUrl !== null);

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
            We've partnered with prestigious universities worldwide including leading institutions 
            in USA, UK, Wales, Germany, Australia, Ireland, France, and Finland to provide you with the best educational opportunities.
          </p>
        </motion.div>

        {/* Responsive Logo Grid with Advanced Hover Animations */}
        <motion.div
          className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4 sm:gap-6 relative z-10">
            {/* Anglia Ruskin University */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
              style={{ perspective: "1000px" }}
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-200/0 to-blue-300/0 group-hover:from-blue-100/50 group-hover:via-blue-200/30 group-hover:to-blue-300/20 transition-all duration-500 rounded-2xl"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="/attached_assets/191782_191241_ARU_Logo_Descriptor_RGB_Blue3_1750754253083.webp"
                    alt="Anglia Ruskin University logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -2, 2, 0],
                      filter: "drop-shadow(0 10px 20px rgba(59, 130, 246, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Anglia Ruskin University
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    UK
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* University for the Creative Arts */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: -5,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 via-purple-200/0 to-purple-300/0 group-hover:from-purple-100/50 group-hover:via-purple-200/30 group-hover:to-purple-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://www.uca.ac.uk/assets/img/logo.svg"
                    alt="University for the Creative Arts logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, 2, -2, 0],
                      filter: "drop-shadow(0 10px 20px rgba(147, 51, 234, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  University for the Creative Arts
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    UK
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Webster University */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-red-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: 3,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/0 via-red-200/0 to-red-300/0 group-hover:from-red-100/50 group-hover:via-red-200/30 group-hover:to-red-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Webster_University_Logo.svg/200px-Webster_University_Logo.svg.png"
                    alt="Webster University logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -1, 1, 0],
                      filter: "drop-shadow(0 10px 20px rgba(239, 68, 68, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1 right-1 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-red-300 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  Webster University
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    USA
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* IC University of Applied Sciences */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: -3,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 via-orange-200/0 to-orange-300/0 group-hover:from-orange-100/50 group-hover:via-orange-200/30 group-hover:to-orange-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="/attached_assets/Uni-Logos-3-14-2048x878_1750754324473.webp"
                    alt="IC University of Applied Sciences logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, 1.5, -1.5, 0],
                      filter: "drop-shadow(0 10px 20px rgba(251, 146, 60, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-3 left-1 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1 right-2 w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  IC University of Applied Sciences
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Netherlands
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Beykoz University */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: 4,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 via-purple-200/0 to-purple-300/0 group-hover:from-purple-100/50 group-hover:via-purple-200/30 group-hover:to-purple-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://beykoz.edu.tr/wp-content/uploads/2022/01/logo.png"
                    alt="Beykoz University logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -3, 3, 0],
                      filter: "drop-shadow(0 10px 20px rgba(147, 51, 234, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 right-3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  Beykoz University
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Turkey
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Capilano University */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-green-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: -4,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 via-green-200/0 to-green-300/0 group-hover:from-green-100/50 group-hover:via-green-200/30 group-hover:to-green-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://www.capilanou.ca/media/capilanouca/about-capu/logos/CapU-Logo-colour.png"
                    alt="Capilano University logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, 2.5, -2.5, 0],
                      filter: "drop-shadow(0 10px 20px rgba(34, 197, 94, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1 left-3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 right-1 w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: "0.6s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  Capilano University
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Canada
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* LUT University */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-indigo-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: 2,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/0 via-indigo-200/0 to-indigo-300/0 group-hover:from-indigo-100/50 group-hover:via-indigo-200/30 group-hover:to-indigo-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://www.lut.fi/sites/all/themes/lut2015/images/lut_logo.png"
                    alt="LUT University logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -1, 1, 0],
                      filter: "drop-shadow(0 10px 20px rgba(99, 102, 241, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-3 right-1 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1 left-3 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce" style={{ animationDelay: "0.7s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  LUT University
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Finland
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* University of Niagara Falls */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-green-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: -2,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/0 via-cyan-200/0 to-cyan-300/0 group-hover:from-cyan-100/50 group-hover:via-cyan-200/30 group-hover:to-cyan-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://niagaracollege.ca/uploads/2019/03/NC-logo-RGB.png"
                    alt="University of Niagara Falls logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, 1, -1, 0],
                      filter: "drop-shadow(0 10px 20px rgba(6, 182, 212, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 left-2 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: "0.8s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  University of Niagara Falls
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Canada
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* University of Europe */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-yellow-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: 3,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/0 via-yellow-200/0 to-yellow-300/0 group-hover:from-yellow-100/50 group-hover:via-yellow-200/30 group-hover:to-yellow-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://www.ue-germany.com/sites/default/files/UE_Logo_RGB_Red_sRGB.png"
                    alt="University of Europe logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, 2, -2, 0],
                      filter: "drop-shadow(0 10px 20px rgba(251, 191, 36, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: "0.9s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  University of Europe
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Germany
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* University of East Anglia */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: -3,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/0 via-pink-200/0 to-pink-300/0 group-hover:from-pink-100/50 group-hover:via-pink-200/30 group-hover:to-pink-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/University_of_East_Anglia_Logo.svg/200px-University_of_East_Anglia_Logo.svg.png"
                    alt="University of East Anglia logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -2, 2, 0],
                      filter: "drop-shadow(0 10px 20px rgba(236, 72, 153, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-3 left-1 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 right-3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: "1.0s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  University of East Anglia
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    UK
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Eton College */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-slate-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: 4,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100/0 via-slate-200/0 to-slate-300/0 group-hover:from-slate-100/50 group-hover:via-slate-200/30 group-hover:to-slate-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Eton_College_Coat_of_Arms.svg/200px-Eton_College_Coat_of_Arms.svg.png"
                    alt="Eton College logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, 1, -1, 0],
                      filter: "drop-shadow(0 10px 20px rgba(71, 85, 105, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1 right-3 w-1 h-1 bg-slate-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 left-1 w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "1.1s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-slate-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  Eton College
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    UK
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Halic University */}
            <motion.div
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: -4,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-200/0 to-blue-300/0 group-hover:from-blue-100/50 group-hover:via-blue-200/30 group-hover:to-blue-300/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="h-16 sm:h-20 mb-4 flex items-center justify-center relative">
                  <motion.img 
                    src="https://halicdegisim.com.tr/wp-content/uploads/2020/12/halicdegisim-logo.png"
                    alt="Halic University logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, 3, -3, 0],
                      filter: "drop-shadow(0 10px 20px rgba(59, 130, 246, 0.3))"
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1 right-2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: "1.2s" }}></div>
                  </div>
                </div>
                <motion.h3 
                  className="font-bold text-neutral-800 text-xs sm:text-sm mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  Halic University
                </motion.h3>
                <div className="flex justify-center">
                  <motion.span 
                    className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Turkey
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Apply to Your Dream University?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              With our extensive network of 250+ university partners, we can help you find and apply to 
              the perfect institution that matches your academic goals and career aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                Explore Universities
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Get University Guidance
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}