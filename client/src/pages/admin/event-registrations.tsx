import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import * as XLSX from 'xlsx';
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, XCircle, Calendar, Mail, Phone, GraduationCap, MapPin, Download, FileSpreadsheet, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import type { Event, EventRegistration, AdminUser } from "@shared/schema";

export default function EventRegistrationsPage() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <div className="min-h-screen bg-gray-50">
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
              <TabsList className="bg-white p-1 shadow-sm">
                {eventsWithRegistrations.map((event: Event) => (
                  <TabsTrigger 
                    key={event.id} 
                    value={event.id.toString()}
                    className="data-[state=active]:bg-[#1D50C9] data-[state=active]:text-white"
                  >
                    {event.title}
                    <Badge variant="secondary" className="ml-2">
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
                      <Card>
                        <CardHeader className="pb-3">
                          <CardDescription>Total Registrations</CardDescription>
                          <CardTitle className="text-3xl text-[#1D50C9]">{eventRegs.length}</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardDescription>Attended</CardDescription>
                          <CardTitle className="text-3xl text-green-600">{attendedCount}</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardDescription>Not Attended</CardDescription>
                          <CardTitle className="text-3xl text-gray-400">{eventRegs.length - attendedCount}</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardDescription>Prize Eligible</CardDescription>
                          <CardTitle className="text-3xl text-purple-600">{eligibleCount}</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>

                    {/* Registrations Table */}
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>{event.title} - Registrations</CardTitle>
                            <CardDescription>Complete list of all registrations for this event</CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => exportToCSV(eventRegs, event.title)}
                              variant="outline"
                              className="gap-2"
                              data-testid={`button-export-csv-${event.id}`}
                            >
                              <Download className="h-4 w-4" />
                              Export CSV
                            </Button>
                            <Button
                              onClick={() => exportToSheets(eventRegs, event.title)}
                              variant="outline"
                              className="gap-2"
                              data-testid={`button-export-sheets-${event.id}`}
                            >
                              <FileSpreadsheet className="h-4 w-4" />
                              Export to Sheets
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Education</TableHead>
                                <TableHead>Destination</TableHead>
                                <TableHead>Attendance</TableHead>
                                <TableHead>Prize Status</TableHead>
                                <TableHead>Registered</TableHead>
                                <TableHead>Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {eventRegs.map((reg: EventRegistration) => (
                                <TableRow key={reg.id}>
                                  <TableCell>
                                    <div className="font-medium">{reg.name}</div>
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
                                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                        <CheckCircle2 className="h-3 w-3 mr-1" />
                                        Attended
                                      </Badge>
                                    ) : (
                                      <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                                        <XCircle className="h-3 w-3 mr-1" />
                                        Not Attended
                                      </Badge>
                                    )}
                                  </TableCell>
                                  <TableCell>
                                    {reg.prizeStatus === 'eligible' && (
                                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                                        Eligible
                                      </Badge>
                                    )}
                                    {reg.prizeStatus === 'distributed' && (
                                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                                        Distributed
                                      </Badge>
                                    )}
                                    {reg.prizeStatus === 'pending' && (
                                      <Badge variant="secondary" className="bg-gray-100 text-gray-600">
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
