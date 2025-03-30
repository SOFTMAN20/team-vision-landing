
import React from 'react';
import { Computer, Cpu, Wifi, Smartphone } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ElectronicsSection = () => {
  return (
    <section id="electronics" className="section-padding border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Electronics</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Our electronics division creates innovative hardware solutions from concept to production.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="Smart Home Hub"
            description="Centralized IoT control system"
            icon={<Computer className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Voice-controlled home automation",
              "Energy consumption monitoring",
              "Customizable automation routines",
              "Secure multi-device integration"
            ]}
            link="https://github.com/example/smart-home-hub"
          />
          <ProjectCard
            title="Industrial Sensor Network"
            description="Distributed monitoring solution"
            icon={<Wifi className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Real-time environmental monitoring",
              "Low-power mesh networking",
              "Cloud-based data aggregation",
              "Predictive maintenance alerts"
            ]}
            link="https://github.com/example/sensor-network"
          />
          <ProjectCard
            title="Custom PCB Design"
            description="Specialized circuit solutions"
            icon={<Cpu className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Multi-layer design optimization",
              "Signal integrity analysis",
              "Power delivery optimization",
              "Thermal management solutions"
            ]}
            link="https://github.com/example/custom-pcb-design"
          />
          <ProjectCard
            title="Wearable Health Monitor"
            description="Medical-grade tracking device"
            icon={<Smartphone className="h-6 w-6 text-white" />}
            color="bg-tech-orange"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Continuous vital signs monitoring",
              "Medical-grade sensor integration",
              "Long battery life optimization",
              "HIPAA-compliant data transmission"
            ]}
            link="https://github.com/example/wearable-health-monitor"
          />
        </div>
      </div>
    </section>
  );
};

export default ElectronicsSection;
