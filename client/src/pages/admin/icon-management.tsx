import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import type { AdminUser } from "@shared/schema";
import BranchIconsTab from "@/components/admin/branch-icons-tab";
import UniversityIconsTab from "@/components/admin/university-icons-tab";

export default function IconManagement() {
  const [, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const adminUserStr = localStorage.getItem("adminUser");
    const userToken = localStorage.getItem("userToken");
    const userStr = localStorage.getItem("user");

    const token = adminToken || userToken;
    const user = adminUserStr || userStr;

    if (!token || !user) {
      setLocation("/admin/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      setCurrentUser(userData);
      setAuthChecked(true);
    } catch {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  if (!authChecked || !currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30">
      <AdminSidebar currentUser={currentUser} />
      <div className="md:ml-64">
        <AdminHeader currentUser={currentUser} />
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent pb-2">
                Icon Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage branch and university icons displayed across the website
              </p>
            </div>

            <Tabs defaultValue="branch-icons" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-6 bg-gray-100 p-1.5 h-12">
                <TabsTrigger 
                  value="branch-icons"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:font-semibold transition-all duration-200"
                >
                  Branch Icons
                </TabsTrigger>
                <TabsTrigger 
                  value="university-icons"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1D50C9] data-[state=active]:to-[#1845B3] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:font-semibold transition-all duration-200"
                >
                  University Icons
                </TabsTrigger>
              </TabsList>

              <TabsContent value="branch-icons" className="mt-0">
                <BranchIconsTab />
              </TabsContent>

              <TabsContent value="university-icons" className="mt-0">
                <UniversityIconsTab />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
