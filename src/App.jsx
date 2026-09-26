import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import ProductShowcase from './components/ProductShowcase';
import ProductDetail from './components/ProductDetail';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SeoHead from './components/SeoHead';
import { productsData } from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleRouteCheck = () => {
      // 1. Check path routing first (/product/:id)
      const pathname = window.location.pathname;
      if (pathname.startsWith('/product/')) {
        const productId = pathname.replace('/product/', '').replace(/\/$/, '');
        const found = productsData.find(p => p.id === productId);
        if (found) {
          setSelectedProduct(found);
          window.scrollTo(0, 0);
          return;
        }
      }

      // 2. Check hash routing next (#/product/:id)
      const hash = window.location.hash;
      if (hash.startsWith('#/product/')) {
        const productId = hash.replace('#/product/', '');
        const found = productsData.find(p => p.id === productId);
        if (found) {
          setSelectedProduct(found);
          window.scrollTo(0, 0);
          return;
        }
      }

      setSelectedProduct(null);
    };

    window.addEventListener('popstate', handleRouteCheck);
    window.addEventListener('hashchange', handleRouteCheck);
    handleRouteCheck(); // Check on initial page load

    return () => {
      window.removeEventListener('popstate', handleRouteCheck);
      window.removeEventListener('hashchange', handleRouteCheck);
    };
  }, []);

  const closeProductDetail = () => {
    if (window.location.pathname.startsWith('/product/')) {
      window.history.pushState(null, '', '/#products');
    }
    window.location.hash = '#products';
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFAF6] selection:bg-gold-accent/30 selection:text-mehndi-dark">
      {/* Dynamic Technical SEO Head & JSON-LD Structured Data */}
      <SeoHead product={selectedProduct} />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex-grow">
        {selectedProduct ? (
          /* Dedicated Product Detail Page */
          <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
        ) : (
          /* Homepage Flow */
          <>
            {/* Hero Banner Area */}
            <Hero />

            {/* Premium Product Showcase / Shop Section */}
            <ProductShowcase />

            {/* Detailed Biography & Stats */}
            <About />

            {/* Catalog of Services with Detail Popups */}
            <Services />

            {/* Quality Value Prepositions */}
            <WhyChooseUs />

            {/* Responsive Masonry Portfolio Gallery with Lightbox */}
            <Portfolio />

            {/* Client Bride Reviews Slider */}
            <Testimonials />

            {/* Informative Accordions Q&A */}
            <FAQ />

            {/* Lead Form and Local Google Maps Embed */}
            <Contact />
          </>
        )}
      </main>

      {/* Brand Footer Directories */}
      <Footer />

      {/* Mobile/Desktop Click-to-Action Floating Handles */}
      <FloatingButtons />
    </div>
  );
}

export default App;
