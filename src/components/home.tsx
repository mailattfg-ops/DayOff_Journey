import { Suspense, lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const elementId = (location.state as any).scrollTo;

      const scroll = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear state
          window.history.replaceState({}, '');
        } else {
          // Retry a few times for lazy loaded components
          setTimeout(scroll, 100);
        }
      };

      // Initial delay to ensure page transition/mount
      setTimeout(scroll, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
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
