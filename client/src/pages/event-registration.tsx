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
import html2canvas from "html2canvas";
import type { Event } from "@shared/schema";
import dunyaLogo from "@assets/dunya-logo-blue.png";

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
                className="w-full h-auto object-contain"
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
        <DialogContent className="sm:max-w-md border-[#dadada]">
          <DialogHeader className="bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] -mx-6 -mt-6 px-6 py-8 rounded-t-lg">
            <div className="text-center mb-6">
              <img 
                src="https://dunyaconsultants.com/assets/DC%20White%20Logo_1751441165041-BqFe8mYE.png" 
                alt="Dunya Consultants" 
                className="h-12 mx-auto"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <CheckCircle2 className="h-16 w-16 text-white flex-shrink-0" />
              <div className="flex-1">
                <DialogTitle className="text-2xl text-white mb-2">
                  Thank You {userName}!
                </DialogTitle>
                <DialogDescription className="text-base text-white/90">
                  for registering for <strong>{event?.title}</strong>
                </DialogDescription>
              </div>
            </div>
            
            <p className="text-center text-sm pt-4 text-white/90">
              📧 Check your email for confirmation and your QR code
            </p>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {qrCodeUrl && event && (
              <div id="event-card-download" className="bg-white border-2 border-[#1D50C9] rounded-lg p-5">
                <div className="flex items-center gap-6">
                  {/* Left: Event Details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1D50C9] text-lg mb-3">Event Details</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700">
                        <span className="text-[#1D50C9]">📅</span> <strong>Date:</strong><br />
                        <span className="ml-5">{new Date(event.eventDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="text-orange-500">🕐</span> <strong>Time:</strong><br />
                        <span className="ml-5">10:00 AM to 5:00 PM</span>
                      </p>
                      {event.venue && (
                        <p className="text-sm text-gray-700">
                          <span className="text-[#1D50C9]">📍</span> <strong>Venue:</strong><br />
                          <span className="ml-5">{event.venue}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Right: QR Code (Smaller) */}
                  <div className="text-center">
                    <div className="bg-white p-2 inline-block rounded-lg border border-[#1D50C9]">
                      <img src={qrCodeUrl} alt="Event QR Code" className="w-32 h-32" />
                    </div>
                    <p className="text-xs text-[#1D50C9] font-semibold mt-2">YOUR QR CODE</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <Button
              onClick={async () => {
                if (event && qrCodeUrl) {
                  try {
                    // Create canvas manually with better control
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;

                    // Set canvas dimensions (2x for high resolution) - smaller width with space for logo
                    const scale = 2;
                    canvas.width = 600 * scale;
                    canvas.height = 340 * scale;

                    // Fill white background
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    // Draw blue border
                    ctx.strokeStyle = '#1D50C9';
                    ctx.lineWidth = 4 * scale;
                    ctx.strokeRect(10 * scale, 10 * scale, (600 - 20) * scale, (340 - 20) * scale);

                    // Draw rounded rectangle for content
                    const drawRoundRect = (x: number, y: number, width: number, height: number, radius: number) => {
                      ctx.beginPath();
                      ctx.moveTo(x + radius, y);
                      ctx.lineTo(x + width - radius, y);
                      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                      ctx.lineTo(x + width, y + height - radius);
                      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                      ctx.lineTo(x + radius, y + height);
                      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                      ctx.lineTo(x, y + radius);
                      ctx.quadraticCurveTo(x, y, x + radius, y);
                      ctx.closePath();
                    };

                    // Load and draw logo first
                    const logoImage = new Image();
                    
                    await new Promise<void>((resolve) => {
                      logoImage.onload = () => {
                        try {
                          // Draw logo centered at top
                          const logoWidth = 200 * scale;
                          const logoHeight = 55 * scale;
                          const logoX = (canvas.width - logoWidth) / 2;
                          ctx.drawImage(logoImage, logoX, 30 * scale, logoWidth, logoHeight);
                          console.log('Logo loaded successfully');
                          resolve();
                        } catch (err) {
                          console.error('Error drawing logo:', err);
                          resolve(); // Continue anyway
                        }
                      };
                      logoImage.onerror = (e) => {
                        console.error('Logo loading failed, continuing without logo:', e);
                        resolve(); // Continue anyway without logo
                      };
                      // Use the local logo file
                      logoImage.src = dunyaLogo;
                    });

                    // Event Name Heading - centered below logo on single line
                    ctx.font = `bold ${15 * scale}px system-ui`;
                    ctx.fillStyle = '#1D50C9';
                    ctx.textAlign = 'center';
                    
                    // Draw title on single line, centered
                    const titleY = 120 * scale;
                    ctx.fillText(event.title, canvas.width / 2, titleY);
                    
                    // Draw underline for title
                    const titleWidth = ctx.measureText(event.title).width;
                    ctx.strokeStyle = '#1D50C9';
                    ctx.lineWidth = 2 * scale;
                    ctx.beginPath();
                    ctx.moveTo((canvas.width - titleWidth) / 2, titleY + 5 * scale);
                    ctx.lineTo((canvas.width + titleWidth) / 2, titleY + 5 * scale);
                    ctx.stroke();

                    // Event Details subtitle
                    ctx.font = `bold ${14 * scale}px system-ui`;
                    ctx.fillStyle = '#1D50C9';
                    ctx.textAlign = 'left';
                    ctx.fillText('Event Details', 40 * scale, 155 * scale);

                    // Date (inline)
                    const dateStr = new Date(event.eventDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    });
                    ctx.font = `${13 * scale}px system-ui`;
                    ctx.fillStyle = '#1D50C9';
                    ctx.fillText('📅', 40 * scale, 190 * scale);
                    ctx.fillStyle = '#374151';
                    ctx.font = `bold ${13 * scale}px system-ui`;
                    ctx.fillText('Date:', 65 * scale, 190 * scale);
                    ctx.font = `${13 * scale}px system-ui`;
                    ctx.fillText(dateStr, 110 * scale, 190 * scale);

                    // Time (inline)
                    ctx.fillStyle = '#f97316';
                    ctx.fillText('🕐', 40 * scale, 225 * scale);
                    ctx.fillStyle = '#374151';
                    ctx.font = `bold ${13 * scale}px system-ui`;
                    ctx.fillText('Time:', 65 * scale, 225 * scale);
                    ctx.font = `${13 * scale}px system-ui`;
                    ctx.fillText('10:00 AM to 5:00 PM', 110 * scale, 225 * scale);

                    // Venue (inline)
                    if (event.venue) {
                      ctx.fillStyle = '#1D50C9';
                      ctx.fillText('📍', 40 * scale, 260 * scale);
                      ctx.fillStyle = '#374151';
                      ctx.font = `bold ${13 * scale}px system-ui`;
                      ctx.fillText('Venue:', 65 * scale, 260 * scale);
                      ctx.font = `${13 * scale}px system-ui`;
                      ctx.fillText(event.venue, 120 * scale, 260 * scale);
                    }

                    // Load and draw QR code
                    const qrImage = new Image();
                    qrImage.crossOrigin = 'anonymous'; // Enable CORS
                    
                    await new Promise<void>((resolve, reject) => {
                      qrImage.onload = () => {
                        try {
                          // Draw QR border
                          ctx.strokeStyle = '#1D50C9';
                          ctx.lineWidth = 2 * scale;
                          drawRoundRect(410 * scale, 110 * scale, 150 * scale, 150 * scale, 8 * scale);
                          ctx.stroke();

                          // Draw QR code
                          ctx.drawImage(qrImage, 420 * scale, 120 * scale, 130 * scale, 130 * scale);

                          // Draw "YOUR QR CODE" text
                          ctx.font = `bold ${11 * scale}px system-ui`;
                          ctx.fillStyle = '#1D50C9';
                          ctx.textAlign = 'center';
                          ctx.fillText('YOUR QR CODE', 485 * scale, 280 * scale);
                          
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
