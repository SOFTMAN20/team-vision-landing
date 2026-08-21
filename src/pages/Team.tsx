import React from 'react';
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingAssistant from '@/components/FloatingAssistant';
import SEO from '@/components/SEO';

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Our Team - SACHI TECHNOLOGY | Expert Software Developers in Tanzania"
        description="Meet the expert software developers and AI specialists at SACHI TECHNOLOGY. Our team includes Alex Mray (AI Developer), Victoria Zakaria (Software Architect), Tonny (Mobile Developer), and Frank Elisha (Graphics Designer) - building innovative solutions for Tanzania and Africa."
        canonical="https://sachitechnology.com/team"
        keywords="SACHI TECHNOLOGY team, software developers Tanzania, AI developers Tanzania, mobile app developers Dar es Salaam, software engineers Africa, tech team Tanzania"
      />
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
