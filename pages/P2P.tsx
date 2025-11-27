
import React, { useState } from 'react';
import { P2POffer, Language } from '../types';
import { TRANSLATIONS, PAYMENT_METHODS } from '../constants';
import { Star, ShieldCheck, X, CheckCircle, MessageSquare } from 'lucide-react';

interface P2PProps {
  offers: P2POffer[];
  lang: Language;
}

export const P2P: React.FC<P2PProps> = ({ offers, lang }) => {
  const t = TRANSLATIONS[lang];
  const [filterType, setFilterType] = useState<'buy' | 'sell'>('buy');
  const [selectedOffer, setSelectedOffer] = useState<P2POffer | null>(null);
  const [tradeAmount, setTradeAmount] = useState('');
  const [isTradeSuccess, setIsTradeSuccess] = useState(false);

  const handleTradeConfirm = () => {
    setIsTradeSuccess(true);
    setTimeout(() => {
        setIsTradeSuccess(false);
        setSelectedOffer(null);
        setTradeAmount('');
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-20 relative">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t.p2pTitle}</h1>
          <p className="text-sm text-gray-400">{t.p2pSubtitle}</p>
        </div>
      </div>

      {/* Toggle Buy/Sell */}
      <div className="flex bg-jpay-dark p-1 rounded-xl border border-jpay-gray w-full max-w-sm">
        <button 
          onClick={() => setFilterType('buy')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition ${filterType === 'buy' ? 'bg-green-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
        >
          {t.buy}
        </button>
        <button 
          onClick={() => setFilterType('sell')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition ${filterType === 'sell' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
        >
          {t.sell}
        </button>
      </div>

      {/* Filters (Mock) */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button className="flex items-center space-x-2 bg-jpay-dark border border-jpay-gray px-4 py-2 rounded-full text-sm whitespace-nowrap hover:border-jpay-yellow text-white">
           <span>USDT</span>
        </button>
        <button className="flex items-center space-x-2 bg-jpay-dark border border-jpay-gray px-4 py-2 rounded-full text-sm whitespace-nowrap hover:border-jpay-yellow text-white">
           <span>{t.amount}</span>
        </button>
        <button className="flex items-center space-x-2 bg-jpay-dark border border-jpay-gray px-4 py-2 rounded-full text-sm whitespace-nowrap hover:border-jpay-yellow text-white">
           <span>{t.paymentMethod}</span>
        </button>
      </div>

      {/* Offers List */}
      <div className="space-y-4">
        {offers.filter(o => o.type === filterType).map((offer) => (
          <div key={offer.id} className="bg-jpay-dark border border-jpay-gray rounded-2xl p-5 hover:border-gray-500 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-jpay-yellow text-jpay-black font-bold flex items-center justify-center text-xs">
                  {offer.user.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center text-sm font-bold text-white">
                    {offer.user}
                    {offer.verified && <ShieldCheck className="w-4 h-4 text-jpay-yellow ml-1" />}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center">
                    98.5% <Star className="w-3 h-3 text-jpay-yellow ml-0.5" fill="#FCD535" /> (142 orders)
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">{t.price}</div>
                <div className="text-xl font-bold text-white">
                    {offer.price} <span className="text-sm font-normal text-gray-400">{offer.currency}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <span className="text-gray-500 block mb-1">Disponible</span>
                <span className="font-medium text-white">{offer.amount} {offer.crypto}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">{t.limit}</span>
                <span className="font-medium text-white">{offer.limits}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-800">
               <div className="flex gap-2">
                  {offer.methods.map(m => {
                    const style = PAYMENT_METHODS.find(pm => pm.name === m);
                    return (
                        <span key={m} className={`text-[10px] px-2 py-0.5 rounded border border-gray-700 text-gray-300 ${style?.name === 'MonCash' ? 'text-red-400 border-red-900/50 bg-red-900/10' : ''}`}>
                            {m}
                        </span>
                    )
                  })}
               </div>
               <button 
                onClick={() => setSelectedOffer(offer)}
                className={`px-6 py-2 rounded-lg font-bold text-sm transition transform hover:scale-105 ${filterType === 'buy' ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-red-600 hover:bg-red-500 text-white'}`}
               >
                 {filterType === 'buy' ? t.buy : t.sell} {offer.crypto}
               </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trade Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
             <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedOffer(null)}></div>
             <div className="bg-jpay-dark border border-gray-800 w-full max-w-md rounded-t-3xl md:rounded-3xl p-6 relative z-10 animate-fade-in-up">
                 
                 {isTradeSuccess ? (
                    <div className="py-10 text-center animate-fade-in">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{t.orderCreated}</h3>
                        <p className="text-gray-400">Redirection vers le chat...</p>
                    </div>
                 ) : (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                {selectedOffer.type === 'buy' ? t.buy : t.sell} {selectedOffer.crypto}
                                <span className="text-xs font-normal text-gray-400 bg-gray-800 px-2 py-0.5 rounded">de {selectedOffer.user}</span>
                            </h3>
                            <button onClick={() => setSelectedOffer(null)} className="p-2 hover:bg-gray-800 rounded-full">
                                <X size={20} className="text-gray-400" />
                            </button>
                        </div>

                        <div className="bg-black/40 p-4 rounded-xl border border-gray-800 mb-6">
                            <div className="flex justify-between mb-2 text-sm">
                                <span className="text-gray-400">{t.price}</span>
                                <span className="text-jpay-yellow font-bold">{selectedOffer.price} {selectedOffer.currency}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">{t.limit}</span>
                                <span className="text-white">{selectedOffer.limits}</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                             <div>
                                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">{selectedOffer.type === 'buy' ? 'Je paie' : 'Je vends'}</label>
                                <div className="relative">
                                    <input 
                                        type="number" 
                                        placeholder="0.00" 
                                        className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-jpay-yellow outline-none"
                                        value={tradeAmount}
                                        onChange={(e) => setTradeAmount(e.target.value)}
                                    />
                                    <span className="absolute right-4 top-3.5 font-bold text-sm text-gray-500">{selectedOffer.currency}</span>
                                </div>
                             </div>
                             <div>
                                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">{selectedOffer.type === 'buy' ? 'Je reçois' : 'Je reçois'}</label>
                                <div className="bg-gray-800 rounded-xl px-4 py-3 flex justify-between items-center text-gray-300">
                                    <span>{tradeAmount ? (parseFloat(tradeAmount) / selectedOffer.price).toFixed(4) : '0.00'}</span>
                                    <span className="font-bold text-sm">{selectedOffer.crypto}</span>
                                </div>
                             </div>
                        </div>

                        <div className="flex gap-3">
                             <button className="flex-1 py-3 bg-gray-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-700 transition">
                                <MessageSquare size={18} /> Chat
                             </button>
                             <button 
                                onClick={handleTradeConfirm}
                                disabled={!tradeAmount}
                                className={`flex-[2] py-3 rounded-xl font-bold text-white transition ${selectedOffer.type === 'buy' ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600 hover:bg-red-500'} disabled:opacity-50 disabled:cursor-not-allowed`}
                             >
                                {selectedOffer.type === 'buy' ? t.buy : t.sell}
                             </button>
                        </div>
                    </>
                 )}
             </div>
        </div>
      )}
    </div>
  );
};
