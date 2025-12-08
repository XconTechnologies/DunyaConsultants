import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      isAdminSubdomain: boolean;
      mainDomain: string;
    }
  }
}

// Strict allowlist of admin domains - only exact matches allowed
// Configure via environment variables in production
const ADMIN_DOMAINS_ENV = process.env.ADMIN_DOMAINS || '';
export const ADMIN_DOMAINS = new Set([
  'admin.dunyaconsultants.com',
  'admin.localhost',
  ...ADMIN_DOMAINS_ENV.split(',').filter(d => d.trim()),
]);

export const PUBLIC_DOMAINS = new Set([
  'dunyaconsultants.com',
  'www.dunyaconsultants.com',
  'localhost',
]);

export function isAdminHost(host: string): boolean {
  // Extract hostname without port for comparison
  const normalizedHost = host.toLowerCase().split(':')[0];
  
  // Development mode: treat admin.* prefix on localhost as admin
  if (normalizedHost === 'admin.localhost' || 
      (normalizedHost.startsWith('admin.') && normalizedHost.endsWith('.replit.dev')) ||
      (normalizedHost.startsWith('admin.') && normalizedHost.endsWith('.replit.app'))) {
    return true;
  }
  
  // Production: strict equality check against allowed admin domains
  return ADMIN_DOMAINS.has(normalizedHost);
}

export function getMainDomain(host: string): string {
  return host
    .replace(/^admin\./, '')
    .replace(/^admin-/, '')
    .replace(/-admin\./, '.');
}

export function getAdminHost(host: string): string {
  const [hostname, port] = host.split(':');
  const adminHostname = `admin.${hostname.replace(/^www\./, '')}`;
  return port ? `${adminHostname}:${port}` : adminHostname;
}
