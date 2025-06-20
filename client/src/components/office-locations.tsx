import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Globe,
  Building,
  ChevronDown,
  ChevronUp,
  Navigation
} from "lucide-react";

interface Office {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  isHeadOffice?: boolean;
  coordinates: [number, number]; // [latitude, longitude]
  region: "pakistan" | "international";
}

const offices: Office[] = [
  // Pakistan Offices
  {
    id: "lahore-dha",
    name: "Head Office – DHA Phase 1, Lahore",
    address: "1st Floor, 174 6 Street 123, Sector H, DHA Phase 1, Lahore",
    phone: "+92 300 167 1947",
    hours: "Mon–Sat 10 AM–6 PM",
    isHeadOffice: true,
    coordinates: [31.4694, 74.4066],
    region: "pakistan"
  },
  {
    id: "lahore-johar",
    name: "Johar Town, Lahore",
    address: "1st Floor, 85/R-1, Phase 2 Johar Town, Lahore",
    phone: "+92 300 827 1947",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [31.4697, 74.2728],
    region: "pakistan"
  },
  {
    id: "islamabad",
    name: "Islamabad (Blue Area)",
    address: "Mezz-3 ATS Centre, Fazal‑e‑Haq Road, Blue Area, Islamabad",
    phone: "+92 333 7775458",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [33.7077, 73.0563],
    region: "pakistan"
  },
  {
    id: "karachi",
    name: "Karachi (Defence Phase)",
    address: "Office 05‑C, Prime Point Building, Main 2 Khayaban‑e‑Ittehad Road, DHA, Karachi",
    phone: "+92 332 364‑3373",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [24.8138, 67.0680],
    region: "pakistan"
  },
  {
    id: "sargodha",
    name: "Sargodha",
    address: "Alif Tower, Buhadur Shah Zafar Road, Sargodha",
    phone: "+92 323 251 6319",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [32.0836, 72.6711],
    region: "pakistan"
  },
  {
    id: "gujrat",
    name: "Gujrat",
    address: "Beside KFC, Service Mor/Shafqat Morah Road, GT Road, Gujrat",
    phone: "+92 300 105 1947",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [32.5740, 74.0788],
    region: "pakistan"
  },
  {
    id: "gujranwala",
    name: "Gujranwala",
    address: "Peoples Colony underpass, Gujranwala",
    phone: "+92 332 9991947",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [32.1877, 74.1945],
    region: "pakistan"
  },
  {
    id: "faisalabad",
    name: "Faisalabad",
    address: "Mezzanine Floor, Center Point Plaza, Koh‑i‑Noor City, Jaranwala Road, Faisalabad",
    phone: "+92 332 6628487",
    hours: "Mon–Sat 09 AM–6 PM",
    coordinates: [31.4504, 73.1350],
    region: "pakistan"
  },
  {
    id: "sialkot",
    name: "Sialkot",
    address: "2nd Floor, Bank Islami, Cantt Plaza, Sialkot Cantonment",
    phone: "+92 323 0021947",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [32.4945, 74.5229],
    region: "pakistan"
  },
  {
    id: "bahawalpur",
    name: "Bahawalpur",
    address: "Rafi Qamar Road, near Muslim Town, Goth Muslim Town",
    phone: "+92 300 1731947",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [29.3956, 71.6836],
    region: "pakistan"
  },
  {
    id: "mian-channu",
    name: "Mian Channu",
    address: "1st Floor, Moti Plaza, Allama Iqbal Road, Mian Channu",
    phone: "+92 300 9841947",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [30.4036, 72.3131],
    region: "pakistan"
  },
  {
    id: "mandi-bahauddin",
    name: "Mandi Bahauddin",
    address: "Dunya Consultants Punjab Center, Mandi Bahauddin",
    phone: "+92 321 3001947",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [32.5861, 73.4917],
    region: "pakistan"
  },
  {
    id: "sheikhupura",
    name: "Sheikhupura",
    address: "Stadium Road, beside Darul Barkat Medicare Hospital, Sheikhupura",
    phone: "+92 300 5071947",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [31.7167, 73.9781],
    region: "pakistan"
  },
  {
    id: "multan",
    name: "Multan",
    address: "Bosan Road, New Sabzazar Colony (near Shalimar Metro Station)",
    phone: "+92 305 4441947",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [30.1575, 71.5249],
    region: "pakistan"
  },
  {
    id: "peshawar",
    name: "Peshawar",
    address: "Office 27, 4th Floor, Alhaj Tower 2, near Phase 3 Chowk, Peshawar",
    phone: "+92 317 1114726",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [34.0151, 71.5249],
    region: "pakistan"
  },
  {
    id: "jhelum",
    name: "Jhelum",
    address: "2nd Floor, Sultan Plaza, GT Road, Jhelum",
    phone: "+92 317 1114693",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [32.9425, 73.7257],
    region: "pakistan"
  },
  {
    id: "mardan",
    name: "Mardan",
    address: "Office Unit A, Walyan Commercial Centre, Nowshera Road, Mardan",
    phone: "+92 317 1114617",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [34.1987, 72.0407],
    region: "pakistan"
  },
  // International Offices
  {
    id: "jeddah",
    name: "Jeddah, Saudi Arabia",
    address: "Above Topten, Engineering Square, Makarona Street, 2nd Floor, Office 27, Jeddah 23447",
    phone: "+966 50 851 0785",
    hours: "Mon–Thu 10 AM–5 PM",
    coordinates: [21.4858, 39.1925],
    region: "international"
  },
  {
    id: "istanbul",
    name: "Istanbul, Turkey",
    address: "Ataköy Towers, A Blok Apt. 20/1, Ataköy 7‑8‑9‑10 Kısım, Çobançeşme E‑5 Yan Yol Cd, Bakırköy",
    phone: "+90 505 305 8047",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [41.0082, 28.9784],
    region: "international"
  },
  {
    id: "edinburgh",
    name: "Edinburgh, UK",
    address: "4 Ferry Rd Pl, Edinburgh EH4 4AX",
    phone: "+44 7448 419291",
    hours: "Mon–Sat 10 AM–6 PM",
    coordinates: [55.9533, -3.1883],
    region: "international"
  }
];

export default function OfficeLocations() {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const [showAllOffices, setShowAllOffices] = useState(false);
  const [activeRegion, setActiveRegion] = useState<"pakistan" | "international" | "all">("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredOffices = offices.filter(office => 
    activeRegion === "all" || office.region === activeRegion
  );

  const pakistanOffices = offices.filter(office => office.region === "pakistan");
  const internationalOffices = offices.filter(office => office.region === "international");

  const displayedOffices = showAllOffices ? filteredOffices : filteredOffices.slice(0, 6);

  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Our Office Locations
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Visit us at any of our {offices.length} locations across Pakistan and internationally
          </p>
        </motion.div>

        {/* Region Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { id: "all", label: "All Offices", count: offices.length },
            { id: "pakistan", label: "🇵🇰 Pakistan", count: pakistanOffices.length },
            { id: "international", label: "🌍 International", count: internationalOffices.length }
          ].map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id as any)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeRegion === region.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 shadow-md"
              }`}
            >
              {region.label} ({region.count})
            </button>
          ))}
        </motion.div>

        {/* Interactive Map Placeholder */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl mb-12 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold flex items-center">
                <Navigation className="mr-3" size={28} />
                Interactive Office Map
              </h3>
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                {filteredOffices.length} Locations
              </div>
            </div>
          </div>
          
          {/* Map Container */}
          <div className="h-96 bg-gradient-to-br from-blue-100 to-indigo-200 relative overflow-hidden">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59,130,246,0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(34,197,94,0.3) 0%, transparent 50%)`,
                backgroundSize: '100px 100px'
              }}></div>
            </div>
            
            {/* Office Markers */}
            {filteredOffices.map((office, index) => (
              <motion.button
                key={office.id}
                className={`absolute w-4 h-4 rounded-full shadow-lg transition-all duration-300 hover:scale-150 ${
                  office.isHeadOffice ? 'bg-red-500' : 'bg-primary'
                } ${selectedOffice?.id === office.id ? 'scale-150 ring-4 ring-white' : ''}`}
                style={{
                  left: `${20 + (index % 8) * 10}%`,
                  top: `${20 + Math.floor(index / 8) * 15}%`
                }}
                onClick={() => setSelectedOffice(selectedOffice?.id === office.id ? null : office)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                title={office.name}
              />
            ))}
            
            {/* Map Center Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <Globe className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-neutral-600 font-medium">Click on markers to view office details</p>
                <p className="text-sm text-neutral-500 mt-1">
                  🔴 Head Office | 🔵 Branch Office
                </p>
              </div>
            </div>
          </div>
          
          {/* Selected Office Details */}
          {selectedOffice && (
            <motion.div 
              className="p-6 border-t bg-neutral-50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-neutral-800 mb-2 flex items-center">
                    {selectedOffice.isHeadOffice && (
                      <Building className="mr-2 text-red-500" size={20} />
                    )}
                    {selectedOffice.name}
                  </h4>
                  <div className="space-y-2 text-neutral-600">
                    <p className="flex items-start">
                      <MapPin className="mr-2 flex-shrink-0 mt-1" size={16} />
                      {selectedOffice.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2" size={16} />
                      {selectedOffice.phone}
                    </p>
                    <p className="flex items-center">
                      <Clock className="mr-2" size={16} />
                      {selectedOffice.hours}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedOffice(null)}
                  className="ml-4"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Office Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedOffices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className={`p-6 shadow-lg card-hover h-full cursor-pointer transition-all duration-300 ${
                office.isHeadOffice 
                  ? "bg-gradient-to-br from-red-50 to-orange-50 border-red-200" 
                  : "bg-white hover:bg-blue-50"
              } ${selectedOffice?.id === office.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelectedOffice(selectedOffice?.id === office.id ? null : office)}
              >
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-neutral-800 flex items-center">
                      {office.isHeadOffice && (
                        <Building className="mr-2 text-red-500" size={20} />
                      )}
                      {office.name}
                    </h3>
                    <div className={`w-3 h-3 rounded-full ${
                      office.region === "pakistan" ? "bg-green-500" : "bg-blue-500"
                    }`} />
                  </div>
                  
                  <div className="space-y-3 text-sm text-neutral-600">
                    <p className="flex items-start">
                      <MapPin className="mr-2 flex-shrink-0 mt-1" size={14} />
                      {office.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2" size={14} />
                      {office.phone}
                    </p>
                    <p className="flex items-center">
                      <Clock className="mr-2" size={14} />
                      {office.hours}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredOffices.length > 6 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAllOffices(!showAllOffices)}
              className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-8 py-4"
            >
              {showAllOffices ? (
                <>
                  <ChevronUp className="mr-2" size={20} />
                  Show Less Offices
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2" size={20} />
                  Show All {filteredOffices.length} Offices
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}