import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  MapPin,
  GraduationCap,
  DollarSign,
  Users,
  Calendar,
  Award,
  BookOpen,
  Building,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Plane,
  Heart,
  Shield
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const countries = [
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    description: "World's leading destination for higher education with cutting-edge research and diverse academic opportunities",
    universities: "4,000+",
    students: "1.1M+ International",
    topRank: "#1 Global Education",
    averageCost: "$35,000-$70,000",
    workRights: "3 years STEM OPT",
    visaSuccess: "92%",
    featured: true,
    highlights: [
      "World's top-ranked universities",
      "STEM OPT work opportunities", 
      "Diverse academic programs",
      "Research opportunities",
      "Strong alumni networks"
    ]
  },
  {
    id: "uk",
    name: "United Kingdom", 
    flag: "🇬🇧",
    description: "Historic education excellence with shorter degree programs and globally recognized qualifications",
    universities: "130+",
    students: "500K+ International",
    topRank: "#2 Global Education",
    averageCost: "£20,000-£45,000",
    workRights: "2 years PSW",
    visaSuccess: "89%",
    featured: true,
    highlights: [
      "Shorter degree duration",
      "Post-study work visa",
      "Rich cultural heritage",
      "Gateway to Europe",
      "English-speaking environment"
    ]
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦", 
    description: "Affordable quality education with excellent immigration pathways and multicultural society",
    universities: "100+",
    students: "640K+ International",
    topRank: "#3 Global Education",
    averageCost: "CAD 25,000-$50,000",
    workRights: "3 years PGWP",
    visaSuccess: "95%",
    featured: true,
    highlights: [
      "Pathway to permanent residency",
      "Affordable tuition fees",
      "Safe and welcoming society",
      "High quality of life",
      "Bilingual opportunities"
    ]
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    description: "High-quality education with excellent lifestyle and strong job market for international students",
    universities: "40+",
    students: "450K+ International", 
    topRank: "#4 Global Education",
    averageCost: "AUD 30,000-$60,000",
    workRights: "2-4 years PSW",
    visaSuccess: "87%",
    featured: true,
    highlights: [
      "High quality of life",
      "Strong economy",
      "Multicultural society",
      "Beautiful landscapes",
      "Research excellence"
    ]
  }
];

const usaTopUniversities = [
  {
    name: "Harvard University",
    rank: 1,
    location: "Massachusetts",
    type: "Private",
    tuition: "$54,000",
    acceptance: "3.4%",
    programs: ["Business", "Law", "Medicine", "Engineering"],
    highlights: ["Oldest university in US", "Largest endowment", "Famous alumni"]
  },
  {
    name: "Stanford University", 
    rank: 2,
    location: "California",
    type: "Private",
    tuition: "$56,000",
    acceptance: "3.9%",
    programs: ["Engineering", "Computer Science", "Business", "Medicine"],
    highlights: ["Silicon Valley location", "Tech innovation hub", "Entrepreneurship"]
  },
  {
    name: "MIT",
    rank: 3,
    location: "Massachusetts", 
    type: "Private",
    tuition: "$53,000",
    acceptance: "6.7%",
    programs: ["Engineering", "Computer Science", "Physics", "Economics"],
    highlights: ["STEM excellence", "Research leadership", "Innovation culture"]
  },
  {
    name: "Princeton University",
    rank: 4,
    location: "New Jersey",
    type: "Private", 
    tuition: "$52,000",
    acceptance: "5.8%",
    programs: ["Liberal Arts", "Engineering", "Public Policy", "Economics"],
    highlights: ["Beautiful campus", "Small class sizes", "Strong alumni network"]
  },
  {
    name: "Yale University",
    rank: 5,
    location: "Connecticut",
    type: "Private",
    tuition: "$57,000", 
    acceptance: "6.1%",
    programs: ["Law", "Medicine", "Drama", "Liberal Arts"],
    highlights: ["Ivy League prestige", "Secret societies", "Gothic architecture"]
  },
  {
    name: "University of California, Berkeley",
    rank: 6,
    location: "California",
    type: "Public",
    tuition: "$44,000",
    acceptance: "17.5%",
    programs: ["Engineering", "Computer Science", "Business", "Law"],
    highlights: ["Top public university", "Research powerhouse", "Diverse student body"]
  }
];

const studyBenefits = [
  {
    icon: GraduationCap,
    title: "World-Class Education",
    description: "Access to globally ranked universities with cutting-edge research facilities and renowned faculty"
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "Study alongside students from 190+ countries and build international networks"
  },
  {
    icon: TrendingUp,
    title: "Career Opportunities", 
    description: "Access to internships, job placements, and career advancement in global markets"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Internationally recognized degrees with quality education standards and accreditation"
  }
];

const applicationProcess = [
  {
    step: 1,
    title: "Country Selection",
    description: "Choose your preferred study destination based on programs, budget, and career goals",
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "University Research",
    description: "Research universities, programs, entry requirements, and application deadlines",
    duration: "2-4 weeks"
  },
  {
    step: 3,
    title: "Test Preparation",
    description: "Prepare for required tests like IELTS, TOEFL, GRE, GMAT, or SAT",
    duration: "2-6 months"
  },
  {
    step: 4,
    title: "Document Preparation",
    description: "Gather transcripts, recommendation letters, SOP, and other required documents",
    duration: "4-6 weeks"
  },
  {
    step: 5,
    title: "Application Submission",
    description: "Submit applications to selected universities with all required documents",
    duration: "2-4 weeks"
  },
  {
    step: 6,
    title: "Visa Processing",
    description: "Apply for student visa after receiving university acceptance",
    duration: "4-8 weeks"
  }
];

export default function CountryGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedCountry, setSelectedCountry] = useState("usa");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const currentCountry = countries.find(c => c.id === selectedCountry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-blue-600/30 to-blue-800/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Study Abroad Destinations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete<br />
              <span className="text-blue-300">Country Guide</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive guides to top study destinations worldwide. Make informed decisions about your 
              international education journey with detailed country insights and university information.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">50+</div>
                <div className="text-sm text-blue-100">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">5000+</div>
                <div className="text-sm text-blue-100">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">15K+</div>
                <div className="text-sm text-blue-100">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">95%</div>
                <div className="text-sm text-blue-100">Visa Success</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Country Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Country Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Choose Your Study Destination</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {countries.map((country, index) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      selectedCountry === country.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedCountry(country.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{country.flag}</div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-2">{country.name}</h3>
                      <div className="space-y-2 text-sm text-neutral-600 mb-4">
                        <div className="flex items-center justify-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span>{country.universities} Universities</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{country.students}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{country.topRank}</span>
                        </div>
                      </div>
                      {country.featured && (
                        <Badge className="bg-primary hover:bg-primary/90 mb-3">Most Popular</Badge>
                      )}
                      <Button 
                        size="sm" 
                        variant={selectedCountry === country.id ? "default" : "outline"}
                        className="w-full"
                      >
                        {selectedCountry === country.id ? "Selected" : "Learn More"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Country Details */}
          {currentCountry && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-12">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="universities">Top Universities</TabsTrigger>
                  <TabsTrigger value="benefits">Why Study Here</TabsTrigger>
                  <TabsTrigger value="process">Application Process</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  {/* Country Overview */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <span className="text-3xl mr-3">{currentCountry.flag}</span>
                        Study in {currentCountry.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-neutral-700 mb-6">{currentCountry.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h4 className="font-bold text-neutral-800">Average Cost</h4>
                          <p className="text-primary font-semibold">{currentCountry.averageCost}</p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <h4 className="font-bold text-neutral-800">Work Rights</h4>
                          <p className="text-blue-600 font-semibold">{currentCountry.workRights}</p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <h4 className="font-bold text-neutral-800">Visa Success</h4>
                          <p className="text-blue-600 font-semibold">{currentCountry.visaSuccess}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-neutral-800 mb-4">Key Highlights</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {currentCountry.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                              <span className="text-neutral-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="universities" className="space-y-8">
                  {selectedCountry === "usa" && (
                    <>
                      <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-neutral-800 mb-4">Top Universities in USA</h3>
                        <p className="text-lg text-neutral-600">
                          Explore America's most prestigious institutions known for academic excellence and research innovation
                        </p>
                      </div>

                      <div className="grid gap-6">
                        {usaTopUniversities.map((university, index) => (
                          <Card key={university.name} className="shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                                      #{university.rank}
                                    </div>
                                    <div>
                                      <h4 className="text-xl font-bold text-neutral-800">{university.name}</h4>
                                      <p className="text-neutral-600 flex items-center">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {university.location}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <Badge className={university.type === "Private" ? "bg-blue-500" : "bg-blue-500"}>
                                  {university.type}
                                </Badge>
                              </div>

                              <div className="grid md:grid-cols-3 gap-4 mb-4">
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                  <DollarSign className="w-5 h-5 text-primary mx-auto mb-1" />
                                  <div className="text-sm text-neutral-600">Annual Tuition</div>
                                  <div className="font-bold text-primary">{university.tuition}</div>
                                </div>
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                  <Users className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                                  <div className="text-sm text-neutral-600">Acceptance Rate</div>
                                  <div className="font-bold text-blue-500">{university.acceptance}</div>
                                </div>
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                  <Star className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                                  <div className="text-sm text-neutral-600">World Rank</div>
                                  <div className="font-bold text-blue-500">#{university.rank}</div>
                                </div>
                              </div>

                              <div className="mb-4">
                                <h5 className="font-semibold text-neutral-800 mb-2">Popular Programs</h5>
                                <div className="flex flex-wrap gap-2">
                                  {university.programs.map((program, idx) => (
                                    <Badge key={idx} variant="outline">{program}</Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="mb-4">
                                <h5 className="font-semibold text-neutral-800 mb-2">Key Features</h5>
                                <div className="space-y-2">
                                  {university.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                      <span className="text-sm text-neutral-600">{highlight}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <Button className="w-full bg-primary hover:bg-primary/90">
                                Get Admission Guidance
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </>
                  )}

                  {selectedCountry !== "usa" && (
                    <Card className="shadow-lg text-center p-12">
                      <Building className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
                      <h3 className="text-xl font-semibold text-neutral-600 mb-2">University Guide Coming Soon</h3>
                      <p className="text-neutral-500 mb-6">Detailed university information for {currentCountry.name} will be available soon</p>
                      <Button className="bg-primary hover:bg-primary/90">
                        Get Personalized University List
                      </Button>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="benefits" className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-neutral-800 mb-4">Why Study in {currentCountry.name}?</h3>
                    <p className="text-lg text-neutral-600">
                      Discover the unique advantages and opportunities that make {currentCountry.name} an ideal study destination
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {studyBenefits.map((benefit, index) => (
                      <Card key={benefit.title} className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                              <benefit.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-neutral-800 mb-3">{benefit.title}</h4>
                              <p className="text-neutral-600">{benefit.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="process" className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-neutral-800 mb-4">Application Process</h3>
                    <p className="text-lg text-neutral-600">
                      Step-by-step guide to applying for studies in {currentCountry.name}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {applicationProcess.map((step, index) => (
                      <Card key={step.step} className="shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-xl font-bold text-neutral-800">{step.title}</h4>
                                <Badge variant="outline">{step.duration}</Badge>
                              </div>
                              <p className="text-neutral-600">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="shadow-lg bg-gradient-to-r from-primary to-secondary text-white text-center">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                      <p className="text-blue-100 mb-6">
                        Our expert counselors will guide you through every step of the application process
                      </p>
                      <Button className="bg-white text-primary hover:bg-blue-50 text-lg px-8">
                        Book Free Consultation
                        <Calendar className="w-5 h-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}