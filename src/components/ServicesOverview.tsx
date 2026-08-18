import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Brain, TrendingUp, ArrowUpRight, Palette, Megaphone, Smartphone } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  link: string;
  delay: string;
  isActive?: boolean;
}

const ServiceCard = ({ icon, iconBg, title, description, link, delay, isActive }: ServiceCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/projects#${link}`);
  };

  return (
    <div
      className={`group relative bg-gradient-to-br from-blue-50/80 to-slate-50/80 rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in [animation-delay:${delay}] cursor-pointer ${
        isActive ? 'border-tech-blue' : 'border-gray-200 hover:border-tech-blue/70'
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-tech-blue group-hover:border-tech-blue transition-all duration-300">
          <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
        {description}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
        className="inline-flex items-center gap-2 text-tech-blue font-semibold hover:text-tech-purple transition-colors duration-300"
      >
        Explore
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </div>
  );
};

const ServicesOverview = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6 text-white" />,
      iconBg: "bg-tech-blue",
      title: "Software Development",
      description: "We design and develop secure, scalable custom software, including mobile apps, web apps, and enterprise solutions, tailored to your business needs.",
      link: "web",
      delay: "100ms",
      isActive: true
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      title: "Mobile App Development",
      description: "We build native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences and drive engagement.",
      link: "mobile",
      delay: "200ms"
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      iconBg: "bg-tech-purple",
      title: "AI & Machine Learning",
      description: "We develop AI and machine learning solutions that drive automation, optimize processes, and deliver actionable insights for businesses.",
      link: "ai",
      delay: "300ms"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      iconBg: "bg-tech-teal",
      title: "Digital Transformation",
      description: "We guide businesses through digital transformation, from strategy to implementation, optimizing processes and driving innovation.",
      link: "marketing",
      delay: "400ms"
    },
    {
      icon: <Palette className="h-6 w-6 text-white" />,
      iconBg: "bg-gradient-to-br from-pink-500 to-purple-500",
      title: "Graphic Design",
      description: "We create stunning visual identities, branding materials, and creative designs that capture your brand essence and engage your audience.",
      link: "graphic-design",
      delay: "500ms"
    },
    {
      icon: <Megaphone className="h-6 w-6 text-white" />,
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      title: "Digital Marketing",
      description: "We drive growth through strategic digital marketing campaigns, SEO optimization, social media management, and data-driven marketing strategies.",
      link: "digital-marketing",
      delay: "600ms"
    }
  ];

  return (
    <section className="section-padding bg-white border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore our core service areas and discover how Sachi builds technology that drives business growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
