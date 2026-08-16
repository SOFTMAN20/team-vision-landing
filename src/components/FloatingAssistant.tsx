import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  text: string;
  isBot: boolean;
}

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm SACHI AI Assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "Tell me about your services",
    "I need AI solutions",
    "Mobile app development",
    "Web development",
    "Graphic design services",
    "Contact information",
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: message, isBot: false }]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Thank you for your message! Our team will get back to you soon.";

      if (message.toLowerCase().includes('service')) {
        botResponse = "We offer AI solutions, mobile & web development, machine learning, graphic design, and marketing services. Which one interests you?";
      } else if (message.toLowerCase().includes('ai')) {
        botResponse = "We specialize in AI chatbots, vision systems, NLP, and predictive analytics. Would you like to discuss your AI project?";
      } else if (message.toLowerCase().includes('mobile')) {
        botResponse = "We develop iOS and Android apps with beautiful UI/UX. What kind of mobile app are you looking to build?";
      } else if (message.toLowerCase().includes('web')) {
        botResponse = "We create modern, responsive websites and web applications. Tell me more about your project!";
      } else if (message.toLowerCase().includes('graphic') || message.toLowerCase().includes('design')) {
        botResponse = "Our graphic design services include branding, marketing materials, UI/UX design, and more. What do you need?";
      } else if (message.toLowerCase().includes('contact')) {
        botResponse = "📧 Email: alexmray2002@gmail.com\n📞 Phone: 0750939217\n📍 Location: Dar es Salaam, Tanzania";
      }

      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <Card className="w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] sm:h-[550px] flex flex-col shadow-2xl overflow-hidden max-w-md">
              {/* Header */}
              <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="bg-white/20 p-1.5 sm:p-2 rounded-full"
                  >
                    <Bot className="h-5 w-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold">SACHI TECHNOLOGY AI</h3>
                    <p className="text-white/80 text-xs">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1 rounded transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: message.isBot ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-white text-gray-800 shadow-sm'
                          : 'bg-tech-blue text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <p className="text-xs text-gray-500 text-center mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSendMessage(reply)}
                          className="text-xs bg-white border border-tech-blue text-tech-blue px-3 py-2 rounded-full hover:bg-tech-blue hover:text-white transition-colors"
                        >
                          {reply}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 bg-white border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage(inputValue);
                      }
                    }}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    className="bg-tech-blue hover:bg-tech-purple"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-tech-blue to-tech-purple text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Bot className="h-5 w-5 md:h-6 md:w-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification dot */}
        {!isOpen && (
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 right-0 h-2.5 w-2.5 md:h-3 md:w-3 bg-red-500 rounded-full border-2 border-white"
          />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingAssistant;
