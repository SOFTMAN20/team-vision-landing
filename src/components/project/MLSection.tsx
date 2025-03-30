
import React from 'react';
import { FlaskConical } from 'lucide-react';
import ProjectCard from './ProjectCard';

const MLSection = () => {
  return (
    <section id="ml" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="gradient-text">Machine Learning</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Data-driven ML solutions that uncover insights and automate complex processes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Deep Learning"
            description="Neural network architectures for complex pattern recognition tasks."
            icon={<FlaskConical className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard
            title="Reinforcement Learning"
            description="Self-improving systems for optimization and decision-making."
            icon={<FlaskConical className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard
            title="Data Science"
            description="End-to-end data pipelines for analysis and visualization."
            icon={<FlaskConical className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default MLSection;
