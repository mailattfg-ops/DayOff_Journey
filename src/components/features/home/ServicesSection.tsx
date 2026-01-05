import { UserCheck, Sparkles, Map, ShieldCheck, Banknote, Sliders, MapPin, Headphones } from 'lucide-react';

const strengths = [
    {
        icon: UserCheck,
        title: "Customer-Centric",
        description: "Travel services with personalized itinerary planning tailored to you."
    },
    {
        icon: Sparkles,
        title: "Expert Curation",
        description: "Specialized in crafting perfect experiences for tourist and pilgrimage destinations."
    },
    {
        icon: Map,
        title: "Pan-India Packages",
        description: "Comprehensive tours including Kerala, South India, and major Indian destinations."
    },
    {
        icon: ShieldCheck,
        title: "Safe & Reliable",
        description: "Secure travel experiences with trusted partners and vetted arrangements."
    },
    {
        icon: Banknote,
        title: "Transparent Pricing",
        description: "Clear costs and ethical practices with absolutely no hidden charges."
    },
    {
        icon: Sliders,
        title: "Customized Packages",
        description: "Tour packages carefully designed to suit different budgets and preferences."
    },
    {
        icon: MapPin,
        title: "Local Expertise",
        description: "Deep-rooted knowledge in Kerala tourism for authentic local experiences."
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        description: "24/7 customer support assistance throughout your entire travel journey."
    }
];

export default function ServicesSection() {
    return (
        <section id="why-choose-us" className="py-10 lg:py-14 bg-white dark:bg-black/50 scroll-mt-28">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                {/* Header & Intro */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                            Our Core Strengths
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-text-muted dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6">
                        Dayoff Journeys is a professional travel and tourism company based in Malappuram, Kerala, offering customized travel packages, pilgrimage tours, and holiday experiences across India. We specialize in delivering reliable, safe, and personalized travel solutions tailored to individual and group requirements.
                    </p>
                </div>

                {/* Core Strengths Grid */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {strengths.map((str, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 dark:bg-white/5 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                                    <str.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">
                                    {str.title}
                                </h4>
                                <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm">
                                    {str.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center bg-primary/5 dark:bg-white/5 rounded-3xl p-8 lg:p-12">
                    <p className="text-lg lg:text-xl font-medium text-text-main dark:text-white max-w-4xl mx-auto leading-relaxed">
                        "Our focus on quality service, customer satisfaction, and local expertise makes Dayoff Journeys a trusted choice for travelers seeking memorable and hassle-free travel experiences."
                    </p>
                </div>
            </div>
        </section>
    );
}
