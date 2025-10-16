import { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useRoute } from "wouter";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  Save, Eye, ArrowLeft, Loader2, Calendar, Upload, Image as ImageIcon, AlertTriangle, X, Plus, Code2, FileText, Table as TableIcon
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { AdminUser, Media, ContentBlock } from "@shared/schema";
import MediaSelectionModal from "@/components/admin/media-selection-modal";
import ContentBlocks from "@/components/admin/content-blocks";
import ContentBlocksRenderer from "@/components/content-blocks-renderer";
import AdminSidebar from "@/components/admin/sidebar";
import { format } from "date-fns";

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
  "Sweden"
];

const STUDY_LEVELS = [
  "Intermediate",
  "Bachelors",
  "Masters",
  "PhD",
  "Diploma",
  "Foundation"
];

const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  fullDescription: z.string().min(1, "Description is required"),
  contentBlocks: z.array(z.any()).optional(),
  image: z.string().min(1, "Thumbnail is required"),
  detailImage: z.string().optional(),
  eventDate: z.string().min(1, "Event date is required"),
  eventType: z.enum(["Open Day", "Expo", "IELTS Masterclass"]),
  venue: z.string().optional(),
  location: z.string().optional(),
  country: z.array(z.string()).optional(),
  studyLevel: z.array(z.string()).optional(),
  isActive: z.boolean().default(true),
});

type EventForm = z.infer<typeof eventSchema>;

interface Event {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  contentBlocks?: ContentBlock[];
  image: string;
  detailImage?: string;
  eventDate: string;
  eventType: "Open Day" | "Expo" | "IELTS Masterclass";
  venue?: string;
  location?: string;
  country?: string[];
  studyLevel?: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function EventEditor() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/admin/event-editor/:id?");
  const isEditing = Boolean(params?.id);
  const eventId = params?.id ? parseInt(params.id) : undefined;

  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [mediaTarget, setMediaTarget] = useState<'thumbnail' | 'banner' | null>(null);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [editorMode, setEditorMode] = useState<'rich' | 'html' | 'preview'>('rich');
  const [htmlContent, setHtmlContent] = useState('');
  const [editorMounted, setEditorMounted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const editorRef = useRef<any>(null);
  const htmlTextareaRef = useRef<HTMLTextAreaElement>(null);

  const form = useForm<EventForm>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      slug: "",
      shortDescription: "",
      fullDescription: "",
      contentBlocks: [],
      image: "",
      detailImage: "",
      eventDate: "",
      eventType: "Open Day",
      venue: "",
      location: "",
      country: [],
      studyLevel: [],
      isActive: true,
    },
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

  // Quill modules configuration
  const quillModules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean']
    ]
  }), []);

  const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'align',
    'list', 'bullet',
    'blockquote', 'code-block',
    'link'
  ];

  // Mount editor
  useEffect(() => {
    setEditorMounted(true);
  }, []);

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

  // Fetch event data if editing
  const { data: event, isLoading: isLoadingEvent } = useQuery<Event>({
    queryKey: ["/api/admin/events", eventId],
    enabled: isEditing && !!eventId,
    queryFn: async () => {
      const response = await fetch(`/api/admin/events/${eventId}`, {
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error("Failed to fetch event");
      return response.json();
    },
  });

  // Populate form when event data is loaded
  useEffect(() => {
    if (event && isEditing) {
      form.reset({
        title: event.title,
        slug: event.slug,
        shortDescription: event.shortDescription,
        fullDescription: event.fullDescription,
        contentBlocks: event.contentBlocks || [],
        image: event.image,
        detailImage: event.detailImage || "",
        eventDate: event.eventDate ? format(new Date(event.eventDate), "yyyy-MM-dd") : "",
        eventType: event.eventType,
        venue: event.venue || "",
        location: event.location || "",
        country: event.country || [],
        studyLevel: event.studyLevel || [],
        isActive: event.isActive,
      });
      setContentBlocks(event.contentBlocks || []);
    }
  }, [event, isEditing, form]);

  // Save/Update mutation
  const saveMutation = useMutation({
    mutationFn: async (data: EventForm) => {
      const payload = {
        ...data,
        contentBlocks,
      };

      if (isEditing && eventId) {
        const response = await fetch(`/api/admin/events/${eventId}`, {
          method: "PATCH",
          headers: getAuthHeaders(),
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Failed to update event");
        return response.json();
      } else {
        const response = await fetch("/api/admin/events", {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Failed to create event");
        return response.json();
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/events"] });
      toast({
        title: "Success",
        description: isEditing ? "Event updated successfully" : "Event created successfully",
      });
      setLocation("/admin/events");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to save event",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: EventForm) => {
    saveMutation.mutate(data);
  };

  const handleMediaSelect = (media: Media) => {
    if (mediaTarget === 'thumbnail') {
      form.setValue('image', media.url);
    } else if (mediaTarget === 'banner') {
      form.setValue('detailImage', media.url);
    }
    setShowMediaModal(false);
    setMediaTarget(null);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleTitleChange = (title: string) => {
    form.setValue('title', title);
    if (!isEditing) {
      form.setValue('slug', generateSlug(title));
    }
  };

  const handleEditorModeChange = (mode: 'rich' | 'html' | 'preview') => {
    if (mode === 'html' && editorMode === 'rich') {
      const currentContent = form.watch('fullDescription') || '';
      setHtmlContent(currentContent);
    } else if (mode === 'rich' && editorMode === 'html') {
      form.setValue('fullDescription', htmlContent);
    }
    setEditorMode(mode);
  };

  if (!authChecked) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!adminUser) {
    setLocation("/admin/login");
    return null;
  }

  if (isLoadingEvent) {
    return (
      <div className="flex h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <AdminSidebar currentUser={adminUser} />
        <div className="ml-64 flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <AdminSidebar currentUser={adminUser} />

      <div className="ml-64 flex-1 overflow-auto">
        <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocation("/admin/events")}
                className="text-white hover:bg-white/20 backdrop-blur-sm transition-all"
                data-testid="button-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-white">
                {isEditing ? "Edit Event" : "Create New Event"}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all"
                data-testid="button-preview"
              >
                <Eye className="w-4 h-4 mr-2" />
                {showPreview ? "Hide Preview" : "Preview"}
              </Button>
              <Button
                onClick={form.handleSubmit(onSubmit)}
                disabled={saveMutation.isPending}
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg transition-all"
                data-testid="button-save"
              >
                {saveMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {isEditing ? "Update Event" : "Create Event"}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="col-span-2 space-y-6">
              {/* Title */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-gray-800">Event Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    {...form.register("title")}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter event title"
                    className="text-lg border-[#dadada]"
                    data-testid="input-title"
                  />
                  {form.formState.errors.title && (
                    <p className="text-sm text-red-600 mt-1">{form.formState.errors.title.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* URL/Slug */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-gray-800">URL Slug</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    {...form.register("slug")}
                    placeholder="event-slug"
                    className="border-[#dadada]"
                    data-testid="input-slug"
                  />
                  {form.formState.errors.slug && (
                    <p className="text-sm text-red-600 mt-1">{form.formState.errors.slug.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Short Description */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-gray-800">Short Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    {...form.register("shortDescription")}
                    placeholder="Brief event description"
                    rows={3}
                    className="border-[#dadada]"
                    data-testid="input-short-description"
                  />
                  {form.formState.errors.shortDescription && (
                    <p className="text-sm text-red-600 mt-1">{form.formState.errors.shortDescription.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Full Description */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-gray-800">Full Description</CardTitle>
                    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleEditorModeChange('rich')}
                        className={`px-3 py-1 text-xs transition-all ${
                          editorMode === 'rich' 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                            : 'bg-transparent text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <FileText className="w-3 h-3 mr-1" />
                        Rich Text
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleEditorModeChange('html')}
                        className={`px-3 py-1 text-xs transition-all ${
                          editorMode === 'html' 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                            : 'bg-transparent text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <Code2 className="w-3 h-3 mr-1" />
                        HTML
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleEditorModeChange('preview')}
                        className={`px-3 py-1 text-xs transition-all ${
                          editorMode === 'preview' 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                            : 'bg-transparent text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {editorMode === 'rich' ? (
                    <div className="react-quill-container overflow-auto" style={{ maxHeight: '600px', width: '100%' }}>
                      {editorMounted ? (
                        <Controller
                          name="fullDescription"
                          control={form.control}
                          render={({ field }) => (
                            <ReactQuill
                              key={`quill-${eventId || 'new'}-${field.value ? 'loaded' : 'empty'}`}
                              value={field.value || ''}
                              onChange={(value) => field.onChange(value)}
                              placeholder="Write detailed event description here..."
                              modules={quillModules}
                              formats={quillFormats}
                              ref={editorRef}
                            />
                          )}
                        />
                      ) : (
                        <div className="text-center py-8 text-gray-500">Loading editor...</div>
                      )}
                    </div>
                  ) : editorMode === 'html' ? (
                    <div className="space-y-3">
                      <Textarea
                        value={htmlContent}
                        onChange={(e) => {
                          setHtmlContent(e.target.value);
                          form.setValue('fullDescription', e.target.value);
                        }}
                        ref={htmlTextareaRef}
                        placeholder="Write custom HTML code here..."
                        className="font-mono text-sm min-h-[400px]"
                        data-testid="textarea-html-content"
                      />
                    </div>
                  ) : (
                    <div 
                      className="prose max-w-none p-4 bg-gray-50 rounded-lg min-h-[400px]"
                      dangerouslySetInnerHTML={{ __html: form.watch('fullDescription') || '<p class="text-gray-400">No content to preview</p>' }}
                    />
                  )}
                  {form.formState.errors.fullDescription && (
                    <p className="text-sm text-red-600 mt-1">{form.formState.errors.fullDescription.message}</p>
                  )}
                  <div className="mt-3 text-xs text-gray-500 bg-blue-50 p-2 rounded">
                    {editorMode === 'rich' ? (
                      <>✨ <strong>Rich Text Mode:</strong> Use the toolbar to format text, add headings, lists, links, and more!</>
                    ) : editorMode === 'html' ? (
                      <>🔧 <strong>HTML Mode:</strong> Write custom HTML code with inline/internal CSS and JavaScript for advanced styling.</>
                    ) : (
                      <>👁️ <strong>Preview Mode:</strong> See exactly how your content will look when published.</>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Content Blocks */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-gray-800">Content Blocks</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    Add rich content blocks to enhance your event description
                  </p>
                </CardHeader>
                <CardContent>
                  <ContentBlocks
                    blocks={contentBlocks}
                    onChange={setContentBlocks}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="col-span-1 space-y-6">
              {/* Event Details */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-gray-800">Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Event Date */}
                  <div>
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      {...form.register("eventDate")}
                      className="border-[#dadada]"
                      data-testid="input-event-date"
                    />
                    {form.formState.errors.eventDate && (
                      <p className="text-sm text-red-600 mt-1">{form.formState.errors.eventDate.message}</p>
                    )}
                  </div>

                  {/* Event Type */}
                  <div>
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Controller
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger data-testid="select-event-type">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Open Day">Open Day</SelectItem>
                            <SelectItem value="Expo">Expo</SelectItem>
                            <SelectItem value="IELTS Masterclass">IELTS Masterclass</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  {/* Venue */}
                  <div>
                    <Label htmlFor="venue">Venue</Label>
                    <Input
                      id="venue"
                      {...form.register("venue")}
                      placeholder="Event venue"
                      className="border-[#dadada]"
                      data-testid="input-venue"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <Label htmlFor="location">City / Location</Label>
                    <Input
                      id="location"
                      {...form.register("location")}
                      placeholder="e.g., Lahore"
                      className="border-[#dadada]"
                      data-testid="input-location"
                    />
                  </div>

                  {/* Active Status */}
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isActive">Active</Label>
                    <Controller
                      control={form.control}
                      name="isActive"
                      render={({ field }) => (
                        <Switch
                          id="isActive"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          data-testid="switch-active"
                        />
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Study Levels */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-gray-800">Study Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-[#dadada]"
                        data-testid="button-study-level-select"
                      >
                        {form.watch("studyLevel")?.length === 0
                          ? "Select study levels"
                          : `${form.watch("studyLevel")?.length} selected`}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-4 bg-white" align="start">
                      <div className="space-y-2">
                        {STUDY_LEVELS.map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Controller
                              control={form.control}
                              name="studyLevel"
                              render={({ field }) => (
                                <Checkbox
                                  id={`study-level-${level}`}
                                  checked={field.value?.includes(level)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...(field.value || []), level]);
                                    } else {
                                      field.onChange((field.value || []).filter((l) => l !== level));
                                    }
                                  }}
                                  data-testid={`checkbox-study-level-${level.toLowerCase()}`}
                                />
                              )}
                            />
                            <label
                              htmlFor={`study-level-${level}`}
                              className="text-sm font-medium leading-none"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>

              {/* Study Destination Countries */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-gray-800">Study Destination Countries</CardTitle>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-[#dadada]"
                        data-testid="button-country-select"
                      >
                        {form.watch("country")?.length === 0
                          ? "Select countries"
                          : `${form.watch("country")?.length} selected`}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-4 bg-white max-h-64 overflow-y-auto" align="start">
                      <div className="space-y-2">
                        {AVAILABLE_COUNTRIES.map((country) => (
                          <div key={country} className="flex items-center space-x-2">
                            <Controller
                              control={form.control}
                              name="country"
                              render={({ field }) => (
                                <Checkbox
                                  id={`country-${country}`}
                                  checked={field.value?.includes(country)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...(field.value || []), country]);
                                    } else {
                                      field.onChange((field.value || []).filter((c) => c !== country));
                                    }
                                  }}
                                  data-testid={`checkbox-country-${country.toLowerCase()}`}
                                />
                              )}
                            />
                            <label
                              htmlFor={`country-${country}`}
                              className="text-sm font-medium leading-none"
                            >
                              {country}
                            </label>
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>

              {/* Thumbnail Image */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-gray-800">Thumbnail Image *</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {form.watch("image") ? (
                    <div className="space-y-3">
                      <div className="relative">
                        <img
                          src={form.watch("image")}
                          alt="Thumbnail"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() => form.setValue("image", "")}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setMediaTarget('thumbnail');
                          setShowMediaModal(true);
                        }}
                        data-testid="button-change-thumbnail"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Change Thumbnail
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-[#dadada] rounded-lg p-8 text-center">
                      <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                      <p className="text-sm text-gray-500 mb-3">No thumbnail selected</p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setMediaTarget('thumbnail');
                          setShowMediaModal(true);
                        }}
                        data-testid="button-select-thumbnail"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Select Thumbnail
                      </Button>
                    </div>
                  )}
                  {form.formState.errors.image && (
                    <p className="text-sm text-red-600">{form.formState.errors.image.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Banner Image */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-gray-800">Banner Image (Optional)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {form.watch("detailImage") ? (
                    <div className="space-y-3">
                      <div className="relative">
                        <img
                          src={form.watch("detailImage")}
                          alt="Banner"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() => form.setValue("detailImage", "")}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setMediaTarget('banner');
                          setShowMediaModal(true);
                        }}
                        data-testid="button-change-banner"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Change Banner
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-[#dadada] rounded-lg p-8 text-center">
                      <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                      <p className="text-sm text-gray-500 mb-3">No banner selected</p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setMediaTarget('banner');
                          setShowMediaModal(true);
                        }}
                        data-testid="button-select-banner"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Select Banner
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Media Selection Modal */}
      <MediaSelectionModal
        isOpen={showMediaModal}
        onClose={() => {
          setShowMediaModal(false);
          setMediaTarget(null);
        }}
        onSelect={handleMediaSelect}
      />

      {/* Preview Dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Event Preview</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {form.watch("detailImage") && (
              <img
                src={form.watch("detailImage")}
                alt="Banner"
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            <h1 className="text-3xl font-bold">{form.watch("title") || "Untitled Event"}</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>📅 {form.watch("eventDate") || "No date"}</span>
              <span>📍 {form.watch("venue") || "No venue"}</span>
              <span>🏷️ {form.watch("eventType")}</span>
            </div>
            <p className="text-gray-700">{form.watch("shortDescription")}</p>
            <div className="prose max-w-none">
              <p>{form.watch("fullDescription")}</p>
              {contentBlocks.length > 0 && (
                <ContentBlocksRenderer blocks={contentBlocks} />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
