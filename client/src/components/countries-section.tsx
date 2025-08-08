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
    highlights: ["World-class education", "Rich cultural heritage", "Post-study work opportunities", "Global recognition"],
    studyDuration: "3 years (Bachelor's), 1 year (Master's)",
    language: "English",
    climate: "Temperate oceanic",
    currency: "British Pound (GBP)",
    timeZone: "GMT/BST",
    bgImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-blue-800",
    intakeSeason: "September & January",
    livingCost: "£12,000-18,000/year",
    applicationDeadline: "January 15, 2025"
  },
  {
    id: "2",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    description: "The US offers world-class education with cutting-edge research opportunities, diverse campus culture, and strong industry connections across all fields of study.",
    topUniversities: ["Harvard University", "Stanford University", "MIT", "Yale University", "Princeton University"],
    studentCount: 2100,
    popularPrograms: ["Computer Science", "Business", "Engineering", "Medicine", "Psychology"],
    averageCost: "$30,000 - $70,000/year",
    scholarships: 120,
    visaSuccessRate: 88,
    workRights: "1-year OPT (3 years for STEM)",
    featured: true,
    continent: "North America",
    highlights: ["World's top universities", "Research opportunities", "Industry connections", "Diverse culture"],
    studyDuration: "4 years (Bachelor's), 2 years (Master's)",
    language: "English",
    climate: "Varied by region",
    currency: "US Dollar (USD)",
    timeZone: "Multiple zones",
    bgImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-blue-600",
    intakeSeason: "Fall & Spring",
    livingCost: "$15,000-25,000/year",
    applicationDeadline: "December 1, 2024"
  },
  {
    id: "3",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    description: "Canada provides high-quality education with affordable tuition, excellent post-graduation work opportunities, and pathways to permanent residency.",
    topUniversities: ["University of Toronto", "McGill University", "University of British Columbia", "University of Alberta", "McMaster University"],
    studentCount: 980,
    popularPrograms: ["Engineering", "Business", "Health Sciences", "Computer Science", "Environmental Studies"],
    averageCost: "CAD 20,000 - 35,000/year",
    scholarships: 70,
    visaSuccessRate: 92,
    workRights: "3-year post-graduation work permit",
    featured: true,
    continent: "North America",
    highlights: ["Affordable education", "Immigration pathways", "Safe environment", "Bilingual advantage"],
    studyDuration: "4 years (Bachelor's), 2 years (Master's)",
    language: "English & French",
    climate: "Continental",
    currency: "Canadian Dollar (CAD)",
    timeZone: "Multiple zones",
    bgImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-white",
    intakeSeason: "September & January",
    livingCost: "CAD 12,000-18,000/year",
    applicationDeadline: "February 1, 2025"
  },
  {
    id: "4",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    description: "Australia offers world-class education with a focus on practical learning, beautiful campuses, and excellent climate for international students.",
    topUniversities: ["Australian National University", "University of Melbourne", "University of Sydney", "University of Queensland", "Monash University"],
    studentCount: 750,
    popularPrograms: ["Engineering", "Business", "Medicine", "Information Technology", "Environmental Science"],
    averageCost: "AUD 25,000 - 45,000/year",
    scholarships: 60,
    visaSuccessRate: 90,
    workRights: "2-year post-study work visa",
    featured: true,
    continent: "Oceania",
    highlights: ["Practical learning approach", "Beautiful campuses", "Great climate", "Work opportunities"],
    studyDuration: "3 years (Bachelor's), 2 years (Master's)",
    language: "English",
    climate: "Varied - mostly temperate",
    currency: "Australian Dollar (AUD)",
    timeZone: "Multiple zones",
    bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-gold",
    intakeSeason: "February & July",
    livingCost: "AUD 18,000-25,000/year",
    applicationDeadline: "October 31, 2024"
  },
  {
    id: "5",
    name: "Turkey",
    code: "TR",
    flag: "🇹🇷",
    description: "Turkey bridges East and West, offering quality education at affordable costs with rich cultural heritage and growing international recognition.",
    topUniversities: ["Boğaziçi University", "Middle East Technical University", "Istanbul Technical University", "Sabancı University", "Koç University"],
    studentCount: 450,
    popularPrograms: ["Engineering", "Business", "Medicine", "Architecture", "International Relations"],
    averageCost: "$5,000 - 15,000/year",
    scholarships: 50,
    visaSuccessRate: 85,
    workRights: "1-year post-graduation permit",
    featured: true,
    continent: "Europe/Asia",
    highlights: ["Affordable education", "Cultural bridge", "Historical heritage", "Growing economy"],
    studyDuration: "4 years (Bachelor's), 2 years (Master's)",
    language: "Turkish & English",
    climate: "Mediterranean/Continental",
    currency: "Turkish Lira (TRY)",
    timeZone: "TRT",
    bgImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-blue-500",
    intakeSeason: "September & February",
    livingCost: "$3,000-6,000/year",
    applicationDeadline: "July 15, 2025"
  },
  {
    id: "6",
    name: "Dubai",
    code: "AE",
    flag: "🇦🇪",
    description: "Dubai offers world-class education with international university campuses, tax-free living, and excellent career opportunities in a global business hub.",
    topUniversities: ["American University of Dubai", "Dubai Medical College", "Heriot-Watt University Dubai", "University of Wollongong Dubai", "Murdoch University Dubai"],
    studentCount: 320,
    popularPrograms: ["Business", "Engineering", "Medicine", "Hospitality", "Information Technology"],
    averageCost: "$15,000 - 35,000/year",
    scholarships: 40,
    visaSuccessRate: 88,
    workRights: "1-year post-graduation visa",
    featured: true,
    continent: "Asia",
    highlights: ["Tax-free living", "Global business hub", "International campuses", "Modern infrastructure"],
    studyDuration: "4 years (Bachelor's), 2 years (Master's)",
    language: "English & Arabic",
    climate: "Desert",
    currency: "UAE Dirham (AED)",
    timeZone: "GST",
    bgImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    gradient: "from-blue-500 to-blue-600",
    intakeSeason: "September & January",
    livingCost: "$8,000-15,000/year",
    applicationDeadline: "June 30, 2025"
  },
  {
    id: "7",
    name: "Denmark",
    code: "DK",
    flag: "🇩🇰",
    description: "Denmark offers innovative education with strong focus on research, sustainability, and work-life balance in one of the world's happiest countries.",
    topUniversities: ["University of Copenhagen", "Technical University of Denmark", "Aarhus University", "Aalborg University", "Copenhagen Business School"],
    studentCount: 180,
    popularPrograms: ["Engineering", "Design", "Business", "Environmental Science", "Medicine"],
    averageCost: "€0 - 16,000/year",
    scholarships: 45,
    visaSuccessRate: 87,
    workRights: "2-year post-graduation visa",
    featured: true,
    continent: "Europe",
    highlights: ["Free education for EU", "High quality of life", "Innovation focus", "Sustainability"],
    studyDuration: "3 years (Bachelor's), 2 years (Master's)",
    language: "Danish & English",
    climate: "Temperate oceanic",
    currency: "Danish Krone (DKK)",
    timeZone: "CET",
    bgImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-white",
    intakeSeason: "September & February",
    livingCost: "€10,000-15,000/year",
    applicationDeadline: "March 15, 2025"
  },
  {
    id: "8",
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
    gradient: "from-blue-500 to-blue-400",
    intakeSeason: "August & January",
    livingCost: "SEK 8,000-12,000/month",
    applicationDeadline: "January 15, 2025"
  },
  {
    id: "9",
    name: "Ireland",
    code: "IE",
    flag: "🇮🇪",
    description: "Ireland combines excellent education with vibrant culture, English-speaking environment, and strong connections to European and global markets.",
    topUniversities: ["Trinity College Dublin", "University College Dublin", "National University of Ireland", "Dublin City University", "University of Limerick"],
    studentCount: 160,
    popularPrograms: ["Technology", "Business", "Medicine", "Literature", "Engineering"],
    averageCost: "€12,000 - 25,000/year",
    scholarships: 38,
    visaSuccessRate: 82,
    workRights: "2-year post-graduation visa",
    featured: true,
    continent: "Europe",
    highlights: ["English-speaking", "EU membership", "Tech hub", "Cultural heritage"],
    studyDuration: "3-4 years (Bachelor's), 1-2 years (Master's)",
    language: "English & Irish",
    climate: "Temperate oceanic",
    currency: "Euro (EUR)",
    timeZone: "GMT/IST",
    bgImage: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-blue-500",
    intakeSeason: "September & February",
    livingCost: "€8,000-12,000/year",
    applicationDeadline: "May 1, 2025"
  },
  {
    id: "10",
    name: "Finland",
    code: "FI",
    flag: "🇫🇮",
    description: "Nordic education excellence with innovative teaching methods, high-quality universities, and strong focus on equality and sustainability in education.",
    topUniversities: ["University of Helsinki", "Aalto University", "University of Turku", "Tampere University", "University of Oulu"],
    studentCount: 140,
    popularPrograms: ["Engineering", "Technology", "Education", "Environmental Science", "Business"],
    averageCost: "€0 - 12,000/year",
    scholarships: 35,
    visaSuccessRate: 83,
    workRights: "2-year post-graduation visa",
    featured: true,
    continent: "Europe",
    highlights: ["Free education for EU", "Innovation in education", "High quality of life", "English programs"],
    studyDuration: "3 years (Bachelor's), 2 years (Master's)",
    language: "Finnish & English",
    climate: "Continental subarctic",
    currency: "Euro (EUR)",
    timeZone: "EET",
    bgImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-white",
    intakeSeason: "August & January",
    livingCost: "€7,000-12,000/year",
    applicationDeadline: "January 31, 2025"
  },
  {
    id: "11",
    name: "Cyprus",
    code: "CY",
    flag: "🇨🇾",
    description: "Mediterranean island offering affordable European education with EU membership benefits, beautiful climate, and growing reputation in higher education.",
    topUniversities: ["University of Cyprus", "Cyprus University of Technology", "European University Cyprus", "Frederick University", "Neapolis University"],
    studentCount: 120,
    popularPrograms: ["Business", "Engineering", "Medicine", "Tourism", "Information Technology"],
    averageCost: "€8,000 - 15,000/year",
    scholarships: 30,
    visaSuccessRate: 80,
    workRights: "1-year post-graduation visa",
    featured: true,
    continent: "Europe",
    highlights: ["EU membership", "Mediterranean climate", "Affordable education", "English programs"],
    studyDuration: "4 years (Bachelor's), 1-2 years (Master's)",
    language: "Greek & English",
    climate: "Mediterranean",
    currency: "Euro (EUR)",
    timeZone: "EET",
    bgImage: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop",
    gradient: "from-blue-500 to-blue-400",
    intakeSeason: "September & February",
    livingCost: "€4,000-7,000/year",
    applicationDeadline: "July 31, 2025"
  },
  {
    id: "12",
    name: "Kyrgyzstan",
    code: "KG",
    flag: "🇰🇬",
    description: "Central Asian destination offering affordable medical and engineering education with growing international recognition and beautiful mountainous landscapes.",
    topUniversities: ["Kyrgyz State Medical University", "American University of Central Asia", "Kyrgyz National University", "International University of Kyrgyzstan", "Ala-Too International University"],
    studentCount: 200,
    popularPrograms: ["Medicine", "Engineering", "Business", "International Relations", "Information Technology"],
    averageCost: "$2,000 - 5,000/year",
    scholarships: 25,
    visaSuccessRate: 78,
    workRights: "1-year post-graduation visa",
    featured: true,
    continent: "Asia",
    highlights: ["Affordable medical education", "Mountain landscapes", "Growing recognition", "Central Asian hub"],
    studyDuration: "5-6 years (Medicine), 4 years (Bachelor's)",
    language: "Kyrgyz, Russian & English",
    climate: "Continental",
    currency: "Kyrgyzstani Som (KGS)",
    timeZone: "KGT",
    bgImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-blue-500",
    intakeSeason: "September & February",
    livingCost: "$1,500-3,000/year",
    applicationDeadline: "August 15, 2025"
  }
];

const getCountryColor = (countryName: string): string => {
  return 'bg-gradient-to-br from-white to-gray-100';
};

const getCountryImage = (countryName: string): string => {
  switch (countryName) {
    case 'United Kingdom':
      return 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop';
    case 'United States':
      return 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop';
    case 'Canada':
      return 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop';
    case 'Australia':
      return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop';
    case 'Turkey':
      return 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop';
    case 'Dubai':
      return 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop';
    case 'Denmark':
      return 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop';
    case 'Sweden':
      return 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&h=600&fit=crop';
    case 'Ireland':
      return 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&h=600&fit=crop';
    case 'Finland':
      return 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop';
    case 'Cyprus':
      return 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop';
    case 'Kyrgyzstan':
      return 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop';
    default:
      return 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop';
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

  // Popular countries (most requested destinations)
  const popularCountries = countries.filter(country => 
    ['United Kingdom', 'United States', 'Canada', 'Australia', 'Turkey', 'Dubai'].includes(country.name)
  );

  const displayCountries = activeTab === 'popular' ? popularCountries : countries;
  const countriesPerSlide = 4;
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

  const isGridView = activeTab === 'all';

  const handleApplyNow = (country: Country) => {
    setApplicationCountry(country);
    setShowApplicationForm(true);
  };

  // Auto-scrolling disabled - users must use manual arrow navigation


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    educationLevel: '',
    fieldOfStudy: '',
    preferredIntake: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData, applicationCountry);
    setShowApplicationForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      educationLevel: '',
      fieldOfStudy: '',
      preferredIntake: '',
      message: ''
    });
  };

  return (
    <section 
      ref={ref}
      id="study-destinations"
      className="relative py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Rest of the component remains the same */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
            Study Abroad Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from top study destinations worldwide and start your journey to international education excellence.
          </p>
          
          <div className="flex justify-center gap-1 mt-8 bg-gray-100 p-1 rounded-lg w-fit mx-auto">
            <Button
              onClick={() => setActiveTab('popular')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'popular' 
                  ? 'bg-white text-gray-700 shadow-sm' 
                  : 'bg-transparent text-gray-600 hover:text-gray-800'
              }`}
              variant="ghost"
            >
              Popular Countries
            </Button>
            <Button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-transparent text-gray-600 hover:text-gray-800'
              }`}
              variant="ghost"
            >
              All Destinations
            </Button>
          </div>
        </motion.div>

        {/* Grid View for All Countries */}
        {isGridView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayCountries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.bgImage} 
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${country.gradient} opacity-70`} />
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl">{country.flag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{country.name}</h3>
                    <p className="text-sm opacity-90">{country.studentCount}+ students</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {country.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{country.averageCost}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{country.visaSuccessRate}% visa success</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    <Button
                      onClick={() => setSelectedCountry(country)}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => handleApplyNow(country)}
                      size="sm"
                      className="flex-1"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Horizontal Scrolling Carousel for Popular Countries */
          <div 
            className="relative overflow-hidden py-4"
          >
            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <Button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 shadow-lg rounded-full w-12 h-12 p-0"
                  variant="outline"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 shadow-lg rounded-full w-12 h-12 p-0"
                  variant="outline"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </>
            )}

            <motion.div
              className="flex gap-6"
            >
              {/* Current slide countries */}
              {getCurrentCountries().map((country, index) => (
                <motion.div
                  key={`slide-${currentSlide}-${country.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex-shrink-0 w-[300px] h-[420px]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={country.bgImage} 
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${country.gradient} opacity-70`} />
                    <div className="absolute top-4 left-4">
                      <span className="text-3xl">{country.flag}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{country.name}</h3>
                      <p className="text-sm opacity-90">{country.studentCount}+ students</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {country.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-600">{country.averageCost}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-600">{country.visaSuccessRate}% visa success</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mb-4">
                      <Button
                        onClick={() => setSelectedCountry(country)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={() => handleApplyNow(country)}
                        size="sm"
                        className="flex-1"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {popularCountries.map((country, index) => (
                <motion.div
                  key={`second-${country.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex-shrink-0 w-[300px] h-[420px]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={country.bgImage} 
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${country.gradient} opacity-70`} />
                    <div className="absolute top-4 left-4">
                      <span className="text-3xl">{country.flag}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{country.name}</h3>
                      <p className="text-sm opacity-90">{country.studentCount}+ students</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {country.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-600">{country.averageCost}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-600">{country.visaSuccessRate}% visa success</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mb-4">
                      <Button
                        onClick={() => setSelectedCountry(country)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={() => handleApplyNow(country)}
                        size="sm"
                        className="flex-1"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
                <span className="text-4xl">{selectedCountry.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedCountry.name}</h3>
                  <p className="text-gray-600">{selectedCountry.continent}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Overview</h4>
                  <p className="text-gray-600 mb-4">{selectedCountry.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Duration: {selectedCountry.studyDuration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Language: {selectedCountry.language}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Currency: {selectedCountry.currency}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Top Universities</h4>
                  <ul className="space-y-1 mb-4">
                    {selectedCountry.topUniversities.slice(0, 3).map((uni, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        {uni}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Popular Programs</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.popularPrograms.map((program, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{selectedCountry.visaSuccessRate}%</div>
                    <div className="text-sm text-gray-600">Visa Success</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{selectedCountry.scholarships}</div>
                    <div className="text-sm text-gray-600">Scholarships</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{selectedCountry.studentCount}+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{selectedCountry.averageCost}</div>
                    <div className="text-sm text-gray-600">Avg. Cost</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button
                  onClick={() => handleApplyNow(selectedCountry)}
                  className="flex-1"
                >
                  Apply Now
                </Button>
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

      {/* Application Form Modal */}
      {showApplicationForm && applicationCountry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Apply to {applicationCountry.name}
                </h3>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Education Level
                  </label>
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Education Level</option>
                    <option value="high-school">High School</option>
                    <option value="bachelors">Bachelor's</option>
                    <option value="masters">Master's</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Field of Study
                  </label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Intake
                  </label>
                  <select
                    name="preferredIntake"
                    value={formData.preferredIntake}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Intake</option>
                    <option value="spring-2025">Spring 2025</option>
                    <option value="fall-2025">Fall 2025</option>
                    <option value="spring-2026">Spring 2026</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>
                
                <div className="flex gap-3 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}