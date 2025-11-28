
import React from 'react';

interface LogoProps {
  variant?: 'icon' | 'full' | 'horizontal';
  className?: string;
  lightMode?: boolean; // If true, text is black (for white backgrounds)
  monochrome?: boolean; // If true, logo is single color (current text color)
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = "h-10", lightMode = false, monochrome = false }) => {
  const yellow = "#FCD535";
  const blue = "#00205B";
  const red = "#D21034";
  const dark = "#121212";
  
  // Logic: 
  // - If monochrome: everything is currentColor.
  // - If lightMode (white bg): Text is Dark, Icon Primary is Yellow.
  // - Default (dark bg): Text is Yellow (Updated), Icon Primary is Yellow.
  
  const fillPrimary = monochrome ? 'currentColor' : yellow;
  const fillSecondary = monochrome ? 'currentColor' : blue;
  const fillTertiary = monochrome ? 'currentColor' : red;
  const fillBase = monochrome ? 'currentColor' : dark;
  
  // Update: Text is now Yellow in dark mode for stronger branding
  const fillText = monochrome ? 'currentColor' : (lightMode ? dark : yellow);
  
  const strokeColor = monochrome ? 'currentColor' : yellow;

  return (
    <svg 
      viewBox={variant === 'icon' ? "0 0 60 60" : "0 0 240 60"} 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* --- LOGO ICON (The "JP" Shield) --- */}
      <g transform={variant === 'icon' ? "" : "translate(0, 0)"}>
        {/* Background Shield/Hexagon Shape */}
        <path 
          d="M30 2 L55 15 V40 L30 58 L5 40 V15 L30 2Z" 
          fill={monochrome ? 'none' : fillBase} 
          stroke={strokeColor} 
          strokeWidth={monochrome ? "3" : "2"}
        />
        
        {/* The "J" / Lightning Shape */}
        <path 
          d="M32 12 L48 12 L40 28 L48 28 L28 50 L32 32 L20 32 L32 12Z" 
          fill={fillPrimary}
        />
        
        {/* Haitian Flag Accents - More vibrant opacity */}
        {!monochrome && (
          <>
            <path d="M5 15 L15 20 L5 25 V15Z" fill={fillSecondary} opacity="1" />
            <path d="M55 15 L45 20 L55 25 V15Z" fill={fillTertiary} opacity="1" />
          </>
        )}
      </g>

      {/* --- WORDMARK "JPAY" --- */}
      {variant !== 'icon' && (
        <g transform="translate(70, 0)">
          {/* J */}
          <path d="M15 10 H25 V38 C25 45 20 48 12 48 C6 48 2 45 2 40 V38 H11 V40 C11 41 12 42 14 42 C16 42 17 41 17 38 V10 H15Z" fill={fillText} />
          {/* P */}
          <path d="M32 10 H46 C54 10 58 14 58 22 C58 30 54 34 46 34 H41 V48 H32 V10ZM41 27 H46 C49 27 50 26 50 22 C50 18 49 17 46 17 H41 V27Z" fill={fillText} />
          {/* A */}
          <path d="M72 10 L84 48 H75 L72 38 H60 L57 48 H48 L60 10 H72ZM66 19 L63 31 H69 L66 19Z" fill={fillText} />
          {/* Y */}
          <path d="M88 10 L98 28 L108 10 H118 L102 36 V48 H94 V36 L78 10 H88Z" fill={fillText} />
          
          {/* Dot Accent - Blue in Lightmode, White in Darkmode to contrast with Yellow text */}
          <circle cx="124" cy="44" r="4" fill={lightMode ? blue : '#FFFFFF'} />
        </g>
      )}
    </svg>
  );
};
