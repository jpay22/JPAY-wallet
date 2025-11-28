
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import { Home } from './pages/Home';
import { Wallet } from './pages/Wallet';
import { BuySell } from './pages/BuySell';
import { P2P } from './pages/P2P';
import { Cards } from './pages/Cards';
import { Support } from './pages/Support';
import { Community } from './pages/Community';
import { Notifications } from './pages/Notifications';
import { Branding } from './pages/Branding';
import { PaymentMethods } from './pages/PaymentMethods';
import { AdminDashboard } from './pages/AdminDashboard';
import { MOCK_ASSETS, MOCK_TRANSACTIONS, MOCK_P2P_OFFERS, TRANSLATIONS } from './constants';
import { Language } from './types';
import { LogOut, CheckCircle, Shield, CreditCard, Bell, ArrowUpRight, ChevronLeft } from 'lucide-react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Admin State
  const [currentView, setCurrentView] = useState('home');
  const [lang, setLang] = useState<Language>('fr');

  const handleLogin = (adminUser = false) => {
    setIsLoggedIn(true);
    setIsAdmin(adminUser);
    if (adminUser) setCurrentView('admin-dashboard');
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      setIsAdmin(false);
      setCurrentView('home');
  };

  if (!isLoggedIn) {
      return <LandingPage onLogin={handleLogin} lang={lang} setLang={setLang} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home assets={MOCK_ASSETS} transactions={MOCK_TRANSACTIONS} lang={lang} onNavigate={setCurrentView} />;
      case 'wallet':
        return <Wallet assets={MOCK_ASSETS} lang={lang} />;
      case 'cards':
        return <Cards lang={lang} />;
      case 'buy': // Default Buy
        return <BuySell assets={MOCK_ASSETS} lang={lang} initialMode="buy" />;
      case 'deposit': // Explicit Deposit Route
        return <BuySell assets={MOCK_ASSETS} lang={lang} initialMode="buy" />;
      case 'withdraw': // Explicit Withdraw Route
        return <BuySell assets={MOCK_ASSETS} lang={lang} initialMode="sell" />;
      case 'p2p':
        return <P2P offers={MOCK_P2P_OFFERS} lang={lang} />;
      case 'support':
        return <Support lang={lang} />;
      case 'community':
        return <Community lang={lang} />;
      case 'notifications':
        return <Notifications lang={lang} />;
      case 'branding':
        return <Branding />;
      case 'payment-methods':
        return <PaymentMethods lang={lang} onNavigate={setCurrentView} />;
      case 'admin-dashboard':
        return <AdminDashboard lang={lang} />;
      case 'profile':
        return <ProfileSettings lang={lang} setLang={setLang} onLogout={handleLogout} onNavigate={setCurrentView} />;
      default:
        return <Home assets={MOCK_ASSETS} transactions={MOCK_TRANSACTIONS} lang={lang} onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} setCurrentView={setCurrentView} lang={lang} isAdmin={isAdmin}>
      {renderView()}
    </Layout>
  );
};

const ProfileSettings: React.FC<{ lang: Language, setLang: (l: Language) => void, onLogout: () => void, onNavigate: (v: string) => void }> = ({ lang, setLang, onLogout, onNavigate }) => {
    const t = TRANSLATIONS[lang];
    
    return (
        <div className="space-y-6 animate-fade-in pb-20">
            <h1 className="text-2xl font-bold">{t.settings}</h1>
            
            {/* Profile Card */}
            <div className="bg-gradient-to-r from-gray-800 to-black p-6 rounded-3xl border border-jpay-gray flex items-center space-x-4 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-jpay-yellow text-jpay-black flex items-center justify-center text-2xl font-bold shadow-[0_0_15px_rgba(252,213,53,0.3)]">
                    JP
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">Jean-Pierre</h2>
                    <p className="text-gray-400 text-sm">jean.pierre@email.ht</p>
                    <div className="flex items-center mt-2 text-green-500 text-xs font-medium bg-green-500/10 px-2 py-1 rounded-lg w-fit">
                        <CheckCircle size={12} className="mr-1" />
                        {t.verified} (Niveau 2)
                    </div>
                </div>
            </div>

            {/* Language Switcher */}
            <div className="space-y-2">
                <h3 className="text-gray-400 text-xs uppercase font-bold tracking-wider ml-2">{t.changeLang}</h3>
                <div className="bg-jpay-dark rounded-2xl border border-jpay-gray overflow-hidden">
                    <button 
                        onClick={() => setLang('fr')}
                        className={`w-full p-4 flex items-center justify-between hover:bg-gray-800 transition border-b border-gray-800 ${lang === 'fr' ? 'text-jpay-yellow' : 'text-white'}`}
                    >
                        <span className="flex items-center gap-3"><span className="text-xl">🇫🇷</span> Français</span>
                        {lang === 'fr' && <CheckCircle size={18} />}
                    </button>
                    <button 
                        onClick={() => setLang('ht')}
                        className={`w-full p-4 flex items-center justify-between hover:bg-gray-800 transition ${lang === 'ht' ? 'text-jpay-yellow' : 'text-white'}`}
                    >
                        <span className="flex items-center gap-3"><span className="text-xl">🇭🇹</span> Kreyòl Ayisyen</span>
                        {lang === 'ht' && <CheckCircle size={18} />}
                    </button>
                </div>
            </div>

            {/* Security Settings */}
            <div className="space-y-2">
                <h3 className="text-gray-400 text-xs uppercase font-bold tracking-wider ml-2">Sécurité & Paiement</h3>
                <div className="bg-jpay-dark rounded-2xl border border-jpay-gray overflow-hidden">
                     <div className="p-4 flex items-center justify-between hover:bg-gray-800 cursor-pointer border-b border-jpay-gray transition">
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Shield size={18} /></div>
                            <span>Sécurité (2FA)</span>
                        </div>
                        <span className="text-green-500 text-xs bg-green-500/10 px-2 py-1 rounded">Activé</span>
                    </div>
                    <div 
                        onClick={() => onNavigate('payment-methods')}
                        className="p-4 flex items-center justify-between hover:bg-gray-800 cursor-pointer border-b border-jpay-gray transition"
                    >
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-2 bg-jpay-yellow/10 rounded-lg text-jpay-yellow"><CreditCard size={18} /></div>
                            <span>Moyens de paiement</span>
                        </div>
                        <span className="text-gray-500 text-xs">Gérer</span>
                    </div>
                     <div 
                        onClick={() => onNavigate('notifications')}
                        className="p-4 flex items-center justify-between hover:bg-gray-800 cursor-pointer transition"
                    >
                        <div className="flex items-center gap-3 text-white">
                             <div className="p-2 bg-gray-700/50 rounded-lg text-gray-400"><Bell size={18} /></div>
                            <span>Notifications</span>
                        </div>
                    </div>
                </div>
            </div>

             {/* Brand Kit Link */}
             <div className="space-y-2">
                 <button 
                    onClick={() => onNavigate('branding')}
                    className="w-full bg-jpay-dark border border-gray-800 p-4 rounded-2xl flex items-center justify-between hover:border-jpay-yellow transition group"
                 >
                     <span className="text-white font-medium group-hover:text-jpay-yellow transition">{t.branding}</span>
                     <ArrowUpRight size={18} className="text-gray-500 group-hover:text-jpay-yellow" />
                 </button>
             </div>

            <button 
                onClick={onLogout}
                className="w-full bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-center justify-center hover:bg-red-500/20 cursor-pointer transition text-red-500 font-bold"
            >
                <LogOut size={20} className="mr-2"/>
                {t.logout}
            </button>
        </div>
    )
}

export default App;
