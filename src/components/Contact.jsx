import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { CONFIG } from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    location: '',
    service: 'Bridal Mehndi',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          date: '',
          location: '',
          service: 'Bridal Mehndi',
          message: ''
        });
      })
      .catch(error => alert(error));
  };

  const handleWhatsAppDirect = () => {
    const textMsg = `Hi Shalini, I am writing to inquire about a booking.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Date: ${formData.date}\nLocation: ${formData.location}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const url = `${CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(textMsg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-gold-accent uppercase mb-2 block">
            Reservation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mehndi-dark">
            Book Your Beautiful Stain
          </h2>
          <div className="mandala-divider w-1/3 mx-auto">
            <span className="text-gold-accent">🌸</span>
          </div>
          <p className="font-sans text-gray-500 text-sm sm:text-base">
            Have an upcoming wedding or celebration? Fill out the form below or message us on WhatsApp for a custom quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details & Map (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF8F5] rounded-[2rem] p-8 border border-beige-soft/30 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-mehndi-dark">Get In Touch</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/15 text-gold-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-mehndi-dark">Studio Location</h4>
                    <p className="font-sans text-sm text-gray-500 mt-0.5">257/3 Mukharji Nagar, Indore, Madhya Pradesh 452015, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/15 text-gold-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-mehndi-dark">Call or Text</h4>
                    <p className="font-sans text-sm text-gray-500 mt-0.5">+91 83199 16631</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/15 text-gold-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-mehndi-dark">Email Inquiry</h4>
                    <p className="font-sans text-sm text-gray-500 mt-0.5">shalini@mehandibyshalini.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-[2rem] overflow-hidden border border-beige-soft/30 shadow-md h-64 relative">
              <iframe
                title="Mehandi by Shalini Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.204561081519!2d77.11181653896582!3d28.62822295627255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04aa65c82ebf%3A0xb35a396ec09ad5e2!2sRajouri%20Garden%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1717890000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="glass p-8 sm:p-10 rounded-[2.5rem] border border-beige-soft/40 shadow-lg relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 bg-gold-accent/20 text-gold-accent rounded-full flex items-center justify-center mx-auto text-2xl">
                    🌸
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-mehndi-dark">Inquiry Submitted!</h3>
                  <p className="font-sans text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting Mehandi By Shalini. We will review your wedding details and reach out with a custom proposal shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Hidden form-name input for Netlify forms */}
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Deepika Padukone"
                        className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-beige-soft/40 rounded-xl font-sans text-sm focus:outline-none focus:border-gold-accent focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g., +91 98765 43210"
                        className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-beige-soft/40 rounded-xl font-sans text-sm focus:outline-none focus:border-gold-accent focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Event Date */}
                    <div className="space-y-1.5">
                      <label htmlFor="date" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">Event Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-beige-soft/40 rounded-xl font-sans text-sm focus:outline-none focus:border-gold-accent focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Service Required */}
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">Required Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-beige-soft/40 rounded-xl font-sans text-sm focus:outline-none focus:border-gold-accent focus:bg-white transition-colors appearance-none cursor-pointer"
                      >
                        <option value="Bridal Mehndi">Bridal Mehndi</option>
                        <option value="Engagement Mehndi">Engagement Mehndi</option>
                        <option value="Arabic Mehndi">Arabic Mehndi</option>
                        <option value="Portrait Mehndi">Portrait/Sketch Mehndi</option>
                        <option value="Rajasthani Mehndi">Rajasthani Traditional Mehndi</option>
                        <option value="Destination Wedding Mehndi">Destination Wedding Group</option>
                        <option value="Karwa Chauth Mehndi">Karwa Chauth Special</option>
                        <option value="Festival Mehndi">Festival Mehndi (Diwali/Eid)</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label htmlFor="location" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">Location / Venue</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Taj Palace, New Delhi"
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-beige-soft/40 rounded-xl font-sans text-sm focus:outline-none focus:border-gold-accent focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">Special requests or details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details like design preferences, side elements, or how many guests need mehndi..."
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-beige-soft/40 rounded-xl font-sans text-sm focus:outline-none focus:border-gold-accent focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-mehndi-green text-mehndi-green hover:bg-mehndi-green/5 py-3.5 rounded-xl font-sans text-sm font-semibold active:scale-95 transition-all duration-300 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp Booking
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
