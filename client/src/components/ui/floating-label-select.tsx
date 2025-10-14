import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FloatingLabelSelectProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  "data-testid"?: string;
}

export function FloatingLabelSelect({
  label,
  value,
  onValueChange,
  options,
  placeholder = "Select...",
  required = false,
  "data-testid": dataTestId,
}: FloatingLabelSelectProps) {
  const [isFocused, setIsFocused] = useState(false);

  const isLabelFloating = isFocused || value;

  return (
    <div className="relative">
      <Select
        value={value}
        onValueChange={onValueChange}
        onOpenChange={(open) => setIsFocused(open)}
      >
        <SelectTrigger
          className={cn(
            "w-full h-10 px-3 pt-5 pb-2 border border-gray-300 rounded-lg",
            "focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all"
          )}
          data-testid={dataTestId}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <label
        className={cn(
          "absolute left-3 transition-all duration-200 ease-out pointer-events-none",
          isLabelFloating
            ? "-top-2.5 text-xs text-[#1D50C9] bg-white px-1"
            : "top-2.5 text-sm text-gray-500"
        )}
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
}
