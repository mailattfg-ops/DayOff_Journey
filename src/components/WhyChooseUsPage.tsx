import Navigation from "./Navigation";
import Footer from "./Footer";
import ServicesSection from "./ServicesSection";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function WhyChooseUsPage() {
    return (
        <div className="min-h-screen w-full bg-background">
            <Navigation />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <ServicesSection />
            </div>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
