import React from 'react';
import logoAsset from '@/assets/sachi-logo.png.asset.json';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = "", size = 'md' }: LogoProps) => {
  const heightMap = {
    sm: 32,
    md: 40,
    lg: 48
  };

  const logoHeight = heightMap[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoAsset.url}
        alt="SACHI SOFTWARES Logo"
        height={logoHeight}
        width={logoHeight * 2}
        className="h-auto w-auto object-contain rounded-md"
        style={{ maxHeight: `${logoHeight}px` }}
      />
      <span className="text-xl font-bold gradient-text">
        SACHI SOFTWARES
      </span>
    </div>
  );
};

export default Logo;
