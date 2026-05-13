'use client';

import { useState, useEffect } from 'react';
import WeddingLoader from '@/components/wedding/WeddingLoader';
import WeddingNav from '@/components/wedding/WeddingNav';
import WeddingHero from '@/components/wedding/WeddingHero';
import WeddingCountdown from '@/components/wedding/WeddingCountdown';
import WeddingInvitation from '@/components/wedding/WeddingInvitation';
import WeddingCeremony from '@/components/wedding/WeddingCeremony';
import WeddingReception from '@/components/wedding/WeddingReception';
import WeddingStory from '@/components/wedding/WeddingStory';
import WeddingFamilies from '@/components/wedding/WeddingFamilies';
import WeddingGallery from '@/components/wedding/WeddingGallery';

import WeddingVenue from '@/components/wedding/WeddingVenue';
import WeddingTravel from '@/components/wedding/WeddingTravel';
import WeddingFooter from '@/components/wedding/WeddingFooter';
import FloatingMonogram from '@/components/wedding/FloatingMonogram';

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <WeddingLoader />}
      <WeddingNav />
      <FloatingMonogram />
      <WeddingHero />
      <WeddingCountdown />
      <WeddingInvitation />
      <WeddingCeremony />
      <WeddingStory />
      <WeddingFamilies />
      <WeddingGallery />
      <WeddingTravel />
      <WeddingVenue />
      <WeddingFooter />
    </>
  );
}
