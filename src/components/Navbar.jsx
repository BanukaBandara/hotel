import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Clock, Award, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLogo from "../assets/grandterrace-logo.jpeg";
import SubLogosStrip from "../assets/grandterrace-logos-strip.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* --- ULTRA PREMIUM TOP BAR --- */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ 
          y: isScrolled ? -100 : 0,
          opacity: isScrolled ? 0 : 1
        }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="fixed w-full z-[101] bg-black border-b border-amber-500/20"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-12 flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-amber-400 font-bold group-hover:text-amber-300 transition-colors">
                Part of Grand Terrace Hotel
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-stone-400"
            >
              <a href="tel:+94112345678" className="flex items-center gap-2 hover:text-amber-400 transition-colors group">
                <Phone size={11} className="group-hover:rotate-12 transition-transform" />
                <span>+94 11 234 5678</span>
              </a>
              <div className="w-px h-3 bg-stone-700"></div>
              <div className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-pointer">
                <Clock size={11} />
                <span>Open Daily 11AM - 11PM</span>
              </div>
            </motion.div>
          </div>

          {/* Center: Sub Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img 
              src={SubLogosStrip} 
              alt="Grand Terrace Brands" 
              className="h-7 object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="hidden xl:flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-stone-500 hover:text-amber-400 transition-colors"
                >
                  <Icon size={13} />
                </motion.a>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-stone-400">
              <MapPin size={11} />
              <span>Colombo, Sri Lanka</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- MAIN NAVIGATION BAR --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={`fixed w-full z-[100] transition-all duration-700 ${
          isScrolled 
          ? 'top-0 bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-stone-200' 
          : 'top-12 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className={`flex justify-between items-center transition-all duration-700 ${
            isScrolled ? 'py-3' : 'py-6'
          }`}>
            
            {/* --- LOGO SECTION --- */}
            <Link to="/" className="flex-shrink-0 relative group z-50">
              <motion.div 
                whileHover={{ scale: 1.08, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                {/* Logo Container */}
                <div className={`bg-white p-3 shadow-2xl transition-all duration-700 relative overflow-hidden ${
                  isScrolled ? 'rounded-sm scale-90' : 'rounded-lg scale-100'
                }`}>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <img 
                    src={MainLogo} 
                    alt="Grand Terrace" 
                    className={`w-auto object-contain transition-all duration-700 ${
                      isScrolled ? 'h-14' : 'h-16 md:h-20'
                    }`}
                  />
                  
                  {/* Border Animation */}
                  <div className={`absolute inset-0 border-2 transition-all duration-300 ${
                    isScrolled ? 'border-amber-500/0 rounded-sm' : 'border-amber-500/30 rounded-lg'
                  } group-hover:border-amber-500/60`}></div>
                </div>

                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-amber-600/20 to-amber-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-150"></div>
              </motion.div>

              {/* Award Badge */}
              {!isScrolled && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="hidden lg:block absolute -right-3 -top-2 bg-gradient-to-br from-amber-500 to-amber-600 text-white px-2 py-1 rounded-full shadow-lg"
                >
                  <div className="flex items-center gap-1">
                    <Award size={10} />
                    <span className="text-[8px] font-bold uppercase tracking-wider">5 Star</span>
                  </div>
                </motion.div>
              )}
            </Link>

            {/* --- DESKTOP NAVIGATION --- */}
            <div className={`hidden lg:flex items-center transition-colors duration-700 ${
              isScrolled ? 'text-stone-900' : 'text-white'
            }`}>
              <div className="flex items-center gap-2">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/dining', label: 'Dining' },
                  { path: '/about', label: 'About' },
                  { path: '/contact', label: 'Contact' }
                ].map((item, index) => (
                  <NavLink 
                    key={item.path}
                    to={item.path}
                    label={item.label}
                    isActive={location.pathname === item.path}
                    isScrolled={isScrolled}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* --- RIGHT ACTIONS --- */}
            <div className="flex items-center gap-3 md:gap-5">
              {/* Language Selector */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="hidden sm:flex items-center gap-2"
              >
                <button className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-900 bg-stone-100 hover:bg-amber-100 hover:text-amber-700' 
                    : 'text-white bg-white/10 hover:bg-white/20'
                } rounded-sm`}>
                  EN
                </button>
                <div className={`w-px h-4 ${isScrolled ? 'bg-stone-300' : 'bg-white/30'}`}></div>
                <button className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-600 hover:text-amber-700' 
                    : 'text-white/60 hover:text-white'
                }`}>
                  සිං
                </button>
              </motion.div>

              {/* Book Now Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 lg:px-10 py-3 lg:py-4 text-[10px] lg:text-[11px] uppercase tracking-[0.35em] font-black transition-all duration-500 shadow-xl hover:shadow-2xl rounded-sm relative overflow-hidden group"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Book Now</span>
                <ChevronRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2.5 transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-900 bg-stone-100 hover:bg-amber-100' 
                    : 'text-white bg-white/10 hover:bg-white/20'
                } rounded-sm`}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Navigation Bottom Border Animation */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent origin-center"
        />
      </motion.nav>

      {/* --- PREMIUM MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-stone-900 via-stone-800 to-black z-[95] lg:hidden overflow-y-auto shadow-2xl"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 p-8 pt-24">
                {/* Mobile Logo */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-12 text-center"
                >
                  <div className="bg-white p-4 inline-block rounded-lg shadow-2xl">
                    <img src={MainLogo} alt="Grand Terrace" className="h-16 w-auto" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-amber-400 font-bold mt-4">
                    Grand Terrace Hotel
                  </p>
                </motion.div>

                {/* Navigation Links */}
                <nav className="space-y-1 mb-12">
                  {[
                    { path: '/', label: 'Home', icon: '01' },
                    { path: '/dining', label: 'Dining', icon: '02' },
                    { path: '/about', label: 'About', icon: '03' },
                    { path: '/contact', label: 'Contact', icon: '04' }
                  ].map((item, index) => (
                    <MobileNavLink
                      key={item.path}
                      to={item.path}
                      label={item.label}
                      icon={item.icon}
                      isActive={location.pathname === item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      delay={index * 0.1 + 0.2}
                    />
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-5 text-sm uppercase tracking-[0.3em] font-black shadow-2xl mb-12 rounded-sm flex items-center justify-center gap-3 group"
                >
                  <span>Book Your Table</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-4 border-t border-white/10 pt-8 mb-8"
                >
                  {[
                    { icon: Phone, label: 'Call Us', value: '+94 11 234 5678', href: 'tel:+94112345678' },
                    { icon: Mail, label: 'Email', value: 'hello@royaldine.lk', href: 'mailto:hello@royaldine.lk' },
                    { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka', href: '#' },
                    { icon: Clock, label: 'Hours', value: 'Daily 11AM - 11PM', href: '#' }
                  ].map((contact, i) => (
                    <a
                      key={i}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all group"
                    >
                      <div className="p-2.5 bg-amber-600/20 rounded-lg">
                        <contact.icon size={18} className="text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[9px] uppercase tracking-wider text-white/40 mb-1">{contact.label}</p>
                        <p className="text-sm text-white/90 group-hover:text-amber-400 transition-colors">{contact.value}</p>
                      </div>
                      <ChevronRight size={16} className="text-white/30 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </motion.div>

                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="border-t border-white/10 pt-8"
                >
                  <p className="text-[9px] uppercase tracking-wider text-white/40 mb-4 text-center">Follow Us</p>
                  <div className="flex justify-center gap-3">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/10 hover:bg-amber-600 flex items-center justify-center rounded-lg transition-all group"
                      >
                        <Icon size={18} className="text-white/70 group-hover:text-white transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-12 pt-8 border-t border-white/10 text-center"
                >
                  <p className="text-[9px] uppercase tracking-wider text-white/30">
                    © 2024 Grand Terrace Hotel
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Enhanced Desktop Navigation Link
const NavLink = ({ to, label, isActive, isScrolled, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Link 
        to={to}
        className={`relative px-6 py-4 text-[11px] uppercase tracking-[0.35em] font-bold transition-all duration-300 group ${
          isActive ? 'text-amber-600' : 'hover:text-amber-600'
        }`}
      >
        {/* Text */}
        <span className="relative z-10">{label}</span>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            layoutId="activeNav"
            className={`absolute inset-0 rounded-sm ${
              isScrolled ? 'bg-amber-50' : 'bg-white/10'
            }`}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        {/* Hover Background */}
        <div className={`absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity ${
          isScrolled ? 'bg-stone-100' : 'bg-white/5'
        }`}></div>

        {/* Bottom Border Animation */}
        <motion.div 
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-amber-600 transition-all duration-300 ${
            isActive ? 'w-8' : 'w-0 group-hover:w-8'
          }`}
        />
      </Link>
    </motion.div>
  );
};

// Enhanced Mobile Navigation Link
const MobileNavLink = ({ to, label, icon, isActive, onClick, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
    >
      <Link
        to={to}
        onClick={onClick}
        className={`flex items-center gap-4 p-4 rounded-lg transition-all group ${
          isActive 
            ? 'bg-amber-600 text-white' 
            : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
        }`}
      >
        <div className={`text-2xl font-black transition-all ${
          isActive ? 'text-white/40' : 'text-white/20 group-hover:text-amber-400'
        }`}>
          {icon}
        </div>
        <span className="flex-1 text-xl font-serif">{label}</span>
        <ChevronRight 
          size={20} 
          className={`transition-transform ${
            isActive ? 'translate-x-0' : '-translate-x-2 group-hover:translate-x-0'
          }`}
        />
      </Link>
    </motion.div>
  );
};

export default Navbar;