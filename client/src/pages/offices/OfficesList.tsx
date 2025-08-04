import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Clock, Building2, Users, Star, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Office data
const offices = [
  {
    id: "sargodha-head",
    city: "Sargodha",
    name: "Head Office",
    address: "Alif Tower, Buhadur Shah Zafar Road, Sargodha",
    phone: "+92 304 1110947",
    hours: "Mon–Sat 9 AM–7 PM",
    gradient: "from-blue-600 to-purple-600",
    isHeadOffice: true,
    region: "Punjab",
    services: ["Visa Processing", "University Applications", "IELTS Training", "Career Counseling"],
    staffCount: 25,
    successRate: "98%",
    studentsServed: "5000+"
  },
  {
    id: "lahore-dha",
    city: "Lahore",
    name: "DHA Phase 1",
    address: "1st Floor, 174 6th Street 123, Sector H, DHA Phase 1, Lahore",
    phone: "+92 300‑167‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-green-600 to-teal-600",
    region: "Punjab",
    services: ["Visa Processing", "University Applications", "Document Verification"],
    staffCount: 15,
    successRate: "96%",
    studentsServed: "3500+"
  },
  {
    id: "lahore-johar",
    city: "Lahore",
    name: "Johar Town",
    address: "1st Floor, 85 /R‑1, Phase 2, Johar Town, Lahore",
    phone: "+92 300‑827‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-orange-600 to-red-600",
    region: "Punjab",
    services: ["Student Counseling", "Test Preparation", "Career Guidance"],
    staffCount: 12,
    successRate: "94%",
    studentsServed: "2800+"
  },
  {
    id: "islamabad",
    city: "Islamabad",
    name: "Blue Area",
    address: "Mezzanine‑3, ATS Centre, Fazal‑e‑Haq Road, Blue Area, Islamabad",
    phone: "+92 333‑777‑5458",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-indigo-600 to-blue-600",
    region: "Federal",
    services: ["Visa Processing", "Embassy Relations", "Document Attestation"],
    staffCount: 18,
    successRate: "97%",
    studentsServed: "2800+"
  },
  {
    id: "karachi",
    city: "Karachi",
    name: "Gulshan-e-Iqbal",
    address: "205 Madina City Mall, Block 13-A, Gulshan-e-Iqbal, Karachi",
    phone: "+92 305‑555‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-orange-600 to-red-600",
    region: "Sindh",
    services: ["Visa Processing", "University Applications", "IELTS Training"],
    staffCount: 20,
    successRate: "95%",
    studentsServed: "4200+"
  },
  {
    id: "faisalabad",
    city: "Faisalabad",
    name: "Civil Lines",
    address: "Al-Fatah Centre, Katchery Rd, Civil Lines, Faisalabad",
    phone: "+92 333‑820‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-yellow-600 to-orange-600",
    region: "Punjab",
    services: ["Student Counseling", "Document Preparation", "Test Preparation"],
    staffCount: 10,
    successRate: "93%",
    studentsServed: "2200+"
  },
  {
    id: "gujranwala",
    city: "Gujranwala",
    name: "Peoples Colony",
    address: "1st Floor, Plaza 83, Peoples Colony No. 1, Gujranwala",
    phone: "+92 300‑167‑1955",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-cyan-600 to-blue-600",
    region: "Punjab",
    services: ["Student Counseling", "University Applications", "Test Preparation"],
    staffCount: 8,
    successRate: "92%",
    studentsServed: "1800+"
  },
  {
    id: "sialkot",
    city: "Sialkot",
    name: "Cantonment",
    address: "2nd Floor, Malik Center, Paris Road, Sialkot Cantt, Sialkot",
    phone: "+92 300‑167‑1956",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-purple-600 to-pink-600",
    region: "Punjab",
    services: ["Visa Processing", "Document Verification", "Career Guidance"],
    staffCount: 7,
    successRate: "91%",
    studentsServed: "1600+"
  },
  {
    id: "gujrat",
    city: "Gujrat",
    name: "GT Road",
    address: "1st Floor, Malik Plaza, G.T Road, Gujrat",
    phone: "+92 300‑167‑1957",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-teal-600 to-green-600",
    region: "Punjab",
    services: ["Student Counseling", "University Applications", "Document Preparation"],
    staffCount: 6,
    successRate: "90%",
    studentsServed: "1400+"
  },
  {
    id: "bahawalpur",
    city: "Bahawalpur",
    name: "Muslim Town",
    address: "Ground Floor, Al-Madina Plaza, Muslim Town, Bahawalpur",
    phone: "+92 300‑167‑1958",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-amber-600 to-orange-600",
    region: "Punjab",
    services: ["Visa Processing", "Test Preparation", "Career Guidance"],
    staffCount: 5,
    successRate: "89%",
    studentsServed: "1200+"
  },
  {
    id: "mian-channu",
    city: "Mian Channu",
    name: "Moti Plaza",
    address: "1st Floor, Moti Plaza, Faisalabad Road, Mian Channu",
    phone: "+92 300‑167‑1959",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-rose-600 to-red-600",
    region: "Punjab",
    services: ["Student Counseling", "Document Verification", "University Applications"],
    staffCount: 4,
    successRate: "88%",
    studentsServed: "1000+"
  },
  {
    id: "mandi-bahauddin",
    city: "Mandi Bahauddin",
    name: "Punjab Center",
    address: "Ground Floor, Punjab Center, GT Road, Mandi Bahauddin",
    phone: "+92 300‑167‑1960",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-emerald-600 to-teal-600",
    region: "Punjab",
    services: ["Visa Processing", "Student Counseling", "Test Preparation"],
    staffCount: 4,
    successRate: "87%",
    studentsServed: "900+"
  },
  {
    id: "sheikhupura",
    city: "Sheikhupura",
    name: "Stadium Road",
    address: "1st Floor, Al-Noor Plaza, Stadium Road, Sheikhupura",
    phone: "+92 300‑167‑1961",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-violet-600 to-purple-600",
    region: "Punjab",
    services: ["University Applications", "Document Preparation", "Career Guidance"],
    staffCount: 5,
    successRate: "89%",
    studentsServed: "1100+"
  },
  {
    id: "multan",
    city: "Multan",
    name: "Shalimar Metro",
    address: "2nd Floor, Shalimar Metro Center, Gulgasht Colony, Multan",
    phone: "+92 300‑167‑1962",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-lime-600 to-green-600",
    region: "Punjab",
    services: ["Visa Processing", "University Applications", "Student Counseling"],
    staffCount: 9,
    successRate: "93%",
    studentsServed: "2000+"
  },
  {
    id: "peshawar",
    city: "Peshawar",
    name: "Phase 3",
    address: "Ground Floor, Malik Center, Phase 3, Hayatabad, Peshawar",
    phone: "+92 300‑167‑1963",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-sky-600 to-blue-600",
    region: "KPK",
    services: ["Student Counseling", "Visa Processing", "Test Preparation"],
    staffCount: 7,
    successRate: "91%",
    studentsServed: "1700+"
  },
  {
    id: "jhelum",
    city: "Jhelum",
    name: "Sultan Plaza",
    address: "1st Floor, Sultan Plaza, Civil Lines, Jhelum",
    phone: "+92 300‑167‑1964",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-indigo-600 to-purple-600",
    region: "Punjab",
    services: ["University Applications", "Document Verification", "Career Guidance"],
    staffCount: 6,
    successRate: "90%",
    studentsServed: "1300+"
  },
  {
    id: "mardan",
    city: "Mardan",
    name: "Walyan Commercial",
    address: "Ground Floor, Walyan Commercial Center, Mardan",
    phone: "+92 300‑167‑1965",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-slate-600 to-gray-600",
    region: "KPK",
    services: ["Student Counseling", "Visa Processing", "University Applications"],
    staffCount: 5,
    successRate: "88%",
    studentsServed: "1200+"
  },
  {
    id: "jeddah",
    city: "Jeddah",
    name: "Engineering Square",
    address: "Above Topten, Engineering Square, Makarona Street, 2nd Floor, Office 27, Jeddah 23447",
    phone: "+966 50‑851‑0785",
    hours: "Mon–Thu 10 AM–5 PM",
    gradient: "from-amber-600 to-yellow-600",
    region: "International",
    services: ["Visa Processing", "Document Attestation", "Student Support"],
    staffCount: 8,
    successRate: "96%",
    studentsServed: "1800+"
  },
  {
    id: "istanbul",
    city: "Istanbul",
    name: "Ataköy Towers",
    address: "Ataköy Towers, Ataköy 7‑8‑9‑10 Kısım Mah., Çobançeşme E‑5 Yan Yol Cad., A Blok Apt. No: 20/1, Bakırköy, Istanbul",
    phone: "+90 505‑305‑8047",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-red-600 to-rose-600",
    region: "International",
    services: ["Student Counseling", "University Applications", "Cultural Guidance"],
    staffCount: 9,
    successRate: "97%",
    studentsServed: "2200+"
  },
  {
    id: "edinburgh",
    city: "Edinburgh",
    name: "Ferry Road Place",
    address: "4 Ferry Road Place, Edinburgh EH4 4AX",
    phone: "+44 7448‑419291",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-slate-600 to-gray-600",
    region: "International",
    services: ["Student Support", "University Applications", "Career Guidance"],
    staffCount: 7,
    successRate: "98%",
    studentsServed: "1500+"
  }
];

export default function OfficesList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredOffices = offices.filter(office => {
    const matchesSearch = office.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         office.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         office.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || office.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = ['all', ...Array.from(new Set(offices.map(office => office.region)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Office Locations</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Visit any of our strategically located offices across Pakistan and internationally for personalized consultation 
              and expert guidance on your international education journey.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by city, office name, or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3"
              />
            </div>
            <div className="flex gap-2">
              <Filter className="w-5 h-5 text-gray-500 mt-3" />
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={selectedRegion === region ? "default" : "outline"}
                  onClick={() => setSelectedRegion(region)}
                  size="sm"
                >
                  {region === 'all' ? 'All Regions' : region}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="text-center text-gray-600">
            Showing {filteredOffices.length} of {offices.length} offices
          </div>
        </motion.div>

        {/* Office Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredOffices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className={`h-2 bg-gradient-to-r ${office.gradient}`}></div>
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{office.city}</h3>
                        {office.isHeadOffice && (
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                            Head Office
                          </Badge>
                        )}
                        {office.region === 'International' && (
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs">
                            International
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 font-medium">{office.name}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {office.region}
                      </Badge>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${office.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-sm font-bold text-green-600">{office.successRate}</div>
                      <div className="text-xs text-gray-500">Success</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-blue-600">{office.staffCount}</div>
                      <div className="text-xs text-gray-500">Staff</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-purple-600">{office.studentsServed}</div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600 leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-sm text-blue-600 hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{office.hours}</p>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-500 mb-2">Key Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {office.services.slice(0, 3).map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                          {service}
                        </Badge>
                      ))}
                      {office.services.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{office.services.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Link href={`/offices/${office.id}`} className="flex-1">
                      <Button 
                        className={`w-full bg-gradient-to-r ${office.gradient} hover:opacity-90 text-white font-medium shadow-md text-sm`}
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border hover:bg-gray-50 font-medium text-sm"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredOffices.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No offices found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Stats Overview */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">21</div>
            <div className="text-gray-600">Total Offices</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">18</div>
            <div className="text-gray-600">Pakistan Offices</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-600">International Offices</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">35,000+</div>
            <div className="text-gray-600">Students Served</div>
          </div>
        </motion.div>

        {/* Contact Banner */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Can't Find a Nearby Office?</h2>
          <p className="mb-6 opacity-90">
            Don't worry! We also offer online consultations and virtual meetings to serve you wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Online Meeting
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Head Office
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}