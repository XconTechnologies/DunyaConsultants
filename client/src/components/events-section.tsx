import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight, ExternalLink, User, Award, BookOpen, Globe } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  date: string;
  time: string;
  location: string;
  type: "seminar" | "workshop" | "webinar" | "consultation";
  capacity: number;
  registered: number;
  image: string;
  featured: boolean;
  speaker: {
    name: string;
    title: string;
    expertise: string;
    experience: string;
  };
  agenda: string[];
  benefits: string[];
  prerequisites: string[];
  price: string;
  includes: string[];
  targetAudience: string[];
}

const events: Event[] = [
  {
    id: "1",
    title: "UK University Admission Seminar",
    description: "Comprehensive guide to applying to top UK universities. Learn about UCAS applications, personal statements, and scholarship opportunities.",
    detailedDescription: "Join us for an in-depth exploration of the UK university admission process. This comprehensive seminar will guide you through every step of applying to prestigious UK institutions, from initial research to final enrollment. You'll gain insider knowledge about the UCAS system, learn how to craft compelling personal statements, and discover numerous scholarship opportunities available to international students.",
    date: "2025-07-15",
    time: "10:00 AM - 12:00 PM",
    location: "Path Head Office, DHA Phase 1, Lahore",
    type: "seminar",
    capacity: 100,
    registered: 78,
    image: "/api/placeholder/400/250",
    featured: true,
    speaker: {
      name: "Dr. Sarah Mitchell",
      title: "Former UK University Admissions Officer",
      expertise: "UK Higher Education, UCAS Applications",
      experience: "15+ years in university admissions"
    },
    agenda: [
      "Understanding the UK Education System",
      "UCAS Application Process Step-by-Step",
      "Writing Winning Personal Statements",
      "University Selection Strategies",
      "Scholarship and Funding Opportunities",
      "Visa Requirements and Process",
      "Q&A Session with Admissions Expert"
    ],
    benefits: [
      "Expert guidance from former UK admissions officer",
      "Personalized application strategy",
      "Access to exclusive scholarship database",
      "Sample personal statements and essays",
      "Direct contact with university representatives"
    ],
    prerequisites: ["High school completion or equivalent", "Basic English proficiency"],
    price: "Free",
    includes: ["Seminar materials", "University guide booklet", "One-on-one consultation (15 mins)", "Light refreshments"],
    targetAudience: ["High school graduates", "Undergraduate applicants", "Parents and guardians", "Career counselors"]
  },
  {
    id: "2",
    title: "IELTS Preparation Workshop",
    description: "Intensive IELTS preparation workshop focusing on all four modules: Reading, Writing, Listening, and Speaking.",
    detailedDescription: "Master the IELTS exam with our comprehensive preparation workshop. Led by certified IELTS trainers, this intensive session covers all four test modules with proven strategies, practice exercises, and personalized feedback to help you achieve your target band score.",
    date: "2025-07-20",
    time: "2:00 PM - 5:00 PM",
    location: "Online Webinar",
    type: "workshop",
    capacity: 50,
    registered: 45,
    image: "/api/placeholder/400/250",
    featured: false,
    speaker: {
      name: "Prof. Ahmed Hassan",
      title: "Certified IELTS Trainer & Language Expert",
      expertise: "IELTS Training, English Language Teaching",
      experience: "12+ years IELTS preparation experience"
    },
    agenda: [
      "IELTS Test Format and Scoring System",
      "Reading Module: Strategies and Practice",
      "Writing Module: Task 1 & 2 Techniques",
      "Listening Module: Note-taking Skills",
      "Speaking Module: Confidence Building",
      "Time Management Strategies",
      "Mock Test and Feedback Session"
    ],
    benefits: [
      "Proven test-taking strategies",
      "Individual performance assessment",
      "Practice materials and resources",
      "Band score improvement techniques",
      "Certificate of completion"
    ],
    prerequisites: ["Intermediate English level", "Computer with internet connection"],
    price: "PKR 2,500",
    includes: ["3-hour intensive training", "Digital practice materials", "Mock test access", "Performance report"],
    targetAudience: ["IELTS test takers", "University applicants", "Immigration candidates", "Professional certification seekers"]
  },
  {
    id: "3",
    title: "Canadian Immigration Consultation",
    description: "One-on-one consultation sessions with certified immigration advisors for Canadian study and work permits.",
    detailedDescription: "Get personalized guidance for your Canadian immigration journey. Our certified immigration consultants will assess your profile, discuss various immigration pathways, and create a customized action plan for your study or work permit application to Canada.",
    date: "2025-07-25",
    time: "9:00 AM - 6:00 PM",
    location: "Path Islamabad Office",
    type: "consultation",
    capacity: 20,
    registered: 15,
    image: "/api/placeholder/400/250",
    featured: true,
    speaker: {
      name: "Maria Rodriguez",
      title: "Regulated Canadian Immigration Consultant (RCIC)",
      expertise: "Canadian Immigration Law, Student Visas",
      experience: "10+ years Canadian immigration consulting"
    },
    agenda: [
      "Initial profile assessment",
      "Immigration pathway analysis",
      "Document requirement review",
      "Application timeline planning",
      "Cost estimation and budgeting",
      "Risk assessment and mitigation",
      "Next steps action plan"
    ],
    benefits: [
      "Personalized immigration strategy",
      "Expert document review",
      "Pathway eligibility assessment",
      "Application preparation guidance",
      "Ongoing support commitment"
    ],
    prerequisites: ["Valid passport", "Educational documents", "Language test results (if available)"],
    price: "PKR 5,000",
    includes: ["60-minute consultation", "Eligibility assessment report", "Document checklist", "Follow-up email support"],
    targetAudience: ["Study permit applicants", "Work permit seekers", "Permanent residence candidates", "Family members"]
  },
  {
    id: "4",
    title: "Scholarship Opportunities Webinar",
    description: "Discover fully-funded scholarships for international students. Tips on application strategies and requirements.",
    detailedDescription: "Unlock the secrets to securing fully-funded scholarships for your international education. This comprehensive webinar reveals hidden scholarship opportunities, provides winning application strategies, and shares insider tips from successful scholarship recipients.",
    date: "2025-08-01",
    time: "7:00 PM - 8:30 PM",
    location: "Online Webinar",
    type: "webinar",
    capacity: 200,
    registered: 134,
    image: "/api/placeholder/400/250",
    featured: false,
    speaker: {
      name: "Dr. Jennifer Lee",
      title: "Scholarship Expert & Education Consultant",
      expertise: "International Scholarships, Funding Strategies",
      experience: "8+ years helping students secure scholarships"
    },
    agenda: [
      "Types of scholarships available",
      "Government and institutional funding",
      "Merit vs need-based scholarships",
      "Application writing techniques",
      "Interview preparation tips",
      "Common mistakes to avoid",
      "Success stories and case studies"
    ],
    benefits: [
      "Comprehensive scholarship database access",
      "Application templates and samples",
      "Personalized funding strategy",
      "Expert application review",
      "Ongoing scholarship alerts"
    ],
    prerequisites: ["Academic transcripts", "Career goals clarity", "Basic computer skills"],
    price: "Free",
    includes: ["90-minute webinar", "Scholarship database access", "Application templates", "Recording access"],
    targetAudience: ["Undergraduate students", "Graduate applicants", "Doctoral candidates", "Parents and advisors"]
  },
  {
    id: "5",
    title: "Australian University Fair",
    description: "Meet representatives from top Australian universities. Learn about courses, campus life, and admission requirements.",
    detailedDescription: "Experience Australia's finest educational institutions at our exclusive university fair. Meet admission officers, current students, and alumni from leading Australian universities. Explore diverse academic programs, learn about campus life, and discover why Australia is a top destination for international education.",
    date: "2025-08-10",
    time: "10:00 AM - 4:00 PM",
    location: "Pearl Continental Hotel, Karachi",
    type: "seminar",
    capacity: 150,
    registered: 89,
    image: "/api/placeholder/400/250",
    featured: true,
    speaker: {
      name: "Multiple University Representatives",
      title: "Admissions Officers from Top Australian Universities",
      expertise: "Australian Higher Education, International Admissions",
      experience: "Representatives from 12+ universities"
    },
    agenda: [
      "Welcome and overview of Australian education",
      "University presentation sessions",
      "One-on-one meetings with admissions officers",
      "Student life and accommodation panel",
      "Visa and immigration information",
      "Scholarship and funding opportunities",
      "Networking lunch and closing ceremony"
    ],
    benefits: [
      "Direct university access",
      "On-spot admission possibilities",
      "Scholarship opportunities",
      "Student visa guidance",
      "Alumni networking"
    ],
    prerequisites: ["Academic transcripts", "English proficiency proof", "Career interest clarity"],
    price: "Free",
    includes: ["University fair access", "Information packages", "Networking lunch", "University application fee waivers"],
    targetAudience: ["High school students", "University applicants", "Transfer students", "Graduate program seekers"]
  },
  {
    id: "6",
    title: "SOP Writing Masterclass",
    description: "Learn to write compelling statements of purpose that stand out. Interactive session with admission experts.",
    detailedDescription: "Master the art of writing powerful statements of purpose that capture admissions committees' attention. This interactive masterclass provides hands-on experience, expert feedback, and proven techniques to craft SOPs that significantly improve your admission chances.",
    date: "2025-08-15",
    time: "3:00 PM - 5:00 PM",
    location: "Online Workshop",
    type: "workshop",
    capacity: 75,
    registered: 62,
    image: "/api/placeholder/400/250",
    featured: false,
    speaker: {
      name: "Dr. Michael Thompson",
      title: "Academic Writing Expert & Former Admissions Committee Member",
      expertise: "Academic Writing, Statement of Purpose",
      experience: "20+ years in academic admissions"
    },
    agenda: [
      "Understanding SOP purpose and impact",
      "Structure and formatting guidelines",
      "Storytelling techniques for SOPs",
      "Highlighting achievements effectively",
      "Addressing weaknesses strategically",
      "Live writing exercise and feedback",
      "Peer review and expert critique"
    ],
    benefits: [
      "Expert SOP review and feedback",
      "Writing templates and guidelines",
      "Peer collaboration opportunities",
      "Admission success strategies",
      "Ongoing writing support"
    ],
    prerequisites: ["Draft SOP or academic background summary", "University application goals", "Writing samples"],
    price: "PKR 3,500",
    includes: ["2-hour interactive workshop", "SOP template library", "Personal feedback session", "Writing resource kit"],
    targetAudience: ["University applicants", "Graduate program candidates", "Scholarship applicants", "Academic writers"]
  }
];

const getEventTypeColor = (type: Event['type']) => {
  switch (type) {
    case 'seminar':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'workshop':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'webinar':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'consultation':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function EventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [viewMode, setViewMode] = useState<'featured' | 'all'>('featured');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredEvents = events.filter(event => event.featured);
  const currentEvents = viewMode === 'featured' ? featuredEvents : events;
  const totalSlides = Math.ceil(currentEvents.length / 3); // Show 3 events per slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentEvents = () => {
    const startIndex = currentSlide * 3;
    return currentEvents.slice(startIndex, startIndex + 3);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-6 flex items-center justify-center">
            <Calendar className="mr-4 text-primary" size={40} />
            Upcoming Events
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Join our exclusive events and workshops to accelerate your study abroad journey. 
            Connect with experts, meet fellow students, and get personalized guidance.
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg p-1 shadow-lg border">
            <button
              onClick={() => {
                setViewMode('featured');
                setCurrentSlide(0);
              }}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                viewMode === 'featured'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-neutral-600 hover:text-primary'
              }`}
            >
              Featured Events
            </button>
            <button
              onClick={() => {
                setViewMode('all');
                setCurrentSlide(0);
              }}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                viewMode === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-neutral-600 hover:text-primary'
              }`}
            >
              All Events
            </button>
          </div>
        </motion.div>

        {/* Events Slider */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-8">
                      {currentEvents.slice(slideIndex * 3, slideIndex * 3 + 3).map((event, index) => (
                        <motion.div
                          key={event.id}
                          className="bg-gradient-to-br from-white to-gray-50 rounded-xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -5 }}
                          onClick={() => setSelectedEvent(event)}
                        >
                          {/* Event Header */}
                          <div className={`relative h-40 bg-gradient-to-br overflow-hidden ${
                            event.type === 'seminar' ? 'from-blue-500 to-blue-600' :
                            event.type === 'workshop' ? 'from-green-500 to-green-600' :
                            event.type === 'webinar' ? 'from-purple-500 to-purple-600' :
                            'from-orange-500 to-orange-600'
                          }`}>
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="absolute top-4 left-4">
                              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-800">
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                                <div className="text-xl font-bold text-neutral-800">
                                  {new Date(event.date).getDate()}
                                </div>
                                <div className="text-xs text-neutral-600">
                                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <div className="text-lg font-bold">{event.price}</div>
                            </div>
                          </div>

                          {/* Event Content */}
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {event.title}
                            </h3>
                            
                            {/* Speaker Info */}
                            <div className="flex items-center mb-3 text-sm text-neutral-600">
                              <User className="mr-2" size={14} />
                              <span className="font-medium">{event.speaker.name}</span>
                            </div>

                            {/* Event Details */}
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-sm text-neutral-500">
                                <Calendar className="mr-2" size={14} />
                                {formatDate(event.date)}
                              </div>
                              <div className="flex items-center text-sm text-neutral-500">
                                <Clock className="mr-2" size={14} />
                                {event.time}
                              </div>
                              <div className="flex items-center text-sm text-neutral-500">
                                <MapPin className="mr-2" size={14} />
                                <span className="line-clamp-1">{event.location}</span>
                              </div>
                            </div>

                            {/* Registration Progress */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-neutral-600">Seats</span>
                                <span className="text-neutral-800 font-semibold">
                                  {event.registered}/{event.capacity}
                                </span>
                              </div>
                              <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full transition-all duration-300 ${
                                    event.type === 'seminar' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                                    event.type === 'workshop' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                                    event.type === 'webinar' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                                    'bg-gradient-to-r from-orange-400 to-orange-600'
                                  }`}
                                  style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                                />
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedEvent(event);
                                }}
                                className="flex-1 border border-primary text-primary py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
                              >
                                View Details
                              </button>
                              <button className="flex-1 bg-primary text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300">
                                Register
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10"
                >
                  <ChevronLeft className="text-neutral-600" size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10"
                >
                  <ChevronRight className="text-neutral-600" size={24} />
                </button>
              </>
            )}

            {/* Slide Indicators */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-6 space-x-3">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary scale-125'
                        : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative p-8 text-white bg-gradient-to-br ${
                selectedEvent.type === 'seminar' ? 'from-blue-500 to-blue-600' :
                selectedEvent.type === 'workshop' ? 'from-green-500 to-green-600' :
                selectedEvent.type === 'webinar' ? 'from-purple-500 to-purple-600' :
                'from-orange-500 to-orange-600'
              }`}>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  ✕
                </button>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                    </span>
                    <h2 className="text-3xl font-bold mb-2">{selectedEvent.title}</h2>
                    <p className="text-white/90 text-lg">{selectedEvent.detailedDescription}</p>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-3xl font-bold">{selectedEvent.price}</div>
                    <div className="text-white/80">Price</div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Event Info */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                        <Calendar className="mr-2 text-primary" />
                        Event Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="mr-3 text-neutral-400" size={16} />
                          <span>{formatDate(selectedEvent.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-3 text-neutral-400" size={16} />
                          <span>{selectedEvent.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-3 text-neutral-400" size={16} />
                          <span>{selectedEvent.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-3 text-neutral-400" size={16} />
                          <span>{selectedEvent.registered}/{selectedEvent.capacity} registered</span>
                        </div>
                      </div>
                    </div>

                    {/* Speaker Info */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                        <User className="mr-2 text-primary" />
                        Speaker
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg">{selectedEvent.speaker.name}</h4>
                        <p className="text-primary font-medium">{selectedEvent.speaker.title}</p>
                        <p className="text-neutral-600 mt-2">{selectedEvent.speaker.expertise}</p>
                        <p className="text-sm text-neutral-500 mt-1">{selectedEvent.speaker.experience}</p>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                        <Award className="mr-2 text-primary" />
                        What's Included
                      </h3>
                      <ul className="space-y-2">
                        {selectedEvent.includes.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Agenda */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                        <BookOpen className="mr-2 text-primary" />
                        Agenda
                      </h3>
                      <ul className="space-y-2">
                        {selectedEvent.agenda.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        {selectedEvent.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-500 mr-3">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
                        <Globe className="mr-2 text-primary" />
                        Target Audience
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedEvent.targetAudience.map((audience, index) => (
                          <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Prerequisites */}
                    {selectedEvent.prerequisites.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-4">Prerequisites</h3>
                        <ul className="space-y-1">
                          {selectedEvent.prerequisites.map((prereq, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2"></span>
                              {prereq}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Registration Section */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-neutral-800">{selectedEvent.price}</div>
                      <div className="text-neutral-600">
                        {selectedEvent.capacity - selectedEvent.registered} seats remaining
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                      Register Now
                      <ExternalLink className="ml-2" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}



        
      </div>
    </section>
  );
}