
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Computer, FlaskConical, Users } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="gradient-tech p-1 rounded">
            <Computer className="h-6 w-6 text-white" />
          </span>
          <span className="font-bold text-xl">TechVision</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#electronics" className="text-gray-700 hover:text-tech-blue transition-colors">
            Electronics
          </a>
          <a href="#ai" className="text-gray-700 hover:text-tech-blue transition-colors">
            AI
          </a>
          <a href="#software" className="text-gray-700 hover:text-tech-blue transition-colors">
            Software
          </a>
          <a href="#ml" className="text-gray-700 hover:text-tech-blue transition-colors">
            Machine Learning
          </a>
          <a href="#team" className="text-gray-700 hover:text-tech-blue transition-colors">
            Team
          </a>
          <Button className="bg-tech-blue hover:bg-tech-purple">
            Contact Us
          </Button>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md absolute top-full left-0 right-0 z-50">
          <div className="flex flex-col space-y-3">
            <a href="#electronics" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Electronics
            </a>
            <a href="#ai" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              AI
            </a>
            <a href="#software" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Software
            </a>
            <a href="#ml" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Machine Learning
            </a>
            <a href="#team" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Team
            </a>
            <Button className="bg-tech-blue hover:bg-tech-purple w-full" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
