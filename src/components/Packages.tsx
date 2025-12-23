import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Users } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Maldives Luxury Retreat',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    duration: '7 Days',
    people: '2-4',
    price: 2499,
    rating: 4.9,
    reviews: 234,
    badges: ['Popular', 'Beach'],
    tripType: 'Luxury',
    duration_days: 7
  },
  {
    id: 2,
    title: 'Tokyo Cultural Experience',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    duration: '10 Days',
    people: '2-6',
    price: 3299,
    rating: 5.0,
    reviews: 456,
    badges: ['Best Seller'],
    tripType: 'Cultural',
    duration_days: 10
  },
  {
    id: 3,
    title: 'Iceland Northern Lights',
    image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80',
    duration: '6 Days',
    people: '2-8',
    price: 1899,
    rating: 4.8,
    reviews: 189,
    badges: ['Limited Time'],
    tripType: 'Adventure',
    duration_days: 6
  },
  {
    id: 4,
    title: 'Paris Romantic Escape',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    duration: '5 Days',
    people: '2',
    price: 2199,
    rating: 4.9,
    reviews: 321,
    badges: ['Romantic'],
    tripType: 'Cultural',
    duration_days: 5
  },
  {
    id: 5,
    title: 'African Safari Adventure',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    duration: '12 Days',
    people: '4-8',
    price: 4599,
    rating: 5.0,
    reviews: 156,
    badges: ['Adventure', 'Wildlife'],
    tripType: 'Adventure',
    duration_days: 12
  },
  {
    id: 6,
    title: 'Bali Wellness Retreat',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    duration: '8 Days',
    people: '1-4',
    price: 1799,
    rating: 4.7,
    reviews: 243,
    badges: ['Wellness'],
    tripType: 'Relaxation',
    duration_days: 8
  }
];

export default function Packages() {
  const [filters, setFilters] = useState({
    tripType: '',
    duration: '',
    priceRange: ''
  });

  const clearFilters = () => {
    setFilters({ tripType: '', duration: '', priceRange: '' });
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative h-[300px] bg-gradient-to-br from-primary/90 to-primary-light/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-20 flex items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-4">
              Travel Packages
            </h1>
            <p className="text-xl text-white/90">
              Discover your perfect journey from our curated collection
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-md">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-text-muted" />
              <span className="text-sm font-semibold text-text-main dark:text-white">Filters:</span>
              
              <select
                value={filters.tripType}
                onChange={(e) => setFilters({...filters, tripType: e.target.value})}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-medium hover:border-primary transition-colors"
              >
                <option value="">All Trip Types</option>
                <option value="Luxury">Luxury</option>
                <option value="Cultural">Cultural</option>
                <option value="Adventure">Adventure</option>
                <option value="Relaxation">Relaxation</option>
              </select>

              <select
                value={filters.duration}
                onChange={(e) => setFilters({...filters, duration: e.target.value})}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-medium hover:border-primary transition-colors"
              >
                <option value="">All Durations</option>
                <option value="short">1-5 Days</option>
                <option value="medium">6-10 Days</option>
                <option value="long">11+ Days</option>
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-medium hover:border-primary transition-colors"
              >
                <option value="">All Prices</option>
                <option value="budget">Under $2000</option>
                <option value="mid">$2000-$3500</option>
                <option value="luxury">$3500+</option>
              </select>
            </div>

            {(filters.tripType || filters.duration || filters.priceRange) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-primary hover:text-primary-light"
              >
                <X className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {pkg.badges.map((badge) => (
                      <Badge key={badge} className="bg-primary text-white shadow-lg">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 dark:bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                      <span className="text-xs text-text-muted dark:text-gray-400 font-medium">From</span>
                      <p className="text-xl font-bold text-text-main dark:text-white">
                        ${pkg.price}
                      </p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-text-muted dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{pkg.people}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(pkg.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-text-main dark:text-white">
                      {pkg.rating}
                    </span>
                    <span className="text-sm text-text-muted dark:text-gray-400">
                      ({pkg.reviews} reviews)
                    </span>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-light transition-all hover:scale-[1.02] active:scale-[0.98]">
                    View Deal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trip CTA */}
      <section className="py-16 bg-gray-50 dark:bg-background-dark/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let us create a custom package tailored specifically to your preferences
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-light">
            Request Custom Package
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
