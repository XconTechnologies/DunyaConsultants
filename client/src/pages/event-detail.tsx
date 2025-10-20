import { useEffect, useState, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin, GraduationCap, Download, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import type { Event } from "@shared/schema";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ReactCountryFlag from "react-country-flag";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { setMetaTags } from "@/lib/seo";
import EventMediaDisplay from "@/components/event-media-display";

const studyDestinations = [
  { name: "Australia", code: "AU" },
  { name: "USA", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "UK", code: "GB" },
  { name: "Finland", code: "FI" },
  { name: "Belgium", code: "BE" },
  { name: "Cyprus", code: "CY" },
  { name: "Turkey", code: "TR" },
  { name: "Germany", code: "DE" },
  { name: "Sweden", code: "SE" },
];

const educationLevels = [
  "Intermediate",
  "Associate Degree",
  "Bachelors",
  "Masters",
  "PhD",
  "Diploma",
  "Foundation"
];

export default function EventDetailPage() {
  const [, params] = useRoute("/events/:slug");
  const [, setLocation] = useLocation();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [registrationData, setRegistrationData] = useState<any>(null);
  const { toast } = useToast();
  const cardRef = useRef<HTMLDivElement>(null);

  const autoplayPlugin = Autoplay({ 
    delay: 3000, 
    stopOnInteraction: false, 
    stopOnMouseEnter: true 
  });

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [autoplayPlugin]
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    destination: ""
  });

  const { data: event, isLoading } = useQuery<Event>({
    queryKey: ["/api/events/slug", params?.slug],
    queryFn: async () => {
      const response = await fetch(`/api/events/slug/${params?.slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Event not found");
        }
        throw new Error("Failed to fetch event");
      }
      return response.json();
    },
    enabled: !!params?.slug,
  });

  const registerMutation = useMutation({
    mutationFn: async (data: typeof formData & { eventId: number }) => {
      const response = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("Failed to register");
      return response.json();
    },
    onSuccess: (data) => {
      setRegistrationData(data.registration);
      setShowRegisterModal(false);
      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        destination: ""
      });
    },
    onError: () => {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleRegister = () => {
    if (!event) return;
    registerMutation.mutate({
      ...formData,
      eventId: event.id
    });
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;
    
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
      });
      
      const link = document.createElement('a');
      link.download = `${event?.title?.replace(/\s+/g, '-')}-registration.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      toast({
        title: "Downloaded!",
        description: "Your registration card has been saved.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (event) {
      setMetaTags({
        title: event.title,
        shortDescription: event.shortDescription
      });
    }
  }, [event]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading event details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h2>
            <p className="text-gray-600 mb-6">The event you're looking for doesn't exist.</p>
            <Button onClick={() => setLocation("/events")} className="bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a]">
              Back to Events
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const eventDate = new Date(event.eventDate);
  const isPastEvent = eventDate < new Date();

  // Country code mapping for flags
  const getCountryCode = (country: string): string => {
    const countryMap: { [key: string]: string } = {
      "USA": "US",
      "UK": "GB",
      "Canada": "CA",
      "Australia": "AU",
      "Germany": "DE",
      "France": "FR",
      "Ireland": "IE",
      "Netherlands": "NL",
      "Finland": "FI",
      "Belgium": "BE",
      "Turkey": "TR",
      "New Zealand": "NZ",
      "Sweden": "SE",
      "Denmark": "DK",
      "Norway": "NO",
    };
    return countryMap[country] || "US";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] pt-24 md:pt-28 lg:pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Event Type Ticker Above Title */}
              {event.eventType && (
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
                    <span className="font-semibold text-white text-sm">{event.eventType}</span>
                  </div>
                </div>
              )}

              {/* Event Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{event.title}</h1>
              
              {/* Meta Description */}
              {event.shortDescription && (
                <p className="text-base md:text-lg text-white/90 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed">
                  {event.shortDescription}
                </p>
              )}

              {/* Date and Venue Tickers Below Title - Low White Opacity */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
                  <Calendar className="w-4 h-4 text-white" />
                  <span className="font-semibold text-white text-sm">{format(eventDate, "EEEE, MMMM d, yyyy")}</span>
                </div>
                {event.location && (
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="font-semibold text-white text-sm">{event.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Detail Image Section - Single Image Overlapping */}
      <section className="relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-95"
          >
            <img loading="lazy" 
              src={event.detailImage || event.image}
              alt={event.title}
              className="w-full aspect-[2.4/1] object-cover border-[5px] border-white rounded-xl"
            />
          </motion.div>
        </div>
      </section>
      {/* Event Content */}
      <section className="py-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Short Description with Left Border */}
                {event.shortDescription && (
                  <div className="mb-8">
                    <div 
                      className="px-4 py-4 md:px-6 md:py-5 rounded-xl shadow-lg"
                      style={{ 
                        background: 'linear-gradient(to right, #FFE5D9, #FFF0E8)',
                        borderLeft: '3px solid #FF6B35'
                      }}
                    >
                      <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed text-left">
                        {event.shortDescription}
                      </p>
                    </div>
                  </div>
                )}
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Event Details</h2>
                
                {/* Study Level Section */}
                {event.studyLevel && Array.isArray(event.studyLevel) && event.studyLevel.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-6 h-6 text-[#1D50C9]" />
                      <h3 className="text-xl font-semibold text-gray-900">Study Level</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {event.studyLevel.map((level) => (
                        <span key={level} className="px-4 py-2 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white rounded-lg font-medium text-sm">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* About This Event */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Event</h3>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                    {event.fullDescription}
                  </p>
                </div>

                {/* Study Destination Cards */}
                {event.country && Array.isArray(event.country) && event.country.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Study Destinations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {event.country.map((country) => (
                        <Card key={country} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <CardContent className="p-6 text-center">
                            <ReactCountryFlag
                              countryCode={getCountryCode(country)}
                              svg
                              style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                              }}
                              className="mx-auto mb-3"
                            />
                            <h4 className="text-gray-900 font-bold text-lg">{country}</h4>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Event Media Section */}
                {event && (
                  <EventMediaDisplay
                    recordings={event.recordings}
                    images={event.images}
                    videos={event.videos}
                    documents={event.documents}
                  />
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="sticky top-24 shadow-xl border-0">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <Calendar className="w-5 h-5 text-[#1D50C9]" />
                          <span className="font-semibold">Date & Time</span>
                        </div>
                        <p className="text-gray-900 ml-7">{format(eventDate, "EEEE, MMMM d, yyyy")}</p>
                      </div>

                      {event.location && (
                        <div>
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <MapPin className="w-5 h-5 text-[#1D50C9]" />
                            <span className="font-semibold">Location</span>
                          </div>
                          <p className="text-gray-900 ml-7">{event.location}</p>
                        </div>
                      )}

                      {event.country && Array.isArray(event.country) && event.country.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <span className="font-semibold">Study Destinations</span>
                          </div>
                          <div className="flex flex-wrap gap-2 ml-7">
                            {event.country.map((c) => (
                              <span key={c} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={() => {
                        if (!isPastEvent && event) {
                          setLocation(`/events/register-now?event=${event.slug}`);
                        }
                      }}
                      className="w-full bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white hover:animate-bob hover:scale-105 transition-all duration-300 overflow-hidden relative group"
                      data-testid="button-register-event"
                    >
                      <span className="relative z-10">
                        {isPastEvent ? "View Recording" : "Register Now"}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#0f3a8a] to-[#1D50C9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Study Destinations Carousel */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent">Best Study Abroad Destinations</h2>
            <p className="text-gray-600 text-lg">
              Explore study opportunities in top destinations worldwide
            </p>
          </motion.div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {studyDestinations.map((destination, index) => (
                <motion.div
                  key={destination.code}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-[250px] md:w-[280px] mb-8"
                >
                  <Card className="bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group cursor-pointer overflow-hidden">
                    <CardContent className="p-8 pb-[20px] text-center ml-[0px] mr-[0px] mt-[10px] mb-[10px]">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                        <ReactCountryFlag
                          countryCode={destination.code}
                          svg
                          style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                          }}
                          className="mx-auto"
                        />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                        {destination.name}
                      </h3>
                      <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Registration Modal */}
      <Dialog open={showRegisterModal} onOpenChange={setShowRegisterModal}>
        <DialogContent className="max-w-2xl max-h-[95vh] border-0 shadow-2xl flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent">
              Register for {event.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              Fill in your details below to secure your spot at this event.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5 mt-6 overflow-y-auto flex-1 pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name - Floating Label */}
              <div className="relative pt-2">
                <Input
                  id="firstName"
                  value={formData.name.split(' ')[0] || ''}
                  onChange={(e) => {
                    const lastName = formData.name.split(' ').slice(1).join(' ');
                    setFormData({ ...formData, name: lastName ? `${e.target.value} ${lastName}` : e.target.value });
                  }}
                  placeholder=" "
                  required
                  className="h-14 border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg transition-all peer px-4"
                  data-testid="input-first-name"
                />
                <Label 
                  htmlFor="firstName" 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  First Name *
                </Label>
              </div>

              {/* Last Name - Floating Label */}
              <div className="relative pt-2">
                <Input
                  id="lastName"
                  value={formData.name.split(' ').slice(1).join(' ') || ''}
                  onChange={(e) => {
                    const firstName = formData.name.split(' ')[0] || '';
                    setFormData({ ...formData, name: `${firstName} ${e.target.value}`.trim() });
                  }}
                  placeholder=" "
                  className="h-14 border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg transition-all peer px-4"
                  data-testid="input-last-name"
                />
                <Label 
                  htmlFor="lastName" 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Last Name
                </Label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email - Floating Label */}
              <div className="relative pt-2">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder=" "
                  required
                  className="h-14 border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg transition-all peer px-4"
                  data-testid="input-email"
                />
                <Label 
                  htmlFor="email" 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Email Address *
                </Label>
              </div>

              {/* Phone - Floating Label */}
              <div className="relative pt-2">
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder=" "
                  required
                  className="h-14 border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg transition-all peer px-4"
                  data-testid="input-phone"
                />
                <Label 
                  htmlFor="phone" 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Phone Number *
                </Label>
              </div>
            </div>

            {/* Education Level and Study Destination - In One Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Education Level - Dropdown */}
              <div>
                <Label htmlFor="education" className="text-gray-600 mb-2 block">
                  Education Level
                </Label>
                <Select
                  value={formData.education}
                  onValueChange={(value) => setFormData({ ...formData, education: value })}
                >
                  <SelectTrigger className="h-14 border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg" data-testid="select-education">
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    {educationLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Preferred Study Destination - Dropdown */}
              <div>
                <Label htmlFor="destination" className="text-gray-600 mb-2 block">
                  Preferred Study Destination
                </Label>
                <Select
                  value={formData.destination}
                  onValueChange={(value) => setFormData({ ...formData, destination: value })}
                >
                  <SelectTrigger className="h-14 border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg" data-testid="select-destination">
                    <SelectValue placeholder="Select your preferred destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {studyDestinations.map((dest) => (
                      <SelectItem key={dest.code} value={dest.name}>
                        {dest.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:justify-center mt-6 flex-shrink-0">
            <Button 
              variant="outline" 
              onClick={() => setShowRegisterModal(false)}
              className="w-full sm:w-auto px-8 h-11 border-2 border-[#dadada] hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              onClick={handleRegister}
              disabled={!formData.name || !formData.email || !formData.phone || registerMutation.isPending}
              className="w-full sm:w-auto px-8 h-11 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white hover:shadow-lg transition-all duration-300"
              data-testid="button-submit-registration"
            >
              {registerMutation.isPending ? "Submitting..." : "Register"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Modal with QR Code - Canva Style Card */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-3xl p-0 border-0 shadow-2xl overflow-hidden">
          <DialogTitle className="sr-only">Registration Confirmation</DialogTitle>
          <div className="relative">
            {/* Downloadable Card */}
            <div ref={cardRef} className="bg-white">
              {/* Blue Header */}
              <div className="bg-[#1D50C9] p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-white rounded-full p-3">
                    <CheckCircle className="h-8 w-8 text-[#1D50C9]" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  Registration Confirmed!
                </h1>
                <p className="text-blue-100 text-sm">
                  Thank you for registering
                </p>
              </div>

              {/* Card Content - Two Column Layout */}
              <div className="p-6 flex gap-6">
                {/* Left Column: Attendee & Event Details */}
                <div className="flex-1">
                  {/* Attendee Details Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-5 bg-orange-500"></div>
                      <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wide">Attendee Details</h3>
                    </div>
                    <p className="text-xl font-bold text-gray-900 mb-1">{registrationData?.name}</p>
                    <p className="text-sm text-gray-600">{registrationData?.email}</p>
                    <p className="text-sm text-gray-600">{registrationData?.phone}</p>
                  </div>

                  {/* Event Details Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-5 bg-orange-500"></div>
                      <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wide">Event Details</h3>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3">{event?.title}</h2>
                    
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-[#1D50C9]" />
                        <p className="text-sm text-gray-900">{format(new Date(event?.eventDate || ''), 'EEEE, MMMM d, yyyy')}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <p className="text-sm text-gray-900">10:00 AM to 5:00 PM</p>
                      </div>
                      
                      {event?.venue && (
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-[#1D50C9]" />
                          <p className="text-sm text-gray-900">{event.venue}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Prize Info */}
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded-r-md">
                    <p className="text-xs font-medium text-gray-800 flex items-center gap-2">
                      <span className="text-base">🎁</span>
                      <span>Scan at event to win exciting prizes!</span>
                    </p>
                  </div>
                </div>

                {/* Right Column: QR Code */}
                <div className="w-72 flex flex-col">
                  {/* QR Code Section */}
                  {registrationData?.qrCodeUrl && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-5 bg-orange-500"></div>
                        <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wide">Your Entry Pass</h3>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <img loading="lazy" 
                          src={registrationData.qrCodeUrl} 
                          alt="Event QR Code" 
                          className="w-full h-auto mx-auto"
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-2 text-center">
                        Show this QR code at the event entrance
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Dunya Consultants Branding */}
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-[#1D50C9] mb-2">DUNYA CONSULTANTS</h3>
                    {event?.venue && (
                      <p className="text-xs text-gray-600">
                        {event.venue}
                      </p>
                    )}
                    <p className="text-xs text-gray-600 mt-1">
                      {event?.venue?.includes('Bahawalpur') && '+92 300-1731947'}
                      {event?.venue?.includes('Lahore') && '+92 300 1234567'}
                      {event?.venue?.includes('Islamabad') && '+92 51 1234567'}
                      {event?.venue?.includes('Karachi') && '+92 21 1234567'}
                      {!event?.venue?.includes('Bahawalpur') && !event?.venue?.includes('Lahore') && !event?.venue?.includes('Islamabad') && !event?.venue?.includes('Karachi') && '+92 300-1731947'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 bg-gray-50 flex gap-2">
              <Button
                onClick={downloadCard}
                variant="outline"
                className="flex-1 border-2 border-[#1D50C9] text-[#1D50C9] hover:bg-blue-50"
                data-testid="button-download-card"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="flex-1 bg-[#1D50C9] text-white hover:bg-[#1640a3]"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
}
