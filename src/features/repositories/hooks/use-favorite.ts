import { useFavoriteStore } from "@/stores/favorite-store";
import { useAlertStore } from "@/stores/alert-store";
import type { GithubRepoItem } from "@/types/github";

export function useFavorite(repo: GithubRepoItem) {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const favorites = useFavoriteStore((state) => state.favorites);
  const showAlert = useAlertStore((state) => state.showAlert);
  const isFavorite = favorites.some((favorite) => favorite.id === repo.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const wasFavorite = isFavorite;

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
