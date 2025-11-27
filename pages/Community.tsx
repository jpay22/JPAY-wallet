import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Globe, Heart, Users } from 'lucide-react';

interface CommunityProps {
  lang: Language;
}

export const Community: React.FC<CommunityProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="animate-fade-in pb-20">
       <div className="text-center mb-8 pt-4">
          <div className="inline-block p-3 rounded-full bg-blue-900/30 text-blue-400 mb-4 border border-blue-500/30">
              <Users size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">{t.commTitle}</h1>
          <p className="text-gray-400">{t.commSub}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-[#1a1a1a] p-5 rounded-2xl border border-gray-800 text-center">
              <div className="text-3xl font-bold text-white mb-1">54k</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Membres Actifs</div>
          </div>
          <div className="bg-[#1a1a1a] p-5 rounded-2xl border border-gray-800 text-center">
              <div className="text-3xl font-bold text-white mb-1">$2.1M</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Volume Échangé</div>
          </div>
      </div>

      {/* Map Graphic representation */}
      <div className="bg-gradient-to-b from-blue-900/20 to-black rounded-3xl p-6 border border-blue-900/30 relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[50px] rounded-full"></div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Globe size={18} className="text-blue-400"/> Diaspora Connect</h3>
          
          <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between bg-black/40 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                      <span className="text-2xl">🇭🇹</span>
                      <div className="text-sm">
                          <div className="font-bold text-white">Haïti</div>
                          <div className="text-xs text-gray-500">Port-au-Prince</div>
                      </div>
                  </div>
                  <div className="h-1 flex-1 mx-4 bg-gray-700 rounded-full relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-3">
                      <span className="text-2xl">🇺🇸</span>
                      <div className="text-sm text-right">
                          <div className="font-bold text-white">USA</div>
                          <div className="text-xs text-gray-500">Miami</div>
                      </div>
                  </div>
              </div>

               <div className="flex items-center justify-between bg-black/40 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                      <span className="text-2xl">🇭🇹</span>
                      <div className="text-sm">
                          <div className="font-bold text-white">Haïti</div>
                          <div className="text-xs text-gray-500">Cap-Haïtien</div>
                      </div>
                  </div>
                  <div className="h-1 flex-1 mx-4 bg-gray-700 rounded-full relative">
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-3">
                      <span className="text-2xl">🇨🇦</span>
                      <div className="text-sm text-right">
                          <div className="font-bold text-white">Canada</div>
                          <div className="text-xs text-gray-500">Montréal</div>
                      </div>
                  </div>
              </div>
          </div>

          <button className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white text-sm transition">
              Inviter un ami de la diaspora
          </button>
      </div>

      {/* Community Projects */}
      <h3 className="text-lg font-bold mb-4 px-2">Projets JPAY</h3>
      <div className="space-y-3">
          <div className="bg-jpay-dark p-4 rounded-2xl border border-gray-800 flex gap-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500">
                  <Heart size={24} />
              </div>
              <div>
                  <h4 className="font-bold text-white">Soutien Scolaire</h4>
                  <p className="text-xs text-gray-400 mb-2">1% des frais de transaction aide à financer des écoles en zone rurale.</p>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="w-3/4 bg-red-500 h-full rounded-full"></div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};