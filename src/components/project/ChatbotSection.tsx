import React from 'react';
import { Bot, MessageCircle, Building, Headphones } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ChatbotSection = () => {
  return (
    <section id="chatbots" className="section-padding border-b bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Chatbot</span> Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Intelligent conversational AI that automates customer engagement across WhatsApp, web, and internal company platforms.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="WhatsApp Business Chatbot"
            description="24/7 automated customer support on WhatsApp"
            icon={<MessageCircle className="h-6 w-6 text-white" />}
            color="bg-[#25D366]"
            delay="100ms"
            imageSrc="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Instant replies to FAQs and order inquiries",
              "Product catalog and appointment booking",
              "Human handoff for complex requests",
              "Multi-language support for local customers"
            ]}
          />
          <ProjectCard
            title="Company Internal Chatbot"
            description="Employee assistant for HR, IT, and operations"
            icon={<Building className="h-6 w-6 text-white" />}
            color="bg-tech-purple"
            delay="200ms"
            imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "HR policy and leave balance queries",
              "IT support ticket creation",
              "Document search and knowledge base access",
              "Integration with Slack, Teams, or email"
            ]}
          />
          <ProjectCard
            title="AI Sales Assistant"
            description="Lead qualification and product recommendation"
            icon={<Bot className="h-6 w-6 text-white" />}
            color="bg-tech-blue"
            delay="300ms"
            imageSrc="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Natural lead capture and qualification",
              "Personalized product suggestions",
              "CRM integration and follow-up reminders",
              "Conversation analytics and insights"
            ]}
          />
          <ProjectCard
            title="Customer Support Bot"
            description="Omnichannel support automation"
            icon={<Headphones className="h-6 w-6 text-white" />}
            color="bg-tech-orange"
            delay="400ms"
            imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            bulletPoints={[
              "Web chat, email, and social messaging",
              "Ticket routing and status updates",
              "Sentiment analysis for escalation",
              "Continuous learning from past conversations"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
