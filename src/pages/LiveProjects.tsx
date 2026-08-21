import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingAssistant from '@/components/FloatingAssistant';
import SEO from '@/components/SEO';
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
      title: 'HDA Company Website',
      description: 'Professional corporate website for HDA Company showcasing their business services and portfolio',
      category: 'Web Development',
      tags: ['React', 'Modern Design', 'SEO', 'Responsive'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://www.hda-company.com/',
      date: '2024-01'
    },
    {
      id: 2,
      title: 'Nyumba Link',
      description: 'Real estate platform connecting property buyers, sellers, and renters in Tanzania',
      category: 'Web Development',
      tags: ['Real Estate', 'Property Listing', 'Search', 'Database'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://www.nyumba-link.com/',
      date: '2024-02'
    },
    {
      id: 3,
      title: 'Gacinia Pharmacy',
      description: 'Modern pharmacy e-commerce platform with online medicine ordering and prescription management',
      category: 'Web Development',
      tags: ['E-commerce', 'Healthcare', 'Pharmacy', 'React'],
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://gaciniapharmacy.vercel.app/',
      date: '2024-03'
    },
    {
      id: 4,
      title: 'Agrogen AI',
      description: 'AI-powered agricultural platform for smart farming, crop management, and yield optimization',
      category: 'AI & Chatbot',
      tags: ['AI', 'Agriculture', 'Machine Learning', 'IoT'],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://agrogenaii.vercel.app/',
      date: '2024-01'
    },
    {
      id: 5,
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot with natural language processing for 24/7 customer support',
      category: 'AI & Chatbot',
      tags: ['AI', 'NLP', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://www.chatbot.com/chatbot-demo/',
      date: '2024-01'
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with cart, checkout, and order management',
      category: 'Web Development',
      tags: ['React', 'E-commerce', 'Payment', 'Cart'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://demo.vercel.store/',
      date: '2024-02'
    },
    {
      id: 7,
      title: 'Task Management App',
      description: 'Collaborative project management tool with kanban boards and team features',
      category: 'Web Development',
      tags: ['React', 'TypeScript', 'Collaboration', 'Productivity'],
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://trello.com/',
      date: '2024-03'
    },
    {
      id: 8,
      title: 'Data Analytics Dashboard',
      description: 'Real-time analytics platform with interactive charts and business intelligence',
      category: 'Machine Learning',
      tags: ['Python', 'Data Viz', 'React', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://www.chartjs.org/samples/latest/',
      date: '2024-01'
    },
    {
      id: 9,
      title: 'Brand Identity Design',
      description: 'Complete branding solution with logo, color schemes, and brand guidelines',
      category: 'Graphic Design',
      tags: ['Branding', 'Logo Design', 'Identity', 'Visual'],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://www.behance.net/gallery/brand-identity',
      date: '2024-02'
    },
    {
      id: 10,
      title: 'Social Media Campaign',
      description: 'Multi-platform marketing campaign with content strategy and engagement tracking',
      category: 'Marketing',
      tags: ['Social Media', 'Content', 'Strategy', 'Engagement'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://buffer.com/',
      date: '2024-03'
    },
    {
      id: 11,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans and progress monitoring',
      category: 'Mobile Apps',
      tags: ['React Native', 'Fitness', 'Health', 'Mobile'],
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://www.myfitnesspal.com/',
      date: '2024-01'
    },
    {
      id: 12,
      title: 'Whinta Voice AI',
      description: 'Advanced voice AI technology for natural conversations and voice-powered applications',
      category: 'AI & Chatbot',
      tags: ['Voice AI', 'Speech Recognition', 'NLP', 'Conversational AI'],
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://whinta.com/whinta-voice',
      date: '2024-02'
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Live Projects - SACHI TECHNOLOGY | Active AI & Software Development Projects"
        description="Browse SACHI TECHNOLOGY's live projects and active deployments. See our AI solutions, mobile applications, web platforms, and digital solutions in action for clients across Tanzania and Africa."
        canonical="https://sachitechnology.com/live-projects"
        keywords="live projects Tanzania, active software projects, deployed AI solutions, live mobile apps, production web applications, SACHI TECHNOLOGY portfolio"
      />
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
                        width="600"
                        height="400"
                        loading="lazy"
                        decoding="async"
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
