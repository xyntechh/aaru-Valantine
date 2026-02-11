import React, { useState, useEffect, useRef } from "react";
import { Heart, Music, Volume2, VolumeX, Sparkles } from "lucide-react";
import song from "./assets/Tereishq.m4a";

export default function CelebrationPage({ crushName }) {
  const [fallingHearts, setFallingHearts] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPlayPrompt, setShowPlayPrompt] = useState(true);
  
  const audioRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Create falling hearts - reduced quantity
    const interval = setInterval(() => {
      const heart = {
        id: Math.random(),
        left: Math.random() * 100,
        emoji: ["❤️", "💕", "💖", "💗"][Math.floor(Math.random() * 4)],
        duration: Math.random() * 4 + 5,
        size: Math.random() * 15 + 20,
      };

      setFallingHearts((prev) => [...prev, heart]);

      setTimeout(() => {
        setFallingHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }, 9000);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const handlePlayMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowPlayPrompt(false);
        })
        .catch((err) => console.log("Audio play failed:", err));
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Audio play failed:", err));
      }
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-800 to-pink-900 flex items-center justify-center relative overflow-hidden p-4"
      onClick={handlePlayMusic}
    >
      {/* Floating hearts background - minimal and subtle */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`bg-${i}`}
          className="absolute opacity-5"
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

      {/* Falling Hearts Animation - less quantity */}
      {fallingHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute pointer-events-none z-30 opacity-70"
          style={{
            left: `${heart.left}%`,
            top: "-10%",
            fontSize: `${heart.size}px`,
            animation: `fall ${heart.duration}s linear`,
          }}
        >
          {heart.emoji}
        </div>
      ))}

      {/* Play Prompt Overlay */}
      {showPlayPrompt && (
        <div className="absolute inset-0 flex items-center justify-center z-40 bg-black/30 backdrop-blur-sm pointer-events-none">
          <div className="text-center animate-pulse">
            <div className="mb-4 relative inline-block">
              <div className="absolute inset-0 flex items-center justify-center">
                <Music className="w-20 h-20 sm:w-24 sm:h-24 text-pink-200 blur-2xl opacity-60" />
              </div>
              <Music className="w-20 h-20 sm:w-24 sm:h-24 text-pink-100 relative" style={{ filter: 'drop-shadow(0 0 25px rgba(251, 207, 232, 0.8))' }} />
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl text-pink-50 font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 0 30px rgba(251, 207, 232, 0.6)' }}>
              This song is specially dedicated to you 💕
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-pink-100 font-light" style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Touch anywhere on screen to play ✨
            </p>
          </div>
        </div>
      )}

      <div
        className={`text-center z-10 max-w-4xl w-full px-4 sm:px-6 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Compact Heart Icon */}
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

        {/* Main Celebration Heading - Responsive */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pink-50 mb-3 sm:mb-4 leading-tight px-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 30px rgba(251, 207, 232, 0.5), 0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          Yaaay! 🎉
        </h1>
        
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-200 mb-8 sm:mb-10 px-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 25px rgba(254, 240, 138, 0.6), 0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          Happy Valentine's Day!
        </h2>

        {/* Message Card with Glassmorphism - Responsive */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 shadow-2xl border-2 border-pink-200/30 transition-all duration-500 hover:bg-white/15">
          <p 
            className="text-3xl sm:text-4xl md:text-5xl text-pink-50 font-bold mb-4 sm:mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 20px rgba(251, 207, 232, 0.4)',
            }}
          >
            {crushName} ❤️
          </p>
          <p 
            className="text-lg sm:text-xl md:text-2xl text-pink-100 leading-relaxed font-light mb-2 sm:mb-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            You're the most beautiful moment of my life!
          </p>
          <p 
            className="text-lg sm:text-xl md:text-2xl text-yellow-200 font-medium italic"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 18px rgba(254, 240, 138, 0.5)',
            }}
          >
            Every day with you is Valentine's Day 💕
          </p>
        </div>

        {/* Compact Animated Emojis - Responsive */}
        <div className="flex justify-center gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div
            className="text-3xl sm:text-4xl"
            style={{ 
              animation: 'gentleBounce 2s ease-in-out infinite',
              animationDelay: '0s',
            }}
          >
            💖
          </div>
          <div
            className="text-3xl sm:text-4xl"
            style={{ 
              animation: 'gentleBounce 2s ease-in-out infinite',
              animationDelay: '0.4s',
            }}
          >
            🌹
          </div>
          <div
            className="text-3xl sm:text-4xl"
            style={{ 
              animation: 'gentleBounce 2s ease-in-out infinite',
              animationDelay: '0.8s',
            }}
          >
            💝
          </div>
        </div>

        {/* Forever Message - Responsive */}
        <p
          className="text-xl sm:text-2xl md:text-3xl text-pink-50 font-semibold mb-8 sm:mb-10 italic px-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 20px rgba(251, 207, 232, 0.5)',
          }}
        >
          Forever & Always... Yours 💑
        </p>

        {/* Music Control Button - Responsive */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMusic();
          }}
          className="group relative bg-white/15 backdrop-blur-md hover:bg-white/25 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base transition-all duration-500 shadow-xl flex items-center gap-2 sm:gap-3 mx-auto border-2 border-pink-200/30 hover:border-pink-200/50 hover:scale-105"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              <span>Music Playing 🎵</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Play Music 🎵</span>
            </>
          )}
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source
          src={song}
          type="audio/mpeg"
        />
      </audio>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes fall {
          0% { 
            transform: translateY(-100vh) rotate(0deg); 
            opacity: 0.7; 
          }
          100% { 
            transform: translateY(110vh) rotate(360deg); 
            opacity: 0; 
          }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.1); }
          28% { transform: scale(1); }
          42% { transform: scale(1.05); }
          56% { transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.04;
          }
          50% { 
            transform: translateY(-25px) translateX(12px) rotate(6deg);
            opacity: 0.06;
          }
        }

        @keyframes gentleBounce {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}