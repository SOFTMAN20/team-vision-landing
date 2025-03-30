
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
}

const ProjectCard = ({ title, description, icon, color, delay }: ProjectCardProps) => (
  <Card className={`card-hover animate-fade-in [animation-delay:${delay}]`}>
    <CardHeader>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardHeader>
    <CardContent>
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
            />
            <ProjectCard
              title="Sensor Networks"
              description="Distributed sensor systems for industrial monitoring and data collection."
              icon={<Computer className="h-6 w-6 text-white" />}
              color="bg-tech-teal"
              delay="200ms"
            />
            <ProjectCard
              title="Custom PCB Design"
              description="Tailored circuit designs for specialized applications and research."
              icon={<Computer className="h-6 w-6 text-white" />}
              color="bg-tech-purple"
              delay="300ms"
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
            />
            <ProjectCard
              title="Natural Language Processing"
              description="Text analysis and generation systems for content creation and analysis."
              icon={<Code className="h-6 w-6 text-white" />}
              color="bg-tech-blue"
              delay="200ms"
            />
            <ProjectCard
              title="Predictive Analytics"
              description="AI-powered forecasting systems for business intelligence."
              icon={<Code className="h-6 w-6 text-white" />}
              color="bg-tech-teal"
              delay="300ms"
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
            />
            <ProjectCard
              title="Mobile Development"
              description="Cross-platform mobile solutions for iOS and Android ecosystems."
              icon={<Book className="h-6 w-6 text-white" />}
              color="bg-tech-blue"
              delay="200ms"
            />
            <ProjectCard
              title="Enterprise Software"
              description="Large-scale business applications with focus on security and performance."
              icon={<Book className="h-6 w-6 text-white" />}
              color="bg-tech-purple"
              delay="300ms"
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
            />
            <ProjectCard
              title="Reinforcement Learning"
              description="Self-improving systems for optimization and decision-making."
              icon={<FlaskConical className="h-6 w-6 text-white" />}
              color="bg-tech-teal"
              delay="200ms"
            />
            <ProjectCard
              title="Data Science"
              description="End-to-end data pipelines for analysis and visualization."
              icon={<FlaskConical className="h-6 w-6 text-white" />}
              color="bg-tech-blue"
              delay="300ms"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
