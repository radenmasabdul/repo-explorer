import type { GithubRepoItem } from "@/types/github";

export interface RepoCardProps {
  repo: GithubRepoItem;
  isFavorite?: boolean;
  onToggleFavorite?: (repo: GithubRepoItem) => void;
};
