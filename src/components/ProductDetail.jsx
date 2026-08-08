import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Plus, Minus, Check, Sparkles, MessageCircle } from 'lucide-react';
import { CONFIG } from '../config';
import { productsData } from '../data/products';

const ProductDetail = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuantity(1);
    setAddedToCart(false);
  }, [product]);

  // Find other size/weight variants of the same product
  const getVariants = () => {
    // Helper to find size terms in names
    const sizeRegex = /(\d+\s*(?:kg|gm|ml|ltr|piece|pieces|qty))/i;
    const match = product.name.match(sizeRegex);
    if (!match) return [];

    const sizeText = match[0];
    // Create a base name by removing the size text and trailing dashes/parentheses
    const baseName = product.name
      .replace(sizeText, '')
      .replace(/\(\s*\)/g, '')
      .replace(/-\s*$/g, '')
      .trim();

    // Find other products that contain this base name (excluding current product)
    return productsData.filter(p => 
      p.id !== product.id && 
      p.name.toLowerCase().includes(baseName.toLowerCase().split(' ')[0]) && // match first word at least
      (p.name.toLowerCase().includes('kg') || 
       p.name.toLowerCase().includes('gm') || 
       p.name.toLowerCase().includes('ml') || 
       p.name.toLowerCase().includes('ltr') || 
       p.name.toLowerCase().includes('piece'))
    ).slice(0, 4); // Limit to 4 options
  };

  const variants = getVariants();

  const handleQuantityChange = (type) => {
    if (type === 'inc') {
      setQuantity(prev => Math.min(prev + 1, 20));
    } else {
      setQuantity(prev => Math.max(prev - 1, 1));
    }
  };

  const handleBuyNow = () => {
    const totalAmount = product.price * quantity;
    const message = `Hi, I’m interested in purchasing ${quantity}x ${product.name} (₹${product.price} each). Total: ₹${totalAmount}. Please share the details and ordering process.`;
    const whatsappUrl = `${CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 font-sans"
    >
      {/* Back navigation & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-beige-soft/30 pb-6">
        <button 
          onClick={onClose}
          className="inline-flex items-center gap-2 text-mehndi-dark hover:text-gold-accent font-semibold transition-colors duration-200 cursor-pointer self-start"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        <div className="text-xs text-gray-500 font-medium">
          Home / Shop / <span className="text-gold-accent uppercase font-semibold">{product.category}</span> / {product.name}
        </div>
      </div>

      {/* Main product layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Column: Image Area */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white rounded-3xl p-4 border border-beige-soft/40 shadow-sm overflow-hidden aspect-square flex items-center justify-center relative group">
            {discountPercent && (
              <span className="absolute top-6 left-6 bg-gold-gradient text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                {discountPercent}% OFF
              </span>
            )}
            
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="bg-[#FAF7F2] border border-gold-accent/20 rounded-2xl p-4 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-mehndi-dark uppercase tracking-wider mb-1">Authentic Quality Guarantee</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Hand-selected and prepared from natural, organic Sojat fields. Free of chemicals, artificial dyes, and toxic additives. Safe for all skin types.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Info Area */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Category tag */}
            <span className="inline-block bg-mehndi-green/10 text-mehndi-green text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-mehndi-dark mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price display */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-2xl sm:text-3xl font-extrabold text-mehndi-green">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-xs font-bold text-gold-accent bg-gold-accent/10 px-2.5 py-1 rounded">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <div className="border-t border-beige-soft/30 pt-6 mb-6">
              <h3 className="text-sm font-bold text-mehndi-dark uppercase tracking-wider mb-3">Product Description</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-sm text-gray-500 italic">
                {product.details}
              </p>
            </div>

            {/* Feature lists */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-mehndi-dark uppercase tracking-wider mb-3">Key Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-mehndi-green/10 text-mehndi-green flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product options/variants if found */}
            {variants.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-mehndi-dark uppercase tracking-wider mb-3">Available Options</h3>
                <div className="flex flex-wrap gap-2.5">
                  {variants.map(v => (
                    <a
                      key={v.id}
                      href={`#/product/${v.id}`}
                      className="px-4 py-2 bg-white hover:bg-beige-soft/10 border border-beige-soft/40 hover:border-gold-accent rounded-xl text-xs font-semibold text-mehndi-dark hover:text-gold-accent transition-all duration-200"
                    >
                      {v.name.split(' ').filter(word => word.match(/(\d+|kg|gm|ml|ltr|piece|qty)/i)).join(' ') || v.name} - ₹{v.price}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action container: quantity & buy now */}
          <div className="border-t border-beige-soft/30 pt-6 mt-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              
              {/* Quantity Selector */}
              <div className="flex items-center border border-beige-soft/50 rounded-full p-1 bg-white shadow-sm w-full sm:w-auto justify-between">
                <button
                  onClick={() => handleQuantityChange('dec')}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-beige-soft/20 text-mehndi-dark active:scale-90 transition-all cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans font-bold text-mehndi-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange('inc')}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-beige-soft/20 text-mehndi-dark active:scale-90 transition-all cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Buy Now WhatsApp Button */}
              <button
                onClick={handleBuyNow}
                className="w-full sm:flex-grow inline-flex items-center justify-center gap-3 bg-mehndi-green hover:bg-gold-gradient text-white px-8 py-3.5 rounded-full font-sans text-base font-bold shadow-lg shadow-mehndi-green/10 hover:shadow-gold-accent/20 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Buy Now via WhatsApp (₹{product.price * quantity})
              </button>

            </div>
            
            <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
              *Clicking Buy Now will open WhatsApp to coordinate payment & shipping details.
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default ProductDetail;
