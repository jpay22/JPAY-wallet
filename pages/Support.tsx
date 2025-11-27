import React, { useState, useEffect, useRef } from 'react';
import { initializeChat, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface SupportProps {
  lang: Language;
}

export const Support: React.FC<SupportProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial greeting
    setMessages([
      {
        id: 'init',
        role: 'model',
        text: t.aiWelcome,
        timestamp: Date.now()
      }
    ]);
    
    // Initialize Gemini Chat session
    initializeChat(lang);
  }, [lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[calc(100vh-100px)]">
      <div className="mb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Bot className="text-jpay-yellow" /> {t.aiAssistant}
        </h1>
        <p className="text-sm text-gray-400">Powered by Gemini 2.5 Flash</p>
      </div>

      <div className="flex-1 overflow-y-auto bg-jpay-dark rounded-2xl p-4 space-y-4 border border-jpay-gray custom-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-jpay-yellow text-black' : 'bg-jpay-blue text-white'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-jpay-yellow text-jpay-black rounded-tr-none' 
                  : 'bg-gray-800 text-white rounded-tl-none border border-gray-700'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-jpay-blue text-white flex items-center justify-center flex-shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none border border-gray-700 flex items-center">
                  <Loader2 className="animate-spin w-4 h-4 text-gray-400" />
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={t.typeMessage}
          className="flex-1 bg-jpay-dark border border-jpay-gray text-white rounded-xl px-4 py-3 focus:outline-none focus:border-jpay-yellow transition"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !inputText.trim()}
          className="bg-jpay-yellow text-jpay-black p-3 rounded-xl hover:bg-jpay-yellowHover disabled:opacity-50 transition"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};
