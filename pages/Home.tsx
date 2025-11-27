
import React, { useMemo } from 'react';
import { Download, Upload, Users, Send, Bell, TrendingUp, Gift, Smartphone, Info, Lightbulb, AlertTriangle, ArrowRight, ExternalLink } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Currency, Transaction, Language, FeedItem } from '../types';
import { TRANSLATIONS, MOCK_P2P_OFFERS, MOCK_FEED_ITEMS } from '../constants';

interface HomeProps {
  assets: Currency[];
  transactions: Transaction[];
  lang: Language;
  onNavigate: (view: string) => void;
}

// Mock chart data
const chartData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 6890 },
  { name: 'Sat', value: 6390 },
  { name: 'Sun', value: 8490 },
];

export const Home: React.FC<HomeProps> = ({ assets, transactions, lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];
  const [showBalance, setShowBalance] = React.useState(true);
  
  const totalBalance = assets.reduce((acc, asset) => acc + (asset.balance * asset.valueUsd), 0);

  // Filter feed items based on assets the user actually holds
  const filteredFeed = useMemo(() => {
    // Get IDs of assets with balance > 0
    const heldAssetIds = assets.filter(a => a.balance > 0).map(a => a.id);
    
    return MOCK_FEED_ITEMS.filter(item => {
      // If it's related to a specific asset, show only if user holds it
      if (item.relatedAssetId) {
        return heldAssetIds.includes(item.relatedAssetId);
      }
      // Otherwise show general news/alerts
      return true;
    }).sort((a, b) => {
       // High priority first
       if (a.priority === 'high' && b.priority !== 'high') return -1;
       if (a.priority !== 'high' && b.priority === 'high') return 1;
       return 0;
    });
  }, [assets]);

  const renderFeedItem = (item: FeedItem) => {
      switch (item.type) {
        case 'news':
          return (
            <div key={item.id} onClick={() => item.actionLink && onNavigate(item.actionLink)} className="bg-jpay-dark border border-gray-800 rounded-2xl p-0 overflow-hidden hover:border-gray-600 transition group cursor-pointer flex flex-row">
                 {item.imageUrl && (
                     <div className="w-24 md:w-32 bg-cover bg-center" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                 )}
                 <div className="p-4 flex-1">
                     <div className="flex justify-between items-start mb-1">
                         <span className="text-[10px] text-jpay-yellow font-bold uppercase tracking-wider bg-jpay-yellow/10 px-2 py-0.5 rounded">News</span>
                         <span className="text-[10px] text-gray-500">{item.timestamp}</span>
                     </div>
                     <h4 className="text-white font-bold text-sm mb-1 line-clamp-2">{item.title}</h4>
                     <p className="text-gray-400 text-xs line-clamp-2">{item.description}</p>
                 </div>
            </div>
          );
        case 'alert':
        case 'market':
          return (
            <div key={item.id} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 hover:bg-gray-800/50 transition cursor-pointer relative overflow-hidden flex flex-col justify-between">
                 <div className={`absolute top-0 left-0 w-1 h-full ${item.type === 'alert' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                 <div className="flex gap-3">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.type === 'alert' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                         {item.type === 'alert' ? <AlertTriangle size={20}/> : <TrendingUp size={20}/>}
                     </div>
                     <div className="flex-1">
                         <div className="flex justify-between items-start">
                             <h4 className="text-white font-bold text-sm">{item.title}</h4>
                             <span className="text-[10px] text-gray-500">{item.timestamp}</span>
                         </div>
                         <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.description}</p>
                     </div>
                 </div>
                 {item.actionLabel && (
                     <div className="mt-3 pl-14">
                        <button 
                            onClick={() => item.actionLink && onNavigate(item.actionLink)}
                            className={`text-xs font-bold px-4 py-2 rounded-lg transition flex items-center gap-1.5 w-fit ${
                                item.type === 'alert' 
                                ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20' 
                                : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
                            }`}
                        >
                            {item.actionLabel} <ArrowRight size={12}/>
                        </button>
                     </div>
                 )}
            </div>
          );
        case 'suggestion':
          return (
             <div key={item.id} className="bg-gradient-to-r from-blue-900/20 to-jpay-dark border border-blue-500/20 rounded-2xl p-4 relative">
                 <div className="flex gap-3 items-start">
                     <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                         <Lightbulb size={16} />
                     </div>
                     <div>
                         <h4 className="text-blue-100 font-bold text-sm">{item.title}</h4>
                         <p className="text-blue-200/60 text-xs mt-1 leading-relaxed">{item.description}</p>
                         {item.actionLabel && (
                             <button 
                                onClick={() => item.actionLink && onNavigate(item.actionLink)}
                                className="mt-2 text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 w-fit"
                             >
                                 {item.actionLabel}
                             </button>
                         )}
                     </div>
                 </div>
             </div>
          );
        default:
          return null;
      }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Top Welcome Section (Desktop) */}
      <div className="hidden md:flex justify-between items-center mb-6">
        <div>
          <h2 className="text-gray-400 text-sm">{t.welcome}</h2>
          <h1 className="text-2xl font-bold text-white">Jean-Pierre</h1>
        </div>
        <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('notifications')} className="bg-jpay-dark border border-gray-700 p-3 rounded-full relative hover:bg-gray-700 transition">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-jpay-red rounded-full border-2 border-jpay-dark"></span>
            </button>
             <button onClick={() => onNavigate('profile')} className="w-10 h-10 rounded-full bg-jpay-yellow text-jpay-black font-bold flex items-center justify-center">
                JP
            </button>
        </div>
      </div>

      {/* --- BONUS BANNER --- */}
      <div className="bg-gradient-to-r from-jpay-yellow via-yellow-400 to-yellow-600 rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-yellow-500/20 transform hover:scale-[1.01] transition duration-300">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Gift className="text-jpay-black w-6 h-6 animate-pulse" />
            </div>
            <div>
               <h3 className="font-bold text-jpay-black text-lg leading-none mb-1">{t.bonusTitle}</h3>
               <p className="text-jpay-black/80 text-xs md:text-sm font-medium">{t.bonusDesc}</p>
            </div>
         </div>
         <div className="text-right">
             <span className="block font-black text-2xl md:text-3xl text-jpay-black">$2.00</span>
             <span className="text-[10px] text-jpay-black/70 font-bold uppercase tracking-wider">USD CREDITED</span>
         </div>
      </div>

      {/* Main Balance Card */}
      <div className="bg-gradient-to-br from-[#1E1E1E] via-black to-[#0a0a0a] border border-gray-800 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group">
         <div className="absolute -top-20 -right-20 w-64 h-64 bg-jpay-yellow opacity-[0.05] rounded-full blur-[80px] group-hover:opacity-[0.08] transition duration-700"></div>
         <div className="absolute bottom-[-50px] left-[-20px] w-48 h-48 bg-jpay-blue opacity-[0.08] rounded-full blur-[60px]"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
              <span>{t.totalBalance}</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">
              {showBalance ? `$${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '****'}
              <span className="text-sm text-gray-500 font-normal ml-2">USD</span>
            </div>
            <div className="flex items-center mt-3 text-green-400 text-sm font-medium">
              <span className="bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-lg flex items-center">
                <TrendingUp size={14} className="mr-1" /> +$234.50 (2.4%)
              </span>
              <span className="ml-3 text-gray-500 text-xs">Aujourd'hui</span>
            </div>
          </div>
          
          <div className="h-16 w-32 hidden md:block">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                <Area type="monotone" dataKey="value" stroke="#FCD535" strokeWidth={2} fillOpacity={0} />
                </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-4 gap-3 mt-8 relative z-10">
          <ActionButton delay="0ms" icon={Download} label={t.deposit} onClick={() => onNavigate('deposit')} color="bg-jpay-yellow text-jpay-black hover:bg-white" highlight />
          <ActionButton delay="100ms" icon={Upload} label={t.withdraw} onClick={() => onNavigate('withdraw')} color="bg-gray-800 text-white hover:bg-gray-700" />
          <ActionButton delay="200ms" icon={Users} label={t.p2pAction || "P2P"} onClick={() => onNavigate('p2p')} color="bg-gray-800 text-white hover:bg-gray-700" />
          <ActionButton delay="300ms" icon={Send} label={t.transfer} onClick={() => onNavigate('wallet')} color="bg-gray-800 text-white hover:bg-gray-700" />
        </div>
      </div>

      {/* --- PERSONALIZED SMART FEED (NEW) --- */}
      <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
              <div>
                  <h3 className="text-lg font-bold text-white">{t.feedTitle}</h3>
                  <p className="text-xs text-gray-500">{t.feedSub}</p>
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFeed.map(renderFeedItem)}
          </div>
      </div>

      {/* --- NATCASH INFO --- */}
      <div 
        onClick={() => onNavigate('deposit')}
        className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:border-orange-500/50 transition group"
      >
          <div className="flex items-center gap-4">
             <div className="bg-orange-600/10 border border-orange-600/20 p-3 rounded-xl group-hover:bg-orange-600/20 transition">
                  <Smartphone className="text-orange-500 w-6 h-6" />
             </div>
             <div>
                 <h3 className="font-bold text-white text-sm md:text-base flex items-center gap-2">
                     {t.natcashInfo}
                 </h3>
                 <p className="text-xs text-gray-400 group-hover:text-gray-300 transition">
                     Service rapide & sécurisé
                 </p>
             </div>
          </div>
          <div className="flex flex-col items-end">
             <div className="flex items-center gap-1.5 bg-red-900/30 border border-red-500/20 px-3 py-1.5 rounded-lg">
                 <Info size={14} className="text-red-400"/>
                 <span className="text-xs font-bold text-red-400">{t.natcashFee}</span>
             </div>
          </div>
      </div>

      {/* --- RECENT P2P OFFERS SECTION --- */}
      <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
              <h3 className="text-lg font-bold text-white">{t.p2pRecent}</h3>
              <button onClick={() => onNavigate('p2p')} className="text-jpay-yellow text-xs font-medium hover:underline tracking-wide uppercase">
                  Voir tout
              </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {MOCK_P2P_OFFERS.slice(0, 3).map((offer) => (
                  <div key={offer.id} className="min-w-[240px] bg-jpay-dark border border-gray-800 rounded-2xl p-4 hover:border-jpay-yellow/50 transition cursor-pointer" onClick={() => onNavigate('p2p')}>
                      <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
                                  {offer.user.substring(0, 2).toUpperCase()}
                              </div>
                              <div className="text-xs text-gray-300 font-bold truncate max-w-[80px]">{offer.user}</div>
                          </div>
                          <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${offer.type === 'buy' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                              {offer.type === 'buy' ? 'ACHAT' : 'VENTE'}
                          </span>
                      </div>
                      <div className="mb-2">
                          <div className="text-lg font-bold text-white">{offer.price} HTG</div>
                          <div className="text-[10px] text-gray-500">Limites: {offer.limits}</div>
                      </div>
                      <div className="flex gap-1 flex-wrap">
                          {offer.methods.map(m => (
                              <span key={m} className="text-[9px] px-1.5 py-0.5 bg-gray-800 rounded border border-gray-700 text-gray-400">{m}</span>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Market Ticker */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h3 className="text-lg font-bold text-white">{t.assets}</h3>
          <button onClick={() => onNavigate('wallet')} className="text-jpay-yellow text-xs font-medium hover:underline tracking-wide uppercase">
            Voir tout
          </button>
        </div>
        <div className="space-y-3">
            {assets.slice(0, 4).map(asset => (
                <div 
                    key={asset.id} 
                    onClick={() => onNavigate('wallet')}
                    className="bg-[#1a1a1a] p-4 rounded-2xl flex items-center justify-between border border-transparent hover:border-gray-700 transition cursor-pointer active:scale-98"
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-black border border-gray-800" style={{ color: asset.color }}>
                            {asset.icon}
                        </div>
                        <div>
                            <div className="font-bold text-sm text-white">{asset.name}</div>
                            <div className="text-xs text-gray-500">{asset.symbol}</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-sm text-white">{asset.balance.toFixed(asset.id === 'bonus' ? 2 : 4)} {asset.symbol}</div>
                        <div className="text-xs text-gray-500">${(asset.balance * asset.valueUsd).toFixed(2)}</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const ActionButton: React.FC<{ icon: React.ElementType, label: string, onClick: () => void, color: string, highlight?: boolean, delay?: string }> = ({ icon: Icon, label, onClick, color, highlight, delay }) => (
  <button 
    onClick={onClick} 
    className="flex flex-col items-center gap-2 group w-full animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <div className={`w-full aspect-square md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-active:scale-90 shadow-lg ${color} ${highlight ? 'shadow-jpay-yellow/20' : 'shadow-black/50'}`}>
      <Icon className={`w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-rotate-12`} strokeWidth={2.5} />
    </div>
    <span className={`text-[10px] md:text-xs font-medium ${highlight ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{label}</span>
  </button>
);
