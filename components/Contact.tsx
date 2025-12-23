
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const text = `Hi Vinesh! I'm ${formState.name} (${formState.email}). I'm interested in: ${formState.subject}. Message: ${formState.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919686796232?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-500 font-semibold tracking-widest uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Have a project in mind? <span className="text-slate-400">Let's discuss how we can work together</span>
            </h3>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 p-6 rounded-3xl glass border border-slate-800 hover:border-emerald-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 11.5V12a1.5 1.5 0 1 0 3 0v-.5a1.5 1.5 0 0 0-3 0z"/><path d="M12 11.5V12a1.5 1.5 0 1 1-3 0v-.5a1.5 1.5 0 0 1 3 0z"/></svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-white text-xl font-bold">+91 9686796232</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 rounded-3xl glass border border-slate-800 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white text-xl font-bold">vinesh@design4u.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 rounded-3xl glass border border-slate-800 hover:border-slate-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-slate-500/10 flex items-center justify-center text-slate-500 group-hover:bg-slate-500 group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white text-xl font-bold">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] glass border border-slate-800 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:border-emerald-500 transition-colors outline-none"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Your Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:border-emerald-500 transition-colors outline-none"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Project Inquiry"
                  className="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:border-emerald-500 transition-colors outline-none"
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:border-emerald-500 transition-colors outline-none resize-none"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 rounded-2xl bg-emerald-500 text-white font-bold text-lg hover:bg-emerald-600 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-500/20"
              >
                Send via WhatsApp
              </button>
            </form>
            
            {/* Background Blob */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full bg-emerald-500/5 opacity-50 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
