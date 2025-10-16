import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import ProcessSection from '@/components/home/ProcessSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProcessSection />
      <CTASection />
    </>
  );
}
