
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants/data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-48 bg-[#030712] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center space-x-4"
          >
            <span className="w-8 h-[1px] bg-violet-600"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-violet-500">Professional Lifecycle</span>
            <span className="w-8 h-[1px] bg-violet-600"></span>
          </motion.div>
          <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
            SYSTEM <span className="text-slate-800">HISTORY.</span>
          </h3>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Visual Header */}
                <div className={`lg:w-1/3 ${idx % 2 === 0 ? 'text-left' : 'lg:text-right'}`}>
                   <div className="mb-4">
                      <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.4em] block mb-2">{item.period}</span>
                      <h4 className="text-4xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-violet-500 transition-colors">{item.role}</h4>
                   </div>
                   <p className="text-xl text-slate-500 font-bold uppercase tracking-widest">{item.company}</p>
                   <p className="text-[10px] text-slate-700 uppercase tracking-[0.5em] mt-4 font-black">{item.location}</p>
                </div>

                {/* Achievements Card */}
                <div className="lg:w-2/3 w-full p-12 rounded-[3rem] glass border border-white/5 group-hover:border-cyan-400/20 transition-all duration-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {item.achievements.map((achievement, aIdx) => (
                      <motion.div 
                        key={aIdx} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (aIdx * 0.1) }}
                        className="flex items-start space-x-5"
                      >
                        <div className="w-6 h-6 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed font-medium">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Connector line for desktop */}
              {idx < EXPERIENCE.length - 1 && (
                <div className="hidden lg:flex justify-center py-10">
                  <div className="w-[1px] h-20 bg-gradient-to-b from-white/5 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
