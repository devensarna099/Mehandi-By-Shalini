import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide text-mehndi-green">
                Mehandi <span className="text-gold-accent">By Shalini</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-mehndi-dark -mt-1 font-semibold">
                Bridal Couture Artist
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-mehndi-dark hover:text-gold-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold-gradient text-white px-5 py-2.5 rounded-full font-sans text-sm font-semibold shadow-lg hover:shadow-gold-accent/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mehndi-green p-1 hover:text-gold-accent transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-[64px] left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-beige-soft/30 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg font-sans text-base font-semibold text-mehndi-dark hover:bg-beige-soft/20 hover:text-gold-accent transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gold-gradient text-white py-3 rounded-full font-sans text-sm font-semibold shadow-md active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" />
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
