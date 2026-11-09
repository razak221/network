import React from 'react';

export default function Logo({ 
  size = 'md', 
  showTagline = true, 
  variant = 'dark',
  className = '' 
}) {
  // Size presets for the icon mark
  const sizeMap = {
    sm: { icon: 'w-8 h-8', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-11 h-11', text: 'text-xl sm:text-2xl', sub: 'text-[10px]' },
    lg: { icon: 'w-16 h-16', text: 'text-3xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const isDark = variant === 'dark'; // dark text for light background

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none shrink-0 ${className}`}>
      {/* Handcrafted Vector Monogram SVG Icon */}
      <div className={`${currentSize.icon} shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="45%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D97706" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Hexagonal Diamond Architectural Crest */}
          <path 
            d="M50 8 L88 28 L88 72 L50 92 L12 72 L12 28 Z" 
            stroke="url(#logoGoldGrad)" 
            strokeWidth="3" 
            fill={isDark ? "#FFFFFF" : "#0F172A"}
            filter="url(#logoShadow)" 
          />

          {/* Inner Accent Inset */}
          <path 
            d="M50 17 L80 33 L80 67 L50 83 L20 67 L20 33 Z" 
            stroke={isDark ? "#F1F5F9" : "#1E293B"} 
            strokeWidth="1.5" 
            fill="none" 
          />

          {/* Stylized 'P' Loop */}
          <path 
            d="M36 68 L36 32 L48 32 C55 32 58 36 58 42 C58 48 55 52 48 52 L36 52" 
            stroke="url(#logoGoldGrad)" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Interlocking 'D' Arc */}
          <path 
            d="M48 32 L54 32 C63 32 69 38 69 50 C69 62 63 68 54 68 L42 68" 
            stroke="url(#logoGoldGrad)" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Apex 4-Point Star Sparkle */}
          <path 
            d="M50 4 Q50 13 54 13 Q50 13 50 22 Q50 13 46 13 Q50 13 50 4 Z" 
            fill="url(#logoGoldGrad)" 
          />
        </svg>
      </div>

      {/* Wordmark & Brand Architecture */}
      <div className="shrink-0 flex flex-col justify-center">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className={`font-heading ${currentSize.text} font-bold tracking-tight ${
            isDark ? 'text-slate-900 group-hover:text-amber-700' : 'text-white group-hover:text-amber-400'
          } transition-colors leading-none`}>
            PRISTINE<span className="text-amber-600 font-extrabold ml-0.5">DECORE</span>
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center mt-1 whitespace-nowrap">
            <span className={`text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-bold whitespace-nowrap ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Event Workforce &amp; Production
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

