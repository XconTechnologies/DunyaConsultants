import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import ApplicationForm from "@/components/ApplicationForm";

// Country codes mapping for flags
const countryCodesMap = {
  "United States": "US",
  "United Kingdom": "GB", 
  "Canada": "CA",
  "Australia": "AU",
  "Germany": "DE",
  "Finland": "FI",
  "Belgium": "BE",
  "Turkey": "TR"
};

// Sample countries data
const countries = [
  {
    id: 1,
    name: "United States",
    code: "US",
    continent: "North America",
    description: "Home to world-renowned universities like Harvard, MIT, and Stanford. Experience diverse academic programs and cutting-edge research opportunities.",
    universities: ["Harvard University", "Stanford University", "MIT", "Yale University"],
    visaSuccessRate: 85,
    scholarships: "25+",
    studentCount: "15000",
    averageCost: "$45,000"
  },
  {
    id: 2,
    name: "United Kingdom",
    code: "GB",
    continent: "Europe", 
    description: "Study in historic institutions like Oxford and Cambridge. Benefit from shorter degree programs and rich cultural heritage.",
    universities: ["Oxford University", "Cambridge University", "Imperial College", "UCL"],
    visaSuccessRate: 90,
    scholarships: "30+",
    studentCount: "12000",
    averageCost: "£35,000"
  },
  {
    id: 3,
    name: "Canada",
    code: "CA",
    continent: "North America",
    description: "Known for welcoming international students with excellent post-graduation work opportunities and pathway to permanent residency.",
    universities: ["University of Toronto", "McGill University", "UBC", "Waterloo"],
    visaSuccessRate: 95,
    scholarships: "20+",
    studentCount: "18000",
    averageCost: "CAD 35,000"
  },
  {
    id: 4,
    name: "Australia",
    code: "AU",
    continent: "Oceania",
    description: "Enjoy high-quality education in a multicultural environment with beautiful landscapes and excellent research facilities.",
    universities: ["University of Melbourne", "Sydney University", "ANU", "UNSW"],
    visaSuccessRate: 88,
    scholarships: "15+",
    studentCount: "14000",
    averageCost: "AUD 40,000"
  },
  {
    id: 6,
    name: "Finland",
    code: "FI",
    continent: "Europe",
    description: "Experience innovative education system with no tuition fees for EU students and excellent quality of life.",
    universities: ["University of Helsinki", "Aalto University", "University of Turku"],
    visaSuccessRate: 89,
    scholarships: "10+",
    studentCount: "3000",
    averageCost: "€12,000"
  },
  {
    id: 7,
    name: "Belgium",
    code: "BE",
    continent: "Europe",
    description: "Study in the heart of Europe with access to EU opportunities and multilingual academic environment.",
    universities: ["KU Leuven", "Ghent University", "Free University Brussels"],
    visaSuccessRate: 87,
    scholarships: "12+",
    studentCount: "2500",
    averageCost: "€8,000"
  },
  {
    id: 8,
    name: "Turkey",
    code: "TR",
    continent: "Asia/Europe",
    description: "Bridge between East and West offering unique cultural experience with affordable education costs.",
    universities: ["Bosphorus University", "Middle East Technical University", "Istanbul University"],
    visaSuccessRate: 85,
    scholarships: "18+",
    studentCount: "5000",
    averageCost: "$8,000"
  }
];

const popularCountries = countries.slice(0, 4);

export default function CountriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationCountry, setApplicationCountry] = useState<typeof countries[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const displayCountries = countries; // Show all countries
  const cardsPerSlide = 4; // Show 4 cards at once on desktop
  const totalSlides = Math.ceil(displayCountries.length / cardsPerSlide);

  const nextSlide = () => {
    // Mobile: single card navigation, Desktop: 4-card group navigation
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setCurrentSlide((prev) => (prev + 1) % displayCountries.length);
    } else {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    // Mobile: single card navigation, Desktop: 4-card group navigation
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setCurrentSlide((prev) => (prev - 1 + displayCountries.length) % displayCountries.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const getCurrentCard = () => {
    return displayCountries[currentSlide] || displayCountries[0];
  };

  const getCurrentCards = () => {
    // For desktop: show 4 cards per slide
    const start = currentSlide * cardsPerSlide;
    return displayCountries.slice(start, start + cardsPerSlide);
  };

  const handleViewDetails = (country: typeof countries[0]) => {
    // Navigate to study abroad pages
    const countryRoutes: { [key: string]: string } = {
      "United States": "/study-abroad/usa",
      "United Kingdom": "/study-abroad/uk", 
      "Canada": "/study-abroad/canada",
      "Australia": "/study-abroad/australia",
      "Finland": "/study-abroad/finland",
      "Belgium": "/study-abroad/belgium",
      "Turkey": "/study-abroad/turkey"
    };
    
    const route = countryRoutes[country.name];
    if (route) {
      window.location.href = route;
    } else {
      // Fallback to modal for countries without dedicated pages
      setSelectedCountry(country);
    }
  };

  const handleApplyNow = (country: typeof countries[0]) => {
    setApplicationCountry(country);
    setShowApplicationForm(true);
  };

  // Update carousel on window resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(0); // Reset to first slide on resize
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCountryCard = (country: typeof countries[0], index: number, keyPrefix = '') => (
    <motion.div
      key={keyPrefix ? `${keyPrefix}-${country.id}` : country.id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full absolute inset-0">
          <ReactCountryFlag 
            countryCode={countryCodesMap[country.name as keyof typeof countryCodesMap] || country.code} 
            svg 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
        <div className="absolute bottom-4 left-4 country-card-header z-10" data-country-card>
          <h3 className="text-xl font-bold" style={{ color: 'white !important', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{country.name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {country.description}
        </p>
        
        <div className="flex gap-2 mb-4">
          <Button
            onClick={() => handleViewDetails(country)}
            variant="outline"
            size="sm"
            className="flex-1 hover:bg-white"
            style={{ color: '#1D50C9', borderColor: '#1D50C9' }}
          >
            View Details
          </Button>
          <ApplicationForm country={country.name}>
            <Button
              size="sm"
              className="flex-1 hover:scale-105 transition-all duration-200"
              style={{ 
                backgroundColor: '#1D50C9',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#1D50C9';
                e.currentTarget.style.border = '1px solid #1D50C9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1D50C9';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.border = 'none';
              }}
            >
              Apply Now
            </Button>
          </ApplicationForm>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D50C9] mb-6">
            Study Abroad Destinations
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore world-class universities abroad and discover your perfect study destination with our overseas education consultants Pakistan. 
            From Ivy League institutions to innovative European schools, find the right fit for your academic journey and visa application support.
          </p>
        </motion.div>

        {/* Single Carousel for All Destinations */}
        <div className="relative">
          {/* Desktop: 4 Cards View */}
          <div className="hidden md:block overflow-hidden px-16">
            <motion.div
              key={`desktop-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {getCurrentCards().map((country, index) => 
                renderCountryCard(country, index, `desktop-slide-${currentSlide}`)
              )}
            </motion.div>
          </div>

          {/* Mobile: Single Card View */}
          <div className="md:hidden px-12">
            <motion.div
              key={`mobile-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {renderCountryCard(getCurrentCard(), 0, `mobile-slide-${currentSlide}`)}
            </motion.div>
          </div>

          {/* Navigation Arrows - Outside Cards */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-all duration-200 p-2"
            style={{ color: "#1D50C9" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-all duration-200 p-2"
            style={{ color: "#1D50C9" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {/* Desktop indicators - show number of slides (groups of 4) */}
            <div className="hidden md:flex">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'scale-110' 
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                  style={index === currentSlide ? { backgroundColor: '#1D50C9' } : {}}
                />
              ))}
            </div>
            
            {/* Mobile indicators - show individual cards */}
            <div className="md:hidden flex">
              {displayCountries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'scale-110' 
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                  style={index === currentSlide ? { backgroundColor: '#1D50C9' } : {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Country Details Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-6">
              <button
                onClick={() => setSelectedCountry(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-12 rounded-md overflow-hidden shadow-lg border-2 border-gray-300">
                  <ReactCountryFlag 
                    countryCode={countryCodesMap[selectedCountry.name as keyof typeof countryCodesMap] || selectedCountry.code} 
                    svg 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedCountry.name}</h3>
                  <p className="text-gray-600">{selectedCountry.continent}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">About</h4>
                  <p className="text-gray-600">{selectedCountry.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Top Universities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedCountry.universities.map((university, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#1D50C9] rounded-full"></div>
                        <span className="text-gray-700 font-medium">{university}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#1845B3]">{selectedCountry.visaSuccessRate}%</div>
                    <div className="text-sm text-gray-600">Visa Success</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1845B3]">{selectedCountry.scholarships}</div>
                    <div className="text-sm text-gray-600">Scholarships</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1845B3]">{selectedCountry.studentCount}+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1845B3]">{selectedCountry.averageCost}</div>
                    <div className="text-sm text-gray-600">Avg. Cost</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <ApplicationForm country={selectedCountry.name}>
                  <Button
                    className="flex-1"
                    style={{ backgroundColor: '#1D50C9' }}
                  >
                    Apply Now
                  </Button>
                </ApplicationForm>
                <Button
                  variant="outline"
                  onClick={() => setSelectedCountry(null)}
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}