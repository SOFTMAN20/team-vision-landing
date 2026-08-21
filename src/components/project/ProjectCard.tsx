
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: string;
  imageSrc: string;
  bulletPoints?: string[];
  link?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  icon, 
  color, 
  delay, 
  imageSrc,
  bulletPoints = [],
  link
}: ProjectCardProps) => (
  <Card className={`card-hover animate-fade-in [animation-delay:${delay}] h-full flex flex-col`}>
    <CardHeader className="pb-3">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      <CardDescription className="text-sm md:text-base">{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="mb-4 overflow-hidden rounded-md">
        <img 
          src={imageSrc} 
          alt={title}
          width="600"
          height="400"
          loading="lazy"
          decoding="async" 
          className="w-full h-48 md:h-56 object-cover transition-transform hover:scale-105"
        />
      </div>
      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="space-y-2 text-xs md:text-sm">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2 mt-1.5"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </CardContent>
  </Card>
);

export default ProjectCard;
