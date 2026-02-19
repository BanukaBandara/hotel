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
  const isHovered = useRef(false);
  
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let animationFrameId;

    const smoothScroll = () => {
      if (!isHovered.current && slider) {
        // Speed eka: 0.8 kiyanne luxury smooth speed ekak.
        slider.scrollLeft += 0.8; 

        // Loop Logic: අන්තිමට ගියපු ගමන් ආයේ මුලට එනවා දැනෙන්නෙ නැති වෙන්න.
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
          slider.scrollLeft = 1; 
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    // Event listeners to pause on hover
    const pause = () => (isHovered.current = true);
    const resume = () => (isHovered.current = false);

    slider.addEventListener('mouseenter', pause);
    slider.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animationFrameId);
      slider.removeEventListener('mouseenter', pause);
      slider.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <div className="bg-[#0c0a09] min-h-screen pt-40 md:pt-64 overflow-hidden selection:bg-[#D4A574]">
      
      {/* Header Section */}
      <section className="text-center mb-16 px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <h2 className="text-[#E6D5C3] text-5xl md:text-8xl font-serif uppercase tracking-[0.1em] leading-tight">
            Dine <span className="italic font-light lowercase text-[#D4A574]">with</span> Us
          </h2>
        </motion.div>
      </section>

      {/* --- SMOOTH CAROUSEL --- */}
      <main 
        ref={scrollRef}
        // Machan methana "overflow-x-hidden" dapan user scroll karana eka nawaththala auto-slide eka smooth karanna.
        className="flex overflow-x-hidden no-scrollbar h-[60vh] md:h-[75vh] items-center cursor-default"
      >
        <div className="flex flex-nowrap gap-10 px-10 md:px-[15vw]">
          {outlets.map((item) => (
            <section key={item.id} className="w-[85vw] md:w-[500px] flex-shrink-0">
              <div className="relative aspect-[9/14] md:aspect-[9/15] overflow-hidden rounded-[30px] md:rounded-[60px] border border-white/5 shadow-2xl group">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-12 pb-20">
                  <p className="text-[#D4A574] text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4 font-bold">{item.subtitle}</p>
                  <h3 className="text-white text-4xl md:text-5xl font-serif mb-10 leading-tight">{item.title}</h3>
                  <Link to={item.path}>
                    <button className="text-[10px] text-white border border-white/40 px-12 py-4 rounded-full uppercase tracking-[0.2em] backdrop-blur-md hover:bg-[#D4A574] hover:text-black transition-all duration-700 font-bold">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          ))}
          {/* Loop space */}
          <div className="w-[40vw] flex-shrink-0"></div>
        </div>
      </main>

      {/* Progress Bar */}
      <footer className="mt-16 flex flex-col items-center gap-6 pb-20 opacity-30">
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div style={{ scaleX }} className="absolute inset-0 bg-[#D4A574] origin-left" />
        </div>
        <p className="text-[9px] text-stone-600 uppercase tracking-[1em]">Automated Discovery</p>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;