import type { GithubRepoDetail, GithubRepoItem } from "@/types/github";

export interface RepoCardProps {
  repo: GithubRepoItem;
  isFavorite?: boolean;
  onToggleFavorite?: (repo: GithubRepoItem) => void;
};

export interface RepositoryContentProps {
  repo: GithubRepoDetail;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
}
