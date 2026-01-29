import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/Navigation';
import SEO from '@/components/shared/SEO';
import { ArrowLeft } from 'lucide-react';
import { lazy, Suspense } from 'react';
import LazyLoadWhenVisible from '@/components/shared/LazyLoadWhenVisible';

const CoreServices = lazy(() => import('@/components/features/home/CoreServices'));
const ServicesSection = lazy(() => import('@/components/features/home/ServicesSection'));
const Footer = lazy(() => import('@/components/layout/Footer'));
const FloatingWhatsApp = lazy(() => import('@/components/features/contact/FloatingWhatsApp'));

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-background">
      <SEO
        title="Our Services | Dayoff Journeys"
        description="Explore our range of premium travel services, from personalized itineraries to luxury fleet options."
        canonical="/services"
        preloadImages={['/images/explore_destination.webp']}
      />
      <Navigation />

      {/* Hero Section */}
      <div className="relative min-h-[50vh] w-full overflow-hidden flex flex-col justify-center py-20">
        <div className="absolute inset-0">
          <img
            src="/images/servicePage.webp"
            alt="Services Hero Background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 w-full">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="w-fit text-white hover:text-white hover:bg-white/20 mb-8 pl-0 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Button>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight animate-fade-in-up drop-shadow-lg mb-6 will-change-transform">
            Our
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
              Services
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in-up font-light will-change-transform">
             Exceptional travel experiences tailored just for you.
          </p>
        </div>
      </div>

      <Suspense fallback={<div className="min-h-[400px]" />}>
        <CoreServices />
      </Suspense>

      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ServicesSection />
      </Suspense>

      <LazyLoadWhenVisible className="min-h-[400px]">
        <Footer />
      </LazyLoadWhenVisible>

      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}
