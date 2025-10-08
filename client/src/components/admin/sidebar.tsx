import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Users, 
  FileText, 
  Tag, 
  BarChart3,
  Image,
  Calendar,
  Trash2,
  QrCode,
  ClipboardList,
  X
} from "lucide-react";
import { canManageUsers } from "@/lib/permissions";
import { Button } from "@/components/ui/button";

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
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminSidebar({ currentUser, isOpen = true, onClose }: AdminSidebarProps) {
  const [location] = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          data-testid="sidebar-overlay"
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-[#1D50C9] to-[#1845B3] text-white shadow-xl z-50 transition-transform duration-300 ease-in-out",
        !isOpen && "-translate-x-full lg:translate-x-0"
      )}>
        {/* Header */}
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Admin Panel</h1>
                <p className="text-blue-100 text-sm">Content Management</p>
              </div>
            </div>
            {/* Close button for mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="lg:hidden text-white hover:bg-white/10"
              data-testid="button-close-sidebar"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sidebarItems
            .filter((item) => {
              if (item.href === "/admin/dashboard" || item.href === "/admin/posts" || item.href === "/admin/events" || item.href === "/admin/media" || item.href === "/admin/qr-scanner") {
                return true;
              }
              if (item.href === "/admin/event-registrations" || item.href === "/admin/trash") {
                return canManageUsers(currentUser);
              }
              return canManageUsers(currentUser);
            })
            .map((item) => {
              const isActive = location === item.href || 
                (item.href === "/admin/dashboard" && location === "/dashboard");
              const Icon = item.icon;
              
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    onClick={onClose}
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
      </div>
    </>
  );
}
