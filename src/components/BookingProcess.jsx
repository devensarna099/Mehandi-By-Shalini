import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  MessageSquareHeart, 
  Palette, 
  Sparkles, 
  PartyPopper 
} from 'lucide-react';

const steps = [
  {
    step: 'Step 1',
    title: 'Get In Touch',
    desc: 'Reach out via our booking form, phone call, or directly on WhatsApp. Share your event details, location, and preferred services.',
    icon: PhoneCall,
    color: 'bg-gold-accent'
  },
  {
    step: 'Step 2',
    title: 'Consultation Session',
    desc: 'We discuss package options, style densities, pricing, and timing. If you want custom elements (groom portraits, pet drawings), we outline them.',
    icon: MessageSquareHeart,
    color: 'bg-mehndi-green'
  },
  {
    step: 'Step 3',
    title: 'Design Customization',
    desc: 'Select patterns and finalize the sketch details. We create a tailored roadmap for your hands and feet to perfectly match your bridal attire.',
    icon: Palette,
    color: 'bg-gold-accent'
  },
  {
    step: 'Step 4',
    title: 'Mehndi Application',
    desc: 'Our expert team arrives on-time at your venue. Sit back, relax, and watch the masterpiece unfold as we apply chemical-free organic henna.',
    icon: Sparkles,
    color: 'bg-mehndi-green'
  },
  {
    step: 'Step 5',
    title: 'Stain & Celebration',
    desc: 'Follow our exclusive after-care instructions to reveal a deep, royal mahogany stain. You are now fully wedding-ready!',
    icon: PartyPopper,
    color: 'bg-gold-accent'
  }
];

const BookingProcess = () => {
  return (
    <section id="process" className="py-20 bg-beige-soft/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-gold-accent uppercase mb-2 block">
            How it works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mehndi-dark">
            Our Booking & Creative Journey
          </h2>
          <div className="mandala-divider w-1/3 mx-auto">
            <span className="text-gold-accent">🌸</span>
          </div>
          <p className="font-sans text-gray-500 text-sm sm:text-base">
            From your first inquiry down to the glowing stain on your wedding day, we ensure a seamless luxury experience.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connecting steps (hidden on mobile, visible on tablet/desktop) */}
          <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-gold-accent via-mehndi-green to-gold-accent -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.step}
                  className={`flex flex-col md:flex-row items-center relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Step Card Box */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="glass p-6 sm:p-8 rounded-[2rem] border border-white/60 shadow-md relative hover:shadow-lg transition-shadow duration-300">
                      
                      {/* Step Count Tag */}
                      <span className="inline-block text-xs font-extrabold tracking-widest text-gold-accent uppercase mb-3">
                        {step.step}
                      </span>
                      
                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold text-mehndi-dark mb-3">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-sans text-sm text-gray-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Timeline Icon Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white bg-gold-gradient text-white flex items-center justify-center shadow-md z-10 hidden md:flex">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Spacer for structural balance */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
