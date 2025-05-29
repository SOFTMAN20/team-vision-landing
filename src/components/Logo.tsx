
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = "", size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-6 w-6', 
    lg: 'h-8 w-8'
  };

  return (
    <div className={`gradient-tech p-1 rounded ${className}`}>
      <svg 
        className={`${sizeClasses[size]} text-white`} 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        {/* Main star shape */}
        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.27L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        {/* Inner tech circuit pattern */}
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
        {/* Tech connection lines */}
        <line x1="12" y1="8" x2="12" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <line x1="12" y1="18" x2="12" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <line x1="16" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <line x1="8" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      </svg>
    </div>
  );
};

export default Logo;
