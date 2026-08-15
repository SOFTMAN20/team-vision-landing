
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, ChevronDown, ChevronUp, Brain, Smartphone, Globe, Palette, BarChart } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
        <div className="hidden md:flex items-center gap-10">
          <a href="/" className="text-gray-800 hover:text-tech-blue transition-colors font-semibold text-lg">
            Home
          </a>
          <a href="/learn-more" className="text-gray-800 hover:text-tech-blue transition-colors font-semibold text-lg">
            About
          </a>
          
          {/* Services Dropdown with Hover */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-gray-800 hover:text-tech-blue transition-colors font-semibold text-lg outline-none"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border border-gray-200 p-6 z-50">
                <div className="grid grid-cols-2 gap-4">
                  <a href="/#ai" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Brain className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">AI & Machine Learning</h4>
                      <p className="text-sm text-gray-600">AI solutions enhancing decision-making, efficiency, and insights for data-driven growth.</p>
                    </div>
                  </a>
                  
                  <a href="/#web" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                      <Code className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Custom Software Development</h4>
                      <p className="text-sm text-gray-600">Tailored software solutions designed for your unique business challenges and growth needs.</p>
                    </div>
                  </a>
                  
                  <a href="/#mobile" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                      <Smartphone className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Mobile Application</h4>
                      <p className="text-sm text-gray-600">Building impactful mobile apps that offer seamless, engaging user experiences.</p>
                    </div>
                  </a>
                  
                  <a href="/#web" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition-colors">
                      <Globe className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Web Applications</h4>
                      <p className="text-sm text-gray-600">Crafting high-performance, user-friendly web applications tailored to your business needs.</p>
                    </div>
                  </a>
                  
                  <a href="/#graphic-design" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                      <Palette className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Graphic Design</h4>
                      <p className="text-sm text-gray-600">Creative visual solutions that bring your brand to life with stunning designs.</p>
                    </div>
                  </a>
                  
                  <a href="/#marketing" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <BarChart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Digital Marketing</h4>
                      <p className="text-sm text-gray-600">Strategic marketing solutions to grow your business and reach your audience.</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <a href="/live-projects" className="text-gray-800 hover:text-tech-blue transition-colors font-semibold text-lg">
            Projects
          </a>
          <a href="/#team" className="text-gray-800 hover:text-tech-blue transition-colors font-semibold text-lg">
            Team
          </a>
          <a href="/contact" className="text-gray-800 hover:text-tech-blue transition-colors font-semibold text-lg">
            Contact
          </a>
          
          <Button className="bg-tech-blue hover:bg-tech-purple text-base font-semibold px-6 ml-2" asChild>
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
        <div className="md:hidden bg-white py-2 px-4 shadow-md absolute top-full left-0 right-0 z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <a href="/" className="text-gray-800 py-2 hover:text-tech-blue transition-colors font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="/learn-more" className="text-gray-800 py-2 hover:text-tech-blue transition-colors font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between text-gray-800 py-2 hover:text-tech-blue transition-colors font-semibold text-lg"
              >
                <span>Services</span>
                {isMobileServicesOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              
              {isMobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 pb-2">
                  <a href="/#ai" className="flex items-center gap-2 py-2 text-gray-700 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                    <Brain className="h-4 w-4 text-blue-600" />
                    <span className="text-base">AI & Machine Learning</span>
                  </a>
                  <a href="/#web" className="flex items-center gap-2 py-2 text-gray-700 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                    <Code className="h-4 w-4 text-purple-600" />
                    <span className="text-base">Custom Software</span>
                  </a>
                  <a href="/#mobile" className="flex items-center gap-2 py-2 text-gray-700 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                    <Smartphone className="h-4 w-4 text-cyan-600" />
                    <span className="text-base">Mobile Apps</span>
                  </a>
                  <a href="/#web" className="flex items-center gap-2 py-2 text-gray-700 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                    <Globe className="h-4 w-4 text-indigo-600" />
                    <span className="text-base">Web Applications</span>
                  </a>
                  <a href="/#graphic-design" className="flex items-center gap-2 py-2 text-gray-700 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                    <Palette className="h-4 w-4 text-pink-600" />
                    <span className="text-base">Graphic Design</span>
                  </a>
                  <a href="/#marketing" className="flex items-center gap-2 py-2 text-gray-700 hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                    <BarChart className="h-4 w-4 text-green-600" />
                    <span className="text-base">Digital Marketing</span>
                  </a>
                </div>
              )}
            </div>
            
            <a href="/live-projects" className="text-gray-800 py-2 hover:text-tech-blue transition-colors font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="/#team" className="text-gray-800 py-2 hover:text-tech-blue transition-colors font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>
              Team
            </a>
            <a href="/contact" className="text-gray-800 py-2 hover:text-tech-blue transition-colors font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <div className="border-t border-gray-200 pt-3">
              <Button className="w-full bg-tech-blue hover:bg-tech-purple text-base font-semibold" asChild onClick={() => setIsMenuOpen(false)}>
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
