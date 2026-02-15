import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Download, ArrowRight } from 'lucide-react';
import { diningOutlets } from '../data/diningData';

const Dining = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Dining Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <span className="uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block text-[#D4A574]">Culinary Excellence</span>
          <h1 className="text-5xl md:text-7xl font-serif italic">Signature Dining</h1>
        </motion.div>
      </section>

      {/* --- INTRO TEXT --- */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-[#6F4E37] uppercase tracking-widest text-xs font-bold mb-4">The Art of Taste</h2>
        <p className="text-2xl md:text-3xl font-serif text-stone-800 italic leading-snug">
          "From rooftop cocktails to intimate fine dining, discover a world of flavors curated by master chefs."
        </p>
      </section>

      {/* --- DINING OUTLETS GRID --- */}
      <section className="pb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-24">
          {diningOutlets.map((outlet, index) => (
            <motion.div 
              key={outlet.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 overflow-hidden shadow-2xl relative group">
                <img 
                  src={outlet.image} 
                  alt={outlet.name} 
                  className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-[#6F4E37] border border-[#6F4E37]/20">
                  {outlet.cuisine}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6 px-4">
                <h3 className="text-4xl font-serif text-stone-900">{outlet.name}</h3>
                <p className="text-stone-600 leading-relaxed font-sans text-lg">
                  {outlet.description}
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Book Now Button */}
                  <button className="bg-[#6F4E37] hover:bg-[#5A3D2B] text-white px-8 py-3 text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-md hover:shadow-xl">
                    Reserve a Table <ArrowRight size={14} />
                  </button>
                  
                  {/* Menu Download Button */}
                  <button className="border-2 border-stone-300 hover:border-[#6F4E37] hover:text-[#6F4E37] px-8 py-3 text-xs uppercase tracking-widest transition-all flex items-center gap-2 text-stone-800">
                    View Menu <Download size={14} />
                  </button>
                </div>

                {/* Info Strip */}
                <div className="pt-8 grid grid-cols-2 gap-4 border-t border-stone-200 mt-8">
                  <div>
                    <span className="block text-[10px] uppercase text-stone-400 tracking-widest mb-1">Opening Hours</span>
                    <span className="text-sm font-bold text-stone-800">11:00 AM - 11:00 PM</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-stone-400 tracking-widest mb-1">Dress Code</span>
                    <span className="text-sm font-bold text-stone-800">Smart Casual</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PRIVATE DINING CTA --- */}
      <section className="bg-gradient-to-br from-stone-900 via-[#6F4E37] to-stone-900 py-20 px-6 text-center text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B6239] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <Utensils className="mx-auto mb-6 text-[#D4A574]" size={40} />
          <h2 className="text-3xl md:text-5xl font-serif italic mb-6">Private Celebrations</h2>
          <p className="text-stone-300 mb-10 font-sans leading-relaxed">
            Planning an intimate dinner or a grand gala? Our venues provide the perfect backdrop for your special moments.
          </p>
          <button className="border-2 border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-stone-900 px-10 py-4 text-xs uppercase tracking-widest transition-all font-bold shadow-lg hover:shadow-2xl">
            Inquire Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dining;