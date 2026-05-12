'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1606216794079-73bd3b01a7da?w=1000&q=80', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1583939411023-14783179e581?w=800&q=80', size: 'tall' },
  { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1000&q=80', size: 'wide' },
  { url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1000&q=80', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80', size: 'tall' },
  { url: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1000&q=80', size: 'wide' },
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
    <section id="gallery" className="relative w-full bg-[#faf9f6] pt-16 pb-12 md:pt-24 md:pb-20 px-6 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

      {/* Header Section */}
      <motion.div 
        className="flex flex-col items-center text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <span className="font-display text-[10px] tracking-[0.5em] text-[#b8956a] uppercase mb-4">
          A Glimpse of Us
        </span>
        <h2 className="font-serif italic font-light text-[#1a1816] leading-tight mb-8"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
          Gallery
        </h2>
        <div className="flex items-center gap-4 w-24">
          <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
          <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
          <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
        </div>
      </motion.div>

      {/* Grid Layout */}
      <div className="max-w-[1400px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden break-inside-avoid group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              onClick={() => setSelectedIndex(i)}
            >
              <div className="relative overflow-hidden shadow-2xl shadow-[#b8956a]/5">
                <motion.img 
                  src={img.url}
                  alt="Gallery moment"
                  className="w-full h-full object-cover grayscale-[0.05] contrast-[1.05]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 2 }}
                />
                
                {/* Subtle Inner Frame (visible on hover) */}
                <motion.div 
                  className="absolute inset-4 border-[0.5px] border-white/40 z-10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Hover Veil */}
                <motion.div 
                  className="absolute inset-0 bg-[#b8956a]/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0806]/98 backdrop-blur-sm"
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
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none">
              <button 
                onClick={handlePrevious}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <ChevronLeft size={24} strokeWidth={1} />
              </button>
              <button 
                onClick={handleNext}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Selected Image */}
            <motion.div 
              className="relative max-w-[90vw] max-h-[85vh] overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={GALLERY_IMAGES[selectedIndex].url} 
                alt="Selected moment"
                className="w-full h-full object-contain"
              />
              
              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-display text-[10px] tracking-[0.4em] text-white/40 uppercase">
                {selectedIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
