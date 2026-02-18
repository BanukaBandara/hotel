import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Award, Users, Coffee, Instagram, Facebook, Twitter, Calendar, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- PREMIUM HEADER SECTION --- */}
      <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-stone-950 via-[#6F4E37] to-stone-950 pt-32 sm:pt-40 pb-20">
        {/* Animated Background Patterns */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#D4A574] blur-3xl" 
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#8B6239] blur-3xl" 
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#F5E6D3] backdrop-blur-md shadow-xl"
            >
              <Coffee size={14} />
              Get in Touch
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif italic tracking-tight text-white mb-8 leading-tight"
            >
              Contact <br />
              <span className="text-[#D4A574]">Grand Terrace</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed text-white/90 mb-12"
            >
              Whether you're planning a special celebration, making a reservation, or simply want to say hello—we're here to help make your experience unforgettable.
            </motion.p>

            {/* Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a
                href="tel:+94112345678"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#6F4E37] text-white px-8 py-4 text-sm uppercase tracking-wider font-bold transition-all duration-300 rounded-sm shadow-xl"
              >
                <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                Call Us
              </motion.a>
              <motion.a
                href="mailto:infinityresturantsm@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#6F4E37] text-white px-8 py-4 text-sm uppercase tracking-wider font-bold transition-all duration-300 rounded-sm shadow-xl"
              >
                <Mail size={18} />
                Email Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- QUICK STATS BAR --- */}
      <section className="bg-stone-900 text-white py-12 border-b border-[#6F4E37]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Phone size={20} />, value: "24/7", label: "Available" },
              { icon: <Clock size={20} />, value: "<2hr", label: "Response Time" },
              { icon: <Users size={20} />, value: "10K+", label: "Happy Guests" },
              { icon: <Award size={20} />, value: "5-Star", label: "Service" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center text-[#D4A574] mb-3">{stat.icon}</div>
                <div className="text-3xl font-serif text-white mb-1">{stat.value}</div>
                <div className="text-xs text-stone-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* --- LEFT SIDEBAR: CONTACT INFO --- */}
            <div className="lg:col-span-4 space-y-6">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-[#6F4E37] uppercase tracking-[0.35em] text-[10px] font-black mb-4 bg-[#F5E6D3] px-4 py-2 rounded-full">
                  Contact Information
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                  Let's Start a <br />
                  <span className="italic text-[#6F4E37]">Conversation</span>
                </h2>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Our dedicated team is here to assist with all your needs, from reservations to special requests.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <ContactInfoCard 
                  icon={<MapPin size={20} className="text-[#6F4E37]" />} 
                  title="Visit Us" 
                  value="02, York Street"
                  subValue="Colombo 01, Sri Lanka"
                  delay={0.1}
                />
                <ContactInfoCard 
                  icon={<Phone size={20} className="text-[#6F4E37]" />} 
                  title="Call Us" 
                  value="+94 11 234 5678"
                  subValue="Available 24/7"
                  delay={0.2}
                />
                <ContactInfoCard 
                  icon={<Mail size={20} className="text-[#6F4E37]" />} 
                  title="Email Us" 
                  value="infinityresturantsm@gmail.com"
                  subValue="Response within 2 hours"
                  delay={0.3}
                />
                <ContactInfoCard 
                  icon={<Clock size={20} className="text-[#6F4E37]" />} 
                  title="Opening Hours" 
                  value="Daily: 11AM - 11PM"
                  subValue="Open 365 days a year"
                  delay={0.4}
                />
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-8 border-t border-stone-200"
              >
                <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <Instagram size={18} />, href: "#" },
                    { icon: <Facebook size={18} />, href: "#" },
                    { icon: <Twitter size={18} />, href: "#" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BF] hover:from-[#6F4E37] hover:to-[#8B6239] text-[#6F4E37] hover:text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Action Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BF] p-6 border-l-4 border-[#6F4E37] shadow-lg"
              >
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <Calendar size={18} className="text-[#6F4E37]" />
                  Need Immediate Assistance?
                </h3>
                <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                  For urgent requests or same-day reservations, please call our team directly.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#6F4E37] to-[#8B6239] hover:from-[#5A3D2B] hover:to-[#6F4E37] text-white py-3 text-sm uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 rounded-sm shadow-md"
                >
                  <Phone size={16} />
                  Call Now
                </motion.button>
              </motion.div>
            </div>

            {/* --- RIGHT SIDE: CONTACT FORM --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="bg-white border-2 border-stone-100 shadow-2xl p-8 md:p-12 rounded-sm relative overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F5E6D3]/30 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="mb-10">
                    <span className="inline-block text-[#6F4E37] uppercase tracking-[0.35em] text-[10px] font-black mb-4 bg-[#F5E6D3] px-4 py-2 rounded-full">
                      Send a Message
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
                      We'd Love to Hear From You
                    </h2>
                    <p className="text-stone-600">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border-l-4 border-green-500 p-5 mb-8 flex items-center gap-3 rounded-sm shadow-sm"
                    >
                      <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="text-green-900 font-bold text-sm mb-1">Message Sent Successfully!</p>
                        <p className="text-green-700 text-xs">Thank you for contacting us. We'll respond within 2 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <CustomField 
                        label="Full Name" 
                        placeholder="John Doe" 
                        icon={<Users size={16} />}
                        required
                      />
                      <CustomField 
                        label="Email Address" 
                        placeholder="infinityresturantsm@gmail.com" 
                        type="email"
                        icon={<Mail size={16} />}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <CustomField 
                        label="Phone Number" 
                        placeholder="+94 11 234 5678"
                        icon={<Phone size={16} />}
                      />
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-wider font-bold text-stone-600 mb-3 flex items-center gap-2">
                          <Calendar size={16} className="text-[#6F4E37]" />
                          Inquiry Type
                        </label>
                        <select className="bg-stone-50 border-2 border-stone-200 px-4 py-4 focus:border-[#6F4E37] focus:bg-white outline-none transition-all text-sm text-stone-700 appearance-none cursor-pointer rounded-sm">
                          <option>General Inquiry</option>
                          <option>Dining Reservation</option>
                          <option>Private Event</option>
                          <option>Catering Service</option>
                          <option>Feedback</option>
                          <option>Press & Media</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <CustomField 
                        label="Subject" 
                        placeholder="How can we help you today?"
                        icon={<Coffee size={16} />}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs uppercase tracking-wider font-bold text-stone-600 mb-3 flex items-center gap-2">
                        <Send size={16} className="text-[#6F4E37]" />
                        Your Message
                      </label>
                      <textarea 
                        rows="6" 
                        className="bg-stone-50 border-2 border-stone-200 p-4 focus:border-[#6F4E37] focus:bg-white outline-none transition-all text-sm text-stone-700 resize-none rounded-sm"
                        placeholder="Tell us more about your inquiry or special requests..."
                        required
                      ></textarea>
                    </div>

                    {/* Privacy Notice */}
                    <div className="flex items-start gap-3 bg-stone-50 p-5 border-l-4 border-[#6F4E37] rounded-sm">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        className="mt-1 w-4 h-4 accent-[#6F4E37] cursor-pointer"
                        required
                      />
                      <label htmlFor="privacy" className="text-xs text-stone-600 leading-relaxed cursor-pointer">
                        I agree to the processing of my personal data and consent to being contacted by Grand Terrace 
                        regarding my inquiry. View our <a href="#" className="text-[#6F4E37] underline font-medium">Privacy Policy</a>.
                      </label>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#6F4E37] to-[#8B6239] hover:from-[#5A3D2B] hover:to-[#6F4E37] text-white py-5 uppercase tracking-wider text-sm font-black transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl rounded-sm relative overflow-hidden group"
                    >
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        <Send size={18} />
                        Send Message
                      </span>
                    </motion.button>
                  </form>

                  {/* Additional Info */}
                  <div className="mt-10 pt-10 border-t border-stone-200 grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Clock className="mx-auto mb-2 text-[#6F4E37]" size={24} />
                      <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">Response Time</p>
                      <p className="text-sm text-stone-700">Within 2 Hours</p>
                    </div>
                    <div>
                      <Users className="mx-auto mb-2 text-[#6F4E37]" size={24} />
                      <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">Languages</p>
                      <p className="text-sm text-stone-700">English & Sinhala</p>
                    </div>
                    <div>
                      <Award className="mx-auto mb-2 text-[#6F4E37]" size={24} />
                      <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">Service Rating</p>
                      <p className="text-sm text-stone-700">5.0 / 5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PREMIUM MAP SECTION --- */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#6F4E37] uppercase tracking-[0.35em] text-[10px] font-black mb-4 bg-white px-4 py-2 rounded-full shadow-sm">
              Find Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Our Location</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Located in the heart of Colombo, easily accessible from all major areas
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] shadow-2xl overflow-hidden rounded-sm border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.627349121404!2d79.843706175005!3d6.935086893065038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25916059d0685%3A0xe541460591f8f300!2sYork%20St%2C%20Colombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Grand Terrace Location"
            ></iframe>

            {/* Map Overlay Card */}
            <div className="absolute bottom-8 left-8 bg-white/98 backdrop-blur-md p-6 shadow-2xl max-w-sm border-l-4 border-[#6F4E37] rounded-sm">
              <h3 className="font-bold text-stone-900 mb-3 text-lg flex items-center gap-2">
                <MapPin size={20} className="text-[#6F4E37]" />
                Grand Terrace
              </h3>
              <p className="text-sm text-stone-700 mb-4 leading-relaxed">
                02, York Street<br />
                Colombo 01, Sri Lanka
              </p>
              <div className="space-y-2 text-sm text-stone-600 mb-4">
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-[#6F4E37]" />
                  +94 11 234 5678
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={14} className="text-[#6F4E37]" />
                  Daily: 11:00 AM – 11:00 PM
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="w-full bg-gradient-to-r from-[#6F4E37] to-[#8B6239] text-white py-3 text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2 rounded-sm"
              >
                Get Directions <ArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

// Enhanced Contact Info Card Component
function ContactInfoCard({ icon, title, value, subValue, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ x: 5 }}
      className="bg-white border-2 border-stone-100 hover:border-[#D4A574] p-6 flex items-start gap-4 shadow-sm hover:shadow-lg transition-all group rounded-sm"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BF] group-hover:from-[#6F4E37] group-hover:to-[#8B6239] rounded-lg transition-all duration-300 flex-shrink-0">
        <div className="group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-wider text-stone-500 font-bold mb-2">{title}</p>
        <p className="text-stone-900 font-semibold text-base mb-1">{value}</p>
        {subValue && <p className="text-xs text-stone-500">{subValue}</p>}
      </div>
    </motion.div>
  );
}

// Enhanced Form Field Component
function CustomField({ label, placeholder, type = "text", icon, required = false }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs uppercase tracking-wider font-bold text-stone-600 mb-3 flex items-center gap-2">
        {icon && <span className="text-[#6F4E37]">{icon}</span>}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        required={required}
        className="bg-stone-50 border-2 border-stone-200 px-4 py-4 focus:border-[#6F4E37] focus:bg-white outline-none transition-all text-sm text-stone-700 rounded-sm"
      />
    </div>
  );
}