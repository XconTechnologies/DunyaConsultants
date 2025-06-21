import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Users, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

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
    color: "from-red-500 to-red-600",
    bgPattern: "bg-gradient-to-br from-red-50 to-red-100",
    services: ["Visa Processing", "University Applications", "IELTS Training", "Scholarships"],
    image: "🏢"
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
    color: "from-blue-500 to-blue-600",
    bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100",
    services: ["Career Counseling", "Document Processing", "Interview Prep", "Pre-departure"],
    image: "🌊"
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
    color: "from-green-500 to-green-600",
    bgPattern: "bg-gradient-to-br from-green-50 to-green-100",
    services: ["Government Relations", "Embassy Support", "Legal Assistance", "Fast Track"],
    image: "🏛️"
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
    color: "from-orange-500 to-orange-600",
    bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100",
    services: ["Student Guidance", "Application Support", "Financial Aid", "Test Prep"],
    image: "🌾"
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
    color: "from-purple-500 to-purple-600",
    bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100",
    services: ["Regional Support", "Local Partnerships", "Community Outreach", "Follow-up"],
    image: "🕌"
  },
  {
    id: 6,
    city: "Peshawar",
    country: "Pakistan",
    address: "University Road, Opposite Pearl Continental Hotel",
    phone: "+92 91 111 222 333",
    email: "peshawar@pathvisaconsultants.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM", 
    staff: 14,
    color: "from-indigo-500 to-indigo-600",
    bgPattern: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    services: ["Border Support", "Cultural Guidance", "Language Training", "Family Assistance"],
    image: "🏔️"
  },
  {
    id: 7,
    city: "Rawalpindi",
    country: "Pakistan",
    address: "Saddar Bazaar, Committee Chowk, 2nd Floor",
    phone: "+92 51 111 222 444",
    email: "rawalpindi@pathvisaconsultants.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM", 
    staff: 11,
    color: "from-teal-500 to-teal-600",
    bgPattern: "bg-gradient-to-br from-teal-50 to-teal-100",
    services: ["Military Support", "Veterans Programs", "Special Cases", "Express Processing"],
    image: "⚡"
  }
];

export default function OfficeLocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [officesPerPage] = useState(2);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + officesPerPage >= officeLocations.length ? 0 : prev + officesPerPage
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [officesPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + officesPerPage >= officeLocations.length ? 0 : prev + officesPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - officesPerPage < 0 ? 
      Math.max(0, officeLocations.length - officesPerPage) : prev - officesPerPage
    );
  };

  const currentOffices = officeLocations.slice(currentIndex, currentIndex + officesPerPage);

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

        {/* Office Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Navigation Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800">Our Office Network</h3>
              <p className="text-neutral-600 mt-1">Discover our branches across Pakistan</p>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-600 group-hover:text-primary" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              >
                <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-primary" />
              </button>
            </div>
          </div>

          {/* Office Cards Slider */}
          <div className="grid md:grid-cols-2 gap-8">
            {currentOffices.map((office, index) => (
              <motion.div
                key={office.id}
                className="relative group"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`relative overflow-hidden rounded-2xl ${office.bgPattern} p-8 h-full`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern id={`pattern-${office.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="1" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#pattern-${office.id})`} />
                    </svg>
                  </div>

                  {/* Office Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${office.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                          {office.image}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-neutral-800 flex items-center">
                            {office.city}
                            {office.isHeadOffice && (
                              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                HQ
                              </span>
                            )}
                          </h4>
                          <p className="text-neutral-600">{office.country}</p>
                        </div>
                      </div>
                      <Building2 className="w-6 h-6 text-neutral-400" />
                    </div>

                    {/* Office Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-700">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-700">{office.staff} Expert Counselors</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-700">{office.hours}</span>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-neutral-800 mb-3">Specialized Services</h5>
                      <div className="flex flex-wrap gap-2">
                        {office.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/70 text-neutral-700 text-xs rounded-full border border-white/50"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="flex space-x-3">
                      <a 
                        href={`tel:${office.phone}`}
                        className={`flex-1 bg-gradient-to-r ${office.color} text-white py-3 px-4 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        <Phone className="w-4 h-4 inline mr-2" />
                        Call Now
                      </a>
                      <a 
                        href={`mailto:${office.email}`}
                        className="flex-1 bg-white/80 text-neutral-700 py-3 px-4 rounded-lg font-medium text-center hover:bg-white transition-colors border border-white/50"
                      >
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${office.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(officeLocations.length / officesPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * officesPerPage)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / officesPerPage) === i
                    ? 'bg-primary'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Network Statistics */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{officeLocations.length}+</div>
              <div className="text-blue-100">Office Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Expert Counselors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Student Ambassadors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </motion.div>

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