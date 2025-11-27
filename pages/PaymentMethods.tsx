import React, { useState } from 'react';
import { Language, UserPaymentMethod } from '../types';
import { TRANSLATIONS, MOCK_USER_PAYMENT_METHODS } from '../constants';
import { ChevronLeft, Plus, Trash2, Smartphone, Building, Check, AlertTriangle } from 'lucide-react';

interface PaymentMethodsProps {
  lang: Language;
  onNavigate: (view: string) => void;
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];
  const [methods, setMethods] = useState<UserPaymentMethod[]>(MOCK_USER_PAYMENT_METHODS);
  const [isAdding, setIsAdding] = useState(false);
  const [newType, setNewType] = useState<'mobile' | 'bank'>('mobile');
  const [formData, setFormData] = useState({
    provider: 'MonCash',
    identifier: '',
    ownerName: ''
  });
  
  // Confirmation State
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const confirmDelete = () => {
    if (deleteConfirmId) {
      setMethods(methods.filter(m => m.id !== deleteConfirmId));
      setDeleteConfirmId(null);
    }
  };

  const handleSave = () => {
    if (!formData.identifier || !formData.ownerName) return;
    
    const newMethod: UserPaymentMethod = {
      id: Date.now().toString(),
      type: newType,
      provider: formData.provider,
      identifier: formData.identifier,
      ownerName: formData.ownerName
    };
    
    setMethods([...methods, newMethod]);
    setIsAdding(false);
    setFormData({ provider: 'MonCash', identifier: '', ownerName: '' });
  };

  const renderIcon = (provider: string) => {
      if (['MonCash', 'Natcash'].includes(provider)) return <Smartphone size={20} className="text-white"/>;
      return <Building size={20} className="text-white"/>;
  };

  const getProviderColor = (provider: string) => {
      switch(provider) {
          case 'MonCash': return 'bg-red-600';
          case 'Natcash': return 'bg-orange-500';
          case 'Unibank': return 'bg-red-800';
          case 'Sogebank': return 'bg-red-700';
          case 'BNC': return 'bg-green-700';
          default: return 'bg-gray-700';
      }
  };

  if (isAdding) {
      return (
        <div className="animate-fade-in pb-20 max-w-lg mx-auto">
             <div className="flex items-center gap-3 mb-8">
                <button onClick={() => setIsAdding(false)} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                    <ChevronLeft size={20} />
                </button>
                <h1 className="text-xl font-bold">{t.addPm}</h1>
            </div>

            <div className="space-y-6">
                 {/* Animated Type Selector */}
                <div className="relative bg-black border border-gray-800 p-1.5 rounded-2xl flex h-16 shadow-inner">
                    {/* The Sliding Glider Background */}
                    <div 
                        className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl bg-jpay-yellow shadow-[0_0_15px_rgba(252,213,53,0.3)] transition-all duration-300 ease-out z-0 ${
                            newType === 'mobile' ? 'left-1.5' : 'left-[calc(50%+3px)]'
                        }`}
                    />

                    <button 
                        onClick={() => { setNewType('mobile'); setFormData({...formData, provider: 'MonCash'}); }}
                        className={`relative z-10 flex-1 flex items-center justify-center gap-3 font-bold text-sm transition-colors duration-200 ${newType === 'mobile' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        <Smartphone size={20} className={`transition-transform duration-300 ${newType === 'mobile' ? 'scale-110' : ''}`}/> 
                        {t.mobileMoney}
                    </button>
                    <button 
                        onClick={() => { setNewType('bank'); setFormData({...formData, provider: 'Unibank'}); }}
                        className={`relative z-10 flex-1 flex items-center justify-center gap-3 font-bold text-sm transition-colors duration-200 ${newType === 'bank' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        <Building size={20} className={`transition-transform duration-300 ${newType === 'bank' ? 'scale-110' : ''}`}/> 
                        {t.bankTransfer}
                    </button>
                </div>

                {/* Form Fields */}
                <div className="space-y-4 animate-fade-in">
                    <div>
                        <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2 block">{t.provider}</label>
                        <div className="grid grid-cols-2 gap-3">
                            {newType === 'mobile' ? (
                                <>
                                    <button 
                                        onClick={() => setFormData({...formData, provider: 'MonCash'})}
                                        className={`p-4 rounded-xl border flex items-center gap-2 transition-all ${formData.provider === 'MonCash' ? 'border-jpay-yellow bg-jpay-yellow/10 ring-1 ring-jpay-yellow' : 'border-gray-700 bg-gray-800 hover:bg-gray-700'}`}
                                    >
                                        <div className="w-4 h-4 rounded-full bg-red-600 shadow-sm"></div> <span className="font-bold text-sm">MonCash</span>
                                    </button>
                                     <button 
                                        onClick={() => setFormData({...formData, provider: 'Natcash'})}
                                        className={`p-4 rounded-xl border flex items-center gap-2 transition-all ${formData.provider === 'Natcash' ? 'border-jpay-yellow bg-jpay-yellow/10 ring-1 ring-jpay-yellow' : 'border-gray-700 bg-gray-800 hover:bg-gray-700'}`}
                                    >
                                        <div className="w-4 h-4 rounded-full bg-orange-500 shadow-sm"></div> <span className="font-bold text-sm">Natcash</span>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setFormData({...formData, provider: 'Unibank'})} className={`p-4 rounded-xl border flex items-center gap-2 transition-all ${formData.provider === 'Unibank' ? 'border-jpay-yellow bg-jpay-yellow/10 ring-1 ring-jpay-yellow' : 'border-gray-700 bg-gray-800 hover:bg-gray-700'}`}>
                                        <div className="w-3 h-3 rounded-full bg-red-800"></div> <span className="font-bold text-sm">Unibank</span>
                                    </button>
                                    <button onClick={() => setFormData({...formData, provider: 'Sogebank'})} className={`p-4 rounded-xl border flex items-center gap-2 transition-all ${formData.provider === 'Sogebank' ? 'border-jpay-yellow bg-jpay-yellow/10 ring-1 ring-jpay-yellow' : 'border-gray-700 bg-gray-800 hover:bg-gray-700'}`}>
                                        <div className="w-3 h-3 rounded-full bg-red-700"></div> <span className="font-bold text-sm">Sogebank</span>
                                    </button>
                                     <button onClick={() => setFormData({...formData, provider: 'BNC'})} className={`p-4 rounded-xl border flex items-center gap-2 transition-all ${formData.provider === 'BNC' ? 'border-jpay-yellow bg-jpay-yellow/10 ring-1 ring-jpay-yellow' : 'border-gray-700 bg-gray-800 hover:bg-gray-700'}`}>
                                        <div className="w-3 h-3 rounded-full bg-green-700"></div> <span className="font-bold text-sm">BNC</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2 block">
                            {newType === 'mobile' ? t.phoneNumber : t.accountNumber}
                        </label>
                        <input 
                            type="text" 
                            placeholder={newType === 'mobile' ? "Ex: 3700-0000" : "Ex: 100-202-303"} 
                            className="w-full bg-jpay-dark border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-jpay-yellow focus:ring-1 focus:ring-jpay-yellow transition"
                            value={formData.identifier}
                            onChange={(e) => setFormData({...formData, identifier: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2 block">{t.accountHolder}</label>
                        <input 
                            type="text" 
                            placeholder="Nom complet" 
                            className="w-full bg-jpay-dark border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-jpay-yellow focus:ring-1 focus:ring-jpay-yellow transition"
                            value={formData.ownerName}
                            onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                        />
                    </div>
                </div>

                <button 
                    onClick={handleSave}
                    disabled={!formData.identifier || !formData.ownerName}
                    className="w-full bg-jpay-yellow text-jpay-black py-4 rounded-xl font-bold text-lg hover:bg-jpay-yellowHover transition disabled:opacity-50 disabled:cursor-not-allowed mt-8 shadow-lg shadow-jpay-yellow/20"
                >
                    {t.save}
                </button>
            </div>
        </div>
      )
  }

  return (
    <div className="animate-fade-in pb-20 relative">
      <div className="flex items-center gap-3 mb-6">
            <button onClick={() => onNavigate('profile')} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                <ChevronLeft size={20} />
            </button>
            <div>
                <h1 className="text-2xl font-bold">{t.pmTitle}</h1>
                <p className="text-sm text-gray-400">{t.pmSub}</p>
            </div>
      </div>

      <div className="space-y-4">
          {methods.length === 0 ? (
              <div className="text-center py-12 bg-gray-900 rounded-2xl border border-dashed border-gray-700">
                  <p className="text-gray-500 mb-4">{t.noPm}</p>
              </div>
          ) : (
              methods.map(method => (
                  <div key={method.id} className="bg-jpay-dark border border-gray-800 p-5 rounded-2xl flex items-center justify-between group hover:border-gray-600 transition">
                      <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${getProviderColor(method.provider)}`}>
                              {renderIcon(method.provider)}
                          </div>
                          <div>
                              <div className="font-bold text-white flex items-center gap-2">
                                  {method.provider}
                                  <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded border border-gray-700">{method.type === 'mobile' ? 'Mobile' : 'Bank'}</span>
                              </div>
                              <div className="text-sm text-gray-300">{method.identifier}</div>
                              <div className="text-xs text-gray-500 uppercase">{method.ownerName}</div>
                          </div>
                      </div>
                      <button 
                        onClick={() => setDeleteConfirmId(method.id)}
                        className="p-3 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition"
                      >
                          <Trash2 size={20} />
                      </button>
                  </div>
              ))
          )}

          <button 
            onClick={() => setIsAdding(true)}
            className="w-full py-4 border border-dashed border-jpay-yellow text-jpay-yellow rounded-2xl hover:bg-jpay-yellow/5 transition flex items-center justify-center gap-2 font-bold mt-4"
          >
              <Plus size={20} /> {t.addPm}
          </button>
      </div>

       {/* Security Note */}
       <div className="mt-8 p-4 bg-blue-900/10 border border-blue-900/30 rounded-xl flex gap-3">
           <div className="mt-1"><Check size={16} className="text-blue-400"/></div>
           <div className="text-xs text-blue-200 leading-relaxed">
               Les informations de paiement sont utilisées uniquement pour les échanges P2P. Elles sont visibles par votre contrepartie uniquement lors d'une transaction active.
           </div>
       </div>

       {/* Confirmation Modal */}
       {deleteConfirmId && (
           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setDeleteConfirmId(null)}></div>
               <div className="bg-jpay-dark border border-gray-800 p-6 rounded-3xl w-full max-w-sm relative z-10 animate-fade-in-up">
                   <div className="w-12 h-12 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                       <AlertTriangle size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white text-center mb-2">{t.areYouSure}</h3>
                   <p className="text-gray-400 text-center text-sm mb-6">{t.irreversible}</p>
                   
                   <div className="flex gap-3">
                       <button 
                           onClick={() => setDeleteConfirmId(null)}
                           className="flex-1 py-3 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition"
                       >
                           {t.cancel}
                       </button>
                       <button 
                           onClick={confirmDelete}
                           className="flex-1 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-500 transition"
                       >
                           {t.yesDelete}
                       </button>
                   </div>
               </div>
           </div>
       )}
    </div>
  );
};