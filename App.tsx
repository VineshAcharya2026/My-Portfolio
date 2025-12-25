
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SocialHub from './components/SocialHub';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Artificial delay for high-fidelity boot feel
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-violet-500/30">
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#02040a]"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-12">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t-2 border-r-2 border-violet-500 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-b-2 border-l-2 border-cyan-400 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"
                  />
                </div>
              </div>
              <div className="overflow-hidden h-6">
                <motion.p 
                  initial={{ y: 24 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-white font-black tracking-[0.8em] uppercase text-[10px]"
                >
                  System Initializing
                </motion.p>
              </div>
              <div className="w-48 h-[1px] bg-white/5 mt-4 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <Services />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <SocialHub />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
            <GeminiAssistant />

            {/* Magnetic WhatsApp Button */}
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/919686796232"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 transition-all border border-white/20 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 11.5V12a1.5 1.5 0 1 0 3 0v-.5a1.5 1.5 0 0 0-3 0z"/><path d="M12 11.5V12a1.5 1.5 0 1 1-3 0v-.5a1.5 1.5 0 0 1 3 0z"/></svg>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
