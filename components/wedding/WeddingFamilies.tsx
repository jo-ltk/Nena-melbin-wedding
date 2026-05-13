'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParallaxImage from './ParallaxImage';
import { HeadingReveal } from './HeadingReveal';

export default function WeddingFamilies() {
  return (
    <section className="relative w-full pt-10 pb-8 md:pt-24 md:pb-20 bg-[#faf9f6] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

      <div className="max-w-6xl mx-auto px-7 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-display text-[10px] tracking-[0.5em] text-[#b8956a] uppercase mb-4">
            Blessed Families
          </span>
          <HeadingReveal 
            as="h2"
            className="font-serif italic font-light text-[#1a1816] leading-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            With the Blessings of Our Parents
          </HeadingReveal>
          <div className="flex items-center gap-4 w-24">
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
            <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
          </div>
        </motion.div>

        {/* Family Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch relative">
          
          {/* Central Divider (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-10 bottom-10 w-[0.5px] bg-[#b8956a]/15 -translate-x-1/2 items-center justify-center">
            <div className="w-2 h-2 border-[0.5px] border-[#b8956a]/30 rotate-45 bg-[#faf9f6]" />
          </div>

          {/* Groom's Family */}
          <FamilyCard 
            label="The Groom"
            name="Melbin C Varghese"
            image="/JIJ00965.jpg"
            parents="Son of Mr. Varghese C O & Mrs. Sarakutty Varghese"
            address="Chathanayathu House, Ramamangalam, Muvattupuzha"
            delay={0.2}
          />

          {/* Bride's Family */}
          <FamilyCard 
            label="The Bride"
            name="Nena Mathew"
            image="/JIJ00953.jpg"
            parents="Daughter of Mr. Mathew Varghese & Mrs. Elsamma Mathew"
            address="Valiyaveettil House, Punnavely, Mallapally"
            delay={0.4}
          />

        </div>
      </div>
    </section>
  );
}

function FamilyCard({ label, name, parents, address, image, delay }: { label: string, name: string, parents: string, address: string, image?: string, delay: number }) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center p-6 md:p-10 border-[0.5px] border-[rgba(184,149,106,0.15)] bg-white/50 backdrop-blur-[2px] shadow-2xl shadow-[#b8956a]/5 relative group min-h-fit justify-center py-10 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay }}
    >
      {/* Botanical Drawing (Subtle Wedding Vibe) */}
      <div className="absolute top-4 right-4 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-700">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90Q30 70 50 80T90 60M30 85Q45 75 55 85M65 75Q75 65 85 75" stroke="#b8956a" strokeWidth="0.5" strokeLinecap="round"/>
          <circle cx="90" cy="60" r="1.5" fill="#b8956a" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Label */}
      <span className="font-display text-[9px] tracking-[0.5em] text-[#b8956a] uppercase mb-6 block font-light">
        {label}
      </span>
      
      {/* Photo Frame (if available) - Increased Size */}
      {image && (
        <div className="mb-8 relative w-56 h-56 md:w-72 md:h-72">
          <div className="absolute inset-[-12px] border-[0.5px] border-[#b8956a]/20 rounded-full rotate-6 group-hover:rotate-12 transition-transform duration-1000" />
          <div className="absolute inset-[-6px] border-[0.5px] border-[#b8956a]/20 rounded-full -rotate-3 group-hover:-rotate-6 transition-transform duration-1000" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-[0.5px] border-[#b8956a]/30 shadow-2xl shadow-[#b8956a]/15">
            <ParallaxImage className="absolute inset-0 w-full h-full" offset={10}>
              <Image 
                src={image} 
                alt={name} 
                fill
                sizes="(max-width: 768px) 224px, 288px"
                quality={80}
                className="object-cover grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
              />
            </ParallaxImage>
            <div className="absolute inset-0 bg-[#b8956a]/5 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      )}

      {/* Central Ornament */}
      <div className="mb-6 w-12 h-[0.5px] bg-[#b8956a]/30" />

      {/* Content */}
      <div className="space-y-4">
        <HeadingReveal 
          as="h3" 
          className="font-serif text-[32px] md:text-[44px] text-[#1a1816] leading-tight font-light"
        >
          {name}
        </HeadingReveal>
        <p className="font-serif text-[18px] md:text-[22px] text-[#2a2622]/80 font-light italic">
          {parents}
        </p>
        <div className="pt-2">
          <p className="font-sans text-[11px] tracking-widest text-[#b8956a]/60 uppercase leading-relaxed max-w-[320px] mx-auto">
            {address}
          </p>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-[0.5px] border-l-[0.5px] border-[#b8956a]/20" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-[0.5px] border-r-[0.5px] border-[#b8956a]/20" />
    </motion.div>
  );
}
