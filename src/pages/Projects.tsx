import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingAssistant from '@/components/FloatingAssistant';
import SEO from '@/components/SEO';
import AISection from '@/components/project/AISection';
import MobileSection from '@/components/project/MobileSection';
import WebSection from '@/components/project/WebSection';
import MLSection from '@/components/project/MLSection';
import GraphicDesignSection from '@/components/project/GraphicDesignSection';
import MarketingSection from '@/components/project/MarketingSection';

const Projects = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Our Projects - SACHI TECHNOLOGY | AI, Mobile & Web Development Portfolio"
        description="Explore SACHI TECHNOLOGY's portfolio of innovative projects including AI solutions, mobile apps, web applications, machine learning systems, graphic design, and digital marketing campaigns for businesses in Tanzania and Africa."
        canonical="https://sachitechnology.com/projects"
        keywords="SACHI TECHNOLOGY projects, AI projects Tanzania, mobile app portfolio, web development projects, software portfolio Tanzania, tech projects Africa"
      />
      <Navbar />
      <main className="flex-grow bg-white">
        <section className="section-padding bg-gradient-to-b from-blue-50 to-white border-b">
          <div className="container-custom text-center">
            <h1 className="mb-4 text-3xl md:text-5xl font-bold">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              A look at the software, AI and digital solutions we build for our clients.
            </p>
          </div>
        </section>
        <AISection />
        <MobileSection />
        <WebSection />
        <MLSection />
        <GraphicDesignSection />
        <MarketingSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <FloatingAssistant />
    </div>
  );
};

export default Projects;
