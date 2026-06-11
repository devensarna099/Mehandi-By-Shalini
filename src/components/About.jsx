import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import aboutImg from '../assets/about_shalini.png';

const StatCounter = ({ endValue, duration = 2000, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(endValue, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, endValue, duration]);

  return (
    <div ref={ref} className="glass p-5 rounded-2xl border border-beige-soft/40 shadow-sm text-center">
      <h3 className="font-sans text-3xl sm:text-4xl font-bold text-mehndi-green mb-1">
        {count}
        {suffix}
      </h3>
      <p className="font-sans text-xs sm:text-sm text-gray-500 font-semibold tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-1/2 left-0 w-24 h-24 border border-gold-accent/10 rounded-full -translate-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Visual Backing Grid */}
            <div className="absolute -top-4 -left-4 w-1/2 h-1/2 bg-gold-accent/10 rounded-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-mehndi-green/10 rounded-3xl -z-10"></div>
            
            <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={aboutImg} 
                alt="Mehandi By Shalini bridal mehndi application" 
                className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            {/* Overlay Stamp */}
            <div className="absolute -bottom-6 -left-6 bg-gold-gradient text-white px-6 py-4 rounded-2xl shadow-lg border border-white/20 hidden sm:block">
              <p className="font-serif text-2xl font-bold">100%</p>
              <p className="font-sans text-[10px] uppercase tracking-wider font-semibold opacity-90">Organic Pure Henna</p>
            </div>
          </motion.div>

          {/* Text & Stats Side */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="font-sans text-xs font-bold tracking-widest text-gold-accent uppercase mb-2 block text-center lg:text-left">
              Discover Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mehndi-dark mb-6 text-center lg:text-left">
              About Mehandi By Shalini
            </h2>
            
            <div className="mandala-divider lg:justify-start lg:w-2/3">
              <span className="text-gold-accent text-lg">🌸</span>
            </div>

            <p className="font-sans text-base text-gray-600 leading-relaxed mb-6 text-center lg:text-left">
              Mehandi By Shalini specializes in premium bridal mehndi, engagement mehndi, Arabic mehndi, portrait mehndi, and customized wedding designs. With years of dedicated experience and hundreds of happy brides, we create memorable mehndi experiences for weddings and festive celebrations.
            </p>

            <p className="font-sans text-base text-gray-600 leading-relaxed mb-10 text-center lg:text-left">
              Our henna paste is hand-prepared using 100% natural, premium organic ingredients, ensuring a deep, dark royal mahogany stain with zero chemicals. We prioritize custom designs tailored to each bride's unique love story, embedding details like groom portraits, wedding dates, and meaningful motifs.
            </p>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <StatCounter endValue="8" suffix="+" label="Years Experience" />
              <StatCounter endValue="1500" suffix="+" label="Happy Brides" />
              <StatCounter endValue="500" suffix="+" label="Events Covered" />
              <StatCounter endValue="99" suffix="%" label="Satisfaction" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
