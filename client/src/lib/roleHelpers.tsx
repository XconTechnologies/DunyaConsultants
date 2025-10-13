import { Badge } from "@/components/ui/badge";
import { Shield, UserCog, FileText, Calendar, Users as UsersIcon, Settings } from "lucide-react";

// Role configuration matching the one in user-management.tsx
export const ROLE_CONFIG = {
  admin: {
    label: "Admin",
    icon: Shield,
    color: "bg-red-500",
    badgeColor: "bg-gradient-to-r from-red-500 to-red-600",
    description: "Full system access"
  },
  'events-manager': {
    label: "Events Manager",
    icon: Calendar,
    color: "bg-purple-500",
    badgeColor: "bg-gradient-to-r from-purple-500 to-purple-600",
    description: "Manage events and registrations"
  },
  'leads-manager': {
    label: "Leads Manager",
    icon: UsersIcon,
    color: "bg-indigo-500",
    badgeColor: "bg-gradient-to-r from-indigo-500 to-indigo-600",
    description: "Manage leads and assignments"
  },
  editor: {
    label: "Editor",
    icon: FileText,
    color: "bg-blue-500",
    badgeColor: "bg-gradient-to-r from-blue-500 to-blue-600",
    description: "Create and edit content"
  },
  publisher: {
    label: "Publisher",
    icon: UserCog,
    color: "bg-green-500",
    badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
    description: "Publish content"
  },
  custom: {
    label: "Custom",
    icon: Settings,
    color: "bg-purple-500",
    badgeColor: "bg-gradient-to-r from-purple-500 to-purple-600",
    description: "Custom permissions"
  }
} as const;

/**
 * Helper function to display role badges with backward compatibility
 * Handles both old single role (string) and new multi-role (array) systems
 */
export function getRoleBadges(roles: string[] | string | undefined) {
  // Handle both old single role and new roles array for backward compatibility
  const roleArray = Array.isArray(roles) ? roles : (roles ? [roles] : []);
  
  if (roleArray.length === 0) return <Badge variant="outline">No Roles</Badge>;
  
  return (
    <div className="flex flex-wrap gap-1">
      {roleArray.map((role) => {
        const config = ROLE_CONFIG[role as keyof typeof ROLE_CONFIG];
        if (!config) return null;
        
        const Icon = config.icon;
        return (
          <Badge key={role} className={`${config.badgeColor} text-white text-xs`}>
            <Icon className="w-3 h-3 mr-1" />
            {config.label}
          </Badge>
        );
      })}
    </div>
  );
}

/**
 * Helper function to get a single role badge (for backward compatibility)
 * Use getRoleBadges for multi-role display
 */
export function getRoleBadge(role: string | undefined) {
  if (!role) return <Badge variant="outline">No Role</Badge>;
  
  const config = ROLE_CONFIG[role as keyof typeof ROLE_CONFIG];
  if (!config) return <Badge variant="outline">{role}</Badge>;
  
  const Icon = config.icon;
  return (
    <Badge className={`${config.badgeColor} text-white text-xs`}>
      <Icon className="w-3 h-3 mr-1" />
      {config.label}
    </Badge>
  );
}
