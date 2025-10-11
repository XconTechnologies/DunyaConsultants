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
  Mail,
  FileEdit
} from "lucide-react";
import { 
  canAccessPosts,
  canManageOwnMedia,
  canAccessManagedEvents,
  canManageAssignedLeads,
  canAccessOwnQRCodes,
  canAssignPosts,
  isAdmin
} from "@/lib/permissions";
import { useQuery } from "@tanstack/react-query";
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
    title: "Forms",
    href: "/admin/form-management",
    icon: FileEdit
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

  // Fetch assignment status for current user
  const { data: assignmentStatus } = useQuery({
    queryKey: ['/api/admin/me/assignment-status'],
    enabled: !!currentUser,
  });

  const hasUserPostAssignments = assignmentStatus?.hasPostAssignments || false;
  const hasUserEventAssignments = assignmentStatus?.hasEventAssignments || false;
  const hasUserLeadAssignments = assignmentStatus?.hasLeadAssignments || false;
  const hasUserMedia = assignmentStatus?.hasMedia || false;
  const hasUserQRCodes = assignmentStatus?.hasQRCodes || false;

  const visibleItems = navItems.filter((item) => {
    // Dashboard is always visible
    if (item.href === "/admin/dashboard") {
      return true;
    }
    
    // Posts: Show if user has post assignments OR is admin
    if (item.href === "/admin/posts") {
      return canAccessPosts(currentUser, hasUserPostAssignments);
    }
    
    // Categories: Show if user has post assignments OR is admin
    if (item.href === "/admin/categories") {
      return canAccessPosts(currentUser, hasUserPostAssignments);
    }
    
    // Media: Show if user has media uploads OR has post assignments OR is admin
    if (item.href === "/admin/media") {
      return canManageOwnMedia(currentUser, hasUserMedia, hasUserPostAssignments);
    }
    
    // Events and registrations: Show if user has event assignments OR is admin
    if (item.href === "/admin/events" || item.href === "/admin/event-registrations") {
      return canAccessManagedEvents(currentUser, hasUserEventAssignments);
    }
    
    // QR Scanner: Show if user has event assignments OR is admin
    if (item.href === "/admin/qr-scanner") {
      return canAccessManagedEvents(currentUser, hasUserEventAssignments);
    }
    
    // QR codes: Show if user has QR codes OR is admin
    if (item.href === "/admin/qr-codes") {
      return canAccessOwnQRCodes(currentUser, hasUserQRCodes);
    }
    
    // Leads: Show if user has lead assignments OR is admin
    if (item.href === "/admin/leads") {
      return canManageAssignedLeads(currentUser, hasUserLeadAssignments);
    }
    
    // Lead Assignments: Show if user has lead assignments OR is admin
    if (item.href === "/admin/lead-assignments") {
      return canManageAssignedLeads(currentUser, hasUserLeadAssignments);
    }
    
    // Post Assignments: For post managers (can assign posts) OR admin
    if (item.href === "/admin/post-assignments") {
      return canAssignPosts(currentUser);
    }
    
    // Users: Admin-only (post managers use Post Assignments page instead)
    if (item.href === "/admin/users") {
      return isAdmin(currentUser);
    }
    
    // Activity: Admin-only
    if (item.href === "/admin/user-activity") {
      return isAdmin(currentUser);
    }
    
    // Forms: Admin-only
    if (item.href === "/admin/form-management") {
      return isAdmin(currentUser);
    }
    
    // Backup and Trash: Admin-only
    if (item.href === "/admin/backup" || item.href === "/admin/trash") {
      return isAdmin(currentUser);
    }
    
    // Default: hide
    return false;
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
