
import React from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    id: '01',
    title: 'Cloud Architecture',
    description: 'High-availability systems built for global scale. We architect for failure to ensure success.',
    tags: ['AWS', 'Kubernetes', 'Serverless'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1.5a7 7 0 1 0-11.91 4.91"/><polyline points="9 19 12 22 15 19"/><path d="M12 13V22"/></svg>,
    color: 'text-violet-500'
  },
  {
    id: '02',
    title: 'Fiscal Tech Strategy',
    description: 'Bridging technical debt and ROI. Every line of code is an investment in your balance sheet.',
    tags: ['ROI', 'Scalability', 'FinOps'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    color: 'text-cyan-400'
  },
  {
    id: '03',
    title: 'Product Engineering',
    description: 'Rapid MVP delivery with enterprise durability. We build digital assets that dominate.',
    tags: ['React', 'Next.js', 'Python'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    color: 'text-indigo-400'
  },
  {
    id: '04',
    title: 'Fractional Leadership',
    description: 'C-suite technical advisory for high-growth firms. Scaling your team and your culture.',
    tags: ['Leadership', 'Agile', 'Scale'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    color: 'text-emerald-400'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#030712]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center space-x-4">
              <span className="w-16 h-[2px] bg-violet-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-violet-500">Capabilities</span>
            </div>
            <h2 className="section-title text-white">
              CORE <br />
              <span className="text-cyan-400">DISCIPLINES.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-md lg:mb-2">
            Leveraging a decade of technical leadership to architect systems that are both fiscally responsible and technically superior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group card-reveal p-12 flex flex-col lg:flex-row gap-10 hover:bg-white/[0.02]"
            >
              <div className={`w-20 h-20 rounded-[2rem] glass flex items-center justify-center ${service.color} group-hover:bg-violet-600 group-hover:text-white transition-all duration-700 shrink-0`}>
                {service.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                   <h4 className="text-3xl font-black text-white uppercase tracking-tighter">{service.title}</h4>
                   <span className="text-slate-800 font-black text-4xl group-hover:text-violet-500/10 transition-colors">{service.id}</span>
                </div>
                <p className="text-slate-400 text-lg mb-8 font-medium leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-full border border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-400/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
