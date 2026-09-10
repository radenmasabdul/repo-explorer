import { Skeleton } from "@/components/ui/skeleton";
import type { CardSkeletonProps } from "@/types/components";

export function CardSkeleton({
  hasImage = true,
}: CardSkeletonProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      {hasImage && <Skeleton className="aspect-square w-full" />}
      <div className="flex flex-col gap-2 p-4">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="mt-2 h-4 w-1/2" />
      </div>
    </div>
  );
};
