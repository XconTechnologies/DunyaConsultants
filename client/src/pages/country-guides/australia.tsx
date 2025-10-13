import { useState, useRef, useEffect } from "react";
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
  Sun,
  Waves
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { setStaticPageMeta } from "@/lib/seo";

const australiaStats = {
  universities: "40+",
  internationalStudents: "450,000+",
  globalRank: "#4",
  averageCost: "AUD 30,000-60,000",
  workPermit: "2-4 years PSW",
  visaSuccess: "87%",
  programDuration: "3 years Bachelor's, 2 years Master's",
  intakeSeasons: "February, July, November"
};

const topUniversities = [
  {
    name: "University of Melbourne",
    rank: 1,
    location: "Melbourne, Victoria",
    type: "Public",
    tuition: "AUD 45,824",
    acceptance: "70-80%",
    founded: 1853,
    programs: ["Medicine", "Law", "Business", "Engineering", "Arts"],
    highlights: ["Top-ranked in Australia", "Research excellence", "Beautiful campus", "Global reputation"],
    specialties: ["Melbourne Medical School", "Melbourne Law School", "Melbourne Business School"],
    campusSize: "Parkville campus",
    studentBody: "50,000 students"
  },
  {
    name: "Australian National University",
    rank: 2,
    location: "Canberra, ACT",
    type: "Public",
    tuition: "AUD 47,940",
    acceptance: "35%",
    founded: 1946,
    programs: ["International Relations", "Economics", "Engineering", "Sciences"],
    highlights: ["National university", "Research focused", "Government connections", "Small class sizes"],
    specialties: ["Crawford School of Public Policy", "ANU Medical School", "College of Engineering"],
    campusSize: "358 hectares",
    studentBody: "25,000 students"
  },
  {
    name: "University of Sydney",
    rank: 3,
    location: "Sydney, NSW",
    type: "Public",
    tuition: "AUD 50,000",
    acceptance: "30%",
    founded: 1850,
    programs: ["Medicine", "Law", "Business", "Engineering", "Architecture"],
    highlights: ["Oldest university", "Historic sandstone buildings", "City location", "Strong alumni"],
    specialties: ["Sydney Medical School", "Sydney Law School", "Sydney Business School"],
    campusSize: "72 hectares",
    studentBody: "73,000 students"
  },
  {
    name: "University of Queensland",
    rank: 4,
    location: "Brisbane, Queensland",
    type: "Public",
    tuition: "AUD 44,272",
    acceptance: "63%",
    founded: 1909,
    programs: ["Medicine", "Engineering", "Business", "Sciences", "Agriculture"],
    highlights: ["Group of Eight member", "Research intensive", "Beautiful campus", "Strong industry links"],
    specialties: ["UQ Business School", "Faculty of Medicine", "School of Engineering"],
    campusSize: "Multiple campuses",
    studentBody: "55,000 students"
  },
  {
    name: "Monash University",
    rank: 5,
    location: "Melbourne, Victoria",
    type: "Public",
    tuition: "AUD 45,800",
    acceptance: "40%",
    founded: 1958,
    programs: ["Medicine", "Engineering", "Business", "Pharmacy", "IT"],
    highlights: ["Largest university", "Global presence", "Innovation focus", "Industry partnerships"],
    specialties: ["Monash Business School", "Faculty of Medicine", "Faculty of Engineering"],
    campusSize: "Multiple campuses",
    studentBody: "86,000 students"
  },
  {
    name: "University of Western Australia",
    rank: 6,
    location: "Perth, WA",
    type: "Public",
    tuition: "AUD 41,460",
    acceptance: "70%",
    founded: 1911,
    programs: ["Medicine", "Engineering", "Business", "Law", "Sciences"],
    highlights: ["Beautiful campus", "Research excellence", "Strong industry connections", "Small class sizes"],
    specialties: ["UWA Business School", "Medical School", "School of Engineering"],
    campusSize: "65 hectares",
    studentBody: "25,000 students"
  }
];

const livingCosts = [
  { city: "Sydney", housing: "AUD 1,500-2,500", food: "AUD 400-600", transport: "AUD 150", total: "AUD 2,050-3,250" },
  { city: "Melbourne", housing: "AUD 1,200-2,000", food: "AUD 350-550", transport: "AUD 150", total: "AUD 1,700-2,700" },
  { city: "Brisbane", housing: "AUD 1,000-1,600", food: "AUD 350-500", transport: "AUD 130", total: "AUD 1,480-2,230" },
  { city: "Perth", housing: "AUD 900-1,500", food: "AUD 300-450", transport: "AUD 120", total: "AUD 1,320-2,070" },
  { city: "Adelaide", housing: "AUD 800-1,300", food: "AUD 300-450", transport: "AUD 100", total: "AUD 1,200-1,850" }
];

export default function AustraliaGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setStaticPageMeta(
      "Study in Australia",
      "Complete guide to studying in Australia. Learn about top universities, admission requirements, costs, scholarships, visa process, and career opportunities for international students."
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100" ref={ref}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-[#1565c0]/30 to-[#1845B3]/30"></div>
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
              <span className="text-3xl">🇦🇺</span>
              <span className="text-sm font-medium">Study in Australia</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Study in<br />
              <span className="text-blue-300">Australia</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Experience world-class education in the land down under. Enjoy excellent lifestyle, 
              beautiful beaches, and strong job market opportunities in one of the world's most livable countries.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{australiaStats.universities}</div>
                <div className="text-sm text-blue-100">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{australiaStats.internationalStudents}</div>
                <div className="text-sm text-blue-100">International Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{australiaStats.globalRank}</div>
                <div className="text-sm text-blue-100">Global Education Rank</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{australiaStats.visaSuccess}</div>
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
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="universities">Universities</TabsTrigger>
              <TabsTrigger value="costs">Costs</TabsTrigger>
              <TabsTrigger value="life">Student Life</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Why Choose Australia for Studies?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="shadow-lg text-center p-6">
                    <Sun className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Great Climate</h3>
                    <p className="text-sm text-neutral-600">Year-round sunshine and warmth</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <Waves className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Beautiful Beaches</h3>
                    <p className="text-sm text-neutral-600">World-famous coastal lifestyle</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <TrendingUp className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Strong Economy</h3>
                    <p className="text-sm text-neutral-600">Excellent job opportunities</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <Users className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Multicultural</h3>
                    <p className="text-sm text-neutral-600">Diverse and welcoming society</p>
                  </Card>
                </div>
              </motion.div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Australia Education System Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Total Universities</span>
                        <span className="font-bold #1845B3">{australiaStats.universities}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">International Students</span>
                        <span className="font-bold #1845B3">{australiaStats.internationalStudents}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Annual Tuition Range</span>
                        <span className="font-bold #1845B3">{australiaStats.averageCost}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Post-Study Work Visa</span>
                        <span className="font-bold #1845B3">{australiaStats.workPermit}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Global Education Rank</span>
                        <span className="font-bold #1845B3">{australiaStats.globalRank}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Visa Success Rate</span>
                        <span className="font-bold #1845B3">{australiaStats.visaSuccess}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Program Duration</span>
                        <span className="font-bold #1845B3">{australiaStats.programDuration}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Intake Seasons</span>
                        <span className="font-bold #1845B3">{australiaStats.intakeSeasons}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="universities" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Top Universities in Australia</h3>
                <p className="text-lg text-neutral-600">
                  Explore Australia's leading Group of Eight universities
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
                            <div className="w-16 h-16 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center text-white font-bold text-xl">
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
                            <div className="text-sm text-neutral-600">Campus</div>
                            <div className="font-bold #1845B3">{university.campusSize}</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <GraduationCap className="w-6 h-6 #1845B3 mx-auto mb-2" />
                            <div className="text-sm text-neutral-600">Student Body</div>
                            <div className="font-bold #1845B3">{university.studentBody}</div>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-orange-700 hover:to-[#1a73e8] text-white">
                          Get Admission Guidance for {university.name}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="costs" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Cost of Living in Major Australian Cities</h3>
                <p className="text-lg text-neutral-600">
                  Monthly expenses breakdown for international students
                </p>
              </div>

              <div className="overflow-x-auto">
                <Card className="shadow-lg">
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white">
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
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Student Life in Australia</h3>
                <p className="text-lg text-neutral-600">
                  Experience the Australian lifestyle and culture
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sun className="w-6 h-6 mr-2 #1D50C9" />
                      Outdoor Lifestyle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Beach culture</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Surfing and water sports</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Hiking and camping</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">BBQ culture</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-6 h-6 mr-2 #1D50C9" />
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
                        <span className="text-sm">International cuisine</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Cultural festivals</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Friendly locals</span>
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
                        <span className="text-sm">Post-study work visa</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">High minimum wage</span>
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
      <section className="py-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Study in Australia?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience world-class education with an unbeatable lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-#1e3a8a hover:bg-blue-50 text-lg px-8">
                Book Free Australia Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                Download Australia Guide
                <BookOpen className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}