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
    title: "Course & University Selection",
    description: "Personalized university recommendations based on your profile and preferences",
    duration: "2-3 weeks",
    icon: GraduationCap,
    color: "bg-purple-500",
    deliverables: ["University Shortlist", "Course Matching", "Entry Requirements", "Scholarship Options"]
  },
  {
    id: 3,
    title: "Test Preparation",
    description: "IELTS, TOEFL, PTE, or other required language and academic test preparation",
    duration: "4-8 weeks",
    icon: BookOpen,
    color: "bg-green-500",
    deliverables: ["Test Registration", "Study Materials", "Mock Tests", "Score Achievement"]
  },
  {
    id: 4,
    title: "Document Preparation",
    description: "Complete documentation including transcripts, SOP, LORs, and financial documents",
    duration: "3-4 weeks",
    icon: FileText,
    color: "bg-orange-500",
    deliverables: ["SOP Writing", "LOR Collection", "Document Verification", "Portfolio Creation"]
  },
  {
    id: 5,
    title: "Application Submission",
    description: "Submit applications to selected universities with complete documentation",
    duration: "1-2 weeks",
    icon: Send,
    color: "bg-red-500",
    deliverables: ["Online Applications", "Document Upload", "Application Fees", "Tracking Setup"]
  },
  {
    id: 6,
    title: "Admission & Acceptance",
    description: "Receive offers, compare options, and confirm your preferred university",
    duration: "6-12 weeks",
    icon: CheckCircle,
    color: "bg-teal-500",
    deliverables: ["Offer Letters", "Scholarship Awards", "Acceptance Confirmation", "Deposit Payment"]
  },
  {
    id: 7,
    title: "Visa Processing",
    description: "Complete visa application with proper documentation and interview preparation",
    duration: "4-8 weeks",
    icon: MapPin,
    color: "bg-indigo-500",
    deliverables: ["Visa Application", "Financial Documents", "Interview Prep", "Visa Approval"]
  },
  {
    id: 8,
    title: "Pre-Departure",
    description: "Final preparations including accommodation, travel, and orientation support",
    duration: "2-4 weeks",
    icon: Plane,
    color: "bg-pink-500",
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

        {/* Horizontal Timeline */}
        <div className="relative overflow-x-auto pb-8">
          {/* Timeline Container */}
          <div className="flex items-start space-x-8 min-w-max px-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step Card */}
                <motion.div
                  className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 w-80 mb-6"
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Header */}
                  <div className="flex items-center mb-4">
                    <div className={`${step.color} p-3 rounded-full text-white mr-4 flex-shrink-0`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-gray-500">STEP {step.id}</span>
                        <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{step.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                  
                  {/* Deliverables */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-xs uppercase tracking-wide">Key Deliverables:</h4>
                    <div className="space-y-1">
                      {step.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full mr-2 ${step.color.replace('bg-', 'bg-')}`}></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Connection */}
                {index < journeySteps.length - 1 && (
                  <motion.div
                    className="absolute -right-4 top-16 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-10"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                )}

                {/* Step Number Circle */}
                <motion.div
                  className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white relative z-20`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                  <span className="font-bold text-lg">{step.id}</span>
                </motion.div>

                {/* Progress Line */}
                {index < journeySteps.length - 1 && (
                  <motion.div
                    className="absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress Overview */}
          <motion.div
            className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-gray-600">Total Steps</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">6-12</div>
                <div className="text-sm text-gray-600">Months Duration</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
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