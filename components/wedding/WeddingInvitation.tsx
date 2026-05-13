'use client';

import { motion, Variants } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const RevealText = ({ text, className, style, delay = 0, highlightWords = [] }: RevealTextProps & { highlightWords?: string[] }) => {
  const words = text.split(' ');
  
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      }
    }
  };

  const wordVariants: Variants = {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: { 
      clipPath: 'inset(0% 0 0 0)',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-wrap justify-center gap-x-[0.22em] gap-y-[0.06em] ${className}`}
      style={style}
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[.,]/g, '');
        const isHighlighted = highlightWords.includes(cleanWord);
        
        return (
          <span key={i} className="relative inline-block overflow-hidden pb-[0.06em]">
            {/* Ghost word */}
            <span 
              className="block opacity-10" 
              aria-hidden="true"
              style={isHighlighted ? { fontStyle: 'italic', color: '#b8956a' } : undefined}
            >
              {word}
            </span>
            {/* Reveal word */}
            <motion.span
              variants={wordVariants}
              className="absolute inset-0 block"
              style={isHighlighted ? { fontStyle: 'italic', color: '#b8956a' } : undefined}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.div>
  );
};

export default function WeddingInvitation() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="rsvp" className="relative w-full py-20 md:py-32 px-7 overflow-hidden" style={{ backgroundColor: '#faf9f6' }}>
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
      
      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* The "Invitation Card" Frame - FOCUSED WIDTH */}
        <div className="flex flex-col items-center text-center py-12 md:py-20 px-6 md:px-16 relative">
          
          {/* Animated Border Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute inset-0 border-[0.5px] border-[rgba(184,149,106,0.12)]"
          />
          
          {/* Top Ornament - Minimalist Cross */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-16">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                d="M20 0V40M0 14H40" 
                stroke="rgba(184, 149, 106, 0.4)" 
                strokeWidth="0.5"
              />
              <motion.circle 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                cx="20" cy="14" r="3" 
                stroke="rgba(184, 149, 106, 0.6)" 
                strokeWidth="0.5"
              />
            </svg>
          </motion.div>

          {/* Main Text - BIG & BALANCED with reveal animation */}
          <div className="space-y-6 md:space-y-10 mb-12 md:mb-20 w-full">
            <RevealText
              text="With the blessing of the Almighty God and our parents, we request the honour of your presence"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(28px, 4.5vw, 52px)',
                lineHeight: 1.1,
                color: '#2a2622',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            />
            
            <RevealText
              delay={0.8}
              text="as we join hands in the Holy Sacrament of Matrimony."
              highlightWords={['Holy', 'Sacrament', 'Matrimony']}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: 'clamp(32px, 5.5vw, 64px)',
                lineHeight: 1.05,
                letterSpacing: '0.01em',
                color: '#1a1816',
                maxWidth: '1100px',
                margin: '0 auto',
              }}
            />
          </div>

          {/* Bottom Ornament - Wide Divider */}
          <motion.div
            variants={lineVariants}
            className="w-32 h-[0.5px] bg-[rgba(184,149,106,0.3)] mb-10 md:mb-12"
          />

          {/* Bible Verse */}
          <motion.div className="flex flex-col items-center gap-4" variants={itemVariants}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                color: 'rgba(42, 38, 34, 0.7)',
                maxWidth: '800px',
              }}
            >
              &ldquo;May your constant love be with us, Lord, as we put our hope in you.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: 10,
                letterSpacing: '0.5em',
                color: '#b8956a',
                textTransform: 'uppercase',
              }}
            >
              — Psalm 33:22
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
