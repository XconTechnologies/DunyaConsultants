import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Users, Star, Award, Building2, ArrowLeft, Calendar, MessageCircle, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function IstanbulOffice() {
  const office = {
    id: "istanbul",
    city: "Istanbul",
    name: "Ataköy Towers",
    address: "Ataköy Towers, Ataköy 7‑8‑9‑10 Kısım Mah., Çobançeşme E‑5 Yan Yol Cad., A Blok Apt. No: 20/1, Bakırköy, Istanbul",
    phone: "+90 505‑305‑8047",
    email: "istanbul@dunyaconsultants.com",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-red-600 to-rose-600",
    region: "International",
    services: ["Student Counseling", "University Applications", "Student Support", "Visa Assistance", "Cultural Guidance"],
    manager: "Dr. Mehmet Özkan",
    staffCount: 9,
    established: "2019",
    successRate: "97%",
    studentsServed: "2200+",
    specializations: ["Turkish Universities", "European Programs", "Engineering Studies", "Medical Sciences", "Business Administration"],
    description: "Our Istanbul office, located in the vibrant Ataköy district, serves as our European hub, providing comprehensive support for Pakistani students studying in Turkey and other European countries. We specialize in Turkish university admissions, cultural integration, and ongoing student support services.",
    testimonials: [
      {
        name: "Hassan Yılmaz",
        university: "Istanbul Technical University",
        message: "The Istanbul office provided exceptional support throughout my engineering studies in Turkey. Their cultural guidance was invaluable."
      },
      {
        name: "Aisha Demir",
        university: "Boğaziçi University",
        message: "Outstanding assistance with my Turkish university application and integration. The team understood both Pakistani and Turkish cultures perfectly."
      },
      {
        name: "Saim Erdoğan",
        university: "Middle East Technical University",
        message: "Professional support from admission to graduation. The Istanbul team made my Turkish education journey smooth and successful."
      }
    ],
    facilities: ["Turkish-Urdu Translation", "Cultural Integration Support", "Student Housing Assistance", "Academic Support Center", "Emergency Services", "Free WiFi", "24/7 Student Helpline"],
    nearbyLandmarks: ["Ataköy Towers", "Bakırköy", "Ataköy Marina", "Istanbul Airport", "Yeşilköy Beach", "CNR Expo Center"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
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
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 mr-3" />
              <Badge className="bg-white/20 text-white border-white/30">International Office</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dunya Consultants {office.city}
            </h1>
            <p className="text-xl opacity-90 mb-6">{office.name} • Turkey</p>
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
                  <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                  Office Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600 text-sm">{office.address}</p>
                    <Badge variant="outline" className="mt-1 border-blue-200 text-blue-700">🇹🇷 Turkey</Badge>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-700 text-sm">
                      {office.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-700 text-sm">
                      {office.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Hours</p>
                    <p className="text-gray-600 text-sm">{office.hours}</p>
                    <p className="text-xs text-blue-600">* Turkey Standard Time (TRT)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Office Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Rate</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">{office.successRate}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Students Served</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">{office.studentsServed}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Staff Members</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">{office.staffCount}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Established</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">{office.established}</Badge>
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
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
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
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Star className="w-5 h-5 mr-2 text-blue-600" />
                  Specializations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {office.specializations.map((spec, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-blue-200 text-blue-700 hover:bg-blue-50"
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
                  <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                  Office Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {office.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 text-blue-500" />
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
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">European Hub Support</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Connect with our Istanbul office for specialized Turkish university admissions, cultural integration support, and ongoing student services across Europe.
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-white text-blue-600 hover:bg-blue-50"
                    size="lg"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white/10"
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Istanbul Office
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
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
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <p className="text-gray-600 text-sm italic mb-2">"{testimonial.message}"</p>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                      <p className="text-blue-600 text-xs">{testimonial.university}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Nearby Landmarks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {office.nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-3 h-3 text-blue-500" />
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