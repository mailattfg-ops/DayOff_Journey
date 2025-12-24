import { Heart, Shield, Award, Globe } from 'lucide-react';

const values = [
    {
        icon: Heart,
        title: 'Passion for Travel',
        description: 'We live and breathe travel, bringing enthusiasm to every journey we craft'
    },
    {
        icon: Shield,
        title: 'Trust & Safety',
        description: '24/7 support and vetted partners ensure your peace of mind'
    },
    {
        icon: Award,
        title: 'Expert Curation',
        description: 'Years of local expertise result in authentic, unforgettable experiences'
    },
    {
        icon: Globe,
        title: 'Pan India Reach',
        description: 'Comprehensive service coverage across all of India'
    }
];

export default function AboutSection() {
    return (
        <section id="about" className="scroll-mt-28 pt-6 pb-12 lg:pt-10 lg:pb-20 bg-white dark:bg-background-dark/50">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
                        What Drives Us
                    </h2>
                    <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                        Our core values shape every journey we create
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group"
                        >
                            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <value.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                                {value.title}
                            </h3>
                            <p className="text-text-muted dark:text-gray-400">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
