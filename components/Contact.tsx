
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Technical brief formatting for WhatsApp
    setTimeout(() => {
      const technicalBrief = `[SYSTEM_INQUIRY]
Operator: ${formState.name}
Reference: ${formState.email}
Scope: ${formState.subject}
Content: ${formState.message}
---
Bridge initiated via meet-the-CTO.`;
      const encoded = encodeURIComponent(technicalBrief);
      window.open(`https://wa.me/919686796232?text=${encoded}`, '_blank');
    }, 2000);
  };

  const InputField = ({ label, id, type = "text", value, onChange, textarea = false }: any) => (
    <div className="relative group">
      <label className={`absolute left-6 transition-all duration-300 pointer-events-none ${value ? '-top-3 text-[10px] text-violet-500 bg-[#02040a] px-2' : 'top-5 text-slate-500 text-xs font-bold uppercase tracking-widest'}`}>
        {label}
      </label>
      {textarea ? (
        <textarea
          required
          rows={5}
          className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-violet-500 outline-none transition-all resize-none font-medium text-sm"
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          required
          className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-violet-500 outline-none transition-all font-medium text-sm"
          value={value}
          onChange={onChange}
        />
      )}
      <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-violet-500/0 to-transparent group-focus-within:via-violet-500/50 transition-all duration-500" />
    </div>
  );

  return (
    <section id="contact" className="py-48 bg-[#02040a] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 flex items-center space-x-6">
              <span className="w-16 h-[1px] bg-cyan-400"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-cyan-400">Secure Protocol</span>
            </div>
            <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-16 leading-none">
              INITIATE <br />
              <span className="text-violet-500">LINK.</span>
            </h3>

            <div className="space-y-6">
              {[
                { label: 'Priority WhatsApp', val: '+91 9686796232', color: 'bg-emerald-500/10 text-emerald-500', href: 'https://wa.me/919686796232' },
                { label: 'Architect Mail', val: 'vinesh@design4u.in', color: 'bg-blue-500/10 text-blue-500', href: 'mailto:vinesh@design4u.in' },
                { label: 'Global HQ', val: 'Bengaluru, India', color: 'bg-slate-500/10 text-slate-500' }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.href}
                  target={item.href ? "_blank" : undefined}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-8 p-8 rounded-[2.5rem] glass border border-white/5 hover:border-violet-500/20 transition-all group"
                >
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 11.5V12a1.5 1.5 0 1 0 3 0v-.5a1.5 1.5 0 0 0-3 0z"/><path d="M12 11.5V12a1.5 1.5 0 1 1-3 0v-.5a1.5 1.5 0 0 1 3 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.4em] mb-1">{item.label}</p>
                    <p className="text-white text-2xl font-black tracking-tight">{item.val}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-[3rem] sm:rounded-[4rem] glass border border-white/5 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  exit={{ opacity: 0, scale: 0.9 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField 
                      label="Operator Name" 
                      value={formState.name} 
                      onChange={(e: any) => setFormState({...formState, name: e.target.value})} 
                    />
                    <InputField 
                      label="Contact Email" 
                      type="email" 
                      value={formState.email} 
                      onChange={(e: any) => setFormState({...formState, email: e.target.value})} 
                    />
                  </div>
                  <InputField 
                    label="Project Scope" 
                    value={formState.subject} 
                    onChange={(e: any) => setFormState({...formState, subject: e.target.value})} 
                  />
                  <InputField 
                    label="Transmission Details" 
                    textarea 
                    value={formState.message} 
                    onChange={(e: any) => setFormState({...formState, message: e.target.value})} 
                  />
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black text-[10px] uppercase tracking-[0.5em] shadow-2xl hover:brightness-110 transition-all flex items-center justify-center space-x-4 group"
                  >
                    <span>Send Protocol</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 sm:py-24 text-center"
                >
                   <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-8 sm:mb-10 shadow-lg">
                      <motion.svg 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8 }}
                        xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"/>
                      </motion.svg>
                   </div>
                   <h4 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-4">Link Established</h4>
                   <p className="text-slate-500 font-medium uppercase tracking-widest text-[10px]">Bridging to WhatsApp Secure Channel...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
