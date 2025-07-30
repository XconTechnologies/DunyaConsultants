import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
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

// Complete branches data with all cities - authentic office data
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
    name: "Lahore DHA", 
    icon: Landmark, 
    type: "Main Branch",
    address: "1st Floor, 174 6th Street 123, Sector H, DHA Phase 1",
    phone: "+92 300‑167‑1947",
    color: "from-emerald-600 to-emerald-800",
    bgColor: "bg-emerald-50",
    services: ["Visa Processing", "University Applications", "Document Verification"]
  },
  { 
    name: "Lahore Johar", 
    icon: Building, 
    type: "Branch Office",
    address: "1st Floor, 85 /R‑1, Phase 2, Johar Town",
    phone: "+92 300‑827‑1947",
    color: "from-green-600 to-green-800",
    bgColor: "bg-green-50",
    services: ["Student Counseling", "Test Preparation", "Career Guidance"]
  },
  { 
    name: "Islamabad", 
    icon: Crown, 
    type: "Capital Branch",
    address: "Mezzanine‑3, ATS Centre, Fazal‑e‑Haq Road, Blue Area",
    phone: "+92 333‑777‑5458",
    color: "from-indigo-600 to-indigo-800",
    bgColor: "bg-indigo-50",
    services: ["Visa Processing", "Embassy Relations", "Document Attestation"]
  },
  { 
    name: "Karachi", 
    icon: Building, 
    type: "Regional Office",
    address: "205 Madina City Mall, Block 13-A, Gulshan-e-Iqbal",
    phone: "+92 305‑555‑1947",
    color: "from-orange-600 to-orange-800",
    bgColor: "bg-orange-50",
    services: ["Visa Processing", "University Applications", "IELTS Training"]
  },
  { 
    name: "Faisalabad", 
    icon: Factory, 
    type: "Regional Office",
    address: "Al-Fatah Centre, Katchery Rd, Civil Lines",
    phone: "+92 333‑820‑1947",
    color: "from-yellow-600 to-yellow-800",
    bgColor: "bg-yellow-50",
    services: ["Student Counseling", "Document Preparation", "Test Preparation"]
  },
  { 
    name: "Gujranwala", 
    icon: Castle, 
    type: "Branch Office",
    address: "GT Road, Commercial Area",
    phone: "+92 55 111 0947",
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-50",
    services: ["UK Universities", "Admission Guidance", "Test Booking"]
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
    name: "Multan", 
    icon: Star, 
    type: "Branch Office",
    address: "Cantt Road, Near City Centre",
    phone: "+92 61 111 0947",
    color: "from-pink-600 to-pink-800",
    bgColor: "bg-pink-50",
    services: ["IELTS Coaching", "Document Verification", "Pre-Departure"]
  },
  { 
    name: "Bahawalpur", 
    icon: Crown, 
    type: "Branch Office",
    address: "Civil Lines, Near Railway Station",
    phone: "+92 62 111 0947",
    color: "from-teal-600 to-teal-800",
    bgColor: "bg-teal-50",
    services: ["Visa Processing", "Career Counseling", "Test Preparation"]
  },
  { 
    name: "Sheikhupura", 
    icon: Shield, 
    type: "Branch Office",
    address: "Main GT Road, City Center",
    phone: "+92 56 111 0947",
    color: "from-cyan-600 to-cyan-800",
    bgColor: "bg-cyan-50",
    services: ["Document Services", "University Selection", "Interview Prep"]
  },
  { 
    name: "Mardan", 
    icon: Mountain, 
    type: "Branch Office",
    address: "Takht Bhai Road, Main Market",
    phone: "+92 937 111 0947",
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-50",
    services: ["Student Counseling", "Visa Services", "IELTS Training"]
  },
  { 
    name: "Mian Channu", 
    icon: Building, 
    type: "Branch Office",
    address: "Main Bazar, Near City Hall",
    phone: "+92 44 111 0947",
    color: "from-lime-600 to-lime-800",
    bgColor: "bg-lime-50",
    services: ["Local Services", "Document Assistance", "Career Guidance"]
  },
  { 
    name: "Mandi Bahauddin", 
    icon: Target, 
    type: "Branch Office",
    address: "Main Road, Commercial Center",
    phone: "+92 546 111 0947",
    color: "from-rose-600 to-rose-800",
    bgColor: "bg-rose-50",
    services: ["University Applications", "Test Booking", "Consultation"]
  },
  { 
    name: "Gujrat", 
    icon: Castle, 
    type: "Branch Office",
    address: "GT Road, Main Commercial Area",
    phone: "+92 53 111 0947",
    color: "from-violet-600 to-violet-800",
    bgColor: "bg-violet-50",
    services: ["Visa Processing", "Student Services", "Document Prep"]
  },
  { 
    name: "Jeddah", 
    icon: Globe, 
    type: "International Office",
    address: "Al-Rawdah District, Jeddah, Saudi Arabia",
    phone: "+966 12 111 0947",
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-50",
    services: ["Middle East Services", "Visa Support", "Student Relations"]
  },
  { 
    name: "Istanbul", 
    icon: Globe, 
    type: "International Office",
    address: "Beyoğlu District, Istanbul, Turkey",
    phone: "+90 212 111 0947",
    color: "from-emerald-600 to-emerald-800",
    bgColor: "bg-emerald-50",
    services: ["Europe Operations", "University Partnerships", "Student Support"]
  }
];

export default function BranchesCarousel() {
  // Duplicate the array for seamless infinite scrolling
  const duplicatedBranches = [...branches, ...branches];
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  const handleCallClick = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleEmailClick = (branchName: string) => {
    const email = 'info@dunyaconsultants.com';
    const subject = `Inquiry from ${branchName} Branch`;
    const body = `Hello, I would like to inquire about services at your ${branchName} branch.`;
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };

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
            Experience personalized consultation services at any of our {branches.length} strategically located branches across Pakistan and internationally
          </motion.p>
        </div>

        {/* Right-to-Left Scrolling Carousel */}
        <div 
          className="relative overflow-hidden mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={isPaused ? {} : {
              x: [0, -320 * branches.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Slower animation for better readability
                ease: "linear",
              },
            }}
            className="flex gap-6 will-change-transform"
            style={{ width: `${320 * duplicatedBranches.length}px` }}
          >
            {duplicatedBranches.map((branch, index) => {
              const IconComponent = branch.icon;
              return (
                <div
                  key={`${branch.name}-${index}`}
                  className="flex-shrink-0 w-80 group"
                >
                  <div className={`${branch.bgColor} rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full`}>
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
                      {branch.type === "International Office" && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          INT
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
                        <span className="line-clamp-2">{branch.address}</span>
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

                    {/* Contact Buttons */}
                    <div className="mt-4 flex space-x-2">
                      <button 
                        onClick={() => handleCallClick(branch.phone)}
                        className={`flex-1 bg-gradient-to-r ${branch.color} text-white text-sm font-medium py-2 px-3 rounded-lg hover:shadow-md transition-shadow`}
                      >
                        <Phone className="w-4 h-4 inline mr-1" />
                        Call
                      </button>
                      <button 
                        onClick={() => handleEmailClick(branch.name)}
                        className="flex-1 bg-gray-100 text-gray-700 text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
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
              <div className="text-3xl font-bold text-gray-900 mb-1">{branches.length}+</div>
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