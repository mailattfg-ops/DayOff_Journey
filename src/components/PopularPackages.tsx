import { Star, Clock, Users, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    isBestSeller: false
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
    isBestSeller: true
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
    isBestSeller: false
  }
];

export default function PopularPackages() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50 dark:bg-background-dark/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Trending</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
            Popular Packages
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of happy travelers on our most loved journeys
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.isBestSeller ? 'lg:scale-105 ring-2 ring-primary' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Badge */}
                {pkg.isBestSeller && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white shadow-lg">
                      Best Seller
                    </Badge>
                  </div>
                )}

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 dark:bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <span className="text-xs text-text-muted dark:text-gray-400 font-medium">From</span>
                    <p className="text-xl font-bold text-text-main dark:text-white">
                      ${pkg.price}
                    </p>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>

                {/* Meta Info */}
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

                {/* Rating */}
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

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary-light transition-all hover:scale-[1.02] active:scale-[0.98]">
                  View Deal
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
