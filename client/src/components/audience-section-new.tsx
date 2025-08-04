import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  Building, 
  Video, 
  FileText, 
  DollarSign,
  Laptop,
  Globe,
  TrendingUp,
  Target,
  Network,
  Eye,
  CheckCircle
} from "lucide-react";

interface AudienceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  bgGradient: string;
  offerings: {
    icon: any;
    title: string;
    description: string;
  }[];
}

const audienceData: AudienceData[] = [
  {
    id: "students",
    title: "Students",
    subtitle: "Your Dream University Awaits",
    description: "With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university!",
    icon: GraduationCap,
    color: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
    offerings: [
      {
        icon: Video,
        title: "Virtual Coaching and Counselling",
        description: "Personalized guidance sessions"
      },
      {
        icon: FileText,
        title: "Applications & Visas",
        description: "Complete application support"
      },
      {
        icon: DollarSign,
        title: "Scholarships",
        description: "Financial aid assistance"
      }
    ]
  },
  {
    id: "partners",
    title: "Partners",
    subtitle: "Innovative Technology & Expert Webinars",
    description: "We provide end-to-end support with cutting-edge technology solutions and expert-led training sessions for our educational partners.",
    icon: Building,
    color: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    offerings: [
      {
        icon: Laptop,
        title: "Innovative Technology",
        description: "Advanced platform solutions"
      },
      {
        icon: Globe,
        title: "Expert Webinars",
        description: "Professional development sessions"
      },
      {
        icon: Target,
        title: "End-to-End Support",
        description: "Complete partnership assistance"
      }
    ]
  },
  {
    id: "universities",
    title: "Universities",
    subtitle: "Diverse Recruitment & Network Access",
    description: "Connect with our extensive network of qualified students and enhance your institution's global visibility through our comprehensive recruitment solutions.",
    icon: Users,
    color: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    offerings: [
      {
        icon: TrendingUp,
        title: "Diverse Recruitment",
        description: "Access to global talent pool"
      },
      {
        icon: Network,
        title: "Network Access",
        description: "Extensive student connections"
      },
      {
        icon: Eye,
        title: "Brand Visibility",
        description: "Enhanced institutional presence"
      }
    ]
  }
];

export default function AudienceSectionNew() {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-neutral-700">Personalized Approach</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-800 mb-6">
            Tailored Solutions for{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're a student, educational partner, or university, we have specialized solutions designed for your unique needs and goals
          </p>
        </motion.div>

        {/* Modern Card-Based Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {audienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 cursor-pointer group ${
                activeCard === index ? 'ring-2 ring-primary/20 shadow-2xl' : ''
              }`}
              onClick={() => setActiveCard(index)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  {item.subtitle}
                </p>

                <p className="text-neutral-600 mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Offerings */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-neutral-800 mb-4">What We Offer:</h4>
                  <div className="grid gap-3">
                    {item.offerings.map((offering, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                        <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <offering.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-800">{offering.title}</div>
                          <div className="text-sm text-neutral-600">{offering.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8">
                  <button className={`w-full bg-gradient-to-r ${item.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Get Started with {item.title} Solutions
                  </button>
                </div>
              </div>

              {/* Active Indicator */}
              {activeCard === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg"
                  initial={false}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students, partners, and universities who have achieved their goals with our tailored solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                Learn More About Our Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}