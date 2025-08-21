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

// Office locations for booking - Authentic office data from offices page
const officeLocations = [
  { id: "sargodha", name: "Sargodha (Head Office)", address: "Alif Tower, Bahadur Shah Zafar Road, Sargodha", phone: "+92 304-111-0947" },
  { id: "lahore-dha", name: "Lahore DHA Phase 1", address: "1st Floor, 174-6 Street 123, Sector H, DHA Phase 1, Lahore", phone: "+92 300-827-1947" },
  { id: "lahore-johar", name: "Lahore Johar Town", address: "1st Floor, 85 /R-1, Phase 2, Johar Town, Lahore", phone: "+92 300-827-1947" },
  { id: "islamabad", name: "Islamabad Blue Area", address: "Mezzanine-3, ATS Centre, Fazal-e-Haq Road, Blue Area, Islamabad", phone: "+92 333-777-5458" },
  { id: "karachi", name: "Karachi Gulistan-e-Johar", address: "05-C Prime Point Building, Main 2, Gulistan-e-Johar, Karachi", phone: "+92 332-364-3373" },
  { id: "faisalabad", name: "Faisalabad Civil Lines", address: "1st Floor Centre, Mktg City Civil Lines, Faisalabad", phone: "+92 332-662-8487" },
  { id: "gujranwala", name: "Gujranwala Peoples Colony", address: "1st Floor, Plaza 83, Peoples Colony No. 1, Gujranwala", phone: "+92 333-777-5458" },
  { id: "sialkot", name: "Sialkot Cantonment", address: "2nd Floor, Malik Centre, Kutla Road, Sialkot Cantt, Sialkot", phone: "+92 332-255-8487" },
  { id: "gujrat", name: "Gujrat GT Road", address: "1st Floor, Malik Plaza, G.T Road, Gujrat", phone: "+92 333-777-5458" },
  { id: "bahawalpur", name: "Bahawalpur Muslim Town", address: "Ground Floor, Al-Madina Plaza, Muslim Town, Bahawalpur", phone: "+92 332-662-8487" },
  { id: "mian-channu", name: "Mian Channu Moti Plaza", address: "1st Floor, Moti Plaza, Faisalabad Road, Mian Channu", phone: "+92 333-777-5458" },
  { id: "mandi-bahauddin", name: "Mandi Bahauddin Punjabi Center", address: "Ground Floor, Punjabi Center, GT Road, Mandi Bahauddin", phone: "+92 332-255-8487" },
  { id: "sheikhupura", name: "Sheikhupura Stadium Road", address: "1st Floor, Al-Noor Plaza, Stadium Road, Sheikhupura", phone: "+92 333-777-5458" },
  { id: "multan", name: "Multan Gulgasht Colony", address: "2nd Floor, Gulgasht Metro Center, Gulgasht Colony, Multan", phone: "+92 332-662-8487" },
  { id: "peshawar", name: "Peshawar Phase 3", address: "Ground Floor, Malik Center, Phase 3, Hayatabad, Peshawar", phone: "+92 333-777-5458" },
  { id: "jhelum", name: "Jhelum Sultan Plaza", address: "1st Floor, Sultan Plaza, Civil Lines, Jhelum", phone: "+92 332-255-8487" },
  { id: "mardan", name: "Mardan Warsak Commercial", address: "Ground Floor, Warsak Commercial Center, Mardan", phone: "+92 333-777-5458" },
  { id: "jeddah", name: "Jeddah Engineering Square (International)", address: "Aisha Towers, Engineering Square, Makarrona Street, 2nd Floor, Office 27, Jeddah 23447", phone: "+966-53-635-6950" },
  { id: "istanbul", name: "Istanbul Aksaray Square (International)", address: "Ankara Towers, Aksaray 7-8-9-50 Susan Main, Gülenquma", phone: "+90 500-355-0042" },
  { id: "edinburgh", name: "Edinburgh Ferry Road Place (International)", address: "4 Ferry Road Place, Edinburgh EH4 4AX", phone: "+44 7448-419291" },
  { id: "online", name: "Online Consultation", address: "Video Call via Zoom/Teams", phone: "+92 304-111-0947" }
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
  
  const [currentStep, setCurrentStep] = useState(1);
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

  const totalSteps = 5;

  const stepTitles = [
    "Choose Consultation Type",
    "Select Office Location", 
    "Pick Your Date",
    "Choose Time Slot",
    "Enter Your Details"
  ];

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

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedType !== "";
      case 2: return selectedLocation !== "";
      case 3: return selectedDate !== "";
      case 4: return selectedTime !== "";
      case 5: return formData.name && formData.email && formData.phone;
      default: return false;
    }
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
      <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
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
              className="w-20 h-20 bg-[#1D50C9] rounded-full flex items-center justify-center mx-auto mb-6"
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
    <section id="consultation" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-4 cursor-pointer transition-all duration-300 hover:scale-105 text-[#1D50C9]"
            whileHover={{ scale: 1.05 }}
          >
            Book Your Free Consultation
          </motion.h2>
          <p className="text-neutral-600 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
            Schedule a personalized consultation with our expert counsellors to kickstart your study abroad journey
          </p>
        </motion.div>

        {/* Step-by-Step Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Progress Timeline */}
          <motion.div
            className="mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-between w-full">
              {stepTitles.map((title, index) => {
                const stepNumber = index + 1;
                const isActive = currentStep === stepNumber;
                const isCompleted = currentStep > stepNumber;
                
                return (
                  <div key={stepNumber} className="flex flex-col items-center" style={{ width: '20%' }}>
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg ${
                        isCompleted ? 'bg-[#1D50C9]' : isActive ? 'bg-[#1D50C9]' : 'bg-gray-300'
                      }`}
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isCompleted ? <Check className="w-6 h-6" /> : stepNumber}
                    </motion.div>
                    <div className="text-center mt-2">
                      <div className={`text-sm font-medium ${isActive ? 'text-[#1845B3]' : 'text-gray-600'}`}>
                        Step {stepNumber}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-[#1565c0]' : 'text-gray-500'}`}>
                        {title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Progress Line */}
            <div className="relative mt-4">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded transform -translate-y-1/2" style={{ left: '10%', right: '10%' }}></div>
              <motion.div
                className="absolute top-1/2 left-0 h-1 bg-[#1D50C9] rounded transform -translate-y-1/2"
                style={{ 
                  left: '10%',
                  width: `${((currentStep - 1) / (totalSteps - 1)) * 80}%`
                }}
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 80}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Step Content */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 min-h-96"
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Step 1: Consultation Type */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Choose Your Consultation Type</h3>
                <p className="text-gray-600 mb-8">Select the type of consultation that best fits your needs</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {consultationTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      onClick={() => {
                        setSelectedType(type.id);
                        handleInputChange('consultationType', type.id);
                      }}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                        selectedType === type.id
                          ? 'border-[#1D50C9] bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-medium text-sm text-gray-900 mb-2">{type.name}</div>
                      <div className="text-sm text-gray-600">{type.duration} • {type.price}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Location Selection */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Office Location</h3>
                <p className="text-gray-600 mb-8">Choose your preferred consultation location</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2 scrollbar-hide">
                  {officeLocations.map((location) => (
                    <motion.button
                      key={location.id}
                      onClick={() => {
                        setSelectedLocation(location.id);
                        handleInputChange('location', location.id);
                      }}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                        selectedLocation === location.id
                          ? 'border-[#1D50C9] bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-[#1845B3] mr-2 mt-1 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-900 text-sm truncate">{location.name}</div>
                          <div className="text-xs text-gray-600 line-clamp-2">{location.address}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Date Selection */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pick Your Date</h3>
                <p className="text-gray-600 mb-8">Select your preferred consultation date</p>
                
                <div className="grid grid-cols-5 gap-4">
                  {calendarDays.slice(0, 15).map((day) => (
                    <motion.button
                      key={day.date}
                      onClick={() => {
                        setSelectedDate(day.date);
                        handleInputChange('preferredDate', day.date);
                      }}
                      className={`p-4 rounded-xl border text-center transition-all duration-300 ${
                        selectedDate === day.date
                          ? 'bg-[#1D50C9] border-[#1D50C9] text-white'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-xs font-medium">{day.weekday}</div>
                      <div className="text-xl font-bold">{day.day}</div>
                      <div className="text-xs">{day.month}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Time Selection */}
            {currentStep === 4 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Time Slot</h3>
                <p className="text-gray-600 mb-8">Select your preferred consultation time</p>
                
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      onClick={() => {
                        setSelectedTime(time);
                        handleInputChange('preferredTime', time);
                      }}
                      className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                        selectedTime === time
                          ? 'bg-[#1D50C9] border-[#1D50C9] text-white'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Clock className="w-5 h-5 mx-auto mb-2" />
                      <div className="text-sm font-medium">{time}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Personal Details */}
            {currentStep === 5 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Details</h3>
                <p className="text-gray-600 mb-8">Provide your contact information to complete the booking</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  {/* Booking Summary */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-[#1e3a8a] mb-4">Booking Summary</h4>
                    <div className="space-y-2 text-sm text-[#1565c0]">
                      <div><strong>Type:</strong> {consultationTypes.find(t => t.id === selectedType)?.name}</div>
                      <div><strong>Location:</strong> {officeLocations.find(l => l.id === selectedLocation)?.name}</div>
                      <div><strong>Date:</strong> {selectedDate && new Date(selectedDate).toLocaleDateString()}</div>
                      <div><strong>Time:</strong> {selectedTime}</div>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3"
              >
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="px-6 py-3"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="px-6 py-3"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}