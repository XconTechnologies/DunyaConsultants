import { motion } from "framer-motion";
import { 
  Building, 
  Building2, 
  Landmark, 
  MapPin, 
  Factory,
  Castle,
  Crown,
  Star,
  Mountain,
  Shield,
  Trophy,
  Target,
  Globe,
  Phone,
  Mail,
  Clock
} from "lucide-react";

// Custom branches data with modern design approach
const branches = [
  { 
    name: "Sargodha", 
    icon: Building2, 
    type: "Head Office",
    address: "Alif Tower, Buhadur Shah Zafar Road",
    phone: "+92 304 1110947",
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50",
    services: ["All Visa Services", "IELTS Training", "University Selection"]
  },
  { 
    name: "Lahore", 
    icon: Landmark, 
    type: "Main Branch",
    address: "1st Floor, 174-6 Street, DHA Phase 1",
    phone: "+92 42 111 0947",
    color: "from-emerald-600 to-emerald-800",
    bgColor: "bg-emerald-50",
    services: ["UK Visa", "Canada Visa", "Document Preparation"]
  },
  { 
    name: "Karachi", 
    icon: Building, 
    type: "Regional Office",
    address: "Clifton Block 2, Main Shahrah-e-Faisal",
    phone: "+92 21 111 0947",
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-50",
    services: ["Australia Visa", "USA Visa", "Career Counseling"]
  },
  { 
    name: "Islamabad", 
    icon: Crown, 
    type: "Capital Branch",
    address: "Blue Area, F-6 Sector",
    phone: "+92 51 111 0947",
    color: "from-orange-600 to-orange-800",
    bgColor: "bg-orange-50",
    services: ["Germany Visa", "Scholarship Guidance", "Interview Prep"]
  },
  { 
    name: "Faisalabad", 
    icon: Factory, 
    type: "Regional Office",
    address: "Main Civil Lines, Near GPO",
    phone: "+92 41 111 0947",
    color: "from-teal-600 to-teal-800",
    bgColor: "bg-teal-50",
    services: ["Test Preparation", "University Applications", "Visa Processing"]
  },
  { 
    name: "Multan", 
    icon: Star, 
    type: "Branch Office",
    address: "Cantt Road, Near City Centre",
    phone: "+92 61 111 0947",
    color: "from-indigo-600 to-indigo-800",
    bgColor: "bg-indigo-50",
    services: ["IELTS Coaching", "Document Verification", "Pre-Departure"]
  },
  { 
    name: "Sialkot", 
    icon: Trophy, 
    type: "Branch Office",
    address: "Paris Road, Main Bazaar",
    phone: "+92 52 111 0947",
    color: "from-red-600 to-red-800",
    bgColor: "bg-red-50",
    services: ["Europe Visa", "Student Counseling", "Application Support"]
  },
  { 
    name: "Gujranwala", 
    icon: Castle, 
    type: "Branch Office",
    address: "GT Road, Commercial Area",
    phone: "+92 55 111 0947",
    color: "from-pink-600 to-pink-800",
    bgColor: "bg-pink-50",
    services: ["UK Universities", "Admission Guidance", "Test Booking"]
  }
];

export default function BranchesCarousel() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-600 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-purple-600 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-orange-600 rounded-full"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nationwide</span> Presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Experience personalized consultation services at any of our strategically located branches across Pakistan
          </motion.p>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {branches.map((branch, index) => {
            const IconComponent = branch.icon;
            return (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`${branch.bgColor} rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                  {/* Branch Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {branch.type}
                    </span>
                    {branch.type === "Head Office" && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                        HQ
                      </span>
                    )}
                  </div>

                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${branch.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Branch Details */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>{branch.phone}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700">Key Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {branch.services.slice(0, 2).map((service, idx) => (
                        <span key={idx} className="text-xs bg-white text-gray-600 px-2 py-1 rounded-md border">
                          {service}
                        </span>
                      ))}
                      {branch.services.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                          +{branch.services.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Contact Button */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-white/95 backdrop-blur-sm rounded-b-2xl transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-2">
                      <button className={`flex-1 bg-gradient-to-r ${branch.color} text-white text-sm font-medium py-2 px-3 rounded-lg hover:shadow-md transition-shadow`}>
                        <Phone className="w-4 h-4 inline mr-1" />
                        Call
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">17+</div>
              <div className="text-sm text-gray-600">Office Branches</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
              <div className="text-sm text-gray-600">Expert Counselors</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to start your study abroad journey? Visit your nearest branch or schedule an online consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              Find Nearest Branch
            </button>
            <button className="bg-white text-gray-700 font-semibold py-3 px-8 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors">
              Schedule Online Meeting
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}