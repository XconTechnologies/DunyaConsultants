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
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import type { Event } from "@shared/schema";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] min-h-[400px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Date and Venue Tickers */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFB088] to-[#FFA366] px-5 py-2.5 rounded-full shadow-lg" style={{ boxShadow: '0 4px 12px rgba(255, 160, 102, 0.4)' }}>
                <Calendar className="w-4 h-4 text-white" />
                <span className="font-semibold text-white text-sm">{format(eventDate, "EEEE, MMMM d, yyyy")}</span>
              </div>
              {event.location && (
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFB088] to-[#FFA366] px-5 py-2.5 rounded-full shadow-lg" style={{ boxShadow: '0 4px 12px rgba(255, 160, 102, 0.4)' }}>
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="font-semibold text-white text-sm">{event.location}</span>
                </div>
              )}
            </div>

            {/* Event Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
            
            {/* Short Description */}
            {event.shortDescription && (
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {event.shortDescription}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Event Content */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
                />
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                  {event.fullDescription}
                </p>

                {event.venue && (
                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Venue</h3>
                    <p className="text-gray-700">{event.venue}</p>
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
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Register for {event.title}</DialogTitle>
            <DialogDescription>
              Fill in your details below to register for this event.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                  data-testid="input-email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  required
                  data-testid="input-phone"
                />
              </div>
              <div>
                <Label htmlFor="education">Education Level</Label>
                <Input
                  id="education"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  placeholder="e.g., Bachelor's, Master's"
                  data-testid="input-education"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="destination">Preferred Study Destination</Label>
              <Input
                id="destination"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                placeholder="e.g., USA, UK, Canada"
                data-testid="input-destination"
              />
            </div>
            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                placeholder="Any questions or special requirements?"
                rows={4}
                data-testid="textarea-additional-info"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRegisterModal(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleRegister}
              disabled={!formData.name || !formData.email || !formData.phone || registerMutation.isPending}
              className="bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a]"
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
