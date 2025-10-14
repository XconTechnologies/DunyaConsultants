import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import MobileNav from "@/components/admin/mobile-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Mail, Phone, Globe, Calendar, Filter, Download, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { AdminUser, Consultation } from "@shared/schema";

export default function LeadsManagement() {
  const [, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedLead, setSelectedLead] = useState<Consultation | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const queryClient = useQueryClient();

  // Check authentication
  useEffect(() => {
    let token = localStorage.getItem("adminToken");
    let user = localStorage.getItem("adminUser");
    
    if (!token || !user) {
      token = localStorage.getItem("userToken");
      user = localStorage.getItem("user");
    }
    
    if (!token || !user) {
      setLocation("/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      setCurrentUser(userData);
      setAuthChecked(true);
    } catch {
      setLocation("/login");
    }
  }, [setLocation]);

  // Fetch all consultations/leads
  const { data: leads = [], isLoading } = useQuery<Consultation[]>({
    queryKey: ["/api/consultations"],
    enabled: authChecked && !!currentUser,
  });

  // Fetch eligible users for lead reassignment
  const { data: eligibleUsers = [] } = useQuery<AdminUser[]>({
    queryKey: ["/api/admin/users/eligible-for-leads"],
    enabled: authChecked && !!currentUser,
  });

  // Update consultation status mutation
  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      return await apiRequest('PATCH', `/api/consultations/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
  });

  // Reassign lead mutation
  const reassignLeadMutation = useMutation({
    mutationFn: async ({ id, userId }: { id: number; userId: number }) => {
      return await apiRequest('PATCH', `/api/consultations/${id}/assign`, { userId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
  });

  // Bulk delete mutation
  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      return await apiRequest('POST', `/api/consultations/bulk-delete`, { ids });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
      setSelectedIds([]);
    },
  });

  // Selection handlers
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredLeads.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredLeads.map(lead => lead.id));
    }
  };

  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) return;
    if (confirm(`Are you sure you want to delete ${selectedIds.length} lead(s)?`)) {
      bulkDeleteMutation.mutate(selectedIds);
    }
  };

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSource = sourceFilter === "all" || lead.source === sourceFilter;
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const displayName = lead.fullName || lead.name || "";
    const displayPhone = lead.whatsappNumber || lead.phone || "";
    const matchesSearch = searchQuery === "" || 
      displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      displayPhone.includes(searchQuery) ||
      (lead.city || "").toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSource && matchesStatus && matchesSearch;
  });

  // Get unique sources
  const uniqueSources = Array.from(new Set(leads.map(lead => lead.source || "website")));

  // Single delete mutation
  const singleDeleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest('DELETE', `/api/consultations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
  });

  const handleSingleDelete = (id: number, name: string) => {
    if (confirm(`Are you sure you want to delete the lead from ${name}?`)) {
      singleDeleteMutation.mutate(id);
    }
  };

  // Check if user is admin
  const isAdmin = currentUser?.roles?.includes('admin');

  // Export to CSV
  const exportToCSV = () => {
    const headers = ["Date", "Name", "City", "WhatsApp", "Email", "Language Test", "Test Type", "Test Score", "Countries", "Source", "Status", "Assigned To"];
    const rows = filteredLeads.map(lead => [
      format(new Date(lead.createdAt!), "yyyy-MM-dd HH:mm"),
      lead.fullName || lead.name || "",
      lead.city || "",
      lead.whatsappNumber || lead.phone || "",
      lead.email || "",
      lead.hasLanguageTest || "",
      lead.testType || "",
      lead.testScore || "",
      (lead.interestedCountries || []).join("; ") || lead.preferredCountry || "",
      lead.source || "website",
      lead.status || "pending",
      lead.assignedTo || "Unassigned"
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `leads-${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getSourceBadge = (source: string | null | undefined) => {
    const sourceMap: Record<string, { label: string; color: string }> = {
      "homepage": { label: "Homepage", color: "bg-blue-100 text-blue-700" },
      "ielts": { label: "IELTS", color: "bg-purple-100 text-purple-700" },
      "pte": { label: "PTE", color: "bg-pink-100 text-pink-700" },
      "toefl": { label: "TOEFL", color: "bg-orange-100 text-orange-700" },
      "duolingo": { label: "Duolingo", color: "bg-green-100 text-green-700" },
      "usa": { label: "USA", color: "bg-indigo-100 text-indigo-700" },
      "uk": { label: "UK", color: "bg-red-100 text-red-700" },
      "canada": { label: "Canada", color: "bg-red-100 text-red-700" },
      "finland": { label: "Finland", color: "bg-blue-100 text-blue-700" },
      "australia": { label: "Australia", color: "bg-yellow-100 text-yellow-700" },
      "belgium": { label: "Belgium", color: "bg-yellow-100 text-yellow-700" },
      "turkey": { label: "Turkey", color: "bg-red-100 text-red-700" },
      "lahore": { label: "Lahore", color: "bg-emerald-100 text-emerald-700" },
      "karachi": { label: "Karachi", color: "bg-emerald-100 text-emerald-700" },
      "islamabad": { label: "Islamabad", color: "bg-emerald-100 text-emerald-700" },
      "bahawalpur": { label: "Bahawalpur", color: "bg-emerald-100 text-emerald-700" },
      "website": { label: "Website", color: "bg-gray-100 text-gray-700" },
    };

    const sourceKey = (source || "website").toLowerCase();
    const sourceInfo = sourceMap[sourceKey] || { label: source || "Website", color: "bg-gray-100 text-gray-700" };

    return (
      <Badge className={`${sourceInfo.color} border-0`}>
        {sourceInfo.label}
      </Badge>
    );
  };

  const getStatusBadge = (status: string | null | undefined) => {
    const statusMap: Record<string, string> = {
      "pending": "bg-yellow-100 text-yellow-700",
      "contacted": "bg-blue-100 text-blue-700",
      "converted": "bg-green-100 text-green-700",
      "interested": "bg-purple-100 text-purple-700",
      "not_interested": "bg-red-100 text-red-700",
    };

    const statusColor = statusMap[status || "pending"] || "bg-gray-100 text-gray-700";

    return (
      <Badge className={`${statusColor} border-0 capitalize`}>
        {status?.replace('_', ' ') || "pending"}
      </Badge>
    );
  };

  const handleRowClick = (lead: Consultation) => {
    setSelectedLead(lead);
    setIsDetailsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30">
      <AdminHeader currentUser={currentUser} title="Leads" />
      
      <div className="flex pt-16">
        <AdminSidebar currentUser={currentUser} />
        
        <main className="flex-1 p-6 lg:ml-64">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#1D50C9] bg-clip-text text-transparent">Leads</h1>
              <p className="text-gray-600 mt-1 font-medium">
                View and manage all consultation leads from your website
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Total Leads</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">{leads.length}</p>
                    </div>
                    <div className="p-2 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Pending</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                        {leads.filter(l => l.status === "pending").length}
                      </p>
                    </div>
                    <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Contacted</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {leads.filter(l => l.status === "contacted").length}
                      </p>
                    </div>
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Converted</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {leads.filter(l => l.status === "converted").length}
                      </p>
                    </div>
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search by name, email, or phone..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                      data-testid="input-search-leads"
                    />
                  </div>

                  <Select value={sourceFilter} onValueChange={setSourceFilter}>
                    <SelectTrigger data-testid="select-source-filter">
                      <SelectValue placeholder="Filter by source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sources</SelectItem>
                      {uniqueSources.map((source) => (
                        <SelectItem key={source} value={source}>
                          {source.charAt(0).toUpperCase() + source.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger data-testid="select-status-filter">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="interested">Interested</SelectItem>
                      <SelectItem value="not_interested">Not Interested</SelectItem>
                    </SelectContent>
                  </Select>

                  <button
                    onClick={exportToCSV}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    data-testid="button-export-csv"
                  >
                    <Download className="w-4 h-4" />
                    Export CSV
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Leads Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    {filteredLeads.length} Lead{filteredLeads.length !== 1 ? 's' : ''}
                    {selectedIds.length > 0 && (
                      <span className="text-sm text-gray-500">
                        ({selectedIds.length} selected)
                      </span>
                    )}
                  </CardTitle>
                  {selectedIds.length > 0 && isAdmin && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={handleBulkDelete}
                      disabled={bulkDeleteMutation.isPending}
                      data-testid="button-bulk-delete"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Selected ({selectedIds.length})
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Loading leads...</p>
                  </div>
                ) : filteredLeads.length === 0 ? (
                  <div className="text-center py-8">
                    <Mail className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                    <p className="text-gray-500">No leads found</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          {isAdmin && (
                            <TableHead className="w-12">
                              <Checkbox
                                checked={selectedIds.length === filteredLeads.length && filteredLeads.length > 0}
                                onCheckedChange={toggleSelectAll}
                                data-testid="checkbox-select-all"
                              />
                            </TableHead>
                          )}
                          <TableHead>Date</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>City</TableHead>
                          <TableHead>WhatsApp</TableHead>
                          <TableHead>Test</TableHead>
                          <TableHead>Countries</TableHead>
                          <TableHead>Source</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Assign To</TableHead>
                          {isAdmin && <TableHead className="w-20">Actions</TableHead>}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredLeads.map((lead) => (
                          <TableRow 
                            key={lead.id}
                            onClick={() => handleRowClick(lead)}
                            className="cursor-pointer hover:bg-blue-50/50"
                            data-testid={`row-lead-${lead.id}`}
                          >
                            {isAdmin && (
                              <TableCell onClick={(e) => e.stopPropagation()}>
                                <Checkbox
                                  checked={selectedIds.includes(lead.id)}
                                  onCheckedChange={() => toggleSelect(lead.id)}
                                  data-testid={`checkbox-lead-${lead.id}`}
                                />
                              </TableCell>
                            )}
                            <TableCell className="text-sm text-gray-600">
                              {format(new Date(lead.createdAt!), "MMM d, h:mm a")}
                            </TableCell>
                            <TableCell className="font-medium">{lead.fullName || lead.name || "N/A"}</TableCell>
                            <TableCell className="text-sm">{lead.city || "N/A"}</TableCell>
                            <TableCell className="text-sm">{lead.whatsappNumber || lead.phone || "N/A"}</TableCell>
                            <TableCell className="text-sm">
                              {lead.hasLanguageTest === "yes" ? (
                                <div>
                                  <span className="font-medium">{lead.testType || "N/A"}</span>
                                  {lead.testScore && <span className="text-gray-500"> ({lead.testScore})</span>}
                                </div>
                              ) : "No"}
                            </TableCell>
                            <TableCell className="text-sm">
                              {(lead.interestedCountries && lead.interestedCountries.length > 0) 
                                ? lead.interestedCountries.slice(0, 2).join(", ") + (lead.interestedCountries.length > 2 ? "..." : "")
                                : (lead.preferredCountry || "N/A")}
                            </TableCell>
                            <TableCell>{getSourceBadge(lead.source)}</TableCell>
                            <TableCell onClick={(e) => e.stopPropagation()}>
                              <Select
                                value={lead.status || "pending"}
                                onValueChange={(value) => updateStatusMutation.mutate({ id: lead.id, status: value })}
                                disabled={updateStatusMutation.isPending}
                              >
                                <SelectTrigger className="w-[160px] h-8">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                      Pending
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="contacted">
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                      Contacted
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="converted">
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                      Converted
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="interested">
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                      Interested
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="not_interested">
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                      Not Interested
                                    </div>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell onClick={(e) => e.stopPropagation()}>
                              <Select
                                onValueChange={(value) => reassignLeadMutation.mutate({ id: lead.id, userId: parseInt(value) })}
                                disabled={reassignLeadMutation.isPending || eligibleUsers.length === 0}
                              >
                                <SelectTrigger className="w-[180px] h-8" data-testid={`select-assign-${lead.id}`}>
                                  <SelectValue placeholder="Reassign..." />
                                </SelectTrigger>
                                <SelectContent>
                                  {eligibleUsers.map((user) => (
                                    <SelectItem key={user.id} value={user.id.toString()}>
                                      {user.username}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </TableCell>
                            {isAdmin && (
                              <TableCell onClick={(e) => e.stopPropagation()}>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleSingleDelete(lead.id, lead.fullName || lead.name || "this lead")}
                                  disabled={singleDeleteMutation.isPending}
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                  data-testid={`button-delete-${lead.id}`}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </TableCell>
                            )}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <MobileNav currentUser={currentUser} />

      {/* Lead Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Lead Details</DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Complete information about this lead submission
            </DialogDescription>
          </DialogHeader>
          
          {selectedLead && (
            <div className="space-y-6 mt-2">
              {/* Personal Information */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-gray-900">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Name</p>
                      <p className="font-medium text-gray-900 truncate">{selectedLead.fullName || selectedLead.name || "N/A"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">City</p>
                      <p className="font-medium text-gray-900">{selectedLead.city || "N/A"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="font-medium text-gray-900 truncate">{selectedLead.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">WhatsApp</p>
                      <p className="font-medium text-gray-900">{selectedLead.whatsappNumber || selectedLead.phone || "N/A"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Language Test</p>
                      <p className="font-medium text-gray-900">
                        {selectedLead.hasLanguageTest === "yes" 
                          ? `Yes - ${selectedLead.testType || "N/A"}${selectedLead.testScore ? ` (${selectedLead.testScore})` : ""}`
                          : "No"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Interested Countries</p>
                      <p className="font-medium text-gray-900">
                        {(selectedLead.interestedCountries && selectedLead.interestedCountries.length > 0)
                          ? selectedLead.interestedCountries.join(", ")
                          : (selectedLead.preferredCountry || "N/A")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submission Details */}
              <div className="space-y-3 border-t pt-4">
                <h3 className="text-base font-semibold text-gray-900">Submission Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Registration Date</p>
                      <p className="font-medium text-gray-900">
                        {format(new Date(selectedLead.createdAt!), "MMM d, yyyy 'at' h:mm a")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Source</p>
                      <div className="mt-0.5">{getSourceBadge(selectedLead.source)}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Status</p>
                      <div className="mt-0.5">{getStatusBadge(selectedLead.status)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              {selectedLead.message && (
                <div className="space-y-3 border-t pt-4">
                  <h3 className="text-base font-semibold text-gray-900">Message</h3>
                  <div className="p-3 bg-gray-50 rounded-md border">
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedLead.message}</p>
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  onClick={() => window.location.href = `mailto:${selectedLead.email}`}
                  className="flex-1 bg-[#1D50C9] text-white relative overflow-hidden group transition-transform hover:scale-105"
                  data-testid="button-send-email"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                  <Mail className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">Send Email</span>
                </Button>
                <Button
                  onClick={() => {
                    const phone = selectedLead.whatsappNumber || selectedLead.phone;
                    if (phone) {
                      window.location.href = `https://wa.me/${phone.replace(/\+/g, '').replace(/\s/g, '')}`;
                    }
                  }}
                  variant="outline"
                  className="flex-1 border-gray-300 relative overflow-hidden group transition-transform hover:scale-105 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                  data-testid="button-whatsapp-now"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                  <Phone className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">WhatsApp</span>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
