import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.webp"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50 blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
                <div className="mb-8 relative inline-block">
                    <span className="text-9xl font-black text-primary/10 select-none">404</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <MapPin className="w-20 h-20 text-primary animate-bounce" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6">
                    Lost Your Way?
                </h1>

                <p className="text-xl text-text-muted dark:text-gray-400 mb-10">
                    Looks like you've ventured into uncharted territory. Even the best explorers need a map sometimes!
                </p>

                <Button
                    onClick={() => navigate('/')}
                    className="h-14 px-8 bg-primary text-white hover:bg-primary/90 text-lg font-bold rounded-full shadow-lg hover:shadow-primary/25 transition-all hover:scale-105 active:scale-95 group"
                >
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Home Base
                </Button>
            </div>

            {/* Footer minimal */}
            <div className="absolute bottom-8 text-center text-text-muted/60 text-sm">
                Day Off Journeys &copy; {new Date().getFullYear()}
            </div>
        </div>
    );
}
