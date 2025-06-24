import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, MapPin, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Available time slots
const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"
];

// Available consultation types
const consultationTypes = [
  { id: "general", name: "General Consultation", duration: "30 mins", price: "Free" },
  { id: "university", name: "University Selection", duration: "45 mins", price: "Free" },
  { id: "visa", name: "Visa Guidance", duration: "60 mins", price: "Free" },
  { id: "scholarship", name: "Scholarship Guidance", duration: "45 mins", price: "Free" },
  { id: "ielts", name: "IELTS Consultation", duration: "30 mins", price: "Free" },
  { id: "comprehensive", name: "Comprehensive Planning", duration: "90 mins", price: "Free" }
];

// Office locations for booking
const officeLocations = [
  { id: "lahore", name: "Lahore DHA", address: "1st Floor, 174-6 Street, Sector H, DHA Phase 1" },
  { id: "sargodha", name: "Sargodha (Head Office)", address: "Main Boulevard, University Road" },
  { id: "islamabad", name: "Islamabad", address: "Blue Area, F-6 Sector" },
  { id: "karachi", name: "Karachi", address: "Clifton Block 2, Main Shahrah-e-Faisal" },
  { id: "online", name: "Online Consultation", address: "Video Call via Zoom/Teams" }
];

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  consultationType: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  message: string;
}

export default function ConsultationBookingCalendar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    location: "",
    message: ""
  });

  // Generate next 30 days for calendar
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays
      if (date.getDay() !== 0) {
        days.push({
          date: date.toISOString().split('T')[0],
          day: date.getDate(),
          month: date.toLocaleDateString('en-US', { month: 'short' }),
          weekday: date.toLocaleDateString('en-US', { weekday: 'short' })
        });
      }
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          consultationType: "",
          preferredDate: "",
          preferredTime: "",
          location: "",
          message: ""
        });
        setSelectedDate("");
        setSelectedTime("");
        setSelectedType("");
        setSelectedLocation("");
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section ref={ref} className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your consultation has been successfully booked. You'll receive a confirmation email shortly.
            </p>
            <div className="text-sm text-gray-500">
              We'll contact you within 24 hours to confirm your appointment details.
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Free Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a personalized consultation with our expert counsellors to kickstart your study abroad journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar & Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Consultation Type Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select Consultation Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {consultationTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id);
                      handleInputChange('consultationType', type.id);
                    }}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      selectedType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-semibold text-gray-900">{type.name}</div>
                    <div className="text-sm text-gray-600">{type.duration} • {type.price}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Location Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select Location</h3>
              <div className="space-y-3">
                {officeLocations.map((location) => (
                  <motion.button
                    key={location.id}
                    onClick={() => {
                      setSelectedLocation(location.id);
                      handleInputChange('location', location.id);
                    }}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      selectedLocation === location.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                      <div>
                        <div className="font-semibold text-gray-900">{location.name}</div>
                        <div className="text-sm text-gray-600">{location.address}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select Date</h3>
              <div className="grid grid-cols-5 gap-3">
                {calendarDays.slice(0, 15).map((day) => (
                  <motion.button
                    key={day.date}
                    onClick={() => {
                      setSelectedDate(day.date);
                      handleInputChange('preferredDate', day.date);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                      selectedDate === day.date
                        ? 'border-blue-500 bg-blue-500 text-white'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-xs font-medium">{day.weekday}</div>
                    <div className="text-lg font-bold">{day.day}</div>
                    <div className="text-xs">{day.month}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Select Time</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      onClick={() => {
                        setSelectedTime(time);
                        handleInputChange('preferredTime', time);
                      }}
                      className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                        selectedTime === time
                          ? 'border-blue-500 bg-blue-500 text-white'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Clock className="w-4 h-4 mx-auto mb-1" />
                      <div className="text-sm font-medium">{time}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+92 XXX XXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your study abroad goals..."
                />
              </div>

              {/* Selection Summary */}
              {(selectedType || selectedDate || selectedTime || selectedLocation) && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Booking Summary</h4>
                  <div className="space-y-1 text-sm text-blue-800">
                    {selectedType && (
                      <div>Type: {consultationTypes.find(t => t.id === selectedType)?.name}</div>
                    )}
                    {selectedLocation && (
                      <div>Location: {officeLocations.find(l => l.id === selectedLocation)?.name}</div>
                    )}
                    {selectedDate && <div>Date: {new Date(selectedDate).toLocaleDateString()}</div>}
                    {selectedTime && <div>Time: {selectedTime}</div>}
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={!selectedType || !selectedDate || !selectedTime || !selectedLocation || !formData.name || !formData.email || !formData.phone || isSubmitting}
                className="w-full py-4 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  "Confirm Booking"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}