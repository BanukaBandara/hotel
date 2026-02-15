import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from "../assets/grandterrace-logo.jpeg";
import SubLogosStrip from "../assets/grandterrace-logos-strip.jpeg";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-[100] transition-all duration-700">
      
      
      <div className={`w-full bg-white transition-all duration-500 border-b border-stone-100 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-16 opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto h-full flex justify-between items-center px-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-medium">
            Part of Grand Terrace Hotel
          </div>
          <img 
            src={SubLogosStrip} 
            alt="Grand Terrace Sub Brands" 
            className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
          />
          <div className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-stone-400 font-medium">
            Colombo, Sri Lanka
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <nav className={`w-full transition-all duration-500 ${
        isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-xl py-3 border-b border-stone-200' 
        : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}>
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          
          <Link to="/" className="flex-shrink-0">
            <div className={`bg-white p-2 rounded-sm transition-all duration-500 shadow-lg ${isScrolled ? 'scale-90' : 'scale-110'}`}>
              <img 
                src={MainLogo} 
                alt="Grand Terrace Logo" 
                className="h-14 md:h-20 w-auto object-contain" 
              />
            </div>
          </Link>

          <div className={`hidden lg:flex items-center space-x-12 text-[12px] uppercase tracking-[0.4em] font-bold ${
            isScrolled ? 'text-stone-900' : 'text-white'
          }`}>
            <Link to="/" className="hover:text-amber-600 transition-colors relative group">
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/dining" className="hover:text-amber-600 transition-colors relative group">
              Dining
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="hover:text-amber-600 transition-colors relative group">
              About
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="hover:text-amber-600 transition-colors relative group">
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-600 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
             <button className={`hidden sm:block text-[11px] uppercase tracking-[0.2em] font-bold ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
                EN / LK
             </button>
             <button className="bg-amber-700 hover:bg-stone-900 text-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] font-bold transition-all shadow-lg transform hover:-translate-y-1">
                Book Now
             </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;