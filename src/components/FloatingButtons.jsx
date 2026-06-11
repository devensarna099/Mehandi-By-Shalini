import React from 'react';
import { Phone, MessageCircle, PhoneCall } from 'lucide-react';
import { CONFIG } from '../config';

const FloatingButtons = () => {
  const phoneUrl = 'tel:+919074011621';
  const whatsappUrl = CONFIG.whatsappBaseUrl;

  return (
    <>
      {/* Desktop / Tablet: Floating circular action buttons in the corner */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        {/* Phone Button */}
        <a
          href={phoneUrl}
          className="w-12 h-12 bg-gold-gradient text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 hover:shadow-gold-accent/40 transition-all duration-300"
          title="Call Now"
          aria-label="Call Now"
        >
          <PhoneCall className="w-5 h-5 animate-pulse" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 hover:shadow-[#25D366]/40 transition-all duration-300"
          title="WhatsApp Inquiry"
          aria-label="WhatsApp Inquiry"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile: Sticky action bar pinned to the absolute bottom of the viewport */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-t border-beige-soft/30 px-4 py-3 flex gap-3 sm:hidden shadow-lg">
        {/* Phone Call Mobile */}
        <a
          href={phoneUrl}
          className="flex-1 flex items-center justify-center gap-2 bg-gold-gradient text-white py-3 rounded-full font-sans text-sm font-semibold shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* WhatsApp Mobile */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-sans text-sm font-semibold shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4.5 h-4.5" />
          WhatsApp Us
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
