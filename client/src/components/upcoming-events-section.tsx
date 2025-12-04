import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SmartImage from "@/components/ui/smart-image";
import type { Event } from "@shared/schema";

// Unified image src normalization function (same as blog)
const normalizeImageSrc = (image: string) => {
  if (!image || image.trim() === '') {
    return '/attached_assets/blog-fallback-image_1763626649553.jpg';
  }
  const trimmed = image.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  if (trimmed.startsWith('/api/uploads/') || trimmed.startsWith('api/uploads/')) {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  if (trimmed.startsWith('/attached_assets/') || trimmed.startsWith('attached_assets/')) {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  if (trimmed.startsWith('/objects/') || trimmed.startsWith('objects/')) {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  if (trimmed.startsWith('/uploads/') || trimmed.startsWith('uploads/')) {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  return `/api/uploads/${trimmed}`;
};

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeRemaining(eventDate: Date): TimeRemaining {
  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownTimer({ eventDate }: { eventDate: Date }) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(eventDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="flex gap-2 sm:gap-3 justify-center lg:justify-end">
      {[
        { label: "Days", value: timeRemaining.days },
        { label: "Hours", value: timeRemaining.hours },
        { label: "Minutes", value: timeRemaining.minutes },
        { label: "Seconds", value: timeRemaining.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center relative z-20">
          <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 min-w-[45px] sm:min-w-[55px] text-center">
            <div className="text-lg sm:text-xl font-bold !text-white group-hover:!text-white">{item.value.toString().padStart(2, "0")}</div>
          </div>
          <div className="text-xs text-gray-600 mt-1 group-hover:text-gray-600">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function UpcomingEventsSection() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  // Filter upcoming events (not trashed and in the future)
  const upcomingEvents = events?.filter((event) => {
    const eventDate = new Date(event.eventDate);
    const now = new Date();
    return !event.trashedAt && eventDate > now && event.isActive;
  }).sort((a, b) => {
    return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
  }) || [];

  if (isLoading) {
    return (
      <section className="py-11 lg:py-19 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-white/20 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-white/20 rounded w-2/3 mx-auto mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-white/20 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <section className="py-11 lg:py-19 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Upcoming Events
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto text-base md:text-lg px-4">
            Join our upcoming events and webinars to explore study abroad options, scholarships, and visa guidance. Reserve your seat today!
          </p>
        </motion.div>

        {/* Full-Width Landscape Events */}
        <div className="space-y-4 md:space-y-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={`${event.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/events/${event.slug}`}>
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 relative bg-white" data-testid={`event-landscape-${event.id}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer pointer-events-none"></div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6">
                    {/* Left: Image */}
                    <div className="relative w-full md:w-48 h-40 md:h-32 flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
                      <SmartImage
                        src={normalizeImageSrc(event.image)}
                        alt={event.title}
                        width={192}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#2563eb' }} data-testid="text-event-title">
                          {event.title}
                        </h3>
                        <Badge className="bg-blue-600 text-white shadow-md text-xs sm:text-sm mb-2 md:mb-3 w-fit">
                          {event.eventType}
                        </Badge>
                        
                        <div className="space-y-1 md:space-y-2">
                          <div className="flex items-center text-gray-600 text-sm md:text-base">
                            <Calendar className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                            <span data-testid="text-event-date" className="break-words">
                              {new Date(event.eventDate).toLocaleDateString('en-US', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          {event.venue && (
                            <div className="flex items-center text-gray-600 text-sm md:text-base">
                              <MapPin className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                              <span data-testid="text-event-venue" className="break-words line-clamp-1">{event.venue}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right: Countdown above Button */}
                    <div className="flex flex-col items-center gap-4 flex-shrink-0">
                      <div className="hidden lg:block">
                        <CountdownTimer eventDate={new Date(event.eventDate)} />
                      </div>
                      <Button 
                        className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 whitespace-nowrap"
                        data-testid="button-see-details"
                      >
                        See Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Events Button */}
        {upcomingEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 lg:mt-12"
          >
            <Link href="/events">
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-white text-blue-700 hover:bg-gray-50 px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group" 
                data-testid="button-view-all-events"
              >
                <span className="relative z-10">View All Events</span>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-100 to-transparent opacity-0 group-hover:opacity-60 group-hover:animate-diagonal-shimmer -translate-x-full -translate-y-full"></div>
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
