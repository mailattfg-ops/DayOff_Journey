import { Car, Clock, Smile, Wallet } from 'lucide-react';

const services = [
    {
        icon: Car,
        title: "Clean & Well-Maintained Vehicles",
        description: "Travel in comfort and safety. Our fleet is meticulously cleaned and regularly serviced to ensure a hygienic and breakdown-free journey.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
    },
    {
        icon: Clock,
        title: "On-time Pickup and Drop-off",
        description: "We value your time. Guaranteed punctual service so you never miss a sunrise, a flight, or a special moment of your trip.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80"
    },
    {
        icon: Smile,
        title: "Friendly Service",
        description: "More than just drivers, we are your travel companions. Expect warm hospitality, local insights, and a helpful attitude.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
    },
    {
        icon: Wallet,
        title: "Transparent Pricing",
        description: "No surprises, just honest fares. We provide clear, upfront pricing with absolutely no hidden charges for your peace of mind.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-12 lg:py-20 bg-white dark:bg-black/50">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                        Elevating your journey with our commitment to excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50 dark:bg-white/5"
                        >
                            {/* Image Header */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8 relative">
                                <div className="absolute -top-10 right-8 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-12 transition-all">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3 mt-2">
                                    {service.title}
                                </h3>
                                <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
