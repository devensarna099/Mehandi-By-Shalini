import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much does bridal mehndi cost?',
    answer: 'Bridal mehndi packages typically range from ₹7,000 to ₹25,000+ depending on layout density, design complexity, length (e.g., forearm, elbow, or full arm), and customization. We provide detailed pricing packages during your initial consultation.'
  },
  {
    question: 'How early should I book?',
    answer: 'We highly recommend booking 4 to 8 months in advance, particularly for peak wedding seasons (October to March) and holiday weekends. Early bookings secure your date and ensure we have sufficient time to customize design drafts.'
  },
  {
    question: 'Do you travel for destination weddings?',
    answer: 'Yes, absolutely! Shalini and her senior team travel worldwide and all across India for destination weddings. Travel, flights, and accommodation fees are accounted for in our custom destination package proposal.'
  },
  {
    question: 'Which mehndi products do you use?',
    answer: 'We prepare our henna paste by hand using Sojat triple-filtered henna powder, pure organic eucalyptus & nilgiri oils, lemon juice, and sugar. It is 100% chemical-free, contains zero synthetic dyes/PPD, and is fully safe for all skin types.'
  },
  {
    question: 'How long does the mehndi application take?',
    answer: 'A high-density bridal mehndi layout covering full arms and feet usually takes between 4 to 6 hours. Family and guest mehndi applications are much faster, averaging 5-10 minutes per side of the hand.'
  }
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-beige-soft/40 py-5">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between text-left font-serif text-lg font-bold text-mehndi-dark hover:text-gold-accent transition-colors duration-200 focus:outline-none cursor-pointer"
      >
        <span>{question}</span>
        <span className="w-8 h-8 rounded-full bg-beige-soft/20 text-mehndi-dark hover:text-gold-accent flex items-center justify-center flex-shrink-0 transition-colors">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden font-sans text-sm sm:text-base text-gray-500 leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-beige-soft/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-gold-accent uppercase mb-2 block">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mehndi-dark">
            Frequently Asked Questions
          </h2>
          <div className="mandala-divider w-1/4 mx-auto">
            <span className="text-gold-accent">🌸</span>
          </div>
        </div>

        {/* FAQ List Accordion */}
        <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-beige-soft/30 shadow-md">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
