import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin, ArrowRight, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { format } from "date-fns";
import type { Event } from "@shared/schema";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { setStaticPageMeta } from "@/lib/seo";

export default function EventsPage() {
  useEffect(() => {
    setStaticPageMeta(
      "Events",
      "Attend study abroad events, seminars and university fairs across Pakistan. Meet university representatives and get free counseling for your international education."
    );
  }, []);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    destination: "",
    additionalInfo: ""
  });

  // Office cities (Domestic first, then International - both alphabetically)
  const cities = [
    "Bahawalpur", "Faisalabad", "Gujranwala", "Gujrat", "Islamabad",
    "Jhelum", "Karachi", "Lahore", "Mandi Bahauddin", "Mardan",
    "Mian Channu", "Multan", "Peshawar", "Sargodha", "Sheikhupura",
    "Sialkot", "Cairo", "Istanbul", "Jeddah"
  ];

  // Study destination countries
  const countries = [
    "Australia", "Belgium", "Canada", "Cyprus", "Finland",
    "Germany", "Ireland", "Turkey", "UK", "USA"
  ];

  const { data: events = [] } = useQuery<Event[]>({
    queryKey: ["/api/events"],
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
    if (!selectedEvent) return;
    registerMutation.mutate({
      ...formData,
      eventId: selectedEvent.id
    });
  };

  // Filter events based on selected city and country
  const filterEvents = (eventsList: Event[]) => {
    return eventsList.filter(event => {
      const cityMatch = selectedCity === "all" || 
        event.location?.toLowerCase().includes(selectedCity.toLowerCase());
      
      const countryMatch = selectedCountry === "all" || 
        (event.country && Array.isArray(event.country) && event.country.some(c => c.toLowerCase() === selectedCountry.toLowerCase()));
      
      return cityMatch && countryMatch;
    });
  };

  // Automatically categorize events based on date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison

  // Upcoming Events: All future events (sorted by date ascending - nearest first)
  const allUpcomingEvents = events
    .filter(e => {
      const eventDate = new Date(e.eventDate);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime());

  // Past Events: Events whose date has passed (sorted by date descending - most recent first)
  const allPastEvents = events
    .filter(e => {
      const eventDate = new Date(e.eventDate);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate < today;
    })
    .sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime());
  
  const upcomingEvents = filterEvents(allUpcomingEvents);
  const pastEvents = filterEvents(allPastEvents);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
                Events & Expos
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Explore Our <span className="text-white">Events & Expos</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-16"
            >
              Join us at educational events and exhibitions to learn about study abroad opportunities
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section - Overlapping */}
      <section className="relative z-10 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl -translate-y-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4 items-end">
              {/* City Selection */}
              <div className="space-y-2 lg:col-span-4">
                <Label htmlFor="city-filter" className="text-sm font-semibold text-gray-700">
                  Filter by City
                </Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger 
                    id="city-filter" 
                    data-testid="select-city-filter"
                    className="h-11 border-gray-300 focus:border-[#1D50C9] focus:ring-[#1D50C9]"
                  >
                    <SelectValue placeholder="All Cities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cities</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Country Selection */}
              <div className="space-y-2 lg:col-span-4">
                <Label htmlFor="country-filter" className="text-sm font-semibold text-gray-700">
                  Filter by Study Destination
                </Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger 
                    id="country-filter" 
                    data-testid="select-country-filter"
                    className="h-11 border-gray-300 focus:border-[#1D50C9] focus:ring-[#1D50C9]"
                  >
                    <SelectValue placeholder="All Countries" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Filter Button */}
              <div className="space-y-2 lg:col-span-4">
                <Label className="text-sm font-semibold text-gray-700 hidden lg:block opacity-0">
                  Action
                </Label>
                <Button
                  onClick={() => {
                    // Filters are applied automatically via state, but this gives user feedback
                    toast({
                      title: "Filters Applied",
                      description: `Showing events${selectedCity !== "all" ? ` in ${selectedCity}` : ""}${selectedCountry !== "all" ? ` for ${selectedCountry}` : ""}`,
                    });
                  }}
                  className="w-full h-11 bg-gradient-to-r from-[#1D50C9] via-[#1845B3] to-[#0f3a8a] hover:from-[#1845B3] hover:via-[#1D50C9] hover:to-[#1845B3] text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:animate-bob active:scale-95"
                  data-testid="button-apply-filters"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Events
                </Button>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedCity !== "all" || selectedCountry !== "all") && (
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-600">Active filters:</span>
                {selectedCity !== "all" && (
                  <Badge variant="secondary" className="bg-[#1D50C9]/10 text-[#1D50C9]">
                    City: {selectedCity}
                    <button
                      onClick={() => setSelectedCity("all")}
                      className="ml-2 hover:text-[#0f3a8a]"
                      data-testid={`button-clear-city-filter`}
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCountry !== "all" && (
                  <Badge variant="secondary" className="bg-[#1D50C9]/10 text-[#1D50C9]">
                    Country: {selectedCountry}
                    <button
                      onClick={() => setSelectedCountry("all")}
                      className="ml-2 hover:text-[#0f3a8a]"
                      data-testid={`button-clear-country-filter`}
                    >
                      ×
                    </button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCity("all");
                    setSelectedCountry("all");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900"
                  data-testid="button-clear-all-filters"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* No Results Message */}
      {upcomingEvents.length === 0 && (selectedCity !== "all" || selectedCountry !== "all") && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-white p-12 rounded-lg shadow-sm">
                <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Events Found</h3>
                <p className="text-gray-600 mb-6">
                  No events match your current filters. Try adjusting your search criteria.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCity("all");
                    setSelectedCountry("all");
                  }}
                  className="bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a]"
                  data-testid="button-clear-filters-no-results"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="pt-10 pb-20 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent mb-4">
                Upcoming Events
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore upcoming webinars, workshops, and info sessions. Reserve your seat today and be the first to learn about study abroad opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-[0_20px_50px_rgba(29,80,201,0.3)] transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        {event.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(event.eventDate), "MMMM d, yyyy")}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4" style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>{event.shortDescription}</p>
                      <div className="flex gap-3">
                        <Button
                          onClick={() => window.location.href = `/events/${event.slug}`}
                          variant="outline"
                          className="flex-1 border-[#1D50C9] text-[#1D50C9] hover:bg-[#1D50C9] hover:text-white transition-all duration-300"
                          data-testid={`button-details-${event.id}`}
                        >
                          See Details
                        </Button>
                        <Button
                          onClick={() => window.location.href = `/events/register-now?event=${event.slug}`}
                          className="flex-1 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white hover:animate-bob hover:scale-105 transition-all duration-300 overflow-hidden relative group"
                          data-testid={`button-register-${event.id}`}
                        >
                          <span className="relative z-10">Register Now</span>
                          <span className="absolute inset-0 bg-gradient-to-r from-[#0f3a8a] to-[#1D50C9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent mb-4">
                Past Events
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through past events, recordings, and highlights. Catch up on valuable insights you may have missed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-[0_20px_50px_rgba(29,80,201,0.3)] transition-shadow duration-300 opacity-90">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        {event.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(event.eventDate), "MMMM d, yyyy")}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4" style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>{event.shortDescription}</p>
                      <div className="flex gap-3">
                        <Button
                          onClick={() => window.location.href = `/events/${event.slug}`}
                          className="flex-1 relative overflow-hidden bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white border-0 shadow-md hover:scale-105 transition-transform duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:bg-white/30 before:transition-all before:duration-[3000ms] before:ease-linear hover:before:w-[200%] hover:before:h-[200%] before:animate-mirror-slider"
                          data-testid={`button-watch-highlights-${event.id}`}
                        >
                          <span className="relative z-10">Watch Highlights</span>
                        </Button>
                        <Button
                          onClick={() => window.location.href = `/events/${event.slug}`}
                          className="flex-1 relative overflow-hidden bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white border-0 shadow-md hover:scale-105 transition-transform duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:bg-white/30 before:transition-all before:duration-[3000ms] before:ease-linear hover:before:w-[200%] hover:before:h-[200%] before:animate-mirror-slider"
                          data-testid={`button-watch-recording-${event.id}`}
                        >
                          <span className="relative z-10">Watch Recording</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Details Modal */}
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedEvent?.title}</DialogTitle>
            <DialogDescription>
              {selectedEvent && (
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(selectedEvent.eventDate), "MMMM d, yyyy")}</span>
                  </div>
                  {selectedEvent.location && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  )}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-4">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap">{selectedEvent.fullDescription}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDetailsModal(false)}>
              Close
            </Button>
            <Button
              onClick={() => {
                setShowDetailsModal(false);
                setShowRegisterModal(true);
              }}
              className="bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a]"
            >
              Register Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Registration Modal */}
      <Dialog open={showRegisterModal} onOpenChange={setShowRegisterModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Register for Event</DialogTitle>
            <DialogDescription>
              Fill out the form below to register for {selectedEvent?.title}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                data-testid="input-email"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                data-testid="input-phone"
              />
            </div>
            <div>
              <Label htmlFor="education">Education Level</Label>
              <Select
                value={formData.education}
                onValueChange={(value) => setFormData({ ...formData, education: value })}
              >
                <SelectTrigger data-testid="select-education">
                  <SelectValue placeholder="Select your education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="postgraduate">Postgraduate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="destination">Preferred Study Destination</Label>
              <Input
                id="destination"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                data-testid="input-destination"
              />
            </div>
            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                rows={3}
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
              {registerMutation.isPending ? "Submitting..." : "Submit Registration"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
