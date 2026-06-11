import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Paintbrush, 
  Leaf, 
  Tag, 
  Clock, 
  Home 
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Experienced Artist',
    desc: 'With 8+ years of dedicated professional wedding experience, Shalini guarantees flawless application and execution.'
  },
  {
    icon: Paintbrush,
    title: 'Unique Custom Designs',
    desc: 'Tailored patterns made to match your bridal attire, jewelry, wedding theme, and custom portrait stories.'
  },
  {
    icon: Leaf,
    title: 'Natural Mehndi Products',
    desc: '100% chemical-free organic henna handmade with Nilgiri oil and tea decocotion, delivering dark, long-lasting stains.'
  },
  {
    icon: Tag,
    title: 'Affordable Packages',
    desc: 'Flexible and competitive pricing plans covering full bridal layout packages down to small festive family options.'
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    desc: 'Strict schedule adherence. We value your wedding timeline and deploy multiple artists to complete sessions on time.'
  },
  {
    icon: Home,
    title: 'Home & Venue Visits',
    desc: 'Enjoy a luxurious, stress-free mehndi session from the comfort of your home or destination wedding venue.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background radial soft gold overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-gold-accent uppercase mb-2 block">
            Why Shalini
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mehndi-dark">
            Why Choose Our Artistry
          </h2>
          <div className="mandala-divider w-1/3 mx-auto">
            <span className="text-gold-accent">🌿</span>
          </div>
          <p className="font-sans text-gray-500 text-sm sm:text-base">
            Providing premium, custom-designed organic henna experiences that make brides feel like royalty.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="relative bg-[#FAF8F5] rounded-3xl p-8 border border-beige-soft/30 hover:border-gold-accent/40 shadow-sm hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Thin top border indicator */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gold-gradient rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-white text-gold-accent flex items-center justify-center mb-6 shadow-sm border border-beige-soft/20 group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-mehndi-dark mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
