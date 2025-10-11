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

interface EventFormData {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  detailImage: string;
  eventDate: string;
  eventType: "Open Day" | "Expo";
  location: string;
  country: string[];
  studyLevel: string[];
  venue: string;
  isActive: boolean;
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
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!adminUser) {
    setLocation("/admin/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar currentUser={adminUser} />
      
      {/* Mobile Navigation */}
      <MobileNav currentUser={adminUser} />
      
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Events Management</h1>
              <p className="text-gray-600 mt-2">Create and manage events & expos</p>
            </div>
            <Button onClick={() => setLocation("/admin/event-editor")} data-testid="button-create-event">
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Events</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8 text-gray-500">Loading events...</div>
              ) : events.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No events found. Create your first event!
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            {format(new Date(event.eventDate), "MMM d, yyyy")}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            {event.location || "N/A"}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={event.eventType === "Open Day" ? "default" : "secondary"}>
                            {event.eventType}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleActiveMutation.mutate({ id: event.id, isActive: !event.isActive })}
                            data-testid={`button-toggle-status-${event.id}`}
                          >
                            {event.isActive ? (
                              <Eye className="w-4 h-4 text-green-600" />
                            ) : (
                              <EyeOff className="w-4 h-4 text-gray-400" />
                            )}
                          </Button>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setLocation(`/admin/event-editor/${event.id}`)}
                              data-testid={`button-edit-${event.id}`}
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(event.id)}
                              data-testid={`button-delete-${event.id}`}
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
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
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value as "Open Day" | "Expo" })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
                data-testid="select-event-type"
              >
                <option value="Open Day">Open Day</option>
                <option value="Expo">Expo</option>
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
                <img loading="lazy" src={formData.image} alt="Thumbnail Preview" className="mt-2 h-32 object-cover rounded" loading="lazy" />
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
                <img loading="lazy" src={formData.detailImage} alt="Detail Preview" className="mt-2 h-32 object-cover rounded" loading="lazy" />
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
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value as "Open Day" | "Expo" })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
              >
                <option value="Open Day">Open Day</option>
                <option value="Expo">Expo</option>
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
                <img loading="lazy" src={formData.image} alt="Thumbnail Preview" className="mt-2 h-32 object-cover rounded" loading="lazy" />
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
                <img loading="lazy" src={formData.detailImage} alt="Detail Preview" className="mt-2 h-32 object-cover rounded" loading="lazy" />
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
