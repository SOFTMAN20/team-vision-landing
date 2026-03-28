
import React from 'react';
import { Globe, Cloud, ShieldCheck, Database } from 'lucide-react';
import ProjectCard from './ProjectCard';

const WebSection = () => {
  return (
    <section id="web" className="section-padding border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Web Development</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Modern web applications with responsive design and scalable architecture.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="E-Commerce Platform"
            description="Full-featured online marketplace"
            icon={<Globe className="h-6 w-6 text-white" />}
            color="bg-tech-orange"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Microservices architecture",
              "Secure payment processing",
              "Inventory management system",
              "Analytics dashboard"
            ]}
          />
          <ProjectCard
            title="Enterprise CRM Solution"
            description="Customer relationship management"
            icon={<Cloud className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Customer lifecycle management",
              "Sales pipeline automation",
              "Multi-department coordination",
              "Custom reporting and analytics"
            ]}
          />
          <ProjectCard
            title="Secure Communication Platform"
            description="End-to-end encrypted messaging"
            icon={<ShieldCheck className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Zero-knowledge architecture",
              "Cross-platform synchronization",
              "Secure file sharing",
              "Enterprise compliance features"
            ]}
          />
          <ProjectCard
            title="Data Analytics Dashboard"
            description="Real-time business intelligence"
            icon={<Database className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Interactive data visualization",
              "Custom report generation",
              "API integrations",
              "Performance monitoring"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default WebSection;
