import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingAssistant from '@/components/FloatingAssistant';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  date: string;
}

const LiveProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Chatbot', 'Mobile Apps', 'Web Development', 'Machine Learning', 'Graphic Design', 'Marketing'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot with natural language processing for 24/7 customer support',
      category: 'AI & Chatbot',
      tags: ['AI', 'NLP', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://example.com/chatbot',
      githubUrl: 'https://github.com/example/chatbot',
      date: '2024-01'
    },
    {
      id: 2,
      title: 'E-Commerce Mobile App',
      description: 'Cross-platform shopping app with payment integration and real-time tracking',
      category: 'Mobile Apps',
      tags: ['React Native', 'Firebase', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://example.com/ecommerce',
      date: '2024-02'
    },
    {
      id: 3,
      title: 'Restaurant Management System',
      description: 'Full-stack web application for restaurant operations and online ordering',
      category: 'Web Development',
      tags: ['React', 'TypeScript', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://example.com/restaurant',
      githubUrl: 'https://github.com/example/restaurant',
      date: '2024-03'
    },
    {
      id: 4,
      title: 'Predictive Analytics Platform',
      description: 'ML-powered platform for business forecasting and data visualization',
      category: 'Machine Learning',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://example.com/analytics',
      date: '2024-01'
    },
    {
      id: 5,
      title: 'Brand Identity Package',
      description: 'Complete branding solution including logo, guidelines, and marketing materials',
      category: 'Graphic Design',
      tags: ['Illustrator', 'Photoshop', 'Figma'],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://example.com/branding',
      date: '2024-02'
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      description: 'Multi-platform marketing campaign with 300% engagement increase',
      category: 'Marketing',
      tags: ['Social Media', 'Content Strategy', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://example.com/campaign',
      date: '2024-03'
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-tech-blue to-tech-purple text-white py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Live Projects
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Explore our portfolio of successful projects and live applications
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50 sticky top-[73px] z-30 shadow-sm">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-tech-blue text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-tech-blue">{project.category}</Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        {new Date(project.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="gap-3">
                      {project.liveUrl && (
                        <Button
                          asChild
                          className="flex-1 bg-tech-blue hover:bg-tech-purple"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-gray-500 text-xl">No projects found in this category</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-tech-blue to-tech-purple text-white py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's bring your ideas to life with cutting-edge technology
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-tech-blue hover:bg-gray-100"
            >
              <a href="/#team">Contact Us</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
      <FloatingAssistant />
    </div>
  );
};

export default LiveProjects;
