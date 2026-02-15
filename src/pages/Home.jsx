import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Play, Star, Award, Clock, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const Home = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* --- NAVIGATION BAR --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif italic text-stone-900">The Royal Standard</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#rooms" className="hover:text-amber-700 transition-colors">Rooms & Suites</a>
            <a href="#dining" className="hover:text-amber-700 transition-colors">Dining</a>
            <a href="#experiences" className="hover:text-amber-700 transition-colors">Experiences</a>
            <a href="#gallery" className="hover:text-amber-700 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
          </div>
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 text-sm font-medium transition-all duration-300">
            Book Now
          </button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover"
            alt="Luxury Hotel"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </motion.div>

        {/* Floating Info Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block z-20"
        >
          <div className="bg-white/95 backdrop-blur-md p-6 shadow-2xl max-w-xs">
            <div className="flex items-center gap-2 text-amber-600 mb-3">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p className="text-sm text-stone-600 italic">"An unforgettable experience of pure luxury and sophistication"</p>
            <p className="text-xs text-stone-400 mt-2">- Forbes Travel Guide</p>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center text-white px-4 max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-xs uppercase tracking-[0.3em] mb-8 border border-white/20"
          >
            <Award size={14} />
            5-Star Luxury Experience
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic mb-6 leading-[0.95] tracking-tight">
            The Royal <br /> 
            <span className="text-amber-400">Standard</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
            Where timeless elegance meets modern luxury in the heart of the city
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 shadow-xl"
            >
              Reserve Your Stay
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors uppercase text-sm tracking-wider font-medium group"
            >
              <span className="p-3 border-2 border-white/70 rounded-full group-hover:border-amber-400 transition-colors">
                <Play size={16} fill="currentColor" />
              </span>
              Virtual Tour
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "250+", label: "Luxury Rooms" },
              { value: "5", label: "Dining Venues" },
              { value: "50+", label: "Years Heritage" },
              { value: "98%", label: "Guest Satisfaction" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-serif italic text-amber-500 mb-2">{stat.value}</div>
                <div className="text-sm text-stone-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WELCOME SECTION --- */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2"
            >
              <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Welcome to Excellence</span>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight mb-6">
                A Legacy of <br />
                <span className="italic text-amber-700">Unparalleled</span> <br />
                Hospitality
              </h2>
              <div className="w-20 h-1 bg-amber-600 mb-8"></div>
              <p className="text-stone-600 leading-relaxed mb-6 text-lg">
                For over five decades, The Royal Standard has been the epitome of refined luxury and impeccable service. Every detail is meticulously crafted to exceed the expectations of the most discerning guests.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                From our Michelin-starred restaurants to our award-winning spa, from our opulent suites to our world-class concierge service—we don't just meet standards, we set them.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-stone-900 font-bold uppercase tracking-wider text-sm group border-b-2 border-amber-600 pb-1"
                >
                  Discover Our Story 
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-3 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-80 object-cover shadow-xl"
                  alt="Luxury Suite"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-64 object-cover shadow-xl"
                  alt="Fine Dining"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-64 object-cover shadow-xl"
                  alt="Lobby"
                />
                <img 
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-80 object-cover shadow-xl"
                  alt="Pool"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FEATURED EXPERIENCES --- */}
      <section className="bg-stone-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Signature Experiences</span>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Curated For You</h3>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Immerse yourself in extraordinary experiences designed to create lasting memories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Fine Dining", 
                subtitle: "Michelin Experience",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600",
                icon: <Star size={20} />
              },
              { 
                title: "Luxury Suites", 
                subtitle: "Unmatched Comfort",
                img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600",
                icon: <Award size={20} />
              },
              { 
                title: "Rooftop Bar", 
                subtitle: "Skyline Views",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600",
                icon: <Clock size={20} />
              },
              { 
                title: "Spa & Wellness", 
                subtitle: "Rejuvenate",
                img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600",
                icon: <MapPin size={20} />
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="relative group h-[480px] overflow-hidden cursor-pointer bg-white shadow-lg"
              >
                <div className="overflow-hidden h-[320px]">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={item.title} 
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-[320px] bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                
                <div className="p-6 relative">
                  <div className="flex items-center gap-2 text-amber-600 mb-3">
                    {item.icon}
                  </div>
                  <h5 className="text-2xl font-serif text-stone-900 mb-2">{item.title}</h5>
                  <p className="text-sm text-stone-500 mb-4">{item.subtitle}</p>
                  <button className="text-xs uppercase tracking-widest font-bold text-amber-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING BANNER --- */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Hotel"
          />
          <div className="absolute inset-0 bg-stone-900/75"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center text-white"
        >
          <span className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Limited Time Offer</span>
          <h3 className="text-4xl md:text-6xl font-serif mb-8">
            Experience Luxury <br />
            <span className="italic text-amber-400">Like Never Before</span>
          </h3>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book your stay today and enjoy exclusive benefits including complimentary breakfast, spa credits, and late checkout
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 shadow-xl"
            >
              Book Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/50 text-white px-12 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300"
            >
              View Packages
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;