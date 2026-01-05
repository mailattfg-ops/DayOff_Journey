import { useState, useEffect, useRef, ReactNode, Suspense } from 'react';

interface LazyLoadWhenVisibleProps {
    children: ReactNode;
    threshold?: number; // 0.0 to 1.0
    rootMargin?: string;
    minHeight?: string; // To prevent layout shift before loading
    skeleton?: ReactNode;
    className?: string;
}

export default function LazyLoadWhenVisible({
    children,
    threshold = 0.1,
    rootMargin = "200px",
    minHeight,
    skeleton,
    className
}: LazyLoadWhenVisibleProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // ... useEffect removed for brevity in tool call, standard logic ...

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin]);

    return (
        <div ref={ref} style={{ minHeight }} className={`w-full ${className || ''}`}>
            {isVisible ? (
                <Suspense fallback={skeleton || <div className="w-full h-full bg-gray-50/50 animate-pulse" />}>
                    {children}
                </Suspense>
            ) : null}
        </div>
    );
}
