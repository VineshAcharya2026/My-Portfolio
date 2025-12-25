
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants/data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-48 bg-[#02040a] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center space-x-4"
            >
              <span className="w-16 h-[1px] bg-emerald-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500">Stack Architecture</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-10">
              THE <span className="animate-text-shine">ARSENAL.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg">
              Quantifiable expertise across the full architectural spectrum. We build for performance, security, and exponential ROI.
            </p>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <div className="glass p-10 rounded-[3rem] border border-white/5 max-w-sm">
               <div className="flex items-center space-x-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white">System Status: Optimal</span>
               </div>
               <p className="text-slate-500 text-sm leading-relaxed mb-8">
                 Current infrastructure utilization at <span className="text-white">94.2%</span>. All technical layers synchronized for peak efficiency.
               </p>
               <div className="space-y-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${80 + (i * 5)}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-violet-600 to-cyan-400"
                      />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-12 rounded-[3rem] glass border border-white/5 hover:border-violet-500/30 transition-all duration-700 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/0 group-hover:bg-violet-600/5 blur-3xl rounded-full transition-all duration-700" />
              
              <div className="flex items-center justify-between mb-12 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-violet-600 transition-all duration-500 group-hover:rotate-12">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.4em] block mb-1">Layer {idx + 1}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-3 h-1 rounded-full ${i < 4 ? 'bg-cyan-400' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
              </div>
              
              <h4 className="text-3xl font-black text-white uppercase tracking-widest mb-10 relative z-10 group-hover:text-violet-400 transition-colors">
                {category.title}
              </h4>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-6 py-3 rounded-xl bg-[#02040a] border border-white/5 text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] group-hover:border-cyan-400/20 group-hover:text-cyan-400 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
