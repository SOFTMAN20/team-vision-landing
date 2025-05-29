
import React from 'react';
import AISection from './project/AISection';
import MobileSection from './project/MobileSection';
import WebSection from './project/WebSection';
import MLSection from './project/MLSection';

const ProjectSection = () => {
  return (
    <div className="bg-white">
      <AISection />
      <MobileSection />
      <WebSection />
      <MLSection />
    </div>
  );
};

export default ProjectSection;
