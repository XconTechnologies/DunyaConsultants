import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Users, Star, Award, Building2, ArrowLeft, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CompactConsultationForm from "@/components/compact-consultation-form";
import CalendlyButton from "@/components/calendly-button";

export default function KarachiGulshan() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const office = {
    id: "karachi",
    city: "Karachi",
    name: "Gulshan-e-Iqbal",
    address: "205 Madina City Mall, Block 13-A, Gulshan-e-Iqbal, Karachi",
    phone: "+92 320 1731947",
    email: "karachi@dunyaconsultants.com",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-orange-600 to-red-600",
    region: "Sindh",
    services: ["Visa Processing", "University Applications", "IELTS Training", "Career Counseling", "Document Verification"],
    manager: "Mr. Hassan Malik",
    established: "2016",
    specializations: ["Business Programs", "Maritime Studies", "Medical Education", "Engineering", "Australian Universities"],
    description: "Our largest office outside Punjab, serving the commercial hub of Pakistan with comprehensive educational consultancy services and strong connections to international universities.",
    testimonials: [
      {
        name: "Ayesha Siddiqui",
        university: "University of Sydney",
        message: "The Karachi team helped me navigate the complex Australian visa requirements. Their attention to detail was remarkable."
      },
      {
        name: "Muhammad Ali",
        university: "University of Melbourne",
        message: "Excellent guidance for my engineering program in Australia. The team's expertise made all the difference."
      },
      {
        name: "Zainab Ahmed",
        university: "Griffith University",
        message: "Outstanding support throughout my medical program application. The Karachi office exceeded my expectations."
      }
    ],
    facilities: ["IELTS Preparation Center", "Group Discussion Rooms", "Career Counseling", "Student Resource Center", "Online Testing", "Cafeteria", "Study Areas"],
    nearbyLandmarks: ["University of Karachi", "NED University", "Jinnah Terminal", "Teen Talwar", "Gulshan-e-Iqbal Market", "Abul Hassan Ispahani Road"]
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
            <Badge className="bg-white/20 text-white border-white/30">
              Commercial Hub
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
                        <a href={`tel:${office.phone}`} className="#1845B3 hover:underline">
                          {office.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href={`mailto:${office.email}`} className="#1845B3 hover:underline">
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
                        <CheckCircle className="w-5 h-5 #1D50C9" />
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
                    <div key={index} className="border-l-4 #1D50C9 pl-4 py-2">
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
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
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
                    <Award className="w-5 h-5 mr-2 #1845B3" />
                    Office Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold #1845B3">{office.established}</div>
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
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1D50C9] to-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
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
                        <div className="w-2 h-2 #1D50C9 rounded-full"></div>
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
          className="mt-16 bg-gradient-to-r from-[#1D50C9] to-red-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Discover Your Academic Future</h2>
          <p className="mb-6 opacity-90">
            Visit our Karachi office for comprehensive guidance on international business and medical programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-[#1845B3]">
              <Phone className="w-4 h-4 mr-2" />
              Call Karachi Office
            </Button>
          </div>
        </motion.div>
      </div>
      
      <CompactConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <Footer />
    </div>
  );
}
