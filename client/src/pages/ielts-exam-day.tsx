import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  MapPin,
  FileText,
  AlertCircle,
  CheckCircle,
  Camera,
  Shield,
  Users,
  Calendar,
  Phone,
  Mail,
  ArrowLeft
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "wouter";

const examDaySchedule = [
  {
    time: "8:00 AM",
    activity: "Registration Opens",
    description: "Arrive at the test center and complete registration process"
  },
  {
    time: "8:30 AM",
    activity: "Identity Verification",
    description: "Present valid passport and complete biometric verification"
  },
  {
    time: "9:00 AM",
    activity: "Listening Test",
    description: "30 minutes + 10 minutes transfer time"
  },
  {
    time: "9:40 AM",
    activity: "Reading Test",
    description: "60 minutes (Academic or General Training)"
  },
  {
    time: "10:40 AM",
    activity: "Break",
    description: "10-minute break (optional)"
  },
  {
    time: "10:50 AM",
    activity: "Writing Test",
    description: "60 minutes (Task 1 & Task 2)"
  },
  {
    time: "11:50 AM",
    activity: "Speaking Test",
    description: "11-14 minutes (may be on a different day)"
  }
];

const whatToBring = [
  {
    item: "Valid Passport",
    description: "Original passport used for registration (no copies accepted)",
    essential: true
  },
  {
    item: "Test Confirmation",
    description: "Printed or digital confirmation of your test booking",
    essential: true
  },
  {
    item: "HB Pencils",
    description: "2-3 pencils with erasers (provided at some centers)",
    essential: false
  },
  {
    item: "Water Bottle",
    description: "Clear plastic bottle (label removed) for hydration",
    essential: false
  }
];

const whatNotToBring = [
  "Mobile phones or electronic devices",
  "Bags, purses, or personal belongings",
  "Food or beverages (except clear water)",
  "Study materials or dictionaries",
  "Jewelry or watches",
  "Pens or correction fluid",
  "Papers or notes"
];

const securityMeasures = [
  {
    title: "Biometric Verification",
    description: "Fingerprint scanning and photograph taken for identity verification"
  },
  {
    title: "Metal Detection",
    description: "Security screening similar to airport procedures"
  },
  {
    title: "Personal Search",
    description: "Physical search of pockets and belongings if required"
  },
  {
    title: "CCTV Monitoring",
    description: "Continuous video surveillance throughout the test"
  }
];

export default function IELTSExamDay() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <Link href="/ielts">
              <Button variant="outline" className="mb-8 text-white border-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to IELTS
              </Button>
            </Link>
            
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">IELTS Test Day Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              What to Expect<br />
              <span className="text-blue-300">On Exam Day</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Complete guide to your IELTS test day experience. Be fully prepared with our comprehensive 
              overview of procedures, requirements, and what to expect at the test center.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Important Reminders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <Alert className="border-blue-200 bg-blue-50">
                <AlertCircle className="h-4 w-4 #1845B3" />
                <AlertDescription className="text-#1565c0">
                  <strong>Arrive 30 minutes early</strong> - Late arrivals will not be admitted to the test
                </AlertDescription>
              </Alert>
              
              <Alert className="border-blue-200 bg-blue-50">
                <Shield className="h-4 w-4 #1845B3" />
                <AlertDescription className="text-#1565c0">
                  <strong>Bring valid passport</strong> - No other ID documents are accepted
                </AlertDescription>
              </Alert>
              
              <Alert className="border-blue-200 bg-blue-50">
                <CheckCircle className="h-4 w-4 #1845B3" />
                <AlertDescription className="text-#1565c0">
                  <strong>Follow dress code</strong> - Smart casual attire, avoid metal accessories
                </AlertDescription>
              </Alert>
            </div>
          </motion.div>

          {/* Test Day Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Test Day Schedule</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {examDaySchedule.map((item, index) => (
                    <div key={index} className="flex items-start space-x-6 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                          {item.time}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-neutral-800 mb-2">{item.activity}</h3>
                        <p className="text-neutral-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* What to Bring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <CheckCircle className="w-6 h-6 mr-3 #1D50C9" />
                    What to Bring
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {whatToBring.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-blue-50">
                      <div className="flex-shrink-0 mt-1">
                        {item.essential ? (
                          <Badge className="#1D50C9 hover:#1845B3">Essential</Badge>
                        ) : (
                          <Badge variant="outline">Optional</Badge>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800">{item.item}</h4>
                        <p className="text-sm text-neutral-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <AlertCircle className="w-6 h-6 mr-3 #1D50C9" />
                    What NOT to Bring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {whatNotToBring.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
                        <div className="w-2 h-2 #1D50C9 rounded-full flex-shrink-0"></div>
                        <span className="text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-#1565c0">
                      <strong>Note:</strong> Personal belongings will be stored in secure lockers. 
                      The test center is not responsible for lost or damaged items.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Security Procedures */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Security Procedures</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityMeasures.map((measure, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1D50C9] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-800 mb-3">{measure.title}</h3>
                    <p className="text-sm text-neutral-600">{measure.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Test Room Rules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Test Room Rules & Regulations</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 #1D50C9" />
                      Allowed During Test
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
                        <span>Raise hand to ask questions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
                        <span>Use provided tissues if needed</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
                        <span>Drink water during breaks</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
                        <span>Use bathroom with escort</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 #1D50C9" />
                      Strictly Prohibited
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
                        <span>Talking to other candidates</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
                        <span>Looking at other papers</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
                        <span>Eating or smoking</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
                        <span>Leaving without permission</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Speaking Test Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Speaking Test - Special Arrangements</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1D50C9] to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Same Day Speaking</h3>
                    <p className="text-neutral-600 mb-4">
                      Speaking test may be conducted on the same day as your written test, 
                      typically after the Writing module with a short break.
                    </p>
                    <Badge className="#1D50C9 hover:#1845B3">Most Common</Badge>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1D50C9] to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Separate Day Speaking</h3>
                    <p className="text-neutral-600 mb-4">
                      In some cases, speaking test may be scheduled up to 7 days before 
                      or after your written test date.
                    </p>
                    <Badge variant="outline">Alternative Schedule</Badge>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
                  <p className="text-#1565c0">
                    <strong>Important:</strong> You will receive confirmation of your exact speaking test 
                    time and date via email and SMS 48 hours before your test.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Card className="shadow-lg bg-gradient-to-r from-primary to-secondary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6">Need Help on Test Day?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 mb-3" />
                    <h4 className="font-bold mb-2">Emergency Hotline</h4>
                    <p className="text-blue-100">+92 304 1110947</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 mb-3" />
                    <h4 className="font-bold mb-2">Support Email</h4>
                    <p className="text-blue-100">ielts@pathvisa.com</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 mb-3" />
                    <h4 className="font-bold mb-2">Test Center Info</h4>
                    <p className="text-blue-100">Available on site</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}