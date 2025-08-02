import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Building2, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const offices = [
  {
    id: "sargodha",
    city: "Sargodha",
    name: "Head Office",
    address: "Alif Tower, Bahadur Shah Zafar Road, Sargodha",
    phone: "+92 323‑251‑6319",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-blue-600 to-purple-600",
    isHeadOffice: true,
    region: "Punjab",
    services: ["Visa Processing", "University Applications", "IELTS Training", "Career Counseling"]
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
    services: ["Visa Processing", "University Applications", "Document Verification"]
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
    services: ["Student Counseling", "Test Preparation", "Career Guidance"]
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
    services: ["Visa Processing", "Embassy Relations", "Document Attestation"]
  },
  {
    id: "karachi",
    city: "Karachi",
    name: "DHA Phase",
    address: "05‑C Prime Point Building, Main 2, Khayaban‑e‑Ittehad Road, DHA, Karachi",
    phone: "+92 332‑364‑3373",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-cyan-600 to-blue-600",
    region: "Sindh",
    services: ["Visa Processing", "University Applications", "Financial Guidance"]
  },
  {
    id: "faisalabad",
    city: "Faisalabad",
    name: "Koh‑i‑Noor City",
    address: "Mezzanine Floor, Centre Point Plaza, Koh‑i‑Noor City, Jaranwala Road, Faisalabad",
    phone: "+92 332‑662‑8487",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-purple-600 to-pink-600",
    region: "Punjab",
    services: ["Student Counseling", "Test Preparation", "Scholarship Guidance"]
  },
  {
    id: "gujranwala",
    city: "Gujranwala",
    name: "Peoples Colony",
    address: "Dunya Consultants, Peoples Colony Underpass, Gujranwala",
    phone: "+92 332‑999‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-yellow-600 to-orange-600",
    region: "Punjab",
    services: ["Student Counseling", "Visa Processing"]
  },
  {
    id: "sialkot",
    city: "Sialkot",
    name: "Cantonment",
    address: "2nd Floor, Bank Islami, Cantt Plaza, Sialkot Cantonment",
    phone: "+92 323‑002‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-emerald-600 to-green-600",
    region: "Punjab",
    services: ["Student Counseling", "Visa Processing", "Document Verification"]
  }
];

export default function OfficesList() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-800/50 text-blue-100 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">20+ Locations</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-blue-300">Office Locations</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Visit any of our conveniently located offices across Pakistan and internationally for expert visa and education consultation services
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>20+ Offices</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Expert Consultants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5" />
                <span>Premium Locations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Offices Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Offices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the nearest office location and get personalized consultation services from our expert team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white group hover:scale-105">
                  <div className={`h-1.5 bg-gradient-to-r ${office.gradient}`}></div>
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-bold text-gray-800">{office.city}</h3>
                          {office.isHeadOffice && (
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                              HQ
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-gray-600">{office.name}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${office.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Office Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{office.address}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <a 
                          href={`tel:${office.phone}`}
                          className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-xs"
                        >
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{office.hours}</span>
                      </div>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {office.services.slice(0, 2).map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium"
                        >
                          {service}
                        </span>
                      ))}
                      {office.services.length > 2 && (
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md font-medium">
                          +{office.services.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <Link href={`/offices/${office.id}`}>
                      <Button 
                        className="w-full text-xs py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-300"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}