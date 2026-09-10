import { useEffect, useRef } from "react";
import type { UseInfiniteScrollProps } from "@/types/infinity";

export function useInfiniteScroll({
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
  rootMargin = "300px",
}: UseInfiniteScrollProps) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target) {
      return;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        };

        if (!entry.isIntersecting) {
          hasTriggeredRef.current = false;
          return;
        };

        if (hasTriggeredRef.current || !hasNextPage || isFetchingNextPage) {
          return;
        };

        hasTriggeredRef.current = true;

        onLoadMore();
      },
      {
        rootMargin,
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, onLoadMore, rootMargin]);

  return {
    loadMoreRef,
  };
};
