import React from 'react';
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingAssistant from '@/components/FloatingAssistant';

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section for Team Page */}
        <section className="bg-gradient-to-br from-tech-blue to-tech-purple py-20 md:py-32">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-tech-teal">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              The talented individuals behind Sachi's innovative solutions
            </p>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <FloatingAssistant />
    </div>
  );
};

export default Team;
