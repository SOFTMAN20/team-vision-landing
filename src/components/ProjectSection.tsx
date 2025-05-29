
import React from 'react';
import AISection from './project/AISection';
import SoftwareSection from './project/SoftwareSection';
import MLSection from './project/MLSection';

const ProjectSection = () => {
  return (
    <div className="bg-white">
      <AISection />
      <SoftwareSection />
      <MLSection />
    </div>
  );
};

export default ProjectSection;
