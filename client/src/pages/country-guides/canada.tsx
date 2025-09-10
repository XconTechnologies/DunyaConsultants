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
  ArrowLeft,
  Heart,
  Shield
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";

const canadaStats = {
  universities: "100+",
  internationalStudents: "640,000+",
  globalRank: "#3",
  averageCost: "CAD 25,000-50,000",
  workPermit: "3 years PGWP",
  visaSuccess: "95%",
  programDuration: "4 years Bachelor's, 2 years Master's",
  intakeSeasons: "Fall (Sep), Winter (Jan), Summer (May)"
};

const topUniversities = [
  {
    name: "University of Toronto",
    rank: 1,
    location: "Toronto, Ontario",
    type: "Public",
    tuition: "CAD 58,160",
    acceptance: "43%",
    founded: 1827,
    programs: ["Engineering", "Medicine", "Business", "Arts & Sciences", "Law"],
    highlights: ["Canada's top university", "Research intensive", "3 campuses", "Global recognition"],
    specialties: ["Rotman School of Management", "Faculty of Medicine", "Faculty of Engineering"],
    campusSize: "714 hectares",
    studentBody: "97,000 students"
  },
  {
    name: "University of British Columbia",
    rank: 2,
    location: "Vancouver, BC",
    type: "Public",
    tuition: "CAD 50,569",
    acceptance: "52%",
    founded: 1908,
    programs: ["Business", "Engineering", "Medicine", "Arts", "Sciences"],
    highlights: ["Beautiful campus", "Research excellence", "Pacific location", "Diverse community"],
    specialties: ["Sauder School of Business", "Faculty of Medicine", "Faculty of Applied Science"],
    campusSize: "993 acres",
    studentBody: "66,000 students"
  },
  {
    name: "McGill University",
    rank: 3,
    location: "Montreal, Quebec",
    type: "Public",
    tuition: "CAD 50,000",
    acceptance: "46%",
    founded: 1821,
    programs: ["Medicine", "Law", "Engineering", "Business", "Arts"],
    highlights: ["Historic prestige", "Bilingual city", "Research focus", "International reputation"],
    specialties: ["Desautels Faculty of Management", "Faculty of Medicine", "Faculty of Law"],
    campusSize: "80 hectares",
    studentBody: "40,000 students"
  },
  {
    name: "University of Waterloo",
    rank: 4,
    location: "Waterloo, Ontario",
    type: "Public",
    tuition: "CAD 55,000",
    acceptance: "53%",
    founded: 1957,
    programs: ["Engineering", "Computer Science", "Mathematics", "Business"],
    highlights: ["Co-op programs", "Tech innovation", "Industry partnerships", "Entrepreneurship"],
    specialties: ["Faculty of Engineering", "Faculty of Mathematics", "Conrad School of Business"],
    campusSize: "1,000 acres",
    studentBody: "42,000 students"
  },
  {
    name: "University of Alberta",
    rank: 5,
    location: "Edmonton, Alberta",
    type: "Public",
    tuition: "CAD 35,000",
    acceptance: "58%",
    founded: 1908,
    programs: ["Engineering", "Medicine", "Business", "Arts", "Sciences"],
    highlights: ["Research intensive", "Affordable tuition", "Strong programs", "Beautiful campus"],
    specialties: ["Alberta School of Business", "Faculty of Medicine", "Faculty of Engineering"],
    campusSize: "1,200 acres",
    studentBody: "40,000 students"
  },
  {
    name: "McMaster University",
    rank: 6,
    location: "Hamilton, Ontario",
    type: "Public",
    tuition: "CAD 48,000",
    acceptance: "60%",
    founded: 1887,
    programs: ["Health Sciences", "Engineering", "Business", "Social Sciences"],
    highlights: ["Medical school excellence", "Research innovation", "Student-centered", "Beautiful campus"],
    specialties: ["DeGroote School of Business", "Faculty of Health Sciences", "Faculty of Engineering"],
    campusSize: "300 acres",
    studentBody: "33,000 students"
  }
];

const livingCosts = [
  { city: "Toronto", housing: "CAD 1,200-2,000", food: "CAD 400-600", transport: "CAD 150", total: "CAD 1,750-2,750" },
  { city: "Vancouver", housing: "CAD 1,000-1,800", food: "CAD 350-550", transport: "CAD 135", total: "CAD 1,485-2,485" },
  { city: "Montreal", housing: "CAD 700-1,200", food: "CAD 300-450", transport: "CAD 90", total: "CAD 1,090-1,740" },
  { city: "Calgary", housing: "CAD 800-1,300", food: "CAD 350-500", transport: "CAD 110", total: "CAD 1,260-1,910" },
  { city: "Ottawa", housing: "CAD 900-1,400", food: "CAD 350-500", transport: "CAD 120", total: "CAD 1,370-2,020" }
];

export default function CanadaGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100" ref={ref}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-[#1D50C9]/30 to-[#1565c0]/30"></div>
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
              <span className="text-3xl">🇨🇦</span>
              <span className="text-sm font-medium">Study in Canada</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Study in<br />
              <span className="#1845B3">Canada</span>
            </h1>
            
            <p className="text-xl text-[#1565c0] max-w-3xl mx-auto mb-8">
              Experience world-class education in one of the world's most welcoming countries. 
              Discover affordable quality education with excellent immigration pathways and multicultural society.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold #1845B3">{canadaStats.universities}</div>
                <div className="text-sm text-[#1565c0]">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold #1845B3">{canadaStats.internationalStudents}</div>
                <div className="text-sm text-[#1565c0]">International Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold #1845B3">{canadaStats.globalRank}</div>
                <div className="text-sm text-[#1565c0]">Global Education Rank</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold #1845B3">{canadaStats.visaSuccess}</div>
                <div className="text-sm text-[#1565c0]">Visa Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="universities">Universities</TabsTrigger>
              <TabsTrigger value="immigration">Immigration</TabsTrigger>
              <TabsTrigger value="costs">Costs</TabsTrigger>
              <TabsTrigger value="life">Student Life</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Why Choose Canada for Studies?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="shadow-lg text-center p-6">
                    <Heart className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Welcoming Society</h3>
                    <p className="text-sm text-neutral-600">Friendly and inclusive culture</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <Shield className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Safe Environment</h3>
                    <p className="text-sm text-neutral-600">Low crime rates, peaceful society</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <TrendingUp className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">PR Pathways</h3>
                    <p className="text-sm text-neutral-600">Multiple immigration programs</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <DollarSign className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Affordable Education</h3>
                    <p className="text-sm text-neutral-600">Lower costs than US/UK</p>
                  </Card>
                </div>
              </motion.div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Canada Education System Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Total Universities</span>
                        <span className="font-bold #1845B3">{canadaStats.universities}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">International Students</span>
                        <span className="font-bold #1845B3">{canadaStats.internationalStudents}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Annual Tuition Range</span>
                        <span className="font-bold #1845B3">{canadaStats.averageCost}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Post-Graduation Work Permit</span>
                        <span className="font-bold #1845B3">{canadaStats.workPermit}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Global Education Rank</span>
                        <span className="font-bold #1845B3">{canadaStats.globalRank}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Visa Success Rate</span>
                        <span className="font-bold #1845B3">{canadaStats.visaSuccess}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Program Duration</span>
                        <span className="font-bold #1845B3">{canadaStats.programDuration}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Intake Seasons</span>
                        <span className="font-bold #1845B3">{canadaStats.intakeSeasons}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="universities" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Top Universities in Canada</h3>
                <p className="text-lg text-neutral-600">
                  Explore Canada's leading institutions known for research excellence and innovation
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
                            <div className="w-16 h-16 bg-gradient-to-br from-[#1D50C9] to-red-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
                          <Badge className="#1D50C9">
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

                        <Button className="w-full bg-gradient-to-r from-[#1D50C9] to-red-800 hover:from-red-700 hover:to-red-900 text-white">
                          Get Admission Guidance for {university.name}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="immigration" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Immigration Pathways</h3>
                <p className="text-lg text-neutral-600">
                  Multiple pathways to permanent residency after graduation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Express Entry System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 #1D50C9" />
                        <span>Canadian Experience Class (CEC)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 #1D50C9" />
                        <span>Federal Skilled Worker Program</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 #1D50C9" />
                        <span>Comprehensive Ranking System</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 #1D50C9" />
                        <span>Additional points for Canadian education</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Provincial Nominee Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 #1D50C9" />
                        <span>Ontario Immigrant Nominee Program</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 #1D50C9" />
                        <span>British Columbia PNP</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 #1D50C9" />
                        <span>Alberta Immigrant Nominee Program</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 #1D50C9" />
                        <span>Quebec Experience Program</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="costs" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Cost of Living in Major Canadian Cities</h3>
                <p className="text-lg text-neutral-600">
                  Monthly expenses breakdown for international students
                </p>
              </div>

              <div className="overflow-x-auto">
                <Card className="shadow-lg">
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-[#1D50C9] to-red-800 text-white">
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

            <TabsContent value="life" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Student Life in Canada</h3>
                <p className="text-lg text-neutral-600">
                  Experience Canada's welcoming multicultural society
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-6 h-6 mr-2 #1D50C9" />
                      Multicultural Society
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Diverse communities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Cultural festivals</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Two official languages</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Inclusive environment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-6 h-6 mr-2 #1D50C9" />
                      Natural Beauty
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Rocky Mountains</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Great Lakes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">National parks</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Outdoor activities</span>
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
                        <span className="text-sm">20 hours/week during studies</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Full-time during breaks</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">3-year PGWP</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Path to PR</span>
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
      <section className="py-20 bg-gradient-to-r from-#1a73e8 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Study in Canada?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your journey to Canadian education and permanent residency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-#1e3a8a hover:bg-blue-50 text-lg px-8">
                Book Free Canada Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                Download Canada Guide
                <BookOpen className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}