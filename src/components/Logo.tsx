import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = "", size = 'md' }: LogoProps) => {
  const sizeMap = {
    sm: 32,
    md: 40, 
    lg: 48
  };
  
  const logoSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <div className="relative">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-tech-blue/30 rounded-full blur-xl group-hover:bg-tech-purple/40 transition-all duration-500 animate-pulse"></div>
        
        <svg 
          width={logoSize} 
          height={logoSize} 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-tech-blue" style={{ stopColor: 'currentColor' }} />
              <stop offset="100%" className="text-tech-purple" style={{ stopColor: 'currentColor' }} />
            </linearGradient>
          </defs>
          
          {/* Outer star with gradient */}
          <path 
            d="M20 2L24.5 14.5L37 16L27 24.5L30 37L20 30L10 37L13 24.5L3 16L15.5 14.5L20 2Z" 
            fill="url(#starGradient)"
            className="opacity-30 group-hover:opacity-40 transition-opacity duration-300"
          />
          
          {/* Inner star */}
          <path 
            d="M20 8L22.5 16L30 17L24 22.5L26 30L20 25L14 30L16 22.5L10 17L17.5 16L20 8Z" 
            fill="url(#starGradient)"
            className="drop-shadow-lg"
          />
          
          {/* Center circle with pulse */}
          <circle 
            cx="20" 
            cy="20" 
            r="4" 
            fill="white" 
            className="animate-pulse"
          />
          
          {/* Tech rings */}
          <circle 
            cx="20" 
            cy="20" 
            r="6" 
            stroke="white" 
            strokeWidth="0.5" 
            fill="none"
            className="opacity-50"
          />
        </svg>
      </div>
      
      <span className="text-xl font-bold gradient-text group-hover:tracking-wider transition-all duration-300">
        STARLABS
      </span>
    </div>
  );
};

export default Logo;
