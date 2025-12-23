
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-emerald-500/30">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
          >
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
              <p className="mt-4 text-emerald-500 font-medium tracking-widest uppercase">Design4U</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <GeminiAssistant />

      {/* Persistent WhatsApp Button */}
      <a
        href="https://wa.me/919686796232"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 11.5V12a1.5 1.5 0 1 0 3 0v-.5a1.5 1.5 0 0 0-3 0z"/><path d="M12 11.5V12a1.5 1.5 0 1 1-3 0v-.5a1.5 1.5 0 0 1 3 0z"/></svg>
      </a>
    </div>
  );
};

export default App;
