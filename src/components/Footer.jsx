import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONFIG } from '../config';

// Custom inline SVG components for brand logos (since Lucide removed brand icons)
const InstagramIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0 -5 5v3h-3v4h3v8h4v-8h3l1 -4h-4v-3a1 1 0 0 1 1 -1h3z"></path>
  </svg>
);

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Products', href: '#products' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Bridal Mehndi', href: '#services' },
    { name: 'Engagement Mehndi', href: '#services' },
    { name: 'Arabic Mehndi', href: '#services' },
    { name: 'Portrait Mehndi', href: '#services' },
    { name: 'Rajasthani Mehndi', href: '#services' },
    { name: 'Destination Wedding', href: '#services' }
  ];

  return (
    <footer className="bg-mehndi-dark text-beige-soft/90 pt-16 pb-8 border-t border-gold-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Bio Column */}
          <div className="space-y-4">
            <a href="#home" className="inline-block flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                Mehandi <span className="text-gold-accent">By Shalini</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-sans text-beige-soft/60 -mt-1 font-semibold">
                Bridal Couture Artist
              </span>
            </a>
            <p className="font-sans text-sm text-beige-soft/75 leading-relaxed">
              Specializing in custom luxury bridal mehndi and portraits using Sojat double-filtered 100% natural, chemical-free organic henna.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.instagram.com/mehandibyshalini/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold-gradient hover:scale-110 transition-all duration-300"
                aria-label="Instagram Link"
              >
                <InstagramIcon className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://www.facebook.com/mehandibyshalini/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold-gradient hover:scale-110 transition-all duration-300"
                aria-label="Facebook Link"
              >
                <FacebookIcon className="w-4.5 h-4.5" />
              </a>
              <a 
                href={CONFIG.whatsappBaseUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold-gradient hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp Link"
              >
                <MessageCircle className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-gold-accent/20 pb-2">Quick Directory</h4>
            <ul className="space-y-2.5 font-sans text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-gold-accent hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-gold-accent/20 pb-2">Our Offerings</h4>
            <ul className="space-y-2.5 font-sans text-sm">
              {services.map((srv) => (
                <li key={srv.name}>
                  <a 
                    href={srv.href} 
                    className="hover:text-gold-accent hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {srv.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-gold-accent/20 pb-2">Contact Info</h4>
            <div className="space-y-3 font-sans text-sm text-beige-soft/80">
              <p className="leading-relaxed">
                📍 257/3 Mukharji Nagar, Indore, Madhya Pradesh 452015, India
              </p>
              <p className="flex items-center gap-2">
                📞 +91 83199 16631
              </p>
              <p className="flex items-center gap-2">
                ✉️ shalini@mehandibyshalini.com
              </p>
            </div>
          </div>

        </div>

        {/* Copyright Notice */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center font-sans text-xs text-beige-soft/60">
          <p>© 2026 Mehandi By Shalini. All Rights Reserved. Designed for Luxury Weddings.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
