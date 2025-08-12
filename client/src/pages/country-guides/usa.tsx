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
  Shield,
  ArrowLeft
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";

const usaStats = {
  universities: "4,000+",
  internationalStudents: "1.1 Million",
  globalRank: "#1",
  averageCost: "$35,000-$70,000",
  workPermit: "3 years STEM OPT",
  visaSuccess: "92%",
  programDuration: "4 years Bachelor's, 2 years Master's",
  intakeSeasons: "Fall (Sep), Spring (Jan), Summer (May)"
};

const topUniversities = [
  {
    name: "Harvard University",
    rank: 1,
    location: "Cambridge, Massachusetts",
    type: "Private",
    tuition: "$54,269",
    acceptance: "3.4%",
    founded: 1636,
    programs: ["Business Administration", "Law", "Medicine", "Engineering", "Liberal Arts"],
    highlights: ["Oldest university in US", "$53.2B endowment", "8 US Presidents", "161 Nobel laureates"],
    specialties: ["Harvard Medical School", "Harvard Business School", "Harvard Law School"],
    campusSize: "5,076 acres",
    studentBody: "23,000 students"
  },
  {
    name: "Stanford University",
    rank: 2,
    location: "Stanford, California",
    type: "Private",
    tuition: "$56,169",
    acceptance: "3.9%",
    founded: 1885,
    programs: ["Computer Science", "Engineering", "Business", "Medicine", "Humanities"],
    highlights: ["Silicon Valley heart", "Tech innovation hub", "Google, Yahoo founders", "$37.8B endowment"],
    specialties: ["Stanford Medicine", "Stanford Engineering", "Graduate School of Business"],
    campusSize: "8,180 acres",
    studentBody: "17,000 students"
  },
  {
    name: "MIT",
    rank: 3,
    location: "Cambridge, Massachusetts",
    type: "Private",
    tuition: "$53,790",
    acceptance: "6.7%",
    founded: 1861,
    programs: ["Engineering", "Computer Science", "Physics", "Economics", "Mathematics"],
    highlights: ["STEM powerhouse", "96 Nobel laureates", "Technology leadership", "$18.4B endowment"],
    specialties: ["MIT Sloan", "CSAIL", "Lincoln Laboratory"],
    campusSize: "168 acres",
    studentBody: "11,500 students"
  },
  {
    name: "Princeton University",
    rank: 4,
    location: "Princeton, New Jersey",
    type: "Private",
    tuition: "$52,800",
    acceptance: "5.8%",
    founded: 1746,
    programs: ["Liberal Arts", "Engineering", "Public Policy", "Economics", "Physics"],
    highlights: ["No student loans policy", "Beautiful Gothic campus", "Undergraduate focus", "$37.7B endowment"],
    specialties: ["Woodrow Wilson School", "Princeton Engineering", "Princeton Physics"],
    campusSize: "600 acres",
    studentBody: "5,400 students"
  },
  {
    name: "Yale University",
    rank: 5,
    location: "New Haven, Connecticut",
    type: "Private",
    tuition: "$57,700",
    acceptance: "6.1%",
    founded: 1701,
    programs: ["Law", "Medicine", "Drama", "Liberal Arts", "Business"],
    highlights: ["Secret societies", "5 US Presidents", "Yale Drama School", "$42.3B endowment"],
    specialties: ["Yale Law School", "Yale School of Medicine", "Yale School of Art"],
    campusSize: "310 acres",
    studentBody: "13,600 students"
  },
  {
    name: "University of California, Berkeley",
    rank: 6,
    location: "Berkeley, California",
    type: "Public",
    tuition: "$44,115",
    acceptance: "17.5%",
    founded: 1868,
    programs: ["Engineering", "Computer Science", "Business", "Law", "Public Policy"],
    highlights: ["Top public university", "25 Nobel laureates", "Free speech movement", "Research excellence"],
    specialties: ["Haas School of Business", "UC Berkeley Law", "College of Engineering"],
    campusSize: "1,232 acres",
    studentBody: "45,000 students"
  }
];

const popularPrograms = [
  { category: "STEM", programs: ["Computer Science", "Engineering", "Data Science", "Biotechnology", "Mathematics"] },
  { category: "Business", programs: ["MBA", "Finance", "Marketing", "International Business", "Entrepreneurship"] },
  { category: "Liberal Arts", programs: ["Psychology", "Political Science", "Economics", "Literature", "History"] },
  { category: "Health Sciences", programs: ["Medicine", "Nursing", "Public Health", "Pharmacy", "Dentistry"] }
];

const livingCosts = [
  { city: "New York", housing: "$1,500-2,500", food: "$400-600", transport: "$120", total: "$2,020-3,220" },
  { city: "Los Angeles", housing: "$1,200-2,000", food: "$350-550", transport: "$100", total: "$1,650-2,650" },
  { city: "Chicago", housing: "$900-1,500", food: "$300-450", transport: "$110", total: "$1,310-2,060" },
  { city: "Boston", housing: "$1,100-1,800", food: "$350-500", transport: "$90", total: "$1,540-2,390" },
  { city: "Austin", housing: "$800-1,300", food: "$280-400", transport: "$80", total: "$1,160-1,780" }
];

const visaRequirements = [
  { document: "Form I-20", description: "Certificate of Eligibility for Student Status", required: true },
  { document: "Passport", description: "Valid for at least 6 months beyond stay", required: true },
  { document: "SEVIS Fee", description: "$350 fee payment receipt", required: true },
  { document: "Financial Proof", description: "Bank statements showing $60,000+ annually", required: true },
  { document: "Academic Transcripts", description: "Official transcripts from previous education", required: true },
  { document: "English Proficiency", description: "TOEFL/IELTS scores", required: true },
  { document: "Standardized Tests", description: "SAT/GRE/GMAT scores (if required)", required: false }
];

export default function USAGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-#1e3a8a via-#1a73e8 to-#1565c0 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-[#1D50C9]/30 to-#1565c0/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link href="/country-guide">
              <Button variant="outline" className="mb-8 text-white border-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Country Guide
              </Button>
            </Link>
            
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <span className="text-3xl">🇺🇸</span>
              <span className="text-sm font-medium">Study in United States</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study in the<br />
              <span className="text-blue-300">United States</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Home to the world's most prestigious universities and cutting-edge research facilities. 
              Discover unlimited opportunities in the land of innovation and academic excellence.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{usaStats.universities}</div>
                <div className="text-sm text-blue-100">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{usaStats.internationalStudents}</div>
                <div className="text-sm text-blue-100">International Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{usaStats.globalRank}</div>
                <div className="text-sm text-blue-100">Global Education Rank</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{usaStats.visaSuccess}</div>
                <div className="text-sm text-blue-100">Visa Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="universities">Universities</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="costs">Costs</TabsTrigger>
              <TabsTrigger value="visa">Visa Guide</TabsTrigger>
              <TabsTrigger value="life">Student Life</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Why Choose USA for Studies?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="shadow-lg text-center p-6">
                    <GraduationCap className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Academic Excellence</h3>
                    <p className="text-sm text-neutral-600">8 of top 10 world universities</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <TrendingUp className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Career Opportunities</h3>
                    <p className="text-sm text-neutral-600">OPT work authorization</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <Globe className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Research Innovation</h3>
                    <p className="text-sm text-neutral-600">Leading research facilities</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <Users className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Diversity</h3>
                    <p className="text-sm text-neutral-600">Students from 190+ countries</p>
                  </Card>
                </div>
              </motion.div>

              {/* Detailed Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">USA Education System Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Total Universities</span>
                          <span className="font-bold #1845B3">{usaStats.universities}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">International Students</span>
                          <span className="font-bold #1845B3">{usaStats.internationalStudents}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Annual Tuition Range</span>
                          <span className="font-bold #1845B3">{usaStats.averageCost}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Work Authorization</span>
                          <span className="font-bold #1845B3">{usaStats.workPermit}</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Global Education Rank</span>
                          <span className="font-bold #1845B3">{usaStats.globalRank}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Visa Success Rate</span>
                          <span className="font-bold #1845B3">{usaStats.visaSuccess}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Program Duration</span>
                          <span className="font-bold #1845B3">{usaStats.programDuration}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Intake Seasons</span>
                          <span className="font-bold #1845B3">{usaStats.intakeSeasons}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="universities" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Top Universities in USA</h3>
                <p className="text-lg text-neutral-600">
                  Explore America's most prestigious institutions with detailed information
                </p>
              </div>

              <div className="space-y-8">
                {topUniversities.map((university, index) => (
                  <motion.div
                    key={university.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#1D50C9] to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                              #{university.rank}
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-neutral-800 mb-2">{university.name}</h4>
                              <p className="text-neutral-600 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {university.location} • Founded {university.founded}
                              </p>
                            </div>
                          </div>
                          <Badge className={university.type === "Private" ? "#1D50C9" : "#1D50C9"}>
                            {university.type}
                          </Badge>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <DollarSign className="w-6 h-6 #1845B3 mx-auto mb-2" />
                            <div className="text-sm text-neutral-600">Annual Tuition</div>
                            <div className="font-bold #1845B3">{university.tuition}</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <Users className="w-6 h-6 #1845B3 mx-auto mb-2" />
                            <div className="text-sm text-neutral-600">Acceptance Rate</div>
                            <div className="font-bold #1845B3">{university.acceptance}</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <Building className="w-6 h-6 #1845B3 mx-auto mb-2" />
                            <div className="text-sm text-neutral-600">Campus Size</div>
                            <div className="font-bold #1845B3">{university.campusSize}</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <GraduationCap className="w-6 h-6 #1845B3 mx-auto mb-2" />
                            <div className="text-sm text-neutral-600">Student Body</div>
                            <div className="font-bold #1845B3">{university.studentBody}</div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h5 className="font-bold text-neutral-800 mb-3">Popular Programs</h5>
                            <div className="flex flex-wrap gap-2">
                              {university.programs.map((program, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">{program}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-bold text-neutral-800 mb-3">Specialized Schools</h5>
                            <div className="flex flex-wrap gap-2">
                              {university.specialties.map((specialty, idx) => (
                                <Badge key={idx} className="#1D50C9 hover:bg-[#1845B3] text-xs">{specialty}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="font-bold text-neutral-800 mb-3">Key Achievements</h5>
                          <div className="grid md:grid-cols-2 gap-3">
                            {university.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Star className="w-4 h-4 #1D50C9 flex-shrink-0" />
                                <span className="text-sm text-neutral-600">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-[#1D50C9] to-red-600 hover:from-#1a73e8 hover:to-red-700 text-white">
                          Get Admission Guidance for {university.name}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="programs" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Popular Study Programs</h3>
                <p className="text-lg text-neutral-600">
                  Explore the most sought-after academic programs in USA
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {popularPrograms.map((category, index) => (
                  <Card key={category.category} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.programs.map((program, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 #1D50C9 flex-shrink-0" />
                            <span className="text-neutral-700">{program}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="costs" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Cost of Living in Major Cities</h3>
                <p className="text-lg text-neutral-600">
                  Monthly expenses breakdown for international students
                </p>
              </div>

              <div className="overflow-x-auto">
                <Card className="shadow-lg">
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-[#1D50C9] to-red-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left">City</th>
                          <th className="px-6 py-4 text-center">Housing</th>
                          <th className="px-6 py-4 text-center">Food</th>
                          <th className="px-6 py-4 text-center">Transport</th>
                          <th className="px-6 py-4 text-center">Total/Month</th>
                        </tr>
                      </thead>
                      <tbody>
                        {livingCosts.map((city, index) => (
                          <tr key={city.city} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 font-medium">{city.city}</td>
                            <td className="px-6 py-4 text-center">{city.housing}</td>
                            <td className="px-6 py-4 text-center">{city.food}</td>
                            <td className="px-6 py-4 text-center">{city.transport}</td>
                            <td className="px-6 py-4 text-center font-bold #1845B3">{city.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="visa" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">F-1 Student Visa Requirements</h3>
                <p className="text-lg text-neutral-600">
                  Complete documentation checklist for USA student visa
                </p>
              </div>

              <div className="grid gap-6">
                {visaRequirements.map((req, index) => (
                  <Card key={req.document} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          req.required ? '#1D50C9' : '#1D50C9'
                        }`}>
                          {req.required ? (
                            <span className="text-white font-bold text-sm">!</span>
                          ) : (
                            <CheckCircle className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-neutral-800">{req.document}</h4>
                            <Badge className={req.required ? '#1D50C9' : '#1D50C9'}>
                              {req.required ? 'Required' : 'Optional'}
                            </Badge>
                          </div>
                          <p className="text-neutral-600">{req.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="life" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Student Life in USA</h3>
                <p className="text-lg text-neutral-600">
                  What to expect as an international student in America
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-6 h-6 mr-2 #1D50C9" />
                      Campus Culture
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Diverse student communities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">300+ student organizations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Sports and recreational activities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Cultural festivals and events</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-6 h-6 mr-2 #1D50C9" />
                      Support Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">International student office</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Academic advisors</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Mental health counseling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Career services center</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-6 h-6 mr-2 #1D50C9" />
                      Work Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">20 hours/week on-campus</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">CPT for internships</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">12 months OPT after graduation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">24 months STEM extension</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-#1e3a8a to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Study in USA?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our expert counselors guide you through the entire application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-#1e3a8a hover:bg-blue-50 text-lg px-8">
                Book Free USA Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                Download USA Guide
                <BookOpen className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}