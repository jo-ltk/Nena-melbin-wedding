'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function WeddingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'The Ceremony', href: '#ceremony' },
    { label: 'Reception', href: '#reception' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-8 py-6 transition-all duration-300"
      animate={{
        backgroundColor: scrolled ? 'rgba(250, 246, 240, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
        borderBottomColor: scrolled ? 'rgba(184, 149, 106, 0.2)' : 'rgba(184, 149, 106, 0)',
        paddingTop: scrolled ? '1.25rem' : '1.5rem',
        paddingBottom: scrolled ? '1.25rem' : '1.5rem',
      }}
      style={{
        borderBottom: '1px solid',
        transitionDuration: '300ms',
      }}
    >
      {/* Logo */}
      <motion.div
        className="text-xl italic font-serif"
        animate={{
          color: scrolled ? 'var(--burgundy)' : 'white',
        }}
      >
        Nena & Melbin
      </motion.div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-12">
        {navLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="font-display text-sm uppercase tracking-wider"
            animate={{
              color: scrolled ? 'var(--text-muted)' : 'rgba(250, 246, 240, 0.85)',
            }}
            style={{ letterSpacing: '0.25em' }}
            whileHover={{ opacity: 0.7 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden flex items-center justify-center w-10 h-10"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        animate={{
          color: scrolled ? 'var(--burgundy)' : 'white',
        }}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-cream shadow-lg py-6 px-8 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-sm uppercase tracking-wider text-charcoal"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
