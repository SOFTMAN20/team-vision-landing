
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Scene3D from './Scene3D';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in [animation-delay:200ms]">
          <div className="mb-4">
            <span className="text-tech-blue font-semibold text-lg">Welcome to STARLABS</span>
          </div>
          <h1 className="mb-4">
            Pioneering the future of <span className="gradient-text">technology</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            We specialize in cutting-edge solutions across AI, Software Development, 
            and Machine Learning to transform ideas into impactful innovations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-tech-blue hover:bg-tech-purple text-lg px-8 py-6" onClick={() => document.getElementById('ai')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Projects
            </Button>
            <Button variant="outline" className="text-tech-blue border-tech-blue hover:bg-tech-blue/10 text-lg px-8 py-6" asChild>
              <Link to="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] animate-fade-in [animation-delay:400ms]">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <Scene3D />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
