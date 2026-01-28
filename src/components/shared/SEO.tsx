import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: string;
    schema?: Record<string, any>;
    preloadImages?: string[];
}

export default function SEO({
    title,
    description,
    canonical,
    image = '/images/hero-bg.webp',
    type = 'website',
    schema,
    preloadImages = []
}: SEOProps) {
    const siteUrl = 'https://dayoffjourneys.com';
    const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Basic */}
            <title>{title} | Dayoff Journeys</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* Preload Critical Images */}
            {preloadImages.map((img) => (
                <link key={img} rel="preload" as="image" href={img} />
            ))}

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
