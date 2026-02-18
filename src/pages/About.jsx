import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Heart, Star, Clock, MapPin, Phone, Mail, Utensils, Wine, ChefHat, Sparkles, History, Globe } from "lucide-react";
import logo from "../assets/grandterrace-logo.jpeg";

export default function About() {
  return (
    <div className="bg-[#0c0a09] min-h-screen pt-32 selection:bg-[#D4A574] selection:text-black">
      
      {/* --- HERO SECTION: THE LEGACY --- */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Abstract Gold Light Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4A574]/10 blur-[150px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 uppercase text-[10px] text-[#D4A574] font-black mb-8 border border-[#D4A574]/20 px-6 py-2 rounded-full tracking-[0.4em]"
          >
            <History size={12} /> Since 2010
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-[0.9]">
            The Spirit of <br />
            <span className="italic text-[#D4A574] font-light">Heritage</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 font-light italic leading-relaxed max-w-3xl mx-auto">
            "A sanctuary where Colombo's colonial charm meets the pinnacle of global gastronomy."
          </p>
        </motion.div>
      </section>

      {/* --- STATS SECTION: NUMBERS OF EXCELLENCE --- */}
      <section className="bg-stone-900/30 border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <StatItem icon={<ChefHat />} value="08" label="Master Culinarians" />
            <StatItem icon={<Award />} value="12" label="Culinary Awards" />
            <StatItem icon={<Globe />} value="04" label="Global Concepts" />
            <StatItem icon={<Users />} value="25K+" label="Distinguished Guests" />
          </div>
        </div>
      </section>

      {/* --- OUR STORY: BEYOND THE PLATE --- */}
      <section className="py-40 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#D4A574] uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">The Narrative</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">
                Crafting <span className="italic">Timeless</span> <br />
                Moments
              </h2>
              <div className="space-y-8 text-lg text-stone-400 font-light leading-relaxed">
                <p>
                  Established in the heart of Colombo, **Grand Terrace** was born from a passion to revive the 
                  forgotten flavors of the island while infusing modern culinary techniques. What started as a 
                  boutique terrace lounge has evolved into Sri Lanka's most iconic dining destination.
                </p>
                <p>
                  Our ingredients are the soul of our kitchen. We work directly with artisan farmers in the 
                  Central Highlands and local fishermen to ensure that every dish served is a tribute to 
                  freshness and sustainability. 
                </p>
                <p className="text-[#D4A574] font-serif italic text-2xl">
                  "It is not just a meal; it is an invitation to experience the grandeur of Sri Lankan hospitality."
                </p>
              </div>
            </motion.div>

            {/* Premium Logo Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 border border-[#D4A574]/20 rounded-[60px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="bg-[#141210] p-16 rounded-[50px] border border-white/5 shadow-3xl text-center">
                <img
                  src={logo}
                  alt="Grand Terrace Logo"
                  className="w-full max-w-[300px] mx-auto mb-12 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="space-y-6">
                   <div className="h-[1px] w-20 bg-[#D4A574] mx-auto"></div>
                   <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-bold">Official Seal of Excellence</p>
                   <div className="flex justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#D4A574] text-[#D4A574]" />
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE PHILOSOPHY: OUR VOW --- */}
      <section className="py-40 px-6 bg-[#080707] relative">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="p-16 border border-white/5 rounded-[40px] bg-stone-900/20 backdrop-blur-xl">
               <Heart className="text-[#D4A574] mb-8" size={40} strokeWidth={1} />
               <h3 className="text-4xl font-serif text-white mb-6">Our Mission</h3>
               <p className="text-stone-400 font-light leading-relaxed text-lg">
                  To elevate the Sri Lankan dining experience by marrying ancestral culinary wisdom with 
                  unrivaled luxury, ensuring every guest feels the warmth of our heritage.
               </p>
            </div>
            <div className="p-16 border border-white/5 rounded-[40px] bg-stone-900/20 backdrop-blur-xl">
               <Sparkles className="text-[#D4A574] mb-8" size={40} strokeWidth={1} />
               <h3 className="text-4xl font-serif text-white mb-6">Our Vision</h3>
               <p className="text-stone-400 font-light leading-relaxed text-lg">
                  To be the global gold standard for 'Heritage Dining', creating a world where 
                  tradition and innovation coexist in perfect culinary harmony.
               </p>
            </div>
         </div>
      </section>

      {/* --- WHY GRAND TERRACE? --- */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <span className="text-[#D4A574] uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">The Pillars</span>
          <h2 className="text-5xl md:text-6xl font-serif text-white">Distinction in Detail</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
           <FeatureCard 
            icon={<Wine />} 
            title="Curated Cellar" 
            desc="A collection of over 200 rare labels selected to harmonize with our cocoa-infused signature dishes." 
           />
           <FeatureCard 
            icon={<MapPin />} 
            title="Prime Location" 
            desc="Situated in the historic York Street, offering panoramic views of Colombo's evolving skyline." 
           />
           <FeatureCard 
            icon={<Clock />} 
            title="Private Concierge" 
            desc="Dedicated service that anticipates your needs, from custom menus to exclusive event planning." 
           />
        </div>
      </section>

      {/* --- CTA: FINAL TOUCH --- */}
      <section className="py-32 px-6 text-center">
         <div className="max-w-4xl mx-auto p-20 rounded-[60px] border border-[#D4A574]/20 bg-gradient-to-b from-stone-900 to-transparent">
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 leading-tight">
              Begin Your <br /> <span className="italic text-[#D4A574]">Journey</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button className="bg-[#D4A574] text-black px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all">
                  Reserve a Table
               </button>
               <button className="bg-transparent border border-white/20 text-white px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:border-[#D4A574] transition-all">
                  Event Inquiries
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}

// Helper Components
const StatItem = ({ icon, value, label }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="text-center group"
  >
    <div className="flex justify-center text-[#D4A574]/30 group-hover:text-[#D4A574] transition-colors mb-4">
      {React.cloneElement(icon, { size: 24, strokeWidth: 1.5 })}
    </div>
    <div className="text-4xl font-serif text-white mb-1">{value}</div>
    <div className="text-[9px] text-stone-500 uppercase tracking-[0.4em] font-bold">{label}</div>
  </motion.div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-12 border border-white/5 rounded-[40px] hover:bg-white/5 transition-all duration-500 group">
    <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center text-[#D4A574] mb-8 group-hover:scale-110 transition-transform border border-white/5">
      {React.cloneElement(icon, { size: 28, strokeWidth: 1 })}
    </div>
    <h3 className="text-2xl font-serif text-white mb-4">{title}</h3>
    <p className="text-stone-500 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);