
import React, { useState } from 'react';
import { Logo } from './Logo';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { Mail, Lock, User, Loader2, ArrowRight, X, Phone } from 'lucide-react';

interface AuthFormProps {
  onLogin: () => void;
  onClose: () => void;
  lang: Language;
  initialMode: 'login' | 'register';
}

export const AuthForm: React.FC<AuthFormProps> = ({ onLogin, onClose, lang, initialMode }) => {
  const t = TRANSLATIONS[lang];
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation of API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin(); // Trigger app login state
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in" 
        onClick={onClose}
      ></div>

      {/* Card */}
      <div className="bg-[#121212] border border-gray-800 w-full max-w-md rounded-3xl p-8 relative z-10 shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white hover:bg-gray-800 rounded-full transition"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center mb-8">
           <Logo variant="full" className="h-10 w-auto mb-2" />
           <p className="text-gray-400 text-sm">
             {mode === 'login' ? t.lp_heroTitle : t.lp_ctaStart}
           </p>
        </div>

        {/* Toggle */}
        <div className="flex bg-black/50 p-1 rounded-xl mb-8 border border-gray-800">
           <button 
             onClick={() => setMode('login')}
             className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${mode === 'login' ? 'bg-gray-800 text-white shadow-md' : 'text-gray-500 hover:text-gray-300'}`}
           >
             {t.auth_login}
           </button>
           <button 
             onClick={() => setMode('register')}
             className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${mode === 'register' ? 'bg-gray-800 text-white shadow-md' : 'text-gray-500 hover:text-gray-300'}`}
           >
             {t.auth_register}
           </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
           {mode === 'register' && (
             <div className="relative group">
                <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-jpay-yellow transition">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder={t.auth_fullName}
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-jpay-yellow transition"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
             </div>
           )}

           <div className="relative group">
              <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-jpay-yellow transition">
                <Mail size={20} />
              </div>
              <input 
                type="text" 
                placeholder={t.auth_email}
                required
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-jpay-yellow transition"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
           </div>

           <div className="relative group">
              <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-jpay-yellow transition">
                <Lock size={20} />
              </div>
              <input 
                type="password" 
                placeholder={t.auth_password}
                required
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-jpay-yellow transition"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
           </div>

           {mode === 'register' && (
             <div className="relative group">
                <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-jpay-yellow transition">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  placeholder={t.auth_confirmPassword}
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-jpay-yellow transition"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
             </div>
           )}

           {mode === 'login' && (
             <div className="text-right">
               <a href="#" className="text-xs text-gray-500 hover:text-jpay-yellow transition">{t.auth_forgotPass}</a>
             </div>
           )}

           <button 
             type="submit"
             disabled={isLoading}
             className="w-full bg-jpay-yellow text-jpay-black py-4 rounded-xl font-bold text-lg hover:bg-jpay-yellowHover transition shadow-lg shadow-jpay-yellow/20 flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
           >
             {isLoading ? (
               <>
                 <Loader2 className="animate-spin" size={20} />
                 {t.auth_loading}
               </>
             ) : (
               <>
                 {mode === 'login' ? t.auth_submitLogin : t.auth_submitRegister}
                 <ArrowRight size={20} />
               </>
             )}
           </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
           {mode === 'login' ? t.auth_noAccount : t.auth_hasAccount}{" "}
           <button 
             onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
             className="text-jpay-yellow font-bold hover:underline"
           >
             {mode === 'login' ? t.auth_register : t.auth_login}
           </button>
        </div>
      </div>
    </div>
  );
};
