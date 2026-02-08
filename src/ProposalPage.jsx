import React, { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

export default function ProposalPage({ onYes, crushName }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const moveNoButton = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;

    setNoButtonPosition({ x: randomX, y: randomY });
  };

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

      <div
        className={`text-center z-10 max-w-4xl w-full px-4 sm:px-6 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
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

        {/* Main Question - Responsive Typography */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 leading-tight text-pink-50 px-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 30px rgba(251, 207, 232, 0.4), 0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          Will You Be My Valentine? 💕
        </h1>

        {/* Subtitle - Responsive */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-pink-100 font-medium mb-10 sm:mb-14 px-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          Just one 'YES' is all I need, {crushName}! 🥺
        </p>

        {/* Buttons Container - Responsive */}
        <div className="relative min-h-[200px] sm:min-h-[220px] flex items-center justify-center mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center w-full max-w-lg">
            {/* YES Button - Responsive */}
            <button
              onClick={onYes}
              className="group relative text-white font-bold py-4 sm:py-5 md:py-6 px-10 sm:px-12 md:px-14 rounded-full text-xl sm:text-2xl md:text-3xl shadow-2xl transition-all duration-500 ease-out hover:scale-105 z-20 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 border-2 border-green-300/30 hover:border-green-200/50 w-full sm:w-auto"
              style={{
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-300/30 via-emerald-300/30 to-green-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <span className="flex items-center justify-center gap-2 sm:gap-3 relative">
                YES! ❤️
              </span>
            </button>

            {/* NO Button (Smooth Moving) - Responsive */}
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
              className="text-white font-bold py-4 sm:py-5 md:py-6 px-10 sm:px-12 md:px-14 rounded-full text-xl sm:text-2xl md:text-3xl shadow-2xl bg-white/15 backdrop-blur-sm border-2 border-pink-200/30 hover:bg-white/20 cursor-pointer w-full sm:w-auto"
              style={{
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              No 😢
            </button>
          </div>
        </div>

        {/* Hint Text - Responsive */}
        <p 
          className="text-base sm:text-lg md:text-xl text-pink-100/90 italic font-light max-w-2xl mx-auto px-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          The 'No' button won't work... because you're meant to say YES! 😉
        </p>
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

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
      `}</style>
    </div>
  );
}