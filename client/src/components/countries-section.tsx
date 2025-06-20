import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, MapPin, Users, GraduationCap, ChevronLeft, ChevronRight, Star, Award, BookOpen } from "lucide-react";

interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  description: string;
  topUniversities: string[];
  studentCount: number;
  popularPrograms: string[];
  averageCost: string;
  scholarships: number;
  visaSuccessRate: number;
  workRights: string;
  featured: boolean;
  continent: string;
  highlights: string[];
  studyDuration: string;
  language: string;
  climate: string;
  currency: string;
  timeZone: string;
}

const countries: Country[] = [
  {
    id: "1",
    name: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    description: "Home to world-renowned universities like Oxford and Cambridge, the UK offers diverse academic programs with rich cultural heritage and excellent post-study work opportunities.",
    topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London", "London School of Economics", "University College London"],
    studentCount: 1250,
    popularPrograms: ["Business Administration", "Engineering", "Medicine", "Law", "Computer Science"],
    averageCost: "£20,000 - £45,000/year",
    scholarships: 85,
    visaSuccessRate: 95,
    workRights: "2-year post-study work visa",
    featured: true,
    continent: "Europe",
    highlights: ["World's oldest universities", "Rich academic tradition", "Multicultural environment", "Strong industry connections"],
    studyDuration: "3 years (Bachelor's), 1 year (Master's)",
    language: "English",
    climate: "Temperate oceanic",
    currency: "British Pound (GBP)",
    timeZone: "GMT/BST"
  },
  {
    id: "2",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    description: "Known for its welcoming immigration policies, high-quality education system, and beautiful landscapes. Canada offers excellent opportunities for international students with pathways to permanent residence.",
    topUniversities: ["University of Toronto", "McGill University", "University of British Columbia", "University of Waterloo", "McMaster University"],
    studentCount: 980,
    popularPrograms: ["Computer Science", "Engineering", "Business", "Healthcare", "Environmental Studies"],
    averageCost: "CAD 15,000 - 35,000/year",
    scholarships: 120,
    visaSuccessRate: 92,
    workRights: "3-year post-graduation work permit",
    featured: true,
    continent: "North America",
    highlights: ["Immigration-friendly policies", "High quality of life", "Diverse culture", "Strong job market"],
    studyDuration: "4 years (Bachelor's), 1-2 years (Master's)",
    language: "English & French",
    climate: "Continental",
    currency: "Canadian Dollar (CAD)",
    timeZone: "Multiple zones"
  },
  {
    id: "3",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    description: "Offering world-class education in a relaxed, friendly environment with stunning natural beauty. Australia provides excellent research opportunities and a vibrant student life.",
    topUniversities: ["University of Melbourne", "Australian National University", "University of Sydney", "University of Queensland", "Monash University"],
    studentCount: 750,
    popularPrograms: ["Engineering", "Medicine", "Business", "Information Technology", "Environmental Science"],
    averageCost: "AUD 20,000 - 50,000/year",
    scholarships: 95,
    visaSuccessRate: 90,
    workRights: "2-4 year post-study work visa",
    featured: true,
    continent: "Oceania",
    highlights: ["High standard of living", "Research excellence", "Beautiful landscapes", "Safe environment"],
    studyDuration: "3-4 years (Bachelor's), 1-2 years (Master's)",
    language: "English",
    climate: "Varied - tropical to temperate",
    currency: "Australian Dollar (AUD)",
    timeZone: "Multiple zones"
  },
  {
    id: "4",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    description: "Home to the world's top universities and cutting-edge research facilities. The US offers unparalleled academic diversity and innovation opportunities across all fields of study.",
    topUniversities: ["Harvard University", "MIT", "Stanford University", "Yale University", "Princeton University"],
    studentCount: 2100,
    popularPrograms: ["Computer Science", "Business", "Engineering", "Medicine", "Liberal Arts"],
    averageCost: "$25,000 - $70,000/year",
    scholarships: 200,
    visaSuccessRate: 88,
    workRights: "1-3 year OPT program",
    featured: false,
    continent: "North America",
    highlights: ["Top-ranked universities", "Innovation hub", "Diverse programs", "Research opportunities"],
    studyDuration: "4 years (Bachelor's), 2 years (Master's)",
    language: "English",
    climate: "Varied continental",
    currency: "US Dollar (USD)",
    timeZone: "Multiple zones"
  },
  {
    id: "5",
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    description: "Known for its strong engineering programs and low tuition fees. Germany offers excellent technical education with a focus on practical application and industry partnerships.",
    topUniversities: ["Technical University of Munich", "Ludwig Maximilian University", "Heidelberg University", "Humboldt University", "RWTH Aachen"],
    studentCount: 420,
    popularPrograms: ["Engineering", "Computer Science", "Business", "Medicine", "Automotive Technology"],
    averageCost: "€0 - €20,000/year",
    scholarships: 75,
    visaSuccessRate: 85,
    workRights: "18-month job search visa",
    featured: false,
    continent: "Europe",
    highlights: ["Low tuition fees", "Strong economy", "Engineering excellence", "Central European location"],
    studyDuration: "3-4 years (Bachelor's), 2 years (Master's)",
    language: "German (English programs available)",
    climate: "Temperate continental",
    currency: "Euro (EUR)",
    timeZone: "CET/CEST"
  },
  {
    id: "6",
    name: "New Zealand",
    code: "NZ",
    flag: "🇳🇿",
    description: "Offering high-quality education in a safe, peaceful environment with stunning natural beauty. Known for its innovative teaching methods and strong support for international students.",
    topUniversities: ["University of Auckland", "University of Otago", "Victoria University of Wellington", "University of Canterbury", "Massey University"],
    studentCount: 180,
    popularPrograms: ["Agriculture", "Tourism", "Engineering", "Medicine", "Environmental Studies"],
    averageCost: "NZD 22,000 - 40,000/year",
    scholarships: 45,
    visaSuccessRate: 93,
    workRights: "3-year post-study work visa",
    featured: false,
    continent: "Oceania",
    highlights: ["Safe environment", "Natural beauty", "Quality education", "Adventure opportunities"],
    studyDuration: "3 years (Bachelor's), 1-2 years (Master's)",
    language: "English",
    climate: "Temperate maritime",
    currency: "New Zealand Dollar (NZD)",
    timeZone: "NZST/NZDT"
  }
];

const getCountryGradient = (country: string) => {
  switch (country) {
    case 'United Kingdom':
      return 'from-blue-600 to-red-600';
    case 'Canada':
      return 'from-red-500 to-red-600';
    case 'Australia':
      return 'from-blue-500 to-green-500';
    case 'United States':
      return 'from-blue-600 to-red-500';
    case 'Germany':
      return 'from-red-500 to-yellow-500';
    case 'New Zealand':
      return 'from-blue-500 to-black';
    default:
      return 'from-primary to-secondary';
  }
};

export default function CountriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [viewMode, setViewMode] = useState<'featured' | 'all'>('featured');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredCountries = countries.filter(country => country.featured);
  const currentCountries = viewMode === 'featured' ? featuredCountries : countries;
  const totalSlides = Math.ceil(currentCountries.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const totalStudents = countries.reduce((sum, country) => sum + country.studentCount, 0);
  const totalScholarships = countries.reduce((sum, country) => sum + country.scholarships, 0);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-6 flex items-center justify-center">
            <Globe className="mr-4 text-primary" size={40} />
            Study Destinations We Cover
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover world-class education opportunities across multiple countries. 
            We guide students to the best universities and programs worldwide.
          </p>
          
          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{countries.length}</div>
              <div className="text-neutral-600">Countries</div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{totalStudents.toLocaleString()}</div>
              <div className="text-neutral-600">Students Placed</div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{totalScholarships}</div>
              <div className="text-neutral-600">Scholarships</div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-neutral-600">Success Rate</div>
            </motion.div>
          </div>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white rounded-lg p-1 shadow-lg border">
            <button
              onClick={() => {
                setViewMode('featured');
                setCurrentSlide(0);
              }}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                viewMode === 'featured'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-neutral-600 hover:text-primary'
              }`}
            >
              Popular Destinations
            </button>
            <button
              onClick={() => {
                setViewMode('all');
                setCurrentSlide(0);
              }}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                viewMode === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-neutral-600 hover:text-primary'
              }`}
            >
              All Countries
            </button>
          </div>
        </motion.div>

        {/* Countries Slider */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-8">
                      {currentCountries.slice(slideIndex * 3, slideIndex * 3 + 3).map((country, index) => (
                        <motion.div
                          key={country.id}
                          className="bg-gradient-to-br from-white to-gray-50 rounded-xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -5 }}
                          onClick={() => setSelectedCountry(country)}
                        >
                          {/* Country Header */}
                          <div className={`relative h-48 bg-gradient-to-br ${getCountryGradient(country.name)} overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20" />
                            
                            {/* Flag and Country Name */}
                            <div className="absolute top-6 left-6 text-white">
                              <div className="text-4xl mb-2">{country.flag}</div>
                              <h3 className="text-2xl font-bold">{country.name}</h3>
                              <p className="text-white/90 text-sm">{country.continent}</p>
                            </div>

                            {/* Success Rate */}
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                              <div className="text-lg font-bold text-neutral-800">{country.visaSuccessRate}%</div>
                              <div className="text-xs text-neutral-600">Success Rate</div>
                            </div>

                            {/* Student Count */}
                            <div className="absolute bottom-6 left-6 text-white">
                              <div className="flex items-center">
                                <Users className="mr-2" size={20} />
                                <span className="text-lg font-semibold">{country.studentCount.toLocaleString()} Students</span>
                              </div>
                            </div>

                            {/* Featured Badge */}
                            {country.featured && (
                              <div className="absolute bottom-6 right-6">
                                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                  <Star className="mr-1" size={12} />
                                  Popular
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Country Content */}
                          <div className="p-6">
                            {/* Description */}
                            <p className="text-neutral-600 mb-4 line-clamp-3">
                              {country.description}
                            </p>

                            {/* Key Info */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center p-3 bg-blue-50 rounded-lg">
                                <div className="text-lg font-bold text-primary">{country.scholarships}</div>
                                <div className="text-xs text-neutral-600">Scholarships</div>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-sm font-bold text-green-600">{country.averageCost}</div>
                                <div className="text-xs text-neutral-600">Annual Cost</div>
                              </div>
                            </div>

                            {/* Top Programs */}
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-neutral-800 mb-2">Popular Programs</h4>
                              <div className="flex flex-wrap gap-1">
                                {country.popularPrograms.slice(0, 3).map((program, idx) => (
                                  <span key={idx} className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs">
                                    {program}
                                  </span>
                                ))}
                                {country.popularPrograms.length > 3 && (
                                  <span className="text-primary text-xs font-medium">+{country.popularPrograms.length - 3} more</span>
                                )}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedCountry(country);
                                }}
                                className="flex-1 border border-primary text-primary py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
                              >
                                View Details
                              </button>
                              <button className="flex-1 bg-primary text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300">
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10"
                >
                  <ChevronLeft className="text-neutral-600" size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10"
                >
                  <ChevronRight className="text-neutral-600" size={24} />
                </button>
              </>
            )}

            {/* Slide Indicators */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-6 space-x-3">
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
            )}
          </div>
        </motion.div>

        {/* Country Details Modal */}
        {selectedCountry && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative p-8 text-white bg-gradient-to-br ${getCountryGradient(selectedCountry.name)}`}>
                <button
                  onClick={() => setSelectedCountry(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  ✕
                </button>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-6xl mb-4">{selectedCountry.flag}</div>
                    <h2 className="text-4xl font-bold mb-2">{selectedCountry.name}</h2>
                    <p className="text-white/90 text-lg mb-4">{selectedCountry.description}</p>
                    <div className="flex items-center text-white/80">
                      <MapPin className="mr-2" size={16} />
                      {selectedCountry.continent}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Country Overview */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                        <Globe className="mr-2 text-primary" />
                        Country Overview
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-neutral-600">Language</div>
                          <div className="font-semibold">{selectedCountry.language}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-neutral-600">Currency</div>
                          <div className="font-semibold">{selectedCountry.currency}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-neutral-600">Climate</div>
                          <div className="font-semibold">{selectedCountry.climate}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-neutral-600">Time Zone</div>
                          <div className="font-semibold">{selectedCountry.timeZone}</div>
                        </div>
                      </div>
                    </div>

                    {/* Key Statistics */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                        <Award className="mr-2 text-primary" />
                        Key Statistics
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-neutral-700">Students Placed</span>
                          <span className="font-bold text-primary">{selectedCountry.studentCount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-neutral-700">Visa Success Rate</span>
                          <span className="font-bold text-green-600">{selectedCountry.visaSuccessRate}%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                          <span className="text-neutral-700">Available Scholarships</span>
                          <span className="font-bold text-yellow-600">{selectedCountry.scholarships}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span className="text-neutral-700">Annual Cost Range</span>
                          <span className="font-bold text-purple-600">{selectedCountry.averageCost}</span>
                        </div>
                      </div>
                    </div>

                    {/* Work Rights */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4">Work Rights</h3>
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                        <p className="text-neutral-700 font-medium">{selectedCountry.workRights}</p>
                        <p className="text-sm text-neutral-600 mt-2">Study Duration: {selectedCountry.studyDuration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Top Universities */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                        <GraduationCap className="mr-2 text-primary" />
                        Top Universities
                      </h3>
                      <ul className="space-y-2">
                        {selectedCountry.topUniversities.map((university, index) => (
                          <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="font-medium text-neutral-800">{university}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular Programs */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                        <BookOpen className="mr-2 text-primary" />
                        Popular Programs
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedCountry.popularPrograms.map((program, index) => (
                          <div key={index} className="bg-neutral-100 text-neutral-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                            {program}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Country Highlights */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4">Why Choose {selectedCountry.name}?</h3>
                      <ul className="space-y-2">
                        {selectedCountry.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-500 mr-3">✓</span>
                            <span className="text-neutral-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Section */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-neutral-800">Ready to Start Your Journey?</h4>
                      <p className="text-neutral-600">Get personalized guidance for studying in {selectedCountry.name}</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                        Download Guide
                      </button>
                      <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Explore Your Dream Destination
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Connect with our expert counselors to find the perfect country and university for your academic journey. 
              We'll guide you through every step of the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Compare Countries
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}