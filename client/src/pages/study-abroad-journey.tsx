import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  UserCheck, 
  GraduationCap, 
  FileText, 
  BookOpen, 
  Send, 
  CheckCircle, 
  Plane, 
  MapPin,
  Clock,
  Users,
  Award,
  Globe,
  CheckSquare,
  Calendar,
  Target,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const journeySteps = [
  {
    id: 1,
    phase: "Discovery",
    title: "Initial Consultation",
    description: "Free comprehensive assessment of your academic background, career goals, and preferred study destinations",
    duration: "1-2 weeks",
    icon: UserCheck,
    color: "#1D50C9",
    bgGradient: "from-[#1D50C9] to-[#1845B3]",
    deliverables: [
      "Complete profile assessment and academic evaluation",
      "Career counseling and goal alignment session",
      "Country and program selection guidance",
      "Budget planning and financial assessment",
      "Timeline development and milestone planning",
      "Document checklist preparation"
    ],
    tips: [
      "Bring all academic transcripts and certificates",
      "Prepare a list of preferred countries and programs",
      "Have your budget range clearly defined",
      "Be honest about your strengths and weaknesses"
    ],
    commonChallenges: [
      "Choosing between multiple attractive destinations",
      "Balancing dream schools with realistic options",
      "Understanding visa requirements early"
    ]
  },
  {
    id: 2,
    phase: "Planning",
    title: "University Selection",
    description: "Personalized university recommendations based on your profile, preferences, and career aspirations",
    duration: "2-3 weeks",
    icon: GraduationCap,
    color: "#1D50C9",
    bgGradient: "from-green-500 to-green-600",
    deliverables: [
      "Detailed university research and ranking analysis",
      "Program compatibility and curriculum review",
      "Scholarship opportunities identification",
      "Application requirements compilation",
      "Safety and reach school categorization",
      "Campus culture and location assessment"
    ],
    tips: [
      "Research university rankings in your specific field",
      "Consider location, weather, and lifestyle factors",
      "Look into alumni networks and job placement rates",
      "Check for research opportunities if applicable"
    ],
    commonChallenges: [
      "Narrowing down from too many good options",
      "Understanding different grading systems",
      "Evaluating true program quality beyond rankings"
    ]
  },
  {
    id: 3,
    phase: "Preparation",
    title: "Test Preparation & Documentation",
    description: "Comprehensive preparation for required tests and systematic collection of all necessary documents",
    duration: "4-8 weeks",
    icon: FileText,
    color: "#1D50C9",
    bgGradient: "from-purple-500 to-purple-600",
    deliverables: [
      "IELTS/PTE/TOEFL/Duolingo preparation and scheduling",
      "Academic transcripts and credential evaluation",
      "Letters of recommendation coordination",
      "Statement of purpose and personal essay writing",
      "Financial documents and bank statements",
      "Passport and visa documentation preparation"
    ],
    tips: [
      "Start test preparation at least 2 months in advance",
      "Take practice tests to identify weak areas",
      "Request recommendation letters early with proper context",
      "Write multiple drafts of your personal statement"
    ],
    commonChallenges: [
      "Achieving required English test scores",
      "Getting strong recommendation letters",
      "Writing compelling personal statements"
    ]
  },
  {
    id: 4,
    phase: "Application",
    title: "Application Submission",
    description: "Strategic application submission to selected universities with optimized materials and timing",
    duration: "3-4 weeks",
    icon: Send,
    color: "#1D50C9",
    bgGradient: "from-orange-500 to-orange-600",
    deliverables: [
      "Complete application form completion and review",
      "Document upload and verification",
      "Application fee payment and tracking",
      "Submission timeline management",
      "Application status monitoring setup",
      "Follow-up communication protocols"
    ],
    tips: [
      "Submit applications well before deadlines",
      "Double-check all information for accuracy",
      "Keep copies of all submitted documents",
      "Follow up on application status regularly"
    ],
    commonChallenges: [
      "Managing multiple application deadlines",
      "Technical issues with online portals",
      "Ensuring document authenticity and formats"
    ]
  },
  {
    id: 5,
    phase: "Admission",
    title: "Admission Follow-up",
    description: "Active monitoring of application status and strategic communication with admission offices",
    duration: "2-6 weeks",
    icon: CheckCircle,
    color: "#1D50C9",
    bgGradient: "from-teal-500 to-teal-600",
    deliverables: [
      "Application status tracking and updates",
      "Interview preparation and scheduling",
      "Additional document submission if required",
      "Scholarship application and negotiation",
      "Acceptance letter review and comparison",
      "Enrollment decision and deposit payment"
    ],
    tips: [
      "Respond promptly to university communications",
      "Prepare thoroughly for admission interviews",
      "Negotiate scholarships and financial aid",
      "Compare total costs, not just tuition"
    ],
    commonChallenges: [
      "Waiting anxiety during decision periods",
      "Choosing between multiple acceptances",
      "Understanding conditional offers"
    ]
  },
  {
    id: 6,
    phase: "Visa Processing",
    title: "Visa Application",
    description: "Complete visa application process with document preparation and interview scheduling",
    duration: "4-8 weeks",
    icon: Globe,
    color: "#1D50C9",
    bgGradient: "from-red-500 to-red-600",
    deliverables: [
      "Visa application form completion",
      "Financial proof and sponsor documentation",
      "Visa appointment scheduling",
      "Interview preparation and mock sessions",
      "Biometric data submission",
      "Visa approval and passport collection"
    ],
    tips: [
      "Apply for visa immediately after acceptance",
      "Prepare strong financial documentation",
      "Be honest and confident during interviews",
      "Have backup plans for visa delays"
    ],
    commonChallenges: [
      "Gathering sufficient financial proof",
      "Visa interview nervousness",
      "Processing delays and timing issues"
    ]
  },
  {
    id: 7,
    phase: "Pre-Departure",
    title: "Pre-Departure Preparation",
    description: "Comprehensive preparation for your journey including accommodation, travel, and orientation",
    duration: "2-4 weeks",
    icon: Plane,
    color: "#1D50C9",
    bgGradient: "from-indigo-500 to-indigo-600",
    deliverables: [
      "Accommodation booking and confirmation",
      "Flight booking and travel arrangements",
      "Travel insurance and health coverage",
      "Currency exchange and banking setup",
      "Orientation program registration",
      "Emergency contact list preparation"
    ],
    tips: [
      "Book accommodation early for better options",
      "Arrange international banking facilities",
      "Get comprehensive health insurance",
      "Pack according to destination climate"
    ],
    commonChallenges: [
      "Finding suitable accommodation",
      "Managing currency and banking",
      "Packing efficiently for long-term stay"
    ]
  },
  {
    id: 8,
    phase: "Arrival",
    title: "Arrival & Settlement",
    description: "Smooth transition to your new country with settlement support and ongoing guidance",
    duration: "2-4 weeks",
    icon: MapPin,
    color: "#1D50C9",
    bgGradient: "from-pink-500 to-pink-600",
    deliverables: [
      "Airport pickup and initial orientation",
      "University registration and enrollment",
      "Local bank account opening",
      "Phone and internet setup",
      "Social security and tax number registration",
      "Ongoing support and community integration"
    ],
    tips: [
      "Attend university orientation programs",
      "Join student organizations and clubs",
      "Explore local culture and make friends",
      "Stay in touch with family regularly"
    ],
    commonChallenges: [
      "Cultural adjustment and homesickness",
      "Academic system differences",
      "Building new social networks"
    ]
  }
];

const successStories = [
  {
    name: "Sarah Ahmed",
    destination: "University of Toronto, Canada",
    program: "Computer Science",
    achievement: "Full scholarship recipient",
    quote: "The journey guidance helped me secure a full scholarship at my dream university.",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Ali Hassan",
    destination: "University of Melbourne, Australia",
    program: "Engineering",
    achievement: "Student visa approved",
    quote: "The visa process was smooth thanks to the detailed preparation.",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Fatima Khan",
    destination: "Imperial College London, UK",
    program: "Medicine",
    achievement: "Early admission",
    quote: "Got accepted 3 months before the deadline with expert guidance.",
    image: "/api/placeholder/80/80"
  }
];

const faqs = [
  {
    question: "How long does the entire process take?",
    answer: "The complete study abroad journey typically takes 12-18 months from initial consultation to departure, depending on your preparation level and chosen destination."
  },
  {
    question: "When should I start the process?",
    answer: "Ideally, start 18-24 months before your intended departure date. This allows sufficient time for test preparation, applications, and visa processing."
  },
  {
    question: "What if I don't get accepted to my first choice?",
    answer: "We apply to 6-8 universities including safety schools. Our success rate is 95%+ for getting acceptance to at least one preferred university."
  },
  {
    question: "How much does the entire process cost?",
    answer: "Costs vary by destination but typically include: application fees ($100-200 per university), test fees ($200-300), visa fees ($300-500), and our consultation services."
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Most countries allow international students to work part-time (15-20 hours/week) during studies and full-time during breaks. Specific rules vary by country."
  }
];

export default function StudyAbroadJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(1);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 mb-6">
              <Globe className="w-5 h-5 #1845B3" />
              <span className="text-sm font-medium text-[#1565c0]">Complete Study Abroad Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Complete Study Abroad Journey
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              A comprehensive step-by-step guide to studying abroad - from initial consultation to successful settlement. 
              Follow our proven 8-phase process that has helped over 5,000 students achieve their international education dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => scrollToSection("journey-steps")}
                className="#1845B3 hover:bg-#1a73e8 text-white px-8 py-4"
              >
                <Target className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("success-stories")}
                className="#1845B3 #1845B3 hover:bg-blue-50 px-8 py-4"
              >
                <Star className="mr-2 h-5 w-5" />
                Success Stories
              </Button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold #1845B3">8</div>
              <div className="text-sm text-gray-600">Complete Phases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold #1845B3">12-18</div>
              <div className="text-sm text-gray-600">Months Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold #1845B3">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold #1845B3">5000+</div>
              <div className="text-sm text-gray-600">Students Helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section id="journey-steps" ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Complete 8-Phase Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each phase is carefully designed to build upon the previous one, ensuring you're always prepared for the next step
            </p>
          </motion.div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`flex flex-col lg:flex-row items-start gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Step Content */}
                <div className="flex-1">
                  <Card className="h-full border-2 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.bgGradient} flex items-center justify-center text-white`}>
                          <step.icon className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2">
                            {step.phase} • {step.duration}
                          </Badge>
                          <CardTitle className="text-2xl font-bold text-gray-900">
                            Phase {step.id}: {step.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckSquare className="w-5 h-5 mr-2 #1845B3" />
                          Key Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <CheckCircle className="w-4 h-4 mr-2 mt-1 #1D50C9 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pro Tips */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Star className="w-5 h-5 mr-2 #1845B3" />
                          Pro Tips
                        </h4>
                        <ul className="space-y-2">
                          {step.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <ArrowRight className="w-4 h-4 mr-2 mt-1 #1D50C9 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Common Challenges */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2 #1845B3" />
                          Common Challenges
                        </h4>
                        <ul className="space-y-2">
                          {step.commonChallenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Step Timeline */}
                <div className="flex flex-col items-center lg:w-24">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.bgGradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.id}
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-200 mt-4"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real students who followed our journey and achieved their study abroad dreams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#1D50C9] to-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {story.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">{story.name}</h3>
                        <p className="text-sm text-gray-600">{story.program}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge className="bg-blue-100 text-[#1565c0] mb-2">
                        {story.achievement}
                      </Badge>
                      <p className="font-medium text-gray-900">{story.destination}</p>
                    </div>
                    
                    <blockquote className="text-gray-600 italic">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about the study abroad journey process
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1D50C9] to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their study abroad dreams with our expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white #1845B3 hover:bg-blue-50 px-8 py-4"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4"
              >
                <Users className="mr-2 h-5 w-5" />
                Connect with Advisor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}