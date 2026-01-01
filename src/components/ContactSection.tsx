import { useState, FormEvent, useEffect } from 'react';
import { Mail, Phone, MessageCircle, MapPin, User, Calendar as CalendarIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { DateRange } from 'react-day-picker';
import { useLocation } from 'react-router-dom';

const faqs = [
    {
        question: 'Do you offer customizable tour packages?',
        answer: 'Yes! We specialize in tailor-made itineraries. Whether you are looking for a honeymoon trip, a family vacation, or a spiritual journey, we can customize the entire plan to suit your preferences and budget.'
    },
    {
        question: 'What destinations do you cover in South India?',
        answer: 'We cover all major tourist and spiritual destinations in South India, including Ooty, Munnar, Kodaikanal, Rameswaram, Madurai, Kanyakumari, Wayanad, and Coorg. We also arrange trips to Goa and other tailored locations.'
    },
    {
        question: 'Does the package include accommodation and food?',
        answer: 'Our standard packages include premium accommodation and transportation. We can include meal plans (Breakfast/Dinner) upon request. We also provide curated lists of the best local restaurants for you to explore.'
    },
    {
        question: 'How does the driver and transportation service work?',
        answer: 'We provide experienced, verified drivers who act as your local guide. You will have a private vehicle for the entire duration of your trip, ensuring comfort, safety, and flexibility to stop wherever you like.'
    },
    {
        question: 'How do I confirm my booking?',
        answer: 'You can start by filling out the form above or chatting with us on WhatsApp. Once we finalize your itinerary, a small advance payment confirms your booking, with the balance payable during the trip.'
    }
];

import { allDestinations } from '@/data/destinations';

export default function ContactSection() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        destination: '',
        customDestination: '',
        date: undefined as DateRange | undefined,
        message: ''
    });

    useEffect(() => {
        if (location.state?.selectedDestination) {
            setFormData(prev => ({
                ...prev,
                destination: location.state.selectedDestination
            }));

            // Clear the state so it doesn't persist on refresh or nav
            window.history.replaceState({}, '');
        }
    }, [location.state]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Validate inputs
        if (!formData.firstName || !formData.lastName || !formData.destination || !formData.date?.from) {
            alert('Please fill in all required fields');
            return;
        }

        if (formData.destination === 'Other' && !formData.customDestination) {
            alert('Please specify your desired destination');
            return;
        }

        // Construct WhatsApp message
        let dateString = '';
        if (formData.date?.from) {
            dateString = format(formData.date.from, 'PPP');
            if (formData.date.to) {
                dateString += ` to ${format(formData.date.to, 'PPP')}`;
            }
        }

        const finalDestination = formData.destination === 'Other' ? formData.customDestination : formData.destination;
        const message = `Hi, I'm ${formData.firstName} ${formData.lastName}. I'm interested in traveling to ${finalDestination} from ${dateString}.${formData.message ? ` Additional details: ${formData.message}` : ''}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919633403404?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    const sortedDestinations = [...allDestinations].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <section id="contact" className="py-12 lg:py-20 bg-white relative overflow-hidden">
            {/* Abstract Background Shapes - Subtle for White Theme */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Header & Info */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 w-fit rounded-full mb-6 border border-primary/20">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-sm font-medium text-teal-700 dark:text-teal-400">Available Now</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-text-main mb-6 leading-tight">
                            Ready for your <br />
                            <span className="text-primary">Dream Vacation?</span>
                        </h2>

                        <p className="text-lg text-text-muted mb-12">
                            Let us handle the planning while you pack your bags. We're just a message away from starting your next adventure.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all cursor-pointer group border border-transparent hover:border-gray-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Call Us Anytime</p>
                                    <p className="text-xl font-bold text-text-main">+91 9633403404</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all cursor-pointer group border border-transparent hover:border-gray-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Send an Email</p>
                                    <p className="text-xl font-bold text-text-main">dayoffjourneys@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Premium Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-12 shadow-xl relative">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <MessageCircle className="w-24 h-24 text-primary transform rotate-12" />
                            </div>

                            <h3 className="text-2xl font-bold text-text-main mb-8 relative z-10">Send a Request</h3>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-main ml-1">First Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                            <Input
                                                type="text"
                                                placeholder="John"
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="pl-12 h-14 bg-gray-50 border-gray-200 text-text-main placeholder:text-gray-400 focus-visible:ring-primary rounded-xl"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-main ml-1">Last Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                            <Input
                                                type="text"
                                                placeholder="Doe"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                className="pl-12 h-14 bg-gray-50 border-gray-200 text-text-main placeholder:text-gray-400 focus-visible:ring-primary rounded-xl"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-main ml-1">Destination</label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors z-10" />
                                            <Select
                                                value={formData.destination}
                                                onValueChange={(value) => setFormData({ ...formData, destination: value })}
                                            >
                                                <SelectTrigger className="w-full h-14 pl-12 bg-gray-50 border-gray-200 text-text-main focus:ring-primary rounded-xl" aria-label="Select Destination">
                                                    <SelectValue placeholder="Select Destination" />
                                                </SelectTrigger>
                                                <SelectContent className="max-h-[300px]">
                                                    {sortedDestinations.map((dest) => (
                                                        <SelectItem key={dest.id} value={dest.title}>
                                                            {dest.title}
                                                        </SelectItem>
                                                    ))}
                                                    <SelectItem value="Other">Other (Specify)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {formData.destination === 'Other' && (
                                            <div className="relative group mt-2 animate-in fade-in slide-in-from-top-1">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                                <Input
                                                    type="text"
                                                    placeholder="Enter your destination"
                                                    value={formData.customDestination}
                                                    onChange={(e) => setFormData({ ...formData, customDestination: e.target.value })}
                                                    className="pl-12 h-14 bg-gray-50 border-gray-200 text-text-main placeholder:text-gray-400 focus-visible:ring-primary rounded-xl"
                                                    required
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-main ml-1">Travel Dates</label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full h-14 pl-12 justify-start text-left font-normal bg-gray-50 border-gray-200 hover:bg-white hover:text-text-main relative rounded-xl",
                                                        !formData.date && "text-muted-foreground"
                                                    )}
                                                    aria-label="Select Travel Dates"
                                                >
                                                    <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                                    {formData.date?.from ? (
                                                        formData.date.to ? (
                                                            <>
                                                                {format(formData.date.from, "LLL dd, y")} -{" "}
                                                                {format(formData.date.to, "LLL dd, y")}
                                                            </>
                                                        ) : (
                                                            format(formData.date.from, "LLL dd, y")
                                                        )
                                                    ) : (
                                                        <span>Pick a date range</span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    initialFocus
                                                    mode="range"
                                                    defaultMonth={formData.date?.from}
                                                    selected={formData.date}
                                                    onSelect={(date) => setFormData({ ...formData, date })}
                                                    numberOfMonths={1}
                                                    disabled={(date) =>
                                                        date < new Date(new Date().setHours(0, 0, 0, 0))
                                                    }
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-main ml-1">Message</label>
                                    <Textarea
                                        placeholder="Tell us more about your preferences..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="min-h-[120px] bg-gray-50 border-gray-200 text-text-main placeholder:text-gray-400 focus-visible:ring-primary rounded-xl resize-none p-4"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-16 bg-primary text-white hover:bg-primary/90 font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] rounded-xl flex items-center justify-center gap-3"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Start Chat on WhatsApp
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="pt-20 lg:pt-24 pb-0 bg-white border-t border-gray-100 w-full">
                <div className="max-w-4xl mx-auto px-6 lg:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-text-main mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-text-muted">
                            Quick answers to common questions
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-gray-50 rounded-2xl px-6 border-2 border-transparent data-[state=open]:border-primary/20 shadow-sm"
                            >
                                <AccordionTrigger className="text-left font-semibold text-text-main hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-text-muted">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
