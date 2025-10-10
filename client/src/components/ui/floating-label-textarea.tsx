import { forwardRef, useState, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface FloatingLabelTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const FloatingLabelTextarea = forwardRef<HTMLTextAreaElement, FloatingLabelTextareaProps>(
  ({ label, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      props.onBlur?.(e);
    };

    const isLabelFloating = isFocused || hasValue || props.value;

    return (
      <div className="relative">
        <textarea
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
            "peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-lg resize-none",
            "focus:ring-2 focus:ring-[#1D50C9] focus:border-transparent outline-none transition-all",
            className
          )}
        />
        <label
          className={cn(
            "absolute left-3 transition-all duration-200 ease-out pointer-events-none",
            isLabelFloating
              ? "top-1 text-xs text-[#1D50C9] bg-white px-1 -ml-1"
              : "top-3.5 text-sm text-gray-500"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingLabelTextarea.displayName = "FloatingLabelTextarea";

export { FloatingLabelTextarea };
