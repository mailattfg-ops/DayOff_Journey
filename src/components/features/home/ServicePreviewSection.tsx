import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServicePreviewSection() {
  const navigate = useNavigate();

  return (
    <section className="py-12 lg:py-16 bg-white dark:bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="relative rounded-[2.5rem] overflow-hidden p-8 lg:p-20 text-center group">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/images/servicePage.webp"
              alt="Premium Services"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-white uppercase tracking-wide">
                    Premium Experiences
                </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl">
              Elevate Your <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
                Travel Experience
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
              From personalized itineraries to luxury fleet services, we offer comprehensive travel solutions tailored to your unique needs.
            </p>

            <Button
              onClick={() => navigate('/services')}
              className="h-14 px-10 bg-primary hover:bg-primary/90 text-white rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-primary/20 flex items-center gap-3"
            >
              Explore Our Services <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
