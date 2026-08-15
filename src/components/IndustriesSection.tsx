import { 
  Building2, 
  Heart, 
  Shield, 
  Sprout, 
  Landmark, 
  Truck, 
  Factory,
  HandHeart 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
}

const IndustryCard = ({ icon, title, delay }: IndustryCardProps) => (
  <Card className={`p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-50 to-white hover:scale-105 animate-fade-in [animation-delay:${delay}]`}>
    <div className="flex justify-center mb-3 md:mb-4">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-tech-blue/10 flex items-center justify-center">
        <div className="text-tech-blue">
          {icon}
        </div>
      </div>
    </div>
    <h3 className="text-base md:text-lg font-semibold text-gray-800">
      {title}
    </h3>
  </Card>
);

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Banking & FinTech",
      delay: "100ms"
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Non-Profit & NGOs",
      delay: "200ms"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance",
      delay: "300ms"
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Agriculture",
      delay: "400ms"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      delay: "500ms"
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Government",
      delay: "600ms"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics & Supply Chain",
      delay: "700ms"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Mining",
      delay: "800ms"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 px-4">
          <p className="text-tech-blue font-semibold uppercase tracking-wider mb-2 md:mb-3 text-sm md:text-base">
            INDUSTRIES
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Build and scale with us <br className="hidden sm:block" />
            <span className="gradient-text">in your domain</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            We serve diverse industries with tailored technology solutions that drive growth and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              delay={industry.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
