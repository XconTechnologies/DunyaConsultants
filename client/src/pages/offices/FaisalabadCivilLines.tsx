import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Users, Star, Award, Building2, ArrowLeft, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function FaisalabadCivilLines() {
  const office = {
    id: "faisalabad",
    city: "Faisalabad",
    name: "Civil Lines",
    address: "Al-Fatah Centre, Katchery Rd, Civil Lines, Faisalabad",
    phone: "+92 333‑820‑1947",
    email: "faisalabad@dunyaconsultants.com",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-yellow-600 to-orange-600",
    region: "Punjab",
    services: ["Student Counseling", "Document Preparation", "Test Preparation", "Visa Processing", "University Applications"],
    manager: "Mr. Shahid Hussain",
    staffCount: 10,
    established: "2019",
    successRate: "93%",
    studentsServed: "2200+",
    specializations: ["UK Universities", "Canadian Colleges", "Test Preparation", "Document Services", "Career Guidance"],
    description: "Serving the industrial city of Faisalabad with dedicated educational consultancy services, specializing in student counseling and comprehensive test preparation programs.",
    testimonials: [
      {
        name: "Sana Malik",
        university: "University of Windsor",
        message: "The Faisalabad team provided excellent guidance for my Canadian college application. Their support was invaluable throughout the process."
      },
      {
        name: "Ahmad Raza",
        university: "Coventry University",
        message: "Outstanding IELTS preparation and UK visa support. The Civil Lines office team helped me achieve my study abroad goals."
      },
      {
        name: "Fatima Noor",
        university: "Seneca College",
        message: "Professional service from start to finish. The team's expertise in document preparation made my application process smooth."
      }
    ],
    facilities: ["Student Counseling Rooms", "IELTS Test Prep", "Document Processing", "Career Guidance Center", "Study Materials", "Free WiFi", "Consultation Areas"],
    nearbyLandmarks: ["Government College University", "Faisalabad Chamber", "Civil Lines Market", "District Courts", "Clock Tower", "Lyallpur Museum"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      {/* Header */}
      <div className={`bg-gradient-to-r ${office.gradient} text-white pt-32 pb-16`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/offices">
              <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Offices
              </Button>
            </Link>
            <Badge className="bg-white/20 text-white border-white/30">
              Industrial City
            </Badge>
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

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href={`tel:${office.phone}`} className="text-blue-600 hover:underline">
                          {office.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                          {office.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-gray-600">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button className={`bg-gradient-to-r ${office.gradient}`}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                    <Button variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services Offered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Services Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {office.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-yellow-500" />
                        <span className="font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Our Specializations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {office.specializations.map((spec, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Student Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Student Success Stories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {office.testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-yellow-500 pl-4 py-2">
                      <p className="text-gray-700 italic mb-2">"{testimonial.message}"</p>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.university}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Office Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {office.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Office Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{office.successRate}</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{office.studentsServed}</div>
                    <div className="text-sm text-gray-600">Students Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{office.staffCount}</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{office.established}</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Manager Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Office Manager
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                      {office.manager.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-semibold">{office.manager}</h3>
                    <p className="text-sm text-gray-600">Office Manager</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Nearby Landmarks */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Nearby Landmarks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {office.nearbyLandmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Begin Your Educational Journey</h2>
          <p className="mb-6 opacity-90">
            Visit our Faisalabad office for personalized counseling and comprehensive test preparation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Calendar className="w-4 h-4 mr-2" />
              Book Counseling Session
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yellow-600">
              <Phone className="w-4 h-4 mr-2" />
              Call Faisalabad Office
            </Button>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}