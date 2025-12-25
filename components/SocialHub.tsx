
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants/data';

const SocialIcon = ({ type, color }: { type: string, color: string }) => {
  switch (type) {
    case 'linkedin':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
    case 'github':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
    case 'instagram':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
    case 'facebook':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
    default:
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
  }
};

const SocialHub: React.FC = () => {
  return (
    <section id="social-hub" className="py-48 bg-[#02040a] relative overflow-hidden">
      {/* Background Neural Network Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center space-x-6"
          >
            <span className="w-16 h-[1px] bg-cyan-400"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-cyan-400">Digital Footprint</span>
            <span className="w-16 h-[1px] bg-cyan-400"></span>
          </motion.div>
          <h2 className="section-title text-white tracking-tighter leading-none mb-10">
            CONNECT THE <br />
            <span className="text-violet-500">NODES.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Architecting connections across the global digital landscape. Follow the transmission for technical updates and strategic insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOCIAL_LINKS.map((social, idx) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[3rem] glass p-10 border border-white/5 overflow-hidden flex flex-col items-center text-center"
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle at center, ${social.color}, transparent)` }}
              />

              <div 
                className="w-24 h-24 rounded-3xl mb-10 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110 shadow-2xl"
                style={{ backgroundColor: `${social.color}20`, border: `1px solid ${social.color}40` }}
              >
                <SocialIcon type={social.icon} color={social.color} />
                {/* Visual pulse */}
                <div 
                  className="absolute inset-0 rounded-3xl animate-ping opacity-20 pointer-events-none" 
                  style={{ backgroundColor: social.color }}
                />
              </div>

              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 z-10">
                {social.name}
              </h3>
              
              <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mb-6 z-10">
                {social.username}
              </p>

              <p className="text-slate-400 text-sm font-medium mb-12 max-w-[200px] z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                {social.description}
              </p>

              {/* Protocol Button (Catchy button) */}
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-auto w-full py-5 rounded-2xl flex items-center justify-center space-x-4 overflow-hidden group/btn z-10"
                style={{ backgroundColor: `${social.color}15`, border: `1px solid ${social.color}30` }}
              >
                <span 
                  className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" 
                  style={{ backgroundColor: social.color }}
                />
                <span className="relative z-20 text-[10px] font-black uppercase tracking-[0.6em] text-white group-hover/btn:scale-110 transition-transform">
                  Access Node
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="relative z-20 text-white group-hover/btn:translate-x-1.5 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </motion.a>
            </motion.div>
          ))}
          
          {/* WhatsApp Card as a Special Large Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="md:col-span-2 lg:col-span-3 mt-12 group relative rounded-[4rem] glass p-16 border border-emerald-500/10 overflow-hidden flex flex-col md:flex-row items-center justify-between"
          >
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="flex flex-col text-center md:text-left relative z-10 mb-10 md:mb-0">
               <div className="flex items-center space-x-5 mb-8 justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 border border-emerald-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 11.5V12a1.5 1.5 0 1 0 3 0v-.5a1.5 1.5 0 0 0-3 0z"/><path d="M12 11.5V12a1.5 1.5 0 1 1-3 0v-.5a1.5 1.5 0 0 1 3 0z"/></svg>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500">Live Secure Connection</span>
               </div>
               <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                 WHATSAPP <span className="text-emerald-500">DIRECT.</span>
               </h3>
               <p className="text-xl text-slate-400 font-medium max-w-xl">
                 Initialize a priority encrypted connection for rapid architectural consulting or strategic collaboration.
               </p>
            </div>

            <motion.a
              href="https://wa.me/919686796232"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary !bg-emerald-600 !shadow-emerald-500/20 !px-16 !py-8 relative z-10 group/btn"
            >
              Start Priority Chat
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialHub;
