import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CustomTripCTA() {
  return (
    <section className="py-20 lg:py-24 bg-background-dark dark:bg-background-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#131f1c] via-[#10221d] to-[#0f1e1b] p-12 lg:p-16">
          {/* Abstract Gradient Blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Personalized</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Can't Find Your
              <br />
              <span className="text-primary">Dream Destination?</span>
            </h2>

            <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let our travel experts craft a bespoke itinerary tailored to your unique preferences, budget, and dreams. Your perfect adventure awaits.
            </p>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-light text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95 group"
            >
              Plan My Custom Trip
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 text-white/70">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-sm">Custom Trips</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm">Expert Support</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">4.9★</p>
                <p className="text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
