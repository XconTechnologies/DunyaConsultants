import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, ExternalLink, Tag } from 'lucide-react';

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
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters = [
    { id: 'all', label: 'All Events', count: 12 },
    { id: 'fair', label: 'University Fair', count: 4 },
    { id: 'webinar', label: 'Webinars', count: 5 },
    { id: 'workshop', label: 'Workshops', count: 3 }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            whileHover={{ scale: 1.02 }}
          >
            All Events
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
            <span>Home</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-blue-600 font-semibold">All Events</span>
          </div>
        </motion.div>

        {/* Featured Event Hero Card */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&crop=center"
              alt="UK University Fair"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-indigo-700/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                  Upcoming Event
                </span>
                <span className="text-white/80 text-sm">25 JAN 2025</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Study in UK University Fair 2025
                <br />
                Career Guidance Session
              </h3>
              
              <div className="flex items-center gap-6 text-white/90 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Hotel One Faisalabad, Conference Hall</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>2:00 PM - 6:00 PM</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Free
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Events List */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {upcomingEvents.slice(0, 4).map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Event Image */}
                <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src={getEventImage(event.type, index)}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-blue-600 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-3xl font-bold">25</div>
                    <div className="text-sm opacity-90">JAN 2025</div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="flex-1 p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    <motion.button
                      className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold whitespace-nowrap hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ml-4 flex-shrink-0"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ minWidth: 'fit-content' }}
                    >
                      Register Now
                    </motion.button>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{event.attendees} attending</span>
                    </div>
                  </div>

                  {/* Attendee Avatars */}
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"
                        />
                      ))}
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">+</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">and 120+ others</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          className="flex justify-center items-center gap-2 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                page === 1
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
          <span className="text-gray-400">...</span>
          <button className="w-10 h-10 rounded-lg font-medium hover:bg-gray-100 text-gray-700">
            09
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}