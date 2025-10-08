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

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().min(10, "WhatsApp number must be at least 10 digits"),
  city: z.string().min(2, "City is required"),
  education: z.string().min(1, "Please select your education level"),
  destinations: z.array(z.string()).min(1, "Please select at least one study destination").max(3, "You can select up to 3 destinations only"),
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
    if (!slug) {
      setLocation("/events");
      return;
    }
    setEventSlug(slug);
  }, [setLocation]);

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

  if (eventLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#1D50C9]" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Event Not Found</h2>
          <Button 
            onClick={() => setLocation("/events")} 
            className="mt-4 bg-[#1D50C9]"
          >
            View All Events
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
          {event.image && (
            <div className="rounded-lg overflow-hidden mb-6 shadow-lg">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-64 object-cover"
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
                Study Destinations (Select up to 3) *
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border border-[#dadada] rounded-lg bg-white">
                {studyDestinations.map((destination) => {
                  const isChecked = watchedValues.destinations?.includes(destination);
                  const isMaxReached = (watchedValues.destinations?.length || 0) >= 3;
                  const isDisabled = !isChecked && isMaxReached;
                  
                  return (
                    <div key={destination} className="flex items-center space-x-2">
                      <Checkbox
                        id={destination}
                        checked={isChecked}
                        disabled={isDisabled}
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
                        className={`text-sm font-medium leading-none cursor-pointer ${
                          isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
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
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={registerMutation.isPending}
                className="flex-1 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white py-6 text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
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
                className="flex-1 py-6 text-lg border-[#dadada] hover:bg-[#1D50C9] hover:text-white hover:border-[#1D50C9] transition-all duration-300 hover:scale-105"
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
          <DialogHeader className="bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] -mx-6 -mt-6 px-6 py-6 rounded-t-lg">
            <div className="mx-auto mb-4">
              <CheckCircle2 className="h-16 w-16 text-white" />
            </div>
            <DialogTitle className="text-center text-2xl text-white">
              Thank You {userName}!
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-2 text-white/90">
              for registering for <strong>{event?.title}</strong>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {qrCodeUrl && (
              <div className="bg-white border-2 border-[#1D50C9] rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-[#1D50C9] mb-3">Your Event QR Code</p>
                <div className="bg-white p-3 inline-block rounded-lg">
                  <img src={qrCodeUrl} alt="Event QR Code" className="w-48 h-48 mx-auto" />
                </div>
                <p className="text-xs text-gray-600 mt-3">Show this QR code at the event entrance</p>
              </div>
            )}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 text-center">
                📧 Check your email for confirmation and your QR code
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 text-center">
                🎁 Selected users will be eligible for prize distribution
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => {
                if (qrCodeUrl) {
                  const link = document.createElement('a');
                  link.href = qrCodeUrl;
                  link.download = `qr-code-${event?.title}.png`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }
              }}
              className="flex-1 bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white hover:shadow-lg transition-all"
            >
              Download QR
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
