import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Slide Data
const slides = [
  {
    id: 'spiritual',
    image: '/images/kashi.webp',
    category: 'Spiritual Journey',
    headline: 'Discover India’s Sacred Paths',
    subline: 'Begin a soulful journey to sacred places that inspire peace and devotion.',
    targetId: 'spiritual-journeys'
  },
  {
    id: 'explore-all',
    image: '/images/alleppey.webp',
    category: 'Explore All',
    headline: 'Explore India, One Destination at a Time',
    subline: 'Discover breathtaking destinations crafted for every kind of traveler.',
    targetId: 'all-destinations'
  },
  {
    id: 'trending',
    image: '/images/manali_11zon.webp',
    category: 'Trending Now',
    headline: 'Travel What Everyone’s Talking About',
    subline: 'Explore the most loved and trending travel experiences of the season.',
    targetId: 'trending-now'
  }
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const isFirstRender = useRef(true);

  // Auto-slide logic
  useEffect(() => {
    // Disable first render flag after first mount (and potentially strictly after first paint if we want to be safe, but Effect is fine)
    // Actually, setting it in useEffect ensures subsequent renders (due to state change) see it as false.
    // However, StrictMode might run this twice, but for production it's fine.
    // For the very first paint, ref is true.
    const timer = setInterval(() => {
        isFirstRender.current = false; // Ensure it's false for subsequent slides
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  // Ensure isFirstRender is false on manual navigation too
  const handleNext = () => {
    isFirstRender.current = false;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    isFirstRender.current = false;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleExplore = (targetId: string) => {
    navigate('/destinations', { state: { scrollTo: targetId } });
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <AnimatePresence mode='wait'>
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: isFirstRender.current ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Background Image with Scale Animation */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                  // @ts-ignore
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </motion.div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content Layer */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
        <AnimatePresence mode='wait'>
          <motion.div
            key={slides[currentSlide].id}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Brand Title (Fixed across slides visually via consistent rendering, but animating in here for effect) */}
            {/* Actually requirement said "Common Elements... Fixed Tagline". Let's separate fixed elements if they shouldn't animate out.
                But usually sliding content is nicer. Let's keep Brand/Tagline fixed? 
                Req: "Brand Title: DayOff Journeys... Fixed Tagline... CTA Action...". 
                Wait, if CTA redirects to DIFFERENT sections, CTA MUST be part of the slide content state.
                Let's make Brand/Tagline animate smoothly or be static. Content below changes.
            */}
          </motion.div>
        </AnimatePresence>
        
        {/* Fixed Top Elements (Optional) or just animate everything. 
            User said "Common Elements for ALL Slides". 
            Let's animate the category/headline/subline, but keep Brand Title static?
            Actually, let's put the Brand Title at the top or just part of the flow.
            The Requirement says: "Common Elements for ALL Slides: Brand Title... Fixed Tagline... CTA Button".
            Wait, CTA action redirects to *corresponding destination*. So CTA button *looks* specific but action changes.
            Let's render the container with key.
         */}
          
            {/* Fixed Top Elements - Tagline & Brand */}
            <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               className="mb-2 md:mb-4"
            >
               <p className="text-sm md:text-base text-white/80 font-medium tracking-[0.2em] uppercase mb-1">
                 Where Memories Are Beautifully Crafted
               </p>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                 <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-white">
                   DayOff Journeys
                 </span>
               </h2>
            </motion.div>

             <AnimatePresence mode='wait'>
                <motion.div
                   key={slides[currentSlide].id}
                   className="space-y-4 md:space-y-6"
                >
                   {/* Category Label */}
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                   >
                     <span className="inline-block px-3 py-1 border border-white/30 rounded-full text-[10px] md:text-xs text-white/80 uppercase tracking-widest backdrop-blur-sm">
                       {slides[currentSlide].category}
                     </span>
                   </motion.div>

                   {/* Headline */}
                   <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.7, delay: 0.4 }}
                     className="text-2xl md:text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-2xl px-2"
                   >
                     {slides[currentSlide].headline}
                   </motion.h1>

                   {/* Supporting Line */}
                   <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.7, delay: 0.5 }}
                     className="text-sm md:text-base text-white/90 max-w-xl mx-auto font-light leading-relaxed px-4 line-clamp-3 md:line-clamp-none"
                   >
                     {slides[currentSlide].subline}
                   </motion.p>

                   {/* CTA Button */}
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.5, delay: 0.6 }}
                     className="pt-2 md:pt-4"
                   >
                     <Button
                       onClick={() => handleExplore(slides[currentSlide].targetId)}
                       size="lg"
                       className="h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-full text-base font-semibold tracking-wide transition-all hover:scale-105 shadow-xl shadow-primary/20"
                     >
                       Explore Now <ArrowRight className="ml-2 w-5 h-5" />
                     </Button>
                   </motion.div>
                </motion.div>
             </AnimatePresence>

             {/* Slide Indicators */}
             <div className="mt-14 flex gap-3 z-40">
               {slides.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setCurrentSlide(index)}
                   className={`h-1.5 rounded-full transition-all duration-500 ${
                     index === currentSlide ? 'w-8 md:w-12 bg-primary' : 'w-2 bg-white/40 hover:bg-white/80'
                   }`}
                 />
               ))}
             </div>
         </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 z-40 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>


    </section>
  );
}
