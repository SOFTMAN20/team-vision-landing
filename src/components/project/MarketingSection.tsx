import React from 'react';
import { TrendingUp, Target, Share2, Mail, Search, BarChart, Megaphone, Users } from 'lucide-react';
import ProjectCard from './ProjectCard';

const MarketingSection = () => {
  return (
    <section id="marketing" className="section-padding border-b">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Digital Marketing</span> Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Strategic marketing solutions to grow your business, reach your audience, and maximize ROI.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="Social Media Marketing"
            description="Comprehensive social media management"
            icon={<Share2 className="h-6 w-6 text-white" />}
            color="bg-blue-600"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Content creation and scheduling",
              "Community management and engagement",
              "Paid advertising campaigns",
              "Performance analytics and reporting"
            ]}
          />
          <ProjectCard
            title="SEO Optimization"
            description="Search engine optimization services"
            icon={<Search className="h-6 w-6 text-white" />}
            color="bg-green-600"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1571677208497-6fe4f133e824?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Keyword research and strategy",
              "On-page and technical SEO",
              "Link building and outreach",
              "Local SEO optimization"
            ]}
          />
          <ProjectCard
            title="Content Marketing"
            description="Strategic content creation and distribution"
            icon={<Megaphone className="h-6 w-6 text-white" />}
            color="bg-purple-600"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Blog writing and article creation",
              "Video content production",
              "Content strategy and planning",
              "Distribution and promotion"
            ]}
          />
          <ProjectCard
            title="Email Marketing"
            description="Targeted email campaigns"
            icon={<Mail className="h-6 w-6 text-white" />}
            color="bg-red-600"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Email campaign design and copywriting",
              "List segmentation and management",
              "A/B testing and optimization",
              "Automated drip campaigns"
            ]}
          />
          <ProjectCard
            title="PPC Advertising"
            description="Pay-per-click campaign management"
            icon={<Target className="h-6 w-6 text-white" />}
            color="bg-orange-600"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Google Ads and Bing Ads management",
              "Social media advertising (Facebook, Instagram)",
              "Campaign optimization and bidding strategies",
              "Conversion tracking and ROI analysis"
            ]}
          />
          <ProjectCard
            title="Analytics & Reporting"
            description="Data-driven insights and tracking"
            icon={<BarChart className="h-6 w-6 text-white" />}
            color="bg-indigo-600"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Google Analytics setup and tracking",
              "Custom dashboard creation",
              "Performance reporting and insights",
              "Conversion rate optimization"
            ]}
          />
          <ProjectCard
            title="Brand Strategy"
            description="Strategic brand positioning"
            icon={<TrendingUp className="h-6 w-6 text-white" />}
            color="bg-teal-600"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Market research and competitor analysis",
              "Brand positioning and messaging",
              "Go-to-market strategy",
              "Brand awareness campaigns"
            ]}
          />
          <ProjectCard
            title="Influencer Marketing"
            description="Influencer collaboration and campaigns"
            icon={<Users className="h-6 w-6 text-white" />}
            color="bg-pink-600"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Influencer identification and outreach",
              "Campaign strategy and management",
              "Content collaboration and approval",
              "Performance tracking and ROI measurement"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
