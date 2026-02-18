import React from 'react';
import { motion } from 'framer-motion';

const outlets = [
  { id: 1, title: "The Cocoa Bar", subtitle: "Fine Spirits", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000" },
  { id: 2, title: "Shisha Lounge", subtitle: "Exotic Flavors", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000" },
  { id: 3, title: "Tapbar Elite", subtitle: "Craft Brews", img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=1000" },
  { id: 4, title: "Private Soirée", subtitle: "Exclusive Dining", img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1000" },
];

const Home = () => {
  return (
    // Fixed Navbar eka nisa pt-64 use kala
    <div className="bg-[#0c0a09] min-h-screen pt-64">
      
      {/* --- ELITE HEADER SECTION --- */}
      <section className="pb-20 text-center relative overflow-hidden">
        {/* Background ekata subtle Gold Glow ekak */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4A574]/5 blur-[120px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Flower Icon - Rotating slowly */}
          <motion.span 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[#D4A574] text-4xl font-light block mb-6"
          >
            ✦
          </motion.span>
          
          <h2 className="text-[#E6D5C3] text-5xl md:text-7xl font-serif tracking-[0.2em] uppercase">
            Dine <span className="italic font-light lowercase text-[#D4A574]">with</span> Us
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4A574]"></div>
            <div className="w-2 h-2 rounded-full border border-[#D4A574]"></div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4A574]"></div>
          </div>
        </motion.div>
      </section>

      {/* --- LUXURY IMAGE GRID --- */}
      <section className="pb-40 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outlets.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                // Index eka anuwa cards wala height wenas kala (Staggered look)
                className={`relative group cursor-pointer ${index % 2 !== 0 ? 'md:mt-20' : ''}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[9/15] overflow-hidden rounded-t-[120px] rounded-b-[20px] border border-white/5 bg-stone-900 shadow-2xl transition-all duration-500 group-hover:border-[#D4A574]/30">
                  
                  {/* Image with Zoom effect */}
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[1.5s] group-hover:scale-110"
                  />

                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#D4A574] text-[10px] tracking-[0.4em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {item.subtitle}
                    </p>
                    <h3 className="text-white text-2xl font-serif tracking-wide mb-4">
                      {item.title}
                    </h3>
                    
                    {/* Hover Button */}
                    <div className="overflow-hidden h-0 group-hover:h-10 transition-all duration-500">
                       <button className="text-[10px] text-white border border-white/20 px-6 py-2 rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                         Explore
                       </button>
                    </div>
                  </div>
                </div>

                {/* Floating Glow on Hover */}
                <div className="absolute -inset-1 bg-[#D4A574]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Footer Hint */}
      <div className="text-center pb-20 opacity-20 tracking-[1em] uppercase text-[10px] text-white">
        Grand Terrace Experience
      </div>

    </div>
  );
};

export default Home;