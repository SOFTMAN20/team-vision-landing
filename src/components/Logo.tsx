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
    <div className={`${className}`}>
      <img 
        src="/logo.png"
        alt="Team Vision Logo"
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
};

export default Logo;
