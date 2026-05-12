'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Heart, Church, GlassWater, Image as ImageIcon, MapPin, Mail, Home } from 'lucide-react';

const NAV_LINKS = [
  { icon: <Home size={18} strokeWidth={1.5} />, label: 'Home', href: '#hero' },
  { icon: <Heart size={18} strokeWidth={1.5} />, label: 'Story', href: '#story' },
  { icon: <Church size={18} strokeWidth={1.5} />, label: 'Ceremony', href: '#ceremony' },
  { icon: <GlassWater size={18} strokeWidth={1.5} />, label: 'Reception', href: '#reception' },
  { icon: <ImageIcon size={18} strokeWidth={1.5} />, label: 'Gallery', href: '#gallery' },
  { icon: <MapPin size={18} strokeWidth={1.5} />, label: 'Travel', href: '#travel' },
  { icon: <Mail size={18} strokeWidth={1.5} />, label: 'RSVP', href: '#rsvp' },
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
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 pointer-events-none"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(16px)',
            borderColor: scrolled ? 'rgba(184, 149, 106, 0.3)' : 'rgba(184, 149, 106, 0.2)',
          }}
          className="flex items-center gap-1 md:gap-4 px-5 py-2.5 rounded-full border-[0.5px] shadow-2xl shadow-black/10 pointer-events-auto"
        >
          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={i}
                href={link.href}
                className="relative p-2.5 md:p-3 text-[#1a1816]/70 hover:text-[#b8956a] transition-all duration-300 group"
                aria-label={link.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-[#b8956a]/15 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-[#b8956a] scale-110' : ''}`}>
                  {link.icon}
                </div>

                {/* Tooltip for desktop */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1a1816] text-[#faf9f6] text-[9px] tracking-widest uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            );
          })}
        </motion.div>
      </motion.nav>

      {/* Global CSS for scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}