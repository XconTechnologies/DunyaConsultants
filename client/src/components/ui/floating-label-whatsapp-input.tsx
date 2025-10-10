import { useState, InputHTMLAttributes } from "react";

interface FloatingLabelWhatsAppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  onNumberChange: (number: string) => void;
  numberValue: string;
}

const countryCodes = [
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
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

  const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[0];

  return (
    <div className="relative">
      <div className={`
        relative flex items-center border rounded-lg transition-all duration-200
        ${isFocused ? 'border-[#1D50C9] ring-2 ring-[#1D50C9]/20' : 'border-gray-300'}
        ${isActive ? 'border-[#1D50C9]' : ''}
      `}>
        <div className="relative">
          <select
            value={countryCode}
            onChange={(e) => onCountryCodeChange(e.target.value)}
            className="pl-3 pr-2 py-3 bg-transparent border-r border-gray-300 focus:outline-none text-sm cursor-pointer appearance-none"
            style={{ minWidth: '110px' }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            {countryCodes.map((item) => (
              <option key={item.code} value={item.code}>
                {item.flag} {item.code}
              </option>
            ))}
          </select>
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-lg">
            {selectedCountry.flag}
          </div>
          <div className="absolute left-11 top-1/2 -translate-y-1/2 pointer-events-none text-sm text-gray-700">
            {selectedCountry.code}
          </div>
        </div>
        
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
