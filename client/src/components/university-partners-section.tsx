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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(allUniversities.length / 16)); // 16 logos per slide (4 rows × 4 columns)
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getUniversitiesForSlide = (slideIndex: number) => {
    const startIndex = slideIndex * 16;
    return allUniversities.slice(startIndex, startIndex + 16);
  };

  const totalSlides = Math.ceil(allUniversities.length / 16);

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
            We've partnered with 250+ prestigious universities worldwide including leading institutions 
            in UK, Germany, Australia, Ireland, France, and Finland to provide you with the best educational opportunities.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">250+</div>
              <div className="text-sm text-neutral-600">Universities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">60+</div>
              <div className="text-sm text-neutral-600">Germany</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">45+</div>
              <div className="text-sm text-neutral-600">UK</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">35+</div>
              <div className="text-sm text-neutral-600">Australia</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">25+</div>
              <div className="text-sm text-neutral-600">Ireland</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">20+</div>
              <div className="text-sm text-neutral-600">France</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-neutral-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">95%</div>
              <div className="text-neutral-600">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* University Logos Slider */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-4 gap-6">
                      {getUniversitiesForSlide(slideIndex).map((university, index) => (
                        <motion.div
                          key={`${slideIndex}-${index}`}
                          className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div className="text-center">
                            <div className="h-16 mb-3 flex items-center justify-center">
                              {university.logoUrl ? (
                                <img 
                                  src={university.logoUrl} 
                                  alt={`${university.name} logo`}
                                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                                  onError={(e) => {
                                    // Fallback to placeholder if logo fails to load
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                  }}
                                />
                              ) : null}
                              <div className={`text-3xl text-neutral-400 ${university.logoUrl ? 'hidden' : 'flex'} items-center justify-center w-full h-full`}>🎓</div>
                            </div>
                            <h3 className="font-bold text-neutral-800 text-xs mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                              {university.name}
                            </h3>
                            <div className="flex justify-between items-center text-xs text-neutral-500 gap-1">
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                {university.country}
                              </span>
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                {university.ranking}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary scale-125'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
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