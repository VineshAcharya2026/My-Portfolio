
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass border-2 border-slate-800 shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/vinesh/800/800" 
                alt="Vinesh Acharya" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-2xl font-bold">Vinesh Acharya</p>
                <p className="text-emerald-400 font-medium">Founder & CEO</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-500 font-semibold tracking-widest uppercase mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Transforming ideas into <span className="text-slate-400">exceptional digital experiences</span>
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Passionate tech entrepreneur with over a decade of experience in delivering high-end web and mobile solutions. 
              Founded Design4U in 2014 with a vision to bridge the gap between complex business challenges and elegant software solutions. 
              Leading a team of expert developers specialized in React, Flutter, Python, and modern tech stacks.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-4 rounded-2xl glass border border-slate-800">
                <p className="text-slate-500 text-sm mb-1 uppercase tracking-wider">Location</p>
                <p className="text-white font-medium">Bengaluru, India</p>
              </div>
              <div className="p-4 rounded-2xl glass border border-slate-800">
                <p className="text-slate-500 text-sm mb-1 uppercase tracking-wider">Email</p>
                <p className="text-white font-medium">vinesh@design4u.in</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Years Exp', value: '10+' },
                { label: 'Projects', value: '500+' },
                { label: 'Team size', value: '15+' },
                { label: 'Satisfaction', value: '98%' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4">
                  <p className="text-3xl font-bold text-emerald-500 mb-1">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-tighter text-slate-500 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
