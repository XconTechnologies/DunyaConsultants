import { useState } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Users, Star, Award, Building2, ArrowLeft, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CompactConsultationForm from "@/components/compact-consultation-form";

// Office data with detailed information
const offices = [
  {
    id: "sargodha-head",
    city: "Sargodha",
    name: "Head Office",
    address: "Alif Tower, Buhadur Shah Zafar Road, Sargodha",
    phone: "+92 304 1110947",
    email: "info@dunyaconsultants.com",
    hours: "Mon–Sat 9 AM–7 PM",
    gradient: "from-[#1D50C9] to-purple-600",
    isHeadOffice: true,
    region: "Punjab",
    services: ["Visa Processing", "University Applications", "IELTS Training", "Career Counseling"],
    manager: "Mr. Abdul Majeed",
    staffCount: 25,
    established: "2015",
    successRate: "98%",
    studentsServed: "5000+",
    specializations: ["UK Universities", "Canada Immigration", "IELTS Preparation", "Scholarship Guidance"],
    description: "Our flagship office and headquarters, established in 2015 as the foundation of Dunya Consultants. This comprehensive center serves as our main hub for operations across Pakistan and international partnerships.",
    testimonials: [
      {
        name: "Ahmed Hassan",
        university: "University of Toronto",
        message: "The Sargodha team helped me secure admission to my dream university in Canada. Their guidance throughout the visa process was exceptional."
      },
      {
        name: "Fatima Khan", 
        university: "University of Manchester",
        message: "From IELTS preparation to final visa approval, the head office team supported me at every step. Highly professional service."
      }
    ],
    facilities: ["Private Consultation Rooms", "IELTS Testing Center", "Document Processing Unit", "Student Lounge", "Free WiFi", "Parking Available"],
    nearbyLandmarks: ["Sargodha University", "District Courts", "City Hospital", "Main Bus Stand"]
  },
  {
    id: "lahore-dha",
    city: "Lahore",
    name: "DHA Phase 1",
    address: "1st Floor, 174 6th Street 123, Sector H, DHA Phase 1, Lahore",
    phone: "+92 333 1741947",
    email: "lahore.dha@dunyaconsultants.com",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-green-600 to-teal-600",
    region: "Punjab",
    services: ["Visa Processing", "University Applications", "Document Verification"],
    manager: "Ms. Sarah Ahmed",
    staffCount: 15,
    established: "2017",
    successRate: "96%",
    studentsServed: "3500+",
    specializations: ["Australian Universities", "UK Visa Services", "Medical Programs", "Engineering Courses"],
    description: "Located in the heart of DHA Phase 1, our Lahore office serves the educational capital of Punjab with premium consultation services and personalized guidance for international education.",
    testimonials: [
      {
        name: "Ali Raza",
        university: "Monash University",
        message: "The DHA office team was incredibly helpful in securing my Australian student visa. Their expertise in documentation was outstanding."
      }
    ],
    facilities: ["Modern Consultation Rooms", "Document Scanning", "Interview Preparation Hall", "Waiting Lounge", "Refreshments"],
    nearbyLandmarks: ["DHA Sports Club", "Packages Mall", "Fortress Stadium", "American Consulate"]
  },
  {
    id: "islamabad",
    city: "Islamabad",
    name: "Blue Area",
    address: "Office 216, 2nd Floor, Evacuee Trust Complex, F-5/1, Islamabad",
    phone: "+92 308‑520‑6949",
    email: "islamabad@dunyaconsultants.com",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-purple-600 to-pink-600",
    region: "Federal",
    services: ["Visa Processing", "Embassy Relations", "Document Attestation"],
    manager: "Mr. Usman Ali",
    staffCount: 18,
    established: "2018",
    successRate: "97%",
    studentsServed: "2800+",
    specializations: ["US Universities", "Embassy Liaison", "Government Documentation", "Diplomatic Services"],
    description: "Strategically positioned in the federal capital, our Islamabad office specializes in embassy relations and government documentation services, providing direct access to diplomatic missions.",
    testimonials: [
      {
        name: "Zara Sheikh",
        university: "Harvard University",
        message: "The Islamabad team's connections with embassies made my US visa process smooth and efficient. Professional service at its best."
      }
    ],
    facilities: ["Embassy Liaison Desk", "Government Documentation", "VIP Consultation", "Conference Room", "Digital Services"],
    nearbyLandmarks: ["US Embassy", "UK High Commission", "Parliament House", "Supreme Court"]
  },
  {
    id: "karachi",
    city: "Karachi",
    name: "Gulshan-e-Iqbal",
    address: "205 Madina City Mall, Block 13-A, Gulshan-e-Iqbal, Karachi",
    phone: "+92 320 1731947",
    email: "karachi@dunyaconsultants.com",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-orange-600 to-red-600",
    region: "Sindh",
    services: ["Visa Processing", "University Applications", "IELTS Training"],
    manager: "Mr. Hassan Malik",
    staffCount: 20,
    established: "2016",
    successRate: "95%",
    studentsServed: "4200+",
    specializations: ["Business Programs", "Maritime Studies", "Medical Education", "Engineering"],
    description: "Our largest office outside Punjab, serving the commercial hub of Pakistan with comprehensive educational consultancy services and strong connections to international universities.",
    testimonials: [
      {
        name: "Ayesha Siddiqui",
        university: "University of Sydney",
        message: "The Karachi team helped me navigate the complex Australian visa requirements. Their attention to detail was remarkable."
      }
    ],
    facilities: ["IELTS Preparation Center", "Group Discussion Rooms", "Career Counseling", "Student Resource Center", "Online Testing"],
    nearbyLandmarks: ["University of Karachi", "NED University", "Jinnah Terminal", "Teen Talwar"]
  }
];

export default function OfficeDetails() {
  const [match, params] = useRoute("/offices/:officeId");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const office = offices.find(o => o.id === params?.officeId);

  if (!office) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Office Not Found</h1>
          <Link href="/offices">
            <Button>← Back to Offices</Button>
          </Link>
        </div>
      </div>
    );
  }

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
                Back to Offices
              </Button>
            </Link>
            {office.isHeadOffice && (
              <Badge className="bg-white/20 text-white border-white/30">
                Head Office
              </Badge>
            )}
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
                    <Button className={`bg-gradient-to-r ${office.gradient} text-white hover:opacity-90`}>
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
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${office.gradient}`}></div>
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
                    <Award className="w-5 h-5 mr-2" />
                    Office Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold #1845B3">{office.successRate}</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold #1845B3">{office.studentsServed}</div>
                    <div className="text-sm text-gray-600">Students Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold #1845B3">{office.staffCount}</div>
                    <div className="text-sm text-gray-600">Expert Staff</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold #1845B3">{office.established}</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Manager */}
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
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1D50C9] to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                      {office.manager.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-bold">{office.manager}</h3>
                    <p className="text-gray-600 text-sm">Office Manager</p>
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
                  <CardTitle>Nearby Landmarks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {office.nearbyLandmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span>{landmark}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      
      <CompactConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <Footer />
    </div>
  );
}