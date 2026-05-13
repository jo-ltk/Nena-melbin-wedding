'use client';

import { motion } from 'framer-motion';
import { HeadingReveal } from './HeadingReveal';

export default function WeddingFooter() {
  return (
    <footer className="relative w-full bg-[#1a0808] py-12 md:py-20 overflow-hidden">
      {/* Background Ornament (Ultra Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
        <h2 className="font-serif italic text-[50vw] md:text-[20vw] text-white select-none leading-none">MN</h2>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* The Quote - Compact */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-serif italic text-[16px] md:text-[22px] text-[#b8956a]/90 max-w-[260px] md:max-w-2xl mx-auto leading-relaxed">
            &ldquo;A celebration of love uniting our families across Kerala&rdquo;
          </p>
          <div className="mt-4 flex justify-center items-center gap-3">
             <div className="w-5 h-[0.5px] bg-[#b8956a]/20" />
             <div className="w-1 h-1 border-[0.5px] border-[#b8956a]/30 rotate-45" />
             <div className="w-5 h-[0.5px] bg-[#b8956a]/20" />
          </div>
        </motion.div>

        {/* Main Names - Refined */}
        <motion.div 
          className="mb-10 md:mb-12"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <HeadingReveal 
            as="h2"
            className="font-serif font-light text-white leading-tight mb-2"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 6rem)' }}
          >
            Melbin & Nena
          </HeadingReveal>
          <span className="font-display text-[12px] md:text-[14px] tracking-[0.6em] text-[#b8956a] uppercase font-medium">
            31 MAY 2026
          </span>
        </motion.div>

        {/* Closing Details - Ultra Tight */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 w-full pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex flex-col items-center">
            <span className="font-display text-[8px] tracking-[0.3em] text-[#b8956a] uppercase opacity-60">The Date</span>
            <p className="font-serif text-[15px] text-white/90">31st May 2026</p>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="font-display text-[8px] tracking-[0.3em] text-[#b8956a] uppercase opacity-60">The Locations</span>
            <p className="font-serif text-[15px] text-white/90">Puthenkurish & Kolencherry</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-display text-[8px] tracking-[0.3em] text-[#b8956a] uppercase opacity-60">Message</span>
            <p className="font-serif text-[14px] text-white/70">Thank you for sharing our joy</p>
          </div>
        </motion.div>

        {/* Credits - Final Touch */}
        <motion.div 
          className="mt-12 md:mt-16 opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="font-display text-[7px] tracking-[0.4em] text-white uppercase">
            Designed for Melbin & Nena
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
