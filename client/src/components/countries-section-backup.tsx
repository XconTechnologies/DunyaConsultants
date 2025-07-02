import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { 
  GraduationCap, 
  DollarSign, 
  Clock, 
  MapPin, 
  Users, 
  BookOpen, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Globe,
  Calendar,
  FileText,
  Award,
  Briefcase,
  Heart,
  Send,
  Plane,
  CheckCircle,
  X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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

export default function CountriesSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [activeTab, setActiveTab] = useState<'popular' | 'all'>('popular');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationCountry, setApplicationCountry] = useState<Country | null>(null);
  const [applicationStep, setApplicationStep] = useState(1);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { toast } = useToast();

  const countries: Country[] = [
    {
      id: "uk",
      name: "United Kingdom",
      code: "GB",
      flag: "🇬🇧",
      description: "Home to world-renowned universities like Oxford and Cambridge, the UK offers exceptional academic excellence and rich cultural heritage.",
      topUniversities: [
        "University of Oxford",
        "University of Cambridge", 
        "Imperial College London",
        "London School of Economics",
        "University College London",
        "King's College London",
        "University of Edinburgh",
        "University of Manchester"
      ],
      studentCount: 485645,
      popularPrograms: ["Business & Management", "Engineering", "Computer Science", "Medicine", "Law", "Arts & Humanities"],
      averageCost: "£15,000 - £35,000",
      scholarships: 127,
      visaSuccessRate: 92,
      workRights: "20 hours/week during studies, 2 years post-study work visa",
      featured: true,
      continent: "Europe",
      highlights: [
        "World's second most popular study destination",
        "Home to 4 of the world's top 10 universities",
        "Rich history and cultural diversity",
        "Gateway to Europe"
      ],
      studyDuration: "3 years Bachelor's, 1 year Master's",
      language: "English",
      climate: "Temperate oceanic",
      currency: "British Pound (GBP)",
      timeZone: "GMT/BST",
      bgImage: "/api/placeholder/400/300",
      gradient: "from-red-500 to-blue-600",
      intakeSeason: "September & January",
      livingCost: "£800 - £1,500/month",
      applicationDeadline: "January 2025"
    },
    {
      id: "canada",
      name: "Canada",
      code: "CA", 
      flag: "🇨🇦",
      description: "Known for its high-quality education system, multicultural society, and beautiful natural landscapes.",
      topUniversities: [
        "University of Toronto",
        "McGill University",
        "University of British Columbia", 
        "University of Alberta",
        "McMaster University",
        "University of Waterloo",
        "Queen's University",
        "Western University"
      ],
      studentCount: 642000,
      popularPrograms: ["Engineering", "Computer Science", "Business", "Healthcare", "Environmental Studies", "Agriculture"],
      averageCost: "CAD 15,000 - CAD 30,000",
      scholarships: 89,
      visaSuccessRate: 95,
      workRights: "20 hours/week during studies, 3 years post-graduation work permit",
      featured: true,
      continent: "North America",
      highlights: [
        "Excellent post-study work opportunities",
        "Pathway to permanent residency",
        "Safe and welcoming environment",
        "Affordable compared to US and UK"
      ],
      studyDuration: "4 years Bachelor's, 1-2 years Master's",
      language: "English/French",
      climate: "Continental",
      currency: "Canadian Dollar (CAD)",
      timeZone: "Multiple zones",
      bgImage: "/api/placeholder/400/300",
      gradient: "from-red-600 to-red-800",
      intakeSeason: "September, January & May",
      livingCost: "CAD 1,000 - CAD 1,800/month",
      applicationDeadline: "February 2025"
    },
    {
      id: "australia",
      name: "Australia",
      code: "AU",
      flag: "🇦🇺", 
      description: "Offers world-class education with a relaxed lifestyle, beautiful beaches, and excellent career opportunities.",
      topUniversities: [
        "Australian National University",
        "University of Melbourne",
        "University of Sydney",
        "University of Queensland", 
        "Monash University",
        "University of New South Wales",
        "University of Adelaide",
        "University of Western Australia"
      ],
      studentCount: 758154,
      popularPrograms: ["Engineering", "Medicine", "Business", "IT", "Environmental Science", "Mining"],
      averageCost: "AUD 20,000 - AUD 45,000",
      scholarships: 156,
      visaSuccessRate: 90,
      workRights: "20 hours/week during studies, 2-4 years post-study work visa",
      featured: true,
      continent: "Oceania",
      highlights: [
        "8 universities in world's top 100",
        "Strong job market",
        "High quality of life",
        "Multicultural society"
      ],
      studyDuration: "3 years Bachelor's, 1-2 years Master's",
      language: "English",
      climate: "Varied",
      currency: "Australian Dollar (AUD)",
      timeZone: "Multiple zones",
      bgImage: "/api/placeholder/400/300",
      gradient: "from-yellow-500 to-green-600",
      intakeSeason: "February & July",
      livingCost: "AUD 1,200 - AUD 2,000/month",
      applicationDeadline: "December 2024"
    },
    {
      id: "usa",
      name: "United States",
      code: "US",
      flag: "🇺🇸",
      description: "Home to many of the world's top universities and offers unparalleled research opportunities and career prospects.",
      topUniversities: [
        "Harvard University",
        "Stanford University",
        "Massachusetts Institute of Technology",
        "California Institute of Technology",
        "University of Chicago",
        "Princeton University",
        "Yale University",
        "Columbia University"
      ],
      studentCount: 1075496,
      popularPrograms: ["Business", "Engineering", "Computer Science", "Medicine", "Law", "Arts"],
      averageCost: "$25,000 - $55,000",
      scholarships: 234,
      visaSuccessRate: 87,
      workRights: "On-campus work during studies, Optional Practical Training available",
      featured: true,
      continent: "North America",
      highlights: [
        "World's top destination for international students",
        "Leading in research and innovation",
        "Diverse academic programs",
        "Strong alumni networks"
      ],
      studyDuration: "4 years Bachelor's, 1-2 years Master's",
      language: "English",
      climate: "Varied",
      currency: "US Dollar (USD)",
      timeZone: "Multiple zones",
      bgImage: "/api/placeholder/400/300",
      gradient: "from-blue-600 to-red-600",
      intakeSeason: "Fall & Spring",
      livingCost: "$800 - $2,000/month",
      applicationDeadline: "January 2025"
    },
    {
      id: "germany",
      name: "Germany",
      code: "DE",
      flag: "🇩🇪",
      description: "Known for its strong engineering programs, low tuition fees, and excellent career opportunities in Europe.",
      topUniversities: [
        "Technical University of Munich",
        "Ludwig Maximilian University",
        "Heidelberg University",
        "Humboldt University Berlin",
        "University of Freiburg",
        "RWTH Aachen University",
        "University of Hamburg",
        "Free University Berlin"
      ],
      studentCount: 374583,
      popularPrograms: ["Engineering", "Computer Science", "Medicine", "Business", "Natural Sciences"],
      averageCost: "€0 - €20,000",
      scholarships: 78,
      visaSuccessRate: 88,
      workRights: "120 full days or 240 half days per year",
      featured: true,
      continent: "Europe",
      highlights: [
        "Low or no tuition fees",
        "Strong economy with job opportunities",
        "Central location in Europe",
        "High quality of life"
      ],
      studyDuration: "3 years Bachelor's, 1-2 years Master's",
      language: "German/English",
      climate: "Temperate",
      currency: "Euro (EUR)",
      timeZone: "CET",
      bgImage: "/api/placeholder/400/300",
      gradient: "from-red-500 to-yellow-500",
      intakeSeason: "October & April",
      livingCost: "€700 - €1,200/month",
      applicationDeadline: "March 2025"
    },
    {
      id: "newzealand",
      name: "New Zealand",
      code: "NZ",
      flag: "🇳🇿",
      description: "Offers high-quality education in a stunning natural environment with excellent work-life balance.",
      topUniversities: [
        "University of Auckland",
        "University of Otago",
        "Victoria University of Wellington",
        "University of Canterbury",
        "Massey University",
        "University of Waikato",
        "Lincoln University",
        "Auckland University of Technology"
      ],
      studentCount: 125000,
      popularPrograms: ["Agriculture", "Environmental Science", "Tourism", "Engineering", "Business"],
      averageCost: "NZD 22,000 - NZD 35,000",
      scholarships: 45,
      visaSuccessRate: 93,
      workRights: "20 hours/week during studies, 1-3 years post-study work visa",
      featured: false,
      continent: "Oceania",
      highlights: [
        "Safe and peaceful environment",
        "Beautiful natural landscapes",
        "Small class sizes",
        "Work opportunities after graduation"
      ],
      studyDuration: "3 years Bachelor's, 1-2 years Master's",
      language: "English",
      climate: "Temperate",
      currency: "New Zealand Dollar (NZD)",
      timeZone: "NZST",
      bgImage: "/api/placeholder/400/300",
      gradient: "from-green-500 to-blue-500",
      intakeSeason: "February & July",
      livingCost: "NZD 1,000 - NZD 1,600/month",
      applicationDeadline: "December 2024"
    },
    {
      id: "ireland", 
      name: "Ireland",
      code: "IE",
      flag: "🇮🇪",
      description: "Known for its friendly culture, excellent education system, and being the European headquarters for many tech companies.",
      topUniversities: [
        "Trinity College Dublin",
        "University College Dublin",
        "University College Cork",
        "National University of Ireland Galway",
        "Dublin City University",
        "Maynooth University",
        "University of Limerick",
        "Technological University Dublin"
      ],
      studentCount: 95000,
      popularPrograms: ["IT", "Business", "Medicine", "Engineering", "Pharmaceutical Sciences"],
      averageCost: "€10,000 - €25,000",
      scholarships: 32,
      visaSuccessRate: 91,
      workRights: "20 hours/week during studies, 2 years post-study work visa",
      featured: false,
      continent: "Europe",
      highlights: [
        "English-speaking country in EU",
        "Hub for tech companies",
        "Rich cultural heritage",
        "Friendly and welcoming people"
      ],
      studyDuration: "3-4 years Bachelor's, 1-2 years Master's",
      language: "English",
      climate: "Temperate oceanic",
      currency: "Euro (EUR)",
      timeZone: "GMT/IST",
      bgImage: "/api/placeholder/400/300",
      gradient: "from-green-600 to-orange-500",
      intakeSeason: "September & January",
      livingCost: "€700 - €1,200/month",
      applicationDeadline: "February 2025"
    },
    {
      id: "france",
      name: "France", 
      code: "FR",
      flag: "🇫🇷",
      description: "Offers world-class education, rich culture, and is known for excellence in arts, fashion, and culinary studies.",
      topUniversities: [
        "Sorbonne University",
        "École Normale Supérieure",
        "École Polytechnique",
        "Sciences Po",
        "University of Paris-Saclay",
        "HEC Paris",
        "INSEAD",
        "CentraleSupélec"
      ],
      studentCount: 245000,
      popularPrograms: ["Business", "Engineering", "Arts", "Fashion", "Culinary Arts", "International Relations"],
      averageCost: "€2,770 - €20,000",
      scholarships: 67,
      visaSuccessRate: 89,
      workRights: "964 hours per year (about 20 hours/week)",
      featured: false,
      continent: "Europe",
      highlights: [
        "Low tuition fees at public universities",
        "Rich cultural experience",
        "Central location in Europe",
        "Strong in arts and fashion"
      ],
      studyDuration: "3 years Bachelor's, 1-2 years Master's",
      language: "French/English",
      climate: "Varied",
      currency: "Euro (EUR)",
      timeZone: "CET",
      bgImage: "/api/placeholder/400/300",
      gradient: "from-blue-600 to-red-600",
      intakeSeason: "September & February",
      livingCost: "€600 - €1,400/month",
      applicationDeadline: "March 2025"
    }
  ];

  const popularCountries = countries.filter(country => country.featured);
  const displayCountries = activeTab === 'popular' ? popularCountries : countries;
  const countriesPerSlide = 4;
  const totalSlides = Math.ceil(displayCountries.length / countriesPerSlide);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCountries = () => {
    const startIndex = currentSlide * countriesPerSlide;
    return displayCountries.slice(startIndex, startIndex + countriesPerSlide);
  };

  const handleApplyNow = (country: Country) => {
    setApplicationCountry(country);
    setShowApplicationForm(true);
    setApplicationStep(1);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: `Your application for ${applicationCountry?.name} has been submitted successfully. We'll contact you within 24 hours.`,
    });
    setShowApplicationForm(false);
    setApplicationStep(1);
  };

  const getCountryImage = (countryName: string) => {
    const images: Record<string, string> = {
      "United Kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=300&fit=crop",
      "Canada": "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&h=300&fit=crop",
      "Australia": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      "United States": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&h=300&fit=crop",
      "Germany": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=300&fit=crop",
      "New Zealand": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
      "Ireland": "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=300&fit=crop",
      "France": "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=300&fit=crop"
    };
    return images[countryName] || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop";
  };

  const getCountryColor = (countryName: string) => {
    const colors: Record<string, string> = {
      "United Kingdom": "bg-gradient-to-br from-blue-100/80 to-red-100/80",
      "Canada": "bg-gradient-to-br from-red-100/80 to-white/80",
      "Australia": "bg-gradient-to-br from-yellow-100/80 to-green-100/80",
      "United States": "bg-gradient-to-br from-blue-100/80 to-red-100/80",
      "Germany": "bg-gradient-to-br from-red-100/80 to-yellow-100/80",
      "New Zealand": "bg-gradient-to-br from-green-100/80 to-blue-100/80",
      "Ireland": "bg-gradient-to-br from-green-100/80 to-orange-100/80",
      "France": "bg-gradient-to-br from-blue-100/80 to-red-100/80"
    };
    return colors[countryName] || "bg-gradient-to-br from-gray-100/80 to-blue-100/80";
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Popular Study{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 transition-all duration-500">
              Destinations
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore world-class education opportunities across top study destinations. Each country offers unique advantages for your academic and career goals.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('popular')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'popular'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Star className="w-4 h-4 inline mr-2" />
                Popular Destinations
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Globe className="w-4 h-4 inline mr-2" />
                All Countries
              </button>
            </div>
          </div>
        </motion.div>

        {/* Countries Carousel */}
        <div className="relative mb-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="sm"
              className="rounded-full w-12 h-12 bg-white hover:bg-blue-50 border-2 hover:border-blue-300 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-blue-600 scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextSlide}
              variant="outline"
              size="sm"
              className="rounded-full w-12 h-12 bg-white hover:bg-blue-50 border-2 hover:border-blue-300 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Country Detail Modal */}
        <Dialog open={!!selectedCountry} onOpenChange={() => setSelectedCountry(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedCountry && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                    <span className="text-3xl">{selectedCountry.flag}</span>
                    Study in {selectedCountry.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Overview */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed">{selectedCountry.description}</p>
                  </div>

                  {/* Key Statistics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-xl border shadow-sm text-center">
                      <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="font-bold text-lg">{selectedCountry.studentCount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">International Students</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border shadow-sm text-center">
                      <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <div className="font-bold text-lg">{selectedCountry.visaSuccessRate}%</div>
                      <div className="text-sm text-gray-600">Visa Success Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border shadow-sm text-center">
                      <Award className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                      <div className="font-bold text-lg">{selectedCountry.scholarships}</div>
                      <div className="text-sm text-gray-600">Scholarships Available</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border shadow-sm text-center">
                      <DollarSign className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <div className="font-bold text-sm">{selectedCountry.averageCost}</div>
                      <div className="text-sm text-gray-600">Tuition Range</div>
                    </div>
                  </div>

                  {/* Top Universities */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      Top Universities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedCountry.topUniversities.map((university, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg border">
                          <div className="font-medium">{university}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Popular Programs */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      Popular Programs
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCountry.popularPrograms.map((program, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Country Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Study Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Study Duration:</span>
                          <span className="font-medium">{selectedCountry.studyDuration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Intake Seasons:</span>
                          <span className="font-medium">{selectedCountry.intakeSeason}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Language:</span>
                          <span className="font-medium">{selectedCountry.language}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Living Cost:</span>
                          <span className="font-medium">{selectedCountry.livingCost}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Country Info</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Currency:</span>
                          <span className="font-medium">{selectedCountry.currency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Climate:</span>
                          <span className="font-medium">{selectedCountry.climate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time Zone:</span>
                          <span className="font-medium">{selectedCountry.timeZone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Work Rights:</span>
                          <span className="font-medium text-sm">{selectedCountry.workRights}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t">
                    <Button 
                      onClick={() => handleApplyNow(selectedCountry)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Apply to Study in {selectedCountry.name}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Application Form Modal */}
        <Dialog open={showApplicationForm} onOpenChange={setShowApplicationForm}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {applicationCountry && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold flex items-center gap-3">
                    <span className="text-2xl">{applicationCountry.flag}</span>
                    Apply to Study in {applicationCountry.name}
                  </DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required className="mt-1" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" required className="mt-1" />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="educationLevel">Current Education Level *</Label>
                        <Select required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                            <SelectItem value="masters">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="intendedLevel">Intended Study Level *</Label>
                        <Select required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select intended level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                            <SelectItem value="masters">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="fieldOfStudy">Intended Field of Study *</Label>
                      <Select required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select field of study" />
                        </SelectTrigger>
                        <SelectContent>
                          {applicationCountry.popularPrograms.map((program) => (
                            <SelectItem key={program} value={program.toLowerCase()}>
                              {program}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    <div>
                      <Label htmlFor="intakeYear">Preferred Intake *</Label>
                      <Select required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select intake" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2025-spring">Spring 2025</SelectItem>
                          <SelectItem value="2025-fall">Fall 2025</SelectItem>
                          <SelectItem value="2026-spring">Spring 2026</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="englishTest">English Test Score (if any)</Label>
                      <Input id="englishTest" placeholder="e.g., IELTS 7.0, TOEFL 100" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your academic goals and any specific requirements..."
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end space-x-3 pt-4 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowApplicationForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Submit Application
                    </Button>
                  </div>
                </form>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}