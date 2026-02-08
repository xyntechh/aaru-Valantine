import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function WelcomePage({ onNext, crushName }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-800 to-pink-900 flex items-center justify-center relative overflow-hidden p-4">
      {/* Floating hearts background - subtle pink hearts */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-8"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 20}px`,
            animation: `float ${Math.random() * 8 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Soft glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-25 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

      <div className={`text-center z-10 max-w-4xl w-full px-4 sm:px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Heart Icon with elegant glow - Compact */}
        <div className="mb-6 sm:mb-8 relative inline-block">
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-pink-200 fill-pink-200 blur-xl opacity-40" />
          </div>
          <Heart 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-pink-100 fill-pink-100 relative" 
            style={{
              filter: 'drop-shadow(0 0 20px rgba(251, 207, 232, 0.6))',
              animation: 'heartbeat 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Main Heading - Responsive */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-pink-50 px-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 30px rgba(251, 207, 232, 0.4), 0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          Hey Beautiful!
        </h1>

        {/* Crush Name with elegant border - Responsive */}
        <div className="mb-8 sm:mb-10 relative inline-block">
          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 animate-bounce" style={{ animationDuration: '2s' }}>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-200" style={{ filter: 'drop-shadow(0 0 6px rgba(251, 207, 232, 0.8))' }} />
          </div>
          <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pink-200" style={{ filter: 'drop-shadow(0 0 6px rgba(251, 207, 232, 0.8))' }} />
          </div>
          <p 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-50 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border-2 border-pink-200/30 shadow-2xl transition-all duration-500 hover:bg-white/15 hover:border-pink-200/50"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 25px rgba(251, 207, 232, 0.5)',
            }}
          >
            {crushName}
          </p>
        </div>

        {/* Message - Responsive Typography */}
        <p 
          className="text-base sm:text-lg md:text-xl text-pink-100 mb-10 sm:mb-14 font-light max-w-2xl mx-auto leading-relaxed px-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          I've been thinking about this for a while...<br/>
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-pink-50 italic mt-2 inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
            There's something special I need to tell you
          </span>
        </p>

        {/* CTA Button - Responsive */}
        <button
          onClick={onNext}
          className="group relative text-white font-semibold py-4 sm:py-5 md:py-6 px-10 sm:px-14 md:px-16 rounded-full text-lg sm:text-xl md:text-2xl shadow-2xl transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-1 bg-white/20 backdrop-blur-sm border-2 border-pink-200/40 hover:bg-white/30 hover:border-pink-100/60 w-full sm:w-auto max-w-xs mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 via-rose-300/20 to-pink-300/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          <span className="flex items-center justify-center gap-3 relative">
            Let's Go
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current transition-all duration-500 group-hover:scale-125" />
          </span>
        </button>

        {/* Scroll hint - Hidden on mobile */}
        <div className="mt-12 sm:mt-16 animate-bounce hidden sm:block" style={{ animationDuration: '2.5s' }}>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-pink-200/50 rounded-full mx-auto flex items-start justify-center p-1.5 sm:p-2">
            <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-pink-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.1); }
          28% { transform: scale(1); }
          42% { transform: scale(1.06); }
          56% { transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.06;
          }
          50% { 
            transform: translateY(-30px) translateX(15px) rotate(8deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
}