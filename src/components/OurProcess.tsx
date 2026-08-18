import React, { useEffect, useRef, useState } from 'react';
import { Search, Target, FileText, Code, TestTube, Rocket, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  processes: {
    title: string;
    description: string;
  }[];
  tools?: string[];
  gradient: string;
  color: string;
}

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Ideation & Discovery',
      description: 'Our process begins with ideation and discovery, where we dive deep into your vision, goals, and challenges. We explore the best approaches, ensuring the final solution aligns perfectly with your business objectives and user needs.',
      icon: <Search className="h-8 w-8 text-white" />,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      color: 'blue',
      processes: [
        {
          title: 'Research & Analysis',
          description: 'We conduct in-depth research to understand your market, competitors, and users, ensuring data-driven decisions throughout development.'
        },
        {
          title: 'Goal Setting & Alignment',
          description: 'We define clear goals and align them with your business needs, ensuring our solutions drive impact and measurable results.'
        },
        {
          title: 'Solution Blueprint',
          description: 'We create a strategic blueprint for the project, outlining the technology stack, architecture, and roadmap for success.'
        }
      ],
      tools: ['Figma', 'Trello', 'Miro']
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'We transform ideas into visual concepts through wireframes, mockups, and interactive prototypes. Our design process focuses on user experience, ensuring intuitive interfaces that delight users.',
      icon: <Target className="h-8 w-8 text-white" />,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      color: 'purple',
      processes: [
        {
          title: 'UX/UI Design',
          description: 'We craft beautiful, user-centered interfaces that prioritize usability and aesthetics, creating memorable digital experiences.'
        },
        {
          title: 'Interactive Prototypes',
          description: 'We build clickable prototypes that allow you to experience the product before development, ensuring alignment and reducing risks.'
        },
        {
          title: 'Design System Creation',
          description: 'We establish consistent design patterns, components, and guidelines to maintain brand coherence across all touchpoints.'
        }
      ],
      tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision']
    },
    {
      number: '03',
      title: 'Development & Implementation',
      description: 'Our expert developers bring designs to life using cutting-edge technologies and best practices. We build scalable, secure, and high-performance solutions tailored to your requirements.',
      icon: <Code className="h-8 w-8 text-white" />,
      gradient: 'bg-gradient-to-br from-teal-500 to-teal-600',
      color: 'teal',
      processes: [
        {
          title: 'Agile Development',
          description: 'We follow agile methodologies with regular sprints, ensuring flexibility, transparency, and continuous improvement throughout the project.'
        },
        {
          title: 'Code Quality & Standards',
          description: 'We write clean, maintainable code following industry best practices, ensuring long-term sustainability and ease of updates.'
        },
        {
          title: 'Continuous Integration',
          description: 'We implement CI/CD pipelines for automated testing and deployment, ensuring rapid and reliable delivery of features.'
        }
      ],
      tools: ['React', 'Node.js', 'Python', 'AWS', 'Docker']
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'We rigorously test every aspect of your solution to ensure reliability, performance, and security. Our QA process catches issues early, delivering a polished product.',
      icon: <TestTube className="h-8 w-8 text-white" />,
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
      color: 'orange',
      processes: [
        {
          title: 'Automated Testing',
          description: 'We implement comprehensive test suites including unit, integration, and end-to-end tests to ensure code quality and prevent regressions.'
        },
        {
          title: 'Manual QA Testing',
          description: 'Our QA specialists perform thorough manual testing across devices and browsers to catch edge cases and ensure seamless user experiences.'
        },
        {
          title: 'Performance Optimization',
          description: 'We analyze and optimize application performance, ensuring fast load times and smooth interactions across all platforms.'
        }
      ],
      tools: ['Jest', 'Cypress', 'Selenium', 'Postman']
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'We handle the complete deployment process, ensuring a smooth launch with minimal downtime. Our team manages infrastructure, monitoring, and post-launch support.',
      icon: <Rocket className="h-8 w-8 text-white" />,
      gradient: 'bg-gradient-to-br from-green-500 to-green-600',
      color: 'green',
      processes: [
        {
          title: 'Infrastructure Setup',
          description: 'We configure robust, scalable infrastructure using cloud services, ensuring high availability and optimal performance.'
        },
        {
          title: 'Deployment Strategy',
          description: 'We execute carefully planned deployment strategies including blue-green deployments and canary releases to minimize risk.'
        },
        {
          title: 'Monitoring & Support',
          description: 'We implement comprehensive monitoring and provide ongoing support to ensure your solution runs smoothly post-launch.'
        }
      ],
      tools: ['AWS', 'Azure', 'Vercel', 'GitHub Actions']
    },
    {
      number: '06',
      title: 'Maintenance & Evolution',
      description: 'Our partnership continues beyond launch. We provide ongoing maintenance, updates, and enhancements to keep your solution current and competitive.',
      icon: <FileText className="h-8 w-8 text-white" />,
      gradient: 'bg-gradient-to-br from-pink-500 to-pink-600',
      color: 'pink',
      processes: [
        {
          title: 'Regular Updates',
          description: 'We provide regular security patches, bug fixes, and feature updates to keep your application secure and up-to-date.'
        },
        {
          title: 'Performance Monitoring',
          description: 'We continuously monitor application performance and user behavior, identifying opportunities for optimization and growth.'
        },
        {
          title: 'Feature Enhancement',
          description: 'We work with you to evolve your product based on user feedback and market trends, ensuring long-term success.'
        }
      ],
      tools: ['Analytics', 'Sentry', 'New Relic', 'Jira']
    }
  ];

  // Remove all auto-scroll behavior - only manual selection

  const currentStep = processSteps[activeStep];

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 hidden lg:block"
    >
      <div className="container-custom">
        <div className="text-center mb-20">
          <p className="text-tech-blue font-semibold uppercase tracking-wider mb-4">
            OUR PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A collaboration journey,<br />
            <span className="gradient-text">from concept to delivery</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            We follow a proven, collaborative process that takes your project from initial concept to successful launch and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Step Numbers Timeline */}
          <div className="lg:sticky lg:top-32 space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveStep(index);
                }}
                className={`flex items-center gap-6 cursor-pointer transition-all duration-500 ${
                  activeStep === index 
                    ? 'opacity-100 scale-105' 
                    : 'opacity-40 hover:opacity-60 scale-95'
                }`}
              >
                {/* Vertical Line */}
                <div className="relative">
                  <div className={`w-1 h-20 transition-all duration-500 ${
                    activeStep === index 
                      ? step.gradient 
                      : 'bg-gray-300'
                  }`} />
                  {index === processSteps.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gray-300" />
                  )}
                </div>

                {/* Step Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-14 h-14 rounded-xl ${
                      activeStep === index ? step.gradient : 'bg-gray-200'
                    } flex items-center justify-center transition-all duration-500`}>
                      {step.icon}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold uppercase tracking-wider mb-1 ${
                        activeStep === index ? 'text-tech-blue' : 'text-gray-400'
                      }`}>
                        STEP {step.number}
                      </p>
                      <h3 className={`text-xl font-bold transition-colors duration-500 ${
                        activeStep === index ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Active Step Content (Sticky, No Internal Scroll) */}
          <div className="lg:sticky lg:top-32">
            <div 
              key={activeStep}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-xl animate-fade-in"
            >
              {/* Step Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold text-tech-blue uppercase tracking-wider mb-2">
                    STEP {currentStep.number}
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {currentStep.title}
                  </h3>
                </div>
                <div className={`w-16 h-16 rounded-xl ${currentStep.gradient} flex items-center justify-center flex-shrink-0`}>
                  {currentStep.icon}
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {currentStep.description}
              </p>

              {/* Process Details */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 uppercase tracking-wider mb-6 text-sm">
                  Our {currentStep.title} Process
                </h4>
                <div className="space-y-5">
                  {currentStep.processes.map((process, idx) => (
                    <div 
                      key={idx} 
                      className="flex gap-4 animate-fade-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle2 className="h-6 w-6 text-tech-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">
                          {process.title}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              {currentStep.tools && currentStep.tools.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-700 mb-4">
                    Our tools for {currentStep.title}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {currentStep.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-50 text-tech-blue text-sm font-medium rounded-lg border border-blue-100 animate-fade-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 flex justify-center gap-2">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveStep(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === index 
                      ? 'w-8 bg-tech-blue' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-tech-blue text-white font-semibold rounded-xl hover:bg-tech-purple transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Your Project
            </a>
            <a
              href="/projects"
              className="px-8 py-4 bg-white text-tech-blue font-semibold rounded-xl border-2 border-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
