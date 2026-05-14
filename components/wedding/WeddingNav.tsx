'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Heart, Church, MapPin, Home, LucideProps } from 'lucide-react';
import FloatingMonogram from './FloatingMonogram';
import { X } from 'lucide-react';

const NAV_LINKS = [
  { icon: <Home size={18} strokeWidth={1.5} />, label: 'Home', href: '#hero' },
  { icon: <Heart size={18} strokeWidth={1.5} />, label: 'Story', href: '#story' },
  { icon: <Church size={18} strokeWidth={1.5} />, label: 'Ceremony', href: '#ceremony' },
  { icon: <MapPin size={18} strokeWidth={1.5} />, label: 'Venues', href: '#venues' },
];

export default function WeddingNav() {
  const [isHidden, setIsHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;
    const threshold = 10;

    if (latest < 100) {
      setIsHidden(false);
    } else if (diff > threshold) {
      setIsHidden(true);
    } else if (diff < -threshold) {
      setIsHidden(false);
    }

    setScrolled(latest > 50);
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);


  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 pointer-events-none"
      >
        <motion.div
          layout
          animate={{
            backgroundColor: isHidden ? 'rgba(255, 255, 255, 0)' : (scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.75)'),
            backdropFilter: isHidden ? 'blur(0px)' : 'blur(20px)',
            borderColor: isHidden ? 'rgba(184, 149, 106, 0)' : (scrolled ? 'rgba(184, 149, 106, 0.25)' : 'rgba(184, 149, 106, 0.15)'),
          }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center rounded-full border-[0.5px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] pointer-events-auto"
        >
          <motion.div layout className="pl-1.5 md:pl-2 pr-1 md:pr-1.5 py-1.5">
            <FloatingMonogram isCentered={isHidden} className={!isHidden ? "scale-[0.85] md:scale-90" : ""} />
          </motion.div>

          <AnimatePresence mode="wait">
            {!isHidden && (
              <motion.div 
                key="nav-links"
                initial={{ opacity: 0, width: 0, x: -10 }}
                animate={{ opacity: 1, width: 'auto', x: 0 }}
                exit={{ opacity: 0, width: 0, x: -10 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="flex items-center pr-2 md:pr-4"
              >
                <div className="flex items-center gap-0.5 md:gap-1.5">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                        <a
                          key={i}
                          href={link.href}
                          onClick={(e) => {}}
                          className="relative p-2 md:p-2.5 text-[#1a1816]/60 hover:text-[#b8956a] transition-all duration-300 group"
                          aria-label={link.label}
                        >
                        {isActive && (
                          <motion.div
                            layoutId="nav-active"
                            className="absolute inset-0 bg-[#b8956a]/15 rounded-full"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                          />
                        )}
                        
                        <motion.div 
                          whileHover={{ scale: 1.15, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative z-10 transition-colors duration-500 ${isActive ? 'text-[#b8956a]' : 'text-[#1a1816]/60 group-hover:text-[#b8956a]'}`}
                        >
                          {React.cloneElement(link.icon as React.ReactElement<LucideProps>, { size: 18, strokeWidth: 1.5 })}
                        </motion.div>

                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1a1816]/95 backdrop-blur-md text-[#faf9f6] text-[8px] tracking-[0.2em] font-medium uppercase rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                          {link.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>


      {/* Global CSS for scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}