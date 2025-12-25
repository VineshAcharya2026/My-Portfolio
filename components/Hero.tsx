
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES_WORDS = ["FRONTEND", "BACKEND", "DATABASE", "CLOUD", "SCALABILITY"];

const WordScroller: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SERVICES_WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[1.1em] overflow-hidden inline-flex">
      <AnimatePresence mode="wait">
        <motion.span
          key={SERVICES_WORDS[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-violet-500"
        >
          {SERVICES_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const NeuralVisual: React.FC = () => {
  const [load, setLoad] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(Math.floor(Math.random() * (98 - 85 + 1) + 85));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square flex items-center justify-center perspective-2000">
      {/* Background Cinematic Glows */}
      <div className="absolute inset-0 bg-violet-600/10 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute inset-20 bg-cyan-400/5 blur-[120px] rounded-full" />
      
      {/* Main Command Core */}
      <motion.div
        animate={{ 
          rotateX: [15, 25, 15],
          rotateY: [-20, -10, -20],
          y: [-15, 15, -15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[85%] h-[85%] glass rounded-[3rem] border border-white/10 flex flex-col p-10 overflow-hidden shadow-2xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Core Status Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/10" />
            ))}
          </div>
          <div className="flex items-center space-x-3">
             <span className="text-[10px] font-mono text-cyan-400 animate-pulse">● DEV_ACTIVE</span>
             <span className="text-[10px] font-mono text-slate-500">stack.v2.5</span>
          </div>
        </div>

        {/* Neural Map Simulated Visual */}
        <div className="flex-1 relative flex items-center justify-center">
           <svg className="absolute w-full h-full opacity-20" viewBox="0 0 400 400">
              <motion.circle 
                cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" 
                animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="text-slate-500"
              />
              <motion.circle 
                cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5"
                animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="text-violet-500"
              />
           </svg>

           {/* Central Logic Core */}
           <div className="z-20 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-violet-600 to-indigo-900 flex items-center justify-center mb-6 mx-auto shadow-[0_0_80px_rgba(139,92,246,0.5)] border border-white/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </motion.div>
              <h4 className="text-3xl font-black text-white tracking-widest uppercase mb-1">DEVELOPMENT</h4>
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase">Fullstack Logic</p>
           </div>
        </div>

        {/* Real-time Metrics Bottom */}
        <div className="mt-auto grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
           <div className="space-y-2">
              <p className="text-[8px] font-mono text-slate-500 uppercase">Latency</p>
              <p className="text-lg font-black text-white">24ms</p>
           </div>
           <div className="space-y-2">
              <p className="text-[8px] font-mono text-slate-500 uppercase">Requests/s</p>
              <p className="text-lg font-black text-white">4.2k</p>
           </div>
           <div className="space-y-2 text-right">
              <p className="text-[8px] font-mono text-slate-500 uppercase">Runtime</p>
              <p className="text-lg font-black text-cyan-400">NODE_22</p>
           </div>
        </div>
      </motion.div>

      {/* Floating Dynamic Panels */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -top-10 right-0 glass p-6 rounded-3xl border border-cyan-400/20 z-20 shadow-2xl hidden md:block"
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-black text-white uppercase tracking-widest">Build Status</span>
        </div>
        <div className="flex space-x-1">
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i} 
              animate={{ height: [2, 12, 2] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
              className="w-1 bg-cyan-400/50" 
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
  const nameLetters = "Vinesh Acharya".split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12 flex items-center space-x-6">
              <span className="w-12 h-[1px] bg-violet-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-violet-500">Fullstack Engineer v2.5</span>
            </div>

            <h1 className="section-title text-white mb-12">
              ENGINEER <br />
              THE <WordScroller />.
            </h1>

            <div className="mb-16">
              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-xl mb-8">
                Building scalable, high-performance web applications from <span className="text-white font-black">concept to deployment</span>. 
              </p>
              <div className="flex flex-wrap">
                {nameLetters.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + (i * 0.05) }}
                    className={`text-4xl md:text-5xl font-black uppercase tracking-widest animate-text-shine ${char === " " ? "mr-6" : ""}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn-primary w-full sm:w-auto"
              >
                View Stack
              </motion.a>
              <motion.a
                whileHover={{ x: 10 }}
                href="#skills"
                className="flex items-center space-x-5 font-black uppercase tracking-[0.3em] text-white group"
              >
                <span className="text-[10px]">The Tech Stack</span>
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-500/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <NeuralVisual />

        </div>
      </div>
    </section>
  );
};

export default Hero;
