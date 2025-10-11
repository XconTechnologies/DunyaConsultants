import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import * as XLSX from 'xlsx';
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import MobileNav from "@/components/admin/mobile-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, XCircle, Calendar, Mail, Phone, GraduationCap, MapPin, Download, FileSpreadsheet, Trash2, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import type { Event, EventRegistration, AdminUser } from "@shared/schema";

export default function EventRegistrationsPage() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { toast } = useToast();

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
  const exportToSheets = (eventRegs: EventRegistration[], eventTitle: string) => {
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

  // Get active events with registrations
  const eventsWithRegistrations = (events || []).filter((event: Event) => 
    registrationsByEvent[event.id]?.length > 0
  );

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

        <div className="max-w-7xl mx-auto p-8">

          {eventsWithRegistrations.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No registrations yet</p>
                <p className="text-gray-400 text-sm mt-2">Registrations will appear here once users start signing up for events</p>
              </CardContent>
            </Card>
          ) : (
            <Tabs defaultValue={eventsWithRegistrations[0]?.id.toString()} className="space-y-6">
              <TabsList className="bg-white p-1.5 shadow-lg rounded-xl border-0">
                {eventsWithRegistrations.map((event: Event) => (
                  <TabsTrigger 
                    key={event.id} 
                    value={event.id.toString()}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all"
                  >
                    {event.title}
                    <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-[#1D50C9] border-0">
                      {registrationsByEvent[event.id]?.length || 0}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>

              {eventsWithRegistrations.map((event: Event) => {
                const eventRegs = registrationsByEvent[event.id] || [];
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
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-[#1D50C9] bg-clip-text text-transparent">{event.title} - Registrations</CardTitle>
                            <CardDescription className="font-medium">Complete list of all registrations for this event</CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => exportToCSV(eventRegs, event.title)}
                              variant="outline"
                              className="gap-2 border-[#1D50C9]/30 hover:bg-[#1D50C9]/5"
                              data-testid={`button-export-csv-${event.id}`}
                            >
                              <Download className="h-4 w-4" />
                              Export CSV
                            </Button>
                            <Button
                              onClick={() => exportToSheets(eventRegs, event.title)}
                              variant="outline"
                              className="gap-2 border-[#1D50C9]/30 hover:bg-[#1D50C9]/5"
                              data-testid={`button-export-sheets-${event.id}`}
                            >
                              <FileSpreadsheet className="h-4 w-4" />
                              Export to Sheets
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
                                variant="destructive"
                                onClick={() => bulkTrashMutation.mutate(selectedIds)}
                                disabled={bulkTrashMutation.isPending}
                                data-testid="button-bulk-delete"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        )}
                        
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100/50">
                                <TableHead className="w-12 py-4">
                                  <Checkbox
                                    checked={eventRegs.length > 0 && selectedIds.length === eventRegs.length}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedIds(eventRegs.map(r => r.id));
                                      } else {
                                        setSelectedIds([]);
                                      }
                                    }}
                                    data-testid="checkbox-select-all"
                                  />
                                </TableHead>
                                <TableHead className="font-semibold text-gray-700">Name</TableHead>
                                <TableHead className="font-semibold text-gray-700">Email</TableHead>
                                <TableHead className="font-semibold text-gray-700">Phone</TableHead>
                                <TableHead className="font-semibold text-gray-700">Education</TableHead>
                                <TableHead className="font-semibold text-gray-700">Destination</TableHead>
                                <TableHead className="font-semibold text-gray-700">Attendance</TableHead>
                                <TableHead className="font-semibold text-gray-700">Prize Status</TableHead>
                                <TableHead className="font-semibold text-gray-700">Registered</TableHead>
                                <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {eventRegs.map((reg: EventRegistration) => (
                                <TableRow key={reg.id} className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-all duration-200">
                                  <TableCell className="py-4">
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
                                    <div className="font-semibold text-gray-900">{reg.name}</div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center gap-1 text-sm text-gray-600">
                                      <Mail className="h-3 w-3" />
                                      {reg.email}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center gap-1 text-sm text-gray-600">
                                      <Phone className="h-3 w-3" />
                                      {reg.phone}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center gap-1 text-sm">
                                      <GraduationCap className="h-3 w-3 text-gray-500" />
                                      {reg.education || 'Not specified'}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center gap-1 text-sm">
                                      <MapPin className="h-3 w-3 text-gray-500" />
                                      {reg.destination || 'Not specified'}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    {reg.isAttended ? (
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
                                  </TableCell>
                                  <TableCell>
                                    {reg.prizeStatus === 'eligible' && (
                                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-sm">
                                        Eligible
                                      </Badge>
                                    )}
                                    {reg.prizeStatus === 'distributed' && (
                                      <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-sm">
                                        Distributed
                                      </Badge>
                                    )}
                                    {reg.prizeStatus === 'pending' && (
                                      <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-0">
                                        Pending
                                      </Badge>
                                    )}
                                  </TableCell>
                                  <TableCell className="text-sm text-gray-500">
                                    {new Date(reg.createdAt).toLocaleDateString()}
                                  </TableCell>
                                  <TableCell>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => {
                                        if (window.confirm(`Are you sure you want to move this registration to trash?`)) {
                                          trashMutation.mutate({ id: reg.id });
                                        }
                                      }}
                                      data-testid={`button-trash-registration-${reg.id}`}
                                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
}
