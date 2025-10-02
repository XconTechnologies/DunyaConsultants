import { useState } from "react";
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
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { format } from "date-fns";
import type { Event } from "@shared/schema";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
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

  const { data: events = [] } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const registerMutation = useMutation({
    mutationFn: async (data: typeof formData & { eventId: number }) =>
      apiRequest("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }),
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

  const latestEvents = events.filter(e => e.eventType === "latest");
  const upcomingEvents = events.filter(e => e.eventType === "upcoming");

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            >
              Join us at educational events and exhibitions to learn about study abroad opportunities
            </motion.p>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      {latestEvents.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent mb-4">
                Latest Events
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Recent educational events and exhibitions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {event.title}
                      </CardTitle>
                      <div className="flex flex-col gap-2 text-sm text-gray-600 mt-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(event.eventDate), "MMMM d, yyyy")}</span>
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.shortDescription}</p>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => {
                            setSelectedEvent(event);
                            setShowDetailsModal(true);
                          }}
                          variant="outline"
                          className="flex-1"
                          data-testid={`button-view-details-${event.id}`}
                        >
                          View Details
                        </Button>
                        <Button
                          onClick={() => {
                            setSelectedEvent(event);
                            setShowRegisterModal(true);
                          }}
                          className="flex-1 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a]"
                          data-testid={`button-register-${event.id}`}
                        >
                          Register
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

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent mb-4">
                Upcoming Events
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mark your calendar for these exciting upcoming opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {event.title}
                      </CardTitle>
                      <div className="flex flex-col gap-2 text-sm text-gray-600 mt-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(event.eventDate), "MMMM d, yyyy")}</span>
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.shortDescription}</p>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => {
                            setSelectedEvent(event);
                            setShowDetailsModal(true);
                          }}
                          variant="outline"
                          className="flex-1"
                          data-testid={`button-view-details-${event.id}`}
                        >
                          View Details
                        </Button>
                        <Button
                          onClick={() => {
                            setSelectedEvent(event);
                            setShowRegisterModal(true);
                          }}
                          className="flex-1 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a]"
                          data-testid={`button-register-${event.id}`}
                        >
                          Register
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
