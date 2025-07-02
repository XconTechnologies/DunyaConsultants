import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, ExternalLink } from 'lucide-react';

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

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-neutral-800">You Should Also </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Know
            </span>
          </motion.h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Stay updated with our latest events, webinars, and workshops designed to guide you through your study abroad journey
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-full p-2 shadow-lg border">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'past'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              {/* Event Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {event.isOnline && (
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                      Online
                    </span>
                  )}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-2 text-blue-500" />
                    {event.attendees} Expected Attendees
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Register Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Events Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Events
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}