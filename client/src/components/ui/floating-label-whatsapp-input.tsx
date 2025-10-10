import { useState, InputHTMLAttributes } from "react";

interface FloatingLabelWhatsAppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  onNumberChange: (number: string) => void;
  numberValue: string;
}

const countryCodes = [
  { code: "+92", country: "Pakistan" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+358", country: "Finland" },
  { code: "+32", country: "Belgium" },
  { code: "+90", country: "Turkey" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+20", country: "Egypt" },
];

export function FloatingLabelWhatsAppInput({
  label,
  countryCode,
  onCountryCodeChange,
  onNumberChange,
  numberValue,
  required,
  ...props
}: FloatingLabelWhatsAppInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || numberValue;

  return (
    <div className="relative">
      <div className={`
        relative flex items-center border rounded-lg transition-all duration-200
        ${isFocused ? 'border-[#1D50C9] ring-2 ring-[#1D50C9]/20' : 'border-gray-300'}
        ${isActive ? 'border-[#1D50C9]' : ''}
      `}>
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className="px-3 py-3 bg-transparent border-r border-gray-300 focus:outline-none text-sm w-[90px] cursor-pointer"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {countryCodes.map((item) => (
            <option key={item.code} value={item.code}>
              {item.code}
            </option>
          ))}
        </select>
        
        <input
          type="tel"
          value={numberValue}
          onChange={(e) => onNumberChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 px-3 py-3 bg-transparent border-0 outline-none text-sm"
          required={required}
          {...props}
        />
        
        <label
          className={`
            absolute left-3 bg-white px-1 pointer-events-none transition-all duration-200
            ${isActive || isFocused
              ? '-top-2.5 text-xs text-[#1D50C9]'
              : 'top-3 text-sm text-gray-500'
            }
          `}
        >
          {label}
        </label>
      </div>
    </div>
  );
}
