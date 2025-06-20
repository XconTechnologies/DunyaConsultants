import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "seminar" | "workshop" | "webinar" | "consultation";
  capacity: number;
  registered: number;
  image: string;
  featured: boolean;
}

const events: Event[] = [
  {
    id: "1",
    title: "UK University Admission Seminar",
    description: "Comprehensive guide to applying to top UK universities. Learn about UCAS applications, personal statements, and scholarship opportunities.",
    date: "2025-07-15",
    time: "10:00 AM - 12:00 PM",
    location: "Path Head Office, DHA Phase 1, Lahore",
    type: "seminar",
    capacity: 100,
    registered: 78,
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: "2",
    title: "IELTS Preparation Workshop",
    description: "Intensive IELTS preparation workshop focusing on all four modules: Reading, Writing, Listening, and Speaking.",
    date: "2025-07-20",
    time: "2:00 PM - 5:00 PM",
    location: "Online Webinar",
    type: "workshop",
    capacity: 50,
    registered: 45,
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: "3",
    title: "Canadian Immigration Consultation",
    description: "One-on-one consultation sessions with certified immigration advisors for Canadian study and work permits.",
    date: "2025-07-25",
    time: "9:00 AM - 6:00 PM",
    location: "Path Islamabad Office",
    type: "consultation",
    capacity: 20,
    registered: 15,
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: "4",
    title: "Scholarship Opportunities Webinar",
    description: "Discover fully-funded scholarships for international students. Tips on application strategies and requirements.",
    date: "2025-08-01",
    time: "7:00 PM - 8:30 PM",
    location: "Online Webinar",
    type: "webinar",
    capacity: 200,
    registered: 134,
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: "5",
    title: "Australian University Fair",
    description: "Meet representatives from top Australian universities. Learn about courses, campus life, and admission requirements.",
    date: "2025-08-10",
    time: "10:00 AM - 4:00 PM",
    location: "Pearl Continental Hotel, Karachi",
    type: "seminar",
    capacity: 150,
    registered: 89,
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: "6",
    title: "SOP Writing Masterclass",
    description: "Learn to write compelling statements of purpose that stand out. Interactive session with admission experts.",
    date: "2025-08-15",
    time: "3:00 PM - 5:00 PM",
    location: "Online Workshop",
    type: "workshop",
    capacity: 75,
    registered: 62,
    image: "/api/placeholder/400/250",
    featured: false
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredEvents = events.filter(event => event.featured);
  const totalSlides = Math.ceil(featuredEvents.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentEvents = () => {
    const startIndex = currentSlide * 2;
    return featuredEvents.slice(startIndex, startIndex + 2);
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

        {/* Featured Events Slider */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {featuredEvents.slice(slideIndex * 2, slideIndex * 2 + 2).map((event, index) => (
                        <motion.div
                          key={event.id}
                          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          {/* Event Image */}
                          <div className="relative h-48 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute top-4 left-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getEventTypeColor(event.type)}`}>
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                                <div className="text-2xl font-bold text-primary">
                                  {new Date(event.date).getDate()}
                                </div>
                                <div className="text-xs text-neutral-600">
                                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Event Content */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-neutral-600 mb-4 line-clamp-2">
                              {event.description}
                            </p>

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
                                {event.location}
                              </div>
                            </div>

                            {/* Registration Progress */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-neutral-600">Registration</span>
                                <span className="text-neutral-800 font-semibold">
                                  {event.registered}/{event.capacity}
                                </span>
                              </div>
                              <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                                />
                              </div>
                              <div className="flex items-center mt-2">
                                <Users className="mr-1 text-neutral-400" size={14} />
                                <span className="text-xs text-neutral-500">
                                  {event.capacity - event.registered} spots remaining
                                </span>
                              </div>
                            </div>

                            {/* Register Button */}
                            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                              Register Now
                              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
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

            {/* Slide Indicators */}
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
          </div>
        </motion.div>

        {/* All Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-neutral-800 mb-8 text-center">
            All Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-neutral-800 mb-2 line-clamp-2">
                    {event.title}
                  </h4>
                  
                  <div className="space-y-1 text-xs text-neutral-500 mb-3">
                    <div className="flex items-center">
                      <Clock className="mr-1" size={12} />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1" size={12} />
                      {event.location.length > 30 ? event.location.substring(0, 30) + '...' : event.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-neutral-500">
                      <Users className="mr-1" size={12} />
                      {event.registered}/{event.capacity}
                    </div>
                    <button className="text-primary text-xs font-semibold hover:underline">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't Miss Out on Our Exclusive Events!
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest events, workshops, and seminars. 
              Be the first to know about new opportunities and secure your spot early.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                View Event Calendar
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}