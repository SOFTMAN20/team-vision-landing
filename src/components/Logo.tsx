import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ className = "", size = 'md', showText = true }: LogoProps) => {
  const heightMap = {
    sm: 32,
    md: 40,
    lg: 48
  };

  const logoHeight = heightMap[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/logo1.png"
        alt="SACHI TECHNOLOGY Logo"
        width={logoHeight * 2}
        height={logoHeight}
        loading="eager"
        decoding="async"
        className="h-auto w-auto object-contain rounded-md"
        style={{ maxHeight: `${logoHeight}px` }}
      />
      {showText && (
        <span className="text-xl font-bold gradient-text">
          SACHI TECHNOLOGY
        </span>
      )}
    </div>
  );
};

export default Logo;
