
import React from 'react';
import { FlaskConical, BarChart, LineChart, Network } from 'lucide-react';
import ProjectCard from './ProjectCard';

const MLSection = () => {
  return (
    <section id="ml" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Machine Learning</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Data-driven ML solutions that uncover insights and automate complex processes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="Deep Learning Image Classifier"
            description="Advanced visual recognition system"
            icon={<FlaskConical className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Multi-class image classification",
              "Transfer learning optimization",
              "Low-resource deployment",
              "Continuous model improvement"
            ]}
            link="https://github.com/example/image-classifier"
          />
          <ProjectCard
            title="Reinforcement Learning Simulator"
            description="Self-improving decision system"
            icon={<Network className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Multi-agent environment modeling",
              "Policy optimization algorithms",
              "Reward function design",
              "Environment variability testing"
            ]}
            link="https://github.com/example/reinforcement-learning"
          />
          <ProjectCard
            title="Predictive Maintenance System"
            description="Industrial equipment failure prediction"
            icon={<LineChart className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Time-series anomaly detection",
              "Sensor data fusion processing",
              "Maintenance schedule optimization",
              "Cost-benefit analysis framework"
            ]}
            link="https://github.com/example/predictive-maintenance"
          />
          <ProjectCard
            title="Financial Market Analyzer"
            description="Advanced trading pattern recognition"
            icon={<BarChart className="h-6 w-6 text-white" />}
            color="bg-tech-orange"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Multi-market correlation analysis",
              "Sentiment-based prediction models",
              "Automated pattern recognition",
              "Backtesting framework for strategies"
            ]}
            link="https://github.com/example/market-analyzer"
          />
        </div>
      </div>
    </section>
  );
};

export default MLSection;
