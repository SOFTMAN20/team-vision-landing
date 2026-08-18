import { 
  Building2, 
  Heart, 
  ShieldCheck, 
  Sprout, 
  Landmark, 
  Truck, 
  HardHat,
  Users 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
}

const IndustryCard = ({ icon, title, delay }: IndustryCardProps) => (
  <Card className={`p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100 hover:scale-105 animate-fade-in border-slate-200 [animation-delay:${delay}]`}>
    <div className="flex justify-center mb-4 md:mb-5">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-700 flex items-center justify-center shadow-md">
        <div className="text-slate-300">
          {icon}
        </div>
      </div>
    </div>
    <h3 className="text-base md:text-lg font-semibold text-slate-700">
      {title}
    </h3>
  </Card>
);

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Building2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
      title: "Banking & FinTech",
      delay: "100ms"
    },
    {
      icon: <Users className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
      title: "Non-Profit & NGOs",
      delay: "200ms"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
      title: "Insurance",
      delay: "300ms"
    },
    {
      icon: <Sprout className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
      title: "Agriculture",
      delay: "400ms"
    },
    {
      icon: <Heart className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
      title: "Healthcare",
      delay: "500ms"
    },
    {
      icon: <Landmark className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
      title: "Government",
      delay: "600ms"
    },
    {
      icon: <Truck className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
      title: "Logistics & Supply Chain",
      delay: "700ms"
    },
    {
      icon: <HardHat className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
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
