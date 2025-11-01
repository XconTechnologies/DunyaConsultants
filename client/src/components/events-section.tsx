import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, ChevronLeft, ChevronRight, X, User, Phone, Mail, GraduationCap, Ticket } from 'lucide-react';
import EventTicketGenerator from "./event-ticket-generator";
import { sendConfirmationEmail } from "./email-service";

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
    'Fair': 'bg-blue-100 text-[#1565c0] border-blue-200',
    'Webinar': 'bg-blue-100 text-[#1565c0] border-blue-200',
    'Workshop': 'bg-blue-100 text-[#1565c0] border-blue-200',
    'Info Session': 'bg-blue-100 text-[#1565c0] border-blue-200'
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

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  eventId: number;
}

export default function EventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const handleFilterHover = (filterId: string, isHovering: boolean) => {
    const element = document.getElementById(`filter-${filterId}`);
    if (element && activeFilter !== filterId) {
      element.style.color = isHovering ? '#1D50C9' : '#6b7280';
    }
  };
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    eventId: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketData, setTicketData] = useState<any>(null);
  const [emailSent, setEmailSent] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter events based on active filter
  const filteredEvents = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => {
        if (activeFilter === 'fair') return event.type === 'Fair';
        if (activeFilter === 'webinar') return event.type === 'Webinar';
        if (activeFilter === 'workshop') return event.type === 'Workshop';
        if (activeFilter === 'info') return event.type === 'Info Session';
        return false;
      });

  // Reset slide when filter changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'fair', label: 'University Fair' },
    { id: 'webinar', label: 'Webinars' },
    { id: 'workshop', label: 'Workshops' }
  ];

  // Auto-scroll removed as requested

  const nextSlide = () => {
    // Mobile: single card navigation, Desktop: multi-card navigation
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setCurrentSlide((prev) => (prev + 1) % filteredEvents.length);
    } else {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredEvents.length / 4));
    }
  };

  const prevSlide = () => {
    // Mobile: single card navigation, Desktop: multi-card navigation
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setCurrentSlide((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredEvents.length / 4)) % Math.ceil(filteredEvents.length / 4));
    }
  };

  const handleRegistration = (event: Event) => {
    setSelectedEvent(event);
    setFormData({ ...formData, eventId: event.id });
    setShowRegistrationForm(true);
  };

  const generateTicketNumber = () => {
    const prefix = 'DC';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (selectedEvent) {
        // Generate ticket data
        const ticketNumber = generateTicketNumber();
        const ticket = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          education: formData.education,
          experience: formData.experience,
          eventTitle: selectedEvent.title,
          eventDate: selectedEvent.date,
          eventTime: selectedEvent.time,
          eventLocation: selectedEvent.location,
          ticketNumber
        };
        
        setTicketData(ticket);
        setIsSubmitting(false);
        setShowSuccess(true);
        setShowTicket(true);
        
        // Send confirmation email with ticket
        try {
          await sendConfirmationEmail(ticket);
          setEmailSent(true);
        } catch (error) {
          console.error('Failed to send confirmation email:', error);
        }
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setIsSubmitting(false);
    }
  };

  const handleTicketDownload = async (imageBlob: Blob) => {
    // Additional functionality after ticket download
    console.log('Ticket downloaded successfully');
  };

  const resetForm = () => {
    setShowRegistrationForm(false);
    setShowSuccess(false);
    setShowTicket(false);
    setEmailSent(false);
    setTicketData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      experience: '',
      eventId: 0
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section ref={ref} className="relative py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1D50C9]">
            Events & Workshops
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our exclusive events and workshops to enhance your study abroad journey with expert guidance and networking opportunities.
          </p>

          <div className="flex justify-center gap-1 mt-8 bg-gray-100 p-1 rounded-lg w-fit mx-auto">
            {filters.map((filter) => (
              <button
                id={`filter-${filter.id}`}
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                  activeFilter === filter.id
                    ? 'text-white shadow-sm' 
                    : 'bg-transparent text-gray-600'
                }`}
                style={activeFilter === filter.id ? { backgroundColor: '#1D50C9', color: 'white' } : { color: '#6b7280' }}
                onMouseEnter={() => handleFilterHover(filter.id, true)}
                onMouseLeave={() => handleFilterHover(filter.id, false)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous event"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-all duration-200 p-2"
            style={{ color: "#1D50C9" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next event"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-all duration-200 p-2"
            style={{ color: "#1D50C9" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Desktop: Cards Container */}
          <div className="hidden md:block overflow-hidden px-16">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              key={`desktop-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {filteredEvents.slice(currentSlide * 4, currentSlide * 4 + 4).map((event, index) => (
                      <motion.div
                        key={`slide-${currentSlide}-${event.id}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                      >
                        {/* Event Header */}
                        <div className="h-48 relative overflow-hidden">
                          <div className="w-full h-full bg-[#1D50C9] transition-all duration-300 group-hover:bg-[#1e4db5]" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                              {event.type}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="text-xl font-bold">{event.date.split(' ')[1]}</div>
                            <div className="text-xs opacity-90">{event.date.split(' ')[0]} {event.date.split(' ')[2]}</div>
                          </div>
                        </div>

                        {/* Event Content */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="space-y-2 text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" style={{ color: "#1D50C9" }} />
                              <span className="text-xs">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" style={{ color: "#1D50C9" }} />
                              <span className="text-xs line-clamp-1">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" style={{ color: "#1D50C9" }} />
                              <span className="text-xs">{event.attendees} attending</span>
                            </div>
                          </div>

                          {/* Register Button */}
                          <button
                            onClick={() => handleRegistration(event)}
                            className="w-full text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                            style={{ backgroundColor: '#1D50C9' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1845B3'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1D50C9'}
                          >
                            Register Now
                          </button>
                        </div>
                      </motion.div>
                    ))}
            </motion.div>
          </div>

          {/* Mobile: Single Card View */}
          <div className="md:hidden px-16">
            <motion.div
              key={`mobile-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {filteredEvents[currentSlide] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Event Header */}
                  <div className="h-48 relative overflow-hidden">
                    <div className="w-full h-full bg-[#1D50C9] transition-all duration-300 group-hover:bg-[#1e4db5]" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {filteredEvents[currentSlide].type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-xl font-bold">{filteredEvents[currentSlide].date.split(' ')[1]}</div>
                      <div className="text-xs opacity-90">{filteredEvents[currentSlide].date.split(' ')[0]} {filteredEvents[currentSlide].date.split(' ')[2]}</div>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {filteredEvents[currentSlide].title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {filteredEvents[currentSlide].description}
                    </p>

                    <div className="space-y-2 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" style={{ color: "#1D50C9" }} />
                        <span className="text-xs">{filteredEvents[currentSlide].time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" style={{ color: "#1D50C9" }} />
                        <span className="text-xs line-clamp-1">{filteredEvents[currentSlide].location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" style={{ color: "#1D50C9" }} />
                        <span className="text-xs">{filteredEvents[currentSlide].attendees} attending</span>
                      </div>
                    </div>

                    {/* Register Button */}
                    <button
                      onClick={() => handleRegistration(filteredEvents[currentSlide])}
                      className="w-full text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#1D50C9' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1845B3'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1D50C9'}
                    >
                      Register Now
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {/* Desktop indicators */}
            <div className="hidden md:flex">
              {Array.from({ length: Math.ceil(filteredEvents.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={currentSlide === index ? { backgroundColor: '#1D50C9' } : {}}
                />
              ))}
            </div>
            
            {/* Mobile indicators */}
            <div className="md:hidden flex">
              {filteredEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 mx-1 ${
                    index === currentSlide 
                      ? 'w-6 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={index === currentSlide ? { backgroundColor: '#1D50C9' } : {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Event Registration</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedEvent?.title}
                </p>
              </div>
              <button
                onClick={() => setShowRegistrationForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Success Message */}
            {showSuccess && !showTicket && (
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 #1845B3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Registration Successful!</h4>
                <p className="text-gray-600 mb-4">
                  Thank you for registering. Your event ticket is being generated...
                </p>
                {emailSent && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-[#1565c0] text-sm">
                      📧 Confirmation email sent to {formData.email}
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setShowTicket(true)}
                  className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white px-6 py-2 rounded-lg font-medium hover:from-[#1a73e8] hover:to-[#1a73e8] transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <Ticket className="w-4 h-4" />
                  <span>View & Download Ticket</span>
                </button>
              </div>
            )}

            {/* Registration Form */}
            {!showSuccess && (
              <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Education Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Education Level
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your education level</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                {/* Study Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Study Abroad Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your experience</option>
                    <option value="first-time">First time applicant</option>
                    <option value="reapplying">Re-applying</option>
                    <option value="experienced">Have studied abroad before</option>
                  </select>
                </div>

                {/* Event Details */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Event Details</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedEvent?.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedEvent?.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedEvent?.location}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full #1845B3 text-white py-3 px-6 rounded-lg font-medium hover:bg-#1a73e8 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Registering...
                    </div>
                  ) : (
                    'Register for Event'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}

      {/* Ticket Display Modal */}
      {showTicket && ticketData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Your Event Ticket</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Download and save your ticket for the event
                </p>
              </div>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Ticket Content */}
            <div className="p-6">
              <EventTicketGenerator 
                ticketData={ticketData}
                onDownload={handleTicketDownload}
              />
              
              <div className="mt-6 text-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-[#1565c0] mb-2">✅ Registration Complete!</h4>
                  <div className="text-sm text-#1a73e8 space-y-1">
                    <p>• Your event ticket has been generated successfully</p>
                    <p>• Confirmation email sent to {ticketData.email}</p>
                    <p>• Please download and bring this ticket to the event</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={resetForm}
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300"
                  >
                    Close & Register Another Event
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}