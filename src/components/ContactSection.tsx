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
        question: 'How do I book a travel package?',
        answer: 'You can book directly through our website by clicking "View Deal" on any package, or contact us via WhatsApp for personalized assistance. Our team will guide you through the entire process.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, bank transfers, and popular digital payment platforms. Flexible payment plans are available for packages over $3000.'
    },
    {
        question: 'Can I customize an existing package?',
        answer: 'Absolutely! Every package can be tailored to your preferences. Contact our travel experts to discuss modifications to itineraries, accommodation, or activities.'
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'Cancellations made 30+ days before departure receive a full refund minus a small processing fee. Cancellations within 30 days are subject to varying fees depending on the package. Travel insurance is highly recommended.'
    },
    {
        question: 'Do you offer travel insurance?',
        answer: 'Yes, we partner with leading insurance providers to offer comprehensive coverage including trip cancellation, medical emergencies, and lost baggage protection.'
    }
];

export default function ContactSection() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        destination: '',
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

        // Construct WhatsApp message
        let dateString = '';
        if (formData.date?.from) {
            dateString = format(formData.date.from, 'PPP');
            if (formData.date.to) {
                dateString += ` to ${format(formData.date.to, 'PPP')}`;
            }
        }

        const message = `Hi, I'm ${formData.firstName} ${formData.lastName}. I'm interested in traveling to ${formData.destination} from ${dateString}.${formData.message ? ` Additional details: ${formData.message}` : ''}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919633403404?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    };

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
                                                <SelectContent>
                                                    <SelectItem value="Ooty">Ooty</SelectItem>
                                                    <SelectItem value="Munnar">Munnar</SelectItem>
                                                    <SelectItem value="Kodaikanal">Kodaikanal</SelectItem>
                                                    <SelectItem value="Rameswaram">Rameswaram</SelectItem>
                                                    <SelectItem value="Hampi">Hampi</SelectItem>
                                                    <SelectItem value="Madurai">Madurai</SelectItem>
                                                    <SelectItem value="Coorg (Kodagu)">Coorg (Kodagu)</SelectItem>
                                                    <SelectItem value="Kanyakumari">Kanyakumari</SelectItem>
                                                    <SelectItem value="Mysuru (Mysore)">Mysuru (Mysore)</SelectItem>
                                                    <SelectItem value="Alleppey (Alappuzha)">Alleppey (Alappuzha)</SelectItem>
                                                    <SelectItem value="Thiruvananthapuram">Thiruvananthapuram</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
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
            <div className="py-20 lg:py-24 bg-white border-t border-gray-100 w-full">
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
