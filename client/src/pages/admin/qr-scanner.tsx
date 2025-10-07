import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import AdminSidebar from "@/components/admin/sidebar";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { QrCode, CheckCircle2 } from "lucide-react";

export default function QRScannerPage() {
  const [qrToken, setQrToken] = useState("");
  const [lastScan, setLastScan] = useState<any>(null);
  const { toast } = useToast();

  const { data: adminUser } = useQuery({
    queryKey: ["/api/admin/me"],
  });

  const scanMutation = useMutation({
    mutationFn: async (token: string) => {
      return await apiRequest({
        url: "/api/admin/scan-attendance",
        method: "POST",
        body: { token }
      });
    },
    onSuccess: (data) => {
      setLastScan(data);
      
      if (data.alreadyScanned) {
        toast({
          title: "Already Scanned",
          description: `${data.registration.name} was already marked as attended.`,
        });
      } else {
        toast({
          title: "Success!",
          description: `${data.registration.name} marked as attended and eligible for prize!`,
        });
      }
      
      setQrToken("");
      queryClient.invalidateQueries({ queryKey: ["/api/admin/registrations"] });
    },
    onError: (error: any) => {
      const message = error.message || "Invalid QR code";
      toast({
        title: "Scan Failed",
        description: message,
        variant: "destructive",
      });
      setLastScan(null);
    }
  });

  const handleScan = () => {
    if (!qrToken.trim()) {
      toast({
        title: "Error",
        description: "Please enter a QR code token",
        variant: "destructive",
      });
      return;
    }
    
    scanMutation.mutate(qrToken.trim());
  };

  if (!adminUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar currentUser={adminUser} />
      <div className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">QR Code Scanner</h1>
          <p className="text-gray-600">Scan attendee QR codes to mark attendance and prize eligibility</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Scanner Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5 text-[#1D50C9]" />
                Scan QR Code
              </CardTitle>
              <CardDescription>
                Enter the QR code token to mark attendance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="qr-token">QR Code Token</Label>
                <Input
                  id="qr-token"
                  value={qrToken}
                  onChange={(e) => setQrToken(e.target.value)}
                  placeholder="Paste or scan QR code token"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleScan();
                    }
                  }}
                  data-testid="input-qr-token"
                  className="font-mono"
                />
                <p className="text-xs text-gray-500">
                  Paste the QR code data or use a scanner device
                </p>
              </div>
              
              <Button
                onClick={handleScan}
                disabled={scanMutation.isPending || !qrToken.trim()}
                className="w-full bg-gradient-to-r from-[#1D50C9] to-[#0f3a8a]"
                data-testid="button-scan"
              >
                {scanMutation.isPending ? "Scanning..." : "Scan & Mark Attendance"}
              </Button>

              <div className="text-center text-sm text-gray-500">
                <p>Tip: Use Enter key to quickly scan multiple codes</p>
              </div>
            </CardContent>
          </Card>

          {/* Last Scan Result */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {lastScan?.success ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <QrCode className="h-5 w-5 text-gray-400" />
                )}
                Last Scan Result
              </CardTitle>
              <CardDescription>
                Details of the most recent scan
              </CardDescription>
            </CardHeader>
            <CardContent>
              {lastScan?.success && lastScan.registration ? (
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-900">
                        {lastScan.alreadyScanned ? "Already Scanned" : "Attendance Marked"}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p><strong>Name:</strong> {lastScan.registration.name}</p>
                      <p><strong>Email:</strong> {lastScan.registration.email}</p>
                      <p><strong>Phone:</strong> {lastScan.registration.phone}</p>
                      {lastScan.registration.education && (
                        <p><strong>Education:</strong> {lastScan.registration.education}</p>
                      )}
                      {lastScan.registration.destination && (
                        <p><strong>Destination:</strong> {lastScan.registration.destination}</p>
                      )}
                      <p><strong>Prize Status:</strong> <span className="text-green-600 font-semibold">Eligible</span></p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <QrCode className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">No scans yet</p>
                  <p className="text-gray-400 text-xs mt-1">Scan results will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Scanning Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600">
              <ol className="list-decimal list-inside space-y-2">
                <li>Ask the attendee to show their QR code (from email or registration confirmation)</li>
                <li>Use a QR code scanner app to scan the code, or manually enter the token</li>
                <li>Paste the scanned token into the input field above</li>
                <li>Click "Scan & Mark Attendance" or press Enter</li>
                <li>The attendee will be automatically marked as attended and eligible for the prize</li>
                <li>Prizes will be distributed 7-10 days after the event</li>
              </ol>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <p className="font-semibold text-blue-900">Note:</p>
                <p className="text-blue-800 text-sm">
                  Each QR code can only be scanned once. If someone tries to scan again, 
                  you'll see an "Already Scanned" message.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
