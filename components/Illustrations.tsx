
import React from 'react';

export const IllustrationInstant = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCD535" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FCD535" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Background Circle */}
    <circle cx="100" cy="80" r="60" fill="url(#grad1)" />
    
    {/* Phone Shape */}
    <rect x="70" y="30" width="60" height="100" rx="8" fill="#1A1A1A" stroke="#333" strokeWidth="2" />
    <rect x="75" y="35" width="50" height="90" rx="4" fill="#050505" />
    
    {/* Screen Elements */}
    <circle cx="100" cy="60" r="15" fill="#FCD535" className="animate-[pulse_3s_infinite]" />
    <path d="M95 60 L100 65 L108 55" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Flying Coins */}
    <circle cx="40" cy="100" r="8" fill="#FCD535" className="animate-[bounce_3s_infinite]" style={{ animationDelay: '0s' }} />
    <circle cx="160" cy="60" r="6" fill="#FCD535" className="animate-[bounce_3.5s_infinite]" style={{ animationDelay: '1s' }} />
    <circle cx="50" cy="40" r="5" fill="#FCD535" opacity="0.5" className="animate-[bounce_4s_infinite]" style={{ animationDelay: '0.5s' }} />

    {/* Speed Lines */}
    <path d="M140 90 L170 90" stroke="#FCD535" strokeWidth="2" strokeLinecap="round" opacity="0.5" className="animate-[pulse_1s_infinite]" />
    <path d="M145 100 L165 100" stroke="#FCD535" strokeWidth="2" strokeLinecap="round" opacity="0.3" className="animate-[pulse_1s_infinite]" style={{ animationDelay: '0.2s' }} />
  </svg>
);

export const IllustrationMarketplace = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left User Bubble */}
    <g className="animate-[float_6s_ease-in-out_infinite]">
        <circle cx="60" cy="70" r="25" fill="#1A1A1A" stroke="#00205B" strokeWidth="2" />
        <circle cx="60" cy="65" r="8" fill="#00205B" />
        <path d="M48 85 Q60 95 72 85" stroke="#00205B" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Right User Bubble */}
    <g className="animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
        <circle cx="140" cy="90" r="25" fill="#1A1A1A" stroke="#D21034" strokeWidth="2" />
        <circle cx="140" cy="85" r="8" fill="#D21034" />
        <path d="M128 105 Q140 115 152 105" stroke="#D21034" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Exchange Arrows */}
    <path d="M85 60 L115 60 L110 55" stroke="#FCD535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[pulse_2s_infinite]" />
    <path d="M115 100 L85 100 L90 105" stroke="#FCD535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[pulse_2s_infinite]" style={{ animationDelay: '1s' }} />

    {/* Chat Bubble */}
    <rect x="90" y="30" width="30" height="20" rx="4" fill="#333" opacity="0.8" />
    <circle cx="100" cy="40" r="2" fill="#FFF" />
    <circle cx="108" cy="40" r="2" fill="#FFF" />
  </svg>
);

export const IllustrationSecurity = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
     {/* Shield Base */}
     <path d="M100 30 C100 30 150 40 150 90 C150 130 100 150 100 150 C100 150 50 130 50 90 C50 40 100 30 100 30 Z" fill="#1A1A1A" stroke="#22C55E" strokeWidth="2" />
     
     {/* Inner Lock */}
     <rect x="85" y="80" width="30" height="25" rx="4" fill="#22C55E" />
     <path d="M90 80 V70 C90 65 110 65 110 70 V80" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
     
     {/* Scan Line Animation */}
     <rect x="50" y="30" width="100" height="120" fill="url(#scanGradient)" className="animate-[float_3s_linear_infinite]" opacity="0.3" style={{ mixBlendMode: 'overlay' }} />
     
     <defs>
       <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
         <stop offset="0%" stopColor="transparent" />
         <stop offset="50%" stopColor="#22C55E" />
         <stop offset="100%" stopColor="transparent" />
       </linearGradient>
     </defs>
  </svg>
);

export const IllustrationLocalPayments = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Center Hub (USDT) */}
    <g transform="translate(100, 60)">
       <circle cx="0" cy="0" r="28" fill="#1A1A1A" stroke="#26A17B" strokeWidth="2" />
       {/* T Symbol */}
       <path d="M-8 -8 H8 V8 H-8 Z" fill="none" />
       <path d="M-10 -5 H10 M0 -5 V12" stroke="#26A17B" strokeWidth="4" strokeLinecap="round" />
       <circle cx="0" cy="0" r="32" stroke="#26A17B" strokeWidth="1" opacity="0.3" className="animate-[ping_3s_infinite]" />
    </g>

    {/* Bottom Left (MonCash) */}
    <g transform="translate(50, 130)" className="animate-[float_4s_ease-in-out_infinite]">
       <circle cx="0" cy="0" r="22" fill="#D21034" filter="url(#glow)" fillOpacity="0.2"/>
       <circle cx="0" cy="0" r="18" fill="#1A1A1A" stroke="#D21034" strokeWidth="2" />
       <text x="0" y="5" textAnchor="middle" fill="#D21034" fontSize="14" fontWeight="bold" fontFamily="sans-serif">M</text>
    </g>

    {/* Bottom Right (Natcash) */}
    <g transform="translate(150, 130)" className="animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
       <circle cx="0" cy="0" r="22" fill="#F97316" filter="url(#glow)" fillOpacity="0.2"/>
       <circle cx="0" cy="0" r="18" fill="#1A1A1A" stroke="#F97316" strokeWidth="2" />
       <text x="0" y="5" textAnchor="middle" fill="#F97316" fontSize="14" fontWeight="bold" fontFamily="sans-serif">N</text>
    </g>

    {/* Connecting Flow Lines */}
    <path d="M50 110 Q60 80 80 70" stroke="#D21034" strokeWidth="2" strokeDasharray="4 4" className="animate-[pulse_2s_infinite]" />
    <path d="M150 110 Q140 80 120 70" stroke="#F97316" strokeWidth="2" strokeDasharray="4 4" className="animate-[pulse_2s_infinite]" style={{ animationDelay: '0.5s' }} />
    
    {/* Flow Particles */}
    <circle r="3" fill="#FFF">
        <animateMotion dur="2s" repeatCount="indefinite" path="M50 110 Q60 80 80 70" />
    </circle>
    <circle r="3" fill="#FFF">
        <animateMotion dur="2s" repeatCount="indefinite" path="M150 110 Q140 80 120 70" begin="0.5s" />
    </circle>

  </svg>
);
