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
import { Loader2, Calendar, MapPin, GraduationCap, CheckCircle2 } from "lucide-react";
import type { Event } from "@shared/schema";
import dunyaLogo from "@assets/dunya-logo-blue.png";
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
      // Facebook Pixel tracking for successful registration
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'CompleteRegistration', {
          content_name: event?.title,
          status: 'completed',
          value: 1.00,
          currency: 'USD'
        });
      }
      
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
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#1D50C9]" />
      </div>
    );
  }

  // Show event selector if no event is selected
  if (!eventSlug) {
    const upcomingEvents = allEvents?.filter(e => new Date(e.eventDate) >= new Date()) || [];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent mb-4">
              Event Registration
            </h1>
            <p className="text-gray-600 text-lg">
              Select an event to register
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choose Event
            </label>
            <Select onValueChange={handleEventSelect}>
              <SelectTrigger className="w-full h-14 text-lg border-[#dadada]" data-testid="select-event">
                <SelectValue placeholder="Select an upcoming event..." />
              </SelectTrigger>
              <SelectContent>
                {upcomingEvents.length === 0 ? (
                  <SelectItem value="no-events" disabled>
                    No upcoming events available
                  </SelectItem>
                ) : (
                  upcomingEvents.map((evt) => (
                    <SelectItem key={evt.id} value={evt.slug}>
                      {evt.title} - {new Date(evt.eventDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Event Not Found</h2>
          <Button 
            onClick={() => {
              setEventSlug("");
              window.history.pushState({}, '', '/events/register-now');
            }} 
            className="mt-4 bg-[#1D50C9]"
          >
            Select Another Event
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Event Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] bg-clip-text text-transparent mb-4">
            {event.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#1D50C9]" />
              <span>{eventDate}</span>
            </div>
            {event.venue && (
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#FF6B35]" />
                <span>{event.venue}</span>
              </div>
            )}
          </div>
          {(event.detailImage || event.image) && (
            <div className="rounded-lg overflow-hidden mb-6 shadow-lg bg-white">
              <img 
                src={event.detailImage || event.image} 
                alt={event.title} 
                className="w-full aspect-[2.4/1] object-cover border-[5px] border-white rounded-lg"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
              <GraduationCap className="h-6 w-6 text-[#1D50C9]" />
              Event Registration
            </h2>
            <p className="text-gray-600 mt-2">
              Fill out the form below to register for this event
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Row 1: Full Name and WhatsApp Number */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Full Name - Floating Label */}
              <div className="relative">
                <Input 
                  id="fullName"
                  {...form.register("fullName")}
                  placeholder=" "
                  className="h-14 border-[#dadada] bg-white rounded-lg transition-all peer px-4 pt-4"
                  data-testid="input-fullname"
                />
                <Label 
                  htmlFor="fullName" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Full Name *
                </Label>
                {form.formState.errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.fullName.message}</p>
                )}
              </div>

              {/* WhatsApp Number - Floating Label */}
              <div className="relative">
                <Input 
                  id="whatsapp"
                  {...form.register("whatsapp")}
                  placeholder=" "
                  className="h-14 border-[#dadada] bg-white rounded-lg transition-all peer px-4 pt-4"
                  data-testid="input-whatsapp"
                />
                <Label 
                  htmlFor="whatsapp" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  WhatsApp Number *
                </Label>
                {form.formState.errors.whatsapp && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.whatsapp.message}</p>
                )}
              </div>
            </div>

            {/* Row 2: Email and City */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Email - Floating Label */}
              <div className="relative">
                <Input 
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder=" "
                  className="h-14 border-[#dadada] bg-white rounded-lg transition-all peer px-4 pt-4"
                  data-testid="input-email"
                />
                <Label 
                  htmlFor="email" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  Email *
                </Label>
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              {/* City - Floating Label */}
              <div className="relative">
                <Input 
                  id="city"
                  {...form.register("city")}
                  placeholder=" "
                  className="h-14 border-[#dadada] bg-white rounded-lg transition-all peer px-4 pt-4"
                  data-testid="input-city"
                />
                <Label 
                  htmlFor="city" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1D50C9] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-600"
                >
                  City *
                </Label>
                {form.formState.errors.city && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>
                )}
              </div>
            </div>

            {/* Education Level - Select with Floating Label */}
            <div className="relative">
              <Select 
                onValueChange={(value) => form.setValue("education", value)}
                value={form.watch("education")}
              >
                <SelectTrigger 
                  className="h-14 border-[#dadada] bg-white rounded-lg pt-4"
                  data-testid="select-education"
                >
                  <SelectValue placeholder=" " />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {educationLevels.map((level) => (
                    <SelectItem key={level} value={level}>
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
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.education.message}</p>
              )}
            </div>

            {/* Study Destinations - Multiple Select */}
            <div>
              <Label className="text-gray-700 font-medium mb-3 block">
                Study Destinations *
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border border-[#dadada] rounded-lg bg-white">
                {studyDestinations.map((destination) => {
                  const isChecked = watchedValues.destinations?.includes(destination);
                  
                  return (
                    <div key={destination} className="flex items-center space-x-2">
                      <Checkbox
                        id={destination}
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          const current = watchedValues.destinations || [];
                          if (checked) {
                            form.setValue("destinations", [...current, destination]);
                          } else {
                            form.setValue("destinations", current.filter(d => d !== destination));
                          }
                        }}
                        data-testid={`checkbox-${destination.toLowerCase()}`}
                      />
                      <label
                        htmlFor={destination}
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        {destination}
                      </label>
                    </div>
                  );
                })}
              </div>
              {form.formState.errors.destinations && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.destinations.message}</p>
              )}
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                disabled={registerMutation.isPending}
                className="w-full sm:flex-1 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white py-6 text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                data-testid="button-register"
              >
                {registerMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register Now"
                )}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => setLocation(`/events/${eventSlug}`)}
                className="w-full sm:flex-1 py-6 text-lg border-[#dadada] hover:bg-[#1D50C9] hover:text-white hover:border-[#1D50C9] transition-all duration-300 hover:scale-105"
                data-testid="button-cancel"
              >
                Back to Details
              </Button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            By registering, you'll receive a confirmation email with your QR code for event check-in.
          </p>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md border-[#dadada] p-0 gap-0">
          <DialogHeader className="bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] px-6 py-6 rounded-t-lg">
            <div className="text-center mb-4">
              <img 
                src="https://dunyaconsultants.com/assets/DC%20White%20Logo_1751441165041-BqFe8mYE.png" 
                alt="Dunya Consultants" 
                className="h-10 mx-auto"
              />
            </div>
            
            <div className="text-center space-y-3">
              <DialogTitle className="text-2xl text-white flex items-center justify-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
                Thank You <strong className="font-bold italic">{userName}</strong>!
              </DialogTitle>
              <DialogDescription className="text-base text-white/90">
                for registering for <strong>{event?.title}</strong>
              </DialogDescription>
              
              <p className="text-sm text-white/90 mt-3">
                📧 Check your email for confirmation and your QR code
              </p>
            </div>
          </DialogHeader>
          <div className="px-6 pb-6 pt-4">
            {qrCodeUrl && event && (
              <div id="event-card-download" className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 text-base mb-4">Event Details</h3>
                <div className="flex items-start gap-6">
                  {/* Left: Event Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-[#1D50C9] text-lg">📅</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Date:</p>
                        <p className="text-sm text-gray-700">{new Date(event.eventDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric' 
                        })}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-orange-500 text-lg">🕐</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Time:</p>
                        <p className="text-sm text-gray-700">10:00 AM to 5:00 PM</p>
                      </div>
                    </div>
                    
                    {event.venue && (
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 text-lg">📍</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Venue:</p>
                          <p className="text-sm text-gray-700">{event.venue}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Right: QR Code */}
                  <div className="text-center">
                    <div className="bg-white p-3 inline-block rounded-lg border-2 border-[#1D50C9]">
                      <img src={qrCodeUrl} alt="Event QR Code" className="w-28 h-28" />
                    </div>
                    <p className="text-xs text-[#1D50C9] font-bold mt-2 tracking-wide">YOUR QR CODE</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-3 px-6 pb-6">
            <Button
              onClick={async () => {
                if (event && qrCodeUrl) {
                  try {
                    // Create canvas manually with better control
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;

                    // Set canvas dimensions (2x for high resolution)
                    const scale = 2;
                    canvas.width = 600 * scale;
                    canvas.height = 540 * scale;

                    // Fill white background
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    // Draw blue gradient header background with increased padding
                    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                    gradient.addColorStop(0, '#1D50C9');
                    gradient.addColorStop(1, '#0f3a8a');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, 165 * scale);

                    // Load white logo from local public folder
                    const logoImage = new Image();
                    
                    await new Promise<void>((resolve) => {
                      logoImage.onload = () => {
                        try {
                          // Draw white logo centered at top with top padding
                          const logoWidth = 160 * scale;
                          const logoHeight = 45 * scale;
                          const logoX = (canvas.width - logoWidth) / 2;
                          ctx.drawImage(logoImage, logoX, 20 * scale, logoWidth, logoHeight);
                          console.log('Logo drawn successfully');
                          resolve();
                        } catch (err) {
                          console.error('Error drawing logo:', err);
                          resolve();
                        }
                      };
                      logoImage.onerror = (e) => {
                        console.error('Logo loading failed:', e);
                        resolve();
                      };
                      // Use local logo from public folder
                      logoImage.src = '/dunya-white-logo.png';
                    });

                    // Draw "Thank You" text with username in bold italic
                    ctx.fillStyle = '#ffffff';
                    ctx.textAlign = 'center';
                    
                    // Measure text parts to position correctly
                    ctx.font = `bold ${22 * scale}px system-ui`;
                    const thankYouPrefix = '✓ Thank You ';
                    const thankYouSuffix = '!';
                    
                    const prefixWidth = ctx.measureText(thankYouPrefix).width;
                    ctx.font = `bold italic ${22 * scale}px system-ui`;
                    const nameWidth = ctx.measureText(userName).width;
                    ctx.font = `bold ${22 * scale}px system-ui`;
                    const suffixWidth = ctx.measureText(thankYouSuffix).width;
                    const totalWidth = prefixWidth + nameWidth + suffixWidth;
                    
                    // Calculate starting position to center the whole text
                    let currentX = (canvas.width - totalWidth) / 2;
                    
                    // Draw prefix
                    ctx.font = `bold ${22 * scale}px system-ui`;
                    ctx.textAlign = 'left';
                    ctx.fillText(thankYouPrefix, currentX, 95 * scale);
                    currentX += prefixWidth;
                    
                    // Draw username in bold italic
                    ctx.font = `bold italic ${22 * scale}px system-ui`;
                    ctx.fillText(userName, currentX, 95 * scale);
                    currentX += nameWidth;
                    
                    // Draw suffix
                    ctx.font = `bold ${22 * scale}px system-ui`;
                    ctx.fillText(thankYouSuffix, currentX, 95 * scale);

                    // Draw subtitle with event name in bold
                    ctx.textAlign = 'center';
                    ctx.font = `${15 * scale}px system-ui`;
                    const subtitlePrefix = 'for registering for ';
                    const subtitlePrefixWidth = ctx.measureText(subtitlePrefix).width;
                    ctx.font = `bold ${15 * scale}px system-ui`;
                    const eventTitleWidth = ctx.measureText(event.title).width;
                    const subtitleTotalWidth = subtitlePrefixWidth + eventTitleWidth;
                    
                    let subtitleX = (canvas.width - subtitleTotalWidth) / 2;
                    
                    // Draw prefix
                    ctx.font = `${15 * scale}px system-ui`;
                    ctx.textAlign = 'left';
                    ctx.fillText(subtitlePrefix, subtitleX, 125 * scale);
                    subtitleX += subtitlePrefixWidth;
                    
                    // Draw event title in bold
                    ctx.font = `bold ${15 * scale}px system-ui`;
                    ctx.fillText(event.title, subtitleX, 125 * scale);

                    // Draw email check note inside header on blue gradient
                    ctx.font = `${12 * scale}px system-ui`;
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    ctx.textAlign = 'center';
                    ctx.fillText('📧 Check your email for confirmation and your QR code', canvas.width / 2, 150 * scale);

                    // Draw container border for Event Details
                    ctx.strokeStyle = '#e5e7eb';
                    ctx.lineWidth = 2 * scale;
                    ctx.strokeRect(40 * scale, 190 * scale, 520 * scale, 315 * scale);

                    // Draw Event Details section header inside container
                    ctx.font = `bold ${20 * scale}px system-ui`;
                    ctx.fillStyle = '#000000';
                    ctx.textAlign = 'left';
                    ctx.fillText('Event Details', 60 * scale, 230 * scale);

                    // Date
                    const dateStr = new Date(event.eventDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric' 
                    });
                    ctx.font = `${18 * scale}px system-ui`;
                    ctx.fillStyle = '#dc2626';
                    ctx.fillText('📅', 75 * scale, 280 * scale);
                    ctx.fillStyle = '#000000';
                    ctx.font = `bold ${15 * scale}px system-ui`;
                    ctx.fillText('Date:', 110 * scale, 280 * scale);
                    ctx.font = `${14 * scale}px system-ui`;
                    ctx.fillStyle = '#6b7280';
                    ctx.fillText(dateStr, 110 * scale, 305 * scale);

                    // Time
                    ctx.font = `${18 * scale}px system-ui`;
                    ctx.fillStyle = '#374151';
                    ctx.fillText('🕐', 75 * scale, 355 * scale);
                    ctx.fillStyle = '#000000';
                    ctx.font = `bold ${15 * scale}px system-ui`;
                    ctx.fillText('Time:', 110 * scale, 355 * scale);
                    ctx.font = `${14 * scale}px system-ui`;
                    ctx.fillStyle = '#6b7280';
                    ctx.fillText('10:00 AM to 5:00 PM', 110 * scale, 380 * scale);

                    // Venue
                    if (event.venue) {
                      ctx.font = `${18 * scale}px system-ui`;
                      ctx.fillStyle = '#dc2626';
                      ctx.fillText('📍', 75 * scale, 430 * scale);
                      ctx.fillStyle = '#000000';
                      ctx.font = `bold ${15 * scale}px system-ui`;
                      ctx.fillText('Venue:', 110 * scale, 430 * scale);
                      ctx.font = `${14 * scale}px system-ui`;
                      ctx.fillStyle = '#6b7280';
                      ctx.fillText(event.venue, 110 * scale, 455 * scale);
                    }

                    // Load and draw QR code
                    const qrImage = new Image();
                    qrImage.crossOrigin = 'anonymous';
                    
                    await new Promise<void>((resolve, reject) => {
                      qrImage.onload = () => {
                        try {
                          // Draw QR code border (rounded rectangle) - positioned on the right inside container
                          const qrX = 370 * scale;
                          const qrY = 245 * scale;
                          const qrSize = 160 * scale;
                          const borderRadius = 12 * scale;
                          
                          ctx.strokeStyle = '#2563eb';
                          ctx.lineWidth = 5 * scale;
                          ctx.beginPath();
                          ctx.moveTo(qrX + borderRadius, qrY);
                          ctx.lineTo(qrX + qrSize - borderRadius, qrY);
                          ctx.quadraticCurveTo(qrX + qrSize, qrY, qrX + qrSize, qrY + borderRadius);
                          ctx.lineTo(qrX + qrSize, qrY + qrSize - borderRadius);
                          ctx.quadraticCurveTo(qrX + qrSize, qrY + qrSize, qrX + qrSize - borderRadius, qrY + qrSize);
                          ctx.lineTo(qrX + borderRadius, qrY + qrSize);
                          ctx.quadraticCurveTo(qrX, qrY + qrSize, qrX, qrY + qrSize - borderRadius);
                          ctx.lineTo(qrX, qrY + borderRadius);
                          ctx.quadraticCurveTo(qrX, qrY, qrX + borderRadius, qrY);
                          ctx.closePath();
                          ctx.stroke();

                          // Draw QR code image
                          ctx.drawImage(qrImage, qrX + 20 * scale, qrY + 20 * scale, 120 * scale, 120 * scale);

                          // Draw "YOUR QR CODE" text
                          ctx.font = `bold ${13 * scale}px system-ui`;
                          ctx.fillStyle = '#2563eb';
                          ctx.textAlign = 'center';
                          ctx.fillText('YOUR QR CODE', qrX + qrSize / 2, qrY + qrSize + 25 * scale);
                          
                          console.log('QR code loaded successfully');
                          resolve();
                        } catch (err) {
                          console.error('Error drawing QR code:', err);
                          reject(err);
                        }
                      };
                      qrImage.onerror = (e) => {
                        console.error('QR code loading failed:', e, 'URL:', qrCodeUrl);
                        reject(new Error('QR code failed to load'));
                      };
                      console.log('Loading QR code from:', qrCodeUrl);
                      qrImage.src = qrCodeUrl;
                    });

                    // Download the canvas - only after all images are loaded
                    const eventName = event.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/^-+|-+$/g, '');

                    canvas.toBlob((blob) => {
                      if (blob) {
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `${eventName}-event-card.png`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        URL.revokeObjectURL(url);
                        console.log('Download triggered successfully');
                      } else {
                        console.error('Failed to create blob from canvas');
                      }
                    });
                  } catch (error) {
                    console.error('Error downloading event card:', error);
                    if (error instanceof Error) {
                      console.error('Error message:', error.message);
                      console.error('Error stack:', error.stack);
                    }
                  }
                }
              }}
              className="flex-1 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white hover:shadow-lg transition-all"
            >
              Download Card
            </Button>
            <Button
              onClick={() => {
                setShowSuccessModal(false);
                setLocation("/events");
              }}
              variant="outline"
              className="flex-1 border-[#dadada] shadow-md hover:bg-gray-50"
            >
              Browse Events
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
