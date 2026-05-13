'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useRef } from 'react';

export default function FloatingMonogram() {
  const constraintsRef = useRef(null);
  
  const handleLogoClick = () => {
    // Elegant single burst of confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 200,
      colors: ['#b8956a', '#e3d5ca', '#ffffff', '#1a1816'] // Using theme colors
    });
  };

  return (
    <>
      {/* Invisible constraint area covering the whole viewport */}
      <div ref={constraintsRef} className="fixed inset-4 z-[100] pointer-events-none" />
      
      <motion.div
        className="fixed top-[calc(60%-24px)] left-[calc(50%-24px)] md:top-[calc(50%-28px)] md:left-[calc(50%-28px)] z-[100] cursor-grab active:cursor-grabbing pointer-events-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        
        // Drag Logic
        drag
        dragConstraints={constraintsRef}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        
        // Interaction feel
        whileHover={{ scale: 1.05 }}
        whileTap={{ 
          scale: 0.9,
          rotate: [-5, 5, -5, 0],
          transition: { duration: 0.2 }
        }}
        whileDrag={{ 
          scale: 1.15,
          rotate: 15,
          filter: "brightness(1.1) contrast(1.1)",
        }}
        
        onTap={() => {
          handleLogoClick();
        }}
      >
      <div className="relative group">
        {/* Main Monogram Circle - Larger "Cute" size */}
        <div className="relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full bg-white/95 backdrop-blur-md border-[1.5px] border-[#b8956a]/40 shadow-2xl shadow-black/20 flex items-center justify-center overflow-hidden">
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-60 pointer-events-none" />
          
          {/* Internal shadow for depth */}
          <div className="absolute inset-0 rounded-full shadow-inner shadow-black/10" />
          
          <div className="flex flex-col items-center">
            <span className="font-serif italic text-[14px] md:text-[16px] text-[#1a1816] leading-none mb-0.5 tracking-tighter select-none font-medium">
              M<span className="text-[#b8956a] font-sans text-[9px] md:text-[10px] not-italic align-middle mx-0.5 font-bold">&</span>N
            </span>
            <div className="w-5 h-[1.5px] bg-[#b8956a]/60 rounded-full" />
          </div>
        </div>

        {/* Outer subtle glow/ring that reacts */}
        <motion.div 
          className="absolute inset-[-8px] rounded-full border-[1.5px] border-[#b8956a]/15 shadow-lg shadow-[#b8956a]/5 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
    </>
  );
}
