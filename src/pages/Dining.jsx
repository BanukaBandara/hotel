import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Download, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { diningOutlets } from '../data/diningData';

const Dining = () => {
  return (
    <div className="bg-[#0c0a09] min-h-screen pt-32">
      
      {/* --- HERO SECTION (Cinematic) --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-110"
            alt="Dining Hero"
          />
          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/80 via-[#0c0a09]/40 to-[#0c0a09]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6"
        >
          <motion.span 
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.5em", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="uppercase text-[10px] font-black mb-6 block text-[#D4A574]"
          >
            Culinary Heritage
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight">
            Signature <span className="italic text-[#D4A574] font-light">Dining</span>
          </h1>
          <div className="w-20 h-[1px] bg-[#D4A574] mx-auto mt-8"></div>
        </motion.div>
      </section>

      {/* --- INTRO TEXT --- */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#D4A574] to-transparent"></div>
        <h2 className="text-[#D4A574] uppercase tracking-[0.4em] text-[10px] font-black mb-8">The Art of Gastronomy</h2>
        <p className="text-3xl md:text-5xl font-serif text-stone-200 italic leading-[1.4]">
          "Where every ingredient tells a story of <span className="text-[#D4A574]">tradition</span>, and every plate is a masterpiece of <span className="text-[#D4A574]">luxury</span>."
        </p>
      </section>

      {/* --- DINING OUTLETS GRID --- */}
      <section className="pb-40 px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 gap-40">
          {diningOutlets.map((outlet, index) => (
            <motion.div 
              key={outlet.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image Side with Gold Border Frame */}
              <div className="w-full lg:w-[55%] relative group">
                <div className="absolute -inset-4 border border-[#D4A574]/20 rounded-[40px] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                <div className="relative overflow-hidden rounded-[30px] z-10 shadow-2xl">
                  <img 
                    src={outlet.image} 
                    alt={outlet.name} 
                    className="w-full h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  
                  {/* Cuisine Tag */}
                  <div className="absolute bottom-8 left-8 bg-[#D4A574] text-black px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-black rounded-full shadow-xl">
                    {outlet.cuisine}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[45%] space-y-10 lg:px-12">
                <div className="space-y-4">
                  <h3 className="text-5xl md:text-6xl font-serif text-white tracking-tight">
                    {outlet.name}
                  </h3>
                  <div className="w-12 h-1 bg-[#D4A574]"></div>
                </div>

                <p className="text-stone-400 leading-relaxed font-light text-xl italic">
                  {outlet.description}
                </p>
                
                {/* Info Strip */}
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                  <div className="flex items-start gap-3">
                    <Clock className="text-[#D4A574] shrink-0" size={18} />
                    <div>
                      <span className="block text-[9px] uppercase text-stone-500 tracking-[0.2em] font-bold mb-1">Service Hours</span>
                      <span className="text-[13px] text-stone-200">11:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-[#D4A574] shrink-0" size={18} />
                    <div>
                      <span className="block text-[9px] uppercase text-stone-500 tracking-[0.2em] font-bold mb-1">Dress Code</span>
                      <span className="text-[13px] text-stone-200">Smart Casual</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="bg-[#D4A574] hover:bg-white text-black px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 rounded-tr-2xl rounded-bl-2xl shadow-xl">
                    Reserve a Table <ArrowRight size={14} />
                  </button>
                  
                  <button className="border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 rounded-tr-2xl rounded-bl-2xl">
                    View Menu <Download size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PRIVATE DINING CTA (Ultra Luxury) --- */}
      <section className="relative py-32 px-6 text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[#0c0a09]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#D4A574]/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Utensils className="mx-auto mb-10 text-[#D4A574] opacity-50" size={50} />
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-8">Private <span className="italic text-[#D4A574]">Celebrations</span></h2>
            <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Planning an intimate dinner or a grand gala? Our private venues provide the perfect heritage backdrop for your most cherished moments.
            </p>
            <button className="bg-transparent border-2 border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-black px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full shadow-2xl">
              Arrange a Consultation
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Dining;