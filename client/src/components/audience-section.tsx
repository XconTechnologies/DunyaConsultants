import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  GraduationCap, 
  Users, 
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
  ArrowRight
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
    title: "For Students",
    subtitle: "Your Dream University Awaits",
    description: "With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university!",
    icon: GraduationCap,
    color: "#3367D6",
    bgGradient: "from-[#4285F4] to-[#3367D6]",
    offerings: [
      {
        icon: Video,
        title: "Virtual Coaching and Counselling",
        description: "Personalized guidance through online sessions with expert counsellors"
      },
      {
        icon: FileText,
        title: "Applications, Admissions & Visas",
        description: "End-to-end support for university applications and visa processing"
      },
      {
        icon: DollarSign,
        title: "High Value Scholarships and Study Loans",
        description: "Access to exclusive scholarships and flexible loan options"
      }
    ]
  },
  {
    id: "partners",
    title: "For Partners",
    subtitle: "Technology-Driven Success",
    description: "Work with our team and state-of-the-art technology and experience how they can be a game changer for your business",
    icon: Users,
    color: "#3367D6",
    bgGradient: "from-[#4285F4] to-[#3367D6]",
    offerings: [
      {
        icon: Laptop,
        title: "Innovative Technology Customized",
        description: "Cutting-edge solutions tailored specifically for your business needs"
      },
      {
        icon: Globe,
        title: "Expert-Led Webinars",
        description: "Educational sessions by University Delegates and KC Experts"
      },
      {
        icon: TrendingUp,
        title: "Unparalleled End-to-End Support",
        description: "Comprehensive assistance from planning to execution"
      }
    ]
  },
  {
    id: "universities",
    title: "For Universities",
    subtitle: "Maximize Global Reach",
    description: "Maximize your reach across geographies and exceed your student recruitment goals without compromising on quality.",
    icon: Building,
    color: "#3367D6",
    bgGradient: "from-[#4285F4] to-[#3367D6]",
    offerings: [
      {
        icon: Target,
        title: "Recruit Diverse Students",
        description: "Access students from diverse nationalities and backgrounds"
      },
      {
        icon: Network,
        title: "Extensive Recruitment Network",
        description: "Leverage KC's proven recruitment network and partnerships"
      },
      {
        icon: Eye,
        title: "Enhanced Brand Visibility",
        description: "Increase your institution's visibility in target markets"
      }
    ]
  }
];

export default function AudienceSection() {
  const [activeTab, setActiveTab] = useState("students");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeData = audienceData.find(item => item.id === activeTab) || audienceData[0];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="audience" className="py-12 bg-gradient-to-br from-neutral-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-3">
            Tailored Solutions for Everyone
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Whether you're a student, partner, or university, we have specialized services designed just for you
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {audienceData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                activeTab === item.id
                  ? `bg-gradient-to-r ${item.bgGradient} text-white shadow-lg scale-105`
                  : "bg-white text-neutral-600 hover:bg-neutral-100 shadow-md"
              }`}
            >
              <item.icon className="mr-2" size={16} />
              {item.title}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            {/* Left Side - Description */}
            <div className="space-y-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${activeData.bgGradient} rounded-xl flex items-center justify-center`}>
                <activeData.icon className="text-white" size={24} />
              </div>
              
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-2">
                  {activeData.title}
                </h3>
                <p className={`text-base font-semibold ${activeData.color} mb-3`}>
                  {activeData.subtitle}
                </p>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {activeData.description}
                </p>
              </div>

              <Button 
                size="default"
                onClick={() => scrollToSection("contact")}
                className={`bg-gradient-to-r ${activeData.bgGradient} hover:scale-105 text-white px-6 py-2 font-semibold transition-all duration-300 shadow-lg`}
              >
                Get Started
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            {/* Right Side - Offerings */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-neutral-800 mb-4">Our Offerings</h4>
              {activeData.offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-4 shadow-md card-hover bg-white/80 backdrop-blur-sm border-l-4 border-l-transparent hover:border-l-current">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${activeData.bgGradient} bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <offering.icon className={activeData.color} size={20} />
                        </div>
                        <div>
                          <h5 className="text-base font-semibold text-neutral-800 mb-1">
                            {offering.title}
                          </h5>
                          <p className="text-sm text-neutral-600">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        
      </div>
    </section>
  );
}