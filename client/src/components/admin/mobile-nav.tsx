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
  Activity,
  Database,
  Mail
} from "lucide-react";
import { 
  canManageUsers, 
  canAccessEvents, 
  canManageLeads, 
  canAccessQRScanner,
  canManageMedia,
  canManageCategories,
  isAdmin
} from "@/lib/permissions";
import type { AdminUser } from "@shared/schema";

interface NavItem {
  title: string;
  href: string;
  icon: any;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: BarChart3
  },
  {
    title: "Posts",
    href: "/admin/posts",
    icon: FileText
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: Tag
  },
  {
    title: "Media",
    href: "/admin/media",
    icon: Image
  },
  {
    title: "Events",
    href: "/admin/events",
    icon: Calendar
  },
  {
    title: "Registrations",
    href: "/admin/event-registrations",
    icon: ClipboardList
  },
  {
    title: "QR Scanner",
    href: "/admin/qr-scanner",
    icon: QrCode
  },
  {
    title: "Post Assigns",
    href: "/admin/post-assignments",
    icon: FileText
  },
  {
    title: "Lead Assigns",
    href: "/admin/lead-assignments",
    icon: Mail
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users
  },
  {
    title: "Activity",
    href: "/admin/user-activity",
    icon: Activity
  },
  {
    title: "Leads",
    href: "/admin/leads",
    icon: Mail
  },
  {
    title: "Backup",
    href: "/admin/backup",
    icon: Database
  },
  {
    title: "QR Codes",
    href: "/admin/qr-codes",
    icon: QrCode
  },
  {
    title: "Trash",
    href: "/admin/trash",
    icon: Trash2
  }
];

interface MobileNavProps {
  currentUser: AdminUser | null;
}

export default function MobileNav({ currentUser }: MobileNavProps) {
  const [location] = useLocation();

  const visibleItems = navItems.filter((item) => {
    // Dashboard and posts are always visible
    if (item.href === "/admin/dashboard" || item.href === "/admin/posts") {
      return true;
    }
    
    // Categories require canManageCategories permission
    if (item.href === "/admin/categories") {
      return canManageCategories(currentUser) || isAdmin(currentUser);
    }
    
    // Events and registrations require canAccessEvents permission
    if (item.href === "/admin/events" || item.href === "/admin/event-registrations") {
      return canAccessEvents(currentUser) || isAdmin(currentUser);
    }
    
    // Media requires canManageMedia permission
    if (item.href === "/admin/media") {
      return canManageMedia(currentUser) || isAdmin(currentUser);
    }
    
    // QR scanner and QR codes require canAccessQRScanner permission
    if (item.href === "/admin/qr-scanner" || item.href === "/admin/qr-codes") {
      return canAccessQRScanner(currentUser) || isAdmin(currentUser);
    }
    
    // Leads and lead assignments require canManageLeads permission
    if (item.href === "/admin/leads" || item.href === "/admin/lead-assignments") {
      return canManageLeads(currentUser) || isAdmin(currentUser);
    }
    
    // Other items (Users, Post Assigns, Event Assigns, Activity, Backup, Trash) require user management permission
    return canManageUsers(currentUser) || isAdmin(currentUser);
  });

  return (
    <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-1 px-2 py-2 min-w-max">
          {visibleItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer min-w-[70px]",
                    isActive
                      ? "bg-[#1D50C9] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                  data-testid={`mobile-nav-${item.title.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium whitespace-nowrap">{item.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
