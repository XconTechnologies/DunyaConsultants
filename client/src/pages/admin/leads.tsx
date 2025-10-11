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
import { Search, Mail, Phone, Globe, Calendar, Filter, Download } from "lucide-react";
import { format } from "date-fns";
import type { AdminUser, Consultation } from "@shared/schema";

export default function LeadsManagement() {
  const [, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
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

  // Update consultation status mutation
  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      return await apiRequest(`/api/consultations/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
  });

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSource = sourceFilter === "all" || lead.source === sourceFilter;
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesSearch = searchQuery === "" || 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery);
    
    return matchesSource && matchesStatus && matchesSearch;
  });

  // Get unique sources
  const uniqueSources = Array.from(new Set(leads.map(lead => lead.source || "website")));

  // Export to CSV
  const exportToCSV = () => {
    const headers = ["Date", "Name", "Email", "Phone", "Country", "Source", "Status"];
    const rows = filteredLeads.map(lead => [
      format(new Date(lead.createdAt!), "yyyy-MM-dd HH:mm"),
      lead.name,
      lead.email,
      lead.phone,
      lead.preferredCountry,
      lead.source || "website",
      lead.status || "pending"
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

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader currentUser={currentUser} title="Form Submissions" />
      
      <div className="flex pt-16">
        <AdminSidebar currentUser={currentUser} />
        
        <main className="flex-1 p-6 lg:ml-64">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Form Submissions</h1>
              <p className="text-gray-600 mt-1">
                View and manage all consultation form submissions from your website
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Leads</p>
                      <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
                    </div>
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Pending</p>
                      <p className="text-2xl font-bold text-yellow-600">
                        {leads.filter(l => l.status === "pending").length}
                      </p>
                    </div>
                    <Calendar className="w-8 h-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Contacted</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {leads.filter(l => l.status === "contacted").length}
                      </p>
                    </div>
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Converted</p>
                      <p className="text-2xl font-bold text-green-600">
                        {leads.filter(l => l.status === "converted").length}
                      </p>
                    </div>
                    <Globe className="w-8 h-8 text-green-600" />
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
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  {filteredLeads.length} Lead{filteredLeads.length !== 1 ? 's' : ''}
                </CardTitle>
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
                          <TableHead>Date</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Country</TableHead>
                          <TableHead>Source</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredLeads.map((lead) => (
                          <TableRow key={lead.id}>
                            <TableCell className="text-sm text-gray-600">
                              {format(new Date(lead.createdAt!), "MMM d, h:mm a")}
                            </TableCell>
                            <TableCell className="font-medium">{lead.name}</TableCell>
                            <TableCell className="text-sm text-gray-600">{lead.email}</TableCell>
                            <TableCell className="text-sm text-gray-600">{lead.phone}</TableCell>
                            <TableCell className="text-sm">{lead.preferredCountry}</TableCell>
                            <TableCell>{getSourceBadge(lead.source)}</TableCell>
                            <TableCell>
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
    </div>
  );
}
