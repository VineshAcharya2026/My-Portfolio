
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants/data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-500 font-semibold tracking-widest uppercase mb-4">Work Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold">My professional journey and key achievements</h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2 hidden md:block"></div>
              
              <div className={`md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900 md:-translate-x-1/2 z-10"></div>

                <div className={`md:w-[45%] ${idx % 2 === 0 ? 'text-left' : 'md:text-right'} mb-8 md:mb-0`}>
                  <span className="text-emerald-500 font-bold mb-2 block">{item.period}</span>
                  <h4 className="text-2xl font-bold text-white mb-1">{item.role}</h4>
                  <p className="text-lg text-slate-400 font-medium mb-4">{item.company}</p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest mb-6">{item.location}</p>
                </div>

                <div className="md:w-[45%] p-6 rounded-3xl glass border border-slate-800 hover:border-emerald-500/20 transition-all">
                  <h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Key Achievements:</h5>
                  <ul className="space-y-3">
                    {item.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="flex items-start text-slate-400 text-sm">
                        <span className="text-emerald-500 mr-2 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
