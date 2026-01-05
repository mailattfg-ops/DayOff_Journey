import { Skeleton } from "@/components/ui/skeleton";

interface SectionSkeletonProps {
    className?: string;
}

export default function SectionSkeleton({ className }: SectionSkeletonProps) {
    return (
        <div className={`w-full py-12 px-4 space-y-8 ${className}`}>
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Skeleton */}
                <div className="flex flex-col items-center space-y-4">
                    <Skeleton className="h-10 w-2/3 md:w-1/3 rounded-lg" />
                    <Skeleton className="h-4 w-full md:w-1/2 rounded-full" />
                </div>

                {/* Content Skeleton Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Skeleton className="h-64 rounded-xl" />
                    <Skeleton className="h-64 rounded-xl hidden md:block" />
                    <Skeleton className="h-64 rounded-xl hidden md:block" />
                </div>
            </div>
        </div>
    );
}
