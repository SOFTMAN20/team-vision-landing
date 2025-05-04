
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book, BookOpen, ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LearnMore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        {/* Hero Banner */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">About <span className="gradient-text">TechVision</span></h1>
              <p className="text-gray-600 text-lg mb-6">
                Discover how our innovative solutions are transforming industries and shaping the future of technology.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:200ms]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-tech-blue/10 p-2 rounded-lg">
                    <Book className="h-5 w-5 text-tech-blue" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <h3 className="text-3xl font-bold mb-4">Pioneering the Future of Technology</h3>
                <p className="text-gray-600 mb-6">
                  At TechVision, we're committed to pushing the boundaries of what's possible through innovative 
                  technology solutions. Our mission is to transform complex challenges into elegant solutions 
                  that drive progress across industries.
                </p>
                <p className="text-gray-600">
                  We combine expertise in electronics, artificial intelligence, software development, and 
                  machine learning to create integrated systems that address real-world problems.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-tech-purple/10 p-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold">Our Core Values</h2>
              </div>
              <h3 className="text-3xl font-bold mb-6">What Drives Us Forward</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our values shape everything we do, from how we design our products to how we interact with our clients and partners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-tech-blue" />
                </div>
                <h4 className="text-xl font-bold mb-3">Innovation</h4>
                <p className="text-gray-600">
                  We constantly push boundaries and challenge conventional thinking to create 
                  solutions that haven't been imagined before.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-tech-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-tech-purple" />
                </div>
                <h4 className="text-xl font-bold mb-3">Excellence</h4>
                <p className="text-gray-600">
                  We hold ourselves to the highest standards in everything we do, ensuring 
                  our solutions are robust, reliable, and effective.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-tech-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-tech-teal" />
                </div>
                <h4 className="text-xl font-bold mb-3">Collaboration</h4>
                <p className="text-gray-600">
                  We believe in the power of diverse perspectives and work closely with 
                  our clients to deliver solutions that truly meet their needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="bg-tech-orange/10 p-2 rounded-lg">
                    <ExternalLink className="h-5 w-5 text-tech-orange" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <h3 className="text-3xl font-bold mb-6">Creating Tomorrow's Technology Today</h3>
              </div>

              <div className="space-y-8">
                <p className="text-gray-600 text-lg">
                  We envision a world where technology enhances human capabilities and creates 
                  positive impact across all aspects of society. TechVision is dedicated to making 
                  this vision a reality through our innovative work in key technological domains.
                </p>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h4 className="text-xl font-bold mb-3">Looking Forward</h4>
                  <p className="text-gray-600">
                    Our roadmap includes expanding our research in artificial intelligence, developing 
                    more sustainable electronic solutions, and creating software platforms that make 
                    advanced technology accessible to everyone.
                  </p>
                </div>

                <div className="flex justify-center mt-8">
                  <Button className="bg-tech-blue hover:bg-tech-purple text-lg px-8 py-6" asChild>
                    <a href="/">Explore Our Projects</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMore;
