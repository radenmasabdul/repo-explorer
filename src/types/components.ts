import type { ReactNode } from "react";

type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  description?: ReactNode;
  className?: string;
};

export interface ApiStateProps {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  children: ReactNode;
  skeletonCount?: number;
  errorTitle?: string;
  errorDescription?: string;
  emptyTitle?: string;
  emptyDescription?: string;
};

export interface CardProps {
  to: string;
  image?: ReactNode;
  badge?: ReactNode;
  subheader?: string;
  title: string;
  description?: string;
  footer?: ReactNode;
  className?: string;
};

export interface CardSkeletonProps {
  hasImage?: boolean;
};

export interface FilterProps {
  searchInput: string;
  searchPlaceholder?: string;
  sort: "stars" | "forks" | "updated";
  order: "asc" | "desc";
  onSearch: (value: string) => void;
  onSort: (value: "stars" | "forks" | "updated") => void;
  onOrder: (value: "asc" | "desc") => void;
};

export interface InfiniteScrollProps {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  loadingText?: string;
  endText?: string;
  onLoadMore: () => void;
};

export interface ResultCountProps {
  count: number;
  isLoading?: boolean;
  isError?: boolean;
  label?: string;
};
