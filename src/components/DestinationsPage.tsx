import { ArrowLeft, MapPin, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { lazy, Suspense, useState } from 'react';
import { Destination } from './DestinationDetailModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Lazy load components
const DestinationDetailModal = lazy(() => import('./DestinationDetailModal').then(module => ({ default: module.DestinationDetailModal })));
const Footer = lazy(() => import('./Footer'));

import { allDestinations } from '@/data/destinations';

export default function DestinationsPage() {
    const navigate = useNavigate();
    const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExploreClick = (dest: Destination) => {
        setSelectedDest(dest);
        setIsModalOpen(true);
    };

    const handleBookNow = (destinationName: string) => {
        setIsModalOpen(false);
        navigate('/', { state: { selectedDestination: destinationName } });
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const trendingDestinations = allDestinations.filter(d => ['ooty', 'munnar', 'kodaikanal', 'mysuru', 'alleppey', 'kochi'].includes(d.id));

    // Explicit IDs from user request - Updated
    const templeIds = ['kanyakumari-devi', 'rameswaram', 'guruvayur', 'madurai', 'sabarimala', 'tirupati', 'shirdi', 'kashi', 'badrinath', 'kedarnath', 'vaishno-devi'];
    const mosqueIds = ['ervadi', 'beemapally', 'thangal-para', 'muthupet', 'nagore', 'cheraman', 'malik-dinar', 'ullal', 'charminar', 'haji-ali', 'jama-masjid', 'ajmer'];
    const churchIds = ['thiruvithamcode', 'edathua', 'bharananganam', 'malayattoor', 'koratty', 'velankanni', 'st-thomas-mount', 'bom-jesus'];

    const spiritualDestinations = {
        temples: allDestinations.filter(d => templeIds.includes(d.id)),
        mosques: allDestinations.filter(d => mosqueIds.includes(d.id)),
        churches: allDestinations.filter(d => churchIds.includes(d.id))
    };

    const DestinationCard = ({ place }: { place: Destination }) => (
        <div
            className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col relative isolation-isolate"
        >
            <div className="h-64 overflow-hidden relative shrink-0 rounded-t-3xl">
                <img
                    src={place.image}
                    alt={place.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1506459225028-52c6087b7486?w=800&q=80';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none" />
                <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border-0 text-white hover:bg-black/60">
                    {place.location}
                </Badge>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">{place.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {place.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                    {place.description}
                </p>
                <div className="mt-auto">
                    <Button
                        onClick={() => handleExploreClick(place)}
                        className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    >
                        <MapPin className="w-4 h-4" /> Explore Details
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <div className="relative min-h-[50vh] w-full overflow-hidden flex flex-col justify-center py-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/explore_destination.webp"
                        alt="Explore Destinations Background"
                        className="w-full h-full object-cover animate-fade-in-up"
                        // @ts-ignore
                        fetchPriority="high"
                        loading="eager"
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

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight animate-fade-in-up drop-shadow-lg mb-6">
                        Explore
                        <br />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
                            Destinations
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-fade-in-up font-light delay-200">
                        Discover the most popular places in India. From misty hills to serene backwaters and divine spiritual centers.
                    </p>
                </div>
            </div>

            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 space-y-20">

                {/* Trending Section */}
                <section>
                    <div className="flex items-center gap-2 mb-8">
                        <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                        <h2 className="text-4xl font-bold">Trending Now</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trendingDestinations.map(place => (
                            <DestinationCard key={place.id} place={place} />
                        ))}
                    </div>
                </section>

                {/* Spiritual Journeys Section */}
                <section>
                    <div className="flex items-center gap-2 mb-8">
                        <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                        <h2 className="text-4xl font-bold">Spiritual Journeys</h2>
                    </div>
                    <p className="text-muted-foreground mb-8 text-lg">Embark on a divine path through India's most revered pilgrimage sites.</p>

                    <Tabs defaultValue="temples" className="w-full">
                        <TabsList className="w-full max-w-md grid grid-cols-3 mb-8">
                            <TabsTrigger value="temples">Temples</TabsTrigger>
                            <TabsTrigger value="mosques">Mosques</TabsTrigger>
                            <TabsTrigger value="churches">Churches</TabsTrigger>
                        </TabsList>
                        <TabsContent value="temples" className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {spiritualDestinations.temples.map(place => (
                                    <DestinationCard key={place.id} place={place} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="mosques" className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {spiritualDestinations.mosques.map(place => (
                                    <DestinationCard key={place.id} place={place} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="churches" className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {spiritualDestinations.churches.map(place => (
                                    <DestinationCard key={place.id} place={place} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* All Destinations */}
                <section>
                    <h2 className="text-4xl font-bold mb-8">Explore All Destinations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allDestinations.map((place) => (
                            <DestinationCard key={place.id} place={place} />
                        ))}
                    </div>
                </section>
            </main>

            <Suspense fallback={null}>
                <DestinationDetailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    destination={selectedDest}
                    onBookNow={handleBookNow}
                />
            </Suspense>

            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
}
