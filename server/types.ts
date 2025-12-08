import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      isAdminSubdomain: boolean;
      mainDomain: string;
    }
  }
}

// Strict allowlist of CMS/admin domains - only exact matches allowed
// Configure via environment variables in production
const CMS_DOMAINS_ENV = process.env.CMS_DOMAINS || '';
export const CMS_DOMAINS = new Set([
  'cms.dunyaconsultants.com',
  'admin.dunyaconsultants.com',
  'cms.localhost',
  'admin.localhost',
  ...CMS_DOMAINS_ENV.split(',').filter(d => d.trim()),
]);

export const PUBLIC_DOMAINS = new Set([
  'dunyaconsultants.com',
  'www.dunyaconsultants.com',
  'localhost',
]);

// The subdomain to use for CMS redirects
export const CMS_SUBDOMAIN = 'cms';

export function isAdminHost(host: string): boolean {
  // Extract hostname without port for comparison
  const normalizedHost = host.toLowerCase().split(':')[0];
  
  // Development mode: treat cms.* or admin.* prefix on Replit domains as admin
  if (normalizedHost === 'cms.localhost' || normalizedHost === 'admin.localhost' ||
      (normalizedHost.startsWith('cms.') && normalizedHost.endsWith('.replit.dev')) ||
      (normalizedHost.startsWith('cms.') && normalizedHost.endsWith('.replit.app')) ||
      (normalizedHost.startsWith('admin.') && normalizedHost.endsWith('.replit.dev')) ||
      (normalizedHost.startsWith('admin.') && normalizedHost.endsWith('.replit.app'))) {
    return true;
  }
  
  // Production: strict equality check against allowed CMS domains
  return CMS_DOMAINS.has(normalizedHost);
}

export function getMainDomain(host: string): string {
  return host
    .replace(/^cms\./, '')
    .replace(/^admin\./, '')
    .replace(/^admin-/, '')
    .replace(/-admin\./, '.');
}

export function getAdminHost(host: string): string {
  const [hostname, port] = host.split(':');
  // Use cms subdomain for production, keeping backward compatibility
  const cmsHostname = `${CMS_SUBDOMAIN}.${hostname.replace(/^www\./, '')}`;
  return port ? `${cmsHostname}:${port}` : cmsHostname;
}
