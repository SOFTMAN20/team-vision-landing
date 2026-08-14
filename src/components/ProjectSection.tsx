import React from 'react';
import AISection from './project/AISection';
import MobileSection from './project/MobileSection';
import WebSection from './project/WebSection';
import MLSection from './project/MLSection';
import GraphicDesignSection from './project/GraphicDesignSection';
import MarketingSection from './project/MarketingSection';

const ProjectSection = () => {
  return (
    <div className="bg-white">
      <AISection />
      <MobileSection />
      <WebSection />
      <MLSection />
      <GraphicDesignSection />
      <MarketingSection />
    </div>
  );
};

export default ProjectSection;
