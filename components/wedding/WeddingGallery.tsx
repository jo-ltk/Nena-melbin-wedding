'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import ParallaxImage from './ParallaxImage';
import { HeadingReveal } from './HeadingReveal';

const GALLERY_IMAGES = [
  { url: '/gallery/JIJ01663.jpg', span: 'md:col-span-1 md:row-span-1' },
  { url: '/gallery/JIJ02080.jpg', span: 'md:col-span-1 md:row-span-2' }, // Tall
  { url: '/gallery/JIJ02918.jpg', span: 'md:col-span-2 md:row-span-1' }, // Wide
  { url: '/gallery/JIJ02942.jpg', span: 'md:col-span-1 md:row-span-1' },
  { url: '/gallery/JIJ02140.jpg', span: 'md:col-span-2 md:row-span-2' }, // Large square
  { url: '/gallery/JIJ02815.jpg', span: 'md:col-span-1 md:row-span-1' },
  { url: '/gallery/JIJ02583.jpg', span: 'md:col-span-1 md:row-span-1' },
  { url: '/gallery/JIJ01918.jpg', span: 'md:col-span-2 md:row-span-1' }, // Wide
  { url: '/gallery/JIJ00992.jpg', span: 'col-span-2 md:col-span-4 md:row-span-1', position: 'object-[center_30%]' },
];

export default function WeddingGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="relative w-full bg-[#faf9f6] pb-20 px-6 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

      {/* Header Section - Compacted as requested */}
      <motion.div 
        className="flex flex-col items-center text-center mb-10 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <HeadingReveal 
          as="h2"
          className="font-serif italic font-light text-[#1a1816] leading-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}
        >
          Gallery
        </HeadingReveal>
        <div className="flex items-center gap-4 w-24">
          <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
          <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
          <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
        </div>
      </motion.div>

      {/* Collage Layout */}
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-3 md:gap-4 grid-flow-dense">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden group cursor-pointer shadow-xl shadow-[#b8956a]/5 rounded-sm ${img.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              onClick={() => setSelectedIndex(i)}
            >
              <div className="absolute inset-0 w-full h-full">
                <ParallaxImage className="absolute inset-0 w-full h-full" offset={5}>
                  <motion.div 
                    className="w-full h-full relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5 }}
                  >
                    <Image 
                      src={img.url}
                      alt="Gallery moment"
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className={`object-cover ${img.position || 'object-top'} grayscale-[0.02] contrast-[1.02]`}
                    />
                  </motion.div>
                </ParallaxImage>
                
                {/* Hover Veil */}
                <motion.div 
                  className="absolute inset-0 bg-[#b8956a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Inner Frame */}
                <div className="absolute inset-3 border-[0.5px] border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop with enhanced glassmorphism */}
            <motion.div 
              className="absolute inset-0 bg-[#0a0806]/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            />

            {/* Close Button - High Z-index and mobile optimized */}
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/40 hover:text-white transition-all z-[170] p-2 hover:bg-white/10 rounded-full"
            >
              <X size={28} strokeWidth={1} />
            </button>

            {/* Content Container - Centered and responsive */}
            <motion.div 
              className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center z-[160]"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[75vh] md:max-h-[85vh] shadow-2xl shadow-black/50">
                <Image 
                  src={GALLERY_IMAGES[selectedIndex].url} 
                  alt="Selected moment"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Controls and Info */}
              <div className="mt-8 flex flex-col items-center gap-6 w-full">
                <div className="flex items-center gap-8">
                  <button 
                    onClick={handlePrevious}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all bg-white/5 backdrop-blur-sm"
                  >
                    <ChevronLeft size={20} strokeWidth={1} />
                  </button>
                  
                  <div className="font-display text-[10px] md:text-[12px] tracking-[0.4em] text-white/40 uppercase">
                    {selectedIndex + 1} <span className="mx-2 text-white/10">/</span> {GALLERY_IMAGES.length}
                  </div>

                  <button 
                    onClick={handleNext}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all bg-white/5 backdrop-blur-sm"
                  >
                    <ChevronRight size={20} strokeWidth={1} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
