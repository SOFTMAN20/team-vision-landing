
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
        <a href="#">
          <Logo />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#ai" className="text-gray-700 hover:text-tech-blue transition-colors">
            AI
          </a>
          <a href="#mobile" className="text-gray-700 hover:text-tech-blue transition-colors">
            Mobile Apps
          </a>
          <a href="#web" className="text-gray-700 hover:text-tech-blue transition-colors">
            Web Development
          </a>
          <a href="#ml" className="text-gray-700 hover:text-tech-blue transition-colors">
            Machine Learning
          </a>
          <a href="#team" className="text-gray-700 hover:text-tech-blue transition-colors">
            Team
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-tech-blue hover:bg-tech-purple">
                Contact Us
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 p-3">
              <div className="space-y-4 py-2">
                <h4 className="text-lg font-bold">Contact Information</h4>
                <DropdownMenuItem className="flex items-center gap-3 cursor-default">
                  <Mail className="text-tech-blue" />
                  <a href="mailto:alexmray2002@gmail.com" className="hover:underline">
                    alexmray2002@gmail.com
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 cursor-default">
                  <Phone className="text-tech-blue" />
                  <span>0750939217</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 cursor-default">
                  <MapPin className="text-tech-blue" />
                  <span>Mbeya and Dar es Salaam, Tanzania</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
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
            <a href="#ai" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              AI
            </a>
            <a href="#mobile" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Mobile Apps
            </a>
            <a href="#web" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Web Development
            </a>
            <a href="#ml" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Machine Learning
            </a>
            <a href="#team" className="text-gray-700 py-2 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Team
            </a>
            <div className="border-t border-gray-200 pt-3 space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="text-tech-blue h-5 w-5" />
                <a href="mailto:alexmray2002@gmail.com" className="text-gray-700 hover:text-tech-blue transition-colors">
                  alexmray2002@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-tech-blue h-5 w-5" />
                <span className="text-gray-700">0750939217</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-tech-blue h-5 w-5" />
                <span className="text-gray-700">Mbeya and Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
