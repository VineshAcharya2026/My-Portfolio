
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants/data';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-500 font-semibold tracking-widest uppercase mb-4">Client Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold">What clients say about working with me</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass border border-slate-800 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 text-emerald-500/20">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V15C21.017 17.7614 18.7784 20 16.017 20H14.017V21ZM5.01697 21L5.01697 18C5.01697 16.8954 5.91241 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.01697C5.91241 8 5.01697 7.10457 5.01697 6V3H12.017V15C12.017 17.7614 9.77839 20 7.01697 20H5.01697V21Z"/></svg>
              </div>

              <p className="text-slate-300 text-lg italic leading-relaxed mb-10 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-800 mr-4">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-white font-bold">{t.author}</h5>
                  <p className="text-emerald-500 text-xs font-medium uppercase tracking-wider">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
