import { Search, FileCheck, Plane, MapPin, Camera } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: Search,
        title: 'Discover',
        description: 'Browse curated destinations and packages'
    },
    {
        id: 2,
        icon: FileCheck,
        title: 'Plan',
        description: 'Customize your itinerary with our experts'
    },
    {
        id: 3,
        icon: Plane,
        title: 'Book',
        description: 'Secure your trip with easy payment options'
    },
    {
        id: 4,
        icon: MapPin,
        title: 'Travel',
        description: 'Enjoy 24/7 support during your journey'
    },
    {
        id: 5,
        icon: Camera,
        title: 'Remember',
        description: 'Create memories that last forever'
    }
];

export default function JourneyRoadmap() {
    return (
        <section className="hidden lg:block pt-10 lg:pt-14 pb-12 lg:pb-12 bg-white dark:bg-background">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
                        Your Journey with Us
                    </h2>
                    <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                        From inspiration to unforgettable memories — we're with you every step
                    </p>
                </div>

                {/* Roadmap */}
                <div className="relative">
                    {/* Desktop Dashed Line */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary/30" />

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Icon Circle */}
                                <div className="relative z-10 w-24 h-24 rounded-full bg-white dark:bg-background border-4 border-white dark:border-background flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-lg">
                                    <div className="w-full h-full rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-text-muted dark:text-gray-400">
                                    {step.description}
                                </p>

                                {/* Step Number */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg">
                                    {step.id}
                                </div>

                                {/* Mobile Dashed Line */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden w-0.5 h-8 border-l-2 border-dashed border-primary/30 mt-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
