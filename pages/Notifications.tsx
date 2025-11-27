
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, NOTIFICATIONS } from '../constants';
import { Bell, ShieldAlert, ArrowDownLeft, TrendingUp, Check, Wallet, Zap, Lock } from 'lucide-react';

interface NotificationsProps {
  lang: Language;
}

export const Notifications: React.FC<NotificationsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const renderIcon = (type: string) => {
      switch(type) {
          case 'security': 
            return (
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center relative overflow-hidden group-hover:border-red-500/50 transition">
                    <div className="absolute inset-0 bg-red-500/5 blur-lg"></div>
                    <ShieldAlert className="text-red-500 relative z-10" size={24} />
                    <div className="absolute -bottom-2 -right-2 text-red-900/20 z-0">
                        <Lock size={32} />
                    </div>
                </div>
            );
          case 'market': 
            return (
                <div className="w-12 h-12 rounded-2xl bg-jpay-yellow/10 border border-jpay-yellow/20 flex items-center justify-center relative overflow-hidden group-hover:border-jpay-yellow/50 transition">
                     <div className="absolute inset-0 bg-jpay-yellow/5 blur-lg"></div>
                    <TrendingUp className="text-jpay-yellow relative z-10" size={24} />
                    <div className="absolute -bottom-2 -right-2 text-yellow-900/20 z-0">
                        <Zap size={32} />
                    </div>
                </div>
            );
          case 'tx': 
            return (
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center relative overflow-hidden group-hover:border-green-500/50 transition">
                     <div className="absolute inset-0 bg-green-500/5 blur-lg"></div>
                    <ArrowDownLeft className="text-green-500 relative z-10" size={24} />
                    <div className="absolute -bottom-2 -right-2 text-green-900/20 z-0">
                        <Wallet size={32} />
                    </div>
                </div>
            );
          default: 
            return (
                <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center relative">
                    <Bell className="text-gray-400" size={24} />
                </div>
            );
      }
  };

  return (
    <div className="animate-fade-in pb-20 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">{t.notifications}</h1>
          <button className="text-xs text-jpay-yellow font-bold uppercase tracking-wider hover:text-white transition">Tout marquer comme lu</button>
      </div>

      <div className="space-y-4">
          {NOTIFICATIONS.map(notif => (
              <div 
                key={notif.id} 
                className={`p-4 rounded-3xl border flex gap-4 transition duration-300 group hover:bg-gray-800/50 ${!notif.read ? 'bg-[#161616] border-gray-700' : 'bg-transparent border-transparent hover:border-gray-800'}`}
              >
                  <div className="flex-shrink-0">
                      {renderIcon(notif.type)}
                  </div>
                  <div className="flex-1 py-1">
                      <div className="flex justify-between items-start mb-1">
                          <h3 className={`font-bold text-sm ${!notif.read ? 'text-white' : 'text-gray-400'}`}>{notif.title}</h3>
                          <span className="text-[10px] text-gray-500 font-medium bg-gray-900 px-2 py-1 rounded-full border border-gray-800">{notif.time}</span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">{notif.message}</p>
                      
                      {!notif.read && (
                          <div className="mt-2 flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-jpay-yellow animate-pulse"></span>
                             <span className="text-[10px] text-jpay-yellow font-bold uppercase tracking-wider">Nouveau</span>
                          </div>
                      )}
                  </div>
              </div>
          ))}

          <div className="text-center py-12 opacity-50">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-800">
                  <Check className="text-gray-600" size={24} />
              </div>
              <p className="text-gray-500 text-sm font-medium">Vous êtes à jour !</p>
          </div>
      </div>
    </div>
  );
};
