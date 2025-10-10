import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Users, 
  FileText, 
  Tag, 
  BarChart3,
  Image,
  Calendar,
  CalendarCheck,
  Trash2,
  QrCode,
  ClipboardList,
  X,
  ChevronDown,
  ChevronRight,
  Activity,
  Database,
  Mail,
  FileEdit
} from "lucide-react";
import { canManageUsers } from "@/lib/permissions";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SidebarSubItem {
  title: string;
  href: string;
  icon: any;
  description: string;
}

interface SidebarItem {
  title: string;
  href?: string;
  icon: any;
  description: string;
  subItems?: SidebarSubItem[];
}

const sidebarItems: SidebarItem[] = [
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
    description: "Manage all blog posts",
    subItems: [
      {
        title: "Categories",
        href: "/admin/categories",
        icon: Tag,
        description: "Manage blog categories"
      }
    ]
  },
  {
    title: "Media",
    href: "/admin/media",
    icon: Image,
    description: "Upload and manage media files"
  },
  {
    title: "Events",
    href: "/admin/events",
    icon: Calendar,
    description: "Manage events and expos",
    subItems: [
      {
        title: "Event Registrations",
        href: "/admin/event-registrations",
        icon: ClipboardList,
        description: "View all event registrations"
      },
      {
        title: "QR Scanner",
        href: "/admin/qr-scanner",
        icon: QrCode,
        description: "Scan attendee QR codes"
      }
    ]
  },
  {
    title: "Post Assignments",
    href: "/admin/post-assignments",
    icon: FileText,
    description: "Manage post access control"
  },
  {
    title: "Event Assignments",
    href: "/admin/event-assignments",
    icon: CalendarCheck,
    description: "Manage event access control"
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
    description: "Manage users and permissions",
    subItems: [
      {
        title: "User Activity",
        href: "/admin/user-activity",
        icon: Activity,
        description: "Track user login/logout"
      }
    ]
  },
  {
    title: "Form Management",
    href: "/admin/form-management",
    icon: FileEdit,
    description: "Create and manage custom forms"
  },
  {
    title: "Form Submissions",
    href: "/admin/leads",
    icon: Mail,
    description: "View all form submissions",
    subItems: [
      {
        title: "Form Assignments",
        href: "/admin/lead-assignments",
        icon: Mail,
        description: "Assign forms to users"
      }
    ]
  },
  {
    title: "QR Codes",
    href: "/admin/qr-codes",
    icon: QrCode,
    description: "Generate custom QR codes"
  },
  {
    title: "Backup",
    href: "/admin/backup",
    icon: Database,
    description: "Database backup management"
  },
  {
    title: "Trash",
    href: "/admin/trash",
    icon: Trash2,
    description: "Manage deleted items"
  }
];

interface AdminSidebarProps {
  currentUser: any;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminSidebar({ currentUser, isOpen = true, onClose }: AdminSidebarProps) {
  const [location] = useLocation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(["All Posts", "Events", "Form Submissions"]));

  const toggleItem = (title: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedItems(newExpanded);
  };

  const isItemOrSubItemActive = (item: SidebarItem) => {
    if (item.href && (location === item.href || (item.href === "/admin/dashboard" && location === "/dashboard"))) {
      return true;
    }
    if (item.subItems) {
      return item.subItems.some(subItem => location === subItem.href);
    }
    return false;
  };

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
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarItems
            .filter((item) => {
              // Dashboard, posts, events, media, form management, form submissions, qr-codes are always visible
              if (item.href === "/admin/dashboard" || item.href === "/admin/posts" || 
                  item.href === "/admin/events" || item.href === "/admin/media" ||
                  item.href === "/admin/form-management" || item.href === "/admin/leads" || 
                  item.href === "/admin/qr-codes") {
                return true;
              }
              // Other items require user management permission
              return canManageUsers(currentUser);
            })
            .map((item) => {
              const isActive = isItemOrSubItemActive(item);
              const Icon = item.icon;
              const isExpanded = expandedItems.has(item.title);
              const hasSubItems = item.subItems && item.subItems.length > 0;
              
              return (
                <div key={item.title}>
                  {/* Main item */}
                  {item.href ? (
                    <div className="relative">
                      <Link href={item.href}>
                        <div
                          onClick={onClose}
                          className={cn(
                            "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer group",
                            isActive
                              ? "bg-white/20 text-white shadow-lg"
                              : "text-blue-100 hover:bg-white/10 hover:text-white"
                          )}
                          data-testid={`sidebar-link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{item.title}</p>
                          </div>
                          {hasSubItems && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleItem(item.title);
                              }}
                              className="p-1 hover:bg-white/10 rounded"
                            >
                              {isExpanded ? 
                                <ChevronDown className="w-4 h-4 flex-shrink-0" /> : 
                                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                              }
                            </button>
                          )}
                        </div>
                      </Link>
                    </div>
                  ) : (
                    <div
                      onClick={() => hasSubItems && toggleItem(item.title)}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer group",
                        isActive
                          ? "bg-white/20 text-white shadow-lg"
                          : "text-blue-100 hover:bg-white/10 hover:text-white"
                      )}
                      data-testid={`sidebar-link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.title}</p>
                      </div>
                      {hasSubItems && (
                        isExpanded ? 
                          <ChevronDown className="w-4 h-4 flex-shrink-0" /> : 
                          <ChevronRight className="w-4 h-4 flex-shrink-0" />
                      )}
                    </div>
                  )}

                  {/* Sub items */}
                  {hasSubItems && isExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems!.map((subItem) => {
                        const isSubActive = location === subItem.href;
                        const SubIcon = subItem.icon;
                        
                        return (
                          <Link key={subItem.href} href={subItem.href}>
                            <div
                              onClick={onClose}
                              className={cn(
                                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer",
                                isSubActive
                                  ? "bg-white/20 text-white shadow-md"
                                  : "text-blue-100 hover:bg-white/10 hover:text-white"
                              )}
                              data-testid={`sidebar-link-${subItem.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <SubIcon className="w-4 h-4 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{subItem.title}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
        </nav>
      </div>
    </>
  );
}
