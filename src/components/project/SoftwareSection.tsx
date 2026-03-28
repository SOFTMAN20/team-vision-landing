
import React from 'react';
import { Building2, Pill, Home, Globe } from 'lucide-react';
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
            Full-stack software solutions we've delivered for clients across industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="HDA Company"
            description="Corporate business platform"
            icon={<Building2 className="h-6 w-6 text-white" />}
            color="bg-tech-orange"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://www.hda-company.com/"
            bulletPoints={[
              "Custom CMS integration",
              "Business process automation",
              "Scalable cloud architecture",
              "Performance optimized"
            ]}
          />
          <ProjectCard
            title="Gacinia Pharmacy"
            description="Healthcare software solution"
            icon={<Pill className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://gaciniapharmacy.vercel.app/"
            bulletPoints={[
              "Inventory management system",
              "Order processing pipeline",
              "Secure data handling",
              "Real-time stock tracking"
            ]}
          />
          <ProjectCard
            title="Nyumba Link"
            description="Real estate management system"
            icon={<Home className="h-6 w-6 text-white" />}
            color="bg-tech-teal"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://www.nyumba-link.com/"
            bulletPoints={[
              "Property listing engine",
              "User authentication system",
              "Search & filter algorithms",
              "Geolocation services"
            ]}
          />
          <ProjectCard
            title="Afrimed Technologies"
            description="Medical equipment platform"
            icon={<Globe className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://www.afrimedtechnologies.com/"
            bulletPoints={[
              "E-commerce product catalog",
              "Database-driven inventory",
              "Blog content management",
              "Multi-role admin panel"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
