import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play, Star, Award, Clock, MapPin, Phone, Mail, Calendar, Sparkles, Users, Coffee, Heart, GlassWater, Mic2, Beer, Wind, ArrowRight } from 'lucide-react';

const Home = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeExperience, setActiveExperience] = useState(0);

  // Auto-rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroImages = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2400"
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* --- ADVANCED HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5 }}
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={heroImages[currentSlide]}
              className="w-full h-full object-cover"
              alt="Grand Terrace"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-500 ${
                currentSlide === index 
                  ? 'w-12 bg-[#D4A574]' 
                  : 'w-8 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Floating Award Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block z-20"
        >
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center text-white px-4 max-w-6xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6F4E37]/80 to-[#8B6239]/80 backdrop-blur-md px-8 py-3 rounded-full text-xs uppercase tracking-[0.35em] mb-10 border border-[#D4A574]/30 shadow-xl"
          >
            <Sparkles size={16} className="text-[#D4A574]" />
            <span className="text-[#F5E6D3]">Heritage Dining Excellence</span>
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif italic mb-8 leading-[0.95] tracking-tight"
          >
            Grand <br /> 
            <span className="text-[#D4A574]">Terrace</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Where timeless tradition meets contemporary culinary artistry in the heart of Colombo
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.button 
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#6F4E37] to-[#8B6239] hover:from-[#5A3D2B] hover:to-[#6F4E37] text-white px-14 py-5 text-sm uppercase tracking-[0.25em] font-bold transition-all duration-500 shadow-2xl flex items-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Calendar size={18} />
                Reserve Your Table
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 text-white hover:text-[#D4A574] transition-all duration-300 uppercase text-sm tracking-[0.25em] font-bold"
            >
              <span className="p-4 border-2 border-white/60 group-hover:border-[#D4A574] rounded-full transition-all duration-300 group-hover:rotate-90 group-hover:bg-[#D4A574]/10">
                <Play size={18} fill="currentColor" />
              </span>
              Virtual Tour
            </motion.button>
          </motion.div>

          {/* Quick Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/80"
          >
            {[
              { icon: <Coffee size={16} />, text: "Est. 1970" },
              { icon: <MapPin size={16} />, text: "Colombo, Sri Lanka" },
              { icon: <Clock size={16} />, text: "Open Daily 11AM-11PM" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 group cursor-pointer">
                <span className="text-[#D4A574] group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="group-hover:text-white transition-colors">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <motion.div className="w-1.5 h-2 bg-[#D4A574] rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- ADVANCED STATS BAR --- */}
      <section className="relative bg-gradient-to-r from-stone-900 via-[#6F4E37] to-stone-900 text-white py-16 overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#D4A574] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#8B6239] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "50+", label: "Years Heritage", icon: <Award size={28} /> },
              { value: "5", label: "Dining Venues", icon: <Sparkles size={28} /> },
              { value: "10K+", label: "Happy Guests", icon: <Users size={28} /> },
              { value: "4.9/5", label: "Guest Rating", icon: <Star size={28} /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="flex justify-center text-[#D4A574] mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-serif text-white mb-3 group-hover:text-[#F5E6D3] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-300 uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ENHANCED WELCOME SECTION --- */}
      <section className="py-32 px-6 md:px-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5E6D3] rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block text-[#6F4E37] uppercase tracking-[0.35em] text-xs font-black mb-6 bg-[#F5E6D3] px-5 py-2 rounded-full"
              >
                Welcome to Excellence
              </motion.span>
              
              <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-8">
                A Legacy of <br />
                <span className="italic text-[#6F4E37]">Unparalleled</span> <br />
                Hospitality
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#6F4E37] to-[#8B6239] mb-10 rounded-full"></div>
              
              <p className="text-xl text-stone-600 leading-relaxed mb-6 font-light">
                For over five decades, Grand Terrace has been the epitome of refined dining and impeccable service. Every detail is meticulously crafted to exceed the expectations of the most discerning guests.
              </p>
              
              <p className="text-lg text-stone-500 leading-relaxed mb-10">
                From our master chefs to our award-winning ambiance, from our curated wine selection to our world-class service—we don't just meet standards, we set them.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: <Coffee size={20} />, text: "Authentic Sri Lankan & International Cuisine" },
                  { icon: <Star size={20} />, text: "Award-Winning Culinary Team" },
                  { icon: <Heart size={20} />, text: "Exceptional Guest Experience" }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BF] rounded-lg text-[#6F4E37] group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <span className="text-stone-700 font-medium group-hover:text-[#6F4E37] transition-colors">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <motion.button 
                whileHover={{ x: 8 }}
                className="flex items-center gap-3 text-[#6F4E37] font-bold uppercase tracking-[0.25em] text-sm group border-b-2 border-[#6F4E37] pb-2 hover:border-[#8B6239] transition-all"
              >
                Discover Our Story 
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-2 gap-5"
            >
              <div className="space-y-5">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden shadow-2xl group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Luxury Suite"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6F4E37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden shadow-2xl group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Fine Dining"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6F4E37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              </div>
              
              <div className="space-y-5 pt-16">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden shadow-2xl group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Lobby"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6F4E37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden shadow-2xl group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Pool"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6F4E37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE EXPERIENCES SECTION --- */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-[#6F4E37] uppercase tracking-[0.35em] text-xs font-black mb-6 bg-[#F5E6D3] px-5 py-2 rounded-full"
            >
              Signature Experiences
            </motion.span>
            <h3 className="text-5xl md:text-6xl font-serif text-stone-900 mb-8">Curated For You</h3>
            <p className="text-stone-600 max-w-3xl mx-auto text-xl leading-relaxed">
              Immerse yourself in extraordinary experiences designed to create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            title: "GOVERNOR'S BAR", 
            subtitle: "The Art of Mixology",
            img: "src/assets/ba.png",
            icon: <GlassWater size={20} strokeWidth={1.5} />,
            accent: "bg-[#3E2723]" 
          },
          { 
            title: "KARAOKE SUITE", 
            subtitle: "Private Singing Experience",
            img: "src/assets/ker.png",
            icon: <Mic2 size={20} strokeWidth={1.5} />,
            accent: "bg-[#5D4037]"
          },
          { 
            title: "TAP BAR", 
            subtitle: "Elite Rooftop Lounge",
            img: "src/assets/tap.png",
            icon: <Beer size={20} strokeWidth={1.5} />,
            accent: "bg-[#3E2723]"
          },
          { 
            title: "ISTANBUL NIGHTS", 
            subtitle: "Premium Shisha Veranda",
            img: "src/assets/nig.png",
            icon: <Wind size={20} strokeWidth={1.5} />,
            accent: "bg-[#5D4037]"
          },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            onHoverStart={() => setActiveExperience(i)}
            onHoverEnd={() => setActiveExperience(-1)}
            className="relative group h-[580px] overflow-hidden bg-white rounded-2xl shadow-[0_10px_40px_rgba(62,39,35,0.05)] border border-stone-100 hover:border-[#D4A574]/30 transition-all duration-700"
          >
            {/* Visual Area */}
            <div className="overflow-hidden h-[360px] relative">
              <motion.img 
                src={item.img} 
                animate={{ scale: activeExperience === i ? 1.1 : 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full object-cover"
                alt={item.title} 
              />
              
              {/* Deep Cocoa Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0E]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>
            
            {/* Content Area */}
            <div className="p-8 bg-white relative">
              <div className="flex items-center gap-4 mb-5">
                {/* Icon Container with Roasted Cocoa Theme */}
                <div className={`p-3 rounded-xl text-white shadow-lg ${item.accent} group-hover:bg-[#D4A574] transition-colors duration-500`}>
                  {item.icon}
                </div>
                <div className="h-[1px] flex-1 bg-stone-100 group-hover:bg-[#D4A574]/30 transition-colors" />
              </div>
              
              <h5 className="text-2xl font-serif tracking-tight text-[#3E2723] mb-2 group-hover:text-[#D4A574] transition-colors duration-500">
                {item.title}
              </h5>
              
              <p className="text-[11px] font-bold text-stone-400 mb-8 uppercase tracking-[0.15em]">
                {item.subtitle}
              </p>
              
              <div className="flex items-center justify-between">
                <motion.div
                  animate={{ x: activeExperience === i ? 5 : 0 }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#3E2723]">Discover</span>
                  <ArrowRight size={14} className="text-[#D4A574]" />
                </motion.div>
                
                <span className="text-stone-100 font-serif text-4xl absolute bottom-6 right-8 pointer-events-none group-hover:text-stone-200 transition-colors">
                  0{i + 1}
                </span>
              </div>
      </div>

      {/* Luxury Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#D4A574] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* --- PREMIUM BOOKING BANNER --- */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Grand Terrace"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 via-[#6F4E37]/80 to-stone-900/90"></div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B6239] rounded-full blur-3xl"></div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center text-white"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-[#D4A574] uppercase tracking-[0.4em] text-xs font-black mb-8 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-[#D4A574]/30"
          >
            Special Offer
          </motion.span>
          
          <h3 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
            Experience Culinary Excellence <br />
            <span className="italic text-[#D4A574]">Like Never Before</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-white/90 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
            Book your table today and enjoy exclusive benefits including complimentary appetizers, 
            premium wine pairing, and personalized service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button 
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#6F4E37] to-[#8B6239] hover:from-white hover:to-white text-white hover:text-[#6F4E37] px-14 py-5 text-sm uppercase tracking-[0.25em] font-black transition-all duration-500 shadow-2xl hover:shadow-[#D4A574]/50 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10">Book Now</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/50 hover:border-[#D4A574] text-white px-14 py-5 text-sm uppercase tracking-[0.25em] font-black transition-all duration-500 shadow-xl"
            >
              View Menu
            </motion.button>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/70"
          >
            {[
              "Forbes Recommended",
              "50+ Years Heritage",
              "10,000+ Happy Guests"
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#D4A574] rounded-full"></div>
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-stone-900 py-20 px-6 border-t border-[#6F4E37]/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#6F4E37]"></div>
            <Coffee className="text-[#D4A574]" size={32} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#6F4E37]"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif text-white italic mb-4">
            Grand Terrace Hotel
          </h3>
          <p className="text-stone-400 text-sm uppercase tracking-[0.3em]">
            A Heritage of Excellence Since 1970
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;