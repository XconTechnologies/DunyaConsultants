import { useEffect } from "react";
import { useLocation } from "wouter";

export default function AdminIndex() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const adminUser = localStorage.getItem("adminUser");

    if (adminToken && adminUser) {
      // User is logged in, redirect to dashboard
      setLocation("/admin/dashboard");
    } else {
      // User is not logged in, redirect to login
      setLocation("/admin/login");
    }
  }, [setLocation]);

  // Show nothing while redirecting
  return null;
}
