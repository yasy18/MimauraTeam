import React from 'react';

interface MimiProps {
  variant?: 'default' | 'waving' | 'thinking' | 'happy' | 'sad' | 'neutral' | 'calm';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Mimi: React.FC<MimiProps> = ({ variant = 'default', size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  };

  // SVG Mimi matching the exact design from Figma - soft lavender blob with simple eyes
  const renderMimi = () => {
    switch (variant) {
      case 'waving':
        return (
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`}>
            <defs>
              <linearGradient id="mimiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Body */}
            <path d="M60 10 C25 10 10 40 10 70 C10 95 20 120 35 130 C40 133 50 135 60 135 C70 135 80 133 85 130 C100 120 110 95 110 70 C110 40 95 10 60 10" fill="url(#mimiGradient)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Waving arm */}
            <path d="M95 50 C105 40 115 35 120 40 C125 45 120 55 110 60 C100 65 95 60 95 50" fill="url(#mimiGradient)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Eyes */}
            <circle cx="45" cy="55" r="5" fill="#1F1F3D"/>
            <circle cx="75" cy="55" r="5" fill="#1F1F3D"/>
            {/* Smile */}
            <path d="M50 75 Q60 85 70 75" stroke="#1F1F3D" strokeWidth="3" strokeLinecap="round" fill="none"/>
          </svg>
        );
      case 'thinking':
        return (
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`}>
            <defs>
              <linearGradient id="mimiGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Body */}
            <path d="M60 10 C25 10 10 40 10 70 C10 95 20 120 35 130 C40 133 50 135 60 135 C70 135 80 133 85 130 C100 120 110 95 110 70 C110 40 95 10 60 10" fill="url(#mimiGradient2)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Hand on chin */}
            <path d="M70 90 C75 85 80 80 85 85 C90 90 85 100 75 100 C70 100 70 95 70 90" fill="url(#mimiGradient2)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Eyes */}
            <circle cx="45" cy="55" r="5" fill="#1F1F3D"/>
            <circle cx="75" cy="55" r="5" fill="#1F1F3D"/>
            {/* Gentle smile */}
            <path d="M52 75 Q60 80 68 75" stroke="#1F1F3D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
        );
      case 'happy':
        return (
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`}>
            <defs>
              <linearGradient id="mimiGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Body */}
            <path d="M60 10 C25 10 10 40 10 70 C10 95 20 120 35 130 C40 133 50 135 60 135 C70 135 80 133 85 130 C100 120 110 95 110 70 C110 40 95 10 60 10" fill="url(#mimiGradient3)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Raised arm */}
            <path d="M90 45 C100 35 108 30 112 38 C116 46 108 55 98 58" fill="url(#mimiGradient3)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Eyes */}
            <circle cx="45" cy="55" r="5" fill="#1F1F3D"/>
            <circle cx="75" cy="55" r="5" fill="#1F1F3D"/>
            {/* Big smile */}
            <path d="M45 72 Q60 90 75 72" stroke="#1F1F3D" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Sparkles */}
            <path d="M100 25 L103 30 L108 30 L104 34 L106 39 L100 35 L94 39 L96 34 L92 30 L97 30 Z" fill="#FBBF24"/>
            <path d="M115 40 L117 43 L120 43 L118 46 L119 49 L115 47 L111 49 L112 46 L110 43 L113 43 Z" fill="#FBBF24"/>
          </svg>
        );
      case 'sad':
        return (
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`}>
            <defs>
              <linearGradient id="mimiGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Body */}
            <path d="M60 10 C25 10 10 40 10 70 C10 95 20 120 35 130 C40 133 50 135 60 135 C70 135 80 133 85 130 C100 120 110 95 110 70 C110 40 95 10 60 10" fill="url(#mimiGradient4)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Sad eyebrows */}
            <path d="M38 45 Q45 50 52 48" stroke="#1F1F3D" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M68 48 Q75 50 82 45" stroke="#1F1F3D" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Eyes */}
            <circle cx="45" cy="58" r="4" fill="#1F1F3D"/>
            <circle cx="75" cy="58" r="4" fill="#1F1F3D"/>
            {/* Sad mouth */}
            <path d="M48 82 Q60 72 72 82" stroke="#1F1F3D" strokeWidth="3" strokeLinecap="round" fill="none"/>
          </svg>
        );
      case 'calm':
        return (
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`}>
            <defs>
              <linearGradient id="mimiGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Body - slightly hunched/relaxed */}
            <path d="M60 15 C25 15 10 45 10 75 C10 100 20 120 35 128 C40 131 50 133 60 133 C70 133 80 131 85 128 C100 120 110 100 110 75 C110 45 95 15 60 15" fill="url(#mimiGradient5)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Closed peaceful eyes */}
            <path d="M38 58 Q45 53 52 58" stroke="#1F1F3D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M68 58 Q75 53 82 58" stroke="#1F1F3D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            {/* Gentle content smile */}
            <path d="M52 78 Q60 83 68 78" stroke="#1F1F3D" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        );
      case 'neutral':
        return (
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`}>
            <defs>
              <linearGradient id="mimiGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Body */}
            <path d="M60 10 C25 10 10 40 10 70 C10 95 20 120 35 130 C40 133 50 135 60 135 C70 135 80 133 85 130 C100 120 110 95 110 70 C110 40 95 10 60 10" fill="url(#mimiGradient6)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Hand holding leaf */}
            <path d="M80 85 C85 80 90 78 92 82 C94 88 88 92 82 92" fill="url(#mimiGradient6)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Leaf */}
            <path d="M90 75 Q95 70 92 65 Q88 70 90 75" fill="#6EE7B7" stroke="#34D399" strokeWidth="1"/>
            {/* Eyes */}
            <circle cx="45" cy="55" r="5" fill="#1F1F3D"/>
            <circle cx="75" cy="55" r="5" fill="#1F1F3D"/>
            {/* Gentle smile */}
            <path d="M52 75 Q60 80 68 75" stroke="#1F1F3D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`}>
            <defs>
              <linearGradient id="mimiGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Body - rounded blob shape */}
            <path d="M60 10 C25 10 10 40 10 70 C10 95 20 120 35 130 C40 133 50 135 60 135 C70 135 80 133 85 130 C100 120 110 95 110 70 C110 40 95 10 60 10" fill="url(#mimiGradientDefault)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Arms crossed */}
            <path d="M30 75 C25 70 22 65 28 62 C34 60 38 68 35 75" fill="url(#mimiGradientDefault)" stroke="#8B5CF6" strokeWidth="2"/>
            <path d="M90 75 C95 70 98 65 92 62 C86 60 82 68 85 75" fill="url(#mimiGradientDefault)" stroke="#8B5CF6" strokeWidth="2"/>
            {/* Eyes - simple, round, black */}
            <circle cx="45" cy="55" r="5" fill="#1F1F3D"/>
            <circle cx="75" cy="55" r="5" fill="#1F1F3D"/>
            {/* Gentle smile */}
            <path d="M52 78 Q60 85 68 78" stroke="#1F1F3D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
        );
    }
  };

  return renderMimi();
};

export default Mimi;
