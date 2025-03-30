
import React from 'react';
import { Book, Globe, Cloud, ShieldCheck } from 'lucide-react';
import ProjectCard from './ProjectCard';

const SoftwareSection = () => {
  return (
    <section id="software" className="section-padding border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Software Development</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Robust and scalable software solutions for enterprise and consumer applications.
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
            title="Mobile Health App"
            description="Cross-platform wellness tracker"
            icon={<Book className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Health data synchronization",
              "Personalized health insights",
              "Fitness routine generator",
              "Nutrition tracking and analysis"
            ]}
          />
          <ProjectCard
            title="Enterprise CRM Solution"
            description="Customer relationship management"
            icon={<Cloud className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="300ms"
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
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Zero-knowledge architecture",
              "Cross-platform synchronization",
              "Secure file sharing",
              "Enterprise compliance features"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
