import React from 'react';
import { Logo } from '../components/Logo';
import { Download, Copy, Smartphone, Palette, Type, PenTool, Layout, CreditCard } from 'lucide-react';

export const Branding: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20 max-w-7xl mx-auto">
      <div className="text-center mb-16 pt-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-jpay-yellow via-white to-jpay-yellow">
          JPAY Brand Identity
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The official visual language for JPAY. Premium, futuristic, and tailored for the Haitian crypto community.
        </p>
      </div>

      {/* 1. LOGO PACK */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
           <PenTool className="text-jpay-yellow" />
           <h2 className="text-2xl font-bold text-white">Logo Variations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Main Logo Dark */}
          <div className="bg-[#121212] border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 group hover:border-jpay-yellow transition">
             <div className="flex-1 flex items-center">
                 <Logo variant="full" className="h-12 w-auto" />
             </div>
             <div className="w-full pt-4 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500">
                 <span>Primary Dark</span>
                 <button className="hover:text-white"><Download size={14} /></button>
             </div>
          </div>

          {/* Main Logo Light */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 group hover:border-jpay-yellow transition">
             <div className="flex-1 flex items-center">
                 <Logo variant="full" lightMode className="h-12 w-auto" />
             </div>
             <div className="w-full pt-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-400">
                 <span>Primary Light</span>
                 <button className="hover:text-black"><Download size={14} /></button>
             </div>
          </div>

          {/* Icon Only */}
          <div className="bg-jpay-dark border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 group hover:border-jpay-yellow transition">
             <div className="flex-1 flex items-center">
                 <Logo variant="icon" className="h-16 w-auto" />
             </div>
             <div className="w-full pt-4 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500">
                 <span>App Icon</span>
                 <button className="hover:text-white"><Download size={14} /></button>
             </div>
          </div>

           {/* Monochrome */}
          <div className="bg-jpay-yellow border border-yellow-500 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 group hover:border-black transition">
             <div className="flex-1 flex items-center text-black">
                 <Logo variant="full" monochrome className="h-12 w-auto" />
             </div>
             <div className="w-full pt-4 border-t border-black/10 flex justify-between items-center text-xs text-black/60">
                 <span>Monochrome Black</span>
                 <button className="hover:text-black"><Download size={14} /></button>
             </div>
          </div>
        </div>
      </section>

      {/* 2. COLOR PALETTE */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
           <Palette className="text-jpay-yellow" />
           <h2 className="text-2xl font-bold text-white">Color Palette</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <ColorCard name="JPAY Yellow" hex="#FCD535" bg="bg-jpay-yellow" text="text-black" />
            <ColorCard name="Deep Black" hex="#121212" bg="bg-jpay-black" text="text-white" border />
            <ColorCard name="Haitian Blue" hex="#00205B" bg="bg-jpay-blue" text="text-white" />
            <ColorCard name="Haitian Red" hex="#D21034" bg="bg-jpay-red" text="text-white" />
            <ColorCard name="Surface Gray" hex="#1E1E1E" bg="bg-jpay-dark" text="text-white" border />
            <ColorCard name="Text Gray" hex="#9CA3AF" bg="bg-gray-400" text="text-black" />
        </div>
      </section>

      {/* 3. TYPOGRAPHY */}
      <section className="mb-20">
         <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
           <Type className="text-jpay-yellow" />
           <h2 className="text-2xl font-bold text-white">Typography</h2>
        </div>
        <div className="bg-jpay-dark border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <span className="text-xs text-jpay-yellow uppercase tracking-widest font-bold mb-4 block">Primary Font Family</span>
                    <h3 className="text-5xl font-bold text-white mb-2">Inter</h3>
                    <p className="text-gray-400 mb-8">Google Fonts (Sans-Serif)</p>
                    <div className="space-y-4">
                        <div className="flex items-end gap-4">
                            <span className="text-4xl font-light text-white">Aa</span>
                            <span className="text-sm text-gray-500">Light 300</span>
                        </div>
                        <div className="flex items-end gap-4">
                            <span className="text-4xl font-normal text-white">Aa</span>
                            <span className="text-sm text-gray-500">Regular 400</span>
                        </div>
                         <div className="flex items-end gap-4">
                            <span className="text-4xl font-medium text-white">Aa</span>
                            <span className="text-sm text-gray-500">Medium 500</span>
                        </div>
                         <div className="flex items-end gap-4">
                            <span className="text-4xl font-bold text-white">Aa</span>
                            <span className="text-sm text-gray-500">Bold 700</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                     <div>
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2 block">Heading 1</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Trusted by Haiti.</h1>
                     </div>
                     <div>
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2 block">Heading 2</span>
                        <h2 className="text-3xl font-bold text-white">Secure Transactions</h2>
                     </div>
                     <div>
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2 block">Body Text</span>
                        <p className="text-gray-400 leading-relaxed">
                            JPAY provides a secure and efficient way to manage cryptocurrencies. 
                            Designed specifically for the Haitian community, it bridges the gap between traditional banking and the future of finance.
                        </p>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. ASSET MOCKUPS */}
      <section className="mb-20">
         <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
           <Layout className="text-jpay-yellow" />
           <h2 className="text-2xl font-bold text-white">Brand Assets</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Business Card Mockup */}
            <div className="space-y-4">
                 <h3 className="text-lg font-bold text-white">Business Card</h3>
                 <div className="relative bg-gray-900 rounded-xl p-8 flex flex-col md:flex-row gap-8 justify-center items-center shadow-2xl overflow-hidden">
                      {/* Front */}
                      <div className="w-80 h-48 bg-[#121212] rounded-xl relative overflow-hidden shadow-lg border border-gray-800 flex items-center justify-center">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-jpay-yellow/5 rounded-full blur-2xl"></div>
                           <Logo variant="full" className="h-10 w-auto relative z-10" />
                      </div>
                      {/* Back */}
                      <div className="w-80 h-48 bg-jpay-yellow rounded-xl relative overflow-hidden shadow-lg flex flex-col justify-between p-6 text-black">
                          <Logo variant="icon" monochrome className="h-8 w-auto absolute top-6 right-6 opacity-20" />
                          <div>
                              <div className="font-bold text-lg uppercase tracking-wider">Jean Pierre</div>
                              <div className="text-xs font-medium opacity-70">CEO & Founder</div>
                          </div>
                          <div className="text-xs font-medium space-y-1">
                              <div>+509 3700 0000</div>
                              <div>hello@jpay.ht</div>
                              <div>www.jpay.ht</div>
                          </div>
                      </div>
                 </div>
            </div>

            {/* Social Media Banner */}
             <div className="space-y-4">
                 <h3 className="text-lg font-bold text-white">Social Media Header</h3>
                 <div className="w-full aspect-[3/1] bg-gradient-to-r from-jpay-black to-[#0a0a0a] rounded-xl border border-gray-800 relative overflow-hidden flex items-center justify-between px-10">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                     <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-jpay-blue rounded-full blur-[100px] opacity-20"></div>
                     <div className="absolute -left-20 -top-20 w-80 h-80 bg-jpay-red rounded-full blur-[100px] opacity-10"></div>
                     
                     <div className="relative z-10">
                         <div className="inline-block px-3 py-1 bg-jpay-yellow text-black text-xs font-bold rounded-full mb-2">#1 IN HAITI</div>
                         <h2 className="text-3xl font-bold text-white">The Future of <br/>Money is Here.</h2>
                     </div>
                     <div className="relative z-10 hidden md:block">
                         <Smartphone className="text-gray-700 w-32 h-32 opacity-20 transform rotate-12" />
                     </div>
                 </div>
            </div>

            {/* App Icon Grid */}
            <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">App Icon</h3>
                <div className="flex gap-6">
                    <div className="w-24 h-24 bg-jpay-yellow rounded-[22px] flex items-center justify-center shadow-lg shadow-jpay-yellow/10">
                         <Logo variant="icon" monochrome className="w-14 h-14 text-black" />
                    </div>
                    <div className="w-24 h-24 bg-black rounded-[22px] flex items-center justify-center border border-gray-800 shadow-lg">
                         <Logo variant="icon" className="w-14 h-14" />
                    </div>
                </div>
            </div>

             {/* Splash Screen Mockup */}
             <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Splash Screen</h3>
                <div className="w-full h-64 bg-black rounded-xl border border-gray-800 relative overflow-hidden flex flex-col items-center justify-center">
                     <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-32 h-32 bg-jpay-yellow rounded-full blur-[80px] opacity-10 animate-pulse"></div>
                     </div>
                     <Logo variant="icon" className="w-16 h-16 mb-4 animate-bounce" />
                     <Logo variant="full" className="w-32 h-auto" />
                     <div className="absolute bottom-6 text-gray-600 text-[10px] uppercase tracking-[0.2em]">Secure Wallet</div>
                </div>
            </div>

        </div>
      </section>

      {/* 5. DOWNLOAD ALL */}
      <div className="text-center border-t border-gray-800 pt-16">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition flex items-center justify-center gap-2 mx-auto shadow-2xl">
              <Download size={20} />
              Download Full Brand Kit (.zip)
          </button>
          <p className="text-gray-500 text-sm mt-4">Includes .AI, .SVG, .PNG, and Font Files.</p>
      </div>

    </div>
  );
};

const ColorCard: React.FC<{ name: string, hex: string, bg: string, text: string, border?: boolean }> = ({ name, hex, bg, text, border }) => (
    <div className={`rounded-xl overflow-hidden ${border ? 'border border-gray-800' : ''}`}>
        <div className={`h-24 w-full ${bg} flex items-center justify-center`}>
            {/* Color preview */}
        </div>
        <div className="p-3 bg-jpay-dark">
            <div className="text-white font-bold text-sm">{name}</div>
            <div className="flex justify-between items-center mt-1">
                <code className="text-xs text-gray-500 font-mono">{hex}</code>
                <button className="text-gray-500 hover:text-white" title="Copy Hex">
                    <Copy size={12} />
                </button>
            </div>
        </div>
    </div>
);