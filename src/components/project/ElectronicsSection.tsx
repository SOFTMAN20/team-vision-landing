
import React from 'react';
import { Computer } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ElectronicsSection = () => {
  return (
    <section id="electronics" className="section-padding border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="gradient-text">Electronics</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our electronics division creates innovative hardware solutions from concept to production.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Smart Home Systems"
            description="Integrated IoT solutions for modern living spaces with seamless connectivity."
            icon={<Computer className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard
            title="Sensor Networks"
            description="Distributed sensor systems for industrial monitoring and data collection."
            icon={<Computer className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard
            title="Custom PCB Design"
            description="Tailored circuit designs for specialized applications and research."
            icon={<Computer className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default ElectronicsSection;
