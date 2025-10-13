import { 
  LayoutDashboard, 
  FileText, 
  Upload, 
  QrCode, 
  Calendar, 
  Users, 
  UserPlus,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  ChevronDown,
  ChevronRight,
  Grid,
  BarChart3,
  Folder,
  FileQuestion,
  ClipboardList,
  Database,
  Mail,
  FileEdit
} from "lucide-react";
import { 
  isAdmin,
  hasRole
} from "@/lib/permissions";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface NavItem {
  href: string;
  icon: React.ElementType;
  label: string;
  subItems?: NavItem[];
}

interface AdminSidebarProps {
  currentUser: any;
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

// Navigation structure
const NAV_ITEMS: NavItem[] = [
  {
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard"
  },
  {
    href: "/admin/all-posts",
    icon: FileText,
    label: "All Posts",
    subItems: [
      {
        href: "/admin/categories",
        icon: Folder,
        label: "Categories"
      }
    ]
  },
  {
    href: "/admin/media",
    icon: Upload,
    label: "Media"
  },
  {
    href: "/admin/events",
    icon: Calendar,
    label: "Events",
    subItems: [
      {
        href: "/admin/event-registrations",
        icon: ClipboardList,
        label: "Event Registrations"
      },
      {
        href: "/admin/qr-scanner",
        icon: QrCode,
        label: "QR Scanner"
      }
    ]
  },
  {
    href: "/admin/qr-codes",
    icon: QrCode,
    label: "QR Codes"
  },
  {
    href: "/admin/leads",
    icon: MessageSquare,
    label: "Leads",
    subItems: [
      {
        href: "/admin/lead-assignments",
        icon: UserPlus,
        label: "Lead Assignments"
      }
    ]
  },
  {
    href: "/admin/form-management",
    icon: FileQuestion,
    label: "Form Management"
  },
  {
    href: "/admin/user-management",
    icon: Users,
    label: "User Management",
    subItems: [
      {
        href: "/admin/post-assignments",
        icon: FileEdit,
        label: "Post Assignments"
      },
      {
        href: "/admin/user-activity",
        icon: BarChart3,
        label: "User Activity"
      }
    ]
  },
  {
    href: "/admin/backup",
    icon: Database,
    label: "Backup & Trash"
  },
  {
    href: "/admin/settings",
    icon: Settings,
    label: "Settings"
  }
];

/**
 * Determine which tabs a user can see based on their roles
 * This is the SINGLE SOURCE OF TRUTH for tab visibility
 */
function canSeeTab(href: string, user: any): boolean {
  if (!user) return false;

  const userRoles = user.roles || [];
  
  // Admin sees everything
  if (isAdmin(user)) return true;

  // Dashboard - Everyone sees this
  if (href === "/admin/dashboard") return true;

  // Editor role: Dashboard + All Posts + Categories + Media
  if (hasRole(user, "editor")) {
    if (href === "/admin/all-posts") return true;
    if (href === "/admin/categories") return true;
    if (href === "/admin/media") return true;
  }

  // Publisher role: Dashboard + All Posts + Categories + Media + QR Codes
  if (hasRole(user, "publisher")) {
    if (href === "/admin/all-posts") return true;
    if (href === "/admin/categories") return true;
    if (href === "/admin/media") return true;
    if (href === "/admin/qr-codes") return true;
  }

  // Events Manager role: Dashboard + Events + Event Registrations + QR Scanner + QR Codes
  if (hasRole(user, "events_manager")) {
    if (href === "/admin/events") return true;
    if (href === "/admin/event-registrations") return true;
    if (href === "/admin/qr-scanner") return true;
    if (href === "/admin/qr-codes") return true;
  }

  // Leads Manager role: Dashboard + Leads + Lead Assignments
  if (hasRole(user, "leads_manager")) {
    if (href === "/admin/leads") return true;
    if (href === "/admin/lead-assignments") return true;
  }

  // Default: No access
  return false;
}

export default function AdminSidebar({ currentUser, isSidebarOpen, onSidebarToggle }: AdminSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(["/admin/all-posts"]));

  const toggleExpanded = (href: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(href)) {
      newExpanded.delete(href);
    } else {
      newExpanded.add(href);
    }
    setExpandedItems(newExpanded);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        window.location.href = "/admin/login";
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Filter nav items based on user role
  const visibleItems = NAV_ITEMS.filter(item => {
    // Check if main item is visible
    const mainVisible = canSeeTab(item.href, currentUser);
    if (!mainVisible) return false;

    // Filter sub-items if they exist
    if (item.subItems) {
      item.subItems = item.subItems.filter(subItem => canSeeTab(subItem.href, currentUser));
    }

    return true;
  });

  return (
    <>
      {/* Mobile menu toggle */}
      <button
        data-testid="button-toggle-sidebar"
        onClick={onSidebarToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white shadow-2xl z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="p-6 border-b border-blue-800/50 bg-gradient-to-r from-blue-900/50 to-transparent">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Admin Panel
          </h2>
          <p className="text-sm text-blue-200 mt-1">Dunya Consultants</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {visibleItems.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedItems.has(item.href);
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isCurrentPath = window.location.pathname === item.href;

            return (
              <div key={item.href}>
                {hasSubItems ? (
                  <button
                    data-testid={`button-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => toggleExpanded(item.href)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                      isCurrentPath
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                        : "hover:bg-blue-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                ) : (
                  <a
                    data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isCurrentPath
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                        : "hover:bg-blue-800/50"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                )}

                {/* Sub-items */}
                {hasSubItems && isExpanded && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-700/50 pl-4">
                    {item.subItems?.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubCurrentPath = window.location.pathname === subItem.href;

                      return (
                        <a
                          key={subItem.href}
                          data-testid={`link-${subItem.label.toLowerCase().replace(/\s+/g, "-")}`}
                          href={subItem.href}
                          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all ${
                            isSubCurrentPath
                              ? "bg-blue-700/70 shadow-md"
                              : "hover:bg-blue-800/30"
                          }`}
                        >
                          <SubIcon className="h-4 w-4" />
                          <span>{subItem.label}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* User info and logout */}
        <div className="p-4 border-t border-blue-800/50 bg-gradient-to-r from-blue-900/30 to-transparent">
          <div className="mb-3 px-3 py-2 bg-blue-800/30 rounded-lg">
            <p className="text-sm font-medium text-blue-100">
              {currentUser?.username || "User"}
            </p>
            <p className="text-xs text-blue-300 mt-1">
              {isAdmin(currentUser) ? "Administrator" : (currentUser?.roles?.[0] || "User").replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}
            </p>
          </div>
          <Button
            data-testid="button-logout"
            onClick={handleLogout}
            variant="destructive"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={onSidebarToggle}
        />
      )}
    </>
  );
}
