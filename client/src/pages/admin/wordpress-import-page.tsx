import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import MobileNav from "@/components/admin/mobile-nav";
import WordPressImport from "@/components/admin/wordpress-import";
import type { AdminUser } from "@shared/schema";

export default function WordPressImportPage() {
  const [, setLocation] = useLocation();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
      'Authorization': `Bearer ${token}`
    };
  };

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setLocation('/admin/login');
        return;
      }

      try {
        const response = await fetch('/api/admin/me', {
          headers: getAuthHeaders()
        });

        if (!response.ok) {
          localStorage.removeItem('adminToken');
          setLocation('/admin/login');
          return;
        }

        const user = await response.json();
        setAdminUser(user);
        setAuthChecked(true);
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('adminToken');
        setLocation('/admin/login');
      }
    };

    checkAuth();
  }, [setLocation]);

  if (!authChecked) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        adminUser={adminUser}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader
          onMenuClick={() => setSidebarOpen(true)}
          adminUser={adminUser}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">WordPress Import</h1>
              <p className="text-gray-600 mt-1">
                Import articles from any WordPress site using the REST API
              </p>
            </div>

            <WordPressImport />
          </div>
        </main>
      </div>

      <MobileNav
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        adminUser={adminUser}
      />
    </div>
  );
}
