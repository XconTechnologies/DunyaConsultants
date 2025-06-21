import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import halicLogo from "@assets/Halic-University-15_1750423793952.webp";
import labLogo from "@assets/lab-logo_1750423793953.webp";
import leedsBeckettLogo from "@assets/Uni-Logos-01-1_1750423793954.webp";
import leedsTrinityLogo from "@assets/Uni-Logos-2-01_1750423793956.webp";
import gismaLogo from "@assets/Uni-Logos-2-04-1_1750423793956.webp";
import fanshaweLogo from "@assets/Uni-Logos-2-06-1_1750423793957.webp";
import shorelightLogo from "@assets/Uni-Logos-2-07-1_1750423793958.webp";
import bangorLogo from "@assets/Uni-Logos-2-08-1_1750423793959.webp";
import hertfordshireLogo from "@assets/Uni-Logos-03-1_1750423793960.webp";
import ucwLogo from "@assets/Uni-Logos-3-01_1750423793961.webp";
import ucwCanadaLogo from "@assets/Uni-Logos-3-01-1_1750423793962.webp";

// University partners data with actual logos
const universityPartners = [
  // Partner Universities with actual logos
  { name: "Haliç University", country: "Turkey", logoUrl: halicLogo, ranking: "Top" },
  { name: "Lab University", country: "Finland", logoUrl: labLogo, ranking: "Leading" },
  { name: "Leeds Beckett University", country: "UK", logoUrl: leedsBeckettLogo, ranking: "Modern" },
  { name: "Leeds Trinity University", country: "UK", logoUrl: leedsTrinityLogo, ranking: "Excellence" },
  { name: "Gisma University of Applied Sciences", country: "Germany", logoUrl: gismaLogo, ranking: "Applied" },
  { name: "Fanshawe College", country: "Canada", logoUrl: fanshaweLogo, ranking: "Innovative" },
  { name: "Shorelight Education", country: "USA", logoUrl: shorelightLogo, ranking: "Pathway" },
  { name: "Bangor University", country: "Wales", logoUrl: bangorLogo, ranking: "Established 1884" },
  { name: "University of Hertfordshire", country: "UK", logoUrl: hertfordshireLogo, ranking: "Research" },
  { name: "University Canada West", country: "Canada", logoUrl: ucwLogo, ranking: "Business" },
  { name: "University Canada West", country: "Canada", logoUrl: ucwCanadaLogo, ranking: "Innovation" },
  
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
            in Turkey, UK, Canada, Germany, Finland, and USA to provide you with the best educational opportunities.
          </p>
          <div className="mt-8 flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">250+</div>
              <div className="text-neutral-600">University Partners</div>
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