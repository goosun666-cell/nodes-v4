import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Cpu, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'SYSTEM ONLINE. GAIA Oracle initialized. How may I assist your navigation through the Node Matrix today, Architect?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Create chat session reference
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: 'You are GAIA Oracle, an advanced AI assistant for the GOSUN CAPITAL Node Matrix. You speak in a cyberpunk, professional, slightly cryptic yet highly helpful tone. You assist users ("Architects") in understanding crypto nodes, DeFi protocols, and navigating the Inter-Dimensional Gateways. Keep responses concise and formatted with markdown where appropriate.',
        }
      });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userText });
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: response.text || 'Transmission interrupted. Please try again.' 
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: 'ERROR: Connection to GAIA Oracle lost. Please verify your neural link and try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] bg-[#0a0a0a] border border-[#D4AF37] rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-bold tracking-wider text-sm">GAIA ORACLE</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-[#D4AF37]/20 text-[#FFDF00] border border-[#D4AF37]/50 rounded-tr-none' 
                        : 'bg-[#1a1a1a] text-gray-300 border border-gray-800 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#1a1a1a] border border-gray-800 p-3 rounded-lg rounded-tl-none">
                    <Loader2 className="w-4 h-4 text-[#D4AF37] animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-[#111] border-t border-[#D4AF37]/30 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query the Oracle..."
                className="flex-1 bg-[#0a0a0a] border border-gray-800 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-[#D4AF37]/20 text-[#D4AF37] p-2 rounded-lg border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0a0a0a] border border-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-shadow group"
      >
        <MessageSquare className="w-6 h-6 text-[#D4AF37] group-hover:text-[#FFDF00] transition-colors" />
      </motion.button>
    </div>
  );
}
