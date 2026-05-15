'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeadingReveal } from './HeadingReveal';

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
              bg-white/60
              backdrop-blur-xl
              border border-white/40
              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              min-h-[620px]
            "
          >

            {/* Image Section */}
            <div
              className={`
                relative h-[320px] md:h-full overflow-hidden
                ${index % 2 === 1 ? 'md:order-2' : ''}
              `}
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                priority
                className="object-cover scale-[1.03]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative flex items-center justify-center px-7 sm:px-10 md:px-16 py-16 md:py-20">

              <div className="max-w-[540px]">

                {/* Chapter */}
                <div className="mb-6">
                  <p className="tracking-[0.45em] uppercase text-[#b99266] text-[10px] md:text-xs">
                    {story.chapter}
                  </p>
                </div>

                {/* Title */}
                <h3 className="font-serif italic text-[#181411] leading-[0.95] text-[2.8rem] sm:text-[3.5rem] md:text-[5rem] mb-8">
                  {story.title}
                </h3>

                {/* Description */}
                <p className="text-[#4e453d] leading-[2] text-[1.05rem] sm:text-[1.15rem] md:text-[1.22rem]">
                  {story.text}
                </p>

                {/* Decorative line */}
                <div className="mt-10 flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-[#d3b08a]" />
                  <div className="w-2 h-2 rounded-full bg-[#d3b08a]" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}