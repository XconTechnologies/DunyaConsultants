import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import MobileNav from "@/components/admin/mobile-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, XCircle, Calendar, Mail, Phone, GraduationCap, MapPin, Download, FileSpreadsheet, Trash2, Check, QrCode, ChevronLeft, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import type { Event, EventRegistration, AdminUser } from "@shared/schema";

export default function EventRegistrationsPage() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedRegistration, setSelectedRegistration] = useState<EventRegistration | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [generatingQR, setGeneratingQR] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPages, setCurrentPages] = useState<Record<number, number>>({});
  const { toast } = useToast();

  // Get event ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const eventIdFromUrl = urlParams.get('eventId');

  // Helper function to get auth headers
  const getAuthHeaders = () => {
    const adminToken = localStorage.getItem("adminToken");
    const userToken = localStorage.getItem("userToken");
    const token = adminToken || userToken;
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  };

  // Trash registration mutation
  const trashMutation = useMutation({
    mutationFn: async ({ id, reason }: { id: number; reason?: string }) => {
      const response = await fetch(`/api/admin/registrations/${id}/trash`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ reason }),
      });
      if (!response.ok) throw new Error('Failed to trash registration');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Registration moved to trash." });
      queryClient.invalidateQueries({ queryKey: ["/api/events/registrations/all"] });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to trash registration.", variant: "destructive" });
    },
  });

  // Bulk mark as attended mutation
  const bulkAttendMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/registrations/bulk-attend', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to mark attendees');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Selected registrations marked as attended." });
      queryClient.invalidateQueries({ queryKey: ["/api/events/registrations/all"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to mark attendees.", variant: "destructive" });
    },
  });

  // Bulk update prize status mutation
  const bulkPrizeMutation = useMutation({
    mutationFn: async ({ ids, status }: { ids: number[]; status: string }) => {
      const response = await fetch('/api/admin/registrations/bulk-prize', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids, status }),
      });
      if (!response.ok) throw new Error('Failed to update prize status');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Prize status updated for selected registrations." });
      queryClient.invalidateQueries({ queryKey: ["/api/events/registrations/all"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update prize status.", variant: "destructive" });
    },
  });

  // Bulk trash mutation
  const bulkTrashMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/registrations/bulk-trash', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to trash registrations');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Selected registrations moved to trash." });
      queryClient.invalidateQueries({ queryKey: ["/api/events/registrations/all"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to trash registrations.", variant: "destructive" });
    },
  });

  // Bulk delete mutation (permanent)
  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await fetch('/api/admin/registrations/bulk-delete', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ids }),
      });
      if (!response.ok) throw new Error('Failed to delete registrations');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Selected registrations permanently deleted." });
      queryClient.invalidateQueries({ queryKey: ["/api/events/registrations/all"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete registrations.", variant: "destructive" });
    },
  });

  // Function to generate QR code (will check if file exists on server)
  const generateQRCode = async (reg: EventRegistration) => {
    setGeneratingQR(true);
    try {
      const response = await fetch(`/api/admin/registrations/${reg.id}/generate-qr`, {
        method: 'POST',
        headers: getAuthHeaders(),
      });

      if (!response.ok) throw new Error('Failed to generate QR code');

      const data = await response.json();
      
      // If the QR code was regenerated or already exists, update the registration
      if (data.qrCodeUrl) {
        const updatedReg = { ...reg, qrCodeUrl: data.qrCodeUrl };
        setSelectedRegistration(updatedReg);
        
        // Only invalidate if a new QR was generated
        if (!data.alreadyExists) {
          queryClient.invalidateQueries({ queryKey: ["/api/events/registrations/all"] });
        }
        
        return updatedReg;
      }
      
      return reg;
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast({
        title: "Error",
        description: "Failed to generate QR code. Please try again.",
        variant: "destructive"
      });
      return reg;
    } finally {
      setGeneratingQR(false);
    }
  };

  // Handle opening registration details
  const handleOpenDetails = async (reg: EventRegistration) => {
    setSelectedRegistration(reg);
    setIsDetailsOpen(true);
    
    // Always try to generate QR code (endpoint will check if file exists)
    await generateQRCode(reg);
  };

  // Export to CSV
  const exportToCSV = (eventRegs: EventRegistration[], eventTitle: string) => {
    const headers = ['Name', 'Email', 'Phone', 'Education', 'Destinations', 'Attendance', 'Prize Status', 'Registered'];
    const rows = eventRegs.map(reg => [
      reg.name,
      reg.email,
      reg.phone,
      reg.education || 'Not specified',
      reg.destination || 'Not specified',
      reg.isAttended ? 'Attended' : 'Not Attended',
      reg.prizeStatus,
      new Date(reg.createdAt).toLocaleDateString()
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${eventTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-registrations.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Export to Excel
  const exportToSheets = async (eventRegs: EventRegistration[], eventTitle: string) => {
    const sheetData = eventRegs.map(reg => ({
      Name: reg.name,
      Email: reg.email,
      Phone: reg.phone,
      Education: reg.education || 'Not specified',
      Destinations: reg.destination || 'Not specified',
      Attendance: reg.isAttended ? 'Attended' : 'Not Attended',
      'Prize Status': reg.prizeStatus,
      Registered: new Date(reg.createdAt).toLocaleDateString()
    }));

    // Dynamically import XLSX library
    const XLSX = await import('xlsx');
    
    // Create a new workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(sheetData);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');

    // Generate Excel file and download
    const fileName = `${eventTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-registrations.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  // Check authentication
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const adminUserStr = localStorage.getItem("adminUser");
    const userToken = localStorage.getItem("userToken");
    const userStr = localStorage.getItem("user");

    const token = adminToken || userToken;
    const user = adminUserStr || userStr;

    if (!token || !user) {
      setLocation("/admin/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      setAdminUser(userData);
      setAuthChecked(true);
    } catch {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  const { data: events } = useQuery<Event[]>({
    queryKey: ["/api/events"],
    enabled: authChecked,
  });

  const { data: registrations } = useQuery<EventRegistration[]>({
    queryKey: ["/api/events/registrations/all"],
    enabled: authChecked,
  });

  if (!authChecked || !adminUser) {
    return null;
  }

  // Group registrations by event (filter out trashed)
  const registrationsByEvent = registrations
    ?.filter((reg) => !reg.trashedAt)
    .reduce((acc, reg) => {
      const eventId = reg.eventId;
      if (!acc[eventId]) {
        acc[eventId] = [];
      }
      acc[eventId].push(reg);
      return acc;
    }, {} as Record<number, EventRegistration[]>) || {};

  // Get active events with registrations and separate into upcoming and past
  const today = new Date();
  const eventsWithRegistrations = (events || []).filter((event: Event) => 
    registrationsByEvent[event.id]?.length > 0
  );

  const upcomingEvents = eventsWithRegistrations.filter((event: Event) => {
    const eventDate = new Date(event.eventDate);
    const daysUntil = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntil >= 0;
  });

  const pastEvents = eventsWithRegistrations.filter((event: Event) => {
    const eventDate = new Date(event.eventDate);
    const daysUntil = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntil < 0;
  });

  // Pagination helper function
  const getPaginatedData = (data: EventRegistration[], eventId: number) => {
    const currentPage = currentPages[eventId] || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    
    return { paginatedData, currentPage, totalPages, totalItems: data.length };
  };

  const setCurrentPage = (eventId: number, page: number) => {
    setCurrentPages(prev => ({ ...prev, [eventId]: page }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30">
      <AdminSidebar 
        currentUser={adminUser} 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="lg:ml-64">
        <AdminHeader 
          currentUser={adminUser}
          title="Event Registrations"
          subtitle="View all registrations organized by event"
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Mobile Navigation */}
        <MobileNav currentUser={adminUser} />

        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

          {eventsWithRegistrations.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No registrations yet</p>
                <p className="text-gray-400 text-sm mt-2">Registrations will appear here once users start signing up for events</p>
              </CardContent>
            </Card>
          ) : (
            <Tabs defaultValue={(() => {
              // Determine default main tab based on URL parameter or default logic
              if (eventIdFromUrl) {
                const eventId = parseInt(eventIdFromUrl);
                const isUpcoming = upcomingEvents.some(e => e.id === eventId);
                const isPast = pastEvents.some(e => e.id === eventId);
                if (isUpcoming) return "upcoming";
                if (isPast) return "past";
              }
              return upcomingEvents.length > 0 ? "upcoming" : "past";
            })()} className="space-y-6">
              {/* Main Tab List - Upcoming vs Past */}
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <TabsList className="bg-white p-1.5 shadow-lg rounded-xl border-0 inline-flex w-auto">
                  {upcomingEvents.length > 0 && (
                    <TabsTrigger 
                      value="upcoming"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all whitespace-nowrap text-sm sm:text-base"
                    >
                      Upcoming Events
                      <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-[#1D50C9] border-0 data-[state=active]:bg-white/20 data-[state=active]:text-white">
                        {upcomingEvents.length}
                      </Badge>
                    </TabsTrigger>
                  )}
                  {pastEvents.length > 0 && (
                    <TabsTrigger 
                      value="past"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all whitespace-nowrap text-sm sm:text-base"
                    >
                      Past Events
                      <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-[#1D50C9] border-0 data-[state=active]:bg-white/20 data-[state=active]:text-white">
                        {pastEvents.length}
                      </Badge>
                    </TabsTrigger>
                  )}
                </TabsList>
              </div>

              {/* Upcoming Events Tab Content */}
              {upcomingEvents.length > 0 && (
                <TabsContent value="upcoming" className="space-y-6">
                  <Tabs defaultValue={(() => {
                    // Use URL param if it's an upcoming event, otherwise use first event
                    if (eventIdFromUrl) {
                      const eventId = parseInt(eventIdFromUrl);
                      if (upcomingEvents.some(e => e.id === eventId)) {
                        return eventIdFromUrl;
                      }
                    }
                    return upcomingEvents[0]?.id.toString();
                  })()} className="space-y-6">
                    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                      <TabsList className="bg-white p-1.5 shadow-lg rounded-xl border-0 inline-flex w-auto min-w-full sm:w-auto">
                        {upcomingEvents.map((event: Event) => (
                          <TabsTrigger 
                            key={event.id} 
                            value={event.id.toString()}
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all whitespace-nowrap text-sm sm:text-base"
                          >
                            <span className="truncate max-w-[150px] sm:max-w-none">{event.title}</span>
                            <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-[#1D50C9] border-0">
                              {registrationsByEvent[event.id]?.length || 0}
                            </Badge>
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>

                    {upcomingEvents.map((event: Event) => {
                const eventRegs = registrationsByEvent[event.id] || [];
                const { paginatedData, currentPage, totalPages, totalItems } = getPaginatedData(eventRegs, event.id);
                const attendedCount = eventRegs.filter((r: EventRegistration) => r.isAttended).length;
                const eligibleCount = eventRegs.filter((r: EventRegistration) => r.prizeStatus === 'eligible' || r.prizeStatus === 'distributed').length;

                return (
                  <TabsContent key={event.id} value={event.id.toString()} className="space-y-6">
                    {/* Event Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-shadow">
                        <CardHeader className="pb-3">
                          <CardDescription className="font-medium text-gray-600">Total Registrations</CardDescription>
                          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">{eventRegs.length}</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow">
                        <CardHeader className="pb-3">
                          <CardDescription className="font-medium text-gray-600">Attended</CardDescription>
                          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{attendedCount}</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-slate-50 hover:shadow-xl transition-shadow">
                        <CardHeader className="pb-3">
                          <CardDescription className="font-medium text-gray-600">Not Attended</CardDescription>
                          <CardTitle className="text-3xl font-bold text-gray-500">{eventRegs.length - attendedCount}</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-shadow">
                        <CardHeader className="pb-3">
                          <CardDescription className="font-medium text-gray-600">Prize Eligible</CardDescription>
                          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{eligibleCount}</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>

                    {/* Registrations Table */}
                    <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <CardTitle className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-[#1D50C9] bg-clip-text text-transparent">{event.title} - Registrations</CardTitle>
                            <CardDescription className="font-medium text-sm">Complete list of all registrations for this event</CardDescription>
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            <Button
                              onClick={() => exportToCSV(eventRegs, event.title)}
                              variant="outline"
                              size="sm"
                              className="gap-2 border-[#1D50C9]/30 hover:bg-[#1D50C9]/5"
                              data-testid={`button-export-csv-${event.id}`}
                            >
                              <Download className="h-4 w-4" />
                              <span className="hidden sm:inline">Export </span>CSV
                            </Button>
                            <Button
                              onClick={() => exportToSheets(eventRegs, event.title)}
                              variant="outline"
                              size="sm"
                              className="gap-2 border-[#1D50C9]/30 hover:bg-[#1D50C9]/5"
                              data-testid={`button-export-sheets-${event.id}`}
                            >
                              <FileSpreadsheet className="h-4 w-4" />
                              <span className="hidden sm:inline">Export to </span>Sheets
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {/* Bulk Actions Toolbar */}
                        {selectedIds.length > 0 && (
                          <div className="mb-4 p-4 bg-blue-50 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Checkbox 
                                checked={true}
                                onCheckedChange={() => setSelectedIds([])}
                              />
                              <span className="font-medium">{selectedIds.length} selected</span>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => bulkAttendMutation.mutate(selectedIds)}
                                disabled={bulkAttendMutation.isPending}
                                data-testid="button-bulk-attend"
                              >
                                <Check className="h-4 w-4 mr-2" />
                                Mark Attended
                              </Button>
                              <Select onValueChange={(value) => bulkPrizeMutation.mutate({ ids: selectedIds, status: value })}>
                                <SelectTrigger className="w-[180px]" disabled={bulkPrizeMutation.isPending}>
                                  <SelectValue placeholder="Prize Status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="not_eligible">Not Eligible</SelectItem>
                                  <SelectItem value="eligible">Eligible</SelectItem>
                                  <SelectItem value="distributed">Distributed</SelectItem>
                                </SelectContent>
                              </Select>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  if (confirm(`Are you sure you want to move ${selectedIds.length} registration(s) to trash?`)) {
                                    bulkTrashMutation.mutate(selectedIds);
                                  }
                                }}
                                disabled={bulkTrashMutation.isPending}
                                data-testid="button-bulk-trash"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Move to Trash
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => {
                                  if (confirm(`⚠️ PERMANENT DELETE: Are you sure you want to permanently delete ${selectedIds.length} registration(s)? This action cannot be undone!`)) {
                                    bulkDeleteMutation.mutate(selectedIds);
                                  }
                                }}
                                disabled={bulkDeleteMutation.isPending}
                                data-testid="button-bulk-delete"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete Permanently
                              </Button>
                            </div>
                          </div>
                        )}
                        
                        <div className="overflow-x-auto -mx-4 sm:mx-0">
                          <div className="inline-block min-w-full align-middle">
                            <Table>
                              <TableHeader>
                                <TableRow className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100/50">
                                  <TableHead className="w-12 py-4 hidden sm:table-cell">
                                    <Checkbox
                                      checked={paginatedData.length > 0 && paginatedData.every(r => selectedIds.includes(r.id))}
                                      onCheckedChange={(checked) => {
                                        if (checked) {
                                          const newIds = [...new Set([...selectedIds, ...paginatedData.map(r => r.id)])];
                                          setSelectedIds(newIds);
                                        } else {
                                          setSelectedIds(selectedIds.filter(id => !paginatedData.map(r => r.id).includes(id)));
                                        }
                                      }}
                                      data-testid="checkbox-select-all"
                                    />
                                  </TableHead>
                                  <TableHead className="font-semibold text-gray-700 min-w-[120px]">Name</TableHead>
                                  <TableHead className="font-semibold text-gray-700 min-w-[100px]">Destination</TableHead>
                                  <TableHead className="font-semibold text-gray-700 min-w-[110px]">Attendance</TableHead>
                                  <TableHead className="font-semibold text-gray-700 hidden md:table-cell min-w-[100px]">Prize Status</TableHead>
                                  <TableHead className="font-semibold text-gray-700 hidden lg:table-cell">Registered</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {paginatedData.map((reg: EventRegistration) => (
                                  <TableRow 
                                    key={reg.id} 
                                    className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-all duration-200 cursor-pointer"
                                    onClick={() => handleOpenDetails(reg)}
                                  >
                                    <TableCell className="py-4 hidden sm:table-cell" onClick={(e) => e.stopPropagation()}>
                                      <Checkbox
                                        checked={selectedIds.includes(reg.id)}
                                        onCheckedChange={(checked) => {
                                          if (checked) {
                                            setSelectedIds([...selectedIds, reg.id]);
                                          } else {
                                            setSelectedIds(selectedIds.filter(id => id !== reg.id));
                                          }
                                        }}
                                        data-testid={`checkbox-select-${reg.id}`}
                                      />
                                    </TableCell>
                                    <TableCell>
                                      <div className="font-semibold text-gray-900 whitespace-nowrap">{reg.name}</div>
                                    </TableCell>
                                    <TableCell>
                                      <div className="flex items-center gap-1 text-sm whitespace-nowrap">
                                        <MapPin className="h-3 w-3 text-gray-500 flex-shrink-0" />
                                        <span className="truncate max-w-[120px]">{reg.destination || 'Not specified'}</span>
                                      </div>
                                    </TableCell>
                                    <TableCell>
                                      {reg.isAttended ? (
                                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-sm whitespace-nowrap text-xs">
                                          <CheckCircle2 className="h-3 w-3 mr-1" />
                                          Attended
                                        </Badge>
                                      ) : (
                                        <Badge className="bg-gradient-to-r from-gray-100 to-slate-100 text-gray-600 border-0 whitespace-nowrap text-xs">
                                          <XCircle className="h-3 w-3 mr-1" />
                                          Not Attended
                                        </Badge>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {reg.prizeStatus === 'eligible' && (
                                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-sm whitespace-nowrap">
                                          Eligible
                                        </Badge>
                                      )}
                                      {reg.prizeStatus === 'distributed' && (
                                        <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-sm whitespace-nowrap">
                                          Distributed
                                        </Badge>
                                      )}
                                      {reg.prizeStatus === 'pending' && (
                                        <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-0 whitespace-nowrap">
                                          Pending
                                        </Badge>
                                      )}
                                      {!reg.prizeStatus && (
                                        <Badge className="bg-gray-200 text-gray-600 border-0 whitespace-nowrap">
                                          Not Eligible
                                        </Badge>
                                      )}
                                    </TableCell>
                                    <TableCell className="text-sm text-gray-500 hidden lg:table-cell whitespace-nowrap">
                                      {new Date(reg.createdAt).toLocaleDateString()}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                          <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-gray-700">Items per page:</span>
                                <Select
                                  value={itemsPerPage.toString()}
                                  onValueChange={(value) => {
                                    setItemsPerPage(parseInt(value));
                                    setCurrentPage(event.id, 1);
                                  }}
                                >
                                  <SelectTrigger className="w-20 h-9 border-gray-300 bg-white shadow-sm hover:border-[#1D50C9] transition-colors" data-testid="select-items-per-page">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="25">25</SelectItem>
                                    <SelectItem value="50">50</SelectItem>
                                    <SelectItem value="100">100</SelectItem>
                                  </SelectContent>
                                </Select>
                                <span className="text-sm text-gray-600 bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-sm">
                                  Showing <span className="font-semibold text-[#1D50C9]">{((currentPage - 1) * itemsPerPage) + 1}</span> to <span className="font-semibold text-[#1D50C9]">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of <span className="font-semibold text-[#1D50C9]">{totalItems}</span>
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-1">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setCurrentPage(event.id, currentPage - 1)}
                                  disabled={currentPage === 1}
                                  className="h-9 px-3 bg-white border-gray-300 hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white hover:border-[#1D50C9] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all duration-200"
                                  data-testid="button-previous-page"
                                >
                                  <ChevronLeft className="w-4 h-4 mr-1" />
                                  Previous
                                </Button>
                                
                                <div className="flex items-center gap-1 mx-2">
                                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    let pageNum;
                                    if (totalPages <= 5) {
                                      pageNum = i + 1;
                                    } else if (currentPage <= 3) {
                                      pageNum = i + 1;
                                    } else if (currentPage >= totalPages - 2) {
                                      pageNum = totalPages - 4 + i;
                                    } else {
                                      pageNum = currentPage - 2 + i;
                                    }
                                    
                                    return (
                                      <Button
                                        key={pageNum}
                                        variant={currentPage === pageNum ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setCurrentPage(event.id, pageNum)}
                                        className={currentPage === pageNum 
                                          ? "h-9 w-9 p-0 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white border-0 shadow-md font-semibold" 
                                          : "h-9 w-9 p-0 bg-white border-gray-300 hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white hover:border-[#1D50C9] shadow-sm transition-all duration-200"}
                                        data-testid={`button-page-${pageNum}`}
                                      >
                                        {pageNum}
                                      </Button>
                                    );
                                  })}
                                </div>
                                
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setCurrentPage(event.id, currentPage + 1)}
                                  disabled={currentPage === totalPages}
                                  className="h-9 px-3 bg-white border-gray-300 hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white hover:border-[#1D50C9] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all duration-200"
                                  data-testid="button-next-page"
                                >
                                  Next
                                  <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                );
              })}
                  </Tabs>
                </TabsContent>
              )}

              {/* Past Events Tab Content */}
              {pastEvents.length > 0 && (
                <TabsContent value="past" className="space-y-6">
                  <Tabs defaultValue={(() => {
                    // Use URL param if it's a past event, otherwise use first event
                    if (eventIdFromUrl) {
                      const eventId = parseInt(eventIdFromUrl);
                      if (pastEvents.some(e => e.id === eventId)) {
                        return eventIdFromUrl;
                      }
                    }
                    return pastEvents[0]?.id.toString();
                  })()} className="space-y-6">
                    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                      <TabsList className="bg-white p-1.5 shadow-lg rounded-xl border-0 inline-flex w-auto min-w-full sm:w-auto">
                        {pastEvents.map((event: Event) => (
                          <TabsTrigger 
                            key={event.id} 
                            value={event.id.toString()}
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-600 data-[state=active]:to-gray-700 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all whitespace-nowrap text-sm sm:text-base"
                          >
                            <span className="truncate max-w-[150px] sm:max-w-none">{event.title}</span>
                            <Badge className="ml-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border-0">
                              {registrationsByEvent[event.id]?.length || 0}
                            </Badge>
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>

                    {pastEvents.map((event: Event) => {
                      const eventRegs = registrationsByEvent[event.id] || [];
                      const { paginatedData, currentPage, totalPages, totalItems } = getPaginatedData(eventRegs, event.id);
                      const attendedCount = eventRegs.filter((r: EventRegistration) => r.isAttended).length;
                      const eligibleCount = eventRegs.filter((r: EventRegistration) => r.prizeStatus === 'eligible' || r.prizeStatus === 'distributed').length;

                      return (
                        <TabsContent key={event.id} value={event.id.toString()} className="space-y-6">
                          {/* Event Stats */}
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-shadow">
                              <CardHeader className="pb-3">
                                <CardDescription className="font-medium text-gray-600">Total Registrations</CardDescription>
                                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">{eventRegs.length}</CardTitle>
                              </CardHeader>
                            </Card>
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow">
                              <CardHeader className="pb-3">
                                <CardDescription className="font-medium text-gray-600">Attended</CardDescription>
                                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{attendedCount}</CardTitle>
                              </CardHeader>
                            </Card>
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-slate-50 hover:shadow-xl transition-shadow">
                              <CardHeader className="pb-3">
                                <CardDescription className="font-medium text-gray-600">Not Attended</CardDescription>
                                <CardTitle className="text-3xl font-bold text-gray-500">{eventRegs.length - attendedCount}</CardTitle>
                              </CardHeader>
                            </Card>
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-shadow">
                              <CardHeader className="pb-3">
                                <CardDescription className="font-medium text-gray-600">Prize Eligible</CardDescription>
                                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{eligibleCount}</CardTitle>
                              </CardHeader>
                            </Card>
                          </div>

                          {/* Registrations Table - Same as upcoming but for past events */}
                          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
                            <CardHeader>
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                  <CardTitle className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">{event.title} - Registrations</CardTitle>
                                  <CardDescription className="font-medium text-sm">Complete list of all registrations for this past event</CardDescription>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                  <Button
                                    onClick={() => exportToCSV(eventRegs, event.title)}
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 border-gray-600/30 hover:bg-gray-600/5"
                                    data-testid={`button-export-csv-${event.id}`}
                                  >
                                    <Download className="h-4 w-4" />
                                    <span className="hidden sm:inline">Export </span>CSV
                                  </Button>
                                  <Button
                                    onClick={() => exportToSheets(eventRegs, event.title)}
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 border-gray-600/30 hover:bg-gray-600/5"
                                    data-testid={`button-export-sheets-${event.id}`}
                                  >
                                    <FileSpreadsheet className="h-4 w-4" />
                                    <span className="hidden sm:inline">Export to </span>Sheets
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              {/* Bulk Actions Toolbar */}
                              {selectedIds.length > 0 && (
                                <div className="mb-4 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Checkbox 
                                      checked={eventRegs.every((reg: EventRegistration) => selectedIds.includes(reg.id))}
                                      onCheckedChange={(checked) => {
                                        if (checked) {
                                          setSelectedIds([...new Set([...selectedIds, ...eventRegs.map((r: EventRegistration) => r.id)])]);
                                        } else {
                                          setSelectedIds(selectedIds.filter(id => !eventRegs.some((r: EventRegistration) => r.id === id)));
                                        }
                                      }}
                                    />
                                    <span className="text-sm font-medium text-gray-700">{selectedIds.filter(id => eventRegs.some((r: EventRegistration) => r.id === id)).length} selected</span>
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      onClick={() => bulkAttendMutation.mutate(selectedIds)}
                                      size="sm"
                                      variant="outline"
                                      className="gap-2"
                                    >
                                      <Check className="h-4 w-4" />
                                      Mark Attended
                                    </Button>
                                    <Select onValueChange={(value) => bulkPrizeMutation.mutate({ ids: selectedIds, status: value })}>
                                      <SelectTrigger className="w-[180px] h-9">
                                        <SelectValue placeholder="Set Prize Status" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="eligible">Eligible</SelectItem>
                                        <SelectItem value="distributed">Distributed</SelectItem>
                                        <SelectItem value="pending">Pending</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <Button
                                      onClick={() => {
                                        if (confirm(`Are you sure you want to delete ${selectedIds.length} registration(s)?`)) {
                                          bulkTrashMutation.mutate(selectedIds);
                                        }
                                      }}
                                      size="sm"
                                      variant="destructive"
                                      className="gap-2"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                      Delete Selected
                                    </Button>
                                  </div>
                                </div>
                              )}

                              <div className="rounded-lg border border-gray-200 overflow-hidden">
                                <div className="overflow-x-auto">
                                  <Table>
                                    <TableHeader>
                                      <TableRow className="bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100">
                                        <TableHead className="w-[50px]">
                                          <Checkbox 
                                            checked={paginatedData.length > 0 && paginatedData.every((reg: EventRegistration) => selectedIds.includes(reg.id))}
                                            onCheckedChange={(checked) => {
                                              if (checked) {
                                                setSelectedIds([...new Set([...selectedIds, ...paginatedData.map((r: EventRegistration) => r.id)])]);
                                              } else {
                                                setSelectedIds(selectedIds.filter(id => !paginatedData.some((r: EventRegistration) => r.id === id)));
                                              }
                                            }}
                                          />
                                        </TableHead>
                                        <TableHead className="font-semibold text-gray-900">Name</TableHead>
                                        <TableHead className="font-semibold text-gray-900 hidden md:table-cell">Destination</TableHead>
                                        <TableHead className="font-semibold text-gray-900 hidden sm:table-cell">Attendance</TableHead>
                                        <TableHead className="font-semibold text-gray-900 hidden lg:table-cell">Prize Status</TableHead>
                                        <TableHead className="font-semibold text-gray-900 hidden lg:table-cell">Registered</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {paginatedData.map((reg: EventRegistration) => (
                                        <TableRow 
                                          key={reg.id} 
                                          className="hover:bg-gray-50/50 cursor-pointer transition-colors"
                                          onClick={() => handleOpenDetails(reg)}
                                        >
                                          <TableCell onClick={(e) => e.stopPropagation()}>
                                            <Checkbox 
                                              checked={selectedIds.includes(reg.id)}
                                              onCheckedChange={(checked) => {
                                                if (checked) {
                                                  setSelectedIds([...selectedIds, reg.id]);
                                                } else {
                                                  setSelectedIds(selectedIds.filter(id => id !== reg.id));
                                                }
                                              }}
                                            />
                                          </TableCell>
                                          <TableCell className="font-medium text-gray-900">{reg.name}</TableCell>
                                          <TableCell className="text-sm text-gray-600 hidden md:table-cell">{reg.destination || 'Not specified'}</TableCell>
                                          <TableCell className="hidden sm:table-cell">
                                            {reg.isAttended ? (
                                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-sm whitespace-nowrap">
                                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                                Attended
                                              </Badge>
                                            ) : (
                                              <Badge className="bg-gradient-to-r from-gray-100 to-slate-100 text-gray-600 border-0 whitespace-nowrap">
                                                <XCircle className="h-3 w-3 mr-1" />
                                                Not Attended
                                              </Badge>
                                            )}
                                          </TableCell>
                                          <TableCell className="hidden lg:table-cell">
                                            {reg.prizeStatus === 'eligible' && (
                                              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-sm whitespace-nowrap">
                                                Eligible
                                              </Badge>
                                            )}
                                            {reg.prizeStatus === 'distributed' && (
                                              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-sm whitespace-nowrap">
                                                Distributed
                                              </Badge>
                                            )}
                                            {reg.prizeStatus === 'pending' && (
                                              <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-0 whitespace-nowrap">
                                                Pending
                                              </Badge>
                                            )}
                                            {!reg.prizeStatus && (
                                              <Badge className="bg-gray-200 text-gray-600 border-0 whitespace-nowrap">
                                                Not Eligible
                                              </Badge>
                                            )}
                                          </TableCell>
                                          <TableCell className="text-sm text-gray-500 hidden lg:table-cell whitespace-nowrap">
                                            {new Date(reg.createdAt).toLocaleDateString()}
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </div>
                              </div>

                              {/* Pagination Controls */}
                              {totalPages > 1 && (
                                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 border border-gray-200 rounded-lg shadow-sm">
                                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                      <span className="text-sm font-medium text-gray-700">Items per page:</span>
                                      <Select
                                        value={itemsPerPage.toString()}
                                        onValueChange={(value) => {
                                          setItemsPerPage(parseInt(value));
                                          setCurrentPage(event.id, 1);
                                        }}
                                      >
                                        <SelectTrigger className="w-20 h-9 border-gray-300 bg-white shadow-sm hover:border-[#1D50C9] transition-colors" data-testid="select-items-per-page">
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="25">25</SelectItem>
                                          <SelectItem value="50">50</SelectItem>
                                          <SelectItem value="100">100</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <span className="text-sm text-gray-600 bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-sm">
                                        Showing <span className="font-semibold text-[#1D50C9]">{((currentPage - 1) * itemsPerPage) + 1}</span> to <span className="font-semibold text-[#1D50C9]">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of <span className="font-semibold text-[#1D50C9]">{totalItems}</span>
                                      </span>
                                    </div>
                                    
                                    <div className="flex items-center gap-1">
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setCurrentPage(event.id, currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="h-9 px-3 bg-white border-gray-300 hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white hover:border-[#1D50C9] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all duration-200"
                                        data-testid="button-previous-page"
                                      >
                                        <ChevronLeft className="w-4 h-4 mr-1" />
                                        Previous
                                      </Button>
                                      
                                      <div className="flex items-center gap-1 mx-2">
                                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                          let pageNum;
                                          if (totalPages <= 5) {
                                            pageNum = i + 1;
                                          } else if (currentPage <= 3) {
                                            pageNum = i + 1;
                                          } else if (currentPage >= totalPages - 2) {
                                            pageNum = totalPages - 4 + i;
                                          } else {
                                            pageNum = currentPage - 2 + i;
                                          }
                                          
                                          return (
                                            <Button
                                              key={pageNum}
                                              variant={currentPage === pageNum ? "default" : "outline"}
                                              size="sm"
                                              onClick={() => setCurrentPage(event.id, pageNum)}
                                              className={currentPage === pageNum 
                                                ? "h-9 w-9 p-0 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white border-0 shadow-md font-semibold" 
                                                : "h-9 w-9 p-0 bg-white border-gray-300 hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white hover:border-[#1D50C9] shadow-sm transition-all duration-200"}
                                              data-testid={`button-page-${pageNum}`}
                                            >
                                              {pageNum}
                                            </Button>
                                          );
                                        })}
                                      </div>
                                      
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setCurrentPage(event.id, currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="h-9 px-3 bg-white border-gray-300 hover:bg-gradient-to-r hover:from-[#1D50C9] hover:to-[#1845B3] hover:text-white hover:border-[#1D50C9] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all duration-200"
                                        data-testid="button-next-page"
                                      >
                                        Next
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </TabsContent>
                      );
                    })}
                  </Tabs>
                </TabsContent>
              )}
            </Tabs>
          )}
        </div>
      </div>

      {/* Registration Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#1D50C9] bg-clip-text text-transparent">Registration Details</DialogTitle>
            <DialogDescription>Complete information for this registration</DialogDescription>
          </DialogHeader>
          
          {selectedRegistration && (
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Name</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">{selectedRegistration.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <p className="text-base text-gray-900">{selectedRegistration.email}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Phone</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <p className="text-base text-gray-900">{selectedRegistration.phone}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Education</label>
                    <div className="flex items-center gap-2 mt-1">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <p className="text-base text-gray-900">{selectedRegistration.education || 'Not specified'}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Destination</label>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <p className="text-base text-gray-900">{selectedRegistration.destination || 'Not specified'}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Registration Date</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <p className="text-base text-gray-900">{new Date(selectedRegistration.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Information */}
              <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Status</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Attendance</label>
                    <div className="mt-2">
                      {selectedRegistration.isAttended ? (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-sm">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Attended
                        </Badge>
                      ) : (
                        <Badge className="bg-gradient-to-r from-gray-100 to-slate-100 text-gray-600 border-0">
                          <XCircle className="h-3 w-3 mr-1" />
                          Not Attended
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Prize Status</label>
                    <div className="mt-2">
                      {selectedRegistration.prizeStatus === 'eligible' && (
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-sm">
                          Eligible
                        </Badge>
                      )}
                      {selectedRegistration.prizeStatus === 'distributed' && (
                        <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-sm">
                          Distributed
                        </Badge>
                      )}
                      {selectedRegistration.prizeStatus === 'pending' && (
                        <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-0">
                          Pending
                        </Badge>
                      )}
                      {!selectedRegistration.prizeStatus && (
                        <Badge className="bg-gray-200 text-gray-600 border-0">
                          Not Eligible
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <QrCode className="h-5 w-5 text-[#1D50C9]" />
                  Registration QR Code
                </h3>
                <div className="flex justify-center">
                  {generatingQR ? (
                    <div className="w-48 h-48 flex items-center justify-center border-4 border-white shadow-lg rounded-lg bg-white">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto mb-2"></div>
                        <p className="text-sm text-gray-600">Generating QR Code...</p>
                      </div>
                    </div>
                  ) : selectedRegistration.qrCodeUrl ? (
                    <img loading="lazy" 
                      src={selectedRegistration.qrCodeUrl} 
                      alt="Registration QR Code" 
                      className="w-48 h-48 border-4 border-white shadow-lg rounded-lg"
                    />
                  ) : (
                    <div className="w-48 h-48 flex items-center justify-center border-4 border-gray-200 shadow-lg rounded-lg bg-white">
                      <p className="text-sm text-gray-400">No QR Code</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
