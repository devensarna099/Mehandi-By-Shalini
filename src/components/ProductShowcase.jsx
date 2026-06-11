import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

// Import product images
import productCone from '../assets/product_cone.png';
import productPowder from '../assets/product_powder.png';
import productKit from '../assets/product_kit.png';
import productOil from '../assets/product_oil.png';
import productAftercare from '../assets/product_aftercare.png';
import productCombo from '../assets/product_combo.png';

const productsData = [
  {
    id: 1,
    name: 'Organic Bridal Mehndi Cone',
    price: 149,
    tagline: 'Natural ingredients for a dark and long-lasting stain.',
    hoverDesc: 'Made with premium natural ingredients. Chemical-free formula designed for weddings, festivals, and special occasions.',
    category: 'Mehndi Cones',
    image: productCone,
  },
  {
    id: 2,
    name: 'Premium Herbal Mehndi Powder',
    price: 299,
    tagline: 'Triple-filtered Sojat henna powder for ultimate precision.',
    hoverDesc: 'Pure Lawsonia Inermis powder sourced directly from Rajasthan. Perfect for creating your own smooth, stringy, and professional henna paste.',
    category: 'Kits',
    image: productPowder,
  },
  {
    id: 3,
    name: 'Wedding Special Mehndi Kit',
    price: 499,
    tagline: 'All-in-one bundle for beautiful DIY bridal celebrations.',
    hoverDesc: 'Includes 5 fresh organic cones, a bottle of eucalyptus oil, aftercare balm, and stencil guides. Everything you need for an elegant stain.',
    category: 'Kits',
    image: productKit,
  },
  {
    id: 4,
    name: 'Natural Eucalyptus Mehndi Oil',
    price: 199,
    tagline: 'Pure essential oil blend to enhance stain depth.',
    hoverDesc: 'A therapeutic-grade blend of pure eucalyptus and tea tree essential oils. Apply before washing off henna to lock in a deep mahogany color.',
    category: 'Oils',
    image: productOil,
  },
  {
    id: 5,
    name: 'Bridal Aftercare Kit',
    price: 349,
    tagline: 'Lock in your royal mahogany stain for days.',
    hoverDesc: 'Contains a natural oil-rich moisturizing balm, skin-friendly protection tape, and a detailed aftercare manual to maximize color vibrancy.',
    category: 'Kits',
    image: productAftercare,
  },
  {
    id: 6,
    name: 'Luxury Mehndi Combo Pack',
    price: 799,
    tagline: 'The ultimate collection of our best-selling henna products.',
    hoverDesc: 'Get the complete set: 6 organic cones, 100g triple-filtered powder, 30ml eucalyptus oil, and 2 aftercare balms at a special bundled price.',
    category: 'Combos',
    image: productCombo,
  },
];

const categories = ['All', 'Mehndi Cones', 'Oils', 'Kits', 'Combos'];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === activeCategory);

  const getWhatsAppLink = (productName) => {
    const message = `Hello Mehandi By Shalini, I want to buy ${productName}.`;
    return `${CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-sans text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-mehndi-green text-white shadow-md shadow-mehndi-green/20'
                  : 'bg-white border border-beige-soft/40 text-mehndi-dark hover:border-gold-accent hover:text-gold-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl md:rounded-3xl border border-beige-soft/40 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-mehndi-green/5 transition-all duration-300 group flex flex-col h-full"
              >
                {/* 1:1 Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-beige-soft/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                  />

                  {/* Premium Hover Glassmorphic Overlay (desktop only) */}
                  <div className="absolute inset-0 bg-mehndi-dark/75 backdrop-blur-md opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-center p-6 text-center text-white">
                    <Sparkles className="w-6 h-6 text-gold-accent mx-auto mb-3 transform -translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500 delay-100" />
                    <p className="font-sans text-sm leading-relaxed mb-2 opacity-95">
                      {product.hoverDesc}
                    </p>
                    <span className="text-[10px] uppercase tracking-wider text-gold-accent font-semibold">
                      100% Organic & Safe
                    </span>
                  </div>
                </div>

                {/* Product Information */}
                <div className="p-3 md:p-6 flex flex-col flex-grow">
                  <div className="mb-2 md:mb-4">
                    <span className="text-[8px] md:text-[10px] font-sans font-extrabold uppercase tracking-widest text-gold-accent mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-sm md:text-lg font-bold text-mehndi-dark group-hover:text-mehndi-green transition-colors duration-200 line-clamp-1">
                      {product.name}
                    </h3>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed mb-3 md:mb-6 flex-grow line-clamp-2">
                    {product.tagline}
                  </p>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-auto pt-3 md:pt-4 border-t border-beige-soft/20 gap-3">
                    <div className="flex justify-between items-center md:flex-col md:items-start">
                      <span className="text-[10px] md:text-xs text-gray-400 font-sans">Price</span>
                      <span className="font-sans text-base md:text-xl font-bold text-mehndi-dark">
                        ₹{product.price}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-mehndi-green hover:bg-gold-gradient text-white hover:text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-sans text-xs md:text-sm font-semibold shadow-md active:scale-95 transition-all duration-300"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Buy Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductShowcase;
