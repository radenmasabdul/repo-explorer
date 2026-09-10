import { create } from "zustand";
import type { GithubRepoItem } from "@/types/github";

interface RepoState {
  query: string;
  sort: "stars" | "forks" | "updated";
  order: "asc" | "desc";
  page: number;
  per_page: number;

  items: GithubRepoItem[];
  total_count: number;

  status: "idle" | "loading" | "success" | "error";
  error_messages: string | null;

  setQuery: (query: string) => void;
  setSort: (sort: "stars" | "forks" | "updated") => void;
  setOrder: (order: "asc" | "desc") => void;
  setPage: (page: number) => void;

  setResult: (
    items: GithubRepoItem[],
    total_count: number,
    append?: boolean,
  ) => void;
  setStatus: (status: RepoState["status"]) => void;
  setError: (message: string) => void;
  reset: () => void;
};

const initialState = {
  query: "",
  sort: "stars" as const,
  order: "desc" as const,
  page: 1,
  per_page: 10,
  items: [],
  total_count: 0,
  status: "idle" as const,
  error_messages: null,
};

export const useRepoStore = create<RepoState>((set) => ({
  ...initialState,

  setQuery: (query) => set({ query, page: 1, items: [] }),
  setSort: (sort) => set({ sort, page: 1, items: [] }),
  setOrder: (order) => set({ order, page: 1, items: [] }),
  setPage: (page) => set({ page }),

  setResult: (items, total_count, append = false) =>
    set((state) => ({
      items: append ? [...state.items, ...items] : items,
      total_count,
    })),

  setStatus: (status) => set({ status, error_messages: null }),
  setError: (message) => set({ status: "error", error_messages: message }),
  reset: () => set(initialState),
}));