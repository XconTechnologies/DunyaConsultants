import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="pt-32 pb-20 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center">
              <AlertCircle className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">404</h1>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
              <p className="text-gray-600 mb-6">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/">
                  <Button className="w-full sm:w-auto">
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => window.history.back()} className="w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
