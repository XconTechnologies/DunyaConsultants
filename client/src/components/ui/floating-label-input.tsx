import { forwardRef, useState, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ label, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      props.onBlur?.(e);
    };

    const isLabelFloating = isFocused || hasValue || props.value;

    return (
      <div className="relative">
        <input
          ref={ref}
          {...props}
          onFocus={(e) => {
            handleFocus();
            props.onFocus?.(e);
          }}
          onBlur={handleBlur}
          onChange={(e) => {
            setHasValue(!!e.target.value);
            props.onChange?.(e);
          }}
          className={cn(
            "peer w-full h-10 px-3 pt-5 pb-2 border border-gray-300 rounded-lg",
            "focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all",
            className
          )}
        />
        <label
          className={cn(
            "absolute left-3 transition-all duration-200 ease-out pointer-events-none",
            isLabelFloating
              ? "-top-2.5 text-xs text-[#1D50C9] bg-white px-1"
              : "top-3.5 text-sm text-gray-500"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
