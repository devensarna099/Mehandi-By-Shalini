import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Compass, 
  User, 
  Crown, 
  MapPin, 
  Moon, 
  Gift, 
  X, 
  ArrowRight,
  Clock,
  Sparkle
} from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Bridal Mehndi',
    icon: Sparkles,
    shortDesc: 'Traditional full-hand intricate designs covering full arms and feet, customized for your wedding day.',
    duration: '4 - 6 Hours',
    intensity: 'High Detail',
    fullDesc: 'Our signature Bridal Mehndi is a premium, high-density artwork tailored to cover full arms and feet. We blend classical elements like Marwari figurines, lotus buds, elephants, and customized wedding motifs to symbolize your story. Prepared with pure organic henna for a deep maroon stain.',
    features: ['Custom Bride & Groom figures', 'Inclusion of wedding date & names', 'Full arms (front & back) & feet', '100% natural, deep stain henna']
  },
  {
    id: 2,
    title: 'Engagement Mehndi',
    icon: Heart,
    shortDesc: 'Elegant and graceful designs that strike a balance between density and breathing space.',
    duration: '2 - 3 Hours',
    intensity: 'Medium Detail',
    fullDesc: 'Designed to mark your first official wedding celebration. Engagement designs are modern and focus on symmetric mandalas, elegant wristbands, and negative-space florals. Less dense than bridal but equally eye-catching and beautiful.',
    features: ['Intricate mandalas & borders', 'Floral and leafy vines', 'Front & back hands coverage', 'Fast drying organic paste']
  },
  {
    id: 3,
    title: 'Arabic Mehndi',
    icon: Compass,
    shortDesc: 'Modern style featuring thick outlines, delicate shading, floral trails, and geometric patterns.',
    duration: '1 - 2 Hours',
    intensity: 'Modern & Light',
    fullDesc: 'Arabic mehndi is known for its flowing diagonals, bold borders, and intricate mesh fills. We specialize in modern Arabic patterns, Indo-Arabic fusion, and rose-tinted layouts that stand out with modern outfits.',
    features: ['Bold floral check trails', 'Geometric net-patterns', 'Ideal for fast application', 'Great for contemporary events']
  },
  {
    id: 4,
    title: 'Portrait Mehndi',
    icon: User,
    shortDesc: 'Hyper-detailed drawings of the bride, groom, family deities, or even beloved pets.',
    duration: '5 - 7 Hours',
    intensity: 'Extreme Precision',
    fullDesc: 'The pinnacle of personalized henna art. Shalini carefully hand-sketches portraits of the bride and groom directly onto your palms. We can also replicate special wedding rituals (like Varmala or Sindoor ceremony) and portraits of pets.',
    features: ['Customized portrait sketching', 'Wedding ceremony scenes', 'Extreme detail and precision', 'Exclusive VIP bridal service']
  },
  {
    id: 5,
    title: 'Rajasthani Mehndi',
    icon: Crown,
    shortDesc: 'Traditional folk elements, royal motifs, and peacock designs stretching to the elbows.',
    duration: '4 - 5 Hours',
    intensity: 'Traditional Intricate',
    fullDesc: 'Inspired by the royal heritage of Rajasthan. This style is characterized by heavy mirror-work patterns, detailed peacocks, doli/barat motifs, and musical instruments (shehnai, dhol). Perfect for brides who love pure traditional richness.',
    features: ['Doli & Barat illustrations', 'Musical instrument symbols', 'Peacocks and mirror-mesh patterns', 'Dense, gapless coverage']
  },
  {
    id: 6,
    title: 'Destination Wedding',
    icon: MapPin,
    shortDesc: 'Comprehensive booking where our team travels to your wedding venue across India or globally.',
    duration: 'Multi-Day Event',
    intensity: 'Customized packages',
    fullDesc: 'Complete peace of mind for out-of-station weddings. Shalini and her team of senior artists travel to your destination to cover bridal, family, and guest mehndi sessions. Fully coordinated setup, on-time sessions, and professional care.',
    features: ['Available pan-India & globally', 'Artists for guest sessions (100+ guests)', 'Tailored color-maintenance guides', 'Coordination with wedding planners']
  },
  {
    id: 7,
    title: 'Karwa Chauth Mehndi',
    icon: Moon,
    shortDesc: 'Special festive mehndi patterns highlighting the moon, sieve, and traditional motifs.',
    duration: '1.5 - 2 Hours',
    intensity: 'Medium Detail',
    fullDesc: 'Celebrate the holy bond of marriage with custom Karwa Chauth designs. Features moon patterns, sieve rituals, and traditional marital symbols. Designed to dry quickly and yield a rich stain for the festival.',
    features: ['Karwa Chauth custom motifs', 'Quick-stain organic paste', 'Elegant back-of-hand trails', 'Special festive booking slots']
  },
  {
    id: 8,
    title: 'Festival Mehndi',
    icon: Gift,
    shortDesc: 'Quick and gorgeous designs for Teej, Diwali, Eid, Rakhi, and other special occasions.',
    duration: '1 - 2 Hours',
    intensity: 'Vibrant & Clean',
    fullDesc: 'Celebrate your favorite festivals with lovely mehndi patterns. Our festive service offers lightweight yet beautiful patterns including mandalas, floral branches, and finger details for you and your family.',
    features: ['Custom festive patterns', 'Group booking discounts', 'Fast execution per hand', 'Natural dark color output']
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-gold-accent uppercase mb-2 block">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mehndi-dark">
            Exquisite Mehndi Services
          </h2>
          <div className="mandala-divider w-1/3 mx-auto">
            <span className="text-gold-accent">🌿</span>
          </div>
          <p className="font-sans text-gray-500 text-sm sm:text-base">
            From intricate bridal stories to contemporary minimalist patterns, select the perfect service to complement your special day.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="bg-white rounded-3xl border border-beige-soft/40 p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-mehndi-green/5 hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div>
                  {/* Icon Area */}
                  <div className="w-12 h-12 rounded-2xl bg-beige-soft/20 text-gold-accent flex items-center justify-center mb-6 group-hover:bg-gold-accent group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-mehndi-dark mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Learn More Trigger */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-mehndi-green hover:text-gold-accent transition-colors mt-auto group/btn cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-mehndi-dark/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            ></motion.div>
            
            {/* Modal Box */}
            <motion.div
              className="bg-white rounded-[2rem] w-full max-w-xl overflow-hidden border border-beige-soft/60 shadow-2xl relative z-10 p-6 sm:p-8"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-mehndi-dark p-2 hover:bg-beige-soft/20 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Details Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gold-accent/15 text-gold-accent flex items-center justify-center flex-shrink-0">
                  {React.createElement(selectedService.icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-mehndi-dark">{selectedService.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1 text-xs font-semibold text-gray-500 font-sans">
                      <Clock className="w-3.5 h-3.5 text-gold-accent" />
                      {selectedService.duration}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-gray-500 font-sans">
                      <Sparkle className="w-3.5 h-3.5 text-gold-accent" />
                      {selectedService.intensity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6 text-sm text-gray-600 leading-relaxed font-sans border-t border-b border-beige-soft/30 py-5">
                <p>{selectedService.fullDesc}</p>
                
                {/* Features List */}
                <div>
                  <h4 className="font-semibold text-mehndi-dark mb-2 uppercase text-xs tracking-wider">What's Included</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedService.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-gold-accent">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Booking Link inside Modal */}
              <div className="flex gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 bg-gold-gradient text-white py-3 rounded-full text-center font-sans text-sm font-semibold shadow-md active:scale-95 transition-transform"
                >
                  Book Service
                </a>
                <a
                  href={`https://wa.me/919074011621?text=I'm%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-mehndi-green/30 text-mehndi-green hover:border-mehndi-green text-center py-3 rounded-full font-sans text-sm font-semibold active:scale-95 transition-transform"
                >
                  WhatsApp Inquire
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
