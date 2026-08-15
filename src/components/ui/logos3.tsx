"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Technologies We Use",
  logos = [
    {
      id: "logo-1",
      description: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-2",
      description: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-3",
      description: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-4",
      description: "TensorFlow",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-5",
      description: "PostgreSQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-6",
      description: "Docker",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-7",
      description: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-8",
      description: "Firebase",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-9",
      description: "MongoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-10",
      description: "Flutter",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      className: "h-12 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>
      </div>
      <div className="pt-4 md:pt-6 lg:pt-10">
        <div className="relative mx-auto flex items-center justify-center">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="mx-4 md:mx-6 lg:mx-10 flex shrink-0 items-center justify-center">
                    <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                      <img
                        src={logo.image}
                        alt={`${logo.description} logo`}
                        className={logo.className}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-8 md:w-12 lg:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-12 lg:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
