import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, ArrowRight } from 'lucide-react';
import { productsData } from '../data/products';

const categories = ['All', 'Henna Powder', 'Henna Oil', 'After Care', 'Accessories', 'Mehandi Combo', 'Other'];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleCardClick = (productId) => {
    window.location.hash = `#/product/${productId}`;
  };

  return (
    <section id="products" className="py-20 bg-beige-soft/10 relative overflow-hidden">
      {/* Decorative background visual elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mehndi-green/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs font-bold tracking-widest text-gold-accent uppercase mb-2 block">
            Our Shop
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mehndi-dark">
            Our Mehndi Products
          </h2>
          <div className="mandala-divider w-1/3 mx-auto">
            <span className="text-gold-accent">🌿</span>
          </div>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            Premium-quality mehndi products crafted for rich color, long-lasting stain, and beautiful celebrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-mehndi-green text-white shadow-md shadow-mehndi-green/20'
                  : 'bg-white border border-beige-soft/40 text-mehndi-dark hover:border-gold-accent hover:text-gold-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid - Modified to support 2-column mobile layout */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const hasDiscount = product.originalPrice && product.originalPrice > product.price;
              const discountPercent = hasDiscount 
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : null;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleCardClick(product.id)}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-beige-soft/40 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-mehndi-green/5 transition-all duration-300 group flex flex-col h-full cursor-pointer select-none"
                >
                  {/* 1:1 Image Container */}
                  <div className="relative aspect-square w-full overflow-hidden bg-beige-soft/10">
                    {discountPercent && (
                      <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-gold-gradient text-white text-[8px] sm:text-[10px] font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-md z-10">
                        {discountPercent}% OFF
                      </span>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Premium Hover Glassmorphic Overlay (desktop only) */}
                    <div className="absolute inset-0 bg-mehndi-dark/75 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-center p-6 text-center text-white">
                      <Sparkles className="w-6 h-6 text-gold-accent mx-auto mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100" />
                      <p className="font-sans text-xs leading-relaxed mb-4 opacity-90 line-clamp-4">
                        {product.description}
                      </p>
                      <span className="text-[9px] uppercase tracking-wider text-gold-accent font-semibold">
                        Organic & Authentic
                      </span>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="p-3 sm:p-6 flex flex-col flex-grow">
                    <div className="mb-1.5 sm:mb-2">
                      <span className="text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-widest text-gold-accent mb-0.5 sm:mb-1 block">
                        {product.category}
                      </span>
                      <h3 className="font-serif text-xs sm:text-base md:text-lg font-bold text-mehndi-dark group-hover:text-mehndi-green transition-colors duration-200 line-clamp-1">
                        {product.name}
                      </h3>
                    </div>

                    <p className="font-sans text-[10px] sm:text-xs text-gray-500 leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-2">
                      {product.details || product.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto pt-3 sm:pt-4 border-t border-beige-soft/20 gap-2.5 sm:gap-3">
                      <div className="flex justify-between items-center sm:flex-col sm:items-start leading-none">
                        <span className="text-[9px] sm:text-[10px] text-gray-400 font-sans block mb-1">Price</span>
                        <div className="flex flex-col sm:items-start gap-1">
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-sans text-sm sm:text-base md:text-lg font-bold text-mehndi-dark">
                              ₹{product.price}
                            </span>
                            {hasDiscount && (
                              <span className="font-sans text-[10px] sm:text-xs text-gray-400 line-through">
                                ₹{product.originalPrice}
                              </span>
                            )}
                          </div>
                          {hasDiscount && (
                            <span className="text-[10px] font-bold text-gold-accent block">
                              {discountPercent}% OFF
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View Details Action - Styled Span to prevent nested anchor tag issues */}
                      <span
                        className="inline-flex items-center justify-center gap-1.5 bg-mehndi-green hover:bg-gold-gradient text-white hover:text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full font-sans text-[10px] sm:text-xs font-bold shadow-md active:scale-95 transition-all duration-300 cursor-pointer"
                      >
                        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        View Details
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductShowcase;
