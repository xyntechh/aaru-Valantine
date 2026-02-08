import React, { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

export default function ProposalPage({ onYes, crushName }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const moveNoButton = () => {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;

    setNoButtonPosition({ x: randomX, y: randomY });
  };

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

      <div
        className={`text-center z-10 max-w-4xl px-6 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Heart Icon with elegant glow */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-28 h-28 text-pink-200 fill-pink-200 blur-2xl opacity-40" />
          </div>
          <Heart 
            className="w-28 h-28 mx-auto text-pink-100 fill-pink-100 relative" 
            style={{
              filter: 'drop-shadow(0 0 25px rgba(251, 207, 232, 0.6))',
              animation: 'heartbeat 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Main Question - Elegant Typography */}
        <h1
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-pink-50"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 40px rgba(251, 207, 232, 0.4), 0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Will You Be My Valentine? 💕
        </h1>

        {/* Subtitle */}
        <p 
          className="text-2xl md:text-3xl text-pink-100 font-medium mb-16"
          style={{
            fontFamily: "'Inter', sans-serif",
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          Just one 'YES' is all I need, {crushName}! 🥺
        </p>

        {/* Buttons Container */}
        <div className="relative min-h-[250px] flex items-center justify-center mb-12">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            {/* YES Button */}
            <button
              onClick={onYes}
              className="group relative text-white font-bold py-7 px-16 rounded-full text-3xl shadow-2xl transition-all duration-500 ease-out hover:scale-110 z-20 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 border-2 border-green-300/30 hover:border-green-200/50"
              style={{
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-300/30 via-emerald-300/30 to-green-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <span className="flex items-center gap-3 relative">
                YES! ❤️
              </span>
            </button>

            {/* NO Button (Smooth Moving) */}
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
              className="text-white font-bold py-7 px-16 rounded-full text-3xl shadow-2xl bg-white/15 backdrop-blur-sm border-2 border-pink-200/30 hover:bg-white/20 cursor-pointer"
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

        {/* Hint Text */}
        <p 
          className="text-lg md:text-xl text-pink-100/90 italic font-light max-w-2xl mx-auto"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          The 'No' button won't work... because you're meant to say YES! 😉
        </p>
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

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}