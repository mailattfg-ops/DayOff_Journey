import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, MapPin, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Destination {
    id: string;
    title: string;
    location: string;
    description: string;
    fullDescription?: string;
    image: string;
    tags: string[];
    gallery?: string[];
    highlights?: string[];
    bestTime?: string;
    tagline?: string;
}

interface DestinationDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    destination: Destination | null;
    onBookNow: (destinationName: string) => void;
}

export function DestinationDetailModal({ isOpen, onClose, destination, onBookNow }: DestinationDetailModalProps) {
    if (!destination) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden flex flex-col bg-white dark:bg-zinc-900 border-none">
                <ScrollArea className="flex-grow">
                    <div className="relative h-64 md:h-80 w-full">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 z-10 rounded-full bg-black/20 hover:bg-white hover:text-black text-white backdrop-blur-md transition-all h-10 w-10"
                            onClick={onClose}
                        >
                            <X className="w-5 h-5" />
                        </Button>
                        <img
                            src={destination.image}
                            alt={destination.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <Badge className="mb-2 bg-primary text-white border-none hover:bg-primary/90">
                                {destination.location}
                            </Badge>
                            <DialogTitle className="text-3xl md:text-5xl font-bold mb-2">
                                {destination.title}
                            </DialogTitle>
                            <div className="flex gap-2 flex-wrap">
                                {destination.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none backdrop-blur-sm">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-8">
                        {/* Description */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                About {destination.title}
                            </h3>
                            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                                {destination.fullDescription || destination.description}
                            </DialogDescription>
                        </div>

                        {/* Highlights & Best Time Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Highlights */}
                            <div className="bg-muted/30 p-6 rounded-2xl">
                                <h4 className="font-semibold mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Highlights
                                </h4>
                                <ul className="space-y-3">
                                    {destination.highlights?.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            {highlight}
                                        </li>
                                    )) || <p className="text-sm text-muted-foreground">Amazing sights to see.</p>}
                                </ul>
                            </div>

                            {/* Best Time */}
                            <div className="bg-muted/30 p-6 rounded-2xl">
                                <h4 className="font-semibold mb-4 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    Best Time to Visit
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {destination.bestTime || "All year round."}
                                </p>
                            </div>
                        </div>

                        {/* Gallery */}
                        {destination.gallery && destination.gallery.length > 0 && (
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {destination.gallery.map((img, idx) => (
                                        <div key={idx} className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                                            <img
                                                src={img}
                                                alt={`${destination.title} ${idx + 1}`}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>

                {/* Footer / CTA */}
                <div className="p-6 border-t bg-background shrink-0 flex justify-between items-center gap-4">
                    <div className="hidden md:block">
                        <p className="text-sm text-muted-foreground">Ready to explore?</p>
                        <p className="font-semibold text-primary">Book your custom package today.</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-3">
                        <Button variant="outline" onClick={onClose} className="flex-1 md:flex-none">
                            Close
                        </Button>
                        <Button
                            onClick={() => onBookNow(destination.title)}
                            className="flex-1 md:flex-none bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/20"
                        >
                            <Calendar className="w-4 h-4 mr-2" />
                            Plan My Trip
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
