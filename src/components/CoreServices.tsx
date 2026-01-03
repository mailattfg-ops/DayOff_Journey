import { Map, Users, Plane, Briefcase, Car, Shield, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const coreServices = [
    {
        icon: Map,
        title: "Personalized Trips",
        subtitle: "(Kerala & Pan India)",
        description: "Tailor-made itineraries crafted around individual preferences, travel interests, and budgets, ensuring a unique and memorable experience. This is perfect for family vacations, friends’ trips and special occasions."
    },
    {
        icon: Users,
        title: "Group Tour Packages",
        description: "Carefully designed packages for corporate outings, student excursions, or large family gatherings. We handle all logistics, accommodation, and sightseeing for a hassle-free group experience."
    },
    {
        icon: Plane,
        title: "Airport Transfers",
        subtitle: "(Pick-up & Drop-off)",
        description: "Punctual and comfortable transfers to and from airports. Whether you're arriving or departing, our chauffeurs ensure you reach your destination on time and stress-free."
    },
    {
        icon: Briefcase,
        title: "Corporate Travel Management",
        description: "Efficient travel solutions for businesses including executive car rentals, hotel bookings, and event transportation management, ensuring professionalism and punctuality."
    },
    {
        icon: Car,
        title: "Vehicle Rentals",
        subtitle: "(with Chauffeur)",
        description: "A wide range of well-maintained sedans, SUVs, and luxury coaches available for daily rentals or long-distance trips. Our experienced drivers prioritize your safety and comfort."
    },
    {
        icon: Shield,
        title: "Pilgrimage Tours",
        description: "Specialized packages for religious tours to Sabarimala, Guruvayur, Velankanni, and other major pilgrim centers in South India, with attention to specific requirements and timings."
    }
];

export default function CoreServices() {
    return (
        <section id="services" className="py-10 lg:py-14 bg-white dark:bg-background-dark/50 scroll-mt-28">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full">
                {/* Intro */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <Plane className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                            Our Core Services
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
                        Plan your trip with Dayoff Journeys
                    </h2>
                    <p className="text-lg text-text-muted dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        We provide reliable and comfortable travel solutions tailored to your needs. From vehicle services to customized tour packages, we ensure a smooth and memorable journey for every traveller.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {coreServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-text-main dark:text-white mb-1">
                                {service.title}
                            </h4>
                            {service.subtitle && (
                                <span className="text-sm font-semibold text-primary mb-3 block">
                                    {service.subtitle}
                                </span>
                            )}
                            {!service.subtitle && <div className="mb-3" />}
                            <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Premium Fleet: Force Urbania (Interactive) */}
                <div className="mb-12">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                            <Car className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                Travel in Luxury
                            </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-text-main dark:text-white">
                            Our Premium Fleet
                        </h3>
                    </div>

                    <UrbaniaShowcase />
                </div>

                {/* Service Coverage */}
                <div className="text-center bg-gray-50 dark:bg-white/5 rounded-3xl p-4 lg:p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4">
                        Service Coverage
                    </h3>
                    <p className="text-lg text-text-muted dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        Based in Malappuram, we offer travel services across Kerala and other parts of India.
                    </p>
                </div>
            </div>
        </section>
    );
}

function UrbaniaShowcase() {
    const [activeView, setActiveView] = useState<'exterior' | 'interior'>('exterior');
    const [interiorIndex, setInteriorIndex] = useState(0);

    const interiorImages = [
        '/images/urbania_interior_11zon.webp',
        '/images/urbania-interiro-2_11zon.webp'
    ];

    const nextInterior = (e: React.MouseEvent) => {
        e.stopPropagation();
        setInteriorIndex((prev) => (prev + 1) % interiorImages.length);
    };

    const prevInterior = (e: React.MouseEvent) => {
        e.stopPropagation();
        setInteriorIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
    };

    return (
        <div className="bg-gray-50 dark:bg-white/5 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side - Interactive */}
                <div
                    className="relative h-64 lg:h-full overflow-hidden group cursor-pointer"
                    onClick={() => setActiveView(activeView === 'exterior' ? 'interior' : 'exterior')}
                >
                    <img
                        src={activeView === 'exterior' ? "/images/urbania_11zon.webp" : interiorImages[interiorIndex]}
                        alt="Force Urbania"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* View Toggle Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                            <Camera className="w-3 h-3" />
                            {activeView === 'exterior' ? 'View Interior' : 'View Exterior'}
                        </span>

                        {activeView === 'interior' && (
                            <div className="flex gap-2">
                                <button onClick={prevInterior} className="p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button onClick={nextInterior} className="p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h4 className="text-3xl font-bold text-text-main dark:text-white mb-4">
                        Force Urbania
                    </h4>
                    <p className="text-lg text-text-muted dark:text-gray-400 mb-8 leading-relaxed">
                        Experience the ultimate in travel comfort with our premium Force Urbania. Perfect for families and groups who refuse to compromise on luxury.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-text-main dark:text-white">Safety First</p>
                                <p className="text-xs text-text-muted">ABS, Airbags & more</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-text-main dark:text-white">Spacious</p>
                                <p className="text-xs text-text-muted">Ample legroom for all</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-text-main dark:text-white">Luxury Interiors</p>
                                <p className="text-xs text-text-muted">Premium upholstery</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Plane className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-text-main dark:text-white">AC & Music</p>
                                <p className="text-xs text-text-muted">Individual vents & sound</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
