import { useEffect, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import type { Event } from "@shared/schema";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ReactCountryFlag from "react-country-flag";

export default function EventDetailPage() {
  const [, params] = useRoute("/events/:slug");
  const [, setLocation] = useLocation();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    destination: "",
    additionalInfo: ""
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
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "We'll contact you soon with more details.",
      });
      setShowRegisterModal(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        destination: "",
        additionalInfo: ""
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] min-h-[400px] flex items-center justify-center overflow-hidden pb-24">
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
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-[#FF6B35] px-5 py-2.5 rounded-full shadow-lg" style={{ boxShadow: '0 4px 12px rgba(255, 107, 53, 0.4)' }}>
                    <span className="font-semibold text-white text-sm">{event.eventType}</span>
                  </div>
                </div>
              )}

              {/* Event Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>

              {/* Date and Venue Tickers Below Title - White with Blue Text */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-lg">
                  <Calendar className="w-4 h-4 text-[#1D50C9]" />
                  <span className="font-semibold text-[#1D50C9] text-sm">{format(eventDate, "EEEE, MMMM d, yyyy")}</span>
                </div>
                {event.location && (
                  <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4 text-[#1D50C9]" />
                    <span className="font-semibold text-[#1D50C9] text-sm">{event.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail Image Section - Single Image Overlapping */}
      <section className="relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-2xl p-1 overflow-hidden"
          >
            <div 
              className="w-full h-64 lg:h-80 rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
              style={{ 
                backgroundImage: `url(${event.detailImage || event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
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
                        <Card key={country} className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                            <h4 className="text-white font-bold text-lg">{country}</h4>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
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
                      onClick={() => setShowRegisterModal(true)}
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

      {/* Registration Modal */}
      <Dialog open={showRegisterModal} onOpenChange={setShowRegisterModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent">
              Register for {event.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              Fill in your details below to secure your spot at this event.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name - Floating Label */}
              <div className="relative">
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder=" "
                  required
                  className="h-14 border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg transition-all peer px-4"
                  data-testid="input-name"
                />
                <Label 
                  htmlFor="name" 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Full Name *
                </Label>
              </div>

              {/* Email - Floating Label */}
              <div className="relative">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Email Address *
                </Label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone - Floating Label */}
              <div className="relative">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Phone Number *
                </Label>
              </div>

              {/* Education Level - Floating Label */}
              <div className="relative">
                <Input
                  id="education"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  placeholder=" "
                  className="h-14 border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg transition-all peer px-4"
                  data-testid="input-education"
                />
                <Label 
                  htmlFor="education" 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Education Level
                </Label>
              </div>
            </div>

            {/* Preferred Study Destination - Floating Label */}
            <div className="relative">
              <Input
                id="destination"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                placeholder=" "
                className="h-14 border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg transition-all peer px-4"
                data-testid="input-destination"
              />
              <Label 
                htmlFor="destination" 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-gray-600"
              >
                Preferred Study Destination
              </Label>
            </div>

            {/* Additional Information - Floating Label */}
            <div className="relative">
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                placeholder=" "
                rows={4}
                className="border-2 border-gray-200 focus:border-[#1D50C9] rounded-lg transition-all resize-none peer px-4 pt-4"
                data-testid="textarea-additional-info"
              />
              <Label 
                htmlFor="additionalInfo" 
                className="absolute left-3 top-6 text-gray-500 bg-white px-2 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-gray-600"
              >
                Additional Information
              </Label>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:justify-center mt-6">
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

      <Footer />
    </div>
  );
}
