import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import MainLogo from "../assets/grandterrace-logo.jpeg";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/dining", label: "Lounges & Bars" },
  { to: "/About", label: "About" },
  { to: "/Contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  // Ada dawasa auto calculate karana logic eka
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[999] w-full shadow-2xl">
      
      {/* --- TOP LAYER (Desktop Only) --- */}
      <div className="bg-stone-950 border-b border-white/5 py-2 px-6 hidden lg:block">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-[9px] tracking-[0.3em] text-stone-400 font-bold uppercase">
            <span>Grand Terrace Hotels & Resorts</span>
            <span className="text-stone-800">|</span>
            <span className="italic font-serif lowercase text-base tracking-normal">Heritage Excellence</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest cursor-pointer text-stone-300 hover:text-[#D4A574]">
              <Globe size={12} className="text-[#D4A574]" /> English <ChevronDown size={12} />
            </div>
            <button className="bg-[#D4A574] text-stone-950 px-6 py-2 rounded-tr-xl rounded-bl-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* --- MAIN NAV LAYER (Mobile & Desktop) --- */}
      <div className="bg-stone-950/95 backdrop-blur-md border-b border-white/5 py-4 px-6 relative">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between lg:flex-col lg:justify-center">
          
          {/* MOBILE HAMBURGER - Left Aligned */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-all" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} className="text-[#D4A574]" /> : <Menu size={28} />}
          </button>

          {/* LOGO - Center on Mobile, Top on Desktop */}
          <Link to="/" className="lg:mb-4">
            <img src={MainLogo} alt="Grand Terrace" className="h-10 md:h-14 w-auto object-contain brightness-110" />
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link, idx) => (
              <React.Fragment key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => 
                    `text-[10.5px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                      isActive ? "text-[#D4A574]" : "text-stone-300 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {idx !== NAV_LINKS.length - 1 && (
                  <span className="text-[#D4A574]/40 text-[8px]">✦</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* MOBILE SEARCH OR EMPTY DIV TO BALANCE FLEX */}
          <div className="w-10 lg:hidden"></div>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 top-[72px] bg-stone-950 z-[998] flex flex-col p-10 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-serif text-stone-200 hover:text-[#D4A574] tracking-widest uppercase transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            
            <div className="mt-auto pb-20 flex flex-col gap-6">
              <button className="w-full bg-[#D4A574] text-stone-950 py-4 font-black uppercase tracking-widest rounded-lg">
                Book Now
              </button>
              <p className="text-center text-stone-600 text-[10px] tracking-[0.5em] uppercase">
                Grand Terrace Colombo
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- BOTTOM BOOKING BAR (Desktop Only) --- */}
      <div className="hidden lg:block bg-[#0c0a09] h-16 border-b border-white/5">
        <div className="max-w-[1600px] mx-auto h-full flex items-center">
          <div className="flex-1 flex border-r border-white/5 h-full items-center px-10 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
            Grand Terrace <span className="text-[#D4A574] ml-2">Colombo</span>
          </div>
          
          {/* Dynamic Date eka methana penwanawa */}
          <div className="flex-1 flex border-r border-white/5 h-full items-center px-10 text-[13px] text-white font-bold tracking-wide text-center justify-center">
            {currentDate || "Loading..."}
          </div>

          <button className="bg-[#D4A574] text-stone-950 h-full px-12 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white transition-all">
            BOOK NOW
          </button>
        </div>
      </div>
    </header>
  );
}