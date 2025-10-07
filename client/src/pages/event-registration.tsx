import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, Calendar, MapPin, GraduationCap } from "lucide-react";
import type { Event } from "@shared/schema";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(2, "City is required"),
  education: z.string().min(1, "Please select your education level"),
  destinations: z.array(z.string()).min(1, "Please select at least one study destination"),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const educationLevels = [
  "High School",
  "Undergraduate",
  "Graduate",
  "Postgraduate",
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
  "Other"
];

export default function EventRegistration() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [eventSlug, setEventSlug] = useState<string>("");

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
      phone: "",
      city: "",
      education: "",
      destinations: [],
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: RegistrationForm) => {
      if (!event) throw new Error("Event not found");
      
      return apiRequest(`/api/events/${event.id}/register`, "POST", {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        education: data.education,
        destination: data.destinations.join(", "),
      });
    },
    onSuccess: (data) => {
      toast({
        title: "Registration Successful! 🎉",
        description: "Check your email for confirmation and QR code.",
      });
      
      setTimeout(() => {
        setLocation(`/events/${eventSlug}`);
      }, 2000);
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-[#1D50C9]" />
              Event Registration
            </CardTitle>
            <CardDescription>
              Fill out the form below to register for this event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          data-testid="input-fullname"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your@email.com" 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+92 300 1234567" 
                            {...field} 
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* City */}
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your city" 
                          {...field} 
                          data-testid="input-city"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Education Level */}
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education Level *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-education">
                            <SelectValue placeholder="Select your education level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {educationLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Study Destinations - Multiple Select */}
                <FormField
                  control={form.control}
                  name="destinations"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel>Study Destinations (Select all that apply) *</FormLabel>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {studyDestinations.map((destination) => (
                          <FormField
                            key={destination}
                            control={form.control}
                            name="destinations"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={destination}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(destination)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, destination])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== destination
                                              )
                                            );
                                      }}
                                      data-testid={`checkbox-${destination.toLowerCase()}`}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {destination}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={registerMutation.isPending}
                  className="w-full bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a] text-white py-6 text-lg"
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
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            By registering, you'll receive a confirmation email with your QR code for event check-in.
          </p>
        </div>
      </div>
    </div>
  );
}
