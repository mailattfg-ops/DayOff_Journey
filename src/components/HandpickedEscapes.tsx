import { Sparkles } from 'lucide-react';

const escapes = [
  {
    id: 1,
    title: 'Santorini Sunset',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
    tag: 'Romantic'
  },
  {
    id: 2,
    title: 'Bali Paradise',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    tag: 'Adventure'
  },
  {
    id: 3,
    title: 'Swiss Alps',
    location: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    tag: 'Nature'
  }
];

export default function HandpickedEscapes() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Handpicked</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
            Escape to Paradise
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
            Carefully curated destinations that promise extraordinary experiences and lasting memories
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {escapes.map((escape) => (
            <div
              key={escape.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={escape.image}
                  alt={escape.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Tag Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-full text-sm font-semibold text-text-main dark:text-white shadow-lg">
                    {escape.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform">
                    {escape.title}
                  </h3>
                  <p className="text-white/90 font-medium">{escape.location}</p>
                </div>
              </div>

              {/* Scrapbook Polaroid Overlay (Desktop Only) */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-32 h-32 bg-white rounded-lg shadow-xl rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-6 p-2">
                <img
                  src={escape.image}
                  alt={escape.title}
                  className="w-full h-20 object-cover rounded"
                />
                <p className="text-xs text-center mt-2 font-handwriting text-gray-600">
                  Explore →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
