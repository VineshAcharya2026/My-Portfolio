
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants/data';

const categories = ['All Solutions', 'Web Application', 'Mobile App', 'Live Website', 'SaaS Platform'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Solutions');

  const filteredProjects = activeCategory === 'All Solutions' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-48 relative overflow-hidden bg-[#02040a]">
      {/* Background Ambient Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center space-x-6"
            >
              <span className="w-16 h-[1px] bg-cyan-400"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-cyan-400">Engineering Showcase</span>
            </motion.div>
            <h2 className="section-title text-white tracking-tighter">
              STRATEGIC <br />
              <span className="text-violet-500">BUILDS.</span>
            </h2>
          </div>
          
          {/* Refined Filter System */}
          <div className="flex flex-wrap gap-3 p-2 glass rounded-2xl border-white/5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-violet-600 text-white shadow-[0_10px_30px_-5px_rgba(139,92,246,0.6)]' 
                    : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px] md:auto-rows-[420px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Create dynamic layout based on order
              const isLarge = idx === 0 || idx === 3 || idx === 7 || idx === 11;
              const colSpan = isLarge ? 'md:col-span-7' : 'md:col-span-5';
              const rowSpan = isLarge ? 'md:row-span-1' : 'md:row-span-1';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative group ${colSpan} ${rowSpan} overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900/20 perspective-2000`}
                >
                  {/* Image Layer */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-[0.6] group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient Depth Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/20 to-transparent z-10"></div>

                  {/* Content Reveal */}
                  <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end z-20">
                    <div className="flex justify-between items-start mb-auto">
                       <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[7px] font-black uppercase tracking-widest text-slate-300">
                          {project.tags[0]}
                       </span>
                       {project.link ? (
                         <a 
                           href={project.link} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/20 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all duration-500"
                         >
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                         </a>
                       ) : (
                         <div className="w-10 h-10 rounded-full glass border border-white/5 flex items-center justify-center text-slate-700 cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                         </div>
                       )}
                    </div>

                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-2 block">
                        {project.category}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-violet-400 transition-colors leading-none">
                        {project.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                        {project.description}
                      </p>
                      {project.link ? (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-3 text-[9px] font-black uppercase tracking-[0.5em] text-white hover:text-cyan-400 transition-colors"
                        >
                          <span>Analyze Build</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </a>
                      ) : (
                        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">Documentation Pending</span>
                      )}
                    </div>
                  </div>

                  {/* Scan Animation */}
                  <div className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/30 blur-[1px] animate-[scan_4s_linear_infinite]"></div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More/CTA */}
        <div className="mt-24 flex flex-col items-center">
           <motion.a 
             href="#contact"
             whileHover={{ scale: 1.02 }}
             className="glass px-10 py-5 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all flex items-center space-x-4 group"
           >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Initiate Full System Audit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
           </motion.a>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
