
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

// Removed manual global declaration for aistudio as it is already provided by the environment
// with the correct AIStudio type, avoiding conflicts and modifier mismatches.

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "CTO_COPILOT v4.5 Online. I am Vinesh's architectural advisor. How can I assist with your system roadmap or project audit?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Check for API key selection if using Gemini 3 or specialized models
    // to avoid "refused to connect" blocks in some environments.
    // @ts-ignore - aistudio is assumed to be available in the execution context per guidelines
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
      const p = document.createElement('p');
      p.className = 'text-red-400 mt-4 text-[11px] font-mono p-4 bg-red-500/10 rounded-lg border border-red-500/20';
      p.innerHTML = 'System Authorization Required. Please <button id="select-key-btn" class="underline font-bold">select an API key</button> to continue.';
      const terminalOutput = messagesEndRef.current?.parentElement;
      if (terminalOutput) {
        terminalOutput.appendChild(p);
        document.getElementById('select-key-btn')?.addEventListener('click', async () => {
          // @ts-ignore - aistudio is assumed to be available in the execution context
          await window.aistudio.openSelectKey();
          p.remove();
        });
      }
      return;
    }

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Re-initialize for every call to use the most up-to-date key from dialog/env
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are CTO_COPILOT, the specialized AI Technical Advisor for Vinesh Acharya. 
          Vinesh is the CTO at Design4U with 11+ years of experience in system architecture.
          Persona: Highly technical, strategic, concise, and professional. 
          Guidelines:
          - Use bullet points for technical breakdowns.
          - Focus on ROI, scalability, and technical precision.
          - Mention specific projects like NexaPay, design4u.in, or yugamcloud.com if relevant.
          - End every second message with: "For a priority technical session, reach Vinesh at +91 96867 96232."
          - If asked about contact, provide his LinkedIn or WhatsApp links.
          - Ensure all links are formatted correctly.`
        }
      });

      const assistantText = response.text || "Protocol Timeout. Communication link unstable. Please retry or contact Vinesh directly via the WhatsApp bridge.";
      setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);
    } catch (error: any) {
      console.error("AI Assistant Error:", error);
      if (error?.message?.includes("Requested entity was not found")) {
         setMessages(prev => [...prev, { role: 'assistant', text: "SYSTEM_REBOOT_REQUIRED: API Key invalid or expired. Please re-authorize via the command console." }]);
         // @ts-ignore - aistudio is assumed to be available in the execution context
         await window.aistudio.openSelectKey();
      } else {
         setMessages(prev => [...prev, { role: 'assistant', text: "KERNEL_ERROR: API Connection Interrupted. Secure fallback: Contact Vinesh via the bottom-right WhatsApp node." }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="mb-8 w-[320px] sm:w-[400px] md:w-[480px] h-[550px] sm:h-[600px] rounded-[2rem] glass border border-white/10 flex flex-col overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
          >
            {/* Schematic Header */}
            <div className="p-6 sm:p-8 bg-white/5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-4 sm:space-x-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-black text-[10px] sm:text-xs tracking-widest">CTO_COPILOT v4.5</h4>
                  <p className="text-cyan-400 text-[8px] uppercase font-black tracking-[0.4em]">Secure Auth Terminal</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Terminal Messages */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 sm:space-y-8 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] p-4 sm:p-6 rounded-[1.2rem] sm:rounded-[1.5rem] text-[12px] sm:text-[13px] font-medium leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-violet-600 text-white rounded-tr-none shadow-lg' 
                      : 'bg-white/5 text-slate-300 border border-white/5 rounded-tl-none font-mono'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-[1.5rem] rounded-tl-none border border-white/5 flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                    <span className="text-[11px] font-mono text-slate-500">Processing Request...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Command Input */}
            <div className="p-6 sm:p-8 bg-black/40 border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Execute query..."
                  className="w-full bg-[#02040a] border border-white/10 rounded-xl px-5 sm:px-6 py-4 sm:py-5 pr-14 sm:pr-16 text-[12px] sm:text-[13px] text-white focus:border-violet-600 outline-none transition-all placeholder:text-slate-800 font-mono"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleSend()}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-violet-600 flex items-center justify-center text-white hover:bg-violet-500 disabled:opacity-50 transition-colors shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#02040a] border border-violet-500/50 flex items-center justify-center text-violet-400 shadow-[0_0_60px_rgba(139,92,246,0.3)] transition-all ${isOpen ? 'rotate-90' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
      </motion.button>
    </div>
  );
};

export default GeminiAssistant;
