import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Event } from "@shared/schema";

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
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-2 sm:p-3 min-w-[45px] sm:min-w-[55px] text-center">
            <div className="text-lg sm:text-xl font-bold">{item.value.toString().padStart(2, "0")}</div>
          </div>
          <div className="text-xs text-gray-600 mt-1">{item.label}</div>
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

  const featuredEvent = upcomingEvents[0];
  const sideEvents = upcomingEvents.slice(1, 6);

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-white/20 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-white/20 rounded w-2/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96 bg-white/20 rounded-lg"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-24 bg-white/20 rounded-lg"></div>
                ))}
              </div>
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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:items-stretch">
          {/* Featured Event - Left Column */}
          {featuredEvent && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Link href={`/events/${featuredEvent.slug}`}>
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 relative bg-white flex flex-col" data-testid={`event-featured-${featuredEvent.id}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shimmer pointer-events-none"></div>
                  <div className="relative overflow-hidden aspect-[1.68/1]">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white shadow-md text-xs sm:text-sm">
                        {featuredEvent.eventType}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-6 mb-4">
                      {/* Left side: Title, Date, Venue */}
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#2563eb' }} data-testid="text-event-title">
                          {featuredEvent.title}
                        </h3>
                        
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center text-gray-600 text-sm sm:text-base">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 flex-shrink-0" />
                            <span data-testid="text-event-date" className="break-words">
                              {new Date(featuredEvent.eventDate).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          {featuredEvent.venue && (
                            <div className="flex items-center text-gray-600 text-sm sm:text-base">
                              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 flex-shrink-0" />
                              <span data-testid="text-event-venue" className="break-words">{featuredEvent.venue}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right side: Countdown */}
                      <div className="lg:flex-shrink-0">
                        <CountdownTimer eventDate={new Date(featuredEvent.eventDate)} />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                        data-testid="button-see-details"
                      >
                        See Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          )}

          {/* Side Events - Right Column with Auto-Scroll */}
          <div className="relative overflow-hidden h-full">
            <motion.div
              className="space-y-4"
              animate={sideEvents.length > 3 ? {
                y: [0, -(sideEvents.length * 136)],
              } : {}}
              transition={sideEvents.length > 3 ? {
                y: {
                  duration: sideEvents.length * 4,
                  repeat: Infinity,
                  ease: "linear",
                },
              } : {}}
            >
              {(sideEvents.length > 3 ? sideEvents.concat(sideEvents) : sideEvents).map((event, index) => (
                <motion.div
                  key={`${event.id}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link href={`/events/${event.slug}`}>
                    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 relative bg-white" data-testid={`event-card-${event.id}`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer pointer-events-none"></div>
                      <div className="flex gap-4 p-4">
                        <div className="relative w-24 sm:w-28 h-20 sm:h-24 flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <h4 className="font-bold text-base sm:text-lg line-clamp-1" style={{ color: '#2563eb' }} data-testid="text-event-title">
                              {event.title}
                            </h4>
                            <Badge className="bg-blue-100 text-blue-700 text-xs flex-shrink-0 shadow-sm">
                              {event.eventType}
                            </Badge>
                          </div>
                          <div className="flex items-end justify-between gap-4">
                            {/* Left side: Date and Venue */}
                            <div className="space-y-1 flex-1">
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                                <span className="truncate" data-testid="text-event-date">
                                  {new Date(event.eventDate).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                  })}
                                </span>
                              </div>
                              {event.venue && (
                                <div className="flex items-center text-sm text-gray-600">
                                  <MapPin className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                                  <span className="truncate" data-testid="text-event-venue">{event.venue}</span>
                                </div>
                              )}
                            </div>
                            {/* Right side: Button */}
                            <div className="flex-shrink-0">
                              <Button 
                                size="sm"
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                                data-testid="button-see-more"
                              >
                                See More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View All Events Button */}
        {upcomingEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
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
