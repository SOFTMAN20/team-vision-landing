
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
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
