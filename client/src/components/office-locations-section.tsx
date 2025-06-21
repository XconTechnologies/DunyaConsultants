import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react";

// Office locations data
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
    position: { top: "45%", left: "75%" },
    color: "bg-red-500"
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
    position: { top: "48%", left: "73%" },
    color: "bg-blue-500"
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
    position: { top: "42%", left: "74%" },
    color: "bg-green-500"
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
    position: { top: "44%", left: "74.5%" },
    color: "bg-orange-500"
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
    position: { top: "46%", left: "73.5%" },
    color: "bg-purple-500"
  }
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
                <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl overflow-hidden">
                  {/* Dotted World Map Pattern */}
                  <svg 
                    className="absolute inset-0 w-full h-full opacity-30" 
                    viewBox="0 0 800 400"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Simple dotted world map outline */}
                    <g fill="#3B82F6" opacity="0.6">
                      {/* North America */}
                      <circle cx="150" cy="120" r="1.5" />
                      <circle cx="155" cy="125" r="1.5" />
                      <circle cx="160" cy="130" r="1.5" />
                      <circle cx="170" cy="140" r="1.5" />
                      <circle cx="180" cy="150" r="1.5" />
                      <circle cx="190" cy="160" r="1.5" />
                      <circle cx="200" cy="170" r="1.5" />
                      
                      {/* Europe */}
                      <circle cx="400" cy="130" r="1.5" />
                      <circle cx="410" cy="135" r="1.5" />
                      <circle cx="420" cy="140" r="1.5" />
                      <circle cx="430" cy="145" r="1.5" />
                      
                      {/* Asia */}
                      <circle cx="500" cy="150" r="1.5" />
                      <circle cx="520" cy="160" r="1.5" />
                      <circle cx="540" cy="170" r="1.5" />
                      <circle cx="560" cy="180" r="1.5" />
                      <circle cx="580" cy="190" r="1.5" />
                      <circle cx="600" cy="180" r="1.5" />
                      
                      {/* Africa */}
                      <circle cx="420" cy="200" r="1.5" />
                      <circle cx="430" cy="220" r="1.5" />
                      <circle cx="440" cy="240" r="1.5" />
                      <circle cx="450" cy="260" r="1.5" />
                      
                      {/* Australia */}
                      <circle cx="650" cy="280" r="1.5" />
                      <circle cx="670" cy="290" r="1.5" />
                      
                      {/* Additional dots for density */}
                      {Array.from({ length: 200 }, (_, i) => (
                        <circle 
                          key={i}
                          cx={Math.random() * 800} 
                          cy={Math.random() * 400} 
                          r="1" 
                          opacity={Math.random() * 0.3}
                        />
                      ))}
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
                      {/* Location Marker */}
                      <div className={`relative cursor-pointer group`}>
                        <div className={`w-6 h-6 ${office.color} rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                          <div className="absolute inset-0 rounded-full bg-white opacity-20"></div>
                        </div>
                        
                        {/* Pulse Animation */}
                        <div className={`absolute inset-0 w-6 h-6 ${office.color} rounded-full animate-ping opacity-20`}></div>
                        
                        {/* Hover Tooltip */}
                        {hoveredOffice?.id === office.id && (
                          <motion.div
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 min-w-48 z-10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                          >
                            <div className="text-sm font-bold text-neutral-800">{office.city}</div>
                            <div className="text-xs text-neutral-600">{office.country}</div>
                            <div className="text-xs text-neutral-500 mt-1">{office.staff} Staff Members</div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                              <div className="w-2 h-2 bg-white rotate-45 shadow"></div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  {officeLocations.map((office) => (
                    <div 
                      key={office.id}
                      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded-lg transition-colors"
                      onClick={() => setSelectedOffice(office)}
                    >
                      <div className={`w-3 h-3 ${office.color} rounded-full`}></div>
                      <span className="text-sm text-neutral-700">{office.city}</span>
                      {office.isHeadOffice && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">HQ</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
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