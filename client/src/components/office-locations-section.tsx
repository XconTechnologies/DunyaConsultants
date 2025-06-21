import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Users, Globe, Building2 } from "lucide-react";

// Office locations data with coordinates
const officeLocations = [
  {
    id: 1,
    city: "Lahore",
    country: "Pakistan",
    isHeadOffice: true,
    address: "DHA Phase 1, 1st Floor, 174-6 Street 123, Sector H",
    phone: "+92 42 111 222 333",
    email: "lahore@pathvisaconsultants.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    staff: 25,
    coords: [31.5497, 74.3436],
    position: { top: "45%", left: "75%" },
    color: "bg-red-500",
    markerColor: "#ef4444"
  },
  {
    id: 2,
    city: "Karachi",
    country: "Pakistan", 
    address: "Gulshan-e-Iqbal, Block 13-A, Main University Road",
    phone: "+92 21 111 222 333",
    email: "karachi@pathvisaconsultants.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    staff: 18,
    coords: [24.8607, 67.0011],
    position: { top: "48%", left: "73%" },
    color: "bg-blue-500",
    markerColor: "#3b82f6"
  },
  {
    id: 3,
    city: "Islamabad",
    country: "Pakistan",
    address: "F-8 Markaz, 2nd Floor, Jinnah Super Market",
    phone: "+92 51 111 222 333", 
    email: "islamabad@pathvisaconsultants.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    staff: 15,
    coords: [33.6844, 73.0479],
    position: { top: "42%", left: "74%" },
    color: "bg-green-500",
    markerColor: "#22c55e"
  },
  {
    id: 4,
    city: "Faisalabad",
    country: "Pakistan",
    address: "People's Colony, Main Boulevard, Commercial Area",
    phone: "+92 41 111 222 333",
    email: "faisalabad@pathvisaconsultants.com", 
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    staff: 12,
    coords: [31.4504, 73.1350],
    position: { top: "44%", left: "74.5%" },
    color: "bg-orange-500",
    markerColor: "#f97316"
  },
  {
    id: 5,
    city: "Multan",
    country: "Pakistan",
    address: "Cantt Area, Mall Road, Business Center",
    phone: "+92 61 111 222 333",
    email: "multan@pathvisaconsultants.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM", 
    staff: 10,
    coords: [30.1575, 71.5249],
    position: { top: "46%", left: "73.5%" },
    color: "bg-purple-500",
    markerColor: "#a855f7"
  }
];

// Study destination countries
const studyDestinations = [
  { name: "USA", coords: [38.9072, -77.0369], type: "country", color: "#dc2626" },
  { name: "UK", coords: [51.5074, -0.1278], type: "country", color: "#2563eb" },
  { name: "Canada", coords: [45.4215, -75.6972], type: "country", color: "#dc2626" },
  { name: "Australia", coords: [-33.8688, 151.2093], type: "country", color: "#059669" },
  { name: "Finland", coords: [60.1699, 24.9384], type: "country", color: "#7c3aed" },
  { name: "UAE", coords: [25.2048, 55.2708], type: "country", color: "#ea580c" },
  { name: "Germany", coords: [52.5200, 13.4050], type: "country", color: "#0891b2" },
];

export default function OfficeLocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [hoveredOffice, setHoveredOffice] = useState(null);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-6">
            Our Office Locations
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Visit any of our 17+ branches across Pakistan for personalized consultation 
            and expert guidance on your study abroad journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* World Map */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
                Global Presence Map
              </h3>
              
              {/* World Map Container */}
              <div className="relative">
                  {/* Background World Map */}
                  <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-blue-100 rounded-xl overflow-hidden border border-gray-200">
                  {/* Grid Lines and World Map Pattern */}
                  <svg 
                    className="absolute inset-0 w-full h-full" 
                    viewBox="0 0 800 400"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Grid Lines */}
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Continents with dotted patterns */}
                    <g fill="#3B82F6" opacity="0.4">
                      {/* North America */}
                      {Array.from({ length: 80 }, (_, i) => {
                        const x = 80 + Math.random() * 200;
                        const y = 80 + Math.random() * 120;
                        return <circle key={`na-${i}`} cx={x} cy={y} r="1.2" opacity="0.6" />;
                      })}
                      
                      {/* Europe */}
                      {Array.from({ length: 60 }, (_, i) => {
                        const x = 380 + Math.random() * 100;
                        const y = 100 + Math.random() * 80;
                        return <circle key={`eu-${i}`} cx={x} cy={y} r="1.2" opacity="0.6" />;
                      })}
                      
                      {/* Asia */}
                      {Array.from({ length: 120 }, (_, i) => {
                        const x = 480 + Math.random() * 200;
                        const y = 120 + Math.random() * 120;
                        return <circle key={`as-${i}`} cx={x} cy={y} r="1.2" opacity="0.6" />;
                      })}
                      
                      {/* Africa */}
                      {Array.from({ length: 70 }, (_, i) => {
                        const x = 400 + Math.random() * 80;
                        const y = 200 + Math.random() * 120;
                        return <circle key={`af-${i}`} cx={x} cy={y} r="1.2" opacity="0.6" />;
                      })}
                      
                      {/* Australia */}
                      {Array.from({ length: 30 }, (_, i) => {
                        const x = 640 + Math.random() * 60;
                        const y = 270 + Math.random() * 40;
                        return <circle key={`au-${i}`} cx={x} cy={y} r="1.2" opacity="0.6" />;
                      })}
                      
                      {/* Pakistan region highlighted */}
                      {Array.from({ length: 40 }, (_, i) => {
                        const x = 580 + Math.random() * 30;
                        const y = 170 + Math.random() * 30;
                        return <circle key={`pk-${i}`} cx={x} cy={y} r="1.5" fill="#059669" opacity="0.8" />;
                      })}
                    </g>
                    
                    {/* Connection lines between offices */}
                    <g stroke="#3B82F6" strokeWidth="1" opacity="0.3" fill="none">
                      {/* Lines connecting major offices */}
                      <path d="M 580 175 Q 590 180 585 185" strokeDasharray="2,2" />
                      <path d="M 585 185 Q 575 190 580 195" strokeDasharray="2,2" />
                      <path d="M 580 195 Q 590 185 595 180" strokeDasharray="2,2" />
                      <path d="M 595 180 Q 585 175 580 175" strokeDasharray="2,2" />
                    </g>
                    
                    {/* Coordinate labels */}
                    <g fill="#6B7280" fontSize="10" opacity="0.7">
                      <text x="20" y="30">60°N</text>
                      <text x="20" y="130">30°N</text>
                      <text x="20" y="230">0°</text>
                      <text x="20" y="330">30°S</text>
                      <text x="80" y="380">120°W</text>
                      <text x="280" y="380">60°W</text>
                      <text x="380" y="380">0°</text>
                      <text x="580" y="380">60°E</text>
                      <text x="680" y="380">120°E</text>
                    </g>
                  </svg>

                  {/* Office Location Markers */}
                  {officeLocations.map((office, index) => (
                    <motion.div
                      key={office.id}
                      className="absolute"
                      style={{ 
                        top: office.position.top, 
                        left: office.position.left,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      onMouseEnter={() => setHoveredOffice(office)}
                      onMouseLeave={() => setHoveredOffice(null)}
                      onClick={() => setSelectedOffice(office)}
                    >
                      {/* Location Marker with enhanced design */}
                      <div className={`relative cursor-pointer group`}>
                        {/* Outer ring */}
                        <div className={`absolute inset-0 w-10 h-10 ${office.color} rounded-full opacity-20 group-hover:scale-150 transition-all duration-500`}></div>
                        
                        {/* Main marker */}
                        <div className={`relative w-7 h-7 ${office.color} rounded-full border-3 border-white shadow-xl group-hover:scale-125 transition-transform duration-300 z-10`}>
                          <div className="absolute inset-0 rounded-full bg-white opacity-30"></div>
                          {/* Center dot */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        
                        {/* Pulse Animation */}
                        <div className={`absolute inset-0 w-7 h-7 ${office.color} rounded-full animate-ping opacity-30`}></div>
                        
                        {/* Office Label */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-neutral-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {office.city}
                        </div>
                        
                        {/* Hover Tooltip */}
                        {hoveredOffice?.id === office.id && (
                          <motion.div
                            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 min-w-56 z-20 border border-gray-100"
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          >
                            <div className="text-sm font-bold text-neutral-800 flex items-center">
                              {office.city}
                              {office.isHeadOffice && (
                                <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">HQ</span>
                              )}
                            </div>
                            <div className="text-xs text-neutral-600 mb-2">{office.country}</div>
                            <div className="text-xs text-neutral-500 space-y-1">
                              <div className="flex items-center">
                                <Users className="w-3 h-3 mr-1" />
                                {office.staff} Staff Members
                              </div>
                              <div className="flex items-center">
                                <Phone className="w-3 h-3 mr-1" />
                                {office.phone}
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                              <div className="w-3 h-3 bg-white rotate-45 shadow border-r border-b border-gray-100"></div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  </div>

                  {/* Enhanced Legend with Grid */}
                  <div className="mt-6 bg-gray-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-neutral-700 mb-3 text-center">Office Network</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {officeLocations.map((office) => (
                        <motion.div 
                          key={office.id}
                          className="flex items-center space-x-3 cursor-pointer hover:bg-white px-3 py-2 rounded-lg transition-all duration-200 group"
                          onClick={() => setSelectedOffice(office)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`w-4 h-4 ${office.color} rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform`}></div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-neutral-800 truncate">{office.city}</div>
                            <div className="text-xs text-neutral-500">{office.staff} staff</div>
                          </div>
                          {office.isHeadOffice && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-medium">HQ</span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Map Legend */}
                    <div className="mt-4 pt-3 border-t border-gray-200 flex justify-center space-x-6 text-xs text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span>Grid: 20° intervals</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Regions</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>Pakistan</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Office Details */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 h-fit">
              <h3 className="text-xl font-bold text-neutral-800 mb-6">
                {selectedOffice ? 'Office Details' : 'Select an Office'}
              </h3>

              {selectedOffice ? (
                <div className="space-y-4">
                  {/* Office Name */}
                  <div className="pb-4 border-b">
                    <h4 className="text-lg font-bold text-neutral-800 flex items-center">
                      {selectedOffice.city}
                      {selectedOffice.isHeadOffice && (
                        <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          Head Office
                        </span>
                      )}
                    </h4>
                    <p className="text-neutral-600">{selectedOffice.country}</p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-neutral-800">Address</div>
                        <div className="text-sm text-neutral-600">{selectedOffice.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-neutral-800">Phone</div>
                        <a 
                          href={`tel:${selectedOffice.phone}`}
                          className="text-sm text-green-600 hover:text-green-700"
                        >
                          {selectedOffice.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-neutral-800">Email</div>
                        <a 
                          href={`mailto:${selectedOffice.email}`}
                          className="text-sm text-blue-600 hover:text-blue-700"
                        >
                          {selectedOffice.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-neutral-800">Hours</div>
                        <div className="text-sm text-neutral-600">{selectedOffice.hours}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-purple-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-neutral-800">Team Size</div>
                        <div className="text-sm text-neutral-600">{selectedOffice.staff} Expert Counselors</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 space-y-3">
                    <a href={`tel:${selectedOffice.phone}`}>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        Call Now
                      </button>
                    </a>
                    <a href={`mailto:${selectedOffice.email}`}>
                      <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        Send Email
                      </button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <MapPin className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-neutral-500 mb-4">
                    Click on any location marker on the map to view office details and contact information.
                  </p>
                  <div className="text-sm text-neutral-400">
                    {officeLocations.length} offices available
                  </div>
                </div>
              )}
            </div>

            {/* Statistics */}
            <div className="mt-6 bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
              <h4 className="text-lg font-bold mb-4">Our Network</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">17+</div>
                  <div className="text-sm text-blue-100">Branches</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-blue-100">Counselors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-blue-100">Ambassadors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-blue-100">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Visit Your Nearest Branch
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation at any of our offices. Our expert counselors are ready 
              to guide you through your study abroad journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+923041110947">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Call UAN: (+92) 304 1110947
                </button>
              </a>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Appointment
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}