'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import ParallaxImage from './ParallaxImage';
import { HeadingReveal } from './HeadingReveal';

const STORY_MOMENTS = [
  {
    title: 'A Meaningful Beginning',
    text: 'Guided by faith and family values, Melbin and Nena first connected through a modern marriage platform. What began as simple conversations slowly grew into a meaningful bond filled with understanding, respect, and grace.',
    image: '/JIJ02472.jpg',
    layout: 'standard'
  },
  {
    title: 'Families United',
    text: 'As their connection deepened, both families came together in the warmth of traditional Kerala hospitality. Through heartfelt visits, shared moments, and prayers, two families found joy in becoming one.',
    image: '/JIJ03037.jpg',
    layout: 'reverse'
  },
  {
    title: 'A Blessed Celebration',
    text: 'Surrounded by loved ones and God’s blessings, they now begin a beautiful new chapter together. With faith at the center and family by their side, this wedding marks the start of a lifelong journey.',
    image: '/JIJ02260.jpg',
    layout: 'standard'
  }
];

export default function WeddingStory() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      id="story" 
      className="relative w-full py-16 md:py-24 bg-[#faf9f6] overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

      <div className="max-w-[1400px] mx-auto px-7 relative">
        
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-12 md:mb-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="font-display text-[10px] tracking-[0.5em] text-[#b8956a] uppercase mb-6">
            Two Lives, One Journey
          </span>
          <HeadingReveal 
            as="h2"
            className="font-serif italic font-light text-[#1a1816] leading-none mb-10"
            style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)' }}
          >
            Our Story
          </HeadingReveal>
          <div className="flex items-center gap-4 w-24">
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
            <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
          </div>
        </motion.div>

        {/* Story Collage */}
        <div className="space-y-16 md:space-y-64">
          {STORY_MOMENTS.map((moment, i) => (
            <StoryBlock key={i} moment={moment} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryBlock({ moment, index }: { moment: any, index: number }) {
  const isReverse = moment.layout === 'reverse';
  
  return (
    <div className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-24`}>
      {/* Image Block */}
      <motion.div 
        className="w-full md:w-[55%] relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden group shadow-2xl shadow-[#b8956a]/5">
          <ParallaxImage className="absolute inset-0 w-full h-full" offset={5}>
            <motion.div 
              className="w-full h-full relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2 }}
            >
              <Image 
                src={moment.image} 
                alt={moment.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                className="object-cover object-[center_20%] grayscale-[0.1] contrast-[1.05]"
              />
            </motion.div>
          </ParallaxImage>
          <div className="absolute inset-0 bg-[#b8956a]/5 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-6 border-[0.5px] border-white/30 z-10 pointer-events-none" />
        </div>
        
        {/* Floating Accent Circle */}
        <div className={`absolute -bottom-6 ${isReverse ? '-left-6' : '-right-6'} w-32 h-32 border-[0.5px] border-[#b8956a]/20 rounded-full -z-10 hidden md:block`} />
      </motion.div>

      {/* Text Block */}
      <motion.div 
        className="w-full md:w-[45%] flex flex-col space-y-6"
        initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <span className="font-display text-[10px] tracking-[0.4em] text-[#b8956a] uppercase">
          Chapter {String(index + 1).padStart(2, '0')}
        </span>
        <HeadingReveal 
          as="h3" 
          className="font-serif text-[32px] md:text-[48px] text-[#1a1816] leading-tight"
        >
          {moment.title}
        </HeadingReveal>
        <p className="font-serif text-[18px] md:text-[22px] leading-relaxed text-[#2a2622]/80 font-light">
          {moment.text}
        </p>
        <div className={`w-12 h-[0.5px] bg-[#b8956a]/40 ${isReverse ? 'self-end' : 'self-start'}`} />
      </motion.div>
    </div>
  );
}
