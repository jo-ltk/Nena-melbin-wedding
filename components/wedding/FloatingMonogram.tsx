'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface FloatingMonogramProps {
  className?: string;
  isCentered?: boolean;
}

export default function FloatingMonogram({ className = "", isCentered = false }: FloatingMonogramProps) {
  const [hasPopped, setHasPopped] = useState(false);

  const handleLogoClick = (isAuto = false) => {
    setHasPopped(true);
    setTimeout(() => setHasPopped(false), 800);

    // Layer 1: Fine "Glitter Rain" falling downwards
    confetti({
      particleCount: isAuto ? 60 : 140, // Subtler for auto-burst
      spread: isAuto ? 80 : 120,
      origin: { y: 0.12 },
      colors: ['#b8956a', '#ffffff', '#e3d5ca'],
      angle: 270,
      gravity: 0.8,
      scalar: 0.6,
      startVelocity: isAuto ? 15 : 25,
      zIndex: 1000,
      ticks: 150,
    });

    // Layer 2: Celebration sparks and side cannons (Only for manual clicks)
    if (!isAuto) {
      setTimeout(() => {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.12 },
          colors: ['#b8956a', '#4a1428'],
          angle: 270,
          gravity: 1.2,
          scalar: 1,
          startVelocity: 15,
          zIndex: 1000,
        });

        // Side Cannons for a full-frame celebratory feel
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 70,
          origin: { x: 0, y: 0.6 },
          colors: ['#b8956a', '#ffffff'],
          zIndex: 1000,
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 70,
          origin: { x: 1, y: 0.6 },
          colors: ['#b8956a', '#ffffff'],
          zIndex: 1000,
        });
      }, 100);
    }
  };

  useEffect(() => {
    let autoPops = 0;
    // Automatically "shimmer" every 15 seconds, but only for 2 times total
    const interval = setInterval(() => {
      if (autoPops < 2) {
        handleLogoClick(true);
        autoPops++;
      } else {
        clearInterval(interval);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`relative z-[100] cursor-pointer pointer-events-auto ${className}`}
      initial={{ opacity: 0, scale: 0.5, y: 0 }}
      animate={{ 
        opacity: 1, 
        scale: isCentered ? 1.15 : 1,
        y: [0, -4, 0] 
      }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], 
        delay: 0.5,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      
      // Interaction feel
      whileHover={{ scale: 1.05 }}
      whileTap={{ 
        scale: 0.9,
        rotate: [-5, 5, -5, 0],
        transition: { duration: 0.2 }
      }}
      
      onClick={() => {
        handleLogoClick();
      }}
    >
      <div className="relative group">
        {/* Main Monogram Circle - Refined for luxury */}
        <div className={`relative w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full bg-white backdrop-blur-xl border-[0.5px] ${isCentered ? 'border-[#b8956a]/50 shadow-[#b8956a]/15 shadow-2xl' : 'border-[#b8956a]/30 shadow-lg'} shadow-black/5 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:border-[#b8956a]`}>
          {/* Refined Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex flex-col items-center">
            <span className="font-serif italic text-[11px] md:text-[13px] text-[#1a1816] leading-none mb-0.5 tracking-tight select-none font-semibold">
              M<span className="text-[#b8956a] font-sans text-[7px] md:text-[8px] not-italic align-middle mx-0.5 font-extrabold">&</span>N
            </span>
            <div className="w-3 md:w-4 h-[1px] bg-[#b8956a]/40 rounded-full" />
          </div>
        </div>

        {/* Outer luxury shockwave */}
        <motion.div 
          className="absolute inset-[-4px] rounded-full border-[1px] border-[#b8956a]/40 pointer-events-none"
          animate={hasPopped ? { 
            scale: [1, 3.5, 5], 
            opacity: [1, 0.4, 0],
            rotate: [0, 45, 90],
          } : { 
            scale: [1, 1.1, 1], 
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={hasPopped ? { duration: 0.8, ease: "circOut" } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

