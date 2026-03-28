
import React from 'react';
import { Globe, Building2, Pill, Home } from 'lucide-react';
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
            Real-world web applications we've built for our clients across industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="HDA Company"
            description="Corporate business website"
            icon={<Building2 className="h-6 w-6 text-white" />}
            color="bg-tech-orange"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://www.hda-company.com/"
            bulletPoints={[
              "Modern corporate design",
              "Responsive layout",
              "Service showcase",
              "Client engagement features"
            ]}
          />
          <ProjectCard
            title="Gacinia Pharmacy"
            description="Online pharmacy platform"
            icon={<Pill className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://gaciniapharmacy.vercel.app/"
            bulletPoints={[
              "Product catalog & search",
              "Online ordering system",
              "Healthcare information hub",
              "Mobile-friendly interface"
            ]}
          />
          <ProjectCard
            title="Nyumba Link"
            description="Real estate listing platform"
            icon={<Home className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://www.nyumba-link.com/"
            bulletPoints={[
              "Property search & filtering",
              "Interactive listing maps",
              "Agent & owner connections",
              "Virtual property tours"
            ]}
          />
          <ProjectCard
            title="Afrimed Technologies"
            description="Medical equipment supplier"
            icon={<Globe className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://www.afrimedtechnologies.com/"
            bulletPoints={[
              "Product catalog system",
              "Healthcare equipment showcase",
              "200+ healthcare partners",
              "Blog & resource center"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default WebSection;
