
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-emerald-500/20 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-emerald-400 uppercase tracking-widest">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Hi, I'm <span className="gradient-text">Vinesh Acharya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
          >
            Founder & CEO at <span className="text-white font-semibold">Design4U</span>. 
            Building Premium Digital Solutions with 10+ Years of Tech Excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="https://wa.me/919686796232"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 text-white font-bold text-lg hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-bold text-lg border border-slate-700 hover:border-emerald-500/50 transition-all"
            >
              View Projects
            </a>
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex items-center space-x-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
          >
            <div className="text-left">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500">Years Experience</p>
            </div>
            <div className="h-10 w-[1px] bg-slate-800"></div>
            <div className="text-left">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500">Projects Done</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
