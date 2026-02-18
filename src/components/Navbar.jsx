import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import MainLogo from "../assets/grandterrace-logo.jpeg";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/dining", label: "Dining" },
  { to: "/events", label: "Weddings & Events" },
  { to: "/About", label: "About" },
  { to: "/Contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full shadow-2xl">
      {/* --- TOP LAYER (Fixed Dark Bar) --- */}
      <div className="bg-stone-950 border-b border-white/5 py-2 px-6 hidden lg:block">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-[9px] tracking-[0.3em] text-stone-400 font-bold uppercase">
            <span className="cursor-pointer hover:text-[#D4A574] transition">Grand Terrace Hotels & Resorts</span>
            <span className="text-stone-800">|</span>
            <span className="cursor-pointer hover:text-[#D4A574] transition italic font-serif lowercase text-base tracking-normal">Heritage Excellence</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest cursor-pointer text-stone-300 hover:text-[#D4A574]">
              <Globe size={12} className="text-[#D4A574]" /> English <ChevronDown size={12} />
            </div>
            <button className="text-[10px] font-bold uppercase tracking-widest border-b border-[#D4A574]/30 pb-0.5 text-stone-300 hover:text-[#D4A574] transition">
              Manage Bookings
            </button>
            <button className="bg-[#D4A574] text-stone-950 px-6 py-2 rounded-tr-xl rounded-bl-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* --- MIDDLE LAYER (Main Nav - Fixed) --- */}
      <div className="bg-stone-950/95 backdrop-blur-md border-b border-white/5 py-4 px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center">
          <Link to="/" className="mb-4">
            <img src={MainLogo} alt="Grand Terrace" className="h-14 w-auto object-contain brightness-110" />
          </Link>

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

          <button className="lg:hidden absolute left-6 top-1/2 -translate-y-1/2 text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- BOTTOM LAYER (Booking Bar - Fixed) --- */}
      <div className="hidden lg:block bg-[#0c0a09] h-16 border-b border-white/5">
        <div className="max-w-[1600px] mx-auto h-full flex items-center">
          <div className="flex-1 flex border-r border-white/5 h-full items-center px-10 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
            Grand Terrace <span className="text-[#D4A574] ml-2">Colombo</span>
          </div>
          <div className="flex-1 flex border-r border-white/5 h-full items-center px-10 text-[13px] text-white font-bold tracking-wide">
            19 Feb - 20 Feb, 2026
          </div>
          <div className="flex-1 flex border-r border-white/5 h-full items-center px-10 text-[13px] text-white font-bold tracking-wide">
            01 Rooms, 01 Adults
          </div>
          <div className="flex-1 flex items-center px-10 text-[10px] uppercase tracking-widest text-stone-500 font-bold">
            Promo Code
          </div>
          <button className="bg-[#D4A574] text-stone-950 h-full px-12 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white transition-all">
            Check Availability
          </button>
        </div>
      </div>
    </header>
  );
}