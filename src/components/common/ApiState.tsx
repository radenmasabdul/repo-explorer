import { PackageSearch } from "lucide-react";
import { CardSkeleton } from "@/components/common/CardSkeleton";
import type { ApiStateProps } from "@/types/components";

export default function ApiState({
  isLoading,
  isError,
  isEmpty,
  children,
  skeletonCount = 8,
  errorTitle = "Failed to load data.",
  errorDescription = "Check your connection and try again.",
  emptyTitle = "No data found",
  emptyDescription = "Try a different search term.",
}: ApiStateProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <CardSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  };

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <PackageSearch className="mb-4 h-12 w-12 text-muted-foreground/50" />

        <p className="font-medium text-muted-foreground">{errorTitle}</p>

        <p className="text-sm text-muted-foreground">{errorDescription}</p>
      </div>
    );
  };

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <PackageSearch className="mb-4 h-12 w-12 text-muted-foreground/50" />

        <p className="font-medium text-foreground">{emptyTitle}</p>

        <p className="mt-1 text-sm text-muted-foreground">{emptyDescription}</p>
      </div>
    );
  };

  return <>{children}</>;
};
