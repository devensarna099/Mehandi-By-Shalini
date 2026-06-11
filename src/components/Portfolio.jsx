import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

// Import local generated assets
import bridalImg from '../assets/gallery_bridal.png';
import arabicImg from '../assets/gallery_arabic.png';
import portraitImg from '../assets/gallery_portrait.png';
import guestImg from '../assets/gallery_guest.png';
import traditionalImg from '../assets/gallery_traditional.png';
import modernImg from '../assets/gallery_modern.png';

const categories = ['All', 'Bridal', 'Arabic', 'Portrait', 'Wedding Guests', 'Traditional', 'Modern'];

const portfolioItems = [
  {
    id: 1,
    title: 'Royal Marwari Bridal Design',
    category: 'Bridal',
    img: bridalImg,
    aspect: 'aspect-[4/5]' // Tall
  },
  {
    id: 2,
    title: 'Minimalist Indo-Arabic Vines',
    category: 'Arabic',
    img: arabicImg,
    aspect: 'aspect-square' // Regular
  },
  {
    id: 3,
    title: 'Bride & Groom Portrait Hand sketches',
    category: 'Portrait',
    img: portraitImg,
    aspect: 'aspect-[3/4]' // Tall
  },
  {
    id: 4,
    title: 'Vibrant Floral Guest Patterns',
    category: 'Wedding Guests',
    img: guestImg,
    aspect: 'aspect-square' // Regular
  },
  {
    id: 5,
    title: 'Royal Rajasthani Heritage Henna',
    category: 'Traditional',
    img: traditionalImg,
    aspect: 'aspect-[4/5]' // Tall
  },
  {
    id: 6,
    title: 'Modern Mandala Fusion Layout',
    category: 'Modern',
    img: modernImg,
    aspect: 'aspect-[3/4]' // Tall
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    // We need the index in the *filtered* list to allow correct slider sliding
    setLightboxIndex(index);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-beige-soft/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs font-bold tracking-widest text-gold-accent uppercase mb-2 block">
            Visual Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mehndi-dark">
            Our Masterpiece Creations
          </h2>
          <div className="mandala-divider w-1/3 mx-auto">
            <span className="text-gold-accent">🌸</span>
          </div>
          <p className="font-sans text-gray-500 text-sm sm:text-base">
            Explore our curated catalog of bridal, traditional, and contemporary mehndi designs made with passion.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide font-sans transition-all duration-300 cursor-pointer ${activeCategory === cat ? 'bg-gold-gradient text-white shadow-md' : 'bg-white border border-beige-soft/40 text-mehndi-dark hover:border-gold-accent hover:text-gold-accent'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`portfolio-item-${item.id}`}
                className="relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-white border border-beige-soft/30 shadow-md group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(index)}
              >
                {/* Image Wrap - 1:1 square ratio for consistent heights */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-mehndi-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 md:p-6">
                    <span className="self-end bg-gold-gradient text-white text-[8px] md:text-[10px] font-bold tracking-wider uppercase px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                      {item.category}
                    </span>
                    
                    <div className="space-y-1 md:space-y-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-1 md:mb-2 mx-auto">
                        <Eye className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <h3 className="font-serif text-sm md:text-lg font-bold text-white text-center leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
            
            {/* Close Lightbox */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Control */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Slider Content */}
            <div className="max-w-4xl max-h-[80vh] w-full px-4 flex flex-col items-center justify-center relative select-none">
              <motion.img
                key={lightboxIndex}
                src={filteredItems[lightboxIndex].img}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Image Description Footer */}
              <div className="mt-4 text-center">
                <span className="text-gold-accent font-semibold tracking-wider text-xs uppercase">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </div>

            {/* Next Control */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
