import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: 'Absolutely incredible experience! The team curated the perfect Bali itinerary for our honeymoon. Every detail was thoughtfully planned, from private villa stays to hidden temple tours. We felt like VIPs the entire trip!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'I\'ve traveled with many agencies, but this one stands apart. The local expertise made all the difference — we discovered authentic experiences tourists never see. Worth every penny and more!'
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: 'From booking to landing back home, the entire journey was seamless. The 24/7 support was a lifesaver when our flight got delayed. They handled everything with professionalism and care. Highly recommended!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
            Stories from Our Travelers
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it — hear from those who've explored with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white dark:bg-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-text-main dark:text-white italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="w-14 h-14 border-2 border-primary">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {/* Floating Star Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-text-muted dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
