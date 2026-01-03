import Navigation from "./Navigation";
import Footer from "./Footer";
import CoreServices from "./CoreServices";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function ServicesPage() {
    return (
        <div className="min-h-screen w-full bg-background">
            <Navigation />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <CoreServices />
            </div>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
