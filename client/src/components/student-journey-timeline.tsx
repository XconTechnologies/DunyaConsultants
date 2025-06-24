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

        {/* Minimal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Simple Card */}
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 h-full hover:shadow-md transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm mr-3">
                    {step.id}
                  </div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {step.duration}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Key Deliverables */}
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                    Deliverables
                  </div>
                  <div className="space-y-1">
                    {step.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Clean Stats */}
        <motion.div
          className="bg-gray-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-gray-900 mb-1">8</div>
              <div className="text-sm text-gray-600">Steps</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-1">6-12</div>
              <div className="text-sm text-gray-600">Months</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-600">Success</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>

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