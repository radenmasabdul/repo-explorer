import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import {
  useRepositories,
  useRepositoriesSearch,
} from "@/hooks/use-repositories";
import { useRepoStore } from "@/stores/repo-store";

export function useRepo() {
  const { query, sort, order, per_page, setQuery, setSort, setOrder } =
    useRepoStore();

  const [searchInput, setSearchInput] = useState(query);
  const debouncedSearch = useDebounce(searchInput, 400);

  useEffect(() => {
    if (debouncedSearch !== query) {
      setQuery(debouncedSearch);
    };
  }, [debouncedSearch, query, setQuery]);

  const hasSearch = query.trim().length > 0;

  const listQuery = useRepositories(
    {
      per_page: 100,
    },
    !hasSearch,
  );

  const searchQuery = useRepositoriesSearch(
    {
      q: query,
      sort,
      order,
      per_page,
    },
    hasSearch,
  );

  const activeQuery = hasSearch ? searchQuery : listQuery;
  const { hasNextPage, isFetchingNextPage, fetchNextPage } = activeQuery;

  const repositories = hasSearch
    ? (searchQuery.data?.pages.flatMap((page) => page.items) ?? [])
    : (listQuery.data?.pages.flat() ?? []);

  const uniqueRepositories = repositories;

  const totalCount = hasSearch
    ? (searchQuery.data?.pages[0]?.total_count ?? 0)
    : 0;

  const handleSearch = useCallback((value: string) => {
    setSearchInput(value);
  }, []);

  const handleSort = useCallback(
    (value: "stars" | "forks" | "updated") => {
      setSort(value);
    },
    [setSort],
  );

  const handleOrder = useCallback(
    (value: "asc" | "desc") => {
      setOrder(value);
    },
    [setOrder],
  );

  const loadMore = useCallback(() => {
    if (!hasNextPage || isFetchingNextPage) {
      return;
    };

    fetchNextPage();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    searchInput,
    setSearchInput,
    query,
    debouncedSearch,
    sort,
    order,
    per_page,
    repositories: uniqueRepositories,
    total_count: totalCount,
    isLoading: activeQuery.isLoading,
    isFetching: activeQuery.isFetching,
    isFetchingNextPage,
    isError: activeQuery.isError,
    error: activeQuery.error,
    hasNextPage: activeQuery.hasNextPage,
    handleSearch,
    handleSort,
    handleOrder,
    loadMore,
  };
};
