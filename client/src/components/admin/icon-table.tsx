import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Eye, EyeOff, Pencil, Trash2, Maximize2 } from "lucide-react";

interface IconData {
  id: number;
  name: string;
  iconUrl?: string;
  logoUrl?: string;
  route: string;
  displayOrder: number;
  isActive: boolean;
}

interface SortableRowProps {
  icon: IconData;
  onEdit: (icon: IconData) => void;
  onDelete: (id: number) => void;
  onToggleActive: (icon: IconData) => void;
  onPreview: (icon: IconData) => void;
  imageField: 'iconUrl' | 'logoUrl';
}

function SortableRow({ icon, onEdit, onDelete, onToggleActive, onPreview, imageField }: SortableRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: icon.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const imageUrl = imageField === 'iconUrl' ? icon.iconUrl : icon.logoUrl;

  return (
    <TableRow 
      ref={setNodeRef} 
      style={style}
      className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors"
    >
      <TableCell>
        <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-2 rounded hover:bg-blue-100/50 transition-colors">
          <GripVertical className="h-5 w-5 text-[#1D50C9]" />
        </div>
      </TableCell>
      <TableCell className="font-semibold text-gray-900">{icon.name}</TableCell>
      <TableCell>
        <div className="p-2 bg-white rounded-lg border-2 border-blue-100 inline-block shadow-sm">
          <img src={imageUrl} alt={icon.name} className="h-12 w-12 object-contain" />
        </div>
      </TableCell>
      <TableCell className="max-w-xs truncate text-sm text-gray-600 font-mono bg-gray-50 rounded px-2 py-1">{icon.route}</TableCell>
      <TableCell>
        <Badge 
          variant={icon.isActive ? "default" : "secondary"} 
          className={icon.isActive 
            ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0" 
            : "bg-gray-300 text-gray-700 border-0"
          }
        >
          {icon.isActive ? "Active" : "Inactive"}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex gap-1 justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPreview(icon)}
            data-testid={`button-preview-${icon.id}`}
            className="hover:bg-purple-100 hover:text-purple-700"
            title="Preview icon"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onToggleActive(icon)}
            data-testid={`button-toggle-active-${icon.id}`}
            className="hover:bg-blue-100 hover:text-[#1D50C9]"
            title={icon.isActive ? "Hide from carousel" : "Show in carousel"}
          >
            {icon.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(icon)}
            data-testid={`button-edit-${icon.id}`}
            className="hover:bg-blue-100 hover:text-[#1D50C9]"
            title="Edit icon"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(icon.id)}
            className="text-red-600 hover:bg-red-50 hover:text-red-700"
            data-testid={`button-delete-${icon.id}`}
            title="Delete icon"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}

interface IconTableProps {
  icons: IconData[];
  sensors: any;
  onDragEnd: (event: any) => void;
  onEdit: (icon: IconData) => void;
  onDelete: (id: number) => void;
  onToggleActive: (icon: IconData) => void;
  onPreview: (icon: IconData) => void;
  isLoading: boolean;
  imageField: 'iconUrl' | 'logoUrl';
}

export function IconTable({ 
  icons, 
  sensors, 
  onDragEnd, 
  onEdit, 
  onDelete, 
  onToggleActive,
  onPreview, 
  isLoading,
  imageField 
}: IconTableProps) {
  if (isLoading) {
    return (
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30">
        <CardContent className="p-12">
          <div className="flex flex-col items-center justify-center text-gray-500">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D50C9] mb-4"></div>
            <p>Loading icons...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (icons.length === 0) {
    return (
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30">
        <CardContent className="p-12">
          <div className="text-center text-gray-500">
            <p className="text-lg mb-2">No icons found</p>
            <p className="text-sm">Click "Add Icon" to create your first icon</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#1D50C9]/5 to-[#2563eb]/5 border-b">
        <CardTitle className="text-xl text-gray-900">Icon List ({icons.length})</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <DndContext 
            sensors={sensors} 
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
          >
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b-2 border-blue-100">
                  <TableHead className="w-12"></TableHead>
                  <TableHead className="font-bold text-gray-700">Name</TableHead>
                  <TableHead className="font-bold text-gray-700">Icon</TableHead>
                  <TableHead className="font-bold text-gray-700">Route</TableHead>
                  <TableHead className="font-bold text-gray-700">Status</TableHead>
                  <TableHead className="text-right font-bold text-gray-700">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <SortableContext 
                items={icons.map(icon => icon.id)} 
                strategy={verticalListSortingStrategy}
              >
                <TableBody>
                  {icons.map((icon) => (
                    <SortableRow
                      key={icon.id}
                      icon={icon}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onToggleActive={onToggleActive}
                      onPreview={onPreview}
                      imageField={imageField}
                    />
                  ))}
                </TableBody>
              </SortableContext>
            </Table>
          </DndContext>
        </div>
      </CardContent>
    </Card>
  );
}
