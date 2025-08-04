import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  Mic,
  BookOpen,
  Award,
  Filter,
  Search,
  ChevronRight,
  Globe,
  Laptop,
  Building
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "webinar" | "seminar" | "workshop" | "consultation" | "fair";
  mode: "online" | "offline" | "hybrid";
  capacity: number;
  registered: number;
  image: string;
  featured: boolean;
  price: string;
  speaker: {
    name: string;
    title: string;
    company: string;
    image: string;
  };
  agenda: string[];
  benefits: string[];
  targetAudience: string[];
  registrationLink: string;
  tags: string[];
  country?: string;
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Study in UK: Complete Guide to Applications & Scholarships",
    description: "Comprehensive session covering UK university applications, scholarship opportunities, and visa requirements for 2024 intake.",
    date: "2024-07-15",
    time: "3:00 PM - 5:00 PM PST",
    location: "Online Webinar",
    type: "webinar",
    mode: "online",
    capacity: 500,
    registered: 342,
    image: "/api/placeholder/400/250",
    featured: true,
    price: "Free",
    speaker: {
      name: "Dr. Sarah Mitchell",
      title: "Senior Education Consultant",
      company: "Path Consultants",
      image: "/api/placeholder/100/100"
    },
    agenda: [
      "UK Education System Overview",
      "Top Universities & Programs",
      "Application Process & Requirements",
      "Scholarship Opportunities",
      "Student Visa Guidelines",
      "Q&A Session"
    ],
    benefits: [
      "University selection guidance",
      "Application tips from experts",
      "Scholarship database access",
      "Free consultation voucher"
    ],
    targetAudience: ["Undergraduate Students", "Postgraduate Students", "Parents"],
    registrationLink: "https://zoom.us/webinar/register",
    tags: ["UK", "Scholarships", "Applications", "Visa"],
    country: "United Kingdom"
  },
  {
    id: "2",
    title: "Canada Immigration & Study Pathways",
    description: "Explore study opportunities in Canada and pathways to permanent residency through Provincial Nominee Programs.",
    date: "2024-07-18",
    time: "7:00 PM - 9:00 PM PST",
    location: "Path Consultants Lahore Office",
    type: "seminar",
    mode: "offline",
    capacity: 100,
    registered: 78,
    image: "/api/placeholder/400/250",
    featured: true,
    price: "Free",
    speaker: {
      name: "Michael Thompson",
      title: "Immigration Specialist",
      company: "Path Consultants",
      image: "/api/placeholder/100/100"
    },
    agenda: [
      "Canadian Education System",
      "Study Permit Process",
      "Work Opportunities",
      "Permanent Residency Pathways",
      "Cost of Living & Budgeting",
      "Networking Session"
    ],
    benefits: [
      "Immigration assessment",
      "University partnerships access",
      "Job market insights",
      "PR pathway consultation"
    ],
    targetAudience: ["Working Professionals", "Graduate Students", "Immigrants"],
    registrationLink: "https://eventbrite.com/register",
    tags: ["Canada", "Immigration", "PR", "Work Permit"],
    country: "Canada"
  },
  {
    id: "3",
    title: "Australian Universities Fair 2024",
    description: "Meet representatives from 25+ Australian universities and explore diverse study options across different states.",
    date: "2024-07-22",
    time: "10:00 AM - 6:00 PM PST",
    location: "Pearl Continental Hotel, Karachi",
    type: "fair",
    mode: "offline",
    capacity: 1000,
    registered: 567,
    image: "/api/placeholder/400/250",
    featured: true,
    price: "Free",
    speaker: {
      name: "Multiple Representatives",
      title: "University Delegates",
      company: "Australian Universities",
      image: "/api/placeholder/100/100"
    },
    agenda: [
      "University Exhibitions",
      "One-on-One Counseling",
      "Scholarship Information",
      "Student Life Presentations",
      "Visa Process Workshop",
      "Alumni Meet & Greet"
    ],
    benefits: [
      "Direct university interaction",
      "On-spot admission offers",
      "Scholarship applications",
      "Visa guidance"
    ],
    targetAudience: ["High School Students", "Undergraduate Students", "Parents"],
    registrationLink: "https://eventbrite.com/australia-fair",
    tags: ["Australia", "University Fair", "Admissions", "Scholarships"],
    country: "Australia"
  },
  {
    id: "4",
    title: "IELTS Preparation Masterclass",
    description: "Intensive workshop covering all four modules of IELTS with expert tips and practice sessions.",
    date: "2024-07-25",
    time: "2:00 PM - 6:00 PM PST",
    location: "Online + Path Consultants Centers",
    type: "workshop",
    mode: "hybrid",
    capacity: 200,
    registered: 156,
    image: "/api/placeholder/400/250",
    featured: false,
    price: "PKR 2,500",
    speaker: {
      name: "Emma Collins",
      title: "IELTS Expert Trainer",
      company: "British Council Certified",
      image: "/api/placeholder/100/100"
    },
    agenda: [
      "Listening Module Strategies",
      "Reading Comprehension Tips",
      "Writing Task 1 & 2 Techniques",
      "Speaking Module Practice",
      "Mock Test Session",
      "Score Improvement Plan"
    ],
    benefits: [
      "Practice materials",
      "Mock test access",
      "Score prediction",
      "Improvement strategies"
    ],
    targetAudience: ["IELTS Candidates", "Test Takers", "English Learners"],
    registrationLink: "https://ielts-masterclass.com/register",
    tags: ["IELTS", "Test Prep", "English", "Workshop"],
  },
  {
    id: "5",
    title: "USA F1 Visa Interview Preparation",
    description: "Comprehensive session on F1 visa interview process, common questions, and success strategies.",
    date: "2024-07-28",
    time: "4:00 PM - 6:00 PM PST",
    location: "Online Webinar",
    type: "webinar",
    mode: "online",
    capacity: 300,
    registered: 234,
    image: "/api/placeholder/400/250",
    featured: false,
    price: "Free",
    speaker: {
      name: "Robert Davis",
      title: "Visa Consultant",
      company: "Path Consultants",
      image: "/api/placeholder/100/100"
    },
    agenda: [
      "F1 Visa Requirements",
      "Document Preparation",
      "Interview Questions & Answers",
      "Common Rejection Reasons",
      "Success Tips & Strategies",
      "Mock Interview Session"
    ],
    benefits: [
      "Interview preparation guide",
      "Document checklist",
      "Mock interview access",
      "Success strategies"
    ],
    targetAudience: ["US-bound Students", "Visa Applicants"],
    registrationLink: "https://f1visa-prep.com/register",
    tags: ["USA", "F1 Visa", "Interview", "Documentation"],
    country: "United States"
  },
  {
    id: "6",
    title: "European Study Options: Germany, Netherlands & Sweden",
    description: "Explore affordable study opportunities in Europe with focus on public universities and scholarship programs.",
    date: "2024-08-02",
    time: "6:00 PM - 8:00 PM PST",
    location: "Online Webinar",
    type: "webinar",
    mode: "online",
    capacity: 400,
    registered: 198,
    image: "/api/placeholder/400/250",
    featured: false,
    price: "Free",
    speaker: {
      name: "Dr. Klaus Weber",
      title: "European Education Specialist",
      company: "Path Consultants",
      image: "/api/placeholder/100/100"
    },
    agenda: [
      "European Education Systems",
      "Public vs Private Universities",
      "Scholarship Opportunities",
      "Language Requirements",
      "Living Costs Comparison",
      "Work Opportunities"
    ],
    benefits: [
      "Country comparison guide",
      "Scholarship database",
      "University contacts",
      "Application assistance"
    ],
    targetAudience: ["Graduate Students", "Budget-conscious Students"],
    registrationLink: "https://europe-study.com/register",
    tags: ["Europe", "Germany", "Netherlands", "Sweden", "Scholarships"]
  }
];

const eventTypes = [
  { value: "all", label: "All Events", icon: Calendar },
  { value: "webinar", label: "Webinars", icon: Video },
  { value: "seminar", label: "Seminars", icon: Mic },
  { value: "workshop", label: "Workshops", icon: BookOpen },
  { value: "consultation", label: "Consultations", icon: Users },
  { value: "fair", label: "University Fairs", icon: Building }
];

const eventModes = [
  { value: "all", label: "All Modes", icon: Globe },
  { value: "online", label: "Online", icon: Laptop },
  { value: "offline", label: "Offline", icon: MapPin },
  { value: "hybrid", label: "Hybrid", icon: Globe }
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [activeTab, setActiveTab] = useState("upcoming");

  const countries = ["all", "United States", "United Kingdom", "Canada", "Australia", "Germany", "Netherlands", "Sweden"];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = selectedType === "all" || event.type === selectedType;
    const matchesMode = selectedMode === "all" || event.mode === selectedMode;
    const matchesCountry = selectedCountry === "all" || event.country === selectedCountry;

    return matchesSearch && matchesType && matchesMode && matchesCountry;
  });

  const getEventTypeIcon = (type: string) => {
    const eventType = eventTypes.find(t => t.value === type);
    return eventType ? eventType.icon : Calendar;
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case "online": return Laptop;
      case "offline": return MapPin;
      case "hybrid": return Globe;
      default: return Globe;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-blue-600/30 to-blue-800/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Study Abroad Events</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Upcoming<br />
              <span className="text-blue-300">Events & Seminars</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join our expert-led sessions, university fairs, and workshops to accelerate your study abroad journey. 
              Connect with education specialists and fellow students.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">50+</div>
                <div className="text-sm text-blue-100">Events This Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">5000+</div>
                <div className="text-sm text-blue-100">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">25+</div>
                <div className="text-sm text-blue-100">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">100%</div>
                <div className="text-sm text-blue-100">Free Events</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="p-6 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                    <Input
                      placeholder="Search events, topics, or speakers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Event Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center space-x-2">
                            <type.icon className="w-4 h-4" />
                            <span>{type.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedMode} onValueChange={setSelectedMode}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Mode" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventModes.map((mode) => (
                        <SelectItem key={mode.value} value={mode.value}>
                          <div className="flex items-center space-x-2">
                            <mode.icon className="w-4 h-4" />
                            <span>{mode.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country === "all" ? "All Countries" : country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Events Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="featured">Featured Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              {/* Featured Events */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => {
                  const TypeIcon = getEventTypeIcon(event.type);
                  const ModeIcon = getModeIcon(event.mode);
                  
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${event.featured ? 'ring-2 ring-primary' : ''}`}>
                        {event.featured && (
                          <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-1 text-sm font-medium">
                            Featured Event
                          </div>
                        )}
                        
                        <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute top-4 right-4">
                            <Badge variant={event.price === "Free" ? "secondary" : "default"} className="bg-white/90 text-neutral-800">
                              {event.price}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="flex items-center space-x-2 mb-2">
                              <TypeIcon className="w-4 h-4" />
                              <span className="text-sm capitalize">{event.type}</span>
                              <ModeIcon className="w-4 h-4 ml-2" />
                              <span className="text-sm capitalize">{event.mode}</span>
                            </div>
                            <div className="text-2xl font-bold">{formatDate(event.date).split(',')[1]}</div>
                            <div className="text-sm opacity-90">{formatDate(event.date).split(',')[0]}</div>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-neutral-800 mb-3 line-clamp-2">
                            {event.title}
                          </h3>
                          
                          <p className="text-neutral-600 mb-4 line-clamp-3">
                            {event.description}
                          </p>

                          <div className="space-y-3 mb-4">
                            <div className="flex items-center text-sm text-neutral-600">
                              <Clock className="w-4 h-4 mr-2" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm text-neutral-600">
                              <MapPin className="w-4 h-4 mr-2" />
                              {event.location}
                            </div>
                            <div className="flex items-center text-sm text-neutral-600">
                              <Users className="w-4 h-4 mr-2" />
                              {event.registered} / {event.capacity} registered
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {event.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {event.speaker.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-neutral-800">{event.speaker.name}</div>
                                <div className="text-neutral-500">{event.speaker.title}</div>
                              </div>
                            </div>
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              Register
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-600 mb-2">No events found</h3>
                  <p className="text-neutral-500">Try adjusting your filters or search query</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="featured">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.filter(event => event.featured).map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-primary">
                      <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-medium">
                        ⭐ Featured Event
                      </div>
                      {/* Same card content structure as above */}
                      <div className="relative h-48 bg-gradient-to-br from-primary to-secondary">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl font-bold">{formatDate(event.date).split(',')[1]}</div>
                          <div className="text-sm opacity-90">{formatDate(event.date).split(',')[0]}</div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-neutral-800 mb-3">{event.title}</h3>
                        <p className="text-neutral-600 mb-4">{event.description}</p>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Register Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
                <h3 className="text-xl font-semibold text-neutral-600 mb-2">Past Events</h3>
                <p className="text-neutral-500">Check back later for recordings and highlights from our past events</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Don't Miss Out on Future Events
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter and be the first to know about upcoming events, workshops, and exclusive opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-blue-50 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}