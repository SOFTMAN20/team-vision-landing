
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Computer, FlaskConical, Users, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <a href="/">
          <Logo showText={false} />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-gray-700 hover:text-tech-blue transition-colors font-medium">
            Home
          </a>
          <a href="/learn-more" className="text-gray-700 hover:text-tech-blue transition-colors font-medium">
            About
          </a>
          <a href="/live-projects" className="text-gray-700 hover:text-tech-blue transition-colors font-medium">
            Projects
          </a>
          <a href="/#team" className="text-gray-700 hover:text-tech-blue transition-colors font-medium">
            Team
          </a>
          <a href="/contact" className="text-gray-700 hover:text-tech-blue transition-colors font-medium">
            Contact
          </a>
          
          <Button className="bg-tech-blue hover:bg-tech-purple" asChild>
            <a href="/contact">Get Started</a>
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
            <a href="/" className="text-gray-700 py-2 hover:text-tech-blue transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="/learn-more" className="text-gray-700 py-2 hover:text-tech-blue transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="/live-projects" className="text-gray-700 py-2 hover:text-tech-blue transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="/#team" className="text-gray-700 py-2 hover:text-tech-blue transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Team
            </a>
            <a href="/contact" className="text-gray-700 py-2 hover:text-tech-blue transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <div className="border-t border-gray-200 pt-3">
              <Button className="w-full bg-tech-blue hover:bg-tech-purple" asChild onClick={() => setIsMenuOpen(false)}>
                <a href="/contact">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
