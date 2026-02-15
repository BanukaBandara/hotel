import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-16 border-b border-stone-800">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-white italic tracking-tighter">The Royal Dine</h2>
            <p className="text-sm leading-relaxed max-w-sm">
              Sri Lanka's finest culinary destination. We bring you a fusion of heritage and 
              modern luxury in every bite.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-5">
              {[
                { Icon: Instagram, link: "https://instagram.com/your-handle" },
                { Icon: Facebook, link: "https://facebook.com/your-handle" },
                { Icon: Twitter, link: "https://twitter.com/your-handle" },
                { Icon: Linkedin, link: "https://linkedin.com/your-handle" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-stone-700 rounded-full hover:bg-amber-700 hover:border-amber-700 hover:text-white transition-all duration-300"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/" className="hover:text-amber-500 transition">Home</a></li>
                <li><a href="/dining" className="hover:text-amber-500 transition">Our Dining</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Private Events</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Offers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Reservations</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Terms of Use</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-2">Subscribe to our Stories</h4>
            <p className="text-sm">Get exclusive invites to our secret tasting events.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-stone-800 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-amber-700 outline-none transition"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-amber-700 text-white hover:bg-amber-800 transition">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Contact Info Strips */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="flex items-center gap-4">
            <MapPin className="text-amber-600" size={20} />
            <span>123, Galle Road, Colombo 03, Sri Lanka</span>
          </div>
          <div className="flex items-center gap-4 md:justify-center">
            <Phone className="text-amber-600" size={20} />
            <span>+94 11 234 5678</span>
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            <Mail className="text-amber-600" size={20} />
            <span>reservations@royaldine.lk</span>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-stone-500">
          <p>© 2026 The Grand Terrace. 
            Made By - B & D Solutions</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;