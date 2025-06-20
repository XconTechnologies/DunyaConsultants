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

        {/* Office Listings */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-neutral-800 mb-4 flex items-center justify-center">
              <Building className="mr-3 text-primary" size={32} />
              Our Office Network
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Visit any of our {filteredOffices.length} offices across Pakistan and internationally for personalized consultation services.
            </p>
          </div>
          
          {/* Maps Grid */}
          <div className="grid lg:grid-cols-2 gap-6 p-6">
            {/* World Map */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-neutral-800 text-center">Global Presence</h4>
              <div className="h-80 bg-blue-50 relative overflow-hidden rounded-xl border"
              >
            {/* World Map Grid Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
              {/* Longitude lines */}
              {Array.from({ length: 17 }, (_, i) => (
                <line
                  key={`lon-${i}`}
                  x1={i * 50}
                  y1={0}
                  x2={i * 50}
                  y2={400}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  opacity="0.6"
                />
              ))}
              {/* Latitude lines */}
              {Array.from({ length: 9 }, (_, i) => (
                <line
                  key={`lat-${i}`}
                  x1={0}
                  y1={i * 50}
                  x2={800}
                  y2={i * 50}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  opacity="0.6"
                />
              ))}
              
              {/* Simplified World Continents */}
              {/* Asia */}
              <path
                d="M350 120 Q450 100 550 130 Q580 150 590 180 Q570 220 520 240 Q480 250 440 230 Q400 210 380 180 Q360 150 350 120Z"
                fill="#d1d5db"
                opacity="0.4"
              />
              {/* Europe */}
              <path
                d="M280 100 Q320 95 340 110 Q350 130 340 150 Q320 160 300 155 Q285 145 280 130 Q275 115 280 100Z"
                fill="#d1d5db"
                opacity="0.4"
              />
              {/* Africa */}
              <path
                d="M300 160 Q330 155 350 170 Q360 200 350 240 Q340 280 320 300 Q300 310 285 300 Q275 280 280 250 Q285 220 290 190 Q295 175 300 160Z"
                fill="#d1d5db"
                opacity="0.4"
              />
              {/* North America */}
              <path
                d="M100 80 Q150 70 200 90 Q220 110 210 140 Q190 170 160 180 Q130 175 110 150 Q95 125 100 80Z"
                fill="#d1d5db"
                opacity="0.4"
              />
              {/* South America */}
              <path
                d="M180 200 Q200 195 210 210 Q215 240 205 280 Q195 320 185 340 Q175 350 165 340 Q160 320 165 290 Q170 260 175 230 Q178 215 180 200Z"
                fill="#d1d5db"
                opacity="0.4"
              />
              {/* Australia */}
              <path
                d="M550 280 Q580 275 600 290 Q605 305 595 315 Q580 320 565 315 Q555 305 550 290 Q548 285 550 280Z"
                fill="#d1d5db"
                opacity="0.4"
              />
            </svg>
            
            {/* Office Markers with Geographic Positioning */}
            {filteredOffices.map((office, index) => {
              // Convert lat/lng to approximate screen coordinates
              const x = ((office.coordinates[1] + 180) / 360) * 100; // longitude to x%
              const y = ((90 - office.coordinates[0]) / 180) * 100; // latitude to y%
              
              return (
                <motion.div
                  key={office.id}
                  className="absolute group cursor-pointer z-10"
                  style={{
                    left: `${Math.max(2, Math.min(96, x))}%`,
                    top: `${Math.max(2, Math.min(94, y))}%`
                  }}
                  onClick={() => setSelectedOffice(selectedOffice?.id === office.id ? null : office)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                >
                  {/* Marker Pin */}
                  <div className={`relative w-6 h-8 transition-all duration-300 group-hover:scale-125 ${
                    selectedOffice?.id === office.id ? 'scale-125' : ''
                  }`}>
                    <div className={`w-6 h-6 rounded-full shadow-lg ${
                      office.isHeadOffice ? 'bg-red-500' : 'bg-primary'
                    } border-2 border-white`} />
                    <div className={`w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent ${
                      office.isHeadOffice ? 'border-t-red-500' : 'border-t-primary'
                    } absolute -bottom-2 left-1/2 transform -translate-x-1/2`} />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-neutral-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                      {office.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-neutral-800" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20">
              <h4 className="text-sm font-semibold text-neutral-800 mb-2">Legend</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2 border border-white shadow-sm" />
                  <span className="text-neutral-600">Head Office</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-2 border border-white shadow-sm" />
                  <span className="text-neutral-600">Branch Office</span>
                </div>
              </div>
            </div>
            
              </div>
            </div>
            
            {/* Pakistan Map */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-neutral-800 text-center">Pakistan Network</h4>
              <div className="h-80 bg-green-50 relative overflow-hidden rounded-xl border">
                {/* Pakistan Map Grid Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {/* Grid lines for Pakistan region */}
                  {Array.from({ length: 9 }, (_, i) => (
                    <line
                      key={`pk-lon-${i}`}
                      x1={i * 50}
                      y1={0}
                      x2={i * 50}
                      y2={400}
                      stroke="#d1fae5"
                      strokeWidth="1"
                      opacity="0.8"
                    />
                  ))}
                  {Array.from({ length: 9 }, (_, i) => (
                    <line
                      key={`pk-lat-${i}`}
                      x1={0}
                      y1={i * 50}
                      x2={400}
                      y2={i * 50}
                      stroke="#d1fae5"
                      strokeWidth="1"
                      opacity="0.8"
                    />
                  ))}
                  
                  {/* Pakistan country outline */}
                  <path
                    d="M100 80 Q120 70 150 75 Q180 80 220 90 Q260 100 300 120 Q320 140 330 170 Q335 200 330 230 Q325 260 310 290 Q290 320 260 340 Q230 350 200 345 Q170 340 140 330 Q110 315 95 285 Q85 250 90 215 Q95 180 100 150 Q102 115 100 80Z"
                    fill="#86efac"
                    opacity="0.6"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  
                  {/* Major cities labels */}
                  <text x="150" y="200" fontSize="10" fill="#059669" fontWeight="bold">Lahore</text>
                  <text x="200" y="150" fontSize="10" fill="#059669" fontWeight="bold">Islamabad</text>
                  <text x="120" y="300" fontSize="10" fill="#059669" fontWeight="bold">Karachi</text>
                  <text x="180" y="240" fontSize="10" fill="#059669" fontWeight="bold">Faisalabad</text>
                </svg>
                
                {/* Pakistan Office Markers */}
                {filteredOffices.filter(office => office.region === "pakistan").map((office, index) => {
                  // Pakistan specific positioning (approximate)
                  let x = 50, y = 50; // default position
                  
                  // Position based on city
                  if (office.name.includes("Lahore")) {
                    x = office.name.includes("DHA") ? 35 : 40;
                    y = 48;
                  } else if (office.name.includes("Islamabad")) {
                    x = 45; y = 35;
                  } else if (office.name.includes("Karachi")) {
                    x = 25; y = 75;
                  } else if (office.name.includes("Faisalabad")) {
                    x = 38; y = 55;
                  } else if (office.name.includes("Gujranwala")) {
                    x = 42; y = 45;
                  } else if (office.name.includes("Gujrat")) {
                    x = 45; y = 42;
                  } else if (office.name.includes("Sargodha")) {
                    x = 40; y = 40;
                  } else if (office.name.includes("Sialkot")) {
                    x = 48; y = 40;
                  } else if (office.name.includes("Multan")) {
                    x = 35; y = 65;
                  } else if (office.name.includes("Peshawar")) {
                    x = 50; y = 25;
                  } else if (office.name.includes("Bahawalpur")) {
                    x = 38; y = 70;
                  } else if (office.name.includes("Jhelum")) {
                    x = 47; y = 38;
                  } else if (office.name.includes("Mardan")) {
                    x = 52; y = 28;
                  } else {
                    // Distribute remaining offices
                    x = 30 + (index % 4) * 15;
                    y = 30 + Math.floor(index / 4) * 20;
                  }
                  
                  return (
                    <motion.div
                      key={office.id}
                      className="absolute group cursor-pointer z-10"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`
                      }}
                      onClick={() => setSelectedOffice(selectedOffice?.id === office.id ? null : office)}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    >
                      {/* Marker Pin */}
                      <div className={`relative w-5 h-6 transition-all duration-300 group-hover:scale-125 ${
                        selectedOffice?.id === office.id ? 'scale-125' : ''
                      }`}>
                        <div className={`w-5 h-5 rounded-full shadow-lg ${
                          office.isHeadOffice ? 'bg-red-500' : 'bg-green-600'
                        } border-2 border-white`} />
                        <div className={`w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-transparent ${
                          office.isHeadOffice ? 'border-t-red-500' : 'border-t-green-600'
                        } absolute -bottom-1 left-1/2 transform -translate-x-1/2`} />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-neutral-800 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-lg">
                          {office.name.split(',')[0]}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-transparent border-t-neutral-800" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                
                {/* Pakistan Legend */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20">
                  <h5 className="text-xs font-semibold text-neutral-800 mb-1">Pakistan Offices</h5>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2 border border-white shadow-sm" />
                      <span className="text-neutral-600">Head Office</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-600 rounded-full mr-2 border border-white shadow-sm" />
                      <span className="text-neutral-600">Branch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Global Instructions */}
          <div className="px-6 pb-4">
            <p className="text-sm text-neutral-600 text-center">
              Click on any marker to view detailed office information below
            </p>
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