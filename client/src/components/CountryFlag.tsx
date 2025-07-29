import React from 'react';

interface CountryFlagProps {
  countryCode: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const flagStyles: Record<string, string> = {
  us: '🇺🇸',
  uk: '🇬🇧',
  ca: '🇨🇦',
  au: '🇦🇺',
  fi: '🇫🇮',
  be: '🇧🇪',
  tr: '🇹🇷',
  gb: '🇬🇧', // Alternative for UK
};

const CountryFlag: React.FC<CountryFlagProps> = ({ 
  countryCode, 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const flag = flagStyles[countryCode.toLowerCase()];
  
  if (!flag) {
    return null;
  }

  return (
    <span 
      className={`inline-block ${sizeClasses[size]} ${className}`}
      role="img" 
      aria-label={`${countryCode.toUpperCase()} flag`}
    >
      {flag}
    </span>
  );
};

export default CountryFlag;