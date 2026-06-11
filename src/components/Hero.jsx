import React from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, PhoneCall } from 'lucide-react';
import heroImg from '../assets/hero_bridal_mehndi.png';
import { CONFIG } from '../config';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden mandala-bg bg-gradient-to-b from-beige-soft/30 via-transparent to-transparent">
      {/* Decorative Gold Circles in Background */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-mehndi-green/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold-accent/15 text-gold-accent border border-gold-accent/20 mb-6">
              ✨ Traditional Bridal Artistry
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-mehndi-dark leading-[1.15] mb-6">
              Premium Bridal <br />
              <span className="text-gold-gradient font-semibold">Mehndi Artist</span> in India
            </h1>

            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Creating stunning bridal, engagement, festive, and custom mehndi designs with elegance, detail, and perfection. Bring your dream wedding mehndi to life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:+918319991631"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-gold-gradient text-white rounded-full font-sans text-base font-semibold shadow-lg hover:shadow-gold-accent/30 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5" />
                Book Now
              </a>
              <a
                href={`${CONFIG.whatsappBaseUrl}?text=Hi%20Shalini%2C%20I%20would%20like%20to%20inquire%20about%20bridal%20mehndi%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white text-mehndi-green border-2 border-mehndi-green/30 hover:border-mehndi-green rounded-full font-sans text-base font-semibold shadow-sm hover:bg-beige-soft/10 active:scale-95 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                WhatsApp Inquiry
              </a>
            </div>

            {/* Soft highlight tagline */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-500 font-medium font-sans">
              <span>🌿 100% Organic Henna</span>
              <span className="text-beige-soft">|</span>
              <span>🎨 Customized Designs</span>
              <span className="text-beige-soft">|</span>
              <span>✈️ Available Pan-India</span>
            </div>
          </motion.div>

          {/* Hero Image Presentation */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden p-3 bg-white shadow-2xl shadow-mehndi-green/10 border border-beige-soft/40">
              {/* Outer Golden Border Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-gold-accent/40 pointer-events-none"></div>

              {/* Image Frame */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-inner">
                <img
                  src={heroImg}
                  alt="Bride showcasing intricate luxury bridal mehndi designs"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Float Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl border border-white/50 shadow-lg text-center">
                  <p className="text-xs text-gold-accent uppercase font-bold tracking-wider mb-0.5">Shalini's Signature</p>
                  <p className="font-serif text-base font-semibold text-mehndi-dark">Royal Marwari Bridal Henna</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
