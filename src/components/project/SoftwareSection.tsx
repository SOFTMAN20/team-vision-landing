
import React from 'react';
import { Book } from 'lucide-react';
import ProjectCard from './ProjectCard';

const SoftwareSection = () => {
  return (
    <section id="software" className="section-padding border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="gradient-text">Software Development</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Robust and scalable software solutions for enterprise and consumer applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Web Applications"
            description="Modern, responsive applications built with cutting-edge frameworks."
            icon={<Book className="h-6 w-6 text-white" />}
            color="bg-tech-orange"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard
            title="Mobile Development"
            description="Cross-platform mobile solutions for iOS and Android ecosystems."
            icon={<Book className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard
            title="Enterprise Software"
            description="Large-scale business applications with focus on security and performance."
            icon={<Book className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
