import { Button } from "@/components/ui/button";
import { ExternalLink, LogOut } from "lucide-react";
import { useLocation } from "wouter";
import type { AdminUser } from "@shared/schema";

interface AdminHeaderProps {
  currentUser: AdminUser | null;
  title: string;
  subtitle?: string;
}

export default function AdminHeader({ currentUser, title, subtitle }: AdminHeaderProps) {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    setLocation("/admin/login");
  };

  return (
    <header className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-white">{title}</h1>
              {subtitle && (
                <p className="text-blue-100 text-sm">{subtitle}</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {currentUser && (
              <div className="text-right">
                <div className="text-sm text-blue-100">Welcome back,</div>
                <div className="font-medium text-white">{currentUser.username}</div>
              </div>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/', '_blank')}
              className="flex items-center space-x-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              data-testid="button-visit-website"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Website</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
