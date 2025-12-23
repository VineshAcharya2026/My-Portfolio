
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants/data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-500 font-semibold tracking-widest uppercase mb-4">Skills & Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Technologies and tools I use to bring ideas to life</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass border border-slate-800 hover:border-emerald-500/30 transition-all group"
            >
              <h4 className="text-xl font-bold mb-6 flex items-center group-hover:text-emerald-400 transition-colors">
                <span className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </span>
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-700 transition-all cursor-default"
                  >
                    {skill}
                  </span>
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
