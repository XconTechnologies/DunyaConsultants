import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Play,
  Download,
  Globe,
  Headphones,
  PenTool,
  MessageSquare,
  Target,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ieltsFeatures = [
  {
    icon: Headphones,
    title: "Listening",
    duration: "30 minutes",
    sections: 4,
    description: "Conversations and monologues in various accents",
    tips: ["Practice with different accents", "Take notes while listening", "Pay attention to keywords"]
  },
  {
    icon: BookOpen,
    title: "Reading",
    duration: "60 minutes",
    sections: 3,
    description: "Academic and general training texts",
    tips: ["Skim for main ideas first", "Manage your time effectively", "Practice different question types"]
  },
  {
    icon: PenTool,
    title: "Writing",
    duration: "60 minutes",
    sections: 2,
    description: "Task 1: Graph/Chart description, Task 2: Essay",
    tips: ["Plan your structure", "Use varied vocabulary", "Check grammar and spelling"]
  },
  {
    icon: MessageSquare,
    title: "Speaking",
    duration: "11-14 minutes",
    sections: 3,
    description: "Face-to-face conversation with examiner",
    tips: ["Speak clearly and fluently", "Expand your answers", "Use natural expressions"]
  }
];

const testCenters = [
  {
    name: "British Council Lahore",
    address: "17 Shadman Market, Lahore",
    phone: "+92-42-111-424-424",
    email: "info.lahore@britishcouncil.org.pk",
    availability: "Daily",
    nextSlot: "2024-07-25"
  },
  {
    name: "British Council Karachi",
    address: "Block 5, Clifton, Karachi",
    phone: "+92-21-111-424-424",
    email: "info.karachi@britishcouncil.org.pk",
    availability: "Daily",
    nextSlot: "2024-07-22"
  },
  {
    name: "British Council Islamabad",
    address: "House 5, Street 58, F-7/4, Islamabad",
    phone: "+92-51-111-424-424",
    email: "info.islamabad@britishcouncil.org.pk",
    availability: "Daily",
    nextSlot: "2024-07-28"
  },
  {
    name: "IDP Education Lahore",
    address: "96-B, MM Alam Road, Gulberg III, Lahore",
    phone: "+92-42-111-111-432",
    email: "lahore@idp.com",
    availability: "6 days/week",
    nextSlot: "2024-07-20"
  }
];

const preparationCourses = [
  {
    title: "IELTS Foundation Course",
    duration: "8 weeks",
    price: "PKR 25,000",
    features: ["Basic to Intermediate level", "All 4 modules covered", "Practice tests included", "Study materials provided"],
    popular: false
  },
  {
    title: "IELTS Intensive Course",
    duration: "4 weeks",
    price: "PKR 35,000",
    features: ["Intermediate to Advanced", "Daily practice sessions", "Mock tests weekly", "Individual feedback"],
    popular: true
  },
  {
    title: "IELTS One-on-One",
    duration: "Flexible",
    price: "PKR 3,000/hour",
    features: ["Personalized training", "Flexible scheduling", "Targeted improvement", "Expert instructors"],
    popular: false
  }
];

const bandRequirements = [
  { country: "UK", undergraduate: "6.0-6.5", postgraduate: "6.5-7.0", immigration: "6.0" },
  { country: "Australia", undergraduate: "6.0-6.5", postgraduate: "6.5-7.0", immigration: "6.0" },
  { country: "Canada", undergraduate: "6.0-6.5", postgraduate: "6.5-7.0", immigration: "6.0" },
  { country: "USA", undergraduate: "6.0-6.5", postgraduate: "6.5-7.0", immigration: "N/A" },
  { country: "New Zealand", undergraduate: "6.0", postgraduate: "6.5", immigration: "6.5" }
];

export default function IELTSPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-700 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">IELTS Preparation & Booking</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master Your<br />
              <span className="text-yellow-300">IELTS Journey</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive IELTS preparation, expert coaching, and convenient test booking. 
              Achieve your target band score with Pakistan's leading IELTS specialists.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">15K+</div>
                <div className="text-sm text-blue-100">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">8.5</div>
                <div className="text-sm text-blue-100">Average Band Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">20+</div>
                <div className="text-sm text-blue-100">Expert Trainers</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 text-lg px-8">
                Book IELTS Test
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                Start Preparation
                <BookOpen className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* IELTS Overview Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="preparation">Preparation</TabsTrigger>
              <TabsTrigger value="booking">Test Booking</TabsTrigger>
              <TabsTrigger value="requirements">Band Requirements</TabsTrigger>
              <TabsTrigger value="tips">Expert Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              {/* Test Format */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">IELTS Test Format</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ieltsFeatures.map((feature, index) => (
                    <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                            <feature.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-neutral-800">{feature.title}</h3>
                          <div className="text-sm text-neutral-600 mt-2">
                            <div className="flex items-center justify-center space-x-4">
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {feature.duration}
                              </span>
                              <span className="flex items-center">
                                <Target className="w-4 h-4 mr-1" />
                                {feature.sections} sections
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-neutral-600 text-sm mb-4">{feature.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-neutral-800 text-sm">Key Tips:</h4>
                          {feature.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-neutral-600">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Quick Test Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Global Recognition</h3>
                    <p className="text-neutral-600">Accepted by 11,000+ organizations worldwide</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Flexible Dates</h3>
                    <p className="text-neutral-600">48 test dates available throughout the year</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Quick Results</h3>
                    <p className="text-neutral-600">Get your results within 13 days</p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="preparation" className="space-y-12">
              {/* Preparation Courses */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">IELTS Preparation Courses</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {preparationCourses.map((course, index) => (
                    <Card key={course.title} className={`shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${course.popular ? 'ring-2 ring-primary' : ''}`}>
                      {course.popular && (
                        <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-neutral-800 mb-2">{course.title}</h3>
                          <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                          <div className="text-sm text-neutral-600">{course.duration}</div>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          {course.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-neutral-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button className={`w-full ${course.popular ? 'bg-primary hover:bg-primary/90' : 'bg-neutral-800 hover:bg-neutral-700'}`}>
                          Enroll Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Free Resources */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Free IELTS Resources</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-neutral-800 mb-2">Practice Tests</h4>
                    <p className="text-sm text-neutral-600 mb-4">Complete mock tests with answers</p>
                    <Button size="sm" variant="outline">Download</Button>
                  </Card>
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <Play className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-neutral-800 mb-2">Video Lessons</h4>
                    <p className="text-sm text-neutral-600 mb-4">Expert-led preparation videos</p>
                    <Button size="sm" variant="outline">Watch Now</Button>
                  </Card>
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-neutral-800 mb-2">Study Guides</h4>
                    <p className="text-sm text-neutral-600 mb-4">Comprehensive preparation materials</p>
                    <Button size="sm" variant="outline">Access</Button>
                  </Card>
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-neutral-800 mb-2">Band Predictor</h4>
                    <p className="text-sm text-neutral-600 mb-4">Estimate your current level</p>
                    <Button size="sm" variant="outline">Try Now</Button>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="booking" className="space-y-12">
              {/* Test Booking Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Book Your IELTS Test</h2>
                  
                  <Card className="shadow-lg p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">Test Type</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select test type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="academic">IELTS Academic</SelectItem>
                              <SelectItem value="general">IELTS General Training</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">Test Center</label>
                          <Select value={selectedCenter} onValueChange={setSelectedCenter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select test center" />
                            </SelectTrigger>
                            <SelectContent>
                              {testCenters.map((center) => (
                                <SelectItem key={center.name} value={center.name}>
                                  {center.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">Preferred Date</label>
                          <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                            <Input placeholder="As per passport" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                            <Input type="email" placeholder="your@email.com" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                          <Input placeholder="+92 300 1234567" />
                        </div>
                        
                        <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                          Book Test - PKR 54,500
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <h3 className="font-bold text-neutral-800 mb-4">Test Fee Includes:</h3>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">IELTS test fee</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Test Report Form (TRF)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Online results access</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Free score sending to 5 institutions</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 p-6 rounded-lg">
                          <h3 className="font-bold text-neutral-800 mb-4">Important Notes:</h3>
                          <div className="space-y-2 text-sm text-neutral-600">
                            <p>• Valid passport required for registration</p>
                            <p>• Results available within 13 calendar days</p>
                            <p>• Rescheduling available (fees apply)</p>
                            <p>• Test center specific guidelines apply</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              {/* Test Centers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-neutral-800 mb-8 text-center">Available Test Centers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {testCenters.map((center, index) => (
                    <Card key={center.name} className="shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-neutral-800 mb-3">{center.name}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-neutral-500" />
                            <span>{center.address}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-neutral-500" />
                            <span>{center.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-neutral-500" />
                            <span>{center.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-neutral-500" />
                            <span>Next available: {center.nextSlot}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-12">
              {/* Band Requirements Table */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">IELTS Band Requirements by Country</h2>
                
                <Card className="shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                        <tr>
                          <th className="px-6 py-4 text-left">Country</th>
                          <th className="px-6 py-4 text-center">Undergraduate</th>
                          <th className="px-6 py-4 text-center">Postgraduate</th>
                          <th className="px-6 py-4 text-center">Immigration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bandRequirements.map((req, index) => (
                          <tr key={req.country} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 font-medium">{req.country}</td>
                            <td className="px-6 py-4 text-center">{req.undergraduate}</td>
                            <td className="px-6 py-4 text-center">{req.postgraduate}</td>
                            <td className="px-6 py-4 text-center">{req.immigration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
                
                <div className="text-center mt-6">
                  <p className="text-neutral-600 text-sm">
                    *Requirements may vary by institution. Always check specific university requirements.
                  </p>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="tips" className="space-y-12">
              {/* Expert Tips */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Expert IELTS Tips</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="w-5 h-5 mr-2 text-yellow-500" />
                        Before the Test
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Practice with authentic IELTS materials</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Take regular mock tests under timed conditions</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Focus on your weakest skills first</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Build vocabulary systematically</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Get familiar with test format</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="w-5 h-5 mr-2 text-blue-500" />
                        On Test Day
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Arrive at least 30 minutes early</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Bring valid passport and pencils</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Read instructions carefully</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Manage your time effectively</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">Stay calm and confident</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Achieve Your Target Band Score?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful candidates who achieved their IELTS goals with our expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8">
                Start Free Consultation
                <Phone className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                Call Now: +92 304 1110947
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}