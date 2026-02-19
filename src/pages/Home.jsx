import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import baImg from "../assets/ba.png";
import kerImg from "../assets/ker.png";
import tapImg from "../assets/tap.png";
import nigImg from "../assets/nig.png";

const outlets = [
  { id: "01", title: "Governor's Bar", subtitle: "FINE SPIRITS", img: baImg, path: "/bar" },
  { id: "02", title: "ISTANBUL NIGHTS", subtitle: "Shisha Lounge", img: nigImg, path: "/shisha" },
  { id: "03", title: "Tap Bar", subtitle: "CRAFT BREWS", img: tapImg, path: "/tap-bar" },
  { id: "04", title: "Governor's Karaoke", subtitle: "EXCLUSIVE DINING", img: kerImg, path: "/karaoke" },
];

const Home = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const step = 1; // Scroll speed (Increase for faster)
    const intervalTime = 30; // Smoothness (Lower is smoother)

    const autoPlay = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        // End ekata giyahama restart wenawa
        slider.scrollTo({ left: 0, behavior: 'smooth' });
        scrollAmount = 0;
      } else {
        slider.scrollLeft += step;
        scrollAmount += step;
      }
    }, intervalTime);

    // User touch kalama hari mouse hover kalama auto-play nathara wenna ona nam:
    const stopAutoPlay = () => clearInterval(autoPlay);
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('touchstart', stopAutoPlay);

    return () => {
      clearInterval(autoPlay);
      slider.removeEventListener('mouseenter', stopAutoPlay);
      slider.removeEventListener('touchstart', stopAutoPlay);
    };
  }, []);

  return (
    <div className="bg-[#0c0a09] min-h-screen pt-40 md:pt-64 overflow-hidden selection:bg-[#D4A574]">
      
      {/* --- ELITE HEADER --- */}
      <section className="text-center mb-16 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[#E6D5C3] text-5xl md:text-8xl font-serif uppercase tracking-[0.1em] leading-tight">
            Dine <span className="italic font-light lowercase text-[#D4A574]">with</span> Us
          </h2>
          
          <div className="flex items-center justify-center gap-4 mt-8 opacity-50">
            <div className="w-12 h-[1px] bg-[#D4A574]"></div>
            <span className="text-[#D4A574] text-[10px] tracking-[0.5em] uppercase font-bold">Curated Venues</span>
            <div className="w-12 h-[1px] bg-[#D4A574]"></div>
          </div>
        </motion.div>
      </section>

      {/* --- HORIZONTAL AUTO-PLAY SLIDER --- */}
      <main 
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar h-[60vh] md:h-[70vh] items-center cursor-grab active:cursor-grabbing"
      >
        <div className="flex flex-nowrap gap-6 md:gap-12 px-6 md:px-[20vw]">
          {outlets.map((item) => (
            <section 
              key={item.id} 
              className="w-[85vw] md:w-[450px] flex-shrink-0 snap-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-50px" }}
                className="relative h-full group"
              >
                <div className="relative aspect-[9/14] md:aspect-[9/15] overflow-hidden rounded-[30px] md:rounded-[60px] border border-white/5 shadow-2xl">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                    <p className="text-[#D4A574] text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4 font-bold">
                      {item.subtitle}
                    </p>
                    <h3 className="text-white text-4xl md:text-5xl font-serif mb-8 leading-tight">
                      {item.title}
                    </h3>
                    <Link to={item.path}>
                      <button className="text-[10px] text-white border border-white/40 px-10 py-3 rounded-full uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-[#D4A574] hover:text-black transition-all duration-500 font-bold">
                        Explore
                       </button>
</Link>
                  </div>
                </div>
              </motion.div>
            </section>
          ))}
          <div className="w-[20vw] flex-shrink-0"></div>
        </div>
      </main>

      {/* --- SCROLL PROGRESS --- */}
      <footer className="mt-16 flex flex-col items-center gap-6 pb-20">
        <div className="flex items-center gap-6 w-48 opacity-40">
          <div className="flex-1 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              style={{ scaleX }}
              className="absolute inset-0 bg-[#D4A574] origin-left"
            />
          </div>
        </div>
        <p className="text-[9px] text-stone-600 uppercase tracking-[1em]">Automated Discovery</p>
      </footer>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;