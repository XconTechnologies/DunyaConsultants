import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  UserCheck, 
  GraduationCap, 
  FileText, 
  BookOpen, 
  Send, 
  CheckCircle, 
  Plane, 
  MapPin 
} from "lucide-react";

const journeySteps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "Free assessment of your academic background, career goals, and preferred destinations",
    duration: "1-2 weeks",
    icon: UserCheck,
    color: "bg-blue-500",
    deliverables: ["Profile Assessment", "Country Selection", "Budget Planning", "Timeline Overview"]
  },
  {
    id: 2,
    title: "University Selection",
    description: "Personalized university recommendations based on your profile and preferences",
    duration: "2-3 weeks",
    icon: GraduationCap,
    color: "bg-blue-500",
    deliverables: ["University Shortlist", "Program Matching", "Entry Requirements", "Scholarship Options"]
  },
  {
    id: 3,
    title: "Test Preparation",
    description: "IELTS, TOEFL, PTE, or other required language and academic test preparation",
    duration: "4-8 weeks",
    icon: BookOpen,
    color: "bg-blue-500",
    deliverables: ["Test Registration", "Study Materials", "Mock Tests", "Score Achievement"]
  },
  {
    id: 4,
    title: "Document Preparation",
    description: "Complete documentation including transcripts, SOP, LORs, and financial documents",
    duration: "3-4 weeks",
    icon: FileText,
    color: "bg-blue-500",
    deliverables: ["SOP Writing", "LOR Collection", "Document Verification", "Portfolio Creation"]
  },
  {
    id: 5,
    title: "Application Submission",
    description: "Submit applications to selected universities with complete documentation",
    duration: "1-2 weeks",
    icon: Send,
    color: "bg-blue-500",
    deliverables: ["Online Applications", "Document Upload", "Application Fees", "Tracking Setup"]
  },
  {
    id: 6,
    title: "Admission & Acceptance",
    description: "Receive offers, compare options, and confirm your preferred university",
    duration: "6-12 weeks",
    icon: CheckCircle,
    color: "bg-blue-500",
    deliverables: ["Offer Letters", "Scholarship Awards", "Acceptance Confirmation", "Deposit Payment"]
  },
  {
    id: 7,
    title: "Visa Processing",
    description: "Complete visa application with proper documentation and interview preparation",
    duration: "4-8 weeks",
    icon: MapPin,
    color: "bg-blue-500",
    deliverables: ["Visa Application", "Financial Documents", "Interview Prep", "Visa Approval"]
  },
  {
    id: 8,
    title: "Pre-Departure",
    description: "Final preparations including accommodation, travel, and orientation support",
    duration: "2-4 weeks",
    icon: Plane,
    color: "bg-blue-500",
    deliverables: ["Accommodation Booking", "Travel Arrangements", "Orientation Guide", "Emergency Contacts"]
  }
];

export default function StudentJourneyTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Study Abroad Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From initial consultation to successful departure - we guide you through every step of your international education journey
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline Grid with Arrows */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline Arrow */}
                {index < journeySteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute -right-3 top-20 z-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  >
                    <div className="flex items-center">
                      <motion.div
                        className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                        style={{ transformOrigin: 'left' }}
                      />
                      <motion.div
                        className="text-blue-400 ml-1"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Enhanced Card */}
                <motion.div
                  className="bg-white rounded-xl p-6 border border-gray-100 h-full hover:shadow-lg transition-all duration-300 hover:border-blue-200 relative overflow-hidden"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Step Icon & Number */}
                  <div className="flex items-center mb-5 relative z-10">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg mr-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      >
                        <step.icon className="w-6 h-6" />
                      </motion.div>
                    </motion.div>
                    <div className="flex flex-col">
                      <motion.span
                        className="text-xs text-blue-600 font-bold uppercase tracking-wider"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      >
                        Step {step.id}
                      </motion.span>
                      <motion.span
                        className="text-xs text-gray-500 font-medium"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                      >
                        {step.duration}
                      </motion.span>
                    </div>
                  </div>

                  {/* Animated Title */}
                  <motion.h3
                    className="text-lg font-semibold text-gray-900 mb-3 leading-tight relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Animated Description */}
                  <motion.p
                    className="text-sm text-gray-600 mb-5 leading-relaxed relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                  
                  {/* Animated Deliverables */}
                  <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  >
                    <div className="text-xs font-medium text-blue-600 mb-3 uppercase tracking-wide flex items-center">
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      Key Deliverables
                    </div>
                    <div className="space-y-2">
                      {step.deliverables.slice(0, 3).map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center text-xs text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.6 + idx * 0.1 }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-3"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 + idx * 0.2 }}
                          />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Hover Effect Indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId={`step-indicator-${step.id}`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline Connector */}
          <div className="lg:hidden flex flex-col items-center space-y-6 absolute left-6 top-0 bottom-0">
            {journeySteps.slice(0, -1).map((_, index) => (
              <motion.div
                key={index}
                className="w-0.5 h-24 bg-gradient-to-b from-blue-300 to-blue-400"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ transformOrigin: 'top' }}
              />
            ))}
          </div>
        </div>



        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey Today
            <motion.div
              className="text-xl"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
          <p className="text-gray-600 mt-4 text-sm">
            Total Journey Duration: <span className="font-semibold text-blue-600">6-12 months</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}