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
import SchemaMarkup from './components/SchemaMarkup';
import { productsData } from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/product/')) {
        const productId = hash.replace('#/product/', '');
        const found = productsData.find(p => p.id === productId);
        if (found) {
          setSelectedProduct(found);
          // Scroll to top of window when viewing detail page
          window.scrollTo(0, 0);
          return;
        }
      }
      setSelectedProduct(null);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial page load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const closeProductDetail = () => {
    // Navigate back to the products section on the home page
    window.location.hash = '#products';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFAF6] selection:bg-gold-accent/30 selection:text-mehndi-dark">
      {/* Local Business JSON-LD SEO Schema Injection */}
      <SchemaMarkup />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex-grow">
        {selectedProduct ? (
          /* Dedicated Product Detail Page */
          <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
        ) : (
          /* Homepage Flow in the requested order: Hero -> Products -> About -> Remaining */
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
