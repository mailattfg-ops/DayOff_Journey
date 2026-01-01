import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { allDestinations } from '@/data/destinations';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleBookNow = (title: string) => {
    navigate('/', { state: { selectedDestination: title } });
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };



  const heroDestinationIds = ['munnar', 'ooty', 'kodaikanal', 'mysuru', 'alleppey', 'kochi', 'kodungallur'];
  const destinations = heroDestinationIds.map(id => {
    const dest = allDestinations.find(d => d.id === id);
    return {
      name: dest?.title || '',
      image: dest?.image || '',
      desc: dest?.tagline || ''
    };
  }).filter(d => d.name);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [destinations.length]);

  // Calculate visible items for infinite scroll effect
  // We duplicate the items to create a seamless loop effect visually if we were doing infinite scroll,
  // but for a simple slide, we can just slide the track.

  const extendedDestinations = [...destinations, ...destinations.slice(0, 3)];
  const totalItems = extendedDestinations.length;

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage: "url('/images/hero-bg.webp')"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-12 lg:py-20 w-full">
        <div className="max-w-4xl space-y-6 mb-16">
          {/* Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight animate-fade-in-up drop-shadow-lg"
          >
            Escape to
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">Paradise</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-white/90 max-w-2xl animate-fade-in-up font-light"
            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
          >
            Discover the serene beauty of South India's finest hill stations. Curated journeys to Ooty, Munnar, and Kodaikanal.
          </p>

          <div
            className="animate-fade-in-up pt-4"
            style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
          >
            <Button
              onClick={scrollToContact}
              className="h-14 px-8 bg-white text-black hover:bg-white/90 font-bold text-lg rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
            >
              Explore Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Destination Carousel */}
        <div className="relative overflow-hidden group/carousel py-8">
          <div
            className="flex transition-transform duration-700 ease-in-out md:[--visible-items:2] lg:[--visible-items:3]"
            style={{
              // Use CSS variables for responsiveness
              '--items-count': totalItems,
              '--current-index': currentIndex,
              transform: 'translateX(calc(var(--current-index) * -100% / var(--items-count)))',
              width: 'calc(var(--items-count) * 100% / var(--visible-items, 1))'
            } as React.CSSProperties}
          >
            {extendedDestinations.map((dest, index) => (
              <div
                key={`${dest.name}-${index}`}
                style={{ width: `calc(100% / var(--items-count))` }}
                className="relative h-64 md:h-80 px-3 shrink-0" // px-3 provides the gap
                onClick={() => handleBookNow(dest.name)}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 relative group">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center gap-2 text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-wider">Explore</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{dest.name}</h2>
                    <p className="text-white/80 text-sm font-medium">{dest.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
