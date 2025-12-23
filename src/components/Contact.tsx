import { useState, FormEvent } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { Mail, Phone, MessageCircle, MapPin, Clock, Star, User, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

const trustIndicators = [
  {
    name: 'Sarah M.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  },
  {
    name: 'Mike L.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  },
  {
    name: 'Emma W.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name || !formData.destination || !formData.date) {
      alert('Please fill in all required fields');
      return;
    }

    // Construct WhatsApp message
    const message = `Hi, I'm ${formData.name}. I'm interested in traveling to ${formData.destination} on ${formData.date}.${formData.message ? ` Additional details: ${formData.message}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919633403404?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-br from-primary/90 to-primary-light/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-20 flex items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90">
              We're here to help plan your perfect journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-text-muted dark:text-gray-400 mb-8">
                  Fill out the form and we'll connect with you via WhatsApp within minutes
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <Input
                      type="text"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-12 h-14 border-2 focus-visible:ring-primary"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-12 h-14 border-2 focus-visible:ring-primary"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <Input
                      type="text"
                      placeholder="Dream Destination *"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="pl-12 h-14 border-2 focus-visible:ring-primary"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <Input
                      type="date"
                      placeholder="Travel Date *"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="pl-12 h-14 border-2 focus-visible:ring-primary"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Textarea
                      placeholder="Additional details or special requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 border-2 focus-visible:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg shadow-xl shadow-[#25D366]/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Continue on WhatsApp
                  </Button>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                    <div className="flex -space-x-3">
                      {trustIndicators.map((user) => (
                        <Avatar key={user.name} className="w-10 h-10 border-2 border-white dark:border-background">
                          <AvatarImage src={user.image} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-text-muted dark:text-gray-400">
                        Trusted by 50,000+ travelers
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Call Card */}
              <div className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">
                  Call Us
                </h3>
                <p className="text-text-muted dark:text-gray-400 mb-4">
                  Mon-Fri from 8am to 8pm EST
                </p>
                <a href="tel:+919633403404" className="text-primary font-semibold text-lg hover:underline">
                  +91 9633403404
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">
                  Email Us
                </h3>
                <p className="text-text-muted dark:text-gray-400 mb-4">
                  We'll respond within 24 hours
                </p>
                <a href="mailto:dayoffjourneys@gmail.com" className="text-primary font-semibold hover:underline break-all">
                  dayoffjourneys@gmail.com
                </a>
              </div>

              {/* Office Hours Card */}
              <div className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">
                  Office Hours
                </h3>
                <div className="space-y-2 text-text-muted dark:text-gray-400">
                  <p>Monday - Friday: 8am - 8pm</p>
                  <p>Saturday: 10am - 6pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-background-dark/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-400">
              Quick answers to common questions
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-white/5 rounded-2xl px-6 border-2 border-transparent data-[state=open]:border-primary shadow-lg"
              >
                <AccordionTrigger className="text-left font-semibold text-text-main dark:text-white hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
