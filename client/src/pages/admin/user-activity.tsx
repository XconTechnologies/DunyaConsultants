import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
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
import { 
  Activity, 
  Clock, 
  LogIn, 
  LogOut, 
  User,
  UserPlus,
  UserX,
  FileEdit,
  Trash2,
  Upload,
  Eye,
  Calendar
} from "lucide-react";
import { format } from "date-fns";
import type { AuditLog, AdminUser } from "@shared/schema";
import { getRoleBadges } from "@/lib/roleHelpers";

// Action icons and colors
const ACTION_CONFIG: Record<string, { icon: any; color: string; label: string }> = {
  login: { icon: LogIn, color: "text-green-600", label: "Logged In" },
  logout: { icon: LogOut, color: "text-gray-600", label: "Logged Out" },
  create: { icon: UserPlus, color: "text-blue-600", label: "Created" },
  update: { icon: FileEdit, color: "text-orange-600", label: "Updated" },
  delete: { icon: UserX, color: "text-red-600", label: "Deleted" },
  publish: { icon: Upload, color: "text-purple-600", label: "Published" },
  view: { icon: Eye, color: "text-gray-500", label: "Viewed" },
};

// Activity item component
function ActivityItem({ log, users }: { log: AuditLog; users: AdminUser[] }) {
  const actor = users.find(u => u.id === log.actorId);
  const config = ACTION_CONFIG[log.action] || { icon: Activity, color: "text-gray-500", label: log.action };
  const Icon = config.icon;

  return (
    <div className="flex gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50">
      <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${config.color}`}>
        <Icon className="w-5 h-5" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-gray-900">
              {actor?.username || `User ${log.actorId}`}
              <span className="ml-2 text-gray-600 font-normal">
                {config.label.toLowerCase()} {log.entity}
              </span>
            </p>
            
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="text-xs">
                {Array.isArray(log.role) ? log.role.join(', ') : log.role}
              </Badge>
              
              {log.entityId && (
                <span className="text-xs text-gray-500">
                  ID: {log.entityId}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            {format(new Date(log.createdAt), "MMM d, h:mm a")}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function UserActivity() {
  const [, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string>("all");
  const [limit, setLimit] = useState<string>("100");

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

  // Fetch all users for filter
  const { data: users = [] } = useQuery<AdminUser[]>({
    queryKey: ["/api/admin/users"],
    enabled: authChecked && !!currentUser,
  });

  // Fetch activity logs
  const { data: activities = [], isLoading } = useQuery<AuditLog[]>({
    queryKey: ["/api/admin/activity-logs", selectedUserId, limit],
    enabled: authChecked && !!currentUser,
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedUserId !== "all") params.append("userId", selectedUserId);
      params.append("limit", limit);
      
      const response = await fetch(`/api/admin/activity-logs?${params}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      
      if (!response.ok) throw new Error("Failed to fetch activity logs");
      return response.json();
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader currentUser={currentUser} title="User Activity" />
      
      <div className="flex pt-16">
        <AdminSidebar currentUser={currentUser} />
        
        <main className="flex-1 p-6 lg:ml-64">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Activity className="w-7 h-7" />
                User Activity
              </h1>
              <p className="text-gray-600 mt-1">
                Track user logins, logouts, and system activities
              </p>
            </div>

            {/* Filters */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* User Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      User
                    </label>
                    <Select value={selectedUserId} onValueChange={setSelectedUserId}>
                      <SelectTrigger data-testid="select-user-filter">
                        <SelectValue placeholder="All Users" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        {users.map((user) => (
                          <SelectItem key={user.id} value={user.id.toString()}>
                            {user.username} ({Array.isArray(user.roles) ? user.roles.join(', ') : (user as any).role || 'No role'})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Limit Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Show Last
                    </label>
                    <Select value={limit} onValueChange={setLimit}>
                      <SelectTrigger data-testid="select-limit-filter">
                        <SelectValue placeholder="100 activities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50">50 activities</SelectItem>
                        <SelectItem value="100">100 activities</SelectItem>
                        <SelectItem value="200">200 activities</SelectItem>
                        <SelectItem value="500">500 activities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Activity Timeline</CardTitle>
                <p className="text-sm text-gray-600">
                  {activities.length} {activities.length === 1 ? 'activity' : 'activities'} found
                </p>
              </CardHeader>
              <CardContent className="p-0">
                {isLoading ? (
                  <div className="p-8 text-center text-gray-500">
                    <Activity className="w-8 h-8 animate-spin mx-auto mb-2" />
                    <p>Loading activity logs...</p>
                  </div>
                ) : activities.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <Activity className="w-12 h-12 mx-auto mb-2 opacity-20" />
                    <p>No activities found</p>
                  </div>
                ) : (
                  <div className="divide-y">
                    {activities.map((log) => (
                      <ActivityItem key={log.id} log={log} users={users} />
                    ))}
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
