
import React, { useState } from 'react';
import { Language, PaymentRequest } from '../types';
import { TRANSLATIONS, MOCK_ADMIN_REQUESTS } from '../constants';
import { ShieldCheck, ArrowDownLeft, ArrowUpRight, Check, X, Smartphone, Building, User, Info, DollarSign } from 'lucide-react';

interface AdminDashboardProps {
  lang: Language;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [requests, setRequests] = useState<PaymentRequest[]>(MOCK_ADMIN_REQUESTS);
  const [filter, setFilter] = useState<'all' | 'deposit' | 'withdraw'>('all');
  const [showConfirm, setShowConfirm] = useState<{ id: string, action: 'approve' | 'reject' } | null>(null);

  const pendingDeposits = requests.filter(r => r.type === 'deposit' && r.status === 'pending');
  const pendingWithdrawals = requests.filter(r => r.type === 'withdraw' && r.status === 'pending');

  const handleAction = () => {
      if (!showConfirm) return;

      setRequests(prev => prev.map(req => {
          if (req.id === showConfirm.id) {
              return { ...req, status: showConfirm.action === 'approve' ? 'approved' : 'rejected' };
          }
          return req;
      }));
      setShowConfirm(null);
  };

  const getFilteredRequests = () => {
      return requests.filter(r => r.status === 'pending' && (filter === 'all' || r.type === filter));
  };

  return (
    <div className="animate-fade-in pb-20">
       <div className="flex justify-between items-end mb-8">
           <div>
               <h1 className="text-2xl font-bold flex items-center gap-2">
                   <ShieldCheck className="text-jpay-yellow" />
                   {t.adminDashboard}
               </h1>
               <p className="text-sm text-gray-400">{t.admin_sub}</p>
           </div>
           <div className="text-right">
               <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Admin</div>
               <div className="text-white font-bold">admin@jpay.ht</div>
           </div>
       </div>

       {/* Stats Cards */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
           <div className="bg-[#1a1a1a] border border-gray-800 p-4 rounded-2xl">
               <div className="flex justify-between items-start mb-2">
                   <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><ArrowDownLeft size={20} /></div>
                   <span className="text-2xl font-bold text-white">{pendingDeposits.length}</span>
               </div>
               <div className="text-xs text-gray-500">{t.pendingDeposits}</div>
           </div>
           <div className="bg-[#1a1a1a] border border-gray-800 p-4 rounded-2xl">
               <div className="flex justify-between items-start mb-2">
                   <div className="p-2 bg-red-500/10 rounded-lg text-red-500"><ArrowUpRight size={20} /></div>
                   <span className="text-2xl font-bold text-white">{pendingWithdrawals.length}</span>
               </div>
               <div className="text-xs text-gray-500">{t.pendingWithdrawals}</div>
           </div>
           <div className="bg-[#1a1a1a] border border-gray-800 p-4 rounded-2xl">
               <div className="flex justify-between items-start mb-2">
                   <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><User size={20} /></div>
                   <span className="text-2xl font-bold text-white">1,240</span>
               </div>
               <div className="text-xs text-gray-500">Utilisateurs Total</div>
           </div>
           <div className="bg-[#1a1a1a] border border-gray-800 p-4 rounded-2xl">
               <div className="flex justify-between items-start mb-2">
                   <div className="p-2 bg-jpay-yellow/10 rounded-lg text-jpay-yellow"><DollarSign size={20} /></div>
                   <span className="text-2xl font-bold text-white">$45k</span>
               </div>
               <div className="text-xs text-gray-500">Volume 24h</div>
           </div>
       </div>

       {/* Filters */}
       <div className="flex bg-gray-900 p-1 rounded-xl mb-6 w-fit">
           <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition ${filter === 'all' ? 'bg-gray-800 text-white shadow' : 'text-gray-500 hover:text-white'}`}
           >
               Tout
           </button>
           <button 
                onClick={() => setFilter('deposit')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition ${filter === 'deposit' ? 'bg-gray-800 text-white shadow' : 'text-gray-500 hover:text-white'}`}
           >
               Dépôts
           </button>
           <button 
                onClick={() => setFilter('withdraw')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition ${filter === 'withdraw' ? 'bg-gray-800 text-white shadow' : 'text-gray-500 hover:text-white'}`}
           >
               Retraits
           </button>
       </div>

       {/* Requests List */}
       <div className="space-y-4">
           {getFilteredRequests().length === 0 ? (
               <div className="text-center py-12 border border-dashed border-gray-800 rounded-3xl">
                   <p className="text-gray-500">Aucune demande en attente.</p>
               </div>
           ) : (
               getFilteredRequests().map(req => (
                   <div key={req.id} className="bg-[#121212] border border-gray-800 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-gray-700 transition">
                       
                       <div className="flex items-center gap-4">
                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${req.type === 'deposit' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                               {req.type === 'deposit' ? <ArrowDownLeft size={24} /> : <ArrowUpRight size={24} />}
                           </div>
                           <div>
                               <div className="flex items-center gap-2 mb-1">
                                   <span className={`text-xs font-bold px-2 py-0.5 rounded border ${req.type === 'deposit' ? 'border-green-500/30 text-green-500 bg-green-500/10' : 'border-red-500/30 text-red-500 bg-red-500/10'}`}>
                                       {req.type === 'deposit' ? 'DÉPÔT' : 'RETRAIT'}
                                   </span>
                                   <span className="text-sm font-bold text-white">{req.userName}</span>
                               </div>
                               <div className="text-2xl font-bold text-white mb-1">
                                   {req.amountFiat.toLocaleString()} {req.currencyFiat}
                                   <span className="text-xs font-normal text-gray-500 ml-2">≈ {req.amountCrypto} {req.currencyCrypto}</span>
                               </div>
                               <div className="flex items-center gap-3 text-xs text-gray-400">
                                   <span className="flex items-center gap-1">
                                       {['MonCash', 'Natcash'].includes(req.method) ? <Smartphone size={12}/> : <Building size={12}/>}
                                       {req.method} ({req.methodIdentifier})
                                   </span>
                                   {req.proofId && (
                                       <span className="bg-gray-800 px-2 py-0.5 rounded text-gray-300 flex items-center gap-1">
                                           <Info size={10} /> Ref: {req.proofId}
                                       </span>
                                   )}
                                   <span>{req.date}</span>
                               </div>
                           </div>
                       </div>

                       <div className="flex gap-2">
                           <button 
                                onClick={() => setShowConfirm({ id: req.id, action: 'reject' })}
                                className="px-4 py-3 bg-red-500/10 text-red-500 border border-red-500/30 rounded-xl hover:bg-red-500/20 font-bold transition flex items-center gap-2"
                           >
                               <X size={18} /> {t.reject}
                           </button>
                           <button 
                                onClick={() => setShowConfirm({ id: req.id, action: 'approve' })}
                                className="px-6 py-3 bg-green-500 text-black rounded-xl hover:bg-green-400 font-bold transition flex items-center gap-2 shadow-lg shadow-green-500/20"
                           >
                               <Check size={18} /> {t.approve}
                           </button>
                       </div>
                   </div>
               ))
           )}
       </div>

       {/* Confirmation Modal */}
       {showConfirm && (
           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowConfirm(null)}></div>
               <div className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-3xl w-full max-w-sm relative z-10 animate-fade-in-up">
                   <h3 className="text-xl font-bold text-white text-center mb-4">
                       {showConfirm.action === 'approve' ? 'Valider la transaction ?' : 'Refuser la transaction ?'}
                   </h3>
                   <p className="text-center text-gray-400 text-sm mb-6">
                       {showConfirm.action === 'approve' 
                         ? "Les fonds seront libérés/crédités sur le compte de l'utilisateur." 
                         : "L'utilisateur sera notifié du refus."}
                   </p>
                   <div className="flex gap-3">
                       <button 
                           onClick={() => setShowConfirm(null)}
                           className="flex-1 py-3 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition"
                       >
                           {t.cancel}
                       </button>
                       <button 
                           onClick={handleAction}
                           className={`flex-1 py-3 rounded-xl font-bold transition text-white ${showConfirm.action === 'approve' ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600 hover:bg-red-500'}`}
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
