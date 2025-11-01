import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Plus, Edit2, Trash2, MapPin, Eye, EyeOff } from "lucide-react";
import type { AdminUser, Event } from "@shared/schema";
import AdminSidebar from "@/components/admin/sidebar";
import MobileNav from "@/components/admin/mobile-nav";
import MediaSelectionModal from "@/components/admin/media-selection-modal";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EventFormData {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  detailImage: string;
  eventDate: string;
  eventType: "Open Day" | "Expo" | "IELTS Masterclass";
  location: string;
  country: string[];
  studyLevel: string[];
  venue: string;
  isActive: boolean;
  registrationEnabled: boolean;
}

const AVAILABLE_COUNTRIES = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Finland",
  "Belgium",
  "Turkey",
  "Cyprus",
  "Germany",
  "Ireland"
];

const STUDY_LEVELS = [
  "Intermediate",
  "Bachelors",
  "Masters",
  "PhD",
  "Diploma",
  "Foundation"
];

interface EventsTableProps {
  events: Event[];
  handleDelete: (id: number) => void;
  setLocation: (location: string) => void;
  toggleActiveMutation: any;
  toggleRegistrationMutation: any;
}

function EventsTable({ events, handleDelete, setLocation, toggleActiveMutation, toggleRegistrationMutation }: EventsTableProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="h-8 w-8 text-[#1D50C9]" />
        </div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">No events found</h3>
        <p className="text-gray-500 text-sm">No events match this filter</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
            <TableHead className="font-semibold text-gray-700">Name</TableHead>
            <TableHead className="font-semibold text-gray-700">Date</TableHead>
            <TableHead className="font-semibold text-gray-700">Location</TableHead>
            <TableHead className="font-semibold text-gray-700">Type</TableHead>
            <TableHead className="font-semibold text-gray-700">Status</TableHead>
            <TableHead className="font-semibold text-gray-700">Registration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow 
              key={event.id} 
              className="group border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-colors duration-200"
            >
              <TableCell className="font-medium text-gray-900">
                <div className="flex items-center justify-between">
                  <span>{event.title}</span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setLocation(`/admin/event-editor/${event.id}`)}
                      className="rounded-lg hover:bg-blue-50 hover:text-[#1D50C9] transition-colors duration-200 h-8 px-3"
                      data-testid={`button-edit-${event.id}`}
                    >
                      <Edit2 className="w-4 h-4 mr-1" />
                      <span className="text-xs">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(event.id)}
                      className="rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200 h-8 px-3"
                      data-testid={`button-delete-${event.id}`}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      <span className="text-xs">Trash</span>
                    </Button>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#1D50C9]" />
                  </div>
                  {format(new Date(event.eventDate), "MMM d, yyyy")}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#1D50C9]" />
                  </div>
                  {event.location || "N/A"}
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  className={
                    event.eventType === "Open Day" 
                      ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200" 
                      : event.eventType === "Expo"
                      ? "bg-gradient-to-r from-purple-50 to-violet-50 text-purple-700 border-purple-200"
                      : "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200"
                  }
                >
                  {event.eventType}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleActiveMutation.mutate({ id: event.id, isActive: !event.isActive })}
                  className={`rounded-lg transition-all duration-300 ${
                    event.isActive 
                      ? "bg-green-50 hover:bg-green-100 text-green-700" 
                      : "bg-gray-50 hover:bg-gray-100 text-gray-400"
                  }`}
                  data-testid={`button-toggle-status-${event.id}`}
                >
                  {event.isActive ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleRegistrationMutation.mutate({ id: event.id, registrationEnabled: !event.registrationEnabled })}
                  className={`rounded-lg transition-all duration-300 ${
                    event.registrationEnabled 
                      ? "bg-blue-50 hover:bg-blue-100 text-blue-700" 
                      : "bg-gray-50 hover:bg-gray-100 text-gray-400"
                  }`}
                  data-testid={`button-toggle-registration-${event.id}`}
                >
                  {event.registrationEnabled ? "Enabled" : "Disabled"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default function EventsManagement() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [mediaTargetField, setMediaTargetField] = useState<'image' | 'detailImage' | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    slug: "",
    shortDescription: "",
    fullDescription: "",
    image: "",
    detailImage: "",
    eventDate: "",
    eventType: "Open Day",
    location: "",
    country: [],
    studyLevel: [],
    venue: "",
    isActive: true,
  });

  // Get auth headers
  const getAuthHeaders = () => {
    const adminToken = localStorage.getItem("adminToken");
    const userToken = localStorage.getItem("userToken");
    const token = adminToken || userToken;
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  };

  // Check authentication
  useEffect(() => {
    const checkAuth = () => {
      const adminData = localStorage.getItem("adminUser");
      if (adminData) {
        try {
          const user = JSON.parse(adminData);
          setAdminUser(user);
        } catch (error) {
          console.error('Error parsing admin user data:', error);
        }
      }
      setAuthChecked(true);
    };
    checkAuth();
  }, []);

  // Fetch events
  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/admin/events"],
    queryFn: async () => {
      const response = await fetch("/api/admin/events", {
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to fetch events");
      return response.json();
    },
    enabled: authChecked,
  });

  // Create event mutation
  const createMutation = useMutation({
    mutationFn: async (data: EventFormData) => {
      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to create event");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/events"] });
      toast({
        title: "Success",
        description: "Event created successfully",
      });
      setIsCreateDialogOpen(false);
      resetForm();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create event",
        variant: "destructive",
      });
    },
  });

  // Update event mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<EventFormData> }) => {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to update event");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/events"] });
      toast({
        title: "Success",
        description: "Event updated successfully",
      });
      setIsEditDialogOpen(false);
      setEditingEvent(null);
      resetForm();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update event",
        variant: "destructive",
      });
    },
  });

  // Delete event mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to delete event");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/events"] });
      toast({
        title: "Success",
        description: "Event deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete event",
        variant: "destructive",
      });
    },
  });

  // Toggle active status
  const toggleActiveMutation = useMutation({
    mutationFn: async ({ id, isActive }: { id: number; isActive: boolean }) => {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ isActive }),
      });
      if (!response.ok) throw new Error("Failed to toggle event status");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/events"] });
      toast({
        title: "Success",
        description: "Event status updated",
      });
    },
  });

  // Toggle registration enabled
  const toggleRegistrationMutation = useMutation({
    mutationFn: async ({ id, registrationEnabled }: { id: number; registrationEnabled: boolean }) => {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ registrationEnabled }),
      });
      if (!response.ok) throw new Error("Failed to toggle registration");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/events"] });
      toast({
        title: "Success",
        description: "Registration setting updated",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      shortDescription: "",
      fullDescription: "",
      image: "",
      detailImage: "",
      eventDate: "",
      eventType: "Open Day",
      location: "",
      country: [],
      studyLevel: [],
      venue: "",
      isActive: true,
      registrationEnabled: true,
    });
  };

  const handleCreate = () => {
    if (!formData.title || !formData.eventDate) {
      toast({
        title: "Validation Error",
        description: "Title and event date are required",
        variant: "destructive",
      });
      return;
    }
    createMutation.mutate(formData);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      slug: event.slug,
      shortDescription: event.shortDescription,
      fullDescription: event.fullDescription,
      image: event.image,
      detailImage: event.detailImage || "",
      eventDate: format(new Date(event.eventDate), "yyyy-MM-dd"),
      eventType: event.eventType,
      location: event.location || "",
      country: event.country || [],
      studyLevel: event.studyLevel || [],
      venue: event.venue || "",
      isActive: event.isActive,
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdate = () => {
    if (!editingEvent) return;
    if (!formData.title || !formData.eventDate) {
      toast({
        title: "Validation Error",
        description: "Title and event date are required",
        variant: "destructive",
      });
      return;
    }
    updateMutation.mutate({ id: editingEvent.id, data: formData });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this event?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleMediaSelect = (media: { url: string }) => {
    if (mediaTargetField === 'image') {
      setFormData({ ...formData, image: media.url });
    } else if (mediaTargetField === 'detailImage') {
      setFormData({ ...formData, detailImage: media.url });
    }
    setShowMediaModal(false);
    setMediaTargetField(null);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (!adminUser) {
    setLocation("/admin/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <AdminSidebar currentUser={adminUser} />
      
      {/* Mobile Navigation */}
      <MobileNav currentUser={adminUser} />
      
      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-white">Events Management</h1>
                <p className="text-blue-100 mt-1">Create and manage events & expos</p>
              </div>
              <Button 
                onClick={() => setLocation("/admin/event-editor")} 
                className="bg-white text-[#1D50C9] hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="button-create-event"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {isLoading ? (
              <div className="text-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
                <p className="text-gray-600">Loading events...</p>
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-[#1D50C9]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No events yet</h3>
                <p className="text-gray-500 mb-6">Create your first event to get started</p>
                <Button 
                  onClick={() => setLocation("/admin/event-editor")} 
                  className="bg-[#1D50C9] hover:bg-[#1845B3]"
                  data-testid="button-create-first-event"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Event
                </Button>
              </div>
            ) : (
              <Tabs defaultValue="all" className="w-full">
                <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-6 py-4">
                  <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-100">
                    <TabsTrigger 
                      value="all" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white"
                      data-testid="tab-all-events"
                    >
                      All Events
                    </TabsTrigger>
                    <TabsTrigger 
                      value="past" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white"
                      data-testid="tab-past-events"
                    >
                      Past Events
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="p-6">
                  <EventsTable 
                    events={events.filter(event => new Date(event.eventDate) >= new Date(new Date().setHours(0, 0, 0, 0)))} 
                    handleDelete={handleDelete}
                    setLocation={setLocation}
                    toggleActiveMutation={toggleActiveMutation}
                    toggleRegistrationMutation={toggleRegistrationMutation}
                  />
                </TabsContent>

                <TabsContent value="past" className="p-6">
                  <EventsTable 
                    events={events.filter(event => new Date(event.eventDate) < new Date(new Date().setHours(0, 0, 0, 0)))} 
                    handleDelete={handleDelete}
                    setLocation={setLocation}
                    toggleActiveMutation={toggleActiveMutation}
                    toggleRegistrationMutation={toggleRegistrationMutation}
                  />
                </TabsContent>
              </Tabs>
            )}
          </div>
        </main>
      </div>

      {/* Create Event Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Event</DialogTitle>
            <DialogDescription>Add a new event or expo to your website</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Event Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter event title"
                data-testid="input-title"
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="event-slug"
                data-testid="input-slug"
              />
            </div>

            <div>
              <Label htmlFor="eventDate">Event Date *</Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                data-testid="input-event-date"
              />
            </div>

            <div>
              <Label htmlFor="eventType">Event Type *</Label>
              <select
                id="eventType"
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value as "Open Day" | "Expo" | "IELTS Masterclass" })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
                data-testid="select-event-type"
              >
                <option value="Open Day">Open Day</option>
                <option value="Expo">Expo</option>
                <option value="IELTS Masterclass">IELTS Masterclass</option>
              </select>
            </div>

            <div>
              <Label>Study Levels (Multi-select)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                    data-testid="button-study-level-select"
                  >
                    {formData.studyLevel.length === 0
                      ? "Select study levels"
                      : `${formData.studyLevel.length} selected: ${formData.studyLevel.join(", ")}`}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-4 bg-white" align="start">
                  <div className="space-y-2">
                    {STUDY_LEVELS.map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox
                          id={`study-level-${level}`}
                          checked={formData.studyLevel.includes(level)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                studyLevel: [...formData.studyLevel, level]
                              });
                            } else {
                              setFormData({
                                ...formData,
                                studyLevel: formData.studyLevel.filter((l) => l !== level)
                              });
                            }
                          }}
                          data-testid={`checkbox-study-level-${level.toLowerCase()}`}
                        />
                        <label
                          htmlFor={`study-level-${level}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="location">City / Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Lahore"
                data-testid="input-location"
              />
            </div>

            <div>
              <Label htmlFor="venue">Venue</Label>
              <Input
                id="venue"
                value={formData.venue}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                placeholder="e.g., Pearl Continental Hotel"
                data-testid="input-venue"
              />
            </div>

            <div>
              <Label>Study Destination Countries (Multi-select)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                    data-testid="button-country-select"
                  >
                    {formData.country.length === 0
                      ? "Select countries"
                      : `${formData.country.length} selected: ${formData.country.join(", ")}`}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-4 bg-white" align="start">
                  <div className="space-y-2">
                    {AVAILABLE_COUNTRIES.map((countryOption) => (
                      <div key={countryOption} className="flex items-center space-x-2">
                        <Checkbox
                          id={`country-${countryOption}`}
                          checked={formData.country.includes(countryOption)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                country: [...formData.country, countryOption]
                              });
                            } else {
                              setFormData({
                                ...formData,
                                country: formData.country.filter((c) => c !== countryOption)
                              });
                            }
                          }}
                          data-testid={`checkbox-country-${countryOption.toLowerCase()}`}
                        />
                        <label
                          htmlFor={`country-${countryOption}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {countryOption}
                        </label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <p className="text-xs text-gray-500 mt-1">
                Event type is automatically determined based on the event date
              </p>
            </div>

            <div>
              <Label htmlFor="image">Card/Thumbnail Image (for event listings) *</Label>
              <div className="flex gap-2">
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="Image URL"
                  data-testid="input-image"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setMediaTargetField('image');
                    setShowMediaModal(true);
                  }}
                  data-testid="button-select-image"
                >
                  Select
                </Button>
              </div>
              {formData.image && (
                <img loading="lazy" src={formData.image} alt="Thumbnail Preview" className="mt-2 h-32 object-cover rounded" />
              )}
            </div>

            <div>
              <Label htmlFor="detailImage">Event Detail Page Image (optional)</Label>
              <div className="flex gap-2">
                <Input
                  id="detailImage"
                  value={formData.detailImage}
                  onChange={(e) => setFormData({ ...formData, detailImage: e.target.value })}
                  placeholder="Image URL"
                  data-testid="input-detail-image"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setMediaTargetField('detailImage');
                    setShowMediaModal(true);
                  }}
                  data-testid="button-select-detail-image"
                >
                  Select
                </Button>
              </div>
              {formData.detailImage && (
                <img loading="lazy" src={formData.detailImage} alt="Detail Preview" className="mt-2 h-32 object-cover rounded" />
              )}
              <p className="text-xs text-gray-500 mt-1">
                If not provided, the card/thumbnail image will be used on the event detail page
              </p>
            </div>

            <div>
              <Label htmlFor="shortDescription">Short Description</Label>
              <Textarea
                id="shortDescription"
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="Brief description for event card"
                rows={2}
                data-testid="textarea-short-description"
              />
            </div>

            <div>
              <Label htmlFor="fullDescription">Full Description</Label>
              <Textarea
                id="fullDescription"
                value={formData.fullDescription}
                onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                placeholder="Detailed event description"
                rows={6}
                data-testid="textarea-full-description"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreate}
              disabled={createMutation.isPending}
              data-testid="button-submit-create"
            >
              {createMutation.isPending ? "Creating..." : "Create Event"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Event Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogDescription>Update event details</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-title">Event Title *</Label>
              <Input
                id="edit-title"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter event title"
              />
            </div>

            <div>
              <Label htmlFor="edit-slug">Slug</Label>
              <Input
                id="edit-slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="event-slug"
              />
            </div>

            <div>
              <Label htmlFor="edit-eventDate">Event Date *</Label>
              <Input
                id="edit-eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="edit-eventType">Event Type *</Label>
              <select
                id="edit-eventType"
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value as "Open Day" | "Expo" | "IELTS Masterclass" })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
              >
                <option value="Open Day">Open Day</option>
                <option value="Expo">Expo</option>
                <option value="IELTS Masterclass">IELTS Masterclass</option>
              </select>
            </div>

            <div>
              <Label>Study Levels (Multi-select)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    {formData.studyLevel.length === 0
                      ? "Select study levels"
                      : `${formData.studyLevel.length} selected: ${formData.studyLevel.join(", ")}`}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-4 bg-white" align="start">
                  <div className="space-y-2">
                    {STUDY_LEVELS.map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox
                          id={`edit-study-level-${level}`}
                          checked={formData.studyLevel.includes(level)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                studyLevel: [...formData.studyLevel, level]
                              });
                            } else {
                              setFormData({
                                ...formData,
                                studyLevel: formData.studyLevel.filter((l) => l !== level)
                              });
                            }
                          }}
                        />
                        <label
                          htmlFor={`edit-study-level-${level}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="edit-location">City / Location</Label>
              <Input
                id="edit-location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Lahore"
              />
            </div>

            <div>
              <Label htmlFor="edit-venue">Venue</Label>
              <Input
                id="edit-venue"
                value={formData.venue}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                placeholder="e.g., Pearl Continental Hotel"
              />
            </div>

            <div>
              <Label>Study Destination Countries (Multi-select)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    {formData.country.length === 0
                      ? "Select countries"
                      : `${formData.country.length} selected: ${formData.country.join(", ")}`}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-4 bg-white" align="start">
                  <div className="space-y-2">
                    {AVAILABLE_COUNTRIES.map((countryOption) => (
                      <div key={countryOption} className="flex items-center space-x-2">
                        <Checkbox
                          id={`edit-country-${countryOption}`}
                          checked={formData.country.includes(countryOption)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                country: [...formData.country, countryOption]
                              });
                            } else {
                              setFormData({
                                ...formData,
                                country: formData.country.filter((c) => c !== countryOption)
                              });
                            }
                          }}
                        />
                        <label
                          htmlFor={`edit-country-${countryOption}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {countryOption}
                        </label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <p className="text-xs text-gray-500 mt-1">
                Event type is automatically determined based on the event date
              </p>
            </div>

            <div>
              <Label htmlFor="edit-image">Card/Thumbnail Image (for event listings) *</Label>
              <div className="flex gap-2">
                <Input
                  id="edit-image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="Image URL"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setMediaTargetField('image');
                    setShowMediaModal(true);
                  }}
                >
                  Select
                </Button>
              </div>
              {formData.image && (
                <img loading="lazy" src={formData.image} alt="Thumbnail Preview" className="mt-2 h-32 object-cover rounded" />
              )}
            </div>

            <div>
              <Label htmlFor="edit-detailImage">Event Detail Page Image (optional)</Label>
              <div className="flex gap-2">
                <Input
                  id="edit-detailImage"
                  value={formData.detailImage}
                  onChange={(e) => setFormData({ ...formData, detailImage: e.target.value })}
                  placeholder="Image URL"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setMediaTargetField('detailImage');
                    setShowMediaModal(true);
                  }}
                >
                  Select
                </Button>
              </div>
              {formData.detailImage && (
                <img loading="lazy" src={formData.detailImage} alt="Detail Preview" className="mt-2 h-32 object-cover rounded" />
              )}
              <p className="text-xs text-gray-500 mt-1">
                If not provided, the card/thumbnail image will be used on the event detail page
              </p>
            </div>

            <div>
              <Label htmlFor="edit-shortDescription">Short Description</Label>
              <Textarea
                id="edit-shortDescription"
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="Brief description for event card"
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="edit-fullDescription">Full Description</Label>
              <Textarea
                id="edit-fullDescription"
                value={formData.fullDescription}
                onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                placeholder="Detailed event description"
                rows={6}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleUpdate}
              disabled={updateMutation.isPending}
              data-testid="button-submit-edit"
            >
              {updateMutation.isPending ? "Updating..." : "Update Event"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Media Selection Modal */}
      {showMediaModal && (
        <MediaSelectionModal
          isOpen={showMediaModal}
          onSelect={handleMediaSelect}
          onClose={() => {
            setShowMediaModal(false);
            setMediaTargetField(null);
          }}
        />
      )}
    </div>
  );
}
