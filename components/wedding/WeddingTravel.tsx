'use client';

import { motion } from 'framer-motion';
import { Plane, Train, Car } from 'lucide-react';
import { HeadingReveal } from './HeadingReveal';

const TRAVEL_MODES = [
  {
    icon: <Plane size={24} strokeWidth={1.5} />,
    title: 'By Air',
    description: 'Cochin International Airport (COK) is the closest international gateway, located approximately 30 km from the venues. Pre-paid taxis and Uber/Ola services are easily available at the terminal.',
    color: '#0ea5e9', // Sky Blue
    accent: 'COK',
  },
  {
    icon: <Train size={24} strokeWidth={1.5} />,
    title: 'By Rail',
    description: 'Ernakulam Junction (South) and Tripunithura are the primary rail hubs nearby. From the station, you can take a taxi or auto-rickshaw for the 15-25 km drive to the wedding locations.',
    color: '#4f46e5', // Indigo
    accent: 'ERS',
  },
  {
    icon: <Car size={24} strokeWidth={1.5} />,
    title: 'By Road',
    description: 'The venues are conveniently located near NH 85 (Kochi-Madurai Highway). For local guests, KSRTC and private buses operate frequent services to Puthencruz and Kolencherry.',
    color: '#15803d', // Sage Green
    accent: 'NH85',
  }
];

export default function WeddingTravel() {
  return (
    <section id="travel" className="relative w-full py-10 md:py-16 bg-[#faf9f6] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
      
      {/* Abstract Travel Path Decoration */}
      <svg className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none text-[#b8956a]" viewBox="0 0 100 100">
        <path d="M0,20 Q50,0 100,50 T0,80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>

      <div className="max-w-6xl mx-auto px-5 md:px-7 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="font-sans text-[10px] tracking-[0.5em] text-[#b8956a] uppercase mb-5">
            Guest Information
          </span>
          <HeadingReveal 
            as="h2"
            className="font-serif italic font-light text-[#1a1816] leading-tight mb-10"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            How to Reach
          </HeadingReveal>
          <div className="flex items-center gap-4 w-24">
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
            <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
          </div>
        </motion.div>

        {/* Travel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TRAVEL_MODES.map((mode, i) => (
            <motion.div 
              key={i}
              className="relative group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              <div className="h-full bg-white border-[0.5px] border-[#b8956a]/15 p-10 md:p-12 shadow-[0_4px_30px_rgba(184,149,106,0.06)] hover:shadow-[0_20px_60px_rgba(184,149,106,0.12)] transition-all duration-700 flex flex-col relative overflow-hidden">
                
                {/* Large Background Index Number - Fills the space on the right */}
                <div className="absolute top-[-10px] right-[-10px] font-serif italic text-[120px] md:text-[140px] leading-none text-[#b8956a]/5 select-none group-hover:text-[#b8956a]/10 group-hover:scale-110 transition-all duration-1000 pointer-events-none">
                  0{i + 1}
                </div>

                {/* Top Row: Icon + Accent */}
                <div className="flex justify-between items-center mb-12">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundColor: `${mode.color}10`, color: mode.color }}
                  >
                    {mode.icon}
                  </div>
                  <span className="font-sans text-[10px] tracking-[0.3em] text-[#b8956a]/60 uppercase font-medium">
                    {mode.accent}
                  </span>
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex-1">
                  <HeadingReveal 
                    as="h3" 
                    className="font-serif text-[28px] md:text-[34px] text-[#1a1816] mb-6 tracking-tight font-light italic"
                  >
                    {mode.title}
                  </HeadingReveal>
                  
                  <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-[#1a1816]/75 font-light mb-10">
                    {mode.description}
                  </p>
                </div>

                {/* Bottom Row: Accent Line + Dot */}
                <div className="pt-8 border-t-[0.5px] border-[#b8956a]/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-[#b8956a]/30 group-hover:w-20 transition-all duration-700" />
                    <span className="font-sans text-[9px] tracking-[0.2em] text-[#b8956a]/40 uppercase">Details</span>
                  </div>
                  <div 
                    className="w-2.5 h-2.5 rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"
                    style={{ backgroundColor: mode.color }}
                  />
                </div>

                {/* Interactive Corner Accents */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[1px] border-l-[1px] border-[#b8956a]/20 group-hover:w-8 group-hover:h-8 transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[1px] border-r-[1px] border-[#b8956a]/20 group-hover:w-8 group-hover:h-8 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note at the bottom */}
        <motion.p 
          className="text-center mt-8 font-sans text-[11px] tracking-[0.2em] text-[#b8956a]/50 uppercase px-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          Safe travels to all our guests. We can't wait to celebrate with you!
        </motion.p>
      </div>
    </section>
  );
}
