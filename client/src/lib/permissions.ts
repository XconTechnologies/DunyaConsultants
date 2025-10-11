import type { AdminUser } from "@shared/schema";

// Permission types that align with the database schema
export interface UserPermissions {
  canCreate?: boolean;
  canEdit?: boolean;
  canPublish?: boolean;
  canDelete?: boolean;
  canManageUsers?: boolean;
  canManageCategories?: boolean;
  canViewAnalytics?: boolean;
  canManageMedia?: boolean;
  canAccessEvents?: boolean;
  canAccessQRScanner?: boolean;
  canDownloadRegistrations?: boolean;
  canDeleteRegistrations?: boolean;
  canManageLeads?: boolean;
}

// Default permissions for each role
const DEFAULT_ROLE_PERMISSIONS: Record<string, UserPermissions> = {
  admin: {
    canCreate: true,
    canEdit: true,
    canPublish: true,
    canDelete: true,
    canManageUsers: true,
    canManageCategories: true,
    canViewAnalytics: true,
    canManageMedia: true,
    canAccessEvents: true,
    canAccessQRScanner: true,
    canDownloadRegistrations: true,
    canDeleteRegistrations: true,
    canManageLeads: true,
  },
  editor: {
    canCreate: true,
    canEdit: true,
    canPublish: false,
    canDelete: false,
    canManageUsers: false,
    canManageCategories: false,
    canViewAnalytics: false,
    canManageMedia: true,
    canAccessEvents: true,
    canAccessQRScanner: false,
    canDownloadRegistrations: false,
    canDeleteRegistrations: false,
    canManageLeads: false,
  },
  publisher: {
    canCreate: true,
    canEdit: true,
    canPublish: true,
    canDelete: false,
    canManageUsers: false,
    canManageCategories: false,
    canViewAnalytics: true,
    canManageMedia: true,
    canAccessEvents: true,
    canAccessQRScanner: false,
    canDownloadRegistrations: false,
    canDeleteRegistrations: false,
    canManageLeads: false,
  },
  custom: {
    canCreate: false,
    canEdit: false,
    canPublish: false,
    canDelete: false,
    canManageUsers: false,
    canManageCategories: false,
    canViewAnalytics: false,
    canManageMedia: false,
    canAccessEvents: false,
    canAccessQRScanner: false,
    canDownloadRegistrations: false,
    canDeleteRegistrations: false,
    canManageLeads: false,
  }
};

/**
 * Get the effective permissions for a user based on their role and custom permissions
 */
export function getUserPermissions(user: AdminUser): UserPermissions {
  if (!user) return {};
  
  // If user has custom permissions, use those
  if (user.permissions && typeof user.permissions === 'object') {
    return user.permissions as UserPermissions;
  }
  
  // Otherwise, use default permissions for their role
  return DEFAULT_ROLE_PERMISSIONS[user.role] || {};
}

/**
 * Check if a user has a specific permission
 */
export function hasPermission(user: AdminUser | null | undefined, permission: keyof UserPermissions): boolean {
  if (!user) return false;
  
  const permissions = getUserPermissions(user);
  return permissions[permission] === true;
}

/**
 * Check if a user has admin role (backwards compatibility helper)
 */
export function isAdmin(user: AdminUser | null | undefined): boolean {
  if (!user) return false;
  return user.role === 'admin';
}

/**
 * Check if a user can create content
 */
export function canCreateContent(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canCreate');
}

/**
 * Check if a user can edit content
 */
export function canEditContent(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canEdit');
}

/**
 * Check if a user can publish content
 */
export function canPublishContent(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canPublish');
}

/**
 * Check if a user can delete content
 */
export function canDeleteContent(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canDelete');
}

/**
 * Check if a user can view analytics
 */
export function canViewAnalytics(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canViewAnalytics');
}

/**
 * Check if a user can manage categories
 */
export function canManageCategories(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canManageCategories');
}

/**
 * Check if a user can manage media
 */
export function canManageMedia(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canManageMedia');
}

/**
 * Check if a user can manage users
 */
export function canManageUsers(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canManageUsers');
}

/**
 * Check if a user can access events
 */
export function canAccessEvents(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canAccessEvents');
}

/**
 * Check if a user can access QR scanner
 */
export function canAccessQRScanner(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canAccessQRScanner');
}

/**
 * Check if a user can download registrations
 */
export function canDownloadRegistrations(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canDownloadRegistrations');
}

/**
 * Check if a user can delete registrations
 */
export function canDeleteRegistrations(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canDeleteRegistrations');
}

/**
 * Check if a user can manage leads
 */
export function canManageLeads(user: AdminUser | null | undefined): boolean {
  return hasPermission(user, 'canManageLeads');
}