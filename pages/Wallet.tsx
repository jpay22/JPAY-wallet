
import React, { useState } from 'react';
import { Currency, Language, Transaction } from '../types';
import { TRANSLATIONS, MOCK_TRANSACTIONS } from '../constants';
import { QrCode, Copy, History, ChevronLeft, Check, Share2, ArrowDownLeft, ArrowUpRight, Repeat, ShoppingCart, TrendingUp, Zap, Layers, Hexagon } from 'lucide-react';

interface WalletProps {
  assets: Currency[];
  lang: Language;
}

export const Wallet: React.FC<WalletProps> = ({ assets, lang }) => {
  const t = TRANSLATIONS[lang];
  const [selectedAsset, setSelectedAsset] = useState<Currency | null>(null);
  const [actionTab, setActionTab] = useState<'send' | 'receive' | 'history'>('receive');
  const [copied, setCopied] = useState(false);
  
  // Transaction State
  const [sendAmount, setSendAmount] = useState('');
  const [sendAddress, setSendAddress] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('TRC20');
  const [isConfirming, setIsConfirming] = useState(false);

  // Network Configuration
  const NETWORKS = [
      { id: 'TRC20', name: 'Tron (TRC20)', icon: Zap, fee: 1.00, time: '~2 min' },
      { id: 'ERC20', name: 'Ethereum (ERC20)', icon: Layers, fee: 5.00, time: '~10 min' },
      { id: 'BEP20', name: 'BSC (BEP20)', icon: Hexagon, fee: 0.50, time: '~3 min' },
  ];

  const currentNetworkData = NETWORKS.find(n => n.id === selectedNetwork) || NETWORKS[0];

  const handleCopy = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
  }

  const handleSendInitiate = () => {
      if (sendAmount && parseFloat(sendAmount) > 0 && sendAddress) {
          setIsConfirming(true);
      }
  };

  const handleConfirmTransaction = () => {
      // Logic to actually send
      setIsConfirming(false);
      alert(`Transaction Sent via ${selectedNetwork}!`);
      setSendAmount('');
      setSendAddress('');
      setSelectedAsset(null);
  };

  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
        case 'receive': return <ArrowDownLeft size={18} className="text-green-500" />;
        case 'send': return <ArrowUpRight size={18} className="text-white" />;
        case 'buy': return <ShoppingCart size={18} className="text-jpay-yellow" />;
        case 'sell': return <TrendingUp size={18} className="text-red-500" />;
        case 'swap': return <Repeat size={18} className="text-blue-500" />;
    }
  };

  // Filter transactions for the selected asset
  const assetTransactions = selectedAsset 
    ? MOCK_TRANSACTIONS.filter(tx => tx.currency === selectedAsset.symbol)
    : [];

  // Detail View
  if (selectedAsset) {
      return (
          <div className="animate-fade-in pb-20 relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                  <button onClick={() => setSelectedAsset(null)} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                      <ChevronLeft size={20} />
                  </button>
                  <span className="font-bold text-lg">{selectedAsset.name} Wallet</span>
                  <div className="w-10"></div> {/* Spacer for alignment */}
              </div>

              {/* Asset Card */}
              <div className="bg-gradient-to-b from-gray-800 to-black p-8 rounded-[2.5rem] text-center mb-8 border border-gray-700 shadow-2xl relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-gray-600">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
                  <div className="w-16 h-16 mx-auto rounded-full bg-black border border-gray-700 flex items-center justify-center text-3xl mb-4 relative z-10 shadow-lg" style={{color: selectedAsset.color}}>
                    {selectedAsset.icon}
                  </div>
                  <h2 className="text-4xl font-bold mb-1 relative z-10">{selectedAsset.balance} {selectedAsset.symbol}</h2>
                  <p className="font-sans text-[16px] text-gray-400 relative z-10">≈ ${(selectedAsset.balance * selectedAsset.valueUsd).toFixed(2)} USD</p>
              </div>

              {/* Tabs */}
              <div className="flex p-1 bg-gray-900 rounded-2xl mb-6">
                  <button onClick={() => setActionTab('receive')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${actionTab === 'receive' ? 'bg-gray-800 text-white shadow-lg' : 'text-gray-500'}`}>
                      {t.receive}
                  </button>
                  <button onClick={() => setActionTab('send')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${actionTab === 'send' ? 'bg-jpay-yellow text-black shadow-lg' : 'text-gray-500'}`}>
                      {t.send}
                  </button>
                  <button onClick={() => setActionTab('history')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${actionTab === 'history' ? 'bg-gray-800 text-white shadow-lg' : 'text-gray-500'}`}>
                      {t.transactions}
                  </button>
              </div>

              {/* Action Content */}
              <div className="bg-jpay-dark border border-gray-800 rounded-3xl p-6 shadow-xl min-h-[300px]">
                  {actionTab === 'receive' && (
                      <div className="flex flex-col items-center animate-fade-in">
                          <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">{t.network}</label>
                          <div className="flex gap-2 mb-6">
                              <span className="px-4 py-1.5 bg-jpay-yellow/10 border border-jpay-yellow/30 text-jpay-yellow text-xs rounded-full font-bold">TRC20</span>
                              <span className="px-4 py-1.5 bg-gray-800 border border-gray-700 text-gray-400 text-xs rounded-full">ERC20</span>
                              <span className="px-4 py-1.5 bg-gray-800 border border-gray-700 text-gray-400 text-xs rounded-full">BEP20</span>
                          </div>

                          <div className="bg-white p-4 rounded-2xl mb-6 shadow-white/5 shadow-lg">
                              <QrCode size={180} className="text-black" />
                          </div>

                          <div className="w-full bg-black border border-gray-700 p-4 rounded-xl flex items-center justify-between mb-4">
                              <div className="overflow-hidden">
                                  <div className="text-xs text-gray-500 mb-1">{t.address}</div>
                                  <div className="text-sm font-mono truncate text-gray-300">TX8...jKs92Fsl39d</div>
                              </div>
                              <button onClick={handleCopy} className="p-2 hover:bg-gray-800 rounded-lg transition">
                                  {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-jpay-yellow" />}
                              </button>
                          </div>
                          
                          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
                              <Share2 size={16} /> Partager l'adresse
                          </button>
                      </div>
                  )}

                  {actionTab === 'send' && (
                      <div className="space-y-6 animate-fade-in">
                          <div>
                              <label className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">{t.address}</label>
                              <div className="flex gap-2">
                                  <input 
                                    type="text" 
                                    placeholder="Coller l'adresse ou scanner QR" 
                                    className="flex-1 bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jpay-yellow transition" 
                                    value={sendAddress}
                                    onChange={(e) => setSendAddress(e.target.value)}
                                  />
                                  <button className="bg-gray-800 p-3 rounded-xl text-white hover:bg-gray-700"><QrCode size={20}/></button>
                              </div>
                          </div>

                          <div>
                              <label className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">{t.network}</label>
                              <div className="grid grid-cols-3 gap-2">
                                  {NETWORKS.map(net => (
                                      <button
                                        key={net.id}
                                        onClick={() => setSelectedNetwork(net.id)}
                                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${selectedNetwork === net.id ? 'bg-jpay-yellow/10 border-jpay-yellow text-white' : 'bg-black border-gray-700 text-gray-500 hover:border-gray-500'}`}
                                      >
                                          <net.icon size={20} className={`mb-1 ${selectedNetwork === net.id ? 'text-jpay-yellow' : 'text-gray-500'}`} />
                                          <span className={`text-[10px] font-bold ${selectedNetwork === net.id ? 'text-jpay-yellow' : 'text-gray-500'}`}>{net.id}</span>
                                      </button>
                                  ))}
                              </div>
                          </div>

                          <div>
                              <label className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">{t.amount}</label>
                              <div className="relative">
                                  <input 
                                    type="number" 
                                    placeholder="0.00" 
                                    className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jpay-yellow transition" 
                                    value={sendAmount}
                                    onChange={(e) => setSendAmount(e.target.value)}
                                  />
                                  <span className="absolute right-4 top-3.5 text-gray-500 font-bold text-sm">{selectedAsset.symbol}</span>
                              </div>
                              <div className="text-right text-xs text-gray-500 mt-2">Dispo: {selectedAsset.balance} {selectedAsset.symbol}</div>
                          </div>

                          <div className="pt-2">
                              <div className="flex justify-between text-sm mb-2">
                                  <span className="text-gray-400">Délai estimé</span>
                                  <span className="text-white">{currentNetworkData.time}</span>
                              </div>
                              <div className="flex justify-between text-sm mb-6">
                                  <span className="text-gray-400">{t.fees}</span>
                                  <span className="text-red-400">{currentNetworkData.fee.toFixed(2)} USDT</span>
                              </div>
                              <button 
                                onClick={handleSendInitiate}
                                disabled={!sendAmount || !sendAddress}
                                className="w-full bg-jpay-yellow text-jpay-black py-4 rounded-xl font-bold text-lg hover:bg-jpay-yellowHover transition shadow-lg shadow-jpay-yellow/20 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                  {t.confirm}
                              </button>
                          </div>
                      </div>
                  )}

                  {actionTab === 'history' && (
                    <div className="space-y-4 animate-fade-in">
                        {assetTransactions.length > 0 ? (
                            assetTransactions.map(tx => (
                                <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-800/50 transition border border-transparent hover:border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                                            {getTransactionIcon(tx.type)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm capitalize text-white">{tx.type}</div>
                                            <div className="text-xs text-gray-500">{tx.date} {tx.counterparty ? `• ${tx.counterparty}` : ''}</div>
                                        </div>
                                    </div>
                                    <div className={`text-sm font-bold ${tx.type === 'receive' ? 'text-green-500' : 'text-white'}`}>
                                        {tx.type === 'receive' ? '+' : '-'}{tx.amount} {tx.currency}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10">
                                <History className="w-12 h-12 text-gray-700 mx-auto mb-3" />
                                <p className="text-gray-500 text-sm">Aucune transaction récente</p>
                            </div>
                        )}
                    </div>
                  )}
              </div>

              {/* Confirmation Modal */}
              {isConfirming && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsConfirming(false)}></div>
                      <div className="bg-jpay-dark border border-gray-800 p-6 rounded-3xl w-full max-w-sm relative z-10 animate-fade-in-up">
                          <h3 className="text-xl font-bold text-white text-center mb-6">{t.confirmTransaction}</h3>
                          
                          <div className="bg-black/50 p-4 rounded-2xl mb-6 text-center border border-gray-800">
                              <span className="text-gray-400 text-sm block mb-1">Total à envoyer</span>
                              <span className="text-3xl font-bold text-white block">{sendAmount} <span className="text-lg text-jpay-yellow">{selectedAsset.symbol}</span></span>
                          </div>

                          <div className="space-y-3 mb-6">
                              <div className="flex justify-between text-sm">
                                  <span className="text-gray-400">À l'adresse</span>
                                  <span className="text-white font-mono truncate w-32 text-right">{sendAddress}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                  <span className="text-gray-400">Réseau</span>
                                  <span className="text-white font-bold flex items-center gap-1">
                                      {selectedNetwork}
                                      <span className="text-xs font-normal text-gray-500">({currentNetworkData.time})</span>
                                  </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                  <span className="text-gray-400">Frais Réseau</span>
                                  <span className="text-red-400">{currentNetworkData.fee.toFixed(2)} USDT</span>
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
                                  onClick={handleConfirmTransaction}
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
  }

  // List View
  return (
    <div className="space-y-6 pb-20">
      <div className="flex justify-between items-end">
          <h1 className="text-2xl font-bold">{t.wallet}</h1>
          <div className="text-sm text-gray-400">Total: <span className="text-white font-bold">$12,450.20</span></div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {assets.map(asset => (
           <div 
              key={asset.id} 
              onClick={() => setSelectedAsset(asset)}
              className="bg-[#1a1a1a] p-5 rounded-2xl flex items-center justify-between border border-transparent hover:border-gray-700 active:scale-98 transition cursor-pointer group shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)] hover:scale-[1.01]"
           >
              <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-black border border-gray-800 shadow-md group-hover:scale-110 transition" style={{ color: asset.color }}>
                      {asset.icon}
                  </div>
                  <div>
                      <div className="font-bold text-lg text-white group-hover:text-jpay-yellow transition">{asset.name}</div>
                      <div className="text-sm text-gray-500">
                         ${asset.valueUsd.toLocaleString()} 
                         <span className={asset.change24h >= 0 ? 'text-green-500 ml-2 text-xs' : 'text-red-500 ml-2 text-xs'}>
                           {asset.change24h > 0 ? '▲' : '▼'} {Math.abs(asset.change24h)}%
                         </span>
                      </div>
                  </div>
              </div>
              <div className="text-right">
                  <div className="font-bold text-lg text-white">{asset.balance} {asset.symbol}</div>
                  <div className="text-sm text-gray-500">${(asset.balance * asset.valueUsd).toFixed(2)}</div>
              </div>
          </div>
        ))}
      </div>
      
      {/* Add Asset Button */}
      <button className="w-full py-4 border border-dashed border-gray-700 text-gray-500 rounded-2xl hover:text-white hover:border-gray-500 transition flex items-center justify-center gap-2">
          <span className="text-2xl">+</span> Ajouter un token
      </button>
    </div>
  );
};
