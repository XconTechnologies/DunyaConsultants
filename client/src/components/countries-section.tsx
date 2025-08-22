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
    id: 5,
    name: "Germany",
    code: "DE",
    continent: "Europe",
    description: "Access world-class engineering and technical programs with low tuition fees and strong industry connections.",
    universities: ["Technical University Munich", "Heidelberg University", "Humboldt University"],
    visaSuccessRate: 92,
    scholarships: "35+",
    studentCount: "8000",
    averageCost: "€15,000"
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
  const [activeTab, setActiveTab] = useState<'popular' | 'all'>('popular');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleTabHover = (tabName: 'popular' | 'all', isHovering: boolean) => {
    const element = document.getElementById(`tab-${tabName}`);
    if (element && activeTab !== tabName) {
      element.style.color = isHovering ? '#1D50C9' : '#6b7280';
    }
  };
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationCountry, setApplicationCountry] = useState<typeof countries[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const isGridView = activeTab === 'all';
  const displayCountries = isGridView ? countries : popularCountries;
  const totalSlides = Math.ceil(displayCountries.length / 4);

  const nextSlide = () => {
    // Mobile: single card navigation, Desktop: multi-card navigation
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setCurrentSlide((prev) => (prev + 1) % displayCountries.length);
    } else {
      if (isGridView) {
        setCurrentSlide((prev) => (prev + 1) % displayCountries.length);
      } else {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }
  };

  const prevSlide = () => {
    // Mobile: single card navigation, Desktop: multi-card navigation
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setCurrentSlide((prev) => (prev - 1 + displayCountries.length) % displayCountries.length);
    } else {
      if (isGridView) {
        setCurrentSlide((prev) => (prev - 1 + displayCountries.length) % displayCountries.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    }
  };

  const getCurrentCountries = () => {
    const start = currentSlide * 4;
    return displayCountries.slice(start, start + 4);
  };

  const getCurrentMobileCard = () => {
    return displayCountries[currentSlide] || displayCountries[0];
  };

  const handleViewDetails = (country: typeof countries[0]) => {
    setSelectedCountry(country);
  };

  const handleApplyNow = (country: typeof countries[0]) => {
    setApplicationCountry(country);
    setShowApplicationForm(true);
  };

  // Reset slide when switching tabs
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  const renderCountryCard = (country: typeof countries[0], index: number, keyPrefix = '') => (
    <motion.div
      key={keyPrefix ? `${keyPrefix}-${country.id}` : country.id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-[#1D50C9] transition-all duration-300 group-hover:bg-[#1e4db5]" />
        <div className="absolute top-4 left-4">
          <div className="w-12 h-8 rounded-md overflow-hidden shadow-lg border-2 border-white/30">
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
        </div>
        <div className="absolute bottom-4 left-4 country-card-header" data-country-card>
          <h3 className="text-xl font-bold" style={{ color: 'white !important', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{country.name}</h3>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
              Study Abroad
            </span>{" "}
            <span className="text-gray-800">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore world-class universities and discover your perfect study destination. 
            From Ivy League institutions to innovative European schools, find the right fit for your academic journey.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-lg p-2 shadow-lg border border-gray-200">
            <Button
              id="tab-popular"
              onClick={() => setActiveTab('popular')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'popular' 
                  ? 'text-white shadow-sm' 
                  : 'bg-transparent text-gray-600'
              }`}
              style={activeTab === 'popular' ? { backgroundColor: '#1D50C9', color: 'white' } : { color: '#6b7280' }}
              variant="ghost"
              onMouseEnter={() => handleTabHover('popular', true)}
              onMouseLeave={() => handleTabHover('popular', false)}
            >
              Popular Countries
            </Button>
            <Button
              id="tab-all"
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'all' 
                  ? 'text-white shadow-sm' 
                  : 'bg-transparent text-gray-600'
              }`}
              style={activeTab === 'all' ? { backgroundColor: '#1D50C9', color: 'white' } : { color: '#6b7280' }}
              variant="ghost"
              onMouseEnter={() => handleTabHover('all', true)}
              onMouseLeave={() => handleTabHover('all', false)}
            >
              All Destinations
            </Button>
          </div>
        </motion.div>

        {/* Content Based on Active Tab */}
        {activeTab === 'all' ? (
          /* All Countries Grid/Single Card View */
          <div className="relative">
            {/* Desktop: Grid View */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-16">
              {displayCountries.map((country, index) => renderCountryCard(country, index))}
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

            {/* Mobile: Single Card View */}
            <div className="md:hidden px-12">
              <motion.div
                key={`mobile-all-${currentSlide}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {renderCountryCard(getCurrentMobileCard(), 0, 'mobile-all')}
              </motion.div>
            </div>

            {/* Mobile Indicators */}
            <div className="md:hidden flex justify-center mt-6 gap-2">
              {displayCountries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-6 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={index === currentSlide ? { backgroundColor: '#1D50C9' } : {}}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Popular Countries Carousel/Single Card View */
          <div className="relative">
            {/* Desktop: Carousel */}
            <div className="hidden md:block overflow-hidden px-16">
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                key={`desktop-popular-${currentSlide}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {getCurrentCountries().map((country, index) => 
                  renderCountryCard(country, index, `popular-slide-${currentSlide}`)
                )}
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

            {/* Mobile: Single Card View */}
            <div className="md:hidden px-12">
              <motion.div
                key={`mobile-popular-${currentSlide}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {renderCountryCard(getCurrentMobileCard(), 0, 'mobile-popular')}
              </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {/* Desktop indicators */}
              <div className="hidden md:flex">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'scale-110' 
                        : 'bg-blue-200 hover:bg-white'
                    }`}
                    style={index === currentSlide ? { backgroundColor: '#1D50C9' } : {}}
                  />
                ))}
              </div>
              
              {/* Mobile indicators */}
              <div className="md:hidden flex">
                {displayCountries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 mx-1 ${
                      index === currentSlide 
                        ? 'w-6 scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    style={index === currentSlide ? { backgroundColor: '#1D50C9' } : {}}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
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