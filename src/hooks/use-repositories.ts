import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import type {
  GithubRepoDetail,
  GithubRepoItem,
  GithubSearchResponse,
} from "@/types/github";
import type {
  DetailRepoParams,
  SearchRepoParams,
  ListRepoParams,
} from "@/types/api-param";
import {
  fetchRepoDetail,
  fetchRepo,
  fetchSearchRepo,
} from "@/services/github-service";

export const useRepositories = (
  params: Omit<ListRepoParams, "since">,
  enabled = true,
) => {
  return useInfiniteQuery<GithubRepoItem[]>({
    queryKey: ["repositories", "list", params],

    queryFn: ({ pageParam }) =>
      fetchRepo({
        ...params,
        ...(pageParam ? { since: pageParam as number } : {}),
      }),

    initialPageParam: undefined as number | undefined,

    getNextPageParam: (lastPage) => {
      if (lastPage.length < params.per_page) {
        return undefined;
      }

      const lastRepo = lastPage[lastPage.length - 1];

      return lastRepo?.id;
    },

    enabled,
  });
};

export const useRepositoriesSearch = (
  params: Omit<SearchRepoParams, "page">,
  enabled = true,
) => {
  return useInfiniteQuery<GithubSearchResponse>({
    queryKey: ["repositories", "search", params],

    queryFn: ({ pageParam }) =>
      fetchSearchRepo({
        ...params,
        page: pageParam as number,
      }),

    initialPageParam: 1,

    getNextPageParam: (last_page, all_pages) => {
      const loadedItems = all_pages.reduce(
        (total, page) => total + page.items.length,
        0,
      );

      if (loadedItems >= last_page.total_count) {
        return undefined;
      };

      return all_pages.length + 1;
    },

    enabled,
  });
};

export const useRepositoryDetail = (
  params: DetailRepoParams
) => {
  return useQuery<GithubRepoDetail>({
    queryKey: ["repository", "detail", params],
    queryFn: () => fetchRepoDetail(params),
    enabled: !!params.owner && !!params.repo,
  });
};
