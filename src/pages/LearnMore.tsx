
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingAssistant from '@/components/FloatingAssistant';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Lightbulb, Target, Users, Award, TrendingUp, Zap, 
  Globe, Shield, CheckCircle, ArrowRight, Sparkles,
  Code, Palette, BarChart, MessageSquare
} from 'lucide-react';

const LearnMore = () => {
  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '30+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: TrendingUp },
  ];

  const services = [
    {
      icon: Code,
      title: 'AI & Software Development',
      description: 'Custom AI solutions, chatbots, and enterprise software tailored to your needs',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Brand identity, marketing materials, and stunning visual designs',
      color: 'from-pink-500 to-orange-500'
    },
    {
      icon: BarChart,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and data-driven growth strategies',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageSquare,
      title: 'Mobile & Web Apps',
      description: 'Responsive, user-friendly applications for all platforms',
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and challenge conventional thinking',
      color: 'bg-yellow-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Highest standards in everything we do, ensuring robust solutions',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Dependable solutions you can trust for your critical operations',
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Fast delivery without compromising quality or attention to detail',
      color: 'bg-purple-500'
    },
  ];

  const timeline = [
    { year: '2019', title: 'Founded', description: 'Started our journey in Dar es Salaam' },
    { year: '2020', title: 'First Major Project', description: 'Delivered enterprise AI solution' },
    { year: '2022', title: 'Expanded Services', description: 'Added graphic design and marketing' },
    { year: '2024', title: 'Growing Strong', description: '50+ successful projects delivered' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-tech-blue via-tech-purple to-tech-teal text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium">Transforming Ideas into Reality</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-yellow-300">SACHI TECHNOLOGY</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                We are a technology company specializing in AI, software development, 
                graphic design, and digital marketing solutions.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100" asChild>
                  <a href="/live-projects">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="/#team">Contact Us</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-tech-blue" />
                    <h3 className="text-3xl md:text-4xl font-bold text-tech-blue mb-2">{stat.number}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We <span className="gradient-text">Do Best</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive technology solutions that drive business growth and innovation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-tech-blue">Our Mission</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pioneering the Future of Technology
                </h2>
                <p className="text-gray-600 text-lg mb-4">
                  At SACHI TECHNOLOGY, we're committed to transforming complex challenges 
                  into elegant solutions that drive progress across industries.
                </p>
                <p className="text-gray-600 text-lg mb-6">
                  We combine expertise in AI, software development, graphic design, and 
                  digital marketing to create integrated solutions that deliver real results.
                </p>
                <div className="flex items-center gap-3 text-tech-blue">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">Based in Dar es Salaam, Tanzania</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Principles that guide our work and define our culture
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full text-center hover:shadow-xl transition-all">
                    <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Milestones that shaped our growth
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-tech-blue to-tech-purple" />
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative mb-8 md:mb-12 flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1" />
                    
                    {/* Center dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-tech-blue rounded-full border-4 border-white shadow-lg items-center justify-center z-10">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    
                    <div className="flex-1">
                      <Card className={`p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} hover:shadow-lg transition-shadow`}>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-tech-blue text-lg">{item.year}</Badge>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-tech-blue to-tech-purple text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's work together to bring your vision to life with cutting-edge technology
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100" asChild>
                  <a href="/#team">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="/live-projects">View Projects</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
      <FloatingAssistant />
    </div>
  );
};

export default LearnMore;
