import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, LogOut, Menu, Search, LayoutDashboard } from "lucide-react";
import { useLocation } from "wouter";
import type { AdminUser } from "@shared/schema";
import { ReactNode } from "react";

interface AdminHeaderProps {
  currentUser: AdminUser | null;
  title: string;
  subtitle?: string;
  onMenuClick?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  searchPlaceholder?: string;
  actionButtons?: ReactNode;
}

export default function AdminHeader({ 
  currentUser, 
  title, 
  subtitle, 
  onMenuClick, 
  searchQuery, 
  onSearchChange,
  searchPlaceholder = "Search dashboard...",
  actionButtons
}: AdminHeaderProps) {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    setLocation("/admin/login");
  };

  return (
    <header className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] shadow-lg sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Left Section: Branding + Mobile Menu */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Hamburger menu for mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="lg:hidden text-white hover:bg-white/10 p-2"
              data-testid="button-menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
            
            {/* Admin Panel Branding with Page Title */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="bg-white/10 p-2 rounded-lg hidden sm:block">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-base lg:text-xl font-bold text-white">{title}</h1>
                {subtitle && (
                  <p className="text-blue-100 text-xs hidden sm:block">{subtitle}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Section: Search + Actions + User + Buttons */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            {/* Search Bar */}
            {onSearchChange && (
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-200" />
                <Input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery || ''}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-white/40 w-48 lg:w-64"
                  data-testid="input-search-dashboard"
                />
              </div>
            )}

            {/* Tab-specific Action Buttons */}
            {actionButtons && (
              <div className="hidden lg:flex items-center space-x-2">
                {actionButtons}
              </div>
            )}

            {/* User Welcome */}
            {currentUser && (
              <div className="text-right hidden lg:block">
                <div className="text-xs text-blue-100">Welcome back,</div>
                <div className="font-semibold text-white text-sm">{currentUser.username}</div>
              </div>
            )}

            {/* Visit Website Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/', '_blank')}
              className="flex items-center space-x-1.5 bg-white border-white text-[#1D50C9] hover:bg-blue-50 transition-colors"
              data-testid="button-visit-website"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Visit Website</span>
            </Button>

            {/* Logout Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center space-x-1.5 bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 transition-colors"
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
