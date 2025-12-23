import { Suspense, lazy } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';

// Lazy load below-the-fold components
const JourneyRoadmap = lazy(() => import('@/components/JourneyRoadmap'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const SeasonalHotspots = lazy(() => import('@/components/SeasonalHotspots'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('./Footer'));
const FloatingWhatsApp = lazy(() => import('./FloatingWhatsApp'));

function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Navigation />
      <HeroSection />

      <Suspense fallback={<div className="h-screen w-full bg-background/50 animate-pulse" />}>
        <JourneyRoadmap />
        <ServicesSection />
        <SeasonalHotspots />
        <AboutSection />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  )
}

export default Home
