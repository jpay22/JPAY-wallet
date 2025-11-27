
import React, { useState } from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { ArrowRight, Smartphone, ShieldCheck, Globe, Users, Coins, Lock, Zap, CreditCard, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { AuthForm } from './AuthForm';

interface LandingPageProps {
  onLogin: () => void;
  lang: Language;
  setLang: (l: Language) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLogin, lang, setLang }) => {
  const t = TRANSLATIONS[lang];
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-jpay-yellow selection:text-black">
      
      {showAuth && (
        <AuthForm 
          onLogin={onLogin} 
          onClose={() => setShowAuth(false)} 
          lang={lang} 
          initialMode={authMode} 
        />
      )}

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-jpay-yellow opacity-[0.04] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900 opacity-[0.08] rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[500px] h-[500px] bg-jpay-red opacity-[0.04] rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-effect border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Logo variant="full" className="h-8 md:h-10 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-jpay-yellow transition duration-300">{t.home}</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-jpay-yellow transition duration-300">{t.lp_services}</a>
            <a href="#marketplace" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-jpay-yellow transition duration-300">{t.market}</a>
            <a href="#support" onClick={(e) => scrollToSection(e, 'support')} className="hover:text-jpay-yellow transition duration-300">{t.support}</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLang(lang === 'fr' ? 'ht' : 'fr')}
              className="hidden md:flex items-center text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider border border-white/10 px-3 py-1 rounded-full transition"
            >
              <Globe size={14} className="mr-2" />
              {lang}
            </button>
            <button 
              onClick={() => handleOpenAuth('login')}
              className="text-sm font-bold text-white hover:text-jpay-yellow transition px-4 py-2"
            >
              {t.lp_login}
            </button>
            <button 
              onClick={() => handleOpenAuth('register')}
              className="bg-jpay-yellow text-jpay-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-jpay-yellowHover transition transform hover:scale-105 shadow-lg shadow-jpay-yellow/20"
            >
              {t.lp_createAccount}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center z-10">
        <div className="md:w-1/2 space-y-8 animate-fade-in-up text-center md:text-left">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold text-jpay-yellow tracking-wide uppercase mb-2 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-jpay-yellow mr-2 animate-pulse shadow-[0_0_10px_#FCD535]"></span>
            #1 Crypto Wallet Haïti
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
            JPAY – {t.lp_heroTitle}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
            {t.lp_heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button 
              onClick={() => handleOpenAuth('register')}
              className="bg-jpay-yellow text-jpay-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-jpay-yellowHover transition transform hover:scale-105 flex items-center justify-center shadow-xl shadow-jpay-yellow/20"
            >
              {t.lp_ctaStart}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => handleOpenAuth('register')}
              className="group border border-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition flex items-center justify-center"
            >
              {t.lp_ctaDownload}
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center animate-float perspective-1000">
          {/* Mockup Phone */}
          <div className="relative w-[320px] h-[640px] bg-black border-[8px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden z-20 ring-1 ring-white/10 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-out">
             {/* Mock App UI Inside Phone */}
             <div className="w-full h-full bg-jpay-black p-5 flex flex-col">
                <div className="flex justify-between items-center mb-6 mt-2">
                    <div className="flex gap-2 items-center">
                        <Logo variant="icon" className="h-8 w-8" />
                        <div>
                            <div className="text-[10px] text-gray-400">Total Balance</div>
                            <div className="text-sm font-bold">$12,450.00</div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-black p-5 rounded-3xl mb-6 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-jpay-yellow/10 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-center mb-2 relative z-10">
                         <span className="text-xs text-gray-400">Bitcoin</span>
                         <span className="text-xs text-green-400 flex items-center"><Zap size={10} className="mr-1"/> +2.4%</span>
                    </div>
                    <div className="text-3xl font-bold text-white relative z-10">0.42 BTC</div>
                    <div className="text-xs text-gray-500 relative z-10">$27,300 USD</div>
                </div>
                <div className="grid grid-cols-4 gap-3 mb-8">
                    <div className="aspect-square bg-gray-900 rounded-2xl flex flex-col items-center justify-center gap-1">
                        <div className="w-8 h-8 bg-jpay-yellow rounded-full flex items-center justify-center text-black"><ArrowRight className="w-4 h-4 -rotate-45"/></div>
                        <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
                    </div>
                     <div className="aspect-square bg-gray-900 rounded-2xl flex flex-col items-center justify-center gap-1">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white"><ArrowRight className="w-4 h-4 rotate-135"/></div>
                        <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
                    </div>
                     <div className="aspect-square bg-gray-900 rounded-2xl flex flex-col items-center justify-center gap-1">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white"><Coins className="w-4 h-4"/></div>
                        <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
                    </div>
                     <div className="aspect-square bg-gray-900 rounded-2xl flex flex-col items-center justify-center gap-1">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white"><Smartphone className="w-4 h-4"/></div>
                        <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
                    </div>
                </div>
                <div className="flex-1 bg-gray-900/30 rounded-t-3xl p-4 space-y-4 backdrop-blur-md">
                    <div className="h-14 bg-gray-800/50 rounded-2xl w-full flex items-center px-4 gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20"></div>
                        <div className="flex-1 space-y-2">
                             <div className="h-2 bg-gray-700/50 rounded w-1/2"></div>
                             <div className="h-2 bg-gray-700/50 rounded w-1/4"></div>
                        </div>
                    </div>
                    <div className="h-14 bg-gray-800/50 rounded-2xl w-full flex items-center px-4 gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20"></div>
                        <div className="flex-1 space-y-2">
                             <div className="h-2 bg-gray-700/50 rounded w-1/3"></div>
                             <div className="h-2 bg-gray-700/50 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
             </div>
             {/* Notch */}
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-30"></div>
          </div>
          
          {/* Decorative Elements behind phone */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-jpay-yellow to-orange-500 rounded-full blur-[100px] opacity-20 -z-10 animate-pulse"></div>
          <div className="absolute bottom-10 -right-10 w-32 h-32 bg-jpay-blue rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-20 -left-10 w-24 h-24 bg-jpay-red rounded-full blur-2xl opacity-40"></div>
        </div>
      </section>

      {/* Payment Methods Banner */}
      <div className="w-full bg-[#0a0a0a] border-y border-white/5 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">{t.lp_partners}</p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition duration-500">
            <span className="font-bold text-2xl text-red-600 flex items-center gap-2"><Smartphone size={24}/> MonCash</span>
            <span className="font-bold text-2xl text-red-800 flex items-center gap-2"><CreditCard size={24}/> Unibank</span>
            <span className="font-bold text-2xl text-blue-900 flex items-center gap-2"><CreditCard size={24}/> Sogebank</span>
            <span className="font-bold text-2xl text-green-700 flex items-center gap-2"><Coins size={24}/> BNC</span>
            <span className="font-bold text-2xl text-green-500 flex items-center gap-2"><Coins size={24}/> USDT</span>
        </div>
      </div>

      {/* Features Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Tout ce dont vous avez besoin</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Une suite complète d'outils financiers conçus pour la réalité haïtienne.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
                icon={Zap} 
                title={t.lp_featInstant} 
                desc={t.lp_featInstantDesc} 
                delay="0"
                color="text-jpay-yellow"
            />
            <FeatureCard 
                icon={Users} 
                title={t.lp_featP2P} 
                desc={t.lp_featP2PDesc} 
                delay="100"
                color="text-blue-400"
            />
             <FeatureCard 
                icon={ShieldCheck} 
                title="Système Anti-Fraude" 
                desc="Vos transactions sont surveillées 24/7 par nos systèmes intelligents pour prévenir toute activité suspecte." 
                delay="200"
                color="text-green-400"
            />
        </div>
      </section>

      {/* Community / Diaspora Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
         {/* Background Map Effect */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold mb-6">DIASPORA CONNECT</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {t.lp_commTitle}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {t.lp_commDesc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                         <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xl">🇭🇹</div>
                         <div>
                            <div className="text-sm font-bold text-white">Haïti</div>
                            <div className="text-xs text-gray-500">Pòtoprens, Kap Ayisyen</div>
                         </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                         <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xl">🇺🇸</div>
                         <div>
                            <div className="text-sm font-bold text-white">USA</div>
                            <div className="text-xs text-gray-500">Miami, New York</div>
                         </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                         <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xl">🇨🇦</div>
                         <div>
                            <div className="text-sm font-bold text-white">Canada</div>
                            <div className="text-xs text-gray-500">Montréal, Ottawa</div>
                         </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                         <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xl">🇫🇷</div>
                         <div>
                            <div className="text-sm font-bold text-white">France</div>
                            <div className="text-xs text-gray-500">Paris, Marseille</div>
                         </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-jpay-blue rounded-full blur-[100px] opacity-20"></div>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="bg-[#121212] border border-gray-800 p-6 rounded-3xl h-64 flex flex-col justify-between hover:-translate-y-2 transition duration-500 shadow-2xl">
                        <Globe className="w-12 h-12 text-jpay-blue" />
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">150+</div>
                            <div className="text-sm text-gray-400">Pays supportés</div>
                        </div>
                    </div>
                    <div className="bg-[#121212] border border-gray-800 p-6 rounded-3xl h-64 flex flex-col justify-between hover:-translate-y-2 transition duration-500 shadow-2xl mt-12">
                         <Users className="w-12 h-12 text-jpay-yellow" />
                         <div>
                            <div className="text-3xl font-bold text-white mb-1">50k+</div>
                            <div className="text-sm text-gray-400">Utilisateurs actifs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="bg-gradient-to-br from-[#121212] to-black border border-gray-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] opacity-20"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                 <div className="md:w-1/2">
                      <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mb-8 text-green-500">
                          <Lock size={40} />
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.lp_securityTitle}</h2>
                      <p className="text-gray-400 text-lg mb-8">{t.lp_securitySub}</p>
                      <ul className="space-y-4">
                          <li className="flex items-center text-gray-300">
                              <ShieldCheck className="text-green-500 mr-3" size={24}/>
                              <span>Authentification 2FA obligatoire</span>
                          </li>
                          <li className="flex items-center text-gray-300">
                              <ShieldCheck className="text-green-500 mr-3" size={24}/>
                              <span>Vérification d'identité (KYC) adaptée</span>
                          </li>
                          <li className="flex items-center text-gray-300">
                              <ShieldCheck className="text-green-500 mr-3" size={24}/>
                              <span>Stockage à froid des actifs (Cold Storage)</span>
                          </li>
                      </ul>
                 </div>
                 <div className="md:w-1/2 flex justify-center">
                     {/* Abstract Security Graphic */}
                     <div className="relative w-64 h-64 md:w-80 md:h-80">
                         <div className="absolute inset-0 border-2 border-dashed border-green-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                         <div className="absolute inset-4 border-2 border-dashed border-green-500/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-32 h-32 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                             <ShieldCheck className="text-green-400 w-24 h-24 relative z-10 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">{t.lp_finalCta}</h2>
              <button 
                onClick={() => handleOpenAuth('register')}
                className="bg-jpay-yellow text-jpay-black px-12 py-5 rounded-full font-bold text-xl hover:bg-jpay-yellowHover transition transform hover:scale-105 shadow-2xl shadow-jpay-yellow/20"
              >
                {t.lp_createAccount}
              </button>
          </div>
      </section>

      {/* Footer */}
      <footer id="support" className="py-12 px-6 border-t border-gray-900 bg-[#050505] text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
                <Logo variant="full" className="h-8 w-auto mb-4" />
                <p className="mb-6">Le portefeuille crypto de référence pour la communauté haïtienne et internationale.</p>
                <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-jpay-yellow hover:text-black transition flex items-center justify-center cursor-pointer">
                        <Globe size={14}/>
                    </div>
                     <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-jpay-yellow hover:text-black transition flex items-center justify-center cursor-pointer">
                        <Users size={14}/>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-white font-bold mb-6 text-base">Services</h3>
                <ul className="space-y-3">
                    <li><button onClick={() => handleOpenAuth('login')} className="hover:text-jpay-yellow transition">Achat Crypto</button></li>
                    <li><button onClick={() => handleOpenAuth('login')} className="hover:text-jpay-yellow transition">Vente Crypto</button></li>
                    <li><button onClick={() => handleOpenAuth('login')} className="hover:text-jpay-yellow transition">Marketplace P2P</button></li>
                    <li><button onClick={() => handleOpenAuth('login')} className="hover:text-jpay-yellow transition">Carte Virtuelle</button></li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-bold mb-6 text-base">Support</h3>
                <ul className="space-y-3">
                    <li><button onClick={() => handleOpenAuth('login')} className="hover:text-jpay-yellow transition">Centre d'aide</button></li>
                    <li><button onClick={() => handleOpenAuth('login')} className="hover:text-jpay-yellow transition">Frais et Limites</button></li>
                    <li><button onClick={() => handleOpenAuth('login')} className="hover:text-jpay-yellow transition">Sécurité</button></li>
                    <li><button onClick={() => handleOpenAuth('login')} className="hover:text-jpay-yellow transition">Contactez-nous</button></li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-bold mb-6 text-base">Légal</h3>
                <ul className="space-y-3">
                    <li><a href="#" className="hover:text-jpay-yellow transition">Conditions d'utilisation</a></li>
                    <li><a href="#" className="hover:text-jpay-yellow transition">Politique de confidentialité</a></li>
                    <li><a href="#" className="hover:text-jpay-yellow transition">KYC & AML</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2024 JPAY. Tout dwa rezève. Fèt avèk lanmou pou Ayiti <span className="text-red-500">❤️</span></p>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Système opérationnel</span>
            </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, desc: string, delay: string, color?: string }> = ({ icon: Icon, title, desc, delay, color = 'text-white' }) => (
    <div 
        className="bg-[#121212] border border-white/5 p-8 rounded-[2rem] hover:border-jpay-yellow/50 transition duration-300 group hover:-translate-y-2"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className={`w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 border border-gray-800 group-hover:border-jpay-yellow shadow-lg ${color}`}>
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
            {title}
            <ChevronRight size={16} className="text-gray-600 group-hover:text-jpay-yellow transition opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm font-medium">{desc}</p>
    </div>
);
