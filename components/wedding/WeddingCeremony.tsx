'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

const EVENTS = [
  {
    date: 'MAY 30, 2026',
    title: 'Eve of the Wedding',
    description: 'An evening of prayer, music, and togetherness as both families come together in celebration.',
    time: '6:30 PM',
    venue: 'Groom\'s Home, Ramamangalam',
    location: 'Muvattupuzha, Kerala',
    type: 'FAMILY EVENT',
    side: 'right',
    image: '/JIJ01366.jpg'
  },
  {
    date: 'MAY 31, 2026',
    title: 'The Wedding Ceremony',
    description: 'Nena & Melbin make their covenant before God at the beautiful St. Athanasius Cathedral — surrounded by family, faith, and love.',
    time: '10:30 AM',
    venue: 'St. Athanasius Jacobite Syrian Cathedral',
    location: 'Puthenkurish, Ernakulam, Kerala',
    type: 'MAIN CEREMONY',
    side: 'left',
    image: '/JIJ01597.jpg'
  },
  {
    date: 'MAY 31, 2026',
    title: 'Wedding Reception',
    description: 'A joyful celebration with feasting, laughter, and blessings from our dearest people.',
    time: '1:00 PM',
    venue: 'Cathedral Parish Hall',
    location: 'Puthenkurish, Ernakulam, Kerala',
    type: 'CELEBRATION',
    side: 'right',
    image: '/JIJ01646.jpg'
  }
];

export default function WeddingCeremony() {
  return (
    <section id="ceremony" className="relative w-full bg-[#faf9f6] pt-10 pb-12 md:pt-12 md:pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-7 relative">
        
        {/* Central Timeline Line - Adjusted for Mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-[rgba(184,149,106,0.15)] -translate-x-1/2" />

        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-12 md:mb-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="font-display text-[10px] tracking-[0.5em] text-[#b8956a] uppercase mb-6">
            The Sacrament & The Celebration
          </span>
          <h2 className="font-serif italic font-light text-[#1a1816] leading-tight mb-10"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            Ceremony & Reception
          </h2>
          <div className="flex items-center gap-4 w-24">
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
            <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
          </div>
        </motion.div>

        <div className="space-y-12 md:space-y-32">
          {EVENTS.map((event, i) => (
            <div key={i} className="relative" id={event.title.toLowerCase().includes('reception') ? 'reception' : undefined}>
              {/* Timeline Dot with Glow */}
              <motion.div 
                className="hidden md:block absolute left-1/2 top-6 w-3 h-3 bg-[#b8956a] rounded-full -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(184,149,106,0.4)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              <div className={`flex flex-col items-start md:items-center ${event.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                {/* Visual Header (Mobile Specific) / Image Side (Desktop) */}
                <motion.div 
                  className="w-full md:w-1/2 px-0 md:px-10 mb-6 md:mb-0 mt-2 md:mt-0"
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <div className={`relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden group rounded-2xl shadow-sm`}>
                    {/* Subtle warm tint overlay */}
                    <div className="absolute inset-0 bg-[#b8956a]/5 mix-blend-multiply z-10 pointer-events-none" />
                    
                    <motion.img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale-[0.05] contrast-[1.05]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 2 }}
                    />
                    
                    {/* Fade at the bottom for mobile transition */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#faf9f6] to-transparent z-10 md:hidden" />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className="w-full md:w-1/2 px-4 md:px-16"
                  initial={{ opacity: 0, x: event.side === 'left' ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <div className={`flex flex-col items-center text-center ${event.side === 'left' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    <span className="font-display text-[9px] md:text-[10px] tracking-[0.4em] text-[#b8956a] uppercase mb-3">
                      {event.date}
                    </span>
                    
                    <h3 className="font-serif text-[30px] md:text-[44px] text-[#1a1816] leading-tight mb-4 md:pr-0">
                      {event.title}
                    </h3>
                    
                    <p className="font-sans text-[14px] leading-relaxed text-[#2a2622]/70 mb-6 max-w-[400px]">
                      {event.description}
                    </p>

                    <div className={`space-y-4 mb-8 flex flex-col items-center ${event.side === 'left' ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="flex items-center gap-3 text-[#b8956a]/90">
                        <Clock size={13} strokeWidth={1.5} />
                        <span className="font-display text-[11px] tracking-[0.1em] uppercase font-medium">{event.time}</span>
                      </div>
                      <div className={`flex flex-col md:flex-row items-center ${event.side === 'left' ? 'md:items-end' : 'md:items-start'} gap-1 md:gap-3 text-[#2a2622]/60`}>
                        <MapPin size={13} strokeWidth={1.5} className="md:mt-1 flex-shrink-0" />
                        <span className={`font-sans text-[13px] leading-snug text-center ${event.side === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                          {event.venue} <br className="hidden md:block" />
                          <span className="md:hidden">, </span>
                          {event.location}
                        </span>
                      </div>
                    </div>

                    <span className="inline-block px-5 py-2 bg-[#b8956a]/5 border-[0.5px] border-[#b8956a]/20 rounded-full font-display text-[8px] tracking-[0.2em] text-[#b8956a] uppercase">
                      {event.type}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
