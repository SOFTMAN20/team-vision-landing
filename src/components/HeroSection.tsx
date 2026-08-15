
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: "/ai app.png",
      alt: "AI Applications - SACHI TECHNOLOGY"
    },
    {
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=75",
      alt: "AI Technology and Innovation - SACHI TECHNOLOGY"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in [animation-delay:200ms] text-center md:text-left">
          <div className="mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-2 md:px-4 md:py-2 rounded-full">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-tech-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.4 2.85a1 1 0 00-1.8 0l-7 14a1 1 0 001.8.9L5.5 16h9l1.1 1.75a1 1 0 001.8-.9l-7-14zM7.62 14L10 9.24 12.38 14H7.62z"/>
              </svg>
              <span className="text-tech-blue font-semibold text-xs md:text-sm lg:text-base">Enterprise AI & Software Development Company in Tanzania</span>
            </div>
          </div>
          <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            We build <span className="gradient-text">AI-Powered digital solutions</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
            We build custom enterprise software solutions, AI powered systems, mobile apps, and software solutions that help businesses in Tanzania and Africa automate operations, scale faster, and compete globally.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            <Button className="bg-tech-blue hover:bg-tech-purple text-base md:text-lg px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto" onClick={() => document.getElementById('ai')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Projects
            </Button>
            <Button variant="outline" className="text-tech-blue border-tech-blue hover:bg-tech-blue/10 text-base md:text-lg px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto" asChild>
              <Link to="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] animate-fade-in [animation-delay:400ms]">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 rounded-2xl overflow-hidden">
            {/* Animated gradient blobs */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-tech-blue/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tech-purple/20 rounded-full blur-3xl animate-pulse [animation-delay:500ms]"></div>
            
            {/* Floating rings animation */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-tech-blue/30 rounded-full animate-ping [animation-duration:3s]"></div>
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-tech-purple/30 rounded-full animate-ping [animation-duration:4s] [animation-delay:1s]"></div>
            
            {/* Book flip animation with two images */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs perspective-1000">
              <div className="relative w-full h-[280px] md:h-[320px]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 transform-style-3d ${
                      currentImage === index
                        ? 'opacity-100 rotate-y-0 z-20'
                        : index === (currentImage + 1) % images.length
                        ? 'opacity-0 rotate-y-90 z-10'
                        : 'opacity-0 -rotate-y-90 z-0'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="relative group h-full">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="relative rounded-lg shadow-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading={index === 0 ? "eager" : "lazy"}
                        width="800"
                        height="600"
                        decoding="async"
                      />
                      
                      {/* Scanning line effect */}
                      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-75 animate-[slide-down_3s_ease-in-out_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Image indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === index 
                        ? 'bg-tech-blue w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
