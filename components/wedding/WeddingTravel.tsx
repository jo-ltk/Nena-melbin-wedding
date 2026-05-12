'use client';

import { motion } from 'framer-motion';
import { Plane, Train, Car } from 'lucide-react';

const TRAVEL_MODES = [
  {
    icon: <Plane size={24} strokeWidth={1.5} />,
    title: 'By Air',
    description: 'Cochin International Airport (COK) is approximately 30 km away. Pre-paid taxis and ride-sharing services are readily available at the airport.',
  },
  {
    icon: <Train size={24} strokeWidth={1.5} />,
    title: 'By Train',
    description: 'Ernakulam Junction (South) and Tripunithura are the nearest major stations. Taxis and autos are available for the 15-20 km drive to the venues.',
  },
  {
    icon: <Car size={24} strokeWidth={1.5} />,
    title: 'By Road',
    description: 'The venues are well-connected via NH 85 (Kochi-Madurai Highway). Regular bus services and taxis operate from Ernakulam and nearby towns.',
  }
];

export default function WeddingTravel() {
  return (
    <>
      <section id="travel" className="relative w-full pt-12 pb-12 md:pt-20 md:pb-16 bg-[#faf9f6] overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

        <div className="max-w-6xl mx-auto px-7 relative z-10">
          
          {/* Header Section */}
          <motion.div 
            className="flex flex-col items-center text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-display text-[10px] tracking-[0.5em] text-[#b8956a] uppercase mb-4">
              Guest Information
            </span>
            <h2 className="font-serif italic font-light text-[#1a1816] leading-tight mb-8"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              How to Reach
            </h2>
            <div className="w-12 h-[0.5px] bg-[#b8956a]/30" />
          </motion.div>

          {/* Travel Cards - Swipeable on mobile, Grid on desktop */}
          <div className="relative -mx-7 px-7 overflow-x-auto no-scrollbar pb-8 -mb-8">
            <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 min-w-max md:min-w-0">
              {TRAVEL_MODES.map((mode, i) => (
                <motion.div 
                  key={i}
                  className="w-[280px] md:w-full flex flex-col items-start text-left p-8 md:p-12 bg-white/60 backdrop-blur-md border-[0.5px] border-[#b8956a]/10 shadow-xl shadow-[#b8956a]/5 relative group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                >
                  {/* Floating Icon Index */}
                  <div className="absolute top-6 right-8 font-serif italic text-[#b8956a]/20 text-[40px] leading-none select-none">
                    0{i + 1}
                  </div>

                  {/* Icon with soft glow */}
                  <div className="w-12 h-12 rounded-xl bg-[#b8956a]/5 flex items-center justify-center text-[#b8956a] mb-8 group-hover:bg-[#b8956a] group-hover:text-white transition-all duration-500 shadow-inner">
                    {mode.icon}
                  </div>

                  <h3 className="font-serif text-[22px] md:text-[28px] text-[#1a1816] mb-4 tracking-tight">
                    {mode.title}
                  </h3>
                  
                  <p className="font-sans text-[13px] leading-relaxed text-[#2a2622]/80 font-light max-w-[240px]">
                    {mode.description}
                  </p>

                  {/* Interactive Indicator */}
                  <div className="mt-10 flex items-center gap-2">
                    <div className="w-6 h-[1px] bg-[#b8956a]/40 group-hover:w-10 transition-all duration-500" />
                    <span className="font-display text-[8px] tracking-[0.2em] text-[#b8956a] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Details</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </>
  );
}
