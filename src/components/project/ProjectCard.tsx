
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: string;
  imageSrc?: string;
}

const ProjectCard = ({ title, description, icon, color, delay, imageSrc }: ProjectCardProps) => (
  <Card className={`card-hover animate-fade-in [animation-delay:${delay}]`}>
    <CardHeader>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <ul className="space-y-2 text-sm">
        <li className="flex items-center">
          <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
          <span>Custom-designed solutions</span>
        </li>
        <li className="flex items-center">
          <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
          <span>Advanced research integration</span>
        </li>
        <li className="flex items-center">
          <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
          <span>Seamless deployment processes</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">View Projects</Button>
    </CardFooter>
  </Card>
);

export default ProjectCard;
