
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { CreditCard, Plus, CheckCircle, ShieldCheck, Globe, Wifi } from 'lucide-react';
import { Logo } from '../components/Logo';

interface CardsProps {
  lang: Language;
}

export const Cards: React.FC<CardsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [hasCard, setHasCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateCard = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
        setIsLoading(false);
        setHasCard(true);
        setShowConfirmModal(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in pb-20">
      <div className="flex justify-between items-center mb-8">
        <div>
           <h1 className="text-2xl font-bold">{t.cardsTitle}</h1>
           <p className="text-sm text-gray-400">{t.cardsSub}</p>
        </div>
      </div>

      {!hasCard ? (
        // --- NO CARD STATE ---
        <div className="max-w-md mx-auto">
            {/* Visual Card Placeholder */}
            <div className="relative w-full aspect-[1.586] bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl border border-gray-800 shadow-2xl mb-8 overflow-hidden group hover:scale-[1.02] transition duration-500">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-700/20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-between opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-500">
                    <div className="flex justify-between items-start">
                        <Logo variant="full" className="h-6 w-auto" />
                        <Wifi className="rotate-90 text-gray-500" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                             <div className="h-2 w-12 bg-gray-700 rounded-full"></div>
                             <div className="h-2 w-12 bg-gray-700 rounded-full"></div>
                             <div className="h-2 w-12 bg-gray-700 rounded-full"></div>
                             <div className="h-2 w-12 bg-gray-700 rounded-full"></div>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <div className="text-[10px] uppercase text-gray-500">Card Holder</div>
                                <div className="text-sm font-bold text-gray-400">JEAN PIERRE</div>
                            </div>
                            <div className="text-2xl font-bold italic text-white/20">VISA</div>
                        </div>
                    </div>
                </div>
                
                {/* Lock Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                     <div className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700">
                         <Plus size={32} className="text-jpay-yellow animate-pulse" />
                     </div>
                </div>
            </div>

            <div className="bg-jpay-dark border border-gray-800 rounded-3xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Avantages Premium</h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                            <Globe size={16} className="text-green-500" />
                        </div>
                        {t.cardBenefit1}
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-jpay-yellow/10 flex items-center justify-center flex-shrink-0">
                            <CreditCard size={16} className="text-jpay-yellow" />
                        </div>
                        {t.cardBenefit2}
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                         <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <ShieldCheck size={16} className="text-blue-500" />
                        </div>
                        {t.cardBenefit3}
                    </li>
                </ul>
            </div>

            <button 
                onClick={() => setShowConfirmModal(true)}
                className="w-full py-4 bg-jpay-yellow text-jpay-black rounded-2xl font-bold text-lg hover:bg-jpay-yellowHover transition shadow-[0_0_20px_rgba(252,213,53,0.3)] flex items-center justify-center gap-2"
            >
                <Plus size={20} strokeWidth={3} />
                {t.createCard}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">{t.cardPrice}: <span className="text-white font-bold">$15.00 USD</span></p>
        </div>
      ) : (
        // --- ACTIVE CARD STATE ---
        <div className="max-w-md mx-auto animate-fade-in">
             <div className="relative w-full aspect-[1.586] bg-gradient-to-br from-jpay-yellow to-orange-500 rounded-3xl border border-yellow-500/50 shadow-[0_10px_40px_-10px_rgba(252,213,53,0.3)] mb-8 overflow-hidden transform hover:scale-[1.01] transition duration-500">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-black">
                    <div className="flex justify-between items-start">
                        <Logo variant="full" monochrome className="h-6 w-auto" />
                        <Wifi className="rotate-90 opacity-70" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4 text-xl font-mono font-bold tracking-widest opacity-90">
                             <span>4242</span>
                             <span>••••</span>
                             <span>••••</span>
                             <span>9821</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <div className="text-[10px] uppercase opacity-70">Card Holder</div>
                                <div className="text-sm font-bold">JEAN PIERRE</div>
                            </div>
                            <div className="text-2xl font-bold italic opacity-80">VISA</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="bg-jpay-dark border border-gray-800 p-4 rounded-2xl text-center hover:border-jpay-yellow transition group">
                    <CreditCard className="mx-auto mb-2 text-gray-400 group-hover:text-jpay-yellow transition" />
                    <span className="text-sm font-bold text-white">Voir détails</span>
                </button>
                 <button className="bg-jpay-dark border border-gray-800 p-4 rounded-2xl text-center hover:border-red-500 transition group">
                    <ShieldCheck className="mx-auto mb-2 text-gray-400 group-hover:text-red-500 transition" />
                    <span className="text-sm font-bold text-white">Geler la carte</span>
                </button>
            </div>
        </div>
      )}

      {/* CONFIRMATION MODAL */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowConfirmModal(false)}></div>
            <div className="bg-jpay-dark border border-gray-800 p-6 rounded-3xl w-full max-w-sm relative z-10 animate-fade-in-up">
                <div className="w-16 h-16 bg-jpay-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-jpay-yellow/20">
                    <CreditCard size={32} className="text-jpay-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-6">{t.confirmCardCreation}</h3>

                <div className="bg-black p-4 rounded-2xl mb-6 border border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-400 text-sm">Type de carte</span>
                        <span className="font-bold text-white text-right">VISA Virtuelle <br/><span className="text-xs text-gray-500 font-normal">Internationale</span></span>
                    </div>
                    <div className="border-t border-gray-800 mb-4"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{t.cardCreationFee}</span>
                        <span className="text-2xl font-bold text-jpay-yellow">$15.00</span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button 
                        onClick={() => setShowConfirmModal(false)}
                        className="flex-1 py-3 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition"
                    >
                        {t.cancel}
                    </button>
                    <button 
                        onClick={handleCreateCard}
                        disabled={isLoading}
                        className="flex-1 py-3 bg-jpay-yellow text-black rounded-xl font-bold hover:bg-jpay-yellowHover transition flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            t.confirm
                        )}
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
