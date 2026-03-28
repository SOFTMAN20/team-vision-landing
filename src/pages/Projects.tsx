
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import hdaImg from '@/assets/projects/hda-company.png';
import gaciniaImg from '@/assets/projects/gacinia-pharmacy.png';
import nyumbaImg from '@/assets/projects/nyumba-link.png';
import afrimedImg from '@/assets/projects/afrimed-technologies.png';

const projects = [
  {
    title: "HDA Company",
    description: "A professional corporate website for Tanzania's premier Mining & Explosives company.",
    url: "https://www.hda-company.com/",
    color: "bg-tech-blue",
    tags: ["Corporate", "Web Development", "Business"],
    image: hdaImg,
  },
  {
    title: "Gacinia Pharmacy",
    description: "A modern pharmacy e-commerce platform for medicines, cosmetics & medical equipment.",
    url: "https://gaciniapharmacy.vercel.app/",
    color: "bg-tech-teal",
    tags: ["Healthcare", "E-Commerce", "Web App"],
    image: gaciniaImg,
  },
  {
    title: "Nyumba Link",
    description: "Tanzania's #1 student housing platform — search, book, and move in hassle-free.",
    url: "https://www.nyumba-link.com/",
    color: "bg-tech-purple",
    tags: ["Real Estate", "Platform", "Full Stack"],
    image: nyumbaImg,
  },
  {
    title: "Afrimed Technologies",
    description: "Healthcare equipment supplier — equipping healthcare with precision & trust.",
    url: "https://www.afrimedtechnologies.com/",
    color: "bg-tech-orange",
    tags: ["Technology", "Healthcare", "Web Development"],
    image: afrimedImg,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                Explore our portfolio of live projects — real solutions we've built for real clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group card-hover animate-fade-in overflow-hidden border-0 shadow-lg"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-48 md:h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${project.color}`}>
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm md:text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-tech-blue hover:bg-tech-purple gap-2">
                        Visit Live Site <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
