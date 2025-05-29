
import React from 'react';
import { Smartphone, Tablet, Watch, Zap } from 'lucide-react';
import ProjectCard from './ProjectCard';

const MobileSection = () => {
  return (
    <section id="mobile" className="section-padding border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Mobile App Development</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Cross-platform mobile applications for iOS and Android with native performance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="Mobile Health App"
            description="Cross-platform wellness tracker"
            icon={<Smartphone className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Health data synchronization",
              "Personalized health insights",
              "Fitness routine generator",
              "Nutrition tracking and analysis"
            ]}
          />
          <ProjectCard
            title="E-Learning Mobile App"
            description="Interactive learning platform"
            icon={<Tablet className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Offline content access",
              "Interactive quizzes and assessments",
              "Progress tracking",
              "Multi-language support"
            ]}
          />
          <ProjectCard
            title="Smart Watch Companion"
            description="Wearable device integration"
            icon={<Watch className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Real-time health monitoring",
              "Gesture-based controls",
              "Battery optimization",
              "Cloud synchronization"
            ]}
          />
          <ProjectCard
            title="AR Shopping App"
            description="Augmented reality retail experience"
            icon={<Zap className="h-6 w-6 text-white" />}
            color="bg-tech-orange"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "3D product visualization",
              "Virtual try-on features",
              "Social sharing integration",
              "Secure payment processing"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
