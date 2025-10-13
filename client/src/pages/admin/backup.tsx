import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import MobileNav from "@/components/admin/mobile-nav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Download,
  Trash2,
  Database,
  Cloud,
  HardDrive,
  RefreshCw,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  CloudUpload
} from "lucide-react";
import { format } from "date-fns";
import type { AdminUser, BackupConfig, BackupHistory } from "@shared/schema";

export default function BackupManagement() {
  const [, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const { toast } = useToast();

  // Check authentication
  useEffect(() => {
    let token = localStorage.getItem("adminToken");
    let user = localStorage.getItem("adminUser");
    
    if (!token || !user) {
      token = localStorage.getItem("userToken");
      user = localStorage.getItem("user");
    }
    
    if (!token || !user) {
      setLocation("/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      setCurrentUser(userData);
      setAuthChecked(true);
    } catch {
      setLocation("/login");
    }
  }, [setLocation]);

  // Fetch backup configuration
  const { data: config, isLoading: configLoading } = useQuery<BackupConfig | null>({
    queryKey: ["/api/admin/backup/config"],
    enabled: authChecked && !!currentUser,
    queryFn: async () => {
      const response = await fetch("/api/admin/backup/config", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch config");
      return response.json();
    },
  });

  // Fetch backup history
  const { data: history = [], isLoading: historyLoading } = useQuery<BackupHistory[]>({
    queryKey: ["/api/admin/backup/history"],
    enabled: authChecked && !!currentUser,
    queryFn: async () => {
      const response = await fetch("/api/admin/backup/history", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch history");
      return response.json();
    },
  });

  // Configuration state
  const [frequency, setFrequency] = useState<string>(config?.frequency || "manual");
  const [autoBackupEnabled, setAutoBackupEnabled] = useState<boolean>(config?.autoBackupEnabled || false);
  const [cloudProvider, setCloudProvider] = useState<string>(config?.cloudProvider || "none");
  const [cloudFolderId, setCloudFolderId] = useState<string>(config?.cloudFolderId || "");
  const [configBackupDataTypes, setConfigBackupDataTypes] = useState<string[]>([
    "leads", "eventRegistrations", "qrCodes", "posts", "media", "users", "forms", "categories"
  ]);
  
  // Backup options state (for manual backup)
  const [backupOptions, setBackupOptions] = useState({
    leads: true,
    eventRegistrations: true,
    qrCodes: true,
    posts: true,
    media: true,
    users: true,
    forms: true,
    categories: true,
  });

  useEffect(() => {
    if (config) {
      setFrequency(config.frequency);
      setAutoBackupEnabled(config.autoBackupEnabled);
      setCloudProvider(config.cloudProvider);
      setCloudFolderId(config.cloudFolderId || "");
      setConfigBackupDataTypes(config.backupDataTypes || [
        "leads", "eventRegistrations", "qrCodes", "posts", "media", "users", "forms", "categories"
      ]);
    }
  }, [config]);

  // Save configuration mutation
  const saveConfigMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/admin/backup/config", {
        frequency,
        autoBackupEnabled,
        cloudProvider,
        cloudFolderId: cloudFolderId || null,
        backupDataTypes: configBackupDataTypes,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/backup/config"] });
      toast({
        title: "Configuration Saved",
        description: "Backup configuration has been updated successfully.",
      });
    },
    onError: (error: Error) => {
      if (error.message.includes("401")) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        toast({
          title: "Session Expired",
          description: "Please log in again to continue.",
          variant: "destructive",
        });
        setTimeout(() => setLocation("/login"), 1500);
      } else {
        toast({
          title: "Error",
          description: "Failed to save backup configuration.",
          variant: "destructive",
        });
      }
    },
  });

  // Create backup mutation
  const createBackupMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/admin/backup/create", backupOptions);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/backup/history"] });
      toast({
        title: "Backup Created",
        description: "Selected data has been backed up successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create backup.",
        variant: "destructive",
      });
    },
  });

  const toggleBackupOption = (key: keyof typeof backupOptions) => {
    setBackupOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAllBackupOptions = () => {
    const allSelected = Object.values(backupOptions).every(v => v);
    const newState = Object.keys(backupOptions).reduce((acc, key) => ({
      ...acc,
      [key]: !allSelected
    }), {} as typeof backupOptions);
    setBackupOptions(newState);
  };

  // Config backup data types helpers
  const toggleConfigDataType = (type: string) => {
    setConfigBackupDataTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const toggleAllConfigDataTypes = () => {
    const allDataTypes = ["leads", "eventRegistrations", "qrCodes", "posts", "media", "users", "forms", "categories"];
    setConfigBackupDataTypes(prev => 
      prev.length === allDataTypes.length ? [] : allDataTypes
    );
  };

  // Delete backup mutation
  const deleteBackupMutation = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/admin/backup/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/backup/history"] });
      toast({
        title: "Backup Deleted",
        description: "Backup has been deleted successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete backup.",
        variant: "destructive",
      });
    },
  });

  const handleDownload = (backup: BackupHistory) => {
    const token = localStorage.getItem("adminToken");
    window.open(`/api/admin/backup/download/${backup.id}?token=${token}`, '_blank');
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader currentUser={currentUser} title="Backup Management" />
      
      <div className="flex pt-16">
        <AdminSidebar currentUser={currentUser} />
        
        <main className="flex-1 p-6 lg:ml-64">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Database className="w-7 h-7" />
                Backup Management
              </h1>
              <p className="text-gray-600 mt-1">
                Configure automatic backups and manage database backups
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Configuration */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HardDrive className="w-5 h-5" />
                      Backup Configuration
                    </CardTitle>
                    <CardDescription>
                      Set up automatic backups and cloud storage
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Auto Backup Toggle */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auto-backup">Auto Backup</Label>
                        <p className="text-sm text-gray-500">
                          Enable automatic database backups
                        </p>
                      </div>
                      <Switch
                        id="auto-backup"
                        checked={autoBackupEnabled}
                        onCheckedChange={setAutoBackupEnabled}
                        data-testid="switch-auto-backup"
                      />
                    </div>

                    {/* Frequency */}
                    <div className="space-y-2">
                      <Label htmlFor="frequency" className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Backup Frequency
                      </Label>
                      <Select value={frequency} onValueChange={setFrequency}>
                        <SelectTrigger id="frequency" data-testid="select-frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manual">Manual Only</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Cloud Provider */}
                    <div className="space-y-2">
                      <Label htmlFor="cloud-provider" className="flex items-center gap-2">
                        <Cloud className="w-4 h-4" />
                        Cloud Storage Provider
                      </Label>
                      <Select value={cloudProvider} onValueChange={setCloudProvider}>
                        <SelectTrigger id="cloud-provider" data-testid="select-cloud-provider">
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None (Local Only)</SelectItem>
                          <SelectItem value="google_drive">Google Drive</SelectItem>
                          <SelectItem value="dropbox">Dropbox</SelectItem>
                          <SelectItem value="onedrive">OneDrive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Cloud Folder ID */}
                    {cloudProvider !== "none" && (
                      <div className="space-y-2">
                        <Label htmlFor="folder-id">
                          Folder ID / Path
                        </Label>
                        <Input
                          id="folder-id"
                          value={cloudFolderId}
                          onChange={(e) => setCloudFolderId(e.target.value)}
                          placeholder="Enter folder ID or path"
                          data-testid="input-folder-id"
                        />
                        <p className="text-sm text-gray-500">
                          The folder where backups will be stored in your cloud storage
                        </p>
                      </div>
                    )}

                    {/* Backup Data Types */}
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <Label className="flex items-center gap-2">
                          <Database className="w-4 h-4" />
                          Data Types to Backup
                        </Label>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={toggleAllConfigDataTypes}
                          className="text-xs h-7"
                        >
                          {configBackupDataTypes.length === 8 ? "Deselect All" : "Select All"}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Select which data types to include in automatic backups
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                          <Checkbox
                            id="config-leads"
                            checked={configBackupDataTypes.includes("leads")}
                            onCheckedChange={() => toggleConfigDataType("leads")}
                            className="w-5 h-5"
                          />
                          <Label htmlFor="config-leads" className="cursor-pointer text-sm font-medium">Leads</Label>
                        </div>

                        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                          <Checkbox
                            id="config-events"
                            checked={configBackupDataTypes.includes("eventRegistrations")}
                            onCheckedChange={() => toggleConfigDataType("eventRegistrations")}
                            className="w-5 h-5"
                          />
                          <Label htmlFor="config-events" className="cursor-pointer text-sm font-medium">Event Registrations</Label>
                        </div>

                        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                          <Checkbox
                            id="config-qr"
                            checked={configBackupDataTypes.includes("qrCodes")}
                            onCheckedChange={() => toggleConfigDataType("qrCodes")}
                            className="w-5 h-5"
                          />
                          <Label htmlFor="config-qr" className="cursor-pointer text-sm font-medium">QR Codes</Label>
                        </div>

                        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                          <Checkbox
                            id="config-posts"
                            checked={configBackupDataTypes.includes("posts")}
                            onCheckedChange={() => toggleConfigDataType("posts")}
                            className="w-5 h-5"
                          />
                          <Label htmlFor="config-posts" className="cursor-pointer text-sm font-medium">Blog Posts</Label>
                        </div>

                        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                          <Checkbox
                            id="config-media"
                            checked={configBackupDataTypes.includes("media")}
                            onCheckedChange={() => toggleConfigDataType("media")}
                            className="w-5 h-5"
                          />
                          <Label htmlFor="config-media" className="cursor-pointer text-sm font-medium">Media Files</Label>
                        </div>

                        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                          <Checkbox
                            id="config-users"
                            checked={configBackupDataTypes.includes("users")}
                            onCheckedChange={() => toggleConfigDataType("users")}
                            className="w-5 h-5"
                          />
                          <Label htmlFor="config-users" className="cursor-pointer text-sm font-medium">Users</Label>
                        </div>

                        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                          <Checkbox
                            id="config-forms"
                            checked={configBackupDataTypes.includes("forms")}
                            onCheckedChange={() => toggleConfigDataType("forms")}
                            className="w-5 h-5"
                          />
                          <Label htmlFor="config-forms" className="cursor-pointer text-sm font-medium">Form Management</Label>
                        </div>

                        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                          <Checkbox
                            id="config-categories"
                            checked={configBackupDataTypes.includes("categories")}
                            onCheckedChange={() => toggleConfigDataType("categories")}
                            className="w-5 h-5"
                          />
                          <Label htmlFor="config-categories" className="cursor-pointer text-sm font-medium">Categories</Label>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        {configBackupDataTypes.length} of 8 items selected
                      </p>
                    </div>

                    {/* Save Button */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => saveConfigMutation.mutate()}
                        disabled={saveConfigMutation.isPending}
                        data-testid="button-save-config"
                      >
                        {saveConfigMutation.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          "Save Configuration"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Backup Options */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Backup Options
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleAllBackupOptions}
                        className="text-xs"
                      >
                        {Object.values(backupOptions).every(v => v) ? "Deselect All" : "Select All"}
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      Select which data to include in the backup
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id="backup-leads"
                          checked={backupOptions.leads}
                          onCheckedChange={() => toggleBackupOption('leads')}
                          data-testid="switch-backup-leads"
                          className="w-5 h-5"
                        />
                        <Label htmlFor="backup-leads" className="cursor-pointer text-sm font-medium">Leads</Label>
                      </div>

                      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id="backup-events"
                          checked={backupOptions.eventRegistrations}
                          onCheckedChange={() => toggleBackupOption('eventRegistrations')}
                          data-testid="switch-backup-events"
                          className="w-5 h-5"
                        />
                        <Label htmlFor="backup-events" className="cursor-pointer text-sm font-medium">Event Registrations</Label>
                      </div>

                      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id="backup-qr"
                          checked={backupOptions.qrCodes}
                          onCheckedChange={() => toggleBackupOption('qrCodes')}
                          data-testid="switch-backup-qr"
                          className="w-5 h-5"
                        />
                        <Label htmlFor="backup-qr" className="cursor-pointer text-sm font-medium">QR Codes</Label>
                      </div>

                      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id="backup-posts"
                          checked={backupOptions.posts}
                          onCheckedChange={() => toggleBackupOption('posts')}
                          data-testid="switch-backup-posts"
                          className="w-5 h-5"
                        />
                        <Label htmlFor="backup-posts" className="cursor-pointer text-sm font-medium">Blog Posts</Label>
                      </div>

                      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id="backup-media"
                          checked={backupOptions.media}
                          onCheckedChange={() => toggleBackupOption('media')}
                          data-testid="switch-backup-media"
                          className="w-5 h-5"
                        />
                        <Label htmlFor="backup-media" className="cursor-pointer text-sm font-medium">Media Files</Label>
                      </div>

                      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id="backup-users"
                          checked={backupOptions.users}
                          onCheckedChange={() => toggleBackupOption('users')}
                          data-testid="switch-backup-users"
                          className="w-5 h-5"
                        />
                        <Label htmlFor="backup-users" className="cursor-pointer text-sm font-medium">Users</Label>
                      </div>

                      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id="backup-forms"
                          checked={backupOptions.forms}
                          onCheckedChange={() => toggleBackupOption('forms')}
                          data-testid="switch-backup-forms"
                          className="w-5 h-5"
                        />
                        <Label htmlFor="backup-forms" className="cursor-pointer text-sm font-medium">Form Management</Label>
                      </div>

                      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id="backup-categories"
                          checked={backupOptions.categories}
                          onCheckedChange={() => toggleBackupOption('categories')}
                          data-testid="switch-backup-categories"
                          className="w-5 h-5"
                        />
                        <Label htmlFor="backup-categories" className="cursor-pointer text-sm font-medium">Categories</Label>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 pt-2 border-t">
                      {Object.values(backupOptions).filter(v => v).length} of {Object.keys(backupOptions).length} items selected
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      className="w-full"
                      onClick={() => createBackupMutation.mutate()}
                      disabled={createBackupMutation.isPending}
                      data-testid="button-create-backup"
                    >
                      {createBackupMutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <Database className="w-4 h-4 mr-2" />
                          Create Backup Now
                        </>
                      )}
                    </Button>

                    {cloudProvider !== "none" && (
                      <Button
                        className="w-full"
                        variant="outline"
                        disabled
                        data-testid="button-upload-cloud"
                      >
                        <CloudUpload className="w-4 h-4 mr-2" />
                        Upload to Cloud
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Stats Card */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-sm">Backup Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Backups:</span>
                      <span className="font-medium">{history.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Size:</span>
                      <span className="font-medium">
                        {formatFileSize(history.reduce((acc, b) => acc + b.fileSize, 0))}
                      </span>
                    </div>
                    {config?.lastBackupAt && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Last Backup:</span>
                        <span className="font-medium">
                          {format(new Date(config.lastBackupAt), "MMM d, h:mm a")}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Backup History */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Backup History
                </CardTitle>
                <CardDescription>
                  View and manage your database backups
                </CardDescription>
              </CardHeader>
              <CardContent>
                {historyLoading ? (
                  <div className="text-center py-8">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-gray-400" />
                    <p className="text-gray-500 mt-2">Loading backups...</p>
                  </div>
                ) : history.length === 0 ? (
                  <div className="text-center py-8">
                    <Database className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                    <p className="text-gray-500">No backups found</p>
                    <p className="text-sm text-gray-400 mt-1">Create your first backup to get started</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>File Name</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Cloud</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {history.map((backup) => (
                        <TableRow key={backup.id}>
                          <TableCell className="font-medium">{backup.fileName}</TableCell>
                          <TableCell>{formatFileSize(backup.fileSize)}</TableCell>
                          <TableCell>
                            {backup.status === "completed" ? (
                              <Badge className="bg-green-100 text-green-700">
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                                Completed
                              </Badge>
                            ) : backup.status === "failed" ? (
                              <Badge variant="destructive">
                                <XCircle className="w-3 h-3 mr-1" />
                                Failed
                              </Badge>
                            ) : (
                              <Badge variant="outline">
                                <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                                In Progress
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {backup.cloudProvider === "none" ? (
                              <span className="text-gray-500 text-sm">Local</span>
                            ) : (
                              <Badge variant="outline">{backup.cloudProvider}</Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">
                            {format(new Date(backup.createdAt), "MMM d, h:mm a")}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDownload(backup)}
                                disabled={backup.status !== "completed"}
                                data-testid={`button-download-${backup.id}`}
                              >
                                <Download className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => deleteBackupMutation.mutate(backup.id)}
                                disabled={deleteBackupMutation.isPending}
                                data-testid={`button-delete-${backup.id}`}
                              >
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <MobileNav currentUser={currentUser} />
    </div>
  );
}
