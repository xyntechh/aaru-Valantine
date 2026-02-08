import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function WelcomePage({ onNext, crushName }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-800 to-pink-900 flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts background - subtle pink hearts */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 60 + 30}px`,
            animation: `float ${Math.random() * 6 + 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Soft glow orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className={`text-center z-10 max-w-5xl px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Heart Icon with elegant glow */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-32 h-32 text-pink-200 fill-pink-200 blur-2xl opacity-40" />
          </div>
          <Heart 
            className="w-32 h-32 mx-auto text-pink-100 fill-pink-100 relative" 
            style={{
              filter: 'drop-shadow(0 0 25px rgba(251, 207, 232, 0.6))',
              animation: 'heartbeat 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Main Heading - Elegant Serif Font */}
        <h1 
          className="text-7xl md:text-9xl font-bold mb-8 leading-tight tracking-wide text-pink-50"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 40px rgba(251, 207, 232, 0.4), 0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Hey Beautiful!
        </h1>

        {/* Crush Name with elegant border */}
        <div className="mb-10 relative inline-block">
          <div className="absolute -top-4 -right-4 animate-bounce" style={{ animationDuration: '2s' }}>
            <Sparkles className="w-7 h-7 text-pink-200" style={{ filter: 'drop-shadow(0 0 8px rgba(251, 207, 232, 0.8))' }} />
          </div>
          <div className="absolute -bottom-4 -left-4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}>
            <Sparkles className="w-6 h-6 text-pink-200" style={{ filter: 'drop-shadow(0 0 8px rgba(251, 207, 232, 0.8))' }} />
          </div>
          <p 
            className="text-6xl md:text-8xl font-bold text-pink-50 px-12 py-5 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-pink-200/30 shadow-2xl transition-all duration-500 hover:bg-white/15 hover:border-pink-200/50"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 30px rgba(251, 207, 232, 0.5)',
            }}
          >
            {crushName}
          </p>
        </div>

        {/* Message - Clean Typography */}
        <p 
          className="text-xl md:text-2xl text-pink-100 mb-16 font-light max-w-3xl mx-auto leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          I've been thinking about this for a while...<br/>
          <span className="text-2xl md:text-3xl font-medium text-pink-50 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            There's something special I need to tell you
          </span>
        </p>

        {/* CTA Button - Elegant & Smooth */}
        <button
          onClick={onNext}
          className="group relative text-white font-semibold py-6 px-20 rounded-full text-2xl shadow-2xl transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 bg-white/20 backdrop-blur-sm border-2 border-pink-200/40 hover:bg-white/30 hover:border-pink-100/60"
          style={{
            fontFamily: "'Inter', sans-serif",
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 via-rose-300/20 to-pink-300/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          <span className="flex items-center gap-4 relative">
            Let's Go
            <Heart className="w-6 h-6 fill-current transition-all duration-500 group-hover:scale-125" />
          </span>
        </button>

        {/* Scroll hint */}
        <div className="mt-16 animate-bounce" style={{ animationDuration: '2.5s' }}>
          <div className="w-6 h-10 border-2 border-pink-200/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-pink-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.12); }
          20% { transform: scale(1); }
          30% { transform: scale(1.08); }
          40% { transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.08;
          }
          50% { 
            transform: translateY(-40px) translateX(20px) rotate(10deg);
            opacity: 0.12;
          }
        }
      `}</style>
    </div>
  );
}