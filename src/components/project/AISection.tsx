
import React from 'react';
import { Code, Brain, Database, Microscope } from 'lucide-react';
import ProjectCard from './ProjectCard';

const AISection = () => {
  return (
    <section id="ai" className="section-padding border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">AI</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Cutting-edge artificial intelligence solutions solving complex problems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="Vision Security System"
            description="Advanced surveillance with object recognition"
            icon={<Code className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Real-time anomaly detection",
              "Multi-camera coordination",
              "Facial recognition with privacy controls",
              "Automated incident reporting"
            ]}
          />
          <ProjectCard
            title="NLP Content Generator"
            description="AI-powered writing assistant"
            icon={<Brain className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Context-aware content creation",
              "Style matching for brand consistency",
              "Multilingual support for 40+ languages",
              "Sentiment analysis integration"
            ]}
          />
          <ProjectCard
            title="Predictive Analytics Engine"
            description="Business forecasting platform"
            icon={<Database className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Market trend prediction algorithms",
              "Customer behavior modeling",
              "Supply chain optimization",
              "Risk assessment framework"
            ]}
          />
          <ProjectCard
            title="Intelligent Recommendation System"
            description="Personalized content delivery"
            icon={<Microscope className="h-6 w-6 text-white" />}
            color="bg-tech-orange"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "User preference learning",
              "Collaborative filtering algorithms",
              "A/B testing infrastructure",
              "Real-time adaptation to user behavior"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default AISection;
