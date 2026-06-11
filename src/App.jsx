import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SchemaMarkup from './components/SchemaMarkup';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFAF6] selection:bg-gold-accent/30 selection:text-mehndi-dark">
      {/* Local Business JSON-LD SEO Schema Injection */}
      <SchemaMarkup />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex-grow">
        {/* Hero Banner Area */}
        <Hero />

        {/* Detailed Biography & Stats */}
        <About />

        {/* Catalog of Services with Detail Popups */}
        <Services />

        {/* Premium Product Showcase / Shop Section */}
        <ProductShowcase />

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
      </main>

      {/* Brand Footer Directories */}
      <Footer />

      {/* Mobile/Desktop Click-to-Action Floating Handles */}
      <FloatingButtons />
    </div>
  );
}

export default App;
