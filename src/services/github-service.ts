import apiClient from "./api-client";
import type { GithubSearchResponse, GithubRepoDetail } from "@/types/github";
import type { SearchRepoParams, DetailRepoParams } from "@/types/api-param";

export async function fetchRepos(
  params: SearchRepoParams,
): Promise<GithubSearchResponse> {
  const { data } = await apiClient.get<GithubSearchResponse>(
    "/search/repositories",
    { params },
  );

  return data;
};

export async function fetchRepoDetail(
  params: DetailRepoParams
): Promise<GithubRepoDetail> {
  const { data } = await apiClient.get<GithubRepoDetail>(
    `/repos/${params.owner}/${params.repo}`,
  );

  return data;
};