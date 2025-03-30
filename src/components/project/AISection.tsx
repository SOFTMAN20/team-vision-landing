
import React from 'react';
import { Code } from 'lucide-react';
import ProjectCard from './ProjectCard';

const AISection = () => {
  return (
    <section id="ai" className="section-padding border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="gradient-text">AI</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cutting-edge artificial intelligence solutions solving complex problems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Computer Vision"
            description="Advanced image recognition systems for security and analytics."
            icon={<Code className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard
            title="Natural Language Processing"
            description="Text analysis and generation systems for content creation and analysis."
            icon={<Code className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard
            title="Predictive Analytics"
            description="AI-powered forecasting systems for business intelligence."
            icon={<Code className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default AISection;
