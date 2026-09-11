import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { GithubRepoItem } from "@/types/github";

interface FavoriteState {
  favorites: GithubRepoItem[];

  addFavorite: (repo: GithubRepoItem) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (repo: GithubRepoItem) => void;
  isFavorite: (id: number) => boolean;
};

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (repo) =>
        set((state) => ({
          favorites: [...state.favorites, repo],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((r) => r.id !== id),
        })),

      toggleFavorite: (repo) => {
        const exists = get().favorites.some((r) => r.id === repo.id);
        if (exists) {
          get().removeFavorite(repo.id);
        } else {
          get().addFavorite(repo);
        }
      },

      isFavorite: (id) => get().favorites.some((r) => r.id === id),
    }),
    { name: "favorite" }
  ),
);