
import React from 'react';
import { Home, Wallet, ArrowRightLeft, User, MessageCircleQuestion, Bell, Users, Plus, Palette, ScanLine, CreditCard } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { Logo } from './Logo';

interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  setCurrentView: (view: string) => void;
  lang: Language;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setCurrentView, lang }) => {
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'home', icon: Home, label: t.home },
    { id: 'wallet', icon: Wallet, label: t.wallet },
    { id: 'cards', icon: CreditCard, label: t.cards },
    { id: 'p2p', icon: ArrowRightLeft, label: t.market },
    { id: 'community', icon: Users, label: t.community },
    { id: 'profile', icon: User, label: t.settings },
  ];

  return (
    <div className="min-h-screen bg-jpay-black text-white font-sans selection:bg-jpay-yellow selection:text-jpay-black pb-24 md:pb-0 md:flex">
      
      {/* Desktop Sidebar (visible on md+) */}
      <aside className="hidden md:flex flex-col w-64 border-r border-jpay-gray bg-jpay-black fixed h-full z-20">
        <div className="p-8 pl-6 cursor-pointer" onClick={() => setCurrentView('home')}>
          <Logo variant="full" className="h-10 w-auto" />
          <p className="text-xs text-gray-500 mt-2 pl-1 uppercase tracking-wider">Haitian Crypto Wallet</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 group ${
                currentView === item.id 
                  ? 'bg-jpay-yellow text-jpay-black font-bold shadow-[0_0_15px_rgba(252,213,53,0.2)]' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 mr-3 transition-colors ${currentView === item.id ? 'text-black' : 'text-gray-400 group-hover:text-jpay-yellow'}`} />
              {item.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-800 space-y-2">
             <button
              onClick={() => setCurrentView('support')}
              className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 group ${
                currentView === 'support' 
                  ? 'bg-jpay-yellow text-jpay-black font-bold' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <MessageCircleQuestion className="w-5 h-5 mr-3" />
              {t.support}
            </button>
             <button
              onClick={() => setCurrentView('branding')}
              className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 group ${
                currentView === 'branding' 
                  ? 'bg-jpay-yellow text-jpay-black font-bold' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Palette className="w-5 h-5 mr-3" />
              {t.branding}
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-7xl mx-auto w-full relative">
        {/* Mobile Header with Notifications */}
        <div className="md:hidden flex justify-between items-center mb-6 pt-2 sticky top-0 z-30 bg-jpay-black/80 backdrop-blur-md pb-2">
            <div onClick={() => setCurrentView('home')}>
               <Logo variant="full" className="h-8 w-auto" />
            </div>
            <div className="flex items-center gap-3">
                 {/* QR Scan Button Mobile */}
                 <button onClick={() => setCurrentView('wallet')} className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center active:scale-95 transition">
                    <ScanLine size={18} />
                </button>
                 {/* Quick Add Button Mobile */}
                <button onClick={() => setCurrentView('buy')} className="w-9 h-9 bg-jpay-yellow text-black rounded-full flex items-center justify-center shadow-lg shadow-jpay-yellow/20 active:scale-95 transition">
                    <Plus size={20} strokeWidth={3}/>
                </button>
                <button 
                  onClick={() => setCurrentView('notifications')}
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center relative active:scale-95 transition"
                >
                    <Bell size={18} className={currentView === 'notifications' ? 'text-jpay-yellow' : 'text-gray-300'} />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-jpay-red rounded-full border-2 border-jpay-black"></span>
                </button>
            </div>
        </div>

        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-jpay-dark/95 backdrop-blur-lg border-t border-gray-800 px-6 py-2 flex justify-between items-center z-50 safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.5)] h-[84px] pb-5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`flex flex-col items-center justify-center w-full space-y-1 transition-all duration-300 relative ${
              currentView === item.id ? 'text-jpay-yellow -translate-y-1' : 'text-gray-500'
            }`}
          >
            {/* Active Indicator Dot */}
            {currentView === item.id && (
                <span className="absolute -top-3 w-1 h-1 bg-jpay-yellow rounded-full shadow-[0_0_8px_#FCD535]"></span>
            )}
            
            <div className={`p-1.5 rounded-xl transition-all ${currentView === item.id ? 'bg-jpay-yellow/10' : 'bg-transparent'}`}>
               <item.icon className={`w-6 h-6 ${currentView === item.id ? 'fill-current' : ''}`} strokeWidth={currentView === item.id ? 2.5 : 2} />
            </div>
            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
