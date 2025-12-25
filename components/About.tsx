
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-[#030712] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="mb-10 flex items-center space-x-4">
              <span className="w-16 h-[2px] bg-violet-600"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-violet-500">Leadership Strategy</span>
            </div>
            
            <h2 className="section-title text-white mb-16">
              ARCHITECTURE IS <span className="text-cyan-400">AUTHORITY.</span> <br />
              <span className="text-violet-500">PRECISION</span> IS PROFIT.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Vinesh Acharya operates at the bleeding edge of technological mastery. As CTO, his focus remains on building assets that don't just function, but define markets through superior architecture.
              </p>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Every line of code is weighted against long-term operational performance. We prioritize clean, modular systems because they are the most sustainable path to growth. Speed is our byproduct, quality is our mandate.
              </p>
            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: 'Firm Tenure', val: '11 Years' },
                { label: 'Global Launches', val: '500+' },
                { label: 'Team Experts', val: '15+' },
                { label: 'Uptime Avg', val: '99.9%' }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-slate-800/50 pl-8 py-3 group hover:border-violet-500 transition-all duration-500">
                  <p className="text-4xl font-black text-white mb-2 group-hover:text-violet-400 transition-colors">{item.val}</p>
                  <p className="text-[10px] uppercase font-black tracking-[0.3em] text-cyan-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="card-reveal overflow-hidden h-[650px] w-full border border-violet-500/10">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Cyber Infrastructure" 
                className="w-full h-full object-cover parallax-img grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/10 to-transparent flex items-end p-10 md:p-14">
                <div className="glass p-10 rounded-[3rem] border border-white/5 w-full shadow-3xl">
                   <h4 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter">System Architect</h4>
                   <p className="text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Engineering Unit</p>
                </div>
              </div>
            </div>
            {/* Background floating decor */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600/10 blur-[80px] rounded-full -z-10 animate-pulse"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
