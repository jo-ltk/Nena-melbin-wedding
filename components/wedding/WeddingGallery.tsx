'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeadingReveal } from './HeadingReveal';
import ParallaxImage from './ParallaxImage';

const STORY_MOMENTS = [
  {
    chapter: 'Chapter 01',
    title: 'A Meaningful Beginning',
    text: `Guided by faith and family values, Melbin and Nena first connected through a modern marriage platform. What began as simple conversations slowly blossomed into a relationship filled with warmth, respect, and understanding.`,
    image: '/story/story-1.jpg',
  },
  {
    chapter: 'Chapter 02',
    title: 'Families United',
    text: `As their connection deepened, both families came together with love, tradition, and blessings. Shared laughter and heartfelt moments turned two families into one beautiful bond.`,
    image: '/story/story-2.jpg',
  },
  {
    chapter: 'Chapter 03',
    title: 'Forever Begins',
    text: `Now, surrounded by love and faith, Melbin and Nena step into a new chapter together — building a future rooted in companionship, trust, and endless memories.`,
    image: '/story/story-3.jpg',
  },
];

export default function OurStorySection() {
  return (
    <section className="relative bg-[#f7f4ef] py-24 md:py-36 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#d7b690]/10 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 md:mb-24 px-6">

        <p className="tracking-[0.45em] uppercase text-[#c3a27c] text-[11px] md:text-xs mb-6">
          Two Souls • One Journey
        </p>

        <HeadingReveal
          as="h2"
          className="font-serif italic font-light text-[#181411] leading-none"
          style={{
            fontSize: 'clamp(3.5rem,10vw,7rem)',
          }}
        >
          Our Story
        </HeadingReveal>

        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-14 h-[1px] bg-[#d8c5ad]" />
          <div className="w-2 h-2 border border-[#d8c5ad] rotate-45" />
          <div className="w-14 h-[1px] bg-[#d8c5ad]" />
        </div>
      </div>

      {/* Story Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-14 md:gap-24">

        {STORY_MOMENTS.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative grid md:grid-cols-2 overflow-hidden
              rounded-[32px]
              bg-white/85
              backdrop-blur-sm
              border border-white/40
              shadow-[0_20px_50px_rgba(0,0,0,0.03)]
            "
          >

            {/* Image Section */}
            <div
              className={`
                relative h-[450px] md:h-auto overflow-hidden
                ${index % 2 === 1 ? 'md:order-2' : ''}
              `}
            >
              <ParallaxImage offset={8} className="w-full h-full">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  priority
                  className="object-cover"
                />
              </ParallaxImage>

              {/* Gradient Blur "Level" Effect */}
              <div 
                className="absolute inset-0 backdrop-blur-[6px] pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)'
                }}
              />

              {/* Sophisticated Dual Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-center px-8 sm:px-14 md:px-20 py-20 md:py-28">

              <div className="max-w-[540px] w-full">

                {/* Chapter */}
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-[#b99266] font-medium text-sm">/</span>
                  <p className="tracking-[0.4em] uppercase text-[#d4af37] text-[13px] md:text-[15px] font-bold">
                    {story.chapter}
                  </p>
                </div>

                {/* Title */}
                <h3 className="font-serif italic text-[#181411] leading-[1.05] text-[2.8rem] sm:text-[3.5rem] md:text-[4.8rem] mb-10">
                  {story.title}
                </h3>

                {/* Description */}
                <p className="text-[#5a5048] leading-[1.9] text-[1.05rem] sm:text-[1.15rem] md:text-[1.2rem] font-light">
                  {story.text}
                </p>

                {/* Decorative line */}
                <div className="mt-14 flex items-center gap-4">
                  <div className="w-16 h-[1px] bg-[#d3b08a]/60" />
                  <div className="w-2.5 h-2.5 rounded-full border border-[#d3b08a] bg-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}