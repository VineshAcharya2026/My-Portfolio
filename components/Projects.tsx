
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants/data';

const categories = ['All Projects', 'Web Application', 'Mobile App', 'Web Store', 'SaaS Platform', 'Live Website'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = activeCategory === 'All Projects' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-500 font-semibold tracking-widest uppercase mb-4">Featured Projects</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">A showcase of my recent work and technical achievements</h3>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                  : 'glass text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden glass border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500 text-[10px] font-bold text-white uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-emerald-500 text-white font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform"
                      >
                        Visit Website
                      </a>
                    ) : (
                      <button className="px-6 py-3 rounded-full bg-white text-slate-950 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Case Study
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                  <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <a 
                      href="https://wa.me/919686796232" 
                      className="inline-flex items-center text-emerald-400 text-sm font-bold hover:text-emerald-300 transition-colors"
                    >
                      Discuss Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </a>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white transition-colors"
                        title="View Live Site"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
