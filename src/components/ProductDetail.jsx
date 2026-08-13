import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Minus, Check, Sparkles, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { CONFIG } from '../config';

const ProductDetail = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Scroll to top and set default variant when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuantity(1);
    setActiveImageIndex(0);
    
    if (product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    } else {
      setSelectedVariant(null);
    }
  }, [product]);

  const handleQuantityChange = (type) => {
    if (type === 'inc') {
      setQuantity(prev => Math.min(prev + 1, 20));
    } else {
      setQuantity(prev => Math.max(prev - 1, 1));
    }
  };

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentOriginalPrice = selectedVariant ? selectedVariant.originalPrice : product.originalPrice;

  const handleBuyNow = () => {
    const totalAmount = currentPrice * quantity;
    const variantText = selectedVariant ? ` - ${selectedVariant.size}` : '';
    const message = `Hi, I’m interested in purchasing ${quantity}x ${product.name}${variantText} (₹${currentPrice} each). Total: ₹${totalAmount}. Please share the details and ordering process.`;
    const whatsappUrl = `${CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const hasDiscount = currentOriginalPrice && currentOriginalPrice > currentPrice;
  const discountPercent = hasDiscount 
    ? Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100)
    : null;

  const hasGallery = product.images && product.images.length > 1;
  const currentImage = (selectedVariant && selectedVariant.image)
    ? selectedVariant.image
    : (product.images && product.images.length > 0)
      ? product.images[activeImageIndex]
      : product.image;

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
              src={currentImage} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500"
            />

            {hasGallery && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(prev => (prev === 0 ? product.images.length - 1 : prev - 1));
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-mehndi-dark p-2 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer z-10 flex items-center justify-center border border-beige-soft/30"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(prev => (prev === product.images.length - 1 ? 0 : prev + 1));
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-mehndi-dark p-2 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer z-10 flex items-center justify-center border border-beige-soft/30"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {hasGallery && (
            <div className="flex flex-wrap gap-2.5 mt-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 flex-shrink-0 ${
                    activeImageIndex === idx
                      ? 'border-mehndi-green shadow-md scale-95'
                      : 'border-beige-soft/40 hover:border-gold-accent/60'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} preview ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          )}

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
                ₹{currentPrice}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{currentOriginalPrice}
                  </span>
                  <span className="text-xs font-bold text-gold-accent bg-gold-accent/10 px-2.5 py-1 rounded">
                    {discountPercent}% OFF
                  </span>
                  <span className="text-xs font-bold text-mehndi-green bg-mehndi-green/10 px-2.5 py-1 rounded">
                    Save ₹{currentOriginalPrice - currentPrice}
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
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-mehndi-dark uppercase tracking-wider mb-3">Available Options</h3>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map(v => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 border rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        selectedVariant && selectedVariant.id === v.id
                          ? 'bg-mehndi-green text-white border-mehndi-green shadow-sm'
                          : 'bg-white text-mehndi-dark border-beige-soft/40 hover:border-gold-accent hover:text-gold-accent'
                      }`}
                    >
                      {v.size} - ₹{v.price}
                    </button>
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

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full sm:flex-grow inline-flex items-center justify-center gap-3 bg-mehndi-green hover:bg-gold-gradient text-white px-8 py-3.5 rounded-full font-sans text-base font-bold shadow-lg shadow-mehndi-green/10 hover:shadow-gold-accent/20 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Buy Now (₹{currentPrice * quantity})
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
