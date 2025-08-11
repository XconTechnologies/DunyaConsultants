import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Users, Star, Award, Building2, ArrowLeft, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function GujranwalaOffice() {
  const office = {
    id: "gujranwala",
    city: "Gujranwala",
    name: "Peoples Colony",
    address: "Dunya Consultants, Peoples Colony Underpass, Gujranwala",
    phone: "+92 332‑999‑1947",
    email: "gujranwala@dunyaconsultants.com",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-yellow-600 to-orange-600",
    region: "Punjab",
    services: ["Student Counseling", "Visa Processing", "Test Preparation", "University Applications", "Document Verification"],
    manager: "Mr. Tariq Ahmed",
    established: "2019",
    specializations: ["UK Universities", "Australian Visa Services", "Engineering Programs", "Business Studies", "Medical Courses"],
    description: "Serving the industrial city of Gujranwala, our office provides comprehensive educational consultancy services with a focus on technical and business programs for international study.",
    testimonials: [
      {
        name: "Bilal Malik",
        university: "University of Manchester",
        message: "The Gujranwala team guided me perfectly for my UK engineering degree. Their expertise in technical programs was outstanding."
      },
      {
        name: "Sana Riaz",
        university: "Griffith University",
        message: "Excellent support throughout my Australian visa process. The team made everything smooth and stress-free."
      },
      {
        name: "Hassan Ali",
        university: "University of Edinburgh",
        message: "Professional consultation services. They helped me secure admission to one of the top UK universities."
      }
    ],
    facilities: ["Modern Consultation Rooms", "Document Processing", "Test Prep Center", "Student Lounge", "Free WiFi", "Parking Available", "Refreshment Area"],
    nearbyLandmarks: ["Peoples Colony Market", "Gujranwala Chamber of Commerce", "District Courts", "Civil Hospital", "Railway Station", "Main Bus Stand"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1D50C9] to-#1565c0 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/offices">
              <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Offices
              </Button>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dunya Consultants {office.city}
            </h1>
            <p className="text-xl opacity-90 mb-6">{office.name}</p>
            <p className="text-lg opacity-80 max-w-3xl">{office.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Building2 className="w-5 h-5 mr-2 #1845B3" />
                  Office Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <a href={`tel:${office.phone}`} className="#1845B3 hover:text-#1a73e8 text-sm">
                      {office.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a href={`mailto:${office.email}`} className="#1845B3 hover:text-#1a73e8 text-sm">
                      {office.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Hours</p>
                    <p className="text-gray-600 text-sm">{office.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Award className="w-5 h-5 mr-2 #1845B3" />
                  Office Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Established</span>
                  <Badge variant="secondary" className="bg-blue-100 text-#1a73e8">{office.established}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Manager</span>
                  <Badge variant="secondary" className="bg-blue-100 text-#1a73e8">{office.manager}</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Middle Column - Services & Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <CheckCircle className="w-5 h-5 mr-2 #1845B3" />
                  Our Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {office.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 #1D50C9 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Star className="w-5 h-5 mr-2 #1845B3" />
                  Specializations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {office.specializations.map((spec, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-blue-200 text-#1a73e8 hover:bg-blue-50"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Building2 className="w-5 h-5 mr-2 #1845B3" />
                  Office Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {office.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 #1D50C9" />
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Action Buttons & Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <Card className="shadow-lg border-0 bg-gradient-to-br from-[#1D50C9] to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Book a consultation with our expert counselors today and take the first step towards your international education goals.
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-white #1845B3 hover:bg-blue-50"
                    size="lg"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white/10"
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <MessageCircle className="w-5 h-5 mr-2 #1845B3" />
                  Student Testimonials
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {office.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 #1D50C9 pl-4 py-2"
                  >
                    <p className="text-gray-600 text-sm italic mb-2">"{testimonial.message}"</p>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                      <p className="#1845B3 text-xs">{testimonial.university}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <MapPin className="w-5 h-5 mr-2 #1845B3" />
                  Nearby Landmarks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {office.nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-3 h-3 #1D50C9" />
                      <span>{landmark}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}