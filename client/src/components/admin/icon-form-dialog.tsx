import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IconFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isEditing: boolean;
  formData: {
    name: string;
    iconUrl: string;
    route: string;
    isActive: boolean;
  };
  setFormData: (data: any) => void;
  isPending: boolean;
  labels: {
    singular: string;
    plural: string;
  };
  imageFieldLabel?: string;
}

export function IconFormDialog({
  isOpen,
  onClose,
  onSubmit,
  isEditing,
  formData,
  setFormData,
  isPending,
  labels,
  imageFieldLabel = "Icon URL"
}: IconFormDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-white to-blue-50/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
            {isEditing ? `Edit ${labels.singular}` : `Add New ${labels.singular}`}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-semibold">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter name"
              required
              className="border-gray-200 focus:border-[#1D50C9] focus:ring-[#1D50C9]"
              data-testid="input-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="iconUrl" className="text-gray-700 font-semibold">
              {imageFieldLabel} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="iconUrl"
              value={formData.iconUrl}
              onChange={(e) => setFormData({ ...formData, iconUrl: e.target.value })}
              placeholder="/assets/image.png"
              required
              className="border-gray-200 focus:border-[#1D50C9] focus:ring-[#1D50C9]"
              data-testid="input-icon-url"
            />
            <p className="text-sm text-gray-500">Path to the icon image (from /assets)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="route" className="text-gray-700 font-semibold">
              Route <span className="text-red-500">*</span>
            </Label>
            <Input
              id="route"
              value={formData.route}
              onChange={(e) => setFormData({ ...formData, route: e.target.value })}
              placeholder="/page/example"
              required
              className="border-gray-200 focus:border-[#1D50C9] focus:ring-[#1D50C9]"
              data-testid="input-route"
            />
            <p className="text-sm text-gray-500">Route where this icon should link to</p>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="w-4 h-4 text-[#1D50C9] border-gray-300 rounded focus:ring-[#1D50C9]"
              data-testid="input-is-active"
            />
            <Label htmlFor="isActive" className="text-gray-700 font-medium cursor-pointer">
              Active (Show on website)
            </Label>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              data-testid="button-cancel"
              className="border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isPending}
              data-testid="button-submit"
              className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#1D50C9] text-white"
            >
              {isPending ? "Saving..." : (isEditing ? "Update" : "Create")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
