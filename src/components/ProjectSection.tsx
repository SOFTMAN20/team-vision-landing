
import React from 'react';
import ElectronicsSection from './project/ElectronicsSection';
import AISection from './project/AISection';
import SoftwareSection from './project/SoftwareSection';
import MLSection from './project/MLSection';

const ProjectSection = () => {
  return (
    <div className="bg-white">
      <ElectronicsSection />
      <AISection />
      <SoftwareSection />
      <MLSection />
    </div>
  );
};

export default ProjectSection;
