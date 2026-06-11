import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import avatar1 from '../assets/bride_review_1.png';
import avatar2 from '../assets/bride_review_2.png';
import avatar3 from '../assets/bride_review_3.png';

const testimonials = [
  {
    id: 1,
    name: 'Aishwarya Sen',
    location: 'Kolkata (Destination Wedding)',
    review: 'Shalini did my bridal mehndi for my destination wedding and I was absolutely blown away. The detail in the portrait drawings was unbelievable — she drew my husband\'s and my portrait perfectly. The stain was dark maroon and lasted over two weeks! Highly recommended!',
    rating: 5,
    img: avatar1,
    date: 'Dec 2025'
  },
  {
    id: 2,
    name: 'Priyanka Sharma',
    location: 'Jaipur',
    review: 'Working with Shalini was a dream. She customized my bridal design to include my pet golden retriever, which meant so much to me. She and her team were incredibly fast, professional, and arrived right on schedule. I got so many compliments on my wedding day.',
    rating: 5,
    img: avatar2,
    date: 'Feb 2026'
  },
  {
    id: 3,
    name: 'Riddhi Patel',
    location: 'Mumbai',
    review: 'If you want organic, chemical-free mehndi that looks premium and has a gorgeous dark color, go with Shalini. Her artistry is world-class and she was so patient with me during the 5-hour bridal session. The price is worth every penny of the experience.',
    rating: 5,
    img: avatar3,
    date: 'Jan 2026'
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Mandala Watermark */}
      <div className="absolute -right-16 top-1/4 w-64 h-64 border border-gold-accent/5 rounded-full pointer-events-none"></div>
      <div className="absolute -left-16 bottom-1/4 w-64 h-64 border border-gold-accent/5 rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold tracking-widest text-gold-accent uppercase mb-2 block">
            Love Letters
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mehndi-dark">
            Words From Our Brides
          </h2>
          <div className="mandala-divider w-1/4 mx-auto">
            <span className="text-gold-accent">🌸</span>
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-[#FAF8F5] rounded-[2.5rem] p-6 sm:p-12 border border-beige-soft/40 shadow-sm min-h-[380px] sm:min-h-[340px] flex flex-col justify-between overflow-hidden">
          
          {/* Quote Icon Overlay */}
          <div className="absolute top-6 right-8 text-gold-accent/10 pointer-events-none">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed italic">
                "{testimonials[index].review}"
              </p>

              {/* Reviewer Meta Details */}
              <div className="flex items-center gap-4 pt-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-accent">
                  <img 
                    src={testimonials[index].img} 
                    alt={testimonials[index].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-mehndi-dark">
                    {testimonials[index].name}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 font-medium">
                    {testimonials[index].location} • {testimonials[index].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls Bottom Panel */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-beige-soft/40">
            {/* Dots navigation indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === i ? 'w-6 bg-gold-accent' : 'w-2 bg-beige-soft'}`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>

            {/* Prev/Next arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-beige-soft/50 bg-white hover:border-gold-accent hover:text-gold-accent text-mehndi-dark flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-beige-soft/50 bg-white hover:border-gold-accent hover:text-gold-accent text-mehndi-dark flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
