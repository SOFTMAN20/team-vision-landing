
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Computer, Code, FlaskConical, Book } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: string;
  imageSrc?: string;
}

const ProjectCard = ({ title, description, icon, color, delay, imageSrc }: ProjectCardProps) => (
  <Card className={`card-hover animate-fade-in [animation-delay:${delay}]`}>
    <CardHeader>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <ul className="space-y-2 text-sm">
        <li className="flex items-center">
          <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
          <span>Custom-designed solutions</span>
        </li>
        <li className="flex items-center">
          <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
          <span>Advanced research integration</span>
        </li>
        <li className="flex items-center">
          <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
          <span>Seamless deployment processes</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">View Projects</Button>
    </CardFooter>
  </Card>
);

const ProjectSection = () => {
  return (
    <div className="bg-white">
      {/* Electronics Section */}
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

      {/* AI Section */}
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

      {/* Software Development Section */}
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

      {/* Machine Learning Section */}
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
    </div>
  );
};

export default ProjectSection;
