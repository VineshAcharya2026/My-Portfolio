
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants/data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const name = "Vinesh Acharya";
  const letters = Array.from(name);

  // Kinetic letter variants with stagger, fade-in, scale-up and hover bounce
  const letterVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.5, 
      y: 10 
    },
    animate: (i: number) => ({
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1, 0.5],
      y: [10, 0, 0, 10],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatDelay: 1,
        delay: i * 0.08, // Stagger effect
        times: [0, 0.15, 0.85, 1], // Stays fully visible and scaled for most of the duration
        ease: "easeInOut"
      }
    }),
    hover: {
      y: -12,
      scale: 1.4,
      color: "#8B5CF6",
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 10 
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-5 group"
        >
          {/* Animated 3D Person Icon Container */}
          <div className="relative">
            <motion.div 
              whileHover={{ rotateY: 180, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-16 h-16 bg-gradient-to-br from-violet-600 via-indigo-700 to-slate-900 rounded-2xl flex items-center justify-center transform rotate-6 shadow-2xl group-hover:rotate-0 transition-all duration-700 border border-white/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 text-white flex flex-col items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                 </svg>
                 <div className="h-0.5 w-4 bg-cyan-400 mt-1 rounded-full animate-pulse shadow-[0_0_10px_#22D3EE]" />
              </div>
              
              {/* Glow effects */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 rounded-2xl border border-white/10 opacity-50"></div>
            </motion.div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-cyan-400 rounded-full border-4 border-[#030712] animate-pulse"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter leading-none text-white flex items-center">
              meet the <span className="text-violet-400 ml-2">CTO</span>
            </span>
            {/* Animated Name Letters */}
            <div className="mt-1 flex cursor-default select-none h-4 items-center">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className={`text-[11px] uppercase tracking-[0.4em] font-black inline-block transition-colors duration-300 ${char === " " ? "mr-2" : "animate-text-shine"}`}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary !py-3 !px-10 !text-[10px]"
          >
            Start Build
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-7 h-6 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'w-full rotate-45 translate-y-2.5' : 'w-full'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : 'w-4/5'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'w-full -rotate-45 -translate-y-2.5' : 'w-2/3'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#030712] z-[99] lg:hidden flex flex-col justify-center items-center px-10 text-center"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-black text-white mb-10 uppercase tracking-tighter hover:text-violet-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-12 w-full max-w-xs">
              <a
                href="https://wa.me/919686796232"
                className="btn-primary w-full text-center !py-6"
              >
                WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
