import React, { useState, useEffect } from 'react';
import { Currency, Language } from '../types';
import { TRANSLATIONS, PAYMENT_METHODS } from '../constants';
import { ArrowDown, Info, Smartphone, Building, CheckCircle } from 'lucide-react';

interface BuySellProps {
  assets: Currency[];
  lang: Language;
  initialMode?: 'buy' | 'sell';
}

export const BuySell: React.FC<BuySellProps> = ({ assets, lang, initialMode = 'buy' }) => {
  const t = TRANSLATIONS[lang];
  const [mode, setMode] = useState<'buy' | 'sell'>(initialMode);
  const [amount, setAmount] = useState<string>('');
  const [selectedAsset, setSelectedAsset] = useState(assets.find(a => a.symbol === 'USDT') || assets[0]);
  const [selectedMethod, setSelectedMethod] = useState(PAYMENT_METHODS[0]);
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  // Mock conversion rate
  const rate = mode === 'buy' ? 135 : 132; // HTG per USDT
  const calculatedCrypto = amount ? (parseFloat(amount) / rate).toFixed(2) : '0.00';
  const calculatedFiat = amount ? (parseFloat(amount) * rate).toFixed(2) : '0.00';
  const tax = selectedMethod.name === 'Natcash' ? 0.05 : 0;
  const taxAmount = amount ? parseFloat(amount) * tax : 0;

  const handleInitiate = () => {
    if (amount && parseFloat(amount) > 0) {
      setIsConfirming(true);
    }
  };

  const handleConfirm = () => {
    setIsConfirming(false);
    alert('Order Placed Successfully! (Mock)');
    setAmount('');
  };

  return (
    <div className="max-w-md mx-auto animate-fade-in pb-20 relative">
      <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">{mode === 'buy' ? t.buyTitle : t.sellTitle}</h1>
          <p className="text-gray-400 text-sm">{t.buySub}</p>
      </div>

      {/* Mode Toggle */}
      <div className="bg-gray-900 p-1.5 rounded-2xl flex mb-8">
          <button 
            onClick={() => setMode('buy')}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${mode === 'buy' ? 'bg-green-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
          >
              <ArrowDown size={16} className={mode === 'buy' ? 'animate-bounce' : ''}/> {t.deposit} / {t.buy}
          </button>
          <button 
             onClick={() => setMode('sell')}
             className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${mode === 'sell' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
          >
             <ArrowDown size={16} className={`rotate-180 ${mode === 'sell' ? 'animate-bounce' : ''}`}/> {t.withdraw} / {t.sell}
          </button>
      </div>

      {/* Input Section */}
      <div className="space-y-2 relative">
          
          {/* Top Input (Fiat if Buying, Crypto if Selling) */}
          <div className="bg-jpay-dark border border-gray-700 rounded-2xl p-4 transition focus-within:border-jpay-yellow">
              <label className="text-xs text-gray-500 font-bold mb-1 block">{mode === 'buy' ? 'Je dépose' : 'Je vends'}</label>
              <div className="flex items-center justify-between">
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                    className="bg-transparent text-3xl font-bold text-white focus:outline-none w-1/2"
                  />
                  <div className="flex items-center gap-2 bg-black px-3 py-1.5 rounded-xl border border-gray-700">
                     {mode === 'buy' ? (
                         <>
                            <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold">HT</span>
                            <span className="font-bold">HTG</span>
                         </>
                     ) : (
                         <>
                             <span className="text-lg">{selectedAsset.icon}</span>
                             <span className="font-bold">{selectedAsset.symbol}</span>
                         </>
                     )}
                  </div>
              </div>
          </div>

          {/* Switch Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800 border-4 border-jpay-black rounded-full flex items-center justify-center z-10">
              <ArrowDown size={16} className="text-gray-400" />
          </div>

          {/* Bottom Input (Crypto if Buying, Fiat if Selling) */}
          <div className="bg-jpay-dark border border-gray-700 rounded-2xl p-4 pt-6">
              <label className="text-xs text-gray-500 font-bold mb-1 block">{mode === 'buy' ? 'Je reçois' : 'Je reçois'}</label>
               <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-gray-300">
                      {mode === 'buy' ? calculatedCrypto : calculatedFiat}
                  </div>
                  <div className="flex items-center gap-2 bg-black px-3 py-1.5 rounded-xl border border-gray-700">
                     {mode === 'buy' ? (
                         <>
                             <span className="text-lg">{selectedAsset.icon}</span>
                             <span className="font-bold">{selectedAsset.symbol}</span>
                         </>
                     ) : (
                         <>
                            <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold">HT</span>
                            <span className="font-bold">HTG</span>
                         </>
                     )}
                  </div>
              </div>
          </div>
      </div>

      {/* Payment Method Selector */}
      <div className="mt-6">
          <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2 block">{t.paymentMethod}</label>
          <div className="grid grid-cols-2 gap-3">
              {PAYMENT_METHODS.slice(0, 4).map(method => (
                  <button 
                    key={method.name}
                    onClick={() => setSelectedMethod(method)}
                    className={`p-3 rounded-xl border flex items-center gap-2 transition-all ${selectedMethod.name === method.name ? 'border-jpay-yellow bg-jpay-yellow/10' : 'border-gray-700 bg-gray-800 hover:bg-gray-700'}`}
                  >
                      <div className={`w-3 h-3 rounded-full ${method.color}`}></div>
                      <span className="text-sm font-bold text-white">{method.name}</span>
                  </button>
              ))}
          </div>
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gray-900 rounded-xl p-4 space-y-2 text-sm border border-gray-800">
          <div className="flex justify-between">
              <span className="text-gray-500">Taux</span>
              <span className="text-white">1 {selectedAsset.symbol} = {rate} HTG</span>
          </div>
          <div className="flex justify-between">
              <span className="text-gray-500 flex items-center gap-1">Frais JPAY <Info size={12}/></span>
              <span className="text-white">0 HTG</span>
          </div>
           {/* Natcash Warning if selected */}
           {selectedMethod.name === 'Natcash' && (
               <div className="flex justify-between text-orange-400 text-xs bg-orange-500/10 p-2 rounded">
                   <span className="flex items-center gap-1"><Info size={12}/> Taxe Natcash (5%)</span>
                   <span>{taxAmount.toFixed(2)} {mode === 'buy' ? 'HTG' : selectedAsset.symbol}</span>
               </div>
           )}
          <div className="border-t border-gray-800 pt-2 flex justify-between font-bold text-lg">
              <span className="text-gray-400">Total</span>
              <span className="text-white">{mode === 'buy' ? `${amount || 0} HTG` : `${calculatedFiat} HTG`}</span>
          </div>
      </div>

      <button 
        onClick={handleInitiate}
        disabled={!amount || parseFloat(amount) <= 0}
        className="w-full mt-6 bg-jpay-yellow text-jpay-black py-4 rounded-xl font-bold text-lg hover:bg-jpay-yellowHover transition shadow-[0_0_20px_rgba(252,213,53,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
          {mode === 'buy' ? t.deposit : t.withdraw} {selectedAsset.symbol}
      </button>

      {/* Confirmation Modal */}
      {isConfirming && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsConfirming(false)}></div>
              <div className="bg-jpay-dark border border-gray-800 p-6 rounded-3xl w-full max-w-sm relative z-10 animate-fade-in-up">
                  <div className="w-12 h-12 bg-jpay-yellow/20 text-jpay-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
                       <CheckCircle size={24} />
                   </div>
                  <h3 className="text-xl font-bold text-white text-center mb-6">{mode === 'buy' ? t.confirmDeposit : t.confirmWithdraw}</h3>
                  
                  <div className="bg-black/50 p-4 rounded-2xl mb-6 border border-gray-800">
                      <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-sm">Via</span>
                          <span className="font-bold flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${selectedMethod.color}`}></div>
                              {selectedMethod.name}
                          </span>
                      </div>
                      <div className="border-t border-gray-800 my-2"></div>
                      <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-sm">{mode === 'buy' ? t.totalToPay : 'Total à vendre'}</span>
                          <span className="text-white font-bold">{mode === 'buy' ? `${amount} HTG` : `${amount} ${selectedAsset.symbol}`}</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">{mode === 'buy' ? t.totalToReceive : t.totalToReceive}</span>
                          <span className="text-jpay-yellow font-bold text-lg">{mode === 'buy' ? `${calculatedCrypto} ${selectedAsset.symbol}` : `${calculatedFiat} HTG`}</span>
                      </div>
                  </div>

                  <div className="flex gap-3">
                      <button 
                          onClick={() => setIsConfirming(false)}
                          className="flex-1 py-3 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition"
                      >
                          {t.cancel}
                      </button>
                      <button 
                          onClick={handleConfirm}
                          className="flex-1 py-3 bg-jpay-yellow text-black rounded-xl font-bold hover:bg-jpay-yellowHover transition"
                      >
                          {t.yesConfirm}
                      </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};