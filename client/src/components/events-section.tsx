import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Webinar' | 'Workshop' | 'Info Session' | 'Fair';
  description: string;
  attendees: number;
  isOnline: boolean;
  registrationUrl: string;
  image: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Study in UK - University Fair 2025",
    date: "Jan 15, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Lahore - Pearl Continental Hotel",
    type: "Fair",
    description: "Meet representatives from 25+ UK universities. Learn about admission requirements, scholarships, and career opportunities.",
    attendees: 500,
    isOnline: false,
    registrationUrl: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "IELTS Preparation Masterclass",
    date: "Jan 20, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Online Webinar",
    type: "Webinar",
    description: "Expert tips and strategies to achieve your target IELTS score. Free practice materials included.",
    attendees: 200,
    isOnline: true,
    registrationUrl: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Canada Study Visa Workshop",
    date: "Jan 25, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Karachi - Movenpick Hotel",
    type: "Workshop",
    description: "Complete guide to Canada student visa application process. Document checklist and interview preparation.",
    attendees: 150,
    isOnline: false,
    registrationUrl: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Australia Education Info Session",
    date: "Feb 1, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Islamabad - Serena Hotel",
    type: "Info Session",
    description: "Discover study opportunities in Australia. University partnerships, work rights, and pathway programs.",
    attendees: 100,
    isOnline: false,
    registrationUrl: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Scholarship Application Workshop",
    date: "Feb 5, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Online Webinar",
    type: "Webinar",
    description: "Learn how to write winning scholarship applications. Real examples and expert feedback sessions.",
    attendees: 300,
    isOnline: true,
    registrationUrl: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Germany Study Options Seminar",
    date: "Feb 10, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Faisalabad - Serena Hotel",
    type: "Info Session",
    description: "Explore tuition-free education in Germany. Application process, language requirements, and career prospects.",
    attendees: 80,
    isOnline: false,
    registrationUrl: "#",
    image: "/api/placeholder/400/250"
  }
];

const getEventTypeColor = (type: string) => {
  const colors = {
    'Fair': 'bg-purple-100 text-purple-800 border-purple-200',
    'Webinar': 'bg-blue-100 text-blue-800 border-blue-200',
    'Workshop': 'bg-green-100 text-green-800 border-green-200',
    'Info Session': 'bg-orange-100 text-orange-800 border-orange-200'
  };
  return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
};

const getEventImage = (type: string, index: number) => {
  const images = {
    'Fair': [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center'
    ],
    'Webinar': [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop&crop=center'
    ],
    'Workshop': [
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop&crop=center'
    ],
    'Info Session': [
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1515169067868-5387ec5d9c2e?w=400&h=300&fit=crop&crop=center'
    ]
  };
  
  const typeImages = images[type as keyof typeof images] || images['Fair'];
  return typeImages[index % typeImages.length];
};

export default function EventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter events based on active filter
  const filteredEvents = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => {
        if (activeFilter === 'fair') return event.type === 'Fair';
        if (activeFilter === 'webinar') return event.type === 'Webinar';
        if (activeFilter === 'workshop') return event.type === 'Workshop';
        return false;
      });

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'fair', label: 'University Fair' },
    { id: 'webinar', label: 'Webinars' },
    { id: 'workshop', label: 'Workshops' }
  ];

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredEvents.length / 4));
    }, 4000);
    return () => clearInterval(interval);
  }, [filteredEvents.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredEvents.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredEvents.length / 4)) % Math.ceil(filteredEvents.length / 4));
  };

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            whileHover={{ scale: 1.02 }}
          >
            Events & Workshops
          </motion.h2>
        </motion.div>

        {/* Filter Tabs - Smaller buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(filteredEvents.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredEvents.slice(slideIndex * 4, slideIndex * 4 + 4).map((event, index) => (
                      <motion.div
                        key={event.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Event Image */}
                        <div className="h-32 relative overflow-hidden">
                          <img 
                            src={getEventImage(event.type, index)}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80" />
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-white/90 text-blue-600 rounded-full text-xs font-medium">
                              {event.type}
                            </span>
                          </div>
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="text-xl font-bold">{event.date.split(' ')[1]}</div>
                            <div className="text-xs opacity-90">{event.date.split(' ')[0]} {event.date.split(' ')[2]}</div>
                          </div>
                        </div>

                        {/* Event Content */}
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="space-y-2 text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-blue-500" />
                              <span className="text-xs">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-blue-500" />
                              <span className="text-xs line-clamp-1">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-500" />
                              <span className="text-xs">{event.attendees} attending</span>
                            </div>
                          </div>

                          {/* Register Button */}
                          <motion.button
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Register Now
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center items-center gap-2 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {Array.from({ length: Math.ceil(filteredEvents.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}