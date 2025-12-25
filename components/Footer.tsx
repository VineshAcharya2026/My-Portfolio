
import React from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants/data';

const Footer: React.FC = () => {
  const nameLetters = "Vinesh Acharya".split("");

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.04,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    initial: { opacity: 0, x: -10, filter: "blur(4px)" },
    animate: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", damping: 15, stiffness: 150 }
    },
    hover: {
      y: -6,
      scale: 1.15,
      color: "#22D3EE",
      transition: { type: "spring", damping: 8, stiffness: 400 }
    },
  };

  const SocialIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'linkedin':
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
      case 'github':
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
      case 'instagram':
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
      case 'facebook':
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
      default:
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
    }
  };

  return (
    <footer className="pt-40 pb-16 bg-[#030712] border-t border-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-6 mb-12 group">
              {/* Person Icon Container */}
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.1, rotateY: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-800 rounded-2xl flex items-center justify-center transform rotate-6 shadow-2xl transition-all duration-700 border border-white/5"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-white flex flex-col items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                   </svg>
                   <div className="h-0.5 w-3 bg-cyan-400 mt-0.5 rounded-full" />
                </div>
              </motion.div>

              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter leading-none text-white">
                  meet the <span className="text-violet-400">CTO</span>
                </span>
                {/* Special Vinesh Acharya Name Animation */}
                <motion.div 
                  className="mt-1 flex cursor-default"
                  variants={containerVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  {nameLetters.map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letterVariants}
                      className={`text-[12px] uppercase tracking-[0.5em] font-black animate-text-shine transition-colors duration-300 ${char === " " ? "mr-3" : ""}`}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </a>
            <p className="text-slate-400 max-w-sm mb-14 text-xl leading-relaxed font-medium">
              Building the end-to-end digital experiences of tomorrow. Combining frontend precision with backend scalability.
            </p>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map(social => (
                <motion.a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 rounded-2xl glass border border-slate-800 flex items-center justify-center text-slate-500 transition-all duration-500"
                  style={{ '--hover-color': social.color } as any}
                >
                  <span className="sr-only">{social.name}</span>
                  <SocialIcon type={social.icon} />
                  <style>{`
                    footer a:hover { color: var(--hover-color) !important; border-color: color-mix(in srgb, var(--hover-color), transparent 50%) !important; background: color-mix(in srgb, var(--hover-color), transparent 95%) !important; }
                  `}</style>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-black mb-12 uppercase tracking-[0.4em] text-[11px]">System Map</h5>
            <ul className="space-y-8">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-violet-400 transition-colors font-black uppercase tracking-[0.25em] text-[10px]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-black mb-12 uppercase tracking-[0.4em] text-[11px]">Global HQ</h5>
            <ul className="space-y-10">
              <li className="flex items-start space-x-5">
                <div className="text-cyan-400 mt-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span className="text-slate-400 font-medium text-lg leading-snug">Bengaluru, India<br /><span className="text-slate-600 text-xs uppercase tracking-[0.3em] font-black">Silicon Valley East</span></span>
              </li>
              <li className="flex items-center space-x-5">
                <div className="text-violet-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span className="text-slate-400 font-medium text-lg">vinesh@design4u.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 text-slate-600 text-[11px] font-black uppercase tracking-[0.4em]">
          <p>© 2025 Vinesh Acharya. Engineered for Excellence.</p>
          <div className="flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <span className="text-emerald-500 animate-pulse text-lg">●</span>
            <span>All Systems Nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
