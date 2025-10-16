import { useState } from "react";
import { useLocation, Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Shield, Lock, User } from "lucide-react";
// Removed apiRequest import since we're using fetch directly

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = (path: string) => setLocation(path);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Store the token in localStorage
        localStorage.setItem("adminToken", result.token);
        localStorage.setItem("adminUser", JSON.stringify(result.admin));
        
        // Redirect to admin dashboard
        navigate("/admin/dashboard");
      } else {
        setError(result.message || "Login failed");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent mb-2">Admin Portal</h1>
          <p className="text-gray-600">Sign in to access the admin dashboard</p>
        </div>

        <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/80">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-2xl text-center font-bold text-gray-900">Welcome Back</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter your credentials to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {error && (
                <Alert variant="destructive" className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="username" className="flex items-center gap-2 text-gray-700 font-medium">
                  <User className="w-4 h-4 text-[#1D50C9]" />
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  {...register("username")}
                  className="h-12 border-gray-200 focus:border-[#1D50C9] focus:ring-[#1D50C9] transition-all duration-200"
                  disabled={isLoading}
                  data-testid="input-username"
                />
                {errors.username && (
                  <p className="text-sm text-red-600">{errors.username.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2 text-gray-700 font-medium">
                  <Lock className="w-4 h-4 text-[#1D50C9]" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className="h-12 border-gray-200 focus:border-[#1D50C9] focus:ring-[#1D50C9] transition-all duration-200"
                  disabled={isLoading}
                  data-testid="input-password"
                />
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1a47b8] hover:to-[#163da0] shadow-lg shadow-blue-500/30 transition-all duration-200 text-white font-semibold"
                disabled={isLoading}
                data-testid="button-login"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Link 
                  href="/" 
                  className="text-sm text-[#1D50C9] hover:text-[#1845B3] font-medium transition-colors duration-200 inline-flex items-center gap-1"
                  data-testid="link-back-to-website"
                >
                  ← Back to Website
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}