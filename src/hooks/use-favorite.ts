import { useFavoriteStore } from "@/stores/favorite-store";
import { useAlertStore } from "@/stores/alert-store";
import type { GithubRepoItem } from "@/types/github";

export function useFavorite(repo: GithubRepoItem | null) {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const favorites = useFavoriteStore((state) => state.favorites);
  const showAlert = useAlertStore((state) => state.showAlert);
  const isFavorite = repo ? favorites.some((favorite) => favorite.id === repo.id) : false;

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const wasFavorite = isFavorite;

    if (!repo) return;
    toggleFavorite(repo);

    showAlert({
      variant: wasFavorite ? "info" : "success",
      title: wasFavorite
        ? `${repo.name} "Removed from favorites"`
        : `${repo.name} "Added to favorites"`,
    });
  };

  const handleFooterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return {
    isFavorite,
    handleToggleFavorite,
    handleFooterClick,
  };
};
