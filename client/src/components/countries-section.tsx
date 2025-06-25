import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, MapPin, Users, GraduationCap, ChevronLeft, ChevronRight, Star, Award, BookOpen, Send, DollarSign, Clock, X, CheckCircle, ArrowRight, Plane, Calendar } from "lucide-react";
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

const getCountryGradient = (countryName: string): string => {
  switch (countryName) {
    case 'United Kingdom':
      return 'from-blue-600 to-red-600';
    case 'United States':
      return 'from-blue-700 to-red-600';
    case 'Canada':
      return 'from-red-600 to-red-800';
    case 'Australia':
      return 'from-green-500 to-yellow-600';
    case 'Germany':
      return 'from-black to-red-600';
    case 'New Zealand':
      return 'from-blue-600 to-green-500';
    case 'Ireland':
      return 'from-green-600 to-orange-500';
    case 'France':
      return 'from-blue-600 to-red-600';
    case 'Netherlands':
      return 'from-orange-500 to-blue-600';
    case 'Singapore':
      return 'from-red-600 to-white';
    case 'Sweden':
      return 'from-blue-500 to-yellow-400';
    case 'Switzerland':
      return 'from-red-600 to-white';
    default:
      return 'from-primary to-secondary';
  }
};

export default function CountriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationCountry, setApplicationCountry] = useState<Country | null>(null);
  const countriesPerSlide = 6; // Increased to show more countries per slide
  
  // Show all countries (12 total)
  const displayCountries = countries;
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

  const handleApplyNow = (country: Country) => {
    setApplicationCountry(country);
    setShowApplicationForm(true);
  };

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 mb-6">
            <Globe className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Study Destinations</span>
          </div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose Your Dream Destination
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore world-class universities and exciting opportunities across 12 top study destinations. 
            Apply directly to your preferred country with expert guidance.
          </motion.p>
        </motion.div>

        {/* Countries Slider */}
        <div className="relative">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {getCurrentCountries().map((country, index) => (
              <motion.div
                key={country.id}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <Card className="relative overflow-hidden h-[350px] hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-0 bg-white">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${country.bgImage})` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-t ${country.gradient} opacity-80`}></div>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="relative z-10 h-full p-4 flex flex-col text-white">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <h3 className="text-lg font-bold">{country.code}</h3>
                          <Badge className="bg-white/20 text-white border-0 text-xs">
                            {country.visaSuccessRate}% Success
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Country Name */}
                    <h2 className="text-xl font-bold mb-2">{country.name}</h2>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
                        <GraduationCap className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-xs font-semibold">{country.topUniversities.length}+</div>
                        <div className="text-xs opacity-80">Unis</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
                        <Users className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-xs font-semibold">{country.studentCount}+</div>
                        <div className="text-xs opacity-80">Students</div>
                      </div>
                    </div>

                    {/* Key Info */}
                    <div className="space-y-1 mb-3 flex-grow">
                      <div className="flex items-center text-xs">
                        <DollarSign className="w-3 h-3 mr-1" />
                        <span className="truncate">From {country.averageCost.split(' - ')[0]}</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        <span className="truncate">{country.intakeSeason}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button 
                        onClick={() => handleApplyNow(country)}
                        className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-2 text-sm"
                      >
                        <Send className="mr-1 h-3 w-3" />
                        Apply Now
                      </Button>
                      <Button 
                        onClick={() => setSelectedCountry(country)}
                        variant="outline"
                        className="w-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm py-2 text-sm"
                      >
                        <BookOpen className="mr-1 h-3 w-3" />
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="sm"
              className="rounded-full border-blue-200 hover:bg-blue-50 hover:border-blue-300 px-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextSlide}
              variant="outline"
              size="sm"
              className="rounded-full border-blue-200 hover:bg-blue-50 hover:border-blue-300 px-4"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Statistics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-xs text-gray-600">Top Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">50,000+</div>
              <div className="text-xs text-gray-600">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-xs text-gray-600">Visa Success</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-xs text-gray-600">Expert Support</div>
            </div>
          </motion.div>
        </div>

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
      </div>
    </section>
  );
}
