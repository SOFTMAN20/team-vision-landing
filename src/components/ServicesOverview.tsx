import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  delay: string;
  isActive?: boolean;
}

const ServiceCard = ({ image, title, description, link, delay, isActive }: ServiceCardProps) => {
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
      {/* Image Container */}
      <div className="mb-6">
        <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
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
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop", 
      title: "Software Development",
      description: "We design and develop secure, scalable custom software, including mobile apps, web apps, and enterprise solutions, tailored to your business needs.",
      link: "web",
      delay: "100ms",
      isActive: true
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      title: "Mobile App Development",
      description: "We build native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences and drive engagement.",
      link: "mobile",
      delay: "200ms"
    },
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      title: "AI & Machine Learning",
      description: "We develop AI and machine learning solutions that drive automation, optimize processes, and deliver actionable insights for businesses.",
      link: "ai",
      delay: "300ms"
    },
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      title: "Digital Transformation",
      description: "We guide businesses through digital transformation, from strategy to implementation, optimizing processes and driving innovation.",
      link: "marketing",
      delay: "400ms"
    },
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      title: "Graphic Design",
      description: "We create stunning visual identities, branding materials, and creative designs that capture your brand essence and engage your audience.",
      link: "graphic-design",
      delay: "500ms"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
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
