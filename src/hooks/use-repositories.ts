import { useQuery } from "@tanstack/react-query";
import type { GithubRepoDetail, GithubSearchResponse } from "@/types/github";
import type { DetailRepoParams, SearchRepoParams } from "@/types/api-param";
import { fetchRepoDetail, fetchRepos } from "@/services/github-service";

export const useRepositories = (params: SearchRepoParams) => {
  return useQuery<GithubSearchResponse>({
    queryKey: ["repositories", params],
    queryFn: () => fetchRepos(params),
  });
};

export const useRepositoryDetail = ({ owner, repo }: DetailRepoParams) => {
  return useQuery<GithubRepoDetail>({
    queryKey: ["repository", owner, repo],
    queryFn: () => fetchRepoDetail({ owner, repo }),
    enabled: !!owner && !!repo,
  });
};