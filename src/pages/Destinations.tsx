import { ArrowLeft, MapPin, Star, Heart, Search, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import { lazy, Suspense, useState, useMemo } from 'react';
import { Destination } from '@/components/features/destinations/DestinationDetailModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SEO from '@/components/shared/SEO';
import LazyLoadWhenVisible from '@/components/shared/LazyLoadWhenVisible';

// Lazy load components
const DestinationDetailModal = lazy(() => import('@/components/features/destinations/DestinationDetailModal').then(module => ({ default: module.DestinationDetailModal })));
const Footer = lazy(() => import('@/components/layout/Footer'));

import { allDestinations } from '@/data/destinations';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Explicit IDs from user request
const templeIds = ['kanyakumari-devi', 'rameswaram', 'guruvayur', 'madurai', 'sabarimala', 'tirupati', 'shirdi', 'kashi', 'badrinath', 'kedarnath', 'vaishno-devi'];
const mosqueIds = ['ervadi', 'beemapally', 'thangal-para', 'muthupet', 'nagore', 'cheraman', 'malik-dinar', 'ullal', 'charminar', 'haji-ali', 'jama-masjid', 'ajmer'];
const churchIds = ['thiruvithamcode', 'edathua', 'bharananganam', 'malayattoor', 'koratty', 'velankanni', 'st-thomas-mount', 'bom-jesus'];

const allSpiritualIds = [...templeIds, ...mosqueIds, ...churchIds];

export default function DestinationsPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter & Search State
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [visibleCount, setVisibleCount] = useState(9);

    const regions = ['All', 'South India', 'North India', 'West India', 'East & North East'];

    const getRegion = (location: string) => {
        const loc = location.toLowerCase();
        if (loc.includes('kerala') || loc.includes('tamil nadu') || loc.includes('karnataka') || loc.includes('andhra') || loc.includes('telangana') || loc.includes('chennai') || loc.includes('madurai') || loc.includes('coorg') || loc.includes('hampi') || loc.includes('mysuru') || loc.includes('munnar') || loc.includes('kochi') || loc.includes('alleppey') || loc.includes('trivandrum') || loc.includes('kanyakumari') || loc.includes('rameswaram') || loc.includes('tirupati') || loc.includes('bharananganam')) {
            return 'South India';
        }
        if (loc.includes('delhi') || loc.includes('himachal') || loc.includes('uttarakhand') || loc.includes('uttar pradesh') || loc.includes('jammu') || loc.includes('ladakh') || loc.includes('punjab') || loc.includes('rajasthan') || loc.includes('varanasi') || loc.includes('agra') || loc.includes('rishikesh') || loc.includes('manali') || loc.includes('shimla') || loc.includes('kashmir') || loc.includes('amritsar') || loc.includes('jaipur') || loc.includes('udaipur') || loc.includes('jaisalmer') || loc.includes('badrinath') || loc.includes('kedarnath') || loc.includes('vaishno') || loc.includes('ajmer')) {
            return 'North India';
        }
        if (loc.includes('goa') || loc.includes('maharashtra') || loc.includes('gujarat') || loc.includes('mumbai') || loc.includes('pune') || loc.includes('shirdi')) {
            return 'West India';
        }
        if (loc.includes('west bengal') || loc.includes('odisha') || loc.includes('bihar') || loc.includes('sikkim') || loc.includes('assam') || loc.includes('meghalaya') || loc.includes('arunachal') || loc.includes('kolkata')) {
            return 'East & North East';
        }
        return 'Other';
    };

    // Scroll to section on load
    useEffect(() => {
        if (location.state && (location.state as any).scrollTo) {
            const elementId = (location.state as any).scrollTo;
            const element = document.getElementById(elementId);
            if (element) {
                // Add a small delay to ensure rendering
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                // Clear state
                window.history.replaceState({}, '');
            }
        }
    }, [location]);

    // Filter Logic
    const filteredDestinations = useMemo(() => {
        return allDestinations.filter(dest => {
            const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                dest.location.toLowerCase().includes(searchQuery.toLowerCase());

            const region = getRegion(dest.location);
            const matchesRegion = selectedRegion === 'All' || region === selectedRegion;

            const isSpiritual = allSpiritualIds.includes(dest.id);

            return matchesSearch && matchesRegion && !isSpiritual;
        });
    }, [searchQuery, selectedRegion]);

    const handleExploreClick = (dest: Destination) => {
        setSelectedDest(dest);
        setIsModalOpen(true);
    };

    const handleBookNow = (destinationName: string) => {
        setIsModalOpen(false);
        navigate('/', { state: { selectedDestination: destinationName, scrollTo: 'contact' } });
    };

    const trendingDestinations = allDestinations.filter(d => ['ooty', 'munnar', 'kodaikanal', 'wayanad', 'hyderabad'].includes(d.id));

    // Spiritual IDs are now defined outside component

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
                    width="400"
                    height="320"
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
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                        loading="eager"
                        decoding="sync"
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

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in-up font-light delay-200">
                        Discover the most popular places in India. From misty hills to serene backwaters and divine spiritual centers.
                    </p>
                </div>
            </div>

            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 space-y-20">

                {/* All Destinations */}
                <LazyLoadWhenVisible minHeight="600px">
                    <section id="all-destinations" className="scroll-mt-24 bg-primary/5 rounded-[2.5rem] p-6 md:p-12 border border-primary/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 mb-8 relative z-10">
                            <h2 className="text-4xl font-bold">Explore All Destinations</h2>
                        </div>

                        {/* Search & Filter Controls */}
                        <div className="space-y-6 mb-12">
                            {/* Search Bar */}
                            <div className="relative max-w-md">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search places, locations..."
                                    className="pl-10 h-12 text-lg rounded-full border-2 border-border/50 hover:border-primary/50 focus:border-primary transition-all"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setVisibleCount(9); // Reset visible count on search
                                    }}
                                />
                            </div>

                            {/* Category/Region Filters */}
                            <div className="flex flex-wrap gap-2">
                                {regions.map(region => (
                                    <Button
                                        key={region}
                                        variant={selectedRegion === region ? "default" : "outline"}
                                        onClick={() => {
                                            setSelectedRegion(region);
                                            setVisibleCount(9); // Reset visible count on region change
                                        }}
                                        className={`rounded-full border-border/50 ${selectedRegion === region ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'hover:border-primary/50 hover:bg-transparent'}`}
                                    >
                                        {region}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Destinations Grid */}
                        {filteredDestinations.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredDestinations.slice(0, visibleCount).map((place) => (
                                        <DestinationCard key={place.id} place={place} />
                                    ))}
                                </div>

                                {/* Load More Button */}
                                {visibleCount < filteredDestinations.length && (
                                    <div className="mt-12 flex justify-center">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            onClick={() => setVisibleCount(prev => prev + 9)}
                                            className="h-12 px-8 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary transition-all group"
                                        >
                                            Load More Destinations
                                            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                        </Button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20 bg-muted/30 rounded-3xl">
                                <p className="text-2xl text-muted-foreground font-medium mb-6">
                                    {searchQuery ? `No destinations found matching "${searchQuery}"` : `No destinations found in ${selectedRegion}`}
                                </p>

                                <div className="flex flex-col items-center gap-4">
                                    <Button
                                        onClick={() => {
                                            const term = searchQuery || selectedRegion;
                                            navigate('/', { state: { customDestination: term, scrollTo: 'contact' } });
                                        }}
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                                    >
                                        Plan a Trip into {searchQuery || selectedRegion}
                                    </Button>

                                    <Button
                                        variant="link"
                                        onClick={() => {
                                            setSearchQuery('');
                                            setSelectedRegion('All');
                                        }}
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Clear all filters to see all places
                                    </Button>
                                </div>
                            </div>
                        )}
                    </section>
                </LazyLoadWhenVisible>

                {/* Trending Section */}
                <LazyLoadWhenVisible minHeight="400px">
                    <section id="trending-now" className="scroll-mt-24 bg-primary/5 rounded-[2.5rem] p-6 md:p-12 border border-primary/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                        <div className="flex flex-col mb-8 relative z-10">
                            <div className="flex items-center gap-2">
                                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                                <h2 className="text-4xl font-bold">Trending Now</h2>
                            </div>
                            <p className="text-muted-foreground mt-1 ml-10">Top rated by travellers</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {trendingDestinations.map(place => (
                                <DestinationCard key={place.id} place={place} />
                            ))}
                        </div>
                    </section>
                </LazyLoadWhenVisible>

                {/* Spiritual Journeys Section */}
                <LazyLoadWhenVisible minHeight="400px">
                    <section id="spiritual-journeys" className="scroll-mt-24 bg-primary/5 rounded-[2.5rem] p-6 md:p-12 border border-primary/10 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                            <div className="flex items-center gap-3">
                                <Heart className="hidden md:block w-8 h-8 text-red-500 fill-red-500" />
                                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 pb-1">
                                    Spiritual Journeys
                                </h2>
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-10 text-lg max-w-2xl">Embark on a divine path through India's most revered pilgrimage sites.</p>

                        <Tabs defaultValue="temples" className="w-full">
                            <TabsList className="w-full max-w-lg grid grid-cols-3 h-auto mb-12 p-1 bg-primary/5 rounded-full border border-primary/10">
                                <TabsTrigger
                                    value="temples"
                                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 py-3 font-medium whitespace-normal h-full flex items-center justify-center leading-tight"
                                >
                                    Temples
                                </TabsTrigger>
                                <TabsTrigger
                                    value="mosques"
                                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 py-3 font-medium whitespace-normal h-full flex items-center justify-center leading-tight"
                                >
                                    Mosques
                                </TabsTrigger>
                                <TabsTrigger
                                    value="churches"
                                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 py-3 font-medium whitespace-normal h-full flex items-center justify-center leading-tight"
                                >
                                    Churches
                                </TabsTrigger>
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
                </LazyLoadWhenVisible>
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
