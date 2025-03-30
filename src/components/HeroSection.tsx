
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in [animation-delay:200ms]">
          <h1 className="mb-4">
            Pioneering the future of <span className="gradient-text">technology</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            We specialize in cutting-edge solutions across Electronics, AI, Software Development, 
            and Machine Learning to transform ideas into impactful innovations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-tech-blue hover:bg-tech-purple text-lg px-8 py-6">
              Explore Projects
            </Button>
            <Button variant="outline" className="text-tech-blue border-tech-blue hover:bg-tech-blue/10 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] animate-fade-in [animation-delay:400ms]">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 rounded-2xl overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-tech-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tech-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="AI Robot" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
