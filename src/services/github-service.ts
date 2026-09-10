import apiClient from "./api-client";
import type {
  GithubSearchResponse,
  GithubRepoDetail,
  GithubRepoItem,
} from "@/types/github";
import type {
  SearchRepoParams,
  DetailRepoParams,
  ListRepoParams,
} from "@/types/api-param";

export async function fetchRepo(
  params: ListRepoParams,
): Promise<GithubRepoItem[]> {
  const { data } = await apiClient.get<GithubRepoItem[]>("/repositories", {
    params,
  });

  return data;
};

export async function fetchSearchRepo(
  params: SearchRepoParams,
): Promise<GithubSearchResponse> {
  const { data } = await apiClient.get<GithubSearchResponse>(
    "/search/repositories",
    { params },
  );

  return data;
};

export async function fetchRepoDetail(
  params: DetailRepoParams,
): Promise<GithubRepoDetail> {
  const { data } = await apiClient.get<GithubRepoDetail>(
    `/repos/${params.owner}/${params.repo}`,
  );

  return data;
};
