
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import OurProcess from '@/components/OurProcess';
import IndustriesSection from '@/components/IndustriesSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingAssistant from '@/components/FloatingAssistant';
import { Logos3 } from '@/components/ui/logos3';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <SEO 
        title="Sachi | SACHI TECHNOLOGY - AI, Software Development & Digital Solutions in Tanzania"
        description="Sachi (SACHI TECHNOLOGY, Sachi Software, SachiTech) - Leading AI apps in Tanzania, software development, mobile apps, web applications, graphic design, and digital marketing company in Dar es Salaam, Tanzania. AI applications and enterprise solutions for Africa."
        canonical="https://sachitechnology.com/"
        keywords="sachi, SACHI, Sachi, SACHI TECHNOLOGY, Sachi Software, SachiTech, AI Tanzania, AI apps in Tanzania, software development Tanzania, software developers in Tanzania, mobile app development Dar es Salaam, web development Tanzania, AI solutions Africa, enterprise software Tanzania"
      />
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        <HeroSection />
        <Logos3 />
        <ProjectSection />
        <OurProcess />
        <IndustriesSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <FloatingAssistant />
    </div>
  );
};

export default Index;
