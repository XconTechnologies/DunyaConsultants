import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, MapPin, Users, GraduationCap, ChevronLeft, ChevronRight, Star, Award, BookOpen, Send, DollarSign, Clock, X, CheckCircle, ArrowRight, Plane, Calendar, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
  bgImage: string;
  gradient: string;
  intakeSeason: string;
  livingCost: string;
  applicationDeadline: string;
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
    timeZone: "GMT/BST",
    bgImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-red-600",
    intakeSeason: "September & January",
    livingCost: "£12,000-15,000/year",
    applicationDeadline: "January 15, 2025"
  },
  {
    id: "2",
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
    featured: true,
    continent: "North America",
    highlights: ["Top-ranked universities", "Innovation hub", "Diverse programs", "Research opportunities"],
    studyDuration: "4 years (Bachelor's), 2 years (Master's)",
    language: "English",
    climate: "Varied continental",
    currency: "US Dollar (USD)",
    timeZone: "Multiple zones",
    bgImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
    gradient: "from-blue-700 to-red-600",
    intakeSeason: "Fall & Spring",
    livingCost: "$15,000-20,000/year",
    applicationDeadline: "January 1, 2025"
  },
  {
    id: "3",
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
    timeZone: "Multiple zones",
    bgImage: "https://images.unsplash.com/photo-1503614472-8c93d56cd6b6?w=800&h=600&fit=crop",
    gradient: "from-red-600 to-red-800",
    intakeSeason: "September, January & May",
    livingCost: "CAD 15,000-18,000/year",
    applicationDeadline: "February 1, 2025"
  },
  {
    id: "4",
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
    timeZone: "Multiple zones",
    bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    gradient: "from-green-500 to-yellow-600",
    intakeSeason: "February & July",
    livingCost: "AUD 20,000-25,000/year",
    applicationDeadline: "December 31, 2024"
  },
  {
    id: "5",
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    description: "Europe's economic powerhouse offering world-class engineering programs, low tuition fees, and excellent career opportunities in a culturally rich environment.",
    topUniversities: ["Technical University of Munich", "Humboldt University", "University of Heidelberg", "RWTH Aachen", "University of Freiburg"],
    studentCount: 420,
    popularPrograms: ["Engineering", "Computer Science", "Business", "Medicine", "Natural Sciences"],
    averageCost: "€500 - 3,000/year",
    scholarships: 75,
    visaSuccessRate: 85,
    workRights: "18-month post-graduation visa",
    featured: true,
    continent: "Europe",
    highlights: ["Low tuition fees", "Strong economy", "Research excellence", "Central European location"],
    studyDuration: "3 years (Bachelor's), 2 years (Master's)",
    language: "German & English",
    climate: "Temperate continental",
    currency: "Euro (EUR)",
    timeZone: "CET",
    bgImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
    gradient: "from-black to-red-600",
    intakeSeason: "October & April",
    livingCost: "€800-1,200/month",
    applicationDeadline: "March 15, 2025"
  },
  {
    id: "6",
    name: "New Zealand",
    code: "NZ",
    flag: "🇳🇿",
    description: "Known for its stunning landscapes and high-quality education system. New Zealand offers a safe, welcoming environment with excellent outdoor lifestyle opportunities.",
    topUniversities: ["University of Auckland", "University of Otago", "Victoria University", "University of Canterbury", "Massey University"],
    studentCount: 280,
    popularPrograms: ["Agriculture", "Environmental Science", "Tourism", "Engineering", "Business"],
    averageCost: "NZD 22,000 - 35,000/year",
    scholarships: 45,
    visaSuccessRate: 88,
    workRights: "3-year post-study work visa",
    featured: true,
    continent: "Oceania",
    highlights: ["Safe environment", "Beautiful nature", "Work-life balance", "Pathway to residency"],
    studyDuration: "3 years (Bachelor's), 1-2 years (Master's)",
    language: "English",
    climate: "Temperate maritime",
    currency: "New Zealand Dollar (NZD)",
    timeZone: "NZST",
    bgImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-green-500",
    intakeSeason: "February & July",
    livingCost: "NZD 15,000-20,000/year",
    applicationDeadline: "December 1, 2024"
  },
  {
    id: "7",
    name: "Ireland",
    code: "IE",
    flag: "🇮🇪",
    description: "The Emerald Isle offers a warm welcome, English-speaking environment, and access to top European universities with strong tech industry connections.",
    topUniversities: ["Trinity College Dublin", "University College Dublin", "National University of Ireland", "Dublin City University", "University of Limerick"],
    studentCount: 320,
    popularPrograms: ["Technology", "Business", "Medicine", "Literature", "Engineering"],
    averageCost: "€10,000 - 25,000/year",
    scholarships: 55,
    visaSuccessRate: 82,
    workRights: "2-year post-study visa",
    featured: true,
    continent: "Europe",
    highlights: ["English speaking", "EU access", "Tech hub", "Rich culture"],
    studyDuration: "3-4 years (Bachelor's), 1-2 years (Master's)",
    language: "English & Irish",
    climate: "Temperate oceanic",
    currency: "Euro (EUR)",
    timeZone: "GMT/IST",
    bgImage: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop",
    gradient: "from-green-600 to-orange-500",
    intakeSeason: "September & January",
    livingCost: "€7,000-12,000/year",
    applicationDeadline: "February 1, 2025"
  },
  {
    id: "8",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    description: "Experience world-renowned arts, culture, and cuisine while studying at prestigious institutions in the heart of Europe with excellent academic traditions.",
    topUniversities: ["Sorbonne University", "École Normale Supérieure", "Sciences Po", "HEC Paris", "École Polytechnique"],
    studentCount: 380,
    popularPrograms: ["Arts & Humanities", "Business", "Engineering", "Fashion", "Culinary Arts"],
    averageCost: "€2,770 - 15,000/year",
    scholarships: 65,
    visaSuccessRate: 78,
    workRights: "2-year post-graduation visa",
    featured: true,
    continent: "Europe",
    highlights: ["Cultural richness", "Low tuition fees", "Art & fashion capital", "EU benefits"],
    studyDuration: "3 years (Bachelor's), 2 years (Master's)",
    language: "French & English",
    climate: "Varied continental",
    currency: "Euro (EUR)",
    timeZone: "CET",
    bgImage: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-red-600",
    intakeSeason: "September & February",
    livingCost: "€600-1,200/month",
    applicationDeadline: "April 30, 2025"
  },
  {
    id: "9",
    name: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    description: "Known for innovative teaching methods, high English proficiency, and a multicultural environment. The Netherlands offers excellent opportunities in a progressive society.",
    topUniversities: ["University of Amsterdam", "Delft University", "Eindhoven University", "Leiden University", "Utrecht University"],
    studentCount: 290,
    popularPrograms: ["Engineering", "Business", "International Relations", "Environmental Science", "Design"],
    averageCost: "€8,000 - 20,000/year",
    scholarships: 50,
    visaSuccessRate: 80,
    workRights: "1-year post-study visa",
    featured: true,
    continent: "Europe",
    highlights: ["English programs", "Innovative education", "Bike-friendly", "Progressive culture"],
    studyDuration: "3 years (Bachelor's), 1-2 years (Master's)",
    language: "Dutch & English",
    climate: "Temperate maritime",
    currency: "Euro (EUR)",
    timeZone: "CET",
    bgImage: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop",
    gradient: "from-orange-500 to-blue-600",
    intakeSeason: "September & February",
    livingCost: "€800-1,200/month",
    applicationDeadline: "May 1, 2025"
  },
  {
    id: "10",
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    description: "Asia's education hub offering world-class universities, multicultural environment, and gateway to Asian markets with excellent career prospects.",
    topUniversities: ["National University of Singapore", "Nanyang Technological University", "Singapore Management University", "INSEAD", "Singapore Institute of Technology"],
    studentCount: 180,
    popularPrograms: ["Business", "Technology", "Engineering", "Finance", "Biotechnology"],
    averageCost: "SGD 17,000 - 40,000/year",
    scholarships: 35,
    visaSuccessRate: 90,
    workRights: "1-year post-study visa",
    featured: true,
    continent: "Asia",
    highlights: ["Asian business hub", "Multicultural", "Safe environment", "Strategic location"],
    studyDuration: "3-4 years (Bachelor's), 1-2 years (Master's)",
    language: "English",
    climate: "Tropical",
    currency: "Singapore Dollar (SGD)",
    timeZone: "SGT",
    bgImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
    gradient: "from-red-600 to-white",
    intakeSeason: "August & January",
    livingCost: "SGD 800-1,500/month",
    applicationDeadline: "March 1, 2025"
  },
  {
    id: "11",
    name: "Sweden",
    code: "SE",
    flag: "🇸🇪",
    description: "Renowned for innovation, sustainability, and high quality of life. Sweden offers excellent research opportunities and a progressive academic environment.",
    topUniversities: ["Karolinska Institute", "KTH Royal Institute", "Stockholm University", "University of Gothenburg", "Lund University"],
    studentCount: 150,
    popularPrograms: ["Engineering", "Medicine", "Sustainability", "Design", "Technology"],
    averageCost: "SEK 80,000 - 140,000/year",
    scholarships: 40,
    visaSuccessRate: 85,
    workRights: "6-month post-study visa",
    featured: true,
    continent: "Europe",
    highlights: ["Innovation leader", "Sustainable living", "High quality of life", "Research excellence"],
    studyDuration: "3 years (Bachelor's), 2 years (Master's)",
    language: "Swedish & English",
    climate: "Continental subarctic",
    currency: "Swedish Krona (SEK)",
    timeZone: "CET",
    bgImage: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&h=600&fit=crop",
    gradient: "from-blue-500 to-yellow-400",
    intakeSeason: "August & January",
    livingCost: "SEK 8,000-12,000/month",
    applicationDeadline: "January 15, 2025"
  },
  {
    id: "12",
    name: "Switzerland",
    code: "CH",
    flag: "🇨🇭",
    description: "Home to world-renowned institutions and research facilities. Switzerland offers premium education in a stunning Alpine setting with multilingual advantages.",
    topUniversities: ["ETH Zurich", "University of Zurich", "EPFL", "University of Geneva", "University of Basel"],
    studentCount: 120,
    popularPrograms: ["Engineering", "Finance", "International Relations", "Hospitality", "Science"],
    averageCost: "CHF 1,000 - 4,000/year",
    scholarships: 25,
    visaSuccessRate: 75,
    workRights: "6-month job search visa",
    featured: true,
    continent: "Europe",
    highlights: ["World-class institutions", "Research hub", "Multilingual", "Alpine setting"],
    studyDuration: "3 years (Bachelor's), 2 years (Master's)",
    language: "German, French & English",
    climate: "Continental Alpine",
    currency: "Swiss Franc (CHF)",
    timeZone: "CET",
    bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    gradient: "from-red-600 to-white",
    intakeSeason: "September & February",
    livingCost: "CHF 1,200-2,000/month",
    applicationDeadline: "April 30, 2025"
  }
];

const getCountryColor = (countryName: string): string => {
  return 'bg-gradient-to-br from-white to-gray-100';
};

const getCountryImage = (countryName: string): string => {
  switch (countryName) {
    case 'United Kingdom':
      return 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop'; // London Big Ben
    case 'United States':
      return 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop'; // New York skyline
    case 'Canada':
      return 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop'; // Toronto CN Tower
    case 'Australia':
      return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'; // Sydney Opera House
    case 'Germany':
      return 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop'; // Berlin Brandenburg Gate
    case 'New Zealand':
      return 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop'; // Auckland skyline
    case 'Ireland':
      return 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&h=600&fit=crop'; // Dublin Trinity College
    case 'France':
      return 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop'; // Paris Eiffel Tower
    case 'Netherlands':
      return 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800&h=600&fit=crop'; // Amsterdam canals
    case 'Singapore':
      return 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop'; // Singapore Marina Bay
    case 'Sweden':
      return 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&h=600&fit=crop'; // Stockholm city hall
    case 'Switzerland':
      return 'https://images.unsplash.com/photo-1530841344095-57295d5b073f?w=800&h=600&fit=crop'; // Swiss Alps and city
    default:
      return 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop'; // Generic cityscape
  }
};

export default function CountriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationCountry, setApplicationCountry] = useState<Country | null>(null);
  const [activeTab, setActiveTab] = useState<'popular' | 'all'>('popular');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  // Popular countries (most requested destinations)
  const popularCountries = countries.filter(country => 
    ['United Kingdom', 'United States', 'Canada', 'Australia', 'Germany', 'New Zealand'].includes(country.name)
  );

  const displayCountries = activeTab === 'popular' ? popularCountries : countries;
  const countriesPerSlide = 6;
  const totalSlides = Math.ceil(displayCountries.length / countriesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCountries = () => {
    const start = currentSlide * countriesPerSlide;
    return displayCountries.slice(start, start + countriesPerSlide);
  };

  // For "All Destinations", we show all countries in a grid without carousel
  const isGridView = activeTab === 'all';

  const handleApplyNow = (country: Country) => {
    setApplicationCountry(country);
    setShowApplicationForm(true);
  };

  // Auto-scroll functionality (only for popular countries carousel)
  useEffect(() => {
    if (!isAutoScrollPaused && totalSlides > 1 && activeTab === 'popular') {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000); // Auto-scroll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoScrollPaused, totalSlides, activeTab]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrollPaused(true);
  const handleMouseLeave = () => setIsAutoScrollPaused(false);

  return (
    <>
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute animate-pulse w-2 h-2 bg-white rounded-full top-10 left-10" style={{animationDelay: '0s'}}></div>
          <div className="absolute animate-pulse w-1 h-1 bg-blue-300 rounded-full top-32 left-32" style={{animationDelay: '1s'}}></div>
          <div className="absolute animate-pulse w-3 h-3 bg-white rounded-full top-20 right-20" style={{animationDelay: '2s'}}></div>
          <div className="absolute animate-pulse w-1 h-1 bg-blue-200 rounded-full bottom-20 left-40" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute animate-pulse w-2 h-2 bg-white rounded-full bottom-32 right-32" style={{animationDelay: '3s'}}></div>
        </div>
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-4 cursor-pointer transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">Choose Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Dream Destination
            </span>
          </motion.h2>
          <motion.p 
            className="text-white/80 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover exceptional universities and endless opportunities across our premier study destinations. 
            Start with popular choices or explore all available countries for your international education journey.
          </motion.p>
        </motion.div>

        {/* Country Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('popular')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === 'popular'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Star className="w-4 h-4 inline mr-1" />
                Popular Countries
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4 inline mr-1" />
                All Destinations
              </button>
            </div>
          </div>
        </motion.div>

        {/* Countries Display */}
        <div className="relative mb-16">
          {activeTab === 'popular' ? (
            // Carousel view for Popular Countries
            <div 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {getCurrentCountries().map((country, index) => (
                  <motion.div
                    key={country.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="relative h-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url(${getCountryImage(country.name)})`,
                        }}
                      >
                        {/* Color Overlay */}
                        <div className={`absolute inset-0 ${getCountryColor(country.name)} opacity-90`}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-4 h-full flex flex-col text-gray-900">
                        {/* Header */}
                        <div className="flex items-center justify-end mb-2">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Plane className="w-4 h-4 text-gray-700" />
                          </div>
                        </div>

                        {/* Country Name */}
                        <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {country.name}
                        </h2>
                  
                  {/* University Count */}
                  <div className="mb-3">
                    <div className="bg-gray-100/80 backdrop-blur-sm rounded-lg p-2 text-center border">
                      <GraduationCap className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                      <div className="text-sm font-bold">{country.topUniversities.length}+ Universities</div>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-2 mb-3 flex-grow">
                    <div className="flex items-center text-xs bg-gray-100/60 rounded-lg px-2 py-1.5 border">
                      <DollarSign className="w-3 h-3 mr-1.5 text-green-600" />
                      <span className="truncate font-medium">From {country.averageCost.split(' - ')[0]}</span>
                    </div>
                    <div className="flex items-center text-xs bg-gray-100/60 rounded-lg px-2 py-1.5 border">
                      <Clock className="w-3 h-3 mr-1.5 text-blue-600" />
                      <span className="truncate">{country.intakeSeason}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex space-x-2">
                    <Button 
                      onClick={() => handleApplyNow(country)}
                      className="flex-1 bg-gray-900 text-white hover:bg-gray-800 font-medium py-2 text-xs shadow-md hover:shadow-lg transition-all duration-300 border-0"
                      size="sm"
                    >
                      <Send className="mr-1 h-3 w-3" />
                      Apply Now
                    </Button>
                    <Button 
                      onClick={() => setSelectedCountry(country)}
                      className="flex-1 bg-blue-600 text-white hover:bg-blue-700 py-2 text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 border-0"
                      size="sm"
                    >
                      <BookOpen className="mr-1 h-3 w-3" />
                      More Detail
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
              </motion.div>

              {/* Pagination Dots Only */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-3">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125 shadow-lg' 
                          : 'bg-white/50 hover:bg-white/70 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Grid view for All Destinations
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {countries.map((country, index) => (
                <motion.div
                  key={country.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.1 + (index % 12) * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="relative h-72 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${getCountryImage(country.name)})`,
                      }}
                    >
                      {/* Color Overlay */}
                      <div className={`absolute inset-0 ${getCountryColor(country.name)} opacity-90`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-4 h-full flex flex-col text-gray-900">
                      {/* Header */}
                      <div className="flex items-center justify-end mb-2">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Plane className="w-4 h-4 text-gray-700" />
                        </div>
                      </div>

                      {/* Country Name */}
                      <h2 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {country.name}
                      </h2>
                      
                      {/* Success Rate */}
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm font-medium">{country.visaSuccessRate}% Success Rate</span>
                      </div>
                      
                      {/* Students Count */}
                      <div className="flex items-center mb-3">
                        <Users className="w-4 h-4 text-blue-600 mr-1" />
                        <span className="text-sm">{country.studentCount}+ Students</span>
                      </div>
                      
                      {/* Cost */}
                      <div className="flex items-center mb-3">
                        <DollarSign className="w-4 h-4 text-orange-600 mr-1" />
                        <span className="text-xs text-gray-600">{country.averageCost}</span>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="mt-auto space-y-2">
                        <Button
                          onClick={() => handleApplyNow(country)}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                        >
                          <Send className="mr-1 h-3 w-3" />
                          Apply Now
                        </Button>
                        <Button
                          onClick={() => setSelectedCountry(country)}
                          variant="outline"
                          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-xl transition-all duration-300 text-sm"
                        >
                          <BookOpen className="mr-1 h-3 w-3" />
                          More Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>


      </div>
    </section>

    {/* Application Form Modal */}
    {showApplicationForm && applicationCountry && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowApplicationForm(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative p-6 text-white bg-gradient-to-br ${applicationCountry.gradient}`}>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{applicationCountry.flag}</span>
                  <div>
                    <h2 className="text-2xl font-bold">Apply to Study in {applicationCountry.name}</h2>
                    <p className="text-white/90">Start your application process with expert guidance</p>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name *</label>
                    <input 
                      type="text" 
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address *</label>
                    <input 
                      type="email" 
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number *</label>
                    <input 
                      type="tel" 
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Study Level</label>
                    <select className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select Level</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="postgraduate">Postgraduate</option>
                      <option value="masters">Masters</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Preferred Program</label>
                    <select className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select Program</option>
                      {applicationCountry.popularPrograms.map((program, idx) => (
                        <option key={idx} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Tell us about your goals</label>
                    <textarea 
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                      placeholder="Share your academic goals and career aspirations..."
                    ></textarea>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">What happens next?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Phone className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>Our counselor will contact you within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                      <span>Free assessment of your profile</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <MapPin className="w-4 h-4 text-purple-600" />
                      </div>
                      <span>Personalized study plan for {applicationCountry.name}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className={`flex-1 ${getCountryColor(applicationCountry.name)} hover:opacity-90 text-white font-bold py-4 text-lg shadow-xl`}>
                    <Send className="mr-3 h-5 w-5" />
                    Submit Application
                  </Button>
                  <Button variant="outline" onClick={() => setShowApplicationForm(false)} className="px-8">
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

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
              <div 
                className="relative p-8 text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedCountry.bgImage})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCountry.gradient} opacity-90`}></div>
                <button
                  onClick={() => setSelectedCountry(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-6xl mb-4">{selectedCountry.flag}</div>
                      <h2 className="text-4xl font-bold mb-2">{selectedCountry.name}</h2>
                      <p className="text-white/90 text-lg mb-4">{selectedCountry.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="mr-2 text-blue-600" />
                        Top Universities
                      </h3>
                      <ul className="space-y-2">
                        {selectedCountry.topUniversities.map((university, index) => (
                          <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3">
                              {index + 1}
                            </span>
                            <span className="font-medium text-gray-800">{university}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose {selectedCountry.name}?</h3>
                      <ul className="space-y-2">
                        {selectedCountry.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold text-gray-900">Ready to Start Your Journey?</h4>
                      <p className="text-gray-600">Get personalized guidance for studying in {selectedCountry.name}</p>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => {
                          setSelectedCountry(null);
                          handleApplyNow(selectedCountry);
                        }}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Application Form Modal */}
        {showApplicationForm && applicationCountry && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowApplicationForm(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative p-6 text-white bg-gradient-to-br ${applicationCountry.gradient}`}>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{applicationCountry.flag}</span>
                  <div>
                    <h2 className="text-2xl font-bold">Apply to Study in {applicationCountry.name}</h2>
                    <p className="text-white/90">Start your application process with expert guidance</p>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Program</label>
                    <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Program</option>
                      {applicationCountry.popularPrograms.map((program, idx) => (
                        <option key={idx} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Academic Background</label>
                  <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select your highest qualification</option>
                    <option value="high-school">High School</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Message</label>
                  <textarea 
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                    placeholder="Tell us about your goals and any specific requirements..."
                  ></textarea>
                </div>

                {/* Country-specific Info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Application Details for {applicationCountry.name}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-blue-800">
                    <div>
                      <strong>Application Deadline:</strong> {applicationCountry.applicationDeadline}
                    </div>
                    <div>
                      <strong>Intake Seasons:</strong> {applicationCountry.intakeSeason}
                    </div>
                    <div>
                      <strong>Average Cost:</strong> {applicationCountry.averageCost}
                    </div>
                    <div>
                      <strong>Living Cost:</strong> {applicationCountry.livingCost}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </Button>
                  <Button variant="outline" onClick={() => setShowApplicationForm(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

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
              <div 
                className="relative p-8 text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedCountry.bgImage})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCountry.gradient} opacity-90`}></div>
                <button
                  onClick={() => setSelectedCountry(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="relative z-10">
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
                    <div className="text-right">
                      <Badge className="bg-white/20 text-white border-0 mb-2">
                        {selectedCountry.visaSuccessRate}% Success Rate
                      </Badge>
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
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Globe className="mr-2 text-blue-600" />
                        Country Overview
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Language</div>
                          <div className="font-semibold">{selectedCountry.language}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Currency</div>
                          <div className="font-semibold">{selectedCountry.currency}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Study Duration</div>
                          <div className="font-semibold">{selectedCountry.studyDuration}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Work Rights</div>
                          <div className="font-semibold">{selectedCountry.workRights}</div>
                        </div>
                      </div>
                    </div>

                    {/* Financial Information */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="mr-2 text-green-600" />
                        Financial Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-gray-700">Average Tuition</span>
                          <span className="font-bold text-blue-600">{selectedCountry.averageCost}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-gray-700">Living Cost</span>
                          <span className="font-bold text-green-600">{selectedCountry.livingCost}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span className="text-gray-700">Available Scholarships</span>
                          <span className="font-bold text-purple-600">{selectedCountry.scholarships}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                          <span className="text-gray-700">Climate</span>
                          <span className="font-bold text-orange-600">{selectedCountry.climate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Application Timeline */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="mr-2 text-purple-600" />
                        Application Timeline
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Clock className="w-5 h-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-semibold">Intake Seasons</div>
                            <div className="text-sm text-gray-600">{selectedCountry.intakeSeason}</div>
                          </div>
                        </div>
                        <div className="flex items-center p-3 bg-red-50 rounded-lg">
                          <Calendar className="w-5 h-5 text-red-600 mr-3" />
                          <div>
                            <div className="font-semibold">Application Deadline</div>
                            <div className="text-sm text-red-600">{selectedCountry.applicationDeadline}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Top Universities */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="mr-2 text-blue-600" />
                        Top Universities
                      </h3>
                      <ul className="space-y-2">
                        {selectedCountry.topUniversities.map((university, index) => (
                          <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="font-medium text-gray-800">{university}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular Programs */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="mr-2 text-blue-600" />
                        Popular Programs
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedCountry.popularPrograms.map((program, index) => (
                          <div key={index} className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                            {program}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Country Highlights */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Star className="mr-2 text-yellow-600" />
                        Why Choose {selectedCountry.name}?
                      </h3>
                      <ul className="space-y-2">
                        {selectedCountry.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Section */}
                <div className="mt-8 pt-6 border-t bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold text-gray-900 flex items-center justify-center md:justify-start">
                        <Plane className="mr-2 text-blue-600" />
                        Ready to Start Your Journey?
                      </h4>
                      <p className="text-gray-600 mt-1">Get personalized guidance for studying in {selectedCountry.name}</p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Download Guide
                      </Button>
                      <Button 
                        onClick={() => {
                          setSelectedCountry(null);
                          handleApplyNow(selectedCountry);
                        }}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
    </>
  );
}
