import { Loader2 } from "lucide-react";
import { useInfiniteScroll } from "@/hooks/use-infinity-scroll";
import type { InfiniteScrollProps } from "@/types/components";

export default function InfiniteScroll({
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
  loadingText = "Loading more...",
  endText = "You've reached the end.",
}: InfiniteScrollProps) {
  const { loadMoreRef } = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    onLoadMore,
  });

  return (
    <div
      ref={loadMoreRef}
      className="flex min-h-20 items-center justify-center"
    >
      {isFetchingNextPage && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          {loadingText}
        </div>
      )}

      {!hasNextPage && (
        <p className="text-sm text-muted-foreground">{endText}</p>
      )}
    </div>
  );
};
