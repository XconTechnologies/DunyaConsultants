import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, Calendar, MapPin, GraduationCap, CheckCircle2, Sparkles, Users, Globe } from "lucide-react";
import type { Event } from "@shared/schema";
import { setStaticPageMeta } from "@/lib/seo";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().min(10, "WhatsApp number must be at least 10 digits"),
  city: z.string().min(2, "City is required"),
  education: z.string().min(1, "Please select your education level"),
  destinations: z.array(z.string()).min(1, "Please select at least one study destination"),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const educationLevels = [
  "O Level/Matric/SSC",
  "A Level/Intermediate/HSSC",
  "Associate Degree",
  "Bachelors",
  "Masters",
  "MPhil",
  "PhD",
  "Other"
];

const studyDestinations = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "Finland",
  "Belgium",
  "Turkey",
  "Sweden",
  "Cyprus",
  "Other"
];

export default function EventRegistration() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [eventSlug, setEventSlug] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    setStaticPageMeta(
      "Event Registration",
      "Register for study abroad events and seminars. Secure your spot at university fairs, webinars and counseling sessions across Pakistan."
    );
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("event");
    if (slug) {
      setEventSlug(slug);
    }
  }, []);

  // Fetch all upcoming events for dropdown
  const { data: allEvents, isLoading: eventsLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const { data: event, isLoading: eventLoading } = useQuery<Event>({
    queryKey: [`/api/events/slug/${eventSlug}`],
    enabled: !!eventSlug,
  });

  const form = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
      city: "",
      education: "",
      destinations: [],
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: RegistrationForm) => {
      if (!event) throw new Error("Event not found");
      
      const response = await apiRequest("POST", "/api/events/register", {
        eventId: event.id,
        name: data.fullName,
        email: data.email,
        phone: data.whatsapp,
        city: data.city,
        education: data.education,
        destination: data.destinations.join(", "),
      });
      return response.json();
    },
    onSuccess: (data: any) => {
      if (data.registration?.qrCodeUrl) {
        setQrCodeUrl(data.registration.qrCodeUrl);
      }
      setShowSuccessModal(true);
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: RegistrationForm) => {
    setUserName(data.fullName);
    registerMutation.mutate(data);
  };

  const handleEventSelect = (slug: string) => {
    setEventSlug(slug);
    window.history.pushState({}, '', `/events/register-now?event=${slug}`);
  };

  if (eventsLoading || eventLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[#1D50C9] mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading event details...</p>
        </div>
      </div>
    );
  }

  // Show event selector if no event is selected
  if (!eventSlug) {
    const upcomingEvents = allEvents?.filter(e => new Date(e.eventDate) >= new Date()) || [];
    
    return (
      <div className="min-h-screen bg-white py-8 sm:py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
              <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-[#1D50C9]" />
              <span className="text-sm sm:text-base text-[#1D50C9] font-medium">Join Our Events</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent mb-4 sm:mb-6 px-4">
              Event Registration
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Select an event to secure your spot and start your study abroad journey
            </p>
          </div>
          
          {/* Event Selector Card */}
          <div className="bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#0f3a8a] rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
            <div className="flex items-start sm:items-center gap-3 mb-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Choose Your Event</h2>
                <p className="text-sm sm:text-base text-white/80 mt-1">Browse upcoming events and register instantly</p>
              </div>
            </div>

            <Select onValueChange={handleEventSelect}>
              <SelectTrigger className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-white/30 hover:border-white transition-all rounded-xl sm:rounded-2xl bg-white shadow-sm" data-testid="select-event">
                <SelectValue placeholder="🎓 Select an upcoming event..." />
              </SelectTrigger>
              <SelectContent className="bg-gradient-to-br from-white to-blue-50/50 border-2 border-blue-100 shadow-2xl">
                {upcomingEvents.length === 0 ? (
                  <SelectItem value="no-events" disabled className="text-gray-400">
                    No upcoming events available
                  </SelectItem>
                ) : (
                  upcomingEvents.map((evt) => (
                    <SelectItem 
                      key={evt.id} 
                      value={evt.slug} 
                      className="text-sm sm:text-base py-4 cursor-pointer hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#0f3a8a] focus:bg-gradient-to-r focus:from-[#1D50C9] focus:to-[#0f3a8a] rounded-lg mx-1 my-0.5 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <div className="h-8 w-8 bg-blue-100 group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-all">
                          <Calendar className="h-4 w-4 text-[#1D50C9] group-hover:text-[#1D50C9]" />
                        </div>
                        <span className="flex-1 font-medium text-gray-900 group-hover:text-white transition-all">{evt.title}</span>
                        <span className="text-gray-500 text-xs sm:text-sm bg-gray-100 group-hover:bg-white/20 group-hover:text-white px-2 py-1 rounded-md transition-all">
                          {new Date(evt.eventDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl">
                <Users className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-sm text-white">Meet University Reps</span>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl">
                <GraduationCap className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-sm text-white">Expert Guidance</span>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl">
                <Globe className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-sm text-white">Global Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 max-w-md w-full border border-gray-200 shadow-2xl">
          <div className="h-16 w-16 sm:h-20 sm:w-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-red-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Event Not Found</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Button 
            onClick={() => {
              setEventSlug("");
              window.history.pushState({}, '', '/events/register-now');
            }} 
            className="bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl hover:shadow-xl transition-all w-full sm:w-auto"
          >
            Browse Events
          </Button>
        </div>
      </div>
    );
  }

  const eventDate = new Date(event.eventDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const watchedValues = form.watch();

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Event Banner Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden mb-6 sm:mb-8 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Event Image */}
            {(event.detailImage || event.image) && (
              <div className="relative h-48 sm:h-64 md:h-auto overflow-hidden">
                <img 
                  src={event.detailImage || event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            )}

            {/* Right: Event Info */}
            <div className={`p-6 sm:p-8 md:p-12 flex flex-col justify-center ${!(event.detailImage || event.image) ? 'md:col-span-2' : ''}`}>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1D50C9] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 w-fit">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-semibold">Upcoming Event</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent mb-4 sm:mb-6">
                {event.title}
              </h1>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start sm:items-center gap-3 group">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#1D50C9] transition-all flex-shrink-0">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-[#1D50C9] group-hover:text-white transition-all" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Date & Time</p>
                    <p className="text-sm sm:text-base text-gray-900 font-semibold">{eventDate}</p>
                  </div>
                </div>
                
                {event.venue && (
                  <div className="flex items-start sm:items-center gap-3 group">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-all flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF6B35] group-hover:text-white transition-all" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Venue</p>
                      <p className="text-sm sm:text-base text-gray-900 font-semibold">{event.venue}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-200">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-start sm:items-center gap-3 mb-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Registration Form</h2>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Fill in your details to secure your spot</p>
              </div>
            </div>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Row 1: Full Name and WhatsApp Number */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="relative group">
                <Input 
                  id="fullName"
                  {...form.register("fullName")}
                  placeholder=" "
                  className="h-14 border-2 border-gray-200 bg-white rounded-xl transition-all peer px-4 pt-5 group-hover:border-[#1D50C9] focus:border-[#1D50C9] focus:ring-2 focus:ring-[#1D50C9]/20"
                  data-testid="input-fullname"
                />
                <Label 
                  htmlFor="fullName" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Full Name *
                </Label>
                {form.formState.errors.fullName && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div className="relative group">
                <Input 
                  id="whatsapp"
                  {...form.register("whatsapp")}
                  placeholder=" "
                  className="h-14 border-2 border-gray-200 bg-white rounded-xl transition-all peer px-4 pt-5 group-hover:border-[#1D50C9] focus:border-[#1D50C9] focus:ring-2 focus:ring-[#1D50C9]/20"
                  data-testid="input-whatsapp"
                />
                <Label 
                  htmlFor="whatsapp" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  WhatsApp Number *
                </Label>
                {form.formState.errors.whatsapp && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                    {form.formState.errors.whatsapp.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Email and City */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="relative group">
                <Input 
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder=" "
                  className="h-14 border-2 border-gray-200 bg-white rounded-xl transition-all peer px-4 pt-5 group-hover:border-[#1D50C9] focus:border-[#1D50C9] focus:ring-2 focus:ring-[#1D50C9]/20"
                  data-testid="input-email"
                />
                <Label 
                  htmlFor="email" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Email Address *
                </Label>
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="relative group">
                <Input 
                  id="city"
                  {...form.register("city")}
                  placeholder=" "
                  className="h-14 border-2 border-gray-200 bg-white rounded-xl transition-all peer px-4 pt-5 group-hover:border-[#1D50C9] focus:border-[#1D50C9] focus:ring-2 focus:ring-[#1D50C9]/20"
                  data-testid="input-city"
                />
                <Label 
                  htmlFor="city" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  City *
                </Label>
                {form.formState.errors.city && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                    {form.formState.errors.city.message}
                  </p>
                )}
              </div>
            </div>

            {/* Education Level - Select with Floating Label */}
            <div className="relative group">
              <Select 
                onValueChange={(value) => form.setValue("education", value)}
                value={form.watch("education")}
              >
                <SelectTrigger 
                  className="h-14 border-2 border-gray-200 bg-white rounded-xl pt-5 group-hover:border-[#1D50C9] transition-all"
                  data-testid="select-education"
                >
                  <SelectValue placeholder=" " />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl">
                  {educationLevels.map((level) => (
                    <SelectItem key={level} value={level} className="rounded-lg">
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Label 
                className={`absolute left-4 bg-white px-1 transition-all duration-200 pointer-events-none ${
                  watchedValues.education 
                    ? 'top-0 text-sm text-gray-600' 
                    : 'top-1/2 -translate-y-1/2 text-gray-500'
                }`}
              >
                Education Level *
              </Label>
              {form.formState.errors.education && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                  {form.formState.errors.education.message}
                </p>
              )}
            </div>

            {/* Study Destinations - Multiple Select */}
            <div className="bg-blue-50/50 rounded-2xl p-6 border-2 border-blue-100">
              <Label className="text-gray-900 font-semibold text-lg mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#1D50C9]" />
                Study Destinations *
              </Label>
              <p className="text-sm text-gray-600 mb-4">Select all countries you're interested in</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {studyDestinations.map((destination) => {
                  const isChecked = watchedValues.destinations?.includes(destination);
                  
                  return (
                    <div 
                      key={destination} 
                      className={`flex items-center space-x-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                        isChecked 
                          ? 'bg-[#1D50C9] border-[#1D50C9] shadow-lg' 
                          : 'bg-white border-gray-200 hover:border-[#1D50C9]'
                      }`}
                      onClick={() => {
                        const current = watchedValues.destinations || [];
                        if (isChecked) {
                          form.setValue("destinations", current.filter(d => d !== destination));
                        } else {
                          form.setValue("destinations", [...current, destination]);
                        }
                      }}
                    >
                      <Checkbox
                        id={destination}
                        checked={isChecked}
                        className={isChecked ? 'border-white bg-white' : ''}
                        data-testid={`checkbox-${destination.toLowerCase()}`}
                      />
                      <label
                        htmlFor={destination}
                        className={`text-sm font-medium leading-none cursor-pointer ${
                          isChecked ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {destination}
                      </label>
                    </div>
                  );
                })}
              </div>
              {form.formState.errors.destinations && (
                <p className="text-red-500 text-sm mt-3 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                  {form.formState.errors.destinations.message}
                </p>
              )}
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Button
                type="submit"
                disabled={registerMutation.isPending}
                className="flex-1 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl hover:shadow-2xl sm:hover:scale-105 transition-all duration-300"
                data-testid="button-register"
              >
                {registerMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                    Registering...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Register Now
                  </>
                )}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => setLocation(`/events/${eventSlug}`)}
                className="flex-1 h-12 sm:h-14 text-base sm:text-lg font-semibold border-2 border-gray-300 hover:bg-white hover:border-[#1D50C9] hover:text-[#1D50C9] rounded-xl transition-all duration-300"
                data-testid="button-cancel"
              >
                Back to Event
              </Button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 px-4">
          <div className="flex items-start sm:items-center gap-3 bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-blue-100 max-w-2xl mx-auto">
            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#1D50C9] flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-gray-700 text-xs sm:text-sm font-medium text-left sm:text-center">
              You'll receive a confirmation email with your QR code for event check-in
            </p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-2xl border-0 p-0 gap-0 bg-transparent overflow-hidden max-w-[95vw]">
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
            <DialogHeader className="bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] px-6 sm:px-8 py-6 sm:py-8 relative overflow-hidden">
              {/* Animated background circles */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-white/10 rounded-full -ml-10 sm:-ml-12 -mb-10 sm:-mb-12"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center bg-white/20 rounded-full mb-3 sm:mb-4 backdrop-blur-sm">
                    <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <img 
                    src="https://dunyaconsultants.com/assets/DC%20White%20Logo_1751441165041-BqFe8mYE.png" 
                    alt="Dunya Consultants" 
                    className="h-6 sm:h-8 mx-auto opacity-90"
                  />
                </div>
                
                <div className="text-center space-y-2 sm:space-y-3">
                  <DialogTitle className="text-2xl sm:text-3xl text-white font-bold">
                    Thank You, {userName}!
                  </DialogTitle>
                  <DialogDescription className="text-base sm:text-lg text-white/90">
                    You're successfully registered for <span className="font-semibold">{event?.title}</span>
                  </DialogDescription>
                  
                  <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
                    <div className="h-1 w-1 bg-white/60 rounded-full"></div>
                    <div className="h-1 w-1 bg-white/60 rounded-full"></div>
                    <div className="h-1 w-1 bg-white/60 rounded-full"></div>
                  </div>
                </div>
              </div>
            </DialogHeader>
            
            <div className="px-4 sm:px-8 py-6 sm:py-8">
              {qrCodeUrl && event && (
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Left: Event Details */}
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-[#1D50C9]" />
                        Event Details
                      </h3>
                      
                      <div className="flex items-start gap-3 p-3 bg-white rounded-xl">
                        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">📅</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase">Date</p>
                          <p className="text-sm text-gray-900 font-medium">{new Date(event.eventDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric' 
                          })}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-white rounded-xl">
                        <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">🕐</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase">Time</p>
                          <p className="text-sm text-gray-900 font-medium">10:00 AM to 5:00 PM</p>
                        </div>
                      </div>
                      
                      {event.venue && (
                        <div className="flex items-start gap-3 p-3 bg-white rounded-xl">
                          <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">Venue</p>
                            <p className="text-sm text-gray-900 font-medium">{event.venue}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Right: QR Code */}
                    <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
                      <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-4 border-[#1D50C9] shadow-lg">
                        <img src={qrCodeUrl} alt="Event QR Code" className="w-28 h-28 sm:w-36 sm:h-36" />
                      </div>
                      <p className="text-xs text-[#1D50C9] font-bold mt-2 sm:mt-3 tracking-wider uppercase">Your Check-in QR Code</p>
                      <p className="text-xs text-gray-500 mt-1">Save this for event entry</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 bg-[#1D50C9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-base sm:text-lg">📧</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-900 font-semibold">Check Your Email</p>
                    <p className="text-xs text-gray-600 mt-1">We've sent a confirmation email with your QR code and event details</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => {
                  setShowSuccessModal(false);
                  setLocation('/events');
                }}
                className="w-full bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white h-11 sm:h-12 text-sm sm:text-base font-semibold rounded-xl hover:shadow-xl transition-all"
              >
                Browse More Events
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
