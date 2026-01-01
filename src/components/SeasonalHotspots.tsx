import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, ArrowLeft, MapPin, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { allDestinations } from '@/data/destinations';

// Rich gallery data specific to this component
const richGalleryData: Record<string, { name: string; image: string; description: string }[]> = {
    ooty: [
        {
            name: 'Ooty Lake',
            image: '/images/Ooty-lake.webp',
            description: 'A picturesque artificial lake perfect for boating and evening relaxation.'
        },
        {
            name: 'Botanical Garden',
            image: '/images/Ooty-Botanical_Gardens.webp',
            description: 'Sprawling gardens showcasing exotic flora, ferns, and orchids.'
        },
        {
            name: 'Tea Plantations',
            image: '/images/Ooty-Tea.webp',
            description: 'Experience the aroma and greenery of world-class tea estates.'
        },
        {
            name: 'Doddabetta Peak',
            image: '/images/Ooty-Doddabeta.webp',
            description: 'The highest peak in the Nilgiris offering breathtaking panoramic views.'
        }
    ],
    kodaikanal: [
        {
            name: 'Coaker’s Walk',
            image: '/images/Coaker’s Walk.webp',
            description: 'A scenic pedestrian path offering mesmerizing views of the valley.'
        },
        {
            name: 'Kodaikanal Lake',
            image: '/images/Kodaikanal Lake.webp',
            description: 'The iconic star-shaped lake, the soul of Kodaikanal tourism.'
        },
        {
            name: 'Pine Forest',
            image: '/images/Pine Forest.webp',
            description: 'Dense, misty pine woods perfect for photography and nature walks.'
        },
        {
            name: 'Pillar Rocks',
            image: '/images/Pillar_Rocks.webp',
            description: 'Giant granite pillars standing tall amidst encircling clouds.'
        }
    ],
    munnar: [
        {
            name: 'Tea Gardens',
            image: '/images/Tea Gardens.webp',
            description: 'Rolling carpets of emerald green tea bushes stretching to the horizon.'
        },
        {
            name: 'Eravikulam National Park',
            image: '/images/Eravikulam National Park.webp',
            description: 'Home to the endangered Nilgiri Tahr and blooming Neelakurinji flowers.'
        },
        {
            name: 'Mattupetty Dam',
            image: '/images/Mattupetty Dam.webp',
            description: 'A serene dam spot famous for boating and elephant sightings.'
        },
        {
            name: 'Waterfalls',
            image: '/images/Waterfalls.webp',
            description: 'Majestic waterfalls like Cheeyappara cascading down rocky terrain.'
        }
    ]
};

const destinations = allDestinations
    .filter(d => ['ooty', 'kodaikanal', 'munnar'].includes(d.id))
    .map(dest => ({
        ...dest,
        // Override gallery with rich local data
        gallery: richGalleryData[dest.id] || []
    }));

export default function SeasonalHotspots() {
    const navigate = useNavigate();
    const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

    const activeData = destinations.find(d => d.id === selectedDestination);

    const handleBookNow = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 bg-white dark:bg-background-dark/50" id="south-india-paradise">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <Sun className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                            {selectedDestination ? 'Exploration' : 'Destinations'}
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
                        {selectedDestination ? `${activeData?.title} Highlights` : 'South India Paradise'}
                    </h2>
                    <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                        {selectedDestination
                            ? 'Discover the hidden gems and famous spots of this beautiful destination.'
                            : 'Experience the magic of Ooty, Kodaikanal, and Munnar.'}
                    </p>
                </div>

                {/* Dynamic Content Area */}
                <div className="transition-all duration-500">

                    {/* Main Destination Cards */}
                    {!selectedDestination && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                            {destinations.map((hotspot) => (
                                <div
                                    key={hotspot.id}
                                    onClick={() => setSelectedDestination(hotspot.id)}
                                    className="group relative bg-white dark:bg-white/5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-white/5 cursor-pointer"
                                >
                                    <div className="h-80 overflow-hidden relative">
                                        <img
                                            src={hotspot.image}
                                            alt={hotspot.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-3xl font-bold text-white mb-2 transition-transform duration-300">
                                                {hotspot.title}
                                            </h3>
                                            <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                                <p className="text-white/80 line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    {hotspot.description}
                                                </p>
                                                <div className="flex gap-2 mt-4">
                                                    {hotspot.tags.map(tag => (
                                                        <Badge key={tag} className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-0">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Gallery View */}
                    {selectedDestination && activeData && (
                        <div className="animate-in fade-in zoom-in-95 duration-500">
                            <Button
                                variant="outline"
                                onClick={() => setSelectedDestination(null)}
                                className="mb-8 hover:bg-primary hover:text-white transition-colors gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Destinations
                            </Button>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {activeData.gallery.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5 flex flex-col"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-3 left-4 right-4">
                                                <div className="flex items-center gap-2 text-white font-semibold">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                    {item.name}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 flex flex-col flex-grow">
                                            <p className="text-sm text-text-muted dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                                                {item.description}
                                            </p>
                                            <Button
                                                onClick={handleBookNow}
                                                className="w-full bg-primary hover:bg-primary-light text-white text-sm"
                                                size="sm"
                                            >
                                                Book Now
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* View All Destinations Button */}
                {!selectedDestination && (
                    <div className="text-center mt-12">
                        <Button
                            onClick={() => navigate('/destinations')}
                            className="bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                        >
                            Explore All Destinations
                        </Button>
                    </div>
                )}

            </div>
        </section>
    );
}
