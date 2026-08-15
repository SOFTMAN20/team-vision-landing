import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = '255750939217'; // WhatsApp number in international format without +
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
    </a>
  );
};

export default WhatsAppFloat;
