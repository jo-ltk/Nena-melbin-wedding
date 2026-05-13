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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0806]/98 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]">
              <X size={32} strokeWidth={1} />
            </button>

            {/* Navigation */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-[110]">
              <button 
                onClick={handlePrevious}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all bg-black/20 backdrop-blur-sm"
              >
                <ChevronLeft size={24} strokeWidth={1} />
              </button>
              <button 
                onClick={handleNext}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all bg-black/20 backdrop-blur-sm"
              >
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Selected Image */}
            <motion.div 
              className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-12"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[85vh] md:max-h-[90vh]">
                <Image 
                  src={GALLERY_IMAGES[selectedIndex].url} 
                  alt="Selected moment"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Counter */}
              <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 font-display text-[10px] md:text-[12px] tracking-[0.4em] text-white/30 uppercase">
                {selectedIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
