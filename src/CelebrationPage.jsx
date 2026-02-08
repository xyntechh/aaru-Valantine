import React, { useState, useEffect, useRef } from "react";
import { Heart, Music, Volume2, VolumeX } from "lucide-react";
import song from "./assets/song.mp3";

export default function CelebrationPage({ crushName }) {
  const [fallingHearts, setFallingHearts] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  

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
        .then(() => setIsPlaying(true))
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
      className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-800 to-pink-900 flex items-center justify-center relative overflow-hidden"
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
            fontSize: `${Math.random() * 40 + 25}px`,
            animation: `float ${Math.random() * 8 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Soft glow orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

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

      <div
        className={`text-center z-10 max-w-4xl px-6 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Compact Heart Icon */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-24 h-24 text-pink-200 fill-pink-200 blur-2xl opacity-40" />
          </div>
          <Heart 
            className="w-24 h-24 text-pink-100 fill-pink-100 relative" 
            style={{
              filter: 'drop-shadow(0 0 20px rgba(251, 207, 232, 0.6))',
              animation: 'heartbeat 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Main Celebration Heading */}
        <h1
          className="text-6xl md:text-8xl font-bold text-pink-50 mb-4 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 40px rgba(251, 207, 232, 0.5), 0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Yaaay! 🎉
        </h1>
        
        <h2
          className="text-4xl md:text-5xl font-semibold text-yellow-200 mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 30px rgba(254, 240, 138, 0.6), 0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Happy Valentine's Day!
        </h2>

        {/* Message Card with Glassmorphism */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-10 shadow-2xl border-2 border-pink-200/30 transition-all duration-500 hover:bg-white/15">
          <p 
            className="text-4xl md:text-5xl text-pink-50 font-bold mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 25px rgba(251, 207, 232, 0.4)',
            }}
          >
            {crushName} ❤️
          </p>
          <p 
            className="text-xl md:text-2xl text-pink-100 leading-relaxed font-light mb-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            You're the most beautiful moment of my life!
          </p>
          <p 
            className="text-xl md:text-2xl text-yellow-200 font-medium italic"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 0 20px rgba(254, 240, 138, 0.5)',
            }}
          >
            Every day with you is Valentine's Day 💕
          </p>
        </div>

        {/* Compact Animated Emojis */}
        <div className="flex justify-center gap-8 mb-10">
          <div
            className="text-4xl"
            style={{ 
              animation: 'gentleBounce 2s ease-in-out infinite',
              animationDelay: '0s',
            }}
          >
            💖
          </div>
          <div
            className="text-4xl"
            style={{ 
              animation: 'gentleBounce 2s ease-in-out infinite',
              animationDelay: '0.4s',
            }}
          >
            🌹
          </div>
          <div
            className="text-4xl"
            style={{ 
              animation: 'gentleBounce 2s ease-in-out infinite',
              animationDelay: '0.8s',
            }}
          >
            💝
          </div>
        </div>

        {/* Forever Message */}
        <p
          className="text-2xl md:text-3xl text-pink-50 font-semibold mb-10 italic"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 25px rgba(251, 207, 232, 0.5)',
          }}
        >
          Forever & Always... Yours 💑
        </p>

        {/* Music Control Button - Compact */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMusic();
          }}
          className="group relative bg-white/15 backdrop-blur-md hover:bg-white/25 text-white font-medium py-4 px-8 rounded-full text-base transition-all duration-500 shadow-xl flex items-center gap-3 mx-auto border-2 border-pink-200/30 hover:border-pink-200/50 hover:scale-105"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 animate-pulse" />
              <span>Music Playing 🎵</span>
            </>
          ) : (
            <>
              <VolumeX className="w-5 h-5" />
              <span>Play Music 🎵</span>
            </>
          )}
        </button>

        {!isPlaying && (
          <p className="text-pink-200/80 text-sm mt-4 italic" style={{ fontFamily: "'Inter', sans-serif" }}>
            Tap anywhere to start the music
          </p>
        )}
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
            transform: translateY(-30px) translateX(15px) rotate(8deg);
            opacity: 0.06;
          }
        }

        @keyframes gentleBounce {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}