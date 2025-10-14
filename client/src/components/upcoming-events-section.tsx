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
    <div className="flex gap-3 sm:gap-4 justify-center md:justify-start mt-4">
      {[
        { label: "Days", value: timeRemaining.days },
        { label: "Hours", value: timeRemaining.hours },
        { label: "Minutes", value: timeRemaining.minutes },
        { label: "Seconds", value: timeRemaining.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-white group-hover:bg-blue-700 group-hover:border-2 group-hover:border-blue-700 rounded-lg p-3 sm:p-4 min-w-[55px] sm:min-w-[65px] text-center shadow-md transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-blue-700 group-hover:!text-white transition-colors">{item.value.toString().padStart(2, "0")}</div>
          </div>
          <div className="text-xs sm:text-sm text-white font-medium mt-2">{item.label}</div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Featured Event - Left Column */}
          {featuredEvent && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/events/${featuredEvent.slug}`}>
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full border-0 relative bg-white" data-testid={`event-featured-${featuredEvent.id}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer pointer-events-none"></div>
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-700 shadow-lg text-xs sm:text-sm font-bold" style={{ color: 'white' }}>
                        {featuredEvent.eventType}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5 sm:p-7">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      {/* First Column - Event Details */}
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold transition-colors leading-tight" style={{ color: '#1d4ed8' }} data-testid="text-event-title">
                          {featuredEvent.title}
                        </h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-blue-700 text-sm sm:text-base font-medium">
                            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-700 flex-shrink-0" />
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
                            <div className="flex items-center text-blue-700 text-sm sm:text-base font-medium">
                              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-700 flex-shrink-0" />
                              <span data-testid="text-event-venue" className="break-words">{featuredEvent.venue}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Second Column - Countdown Timer */}
                      <div className="flex items-center justify-center lg:justify-end">
                        <CountdownTimer eventDate={new Date(featuredEvent.eventDate)} />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button 
                        className="w-full relative overflow-hidden bg-blue-700 text-white hover:!text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-base py-6 group/btn"
                        data-testid="button-see-details"
                      >
                        <span className="relative z-10 text-white group-hover/btn:!text-white">View Details</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover/btn:opacity-30 -translate-x-full group-hover/btn:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none"></div>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          )}

          {/* Side Events - Right Column */}
          <div className="space-y-4">
            {sideEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/events/${event.slug}`}>
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 relative bg-white" data-testid={`event-card-${event.id}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer pointer-events-none"></div>
                    <div className="flex flex-col sm:flex-row gap-4 p-5">
                      <div className="relative w-full sm:w-36 h-44 sm:h-28 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex gap-4">
                        {/* Left Column - Title, Date, Venue */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-lg sm:text-xl text-blue-700 group-hover:!text-blue-700 transition-colors line-clamp-2 leading-tight mb-3" data-testid="text-event-title">
                            {event.title}
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-blue-700 font-medium">
                              <Calendar className="w-5 h-5 mr-2 text-blue-700" />
                              <span className="truncate" data-testid="text-event-date">
                                {new Date(event.eventDate).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                })}
                              </span>
                            </div>
                            {event.venue && (
                              <div className="flex items-center text-sm text-blue-700 font-medium">
                                <MapPin className="w-5 h-5 mr-2 text-blue-700" />
                                <span className="truncate" data-testid="text-event-venue">{event.venue}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Right Column - Badge and Button */}
                        <div className="flex flex-col items-end justify-between gap-3">
                          <Badge className="bg-blue-700 text-xs font-bold shadow-md" style={{ color: 'white' }}>
                            {event.eventType}
                          </Badge>
                          <Button 
                            size="sm"
                            className="relative overflow-hidden bg-blue-700 text-white hover:!text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold group/sidebtn whitespace-nowrap"
                            data-testid="button-see-more"
                          >
                            <span className="relative z-10 text-white group-hover/sidebtn:!text-white">See More</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover/sidebtn:opacity-30 -translate-x-full group-hover/sidebtn:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none"></div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
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
                className="relative overflow-hidden bg-white hover:bg-white px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group" 
                data-testid="button-view-all-events"
              >
                <span className="relative z-10 text-blue-700 group-hover:!text-transparent transition-colors duration-300">View All Events</span>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-100 to-transparent opacity-0 group-hover:opacity-60 group-hover:animate-diagonal-shimmer -translate-x-full -translate-y-full"></div>
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
