import React from 'react';
import { Palette, Layout, Image, Sparkles, Package, FileImage, Video, Pen } from 'lucide-react';
import ProjectCard from './ProjectCard';

const GraphicDesignSection = () => {
  return (
    <section id="graphic-design" className="section-padding border-b bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Graphic Design</span> Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Creative visual solutions that bring your brand to life with stunning designs and compelling visuals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="Brand Identity Design"
            description="Complete brand identity packages"
            icon={<Sparkles className="h-6 w-6 text-white" />}
            color="bg-purple-600"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Logo design and brand guidelines",
              "Color palette and typography selection",
              "Business card and stationery design",
              "Brand style guide documentation"
            ]}
          />
          <ProjectCard
            title="Marketing Materials"
            description="Print and digital marketing designs"
            icon={<FileImage className="h-6 w-6 text-white" />}
            color="bg-pink-600"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Brochures, flyers, and posters",
              "Social media graphics and templates",
              "Email newsletter designs",
              "Banner ads and display advertising"
            ]}
          />
          <ProjectCard
            title="UI/UX Design"
            description="User interface and experience design"
            icon={<Layout className="h-6 w-6 text-white" />}
            color="bg-indigo-600"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1561070791-36c11767b26a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Website and app interface design",
              "Wireframing and prototyping",
              "User flow and experience mapping",
              "Responsive design for all devices"
            ]}
          />
          <ProjectCard
            title="Packaging Design"
            description="Product packaging and labels"
            icon={<Package className="h-6 w-6 text-white" />}
            color="bg-orange-600"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Product packaging design",
              "Label and sticker design",
              "3D mockups and visualization",
              "Print-ready files and specifications"
            ]}
          />
          <ProjectCard
            title="Illustration & Icons"
            description="Custom illustrations and icon sets"
            icon={<Pen className="h-6 w-6 text-white" />}
            color="bg-teal-600"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Custom illustrations for websites and apps",
              "Icon set design and creation",
              "Infographic design",
              "Character design and mascots"
            ]}
          />
          <ProjectCard
            title="Photo Editing"
            description="Professional photo retouching"
            icon={<Image className="h-6 w-6 text-white" />}
            color="bg-blue-600"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Photo retouching and enhancement",
              "Background removal and replacement",
              "Color correction and grading",
              "Batch processing for large volumes"
            ]}
          />
          <ProjectCard
            title="Motion Graphics"
            description="Animated graphics and videos"
            icon={<Video className="h-6 w-6 text-white" />}
            color="bg-red-600"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Animated logos and intros",
              "Explainer video graphics",
              "Social media video content",
              "Presentation animations"
            ]}
          />
          <ProjectCard
            title="Print Design"
            description="Professional print materials"
            icon={<Palette className="h-6 w-6 text-white" />}
            color="bg-green-600"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Magazine and book layout design",
              "Catalog and menu design",
              "Event posters and banners",
              "Print production coordination"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
