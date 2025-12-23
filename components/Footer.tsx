
import React from 'react';
import { NAV_LINKS } from '../constants/data';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-slate-900 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-bold tracking-tighter mb-6 block">
              <span className="text-emerald-500">Design</span>
              <span className="text-white">4U</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Vinesh Acharya - Founder & CEO at Design4U. Building exceptional digital experiences with passion and precision. Based in Bengaluru, serving clients globally.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              {['twitter', 'linkedin', 'github', 'instagram'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 rounded-xl glass border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5 bg-current opacity-70"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h5>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Connect</h5>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <div className="text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 11.5V12a1.5 1.5 0 1 0 3 0v-.5a1.5 1.5 0 0 0-3 0z"/><path d="M12 11.5V12a1.5 1.5 0 1 1-3 0v-.5a1.5 1.5 0 0 1 3 0z"/></svg>
                </div>
                <span className="text-slate-400">+91 9686796232</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span className="text-slate-400">vinesh@design4u.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-slate-500 text-sm">
          <p>© 2025 Vinesh Acharya. All rights reserved.</p>
          <p>Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
