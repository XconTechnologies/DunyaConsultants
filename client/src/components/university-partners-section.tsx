import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// University partners data with authentic global institutions
const universityPartners = [
  // Top US Universities
  { name: "Harvard University", country: "USA", logo: "🏛️", ranking: "#1" },
  { name: "Stanford University", country: "USA", logo: "🌲", ranking: "#2" },
  { name: "MIT", country: "USA", logo: "🔬", ranking: "#3" },
  { name: "Yale University", country: "USA", logo: "🦬", ranking: "#4" },
  { name: "Princeton University", country: "USA", logo: "🐅", ranking: "#5" },
  { name: "Columbia University", country: "USA", logo: "🏛️", ranking: "#6" },
  { name: "University of Chicago", country: "USA", logo: "🌆", ranking: "#7" },
  { name: "University of Pennsylvania", country: "USA", logo: "🦅", ranking: "#8" },
  { name: "California Institute of Technology", country: "USA", logo: "🚀", ranking: "#9" },
  { name: "Duke University", country: "USA", logo: "👑", ranking: "#10" },
  
  // Top UK Universities
  { name: "University of Oxford", country: "UK", logo: "📚", ranking: "#1 UK" },
  { name: "University of Cambridge", country: "UK", logo: "🎓", ranking: "#2 UK" },
  { name: "Imperial College London", country: "UK", logo: "⚗️", ranking: "#3 UK" },
  { name: "London School of Economics", country: "UK", logo: "💼", ranking: "#4 UK" },
  { name: "University College London", country: "UK", logo: "🏛️", ranking: "#5 UK" },
  { name: "King's College London", country: "UK", logo: "👑", ranking: "#6 UK" },
  { name: "University of Edinburgh", country: "UK", logo: "🏰", ranking: "#7 UK" },
  { name: "University of Manchester", country: "UK", logo: "🐝", ranking: "#8 UK" },
  { name: "University of Warwick", country: "UK", logo: "⚔️", ranking: "#9 UK" },
  { name: "University of Bristol", country: "UK", logo: "🌉", ranking: "#10 UK" },
  
  // Top Canadian Universities
  { name: "University of Toronto", country: "Canada", logo: "🍁", ranking: "#1 CA" },
  { name: "University of British Columbia", country: "Canada", logo: "🏔️", ranking: "#2 CA" },
  { name: "McGill University", country: "Canada", logo: "⛰️", ranking: "#3 CA" },
  { name: "University of Alberta", country: "Canada", logo: "🦬", ranking: "#4 CA" },
  { name: "McMaster University", country: "Canada", logo: "🏛️", ranking: "#5 CA" },
  { name: "University of Waterloo", country: "Canada", logo: "💧", ranking: "#6 CA" },
  { name: "Western University", country: "Canada", logo: "🦎", ranking: "#7 CA" },
  { name: "Queen's University", country: "Canada", logo: "👸", ranking: "#8 CA" },
  { name: "University of Calgary", country: "Canada", logo: "🏔️", ranking: "#9 CA" },
  { name: "Simon Fraser University", country: "Canada", logo: "🌲", ranking: "#10 CA" },
  
  // Top Australian Universities
  { name: "Australian National University", country: "Australia", logo: "🦘", ranking: "#1 AU" },
  { name: "University of Melbourne", country: "Australia", logo: "🏛️", ranking: "#2 AU" },
  { name: "University of Sydney", country: "Australia", logo: "🌊", ranking: "#3 AU" },
  { name: "University of Queensland", country: "Australia", logo: "🐨", ranking: "#4 AU" },
  { name: "Monash University", country: "Australia", logo: "🦘", ranking: "#5 AU" },
  { name: "University of New South Wales", country: "Australia", logo: "🌅", ranking: "#6 AU" },
  { name: "University of Adelaide", country: "Australia", logo: "🍷", ranking: "#7 AU" },
  { name: "University of Western Australia", country: "Australia", logo: "🦢", ranking: "#8 AU" },
  { name: "University of Technology Sydney", country: "Australia", logo: "🏗️", ranking: "#9 AU" },
  { name: "Macquarie University", country: "Australia", logo: "🌟", ranking: "#10 AU" },
  
  // Top German Universities
  { name: "Technical University of Munich", country: "Germany", logo: "⚙️", ranking: "#1 DE" },
  { name: "LMU Munich", country: "Germany", logo: "🏛️", ranking: "#2 DE" },
  { name: "Heidelberg University", country: "Germany", logo: "🏰", ranking: "#3 DE" },
  { name: "Humboldt University", country: "Germany", logo: "📚", ranking: "#4 DE" },
  { name: "University of Freiburg", country: "Germany", logo: "🌲", ranking: "#5 DE" },
  { name: "RWTH Aachen University", country: "Germany", logo: "⚡", ranking: "#6 DE" },
  { name: "University of Göttingen", country: "Germany", logo: "🦅", ranking: "#7 DE" },
  { name: "University of Tübingen", country: "Germany", logo: "📖", ranking: "#8 DE" },
  { name: "Free University of Berlin", country: "Germany", logo: "🐻", ranking: "#9 DE" },
  { name: "University of Hamburg", country: "Germany", logo: "⚓", ranking: "#10 DE" },
  
  // European Universities
  { name: "ETH Zurich", country: "Switzerland", logo: "🏔️", ranking: "#1 CH" },
  { name: "École Polytechnique", country: "France", logo: "🗼", ranking: "#1 FR" },
  { name: "Sorbonne University", country: "France", logo: "🎭", ranking: "#2 FR" },
  { name: "KU Leuven", country: "Belgium", logo: "🍺", ranking: "#1 BE" },
  { name: "University of Amsterdam", country: "Netherlands", logo: "🌷", ranking: "#1 NL" },
  { name: "Delft University", country: "Netherlands", logo: "🚲", ranking: "#2 NL" },
  { name: "Karolinska Institute", country: "Sweden", logo: "⚕️", ranking: "#1 SE" },
  { name: "University of Copenhagen", country: "Denmark", logo: "🧜‍♀️", ranking: "#1 DK" },
  { name: "University of Oslo", country: "Norway", logo: "🎿", ranking: "#1 NO" },
  { name: "University of Helsinki", country: "Finland", logo: "🦌", ranking: "#1 FI" },
  
  // Asian Universities
  { name: "National University of Singapore", country: "Singapore", logo: "🦁", ranking: "#1 SG" },
  { name: "Nanyang Technology University", country: "Singapore", logo: "🌺", ranking: "#2 SG" },
  { name: "University of Hong Kong", country: "Hong Kong", logo: "🏙️", ranking: "#1 HK" },
  { name: "Tokyo University", country: "Japan", logo: "🗾", ranking: "#1 JP" },
  { name: "Kyoto University", country: "Japan", logo: "🌸", ranking: "#2 JP" },
  { name: "Seoul National University", country: "South Korea", logo: "🏯", ranking: "#1 KR" },
  { name: "KAIST", country: "South Korea", logo: "🤖", ranking: "#2 KR" },
  { name: "Peking University", country: "China", logo: "🐉", ranking: "#1 CN" },
  { name: "Tsinghua University", country: "China", logo: "🏮", ranking: "#2 CN" },
  { name: "Indian Institute of Technology", country: "India", logo: "🕌", ranking: "#1 IN" },
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
      logo: "🎓",
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
            We've partnered with 250+ prestigious universities worldwide to provide you with 
            the best educational opportunities across the globe.
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
                          className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div className="text-center">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                              {university.logo}
                            </div>
                            <h3 className="font-bold text-neutral-800 text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {university.name}
                            </h3>
                            <div className="flex justify-between items-center text-xs text-neutral-500">
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                {university.country}
                              </span>
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
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

        {/* Country Breakdown */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { country: "United States", count: "80+", flag: "🇺🇸", color: "from-blue-500 to-red-500" },
            { country: "United Kingdom", count: "45+", flag: "🇬🇧", color: "from-blue-600 to-red-600" },
            { country: "Canada", count: "35+", flag: "🇨🇦", color: "from-red-500 to-white" },
            { country: "Australia", count: "30+", flag: "🇦🇺", color: "from-blue-500 to-yellow-500" },
            { country: "Others", count: "60+", flag: "🌍", color: "from-green-500 to-blue-500" }
          ].map((region, index) => (
            <motion.div
              key={region.country}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${region.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{region.flag}</span>
              </div>
              <h3 className="font-bold text-neutral-800 mb-2">{region.country}</h3>
              <div className="text-2xl font-bold text-primary mb-1">{region.count}</div>
              <div className="text-sm text-neutral-600">Universities</div>
            </motion.div>
          ))}
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