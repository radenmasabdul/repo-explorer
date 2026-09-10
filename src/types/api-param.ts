export interface SearchRepoParams {
  q: string;
  sort?: "stars" | "forks" | "updated";
  order?: "asc" | "desc";
  page?: number;
  per_page?: number;
};

export interface DetailRepoParams {
  owner: string;
  repo: string;
};