import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A120B] text-[#E6D5C3] pt-24 pb-12 px-6 font-sans border-t border-[#6F4E37]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION: BRANDING & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">
          
          {/* Brand Identity (4 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif text-white italic tracking-tighter">
                Infinity <span className="text-[#C5A059]">Dining</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm text-stone-400 font-light">
                Sri Lanka's premier culinary escape. We curate experiences where the deep essence 
                of Roasted Cocoa meets the precision of modern luxury.
              </p>
            </div>

            {/* Social Media - Minimalist Style */}
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, link: "#" },
                { Icon: Facebook, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Linkedin, link: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="w-10 h-10 flex items-center justify-center border border-[#6F4E37] rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-[#1A120B] transition-all duration-500"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation (4 Columns) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Discover</h4>
              <ul className="space-y-4 text-[13px] font-light">
                <li><a href="/" className="hover:text-white transition-colors flex items-center gap-1 group">Home <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all"/></a></li>
                <li><a href="/dining" className="hover:text-white transition-colors flex items-center gap-1 group">Our Dining <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all"/></a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">Private Events <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all"/></a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Service</h4>
              <ul className="space-y-4 text-[13px] font-light">
                <li><a href="#" className="hover:text-white transition-colors">Reservations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter (4 Columns) */}
          <div className="lg:col-span-4 space-y-6 bg-[#2C1E16] p-8 rounded-sm border border-[#6F4E37]/30">
            <h4 className="text-white uppercase tracking-widest text-xs font-bold">The Inner Circle</h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Join our mailing list for exclusive tasting invites and seasonal cocoa-inspired menus.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#1A120B] border border-[#6F4E37] px-4 py-4 text-xs text-white focus:outline-none focus:border-[#C5A059] transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#C5A059] text-[#1A120B] hover:bg-white transition-all">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* --- MIDDLE SECTION: INFO STRIPS --- */}
        <div className="py-12 border-y border-[#6F4E37]/20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-5 group">
            <div className="w-12 h-12 flex items-center justify-center bg-[#2C1E16] rounded-full text-[#C5A059] group-hover:scale-110 transition-transform">
                <MapPin size={20} />
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-stone-500">Location</p>
                <p className="text-sm text-white font-light">02, York Street, Colombo, Sri Lanka</p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 group">
            <div className="w-12 h-12 flex items-center justify-center bg-[#2C1E16] rounded-full text-[#C5A059] group-hover:scale-110 transition-transform">
                <Phone size={20} />
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-stone-500">Inquiries</p>
                <p className="text-sm text-white font-light">+94 11 234 5678</p>
            </div>
          </div>

          <div className="flex items-center gap-5 group">
            <div className="w-12 h-12 flex items-center justify-center bg-[#2C1E16] rounded-full text-[#C5A059] group-hover:scale-110 transition-transform">
                <Mail size={20} />
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-stone-500">Concierge</p>
                <p className="text-sm text-white font-light">infinityresturantsm@gmail.com</p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT --- */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500 italic">
            © 2026 Infinity Dining. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">Architected by</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">B & D Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;