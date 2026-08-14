import React from 'react';
import logoImg from '@/assets/mustech-logo.png';

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
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoImg}
        alt="SACHI SOFTWARES Logo"
        width={logoSize}
        height={logoSize}
        className="rounded-md object-contain"
      />
      <span className="text-xl font-bold gradient-text">
        SACHI SOFTWARES
      </span>
    </div>
  );
};

export default Logo;
