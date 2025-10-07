import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Users, 
  FileText, 
  Tag, 
  BarChart3,
  LogOut,
  Image,
  Calendar,
  Trash2,
  QrCode,
  ClipboardList
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { canManageUsers } from "@/lib/permissions";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: BarChart3,
    description: "Overview and analytics"
  },
  {
    title: "All Posts",
    href: "/admin/posts",
    icon: FileText,
    description: "Manage all blog posts"
  },
  {
    title: "Events",
    href: "/admin/events",
    icon: Calendar,
    description: "Manage events and expos"
  },
  {
    title: "QR Scanner",
    href: "/admin/qr-scanner",
    icon: QrCode,
    description: "Scan attendee QR codes"
  },
  {
    title: "Event Registrations",
    href: "/admin/event-registrations",
    icon: ClipboardList,
    description: "View all event registrations"
  },
  {
    title: "Media",
    href: "/admin/media",
    icon: Image,
    description: "Upload and manage media files"
  },
  {
    title: "Trash",
    href: "/admin/trash",
    icon: Trash2,
    description: "Manage deleted items"
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: Users,
    description: "Manage users and permissions"
  },
  {
    title: "Post Assignments",
    href: "/admin/post-assignments",
    icon: FileText,
    description: "Manage post access control"
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: Tag,
    description: "Manage blog categories"
  }
];

interface AdminSidebarProps {
  currentUser: any;
}

export default function AdminSidebar({ currentUser }: AdminSidebarProps) {
  const [location] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    window.location.href = "/admin/login";
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-[#1D50C9] to-[#1845B3] text-white shadow-xl z-50">
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Admin Panel</h1>
            <p className="text-blue-100 text-sm">Content Management</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">
              {currentUser?.username?.charAt(0)?.toUpperCase() || 'A'}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{currentUser?.username || 'Admin'}</p>
            <p className="text-blue-100 text-xs capitalize">{currentUser?.role || 'Admin'}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems
          .filter((item) => {
            // Always show Dashboard, All Posts, Events, Media, and QR Scanner for all users
            if (item.href === "/admin/dashboard" || item.href === "/admin/posts" || item.href === "/admin/events" || item.href === "/admin/media" || item.href === "/admin/qr-scanner") {
              return true;
            }
            // Show Event Registrations and Trash only for admin users (requires management permissions)
            if (item.href === "/admin/event-registrations" || item.href === "/admin/trash") {
              return canManageUsers(currentUser);
            }
            // Only show admin functions for users with management permissions
            return canManageUsers(currentUser);
          })
          .map((item) => {
            const isActive = location === item.href || 
              (item.href === "/admin/dashboard" && location === "/dashboard");
            const Icon = item.icon;
            
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer",
                    isActive
                      ? "bg-white/20 text-white shadow-lg"
                      : "text-blue-100 hover:bg-white/10 hover:text-white"
                  )}
                  data-testid={`sidebar-link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Icon className="w-5 h-5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs opacity-80">{item.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/20">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full text-white border-white/20 hover:bg-white/10"
          data-testid="button-logout"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
}