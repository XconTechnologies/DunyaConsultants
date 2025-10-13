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
  ArrowLeft
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { setStaticPageMeta } from "@/lib/seo";

const ukStats = {
  universities: "130+",
  internationalStudents: "500,000+",
  globalRank: "#2",
  averageCost: "£20,000-£45,000",
  workPermit: "2 years PSW",
  visaSuccess: "89%",
  programDuration: "3 years Bachelor's, 1 year Master's",
  intakeSeasons: "September, January, May"
};

const topUniversities = [
  {
    name: "University of Oxford",
    rank: 1,
    location: "Oxford, England",
    type: "Public",
    tuition: "£32,760",
    acceptance: "17.5%",
    founded: 1096,
    programs: ["Liberal Arts", "Medicine", "Law", "Engineering", "Business"],
    highlights: ["Oldest English university", "38 colleges", "28 UK Prime Ministers", "Tutorial system"],
    specialties: ["Oxford Medical School", "Said Business School", "Oxford Law Faculty"],
    campusSize: "Central Oxford",
    studentBody: "24,000 students"
  },
  {
    name: "University of Cambridge",
    rank: 2,
    location: "Cambridge, England",
    type: "Public",
    tuition: "£33,825",
    acceptance: "21%",
    founded: 1209,
    programs: ["Natural Sciences", "Engineering", "Mathematics", "Medicine", "Economics"],
    highlights: ["31 colleges", "121 Nobel laureates", "Silicon Fen", "Collegiate system"],
    specialties: ["Cambridge Medicine", "Judge Business School", "Trinity College"],
    campusSize: "City center",
    studentBody: "23,000 students"
  },
  {
    name: "Imperial College London",
    rank: 3,
    location: "London, England",
    type: "Public",
    tuition: "£35,100",
    acceptance: "14.3%",
    founded: 1907,
    programs: ["Engineering", "Medicine", "Natural Sciences", "Business"],
    highlights: ["STEM focus", "Research excellence", "Industry partnerships", "London location"],
    specialties: ["Imperial Business School", "Faculty of Engineering", "School of Medicine"],
    campusSize: "South Kensington",
    studentBody: "19,000 students"
  },
  {
    name: "London School of Economics",
    rank: 4,
    location: "London, England",
    type: "Public",
    tuition: "£24,984",
    acceptance: "8.9%",
    founded: 1895,
    programs: ["Economics", "Politics", "Law", "International Relations", "Management"],
    highlights: ["Social sciences focus", "16 Nobel laureates", "Global network", "Central London"],
    specialties: ["Economics Department", "Government Department", "Law School"],
    campusSize: "Holborn, London",
    studentBody: "12,000 students"
  },
  {
    name: "University of Edinburgh",
    rank: 5,
    location: "Edinburgh, Scotland",
    type: "Public",
    tuition: "£28,950",
    acceptance: "40-50%",
    founded: 1583,
    programs: ["Medicine", "Engineering", "Business", "Arts", "Sciences"],
    highlights: ["Historic university", "Beautiful campus", "Research intensive", "Cultural city"],
    specialties: ["Edinburgh Medical School", "Business School", "School of Engineering"],
    campusSize: "Multiple campuses",
    studentBody: "47,000 students"
  },
  {
    name: "King's College London",
    rank: 6,
    location: "London, England",
    type: "Public",
    tuition: "£31,050",
    acceptance: "13%",
    founded: 1829,
    programs: ["Medicine", "Law", "Business", "Engineering", "Humanities"],
    highlights: ["Central London", "Research excellence", "Historic institution", "5 campuses"],
    specialties: ["King's Medical School", "The Dickson Poon School of Law", "King's Business School"],
    campusSize: "Thames-side London",
    studentBody: "33,000 students"
  }
];

const livingCosts = [
  { city: "London", housing: "£800-1,500", food: "£250-400", transport: "£150", total: "£1,200-2,050" },
  { city: "Manchester", housing: "£400-700", food: "£200-300", transport: "£60", total: "£660-1,060" },
  { city: "Edinburgh", housing: "£500-800", food: "£220-320", transport: "£50", total: "£770-1,170" },
  { city: "Birmingham", housing: "£450-750", food: "£200-300", transport: "£70", total: "£720-1,120" },
  { city: "Glasgow", housing: "£350-600", food: "£180-280", transport: "£55", total: "£585-935" }
];

export default function UKGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setStaticPageMeta(
      "Study in UK",
      "Complete guide to studying in UK. Learn about top universities, admission requirements, costs, scholarships, visa process, and career opportunities for international students."
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16 relative overflow-hidden">
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
              <span className="text-3xl">🇬🇧</span>
              <span className="text-sm font-medium">Study in United Kingdom</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Study in the<br />
              <span className="text-blue-300">United Kingdom</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Experience centuries of academic tradition with world-class education, shorter degree programs, 
              and rich cultural heritage in the birthplace of the English language.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{ukStats.universities}</div>
                <div className="text-sm text-blue-100">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{ukStats.internationalStudents}</div>
                <div className="text-sm text-blue-100">International Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{ukStats.globalRank}</div>
                <div className="text-sm text-blue-100">Global Education Rank</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{ukStats.visaSuccess}</div>
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
                <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Why Choose UK for Studies?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="shadow-lg text-center p-6">
                    <Clock className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Shorter Duration</h3>
                    <p className="text-sm text-neutral-600">3-year Bachelor's, 1-year Master's</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <Award className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Historic Excellence</h3>
                    <p className="text-sm text-neutral-600">Centuries of academic tradition</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <Globe className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">Gateway to Europe</h3>
                    <p className="text-sm text-neutral-600">Easy access to European countries</p>
                  </Card>
                  <Card className="shadow-lg text-center p-6">
                    <BookOpen className="w-12 h-12 #1845B3 mx-auto mb-4" />
                    <h3 className="font-bold text-neutral-800 mb-2">English Heritage</h3>
                    <p className="text-sm text-neutral-600">Birthplace of English language</p>
                  </Card>
                </div>
              </motion.div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">UK Education System Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Total Universities</span>
                        <span className="font-bold #1845B3">{ukStats.universities}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">International Students</span>
                        <span className="font-bold #1845B3">{ukStats.internationalStudents}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Annual Tuition Range</span>
                        <span className="font-bold #1845B3">{ukStats.averageCost}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Post-Study Work Visa</span>
                        <span className="font-bold #1845B3">{ukStats.workPermit}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Global Education Rank</span>
                        <span className="font-bold #1845B3">{ukStats.globalRank}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Visa Success Rate</span>
                        <span className="font-bold #1845B3">{ukStats.visaSuccess}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Program Duration</span>
                        <span className="font-bold #1845B3">{ukStats.programDuration}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Intake Seasons</span>
                        <span className="font-bold #1845B3">{ukStats.intakeSeasons}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="universities" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Top Universities in UK</h3>
                <p className="text-lg text-neutral-600">
                  Explore Britain's most prestigious institutions with centuries of academic excellence
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
                          <h5 className="font-bold text-neutral-800 mb-3">Key Features</h5>
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

            <TabsContent value="costs" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Cost of Living in Major UK Cities</h3>
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

            <TabsContent value="life" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Student Life in UK</h3>
                <p className="text-lg text-neutral-600">
                  Experience rich British culture and academic traditions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-6 h-6 mr-2 #1D50C9" />
                      Academic Life
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Tutorial system</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Research opportunities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">World-class libraries</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Academic societies</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-6 h-6 mr-2 #1D50C9" />
                      Cultural Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Historic architecture</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Theatre and arts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Royal traditions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">European travel</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-6 h-6 mr-2 #1D50C9" />
                      Career Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Graduate Route visa</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Industry connections</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Internship programs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 #1D50C9" />
                        <span className="text-sm">Alumni networks</span>
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
              Ready to Study in UK?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience centuries of academic excellence with our expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-#1e3a8a hover:bg-blue-50 text-lg px-8">
                Book Free UK Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                Download UK Guide
                <BookOpen className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}