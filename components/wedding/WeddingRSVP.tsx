'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  attending: 'yes' | 'no' | '';
  guestCount: string;
  message: string;
}

export default function WeddingRSVP() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    attending: '',
    guestCount: '1',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        attending: '',
        guestCount: '1',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="rsvp" className="w-full py-24 md:py-32 px-6 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #6b2040 0%, #4a1428 70%)',
      }}
    >
      {/* Watermark Pattern */}
      <div
        className="absolute inset-0 opacity-4 pointer-events-none"
        style={{
          backgroundImage: 'url(data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Cpath fill=%22none%22 stroke=%22%23d4b896%22 d=%22M200,50 Q250,100 200,150 Q150,100 200,50 M200,250 Q250,300 200,350 Q150,300 200,250%22 /%3E%3C/svg%3E)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
        }}
      />

      <motion.div
        className="relative max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-display text-gold uppercase mb-4"
            style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}
          >
            Will You Join Us?
          </h2>
          <h1
            className="font-serif italic text-cream font-light mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            RSVP
          </h1>
          <p className="font-sans text-cream opacity-50 text-sm mb-6" style={{ fontWeight: 300 }}>
            Please respond by 20 May 2026
          </p>
          <div className="w-12 h-px bg-gold mx-auto opacity-50" />
        </div>

        {/* Form or Success Message */}
        <AnimatedContent submitted={submitted} formData={formData} onSubmit={handleSubmit} onChange={handleChange} />
      </motion.div>
    </section>
  );
}

function AnimatedContent({
  submitted,
  formData,
  onSubmit,
  onChange,
}: {
  submitted: boolean;
  formData: FormData;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}) {
  return (
    <>
      {!submitted ? (
        <motion.form
          onSubmit={onSubmit}
          className="space-y-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Full Name */}
          <div>
            <label
              className="font-display uppercase text-gold text-xs block mb-2"
              style={{ letterSpacing: '0.2em' }}
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={onChange}
              required
              className="w-full bg-opacity-6 text-cream placeholder-opacity-35 placeholder-cream border-b border-opacity-30 border-gold focus:border-gold-light focus:outline-none py-4 px-0 transition-colors duration-300"
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.06)',
                fontSize: '1rem',
              }}
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="font-display uppercase text-gold text-xs block mb-2"
              style={{ letterSpacing: '0.2em' }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
              className="w-full bg-opacity-6 text-cream placeholder-opacity-35 placeholder-cream border-b border-opacity-30 border-gold focus:border-gold-light focus:outline-none py-4 px-0 transition-colors duration-300"
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.06)',
                fontSize: '1rem',
              }}
              placeholder="your@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className="font-display uppercase text-gold text-xs block mb-2"
              style={{ letterSpacing: '0.2em' }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              required
              className="w-full bg-opacity-6 text-cream placeholder-opacity-35 placeholder-cream border-b border-opacity-30 border-gold focus:border-gold-light focus:outline-none py-4 px-0 transition-colors duration-300"
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.06)',
                fontSize: '1rem',
              }}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Attending */}
          <div>
            <label
              className="font-display uppercase text-gold text-xs block mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Will you be attending?
            </label>
            <div className="flex gap-4">
              {(['yes', 'no'] as const).map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value={option}
                    checked={formData.attending === option}
                    onChange={onChange}
                    className="sr-only"
                  />
                  <span
                    className={`px-6 py-3 font-display text-xs uppercase border transition-all duration-300 ${
                      formData.attending === option
                        ? 'bg-gold text-burgundy border-gold'
                        : 'border-opacity-30 border-gold text-cream'
                    }`}
                    style={{ letterSpacing: '0.2em' }}
                  >
                    {option === 'yes' ? 'Yes, joyfully!' : 'Regretfully unable'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Guest Count */}
          <div>
            <label
              className="font-display uppercase text-gold text-xs block mb-2"
              style={{ letterSpacing: '0.2em' }}
            >
              Number of Guests
            </label>
            <select
              name="guestCount"
              value={formData.guestCount}
              onChange={onChange}
              className="w-full bg-opacity-6 text-cream border-b border-opacity-30 border-gold focus:border-gold-light focus:outline-none py-4 px-0 transition-colors duration-300"
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.06)',
                fontSize: '1rem',
              }}
            >
              <option value="1" style={{ color: '#1a1410' }}>
                1 Guest
              </option>
              <option value="2" style={{ color: '#1a1410' }}>
                2 Guests
              </option>
              <option value="3" style={{ color: '#1a1410' }}>
                3 Guests
              </option>
              <option value="4+" style={{ color: '#1a1410' }}>
                4+ Guests
              </option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              className="font-display uppercase text-gold text-xs block mb-2"
              style={{ letterSpacing: '0.2em' }}
            >
              Message / Wishes
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              rows={3}
              className="w-full bg-opacity-6 text-cream placeholder-opacity-35 placeholder-cream border-b border-opacity-30 border-gold focus:border-gold-light focus:outline-none py-4 px-0 transition-colors duration-300 resize-none"
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.06)',
                fontSize: '1rem',
              }}
              placeholder="Share your wishes for us..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-gold text-burgundy py-4 font-display uppercase text-sm transition-colors duration-300"
            style={{ letterSpacing: '0.25em' }}
            whileHover={{ backgroundColor: 'var(--gold-light)' }}
          >
            Submit RSVP
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Check size={48} className="text-gold" />
          </motion.div>
          <h2
            className="font-serif italic text-cream mb-3"
            style={{ fontSize: '2rem' }}
          >
            We&apos;ll See You There!
          </h2>
          <p className="font-sans text-cream opacity-60 text-sm" style={{ fontWeight: 300 }}>
            We can&apos;t wait to celebrate with you.
          </p>
        </motion.div>
      )}
    </>
  );
}
